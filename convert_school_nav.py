import os
import re
import shutil
from bs4 import BeautifulSoup

def process_school_nav_files(root_dir="."):
    js_dir = os.path.join(root_dir, "js")
    if not os.path.exists(js_dir):
        os.makedirs(js_dir)

    total_converted = 0
    print("🚀 [개별 학교 문서 전용] 특수문자/괄호 완벽 제거판 시작...")

    for dirpath, _, filenames in os.walk(root_dir):
        if 'js' in dirpath.split(os.sep):
            continue

        for filename in filenames:
            if not filename.endswith(".html") or filename.endswith(".bak"):
                continue

            if not re.search(r'(학교|고|중|초)\.html$', filename):
                continue

            filepath = os.path.join(dirpath, filename)
            backup_path = filepath + ".bak"
            
            with open(filepath, 'r', encoding='utf-8') as f:
                html_content = f.read()

            soup = BeautifulSoup(html_content, 'html.parser')
            
            nav_boxes = []
            for table in soup.find_all('table', class_='school-table'):
                box = table.find_parent('div', class_=re.compile(r'nav-box'))
                if box and box not in nav_boxes:
                    nav_boxes.append(box)

            if not nav_boxes:
                continue

            print(f"\n🔄 탐색됨: {filepath}")

            if not os.path.exists(backup_path):
                shutil.copy2(filepath, backup_path)
                print(f"  └─ 💾 [백업 완료] {filename}.bak")
            else:
                print(f"  └─ ⚠️ [백업 통과] 이미 존재함")

            modified = False

            for idx, nav_box in enumerate(nav_boxes):
                header = nav_box.find(class_=re.compile(r'nav-box-header'))
                if header:
                    raw_title = header.text.strip()
                else:
                    raw_title = f"알수없는분류_{idx}"

                # 🔥 [핵심 수정: 특수문자 원천 차단]
                clean_title = re.sub(r'^(덕빈북도|효빈광역시|서울특별시|경기도|강원특별자치도|전북특별자치도|충청북도|충청남도|전라남도|경상북도|경상남도|제주특별자치도)\s+', '', raw_title)
                clean_title = clean_title.replace("의 ", "")
                # 한글과 영문 알파벳만 남기고 괄호, 숫자(8개교 등), 띄어쓰기 싹 다 제거!
                clean_title = re.sub(r'[^가-힣a-zA-Z]', '', clean_title) 
                
                region_name = clean_title if clean_title else f"학교네비_{idx}"

                html_to_extract = str(nav_box).replace('`', '\\`')
                js_filepath = os.path.join(js_dir, f"{region_name}.js")
                
                js_content = f"""/**
 * 파일명: js/{region_name}.js
 * 설명: {raw_title} 하단 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {{
    var containers = document.querySelectorAll(".hb-{region_name}-nav");
    containers.forEach(function(container) {{
        container.innerHTML = `
{html_to_extract}
        `;
    }});
}});
"""
                with open(js_filepath, 'w', encoding='utf-8') as js_file:
                    js_file.write(js_content)

                rel_path = os.path.relpath(js_dir, dirpath).replace('\\', '/')
                script_src = f"{rel_path}/{region_name}.js"

                new_div = soup.new_tag("div", **{'class': f'hb-{region_name}-nav'})
                new_script = soup.new_tag("script", src=script_src, defer="defer")
                
                if not soup.find('script', src=script_src):
                    nav_box.insert_before(new_script)
                nav_box.replace_with(new_div)
                
                modified = True
                print(f"  └─ 🛠️ [분리 완료] {region_name}.js (문법 오류 철통방어!)")

            if modified:
                total_converted += 1
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(str(soup))

    print(f"\n🎉 찢었다! 총 {total_converted}개의 학교 문서 내비게이션 분리 완료!")

if __name__ == "__main__":
    process_school_nav_files()