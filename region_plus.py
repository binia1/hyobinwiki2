import os
import json
import random
from bs4 import BeautifulSoup
import glob

# ==========================================
# 1. 분석할 HTML 파일들이 있는 폴더 경로 설정
# (파이썬 파일과 같은 폴더에 'wiki_pages' 폴더를 만들고 html을 넣으세요)
# 현재 폴더에 있다면 "./" 로 설정하면 됩니다.
# ==========================================
TARGET_FOLDER = "./wiki_pages/"

# 테마 색상 후보 (무작위 배정)
color_palette = [
    {"color": "#005BAC", "hover": "#00478a"}, # 파랑
    {"color": "#03c75a", "hover": "#02b351"}, # 초록
    {"color": "#ff5522", "hover": "#e64a1d"}, # 주황
    {"color": "#9856FF", "hover": "#7a3cd6"}, # 보라
    {"color": "#D81C2F", "hover": "#b51525"}, # 빨강
]

def parse_html_to_region_data(file_path):
    # 파일 이름에서 지역명 추출 (예: 약산시.html -> 약산시)
    filename = os.path.basename(file_path)
    base_name = filename.replace(".html", "")
    
    # 관공서 이름으로 변환 (약산시 -> 약산시청, 덕빈북도 -> 덕빈북도청)
    if base_name.endswith(("시", "군", "구")):
        official_name = base_name + "청"
    elif base_name.endswith("도"):
        official_name = base_name + "청"
    else:
        official_name = base_name + "청"

    # HTML 파일 읽기
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')
    except Exception as e:
        print(f"[{filename}] 읽기 실패: {e}")
        return None, None

    # --- 데이터 추출 시작 ---
    
    # 1. 소개글(desc) 추출: 본문의 첫 번째 의미 있는 <p> 태그 내용을 가져옴
    desc_text = f"시민과 함께 도약하는 {base_name}입니다." # 기본값
    for p in soup.find_all('p'):
        text = p.get_text(strip=True)
        if len(text) > 20: # 20자 이상인 첫 번째 문단을 소개글로 채택
            desc_text = text[:80] + "..." if len(text) > 80 else text
            break
            
    # 2. 이미지 파일명 추론 및 추출 (로고, 전경, 마스코트)
    logo_src = f"{base_name} 로고.png"
    mascot_src = f"{base_name} 마스코트.png"
    cover_src = f"{base_name} 전경.png"
    
    # HTML 내의 <img> 태그를 뒤져서 알맞은 이미지가 있으면 덮어씌움
    for img in soup.find_all('img'):
        alt = img.get('alt', '')
        src = img.get('src', '')
        if '로고' in alt or '로고' in src:
            logo_src = src
        elif '마스코트' in alt or '마스코트' in src:
            mascot_src = src
        elif '전경' in alt or '전경' in src:
            cover_src = src

    theme = random.choice(color_palette)
    
    # --- 추출한 데이터로 SNS용 JSON 객체 조립 ---
    data = {
        "name": official_name,
        "id": f"({base_name}_official)",
        "title": f"{official_name} 공식 블로그",
        "subtitle": f"{base_name}의 모든 것을 알려드립니다 🌟",
        "color": theme["color"],
        "hoverColor": theme["hover"],
        "logo": logo_src,
        "mascot": mascot_src,
        "cover": cover_src,
        "desc": desc_text, # HTML에서 빼온 실제 위키 본문 일부!
        "followers": f"{random.randint(3, 20)}.{random.randint(1, 9)}만",
        "categories": [f"{base_name} 새소식", "관광·문화", "시민 소통 창구"],
        "post": {
            "category": f"{base_name} 새소식 >",
            "title": f"[시정소식] {base_name}의 새로운 도약! 핵심 사업 추진 안내 ✨",
            "tags": [f"#{base_name}", f"#{official_name}", "#지역발전"],
            "content": f"""
                <p class="text-center mb-6"><img src="{base_name}행사.png" class="mx-auto rounded-lg shadow-md" onerror="this.src='https://via.placeholder.com/600x300?text=Event'"></p>
                <p>안녕하세요! <b>{official_name}</b>입니다. 😊</p>
                <p>위키 문서에서 보셨듯, 우리 <b>{base_name}</b>은(는) 끝없이 발전하고 있습니다. 앞으로도 살기 좋은 지역을 만들기 위해 최선을 다하겠습니다.</p>
                <blockquote class="border-l-4 border-[{theme['color']}] pl-4 my-4 bg-gray-50 py-2">
                    <i>"{desc_text}"</i>
                </blockquote>
            """
        },
        # 꿀잼 빌런 티키타카는 덤으로 자동 추가
        "comments": [
            {"isReply": False, "author": "동네주민", "text": f"{base_name} 발전하는 모습 보기 좋습니다!", "time": "14:00"},
            {"isReply": False, "isVillain": True, "author": "전직시장_윤대환", "text": f"에잉 쯧쯧... 나 때는 말이야 저런 데 돈 안 쓰고 싹 다 도로 깔아서 우리 두청운수 버스 다니게 했는데! 내 두청운수 돌려내라!", "time": "14:30"},
            {"isReply": True, "isOfficial": True, "author": official_name, "text": f"전 시장님, {base_name}의 예산은 투명하게 집행되고 있습니다. 교정센터 무단 접속이 확인되어 오늘 야간 '수제 귤박스 500개 접기'가 추가되었습니다. ^^", "time": "14:35"},
            {"isReply": True, "author": "팩트폭격기", "text": "영감님 ㅋㅋㅋㅋ 다른 동네 게시판까지 와서 진상이네 가서 귤이나 까쇼", "time": "14:40"},
            {"isReply": True, "isVillain": True, "author": "진짜왕_윤재훈", "text": "우리 아빠 욕하지마라 ㅡㅡ 내가 저기 땅 다 사놨어야 했는데 아오 빡쳐", "time": "14:50"},
            {"isReply": True, "isOfficial": True, "author": official_name, "text": f"수감자 윤재훈님, 부자가 쌍으로 접속하셨군요. 본청에 즉시 보고하여 '실밥 정리 1,000개' 추가했습니다. ^^", "time": "15:00"}
        ]
    }
    return official_name, data

# ==========================================
# 실행 로직
# ==========================================
# ==========================================
# 실행 로직 (수정된 버전)
# ==========================================
if __name__ == "__main__":
    # html 파일들 찾기
    html_files = glob.glob(os.path.join(TARGET_FOLDER, "*.html"))
    
    if not html_files:
        print(f"[{TARGET_FOLDER}] 폴더에 HTML 파일이 없습니다!")
        exit()

    final_js_code = "const regionData = {\n"
    
    for idx, file_path in enumerate(html_files):
        official_name, region_data = parse_html_to_region_data(file_path)
        
        if not region_data:
            continue
            
        json_str = json.dumps(region_data, ensure_ascii=False, indent=4)
        final_js_code += f'    "{official_name}": {json_str}'
        
        if idx < len(html_files) - 1:
            final_js_code += ",\n"
        else:
            final_js_code += "\n"

    final_js_code += "};"

    # --- 여기서부터 파일 저장 로직으로 변경 ---
    output_filename = "region_data.js"
    try:
        with open(output_filename, "w", encoding="utf-8") as f:
            f.write(final_js_code)
        print("=========================================================")
        print(f"파일 생성이 완료되었습니다: {output_filename}")
        print("템플릿 폴더에 이 파일을 넣고 <script src='region_data.js'></script>로 불러오세요.")
        print("=========================================================")
    except Exception as e:
        print(f"파일 저장 중 오류가 발생했습니다: {e}")