import os
import re
import shutil
from bs4 import BeautifulSoup

def process_school_files(root_dir="."):
    js_dir = os.path.join(root_dir, "js")
    if not os.path.exists(js_dir):
        os.makedirs(js_dir)

    total_converted = 0
    print("🚀 [교육 부문 분리 - 타겟팅 깐깐버전] 시/군/구 문서만 골라냅니다 (괄호 철통방어!)...")

    for dirpath, _, filenames in os.walk(root_dir):
        if 'js' in dirpath.split(os.sep):
            continue

        for filename in filenames:
            if not filename.endswith(".html") or filename.endswith(".bak"):
                continue
            
            # 🔥 [핵심 방어선 1] '학교', '동', '가' 등으로 끝나는 개별 문서는 무조건 스킵
            if re.search(r'(학교|초|중|고|동|가\d*)\.html$', filename):
                continue
            
            # 🔥 [핵심 방어선 2] 오직 파일 이름이 '시', '군', '구'로 끝나는 녀석들만 통과!
            if not re.search(r'(시|군|구)\.html$', filename):
                continue

            filepath = os.path.join(dirpath, filename)
            backup_path = filepath + ".bak"
            
            with open(filepath, 'r', encoding='utf-8') as f:
                html_content = f.read()

            soup = BeautifulSoup(html_content, 'html.parser')
            
            school_tables = soup.find_all('table', class_='school-table')
            if not school_tables:
                continue
            
            print(f"\n🔄 탐색됨: {filepath}")
            
            if not os.path.exists(backup_path):
                shutil.copy2(filepath, backup_path)
                print(f"  └─ 💾 [백업 완료] {filename}.bak")
            else:
                print(f"  └─ ⚠️ [백업 통과] 이미 존재함 (원본 보호)")

            h1_tag = soup.find('h1')
            main_title = h1_tag.text.strip() if h1_tag else "지자체명"
            
            # 1단계: 광역지자체 이름 떼어내기
            clean_title = re.sub(r'^(덕빈북도|효빈광역시|서울특별시|경기도|강원특별자치도|전북특별자치도|충청북도|충청남도|전라남도|경상북도|경상남도|제주특별자치도)\s+', '', main_title)
            
            # 🔥 [핵심 방어선 3] 괄호, 특수문자, 띄어쓰기 싹 다 갈아버리기! (중구(효빈) -> 중구효빈)
            clean_title = re.sub(r'[^가-힣a-zA-Z]', '', clean_title) 
            
            region_name = clean_title if clean_title else "알수없음"

            if region_name.endswith("학교"):
                region_name = region_name[:-2]

            wrapper = school_tables[0].find_parent('div', class_=re.compile(r'space-y-4'))
            
            if wrapper:
                html_to_extract = str(wrapper).replace('`', '\\`')
                element_to_replace = wrapper
            else:
                html_parts = []
                element_to_replace = None
                for tbl in school_tables:
                    box = tbl.find_parent('div', class_=re.compile(r'nav-box'))
                    if box:
                        if element_to_replace is None:
                            element_to_replace = box
                        else:
                            box.extract()
                        html_parts.append(str(box))
                
                html_to_extract = '<div class="space-y-4 my-4">\n' + '\n'.join(html_parts) + '\n</div>'
                html_to_extract = html_to_extract.replace('`', '\\`')

            if not element_to_replace:
                continue

            js_filepath = os.path.join(js_dir, f"{region_name}학교.js")
            
            js_content = f"""/**
 * 파일명: js/{region_name}학교.js
 * 설명: {main_title} 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {{
    var containers = document.querySelectorAll(".hb-{region_name}-school");

    containers.forEach(function(container) {{
        var schoolHTML = `
{html_to_extract}
        `;
        container.innerHTML = schoolHTML;
    }});
}});
"""
            with open(js_filepath, 'w', encoding='utf-8') as js_file:
                js_file.write(js_content)

            rel_path = os.path.relpath(js_dir, dirpath)
            script_src = f"{rel_path}/{region_name}학교.js".replace('\\', '/')

            # 중구(효빈)이 중구효빈으로 안전하게 클래스명에 들어갑니다
            new_div = soup.new_tag("div", **{'class': f'hb-{region_name}-school'})
            new_script = soup.new_tag("script", src=script_src, defer="defer")
            
            if not soup.find('script', src=script_src):
                element_to_replace.insert_before(new_script)
            element_to_replace.replace_with(new_div)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(str(soup))
                
            print(f"  └─ 🛠️ [변환 완료] {region_name}학교.js 분리 성공 (괄호 제거 완벽 방어!)")
            total_converted += 1

    print(f"\n🎉 작업 완료! 괄호 폭탄 제거하고, 총 {total_converted}개의 시/군/구만 완벽하게 분리했습니다!")

if __name__ == "__main__":
    process_school_files()