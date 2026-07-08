import os
import re

# 우리가 일괄 적용할 새로운 푸터 HTML 코드 (가독성 개선 완료)
# body 텍스트를 text-gray-700(라이트) / text-gray-200(다크)로 높여 가독성 확보
new_footer_html = """<footer class="mt-20 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 py-8 text-xs text-gray-700 dark:text-gray-200">
    <div class="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div class="flex-shrink-0 pt-1">
            <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/kr/" target="_blank" rel="noopener">
                <img src="https://licensebuttons.net/l/by-nc-sa/3.0/88x31.webp" alt="CC BY-NC-SA" class="w-[88px] h-[31px]">
            </a>
        </div>

        <div class="text-center md:text-left leading-relaxed">
            <p class="mb-2">
                <span class="font-bold text-gray-900 dark:text-white text-sm">HyobinWiki</span><br>
                이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/kr/" target="_blank" class="font-bold hover:underline">CC BY-NC-SA 2.0 KR</a>에 따라 이용할 수 있습니다. (단, 라이선스가 명시된 일부 문서 및 삽화 제외)<br>
                기여하신 문서의 저작권은 각 기여자에게 있으며, 각 기여자는 기여하신 부분의 저작권을 갖습니다.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
                효빈위키는 백과사전이 아니며 검증되지 않았거나, 편향적이거나, 잘못된 서술이 있을 수 있습니다.<br>
                효빈위키는 위키위키입니다. 여러분이 직접 문서를 고칠 수 있으며, 다른 사람의 의견을 원할 경우 직접 토론을 발제할 수 있습니다.
            </p>
        </div>
    </div>
</footer>"""

# HTML 파일들이 있는 폴더 경로 (현재 폴더면 "." 유지)
directory = "."
updated_count = 0
skipped_files = [] # 푸터를 찾지 못한 파일 목록을 저장할 리스트

# 폴더 내의 모든 HTML 파일 순회
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        
        # 원본 파일 읽기
        with open(filepath, "r", encoding="utf-8") as file:
            content = file.read()
        
        # 정규식으로 <footer ... > 부터 </footer> 까지 모두 찾아서 새 푸터로 교체
        new_content, num_subs = re.subn(r'<footer.*?</footer>', new_footer_html, content, flags=re.DOTALL | re.IGNORECASE)
        
        # 교체된 부분이 있다면 파일 덮어쓰기
        if num_subs > 0:
            with open(filepath, "w", encoding="utf-8") as file:
                file.write(new_content)
            print(f"✅ 수정 완료: {filename}")
            updated_count += 1
        else:
            # 푸터를 찾지 못한 경우 목록에 추가
            skipped_files.append(filename)

print(f"\n🚀 총 {updated_count}개의 파일 푸터를 성공적으로 갈아치웠어!")

# 푸터를 찾지 못한 파일 목록을 로그 파일로 생성
if skipped_files:
    log_filename = "skipped_footer_log.txt"
    with open(log_filename, "w", encoding="utf-8") as log_file:
        log_file.write("--- 푸터 태그를 찾지 못해 수정되지 않은 파일 목록 ---\n\n")
        for skipped_file in skipped_files:
            log_file.write(f"{skipped_file}\n")
    print(f"⚠️ {len(skipped_files)}개의 파일에서 푸터 태그를 찾지 못해 건너뛰었습니다. (목록: {log_filename})")
else:
    print("All good! 모든 파일에서 푸터 태그를 찾아 수정했습니다.")