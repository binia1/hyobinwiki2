import os
import re
from bs4 import BeautifulSoup

# --- [설정] ---
# 실제 사용자님의 템플릿 파일 이름으로 완벽 매칭!
MASTER_FILES = [
    "틀_9회지선_덕빈남도_선거구.html",
    "틀_9회지선_효빈광역시_선거구.html",
    "틀_9회지선_덕빈북도_선거구.html"
]
TARGET_DIR = "."  # 개별 시/군/구 HTML 파일들이 위치한 현재 폴더

# [핵심] 기존 위키 문서의 CSS 간섭을 완벽하게 차단하는 강제(Override) 스타일
ANTI_CSS_STYLE = """
<style class="anti-css-council-style">
    /* 행정구역별 고유 색상 및 스타일 오버라이드 */
    .wiki-container .dist-wrapper { 
        margin-bottom: 30px !important; 
        border: 1px solid var(--wiki-border, #ccc) !important; 
        border-radius: 4px !important; 
        overflow: hidden !important; 
        box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important; 
    }
    .wiki-container .dist-title { 
        display: flex !important; 
        align-items: center !important; 
        justify-content: center !important; 
        background-color: var(--wiki-bg, #ffffff) !important; 
        padding: 12px !important; 
        border-bottom: 1px solid var(--wiki-border, #ccc) !important; 
        font-weight: bold !important; 
        font-size: 1.1rem !important; 
        color: var(--wiki-text, #373a3c) !important; 
    }
    .wiki-container .dist-table { 
        width: 100% !important; 
        border-collapse: collapse !important; 
        text-align: center !important; 
        font-size: 0.95rem !important; 
        table-layout: fixed !important; 
        margin: 0 !important;
        font-family: 'Noto Sans KR', sans-serif !important;
    }
    .wiki-container .dist-table th, 
    .wiki-container .dist-table td { 
        border: 1px solid var(--wiki-border, #ccc) !important; 
        padding: 10px 4px !important; 
        vertical-align: middle !important; 
        word-break: keep-all !important; 
        color: inherit;
    }
    .wiki-container .dist-table th { 
        background-color: var(--dist-color) !important; 
        color: var(--dist-text) !important; 
        font-weight: bold !important; 
    }
    .wiki-container .dist-table .na-col { 
        background-color: var(--dist-color) !important; 
        color: var(--dist-text) !important; 
        font-weight: bold !important; 
        font-size: 1.05rem !important; 
    }
    .wiki-container .dist-table .region-cell { 
        text-align: center !important; 
        padding: 10px 15px !important; 
    }
    
    /* 다크모드 대응 */
    [data-theme='dark'] .wiki-container .dist-table td,
    [data-theme='dark'] .wiki-container .dist-table th { border-color: #555 !important; }
    [data-theme='dark'] .wiki-container .dist-wrapper { border-color: #555 !important; }
    [data-theme='dark'] .wiki-container .dist-title { border-color: #555 !important; background-color: #121212 !important; color: #eeeeee !important; }
</style>
"""

