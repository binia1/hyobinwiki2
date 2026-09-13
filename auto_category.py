import os
import re
import shutil
from bs4 import BeautifulSoup

WIKI_PATH = './'
BACKUP_PATH = './backup_html/'

if not os.path.exists(BACKUP_PATH):
    os.makedirs(BACKUP_PATH)

html_files = [f for f in os.listdir(WIKI_PATH) if f.endswith('.html')]

for filename in html_files:
    filepath = os.path.join(WIKI_PATH, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        html_content = f.read()
        
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # 1. Category Box가 있는 문서만 취급
    cat_box = soup.find('div', class_=re.compile(r'category-box'))
    if not cat_box: continue

    # 2. 인포박스 소스 확보 (HTML 내장인지, JS 파일 연동인지 확인)
    infobox = soup.find(class_='infobox')
    if not infobox: continue
    
    infobox_html = str(infobox)
    
    # 인포박스 내부 텍스트가 텅 비어있다면 JS 파일에서 불러오는 형태임
    if not infobox.get_text(strip=True):
        # HTML 안에 있는 <script src="js/OOO_인포박스.js"> 태그 추적
        script_tag = soup.find('script', src=re.compile(r'js/.*인포박스\.js'))
        if script_tag:
            js_path = os.path.join(WIKI_PATH, script_tag['src'])
            if os.path.exists(js_path):
                with open(js_path, 'r', encoding='utf-8') as jf:
                    infobox_html = jf.read() # JS 코드 내용을 통째로 스캔
        else:
            # 태그로 못 찾았어도 문서 이름 바탕으로 강제 추적
            guess_js_path = os.path.join(WIKI_PATH, 'js', filename.replace('.html', '_인포박스.js'))
            if os.path.exists(guess_js_path):
                with open(guess_js_path, 'r', encoding='utf-8') as jf:
                    infobox_html = jf.read()

    # 파악한 인포박스 내용물(HTML이든 JS 문자열이든)을 다시 파싱
    info_soup = BeautifulSoup(infobox_html, 'html.parser')

    existing_cats = [a.get_text(strip=True) for a in cat_box.find_all('a')]
    new_cats = set()
    
    def get_td_text(th_name):
        th = info_soup.find('th', string=re.compile(th_name))
        if th and th.find_next_sibling('td'):
            return th.find_next_sibling('td').get_text(separator=' ', strip=True)
        return ""

    # ==========================================
    # [기능 1] 인물 정보 추출 (기존 정밀 로직 100% 유지)
    # ==========================================
    birth_text = get_td_text('출생')
    if birth_text:
        year_match = re.search(r'(\d{4})년', birth_text)
        if year_match: new_cats.add(f"{year_match.group(1)}년 출생")
        locs = re.findall(r'([가-힣]+(?:광역시|특별시|도|시|군|구|동|읍|면|리))', birth_text)
        for loc in locs: new_cats.add(f"{loc} 출신")

    res_text = get_td_text('거주지')
    if res_text:
        locs = re.findall(r'([가-힣]+(?:동|읍|면|리))', res_text)
        for loc in locs: new_cats.add(f"{loc} 거주")

    edu_text = get_td_text('학력')
    if edu_text:
        schools = re.findall(r'([가-힣a-zA-Z]+(?:초등학교|국민학교|중학교|고등학교|대학교|대학))', edu_text)
        for school in schools: new_cats.add(f"{school} 출신")
        majors = re.findall(r'([가-힣]+학)\s*/', edu_text)
        for major in majors: new_cats.add(f"{major} 전공")
        
    rel_text = get_td_text('종교')
    if rel_text:
        rel = rel_text.split('(')[0].strip()
        if rel and "무교" not in rel and "없음" not in rel:
            new_cats.add(f"{rel} 신자")

    party_th = info_soup.find('th', string=re.compile('소속 정당'))
    if party_th and party_th.find_next_sibling('td'):
        party_td = party_th.find_next_sibling('td')
        extracted_parties = []
        
        badges = party_td.find_all(['span', 'a'], class_=re.compile(r'party-badge|party-label'))
        if badges:
            for badge in badges:
                p_name = badge.get_text(strip=True)
                if len(p_name) > 1: extracted_parties.append(p_name)
        else:
            for br in party_td.find_all('br'):
                br.replace_with(',')
            raw_text = party_td.get_text(strip=True)
            raw_text = re.sub(r'\([^)]*\)|\[[^\]]*\]', '', raw_text)
            parts = re.split(r'[,→/]', raw_text)
            for p in parts:
                clean_p = p.replace('출당', '').replace('복당', '').replace('무당적', '').strip()
                if len(clean_p) > 1: extracted_parties.append(clean_p)
                
        for party in extracted_parties:
            if '무소속' in party:
                new_cats.add("무소속")
            else:
                new_cats.add(f"{party} 소속")

    work_text = get_td_text('현직') + " " + get_td_text('약력')
    terms = re.findall(r'(제\d+대 국회의원)', work_text)
    for term in terms: new_cats.add(term)

    # ==========================================
    # [기능 2] 대학교, 시설, 공원 등 연도 추출 (신규 완벽 추가)
    # ==========================================
    keywords_for_years = ['개교', '설립', '개장', '개업']
    for kw in keywords_for_years:
        kw_text = get_td_text(kw)
        if kw_text:
            year_match = re.search(r'(\d{4})년', kw_text)
            if year_match:
                new_cats.add(f"{year_match.group(1)}년 {kw}")

    # ==========================================
    # [병합 및 업데이트 처리]
    # ==========================================
    cats_to_add = []
    for nc in sorted(new_cats):
        if not any(nc in ex or ex in nc for ex in existing_cats):
            cats_to_add.append(nc)
            
    if not cats_to_add: continue
        
    match = re.search(r'(<div[^>]*class="[^"]*category-box[^"]*"[^>]*>.*?)(</div>)', html_content, re.DOTALL)
    
    if match:
        shutil.copy2(filepath, os.path.join(BACKUP_PATH, filename))

        original_inner = match.group(1)
        append_html = ""
        for cat in cats_to_add:
            append_html += f'\n<span style="color: var(--wiki-border);">|</span> \n<a class="wiki-link" href="{cat}.html">{cat}</a> '
        
        new_cat_box_html = original_inner + append_html + "\n" + match.group(2)
        html_content = html_content[:match.start()] + new_cat_box_html + html_content[match.end():]
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html_content)
            
        print(f"✅ {filename} 업데이트 완료 (추가된 분류: {', '.join(cats_to_add)})")

print("\n🎉 모든 문서(인물, 대학, 시설 등)의 분류 자동 생성이 완료되었습니다!")