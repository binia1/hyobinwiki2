import os

# 광고 스크립트 코드
ad_script = '<script src="ad_logic.js"></script>\n</head>'

# HTML 파일들이 있는 폴더 경로
wiki_folder = './' 

for root, dirs, files in os.walk(wiki_folder):
    for file in files:
        if file.endswith('.html'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 이미 스크립트가 삽입되어 있는지 확인 (중복 방지)
            if 'ad_logic.js' not in content:
                content = content.replace('</head>', ad_script)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated: {file}")

print("모든 문서의 광고 스크립트 삽입 완료!")