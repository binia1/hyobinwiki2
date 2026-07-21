import os
import json
import time
from bs4 import BeautifulSoup
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# --- 설정 ---
WIKI_PATH = './'
RESULT_FILE = '분류.html'

# 🛡️ 시장님의 절대 보존 구역: 150개 동적 리스트 고정
DYNAMIC_LIST = [
    ["간호대 - 한의관", "효빈대_A선_역_템플릿.html?id=A03"],
    ["강갑수", "두청운수_빌런_기사_목록.html?villain=강갑수"],
    ["강대호", "두청운수_피해_사례집.html?victim=강대호"],
    ["강상현", "효빈광역시의회_동적뷰.html#강상현"],
    ["강주항역", "빈주권광역철도_역사_템플릿.html?station=강주항"],
    ["계성진백역", "빈주권광역철도_역사_템플릿.html?station=계성진백"],
    ["고상면", "효빈광역시의회_동적뷰.html#고상면"],
    ["고송강변", "창전선_역사_템플릿.html?station=고송강변"],
    ["고송경찰서", "창전선_역사_템플릿.html?station=고송경찰서"],
    ["고한선", "덕빈남의원.html#고한선"],
    ["관동4가역", "빈주1호선_역사_템플릿.html?station=관동4가"],
    ["교통대학 기지", "효빈대_B선_역_템플릿.html?id=B01"],
    ["구상민", "효빈광역시의회_동적뷰.html#구상민"],
    ["구상원", "효빈광역시의회_동적뷰.html#구상원"],
    ["구신원", "덕빈남의원.html#구신원"],
    ["규암로2가역", "덕주1호선_역사_템플릿.html?station=규암로2가"],
    ["김만석", "두청운수_피해_사례집.html?victim=김만석"],
    ["김칠성", "두청운수_빌런_기사_목록.html?villain=김칠성"],
    ["남장기역", "빈주2호선_역사_템플릿.html?station=남장기"],
    ["남전고등학교", "북구_고등학교_템플릿.html?id=namjeon"],
    ["내성역", "빈주1호선_역사_템플릿.html?station=내성"],
    ["늑골역", "빈주2호선_역사_템플릿.html?station=늑골"],
    ["대운동장", "효빈대_B선_역_템플릿.html?id=B12"],
    ["대학본부·충승당", "효빈대_A선_역_템플릿.html?id=A07"],
    ["덕남대역", "덕주1호선_역사_템플릿.html?station=덕남대"],
    ["덕남도청역", "덕주1호선_역사_템플릿.html?station=덕남도청"],
    ["동습역", "빈주1호선_역사_템플릿.html?station=동습"],
    ["동원역", "빈주1호선_역사_템플릿.html?station=동원"],
    ["명태역", "빈주권광역철도_역사_템플릿.html?station=명태"],
    ["문성역", "빈주권광역철도_역사_템플릿.html?station=문성"],
    ["미술사회대", "효빈대_B선_역_템플릿.html?id=B04"],
    ["민산역", "빈주2호선_역사_템플릿.html?station=민산"],
    ["박상구", "두청운수_피해_사례집.html?victim=박상구"],
    ["박성역", "빈주권광역철도_역사_템플릿.html?station=박성"],
    ["박성임", "효빈광역시의회_동적뷰.html#박성임"],
    ["박신언", "덕빈남의원.html#박신언"],
    ["박현역", "덕주1호선_역사_템플릿.html?station=박현"],
    ["방거역", "빈주권광역철도_역사_템플릿.html?station=방거"],
    ["배칠두", "두청운수_빌런_기사_목록.html?villain=배칠두"],
    ["백남역", "빈주권광역철도_역사_템플릿.html?station=백남"],
    ["법전원", "효빈대_B선_역_템플릿.html?id=B05"],
    ["베르데홀", "효빈대_B선_역_템플릿.html?id=B09"],
    ["보건진료소", "효빈대_B선_역_템플릿.html?id=B11"],
    ["본부·충승당", "효빈대_B선_역_템플릿.html?id=B13"],
    ["부남역", "빈주권광역철도_역사_템플릿.html?station=부남"],
    ["북고송", "창전선_역사_템플릿.html?station=북고송"],
    ["북부 기숙사", "효빈대_B선_역_템플릿.html?id=B10"],
    ["북예역", "빈주권광역철도_역사_템플릿.html?station=북예"],
    ["북장기역", "빈주1호선_역사_템플릿.html?station=북장기"],
    ["빈주동신역", "빈주1호선_역사_템플릿.html?station=빈주동신"],
    ["사능고등학교", "북구_고등학교_템플릿.html?id=saneung"],
    ["사증역", "빈주1호선_역사_템플릿.html?station=사증"],
    ["사회복지대", "효빈대_B선_역_템플릿.html?id=B03"],
    ["산남고등학교", "북구_고등학교_템플릿.html?id=sannam"],
    ["삼은역", "덕주1호선_역사_템플릿.html?station=삼은"],
    ["상과대 학생회관", "효빈대_B선_역_템플릿.html?id=B14"],
    ["상과대. 학생회관", "효빈대_A선_역_템플릿.html?id=A08"],
    ["상두역", "빈주권광역철도_역사_템플릿.html?station=상두"],
    ["서나역", "빈주권광역철도_역사_템플릿.html?station=서나"],
    ["서비마역", "청엽선 통합 역 템플릿.html?station=서비마"],
    ["서원동1가역", "빈주1호선_역사_템플릿.html?station=서원동1가"],
    ["서원동2가역", "빈주1호선_역사_템플릿.html?station=서원동2가"],
    ["서유원", "덕빈남의원.html#서유원"],
    ["석서역", "빈주권광역철도_역사_템플릿.html?station=석서"],
    ["성지언", "효빈광역시의회_동적뷰.html#성지언"],
    ["소상리", "효빈광역시의회_동적뷰.html#소상리"],
    ["소창고등학교", "북구_고등학교_템플릿.html?id=sochang"],
    ["수곡역", "빈주1호선_역사_템플릿.html?station=수곡"],
    ["수옥역", "빈주2호선_역사_템플릿.html?station=수옥"],
    ["수의대·동물병원", "효빈대_A선_역_템플릿.html?id=A01"],
    ["승루역", "빈주2호선_역사_템플릿.html?station=승루"],
    ["시능역", "빈주1호선_역사_템플릿.html?station=시능"],
    ["신단성", "효빈광역시의회_동적뷰.html#신단성"],
    ["신도역", "덕주1호선_역사_템플릿.html?station=신도"],
    ["신쌍엽", "창전선_역사_템플릿.html?station=신쌍엽"],
    ["신월삼역", "빈주2호선_역사_템플릿.html?station=신월삼"],
    ["신중역", "빈주2호선_역사_템플릿.html?station=신중"],
    ["신창전", "창전선_역사_템플릿.html?station=신창전"],
    ["신팔조", "창전선_역사_템플릿.html?station=신팔조"],
    ["심전역", "빈주권광역철도_역사_템플릿.html?station=심전"],
    ["쌍엽중앙", "창전선_역사_템플릿.html?station=쌍엽중앙"],
    ["아논역", "빈주권광역철도_역사_템플릿.html?station=아논"],
    ["안일암", "효빈광역시의회_동적뷰.html#안일암"],
    ["애산역", "빈주권광역철도_역사_템플릿.html?station=애산"],
    ["약대 보건대", "효빈대_A선_역_템플릿.html?id=A04"],
    ["엄치돈", "두청운수_빌런_기사_목록.html?villain=엄치돈"],
    ["여연역", "빈주1호선_역사_템플릿.html?station=여연"],
    ["여초역", "빈주권광역철도_역사_템플릿.html?station=여초"],
    ["엽월대역", "청엽선 통합 역 템플릿.html?station=엽월대"],
    ["영목역", "덕주1호선_역사_템플릿.html?station=영목"],
    ["예술대", "효빈대_B선_역_템플릿.html?id=B07"],
    ["오내고등학교", "북구_고등학교_템플릿.html?id=onae"],
    ["오상원", "효빈광역시의회_동적뷰.html#오상원"],
    ["오서영", "효빈광역시의회_동적뷰.html#오서영"],
    ["오선온", "덕빈남의원.html#오선온"],
    ["오지대", "효빈광역시의회_동적뷰.html#오지대"],
    ["옥산민", "효빈광역시의회_동적뷰.html#옥산민"],
    ["완현역", "빈주권광역철도_역사_템플릿.html?station=완현"],
    ["용서민", "효빈광역시의회_동적뷰.html#용서민"],
    ["우격역", "덕주1호선_역사_템플릿.html?station=우격"],
    ["우전중앙역", "청엽선 통합 역 템플릿.html?station=우전중앙"],
    ["우지남", "효빈광역시의회_동적뷰.html#우지남"],
    ["우택중앙", "창전선_역사_템플릿.html?station=우택중앙"],
    ["웅읍역", "빈주2호선_역사_템플릿.html?station=웅읍"],
    ["원개현", "효빈광역시의회_동적뷰.html#원개현"],
    ["원기덕", "효빈광역시의회_동적뷰.html#원기덕"],
    ["원명중앙역", "덕주1호선_역사_템플릿.html?station=원명중앙"],
    ["원상민", "효빈광역시의회_동적뷰.html#원상민"],
    ["원수현", "효빈광역시의회_동적뷰.html#원수현"],
    ["원지현", "효빈광역시의회_동적뷰.html#원지현"],
    ["월삼역", "빈주권광역철도_역사_템플릿.html?station=월삼"],
    ["유상미", "덕빈남의원.html#유상미"],
    ["유신민", "효빈광역시의회_동적뷰.html#유신민"],
    ["유증민", "효빈광역시의회_동적뷰.html#유증민"],
    ["윤월선", "효빈광역시의회_동적뷰.html#윤월선"],
    ["이갑수", "두청운수_피해_사례집.html?victim=이갑수"],
    ["이남고등학교", "북구_고등학교_템플릿.html?id=inam"],
    ["이독사", "두청운수_빌런_기사_목록.html?villain=이독사"],
    ["이수라남", "효빈광역시의회_동적뷰.html#이수라남"],
    ["인서고등학교", "북구_고등학교_템플릿.html?id=inseo"],
    ["입동2가역", "청엽선 통합 역 템플릿.html?station=입동2가"],
    ["자연대", "효빈대_B선_역_템플릿.html?id=B08"],
    ["장기구청역", "빈주1호선_역사_템플릿.html?station=장기구청"],
    ["장기중앙역", "빈주1호선_역사_템플릿.html?station=장기중앙"],
    ["정래원", "두청운수_피해_사례집.html?victim=정래원"],
    ["제가동2가역", "빈주2호선_역사_템플릿.html?station=제가동2가"],
    ["제가역", "빈주1호선_역사_템플릿.html?station=제가"],
    ["조만석", "두청운수_빌런_기사_목록.html?villain=조만석"],
    ["조성일", "효빈광역시의회_동적뷰.html#조성일"],
    ["조영식", "두청운수_피해_사례집.html?victim=조영식"],
    ["조전구청역", "덕주1호선_역사_템플릿.html?station=조전구청"],
    ["조전역", "덕주1호선_역사_템플릿.html?station=조전"],
    ["조천산역", "덕주1호선_역사_템플릿.html?station=조천산"],
    ["조청남", "효빈광역시의회_동적뷰.html#조청남"],
    ["주기역", "덕주1호선_역사_템플릿.html?station=주기"],
    ["주방선", "효빈광역시의회_동적뷰.html#주방선"],
    ["주성역", "덕주1호선_역사_템플릿.html?station=주성"],
    ["주옥현", "효빈광역시의회_동적뷰.html#주옥현"],
    ["주전중앙역", "빈주2호선_역사_템플릿.html?station=주전중앙"],
    ["중앙도서관", "효빈대_B선_역_템플릿.html?id=B02"],
    ["중앙동3가역", "빈주1호선_역사_템플릿.html?station=중앙동3가"],
    ["중은역", "빈주1호선_역사_템플릿.html?station=중은"],
    ["증림역", "빈주권광역철도_역사_템플릿.html?station=증림"],
    ["지미역", "빈주권광역철도_역사_템플릿.html?station=지미"],
    ["지산역", "빈주1호선_역사_템플릿.html?station=지산"],
    ["지소현", "효빈광역시의회_동적뷰.html#지소현"],
    ["지은민", "효빈광역시의회_동적뷰.html#지은민"],
    ["진백중앙", "창전선_역사_템플릿.html?station=진백중앙"],
    ["진희고등학교", "북구_고등학교_템플릿.html?id=jinhee"],
    ["창엽", "창전선_역사_템플릿.html?station=창엽"],
    ["천남역", "빈주권광역철도_역사_템플릿.html?station=천남"],
    ["천왕사고등학교", "북구_고등학교_템플릿.html?id=cheonwangsa"],
    ["청남고등학교", "북구_고등학교_템플릿.html?id=cheongnam"],
    ["청엽구민공원역", "청엽선 통합 역 템플릿.html?station=청엽구민공원"],
    ["청엽중앙역", "청엽선 통합 역 템플릿.html?station=청엽중앙"],
    ["최두식", "두청운수_피해_사례집.html?victim=최두식"],
    ["최말구", "두청운수_빌런_기사_목록.html?villain=최말구"],
    ["칠심중앙", "창전선_역사_템플릿.html?station=칠심중앙"],
    ["토목대 복지관", "효빈대_A선_역_템플릿.html?id=A06"],
    ["토정역", "빈주권광역철도_역사_템플릿.html?station=토정"],
    ["평전고등학교", "북구_고등학교_템플릿.html?id=pyeongjeon"],
    ["하원역", "빈주권광역철도_역사_템플릿.html?station=하원"],
    ["한상구", "두청운수_피해_사례집.html?victim=한상구"],
    ["허세풍", "두청운수_빌런_기사_목록.html?villain=허세풍"],
    ["호두역", "빈주권광역철도_역사_템플릿.html?station=호두"],
    ["화공 전기대", "효빈대_A선_역_템플릿.html?id=A05"],
    ["화면역", "빈주2호선_역사_템플릿.html?station=화면"],
    ["화주역", "덕주1호선_역사_템플릿.html?station=화주"],
    ["효빈대병원", "창전선_역사_템플릿.html?station=효빈대병원"],
    ["효빈동1가역", "청엽선 통합 역 템플릿.html?station=효빈동1가"],
    ["효빈동2가역", "청엽선 통합 역 템플릿.html?station=효빈동2가"],
    ["효빈북부공업고등학교", "북구_고등학교_템플릿.html?id=hbtech"],
    ["효빈북여자고등학교", "북구_고등학교_템플릿.html?id=hbgirls"],
    ["효빈제일고등학교", "북구_고등학교_템플릿.html?id=hbjeil"]
]

