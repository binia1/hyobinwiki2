import os
import re
from datetime import datetime

# 기준 연도 (효빈위키 설정상 2026년 기준)
CURRENT_YEAR = 2026
CURRENT_MONTH = 9
CURRENT_DAY = 4

def replace_age(match):
    """[age(YYYY-MM-DD)] 매크로를 2026년 기준 만 나이로 자동 계산해서 치환합니다."""
    birth_str = match.group(1)
    try:
        birth_year, birth_month, birth_day = map(int, birth_str.split('-'))
        age = CURRENT_YEAR - birth_year
        if (CURRENT_MONTH, CURRENT_DAY) < (birth_month, birth_day):
            age -= 1
        return str(age)
    except:
        return match.group(0)

def clean_html_files(directory):
    # 치환 규칙 (찾을 내용 정규식, 바꿀 내용 HTML)
    replacements = [
        # 0. 🚨 [긴급 복구] 이전 스크립트가 잘못 파먹은 역슬래시(\) 찌꺼기 원상복구
        (r"display=\\'none\\';", r"display='none';"),
        
        # 1. 흉측한 onerror 이미지 플레이스홀더 날리기 (오류 원인 제거)
        (r'''onerror="this\.style\.display='none'; this\.parentNode\.insertAdjacentHTML\('afterbegin', '&lt;span style=\\'color:#ffffff; font-weight:bold; font-size:1\.5rem;\\'&gt;IMG&lt;/span&gt;'\);"''', 
         '''onerror="this.style.display='none';"'''),
         
        # 2. [ruby(한자, ruby=요미가나)] 일괄 변환
        (r'\[ruby\(([^,]+),\s*ruby=([^)]+)\)\]', r'<ruby>\1<rt>\2</rt></ruby>'),
        
        # 3. ^^텍스트^^ 위첨자 변환
        (r'\^\^(.*?)\^\^', r'<sup style="font-size: 0.8em; color: #555;">\1</sup>'),
        
        # 4. 일본 국기 틀 찌꺼기 변환
        (r'&gt;\s*틀\s*포함:\s*틀:국기', r'<span style="font-size: 1.2em;">🇯🇵</span> <a class="wiki-link" href="일본.html">일본</a>'),
        
        # 5. X(트위터) 로고 틀 찌꺼기 변환 (오류 원인 제거)
        (r'&gt;\s*틀\s*포함:\s*틀:X\(SNS\)\s*로고', '''<img onerror="this.style.display='none';" src="이미지/X 아이콘.svg" style="max-width:100%; height:auto; display:inline-block; vertical-align:middle; width: 20px !important;"/>'''),

        # 6. 표 셀 안의 색상 찌꺼기 (#ffc224,#ffc224)를 CSS 배경색으로 강제 삽입
        (r'(<(?:td|div)[^>]*style=")([^"]*)("?[^>]*>\s*)#([0-9a-fA-F]{3,6})(?:,#[0-9a-fA-F]{3,6})?\s*', 
         r'\1\2; background-color: #\4;\3')
    ]

    count = 0
    # 현재 디렉토리부터 하위 폴더의 모든 html 파일을 순회
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                original_content = content
                
                # 나이 계산 매크로 치환 적용
                content = re.sub(r'\[age\(([0-9]{4}-[0-9]{2}-[0-9]{2})\)\]', replace_age, content)
                
                # 나머지 나무위키 찌꺼기 규칙 순차 적용
                for pattern, repl in replacements:
                    content = re.sub(pattern, repl, content)
                    
                # 변경된 내용이 있을 때만 파일을 덮어쓰기
                if content != original_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"✅ 변환(및 복구) 완료: {file}")
                    count += 1

    print(f"\n🚀 총 {count}개의 HTML 파일에서 나무위키 찌꺼기 청소 및 에러 복구를 완료했습니다!")

# 실행 (현재 폴더 기준)
if __name__ == "__main__":
    clean_html_files(".")