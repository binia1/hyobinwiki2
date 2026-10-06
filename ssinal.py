import os
import json
import re
from bs4 import BeautifulSoup

COLOR_MAP = {
    "중구": "#BB9955", "동구": "#FF9922", "서구": "#00AABB", "남구": "#DDBBFF",
    "청엽구": "#006699", "창전구": "#33AAFF", "안천구": "#AA66DD", "탄성군": "#BBFF64",
    "강주시": "#ffc94a", "계성시": "#ED7D95", "군천시": "#E7D600", "기도군": "#01B7ED",
    "낭원군": "#485EC6", "덕현군": "#FF5800", "모제군": "#A664A0", "반양군": "#D81C2F",
    "상안군": "#84C36E", "서진시": "#9CA5B9", "서해시": "#37B484", "선곡군": "#D6D5CA",
    "약산시": "#F8C8C4", "저천군": "#1D1D1D", "전산시": "#FF7F27", "치원군": "#aa7799",
    "천주시": "#8B4993", "빈주시": "#ffeeaa", "궁하구": "#8B4993", "천성구": "#8B4993",
    "빈성구": "#ffeeaa", "가원구": "#ffeeaa", "장기구": "#ffeeaa", "매산군": "#A0FFF9",
    "매성시": "#FF6E90", "비천시": "#74F466", "석창군": "#0000A0", "방산시": "#FFF442",
    "분주군": "#FF3535", "고포군": "#B2FFDD", "곡천군": "#FF51C4", "인곡군": "#4cd2e2",
    "관수군": "#e49dfd", "운진군": "#bbff64", "두원군": "#e3ba3a", "마진시": "#ff99be",
    "덕주시": "#ff9ea9", "조전구": "#ff9ea9", "덕산구": "#ff9ea9", "하정시": "#ff3b72",
    "원안군": "#00aabb", "낙주시": "#bb0033"
}

with open('extracted_infobox_data.json', 'r', encoding='utf-8') as f:
    extracted_data = json.load(f)

footnotes_db = {}
if os.path.exists('시군구_각주용_정리본.txt'):
    with open('시군구_각주용_정리본.txt', 'r', encoding='utf-8') as f:
        current_region = None
        for line in f:
            line = line.strip()
            if not line: continue
            
            m = re.match(r'^\d+\.\s+([가-힣]+[시구군])', line)
            if m:
                current_region = m.group(1)
                footnotes_db[current_region] = {"광역": {}, "기초": {}}
                continue
                
            if not current_region: continue
            
            if ':' in line:
                parts = line.split(':', 1)
                dist_part = parts[0].strip()
                members_part = parts[1].strip()
                
                if "덕빈북도" in dist_part or "효빈광역시" in dist_part:
                    continue
                    
                is_gwangyeok = bool(re.search(r'제\d+선거구', dist_part))
                target_dict = footnotes_db[current_region]["광역"] if is_gwangyeok else footnotes_db[current_region]["기초"]
                
                matches = re.findall(r'([가-힣]+)\s*\(([가-힣a-zA-Z\s]+),\s*([가-힣0-9]+)\)', members_part)
                party_to_members = {}
                for name, party, history in matches:
                    party = party.strip()
                    if party not in party_to_members:
                        party_to_members[party] = []
                    party_to_members[party].append(f"{name} ({history})")
                    
                for party, mem_list in party_to_members.items():
                    if party not in target_dict:
                        target_dict[party] = []
                    target_dict[party].append(f"{dist_part}: {', '.join(mem_list)}")

for reg in footnotes_db:
    for c_type in ["광역", "기초"]:
        for party in footnotes_db[reg][c_type]:
            footnotes_db[reg][c_type][party] = "<br>".join(footnotes_db[reg][c_type][party])

