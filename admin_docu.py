import pandas as pd
import re
import difflib

# 1. 지역별 퍼스널 컬러 매핑
COLOR_MAP = {
    '효빈광역시': '#7777aa', '중구': '#BB9955', '동구': '#FF9922', '서구': '#00AABB',
    '남구': '#DDBBFF', '북구': '#7799CC', '청엽구': '#006699', '창전구': '#33AAFF',
    '안천구': '#AA66DD', '탄성군': '#BBFF64', '덕빈북도': '#4AD898', '강주시': '#ffc94a',
    '계성시': '#ED7D95', '군천시': '#E7D600', '기도군': '#01B7ED', '낭원군': '#485EC6',
    '덕현군': '#FF5800', '모제군': '#A664A0', '반양군': '#D81C2F', '상안군': '#84C36E',
    '서진시': '#9CA5B9', '서해시': '#37B484', '선곡군': '#D6D5CA', '약산시': '#F8C8C4',
    '저천군': '#1D1D1D', '전산시': '#FF7F27', '치원군': '#aa7799', '천주시': '#8B4993',
    '빈주시': '#ffeeaa', '궁하구': '#8B4993', '천성구': '#8B4993', '빈성구': '#ffeeaa',
    '가원구': '#ffeeaa', '장기구': '#ffeeaa', '덕빈남도': '#335566', '매산군': '#A0FFF9',
    '매성시': '#FF6E90', '비천시': '#74F466', '석창군': '#0000A0', '방산시': '#FFF442',
    '분주군': '#FF3535', '고포군': '#B2FFDD', '곡천군': '#FF51C4', '인곡군': '#4cd2e2',
    '관수군': '#e49dfd', '운진군': '#bbff64', '두원군': '#e3ba3a', '마진시': '#ff99be',
    '덕주시': '#ff9ea9', '조전구': '#ff9ea9', '덕산구': '#ff9ea9', '하정시': '#ff3b72',
    '원안군': '#00aabb', '낙주시': '#bb0033'
}

# 2. 필수 헬퍼 함수들
def get_val(row_dict, col_name, default=""):
    val = row_dict.get(col_name)
    return str(val).strip() if pd.notna(val) else default

def get_party_badge(party_str):
    if not party_str or pd.isna(party_str): return ""
    if '민주' in party_str:
        return f'<span class="bg-[#004EA2] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">더불어민주당</span>'
    elif '국민의힘' in party_str or '국힘' in party_str:
        return f'<span class="bg-[#e61e2b] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">국민의힘</span>'
    elif '진보' in party_str:
        return f'<span class="bg-[#d6001c] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">진보당</span>'
    elif '조국혁신당' in party_str or '조국' in party_str:
        return f'<span class="bg-[#0073CF] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">조국혁신당</span>'
    else:
        name = party_str.split("/")[0] if "/" in party_str else party_str
        return f'<span class="bg-[#999999] text-white px-1.5 py-0.5 rounded text-[10px] font-bold">{name}</span>'

def format_text(text):
    if pd.isna(text): return ""
    text = str(text)
    text = re.sub(r'~~(.*?)~~', r'<del>\1</del>', text)
    return text.replace('\n', '<br/>')

def apply_railway_logos(sigungu, text):
    if not text: return text
    if sigungu in ['빈성구', '가원구', '장기구']:
        text = text.replace('1호선', '[[B1]]1호선')
        text = text.replace('2호선', '[[B2]]2호선')
        text = re.sub(r'(빈주광역선|빈주권\s*광역전철|빈주\s*광역전철|빈주권광역철도|빈주광역철도)', r'[[BW]]\1', text)
    elif sigungu in ['덕산구', '조전구']:
        text = re.sub(r'(덕주1호선|1호선)', r'[[D1]]\1', text)
    elif sigungu == '약산시':
        text = re.sub(r'(효빈1호선|1호선)', r'[[H1]]\1', text)
        text = re.sub(r'(빈효선광역전철|빈효선\s*광역전철|빈효선|빈효광역선)', r'[[HW]]\1', text)
    elif sigungu in ['계성시', '강주시', '덕현군', '반양군']:
        text = re.sub(r'(빈주광역선|빈주권\s*광역전철|빈주\s*광역전철|빈주권광역철도|빈주광역철도)', r'[[BW]]\1', text)
        
    img_style = 'height:15px; display:inline-block; vertical-align:middle; margin-right:4px; margin-bottom:2px;'
    text = text.replace('[[B1]]', f'<img src="이미지/svg/빈주1.svg" style="{img_style}">')
    text = text.replace('[[B2]]', f'<img src="이미지/svg/빈주2.svg" style="{img_style}">')
    text = text.replace('[[BW]]', f'<img src="이미지/svg/빈주광역선.svg" style="{img_style}">')
    text = text.replace('[[D1]]', f'<img src="이미지/svg/덕주1.svg" style="{img_style}">')
    text = text.replace('[[H1]]', f'<img src="이미지/svg/효빈1호선.svg" style="{img_style}">')
    text = text.replace('[[HW]]', f'<img src="이미지/svg/빈효광역선.svg" style="{img_style}">')
    
    text = re.sub(r'(<img src="이미지/svg/[^"]+" style="[^"]+">)+', r'\1', text)
    return text

