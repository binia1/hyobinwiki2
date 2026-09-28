import os
import re
import shutil
import json
from bs4 import BeautifulSoup
from collections import defaultdict

WIKI_PATH = './'
BACKUP_PATH = './backup_html/'
JS_PATH = os.path.join(WIKI_PATH, 'js')

if not os.path.exists(BACKUP_PATH): os.makedirs(BACKUP_PATH)
if not os.path.exists(JS_PATH): os.makedirs(JS_PATH)

html_files = [f for f in os.listdir(WIKI_PATH) if f.endswith('.html')]

# 🚨 사용자 제공 철벽 블랙리스트
SUBSTRING_BLACKLIST = ['추정', '국교', '예정', '자리', '미진학']
EXACT_BLACKLIST = {
    '공교롭게도', '메구', '마리', '마시', '미모리', '아라시', '역시', '우연히도', '츠즈리', '코토리', 
    '당시', '요즘', '최근', '현재', '과거', '간부', '본부', '지부', '정부', '우주', '거주', '이주', '검정고시', '행정고시',
    '상주', '지주', '주주', '맥주', '소주', '아무래도', '그래도', '출신도', '하지만도','상징과도','노동운동가','경찰',
    '행정', '결정', '특정', '인정', '감정', '사정', '지정', '규정', '일정', '과정', '열정', '애정','공무원','국민의당','국민의당(2016년)','법조인','사회복지사','약사','의무경찰','효빈광역시의원','효빈광역시의회 의원','효빈남구의원','혐의','야반도주','히키코모리','재임 기간','주소',
    '삼촌', '사촌', '외삼촌', '농촌', '어촌', '산촌', '개정', '제정', '긍정', '부정', '기초의원', '농업인', '민주사회를 위한 변호사모임','민주평화당'
}
ZODIAC_SIGNS = ['양자리', '황소자리', '쌍둥이자리', '게자리', '사자자리', '처녀자리', '천칭자리', '전갈자리', '사수자리', '염소자리', '물병자리', '물고기자리']

print("🚀 1단계: 모든 문서의 인포박스를 분석하여 분류를 업데이트합니다...")

