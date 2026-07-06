import os
import shutil
from datetime import datetime
from bs4 import BeautifulSoup

def insert_map_to_html(directory="."):
    # 1. 백업 폴더 생성 (현재 시간 기준)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_dir = os.path.join(directory, f"backup_{timestamp}")
    
    html_files = [f for f in os.listdir(directory) if f.endswith(".html")]
    
    if not html_files:
        print("현재 폴더에 HTML 파일이 없습니다.")
        return

    os.makedirs(backup_dir, exist_ok=True)
    print(f"📁 백업 폴더 생성 완료: {backup_dir}")

    # 삽입할 지도 HTML 코드 (문자열로 유지)
    map_html_string = """
    <div class="infobox-map border-b border-[#ccc]" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
        <iframe src="https://binia1.github.io/mymap/" 
                style="width: 160%; height: 160%; border: none; 
                       position: absolute; top: 0; left: 0;
                       transform: scale(0.625); transform-origin: 0 0;">
        </iframe>
    </div>
    """

    success_count = 0
    skip_count = 0

    for filename in html_files:
        filepath = os.path.join(directory, filename)
        backup_path = os.path.join(backup_dir, filename)

        # 2. 원본 파일 백업
        shutil.copy2(filepath, backup_path)

        # 3. HTML 파일 읽기 (UTF-8)
        with open(filepath, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')

        # 인포박스의 타이틀 행(로고와 상징문구 있는 곳) 찾기
        title_row = soup.find('div', class_='infobox-title-row')
        
        if title_row:
            # 이미 지도가 삽입되어 있는지 확인 (중복 삽입 방지)
            existing_map = soup.find('div', class_='infobox-map')
            if existing_map:
                print(f"⏩ [{filename}] 이미 지도가 삽입되어 있어 건너뜁니다.")
                skip_count += 1
                continue

            # 💡 오류 수정 부분: 반복문 안에서 문자열을 매번 새롭게 파싱하여 삽입합니다.
            map_soup = BeautifulSoup(map_html_string, 'html.parser')
            title_row.insert_after(map_soup)

            # 4. 수정된 내용 덮어쓰기
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(str(soup))
            
            print(f"✅ [{filename}] 지도 삽입 완료!")
            success_count += 1
        else:
            print(f"⚠️ [{filename}] 'infobox-title-row' 클래스를 찾을 수 없어 건너뜁니다.")
            skip_count += 1

    print("-" * 30)
    print(f"작업 완료! (성공: {success_count}건, 건너뜀: {skip_count}건)")
    print(f"만약 문서가 깨졌다면 '{backup_dir}' 폴더의 원본 파일로 덮어씌워 복구하세요.")

# 스크립트 실행
if __name__ == "__main__":
    insert_map_to_html(".")