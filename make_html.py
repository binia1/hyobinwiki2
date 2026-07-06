import pandas as pd
import os

# ==========================================
# 1. 원본 CSV 파일 불러오기 및 데이터 병합
# ==========================================
roads_df = pd.read_csv('hyobin_road_analysis (1).csv')
buses_df = pd.read_csv('효빈광역시_도로별_경유버스_대장_2026. 5. 3..csv')
facilities_df = pd.read_csv('도로중심_역_및_시설물대장_2026. 5. 3. (6).csv')

# '지나가는 버스' 데이터 병합 (도로명 기준)
merged_df = pd.merge(roads_df, buses_df[['도로명', '경유_버스_목록']], on='도로명', how='left')

# '주변 시설물' 데이터 그룹화 및 병합
facilities_grouped = facilities_df.groupby('인접도로명')['시설물명'].apply(lambda x: ', '.join(x.dropna().unique())).reset_index()
facilities_grouped.rename(columns={'인접도로명': '도로명', '시설물명': '주변 시설물'}, inplace=True)

merged_df = pd.merge(merged_df, facilities_grouped, on='도로명', how='left')
merged_df = merged_df.fillna('')

# 이름순 정렬
merged_df = merged_df.sort_values(by='도로명')

# ==========================================
# 2. 한글 초성 추출 함수 및 열 추가
# ==========================================
def get_chosung(text):
    if not text: return '기타'
    c = text[0]
    if '가' <= c <= '깋': return 'ㄱ'
    if '나' <= c <= '닣': return 'ㄴ'
    if '다' <= c <= '딯': return 'ㄷ'
    if '라' <= c <= '맇': return 'ㄹ'
    if '마' <= c <= '밓': return 'ㅁ'
    if '바' <= c <= '빟': return 'ㅂ'
    if '사' <= c <= '싷': return 'ㅅ'
    if '아' <= c <= '잏': return 'ㅇ'
    if '자' <= c <= '짛': return 'ㅈ'
    if '차' <= c <= '칳': return 'ㅊ'
    if '카' <= c <= '킿': return 'ㅋ'
    if '타' <= c <= '탛': return 'ㅌ'
    if '파' <= c <= '핗': return 'ㅍ'
    if '하' <= c <= '힣': return 'ㅎ'
    return '기타'

merged_df['초성'] = merged_df['도로명'].apply(get_chosung)

# 저장할 초성 목록 미리 뽑아두기 (네비게이션 버튼용)
chosung_order = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', '기타']
active_chosungs = [c for c in chosung_order if not merged_df[merged_df['초성'] == c].empty]

