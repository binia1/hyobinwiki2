import requests
from bs4 import BeautifulSoup
import pandas as pd
import re
from urllib.parse import quote

# 1. 전체 시군구 및 일반구 파일명 (총 38개)
regions = [
    # 덕빈북도
    "강주시", "계성시", "군천시", "서진시", "서해시", "약산시", "전산시", 
    "기도군", "낭원군", "덕현군", "모제군", "반양군", "상안군", "선곡군", "저천군", "치원군",
    "가원구", "빈성구", "장기구", "궁하구", "천성구",
    # 덕빈남도
    "낙주시", "방산시", "운진군", "마진시", "매산군", "매성시", "석창군", "하정시", 
    "관수군", "분주군", "곡천군", "인곡군", "원안군", "두원군", "고포군",
    "덕산구", "조전구"
]

all_data = []

for region in regions:
    url = f"http://localhost:8000/{quote(region)}.html"
    try:
        response = requests.get(url)
        response.encoding = 'utf-8' 
        if response.status_code != 200: 
            print(f"[{region}] 파일을 찾을 수 없습니다. (에러 404)")
            continue
            
        soup = BeautifulSoup(response.text, 'html.parser')
        
        in_target_section = False  # 하위 행정구역 섹션 추적
        
        # h2, h3, h4, h5 태그 탐색
        for header in soup.find_all(['h2', 'h3', 'h4', 'h5']):
            title_text = header.get_text(strip=True)
            
            # h2 태그로 "14. 하위 행정구역" 진입 확인
            if header.name == 'h2':
                if "하위" in title_text or "행정구역" in title_text or "행정동" in title_text:
                    in_target_section = True
                else:
                    in_target_section = False
                continue
                
            # 타겟 섹션 밖의 요소는 무조건 패스 (4. 역사 문단 완벽 차단)
            if not in_target_section:
                continue

            # [핵심 필터링] "구 계성읍 관할" 같은 과거/그룹핑 제목은 완벽 차단!
            # '구 ' (띄어쓰기 포함)로 지정하여 '종상동 짬뽕 구역'의 '구역'은 안전하게 살림
            if re.search(r'(구\s+|관할|편입|폐지|출장소|행정구역별|변천사|통폐합|행정동\s*제도|연표)', title_text):
                continue

            # 동/읍/면 이름 추출 (종상동, 낭원읍 등)
            match = re.search(r'([가-힣0-9·]+[동읍면])(?:[\s\(]|$)', title_text)
            if not match: 
                continue
            
            dong_name = match.group(1).strip()
            
            # 단순 분류용 단어 필터링
            if dong_name in ["행정동", "법정동", "하위행정구역", "행정구역", "관할법정동", "법정리", "행정리"]: 
                continue
            
            data_dict = {
                "파일명(시군구)": region,
                "행정동/읍면": dong_name,
                "인구": "",
                "관할법정동": "",
                "설명_특성_변천사": "",
                "상권_특이사항": "",
                "교육기관(학교)": "",
                "교통_및_주요시설": ""
            }
            
            # 내용 파싱 시작
            curr = header.find_next_sibling()
            ul_tags = []
            p_tags = []
            table_tag = None
            
            while curr:
                # 다음 제목 태그(h2~h5)를 만나면 탐색 종료
                if curr.name in ['h2', 'h3', 'h4', 'h5']: 
                    break 
                
                if curr.name: 
                    if curr.name == 'ul':
                        ul_tags.append(curr)
                    else:
                        ul_tags.extend(curr.find_all('ul'))
                    
                    if curr.name == 'p':
                        p_tags.append(curr)
                    else:
                        p_tags.extend(curr.find_all('p'))
                    
                    if curr.name == 'table':
                        if '인구 현황' in curr.get_text() or '법정리' in curr.get_text() or '법정동' in curr.get_text():
                            table_tag = curr
                    else:
                        found_tables = curr.find_all('table')
                        for tbl in found_tables:
                            if '인구 현황' in tbl.get_text() or '법정리' in tbl.get_text() or '법정동' in tbl.get_text():
                                table_tag = tbl
                                break
                                
                curr = curr.find_next_sibling()
                
            # 알맹이가 없으면 스킵
            if not ul_tags and not p_tags: 
                continue
                
            # 정보 추출 (ul/li 파싱)
            for ul in ul_tags:
                for li in ul.find_all('li', recursive=False):
                    text = li.get_text(separator=" ", strip=True)
                    
                    if "인구:" in text[:10] or "인구 :" in text[:10]:
                        data_dict["인구"] = text.split(":", 1)[-1].strip()
                    elif "관할 법정" in text or "관할법정" in text:
                        data_dict["관할법정동"] = text.split(":", 1)[-1].strip()
                    elif "설명:" in text or "상세:" in text or "특징:" in text:
                        data_dict["설명_특성_변천사"] += text.split(":", 1)[-1].strip() + "\n\n"
                    elif "상권" in text or "대형마트" in text:
                        data_dict["상권_특이사항"] += text + "\n"
                    elif "교육기관:" in text or "교육 시설:" in text or "교육시설:" in text:
                        data_dict["교육기관(학교)"] = text.split(":", 1)[-1].strip()
                    elif "주요 시설:" in text or "교통시설:" in text or "교통:" in text or "주요시설:" in text:
                        data_dict["교통_및_주요시설"] += text + "\n"

            # p 태그 내용 추가 (영혼이 담긴 디테일 서술)
            for p in p_tags:
                p_text = p.get_text(separator=" ", strip=True)
                if p_text:
                    data_dict["설명_특성_변천사"] += p_text + "\n\n"

            # 테이블 세부인구 추출
            if table_tag:
                tds = table_tag.find_all(['td', 'th'])
                pop_list = []
                for i in range(len(tds)-1):
                    val1 = tds[i].get_text(strip=True)
                    val2 = tds[i+1].get_text(strip=True)
                    if re.match(r'^[가-힣0-9]+[동리]$', val1) and re.match(r'^[0-9,]+$', val2):
                        pop_list.append(f"{val1}({val2})")
                
                if pop_list:
                    pop_list = list(dict.fromkeys(pop_list)) # 중복 제거
                    data_dict["관할법정동"] += "\n[세부인구] " + ", ".join(pop_list)
            
            for key in data_dict:
                data_dict[key] = data_dict[key].strip()

            all_data.append(data_dict)
            
        print(f"[{region}] 완벽 추출 완료! (폐지 지명 및 계성읍 차단)")
        
    except Exception as e:
        print(f"[{region}] 오류 발생: {e}")

# 3. 엑셀 저장
df = pd.DataFrame(all_data)
file_path = '덕빈남북_전체_최종완벽_추출_2.xlsx'

with pd.ExcelWriter(file_path, engine='xlsxwriter') as writer:
    df.to_excel(writer, index=False, sheet_name='행정구역 통합 데이터')
    workbook  = writer.book
    worksheet = writer.sheets['행정구역 통합 데이터']
    
    wrap_format = workbook.add_format({'text_wrap': True, 'valign': 'top'})
    header_format = workbook.add_format({'bold': True, 'bg_color': '#D9D9D9', 'border': 1, 'align': 'center'})
    
    for col_num, value in enumerate(df.columns.values):
        worksheet.write(0, col_num, value, header_format)
    
    worksheet.set_column('A:B', 15, wrap_format)
    worksheet.set_column('C:C', 18, wrap_format)
    worksheet.set_column('D:D', 40, wrap_format)
    worksheet.set_column('E:E', 80, wrap_format) 
    worksheet.set_column('F:F', 40, wrap_format)
    worksheet.set_column('G:H', 35, wrap_format)

print(f"\n모든 작업이 완료되었습니다. 현재 폴더에 재생성된 '{file_path}' 파일을 확인해 주세요.")