def get_dynamic_category(url):
    if "동적뷰" in url or "남의원" in url: return "정치인/의회"
    if "역사_템플릿" in url: return "교통/철도역"
    if "빌런" in url: return "인물/빌런"
    if "피해_사례집" in url: return "인물/피해자"
    if "고등학교_템플릿" in url: return "교육기관/고등학교"
    if "효빈대" in url: return "효빈대학교/시설"
    return "기타"

def generate_wiki_index():
    category_map = {}
    sub_categories = {}

    html_files = [f for f in os.listdir(WIKI_PATH) if f.endswith('.html') and f != RESULT_FILE]
    
    for filename in html_files:
        try:
            with open(os.path.join(WIKI_PATH, filename), 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')
                
                # 1. 문서 제목 추출
                if soup.title and soup.title.string:
                    title = soup.title.string.replace(' - 효빈위키', '').strip()
                else:
                    title = filename.replace('.html', '')

                # 2. 지능형 박스 탐지 (우선순위 스캔)
                # 클래스든 ID든 상관없이 존재하는 것을 먼저 찾음
                cat_box = (
                    soup.find('div', class_='category-box') or
                    soup.find(id='wiki-context-area') or
                    soup.find('div', class_='wiki-context-area')
                )
                
                # 3. 그래도 없으면? '분류:' 텍스트를 포함하는 부모 박스를 탐색
                if not cat_box:
                    label_tag = soup.find(lambda tag: tag.name in ['span', 'div', 'p', 'b', 'strong', 'td'] 
                                         and tag.text and '분류' in tag.text and ':' in tag.text)
                    if label_tag:
                        # 텍스트가 속한 가장 가까운 상위 컨테이너 박스 추출
                        cat_box = label_tag.find_parent(['div', 'table', 'section'])
                
                # 4. 데이터 추출
                if cat_box:
                    a_tags = cat_box.find_all('a')
                    
                    if a_tags:
                        # "분류"라는 글자만 뺀 나머지 링크 텍스트 수집
                        cat_list = [a.get_text(strip=True) for a in a_tags if '분류' not in a.get_text(strip=True)]
                    else:
                        # 링크 태그가 없는 경우 텍스트 파싱
                        full_text = cat_box.get_text()
                        raw_cat = full_text.split('분류:')[1] if '분류:' in full_text else (full_text.split('분류 :')[1] if '분류 :' in full_text else full_text)
                        cat_list = [c.strip() for c in raw_cat.replace('\n', '').split('|') if c.strip()]
                    
                    for cat_full in cat_list:
                        if not cat_full: continue
                        if '/' in cat_full:
                            parent = cat_full.split('/')[0]
                            if parent not in sub_categories: sub_categories[parent] = []
                            if cat_full not in sub_categories[parent]: sub_categories[parent].append(cat_full)
                        if cat_full not in category_map: category_map[cat_full] = []
                        category_map[cat_full].append({'title': title, 'url': filename})
        except Exception as e:
            print(f"⚠️ 파일 분석 오류 ({filename}): {e}")
            continue


    # 2. 🛡️ 수동 150개 동적 리스트 무조건 추가!
    for title, url in DYNAMIC_LIST:
        cat_full = get_dynamic_category(url)
        if '/' in cat_full:
            parent = cat_full.split('/')[0]
            if parent not in sub_categories: sub_categories[parent] = []
            if cat_full not in sub_categories[parent]: sub_categories[parent].append(cat_full)
        if cat_full not in category_map: category_map[cat_full] = []
        category_map[cat_full].append({'title': title, 'url': url})

    # JSON 변환
    json_cat_map = json.dumps(category_map, ensure_ascii=False)
    json_sub_cat = json.dumps(sub_categories, ensure_ascii=False)

    # 3. HTML (효빈위키 공식 스킨) 생성
    html_content = f"""<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>분류 - 효빈위키</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;800&display=swap');
        
        :root {{ 
            --wiki-main: #7777AA; 
            --wiki-border: #ccc; 
            --wiki-bg: #ffffff; 
            --wiki-text: #373a3c; 
            --wiki-gray-bg: #f9f9f9; 
            --wiki-link: #0022aa; 
            --wiki-visited: #800080;
            --wiki-table-header: #7777AA; 
        }}

        body {{ font-family: 'Noto Sans KR', sans-serif; background-color: var(--wiki-bg); color: var(--wiki-text); line-height: 1.6; word-break: keep-all; margin: 0; }}
        .wiki-container {{ max-width: 1300px; margin: 0 auto; padding: 20px 40px; border-left: 1px solid var(--wiki-border); border-right: 1px solid var(--wiki-border); min-height: 100vh; background-color: var(--wiki-bg); }}

        .txt-lvl-1 {{ font-size: 2.8rem !important; font-weight: 800; color: #000; margin-bottom: 0.5rem; line-height: 1.1; letter-spacing: -1px; }} 
        h2 {{ font-size: 1.6rem !important; font-weight: 700 !important; border-bottom: 2px solid var(--wiki-table-header); padding-bottom: 8px; margin-top: 3rem; margin-bottom: 1.2rem; display: block; }}
        
        a.wiki-link {{ color: var(--wiki-link); text-decoration: none; cursor: pointer; }}
        a.wiki-link:hover {{ text-decoration: underline; }}
        a.wiki-link:visited {{ color: var(--wiki-visited); }}

        .wiki-tool-group {{ display: flex; gap: 4px; margin-bottom: 15px; justify-content: flex-end; }}
        .wiki-tool-btn {{ padding: 4px 12px; font-size: 13px; border: 1px solid #ccc; background: linear-gradient(to bottom, #fff, #eee); cursor: pointer; border-radius: 2px; color: #333; text-decoration: none; }}

        .search-bar {{ border: 1px solid #ccc; padding: 4px 8px; font-size: 14px; width: 250px; }}
        .search-btn {{ background-color: #555588; color: white; border: none; padding: 4px 10px; cursor: pointer; font-size: 14px; }}

        /* 동적 분류용 추가 스타일 */
        .cat-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; list-style: none; padding: 0; }}
        .cat-grid li {{ margin-bottom: 5px; }}
        .sub-box {{ border: 1px solid var(--wiki-border); background: var(--wiki-gray-bg); padding: 20px; margin-bottom: 30px; border-radius: 4px; }}
        .sub-box h3 {{ margin-top: 0; font-size: 1.2rem; font-weight: bold; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 15px; }}
        .doc-list {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; list-style: none; padding: 0; }}
        .doc-list li::before {{ content: "📄 "; font-size: 0.8em; }}
        .tag-badge {{ background-color: #999; color: white; font-size: 0.7rem; padding: 2px 5px; border-radius: 3px; margin-left: 5px; vertical-align: middle; }}
    </style>
</head>
<body>
    <nav class="bg-[#7777AA] text-white p-2 px-4 flex justify-between items-center shadow-md sticky top-0 z-50 h-14">
        <div class="flex items-center gap-4 cursor-pointer" onclick="location.href='index.html'">
            <span class="font-bold text-xl tracking-tight">HyobinWiki</span>
        </div>
        <div class="flex items-center gap-1">
            <input type="text" id="searchInput" placeholder="여기에서 검색" class="search-bar rounded-sm text-black" onkeypress="if(event.keyCode==13) handleSearch()">
            <button onclick="handleSearch()" class="search-btn rounded-sm">🔍</button>
        </div>
    </nav>

    <div class="wiki-container shadow-lg pt-6">
        
        <div class="flex justify-between items-end border-b-2 border-gray-400 pb-2 mb-6">
            <div class="txt-lvl-1" id="page-title">분류: 전체</div>
            <div class="wiki-tool-group">
                <a href="#전체" class="wiki-tool-btn">전체 분류 보기</a>
                <a href="#" class="wiki-tool-btn">역사</a>
            </div>
        </div>

        <div id="app" class="min-h-[500px]"></div>


    <div id="footer-container"></div>

    </div>
    <script src="assets/wiki_index.js"></script>
    <script src="secret_search.js"></script>
    <script src="assets/hb_wiki_core.js?v=2"></script>
    <script src="assets/hb_index_scripts.js"></script>
    <script src="assets/jana.js"></script>
        <script src="assets/load-footer.js"></script>



    <script>
        function handleSearch() {{
            const query = document.getElementById('searchInput').value.trim();
            if (query) window.location.href = query + '.html';
        }}

        // 파이썬이 주입한 데이터
        const categoryMap = {json_cat_map};
        const subCategories = {json_sub_cat};

        // 한글 초성 추출
        const CHOSUNG = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
        function getChosung(text) {{
            if (!text) return "#";
            const first = text.trim().charAt(0);
            const code = first.charCodeAt(0);
            if (code >= 44032 && code <= 55203) return CHOSUNG[Math.floor((code - 44032) / 588)];
            return first.match(/[a-zA-Z0-9]/) ? first.toUpperCase() : "#";
        }}

        // 화면 렌더링
        function render() {{
            const app = document.getElementById('app');
            const pageTitle = document.getElementById('page-title');
            const hash = decodeURIComponent(window.location.hash.substring(1));

            if (!hash || hash === "전체") {{
                pageTitle.innerText = "분류: 전체";
                let html = '<p class="mb-6">이 위키에 존재하는 모든 분류의 목록입니다. 하위 분류 및 문서를 보려면 각 항목을 클릭하세요.</p>';
                html += '<ul class="cat-grid">';
                Object.keys(categoryMap).sort().forEach(cat => {{
                    html += `<li><a href="#${{cat}}" class="wiki-link font-bold text-lg">📁 분류:${{cat}}</a> <span class="text-sm text-gray-500">(${{categoryMap[cat].length}}개)</span></li>`;
                }});
                html += '</ul>';
                app.innerHTML = html;
            }} else if (categoryMap[hash]) {{
                pageTitle.innerText = `분류: ${{hash}}`;
                let html = '';

                // 하위 분류 박스
                if (subCategories[hash] && subCategories[hash].length > 0) {{
                    html += `<div class="sub-box"><h3>이 분류의 하위 분류</h3><ul class="cat-grid" style="grid-template-columns: repeat(4, 1fr);">`;
                    subCategories[hash].sort().forEach(sub => {{
                        html += `<li><a href="#${{sub}}" class="wiki-link">📂 ${{sub.split('/').pop()}}</a></li>`;
                    }});
                    html += `</ul></div>`;
                }}

                // 문서 목록 (초성별)
                html += `<p class="mb-6 font-bold text-gray-600">다음은 이 분류에 속하는 문서 ${{categoryMap[hash].length}}개입니다.</p>`;
                const grouped = {{}};
                categoryMap[hash].forEach(d => {{
                    const cho = getChosung(d.title);
                    if (!grouped[cho]) grouped[cho] = [];
                    grouped[cho].push(d);
                }});

                Object.keys(grouped).sort().forEach(cho => {{
                    html += `<h2>${{cho}}</h2><ul class="doc-list mb-8">`;
                    grouped[cho].sort((a,b) => a.title.localeCompare(b.title)).forEach(d => {{
                        const tag = (d.url.includes('?') || d.url.includes('#')) ? '<span class="tag-badge">동적</span>' : '';
                        html += `<li><a href="${{d.url}}" class="wiki-link">${{d.title}}</a>${{tag}}</li>`;
                    }});
                    html += `</ul>`;
                }});
                app.innerHTML = html;
            }} else {{
                pageTitle.innerText = "분류 찾을 수 없음";
                app.innerHTML = `<p class="text-red-500 font-bold">해당 분류가 존재하지 않습니다.</p>`;
            }}
            window.scrollTo(0, 0);
        }}

        window.addEventListener('hashchange', render);
        render(); // 초기 실행
    </script>
</body>
</html>"""

    with open(RESULT_FILE, 'w', encoding='utf-8') as out:
        out.write(html_content)
    
    print(f"✅ [업데이트 완료] 분류.html이 성공적으로 생성되었습니다! ({time.strftime('%H:%M:%S')})")

# ---------------------------------------------------------
# 🐕 감시견(Watchdog) 로직 - Ctrl+S 저장 시 자동 업데이트!
# ---------------------------------------------------------
last_trigger_time = 0

class WikiFileHandler(FileSystemEventHandler):
    def on_modified(self, event):
        global last_trigger_time
        # HTML 파일이 변경되었고, 분류.html 자신이 아닐 때 동작
        if event.src_path.endswith('.html') and RESULT_FILE not in event.src_path:
            current_time = time.time()
            if current_time - last_trigger_time > 2: # 2초 쿨타임
                last_trigger_time = current_time
                filename = os.path.basename(event.src_path)
                print(f"\n🔄 문서 변경 감지됨: {filename} -> 인덱스 자동 재구축 시작!")
                generate_wiki_index()

if __name__ == "__main__":
    print("\n==============================================")
    print(" 🚀 효빈위키 분류 자동화 엔진 가동 준비 완료 ")
    print("==============================================\n")
    
    # 1. 켜자마자 한 번 실행해서 최신 상태로 굽기
    generate_wiki_index()
    
    # 2. 파일 변경 감시 시작
    event_handler = WikiFileHandler()
    observer = Observer()
    observer.schedule(event_handler, path=WIKI_PATH, recursive=False)
    observer.start()
    
    print("\n👀 [감시견 모드 켜짐] 폴더를 지켜보고 있습니다.")
    print("👉 터미널을 열어둔 채로, 위키 문서를 수정하고 저장(Ctrl+S)해 보세요.")
    print("👉 분류.html이 알아서 백그라운드에서 최신화됩니다. (종료: Ctrl + C)\n")
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n👋 자동화 엔진을 종료합니다. 수고하셨습니다!")
        observer.stop()
    observer.join()