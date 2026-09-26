import os
import re
from bs4 import BeautifulSoup
from collections import defaultdict

WIKI_PATH = './'
OUTPUT_FILE = '출생지별_열람.html'

def get_chosung(text):
    CHOSUNG_LIST = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
    for ch in text:
        if '가' <= ch <= '힣':
            return CHOSUNG_LIST[(ord(ch) - ord('가')) // 588]
    return '기타'

def is_valid_location(loc):
    if len(loc) < 2: 
        return False
    
    # 1. 찌꺼기 데이터(직업, 전공, 정당, 학교 등) 절대적 차단
    if re.search(r'(학교|대학|유치원|학원|학과|학부|전공|의원|공무원|경찰|군인|교사|당|노조|단체)$', loc):
        return False
        
    # 2. 행정구역과 겹치는 일반 명사 차단 (간부, 우주 등)
    invalid_words = [
        '검정고시', '고시', '관리', '수리', '물리', '지리', '심리', '유리', '추리', '총리', '대리', 
        '농구', '야구', '배구', '축구', '탁구', '당구', '연구', '간부', '본부', '지부', '정부',
        '우주', '거주', '이주', '상주', '지주', '주주', '맥주', '소주'
    ]
    if any(loc.endswith(w) for w in invalid_words):
        return False
        
    # 3. 🌍 한국(도/시/군/구/읍/면/동/리) + 일본(부/현) + 미국(주) 행정구역 허용!
    if re.search(r'(도|시|군|구|읍|면|동|동\d+가|로\d+가|리|부|현|주)$', loc):
        return True
        
    return False

def generate_birthplace_viewer():
    print("🌍 글로벌(한국, 일본, 미국 등) 출생지 정보를 수집하는 중입니다...")
    html_files = [f for f in os.listdir(WIKI_PATH) if f.endswith('.html')]
    
    location_map = defaultdict(set)
    
    for filename in html_files:
        if filename in ['index.html', '최근_변경.html', '최근_토론.html', '생일달력.html', OUTPUT_FILE]:
            continue
            
        name = filename.replace('.html', '')
        filepath = os.path.join(WIKI_PATH, filename)
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                html_content = f.read()
        except:
            continue
            
        soup = BeautifulSoup(html_content, 'html.parser')
        cat_box = soup.find('div', class_=re.compile(r'category-box'))
        if not cat_box: continue
        
        cats = [a.get_text(strip=True) for a in cat_box.find_all('a')]
        
        for cat in cats:
            if cat.endswith('출신'):
                loc = cat.replace(' 출신', '').strip()
                if is_valid_location(loc):
                    location_map[loc].add(name)

    chosung_group = defaultdict(list)
    
    for loc, people in sorted(location_map.items()):
        chosung = get_chosung(loc)
        if chosung in ['ㄲ']: chosung = 'ㄱ'
        if chosung in ['ㄸ']: chosung = 'ㄷ'
        if chosung in ['ㅃ']: chosung = 'ㅂ'
        if chosung in ['ㅆ']: chosung = 'ㅅ'
        if chosung in ['ㅉ']: chosung = 'ㅈ'
        
        chosung_group[chosung].append((loc, sorted(list(people))))

    # ==========================================
    # HTML 템플릿 (해외 행정구역 필터 옵션 추가)
    # ==========================================
    html_output = """<!DOCTYPE html>
<html lang="ko">
<head>
    <link href="이미지/효빈위키아이콘.webp" rel="icon"/>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>출생지별 열람 - 효빈위키</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="wiki_font_standard.css" rel="stylesheet"/>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700;900&display=swap');
        :root { 
            --wiki-main: #003B96; 
            --wiki-bg: #ffffff; 
            --wiki-text: #373a3c; 
            --wiki-border: #ccc;
        }
        body { font-family: 'Noto Sans KR', sans-serif; background-color: var(--wiki-bg); color: var(--wiki-text); margin: 0; }
        .wiki-container { max-width: 1300px; margin: 0 auto; padding: 20px 40px; min-height: 100vh; border-left: 1px solid var(--wiki-border); border-right: 1px solid var(--wiki-border); background: white; }
        h1 { font-size: 2.5rem; font-weight: 900; border-bottom: 2px solid var(--wiki-main); padding-bottom: 10px; margin-bottom: 20px; }
        
        .wiki-btn { border: 1px solid #ccc; background: white; padding: 6px 14px; border-radius: 4px; font-size: 0.95rem; font-weight: bold; color: #333; text-decoration: none; display: inline-block; transition: 0.2s; }
        .wiki-btn:hover { background: #f0f0f0; border-color: #999; color: var(--wiki-main); }
        .chosung-title { font-size: 1.6rem; font-weight: 900; margin-top: 40px; margin-bottom: 15px; color: var(--wiki-main); border-bottom: 2px solid #eee; padding-bottom: 5px; display: flex; align-items: center; gap: 8px; }
        .loc-box { margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); overflow: hidden; }
        .loc-header { background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; padding: 12px 18px; font-weight: bold; color: #374151; display: flex; align-items: center; gap: 8px; font-size: 1.05rem; }
        .loc-content { padding: 18px; display: flex; flex-wrap: wrap; gap: 10px; background: #fff; }
        
        .filter-box { background: #f8f9fa; border: 1px solid #ddd; padding: 15px; border-radius: 5px; margin-bottom: 30px; text-align: center; }
        select#regionFilter { padding: 8px 15px; border-radius: 5px; border: 1px solid #ccc; font-size: 1.05rem; outline: none; cursor: pointer; font-weight: bold; color: var(--wiki-main); }
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
        <h1>출생지별 인물 열람</h1>
        
        <div class="filter-box">
            <span style="font-weight: bold; margin-right: 10px;">🌍 행정구역 단위 필터:</span>
            <select id="regionFilter" onchange="filterRegions()">
                <option value="all">모든 구역 보기</option>
                <option value="도">도 (한국 8도, 일본 도쿄도·홋카이도 등)</option>
                <option value="부">부 (일본 오사카부, 교토부 등)</option>
                <option value="현">현 (일본 시즈오카현, 오키나와현 등)</option>
                <option value="주">주 (미국 캘리포니아주, 하와이주 등)</option>
                <option value="시">시 (예: 서울특별시, 도쿄시, 오사카시)</option>
                <option value="군">군 (예: 의성군, 울주군)</option>
                <option value="구">구 (예: 남구, 영등포구)</option>
                <option value="읍">읍 (예: 계성읍)</option>
                <option value="면">면 (예: 구지면)</option>
                <option value="동">동/가 (예: 신정동, 영등포동8가)</option>
                <option value="리">리 (예: 비마리)</option>
            </select>
        </div>
"""

    for chosung in sorted(chosung_group.keys()):
        html_output += f'        <div class="chosung-group">\n'
        html_output += f'            <div class="chosung-title"><span>📌</span> {chosung}</div>\n'
        
        for loc, people in chosung_group[chosung]:
            html_output += f'            <div class="loc-box" data-loc="{loc}">\n'
            html_output += f'                <div class="loc-header">🌍 {loc} <span style="color:#777; font-size:0.9em;">({len(people)}명)</span></div>\n'
            html_output += '                <div class="loc-content">\n'
            for person in people:
                html_output += f'                    <a href="{person}.html" class="wiki-btn">{person}</a>\n'
            html_output += '                </div>\n'
            html_output += '            </div>\n'
        
        html_output += '        </div>\n'

    html_output += """
        <div id="footer-container" style="margin-top: 50px;"></div>
    </div>
    
    <script>
    function filterRegions() {
        const filter = document.getElementById('regionFilter').value;
        const groups = document.querySelectorAll('.chosung-group');
        
        groups.forEach(group => {
            let visibleCount = 0;
            const boxes = group.querySelectorAll('.loc-box');
            
            boxes.forEach(box => {
                const locName = box.getAttribute('data-loc');
                let isMatch = false;
                
                if (filter === 'all') {
                    isMatch = true;
                } else if (filter === '동') {
                    if (locName.endsWith('동') || locName.match(/[동로]\\d*가$/)) {
                        isMatch = true;
                    }
                } else {
                    if (locName.endsWith(filter)) {
                        isMatch = true;
                    }
                }
                
                box.style.display = isMatch ? 'block' : 'none';
                if (isMatch) visibleCount++;
            });
            
            group.style.display = visibleCount > 0 ? 'block' : 'none';
        });
    }
    </script>
    <script src="assets/load-footer.js"></script>
    <script src="assets/wiki_index.js"></script>
    <script src="assets/hb_wiki_core.js"></script>
</body>
</html>
"""

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(html_output)
        
    print(f"🎉 성공적으로 글로벌 지원 [{OUTPUT_FILE}] 파일이 생성되었습니다!")

if __name__ == "__main__":
    generate_birthplace_viewer()