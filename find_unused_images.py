import os
import json

# 경로 설정 (필요시 수정)
project_dir = '.'       # 프로젝트 루트 디렉토리
img_dir = '이미지'    # 이미지 폴더 경로

# 1. 이미지 폴더 내 모든 파일명 수집
all_images = set()
if os.path.exists(img_dir):
    for root, dirs, files in os.walk(img_dir):
        for file in files:
            all_images.add(file)

# 2. 프로젝트 내의 모든 코드/텍스트 파일(html, js, css 등)의 내용을 읽어오기
# 이미지 폴더나 git 등 불필요한 시스템 폴더는 제외하고 탐색
exclude_dirs = {img_dir, '.git', 'node_modules'}
code_contents = []

for root, dirs, files in os.walk(project_dir):
    # 제외할 디렉토리 필터링
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    
    for file in files:
        # 소스 코드 및 데이터 파일 확장자 지정 (필요시 추가 가능)
        if file.endswith(('.html', '.js', '.css', '.json', '.txt', '.md')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    code_contents.append(f.read())
            except Exception:
                pass

# 3. 이미지 파일명이 어떤 소스 파일(HTML, JS, CSS 등) 내용에든 포함되어 있는지 확인
unused_images = set()
for img in all_images:
    is_used = False
    for content in code_contents:
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

print(f"=== 완료 ===")
print(f"총 {len(unused_images)}개의 미사용 이미지가 발견되어 '{output_filename}' 파일로 저장되었습니다.")