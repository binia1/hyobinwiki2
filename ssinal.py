import os
import json
import re
from bs4 import BeautifulSoup

# 1. 추출해둔 JSON 데이터 로드
with open('extracted_infobox_data.json', 'r', encoding='utf-8') as f:
    extracted_data = json.load(f)

# 2. 각주용 텍스트 파일(시군구_각주용_정리본.txt) 자동 파싱
footnotes_dict = {}
if os.path.exists('시군구_각주용_정리본.txt'):
    with open('시군구_각주용_정리본.txt', 'r', encoding='utf-8') as f:
        current_region = None
        current_block = []
        for line in f:
            line = line.strip()
            if not line: continue
            
            # "1. 중구", "2. 동구" 등 지역명 헤더 찾기
            m = re.match(r'^\d+\.\s+([가-힣]+[시구군])$', line)
            if m:
                if current_region:
                    footnotes_dict[current_region] = "<br>".join(current_block)
                current_region = m.group(1)
                current_block = []
            elif current_region:
                current_block.append(line)
        if current_region:
            footnotes_dict[current_region] = "<br>".join(current_block)

# 정당 데이터 파서
def parse_political_data(html_str):
    if not html_str or html_str == "-":
        return []
    soup = BeautifulSoup(html_str, 'html.parser')
    results = []
    for tr in soup.find_all('tr'):
        tds = tr.find_all('td')
        if len(tds) >= 2:
            badge_html = tds[0].decode_contents().strip()
            # 안에 이미 각주나 불필요한 태그가 있으면 날리고 깔끔하게 텍스트만 유지
            raw_text = tds[1].get_text(strip=True)
            # 기존 [1], [2] 등 찌꺼기 텍스트 제거
            clean_text = re.sub(r'\[\d+\]', '', raw_text)
            results.append({"badge": badge_html, "content": clean_text})
            
    if not results:
        return [{"badge": "", "content": html_str}]
    return results

# rowspan을 적용하여 의석수 줄(TR) 생성 (각주는 첫 번째 줄에만 삽입)
def build_rowspan_trs(title, data_list, theme_color, footnote_html=""):
    if not data_list or not data_list[0].get("badge"):
        return ""
    
    html = ""
    rowspan = len(data_list)
    for i, item in enumerate(data_list):
        badge = item['badge']
        content = item['content']
        
        # 첫 번째 줄에만 타이틀(rowspan)과 각주 삽입
        if i == 0:
            html += f"""
            <tr>
                <th colspan="2" rowspan="{rowspan}" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc; vertical-align: middle;">{title}</th>
                <td style="padding: 6px; border: 1px solid #ccc; vertical-align: middle;">{badge}</td>
                <td style="padding: 6px; border: 1px solid #ccc; color: #333; vertical-align: middle; text-align: center;">{content} {footnote_html}</td>
            </tr>"""
        else:
            html += f"""
            <tr>
                <td style="padding: 6px; border: 1px solid #ccc; vertical-align: middle;">{badge}</td>
                <td style="padding: 6px; border: 1px solid #ccc; color: #333; vertical-align: middle; text-align: center;">{content}</td>
            </tr>"""
    return html

