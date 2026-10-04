import os
import shutil
import glob
from bs4 import BeautifulSoup

def clear_toc_contents(directory_path="."):
    # 1. 안전을 위한 백업 폴더 생성
    backup_dir = os.path.join(directory_path, "backup_html")
    if not os.path.exists(backup_dir):
        os.makedirs(backup_dir)
        print(f"📁 백업 폴더가 생성되었습니다: {backup_dir}")

    # 2. 현재 폴더의 모든 HTML 파일 검색
    html_files = glob.glob(os.path.join(directory_path, "*.html"))
    
    if not html_files:
        print("❌ 처리할 HTML 파일이 없습니다.")
        return

    processed_count = 0

    for file_path in html_files:
        filename = os.path.basename(file_path)
        backup_path = os.path.join(backup_dir, filename)
        
        # 원본 파일 백업 복사
        shutil.copy2(file_path, backup_path)
        
        # HTML 파일 읽기
        with open(file_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
            
        # BeautifulSoup으로 HTML 파싱
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # [수정 핵심] 에러를 유발하던 람다식 제거. 단순히 'toc' 클래스를 가진 div 검색
        toc_divs = soup.find_all('div', class_='toc')
        
        modified = False
        for toc_div in toc_divs:
            # 목차 태그 안에 내용이 있다면 싹 비우기 (껍데기만 유지)
            if len(toc_div.contents) > 0:
                toc_div.clear()
                modified = True
        
        # 변경사항이 발생한 파일만 덮어쓰기
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                # str(soup)을 사용하여 기존 HTML 형태를 최대한 유지하며 저장
                f.write(str(soup))
            print(f"✅ 변환 완료: {filename}")
            processed_count += 1
        else:
            print(f"⏩ 건너뜀 (변경점 없음): {filename}")
            # 변경할 내용이 없는 파일은 백업 폴더에서 삭제 (용량 확보)
            if os.path.exists(backup_path):
                os.remove(backup_path) 

    print(f"\n🎉 총 {processed_count}개의 파일에서 목차 정리가 완료되었습니다.")

if __name__ == "__main__":
    # 스크립트가 위치한 폴더(.) 안의 HTML 파일들을 대상으로 실행
    clear_toc_contents(".")