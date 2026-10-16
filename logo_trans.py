import os
import re
import glob

# HTML 파일들이 모여있는 폴더 경로 지정
TARGET_DIR = "./" 

# 이미지 파일명에 따른 정확한 링크(.html) 목적지 절대 지정
# (혹시 나중에 문서 이름이 바뀌면 이 부분만 수정하시면 됩니다)
link_map = {
    '효빈1호선.svg': '1호선.html',
    '효빈2호선.svg': '2호선.html',
    '효빈3호선.svg': '3호선.html',
    '효빈4호선.svg': '4호선.html',
    '효빈5호선.svg': '5호선.html',
    '효빈6호선.svg': '6호선.html',
    '효빈7호선.svg': '7호선.html',
    '효빈8호선.svg': '8호선.html',
    '빈효광역선.svg': '빈효광역선.html',  # 말씀하신 대로 정확히 매핑했습니다.
    '청엽선.svg': '청엽선.html',
    '창전선.svg': '창전선.html'
}

modified_count = 0

for filepath in glob.glob(os.path.join(TARGET_DIR, "*.html")):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content

    # 1. 이전 스크립트가 잘못 씌워둔 투명 링크 껍데기가 있다면 깨끗하게 벗겨냅니다.
    pattern_unwrap = r'<a[^>]*href="[^"]+"[^>]*style="text-decoration:\s*none;"[^>]*>\s*(<img[^>]*src="이미지/svg/[^"]+"[^>]*>)\s*</a>'
    content = re.sub(pattern_unwrap, r'\1', content)

    # 2. 이미지 파일명(src)을 읽어서, 위 link_map에 지정된 정확한 html 주소로 단단히 묶어줍니다.
    def wrap_with_exact_link(m):
        img_tag = m.group(0)       # <img ...> 태그 전체
        svg_filename = m.group(1)  # 빈효광역선.svg 등
        
        # 딕셔너리에서 찾고, 없으면 파일명에서 .svg 떼고 .html 붙임
        target_html = link_map.get(svg_filename, svg_filename.replace('.svg', '.html'))
        
        return f'<a href="{target_html}" style="text-decoration: none;">{img_tag}</a>'

    # src="이미지/svg/파일명.svg" 구조만 정밀 타겟팅
    pattern_img = r'<img[^>]*src="이미지/svg/([^"]+\.svg)"[^>]*>'
    content = re.sub(pattern_img, wrap_with_exact_link, content, flags=re.DOTALL)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        modified_count += 1

print(f"✅ 링크 완벽 교정 완료! 수정된 문서: {modified_count}개")