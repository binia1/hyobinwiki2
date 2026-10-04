import os
import glob
from bs4 import BeautifulSoup
from urllib.parse import unquote

def analyze_html_files_detailed(directory_path="."):
    html_files = glob.glob(os.path.join(directory_path, "*.html"))
    
    if not html_files:
        print("❌ 검사할 HTML 파일이 없습니다.")
        return

    print(f"🔍 총 {len(html_files)}개의 문서 정밀 검사를 시작합니다...\n")

    # 오류 종류별로 딕셔너리 분리
    critical_errors = {}  # 렌더링이 박살나는 치명적 오류 (구조/레이아웃)
    warning_errors = {}   # 기능/디자인 일부 누락 오류 (제목, 네비, 목차 등)
    broken_links = {}     # 깨진 내부 문서 링크
    broken_images = {}    # 존재하지 않는 로컬 이미지 경로

    html_file_names = {os.path.basename(f) for f in html_files}

    for file_path in html_files:
        filename = os.path.basename(file_path)
        crits, warns, links, imgs = [], [], [], []

        # 1. 파일 크기 검사
        if os.path.getsize(file_path) == 0:
            crits.append("🚨 파일 용량 0 (완전히 비어있음)")
            critical_errors[filename] = crits
            continue

        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            html_content = f.read()

        if not html_content.strip():
            crits.append("🚨 파일에 텍스트가 전혀 없음")
            critical_errors[filename] = crits
            continue

        soup = BeautifulSoup(html_content, 'html.parser')

        # 2. [치명적 오류] 필수 HTML 구조 검사
        if not soup.find('html'): crits.append("<html> 태그 누락")
        if not soup.find('head'): crits.append("<head> 태그 누락")
        if not soup.find('body'): crits.append("<body> 태그 누락")
        
        # 3. [치명적 오류] 효빈위키 핵심 컨테이너 및 CSS 누락
        if soup.find('body') and not soup.find('div', class_='wiki-container'):
            crits.append("레이아웃 붕괴: <div class='wiki-container'> 누락")
        if soup.find('head') and not soup.find('script', src=lambda s: s and 'tailwindcss' in s):
            crits.append("디자인 붕괴: Tailwind CSS 스크립트 누락")

        # 4. [경고 오류] 필수 컴포넌트 누락 검사
        if not soup.find('title') or not soup.find('title').text.strip():
            warns.append("<title> 태그가 없거나 비어있음")
        if not soup.find('nav'):
            warns.append("상단 네비게이션 바(<nav>) 누락")
        if not soup.find('div', class_='toc'):
            warns.append("목차 박스(<div class='toc'>) 누락")

        # 5. [링크/이미지 오류] 깨진 참조 파일 검사
        for a_tag in soup.find_all('a', href=True):
            href = a_tag['href']
            # 웹 주소가 아닌 로컬 HTML 이동인 경우만 체크
            if href.endswith('.html') and not href.startswith(('http://', 'https://', 'mailto:')):
                decoded_href = unquote(href) 
                if decoded_href not in html_file_names:
                    links.append(decoded_href)

        for img_tag in soup.find_all('img', src=True):
            src = img_tag['src']
            # 웹 주소가 아닌 로컬 이미지인 경우 실제 파일이 존재하는지 체크
            if not src.startswith(('http://', 'https://', 'data:')):
                decoded_src = unquote(src)
                img_path = os.path.join(directory_path, decoded_src)
                if not os.path.exists(img_path):
                    imgs.append(decoded_src)

        # 결과 저장 (중복 링크/이미지는 set으로 제거)
        if crits: critical_errors[filename] = crits
        if warns: warning_errors[filename] = warns
        if links: broken_links[filename] = list(set(links))
        if imgs: broken_images[filename] = list(set(imgs))

    # === 리포트 파일 1: 치명적 구조 및 경고 오류 (우선 해결 대상) ===
    report_structure = "1_구조오류_리포트.txt"
    with open(report_structure, 'w', encoding='utf-8') as f:
        f.write("🛑 [우선 해결 요망] HTML 구조 및 레이아웃 오류 리포트\n")
        f.write("=" * 60 + "\n\n")
        for filename in set(list(critical_errors.keys()) + list(warning_errors.keys())):
            f.write(f"📄 [ {filename} ]\n")
            if filename in critical_errors:
                for err in critical_errors[filename]: f.write(f"   [치명적] {err}\n")
            if filename in warning_errors:
                for err in warning_errors[filename]: f.write(f"   [경고] {err}\n")
            f.write("-" * 60 + "\n")

    # === 리포트 파일 2: 깨진 링크 및 이미지 (나중에 여유될 때 해결 대상) ===
    report_links = "2_깨진링크_리포트.txt"
    with open(report_links, 'w', encoding='utf-8') as f:
        f.write("🔗 [참조 오류] 깨진 내부 링크 및 유실된 이미지 리포트\n")
        f.write("=" * 60 + "\n\n")
        for filename in set(list(broken_links.keys()) + list(broken_images.keys())):
            f.write(f"📄 [ {filename} ]\n")
            if filename in broken_images:
                f.write(f"   [이미지 유실] {len(broken_images[filename])}개 파일 없음\n")
                for img in broken_images[filename]: f.write(f"      - {img}\n")
            if filename in broken_links:
                f.write(f"   [링크 깨짐] {len(broken_links[filename])}개 문서 없음\n")
                for link in broken_links[filename]: f.write(f"      - {link}\n")
            f.write("-" * 60 + "\n")

    print(f"✅ 검사 완료! 두 개의 파일이 생성되었습니다.")
    print(f"  👉 1_구조오류_리포트.txt (화면이 하얗게 뜨거나 깨지는 문서들)")
    print(f"  👉 2_깨진링크_리포트.txt (링크 404 에러나 엑스박스 이미지들)")

if __name__ == "__main__":
    analyze_html_files_detailed(".")