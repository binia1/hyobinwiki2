import os
import re
from bs4 import BeautifulSoup

def normalize_school_name(name):
    """학교 이름을 줄임말로 통일"""
    name = name.replace("초등학교", "초")
    name = name.replace("여자중학교", "여중")
    name = name.replace("남자중학교", "남중")
    name = name.replace("중학교", "중")
    name = name.replace("여자고등학교", "여고")
    name = name.replace("남자고등학교", "남고")
    name = name.replace("고등학교", "고")
    return name.strip()

def check_missing_schools_v2(region_name):
    html_file = f"{region_name}.html"
    js_file = f"js/{region_name}학교.js"
    
    if not os.path.exists(html_file) or not os.path.exists(js_file):
        return f"[{region_name}] ⚠️ 파일 누락 (HTML 또는 JS 파일이 없습니다)"

    # 1. JS 파일에서 학교 목록 추출
    with open(js_file, 'r', encoding='utf-8') as f:
        js_content = f.read()
    
    js_raw = set(re.findall(r'<a class="wiki-link"[^>]*>([^<]+)</a>', js_content))
    js_schools = {normalize_school_name(school) for school in js_raw if school.strip()}

    # 2. HTML 파일 전체를 텍스트로 읽어오기
    with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
        html_text = f.read()

    # 3. HTML 전체 텍스트에 학교 이름(약자 및 정식 명칭)이 존재하는지 확인
    missing_schools = []
    for school in js_schools:
        # 줄임말(예: 곡천초) 또는 정식명칭(예: 곡천초등학교) 중 하나라도 HTML 내에 있으면 있는 것으로 인정
        full_name_1 = school.replace('초', '초등학교').replace('중', '중학교').replace('고', '고등학교')
        full_name_2 = school.replace('여중', '여자중학교').replace('남중', '남자중학교').replace('여고', '여자고등학교').replace('남고', '남자고등학교')
        
        if (school in html_text) or (full_name_1 in html_text) or (full_name_2 in html_text):
            continue # 존재함
        else:
            missing_schools.append(school)

    if missing_schools:
        return f"[{region_name}] ❌ 진짜 누락된 학교 ({len(missing_schools)}곳): {', '.join(sorted(missing_schools))}"
    else:
        return f"[{region_name}] ✅ 누락 없음 (모든 학교 배정 완료)"

# 검수할 지역 목록
regions = [
    "매성시", "비천시", "방산시", "마진시", "하정시", "낙주시", "덕산구", "조전구", 
    "곡천군", "매산군", "석창군", "분주군", "고포군", "인곡군", "관수군", "운진군", "두원군", "원안군",
    "강주시", "계성시", "군천시", "서진시", "서해시", "약산시", "전산시", "기도군", 
    "낭원군", "덕현군", "모제군", "반양군", "상안군", "선곡군", "저천군", "치원군"
]

print("🔍 진짜 누락 검수 시작 (전체 텍스트 대조 모드)...\n" + "="*50)

for region in regions:
    print(check_missing_schools_v2(region))

print("="*50 + "\n✅ 검수 완료!")