def extract_snippets_from_masters():
    """제공된 마스터 파일들에서 각 시/군/구별 선거구 데이터(표+설명)를 추출합니다."""
    print(">>> 원본 통합 문서들에서 각 지역별 선거구 데이터를 추출합니다...")
    snippets = {}
    
    for master_file in MASTER_FILES:
        if not os.path.exists(master_file):
            print(f"  [건너뜀] {master_file} 파일을 찾을 수 없습니다.")
            continue
            
        print(f"\n  [파일 분석 중] {master_file}")
        with open(master_file, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")
        
        # h3 태그(예: "2.1. 고포군", "2.1. 중구")를 기준으로 지역명 추출
        h3_tags = soup.find_all("h3")
        for h3 in h3_tags:
            header_text = h3.get_text(strip=True)
            # "2.1. 고포군" -> "고포군", "2.1. 중구" -> "중구" 정확히 파싱
            match = re.search(r'\d+\.\d+\.\s*([가-힣]+(시|군|구))', header_text)
            if match:
                region_name = match.group(1)
                
                # h3 태그 다음부터 다음 h3 또는 h2가 나오기 전까지의 모든 요소를 수집 (게리맨더링 설명 박스 + 표)
                content_elements = []
                curr = h3.next_sibling
                while curr and curr.name not in ['h2', 'h3']:
                    if curr.name: # 태그가 존재하는 요소만 추가 (빈 문자열 등 제외)
                        content_elements.append(str(curr))
                    curr = curr.next_sibling
                
                if content_elements:
                    full_snippet = ANTI_CSS_STYLE + "\n" + "".join(content_elements)
                    snippets[region_name] = full_snippet
                    print(f"    - [{region_name}] 선거구 데이터 추출 완료")
                
    return snippets

def inject_snippets_to_files(snippets):
    """추출된 데이터를 개별 문서의 '정치' 문단에 완벽하게 삽입/교체합니다."""
    if not os.path.exists(TARGET_DIR):
        return

    print("\n>>> 기존 문서 데이터 청소 및 최신 선거구 표 삽입 작업을 시작합니다...")
    
    for filename in os.listdir(TARGET_DIR):
        if not filename.endswith(".html") or filename in MASTER_FILES:
            continue
            
        region_name = filename.replace(".html", "")
        
        # 추출된 데이터 중에 현재 파일명과 일치하는 지역이 있다면 작업 수행
        if region_name in snippets:
            filepath = os.path.join(TARGET_DIR, filename)
            
            with open(filepath, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")
            
            snippet_soup = BeautifulSoup(snippets[region_name], "html.parser")
            
            # --- [1단계: 기존 찌꺼기 및 중복 데이터 청소] ---
            # 1. 이전 작업으로 삽입된 스타일 태그 제거
            for old_style in soup.find_all("style", class_="anti-css-council-style"):
                old_style.decompose()

            # 2. 문서 내에 이미 존재하는 'dist-wrapper'(선거구 표 박스) 싹 다 제거 (중복 증식 방지)
            for old_wrapper in soup.find_all("div", class_="dist-wrapper"):
                old_wrapper.decompose()
            
            # 3. 표 위에 붙던 게리맨더링 설명 박스(bg-gray-50...) 등 찌꺼기도 함께 청소
            for old_notice in soup.find_all("div", class_=lambda c: c and "bg-gray-50" in c):
                if any(keyword in old_notice.get_text() for keyword in ["선거구", "갑구", "을구", "게리맨더링", "예외조항", "상한선", "하한선", "광역의원"]):
                    old_notice.decompose()

            # --- [2단계: '정치' 문단 찾아 타겟팅 삽입] ---
            # h2, h3, h4 등 제목 태그 중 '정치'라는 단어가 포함된 문단 탐색
            politics_heading = soup.find(lambda tag: tag.name in ['h2', 'h3', 'h4', 'h5', 'h6'] and '정치' in tag.get_text())
            
            if politics_heading:
                # 정치 문단 제목 바로 아래에 깔끔하게 새 코드 1세트 삽입
                politics_heading.insert_after(snippet_soup)
                
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(str(soup))
                print(f"  [성공] {filename} : 기존 중복 표 청소 및 '{region_name}' 최신 선거구 데이터 완벽 삽입!")
            else:
                print(f"  [건너뜀] {filename} : 문서 내에 '정치' 문단이 존재하지 않습니다.")

if __name__ == "__main__":
    extracted_data = extract_snippets_from_masters()
    
    if extracted_data:
        inject_snippets_to_files(extracted_data)
        print("\n>>> 모든 선거구 데이터의 오버라이드 및 삽입 작업이 완료되었습니다!")
    else:
        print("\n>>> 추출된 선거구 데이터가 없습니다. 마스터 파일 이름과 경로를 확인해 주세요.")