import os
import json
import unicodedata
import urllib.parse
import time

# 시작 시간 측정
start_time = time.time()

# 경로 설정
project_dir = '.'       
img_dir = '이미지'    

# 1. 이미지 폴더 내 모든 파일명 수집 (NFC 정규화 적용)
all_images = set()
if os.path.exists(img_dir):
    for root, dirs, files in os.walk(img_dir):
        for file in files:
            if os.path.isfile(os.path.join(root, file)):
                normalized_file = unicodedata.normalize('NFC', file)
                all_images.add(normalized_file)

print(f"총 {len(all_images)}개의 이미지를 찾았습니다. 소스 코드를 분석합니다...")

# 2. 프로젝트 내의 모든 코드/텍스트 파일 내용을 읽어와서 '하나의 거대한 문자열'로 합치기
exclude_dirs = {img_dir, '.git', 'node_modules'}
code_contents_list = []
file_count = 0

for root, dirs, files in os.walk(project_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    
    for file in files:
        # 🚨 [추가된 부분] 모든 이미지를 담고 있는 범인 파일 제외
        if file == 'image_data.js':
            continue
            
        if file.endswith(('.html', '.js', '.css', '.json', '.txt', '.md')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                    # URL 디코딩 및 NFC 정규화
                    decoded_content = urllib.parse.unquote(content)
                    normalized_content = unicodedata.normalize('NFC', decoded_content)
                    code_contents_list.append(normalized_content)
                    
                    file_count += 1
                    # 진행 상황 출력 (500개마다)
                    if file_count % 500 == 0:
                        print(f"... {file_count}개 파일 읽는 중 ...")
            except Exception:
                pass

# 리스트에 모은 모든 파일 내용을 하나의 거대한 텍스트로 결합
giant_text = "".join(code_contents_list)
print(f"총 {file_count}개의 파일 병합 완료. 미사용 이미지 색인을 시작합니다.")

# 3. 이미지 파일명이 거대한 텍스트 안에 포함되어 있는지 단 한 번씩만 확인
unused_images = set()
for img in all_images:
    if img not in giant_text:
        unused_images.add(img)

# 4. 결과를 JSON 파일로 저장
output_data = {
    "total_unused_count": len(unused_images),
    "unused_images": sorted(list(unused_images))
}

output_filename = "unused_images.json"
with open(output_filename, 'w', encoding='utf-8') as f:
    json.dump(output_data, f, ensure_ascii=False, indent=4)

end_time = time.time()

print("=== 완료 ===")
print(f"총 {len(unused_images)}개의 찐 미사용 이미지가 발견되어 '{output_filename}' 파일로 저장되었습니다.")
print(f"소요 시간: {end_time - start_time:.2f}초")