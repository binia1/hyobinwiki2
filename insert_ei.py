import os
import re
from bs4 import BeautifulSoup

# --- [설정] ---
MASTER_FILES = [
    "틀_덕빈북도_역대_국회의원_시.html",
    "틀_덕빈북도_역대_국회의원_군.html",
    "틀_덕빈남도_역대_국회의원_시.html",
    "틀_덕빈남도_역대_국회의원_군.html"
]
TARGET_DIR = "."  # 시·군 개별 문서들이 위치한 현재 폴더

# [핵심] 기존 문서의 CSS 간섭 차단 및 **모든 정당 색상 100% 강제 적용** (가장 중요)
ANTI_CSS_STYLE = """
<style class="anti-css-council-style">
    .wiki-container .election-table { 
        width: 100% !important; 
        border-collapse: collapse !important; 
        text-align: center !important; 
        table-layout: fixed !important; 
        margin-bottom: 20px !important; 
        font-family: 'Noto Sans KR', sans-serif !important; 
        font-size: 0.9rem !important;
        background-color: transparent !important;
        border: 2px solid #aaa !important;
    }
    .wiki-container .election-table th, 
    .wiki-container .election-table td { 
        border: 1px solid #ccc !important; 
        padding: 6px 4px !important; 
        vertical-align: middle !important; 
        word-break: keep-all !important; 
        color: inherit;
    }

    /* --- [긴급 복구] 시장/군수 표 전용 클래스 (절대 삭제 금지) --- */
    .wiki-container .election-table .term-row td { color: #fff !important; font-weight: bold !important; font-size: 1.05rem !important; }
    .wiki-container .election-table .party-row td { color: #fff !important; font-weight: bold !important; font-size: 0.85rem !important; letter-spacing: -0.5px !important; }
    .wiki-container .election-table .name-row td { background-color: #fff !important; color: #1a5c9e !important; font-weight: bold !important; font-size: 1.1rem !important; border-bottom: 2px solid #ccc !important; }
    .wiki-container .result-note { margin-top: 0 !important; padding: 12px !important; background-color: #f8f9fa !important; border: 1px solid #ccc !important; border-top: none !important; font-size: 0.85rem !important; color: #444 !important; text-align: center !important; line-height: 1.8 !important; }

    /* 대수 및 선거구 셀 스타일 고정 */
    .wiki-container .election-table .daesu { 
        background-color: #f1f5f9 !important; 
        color: #333 !important; 
        font-weight: bold !important; 
        width: 70px !important; 
    }
    .wiki-container .election-table .district-header,
    .wiki-container .election-table .district { 
        background-color: #ffffff !important; 
        color: #005CB9 !important; 
        font-weight: bold !important; 
    }

    /* --- [정당 색상 완벽 강제 주입 (절대 안 깨짐)] --- */
    .bg-대한독립촉성국민회, .bg-dokchok { background-color: #1271B5 !important; color: white !important; }
    .bg-한국민주당, .bg-minju-korea { background-color: #008000 !important; color: white !important; }
    .bg-대동청년단, .bg-daedong { background-color: #27176F !important; color: white !important; }
    .bg-대한독립촉성노동총연맹 { background-color: #00A495 !important; color: white !important; }
    .bg-대한청년단 { background-color: #DA251D !important; color: white !important; }
    .bg-남조선로동당 { background-color: #FF0000 !important; color: white !important; }
    .bg-민주국민당1949, .bg-minkook { background-color: #ADFF2F !important; color: black !important; }
    .bg-대한국민당 { background-color: #0087BD !important; color: white !important; }
    .bg-일민구락부, .bg-ilmin { background-color: #C0C0FF !important; color: black !important; }
    .bg-사회당 { background-color: #E63E62 !important; color: white !important; }
    .bg-한국독립당1963 { background-color: #113DA6 !important; color: white !important; }
    .bg-자유당, .bg-jayu { background-color: #254170 !important; color: white !important; }
    .bg-민주당1955, .bg-minju-55, .bg-민주당 { background-color: #000080 !important; color: white !important; }
    .bg-민주공화당, .bg-mingong { background-color: #835B38 !important; color: white !important; }
    .bg-민정당, .bg-minjung-63 { background-color: #FFD700 !important; color: black !important; }
    .bg-민주당1963 { background-color: #332B43 !important; color: white !important; }
    .bg-자유민주당1963 { background-color: #005848 !important; color: white !important; }
    .bg-국민의당1963 { background-color: #C2C247 !important; color: black !important; }
    .bg-신민회 { background-color: #3366FF !important; color: white !important; }
    .bg-신흥당 { background-color: #005099 !important; color: white !important; }
    .bg-한국독립당 { background-color: #113DA6 !important; color: white !important; }
    .bg-정민회 { background-color: #4B0080 !important; color: white !important; }
    .bg-추풍회 { background-color: #C78665 !important; color: white !important; }
    .bg-신민당, .bg-shinmin { background-color: #DC352A !important; color: white !important; }
    .bg-대중당 { background-color: #3069A5 !important; color: white !important; }
    .bg-민중당1967 { background-color: #FFD2AD !important; color: black !important; }
    .bg-정의당1967 { background-color: #350887 !important; color: white !important; }
    .bg-자민당 { background-color: #88C8C8 !important; color: black !important; }
    .bg-통한당 { background-color: #312F2A !important; color: white !important; }
    .bg-통일사회당 { background-color: #104D8E !important; color: white !important; }
    .bg-민주당1967 { background-color: #9ACD32 !important; color: black !important; }
    .bg-반제민족민주전선 { background-color: #007FFF !important; color: white !important; }
    .bg-국민당1971 { background-color: #00AF89 !important; color: white !important; }
    .bg-민주통일당 { background-color: #FAC813 !important; color: black !important; }
    .bg-민주정의당, .bg-minjeong { background-color: #0A84E9 !important; color: white !important; }
    .bg-민주한국당, .bg-minhan { background-color: #ED2939 !important; color: white !important; }
    .bg-한국국민당, .bg-kookmin-81 { background-color: #498C00 !important; color: white !important; }
    .bg-민주사회당 { background-color: #FF8201 !important; color: white !important; }
    .bg-신정당 { background-color: #4697B2 !important; color: white !important; }
    .bg-민주농민당 { background-color: #A52A2A !important; color: white !important; }
    .bg-원일민립당 { background-color: #E0E0E0 !important; color: black !important; }
    .bg-신한민주당, .bg-shinhan { background-color: #E6573B !important; color: white !important; }
    .bg-신정사회당 { background-color: #FF4500 !important; color: white !important; }
    .bg-신민주당 { background-color: #189868 !important; color: white !important; }
    .bg-평화민주당, .bg-pyeongmin { background-color: #FADA5E !important; color: black !important; }
    .bg-통일민주당, .bg-tongmin { background-color: #E60026 !important; color: white !important; }
    .bg-신민주공화당, .bg-shinmingong { background-color: #59955E !important; color: white !important; }
    .bg-한겨레민주당 { background-color: #FF7F50 !important; color: white !important; }
    .bg-민주자유당, .bg-minja { background-color: #003990 !important; color: white !important; }
    .bg-민주당1991, .bg-minju-91, .bg-통합민주당1995 { background-color: #009D68 !important; color: white !important; }
    .bg-통일국민당, .bg-tongkook { background-color: #22B14C !important; color: white !important; }
    .bg-민중당1990 { background-color: #FFA500 !important; color: black !important; }
    .bg-신정치개혁당 { background-color: #101299 !important; color: white !important; }
    .bg-신민당1994 { background-color: #3D9069 !important; color: white !important; }
    .bg-무정파전국연합 { background-color: #FF6699 !important; color: white !important; }
    .bg-무당파국민연합 { background-color: #5290DB !important; color: white !important; }
    .bg-신한국당, .bg-shinhangook { background-color: #003990 !important; color: white !important; }
    .bg-새정치국민회의, .bg-kookminhoeui { background-color: #009A44 !important; color: white !important; }
    .bg-자유민주연합, .bg-jamin { background-color: #1B5B40 !important; color: white !important; }
    .bg-한나라당, .bg-hannara, .bg-한나라당2012, .bg-한나라당2013 { background-color: #0095DA !important; color: white !important; }
    .bg-국민신당 { background-color: #336C77 !important; color: white !important; }
    .bg-건설국민승리21 { background-color: #FF3D00 !important; color: white !important; }
    .bg-새천년민주당, .bg-saecheon { background-color: #00AA7B !important; color: white !important; }
    .bg-민주국민당2000 { background-color: #353F9C !important; color: white !important; }
    .bg-희망의한국신당 { background-color: #283C7B !important; color: white !important; }
    .bg-하나로국민연합 { background-color: #215AA6 !important; color: white !important; }
    .bg-개혁국민정당 { background-color: #4CBB17 !important; color: white !important; }
    .bg-녹색평화당 { background-color: #4EB233 !important; color: white !important; }
    .bg-한국사회민주당 { background-color: #0080FF !important; color: white !important; }
    .bg-녹색사민당 { background-color: #51B749 !important; color: white !important; }
    .bg-열린우리당, .bg-yeollin { background-color: #FFD700 !important; color: black !important; }
    .bg-민주노동당 { background-color: #EE7700 !important; color: white !important; }
    .bg-국민통합21 { background-color: #4F689A !important; color: white !important; }
    .bg-대통합민주신당 { background-color: #FF7F00 !important; color: white !important; }
    .bg-국민중심당 { background-color: #E85298 !important; color: white !important; }
    .bg-중도통합민주당 { background-color: #F7C517 !important; color: black !important; }
    .bg-통합민주당, .bg-통합민주당2008, .bg-tongmin-08 { background-color: #04972D !important; color: white !important; }
    .bg-자유선진당 { background-color: #00529C !important; color: white !important; }
    .bg-친박연대, .bg-친박연대2012 { background-color: #0C449B !important; color: white !important; }
    .bg-시민통합당 { background-color: #F7B618 !important; color: black !important; }
    .bg-창조한국당 { background-color: #B30000 !important; color: white !important; }
    .bg-진보신당 { background-color: #DC143C !important; color: white !important; }
    .bg-국민참여당 { background-color: #FCCA00 !important; color: black !important; }
    .bg-가자대국민중심당 { background-color: #1A2C8E !important; color: white !important; }
    .bg-국민중심연합 { background-color: #E85298 !important; color: white !important; }
    .bg-국민생각 { background-color: #F5821F !important; color: white !important; }
    .bg-미래연합 { background-color: #264280 !important; color: white !important; }
    .bg-대한국당 { background-color: #005FB1 !important; color: white !important; }
    .bg-정통민주당 { background-color: #FEDD02 !important; color: black !important; }
    .bg-청년당 { background-color: #F47920 !important; color: white !important; }
    .bg-새누리당, .bg-saenuri { background-color: #C9252B !important; color: white !important; }
    .bg-민주통합당, .bg-mintong { background-color: #FFD400 !important; color: black !important; }
    .bg-통합진보당, .bg-tongjin { background-color: #782B90 !important; color: white !important; }
    .bg-진보정의당 { background-color: #FF007F !important; color: white !important; }
    .bg-국민의당, .bg-kookmin-dang { background-color: #006241 !important; color: white !important; }
    .bg-정의당 { background-color: #FFED00 !important; color: black !important; }
    .bg-새정치연합 { background-color: #00CCFF !important; color: black !important; }
    .bg-새정치민주연합 { background-color: #0082CD !important; color: white !important; }
    .bg-더불어민주당, .bg-theminju { background-color: #003B96 !important; color: white !important; }
    .bg-자유한국당 { background-color: #C9151E !important; color: white !important; }
    .bg-바른정당 { background-color: #00B1EB !important; color: white !important; }
    .bg-미래통합당, .bg-miraetong { background-color: #EF426F !important; color: white !important; }
    .bg-국민의힘, .bg-kookminhim { background-color: #E61E2B !important; color: white !important; }
    .bg-진보당, .bg-jinbo { background-color: #D6001C !important; color: white !important; }
    .bg-무소속, .bg-musosok { background-color: #808080 !important; color: white !important; }
    
    /* 다크모드 대응 강제 지정 */
    [data-theme='dark'] .wiki-container .election-table th, 
    [data-theme='dark'] .wiki-container .election-table td { border-color: #444 !important; }
    [data-theme='dark'] .wiki-container .election-table .name-row td { background-color: #2d2f34 !important; color: #7cb1ff !important; border-bottom: 2px solid #555 !important; }
    [data-theme='dark'] .wiki-container .result-note { background-color: #25262a !important; border-color: #555 !important; color: #ccc !important; }
    [data-theme='dark'] .wiki-container .election-table .daesu,
    [data-theme='dark'] .wiki-container .election-table .district-header,
    [data-theme='dark'] .wiki-container .election-table .district { 
        background-color: #2d2f34 !important; 
        color: #7cb1ff !important; 
    }
</style>
"""

