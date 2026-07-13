import re
import os
import glob
from bs4 import BeautifulSoup

# ★ 사용자가 지정한 지역별 고유 색상표 내장 ★
COLOR_DICT = {
    # 효빈광역시
    "북구": "#7799CC", "남구": "#DDBBFF", "중구": "#BB9955", "동구": "#FF9922",
    "서구": "#00AABB", "청엽구": "#006699", "창전구": "#33AAFF", "안천구": "#AA66DD", "탄성군": "#BBFF64",
    
    # 덕빈북도
    "궁하구": "#8B4993", "천성구": "#8B4993", "빈성구": "#ffeeaa", "가원구": "#ffeeaa", "장기구": "#ffeeaa",
    "빈주시": "#ffeeaa", "천주시": "#8B4993", "서해시": "#37B484", "약산시": "#F8C8C4",
    "강주시": "#ffc94a", "군천시": "#E7D600", "계성시": "#ED7D95", "서진시": "#9CA5B9",
    "전산시": "#FF7F27", "기도군": "#01B7ED", "낭원군": "#485EC6", "덕현군": "#FF5800",
    "모제군": "#A664A0", "반양군": "#D81C2F", "상안군": "#84C36E", "선곡군": "#D6D5CA",
    "저천군": "#1D1D1D", "치원군": "#aa7799",
    
    # 덕빈남도
    "매성시": "#FF6E90", "비천시": "#74F466", "방산시": "#FFF442", "마진시": "#ff99be",
    "덕주시": "#ff9ea9", "하정시": "#ff3b72", "낙주시": "#bb0033", "조전구": "#ff9ea9", "덕산구": "#ff9ea9",
    "매산군": "#A0FFF9", "석창군": "#0000A0", "분주군": "#FF3535", "고포군": "#B2FFDD",
    "곡천군": "#FF51C4", "인곡군": "#4cd2e2", "관수군": "#e49dfd", "운진군": "#bbff64",
    "두원군": "#e3ba3a", "원안군": "#00aabb"
}

def calculate_luminance(hex_color):
    """HEX 색상의 밝기(Luminance)를 계산합니다."""
    hex_color = hex_color.replace('#', '')
    if len(hex_color) == 3:
        hex_color = ''.join([c*2 for c in hex_color])
    if not hex_color: return 255
    try:
        r, g, b = int(hex_color[0:2], 16), int(hex_color[2:4], 16), int(hex_color[4:6], 16)
        return (0.299 * r + 0.587 * g + 0.114 * b)
    except:
        return 255

def get_text_color(hex_color):
    """배경색 밝기에 따라 흰색 또는 어두운 글자색을 반환합니다."""
    return "#222" if calculate_luminance(hex_color) > 160 else "white"

def darken_color(hex_color, factor=0.85):
    """상징 항목의 서브 헤더를 위해 색상을 살짝 어둡게 만듭니다."""
    hex_color = hex_color.replace('#', '')
    if len(hex_color) == 3:
        hex_color = ''.join([c*2 for c in hex_color])
    if not hex_color: return "#cccccc"
    try:
        r, g, b = int(hex_color[0:2], 16), int(hex_color[2:4], 16), int(hex_color[4:6], 16)
        r, g, b = int(r * factor), int(g * factor), int(b * factor)
        return f"#{r:02x}{g:02x}{b:02x}"
    except:
        return "#cccccc"

def parse_council_seats(html_str):
    """의회/의원 데이터를 뱃지와 의석수로 분리합니다."""
    soup = BeautifulSoup(html_str, 'html.parser')
    results = []
    badges = soup.find_all('span', class_=lambda c: c and 'badge' in c)
    
    if not badges:
        return [(html_str, "")]
        
    for badge in badges:
        badge_html = str(badge)
        next_node = badge.next_sibling
        seat_text = ""
        while next_node and next_node.name != 'span' and next_node.name != 'br':
            if isinstance(next_node, str):
                seat_text += next_node
            else:
                seat_text += next_node.get_text()
            next_node = next_node.next_sibling
        
        nums = re.findall(r'\d+', seat_text)
        seat_count = f"{nums[0]}석" if nums else "1석"
        results.append((badge_html, seat_count))
    return results

