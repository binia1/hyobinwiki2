import os
import re

# 기존 푸터를 지우고 그 자리에 들어갈 깔끔한 교체용 코드 (컨테이너 + JS 호출)
new_snippet = """<div id="footer-container"></div>
<script src="assets/load-footer.js"></script>"""

# HTML 파일들이 있는 폴더 경로 (현재 폴더면 "." 유지)
directory = "."
updated_count = 0
skipped_files = []

print("🔥 효빈위키 2000개 문서 푸터 일괄 교체 작업 시작...\n")

# 폴더 내의 모든 HTML 파일 순회
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        
        # 원본 파일 읽기
        with open(filepath, "r", encoding="utf-8") as file:
            content = file.read()
        
        # 정규식으로 <footer ... > 부터 </footer> 까지 모두 찾아서 새 스니펫으로 교체
        new_content, num_subs = re.subn(r'<footer.*?</footer>', new_snippet, content, flags=re.DOTALL | re.IGNORECASE)
        
        # 교체된 부분이 있다면 파일 덮어쓰기
        if num_subs > 0:
            with open(filepath, "w", encoding="utf-8") as file:
                file.write(new_content)
            updated_count += 1
        else:
            # 푸터를 찾지 못한 경우 목록에 추가
            skipped_files.append(filename)

print(f"\n✅ 작업 완료! 총 {updated_count}개의 파일에 자동화 코드를 꽂아 넣었습니다.")

# 푸터를 찾지 못한 파일 목록을 로그 파일로 생성
if skipped_files:
    log_filename = "skipped_footer_log.txt"
    with open(log_filename, "w", encoding="utf-8") as log_file:
        log_file.write("--- 푸터 태그를 찾지 못해 수정되지 않은 파일 목록 ---\n\n")
        for skipped_file in skipped_files:
            log_file.write(f"{skipped_file}\n")
    print(f"⚠️ {len(skipped_files)}개의 파일에서 푸터 태그를 찾지 못해 건너뛰었습니다. (목록: {log_filename} 확인 요망)")
else:
    print("🎉 All good! 누락 없이 모든 파일의 푸터 교체가 완료되었습니다.")