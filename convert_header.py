import os
import shutil
from bs4 import BeautifulSoup

def process_headers(root_dir="."):
    js_dir = os.path.join(root_dir, "js")
    if not os.path.exists(js_dir):
        os.makedirs(js_dir)

    total_converted = 0
    header_js_created = False
    js_filepath = os.path.join(js_dir, "hb_header.js")

    print("🚀 [상단바 전면 통합] 모든 문서의 상단 네비게이션을 하나로 묶습니다...")

    for dirpath, _, filenames in os.walk(root_dir):
        # js 폴더는 스킵
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
            
            # 🔥 [핵심 타겟팅] 상단바 <nav> 찾기 (bg-[#7777AA] 색상과 sticky 클래스를 가진 nav 태그)
            nav_tag = soup.find('nav', class_=lambda c: c and 'bg-[#7777AA]' in c and 'sticky' in c)
            
            if not nav_tag:
                continue
            
            print(f"\n🔄 탐색됨: {filepath}")

            # 찐 원본 백업 보호
            if not os.path.exists(backup_path):
                shutil.copy2(filepath, backup_path)
                print(f"  └─ 💾 [백업 완료] {filename}.bak")
            else:
                print(f"  └─ ⚠️ [백업 통과] 이미 존재함")

            # 🔥 [핵심 기능] JS 파일은 첫 번째로 발견된 상단바를 기준으로 딱 1번만 만듦
            if not header_js_created:
                nav_html = str(nav_tag).replace('`', '\\`')
                js_content = f"""/**
 * 파일명: js/hb_header.js
 * 설명: 효빈위키 공통 상단 네비게이션 바
 */
document.addEventListener("DOMContentLoaded", function() {{
    var headerContainer = document.getElementById("hb-header-container");
    if (headerContainer) {{
        headerContainer.innerHTML = `
{nav_html}
        `;
    }}
}});
"""
                with open(js_filepath, 'w', encoding='utf-8') as js_file:
                    js_file.write(js_content)
                header_js_created = True
                print(f"  └─ ✨ [JS 생성 완료] js/hb_header.js 파일이 갓벽하게 생성되었습니다!")

            # HTML 문서 내 상대경로 계산 (하위 폴더에 있어도 js 폴더를 정확히 찾아감)
            rel_path = os.path.relpath(js_dir, dirpath).replace('\\', '/')
            script_src = f"{rel_path}/hb_header.js"

            # 기존 <nav> 태그를 <header id="hb-header-container"></header> 로 깔끔하게 교체
            new_header = soup.new_tag("header", id="hb-header-container")
            new_script = soup.new_tag("script", src=script_src, defer="defer")
            
            if not soup.find('script', src=script_src):
                nav_tag.insert_before(new_script)
            nav_tag.replace_with(new_header)
            
            # HTML 덮어쓰기
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(str(soup))
                
            total_converted += 1
            print(f"  └─ 🛠️ [치환 완료] 상단바 -> JS 스크립트로 압축 성공")

    print(f"\n🎉 찢었다! 총 {total_converted}개 문서의 상단바를 단 1개의 JS 파일로 연동 완료했습니다!")

if __name__ == "__main__":
    process_headers()