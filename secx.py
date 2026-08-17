import os
import re
import shutil
from bs4 import BeautifulSoup

# 🔥 님이 올려주신 정확한 명단! (이 파일들 외에는 절대 건드리지 않음)
TARGET_MAPPING = {
    # 효빈광역시
    "구성연.html": "중구",
    "조우영.html": "동구", "우영철.html": "동구",
    "부서원.html": "서구", "노서현.html": "서구",
    "오전희.html": "남구", "강덕수.html": "남구", "박아밀라.html": "남구",
    "김지언.html": "북구",
    "권상남.html": "청엽구",
    "전역헌.html": "창전구",
    "이규희.html": "안천구",
    "성선설.html": "탄성군", "심원식.html": "탄성군",
    # 덕빈북도
    "한성민.html": "강주시",
    "오현주.html": "계성시",
    "이성민.html": "군천시", "윤서진.html": "군천시",
    "조민규.html": "기도군", "오시연.html": "기도군",
    "정우혁.html": "낭원군",
    "고태훈.html": "덕현군",
    "진기현.html": "모제군", "오성국.html": "모제군",
    "노준석.html": "반양군",
    "강미소.html": "상안군",
    "김철호.html": "서진시", "공하진.html": "서진시",
    "최정아.html": "서해시",
    "이지현.html": "선곡군",
    "박아상.html": "약산시",
    "박성진.html": "저천군",
    "장은재.html": "전산시",
    "유진태.html": "치원군", "백민우.html": "치원군",
    "김민철.html": "천주시",
    "이재성.html": "빈주시",
    # 덕빈남도
    "전지호.html": "매산군", "한성진.html": "매산군",
    "오세윤.html": "매성시",
    "고정화.html": "비천시",
    "최민규.html": "석창군",
    "이재원.html": "방산시",
    "김태수.html": "분주군",
    "문석준.html": "고포군",
    "주언일.html": "곡천군", "정용석.html": "곡천군",
    "강준영.html": "인곡군",
    "서윤수.html": "관수군",
    "김도연.html": "운진군",
    "이영진.html": "두원군",
    "문양인.html": "마진시", "백수안.html": "마진시",
    "정동혁.html": "덕주시",
    "신태양.html": "하정시",
    "윤재민.html": "원안군",
    "최현수.html": "낙주시"
}

