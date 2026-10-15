import os
import re
import glob

# HTML 파일들이 모여있는 폴더 경로 지정 (현재 폴더: "./")
TARGET_DIR = "./" 

# 노선별 정확한 SVG 파일명 매핑 (청엽선, 창전선, 빈효선 완벽 적용)
svg_map = {
    '1': '효빈1호선.svg',
    '2': '효빈2호선.svg',
    '3': '효빈3호선.svg',
    '4': '효빈4호선.svg',
    '5': '효빈5호선.svg',
    '6': '효빈6호선.svg',
    '7': '효빈7호선.svg',
    '8': '효빈8호선.svg',
    'bin': '빈효광역선.svg',
    '빈': '빈효광역선.svg',
    'cheongyeop': '청엽선.svg',
    '청엽': '청엽선.svg',
    'changjeon': '창전선.svg',
    '창전': '창전선.svg'
}

def get_alt_name(key):
    if key in ['cheongyeop', '청엽']: return "청엽선"
    if key in ['changjeon', '창전']: return "창전선"
    if key in ['bin', '빈']: return "빈효선"
    return f"{key}호선"

css_injection = """
        /* 일괄 적용된 SVG 수직 정렬 CSS (플렉스 컨테이너 확장) */
        .svg-logo { width: 38px; height: 38px; object-fit: contain; flex-shrink: 0; }
        .svg-logo-sm { width: 24px; height: 24px; object-fit: contain; flex-shrink: 0; }
        .svg-logo-inline { height: 1.5rem; vertical-align: middle; margin-right: 5px; }
        .flex-center-inline { display: inline-flex; align-items: center; gap: 6px; vertical-align: middle; }
        .flex-center { display: flex; align-items: center; justify-content: center; gap: 6px; }
        .flex-start { display: flex; align-items: center; justify-content: flex-start; gap: 6px; }
    </style>"""

modified_count = 0
skipped_count = 0

for filepath in glob.glob(os.path.join(TARGET_DIR, "*.html")):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 노선 클래스나 승강장 로고 태그가 없는 문서는 곧바로 스킵
    if not re.search(r'line-[a-zA-Z0-9가-힣]+|station-[a-z]+', content):
        skipped_count += 1
        continue

    # 1. CSS 인젝션 (기존 CSS 덮어쓰기 방지)
    if "/* 일괄 적용된 SVG 수직 정렬 CSS" not in content and "</style>" in content:
        content = content.replace("</style>", css_injection, 1)

    # 🔥 [핵심 해결] 승강장 표(TD 내부) 로고 + 텍스트 정렬 불량 해결을 위한 Flex 래핑
    # <td...> <span>...</span> 텍스트 </td> 구조를 몽땅 잡아서 <div class="flex-start">로 꽉 묶어줍니다.
    pattern_td = r'(<td[^>]*>)\s*<span[^>]*class="[^"]*\bline-badge-txt\b[^"]*\bline-([a-zA-Z0-9가-힣]+)\b[^"]*"[^>]*>.*?</span>(.*?)(</td>)'
    
    def replace_td(m):
        td_open = m.group(1)
        line_key = m.group(2)
        rest_content = m.group(3)
        td_close = m.group(4)
        svg_file = svg_map.get(line_key, f"효빈{line_key}호선.svg")
        alt_text = get_alt_name(line_key)
        
        # Flex-start 래퍼를 씌워 픽셀 단위 어긋남 원천 차단
        return f'{td_open}\n<div class="flex-start"><img src="이미지/svg/{svg_file}" alt="{alt_text}" class="svg-logo-sm" />{rest_content}</div>\n{td_close}'
    
    content = re.sub(pattern_td, replace_td, content, flags=re.DOTALL)

    # 3. 혹시나 td 바깥에 남아있는 승강장 로고 잔여물 처리
    pattern_span = r'<span[^>]*class="[^"]*\bline-badge-txt\b[^"]*\bline-([a-zA-Z0-9가-힣]+)\b[^"]*"[^>]*>.*?</span>'
    content = re.sub(pattern_span, lambda m: f'<img src="이미지/svg/{svg_map.get(m.group(1), f"효빈{m.group(1)}호선.svg")}" alt="{get_alt_name(m.group(1))}" class="svg-logo-inline" />', content, flags=re.DOTALL)

    # 4. 내비게이션 및 하단 스몰 로고 (div ring-sm, rect-sm)
    pattern_div_sm = r'<div[^>]*class="[^"]*station-[a-z]+\s+[a-z]+-sm\s+line-([a-zA-Z0-9가-힣]+)[^"]*"[^>]*>.*?</div>'
    content = re.sub(pattern_div_sm, lambda m: f'<img src="이미지/svg/{svg_map.get(m.group(1), f"효빈{m.group(1)}호선.svg")}" alt="{get_alt_name(m.group(1))}" class="svg-logo-sm" />', content, flags=re.DOTALL)

    # 5. 인포박스 상단 메인 로고 (div 일반)
    pattern_div_lg = r'<div[^>]*class="[^"]*station-[a-z]+\s+line-([a-zA-Z0-9가-힣]+)[^"]*"[^>]*>.*?</div>'
    content = re.sub(pattern_div_lg, lambda m: f'<img src="이미지/svg/{svg_map.get(m.group(1), f"효빈{m.group(1)}호선.svg")}" alt="{get_alt_name(m.group(1))}" class="svg-logo" />', content, flags=re.DOTALL)

    # 변경 내용이 있는 문서만 파일 덮어쓰기 저장 (속도/백업 문제 해결)
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_count += 1
    else:
        skipped_count += 1

print(f"✅ 완벽 정렬 스크립트 작업 완료!")
print(f"👉 수정된 문서: {modified_count}개 / 스킵된 문서: {skipped_count}개")