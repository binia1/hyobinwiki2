import pandas as pd
import re
import html

# 1. 파일 경로 설정 (같은 폴더에 두세요)
EXCEL_PATH = 'Hyobin_Restaurants_List_v2.xlsx'
HTML_INPUT_PATH = '효빈광역시_음식.html'
HTML_OUTPUT_PATH = '효빈광역시_음식.html'  # 기존 문서를 유지한 채 섹션만 추가하여 저장

def make_line_svg_logo(line_code):
    """노선 코드를 받아 요청하신 SVG 이미지 로고 + 링크 태그를 반환합니다."""
    line_code = str(line_code).strip()
    if line_code in ['빈', '빈효']:
        return '<a href="빈효광역선.html" style="text-decoration: none;"><img src="이미지/svg/빈효광역선.svg" alt="빈효선" class="svg-logo" /></a>'
    elif line_code in ['1', '2', '3', '4', '5', '6', '7', '8']:
        return f'<a href="{line_code}호선.html" style="text-decoration: none;"><img src="이미지/svg/효빈{line_code}호선.svg" alt="{line_code}호선" class="svg-logo" /></a>'
    else:
        return ''

def parse_subway_info(val):
    """새로운 엑셀 포맷(예: '1호선·빈효선 광역전철 안천')을 파싱하여 로고와 링크를 생성합니다."""
    if pd.isna(val) or '없음' in str(val):
        return '<span class="text-gray-400 text-xs">(인접 지하철역 없음)</span>'
    
    val = str(val).strip()

    # 1. 역 이름 추출 (띄어쓰기 기준 무조건 맨 마지막 단어가 역 이름임)
    parts = val.split()
    if not parts:
        return ''
    
    st_name = parts[-1]
    st_disp = st_name if st_name.endswith('역') else st_name + '역'
    st_link = f"{st_disp}.html"

    # 2. 노선 추출 (복잡한 정규식 대신 전체 문자열에서 호선 키워드를 직관적으로 검색)
    found_lines = []
    for l_code in ['1', '2', '3', '4', '5', '6', '7', '8']:
        if f"{l_code}호선" in val:
            found_lines.append(l_code)
            
    if "빈효선" in val or "빈효" in val:
        found_lines.append("빈효")

    # 3. HTML 로고 뱃지 생성
    logos = ''.join([make_line_svg_logo(l) for l in found_lines])

    return (
        f'<span class="flex-center-inline mr-2 mb-1">'
        f'{logos}<a class="wiki-link" href="{st_link}">{st_disp}</a>'
        f'</span>'
    )

def format_multiline_list(text):
    """줄바꿈(- ...)으로 된 특징/메뉴 텍스트를 HTML 리스트(ul/li)로 변환합니다."""
    if pd.isna(text):
        return ''
    lines = [line.strip() for line in str(text).split('\n') if line.strip()]
    li_items = []
    for line in lines:
        clean_line = re.sub(r'^-\s*', '', line)
        clean_line = html.escape(clean_line)
        clean_line = clean_line.replace('[핵심]', '<strong class="text-[#0077DD]">[핵심]</strong>')
        clean_line = clean_line.replace('(시그니처)', '<span class="bg-yellow-200 text-black px-1 rounded text-xs font-bold">(시그니처)</span>')
        li_items.append(f'<li class="mb-1 leading-snug">{clean_line}</li>')
    return f'<ul class="list-disc pl-4 m-0 text-left text-xs space-y-0.5">{"".join(li_items)}</ul>'