def apply_fuzzy_strikethrough(text, strikethrough_raw):
    if pd.isna(text): return ""
    text = str(text)
    text = re.sub(r'~~(.*?)~~', r'<del>\1</del>', text)
    if pd.isna(strikethrough_raw) or not str(strikethrough_raw).strip():
        return text.replace('\n', '<br/>')
    
    raw_lines = str(strikethrough_raw).split('\n')
    for line in raw_lines:
        phrase = line.strip()
        if phrase.startswith('~~') and phrase.endswith('~~'): phrase = phrase[2:-2]
        if len(phrase) < 2: continue
        if phrase in text and f"<del>{phrase}</del>" not in text:
            text = text.replace(phrase, f"<del>{phrase}</del>")
            continue
        sentences = re.split(r'(?<=[.!?])\s+|\n', text)
        best_match, highest_ratio = None, 0.0
        for s in sentences:
            clean_s = re.sub(r'<[^>]+>', '', s).strip()
            if not clean_s: continue
            ratio = difflib.SequenceMatcher(None, phrase, clean_s).ratio()
            if ratio > 0.6 and ratio > highest_ratio:
                highest_ratio = ratio
                best_match = s
        if best_match and f"<del>{best_match}</del>" not in text:
            text = text.replace(best_match, f"<del>{best_match}</del>")
    return text.replace('\n', '<br/>')

def parse_politician(raw_str):
    if pd.isna(raw_str) or not str(raw_str).strip(): return ""
    match = re.match(r'(.*?)\s*\((.*?)/(.*?)\)', str(raw_str))
    if match:
        name, party, term = match.groups()
        badge = get_party_badge(party)
        return f"""
        <tr>
            <td class="w-[45%] border-r border-b border-[var(--wiki-border)] p-1">{badge}</td>
            <td class="w-[55%] border-b border-[var(--wiki-border)] p-1 font-bold text-xs">{name.strip()} <span class="text-[9px] font-normal text-gray-600">({term.strip()})</span></td>
        </tr>
        """
    return f'<tr><td colspan="2" class="p-1 font-bold text-xs">{raw_str}</td></tr>'

def build_population_table(dong_name, total_pop, detail_str):
    if not detail_str or str(detail_str).lower() == 'nan': return ""
    parsed_items = re.findall(r'([가-힣0-9A-Za-z·]+)\s*\(([\d,]+)\)', detail_str)
    if not parsed_items: return ""

    cols_per_row = 3
    html = f'<table class="w-full text-center text-sm border-collapse border border-gray-300 mb-6 mt-4">\n'
    html += f'<thead class="bg-gray-100">\n'
    html += f'<tr><th class="border border-gray-300 p-2 bg-gray-100 text-black font-bold" colspan="6">{dong_name} 법정구역별 인구 현황 (총 {total_pop})</th></tr>\n'
    html += f'</thead>\n<tbody>\n'

    for i in range(0, len(parsed_items), cols_per_row):
        row_items = parsed_items[i:i+cols_per_row]
        html += '<tr>\n'
        for name, pop in row_items:
            html += f'<td class="border border-gray-300 p-2 font-bold w-[16.6%]">{name}</td><td class="border border-gray-300 p-2 w-[16.6%]">{pop}</td>\n'
        for _ in range(cols_per_row - len(row_items)):
            html += f'<td class="border border-gray-300 p-2"></td><td class="border border-gray-300 p-2"></td>\n'
        html += '</tr>\n'

    html += '</tbody>\n</table>\n'
    return html

