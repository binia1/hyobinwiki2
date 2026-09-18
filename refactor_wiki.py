import os
import shutil
import re

def perfect_refactor():
    work_dir = "."
    js_dir = os.path.join(work_dir, "js")
    os.makedirs(js_dir, exist_ok=True)

    # 오직 개별 대학 정보인 gradient-box부터 details까지만 핀셋으로 잡습니다.
    target_pattern = re.compile(r'(<div class="gradient-box">.*?</details>)', re.DOTALL)

    html_files = [f for f in os.listdir(work_dir) if f.endswith(".html")]
    processed_count = 0

    for filename in html_files:
        filepath = os.path.join(work_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if 'class="gradient-box"' not in content:
            continue

        match = target_pattern.search(content)
        if match:
            extracted_html = match.group(1)
            base_name = os.path.splitext(filename)[0]
            js_filename = f"{base_name}.js"
            
            # 원본 보호용 백업 생성
            shutil.copy2(filepath, filepath + '.bak')

            # JS 생성: 추가 div 없이, 스크립트가 호출된 바로 그 자리에 렌더링되도록 함
            safe_html = extracted_html.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')
            js_content = f"document.currentScript.insertAdjacentHTML('beforebegin', `\n{safe_html}\n`);"
            
            with open(os.path.join(js_dir, js_filename), 'w', encoding='utf-8') as f:
                f.write(js_content)
            
            # HTML 치환: 기존 코드를 통째로 빼내고 딱 스크립트 한 줄만 그 자리에 넣음
            replacement_tag = f'<script src="js/{js_filename}"></script>'
            new_content = target_pattern.sub(replacement_tag, content, count=1)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
                
            print(f"✅ 완벽 분리 완료: {filename} -> js/{js_filename} 생성됨")
            processed_count += 1

    print(f"\n🎉 총 {processed_count}개의 파일이 꼬임 없이 성공적으로 분리되었습니다.")

if __name__ == "__main__":
    perfect_refactor()