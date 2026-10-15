import os
import re
import glob

# HTML 파일들이 모여있는 폴더 경로 지정 (현재 폴더면 "./")
TARGET_DIR = "./" 

# 노선별 정확한 SVG 파일명 매핑 (빈효선 예외처리 필수 적용)
svg_map = {
    '1': '효빈1호선.svg',
    '2': '효빈2호선.svg',
    '3': '효빈3호선.svg',
    '4': '효빈4호선.svg',
    '5': '효빈5호선.svg',
    '6': '효빈6호선.svg',
    '7': '효빈7호선.svg',
    '8': '효빈8호선.svg',
    'bin': '빈효광역선.svg',  # class="line-bin" 인 경우
    '빈': '빈효광역선.svg'   # 텍스트가 '빈' 인 경우
}

# 300개 문서 전체에 꽂아넣을 SVG 수직 정렬용 CSS
css_injection = """
        /* 일괄 적용된 SVG 수직 정렬 CSS */
        .svg-logo { width: 38px; height: 38px; object-fit: contain; flex-shrink: 0; }
        .svg-logo-sm { width: 24px; height: 24px; object-fit: contain; flex-shrink: 0; }
        .svg-logo-inline { height: 1.5rem; vertical-align: middle; margin-right: 5px; }
        .flex-center-inline { display: inline-flex; align-items: center; gap: 6px; vertical-align: middle; }
        .flex-center { display: flex; align-items: center; justify-content: center; gap: 6px; }
        .flex-start { display: flex; align-items: center; justify-content: flex-start; gap: 6px; }
    </style>"""

# 타겟 디렉토리 내의 모든 HTML 파일 순회
for filepath in glob.glob(os.path.join(TARGET_DIR, "*.html")):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. 픽셀 어긋남 방지용 Flexbox CSS 일괄 주입 (</style> 태그 직전에 삽입)
    if "/* 일괄 적용된 SVG 수직 정렬 CSS */" not in content:
        content = content.replace("</style>", css_injection, 1)

    # 2. 작은 로고 (ring-sm, rect-sm 등) 정규식 일괄 변환
    # 타겟: <div class="station-ring ring-sm line-7">7</div>
    def replace_sm_logo(match):
        line_key = match.group(1).replace('line-', '')
        svg_file = svg_map.get(line_key, f'효빈{line_key}호선.svg')
        return f'<img src="이미지/svg/{svg_file}" alt="{line_key}호선" class="svg-logo-sm" />'
    
    content = re.sub(r'<div class="station-[a-z]+ [a-z]+-sm line-([0-9a-zA-Z가-힣]+)">.*?</div>', replace_sm_logo, content)

    # 3. 큰 로고 (인포박스 최상단) 정규식 일괄 변환
    # 타겟: <div class="station-ring line-bin">빈</div>
    def replace_lg_logo(match):
        line_key = match.group(1).replace('line-', '')
        svg_file = svg_map.get(line_key, f'효빈{line_key}호선.svg')
        return f'<img src="이미지/svg/{svg_file}" alt="{line_key}호선" class="svg-logo" />'
    
    content = re.sub(r'<div class="station-[a-z]+ line-([0-9a-zA-Z가-힣]+)">.*?</div>', replace_lg_logo, content)

    # 변경된 내용 덮어쓰기
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("✅ 300개 역 문서 SVG 교체 및 정렬 CSS 일괄 변환 완료!")