# 4. 데이터 로드 및 정렬
df = pd.read_excel("시군구_개별행정구역_문서_제작용_취소선추가.xlsx")

def sort_type(name):
    name = str(name)
    if name.endswith('동') or name.endswith('가'): return 1
    if name.endswith('읍'): return 2
    if name.endswith('면'): return 3
    return 4

df['sort_order'] = df['행정동/읍면'].apply(sort_type)
df = df.sort_values(by=['시군구', 'sort_order', '행정동/읍면'])
grouped = df.groupby('시군구')

# ==========================================
# 5. 오리지널 HTML 템플릿 100% 보존
# ==========================================
HTML_TEMPLATE_TOP = """<!DOCTYPE html>
<html lang="ko">
<head>
<link href="이미지/효빈위키아이콘.webp" rel="icon"/>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>[[SIGUNGU]] 하위 행정구역 - 효빈위키</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
<style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
        
        :root { 
            --wiki-fixed: #7777AA; 
            --wiki-main: [[THEME_COLOR]]; 
            --wiki-point: [[THEME_COLOR]];
            --wiki-header: [[THEME_COLOR]];
            --wiki-border: #ccc; 
            --wiki-bg: #ffffff; 
            --wiki-text: #373a3c; 
            --wiki-gray-bg: #F9F9FA; 
            --wiki-link: #0022AA; 
            --wiki-table-header: var(--wiki-main);
            --wiki-table-header-text: #ffffff;
        }

        [data-theme='dark'] { 
            --wiki-fixed: #9999CC;
            --wiki-border: #444; 
            --wiki-bg: #121212; 
            --wiki-text: #eeeeee; 
            --wiki-gray-bg: #F9F9FA; 
            --wiki-link: #0022AA; 
            --wiki-table-header-text: #000000;
        }

        body { font-family: 'Noto Sans KR', sans-serif; background-color: var(--wiki-bg); color: var(--wiki-text); line-height: 1.6; word-break: keep-all; margin: 0; transition: background-color 0.3s, color 0.3s; }
        .wiki-container { max-width: 1152px; margin: 0 auto; padding: 20px 40px; border-left: 1px solid var(--wiki-border); border-right: 1px solid var(--wiki-border); min-height: 100vh; background-color: var(--wiki-bg); display: flex; flex-direction: column; }
        
        table { border-collapse: collapse !important; width: 100% !important; margin: 15px 0; border: 1px solid var(--wiki-border) !important; table-layout: fixed !important; }
        th, td { border: 1px solid var(--wiki-border) !important; padding: 8px 6px; text-align: center; vertical-align: middle; font-size: 0.9rem; }
        th { background-color: var(--wiki-table-header); color: var(--wiki-table-header-text); font-weight: bold; text-shadow: none; }
        
        .wiki-link { color: var(--wiki-link); font-weight: bold; cursor: pointer; text-decoration: none; display: inline-block; }
        .wiki-link:hover { text-decoration: underline; }
        
        h1 { font-size: 2.5rem !important; font-weight: 700 !important; margin-bottom: 1.5rem; border-bottom: 2px solid var(--wiki-main); padding-bottom: 10px; line-height: 1.2; }
        h2 { font-size: 1.85rem !important; font-weight: 700 !important; border-bottom: 1px solid var(--wiki-border); padding-bottom: 0.3rem; margin-top: 2.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px; clear: left; }
        h2::before { content: ""; display: inline-block; width: 5px; height: 1.8rem; background: var(--wiki-main); }
        h3 { font-size: 1.45rem !important; font-weight: 700 !important; margin-top: 1.8rem; margin-bottom: 0.8rem; color: var(--wiki-point); border-left: 4px solid var(--wiki-main); padding-left: 12px; }
        h4 { font-size: 1.2rem !important; font-weight: 700; margin-top: 1.5rem; padding-left: 10px; border-left: 3px solid #ccc; }
        
        .legal-dong-box { float: right; width: 340px; margin-left: 20px; margin-bottom: 20px; border: 1px solid var(--wiki-border); background-color: #ffffff; font-size: 0.85rem; clear: right; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        [data-theme='dark'] .legal-dong-box { background-color: #2d2f34; border-color: #555; }
        .legal-dong-box table { margin: 0 !important; width: 100% !important; table-layout: auto !important; }
        .legal-dong-box th { background-color: var(--wiki-header) !important; color: #222 !important; width: 35%; padding: 6px 8px; font-size: 0.8rem; text-align: center; border: 1px solid var(--wiki-border) !important; }
        .legal-dong-box td { padding: 6px 8px; text-align: center; border: 1px solid var(--wiki-border) !important; }
        .legal-dong-header { background-color: var(--wiki-gray-bg); padding: 12px 10px; text-align: center; border-bottom: 1px solid var(--wiki-border); }
        [data-theme='dark'] .legal-dong-header { background-color: #2d2f34; border-color: #555; color: #eeeeee; }

        .toc { display: inline-block; min-width: 300px; border: 1px solid var(--wiki-border); background: var(--wiki-gray-bg); padding: 15px; border-radius: 4px; margin-bottom: 20px; }
        .toc-title { text-align: center; font-weight: bold; border-bottom: 1px solid var(--wiki-border); margin-bottom: 10px; padding-bottom: 5px; }
        .toc ul { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
        .toc .lvl-2 { padding-left: 15px; }
        
        .nav-logo-box { width: 30px; height: 30px; background: white; color: var(--wiki-main); border-radius: 4px; font-weight: 900; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
        .category-box { background: #fff; border: 1px solid var(--wiki-border); padding: 5px 12px; font-size: 0.8rem; margin: 15px 0; border-radius: 4px; }
        [data-theme='dark'] .category-box { background: #2d2f34; border-color: #444; }
        .wiki-btn-group { display: flex; background: #fff; border: 1px solid var(--wiki-border); border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .wiki-btn-group { background: #2d2f34; }
        .wiki-tool-btn { padding: 4px 12px; font-size: 11px; border-right: 1px solid var(--wiki-border); cursor: pointer; color: inherit; display: flex; align-items: center; text-decoration: none; }
        .wiki-tool-btn:hover { background-color: #eee; }
        .wiki-tool-btn.active { background-color: var(--wiki-main); color: white !important; font-weight: bold; }
        .clear-both { clear: both; }
        del { color: gray; text-decoration: line-through; }
</style>
<script src="assets/ad_logic.js"></script>
<link href="wiki_font_standard.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/fuse.js@6.6.2"></script>
</head>
<body data-theme="light">
<div id="wiki-msg-box"></div>
<div id="wiki-footnote-tooltip"></div>
<nav class="font-sans bg-[#7777AA] text-white p-3 flex justify-between items-center shadow-md sticky top-0 z-50">
<div class="flex items-center gap-2">
<div class="nav-logo-box">H</div>
<a class="font-bold text-xl cursor-pointer no-underline text-white" href="index.html">HyobinWiki</a>
<div class="hidden md:flex gap-3 text-sm opacity-90 ml-4">
<a class="hover:underline font-bold text-white no-underline" href="index.html">대문</a>
<a class="hover:underline text-white no-underline" href="최근_변경.html">최근 변경</a>
<a class="hover:underline text-white no-underline" href="최근_토론.html">최근 토론</a>
</div>
</div>
<div class="flex flex-col items-end gap-1">
<div class="flex items-center gap-2">
<div class="hidden lg:flex items-center gap-1 mr-2">
<a class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold" href="편집요청.html">편집요청</a>
<a class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold" href="최근_토론.html">토론</a>
<a class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold" href="역사.html">역사</a>
<a class="bg-[#666699] hover:bg-[#555588] text-yellow-300 text-xs px-2 py-1 rounded transition-colors no-underline font-bold" href="즐겨찾기.html" title="즐겨찾기">★</a>
<a class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold flex items-center gap-1" href="더보기.html">더보기 <span class="text-[9px]">▼</span></a>
</div>
<input class="p-1 px-3 rounded text-black text-sm focus:outline-none border-none shadow-inner w-32 md:w-48" id="headerSearchInput" onkeypress="if(event.keyCode==13) { handleSearch('headerSearchInput'); }" placeholder="문서 검색" type="text"/>
<button class="bg-[#555588] p-1 px-3 rounded text-xs transition-colors shadow-inner font-bold" onclick="handleSearch('headerSearchInput')">🔍</button>
</div>
<div class="flex gap-1" id="auth-buttons">
<button class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors" id="btn-login" onclick="toggleModal('loginModal')">로그인</button>
<button class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors" onclick="toggleModal('settingsModal')">설정</button>
</div>
</div>
</nav>

<div class="wiki-container shadow-lg">
<div class="flex justify-between items-end mb-4">
<h1 class="m-0 border-none p-0">[[SIGUNGU]] 하위 행정구역</h1>
<div class="wiki-btn-group shadow-sm mb-4">
<a class="wiki-tool-btn" href="토론.html">토론</a>
<a class="wiki-tool-btn" href="수정.html">편집</a>
<a class="wiki-tool-btn" href="역사.html">역사</a>
<div class="wiki-tool-btn" onclick="showMsg('즐겨찾기에 추가됨')">★</div>
</div>
</div>
<div class="category-box">
<span class="font-bold text-[#7777AA]">분류:</span>
<a class="wiki-link" href="category_[[SIGUNGU]].html">[[SIGUNGU]]</a> | 
<a class="wiki-link" href="category_basic_admin.html">하위 행정구역</a>
</div>

<!-- 상위 문서 박스 추가 (이미지와 동일한 스타일) -->
<div style="display: flex; align-items: center; margin-bottom: 20px;">
    <img src="이미지/svg/상위문서.svg" alt="상위 문서" style="width: 20px; height: 20px; margin-right: 8px;">
    <span style="font-size: 0.95rem; font-weight: bold; color: var(--wiki-text);">상위 문서: <a class="wiki-link" href="[[SIGUNGU]].html">[[SIGUNGU]]</a></span>
</div>

<script defer="defer" src="js/[[SIGUNGU_NO_SPACE]]행정.js"></script><div class="hb-[[SIGUNGU_NO_SPACE]]-nav"></div>

<div class="toc shadow-sm" id="toc-box" style="margin-top: 20px; margin-bottom: 40px;">
<div class="toc-title">목차</div>
<ul>
[[TOC_CONTENT]]
</ul>
</div>

<div class="wiki-paragraph w-full">
"""

