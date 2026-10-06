import os
import json
from bs4 import BeautifulSoup

TARGET_REGIONS = [
    "덕주시", "조전구", "덕산구", "방산시", "마진시", "운진군", "매산군", "매성시",
    "비천시", "석창군", "하정시", "관수군", "분주군", "곡천군", "인곡군", "원안군",
    "두원군", "고포군", "서해시", "장기구", "약산시", "가원구", "천성구", "강주시",
    "천주시", "궁하구", "군천시", "빈주시", "빈성구", "계성시", "낭원군", "서진시",
    "전산시", "기도군", "선곡군", "덕현군", "상안군", "저천군", "반양군", "치원군",
    "모제군", "청엽구", "안천구", "남구", "창전구", "서구", "탄성군", "동구", "중구"
]

OUTPUT_FILE = "extracted_infobox_data.json"
result_data = {}

for region in TARGET_REGIONS:
    filename = f"{region}.html"
    if not os.path.exists(filename):
        print(f"[{region}] ❌ 파일 없음")
        continue
        
    with open(filename, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
        
    infobox = soup.find('aside', class_='infobox')
    if not infobox:
        infobox = soup.find('table', style=lambda s: s and 'float: right' in s)
        
    if not infobox:
        print(f"[{region}] ⚠️️ 인포박스 구조를 찾을 수 없습니다.")
        continue
        
    # 인포박스 내부의 메인 테이블 추출
    main_table = infobox if infobox.name == 'table' else infobox.find('table')
    if not main_table:
        continue
        
    tbody = main_table.find('tbody')
    
    # 핵심 1: recursive=False를 써서 표 내부의 '접기/펼치기 표'가 개별 줄로 인식되어 꼬이는 것을 방지
    rows = tbody.find_all('tr', recursive=False) if tbody else main_table.find_all('tr', recursive=False)
    
    region_data = {}
    last_key = None
    
    for tr in rows:
        ths = tr.find_all('th', recursive=False)
        tds = tr.find_all('td', recursive=False)
        
        if ths:
            # 항목명(th)이 있는 정상적인 줄
            key = " ".join([th.get_text(strip=True) for th in ths])
            
            # 값이 여러 칸으로 나뉘어 있을 경우 (예: <td>민주당</td> <td>6석</td>) 파이프(|)로 묶음
            val_html = " | ".join([td.decode_contents().strip() for td in tds])
            region_data[key] = val_html
            last_key = key
            
        elif tds and last_key:
            # 핵심 2: th 없이 td만 있는 줄 (rowspan으로 병합된 다당제 의석수 등)
            val_html = " | ".join([td.decode_contents().strip() for td in tds])
            
            # 이전 항목(예: '구의회')에 줄바꿈(<br>)으로 계속 이어붙여서 누락 방지
            region_data[last_key] += "<br>" + val_html
            
    result_data[region] = region_data
    print(f"[{region}] ✅ 추출 완료")

with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    json.dump(result_data, f, ensure_ascii=False, indent=4)

print(f"\n🎉 작업 완료! '{OUTPUT_FILE}'을 확인해 보세요.")