# ==========================================
# 3. HTML 템플릿 영역 (상단 네비게이션바 색상 #7777aa 반영, 스크립트 추가)
# ==========================================
html_template = """<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>효빈광역시 관내 도로 목록 ($$CHOSUNG$$) - 효빈위키</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700;900&display=swap');
        
        :root { 
            --wiki-main: #4a5568; 
            --wiki-sub: #edf2f7;
            --wiki-border: #cbd5e0; 
            --wiki-bg: #ffffff; 
            --wiki-text: #2d3748; 
            --wiki-gray-bg: #f7fafc; 
            --wiki-link: #3182ce;
            --wiki-table-header: #4a5568;
            --wiki-table-header-text: #ffffff;
        }

        body { font-family: 'Noto Sans KR', sans-serif; background-color: var(--wiki-bg); color: var(--wiki-text); line-height: 1.6; word-break: keep-all; margin: 0; }
        .wiki-container { max-width: 1400px; margin: 0 auto; padding: 20px 40px; border-left: 1px solid var(--wiki-border); border-right: 1px solid var(--wiki-border); min-height: 100vh; background-color: var(--wiki-bg); }

        .txt-lvl-1 { font-size: 3.0rem !important; font-weight: 900 !important; color: #1a202c; line-height: 1.1; letter-spacing: -1.5px; margin-bottom: 0; } 
        .title-area { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #cbd5e0; margin-bottom: 20px; padding-bottom: 10px; }
        h2 { font-size: 1.6rem !important; font-weight: 700; border-bottom: 1px solid var(--wiki-border); padding-bottom: 5px; margin-top: 2.5rem; display: flex; align-items: center; gap: 10px; color: var(--wiki-text); clear: both; }
        h2::before { content: ""; display: inline-block; width: 5px; height: 1.6rem; background: var(--wiki-main); }
        
        .wiki-btn { border: 1px solid #cbd5e0; background: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; color: #4a5568; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 4px; text-decoration: none !important; }
        .wiki-btn:hover { background: #edf2f7; color: #1a202c; border-color: #a0aec0; }
        .wiki-link { color: var(--wiki-link); font-weight: bold; cursor: pointer; text-decoration: none; }
        .category-box { background: var(--wiki-gray-bg); border: 1px solid var(--wiki-border); padding: 8px 12px; font-size: 0.85rem; margin: 15px 0; border-radius: 4px; }
        
        .wiki-table { border-collapse: collapse; width: 100%; margin: 10px 0; border: 1px solid var(--wiki-border); font-size: 0.85rem; }
        .wiki-table th { background-color: var(--wiki-table-header); color: var(--wiki-table-header-text); padding: 10px; border: 1px solid var(--wiki-border); text-align: center; font-weight: bold; white-space: nowrap; }
        .wiki-table td { padding: 10px; border: 1px solid var(--wiki-border); background: white; vertical-align: middle; }
        .wiki-table-center { text-align: center; }

        .road-color-box { display: inline-block; width: 14px; height: 14px; border-radius: 3px; margin-right: 5px; vertical-align: middle; border: 1px solid #a0aec0; box-shadow: 1px 1px 3px rgba(0,0,0,0.1); }
        .road-image-preview { width: 90px; height: 60px; object-fit: cover; border-radius: 4px; border: 1px solid #cbd5e0; cursor: zoom-in; transition: transform 0.2s, box-shadow 0.2s; background-color: #eee; }
        .road-image-preview:hover { transform: scale(1.05); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .nav-item:hover { text-decoration: underline !important; color: #3182ce !important; }
    </style>
</head>
<body>
    <div id="wiki-msg-box" style="position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: white; padding: 10px 24px; border-radius: 50px; font-size: 14px; z-index: 10000; display: none;"></div>

    <!-- 네비게이션 바 배경색을 #7777aa 로 고정 -->
    <nav class="text-white p-3 flex justify-between items-center shadow-md sticky top-0 z-50" style="background-color: #7777aa;">
        <div class="flex items-center gap-4 cursor-pointer" onclick="location.href='index.html'">
            <span class="font-bold text-xl tracking-wider">HyobinWiki</span>
        </div>
        <div class="flex flex-col items-end gap-1">
            <div class="flex items-center gap-2 text-left">
                <input type="text" id="searchInput" placeholder="위키 검색" class="p-1.5 px-4 rounded text-black text-sm w-72 focus:outline-none shadow-inner" onkeypress="if(event.keyCode==13) handleSearch();">
                <button class="bg-black/20 p-1.5 px-5 rounded text-sm hover:bg-black/40 font-bold transition-colors" onclick="handleSearch()">검색</button>
            </div>
            <div class="flex gap-1">
                <span class="bg-black/20 text-white text-xs px-2 py-0.5 rounded transition-colors cursor-pointer">토론</span>
                <span class="bg-black/20 text-white text-xs px-2 py-0.5 rounded transition-colors cursor-pointer">편집</span>
                <span class="bg-black/20 text-white text-xs px-2 py-0.5 rounded transition-colors cursor-pointer">역사</span>
            </div>
        </div>
    </nav>

    <div class="wiki-container shadow-lg">
        <div class="title-area">
            <div class="txt-lvl-1">효빈광역시 관내 도로 목록 <span style="font-size: 2rem; color: #4a5568;">($$CHOSUNG$$)</span></div>
            <div class="flex gap-2 mb-1">
                <span class="wiki-btn">문서</span>
                <span class="wiki-btn">토론</span>
                <span class="wiki-btn">편집</span>
                <span class="wiki-btn">역사</span>
            </div>
        </div>

        <div class="category-box">
            <span class="font-bold" style="color: var(--wiki-main);">분류:</span> 
            효빈광역시 | 도로 | 교통 | $$CHOSUNG$$목록
        </div>

        <div class="flex flex-wrap gap-2 mb-6 p-4 bg-gray-50 border border-gray-200 rounded">
            <span class="font-bold text-gray-700 mr-2 flex items-center">초성 이동:</span>
            $$NAV_BUTTONS$$
        </div>

        <div class="overflow-x-auto">
            <table class="wiki-table" style="margin: 0; border: none;">
                <thead>
                    <tr>
                        <th width="8%">사진</th>
                        <th width="10%">도로명</th>
                        <th width="8%">노선 색상</th>
                        <th width="7%">총 연장</th>
                        <th width="10%">기점</th>
                        <th width="10%">종점</th>
                        <th width="20%">경유 행정구역</th>
                        <th width="14%">경유 버스</th>
                        <th width="13%">주요 시설물</th>
                    </tr>
                </thead>
                <tbody>
$$TABLE_ROWS$$
                </tbody>
            </table>
        </div>

        <footer class="wiki-footer mt-10">
            <div class="mb-2 font-bold text-lg">HyobinWiki</div>
            <p class="mb-2">
                이 저작물은 CC BY-NC-SA 2.0 KR에 따라 이용할 수 있습니다.<br>
                효빈위키는 백과사전이 아니며 검증되지 않았거나, 편향적이거나, 잘못된 서술이 있을 수 있습니다.
            </p>
        </footer>
    </div>

    <!-- 추가 요청하신 위키 연동 스크립트 4종 -->
    <script src="assets/wiki_index.js"></script>
    <script src="assets/hb_wiki_core.js"></script>
    <script src="assets/hb_index_scripts.js"></script>
    <script src="assets/jana.js"></script>

    <script>
        function handleSearch() { 
            const q = document.getElementById('searchInput').value;
            if(q) {
                const box = document.getElementById('wiki-msg-box');
                box.innerText = "'" + q + "' 검색 기능은 준비 중입니다."; 
                box.style.display = 'block';
                setTimeout(() => { box.style.display = 'none'; }, 2000);
            }
        }
    </script>
</body>
</html>"""

