import os
import re
from bs4 import BeautifulSoup

# --- [설정] ---
MASTER_FILE = "master.html"  # 원본 통합 파일 이름
TARGET_DIR = "."             # 현재 폴더

# [핵심] 기존 문서의 CSS 간섭을 완벽하게 차단하기 위한 강제(Override) 스타일
ANTI_CSS_STYLE = """
<style class="anti-css-council-style">
    .wiki-container .election-table { 
        width: 100% !important; 
        border-collapse: collapse !important; 
        text-align: center !important; 
        table-layout: fixed !important; 
        margin-bottom: 20px !important; 
        font-family: 'Noto Sans KR', sans-serif !important; 
        font-size: 0.95rem !important;
        background-color: transparent !important;
    }
    .wiki-container .election-table th, 
    .wiki-container .election-table td { 
        border: 1px solid #fff !important; 
        padding: 12px 4px !important; 
        vertical-align: middle !important; 
        word-break: keep-all !important; 
        color: inherit;
    }
    .wiki-container .election-table .term-row td { 
        color: #fff !important; 
        font-weight: bold !important; 
        font-size: 1.05rem !important; 
    }
    .wiki-container .election-table .party-row td { 
        color: #fff !important; 
        font-weight: bold !important; 
        font-size: 0.85rem !important; 
        letter-spacing: -0.5px !important; 
    }
    .wiki-container .election-table .name-row td { 
        background-color: #fff !important; 
        color: #1a5c9e !important; 
        font-weight: bold !important; 
        font-size: 1.1rem !important; 
        border-bottom: 2px solid #ccc !important; 
    }
    .wiki-container .result-note { 
        margin-top: 0 !important; 
        padding: 12px !important; 
        background-color: #f8f9fa !important; 
        border: 1px solid #ccc !important; 
        border-top: none !important; 
        font-size: 0.85rem !important; 
        color: #444 !important; 
        text-align: center !important; 
        line-height: 1.8 !important; 
    }
    
    /* 다크모드 대응 강제 지정 */
    [data-theme='dark'] .wiki-container .election-table th, 
    [data-theme='dark'] .wiki-container .election-table td { border-color: #222 !important; }
    [data-theme='dark'] .wiki-container .election-table .name-row td { background-color: #2d2f34 !important; color: #7cb1ff !important; border-bottom: 2px solid #555 !important; }
    [data-theme='dark'] .wiki-container .result-note { background-color: #25262a !important; border-color: #555 !important; color: #ccc !important; }
    .wiki-container .election-table .dark-text { color: #000 !important; }
</style>
"""

def extract_snippets_from_master():
    print(">>> 원본 통합 문서에서 각 지역별 표를 추출합니다...")
    if not os.path.exists(MASTER_FILE):
        print(f"[오류] {MASTER_FILE} 파일을 찾을 수 없습니다.")
        return {}

    with open(MASTER_FILE, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")
    
    snippets = {}
    
    divs = soup.find_all("div", style=lambda s: s and "border: 2px solid" in s)
    
    for div in divs:
        summary = div.find("summary")
        if summary:
            text = summary.get_text(strip=True)
            match = re.search(r'역대\s+([가-힣]+)(시장|군수)', text)
            if match:
                region_base = match.group(1)
                suffix = "시" if match.group(2) == "시장" else "군"
                region_name = region_base + suffix
                
                snippets[region_name] = ANTI_CSS_STYLE + str(div)
                print(f"  - [{region_name}] 표 추출 완료")
                
    return snippets

def inject_snippets_to_files(snippets):
    if not os.path.exists(TARGET_DIR):
        return

    print("\n>>> 기존 병신(...) 중복 데이터 청소 및 최신 1개 표 삽입 작업을 시작합니다...")
    
    for filename in os.listdir(TARGET_DIR):
        if not filename.endswith(".html") or filename == MASTER_FILE:
            continue
            
        region_name = filename.replace(".html", "")
        
        if region_name in snippets:
            filepath = os.path.join(TARGET_DIR, filename)
            
            with open(filepath, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")
            
            snippet_soup = BeautifulSoup(snippets[region_name], "html.parser")
            
            # --- [해결 로직] ---
            # 1. 찌꺼기 스타일 태그 전부 증발시킴
            for old_style in soup.find_all("style", class_="anti-css-council-style"):
                old_style.decompose()

            # 2. [가장 중요] 이전 버그 때문에 표가 2~3개씩 증식한 거 싹 다 찾아서 학살
            # string=regex 대신 get_text()를 써서 하위 태그가 있어도 무조건 잡아내게 수정함
            regex = re.compile(rf"역대\s+{region_name[:-1]}(시장|군수)")
            existing_summaries = soup.find_all(lambda tag: tag.name == "summary" and regex.search(tag.get_text()))
            
            for summary in existing_summaries:
                existing_div = summary.find_parent("div", style=lambda s: s and "border: 2px solid" in s)
                if existing_div:
                    existing_div.decompose() # 완전히 뜯어냄
            
            # 3. 깨끗해진 상태에서 '정치' 문단 찾아서 새 표를 "딱 1개만" 꽂아 넣음
            politics_heading = soup.find(lambda tag: tag.name in ['h2', 'h3', 'h4', 'h5', 'h6'] and '정치' in tag.get_text())
            
            if politics_heading:
                politics_heading.insert_after(snippet_soup)
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(str(soup))
                print(f"  [복구 완벽 성공] {filename} : 중복된 표들 싹 치우고 최신 표 1개만 깔끔하게 꽂았습니다!")
            else:
                print(f"  [실패] {filename} : 문서 내에 '정치' 문단이 존재하지 않습니다.")

if __name__ == "__main__":
    extracted_snippets = extract_snippets_from_master()
    
    if extracted_snippets:
        inject_snippets_to_files(extracted_snippets)
        print("\n>>> 중복 버그 해결 및 삽입 작업이 완료되었습니다!")
    else:
        print("\n>>> 추출된 표가 없습니다.")