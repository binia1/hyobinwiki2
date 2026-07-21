import os
import re
import json

target_folder = '.'

unique_classes = set()
file_count = 0

print("HTML 파일 스캔 중... 이번엔 터미널 폭파 안 시킵니다^^ 잠시만요...")

for root, dirs, files in os.walk(target_folder):
    for file in files:
        if file.endswith('.html'):
            file_count += 1
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                    # <a>, <span>, <sup> 태그 전부 다 찾기
                    tags = re.findall(r'<(?:a|span|sup)[^>]*>', content, re.IGNORECASE)
                    
                    for tag in tags:
                        # 태그 안에 data-tooltip이 있거나 클래스에 fn, tooltip 같은 냄새가 나면
                        if 'data-tooltip' in tag.lower() or 'fn' in tag.lower() or 'tooltip' in tag.lower():
                            # 딱 class 이름만 쏙 뽑아냄
                            class_match = re.search(r'class=["\']([^"\']+)["\']', tag, re.IGNORECASE)
                            if class_match:
                                # 여러 클래스가 띄어쓰기로 묶여있을 수 있으니 쪼개서 넣음
                                classes = class_match.group(1).split()
                                for c in classes:
                                    unique_classes.add(c)
            except Exception:
                pass

# JSON으로 예쁘게 포장해서 저장할 데이터
result_data = {
    "scanned_files_count": file_count,
    "found_classes": list(unique_classes)
}

# json 파일로 저장
with open('footnote_classes.json', 'w', encoding='utf-8') as f:
    json.dump(result_data, f, indent=4, ensure_ascii=False)

print("-" * 50)
print(f"📁 스캔 완료! 총 {file_count}개 문서 확인됨.")
print(f"✅ 'footnote_classes.json' 파일이 생성되었습니다. 열어서 클래스명들 확인해 보세요!")