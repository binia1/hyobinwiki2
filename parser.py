import os
from bs4 import BeautifulSoup

def main():
    report_file = 'structure_report.txt'
    # 이 스크립트들은 '기본'이므로 제외 대상
    basic_scripts = [
        "assets/wiki_index.js",
        "assets/hb_wiki_core.js",
        "assets/hb_index_scripts.js",
        "assets/jana.js"
    ]
    
    count = 0
    with open(report_file, 'w', encoding='utf-8') as f:
        f.write("커스텀 JS 연동 파일 구조 분석 리포트\n\n")
        
        for filename in os.listdir('.'):
            if filename.endswith('.html'):
                with open(filename, 'r', encoding='utf-8') as html_file:
                    soup = BeautifulSoup(html_file, 'html.parser')
                
                is_custom_js = False
                
                # 파일 내 모든 script 태그 검사
                for script in soup.find_all('script'):
                    src = script.get('src')
                    
                    # 1. 외부 스크립트인데 기본 목록에 없는 경우
                    if src and src not in basic_scripts:
                        is_custom_js = True
                    # 2. 인라인 스크립트인 경우 (<script>내용</script>)
                    elif not src and script.string and script.string.strip():
                        is_custom_js = True
                
                # 커스텀 JS가 있는 파일만 구조 분석 진행
                if is_custom_js:
                    count += 1
                    f.write(f"--- 파일: {filename} (커스텀 JS 감지됨) ---\n")
                    
                    targets = ['header', 'main', 'section', 'nav', 'div']
                    for tag in soup.find_all(targets):
                        if tag.name == 'div' and not (tag.get('id') or tag.get('class')):
                            continue
                        
                        tag_id = tag.get('id', '')
                        tag_class = " ".join(tag.get('class', []))
                        f.write(f"[{tag.name.upper()}] ID: {tag_id} | Class: {tag_class}\n")
                    f.write("\n")

    print(f"완료. 커스텀 JS가 포함된 파일 {count}개를 분석하여 {report_file}에 저장했습니다.")

if __name__ == "__main__":
    main()