def parse_political_data(html_str):
    if not html_str or html_str == "-": return []
    soup = BeautifulSoup(html_str, 'html.parser')
    results = []
    
    table = soup.find('table')
    if table:
        for tr in table.find_all('tr'):
            tds = tr.find_all('td')
            if not tds: continue
            
            badge_html, sub_label, content_html = "", "", ""
            badge_span = tr.find('span', class_=lambda c: c and 'badge' in c)
            if badge_span:
                badge_html = str(badge_span)
                badge_span.extract()
                
            if len(tds) >= 2:
                text0 = tds[0].get_text(strip=True)
                if text0:
                    sub_label = tds[0].decode_contents().strip()
                    content_html = tds[1].decode_contents().strip()
                else:
                    content_html = tds[1].decode_contents().strip()
            elif len(tds) == 1:
                content_html = tds[0].decode_contents().strip()
                
            content_html = re.sub(r'<sup[^>]*>.*?</sup>', '', content_html)
            content_html = re.sub(r'\[\d+\]', '', content_html).strip()
            results.append({"badge": badge_html, "sub_label": sub_label, "content": content_html})
        return results

    badge_span = soup.find('span', class_=lambda c: c and 'badge' in c)
    badge_html = str(badge_span) if badge_span else ""
    if badge_span: badge_span.extract()
    
    content_html = soup.decode_contents().strip()
    content_html = re.sub(r'<sup[^>]*>.*?</sup>', '', content_html)
    content_html = re.sub(r'\[\d+\]', '', content_html).strip()
    return [{"badge": badge_html, "sub_label": "", "content": content_html}]

def build_rowspan_trs(title, data_list, theme_color, footnotes_dict, fn_counter, global_footnotes, is_assembly=False):
    if not data_list or (not data_list[0].get("badge") and not data_list[0].get("content")):
        return "", fn_counter
    
    html = ""
    rowspan = len(data_list)
    for i, item in enumerate(data_list):
        badge = item['badge']
        content = item['content']
        sub = item.get('sub_label', '')
        
        party_name = ""
        if badge:
            bsoup = BeautifulSoup(badge, 'html.parser')
            party_name = bsoup.get_text(strip=True)
            
        fn_html = ""
        if party_name and party_name in footnotes_dict:
            fn_text = footnotes_dict[party_name]
            # ★ 에러수정 1: display:none 제거. 이제 마우스 올리면 툴팁 무조건 노출됨 ★
            fn_html = f' <sup class="fn-sup"><a id="rfn-{fn_counter}" href="#fn-{fn_counter}" style="color: {theme_color}; text-decoration: none; font-weight: bold;">[{fn_counter}]</a><span class="fn-tooltip" style="text-align:left; min-width: 350px; font-weight: normal;">{fn_text}</span></sup>'
            global_footnotes.append((fn_counter, fn_text))
            fn_counter += 1
            
        # ★ 에러수정 2: 국회의원일 경우 하이퍼링크 제거 및 셀 1개로 합치기 ★
        if is_assembly:
            clean_sub = BeautifulSoup(sub, 'html.parser').get_text(strip=True) if sub else ""
            m = re.search(r'^(.*?)\s*\((.*?)\)$', content)
            if m:
                name_html = m.group(1).strip()
                history = m.group(2).strip()
                if clean_sub:
                    content = f'{name_html}<br><span style="font-size: 0.8em; color: #666;">({clean_sub} / {history})</span>'
                else:
                    content = f'{name_html}<br><span style="font-size: 0.8em; color: #666;">({history})</span>'
            else:
                if clean_sub:
                    content = f'{content}<br><span style="font-size: 0.8em; color: #666;">({clean_sub})</span>'
            
            sub = "" # sub를 강제로 지워서 아래 조건문에서 무조건 colspan="2" (열병합)을 타게 만듦

        if sub: 
            if i == 0:
                html += f"""
            <tr>
                <th rowspan="{rowspan}" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc; vertical-align: middle;">{title}</th>
                <th style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc; vertical-align: middle;">{sub}</th>
                <td style="padding: 6px; border: 1px solid #ccc; vertical-align: middle;">{badge}</td>
                <td style="padding: 6px; border: 1px solid #ccc; color: #333; vertical-align: middle; text-align: left; padding-left: 10px;">{content}{fn_html}</td>
            </tr>"""
            else:
                html += f"""
            <tr>
                <th style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc; vertical-align: middle;">{sub}</th>
                <td style="padding: 6px; border: 1px solid #ccc; vertical-align: middle;">{badge}</td>
                <td style="padding: 6px; border: 1px solid #ccc; color: #333; vertical-align: middle; text-align: left; padding-left: 10px;">{content}{fn_html}</td>
            </tr>"""
        else: 
            if i == 0:
                html += f"""
            <tr>
                <th colspan="2" rowspan="{rowspan}" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc; vertical-align: middle;">{title}</th>
                <td style="padding: 6px; border: 1px solid #ccc; vertical-align: middle;">{badge}</td>
                <td style="padding: 6px; border: 1px solid #ccc; color: #333; vertical-align: middle; text-align: center;">{content}{fn_html}</td>
            </tr>"""
            else:
                html += f"""
            <tr>
                <td style="padding: 6px; border: 1px solid #ccc; vertical-align: middle;">{badge}</td>
                <td style="padding: 6px; border: 1px solid #ccc; color: #333; vertical-align: middle; text-align: center;">{content}{fn_html}</td>
            </tr>"""
    return html, fn_counter