for filename in html_files:
    if filename in ['index.html', '최근_변경.html', '최근_토론.html', '생일달력.html', '출생지별_열람.html', '거주지별_열람.html']: continue

    filepath = os.path.join(WIKI_PATH, filename)
    with open(filepath, 'r', encoding='utf-8') as f: html_content = f.read()
    soup = BeautifulSoup(html_content, 'html.parser')
    
    cat_box = soup.find('div', class_=re.compile(r'category-box'))
    if not cat_box: continue

    infobox = soup.find(class_='infobox')
    if not infobox:
        for table in soup.find_all('table'):
            if re.search(r'출생|생년월일|소속 정당|학력|출신지|소속', table.get_text()):
                infobox = table
                break
    if not infobox: continue

    infobox_html = str(infobox)
    if not infobox.get_text(strip=True):
        script_tag = soup.find('script', src=re.compile(r'js/.*인포박스\.js'))
        if script_tag:
            js_p = os.path.join(WIKI_PATH, script_tag['src'])
            if os.path.exists(js_p):
                with open(js_p, 'r', encoding='utf-8') as jf: infobox_html = jf.read()
        else:
            guess_js_path = os.path.join(WIKI_PATH, 'js', filename.replace('.html', '_인포박스.js'))
            if os.path.exists(guess_js_path):
                with open(guess_js_path, 'r', encoding='utf-8') as jf: infobox_html = jf.read()

    info_soup = BeautifulSoup(infobox_html, 'html.parser')
    for tooltip in info_soup.find_all(['span', 'sup'], class_=re.compile(r'wiki-tooltip|wiki-fn')): tooltip.extract()

    existing_cats = [a.get_text(strip=True) for a in cat_box.find_all('a')]
    new_cats = set()
    
    # 🚨 실수로 지웠던 정당 태그 탐색용 get_td_node 완벽 복구!
    def get_td_node(th_regex):
        for tag in info_soup.find_all(['th', 'td', 'strong', 'b']):
            if re.search(th_regex, tag.get_text(strip=True)):
                target = tag if tag.name in ['th', 'td'] else tag.find_parent(['th', 'td'])
                if target:
                    next_td = target.find_next_sibling(['td', 'th'])
                    if next_td: return next_td
                    parent_tr = target.find_parent('tr')
                    if parent_tr:
                        next_tr = parent_tr.find_next_sibling('tr')
                        if next_tr: return next_tr.find(['td', 'th'])
        return None

    # 🚨 rowspan(칸 합치기) 텍스트 긁어오기 강력 엔진
    def get_td_text(th_regex):
        for tag in info_soup.find_all(['th', 'td', 'strong', 'b']):
            if re.search(th_regex, tag.get_text(strip=True)):
                target = tag if tag.name in ['th', 'td'] else tag.find_parent(['th', 'td'])
                if target:
                    result_texts = []
                    
                    for sibling in target.find_next_siblings(['td', 'th']):
                        result_texts.append(sibling.get_text(separator=' ', strip=True))
                        
                    rowspan = int(target.get('rowspan', 1))
                    if rowspan > 1:
                        parent_tr = target.find_parent('tr')
                        current_tr = parent_tr
                        for _ in range(rowspan - 1):
                            current_tr = current_tr.find_next_sibling('tr')
                            if current_tr:
                                for cell in current_tr.find_all(['td', 'th']):
                                    result_texts.append(cell.get_text(separator=' ', strip=True))
                                    
                    if not result_texts:
                        parent_tr = target.find_parent('tr')
                        if parent_tr:
                            next_tr = parent_tr.find_next_sibling('tr')
                            if next_tr:
                                for cell in next_tr.find_all(['td', 'th']):
                                    result_texts.append(cell.get_text(separator=' ', strip=True))

                    if result_texts:
                        raw_text = " ".join(result_texts)
                        return re.sub(r'>?\s*틀\s*포함\s*:\s*틀\s*:', '', raw_text).strip()
        return ""

    birth_text = get_td_text(r'^(출생|출생일|출생일시|생일|생년월일|출생년월일)$')
    if birth_text:
        year_match = re.search(r'(\d{4})년', birth_text)
        if year_match: new_cats.add(f"{year_match.group(1)}년 출생")
        md_match = re.search(r'(\d{1,2})월\s*(\d{1,2})일', birth_text)
        if md_match: new_cats.add(f"{md_match.group(1)}월 {md_match.group(2)}일 출생")

    def extract_locations(text):
        locs = []
        for w in re.split(r'[\s\(\)\[\]\,\.\/\~\-\+]+', text):
            clean_w = re.sub(r'[^가-힣0-9]', '', w)
            if len(clean_w) < 2 or any(sub in clean_w for sub in SUBSTRING_BLACKLIST) or clean_w in EXACT_BLACKLIST: continue
            if re.search(r'(학교|대학|유치원|학원|학과|학부|전공|의원|공무원|경찰|군인|교사|당|노조|단체|모임)$', clean_w): continue
            if re.search(r'(도|특별시|광역시|특별자치도|시|군|구|읍|면|동|동\d*가|로\d*가|리|부|현|주|정|촌)$', clean_w): locs.append(clean_w)
        return locs

    birthplace_text = get_td_text(r'출생지|출신지|고향') or birth_text
    if birthplace_text:
        for loc in extract_locations(birthplace_text): new_cats.add(f"{loc} 출신")

    residence_text = get_td_text(r'거주지')
    if residence_text:
        for loc in extract_locations(residence_text): new_cats.add(f"{loc} 거주")

    for zodiac in ZODIAC_SIGNS:
        if zodiac in info_soup.get_text(): new_cats.add(zodiac)

    edu_text = get_td_text(r'^학력$')
    if edu_text and '미진학' not in edu_text:
        schools = re.findall(r'([가-힣a-zA-Z0-9]+(?:초등학교|국민학교|중학교|고등학교|대학교|대학|대학원)(?:\([^)]+\))?)', edu_text)
        for school in schools:
            if school not in ['법과대학', '의과대학', '경영대학', '사범대학', '전문대학', '법학전문대학'] and not school.endswith('과대학'):
                new_cats.add(f"{school} 출신")
                
        raw_majors = re.findall(r'([가-힣a-zA-Z]+학)\s*(?:/|\()', edu_text + " / ")
        excluded_majors = {'퇴학', '휴학', '입학', '중퇴', '재학', '수료', '졸업', '학력', '자퇴', '복학', '대학', '대학교', '대학원'}
        for major in raw_majors:
            if major not in excluded_majors and not major.endswith('대학'):
                new_cats.add(f"{major} 전공")

    rel_text = get_td_text(r'^종교$')
    if rel_text:
        for r in re.split(r'[,/]', re.sub(r'\([^)]*\)', '', rel_text)):
            rel = re.sub(r'[^가-힣]', '', r.strip())
            if rel and "국교" not in rel and len(rel) < 10:
                new_cats.add(rel if "무종교" in rel or "무신론" in rel else f"{rel} 신자")

    sns_keywords = {'유튜브': ['유튜브', '채널', 'YouTube'], '치지직': ['치지직', 'CHZZK'], '인스타그램': ['인스타그램', 'Instagram', '인스타'], '엑스(SNS)': ['트위터', 'X계정'], '틱톡': ['틱톡', 'TikTok'], '네이버 카페': ['네이버 카페', '카페 매니저']}
    sns_text = ""
    for tr in info_soup.find_all('tr'):
        if tr.find(['th', 'td']) and any(k in tr.find(['th', 'td']).get_text() for k in ['관련 링크', 'SNS', '방송', '링크']):
            sns_text += tr.get_text() + " " + " ".join([f"{a.get('alt', '')} {a.get('href', '')}" for a in tr.find_all(['a', 'img'])])
    for cat_name, keywords in sns_keywords.items():
        if any(kw.lower() in sns_text.lower() for kw in keywords): new_cats.add(f"{cat_name} 사용자")

    # 🚨 정당 추출 로직 정상 작동
    party_td = get_td_node(r'소속 정당|정당')
    if party_td:
        extracted = []
        if party_td.find_all(['span', 'a'], class_=re.compile(r'party-badge|party-label')):
            extracted = [re.sub(r'>?\s*틀\s*포함\s*:\s*틀\s*:', '', b.get_text(strip=True)).strip() for b in party_td.find_all(['span', 'a'], class_=re.compile(r'party-badge|party-label')) if len(b.get_text(strip=True)) > 1]
        else:
            for br in party_td.find_all('br'): br.replace_with(',')
            extracted = [p.replace('출당', '').replace('복당', '').replace('무당적', '').strip() for p in re.split(r'[,→/]', re.sub(r'>?\s*틀\s*포함\s*:\s*틀\s*:', '', re.sub(r'\([^)]*\)|\[[^\]]*\]', '', party_td.get_text(strip=True)))) if len(p.strip()) > 1]
        for p in extracted:
            p = re.sub(r'>?\s*틀\s*포함\s*:\s*틀\s*:', '', p).strip()
            if '무소속' in p: new_cats.add("무소속")
            elif p and p not in ['소속']: new_cats.add(f"{p} 소속")

    for term in re.findall(r'(제\d+대 국회의원)', get_td_text(r'^현직$') + " " + get_td_text(r'^약력$')): new_cats.add(term)

    cats_to_add = sorted([nc for nc in new_cats if nc not in existing_cats])
    
    if cats_to_add:
        match = re.search(r'(<div[^>]*class="[^"]*category-box[^"]*"[^>]*>.*?)(</div>)', html_content, re.DOTALL)
        if match:
            shutil.copy2(filepath, os.path.join(BACKUP_PATH, filename))
            new_cat_box = match.group(1) + "".join([f'\n<span style="color: var(--wiki-border);">|</span> \n<a class="wiki-link" href="{cat}.html">{cat}</a> ' for cat in cats_to_add]) + "\n" + match.group(2)
            with open(filepath, 'w', encoding='utf-8') as f: f.write(html_content[:match.start()] + new_cat_box + html_content[match.end():])
            print(f"✅ {filename} 업데이트 (추가: {', '.join(cats_to_add)})")


