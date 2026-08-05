import os
import re

HTML_FILE = "틀_뷰어_SPA.html"

def update_spa_viewer():
    print("=" * 50)
    print(" 🛠 효빈위키 SPA 뷰어 동적 스크립트 자동 추가 툴 🛠 ")
    print("=" * 50)

    if not os.path.exists(HTML_FILE):
        print(f"[오류] 같은 폴더에 '{HTML_FILE}' 파일이 없습니다.")
        return

    # 1. 정보 입력받기
    js_name = input("1. JS 파일명 입력 (확장자 .js 제외, 예: 빈주4호선_노선도): ").strip()
    folder_path = input("2. 폴더 경로 입력 (assets/, js/, 혹은 루트면 그냥 엔터): ").strip()
    title = input(f"3. 뷰어에 표시될 공식 문서 제목 (예: 틀:빈주 4호선 노선도): ").strip()
    
    # 키워드 기반 자동 분류 추천
    default_cat = "둘러보기 틀"
    if "행정" in js_name: default_cat = "행정구역 틀"
    elif "노선" in js_name or "교통" in js_name: default_cat = "교통 관련 틀"
    elif "nav" in js_name.lower(): default_cat = "서브컬처 틀"
    
    category = input(f"4. 분류 카테고리 입력 (엔터 시 기본값 '{default_cat}' 적용): ").strip()
    if not category: category = default_cat

    overview = input("5. 설명문서 개요 한 줄 요약: ").strip()
    alias = input("6. 검색용 단축어/동음이의어 (예: 빈주4호선, 콤마로 여러개 가능, 없으면 엔터): ").strip()

    # 2. HTML 파일 읽기
    with open(HTML_FILE, 'r', encoding='utf-8') as f:
        html = f.read()

    # 3. 정규식을 이용한 안전한 데이터 주입 (객체의 닫는 괄호 바로 앞에 삽입)
    
    # aliasMap 업데이트
    if alias:
        aliases = [a.strip() for a in alias.split(',')]
        alias_insert = "".join([f', "{a}": "{js_name}"' for a in aliases])
        html = re.sub(r'(const\s+aliasMap\s*=\s*\{[\s\S]*?)(\s*\};)', r'\1' + alias_insert + r'\2', html)

    # searchArray 업데이트
    search_insert = f',\n            {{ "title": "{title}", "href": "#{js_name}" }}'
    html = re.sub(r'(const\s+searchArray\s*=\s*\[[\s\S]*?)(\s*\];)', r'\1' + search_insert + r'\2', html)

    # filePaths 업데이트
    filepath_insert = f', "{js_name}": "{folder_path}"'
    html = re.sub(r'(const\s+filePaths\s*=\s*\{[\s\S]*?)(\s*\};)', r'\1' + filepath_insert + r'\2', html)

    # specificDB 업데이트
    db_insert = f',\n            "{js_name}": {{ title: "{title}", categories: ["{category}"], overview: "{overview}" }}'
    html = re.sub(r'(const\s+specificDB\s*=\s*\{[\s\S]*?)(\s*\};)', r'\1' + db_insert + r'\2', html)

    # 4. HTML 파일 덮어쓰기
    with open(HTML_FILE, 'w', encoding='utf-8') as f:
        f.write(html)

    print("\n✅ 성공적으로 뷰어에 등록되었습니다!")
    print(f"👉 이제 브라우저에서 '틀_뷰어_SPA.html#{js_name}' 로 접속해 보세요.")

if __name__ == "__main__":
    update_spa_viewer()