# ================= 6. 파일 변환 실행 =================
for region, data in extracted_data.items():
    filepath = f"{region}.html"
    if not os.path.exists(filepath): continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    old_infobox = soup.find('aside', class_='infobox') or soup.find('table', style=lambda s: s and 'float: right' in s)
    if not old_infobox: continue

    entity_label = "자치구" if "구" in region[-1] else "자치시" if "시" in region[-1] else "자치군"
    theme_color = COLOR_MAP.get(region, "#7799CC")

    hanja_name = data.get("한자명", "漢字")
    eng_name = data.get("영문명", "Eng-Name")
    address = data.get("구청 소재지", data.get("시청 소재지", data.get("도청 소재지", "-")))
    parent_raw = data.get("광역자치단체", "효빈광역시")
    parent_text = BeautifulSoup(parent_raw, 'html.parser').get_text(strip=True)
    
    sub_area = data.get("하위 행정 구역", "-")
    area = data.get("면적", "-")
    pop = data.get("인구", "-")
    dens = data.get("인구 밀도", "-")
    
    flower = data.get("상징 구화", data.get("구화", data.get("시화", data.get("군화", "-"))))
    tree = data.get("구목", data.get("시목", data.get("군목", "-")))
    bird = data.get("구조", data.get("시조", data.get("군조", "-")))
    phone = data.get("지역 번호", "-")
    sns = data.get("SNS", "")

    mayor = parse_political_data(data.get("구청장", data.get("시장", data.get("군수", "-"))))
    local_council = parse_political_data(data.get("구의회", data.get("시의회", data.get("군의회", ""))))
    city_council = parse_political_data(data.get("시의원", data.get("도의원", "")))
    assembly = parse_political_data(data.get("국회의원", ""))

    region_fn_db = footnotes_db.get(region, {"광역": {}, "기초": {}})
    fn_counter = 1
    global_footnotes = []

    mayor_html, fn_counter = build_rowspan_trs("단체장", mayor, theme_color, {}, fn_counter, global_footnotes)
    local_council_html, fn_counter = build_rowspan_trs("지방의회", local_council, theme_color, region_fn_db["기초"], fn_counter, global_footnotes)
    city_council_html, fn_counter = build_rowspan_trs("광역의원", city_council, theme_color, region_fn_db["광역"], fn_counter, global_footnotes)
    assembly_html, fn_counter = build_rowspan_trs("국회의원", assembly, theme_color, {}, fn_counter, global_footnotes, is_assembly=True) # ★ 국회의원 플래그 True

    new_html = f"""
<aside class="infobox shrink-0 shadow-sm rounded overflow-hidden h-fit order-1 md:order-2" style="border: 1px solid #ccc; background: #fff; width: 100%; max-width: 430px; float: right; margin-left: 20px; margin-bottom: 20px;">
    
    <div style="text-align: center; font-weight: bold; font-size: 16px; padding: 15px 10px 5px; color: #000; background-color: #fff; letter-spacing: -0.5px;">
        {parent_text}의 {entity_label}
    </div>
    
    <div style="display: flex; align-items: center; justify-content: center; padding: 5px 0 15px; background: white;">
        <div style="border: 1px solid #ccc; display: flex; align-items: center; background-color: #fff; width: fit-content;">
            <div style="border-right: 1px solid #ccc; padding: 10px; width: 85px; height: 85px; display: flex; align-items: center; justify-content: center;">
                <img alt="{region} 로고" src="이미지/svg/{region}.svg" onerror="this.src='이미지/{region}.webp'" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
            <div style="padding: 10px 20px; text-align: left; line-height: 1.4; min-width: 120px;">
                <strong style="font-size: 1.5em; color: #000;">{region}</strong><br>
                <span style="font-size: 0.85em; color: #666;">{hanja_name}</span><br>
                <span style="font-size: 0.85em; color: #333;">{eng_name}</span>
            </div>
        </div>
    </div>

    <div style="width: 100%; height: 250px; overflow: hidden; position: relative; border-bottom: 1px solid #ccc; border-top: 1px solid #ccc; background: #f3f4f6;">
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
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">광역자치단체</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{parent_raw}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">하위 행정구역</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{sub_area}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">면적</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{area}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">인구</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{pop}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">인구 밀도</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{dens}</td></tr>
            
            {mayor_html}
            {local_council_html}
            {city_council_html}
            {assembly_html}
            
            <tr>
                <th rowspan="3" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc; vertical-align: middle;">상징</th>
                <th style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">구화</th>
                <td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{flower}</td>
            </tr>
            <tr><th style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">구목</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{tree}</td></tr>
            <tr><th style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">구조</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{bird}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">지역 번호</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc; color: #333;">{phone}</td></tr>
            <tr><th colspan="2" style="background-color: {theme_color}; color: #fff; padding: 8px; border: 1px solid #ccc;">SNS</th><td colspan="2" style="padding: 8px; border: 1px solid #ccc;">{sns}</td></tr>
        </tbody>
    </table>
</aside>
"""
    new_soup = BeautifulSoup(new_html, 'html.parser')
    old_infobox.replace_with(new_soup)

    if global_footnotes:
        bottom_fn_html = '<div class="footnote-section" style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #ccc; clear: both; background-color: #F9F9FA; border-radius: 8px; padding: 20px;">\n'
        bottom_fn_html += '<h3 style="font-size: 1.5rem !important; font-weight: bold; margin-bottom: 15px; margin-top: 0; padding-left: 0; border: none; color: #333;">각주</h3>\n<ul class="footnote-list" style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; line-height: 1.6; color: #444;">\n'
        for fn_id, fn_text in global_footnotes:
            bottom_fn_html += f'<li style="margin-bottom: 8px; display: flex; align-items: flex-start; gap: 10px;"><a id="fn-{fn_id}" href="#rfn-{fn_id}" style="color: #005BAC; font-weight: bold; text-decoration: none;">[{fn_id}]</a> <span>{fn_text}</span></li>\n'
        bottom_fn_html += '</ul>\n</div>\n'
        
        bottom_soup = BeautifulSoup(bottom_fn_html, 'html.parser')
        
        footer_div = soup.find(id='footer-container')
        if footer_div:
            old_fn_sec = soup.find('div', class_='footnote-section')
            if old_fn_sec: old_fn_sec.decompose()
            footer_div.insert_before(bottom_soup)
        else:
            soup.body.append(bottom_soup)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(soup.encode(formatter=None).decode('utf-8'))
        
    print(f"[{region}] ✅ 완벽 적용 완료")