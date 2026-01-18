import os
import re
from pathlib import Path

# 삽입할 스크립트 2줄
INJECT = (
    '    <script src="assets/wiki_index.js"></script>\n'
    '    <script src="assets/hb_wiki_core.js"></script>\n'
)

# 이미 삽입됐는지 확인하는 키워드
NEEDLES = ["assets/wiki_index.js", "assets/hb_wiki_core.js"]

def has_inject(text: str) -> bool:
    t = text.lower()
    return all(n.lower() in t for n in NEEDLES)

def inject_into_html(text: str) -> str:
    if has_inject(text):
        return text

    # </body> 앞에 넣기 (대소문자, 공백 대응)
    m = re.search(r"</body\s*>", text, flags=re.IGNORECASE)
    if m:
        idx = m.start()
        return text[:idx] + "\n" + INJECT + text[idx:]

    # </html>만 있는 경우 그 앞에 넣기
    m = re.search(r"</html\s*>", text, flags=re.IGNORECASE)
    if m:
        idx = m.start()
        return text[:idx] + "\n" + INJECT + "\n" + text[idx:]

    # 아무것도 없으면 맨 끝에 추가
    return text + "\n" + INJECT

def main(root: str):
    root_path = Path(root).resolve()
    html_files = list(root_path.rglob("*.html"))

    if not html_files:
        print("HTML 파일을 찾지 못했습니다:", root_path)
        return

    changed = 0
    skipped = 0

    for p in html_files:
        try:
            original = p.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            # utf-8이 아니면 cp949로 재시도 (윈도우 흔함)
            original = p.read_text(encoding="cp949")
            encoding = "cp949"
        else:
            encoding = "utf-8"

        if has_inject(original):
            skipped += 1
            continue

        updated = inject_into_html(original)

        if updated != original:
            # 백업 생성
            backup = p.with_suffix(p.suffix + ".bak")
            if not backup.exists():
                backup.write_text(original, encoding=encoding)

            p.write_text(updated, encoding=encoding)
            changed += 1

    print(f"완료: 삽입 {changed}개 / 이미 존재(스킵) {skipped}개")
    print("백업은 .html.bak 로 생성됩니다(처음 1회).")

if __name__ == "__main__":
    # 현재 폴더 기준으로 실행되게 기본값 "."
    main(".")