HTML_TEMPLATE_BOTTOM = """
</div>

<div id="footer-container"></div>
<script src="assets/load-footer.js"></script>
</div>
<script>
        function toggleTheme() {
            const body = document.body;
            const isDark = body.getAttribute('data-theme') === 'dark';
            body.setAttribute('data-theme', isDark ? 'light' : 'dark');
            localStorage.setItem('wiki_theme', isDark ? 'light' : 'dark');
            document.getElementById('themeBtn').innerText = isDark ? '다크모드' : '라이트모드';
        }

        function toggleNav(id, labelId) {
            const content = document.getElementById(id);
            const label = document.getElementById(labelId);
            if (content.style.maxHeight === '0px') {
                content.style.maxHeight = '2000px';
                label.innerText = '[접기]';
            } else {
                content.style.maxHeight = '0px';
                label.innerText = '[펼치기]';
            }
            isNavOpen[id] = !isNavOpen[id];
        }

        function showMsg(text) {
            const box = document.getElementById('wiki-msg-box');
            box.innerText = text; box.style.display = 'block';
            setTimeout(() => { box.style.display = 'none'; }, 2000);
        }

        function handleSearchFromNav(title) {
            if (!title) return;
            let targetFile = title + ".html";
            window.location.href = targetFile;
        }

        let isNavOpen = { natNav: true, guNav: true, dongNav: true };

        window.onload = function() {
            const savedTheme = localStorage.getItem('wiki_theme');
            if (savedTheme === 'dark') document.body.setAttribute('data-theme', 'dark');
        };

        document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleSearchFromNav(this.value.trim());
        });
</script>
<script src="assets/wiki_index.js"></script>
<script src="assets/hb_data_map.js"></script>
<script src="assets/hb_wiki_core.js"></script>
<script src="assets/hb_index_scripts.js"></script>
<script src="assets/jana.js"></script><script src="assets/nimisibal.js"></script>
</body>
</html>
"""

