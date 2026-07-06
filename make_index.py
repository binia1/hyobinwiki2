import os
from bs4 import BeautifulSoup

WIKI_PATH = './'
RESULT_FILE = '분류_인덱스.html'

# 시장님이 주신 동적 항목 리스트
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
    """URL의 패턴을 분석해 자동으로 카테고리명을 반환합니다."""
    if "동적뷰" in url: return "정치인/의회"
    if "덕빈남의원" in url: return "정치인/의회"
    if "역사_템플릿" in url: return "철도역"
    if "빌런" in url: return "인물/빌런"
    if "피해_사례집" in url: return "인물/피해자"
    if "고등학교_템플릿" in url: return "교육기관/고등학교"
    if "효빈대" in url and "역_템플릿" in url: return "효빈대/교내교통"
    return "기타 동적항목"

def generate_index():
    category_map = {}
    
    # 1. 일반 파일 훑기 (기존 로직)
    html_files = [f for f in os.listdir(WIKI_PATH) if f.endswith('.html') and f != RESULT_FILE]
    print(f"🚀 일반 파일 {len(html_files)}개 분석 중...")
    
    for filename in html_files:
        try:
            with open(os.path.join(WIKI_PATH, filename), 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')
                title = soup.title.string if soup.title else filename.replace('.html', '')
                cat_box = soup.find('div', class_='category-box')
                if cat_box:
                    full_text = cat_box.get_text()
                    clean_text = full_text.split('분류:')[1] if '분류:' in full_text else full_text
                    cat_list = [c.strip() for c in clean_text.split('|') if c.strip()]
                    for cat_name in cat_list:
                        if cat_name not in category_map: category_map[cat_name] = []
                        category_map[cat_name].append({'title': title, 'url': filename})
        except: pass

    # 2. 동적 리스트 추가 (패턴 분석 자동 분류)
    print(f"🔗 동적 항목 {len(DYNAMIC_LIST)}개 추가 중...")
    for title, url in DYNAMIC_LIST:
        cat_name = get_dynamic_category(url)
        if cat_name not in category_map: category_map[cat_name] = []
        category_map[cat_name].append({'title': title, 'url': url})

    # 3. HTML 생성 (디자인 강화)
    with open(RESULT_FILE, 'w', encoding='utf-8') as out:
        out.write('<!DOCTYPE html>\n<html lang="ko">\n<head><meta charset="UTF-8">\n')
        out.write('<title>효빈위키 통합 인덱스</title>\n')
        out.write('<style>body{font-family:sans-serif; padding:40px; background:#f4f7f6;}\n')
        out.write('.cat-section{background:white; padding:20px; margin-bottom:20px; border-radius:12px; border-top:5px solid #7777AA; box-shadow:0 4px 6px rgba(0,0,0,0.05);}\n')
        out.write('h2{color:#555588; border-bottom:1px solid #eee; padding-bottom:10px;}\n')
        out.write('ul{list-style:none; padding:0; column-count:2;} li{margin:6px 0;}\n')
        out.write('a{text-decoration:none; color:#0077DD; font-weight:bold;} a:hover{color:#EE0022;}\n')
        out.write('.tag{font-size:11px; color:#aaa; margin-left:5px;}</style></head><body>\n')
        out.write('<h1>🗂️ 효빈위키 통합 분류 인덱스</h1>\n')

        for cat in sorted(category_map.keys()):
            out.write(f'<div class="cat-section"><h2>📂 {cat}</h2><ul>\n')
            for doc in sorted(category_map[cat], key=lambda x: x['title']):
                # 동적 항목은 옆에 작은 표시를 남겨줍니다
                tag = '<span class="tag">[동적]</span>' if "?" in doc['url'] or "#" in doc['url'] else ""
                out.write(f'<li><a href="{doc["url"]}">{doc["title"]}</a>{tag}</li>\n')
            out.write('</ul></div>\n')
        out.write('</body></html>')
    
    print(f"✅ 인덱스 생성 완료!")

if __name__ == "__main__":
    generate_index()