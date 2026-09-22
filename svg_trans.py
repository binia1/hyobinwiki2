import os
import shutil
import re # 정규식 모듈 추가

project_dir = '.'
img_dir = '이미지'
svg_dir = os.path.join(img_dir, 'svg')

# 1. 이미지/svg/ 폴더가 없으면 생성
os.makedirs(svg_dir, exist_ok=True)

# 2. 이미지/ 폴더 바로 아래에 있는 .svg 파일들 찾아서 싹 다 이동
for file in os.listdir(img_dir):
    file_path = os.path.join(img_dir, file)
    if os.path.isfile(file_path) and file.lower().endswith('.svg'):
        shutil.move(file_path, os.path.join(svg_dir, file))

# 3. 프로젝트 내 소스 코드 경로 텍스트 일괄 치환 (물리적 파일 유무 무관!)
exclude_dirs = {img_dir, '.git', 'node_modules'}

for root, dirs, files in os.walk(project_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    
    for file in files:
        if file.endswith(('.html', '.js', '.css', '.json', '.md')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 핵심: 실제 파일이 있든 없든, 문서 안에 '이미지/어쩌구.svg' 패턴이 있으면 무조건 치환
                # [^/]+ 는 슬래시(/)가 없는 문자열을 의미하므로, 이미 '이미지/svg/어쩌구.svg'로 바뀐 건 무시함
                new_content, count = re.subn(r'이미지/([^/]+\.svg)', r'이미지/svg/\1', content, flags=re.IGNORECASE)
                
                # 변경된 내용이 있으면 덮어쓰기
                if count > 0:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"[{file}] 파일 내 경로 {count}곳 수정 완료")
                    
            except Exception as e:
                print(f"[{file}] 처리 중 오류: {e}")

print("=== 완료: SVG 파일 이동 및 문서 내 경로 일괄 치환이 끝났습니다. ===")