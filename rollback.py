import os
import shutil

for filename in os.listdir("."):
    if filename.endswith(".html.bak"):
        original_name = filename.replace(".html.bak", ".html")
        shutil.copy2(filename, original_name)
        print(f"🔄 복구 완료: {original_name}")
print("모든 파일이 스크립트 실행 전으로 완벽히 복구되었습니다!")