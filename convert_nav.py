import os
import re
import shutil
from bs4 import BeautifulSoup

def process_html_files(root_dir="."):
    js_dir = os.path.join(root_dir, "js")
    if not os.path.exists(js_dir):
        os.makedirs(js_dir)

    total_converted = 0
    print("🚀 [최종 진화판] 흰색 로고 100% 보존 및 일반구(천주시) 계층 완벽 반영 시작...")

    for dirpath, _, filenames in os.walk(root_dir):
        if 'js' in dirpath.split(os.sep):
            continue

        for filename in filenames:
            if not filename.endswith(".html") or filename.endswith(".bak"):
                continue

            filepath = os.path.join(dirpath, filename)
            backup_path = filepath + ".bak"
            
            with open(filepath, 'r', encoding='utf-8') as f:
                html_content = f.read()

            soup = BeautifulSoup(html_content, 'html.parser')
            
            # 클래스가 hb- 어쩌구로 시작하는 박스 또는 테두리가 있는 행정구역 박스 싹 다 추적
            admin_table_divs = soup.find_all('div', class_=re.compile(r'hb-.*-(table|nav)'))
            
            if not admin_table_divs:
                for d in soup.find_all('div', style=re.compile(r'border:\s*2px')):
                    if '행정구역' in d.text and d.find('table') and d not in admin_table_divs:
                        admin_table_divs.append(d)
            
            if not admin_table_divs:
                continue

            print(f"\n🔄 탐색됨: {filepath}")

            if not os.path.exists(backup_path):
                shutil.copy2(filepath, backup_path)
                print(f"  └─ 💾 [백업 완료] {filename}.bak")
            else:
                print(f"  └─ ⚠️ [백업 통과] 이미 존재함")

            modified = False

            for idx, admin_table_div in enumerate(admin_table_divs):
                table_tag = admin_table_div.find('table')
                if not table_tag:
                    continue
                    
                table_html = str(table_tag).replace('`', '\\`')

                # 🔥 [핵심 수정 1] 로고 태그 원본 100% 긁어오기 (흰색 적용, 인라인 스타일 모조리 보존)
                img_tag = admin_table_div.find('img')
                if img_tag:
                    img_html = str(img_tag).replace('`', '\\`')
                else:
                    img_html = '<img src="이미지/기본.webp" alt="로고" style="height: 40px;">'

                # 메인 타이틀 추출
                main_title = "지자체명"
                for d in admin_table_div.find_all('div'):
                    if d.text.strip() == '행정구역':
                        prev_div = d.find_previous_sibling('div')
                        if prev_div:
                            main_title = prev_div.text.strip()
                        break
                
                # 🔥 [핵심 수정 2] 일반구(천주시 천성구 등) 근본 유지
                # 광역지자체 이름만 싹 날리고 남은 이름들을 붙여서 씁니다. 
                # 예: '덕빈북도 천주시 천성구' -> '천주시천성구'
                clean_title = re.sub(r'^(덕빈북도|효빈광역시|서울특별시|경기도|강원특별자치도|전북특별자치도|충청북도|충청남도|전라남도|경상북도|경상남도|제주특별자치도)\s+', '', main_title)
                region_name = clean_title.replace(" ", "") if clean_title else f"알수없음_{idx}"

                # 배경색 추출
                bg_div = admin_table_div.find(lambda t: t.has_attr('style') and 'background-color' in t['style'])
                main_color = "#ffc94a"
                if bg_div:
                    color_match = re.search(r'background-color:\s*(#[0-9a-fA-F]+)', bg_div['style'])
                    if color_match:
                        main_color = color_match.group(1)

                # 폰트색 추출
                header_html_str = str(admin_table_div)
                font_color_match = re.search(r'(?<!-)\bcolor:\s*([a-zA-Z]+|#[0-9a-fA-F]+)', header_html_str)
                text_color = font_color_match.group(1) if font_color_match else "black"

                js_filepath = os.path.join(js_dir, f"{region_name}행정.js")
                
                js_content = f"""/**
 * 파일명: js/{region_name}행정.js
 * 설명: {main_title} 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {{
    var mainColor = "{main_color}";
    var textColor = "{text_color}";
    var containers = document.querySelectorAll(".hb-{region_name}-nav");

    containers.forEach(function(container, index) {{
        var uniqueNavId = "{region_name}Nav_" + index;
        var uniqueLabelId = "{region_name}Label_" + index;

        var navHTML = `
        <style>
            .nav-box-auto {{ border: 2px solid ${{mainColor}}; background-color: white; font-family: 'Noto Sans KR', sans-serif; box-sizing: border-box; margin: 20px 0; }}
            .nav-header-container-auto {{ cursor: pointer; }}
            .nav-header-top-auto {{ background-color: ${{mainColor}}; color: ${{textColor}}; display: flex; justify-content: center; align-items: center; padding: 15px 0; }}
            .nav-header-title-box {{ border: 1px solid ${{textColor}}; display: flex; align-items: center; padding: 5px 15px; gap: 15px; }}
            .nav-header-bottom-auto {{ background-color: ${{mainColor}}; color: ${{textColor}}; text-align: center; padding: 6px 0; font-size: 13px; font-weight: bold; border-top: 1px solid rgba(0, 0, 0, 0.3); }}
        </style>
        
        <div class="nav-box-auto">
            <div class="nav-header-container-auto" onclick="toggleNav('${{uniqueNavId}}', '${{uniqueLabelId}}')">
                <div class="nav-header-top-auto">
                    <div class="nav-header-title-box">
                        {img_html}
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">{main_title}</div>
                            <div style="font-size: 20px; font-weight: 900;">행정구역</div>
                        </div>
                    </div>
                </div>
                <div class="nav-header-bottom-auto">
                    <span id="${{uniqueLabelId}}">[ 펼치기 · 접기 ]</span>
                </div>
            </div>
            
            <div id="${{uniqueNavId}}" style="transition: max-height 0.3s ease-out; overflow: hidden; max-height: 2000px; display: block;">
                {table_html}
            </div>
        </div>
        `;
        
        container.innerHTML = navHTML;
    }});
}});

if (typeof window.toggleNav === 'undefined') {{
    window.toggleNav = function(id, labelId) {{
        var content = document.getElementById(id);
        if (!content) return;
        if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {{
            content.style.maxHeight = '2000px';
        }} else {{
            content.style.maxHeight = '0px';
        }}
    }};
}}
"""
                with open(js_filepath, 'w', encoding='utf-8') as js_file:
                    js_file.write(js_content)

                rel_path = os.path.relpath(js_dir, dirpath)
                script_src = f"{rel_path}/{region_name}행정.js".replace('\\', '/')

                # 치환할 때 꼬이지 않게 계층 이름(천주시천성구) 그대로 클래스 적용
                new_div = soup.new_tag("div", **{'class': f'hb-{region_name}-nav'})
                new_script = soup.new_tag("script", src=script_src, defer="defer")
                
                if not soup.find('script', src=script_src):
                    admin_table_div.insert_before(new_script)
                admin_table_div.replace_with(new_div)
                
                modified = True
                total_converted += 1
                print(f"  └─ 🛠️ [변환 완료] {region_name} (로고 원본 100% 유지)")

            if modified:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(str(soup))

    print(f"\n🎉 총 {total_converted}개의 네비 박스 변환 완료! 이제 흰색 로고도 정상적으로 뜹니다!")

if __name__ == "__main__":
    process_html_files()