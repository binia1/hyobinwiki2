import os
import glob
import re

def fix_hardcoded_classes(wiki_folder_path):
    # 🚫 제외할 키워드 목록 (안전 구역)
    exclude_keywords = [
        '블라인드', '인스타그램', 'instagram', 'profile', 'sns',
        '블로그', 'blog', '유튜브', 'youtube', '페이스북', 'facebook',
        '엑스', '트위터', 'twitter', 'hj몰_공식홈페이지'
    ]

    target_files = glob.glob(os.path.join(wiki_folder_path, "**/*.html"), recursive=True)
    success_count = 0
    skip_count = 0

    print(f"📁 총 {len(target_files)}개의 문서에서 악성 하드코딩 폰트(txt-lvl-1, wiki-btn) 제거를 시작합니다...")

    for file_path in target_files:
        file_name_lower = os.path.basename(file_path).lower()
        
        # 제외 대상 필터링
        if any(keyword in file_name_lower for keyword in exclude_keywords):
            skip_count += 1
            continue

        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # 1. .txt-lvl-1 내부의 font-size(무엇이든)를 var(--font-h1) !important 로 변경
            # 정규식을 써서 공백이나 크기 숫자가 조금씩 달라도 완벽하게 잡아냅니다.
            content = re.sub(
                r'(\.txt-lvl-1\s*\{[^}]*)font-size\s*:\s*[^;]+;([^}]*\})',
                r'\1font-size: var(--font-h1) !important;\2',
                content
            )

            # 2. .wiki-btn 내부의 font-size(무엇이든)를 var(--font-small) 로 변경
            content = re.sub(
                r'(\.wiki-btn\s*\{[^}]*)font-size\s*:\s*[^;]+;([^}]*\})',
                r'\1font-size: var(--font-small);\2',
                content
            )

            # 내용이 수정되었다면 덮어쓰기
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                success_count += 1
                
        except Exception as e:
            print(f"⚠️ 오류 ({os.path.basename(file_path)}): {e}")

    print("==================================================")
    print(f"🎉 작업 완료! 수정된 문서: {success_count}개 | 🚫 안전하게 넘어간 문서: {skip_count}개")
    print("💡 이제 제목과 버튼 크기마저도 완벽하게 외부 CSS의 통제를 받습니다!")

# ==========================================
# 실행 부분
# ==========================================
wiki_path = "." # 현재 폴더

fix_hardcoded_classes(wiki_path)