def build_restaurant_section(df):
    """데이터프레임을 받아 효빈위키 스타일의 10번 섹션 HTML을 생성합니다."""
    district_order = ['중구', '북구', '남구', '서구', '동구', '청엽구', '안천구', '창전구', '탄성군']
    existing_districts = [d for d in district_order if d in df['소속구군'].unique()]
    for d in df['소속구군'].unique():
        if d not in existing_districts:
            existing_districts.append(d)

    total_count = len(df)
    
    section_html = f"""
<h2 id="s-10">10. 구·군별 등록 맛집 일람 (총 {total_count}곳)</h2>
<blockquote>
<strong>"효빈광역시 8구 1군 전역에 포진한 로컬 노포부터 서브컬처 성지 다이닝까지의 전수 조사 기록"</strong>
</blockquote>
<p>
효빈광역시청 관광진흥과와 지역 상인회, 그리고 성지순례객들의 집단지성으로 정리된 <strong>관내 {total_count}곳의 주요 맛집 및 테마 식당 전수 목록</strong>이다. 각 자치구별 아코디언 메뉴를 클릭하면 상세 대표자, 시그니처 메뉴 및 가격, 식당 특징, 밈(Meme), 인접 도시철도역 정보를 모두 확인할 수 있다. <del>이걸 다 가본 사람이 있다면 그건 관광객이 아니라 효빈시 명예시민증을 줘야 한다.</del>
</p>

<!-- 검색 및 일괄 제어 툴바 -->
<div class="bg-[#F9F9FA] border border-[#ccc] p-3 rounded mb-4 flex flex-wrap justify-between items-center gap-2 text-black">
    <div class="flex items-center gap-2 flex-grow max-w-md">
        <span class="font-bold text-sm text-[#7777AA] shrink-0">🔍 식당 빠른 검색:</span>
        <input type="text" id="restSearchInput" onkeyup="filterRestaurants()" placeholder="식당명, 동이름, 메뉴, 밈, 역이름 입력..." class="p-1.5 px-3 border border-gray-300 rounded text-sm w-full focus:outline-none focus:border-[#7777AA]" />
    </div>
    <div class="flex gap-1.5">
        <button onclick="toggleAllAccordions(true)" class="bg-[#7777AA] hover:bg-[#555588] text-white text-xs px-3 py-1.5 rounded font-bold transition-colors">모두 펼치기 ▼</button>
        <button onclick="toggleAllAccordions(false)" class="bg-gray-600 hover:bg-gray-700 text-white text-xs px-3 py-1.5 rounded font-bold transition-colors">모두 접기 ▲</button>
    </div>
</div>
"""

    for idx, dist in enumerate(existing_districts, start=1):
        sub_df = df[df['소속구군'] == dist]
        cnt = len(sub_df)
        
        section_html += f"""
<h3 id="s-10-{idx}">10.{idx}. <a class="wiki-link" href="{dist}.html">{dist}</a> (총 {cnt}곳)</h3>
<details class="hb-accordion namu-frame mb-6" open>
    <summary class="namu-frame-header flex justify-between items-center px-4 py-2 select-none">
        <span>🍽️ <strong>{dist}</strong> 지역 등록 맛집 상세 목록 ({cnt}개 업소)</span>
        <span class="arrow-icon transition-transform duration-200 text-xs">▼ 접기/펼치기</span>
    </summary>
    <div class="hb-accordion-content">
        <div class="hb-accordion-inner namu-frame-content p-2 overflow-x-auto">
            <table class="restaurant-table" style="table-layout: auto !important; min-width: 980px;">
                <thead>
                    <tr>
                        <th style="width: 7%;">읍면동</th>
                        <th style="width: 13%;">식당명 (대표자)</th>
                        <th style="width: 22%;">한줄 설명 &amp; 밈(Meme)</th>
                        <th style="width: 24%;">주요 메뉴 및 가격</th>
                        <th style="width: 15%;">식당 특징</th>
                        <th style="width: 19%;">전화번호 / 연계 지하철역</th>
                    </tr>
                </thead>
                <tbody>
"""
        for _, row in sub_df.iterrows():
            dong = str(row['소속읍면동']).strip()
            name = str(row['이름']).strip()
            owner = str(row['대표자 이름']).strip()
            desc = html.escape(str(row['식당 설명']).strip())
            meme = html.escape(str(row['밈']).strip())
            phone = html.escape(str(row['전화번호']).strip())
            
            features_html = format_multiline_list(row['식당특징'])
            menus_html = format_multiline_list(row['식당메뉴(및 가격)'])
            subway_html = parse_subway_info(row['인접 지하철역'])
            
            if '특정 밈 없음' in meme:
                meme_badge = f'<div class="mt-1.5 text-xs text-gray-500 bg-gray-100 p-1.5 rounded">💬 {meme}</div>'
            else:
                meme_badge = f'<div class="mt-1.5 text-xs text-[#0022AA] bg-blue-50 border border-blue-200 p-1.5 rounded font-semibold">🔥 <strong>밈/성지:</strong> {meme}</div>'

            section_html += f"""
                    <tr class="rest-row hover:bg-gray-50">
                        <td class="font-bold"><a class="wiki-link" href="{dong}.html">{dong}</a></td>
                        <td>
                            <div class="font-bold text-base text-[#373a3c]"><a class="wiki-link" href="{name}.html">{html.escape(name)}</a></div>
                            <div class="text-xs text-gray-500 mt-0.5">대표: {html.escape(owner)}</div>
                        </td>
                        <td class="text-left">
                            <div class="text-xs leading-relaxed">{desc}</div>
                            {meme_badge}
                        </td>
                        <td class="text-left">
                            <details>
                                <summary class="cursor-pointer font-bold text-xs text-[#7777AA] hover:underline mb-1">📋 전체 메뉴 및 가격 보기</summary>
                                <div class="mt-1 p-1.5 bg-gray-50 rounded border border-gray-200">
                                    {menus_html}
                                </div>
                            </details>
                        </td>
                        <td class="text-left">
                            <details>
                                <summary class="cursor-pointer font-bold text-xs text-[#37B484] hover:underline mb-1">✨ 매장 특징 상세 보기</summary>
                                <div class="mt-1 p-1.5 bg-gray-50 rounded border border-gray-200">
                                    {features_html}
                                </div>
                            </details>
                        </td>
                        <td class="text-xs">
                            <div class="font-mono font-bold text-gray-700 mb-2">📞 {phone}</div>
                            <div class="leading-tight">{subway_html}</div>
                        </td>
                    </tr>
"""
        section_html += """
                </tbody>
            </table>
        </div>
    </div>
</details>
"""

    section_html += """
<script>
function toggleAllAccordions(openState) {
    document.querySelectorAll('details.hb-accordion').forEach(el => {
        el.open = openState;
    });
}
function filterRestaurants() {
    const query = document.getElementById('restSearchInput').value.toLowerCase().trim();
    const rows = document.querySelectorAll('.rest-row');
    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
    });
    if (query.length > 0) {
        toggleAllAccordions(true);
    }
}
</script>
"""
    return section_html

