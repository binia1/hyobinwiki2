import os
import re
try:
    from bs4 import BeautifulSoup
except ImportError:
    print("BeautifulSoup4 라이브러리가 설치되어 있지 않습니다.")
    print("실행 전 터미널에 다음 명령어를 입력하세요: pip install beautifulsoup4")
    exit(1)

# HTML 파일들이 위치한 디렉토리 설정 (현재 디렉토리 기준)
TARGET_DIR = "./" 

def fix_all_infobox_layout():
    # 모든 HTML 파일 패턴 매칭 (연도 문서뿐만 아니라 전체 문서 검사)
    html_file_pattern = re.compile(r'^.*\.html$')
    
    # 해당 패턴에 맞는 파일 리스트 수집
    html_files = [f for f in os.listdir(TARGET_DIR) if html_file_pattern.match(f)]
    
    if not html_files:
        print(f"'{TARGET_DIR}' 경로에서 HTML 문서를 찾을 수 없습니다.")
        return

    print(f"총 {len(html_files)}개의 문서를 찾았습니다. 레이아웃 수정을 시작합니다...\n")

    for filename in html_files:
        filepath = os.path.join(TARGET_DIR, filename)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            html_content = f.read()
            
        # BeautifulSoup을 이용해 HTML 파싱
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # 첫 번째 <h2> 태그(문서 개요) 이전에 나오는 첫 번째 테이블을 인포박스로 간주하여 탐색
        target_table = None
        first_table = soup.find('table')
        
        if first_table:
            # 첫 번째 테이블이 <h2> 이전에 등장한다면 도입부 인포박스로 간주
            if first_table.find_previous('h2') is None:
                target_table = first_table
                
        if target_table:
            # 기존 인라인 스타일 가져오기
            old_style = target_table.get('style', '')
            
            # 이미 우측 배치가 되어있는지 확인
            if 'float: right' in old_style.lower() or 'float:right' in old_style.lower():
                continue
            
            # 기존 스타일에서 float, margin, width 관련 속성을 제거
            style_parts = [p.strip() for p in old_style.split(';') if p.strip()]
            new_style_parts = []
            
            for part in style_parts:
                part_lower = part.lower()
                if part_lower.startswith('width'): continue
                if part_lower.startswith('margin'): continue
                if part_lower.startswith('float'): continue
                if part_lower.startswith('max-width'): continue
                new_style_parts.append(part)
                
            # 목차(toc)가 왼쪽에, 인포박스가 오른쪽에 나란히 배치되도록 속성 추가
            # 모바일 환경(작은 화면)을 대비해 max-width와 width:100%를 동시 부여
            new_style_parts.append('float: right')
            new_style_parts.append('max-width: 400px')
            new_style_parts.append('width: 100%')
            new_style_parts.append('margin: 0 0 20px 20px')
            
            # 수정된 스타일을 태그에 적용
            target_table['style'] = '; '.join(new_style_parts) + ';'
            
            # 수정한 HTML 코드를 원래 파일에 덮어쓰기
            with open(filepath, 'w', encoding='utf-8') as f:
                # BS4가 str 변환 시 기본적으로 HTML 형태를 잘 유지합니다.
                f.write(str(soup))
            print(f"✅ {filename} : 인포박스 우측 배치 완료")

if __name__ == "__main__":
    fix_all_infobox_layout()