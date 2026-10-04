import os
import re

def update_js_json_inline_links(base_dir=".", target_folder="효빈블라인드_모음"):
    # 정규식 패턴 설명:
    # 1. (['"]) : 작은따옴표나 큰따옴표로 시작
    # 2. (?<!효빈블라인드_모음/) : 단, 앞에 이미 '효빈블라인드_모음/'이 붙어있지 않아야 함 (중복 변경 방지)
    # 3. 효빈블라인드(.*?)\.html : '효빈블라인드[숫자나문자].html' 형태 매칭
    # 4. \1 : 처음에 열었던 따옴표와 동일한 따옴표로 닫힘
    pattern = re.compile(r"""(['"])(?<!효빈블라인드_모음/)효빈블라인드(.*?)\.html\1""")
    
    updated_files = 0
    
    # os.walk를 사용하여 assets, js 등 하위 폴더까지 전부 스캔
    for root, dirs, files in os.walk(base_dir):
        # 이미 이동된 타겟 폴더 안의 파일들은 경로를 수정할 필요가 없으므로 건너뜀
        if target_folder in root:
            continue
            
        for file in files:
            # HTML(onclick 등), JS, JSON 파일만 타겟으로 지정
            if file.endswith(('.html', '.js', '.json')):
                file_path = os.path.join(root, file)
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    # 패턴 매칭 및 치환 (찾은 문자열 사이에 타겟 폴더명 삽입)
                    # 예: "효빈블라인드11.html" -> "효빈블라인드_모음/효빈블라인드11.html"
                    new_content, count = pattern.subn(r'\1' + target_folder + r'/효빈블라인드\2.html\1', content)
                    
                    if count > 0:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"✅ 수정됨 ({count}건): {file_path}")
                        updated_files += 1
                except Exception as e:
                    print(f"⚠️ 읽기 오류 ({file_path}): {e}")

    print(f"\n🎉 총 {updated_files}개의 파일(JS/JSON/HTML)에서 인라인 링크 및 데이터 업데이트가 완료되었습니다.")

if __name__ == "__main__":
    # 스크립트 실행 전 전체 폴더 백업 필수
    update_js_json_inline_links(".", "효빈블라인드_모음")