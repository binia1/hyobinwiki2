import os
from bs4 import BeautifulSoup

def main():
    # 기본 스크립트 목록
    basic_scripts = [
        "assets/wiki_index.js",
        "assets/hb_wiki_core.js",
        "assets/hb_index_scripts.js",
        "assets/jana.js"
    ]
    
    custom_files = []
    
    print("검색 중...")
    for filename in os.listdir('.'):
        if filename.endswith('.html'):
            with open(filename, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')
                
                is_custom = False
                for script in soup.find_all('script'):
                    src = script.get('src')
                    
                    # src가 있는데 기본 목록에 없다면 커스텀
                    if src and src not in basic_scripts:
                        is_custom = True
                        break
                    
                    # src가 없는데(인라인) 내용이 있다면 커스텀
                    if not src and script.string and script.string.strip():
                        is_custom = True
                        break
                
                if is_custom:
                    custom_files.append(filename)
    
    # 결과 저장 및 출력
    with open('custom_js_files.txt', 'w', encoding='utf-8') as f:
        for file in custom_files:
            f.write(file + '\n')
            print(f"발견된 파일: {file}")
            
    print(f"\n총 {len(custom_files)}개의 파일을 찾았습니다.")
    print("목록은 'custom_js_files.txt'에 저장되었습니다.")

if __name__ == "__main__":
    main()