# ==========================================
# 4. 행(<tr>) 생성 함수
# ==========================================
def generate_html_row(row):
    return f"""
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="wiki-table-center">
                            <img src="이미지/{row['도로명']}.png" alt="{row['도로명']}" class="road-image-preview" loading="lazy" onerror="this.src='https://via.placeholder.com/150x100?text=No+Image'" onclick="window.open(this.src)">
                        </td>
                        <td class="font-bold text-center text-gray-800">{row['도로명']}</td>
                        <td class="wiki-table-center">
                            <span class="road-color-box" style="background-color: {row['색상']};"></span>
                            <br>
                            <span class="font-bold text-xs" style="color: {row['색상']};">{row['색상']}</span>
                        </td>
                        <td class="wiki-table-center font-bold text-gray-700">{row['도로 길이']}</td>
                        <td class="wiki-table-center text-sm">{row['시작지점']}</td>
                        <td class="wiki-table-center text-sm">{row['종착지점']}</td>
                        <td class="text-xs text-gray-600 leading-relaxed text-justify">{row['경유 행정구역']}</td>
                        <td class="text-xs text-gray-600 leading-relaxed text-justify">{row['경유_버스_목록']}</td>
                        <td class="text-xs text-gray-600 leading-relaxed text-justify">{row['주변 시설물']}</td>
                    </tr>"""