# 49개 지역 파일 변환 시작
for region, data in extracted_data.items():
    filepath = f"{region}.html"
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    old_infobox = soup.find('aside', class_='infobox') or soup.find('table', style=lambda s: s and 'float: right' in s)
    if not old_infobox: continue

    # 자치구/자치시/자치군 구분
    entity_label = "자치구" if "구" in region[-1] else "자치시" if "시" in region[-1] else "자치군"
    
    # 테마 색상 자동 추출
    theme_color = "#7799CC"
    th_with_bg = old_infobox.find('th', style=lambda s: s and 'background' in s)
    if th_with_bg:
        color_match = re.search(r'background(?:-color)?\s*:\s*(#[0-9a-fA-F]{6})', th_with_bg['style'])
        if color_match:
            theme_color = color_match.group(1).upper()

    # JSON 데이터 변수화
    address = data.get("구청 소재지", data.get("시청 소재지", data.get("도청 소재지", "-")))
    parent = data.get("광역자치단체", "-")
    sub_area = data.get("하위 행정 구역", "-")
    area = data.get("면적", "-")
    pop = data.get("인구", "-")
    dens = data.get("인구 밀도", "-")
    mayor = data.get("구청장", data.get("시장", data.get("군수", "-")))
    
    flower = data.get("상징 구화", data.get("구화", data.get("시화", data.get("군화", "-"))))
    tree = data.get("구목", data.get("시목", data.get("군목", "-")))
    bird = data.get("구조", data.get("시조", data.get("군조", "-")))
    phone = data.get("지역 번호", "-")
    sns = data.get("SNS", "")

    # 정치인 데이터 파싱
    local_council = parse_political_data(data.get("구의회", data.get("시의회", data.get("군의회", ""))))
    city_council = parse_political_data(data.get("시의원", data.get("도의원", "")))
    assembly = parse_political_data(data.get("국회의원", ""))

    # txt 파일에서 가져온 지역별 각주 세팅 (남구 스타일 툴팁 생성)
    region_footnote_text = footnotes_dict.get(region, "")
    footnote_html = ""
    if region_footnote_text:
        footnote_html = f'<sup class="fn-sup"><a href="#fn-1" style="color: inherit; text-decoration: none;">[1]</a><span class="fn-tooltip" style="display:none; text-align:left;">{region_footnote_text}</span></sup>'

    # ★ 스승님이 원하시던 '완벽한 헤더'와 '지도 프레임(iframe)' 적용 ★
    new_html = f"""
<aside class="infobox shrink-0 shadow-sm rounded overflow-hidden h-fit order-1 md:order-2" style="border: 1px solid #ccc; background: #fff; width: 100%; max-width: 430px;">
    
    <!-- 사진과 똑같은 하얀 배경의 상단 헤더 -->
    <div style="text-align: center; font-weight: bold; font-size: 16px; padding: 12px; color: #000; border-bottom: 1px solid #ccc; background-color: #fff;">
        {parent.replace('<a class="wiki-link" href="효빈광역시.html">', '').replace('</a>', '')}의 {entity_label}
    </div>
    
    <!-- 사진과 똑같은 네모 반듯한 로고 & 이름 박스 -->
    <div style="display: flex; align-items: center; justify-content: center; padding: 15px; background: white; border-bottom: 1px solid #ccc;">
        <div style="border: 1px solid #ccc; display: inline-flex; align-items: center; background-color: #fff; padding: 0;">
            <div style="border-right: 1px solid #ccc; padding: 10px; display: flex; align-items: center; justify-content: center; width: 80px; height: 80px;">
                <img alt="{region} 로고" src="이미지/svg/{region}.svg" onerror="this.src='이미지/{region}.webp'" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
            <div style="padding: 10px 15px; text-align: left; line-height: 1.3;">
                <strong style="font-size: 1.4em; color: #000;">{region}</strong><br>
                <span style="font-size: 0.85em; color: #666;">漢字</span><br>
                <span style="font-size: 0.85em; color: #333;">Eng-Name</span>
            </div>
        </div>
    </div>

    <!-- 구청 사진 날려버리고 완벽하게 대체된 효빈위키 지도 프레임 (iframe) -->
    <div style="width: 100%; height: 250px; overflow: hidden; position: relative; border-bottom: 1px solid #ccc; background: #f3f4f6;">
        <iframe src="https://binia1.github.io/mymap/" style="width: 160%; height: 160%; border: none; position: absolute; top: 0; left: 0; transform: scale(0.625); transform-origin: 0 0;"></iframe>
    </div>

    <table style="width: 100%; border-collapse: collapse; text-align: center; margin: 0; font-size: 13px; table-layout: fixed;">
        <colgroup>
            <col style="width: 22%;">
            <col style="width: 22%;">
            <col style="width: 25%;">
            <col style="width: 31%;">
        </colgroup>
        <tbody>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">청사 소재지</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{address}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">광역자치단체</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{parent}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">하위 행정구역</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{sub_area}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">면적</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{area}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">인구</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{pop}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">인구 밀도</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{dens}</td></tr>
            
            <tr>
                <th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">단체장</th>
                <td colspan="2" style="padding: 6px; border: 1px solid #ccc; color: #333; text-align: center;">{mayor}</td>
            </tr>
            
            <!-- 정리본 텍스트 각주가 포함된 의회 데이터 렌더링 -->
            {build_rowspan_trs("지방의회", local_council, theme_color, footnote_html)}
            {build_rowspan_trs("광역의원", city_council, theme_color)}
            {build_rowspan_trs("국회의원", assembly, theme_color)}
            
            <tr>
                <th rowspan="3" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc; vertical-align: middle;">상징</th>
                <th style="background-color: {theme_color}; filter: brightness(0.85); color: #fff; padding: 8px; border: 1px solid #ccc;">구화</th>
                <td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{flower}</td>
            </tr>
            <tr><th style="background-color: {theme_color}; filter: brightness(0.85); color: #fff; padding: 8px; border: 1px solid #ccc;">구목</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{tree}</td></tr>
            <tr><th style="background-color: {theme_color}; filter: brightness(0.85); color: #fff; padding: 8px; border: 1px solid #ccc;">구조</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{bird}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">지역 번호</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{phone}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">SNS</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc;">{sns}</td></tr>
        </tbody>
    </table>
</aside>
"""
    # 기존 코드 덮어쓰기
    new_soup = BeautifulSoup(new_html, 'html.parser')
    old_infobox.replace_with(new_soup)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(soup.encode(formatter=None).decode('utf-8'))
        
    print(f"[{region}] ✅ 완벽 적용: 하얀배경 헤더 + 로고박스 + 지도iframe + 텍스트 각주")

print("\n🚀 49개 지역 문서의 갓벽한 변환이 완료되었습니다.")