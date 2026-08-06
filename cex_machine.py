import os
import hashlib
import json

img_dir = '이미지'

# 파일의 고유 지문(Hash)을 추출하는 함수
def get_file_hash(filepath):
    with open(filepath, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()

hashes = {}
duplicates_mapping = {}
deleted_count = 0
saved_bytes = 0

print("🔍 중복 이미지 스캔을 시작합니다...\n")

for filename in os.listdir(img_dir):
    if not filename.endswith('.webp'):
        continue
        
    filepath = os.path.join(img_dir, filename)
    file_hash = get_file_hash(filepath)
    
    if file_hash in hashes:
        # 똑같은 이미지를 발견했을 때!
        original_filename = hashes[file_hash]
        
        # 확장자를 뗀 이름들 추출
        duplicate_name = os.path.splitext(filename)[0]
        original_name = os.path.splitext(original_filename)[0]
        
        # 매핑 사전에 기록 (예: "승무본부의 기준점" -> "고나미")
        duplicates_mapping[duplicate_name] = original_name
        
        # 중복 파일 삭제 및 절약된 용량 계산
        saved_bytes += os.path.getsize(filepath)
        os.remove(filepath)
        deleted_count += 1
        print(f"🗑️ 삭제됨: [{filename}] -> [{original_filename}] 원본으로 대체")
    else:
        # 처음 보는 이미지면 해시 기록
        hashes[file_hash] = filename

print("\n=== 🎉 복제본 청소 완료 ===")
print(f"총 {deleted_count}개의 중복 파일 삭제 (절약된 용량: {saved_bytes / (1024*1024):.2f} MB)")
print("\n▼ 아래의 코드를 복사해서 HTML 파일의 자바스크립트에 붙여넣으세요 ▼\n")

# JS에서 바로 쓸 수 있는 객체 형태로 출력
print("const imageMapping = " + json.dumps(duplicates_mapping, ensure_ascii=False, indent=4) + ";")