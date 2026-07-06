import os
from PIL import Image

def convert_specific_images_to_webp(folder_path):
    # '이미지' 폴더가 존재하는지 확인
    if not os.path.exists(folder_path):
        print(f"오류: '{folder_path}' 폴더를 찾을 수 없습니다.")
        return

    # 폴더 내 모든 파일 탐색
    for filename in os.listdir(folder_path):
        # '_승강장.png'로 끝나는 파일만 타겟팅
        if filename.endswith("_승강장.png"):
            file_path = os.path.join(folder_path, filename)
            
            try:
                with Image.open(file_path) as img:
                    # 확장자만 바꿔서 새 이름 생성
                    webp_filename = filename.replace(".png", ".webp")
                    webp_path = os.path.join(folder_path, webp_filename)
                    
                    # 화질 저하가 걱정된다면 quality를 90 정도로 설정
                    img.save(webp_path, "WEBP", quality=90)
                    print(f"변환 성공: {filename} -> {webp_filename}")
            except Exception as e:
                print(f"변환 실패 ({filename}): {e}")

# '이미지' 폴더를 대상으로 실행
convert_specific_images_to_webp("이미지")