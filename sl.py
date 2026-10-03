import re

def fix_gosong_html(file_path, output_path):
    """
    고송동 문서의 꼬인 통/반 표기(`103통 464반 (26통 117반)` 등)를 
    괄호 안의 실제 값만 남기도록 일괄 복구합니다.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 앞의 오염된 '숫자통 숫자반'을 지우고 괄호 안의 내용(\1)만 남김
        pattern = r'\d+통\s*\d+반\s*\(([^)]+)\)'
        cleaned_content = re.sub(pattern, r'\1', content)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"평당동 문서 복구가 완료되었습니다. 결과 파일: {output_path}")
        
    except Exception as e:
        print(f"오류가 발생했습니다: {e}")

# 실행 예시 (평당동.html 파일을 읽어 수정본 생성)
fix_gosong_html('쌍엽동.html', '쌍엽동.html')