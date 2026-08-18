import os
import re
from bs4 import BeautifulSoup

def is_light_color(hex_color):
    """배경색이 밝은지 확인하여 글자색을 검정/흰색으로 분기"""
    if not hex_color: return False
    light_colors = ["#FFD700", "#ADFF2F", "#C0C0FF", "#FADA5E", "#FFD400", "#FFED00", "#E0E0E0", "#FFEF10", "#FAC813", "#FFD2AD", "#C2C247"]
    return hex_color.upper() in light_colors

def parse_html_to_js(html_file_path, output_dir="output_js"):
    # 출력 폴더가 없으면 생성
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    with open(html_file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')

    # 1. 지역명 및 설정 감지 (h1 태그 또는 파일명 기준)
    h1_tag = soup.find('h1')
    title_text = h1_tag.text if h1_tag else html_file_path
    
    region = "기본지역"
    eng_id = "Region"
    main_color = "#4AD898"
    logo_html = '<div class="font-bold bg-white px-1 text-xs rounded" style="color: #4AD898;">H</div>'

    if "효빈" in title_text:
        region = "효빈광역시"
        eng_id = "Hyobin"
        logo_html = '<img src="이미지/logo.webp" alt="효빈광역시 로고" style="height: 20px; vertical-align: middle;">'
    elif "덕빈북도" in title_text:
        region = "덕빈북도"
        eng_id = "Deokbinbuk"
        logo_html = '<img src="이미지/덕북로고.webp" alt="덕빈북도 로고" style="height: 20px; vertical-align: middle;">'
    elif "덕빈남도" in title_text:
        region = "덕빈남도"
        eng_id = "Deokbinnam"
        logo_html = '<img src="이미지/덕빈남도_로고.webp" alt="덕빈남도 로고" style="height: 20px; vertical-align: middle;">'

    # 2. 대수(기수) 데이터 파싱
    details_blocks = soup.find_all('details')
    
    terms_data = []
    
    for details in details_blocks:
        summary = details.find('summary')
        if not summary: continue
        
        summary_text = summary.text
        # "민선 X기" 추출
        term_match = re.search(r'민선\s*(\d+)기', summary_text)
        if not term_match: continue
        
        num_id = term_match.group(1)
        term_name = f"민선 {num_id}기"
        
        # 테이블 파싱
        table = details.find('table', class_='term-table')
        if not table: continue
        
        rows = table.find_all('tr')
        members = []
        
        # 2줄씩 짝지어서 처리 (지자체명 row, 단체장명 row)
        for i in range(0, len(rows), 2):
            if i+1 >= len(rows): break
            districts = rows[i].find_all('td')
            names = rows[i+1].find_all('td')
            
            for d_cell, n_cell in zip(districts, names):
                district = d_cell.text.strip()
                name = n_cell.text.strip()
                
                # 빈칸 무시
                if not district and not name:
                    members.append(None)
                    continue
                
                # 배경색 추출
                style = d_cell.get('style', '')
                color_match = re.search(r'background-color:\s*(#[a-fA-F0-9]+)', style)
                bg_color = color_match.group(1).upper() if color_match else '#808080'
                
                members.append({
                    'district': district,
                    'name': name,
                    'color': bg_color
                })

        # 특이사항(선거 결과) 추출
        note_div = details.find('div', class_='result-note')
        result_note = str(note_div) if note_div else ""
        
        terms_data.append({
            'num_id': num_id,
            'term_name': term_name,
            'members': members,
            'result_note': result_note
        })

    print(f"[{region}] 총 {len(terms_data)}개의 기수 데이터를 찾았습니다.")

    # 3. JS 코드 생성 및 저장
    for index, data in enumerate(terms_data):
        num_id = data['num_id']
        term_name = data['term_name']
        members = data['members']
        
        # 이전/다음 기수 링크 로직 (terms_data가 최신 기수부터 정렬되어 있다고 가정)
        prev_link = ""
        next_link = ""
        if index < len(terms_data) - 1:
            prev_term = terms_data[index + 1]['term_name']
            prev_link = f'◀ <a href="{prev_term}.html" style="color:#333; text-decoration:none; font-weight:bold;">{prev_term}</a>'
        if index > 0:
            next_term = terms_data[index - 1]['term_name']
            next_link = f'<a href="{next_term}.html" style="color:#333; text-decoration:none; font-weight:bold;">{next_term}</a> ▶'

        # 행(Row) 조립 (5칸씩)
        rows_html = ""
        for i in range(0, len(members), 5):
            group = members[i:i+5]
            
            # 지역구 행
            rows_html += '                                        <tr>\n'
            for m in group:
                if m is None:
                    rows_html += '                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; border-style: none solid;"></td>\n'
                else:
                    txt_color = '#000000' if is_light_color(m['color']) else '#ffffff'
                    rows_html += f'                                            <td class="district-cell" style="width: 20%; background-color: {m["color"]}; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="{m["district"]}.html" style="color: {txt_color}; text-decoration: none;">{m["district"]}</a></td>\n'
            
            # 5칸 안 채워졌으면 빈칸 채우기
            for _ in range(len(group), 5):
                rows_html += '                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; border-style: none solid;"></td>\n'
            rows_html += '                                        </tr>\n'

            # 이름 행
            rows_html += '                                        <tr>\n'
            for m in group:
                if m is None:
                    rows_html += '                                            <td style="border: 1px solid #aaa; border-style: none solid;"></td>\n'
                else:
                    name_color = '#000000' if m['color'] == '#FFFFFF' else m['color']
                    rows_html += f'                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="{m["name"]}.html" style="color: {name_color}; text-decoration: none;">{m["name"]}</a></td>\n'
            for _ in range(len(group), 5):
                rows_html += '                                            <td style="border: 1px solid #aaa; border-style: none solid;"></td>\n'
            rows_html += '                                        </tr>\n'

        is_open = 'open=""' if index == 0 else ''
        func_name = f"render{eng_id}Head{num_id}Nav"
        container_id = f"{eng_id.lower()}-head-{num_id}-nav-container"

        # JS 템플릿 완성
        js_code = f"""document.addEventListener("DOMContentLoaded", function() {{
    function {func_name}(containerId) {{
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: {main_color}; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:6px;">
                    {logo_html}
                    <a href="{region}.html" style="color:white; text-decoration: none;">{region} {term_name} 기초자치단체장</a>
                </span>
            </div>
            <details {is_open} style="width: 100%;">
                <summary class="nav-summary" style="background-color: #fff; text-align: center; padding: 6px; cursor: pointer; font-size: 0.9rem; font-weight: bold; border-bottom: 1px solid #aaa; color: #333; list-style: none;">
                    [ 펼치기 · 접기 ]
                </summary>
                <div style="padding: 0;">
                    <table class="nav-table" style="width: 100%; border-collapse: collapse; table-layout: fixed; background-color: #ffffff; text-align: center; font-size: 0.95rem; word-break: keep-all;">
                        <tbody>
{rows_html}                        </tbody>
                    </table>
                    {data['result_note']}
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>{prev_link}</div>
                        <div>{next_link}</div>
                    </div>
                </div>
            </details>
        </div>
        `;

        container.innerHTML = html;
    }}
    
    // 컴포넌트 렌더링 실행
    {func_name}('{container_id}');
}});"""

        # JS 파일 저장
        file_name = f"{eng_id.lower()}_head_{num_id}.js"
        file_path = os.path.join(output_dir, file_name)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(js_code)
            
        print(f"✔️ {file_name} 저장 완료!")

# --- 실행 부분 ---
if __name__ == "__main__":
    # 여기에 변환하고 싶은 HTML 파일 이름을 넣으세요.
    # 동일한 폴더에 파일이 있어야 합니다.
    target_files = [
        "틀_역대_덕빈북도_기초자치단체장.html",
        "틀_역대_덕빈남도_기초자치단체장.html",
        "틀_역대_효빈광역시_기초자치단체장.html"
    ]
    
    for file in target_files:
        if os.path.exists(file):
            print(f"\n🚀 {file} 파싱 시작...")
            parse_html_to_js(file)
        else:
            print(f"\n❌ {file} 파일이 같은 폴더에 없습니다.")