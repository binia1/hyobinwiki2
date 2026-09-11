import os
import shutil
import re
from bs4 import BeautifulSoup

# 작업 디렉토리 설정 (HTML 파일들이 있는 경로)
TARGET_DIR = "./" 
BACKUP_DIR = os.path.join(TARGET_DIR, "backup")
JS_DIR = os.path.join(TARGET_DIR, "js")

# 폴더 자동 생성
os.makedirs(BACKUP_DIR, exist_ok=True)
os.makedirs(JS_DIR, exist_ok=True)

def process_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')
    
    # 1. 인포박스 추출 (<aside class="infobox...">)
    infobox = soup.find('aside', class_='infobox')
    if not infobox:
        return False # 인포박스가 없으면 패스

    # 2. 문서 제목에서 대학교 이름 추출
    title_tag = soup.find('title')
    if title_tag and '-' in title_tag.text:
        raw_univ_name = title_tag.text.split('-')[0].strip()
    else:
        raw_univ_name = os.path.basename(file_path).replace('.html', '')

    univ_name = re.sub(r'[\\/*?:"<>|]', '_', raw_univ_name)

    print(f"[{univ_name}] 인포박스 내용물 분리 및 백업 진행 중...")

    # 3. 원본 HTML 백업 (날려먹음 방지)
    backup_path = os.path.join(BACKUP_DIR, os.path.basename(file_path))
    shutil.copy2(file_path, backup_path)

    # 4. [핵심 수정] aside 태그(껍데기)는 남기고, 내부 콘텐츠만 추출
    infobox_inner_html = "".join([str(child) for child in infobox.contents])
    infobox_inner_html = infobox_inner_html.replace('`', '\\`').replace('${', '\\${')
    
    js_content = f"""document.addEventListener("DOMContentLoaded", function() {{
    const container = document.getElementById("{univ_name}-infobox-container");
    if (container) {{
        container.innerHTML = `
{infobox_inner_html}
        `;
    }}
}});"""
    
    # 5. JS 파일 저장
    js_filename = f"{univ_name}_인포박스.js"
    js_path = os.path.join(JS_DIR, js_filename)
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    # 6. 기존 HTML의 aside 태그 안의 내용을 싹 비우고 id만 부여 (클래스는 그대로 유지!)
    infobox.clear()
    infobox['id'] = f"{univ_name}-infobox-container"
    
    # aside 바로 뒤에 스크립트 호출 태그 삽입
    script_tag = soup.new_tag("script", defer="defer", src=f"js/{js_filename}")
    infobox.insert_after(script_tag)

    # 7. 수정된 HTML 저장
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    
    return True

# 실행 부
if __name__ == "__main__":
    processed_count = 0
    for filename in os.listdir(TARGET_DIR):
        # HTML 파일이면서 '대학'이라는 단어가 들어가고, '병원'이라는 단어는 없는 파일만 타겟팅
        if filename.endswith(".html") and ("대학교" in filename or "대학.html" in filename):
            if "병원" in filename:
                continue
                
            file_path = os.path.join(TARGET_DIR, filename)
            if process_html_file(file_path):
                processed_count += 1
                
    print(f"\n작업 완료! 총 {processed_count}개의 대학교 HTML 파일에서 인포박스를 안전하게 분리했습니다.")