def main():
    print("1. 엑셀 파일 읽는 중...")
    df = pd.read_excel(EXCEL_PATH, sheet_name=0)
    print(f" -> 총 {len(df)}개의 식당 데이터를 확인했습니다.")

    print("2. SVG 노선로고 및 맛집 표 HTML 생성 중...")
    new_section_html = build_restaurant_section(df)

    print("3. 기존 효빈광역시_음식.html 읽는 중 (원본 내용 보존)...")
    with open(HTML_INPUT_PATH, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # 이미 10번 맛집 일람이 추가된 적이 있다면 그 부분만 새 코드로 교체
    if '구·군별 등록 맛집 일람' in html_content:
        print(" -> 기존에 추가된 맛집 일람 섹션을 새로운 SVG 버전으로 업데이트합니다.")
        html_content = re.sub(
            r'<h2 id="s-10">10\. 구·군별 등록 맛집 일람.*?<h2 id="s-11">11\. 교통 연계 및 주의사항</h2>',
            new_section_html + '\n<h2 id="s-11">11. 교통 연계 및 주의사항</h2>',
            html_content,
            flags=re.DOTALL
        )
    else:
        target_str = '<h2 id="s-10">10. 교통 연계 및 주의사항</h2>'
        replacement_str = new_section_html + '\n<h2 id="s-11">11. 교통 연계 및 주의사항</h2>'
        
        if target_str in html_content:
            html_content = html_content.replace(target_str, replacement_str, 1)
        else:
            html_content = html_content.replace('<div id="footer-container"></div>', new_section_html + '\n<div id="footer-container"></div>', 1)

    with open(HTML_OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(html_content)

    print(f"4. 작업 완료! '{HTML_OUTPUT_PATH}' 파일이 성공적으로 업데이트되었습니다.")

if __name__ == '__main__':
    main()