import os
from PIL import Image

# 현재 폴더 안의 '이미지' 폴더를 자동으로 찾습니다.
source_folder = "./이미지"
output_folder = "./이미지_고화질"

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for filename in os.listdir(source_folder):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
        img_path = os.path.join(source_folder, filename)
        base_name = os.path.splitext(filename)[0]
        out_path = os.path.join(output_folder, f"{base_name}.webp")
        
        try:
            with Image.open(img_path) as img:
                img.save(out_path, 'WEBP', quality=90) # 화질 100% 유지, 용량만 다이어트
                print(f"고화질 변환 완료: {base_name}.webp")
        except Exception as e:
            print(f"오류 발생 ({filename}): {e}")

print("=========================================")
print("완료! '이미지_고화질' 폴더를 확인하세요.")