# ==========================================
# 5. 분할 및 저장 실행
# ==========================================
output_dir = '분할된_도로목록'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

first_chosung = active_chosungs[0] if active_chosungs else 'ㄱ'

for chosung in active_chosungs:
    group_df = merged_df[merged_df['초성'] == chosung]
    rows_html = "\n".join(group_df.apply(generate_html_row, axis=1))
    
    # 상단 탭 네비게이션 조립
    nav_buttons = ""
    for ch in active_chosungs:
        count = len(merged_df[merged_df['초성'] == ch])
        if ch == chosung:
            nav_buttons += f'<a href="효빈광역시_통합도로대장_{ch}.html" class="wiki-btn bg-blue-100 text-blue-800 border-blue-400">{ch} ({count})</a>\n'
        else:
            nav_buttons += f'<a href="효빈광역시_통합도로대장_{ch}.html" class="wiki-btn hover:bg-blue-50">{ch} ({count})</a>\n'
            
    # HTML 조립
    final_html = html_template.replace("$$CHOSUNG$$", chosung)
    final_html = final_html.replace("$$NAV_BUTTONS$$", nav_buttons)
    final_html = final_html.replace("$$TABLE_ROWS$$", rows_html)
    
    # 개별 파일 저장
    file_name = f"{output_dir}/효빈광역시_통합도로대장_{chosung}.html"
    with open(file_name, 'w', encoding='utf-8') as f:
        f.write(final_html)

    # index 역할을 할 최종 문서 복사
    if chosung == first_chosung:
        with open('효빈광역시_통합도로대장_최종.html', 'w', encoding='utf-8') as f:
            f.write(final_html)

print(f"\n🎉 [분할된_도로목록] 폴더 내에 모든 자음별 HTML 문서 생성이 완료되었습니다!")

# ==========================================
# 6. 행정구역별 도로 둘러보기 틀(Navbox) 생성
# ==========================================
districts = ['북구', '서구', '남구', '중구', '창전구', '청엽구', '동구', '안천구', '탄성군', '약산시', '선곡군', '기도군', '천주시']
district_roads = {d: set() for d in districts}

for _, row in merged_df.iterrows():
    road_name = row['도로명']
    text_to_search = str(row['시작지점']) + " " + str(row['종착지점']) + " " + str(row['경유 행정구역'])
    
    for d in districts:
        if d in text_to_search:
            district_roads[d].add(road_name)

navbox_html_all = "<!-- 각 도로별 위키 문서 하단에 복사해서 붙여넣을 행정구역별 둘러보기 틀 모음 -->\n\n"

for d in districts:
    roads_in_district = sorted(list(district_roads[d]))
    if not roads_in_district:
        continue
        
    links_html = " ·\n                ".join([
        f"<a href=\"{r}.html\" class=\"nav-item\" style=\"color: #333; text-decoration: none; cursor: pointer;\">{r}</a>" 
        for r in roads_in_district
    ])
    
    navbox_html = f"""
        <!-- ▼ {d} 관내 주요 도로 둘러보기 틀 ▼ -->
        <div class="nav-box shadow-sm mt-5" style="border: 2px solid #4a5568; border-radius: 4px; overflow: hidden; margin-bottom: 20px;">
            <div class="nav-box-header" style="background-color: #4a5568; color: white; padding: 8px 12px; font-weight: bold; text-align: center;">{d} 관내 주요 도로</div>
            <div class="nav-box-content leading-loose text-sm" style="background-color: #fff; padding: 15px; text-align: center; line-height: 2;">
                {links_html}
            </div>
        </div>
        <!-- ▲ {d} 관내 주요 도로 둘러보기 틀 ▲ -->
"""
    navbox_html_all += navbox_html

with open('효빈광역시_행정구역별_도로_둘러보기틀.html', 'w', encoding='utf-8') as f:
    f.write(navbox_html_all)

print("✅ '효빈광역시_행정구역별_도로_둘러보기틀.html' (네비게이션 틀) 생성 완료!")