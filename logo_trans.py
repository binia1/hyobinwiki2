import os
import re
import glob

TARGET_DIR = "./"

# 효빈 도시철도 노선 매핑
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

    # 인포박스에서 실제 경유 노선 추출
    infobox_match = re.search(r'<aside\b[^>]*class=["\'][^"\']*infobox[\s\S]*?</aside>', content)
    if not infobox_match:
        continue
    
    top_infobox = infobox_match.group(0).split('infobox-title-bar')[0] if 'infobox-title-bar' in infobox_match.group(0) else infobox_match.group(0)

    found_lines = []
    for line_name, svg_path, html_name in HB_LINES:
        pat = rf'(class=["\']nav-line-name["\']>{line_name}<|href=["\']{html_name}["\'][^>]*>\s*<img[^>]*src=["\']{svg_path}["\'])'
        if re.search(pat, top_infobox):
            if (line_name, svg_path, html_name) not in found_lines:
                found_lines.append((line_name, svg_path, html_name))

    if not found_lines:
        continue

    # [4. 이용객 통계 테이블] 구간만 정확히 타겟팅
    def fix_traffic_table(match):
        table_html = match.group(0)

        # 1. 최상단 'ㅇㅇ역 이용객 통계' 제목 헤더 정중앙 강제 정렬 (기호로 바뀌는 걸 막기 위해 alt="logo" 처리)
        def fix_main_header(m):
            th_open = m.group(1)
            inner = m.group(2)
            
            # 쓸데없는 기호 제거 및 역 이름 추출
            text_only = re.sub(r'<[^>]+>', '', inner).strip()
            text_only = re.sub(r'①|②|③|④|⑤|⑥|⑦|⑧|\[7\]|\[\d\]', '', text_only).strip()
            if not text_only or "이용객" not in text_only:
                text_only = "이용객 통계"

            # 외부 스크립트 무력화를 위해 class 제거 및 alt="logo" 지정
            logos = "".join([
                f'<a href="{h_name}" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;"><img src="{s_path}" alt="logo" style="width: 26px !important; height: 26px !important; object-fit: contain !important; border: none !important; display: block !important;" /></a>'
                for l_name, s_path, h_name in found_lines
            ])

            return (
                f'{th_open}\n'
                f'<div style="display: flex !important; align-items: center !important; justify-content: center !important; gap: 8px !important; width: 100% !important; margin: 0 auto !important; flex-direction: row !important;">\n'
                f'{logos}\n'
                f'<span style="font-size: 1.25rem !important; font-weight: 800 !important; color: #000000 !important; letter-spacing: -0.5px !important; margin-left: 4px;">{text_only}</span>\n'
                f'</div>\n</th>'
            )

        table_html = re.sub(
            r'(<th\b[^>]*colspan=[\"\']?[1-9][\"\']?[^>]*>)((?:(?!</th>)[\s\S])*?(?:이용객\s*통계|일평균\s*이용객)(?:(?!</th>)[\s\S])*?)</th>',
            fix_main_header,
            table_html
        )

        # 2. 열 제목 ('1호선', '7호선' 등) 세로 쪼개짐 방지 및 가로 정중앙 배치
        def fix_sub_header(m):
            th_open = m.group(1)
            inner = m.group(2)
            
            # 메인 제목은 건너뜀
            if "이용객 통계" in inner or "일평균" in inner:
                return m.group(0)

            # 노선 찾기
            matched_line = None
            for l_name, s_path, h_name in found_lines:
                if l_name in inner or h_name in inner or s_path in inner:
                    matched_line = (l_name, s_path, h_name)
                    break
                    
            if matched_line:
                l_name, s_path, h_name = matched_line
                return (
                    f'{th_open}'
                    f'<div style="display: flex !important; align-items: center !important; justify-content: center !important; gap: 6px !important; flex-direction: row !important; white-space: nowrap !important; margin: 0 auto !important; width: 100% !important;">'
                    f'<a href="{h_name}" style="text-decoration: none; display: inline-flex; align-items: center;"><img src="{s_path}" alt="logo" style="width: 22px !important; height: 22px !important; object-fit: contain !important; border: none !important; display: block !important;" /></a>'
                    f'<span style="font-size: 0.95rem !important; font-weight: 900 !important; color: #000 !important;">{l_name}</span>'
                    f'</div></th>'
                )
            return m.group(0)

        table_html = re.sub(
            r'(<th\b(?:(?!colspan)[^>])*>)([\s\S]*?)</th>',
            fix_sub_header,
            table_html
        )
        
        return table_html

    # 문서 내의 4번 테이블을 찾아서 교체
    content = re.sub(r'<table[^>]*>[\s\S]*?(?:이용객\s*통계|일평균\s*이용객)[\s\S]*?</table>', fix_traffic_table, content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_count += 1
        print(f"✅ 정중앙 가로정렬 및 SVG 완벽 복구: {filename}")

print(f"\n🚀 총 {modified_count}개 파일 변환 완료!")