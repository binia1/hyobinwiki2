import os
import re
import shutil
from bs4 import BeautifulSoup

def process_history_tables(root_dir="."):
    js_dir = os.path.join(root_dir, "js")
    if not os.path.exists(js_dir):
        os.makedirs(js_dir)

    total_converted = 0
    print("🚀 [역대 단체장 자동 분리] 문서 이동 버그 완벽 수정판 시작...")

    for dirpath, _, filenames in os.walk(root_dir):
        if 'js' in dirpath.split(os.sep):
            continue

        for filename in filenames:
            if not filename.endswith(".html") or filename.endswith(".bak"):
                continue

            filepath = os.path.join(dirpath, filename)
            
            with open(filepath, 'r', encoding='utf-8') as f:
                html_content = f.read()

            soup = BeautifulSoup(html_content, 'html.parser')
            
            history_tables = soup.find_all('table', class_='history-nav-table')
            
            if not history_tables:
                continue

            print(f"\n🔄 탐색됨: {filepath}")
            modified = False

            for idx, table_tag in enumerate(history_tables):
                header_td = table_tag.find(class_='history-nav-header')
                main_title = header_td.text.strip() if header_td else "역대단체장"
                
                clean_title = re.sub(r'^(덕빈북도|효빈광역시|서울특별시|경기도|강원특별자치도|전북특별자치도|충청북도|충청남도|전라남도|경상북도|경상남도|제주특별자치도)\s+', '', main_title)
                region_name = re.sub(r'(청장|시장|군수)$', '', clean_title).replace(" ", "")
                if not region_name:
                    region_name = f"알수없음_{idx}"

                js_filename = f"역대단체장_{region_name}.js"
                js_filepath = os.path.join(js_dir, js_filename)
                
                unique_body_id = f"history-nav-body-{region_name}"
                unique_text_id = f"history-nav-text-{region_name}"
                
                # 🔥 [핵심 수정] 무식한 정규식 다 빼고, 필요한 태그만 콕 집어서 안전하게 변경!
                # 1. tbody ID 변경
                tbody = table_tag.find('tbody', id='history-nav-body')
                if tbody:
                    tbody['id'] = unique_body_id
                    
                # 2. span 텍스트 ID 변경
                toggle_span = table_tag.find('span', id='history-nav-text')
                if toggle_span:
                    toggle_span['id'] = unique_text_id
                    
                # 3. 토글 버튼(td)의 onclick만 변경 (나머지 문서 이동 onclick은 절대 건드리지 않음!!!)
                toggle_td = table_tag.find('td', class_='history-nav-toggle')
                if toggle_td:
                    toggle_td['onclick'] = f"toggleHistoryNav_{region_name}()"

                # 백틱 처리 후 문자열 변환
                table_html = str(table_tag).replace('`', '\\`')

                js_content = f"""/**
 * 파일명: js/{js_filename}
 * 설명: {main_title} 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {{
    var containers = document.querySelectorAll(".hb-history-{region_name}-nav");

    containers.forEach(function(container) {{
        container.innerHTML = `
        {table_html}
        `;
    }});
}});

// 개별 토글 함수 자동 생성
if (typeof window.toggleHistoryNav_{region_name} === 'undefined') {{
    window.toggleHistoryNav_{region_name} = function() {{
        var body = document.getElementById("{unique_body_id}");
        var text = document.getElementById("{unique_text_id}");
        if (!body || !text) return;
        
        if (body.style.display === 'none' || body.style.display === '') {{
            body.style.display = 'table-row-group';
            text.innerText = '[ 펼치기 · 접기 ]';
        }} else {{
            body.style.display = 'none';
            text.innerText = '[ 펼치기 ]';
        }}
    }};
}}
"""
                with open(js_filepath, 'w', encoding='utf-8') as js_file:
                    js_file.write(js_content)

                rel_path = os.path.relpath(js_dir, dirpath)
                script_src = f"{rel_path}/{js_filename}".replace('\\', '/')

                new_div = soup.new_tag("div", **{'class': f'hb-history-{region_name}-nav no-autolink mb-6'})
                new_script = soup.new_tag("script", src=script_src, defer="defer")
                
                if not soup.find('script', src=script_src):
                    table_tag.insert_before(new_script)
                table_tag.replace_with(new_div)
                
                modified = True
                print(f"  └─ 🛠️ [추출 완료] {region_name} 역대 단체장 (링크 이동 보존 완료)")

            if modified:
                backup_path = filepath + ".bak"
                if not os.path.exists(backup_path):
                    shutil.copy2(filepath, backup_path)
                    print(f"  └─ 💾 [안전 백업] {filename}.bak 생성")
                    
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(str(soup))
                total_converted += 1

    print(f"\n🎉 총 {total_converted}개의 문서 변환 완료! 이제 링크 이동 완벽하게 될 겁니다!")

if __name__ == "__main__":
    process_history_tables()