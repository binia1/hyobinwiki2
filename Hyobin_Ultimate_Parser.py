import os
import json
import glob
from bs4 import BeautifulSoup

TARGET_FOLDER = "./wiki_pages/"
OUTPUT_DB = "hyobin_full_raw_db.json"

def recursive_parse(ul_element):
    """중첩된 계층(리, 가, 로)을 끝까지 파고들어 구조를 복제합니다."""
    hierarchy = {}
    for li in ul_element.find_all('li', recursive=False):
        text = li.get_text(strip=True).split(':')[0].strip()
        sub_ul = li.find('ul', recursive=False)
        if sub_ul:
            hierarchy[text] = recursive_parse(sub_ul)
        else:
            hierarchy[text] = None
    return hierarchy

def parse_full_document(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    data = {
        "title": soup.title.get_text(strip=True).split('-')[0].strip(),
        "infobox": {},
        "sections": {}
    }

    # 1. 인포박스
    infobox = soup.find('table', class_='infobox')
    if infobox:
        for row in infobox.find_all('tr'):
            th = row.find('th')
            td = row.find('td')
            if th and td:
                data["infobox"][th.get_text(strip=True)] = td.get_text(strip=True)

    # 2. 섹션 자동 파싱 (제목 불문, 모든 내용 보존)
    current_section = "기타_상세_없음"
    
    # h2, h3 제목을 만날 때마다 새로운 섹션을 생성합니다.
    # 제목이 무엇이든 상관없이 무조건 섹션으로 인정합니다.
    for element in soup.find_all(['h2', 'h3', 'ul', 'table', 'p']):
        if element.name in ['h2', 'h3']:
            current_section = element.get_text(strip=True)
            if current_section not in data["sections"]:
                data["sections"][current_section] = {"hierarchy": {}, "tables": [], "text": []}
        else:
            if current_section not in data["sections"]:
                data["sections"][current_section] = {"hierarchy": {}, "tables": [], "text": []}
            
            # 리스트는 계층 구조(hierarchy)로 파싱
            if element.name == 'ul':
                data["sections"][current_section]["hierarchy"] = recursive_parse(element)
            
            # 표는 원본 그대로 보존
            elif element.name == 'table':
                table_rows = [[c.get_text(strip=True) for c in row.find_all(['td', 'th'])] for row in element.find_all('tr')]
                data["sections"][current_section]["tables"].append(table_rows)
            
            # 문단은 텍스트로 보존
            elif element.name == 'p':
                text = element.get_text(strip=True)
                if text:
                    data["sections"][current_section]["text"].append(text)
    
    return data

def run_extraction():
    files = glob.glob(os.path.join(TARGET_FOLDER, "*.html"))
    db = {}
    print(f"🚀 사용자님 정의 구조 전수 분석 시작: {len(files)}개 파일")
    
    for file_path in files:
        try:
            db[os.path.basename(file_path)] = parse_full_document(file_path)
            print(f"✅ 추출 성공: {os.path.basename(file_path)}")
        except Exception as e:
            print(f"❌ 추출 실패: {e}")

    with open(OUTPUT_DB, 'w', encoding='utf-8') as f:
        json.dump(db, f, ensure_ascii=False, indent=4)
    print(f"\n🎉 완료! '{OUTPUT_DB}' 파일에 모든 정보가 1:1로 분류되었습니다.")

if __name__ == "__main__":
    run_extraction()