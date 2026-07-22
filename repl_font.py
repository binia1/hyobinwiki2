import os
import glob
import re

def setup_external_fonts(wiki_folder_path):
    # 🚫 제외할 키워드 목록 (소문자로 작성, 부분 일치 필터링)
    exclude_keywords = [
        '블라인드', '인스타그램', 'instagram', 'profile', 'sns',
        '블로그', 'blog', '유튜브', 'youtube', '페이스북', 'facebook',
        '엑스', '트위터', 'twitter', 'hj몰_공식홈페이지'
    ]

    # =========================================================
    # 1. 외부 CSS 파일 자동 생성
    # =========================================================
    css_content = """/* === 🚀 [효빈위키 폰트 표준화 외부 스타일시트] === */
:root {
    --font-base: 0.9rem;
    --font-h1: 2.5rem;
    --font-h2: 1.5rem;
    --font-h3: 1.25rem;
    --font-h4: 1.1rem;
    --font-h5: 1rem;
    --font-small: 0.8rem;
}

h1 { font-size: var(--font-h1) !important; line-height: 1.3 !important; }
h2 { font-size: var(--font-h2) !important; line-height: 1.3 !important; }
h3 { font-size: var(--font-h3) !important; line-height: 1.3 !important; }
h4 { font-size: var(--font-h4) !important; line-height: 1.3 !important; }
h5 { font-size: var(--font-h5) !important; line-height: 1.3 !important; }

/* 본문 및 표 폰트 강제 정렬 */
.post-body, .board-table td, .board-table th { 
    font-size: var(--font-base) !important; 
}
"""
    css_file_name = "wiki_font_standard.css"
    css_path = os.path.join(wiki_folder_path, css_file_name)
    
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(css_content)
    print(f"✅ 외부 CSS 파일 생성 완료: {css_file_name}")

    # =========================================================
    # 2. HTML 문서에 <link> 태그 주입 (제외 키워드 필터링)
    # =========================================================
    target_files = glob.glob(os.path.join(wiki_folder_path, "**/*.html"), recursive=True)
    
    success_count = 0
    skip_count = 0

    print(f"📁 총 {len(target_files)}개의 문서 검사를 시작합니다...")

    for file_path in target_files:
        file_name_lower = os.path.basename(file_path).lower()
        
        # ⚠️ 필터링 로직: 파일명에 제외 키워드가 하나라도 있으면 스킵!
        if any(keyword in file_name_lower for keyword in exclude_keywords):
            print(f"🚫 스킵됨 (금지어 포함): {os.path.basename(file_path)}")
            skip_count += 1
            continue

        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 이미 주입된 파일인지 확인 (중복 방지)
            if 'wiki_font_standard.css' in content:
                continue
                
            # 상대 경로 계산
            rel_dir = os.path.relpath(wiki_folder_path, os.path.dirname(file_path))
            if rel_dir == '.':
                css_rel_path = css_file_name
            else:
                css_rel_path = os.path.join(rel_dir, css_file_name).replace('\\', '/')
                
            link_tag = f'\n    <!-- 효빈위키 폰트 CSS -->\n    <link rel="stylesheet" href="{css_rel_path}">\n'
            
            # </head> 태그를 찾아서 그 바로 위에 외부 CSS 링크를 꽂아넣음
            if re.search(r'</head>', content, re.IGNORECASE):
                new_content = re.sub(r'(</head>)', f"{link_tag}\\1", content, flags=re.IGNORECASE)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                success_count += 1
                
        except Exception as e:
            print(f"⚠️ 오류 ({os.path.basename(file_path)}): {e}")

    print("==================================================")
    print(f"🎉 작업 완료! 성공: {success_count}개 문서 | 🚫 제외됨: {skip_count}개 문서")

# ==========================================
# 실행 부분
# ==========================================
wiki_path = "." # 현재 폴더

setup_external_fonts(wiki_path)