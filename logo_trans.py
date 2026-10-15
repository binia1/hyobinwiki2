import os
import re
import glob

# HTML 파일들이 모여있는 폴더 경로 지정 (현재 폴더: "./")
TARGET_DIR = "./" 

# 노선별 정확한 SVG 파일명 매핑
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
    '창전': '창전선.svg',
    '광역': '빈효광역선.svg'
}

def get_alt_name(key):
    if '청엽' in key or 'cheongyeop' in key: return "청엽선"
    if '창전' in key or 'changjeon' in key: return "창전선"
    if '빈' in key or 'bin' in key or '광역' in key: return "빈효선"
    return f"{key}호선"

css_injection = """
        /* 일괄 적용된 SVG 수직 정렬 CSS */
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

    # 1. CSS 인젝션
    if "/* 일괄 적용된 SVG 수직 정렬 CSS" not in content and "</style>" in content:
        content = content.replace("</style>", css_injection, 1)

    # 2. 승강장 표(TD 내부) 로고 래핑
    pattern_td = r'(<td[^>]*>)\s*<span[^>]*class="[^"]*\bline-badge-txt\b[^"]*\bline-([a-zA-Z0-9가-힣]+)[^"]*"[^>]*>.*?</span>(.*?)(</td>)'
    def replace_td(m):
        td_open, line_key, rest_content, td_close = m.group(1), m.group(2), m.group(3), m.group(4)
        svg_file = svg_map.get(line_key, f"효빈{line_key}호선.svg")
        return f'{td_open}\n<div class="flex-start"><img src="이미지/svg/{svg_file}" alt="{get_alt_name(line_key)}" class="svg-logo-sm" />{rest_content}</div>\n{td_close}'
    content = re.sub(pattern_td, replace_td, content, flags=re.DOTALL)

    # 3. 잔여 승강장 로고 처리
    pattern_span = r'<span[^>]*class="[^"]*\bline-badge-txt\b[^"]*\bline-([a-zA-Z0-9가-힣]+)[^"]*"[^>]*>.*?</span>'
    content = re.sub(pattern_span, lambda m: f'<img src="이미지/svg/{svg_map.get(m.group(1), f"효빈{m.group(1)}호선.svg")}" alt="{get_alt_name(m.group(1))}" class="svg-logo-inline" />', content, flags=re.DOTALL)

    # 4. 내비게이션 및 하단 스몰 로고
    pattern_div_sm = r'<div[^>]*class="[^"]*station-[a-z]+\s+[a-z]+-sm\s+line-([a-zA-Z0-9가-힣]+)[^"]*"[^>]*>.*?</div>'
    content = re.sub(pattern_div_sm, lambda m: f'<img src="이미지/svg/{svg_map.get(m.group(1), f"효빈{m.group(1)}호선.svg")}" alt="{get_alt_name(m.group(1))}" class="svg-logo-sm" />', content, flags=re.DOTALL)

    # 5. 인포박스 상단 메인 로고
    pattern_div_lg = r'<div[^>]*class="[^"]*station-[a-z]+\s+line-([a-zA-Z0-9가-힣]+)[^"]*"[^>]*>.*?</div>'
    content = re.sub(pattern_div_lg, lambda m: f'<img src="이미지/svg/{svg_map.get(m.group(1), f"효빈{m.group(1)}호선.svg")}" alt="{get_alt_name(m.group(1))}" class="svg-logo" />', content, flags=re.DOTALL)

    # 🔥 6. [업그레이드] 차량사업소 전용 대형 로고 (ring-logo) - <br/>이나 여러 글자가 들어가도 완벽 포획
    pattern_ring_logo = r'<div[^>]*class="[^"]*\bring-logo\b[^"]*"[^>]*>.*?</div>'
    def replace_ring_logo(m):
        # 빈효선/광역 관련 키워드가 포함되어 있으므로 빈효광역선.svg로 강제 매핑
        return f'<img src="이미지/svg/빈효광역선.svg" alt="빈효선" style="width: 80px; height: 80px; margin: 0 auto; object-fit: contain; margin-bottom: 8px; display: block;" />'
    content = re.sub(pattern_ring_logo, replace_ring_logo, content, flags=re.DOTALL)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_count += 1
    else:
        skipped_count += 1

print(f"✅ 치원차량사업소 포함 기지 문서 로고 완벽 교정 완료!")
print(f"👉 수정된 문서: {modified_count}개 / 스킵된 문서: {skipped_count}개")