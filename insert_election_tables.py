import os
import re
from bs4 import BeautifulSoup

# --- [설정] ---
MASTER_FILES = [
    "틀_9회지선_덕빈남도_선거구.html",
    "틀_9회지선_덕빈북도_선거구.html"
]
TARGET_DIR = "."

# [핵심] 기존 역대 표 스타일(anti-css...)은 절대 건드리지 않게, 완전 독립된 클래스명 부여
NINTH_ELECTION_STYLE = """
<style class="ninth-election-style-2026">
    .wiki-container .dist-wrapper { margin-bottom: 30px !important; border: 1px solid var(--wiki-border, #ccc) !important; border-radius: 4px !important; overflow: hidden !important; box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important; }
    .wiki-container .dist-title { display: flex !important; align-items: center !important; justify-content: center !important; background-color: var(--wiki-bg, #ffffff) !important; padding: 12px !important; border-bottom: 1px solid var(--wiki-border, #ccc) !important; font-weight: bold !important; font-size: 1.1rem !important; color: var(--wiki-text, #373a3c) !important; }
    .wiki-container .dist-table { width: 100% !important; border-collapse: collapse !important; text-align: center !important; font-size: 0.95rem !important; table-layout: fixed !important; margin: 0 !important; font-family: 'Noto Sans KR', sans-serif !important; }
    .wiki-container .dist-table th, .wiki-container .dist-table td { border: 1px solid var(--wiki-border, #ccc) !important; padding: 10px 4px !important; vertical-align: middle !important; word-break: keep-all !important; color: inherit; }
    .wiki-container .dist-table th { background-color: var(--dist-color) !important; color: var(--dist-text) !important; font-weight: bold !important; }
    .wiki-container .dist-table .na-col { background-color: var(--dist-color) !important; color: var(--dist-text) !important; font-weight: bold !important; font-size: 1.05rem !important; }
    .wiki-container .dist-table .region-cell { text-align: center !important; padding: 10px 15px !important; }
    [data-theme='dark'] .wiki-container .dist-table td, [data-theme='dark'] .wiki-container .dist-table th { border-color: #555 !important; }
    [data-theme='dark'] .wiki-container .dist-wrapper { border-color: #555 !important; }
    [data-theme='dark'] .wiki-container .dist-title { border-color: #555 !important; background-color: #121212 !important; color: #eeeeee !important; }
</style>
"""

def extract_snippets():
    snippets = {}
    for m_file in MASTER_FILES:
        if not os.path.exists(m_file): 
            continue
        with open(m_file, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")
        
        for h_tag in soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6"]):
            header_text = h_tag.get_text(strip=True)
            match = re.search(r'([가-힣]+(?:시|군|구))', header_text)
            if match:
                region = match.group(1)
                elements = []
                curr = h_tag.next_sibling
                while curr:
                    # 1) h1~h6 제목 태그를 만나면 다음 지역이므로 즉시 중단
                    if getattr(curr, 'name', None) in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
                        break
                    
                    # 2) [핵심 원인 차단] p, div, span 등 태그 종류와 무관하게 
                    # 텍스트가 30자 이내이고 "[15] 저천군", "15. 저천군" 등 다른 지자체 이름이 등장하면 칼같이 추출 중단!
                    text = curr.get_text(strip=True) if hasattr(curr, 'get_text') else str(curr).strip()
                    if text and len(text) <= 30:
                        m_other = re.search(r'^(?:\[\d+\]|\d+\.?)?\s*([가-힣]+(?:시|군|구))', text)
                        if m_other and m_other.group(1) != region:
                            break
                            
                    if str(curr).strip():
                        elements.append(str(curr))
                    curr = curr.next_sibling
                
                if elements:
                    snippets[region] = "".join(elements)
    return snippets

def bulletproof_inject():
    snippets = extract_snippets()
    if not snippets:
        print(">>> 마스터 파일에서 표를 추출하지 못했습니다.")
        return

    for filename in os.listdir(TARGET_DIR):
        if not filename.endswith(".html") or filename in MASTER_FILES: 
            continue
            
        region = filename.replace(".html", "")
        if region not in snippets: 
            continue
            
        filepath = os.path.join(TARGET_DIR, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        soup = BeautifulSoup(content, "html.parser")
        
        # --- [기존 스크립트가 남긴 쓰레기 완벽 청소] ---
        # 1. 이전에 삽입된 9회 지선 스타일 태그 삭제
        for old_style in soup.find_all("style", class_="ninth-election-style-2026"):
            old_style.decompose()

        # 2. 이전에 삽입된 9회 지선 표(dist-wrapper 또는 dist-table) 삭제
        for old_table in soup.find_all(["div", "table"], class_=["dist-wrapper", "dist-table"]):
            old_table.decompose()

        # 3. [핵심] 이전 스크립트가 마스터 파일에서 같이 끌고 와서 남겨버린 '[15] 저천군' 같은 목차/이동 링크 쓰레기 완벽 제거!
        for tag in soup.find_all(["p", "div", "span", "a", "h5", "h6"]):
            text = tag.get_text(strip=True)
            # "[15] 저천군", "[14] 약산시" 등 정확히 대괄호 숫자+지역명만 있는 쓰레기 태그 색출
            if text and re.match(r'^\[\d+\]\s*[가-힣]+(?:시|군|구)$', text):
                # 본문이나 목차(toc), 선거구 표 내부가 아닌 곳에 뜬금없이 붙은 쓰레기만 삭제
                if not tag.find_parent(class_=["toc", "election-table", "nav-box", "dist-wrapper"]):
                    tag.decompose()

        # --- [100% 확실한 12. 정치 문단 타겟팅 및 안전 삽입] ---
        heading = soup.find(lambda tag: tag.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] and tag.get_text() and '정치' in tag.get_text(strip=True))
        
        if not heading:
            for tag in soup.find_all(['div', 'p', 'span', 'li']):
                text = tag.get_text(strip=True)
                if text and len(text) <= 20 and '정치' in text:
                    if not tag.find_parent(class_=['toc', 'nav-box', 'infobox']):
                        heading = tag
                        break
        
        if heading:
            snippet_html = f"\n\n{NINTH_ELECTION_STYLE}\n{snippets[region]}\n\n"
            snippet_soup = BeautifulSoup(snippet_html, "html.parser")
            heading.insert_after(snippet_soup)
            
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(str(soup))
            print(f"  [갓벽 성공] {filename} : 쓰레기([15] 저천군 등) 제거 후 표를 깨끗이 꽂았습니다.")
        else:
            print(f"  [실패] {filename} : 파일 내에 '정치'라는 글자가 들어간 제목 태그가 아예 없습니다.")

if __name__ == "__main__":
    print(">>> (최종 속죄) 기존 색상 및 레이아웃 100% 보호! 9회 지선 표 안전 삽입 시작...")
    bulletproof_inject()
    print("\n>>> 모든 작업이 완료되었습니다.")