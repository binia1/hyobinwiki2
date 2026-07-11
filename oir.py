import re

# 여기에 변환할 전체 HTML 코드를 통째로 붙여넣으세요.
html_content = """
여기에 HTML 코드를 붙여넣으세요!
"""

# 정규식: <a ...> 부터 </a> 까지 잡되, 줄바꿈이 있어도 모두 포함 (re.DOTALL)
pattern = re.compile(r'<a\s+([^>]*?)>(.*?)</a>', re.IGNORECASE | re.DOTALL)

def add_onclick(match):
    attrs = match.group(1)
    inner_html = match.group(2)
    
    # 1. 이미 onclick이 부여된 태그는 건드리지 않고 원본 그대로 반환
    if 'onclick' in attrs.lower():
        return match.group(0)
    
    # 2. nw-link 클래스가 없는 일반 a 태그도 건드리지 않음
    if 'nw-link' not in attrs.lower():
        return match.group(0)
        
    # 3. inner_html 내부의 모든 태그(<img...>, <span>...>)를 지우고 순수 텍스트(대학 이름)만 추출
    univ_name = re.sub(r'<[^>]+>', '', inner_html).strip()
    
    # 4. 대학 이름이 정상적으로 추출되었다면 onclick 속성을 맨 앞에 추가하여 조립
    if univ_name:
        return f'<a onclick="goToLink(\'{univ_name}.html\')" {attrs}>{inner_html}</a>'
    
    return match.group(0)

# 변환 실행
result_html = pattern.sub(add_onclick, html_content)

# 결과 출력
print("================ 변환 완료 ================\n")
print(result_html)