import os
import json
import unicodedata
import urllib.parse

# 경로 설정
project_dir = '.'       
img_dir = '이미지'    

# 1. 이미지 폴더 내 모든 파일명 수집 (NFC 정규화 적용)
all_images = set()
if os.path.exists(img_dir):
    for root, dirs, files in os.walk(img_dir):
        for file in files:
            # 한글 자소 분리 현상을 방지하기 위해 NFC로 통일
            normalized_file = unicodedata.normalize('NFC', file)
            all_images.add(normalized_file)

# 2. 프로젝트 내의 모든 코드/텍스트 파일 내용을 읽어오기
exclude_dirs = {img_dir, '.git', 'node_modules'}
code_contents = []

for root, dirs, files in os.walk(project_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    
    for file in files:
        if file.endswith(('.html', '.js', '.css', '.json', '.txt', '.md')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # 파일 내용의 URL 인코딩(%XX)을 풀고, 한글을 NFC로 정규화
                    decoded_content = urllib.parse.unquote(content)
                    normalized_content = unicodedata.normalize('NFC', decoded_content)
                    code_contents.append(normalized_content)
            except Exception:
                pass

# 3. 이미지 파일명이 소스 파일 내용에 포함되어 있는지 확인 (대소문자 무시를 원할 경우 lower() 사용 권장)
unused_images = set()
for img in all_images:
    is_used = False
    for content in code_contents:
        # 정확한 비교를 원한다면 이대로, 확장자 대소문자까지 무시하려면 img.lower() in content.lower()
        if img in content:
            is_used = True
            break
    if not is_used:
        unused_images.add(img)

# 4. 결과를 JSON 파일로 저장
output_data = {
    "total_unused_count": len(unused_images),
    "unused_images": sorted(list(unused_images))
}

output_filename = "unused_images.json"
with open(output_filename, 'w', encoding='utf-8') as f:
    json.dump(output_data, f, ensure_ascii=False, indent=4)

print("=== 완료 ===")
print(f"총 {len(unused_images)}개의 미사용 이미지가 발견되어 '{output_filename}' 파일로 저장되었습니다.")