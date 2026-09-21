import os
import shutil

project_dir = '.'
img_dir = '이미지'
svg_dir = os.path.join(img_dir, 'svg')

# 1. 이미지/svg/ 폴더가 없으면 생성
os.makedirs(svg_dir, exist_ok=True)

# 2. 이미지/ 폴더 바로 아래에 있는 .svg 파일들 찾기
svg_files_to_move = []
for file in os.listdir(img_dir):
    file_path = os.path.join(img_dir, file)
    # 하위 폴더가 아닌 파일이면서 확장자가 svg인 것만 필터링
    if os.path.isfile(file_path) and file.lower().endswith('.svg'):
        svg_files_to_move.append(file)

# 3. 파일 물리적 이동 (이미지/이름.svg -> 이미지/svg/이름.svg)
for file in svg_files_to_move:
    old_path = os.path.join(img_dir, file)
    new_path = os.path.join(svg_dir, file)
    shutil.move(old_path, new_path)

# 4. 프로젝트 내 소스 코드 경로 텍스트 일괄 치환
exclude_dirs = {img_dir, '.git', 'node_modules'}

for root, dirs, files in os.walk(project_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    
    for file in files:
        if file.endswith(('.html', '.js', '.css', '.json', '.md')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                modified = False
                for svg_file in svg_files_to_move:
                    # 웹 경로 기준 치환 (이미지/이름.svg -> 이미지/svg/이름.svg)
                    old_text = f"이미지/{svg_file}"
                    new_text = f"이미지/svg/{svg_file}"
                    
                    if old_text in content:
                        content = content.replace(old_text, new_text)
                        modified = True
                        
                # 변경된 내용이 있으면 덮어쓰기
                if modified:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"[{file}] 파일 내 경로 수정 완료")
                    
            except Exception as e:
                print(f"[{file}] 처리 중 오류: {e}")

print(f"=== 완료: 총 {len(svg_files_to_move)}개의 SVG 파일을 이동하고 경로를 수정했습니다. ===")