import os
from bs4 import BeautifulSoup

# 1. 파일 및 폴더 설정
ALL_POP_HTML_FILE = "전체인구.html"  # 덕빈남도, 덕빈북도 표가 모두 들어있는 파일
TARGET_FOLDER = "./"               # 시군구 html 문서들이 있는 폴더

def update_wiki_population():
    if not os.path.exists(ALL_POP_HTML_FILE):
        print(f"❌ {ALL_POP_HTML_FILE} 파일을 찾을 수 없습니다.")
        return

    print(f"📥 [{ALL_POP_HTML_FILE}] 파일에서 표 데이터를 자동 추출합니다...")
    
    with open(ALL_POP_HTML_FILE, 'r', encoding='utf-8') as f:
        source_soup = BeautifulSoup(f, 'html.parser')
        
    tables_dict = {}
    
    # [수정된 핵심 로직] 덕빈남도, 덕빈북도 모두 호환되게 처리
    for span in source_soup.find_all('span'):
        text = span.get_text(strip=True)
        # 텍스트에 '인구 추이'라는 글자가 있으면 무조건 캐치
        if "인구 추이" in text:
            # 덕빈북도, 덕빈남도, 효빈광역시, 인구 추이 글자를 싹 지우고 순수 "지역명"만 남김
            region_name = text.replace("덕빈북도", "").replace("덕빈남도", "").replace("효빈광역시", "").replace("인구 추이", "").strip()
            
            # 혹시라도 빈 문자열이면 스킵
            if not region_name:
                continue
            
            # span 태그에서 위로 3칸 올라가면 가장 바깥쪽 표 컨테이너 div
            outer_div = span.parent.parent.parent
            
            # 파이썬이 강제로 덮어쓰기용 ID 주입
            chart_id = f"pop-chart-{region_name}"
            outer_div['id'] = chart_id
            
            tables_dict[region_name] = str(outer_div)

    print(f"✅ 총 {len(tables_dict)}개 지역의 표 코드를 완벽하게 추출했습니다!\n")
    
    if len(tables_dict) == 0:
        print("❌ 표 추출 실패! HTML 구조가 맞지 않거나 '인구 추이' 텍스트를 찾을 수 없습니다.")
        return

    # [3단계] 각 문서 탐색 및 지능형 삽입/교체/건너뛰기
    for region, table_html in tables_dict.items():
        file_path = os.path.join(TARGET_FOLDER, f"{region}.html")
        
        if not os.path.exists(file_path):
            print(f"⚠️ 건너뜀: {region}.html 문서가 존재하지 않습니다.")
            continue
            
        print(f"🔄 처리 중: {region}.html")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')
        except UnicodeDecodeError:
            with open(file_path, 'r', encoding='cp949') as f:
                soup = BeautifulSoup(f, 'html.parser')
                
        # h2~h5 태그 중 '인구' 포함된 태그 찾기
        target_heading = soup.find(lambda tag: tag.name in ['h2', 'h3', 'h4', 'h5'] and '인구' in tag.text)
        
        if target_heading:
            chart_id = f"pop-chart-{region}"
            old_chart = soup.find('div', id=chart_id)
            new_chart_soup = BeautifulSoup(table_html, 'html.parser')
            
            # 이미 완전히 동일한 코드가 있다면 파일 덮어쓰지 않고 패스
            if old_chart and str(old_chart) == str(new_chart_soup):
                print(f"   ⏩ 건너뜀: 이미 완전히 동일한 표가 적용되어 있습니다.")
                continue 
                
            # 코드가 다르면 교체, 없으면 새로 삽입
            if old_chart:
                old_chart.replace_with(new_chart_soup)
                action_text = "교체"
            else:
                target_heading.insert_after(new_chart_soup)
                action_text = "삽입"
                
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(str(soup))
            print(f"   👉 성공! '{target_heading.text.strip()}' 문단 아래에 표 {action_text} 완료.")
        else:
            print(f"   ❌ 실패: {region}.html 안에 '인구' 제목(h2~h5)이 없습니다.")

if __name__ == "__main__":
    update_wiki_population()