def extract_snippets_from_master():
    print(">>> 4개의 원본 통합 문서에서 각 지역별 표를 추출합니다...")
    snippets = {}
    
    for master_file in MASTER_FILES:
        if not os.path.exists(master_file):
            print(f"[경고] {master_file} 파일을 찾을 수 없습니다. (건너뜀)")
            continue

        with open(master_file, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")
        
        # 1. <h2> 지역명 </h2> 구조를 찾아 아래의 테이블을 추출 (우리가 생성한 틀 포맷 대응)
        h2_tags = soup.find_all("h2")
        for h2 in h2_tags:
            text = h2.get_text(strip=True)
            # "2. 빈주시 권역", "3. 천주시" 등에서 이름만 파싱
            match = re.search(r'\d+\.\s*([가-힣]+)(시|군)', text)
            if match:
                region_name = match.group(1) + match.group(2)
                
                table = h2.find_next_sibling("table", class_="election-table")
                if table:
                    # 완벽한 나무위키식 details 틀 구조로 감싸기
                    wrapped_html = f"""
                    <div style="border: 2px solid var(--wiki-main, #005CB9); border-radius: 4px; margin-bottom: 20px;">
                        <details open>
                            <summary style="background-color: var(--wiki-main, #005CB9); color: white; padding: 10px; font-size: 1.1rem; font-weight: bold; cursor: pointer; list-style: none; text-align: center;">
                                역대 {region_name} 국회의원
                            </summary>
                            <div style="padding: 15px; background-color: var(--wiki-bg, #ffffff);">
                                {str(table)}
                            </div>
                        </details>
                    </div>
                    """
                    # 추출할 때 색상 CSS 코드를 통째로 무조건 같이 담아줌
                    snippets[region_name] = ANTI_CSS_STYLE + wrapped_html
                    print(f"  - [{region_name}] 표 추출 및 래핑 완료")
                    
        # 2. 만약 이미 <summary>역대 OOO 국회의원</summary> 구조로 되어있다면 바로 추출
        divs = soup.find_all("div", style=lambda s: s and "border: 2px solid" in s)
        for div in divs:
            summary = div.find("summary")
            if summary:
                text = summary.get_text(strip=True)
                match = re.search(r'역대\s+([가-힣]+(시|군))\s*국회의원', text)
                if match:
                    region_name = match.group(1).strip()
                    if region_name not in snippets:
                        # 기존 CSS 버리고 무적 CSS로 덮어씌움
                        snippets[region_name] = ANTI_CSS_STYLE + str(div)
                        print(f"  - [{region_name}] 표 추출 완료 (summary 구조)")

    return snippets

def inject_snippets_to_files(snippets):
    if not os.path.exists(TARGET_DIR):
        return

    print("\n>>> 개별 시·군 문서의 '정치' 문단에 중복 데이터를 삭제하고 최신 표 1개를 삽입합니다...")
    
    for filename in os.listdir(TARGET_DIR):
        if not filename.endswith(".html") or filename in MASTER_FILES:
            continue
            
        region_name = filename.replace(".html", "")
        
        # 파일명(예: 빈주시.html)과 일치하는 표가 snippets 에 있는지 확인
        if region_name in snippets:
            filepath = os.path.join(TARGET_DIR, filename)
            
            with open(filepath, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")
            
            snippet_soup = BeautifulSoup(snippets[region_name], "html.parser")
            
            # 1. 찌꺼기 스타일 태그 전부 증발시킴 (충돌 방지)
            for old_style in soup.find_all("style", class_="anti-css-council-style"):
                old_style.decompose()

            # 2. [핵심 버그 수정] 이전 스크립트 실수로 표가 2~3개씩 증식한 거 싹 다 찾아서 학살
            regex = re.compile(rf"역대\s+{region_name[:-1]}(시|군)\s*국회의원")
            existing_summaries = soup.find_all(lambda tag: tag.name == "summary" and regex.search(tag.get_text()))
            
            for summary in existing_summaries:
                existing_div = summary.find_parent("div", style=lambda s: s and "border: 2px solid" in s)
                if existing_div:
                    existing_div.decompose() # 완전히 뜯어냄
            
            # 3. 깨끗해진 상태에서 '정치' 문단 찾아서 새 표를 딱 1개만 꽂아 넣음
            politics_heading = soup.find(lambda tag: tag.name in ['h2', 'h3', 'h4', 'h5', 'h6'] and '정치' in tag.get_text())
            
            if politics_heading:
                politics_heading.insert_after(snippet_soup)
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(str(soup))
                print(f"  [복구 성공] {filename} : 중복 표 청소 후 완벽한 색상의 최신 표 삽입 완료!")
            else:
                print(f"  [경고] {filename} : 문서 내에 '정치' 문단이 없어 삽입하지 못했습니다.")

if __name__ == "__main__":
    extracted_snippets = extract_snippets_from_master()
    
    if extracted_snippets:
        inject_snippets_to_files(extracted_snippets)
        print("\n>>> 중복 버그 해결 및 완벽한 색상 표 삽입 작업이 완료되었습니다!")
    else:
        print("\n>>> 추출된 표가 없습니다. 마스터 파일명을 확인해주세요.")