def process_history_tables(root_dir="."):
    js_dir = os.path.join(root_dir, "js")
    if not os.path.exists(js_dir):
        os.makedirs(js_dir)

    total_converted = 0
    print("🚀 [화이트리스트 핀셋 추출판] 대학교 오작동 차단 및 100% 링크/로고 적용 시작...")

    for dirpath, _, filenames in os.walk(root_dir):
        if 'js' in dirpath.split(os.sep):
            continue

        for filename in filenames:
            # 🔥 명단에 없는 파일은 무조건 패스!! (대학교 등 꼬일 일 원천 차단)
            if filename not in TARGET_MAPPING:
                continue

            filepath = os.path.join(dirpath, filename)
            region_name = TARGET_MAPPING[filename] # ex) 매산군, 하정시, 중구
            
            with open(filepath, 'r', encoding='utf-8') as f:
                html_content = f.read()

            soup = BeautifulSoup(html_content, 'html.parser')
            target_tables = []
            
            # 역대 단체장 표 찾기
            for t in soup.find_all('table'):
                text = t.get_text()
                # '초대'와 '제2대'가 들어있거나, 접기/펼치기 기능이 있는 단체장 표만 타겟
                if ('초대' in text and '제2대' in text) or '펼치기' in text:
                    if t.find_parent('aside') is None and t not in target_tables:
                        target_tables.append(t)
            
            if not target_tables:
                print(f"⚠️ 표를 찾지 못함: {filename}")
                continue

            print(f"\n🔄 처리 중: {filename} (지역: {region_name})")
            modified = False

            for idx, table_tag in enumerate(target_tables):
                js_func_name = region_name
                
                # 🔥 1. [로고를 큼지막하게 & 무조건 하얗게 자동 치환!]
                header_td = table_tag.find(lambda tag: tag.name in ['td', 'th'] and (tag.get('class') and any('header' in c for c in tag.get('class', [])) or tag.find('img')))
                if not header_td:
                    header_td = table_tag.find('tr').find(['td', 'th'])

                if header_td:
                    img_tag = header_td.find('img')
                    if not img_tag:
                        img_tag = soup.new_tag('img')
                        header_td.insert(0, img_tag)
                    
                    # src는 {지역명}_흰색로고.webp 로 지정, 에러나서 원본(검정) 불러와도 filter로 100% 하얗게 강제 변환!
                    img_tag['src'] = f"이미지/{region_name}_흰색로고.webp"
                    img_tag['onerror'] = f"this.src='이미지/{region_name}.webp'; this.style.filter='brightness(0) invert(1) drop-shadow(0 0 2px rgba(0,0,0,0.5))';"
                    img_tag['style'] = "height: 45px; margin-right: 12px; vertical-align: middle; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"

                # 🔥 2. [이름 누르면 무조건 이동하도록 TD 자체에 링크 걸기!]
                # <tbody> 내의 모든 <td>를 돌면서 사람 이름 찾기
                tbody = table_tag.find('tbody')
                if not tbody:
                    tbody = table_tag # tbody 태그가 없는 경우 대비
                    
                for td in tbody.find_all('td'):
                    td_text = td.get_text(strip=True)
                    if not td_text or '펼치기' in td_text or '접기' in td_text:
                        continue
                    
                    # <td> 텍스트에서 이름만 분리 (ex. "초대 정동수" -> "정동수", "제2·3대 박아밀라" -> "박아밀라")
                    parts = td_text.split()
                    name = ""
                    
                    name_span = td.find('span', class_='name-span')
                    if name_span:
                        name = name_span.get_text(strip=True)
                    elif len(parts) >= 2:
                        name = parts[-1]
                    elif len(parts) == 1 and "대" not in parts[0] and "초대" not in parts[0]:
                        name = parts[0]
                        
                    name = re.sub(r'\(.*?\)', '', name).strip() # (재선) 등 괄호 날리기
                    
                    if name:
                        # 부모 <td> 영역 전체를 클릭해도 이동하게 만듦!!
                        td['onclick'] = f"location.href='{name}.html'"
                        td['style'] = td.get('style', '') + " cursor: pointer;"
                        td['onmouseover'] = "this.style.backgroundColor='rgba(0,0,0,0.05)';"
                        td['onmouseout'] = "this.style.backgroundColor='';"

                # ID와 토글 스크립트 연결
                unique_body_id = f"history-nav-body-{js_func_name}"
                unique_text_id = f"history-nav-text-{js_func_name}"
                
                # tbody 강제 할당
                if table_tag.find('tbody'):
                    table_tag.find('tbody')['id'] = unique_body_id
                
                span = table_tag.find(lambda t: t.name == 'span' and ('접기' in t.text or '펼치기' in t.text))
                if span:
                    span['id'] = unique_text_id

                toggle_td = table_tag.find(lambda t: t.name == 'td' and ('접기' in t.text or '펼치기' in t.text))
                if toggle_td:
                    toggle_td['onclick'] = f"toggleHistoryNav_{js_func_name}()"
                    toggle_td['style'] = toggle_td.get('style', '') + " cursor: pointer;"

                table_html = str(table_tag).replace('`', '\\`')
                js_filename = f"역대단체장_{js_func_name}.js"
                js_filepath = os.path.join(js_dir, js_filename)

                js_content = f"""/**
 * 파일명: js/{js_filename}
 */
document.addEventListener("DOMContentLoaded", function() {{
    var containers = document.querySelectorAll(".hb-history-{js_func_name}-nav");
    containers.forEach(function(container) {{
        container.innerHTML = `
        {table_html}
        `;
    }});
}});

if (typeof window.toggleHistoryNav_{js_func_name} === 'undefined') {{
    window.toggleHistoryNav_{js_func_name} = function() {{
        var body = document.getElementById("{unique_body_id}");
        var text = document.getElementById("{unique_text_id}");
        if (!body) return;
        
        if (body.style.display === 'none' || window.getComputedStyle(body).display === 'none') {{
            body.style.display = 'table-row-group';
            if (text) text.innerText = '[ 펼치기 · 접기 ]';
        }} else {{
            body.style.display = 'none';
            if (text) text.innerText = '[ 펼치기 ]';
        }}
    }};
}}
"""
                with open(js_filepath, 'w', encoding='utf-8') as js_file:
                    js_file.write(js_content)

                rel_path = os.path.relpath(js_dir, dirpath)
                script_src = f"{rel_path}/{js_filename}".replace('\\', '/')

                new_div = soup.new_tag("div", **{'class': f'hb-history-{js_func_name}-nav no-autolink mb-6'})
                new_script = soup.new_tag("script", src=script_src, defer="defer")
                
                if not soup.find('script', src=script_src):
                    table_tag.insert_before(new_script)
                table_tag.replace_with(new_div)
                modified = True

            if modified:
                backup_path = filepath + ".bak"
                if not os.path.exists(backup_path):
                    shutil.copy2(filepath, backup_path)
                    
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(str(soup))
                total_converted += 1
                print(f"  └─ ✅ 완료: {region_name} (이름 클릭/로고/독립JS 100% 반영)")

    print(f"\n🎉 총 {total_converted}개 문서 완벽 변환 완료! 대학교 건드림 0%, 지역 꼬임 0% 보장합니다!")

if __name__ == "__main__":
    process_history_tables()