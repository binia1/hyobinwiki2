import pandas as pd
import requests
from bs4 import BeautifulSoup
import re
from urllib.parse import quote

# 1. 엑셀 파일 불러오기 (시장님이 작업 중인 진짜 원본 파일)
target_excel_file = "시군구_개별행정구역_문서_제작용.xlsx"
try:
    df = pd.read_excel(target_excel_file)
except Exception as e:
    print(f"엑셀 파일을 불러오는데 실패했습니다: {e}")
    exit()

# 2. 로컬 위키에서 긁어올 지역 목록
regions = [
    "강주시", "계성시", "군천시", "서진시", "서해시", "약산시", "전산시", 
    "기도군", "낭원군", "덕현군", "모제군", "반양군", "상안군", "선곡군", "저천군", "치원군",
    "가원구", "빈성구", "장기구", "낙주시", "방산시", "운진군", "마진시", 
    "매산군", "매성시", "석창군", "하정시", "관수군", "분주군", "곡천군", "인곡군", "원안군", 
    "두원군", "고포군", "덕산구", "조전구"
]

# 동/읍/면 별로 취소선 텍스트를 모아둘 딕셔너리
strikethrough_dict = {}

print("1단계: 위키에서 동/읍/면별로 취소선 발굴 중...")

for region in regions:
    url = f"http://localhost:8000/{quote(region)}.html"
    try:
        response = requests.get(url)
        response.encoding = 'utf-8'
        
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            
            current_dong = None
            
            # 문서 전체에서 제목 태그와 취소선 태그를 순서대로 탐색
            for element in soup.find_all(['h2', 'h3', 'h4', 'h5', 'del', 's', 'strike']):
                # 제목(동/읍/면 이름)을 만나면 현재 소속 갱신
                if element.name in ['h2', 'h3', 'h4', 'h5']:
                    title_text = element.get_text(strip=True)
                    match = re.search(r'([가-힣0-9·]+[동읍면])(?:[\s\(]|$)', title_text)
                    if match:
                        current_dong = match.group(1).strip()
                        if current_dong not in strikethrough_dict:
                            strikethrough_dict[current_dong] = []
                
                # 취소선 태그를 만나면 현재 소속된 동/읍/면 장바구니에 저장
                elif element.name in ['del', 's', 'strike']:
                    if current_dong:
                        phrase = element.get_text(strip=True)
                        if len(phrase) > 1: # 의미 없는 1글자짜리 찌꺼기 방지
                            strikethrough_dict[current_dong].append(f"~~{phrase}~~")
                            
    except Exception as e:
        print(f"[{region}] 에러 발생: {e}")

print("2단계: 엑셀 파일에 '취소선 원본' 열 추가 중...")

# 3. 엑셀의 '행정동/읍면' 열과 매칭하여 새로운 열(Column)에 취소선 내용 삽입
def get_strikethroughs(dong_name):
    if pd.isna(dong_name):
        return ""
    dong_name = str(dong_name).strip()
    
    # 딕셔너리에 해당 동/읍/면의 취소선이 있다면 줄바꿈으로 묶어서 반환
    if dong_name in strikethrough_dict and strikethrough_dict[dong_name]:
        return "\n".join(strikethrough_dict[dong_name])
    return ""

# '취소선_원본_추출'이라는 새 열을 만들고 데이터 꽂아넣기
df['취소선_원본_추출'] = df['행정동/읍면'].apply(get_strikethroughs)

# 4. 결과 저장
output_file = "시군구_개별행정구역_문서_제작용_취소선추가.xlsx"
df.to_excel(output_file, index=False)

print(f"\n작업 완료! 기존 엑셀 구조 그대로 유지한 채 맨 우측에 취소선 데이터가 추가된 '{output_file}' 파일이 생성되었습니다.")