# ==========================================
# 🚀 2단계: 출생지 및 거주지 열람기 생성
# ==========================================
print("\n🚀 2단계: 최신 업데이트 데이터를 바탕으로 열람기를 즉시 생성합니다...")

def get_chosung(text):
    CHOSUNG_LIST = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
    for ch in text:
        if '가' <= ch <= '힣': return CHOSUNG_LIST[(ord(ch) - ord('가')) // 588]
    return '기타'

birth_map = defaultdict(lambda: {'type': '', 'people': set()})
resi_map = defaultdict(lambda: {'type': '', 'people': set()})
birthday_date_map = defaultdict(list)
birthday_year_map = defaultdict(list)

for filename in os.listdir(WIKI_PATH):
    if not filename.endswith('.html') or filename in ['index.html', '최근_변경.html', '최근_토론.html', '생일달력.html', '출생지별_열람.html', '거주지별_열람.html']: continue
    name = filename.replace('.html', '')
    try:
        with open(os.path.join(WIKI_PATH, filename), 'r', encoding='utf-8') as f:
            cat_box = BeautifulSoup(f.read(), 'html.parser').find('div', class_=re.compile(r'category-box'))
            if cat_box:
                for a in cat_box.find_all('a'):
                    cat_text = a.get_text(strip=True)
                    
                    if cat_text.endswith(' 출신'):
                        loc = cat_text.replace(' 출신', '').strip()
                        if re.search(r'(학교|대학|대학원)(?:\([^)]+\))?$', loc): t = '학교'
                        elif loc.endswith('대학'): t = '단과대학'
                        else: t = '행정구역'
                        birth_map[loc]['type'] = t
                        birth_map[loc]['people'].add(name)
                        
                    elif cat_text.endswith(' 거주'):
                        loc = cat_text.replace(' 거주', '').strip()
                        resi_map[loc]['type'] = '행정구역'
                        resi_map[loc]['people'].add(name)
                        
                    elif cat_text.endswith(' 전공'):
                        major = cat_text.replace(' 전공', '').strip()
                        birth_map[major]['type'] = '전공'
                        birth_map[major]['people'].add(name)
                        
                    elif cat_text.endswith('년 출생'):
                        year = cat_text.replace(' 출생', '').strip()
                        birthday_year_map[year].append(name)
                    elif cat_text.endswith('일 출생') and '월' in cat_text:
                        date = cat_text.replace(' 출생', '').strip()
                        birthday_date_map[date].append(name)
    except: pass

def make_viewer(data_map, out_file, title, icon):
    chosung_group = defaultdict(list)
    for loc, data in sorted(data_map.items()):
        ch = get_chosung(loc)
        ch = 'ㄱ' if ch == 'ㄲ' else 'ㄷ' if ch == 'ㄸ' else 'ㅂ' if ch == 'ㅃ' else 'ㅅ' if ch == 'ㅆ' else 'ㅈ' if ch == 'ㅉ' else ch
        chosung_group[ch].append((loc, data['type'], sorted(list(data['people']))))

    html_out = f"""<!DOCTYPE html>
<html lang="ko">
<head>
    <link href="이미지/효빈위키아이콘.webp" rel="icon"/>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>{title} - 효빈위키</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="wiki_font_standard.css" rel="stylesheet"/>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700;900&display=swap');
        :root {{ --wiki-main: #003B96; --wiki-bg: #ffffff; --wiki-text: #373a3c; --wiki-border: #ccc; }}
        body {{ font-family: 'Noto Sans KR', sans-serif; background-color: var(--wiki-bg); color: var(--wiki-text); margin: 0; }}
        .wiki-container {{ max-width: 1300px; margin: 0 auto; padding: 20px 40px; min-height: 100vh; border-left: 1px solid var(--wiki-border); border-right: 1px solid var(--wiki-border); background: white; }}
        h1 {{ font-size: 2.5rem; font-weight: 900; border-bottom: 2px solid var(--wiki-main); padding-bottom: 10px; margin-bottom: 20px; }}
        .wiki-btn {{ border: 1px solid #ccc; background: white; padding: 6px 14px; border-radius: 4px; font-size: 0.95rem; font-weight: bold; color: #333; text-decoration: none; display: inline-block; transition: 0.2s; }}
        .wiki-btn:hover {{ background: #f0f0f0; border-color: #999; color: var(--wiki-main); }}
        .chosung-title {{ font-size: 1.6rem; font-weight: 900; margin-top: 40px; margin-bottom: 15px; color: var(--wiki-main); border-bottom: 2px solid #eee; padding-bottom: 5px; display: flex; align-items: center; gap: 8px; }}
        .loc-box {{ margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); overflow: hidden; }}
        .loc-header {{ background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; padding: 12px 18px; font-weight: bold; color: #374151; display: flex; align-items: center; gap: 8px; font-size: 1.05rem; }}
        .loc-content {{ padding: 18px; display: flex; flex-wrap: wrap; gap: 10px; background: #fff; }}
        .filter-box {{ background: #f8f9fa; border: 1px solid #ddd; padding: 15px; border-radius: 5px; margin-bottom: 30px; text-align: center; }}
        select#regionFilter {{ padding: 8px 15px; border-radius: 5px; border: 1px solid #ccc; font-size: 1.05rem; outline: none; cursor: pointer; font-weight: bold; color: var(--wiki-main); }}
        
        .badge-학교 {{ background-color: #4CAF50; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; margin-left: 8px; font-weight: bold; }}
        .badge-단과대학 {{ background-color: #FF9800; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; margin-left: 8px; font-weight: bold; }}
        .badge-전공 {{ background-color: #9C27B0; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8em; margin-left: 8px; font-weight: bold; }}
    </style>
</head>
<body>
    <nav class="font-sans bg-[#7777AA] text-white p-3 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-white text-[#003B96] rounded font-black flex items-center justify-center text-lg">H</div>
            <a class="font-bold text-xl cursor-pointer no-underline text-white" href="index.html">HyobinWiki</a>
        </div>
    </nav>
    <div class="wiki-container shadow-lg">
        <h1>{title}</h1>
        <div class="filter-box">
            <span style="font-weight: bold; margin-right: 10px;">{icon} 카테고리 / 단위 필터:</span>
            <select id="regionFilter" onchange="filterRegions()">
                <optgroup label="✅ 전체보기">
                    <option value="type-all">모든 데이터 보기</option>
                </optgroup>
                <optgroup label="📂 대분류 필터">
                    <option value="type-행정구역">🌍 행정구역(지역)만 보기</option>
                    <option value="type-학교">🏫 학교(초/중/고/대/원)만 보기</option>
                    <option value="type-단과대학">🏛️ 단과대학만 보기</option>
                    <option value="type-전공">📚 전공/학과만 보기</option>
                </optgroup>
                <optgroup label="🌍 행정구역 상세 필터">
                    <option value="도">도 (한국 9도, 일본 도쿄도 등)</option>
                    <option value="부">부 (일본 오사카부, 교토부 등)</option>
                    <option value="현">현 (일본 시즈오카현 등)</option>
                    <option value="주">주 (미국 캘리포니아주 등)</option>
                    <option value="시">시 (예: 효빈광역시, 빈주시)</option>
                    <option value="군">군 (예: 낭원군, 운진군)</option>
                    <option value="구">구 (예: 남구, 창전구)</option>
                    <option value="정">정 (일본 정/마치/초)</option>
                    <option value="읍">읍 (예: 계성읍)</option>
                    <option value="면">면 (예: 흑택면)</option>
                    <option value="촌">촌 (일본 촌/무라)</option>
                    <option value="동">동/가 (예: 고송동, 중앙동1가)</option>
                    <option value="리">리 (예: 앵내리)</option>
                </optgroup>
            </select>
        </div>
"""
    for ch in sorted(chosung_group.keys()):
        html_out += f'        <div class="chosung-group">\n            <div class="chosung-title"><span>📌</span> {ch}</div>\n'
        for loc, t, people in chosung_group[ch]:
            if loc in EXACT_BLACKLIST or loc.endswith('자리'): continue
            badge_html = f'<span class="badge-{t}">{t}</span>' if t != '행정구역' else ''
            html_out += f'            <div class="loc-box" data-loc="{loc}" data-type="{t}">\n                <div class="loc-header">{icon} {loc} {badge_html} <span style="color:#777; font-size:0.9em; margin-left:auto;">({len(people)}명)</span></div>\n                <div class="loc-content">\n'
            for p in people: html_out += f'                    <a href="{p}.html" class="wiki-btn">{p}</a>\n'
            html_out += '                </div>\n            </div>\n'
        html_out += '        </div>\n'

    html_out += """        <div id="footer-container" style="margin-top: 50px;"></div>
    </div>
    <script>
    function filterRegions() {
        const filter = document.getElementById('regionFilter').value;
        document.querySelectorAll('.chosung-group').forEach(group => {
            let visible = 0;
            group.querySelectorAll('.loc-box').forEach(box => {
                const loc = box.getAttribute('data-loc');
                const type = box.getAttribute('data-type');
                let isMatch = false;
                
                if (filter === 'type-all') {
                    isMatch = true;
                } else if (filter.startsWith('type-')) {
                    const targetType = filter.replace('type-', '');
                    if (type === targetType) isMatch = true;
                } else if (type === '행정구역') {
                    if (filter === '동' && (loc.endsWith('동') || loc.match(/[동로]\\d*가$/))) {
                        isMatch = true;
                    } else if (loc.endsWith(filter)) {
                        isMatch = true;
                    }
                }
                
                box.style.display = isMatch ? 'block' : 'none';
                if (isMatch) visible++;
            });
            group.style.display = visible > 0 ? 'block' : 'none';
        });
    }
    </script>
    <script src="assets/load-footer.js"></script>
    <script src="assets/wiki_index.js"></script>
</body>
</html>"""
    with open(out_file, 'w', encoding='utf-8') as f: f.write(html_out)
    print(f"🎉 [{out_file}] 콤보박스 분리형 자동 생성 완료!")

make_viewer(birth_map, '출생지별_열람.html', '출생지 및 학력/전공 열람', '🌍')
make_viewer(resi_map, '거주지별_열람.html', '거주지별 인물 열람', '🏠')


# ==========================================
# 🚀 3단계: 생일 및 출생연도 데이터 (js/birthday_data.js) 파일 생성
# ==========================================
print("\n🚀 3단계: 생일달력을 위한 데이터를 js/birthday_data.js에 갱신합니다...")

js_content = "// 자동 생성된 효빈위키 생일 달력 및 출생연도 데이터\n\n"
js_content += f"const birthdayData = {json.dumps(birthday_date_map, ensure_ascii=False, indent=4)};\n\n"
js_content += f"const birthYearData = {json.dumps(birthday_year_map, ensure_ascii=False, indent=4)};\n"

with open(os.path.join(JS_PATH, 'birthday_data.js'), 'w', encoding='utf-8') as f:
    f.write(js_content)

print("🎉 [js/birthday_data.js] 파일 갱신 및 덮어쓰기 완료!")
print("\n🎉🎉🎉 모든 작업(카테고리 삽입 + 열람기 생성 + 생일데이터 JS 갱신)이 완벽하게 끝났습니다! 🎉🎉🎉")