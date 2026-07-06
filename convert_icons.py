import os
import cairosvg

# 폴더 경로 설정
source_dir = '효빈도시철도_캐릭터_퍼스널아이콘'
output_dir = '이미지'

# 출력 폴더가 없으면 자동 생성
if not os.path.exists(output_dir):
    os.makedirs(output_dir)
    print(f"'{output_dir}' 폴더를 생성했습니다.")

# 폴더 내 모든 svg 파일 변환
count = 0
for file in os.listdir(source_dir):
    if file.lower().endswith('.svg'):
        # 파일명에서 확장자 제거
        name = os.path.splitext(file)[0]
        
        input_path = os.path.join(source_dir, file)
        output_path = os.path.join(output_dir, f"{name}.png")
        
        # SVG to PNG 변환
        try:
            cairosvg.svg2png(url=input_path, write_to=output_path)
            print(f"변환 성공: {name}.png")
            count += 1
        except Exception as e:
            print(f"변환 실패: {file} - 오류: {e}")

print(f"\n작업 완료: 총 {count}개의 아이콘이 '이미지/' 폴더로 저장되었습니다.")