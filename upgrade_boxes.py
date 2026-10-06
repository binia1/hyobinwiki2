import os
import json
import re
from bs4 import BeautifulSoup

TARGET_REGIONS = [
"낙주시"
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
        print(f"[{region}] ⚠ 인포박스 구조를 찾을 수 없습니다.")
        continue

    region_data = {}

    # ==========================================
    # ★ [추가] 한자명 및 영문명 완벽 추출 로직 ★
    # ==========================================
    hanja_name = ""
    eng_name = ""
    
    # 1. 신형 디자인(<div class="infobox-name">)에서 찾기
    name_div = infobox.find(class_='infobox-name')
    if name_div:
        for text in name_div.stripped_strings:
            # 텍스트에 한자가 포함된 경우
            if re.search(r'[一-龥]', text):
                if '/' in text: # "東區 / DONG-GU" 형태
                    parts = text.split('/')
                    hanja_name = parts[0].strip()
                    eng_name = parts[1].strip()
                else:
                    hanja_name = text.strip()
            # 텍스트가 순수 영문인 경우
            elif re.search(r'[A-Za-z]', text) and not eng_name:
                eng_name = text.strip()

    # 2. 구형 테이블 디자인이거나 위에서 못 찾은 경우 정규식으로 전체 텍스트 긁기
    if not hanja_name or not eng_name:
        full_text = infobox.get_text(separator=' ')
        if not hanja_name:
            hanja_match = re.search(r'([一-龥]{2,})', full_text)
            if hanja_match:
                hanja_name = hanja_match.group(1)
        if not eng_name:
            eng_match = re.search(r'([A-Za-z\s\-]+(?:gu|si|gun|do))', full_text, re.IGNORECASE)
            if eng_match:
                eng_name = eng_match.group(1).strip()

    # 추출한 값 저장 (못 찾았을 경우 기본값 세팅)
    region_data["한자명"] = hanja_name if hanja_name else "漢字"
    region_data["영문명"] = eng_name if eng_name else "Eng-Name"
    # ==========================================

    # 기존 인포박스 내부 표 추출
    main_table = infobox if infobox.name == 'table' else infobox.find('table')
    if main_table:
        tbody = main_table.find('tbody')
        rows = tbody.find_all('tr', recursive=False) if tbody else main_table.find_all('tr', recursive=False)
        
        last_key = None
        for tr in rows:
            ths = tr.find_all('th', recursive=False)
            tds = tr.find_all('td', recursive=False)
            
            if ths:
                key = " ".join([th.get_text(strip=True) for th in ths])
                val_html = " | ".join([td.decode_contents().strip() for td in tds])
                region_data[key] = val_html
                last_key = key
            elif tds and last_key:
                val_html = " | ".join([td.decode_contents().strip() for td in tds])
                region_data[last_key] += "<br>" + val_html
                
    result_data[region] = region_data
    print(f"[{region}] ✅ 한자/영문 포함 추출 완료 ({region_data['한자명']} / {region_data['영문명']})")

with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    json.dump(result_data, f, ensure_ascii=False, indent=4)

print(f"\n🎉 작업 완료! '{OUTPUT_FILE}'을 확인해 보세요.")