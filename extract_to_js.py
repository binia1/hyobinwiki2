import os
import json
import random
from bs4 import BeautifulSoup
import glob

# 1. 위키 HTML 파일들이 모여있는 폴더
TARGET_FOLDER = "./wiki_pages/"
# 2. 결과물로 뽑아낼 자바스크립트 파일 이름
OUTPUT_JS_FILE = "region_data.js"

color_palette = [
    {"color": "#005BAC", "hover": "#00478a"}, # 파랑 (코레일블루)
    {"color": "#03c75a", "hover": "#02b351"}, # 초록 (네이버그린)
    {"color": "#ff5522", "hover": "#e64a1d"}, # 주황
    {"color": "#9856FF", "hover": "#7a3cd6"}, # 보라
    {"color": "#D81C2F", "hover": "#b51525"}, # 빨강
]

def parse_html_to_data(file_path):
    filename = os.path.basename(file_path)
    base_name = filename.replace(".html", "")
    
    # 관공서 공식 명칭 변환
    official_name = base_name + "청" if base_name.endswith(("시", "군", "구", "도")) else base_name + "청"

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')
    except Exception as e:
        print(f"[{filename}] 읽기 실패: {e}")
        return None, None

    # 소개글 추출 (첫 번째 의미 있는 P 태그)
    desc_text = f"시민과 함께하는 {official_name} 공식 채널입니다."
    for p in soup.find_all('p'):
        text = p.get_text(strip=True)
        if len(text) > 20:
            desc_text = text[:100] + "..." if len(text) > 100 else text
            break
            
    # 이미지 추출
    logo_src = f"{official_name} 로고.png"
    mascot_src = f"{base_name} 마스코트.png"
    cover_src = f"{base_name} 전경.png"
    
    for img in soup.find_all('img'):
        alt = img.get('alt', '')
        if '로고' in alt: logo_src = img.get('src', logo_src)
        elif '마스코트' in alt: mascot_src = img.get('src', mascot_src)
        elif '전경' in alt: cover_src = img.get('src', cover_src)

    theme = random.choice(color_palette)
    eng_id = f"@Official_{base_name}"
    
    # ---------------------------------------------------------
    # 🌟 유튜브, 블로그, X(트위터), 인스타 모두 쓸 수 있는 만능 데이터 구조
    # ---------------------------------------------------------
    data = {
        "name": official_name,
        "handle": eng_id,
        "title": f"{official_name} 공식 블로그",
        "subtitle": f"{base_name}의 모든 것을 알려드립니다 🌟",
        "color": theme["color"],
        "hoverColor": theme["hover"],
        "logo": logo_src,
        "mascot": mascot_src,
        "banner": cover_src, # 유튜브용 커버
        "cover": cover_src,  # 블로그용 커버
        "desc": desc_text,
        "subs": f"{random.randint(3, 20)}.{random.randint(1, 9)}만",
        "followers": f"{random.randint(3, 20)}.{random.randint(1, 9)}만",
        "categories": [f"{base_name} 새소식", "관광·문화", "시민 소통 창구"],
        
        # 블로그 및 커뮤니티용 포스트
        "post": {
            "category": f"{base_name} 새소식 >",
            "title": f"[시정소식] {base_name}의 새로운 도약! 핵심 사업 추진 안내 ✨",
            "text": f"📢 <b>[공지] {official_name} 대중교통 개편 및 지역 상권 활성화!</b><br><br>시민 여러분 안녕하세요! 우리 {base_name}의 자랑스러운 교통망 개편과 구도심 상권 부활 프로젝트가 드디어 시작됩니다.<br><br><i>\"{desc_text}\"</i>",
            "content": f"<p>위키 문서에서 보셨듯, 우리 <b>{base_name}</b>은(는) 끝없이 발전하고 있습니다.</p><blockquote>{desc_text}</blockquote>",
            "img": f"{base_name} 행사.png",
            "tags": [f"#{base_name}", f"#{official_name}", "#지역발전"],
            "likes": random.randint(1000, 20000),
            "commentsCount": random.randint(100, 1000)
        },
        
        # 유튜브용 가상 동영상 목록 생성
        "videos": [
            { "img": f"{base_name} 명소.png", "title": f"[{base_name}] {desc_text[:20]}... 현장 스케치 📸", "views": f"{random.randint(1, 9)}.{random.randint(1, 9)}만회", "time": "1일 전", "duration": "10:15" },
            { "img": f"{base_name} 맛집.png", "title": f"{base_name} 숨은 노포 맛집 TOP 5 🍜", "views": f"{random.randint(2, 5)}만회", "time": "1주 전", "duration": "08:45" },
            { "img": f"{base_name} 축제.png", "title": f"올해 {base_name} 축제 라인업 대공개! ✨", "views": "8,900회", "time": "2주 전", "duration": "05:10" },
            { "img": f"{base_name} 마스코트.png", "title": f"{base_name} 마스코트 탄생 비화 (다큐)", "views": "4.2만회", "time": "1개월 전", "duration": "15:20" },
            { "img": f"{base_name} 브이로그.png", "title": f"시장이 직접 뛰는 {base_name} 브이로그 🏃‍♂️", "views": "1.8만회", "time": "2개월 전", "duration": "11:55" }
        ],
        
        # 악플 티키타카 모음
        "comments": [
            { "isReply": False, "author": f"{base_name}주민", "handle": f"@{base_name}_lover", "text": f"{base_name} 발전하는 모습 보기 좋습니다!", "time": "2시간 전", "isVillain": False },
            { "isReply": False, "isVillain": True, "author": "전직시장_윤대환", "handle": "@YoonDaeHwan_Official", "text": "에잉 쯧쯧... 나 때는 말이야 저런 데 돈 안 쓰고 싹 다 도로 깔아서 우리 두청운수 버스 다니게 했는데! 내 두청운수 돌려내라!", "time": "1시간 전", "replies": [
                { "isReply": True, "isVillain": False, "author": "팩트폭격기", "handle": "@fact_bomber", "text": "@YoonDaeHwan_Official 영감님 ㅋㅋㅋㅋ 다른 동네 게시판까지 와서 진상이네 가서 귤이나 까쇼", "time": "50분 전" },
                { "isReply": True, "isVillain": True, "author": "진짜왕_윤재훈", "handle": "@Real_YoonJaeHoon", "text": "@fact_bomber 우리 아빠 욕하지마라 ㅡㅡ 내가 저기 땅 다 사놨어야 했는데 아오 빡쳐", "time": "40분 전" },
                { "isReply": True, "isOfficial": True, "author": official_name, "handle": eng_id, "text": f"@Real_YoonJaeHoon 전 시장님 부자, {base_name} 채널 무단 접속이 확인되어 효빈시 교정센터 본청에 통보했습니다. 오늘 야간 '수제 귤박스 1,000개 접기'가 추가되었습니다. ^^", "time": "30분 전" }
            ]}
        ]
    }
    return official_name, data

if __name__ == "__main__":
    if not os.path.exists(TARGET_FOLDER):
        os.makedirs(TARGET_FOLDER)
        print(f"'{TARGET_FOLDER}' 폴더를 생성했습니다. 여기에 위키 HTML 파일들을 넣고 다시 실행해주세요!")
        exit()

    html_files = glob.glob(os.path.join(TARGET_FOLDER, "*.html"))
    if not html_files:
        print(f"[{TARGET_FOLDER}] 폴더에 HTML 파일이 없습니다!")
        exit()

    final_js_code = "const regionData = {\n"
    
    for idx, file_path in enumerate(html_files):
        official_name, region_data = parse_html_to_data(file_path)
        if not region_data: continue
            
        json_str = json.dumps(region_data, ensure_ascii=False, indent=4)
        final_js_code += f'    "{official_name}": {json_str}'
        if idx < len(html_files) - 1: final_js_code += ",\n"
        else: final_js_code += "\n"

    final_js_code += "};\n"

    # JS 파일로 저장
    with open(OUTPUT_JS_FILE, 'w', encoding='utf-8') as f:
        f.write(final_js_code)

    print(f"성공! {len(html_files)}개의 지자체 데이터를 '{OUTPUT_JS_FILE}'에 저장했습니다.")