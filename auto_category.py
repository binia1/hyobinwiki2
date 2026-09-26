import os
import re
import shutil
from bs4 import BeautifulSoup

WIKI_PATH = './'
BACKUP_PATH = './backup_html/'

if not os.path.exists(BACKUP_PATH):
    os.makedirs(BACKUP_PATH)

html_files = [f for f in os.listdir(WIKI_PATH) if f.endswith('.html')]

# 오작동 유발하는 캐릭터 이름 및 덕질 단어 블랙리스트
BLACKLIST_WORDS = [
    '츠즈리', '루리', '메구', '토마리', '사야카', '카호', '코즈에', '코스즈', 
    '세라스', '이즈미', '카논', '마르가레테', '나츠미', '키나코', '렌', '쿠쿠', 
    '스미레', '치사토', '시키', '메이', '당시', '요즘', '최근', '현재', '과거'
]

# 12별자리 리스트 (출생지 오인 방지 및 단독 카테고리용)
ZODIAC_SIGNS = [
    '양자리', '황소자리', '쌍둥이자리', '게자리', '사자자리', '처녀자리', 
    '천칭자리', '전갈자리', '사수자리', '염소자리', '물병자리', '물고기자리'
]

for filename in html_files:
    filepath = os.path.join(WIKI_PATH, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        html_content = f.read()
        
    soup = BeautifulSoup(html_content, 'html.parser')
    
    cat_box = soup.find('div', class_=re.compile(r'category-box'))
    if not cat_box: continue

    # 인포박스 통합 탐색
    infobox = soup.find(class_='infobox')
    if not infobox:
        infobox = soup.find(lambda tag: tag.name == 'table' and ('float: right' in tag.get('style', '') or tag.find(string=re.compile(r'^출생$|^생년월일$|^출생년월일$'))))
    if not infobox: continue

    infobox_html = str(infobox)
    
    if not infobox.get_text(strip=True):
        script_tag = soup.find('script', src=re.compile(r'js/.*인포박스\.js'))
        if script_tag:
            js_path = os.path.join(WIKI_PATH, script_tag['src'])
            if os.path.exists(js_path):
                with open(js_path, 'r', encoding='utf-8') as jf:
                    infobox_html = jf.read()
        else:
            guess_js_path = os.path.join(WIKI_PATH, 'js', filename.replace('.html', '_인포박스.js'))
            if os.path.exists(guess_js_path):
                with open(guess_js_path, 'r', encoding='utf-8') as jf:
                    infobox_html = jf.read()

    info_soup = BeautifulSoup(infobox_html, 'html.parser')

    # 각주 및 툴팁 박멸
    for tooltip in info_soup.find_all(['span', 'sup'], class_=re.compile(r'wiki-tooltip|wiki-fn')):
        tooltip.extract()

    existing_cats = [a.get_text(strip=True) for a in cat_box.find_all('a')]
    new_cats = set()
    
    def get_td_node(th_regex):
        label_tag = info_soup.find(lambda tag: tag.name in ['th', 'td', 'strong', 'b'] and re.search(th_regex, tag.get_text(strip=True)))
        if label_tag:
            target_td = label_tag if label_tag.name in ['th', 'td'] else label_tag.find_parent(['th', 'td'])
            if target_td:
                return target_td.find_next_sibling('td')
        return None

    def get_td_text(th_regex):
        td_node = get_td_node(th_regex)
        return td_node.get_text(separator=' ', strip=True) if td_node else ""

    # ==========================================
    # 1. 출생 (연도, 월, 일) 추출 
    # ==========================================
    birth_text = get_td_text(r'출생|생일|생년월일')
    if birth_text:
        year_match = re.search(r'(\d{4})년', birth_text)
        if year_match: new_cats.add(f"{year_match.group(1)}년 출생")
        
        md_match = re.search(r'(\d{1,2})월\s*(\d{1,2})일', birth_text)
        if md_match: new_cats.add(f"{md_match.group(1)}월 {md_match.group(2)}일 출생")

    # ==========================================
    # 2. 출생지 / 거주지 추출 (별자리가 '리'로 오인되는 현상 완벽 차단)
    # ==========================================
    def extract_locations(text):
        locs = []
        words = text.split()
        for w in words:
            clean_w = re.sub(r'[^가-힣]', '', w)
            
            # 🚨 중요: 별자리('~자리' 또는 특정 별자리 이름)는 출생지 후보에서 무조건 제외!
            if clean_w.endswith('자리') or clean_w in ZODIAC_SIGNS:
                continue
                
            if len(clean_w) >= 2 and clean_w[-1] in ['도', '시', '군', '구', '동', '읍', '면', '리', '부', '현', '주']:
                if clean_w in BLACKLIST_WORDS or any(bw in clean_w for bw in BLACKLIST_WORDS):
                    continue
                if clean_w not in ['우연히도', '아무래도', '그래도', '출신도', '하지만도', '간부', '본부', '지부', '정부', '우주', '거주', '이주', '상주', '지주', '주주', '맥주', '소주']:
                    locs.append(clean_w)
        return locs

    birthplace_text = get_td_text(r'출생지|고향')
    if not birthplace_text and birth_text:
        birthplace_text = birth_text

    if birthplace_text:
        for loc in extract_locations(birthplace_text):
            new_cats.add(f"{loc} 출신")

    residence_text = get_td_text(r'거주지')
    if residence_text:
        for loc in extract_locations(residence_text):
            new_cats.add(f"{loc} 거주")

    # ==========================================
    # 3. 별자리 독립 카테고리 추출
    # ==========================================
    full_info_text = infobox.get_text()
    for zodiac in ZODIAC_SIGNS:
        if zodiac in full_info_text:
            new_cats.add(zodiac)

    # ==========================================
    # 4. 학력 및 전공 추출 
    # ==========================================
    edu_text = get_td_text(r'학력')
    if edu_text:
        if '미진학' not in edu_text:
            schools = re.findall(r'([가-힣a-zA-Z]+(?:초등학교|국민학교|중학교|고등학교|대학교|대학))', edu_text)
            for school in schools: new_cats.add(f"{school} 출신")
            
            raw_majors = re.findall(r'([가-힣a-zA-Z]+학)\s*(?:/|\()', edu_text + " / ")
            excluded_majors = {'퇴학', '휴학', '입학', '중퇴', '재학', '수료', '졸업', '학력', '자퇴', '복학'}
            
            for major in raw_majors:
                if major not in excluded_majors:
                    new_cats.add(f"{major} 전공")

    # ==========================================
    # 5. 종교 추출
    # ==========================================
    rel_text = get_td_text(r'종교')
    if rel_text:
        rel = rel_text.split('(')[0].strip()
        rel = re.sub(r'[^가-힣]', '', rel)
        if rel:
            if "무종교" in rel or "무신론" in rel:
                new_cats.add(rel)
            elif "없음" not in rel:
                new_cats.add(f"{rel} 신자")

    # ==========================================
    # 6. SNS 사용 여부 추출
    # ==========================================
    sns_keywords = {
        '유튜브': ['유튜브', '채널', 'YouTube'],
        '치지직': ['치지직', 'CHZZK'],
        '인스타그램': ['인스타그램', 'Instagram', '인스타'],
        '엑스(SNS)': ['트위터', 'X계정'],
        '틱톡': ['틱톡', 'TikTok'],
        '네이버 카페': ['네이버 카페', '카페 매니저']
    }
    
    sns_text = ""
    for tr in info_soup.find_all('tr'):
        header_cell = tr.find(['th', 'td'])
        if header_cell and any(k in header_cell.get_text() for k in ['관련 링크', 'SNS', '방송', '링크']):
            sns_text += tr.get_text() + " "
            for a_tag in tr.find_all(['a', 'img']):
                sns_text += f" {a_tag.get('alt', '')} {a_tag.get('href', '')}"

    for cat_name, keywords in sns_keywords.items():
        if any(kw.lower() in sns_text.lower() for kw in keywords):
            new_cats.add(f"{cat_name} 사용자")

    # ==========================================
    # 7. 소속 정당 및 약력
    # ==========================================
    party_td = get_td_node(r'소속 정당')
    if party_td:
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

    work_text = get_td_text(r'현직') + " " + get_td_text(r'약력')
    terms = re.findall(r'(제\d+대 국회의원)', work_text)
    for term in terms: new_cats.add(term)

    # ==========================================
    # 8. 파일 병합 및 업데이트
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

print("\n🎉 별자리 오류 해결 및 독립 카테고리 적용 완료!")