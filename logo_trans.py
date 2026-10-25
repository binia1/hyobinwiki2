import os
import re
import glob

TARGET_DIR = "./"

# 효빈 도시철도 노선 매핑 규격
HB_LINES = [
    ("1호선", "이미지/svg/효빈1호선.svg", "1호선.html"),
    ("2호선", "이미지/svg/효빈2호선.svg", "2호선.html"),
    ("3호선", "이미지/svg/효빈3호선.svg", "3호선.html"),
    ("4호선", "이미지/svg/효빈4호선.svg", "4호선.html"),
    ("5호선", "이미지/svg/효빈5호선.svg", "5호선.html"),
    ("6호선", "이미지/svg/효빈6호선.svg", "6호선.html"),
    ("7호선", "이미지/svg/효빈7호선.svg", "7호선.html"),
    ("8호선", "이미지/svg/효빈8호선.svg", "8호선.html"),
    ("빈효선", "이미지/svg/빈효광역선.svg", "빈효광역선.html"),
    ("창전선", "이미지/svg/창전선.svg", "창전선.html"),
    ("청엽선", "이미지/svg/청엽선.svg", "청엽선.html")
]

modified_count = 0

for filepath in glob.glob(os.path.join(TARGET_DIR, "*.html")):
    filename = os.path.basename(filepath)

    if "템플릿" in filename or "덕주" in filename or "빈주" in filename:
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 인포박스 상단에서 해당 역 경유 노선만 정확히 추출
    infobox_match = re.search(r'<aside\b[^>]*class=["\'][^"\']*infobox[\s\S]*?</aside>', content)
    if not infobox_match:
        continue
    
    infobox_html = infobox_match.group(0)
    top_infobox = infobox_html.split('infobox-title-bar')[0] if 'infobox-title-bar' in infobox_html else infobox_html

    found_lines = []
    for line_name, svg_path, html_name in HB_LINES:
        pat = rf'(class=["\']nav-line-name["\']>{line_name}<|href=["\']{html_name}["\'][^>]*>\s*<img[^>]*src=["\']{svg_path}["\'])'
        if re.search(pat, top_infobox):
            if (line_name, svg_path, html_name) not in found_lines:
                found_lines.append((line_name, svg_path, html_name))

    if not found_lines:
        continue

    # 로고 태그 (가로 나열)
    logo_tags = "".join([
        f'<a href="{html_name}" style="text-decoration: none;"><img src="{svg_path}" alt="{line_name}" class="svg-logo-sm" /></a>'
        for line_name, svg_path, html_name in found_lines
    ])

    # 1. [출구 정보] 헤더 정렬 통일
    def fix_exit_title(m):
        tag_name = m.group(1) # th 또는 td
        tag_attrs = m.group(2)
        inner = m.group(3)
        
        # 순수 텍스트 추출 (기존 엉뚱한 이미지나 태그 제거)
        clean_text = re.sub(r'<[^>]+>', '', inner).strip()
        if not clean_text or "출구" not in clean_text:
            clean_text = "출구 정보"

        return (
            f'<{tag_name} {tag_attrs}>\n'
            f'<div class="flex items-center justify-center gap-3">\n'
            f'{logo_tags}\n'
            f'<span class="text-xl font-extrabold tracking-tight text-black">{clean_text}</span>\n'
            f'</div>\n'
            f'</{tag_name}>'
        )

    content = re.sub(
        r'<(th|td)\b([^>]*colspan=[\"\']?[1-9][\"\']?[^>]*)>((?:(?!<\/(?:th|td)>)[\s\S])*?출구\s*정보(?:(?!<\/(?:th|td)>)[\s\S])*?)<\/\1>',
        fix_exit_title,
        content
    )

    # 2. [이용객 통계] 헤더 정렬 통일 (청덕역처럼 colspan이 5이거나 속성이 다른 경우까지 완전 포괄)
    def fix_traffic_title(m):
        tag_name = m.group(1)
        tag_attrs = m.group(2)
        inner = m.group(3)

        clean_text = re.sub(r'<[^>]+>', '', inner).strip()
        if not clean_text:
            clean_text = "이용객 통계"

        # py-3 bg-white border-b-2 border-gray-100 클래스 강제 부여하여 스타일 일원화
        return (
            f'<{tag_name} class="py-3 bg-white border-b-2 border-gray-100" {tag_attrs}>\n'
            f'<div class="flex items-center justify-center gap-3">\n'
            f'{logo_tags}\n'
            f'<span class="text-xl font-extrabold tracking-tight text-black">{clean_text}</span>\n'
            f'</div>\n'
            f'</{tag_name}>'
        )

    # colspan 속성이 붙어 있는 '이용객 통계' 또는 '승하차 인원' 최상단 셀 타겟
    content = re.sub(
        r'<(th|td)\b([^>]*colspan=[\"\']?[1-9][\"\']?[^>]*)>((?:(?!<\/(?:th|td)>)[\s\S])*?(?:이용객\s*통계|승하차\s*인원)(?:(?!<\/(?:th|td)>)[\s\S])*?)<\/\1>',
        fix_traffic_title,
        content
    )

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_count += 1
        print(f"가운데 정렬 교정 완료: {filename}")

print(f"\n✅ 정렬 수정 완료: 총 {modified_count}개 파일")