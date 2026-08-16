import os
import re

# HTML, JS 파일들이 모여있는 폴더 경로를 지정하세요. 현재 폴더면 '.' 입니다.
TARGET_DIR = '.' 

# <a ... href="#" ...>텍스트</a> 패턴을 찾아내기 위한 정규표현식
pattern = re.compile(r'(<a\s+[^>]*?)href="#"([^>]*?>)([^<]+)</a>')

def replace_link(match):
    before_href = match.group(1) # href="#" 앞부분의 속성들
    after_href = match.group(2)  # href="#" 뒷부분의 속성들 (class="wiki-link" 등)
    text = match.group(3)        # a 태그 안의 텍스트
    
    # 텍스트의 앞뒤 공백을 제거하고 .html 확장자 추가
    file_name = text.strip() + ".html"
    
    # href 속성만 새 파일명으로 교체하여 반환
    return f'{before_href}href="{file_name}"{after_href}{text}</a>'

def process_html_files(directory):
    count = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            # 💡 이 부분이 수정되었습니다. 튜플을 사용하여 여러 확장자 검사
            if file.endswith(('.html', '.js')):
                filepath = os.path.join(root, file)
                
                # 파일 읽기 (인코딩 오류 방지를 위해 try-except 추가 권장)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # 링크 치환 작업
                    new_content = pattern.sub(replace_link, content)
                    
                    # 변경된 사항이 있을 경우에만 덮어쓰기 저장
                    if content != new_content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"수정 완료: {filepath}")
                        count += 1
                except UnicodeDecodeError:
                    print(f"인코딩 문제로 건너뜀: {filepath}")
                    
    print(f"\n총 {count}개의 파일(HTML/JS)에서 링크 일괄 수정이 완료되었습니다.")

if __name__ == '__main__':
    process_html_files(TARGET_DIR)