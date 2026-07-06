import os
import json
import random
import glob
from bs4 import BeautifulSoup

# 설정
TARGET_FOLDER = "./wiki_pages/"
OUTPUT_JS_FILE = "region_data.js"

# 지역 특성에 맞는 키워드별 댓글 사전 (생성 로직 핵심)
THEMES = {
    "철도": ["철도 연장 소식 듣고 눈물 났습니다. 드디어 소외지역 탈출인가요?", "교통망 확충이 너무 시급합니다. 2호선 연장 제발 부탁드려요."],
    "복지": ["청년 일자리 관련해서 구체적인 안이 더 있으면 좋겠어요.", "노인 복지 예산이 더 많이 투입되어야 합니다. 부탁드려요."],
    "축제": ["이번 축제 라인업 대박이네요! 무조건 갑니다.", "축제 때 우리 지역 특산물 부스도 나오나요?"],
    "산업": ["우리 지역에 대기업 좀 유치해 주세요. 먹고 살기 힘듭니다.", "첨단산업지구 조성 소식 들었는데 진짜 기대되네요."],
    "일반": ["이번 정책은 진짜 우리 지역을 위한 거네요. 잘 부탁드립니다!", "시청 홈페이지 UI 좀 개선해주세요. 모바일에서 너무 불편합니다."]
}

def generate_dynamic_comments(content, city_name):
    """HTML 본문을 분석하여 관련성 높은 댓글 12개 이상 생성"""
    is_county = "군청" in city_name or "탄성군" in city_name
    
    comments = []
    found_themes = []
    
    # 1. 키워드 기반 댓글 생성 (문서 내용 분석)
    for theme, sentences in THEMES.items():
        if theme in content:
            found_themes.append(theme)
            for s in sentences:
                comments.append({"author": f"시민_{random.randint(1000, 9999)}", "text": s, "isVillain": False})
    
    # 2. 부족하면 일반 댓글로 채우기
    while len(comments) < 10:
        cat = random.choice(list(THEMES.keys()))
        comments.append({"author": f"시민_{random.randint(1000, 9999)}", "text": random.choice(THEMES[cat]), "isVillain": False})
        
    # 3. 빌런 티키타카 강제 주입
    villain_comments = [
        {"author": "전직시장_윤대환", "text": "에잉... 내 두청운수나 돌려내라! 이딴 게 무슨 행정이야!", "isVillain": True, "replies": [
            {"author": "시청_관리자", "text": "금일부로 해당 계정은 '강제 노역' 추가 처분되었습니다."}
        ]},
        {"author": "진짜왕_윤재훈", "text": "아오 빡쳐! 내 땅 다 사놨어야 했는데 시청놈들 때문에 망했네!", "isVillain": True, "replies": [
            {"author": "시민_참교육", "text": "땅 투기하다 망한 놈이 어디서 짖어?"}
        ]}
    ]
    comments.extend(villain_comments)
    return comments[:14]

def parse_html_to_data(file_path):
    filename = os.path.basename(file_path)
    base_name = filename.replace(".html", "")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')
            # 모든 텍스트 추출 (h1~h6, p, li 등 전부)
            text_parts = [t.get_text(strip=True) for t in soup.find_all(['h1', 'h2', 'h3', 'p', 'li', 'td'])]
            full_content = "\n".join(text_parts)
    except Exception as e:
        print(f"❌ 읽기 실패: {filename}, 원인: {e}")
        return None, None

    official_name = base_name if base_name.endswith(('청', '시', '군', '구')) else base_name + "청"
    
    data = {
        "name": official_name,
        "desc": full_content[:200] + "...",
        "comments": generate_dynamic_comments(full_content, official_name)
    }
    return official_name, data

# 메인 실행부
if __name__ == "__main__":
    files = glob.glob(os.path.join(TARGET_FOLDER, "*.html"))
    if not files:
        print("❌ 폴더에 HTML 파일이 없습니다!")
        exit()
        
    js_content = "const regionData = {\n"
    for i, f in enumerate(files):
        name, data = parse_html_to_data(f)
        if not data: continue
        js_content += f'    "{name}": {json.dumps(data, ensure_ascii=False, indent=4)}'
        js_content += ",\n" if i < len(files) - 1 else "\n"
    
    js_content += "};"
    
    with open(OUTPUT_JS_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"🎉 성공! {len(files)}개 지자체 분석 완료. 'region_data.js'를 확인하세요.")