import os
import shutil
from bs4 import BeautifulSoup

def convert_bus_nav_to_js(target_dir=".", output_js_dir="js", backup_dir="backup"):
    # 출력 폴더 및 백업 폴더가 없으면 생성
    if not os.path.exists(output_js_dir):
        os.makedirs(output_js_dir)
    if not os.path.exists(backup_dir):
        os.makedirs(backup_dir)

    # 폴더 내 '_시내버스.html' 및 '_농어촌버스.html' 파일만 필터링
    target_files = [
        f for f in os.listdir(target_dir) 
        if f.endswith('_시내버스.html') or f.endswith('_농어촌버스.html')
    ]

    if not target_files:
        print("대상이 되는 HTML 파일이 없습니다.")
        return

    for file_name in target_files:
        file_path = os.path.join(target_dir, file_name)
        
        with open(file_path, 'r', encoding='utf-8') as f:
            html_content = f.read()

        soup = BeautifulSoup(html_content, 'html.parser')

        # [수정된 부분] 여러 종류의 노선 틀 컨테이너를 모두 찾음 (div 형태 & details 형태 모두 포함)
        nav_containers = soup.find_all(['div', 'details'], class_=lambda x: x and ('wiki-macro-table-container' in x or 'nav-table-container' in x))
        
        target_container = None
        for container in nav_containers:
            # 헤더 텍스트 추출 (div.macro-header 또는 summary.route-summary-header)
            header = container.find(['div', 'summary'], class_=lambda x: x and ('macro-header' in x or 'route-summary-header' in x))
            
            # 헤더 텍스트에 '노선'이 포함된 틀을 타겟으로 지정
            if header and "노선" in header.text:
                target_container = container
                break

        if not target_container:
            print(f"[{file_name}] 노선 내비게이션 틀을 찾을 수 없습니다. 건너뜁니다.")
            continue

        # 원본 HTML 파일 안전 백업
        backup_path = os.path.join(backup_dir, file_name)
        shutil.copy2(file_path, backup_path)
        print(f"💾 [{file_name}] 원본 백업 완료 -> {backup_dir}/{file_name}")

        # 파일명에서 확장자를 제외한 이름 추출 (예: 군천시_시내버스, 고포군_농어촌버스)
        base_name = file_name.replace('.html', '')
        container_id = f"{base_name}-nav-container"
        js_file_name = f"{base_name}_노선틀.js"
        
        # HTML 텍스트 추출 후 백틱(`) 및 달러($) 기호 이스케이프
        extracted_html = str(target_container)
        escaped_html = extracted_html.replace('`', '\\`').replace('${', '\\${')

        # 외부 JS 파일 코드 템플릿 생성
        js_code = f"""document.addEventListener("DOMContentLoaded", function() {{
    const container = document.getElementById("{container_id}");
    if (!container) return;

    container.innerHTML = `
{escaped_html}
    `;
}});"""

        # 추출한 JS 파일 저장
        js_path = os.path.join(output_js_dir, js_file_name)
        with open(js_path, 'w', encoding='utf-8') as f:
            f.write(js_code)
        
        # 원본 HTML 문서 수정: 기존 하드코딩된 틀을 빈 div와 script 태그로 교체
        new_div = soup.new_tag('div')
        new_div['id'] = container_id
        new_div['class'] = "no-autolink mb-4 mt-6"
        
        new_script = soup.new_tag('script')
        new_script['src'] = f"{output_js_dir}/{js_file_name}"
        
        # 새 태그 삽입 후 기존 태그 삭제
        target_container.insert_before(new_div)
        target_container.insert_before(new_script)
        target_container.decompose()

        # 수정된 HTML 덮어쓰기
        with open(file_path, 'w', encoding='utf-8') as f:
            # 포맷팅을 유지하기 위해 원래 문서 인코딩 그대로 저장
            f.write(str(soup))
            
        print(f"✔️ [{file_name}] 변환 완료 -> {js_file_name} 생성됨\n")

if __name__ == "__main__":
    print("🚀 시내/농어촌버스 노선 내비게이션 외부 JS화 스크립트를 시작합니다...")
    convert_bus_nav_to_js(target_dir=".", output_js_dir="js", backup_dir="backup")