def parse_assembly(html_str, title_text):
    """국회의원 데이터를 지역구와 의원으로 분리합니다."""
    # <br> 태그의 형태(<br>, <br/>, <br />)에 상관없이 모두 분리 기준으로 변환
    html_str = re.sub(r'<br\s*/?>', '||SPLIT||', html_str, flags=re.IGNORECASE)
    html_str = html_str.replace('\n', '')
    parts = [p.strip() for p in html_str.split('||SPLIT||') if p.strip()]
    
    results = []
    for part in parts:
        # 핵심 수정: HTML 태그 속성(style="color:red" 등) 내부의 콜론을 제외하고, 텍스트에 노출된 실제 콜론만 기준으로 분리
        split_parts = re.split(r':(?![^<]*>)', part, 1)
        
        if len(split_parts) == 2:
            district, member = split_parts
            results.append((district.strip(), member.strip()))
        else:
            # 콜론이 없는 경우(단일 선거구 등), 지자체 이름(title_text)을 선거구명으로 사용
            results.append((title_text, part.strip()))
    return results

def parse_symbols(html_str, region_type):
    """상징 데이터를 분리합니다."""
    html_str = re.sub(r'<br\s*/?>', '||SPLIT||', html_str, flags=re.IGNORECASE).replace('\n', '')
    symbols = []
    
    # 1. 태그 밖 콜론이 존재하는 경우 ("구화: 장미" 형태)
    if re.search(r':(?![^<]*>)', html_str):
        if '||SPLIT||' in html_str:
            parts = [p.strip() for p in html_str.split('||SPLIT||') if p.strip()]
        else:
            parts = [p.strip() for p in html_str.split(',') if p.strip()]
            
        for part in parts:
            split_parts = re.split(r':(?![^<]*>)', part, 1)
            if len(split_parts) == 2:
                symbols.append((split_parts[0].strip(), split_parts[1].strip()))
            else:
                symbols.append(("기타", part.strip()))
                
    # 2. 콜론 없이 괄호로 구분된 경우 ("해당화(꽃), 곰솔(나무)" 형태)
    elif ',' in html_str or '(' in html_str:
        parts = [p.strip() for p in html_str.split(',') if p.strip()]
        for part in parts:
            if '(꽃)' in part: symbols.append((f"{region_type}화", part.replace('(꽃)', '').strip()))
            elif '(나무)' in part: symbols.append((f"{region_type}목", part.replace('(나무)', '').strip()))
            elif '(새)' in part: symbols.append((f"{region_type}조", part.replace('(새)', '').strip()))
            elif '(마스코트)' in part: symbols.append(("마스코트", part.replace('(마스코트)', '').strip()))
            else: symbols.append(("기타", part.strip()))
    else:
        return None
    return symbols

