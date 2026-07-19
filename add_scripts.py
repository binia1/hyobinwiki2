import os
import re

# 문서에 무조건 들어있어야 하는 필수 스크립트 목록
REQUIRED_SCRIPTS = [
    '<script src="assets/wiki_index.js"></script>',
    '<script src="assets/hb_wiki_core.js"></script>',
    '<script src="assets/hb_index_scripts.js"></script>',
    '<script src="assets/jana.js"></script>',
    '<script src="ad_logic.js"></script>',
    '<script src="assets/load-footer.js"></script>'
]


def check_and_add_scripts():
    html_files = [f for f in os.listdir(".") if f.endswith(".html")]
    if not html_files:
        print("❌ 현재 폴더에 .html 파일이 없습니다. 경로를 확인해주세요.")
        return

    modified_count = 0
    already_clean_count = 0

    for filename in html_files:
        filepath = os.path.join(".", filename)

        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # 현재 문서에 빠져있는 스크립트가 있는지 확인
        missing_scripts = []
        for script in REQUIRED_SCRIPTS:
            # src 경로(예: assets/wiki_index.js)만 추출해서 문서 내에 있는지 검사
            script_src = re.search(r'src="([^"]+)"', script).group(1)
            if script_src not in content:
                missing_scripts.append(script)

        # 빠진 스크립트가 있다면 삽입 작업 진행
        if missing_scripts:
            # 삽입할 스크립트 텍스트 생성 (들여쓰기 포함)
            scripts_to_insert = (
                "\n    " + "\n    ".join(missing_scripts) + "\n</body>"
            )

            # </body> 태그 대소문자 구분 없이 찾아서 바로 위에 삽입
            if re.search(r"</body>", content, re.IGNORECASE):
                new_content = re.sub(
                    r"</body>",
                    lambda _: scripts_to_insert,
                    content,
                    count=1,
                    flags=re.IGNORECASE,
                )
            else:
                # </body> 태그가 혹시라도 없는 비정상 문서라면 맨 끝에 그냥 추가
                new_content = content + "\n    " + "\n    ".join(missing_scripts)

            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)

            print(
                f"🔧 [{filename}] 수정 완료! (추가된 스크립트: {len(missing_scripts)}개)"
            )
            modified_count += 1
        else:
            already_clean_count += 1

    print("\n" + "=" * 50)
    print(
        f"✅ 작업 완료! 총 {len(html_files)}개 문서 중 {modified_count}개 파일에 누락된 스크립트 자동 추가됨."
    )
    print(f"👍 (이미 4개 스크립트가 다 들어있던 문서: {already_clean_count}개)")
    print("=" * 50)


if __name__ == "__main__":
    check_and_add_scripts()