# ==========================================
# 6. 시군구별 페이지 생성 루프 (계층 구조 반영)
# ==========================================
for sigungu, group in grouped:
    sigungu_filename = str(sigungu).split()[-1] if ' ' in str(sigungu) else str(sigungu)
    sido = group['광역단체'].iloc[0] if '광역단체' in group.columns else '덕빈북도'
    theme_color = COLOR_MAP.get(sigungu_filename, '#7777AA')
    
    body_html = ""
    toc_html = ""
    
    # 정렬 오더(동/읍/면)에 따라 고유 그룹 추출
    unique_sorts = group['sort_order'].unique()
    unique_sorts.sort()
    
    group_idx = 1
    for so in unique_sorts:
        # 그룹 이름 할당
        if so == 1: g_name = "동 지역"
        elif so == 2: g_name = "읍 지역"
        elif so == 3: g_name = "면 지역"
        else: g_name = "기타 지역"
        
        sub_group = group[group['sort_order'] == so]
        
        # 1) TOC 대문단 추가
        toc_html += f'<li>{group_idx}. <a class="wiki-link" href="#group_{group_idx}">{g_name}</a>\n'
        toc_html += '    <ul class="lvl-2">\n'
        
        # 2) 본문 대문단 (<h2>) 추가
        body_html += f'<h2 id="group_{group_idx}">{group_idx}. {g_name}</h2>\n'
        
        item_idx = 1
        for _, row in sub_group.iterrows():
            r = row.to_dict()
            dong_name = get_val(r, '행정동/읍면')
            hanja = get_val(r, '한자명')
            eng = get_val(r, '영어명')
            admin_code = get_val(r, '행정표준코드')
            pop = get_val(r, '인구')
            area = get_val(r, '면적')
            density = get_val(r, '인구밀도')
            sub_zones = format_text(get_val(r, '하위 행정구역'))
            office_loc = format_text(get_val(r, '소재지(행정복지센터/읍면사무소)'))
            
            # TOC 소문단 추가 (앵커는 동이름 그대로)
            toc_html += f'        <li>{group_idx}.{item_idx}. <a class="wiki-link" href="#{dong_name}">{dong_name}</a></li>\n'
            
            raw_b_dong = get_val(r, '관할법정동리')
            b_dong_main = format_text(raw_b_dong)
            pop_table_html = ""
            
            if '[세부인구]' in raw_b_dong:
                parts = raw_b_dong.split('[세부인구]')
                b_dong_main = format_text(parts[0].strip())
                pop_table_html = build_population_table(dong_name, pop, parts[1].strip())
            
            raw_desc = get_val(r, '설명_특성_변천사')
            raw_strike = get_val(r, '취소선_원본_추출')
            desc = apply_fuzzy_strikethrough(raw_desc, raw_strike)
            commerce = format_text(get_val(r, '상권_특이사항'))
            edu = format_text(get_val(r, '교육기관(학교)'))
            traffic = apply_railway_logos(sigungu_filename, format_text(get_val(r, '교통_및_주요시설')))
            
            rep_nation_dist = get_val(r, '국회의원 선거구')
            rep_nation = parse_politician(get_val(r, '국회의원 당선인 (정당/선수)'))
            rep_prov_dist = get_val(r, '도의원 선거구')
            rep_prov = parse_politician(get_val(r, '도의원 당선인 (정당/선수)'))
            rep_local_dist = get_val(r, '기초의원 선거구')
            rep_local_raw = get_val(r, '지역구 기초의원 (정당/선수)')
            
            rep_local_html = ""
            if rep_local_raw and rep_local_raw.lower() != 'nan':
                for l in [x.strip() for x in rep_local_raw.split(',')]:
                    rep_local_html += parse_politician(l)

            # 3) 본문 중문단 (<h3>) 및 인포박스, 소문단 (<h4>) 조립
            # 주의: h3 앵커는 무조건 이름으로 고정
            dong_block = f"""
<h3 id="{dong_name}">{group_idx}.{item_idx}. {dong_name}</h3>

<div class="legal-dong-box">
    <table class="w-full text-sm border-collapse m-0 table-fixed">
        <colgroup><col style="width: 35%;"/><col style="width: 65%;"/></colgroup>
        <tbody>
            <tr>
                <td class="p-0 border-none" colspan="2">
                    <div class="legal-dong-header">
                        <div class="font-bold text-[0.75rem] text-gray-500">{sigungu_filename}의 행정구역</div>
                        <div class="font-bold text-xl my-1">{dong_name}</div>
                        <div class="text-[0.7rem] text-gray-500">{hanja} | {eng}</div>
                    </div>
                </td>
            </tr>
            <tr><th style="background-color: var(--wiki-header) !important; color: #222 !important;">광역자치단체</th><td><a class="wiki-link" href="{sido}.html">{sido}</a></td></tr>
            <tr><th style="background-color: var(--wiki-header) !important; color: #222 !important;">기초자치단체</th><td><a class="wiki-link" href="{sigungu_filename}.html">{sigungu_filename}</a></td></tr>
            <tr><th style="background-color: var(--wiki-header) !important; color: #222 !important;">행정표준코드</th><td class="font-bold text-xs">{admin_code}</td></tr>
            <tr><th style="background-color: var(--wiki-header) !important; color: #222 !important;">관할 법정구역</th><td class="text-xs">{b_dong_main}</td></tr>
            <tr><th style="background-color: var(--wiki-header) !important; color: #222 !important;">하위 행정구역</th><td class="text-xs">{sub_zones}</td></tr>
            <tr><th style="background-color: var(--wiki-header) !important; color: #222 !important;">면적</th><td>{area}</td></tr>
            <tr><th style="background-color: var(--wiki-header) !important; color: #222 !important;">인구</th><td>{pop}</td></tr>
            <tr><th style="background-color: var(--wiki-header) !important; color: #222 !important;">인구밀도</th><td>{density}</td></tr>
            <tr>
                <th style="background-color: var(--wiki-header) !important; color: #222 !important;" class="align-middle">정치</th>
                <td class="p-0 border-0">
                    <table class="w-full m-0 border-none table-fixed text-center">
                        <tbody>
                            <tr><td class="bg-[#333] text-white font-bold py-1 border-b border-[var(--wiki-border)] text-[11px]" colspan="2">국회의원 | {rep_nation_dist}</td></tr>
                            {rep_nation}
                            <tr><td class="bg-[#555] text-white font-bold py-1 border-b border-[var(--wiki-border)] text-[11px]" colspan="2">광역의원 | {rep_prov_dist}</td></tr>
                            {rep_prov}
                            <tr><td class="bg-[#777] text-white font-bold py-1 border-b border-[var(--wiki-border)] text-[11px]" colspan="2">기초의원 | {rep_local_dist}</td></tr>
                            {rep_local_html}
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr><th style="background-color: var(--wiki-header) !important; color: #222 !important;">소재지</th><td class="text-xs text-left pl-2">{office_loc}</td></tr>
        </tbody>
    </table>
</div>

<div class="wiki-desc">
    <h4 style="clear: none;">{group_idx}.{item_idx}.1. 개요 및 특징</h4>
    <p>{desc}</p>
    
    <h4 style="clear: none;">{group_idx}.{item_idx}.2. 상권 및 특이사항</h4>
    <p>{commerce}</p>
    
    <h4 style="clear: none;">{group_idx}.{item_idx}.3. 교육 기관</h4>
    <p>{edu}</p>
    
    <h4 style="clear: none;">{group_idx}.{item_idx}.4. 교통 및 주요 시설</h4>
    <p>{traffic}</p>
</div>

{pop_table_html}

<div class="clear-both" style="margin-bottom: 40px;"></div>
"""
            body_html += dong_block
            item_idx += 1
            
        toc_html += '    </ul>\n</li>\n'
        group_idx += 1
    
    # 최종 파일 조립
    page_html = HTML_TEMPLATE_TOP.replace("[[SIGUNGU]]", sigungu_filename)
    page_html = page_html.replace("[[SIGUNGU_NO_SPACE]]", sigungu_filename.replace(" ", ""))
    page_html = page_html.replace("[[THEME_COLOR]]", theme_color)
    page_html = page_html.replace("[[TOC_CONTENT]]", toc_html)
    
    page_html += body_html
    page_html += HTML_TEMPLATE_BOTTOM
    
    file_name = f"{sigungu_filename}_행정구역.html"
    with open(file_name, "w", encoding="utf-8") as f:
        f.write(page_html)

print("모든 계층형 문서 구조 및 앵커 기능이 100% 정상 적용되었습니다.")