def convert_html_file(filepath):
    print(f"파일 변환 시도 중: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')
    infoboxes = soup.find_all('aside', class_=lambda c: c and 'infobox' in c)

    converted_count = 0

    for i, box in enumerate(infoboxes):
        # 1. 표 데이터를 추출해서 지역 인포박스가 맞는지 검사
        table = box.find('table')
        if not table: continue
        
        data = {}
        for tr in table.find_all('tr', recursive=False) + table.find_all('tr'):
            th = tr.find('th')
            td = tr.find('td')
            if th and td and not th.has_attr('colspan') and not th.has_attr('rowspan'):
                key = th.get_text(strip=True)
                data[key] = td.decode_contents()

        # 지역 인포박스 검증 (면적, 인구, 청장 등의 키워드 확인)
        if not any(k in data for k in ['면적', '인구', '하위 행정 구역', '시장', '군수', '구청장']):
            continue

        converted_count += 1

        # 2. 이름 및 색상 추출 (사전에서 최우선으로 가져오기)
        title_el = box.select_one('.infobox-name .text-xl')
        title_text = title_el.get_text(strip=True) if title_el else ""
        filename_no_ext = os.path.splitext(os.path.basename(filepath))[0].strip()
        region_type = "시" if "시" in title_text else "군" if "군" in title_text else "구"

        # ★ 딕셔너리에서 색상 찾기 (타이틀 -> 파일명 순서)
        base_color = COLOR_DICT.get(title_text)
        if not base_color:
            base_color = COLOR_DICT.get(filename_no_ext)
            
        # 딕셔너리에 없으면 HTML 태그 내부 분석 시도
        if not base_color:
            style_attr = box.get('style', '')
            color_match = re.search(r'border:\s*1px\s*solid\s*(#[0-9a-fA-F]{3,6})', style_attr, re.IGNORECASE)
            if color_match:
                base_color = color_match.group(1).upper()
            else:
                top_label = box.find('div', class_='infobox-top-label')
                if top_label and top_label.has_attr('style'):
                    bg_match = re.search(r'background-color:\s*(#[0-9a-fA-F]{3,6})', top_label['style'], re.IGNORECASE)
                    if bg_match:
                        base_color = bg_match.group(1).upper()

        if not base_color:
            base_color = '#7777AA' # 최후의 기본값

        text_color = get_text_color(base_color)
        sub_color = darken_color(base_color)

        # 상단 라벨, 로고, 이름, 지도, 여분 이미지 추출
        top_label = box.find('div', class_='infobox-top-label')
        top_label_text = top_label.decode_contents() if top_label else "기초자치단체"

        logo_img = box.select_one('.infobox-logo img')
        logo_html = str(logo_img) if logo_img else ""

        name_div = box.find('div', class_='infobox-name')
        name_html = name_div.decode_contents() if name_div else ""

        map_div = box.find('div', class_='infobox-map')
        map_html = map_div.decode_contents() if map_div else ""

        extra_imgs = []
        if map_div:
            for sibling in map_div.find_next_siblings('div'):
                if sibling.find('img'):
                    extra_imgs.append(str(sibling))
                elif sibling.name == 'table':
                    break

        # 3. 새로운 HTML 조립
        unique_id = f"box_{i}_{filename_no_ext}"
        
        new_html = f"""
        <aside class="infobox shrink-0 shadow-sm rounded overflow-hidden h-fit order-1 md:order-2" style="border: 1px solid {base_color};">
            <div class="infobox-top-label" style="background-color: {base_color}; color: {text_color}; padding: 6px; text-align: center; font-weight: bold; font-size: 13px;">
                {top_label_text}
            </div>
            <div class="infobox-title-row" style="padding: 15px; border-bottom: 1px solid #ccc; display: flex; align-items: center; justify-content: center; gap: 15px; background: white;">
                <div class="infobox-logo" style="display: flex; align-items: center; justify-content: center; overflow: hidden; height: 60px; width: 60px;">
                    {logo_html}
                </div>
                <div class="infobox-name" style="text-align: center; line-height: 1.1;">
                    {name_html}
                </div>
            </div>
            <div class="infobox-map border-b border-[#ccc]" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
                {map_html}
            </div>
            {''.join(extra_imgs)}
            <table>
                <colgroup><col style="width: 22%;"><col style="width: 22%;"><col style="width: 56%;"></colgroup>
                <tbody>
        """

        for key, value in data.items():
            if key in ['SNS', '홈페이지', '상징', 'IATA 도시 코드', 'ISO 3166-2']: continue
            
            # 접기/펼치기 대상 항목 (의회/의원)
            if key in ['구의회', '시의회', '군의회', '도의원', '시의원', '군의원', '구의원']:
                parsed = parse_council_seats(value)
                new_html += f"""
                    <tr>
                        <th colspan="2" style="background: {base_color}; color: {text_color}; border: 1px solid #ccc; padding: 8px; vertical-align: middle;">{key}</th>
                        <td class="no-padding" style="border: 1px solid #ccc; padding: 0; background: white; vertical-align: middle;">
                            <div style="background: #f8f9fa; padding: 4px; font-size: 11px; font-weight: bold; color: #555; text-align: center; cursor: pointer; user-select: none;" onclick="var c = document.getElementById('{unique_id}_{key}'); if(c.style.display==='none'){{c.style.display='table'; this.innerText='[ 접기 ]';}}else{{c.style.display='none'; this.innerText='[ 펼치기 ]';}}">[ 펼치기 ]</div>
                            <table id="{unique_id}_{key}" style="display: none; width: 100%; border-collapse: collapse; border-top: 1px solid #ccc; text-align: center;">
                                <colgroup><col style="width: 50%;"><col style="width: 50%;"></colgroup>
                """
                for idx, (badge, seats) in enumerate(parsed):
                    border_b = "border-bottom: 1px solid #eee;" if idx < len(parsed)-1 else ""
                    new_html += f"""
                                <tr>
                                    <td style="padding: 4px; {border_b} border-right: 1px solid #eee; text-align: center; vertical-align: middle;">{badge}</td>
                                    <td style="padding: 4px; {border_b} text-align: center; vertical-align: middle;">{seats}</td>
                                </tr>
                    """
                new_html += "</table></td></tr>"
            
            # 국회의원 표 분할 처리
            elif key == '국회의원':
                parsed = parse_assembly(value, title_text)
                new_html += f"""
                    <tr>
                        <th colspan="2" style="background: {base_color}; color: {text_color}; border: 1px solid #ccc; padding: 8px; vertical-align: middle;">{key}</th>
                        <td class="no-padding" style="border: 1px solid #ccc; padding: 0; background: white; vertical-align: middle;">
                            <div style="background: #f8f9fa; padding: 4px; font-size: 11px; font-weight: bold; color: #555; text-align: center; cursor: pointer; user-select: none;" onclick="var c = document.getElementById('{unique_id}_{key}'); if(c.style.display==='none'){{c.style.display='table'; this.innerText='[ 접기 ]';}}else{{c.style.display='none'; this.innerText='[ 펼치기 ]';}}">[ 펼치기 ]</div>
                            <table id="{unique_id}_{key}" style="display: none; width: 100%; border-collapse: collapse; border-top: 1px solid #ccc; text-align: center;">
                                <colgroup><col style="width: 30%;"><col style="width: 70%;"></colgroup>
                """
                for idx, (district, member) in enumerate(parsed):
                    border_b = "border-bottom: 1px solid #eee;" if idx < len(parsed)-1 else ""
                    new_html += f"""
                                <tr>
                                    <td style="padding: 4px 2px; {border_b} border-right: 1px solid #eee; text-align: center; vertical-align: middle; background: #fdfdfd; font-weight: bold; font-size: 11px;">{district}</td>
                                    <td class="nowrap-cell" style="padding: 4px 2px; {border_b} text-align: left; vertical-align: middle; white-space: nowrap; word-break: keep-all; letter-spacing: -0.5px;">{member}</td>
                                </tr>
                    """
                new_html += "</table></td></tr>"
            
            else:
                # 일반 텍스트 데이터
                new_html += f'<tr><th colspan="2" style="background: {base_color}; color: {text_color}; border: 1px solid #ccc; padding: 8px; vertical-align: middle;">{key}</th><td style="border: 1px solid #ccc; padding: 8px; background: white; vertical-align: middle;">{value}</td></tr>\n'

        # 상징 처리
        if '상징' in data:
            parsed_symbols = parse_symbols(data['상징'], region_type)
            if parsed_symbols:
                rowspan = len(parsed_symbols)
                new_html += f'<tr><th rowspan="{rowspan}" style="background: {base_color}; color: {text_color}; border: 1px solid #ccc; padding: 8px; vertical-align: middle;">상징</th>'
                for idx, (s_key, s_val) in enumerate(parsed_symbols):
                    if idx > 0: new_html += "<tr>"
                    new_html += f'<th style="background: {sub_color}; color: {text_color}; border: 1px solid #ccc; padding: 4px; vertical-align: middle;">{s_key}</th><td style="border: 1px solid #ccc; padding: 4px; background: white; vertical-align: middle;">{s_val}</td></tr>\n'
            else:
                new_html += f'<tr><th colspan="2" style="background: {base_color}; color: {text_color}; border: 1px solid #ccc; padding: 8px; vertical-align: middle;">상징</th><td style="border: 1px solid #ccc; padding: 8px; background: white; vertical-align: middle;">{data["상징"]}</td></tr>\n'

        # SNS, 홈페이지, 코드 처리
        if 'IATA 도시 코드' in data:
            new_html += f'<tr><th colspan="2" style="background: {base_color}; color: {text_color}; border: 1px solid #ccc; padding: 8px; vertical-align: middle;">IATA 도시 코드</th><td style="border: 1px solid #ccc; padding: 8px; background: white; font-weight: bold;">{data["IATA 도시 코드"]}</td></tr>\n'
        if 'ISO 3166-2' in data:
            new_html += f'<tr><th colspan="2" style="background: {base_color}; color: {text_color}; border: 1px solid #ccc; padding: 8px; vertical-align: middle;">ISO 3166-2</th><td style="border: 1px solid #ccc; padding: 8px; background: white; font-weight: bold;">{data["ISO 3166-2"]}</td></tr>\n'
        
        if 'SNS' in data:
            new_html += f'<tr><th colspan="2" style="background: {base_color}; color: {text_color}; border: 1px solid #ccc; padding: 8px; vertical-align: middle;">SNS</th><td style="border: 1px solid #ccc; padding: 8px; background: white; vertical-align: middle;">{data["SNS"]}</td></tr>\n'
        if '홈페이지' in data:
            new_html += f'<tr><th colspan="2" style="background: {base_color}; color: {text_color}; border: 1px solid #ccc; padding: 8px; vertical-align: middle;">홈페이지</th><td style="border: 1px solid #ccc; padding: 8px; background: white; vertical-align: middle;">{data["홈페이지"]}</td></tr>\n'

        new_html += """
                </tbody>
            </table>
        </aside>
        """
        
        new_aside_soup = BeautifulSoup(new_html, 'html.parser')
        box.replace_with(new_aside_soup.aside)

    if converted_count > 0:
        output_filepath = filepath.replace('.html', '_converted.html')
        with open(output_filepath, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        print(f"  -> 변환 완료! 생성된 파일: {output_filepath}")
    else:
        print(f"  -> 패스 (지역 인포박스가 없음)")

if __name__ == "__main__":
    # 1. 대상 폴더 안의 모든 .html 파일을 가져옴 (_converted 제외)
    all_html_files = [f for f in glob.glob("*.html") if "_converted" not in f]
    
    # 2. ★ 강력한 필터링: 파일명이 정확히 '시', '군', '구'로 끝나는 파일만 선별 ★
    target_files = []
    for f in all_html_files:
        name_no_ext = os.path.splitext(os.path.basename(f))[0].strip()
        if name_no_ext[-1] in ['시', '군', '구']:
            target_files.append(f)
            
    if not target_files:
        print("현재 폴더에 변환할 '시/군/구'로 끝나는 .html 파일이 없습니다.")
    else:
        print(f"총 {len(target_files)}개의 지자체 파일을 변환합니다...\n")
        for file in target_files:
            convert_html_file(file)
        print("\n🎉 모든 변환이 완벽하게 완료되었습니다!")