import os
import json
import glob
from bs4 import BeautifulSoup

# 대상 경로
TARGET_FOLDER = "./wiki_pages/"
OUTPUT_DB = "hyobin_universe_db_v2.json"

def parse_full_structure(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    data = {
        "title": soup.title.get_text(strip=True).split('-')[0].strip(),
        "sections": {}
    }

    # 문서 전체에서 h2, h3 제목들을 순차적으로 순회
    # 제목 아래에 있는 모든 ul, table, p 태그를 해당 제목의 내용으로 자동 분류
    current_section = "개요(본문)" # 제목이 나오기 전 내용
    
    for element in soup.find_all(['h2', 'h3', 'ul', 'table', 'p']):
        if element.name in ['h2', 'h3']:
            current_section = element.get_text(strip=True)
            if current_section not in data["sections"]:
                data["sections"][current_section] = {"list": [], "table": [], "text": []}
        else:
            if current_section not in data["sections"]:
                data["sections"][current_section] = {"list": [], "table": [], "text": []}
            
            # 태그별 분류
            if element.name == 'ul':
                data["sections"][current_section]["list"].extend([li.get_text(strip=True) for li in element.find_all('li')])
            elif element.name == 'table':
                table_content = [[cell.get_text(strip=True) for cell in row.find_all(['td', 'th'])] for row in element.find_all('tr')]
                data["sections"][current_section]["table"].append(table_content)
            elif element.name == 'p':
                text = element.get_text(strip=True)
                if text:
                    data["sections"][current_section]["text"].append(text)

    return data

def run_extraction():
    files = glob.glob(os.path.join(TARGET_FOLDER, "*.html"))
    db = {}
    
    print(f"🚀 구조 분석 시작: {len(files)}개 파일")
    
    for file_path in files:
        filename = os.path.basename(file_path)
        try:
            db[filename] = parse_full_structure(file_path)
            print(f"✅ 추출 성공: {filename}")
        except Exception as e:
            print(f"❌ 추출 실패 ({filename}): {e}")

    with open(OUTPUT_DB, 'w', encoding='utf-8') as f:
        json.dump(db, f, ensure_ascii=False, indent=4)
        
    print(f"\n🎉 완료! '{OUTPUT_DB}' 파일에 문서 구조가 1:1로 복제되었습니다.")

if __name__ == "__main__":
    run_extraction()