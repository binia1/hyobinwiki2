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
    infobox = soup.find(class_='infobox')
    if not infobox: continue
        
    cat_box = soup.find('div', class_=re.compile(r'category-box'))
    if not cat_box: continue

    existing_cats = [a.get_text(strip=True) for a in cat_box.find_all('a')]
    new_cats = set()
    
    def get_td_text(th_name):
        th = infobox.find('th', string=re.compile(th_name))
        if th and th.find_next_sibling('td'):
            return th.find_next_sibling('td').get_text(separator=' ', strip=True)
        return ""

    # ① 출생
    birth_text = get_td_text('출생')
    if birth_text:
        year_match = re.search(r'(\d{4})년', birth_text)
        if year_match: new_cats.add(f"{year_match.group(1)}년 출생")
        locs = re.findall(r'([가-힣]+(?:광역시|특별시|도|시|군|구|동|읍|면|리))', birth_text)
        for loc in locs: new_cats.add(f"{loc} 출신")

    # ② 거주지
    res_text = get_td_text('거주지')
    if res_text:
        locs = re.findall(r'([가-힣]+(?:동|읍|면|리))', res_text)
        for loc in locs: new_cats.add(f"{loc} 거주")

    # ③ 학력
    edu_text = get_td_text('학력')
    if edu_text:
        schools = re.findall(r'([가-힣a-zA-Z]+(?:초등학교|국민학교|중학교|고등학교|대학교|대학))', edu_text)
        for school in schools: new_cats.add(f"{school} 출신")
        majors = re.findall(r'([가-힣]+학)\s*/', edu_text)
        for major in majors: new_cats.add(f"{major} 전공")
        
    # ④ 종교
    rel_text = get_td_text('종교')
    if rel_text:
        rel = rel_text.split('(')[0].strip()
        if rel and "무교" not in rel and "없음" not in rel:
            new_cats.add(f"{rel} 신자")

    # ⑤ 소속 정당 (🔥 초정밀 태그 추적 방식으로 완전 개조)
    party_th = infobox.find('th', string=re.compile('소속 정당'))
    if party_th and party_th.find_next_sibling('td'):
        party_td = party_th.find_next_sibling('td')
        
        extracted_parties = []
        
        # 1. HTML 안에 뱃지(party-badge, party-label)가 있으면 뱃지 이름만 쏙쏙 추출
        badges = party_td.find_all(['span', 'a'], class_=re.compile(r'party-badge|party-label'))
        if badges:
            for badge in badges:
                p_name = badge.get_text(strip=True)
                if len(p_name) > 1: extracted_parties.append(p_name)
        else:
            # 2. 뱃지가 없이 텍스트로만 나열된 경우 대비 (<br> 태그와 기호로 정확히 쪼개기)
            for br in party_td.find_all('br'):
                br.replace_with(',')
            raw_text = party_td.get_text(strip=True)
            
            # (1998), [1] 같은 불순물 완전 삭제
            raw_text = re.sub(r'\([^)]*\)|\[[^\]]*\]', '', raw_text)
            
            # 화살표, 쉼표 등으로 다중 당적 쪼개기
            parts = re.split(r'[,→/]', raw_text)
            for p in parts:
                clean_p = p.replace('출당', '').replace('복당', '').replace('무당적', '').strip()
                if len(clean_p) > 1:
                    extracted_parties.append(clean_p)
                    
        # 무소속 뒤에 찌꺼기 붙는 현상 완벽 방지
        for party in extracted_parties:
            if '무소속' in party:
                new_cats.add("무소속")
            else:
                new_cats.add(f"{party} 소속")

    # ⑥ 현직 및 약력
    work_text = get_td_text('현직') + " " + get_td_text('약력')
    terms = re.findall(r'(제\d+대 국회의원)', work_text)
    for term in terms: new_cats.add(term)

    # [병합 및 중복 필터링]
    cats_to_add = []
    for nc in sorted(new_cats):
        if not any(nc in ex or ex in nc for ex in existing_cats):
            cats_to_add.append(nc)
            
    if not cats_to_add: continue
        
    # HTML 업데이트
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

print("\n🎉 모든 인물 문서의 분류 자동 생성이 완료되었습니다!")