import os
import glob
import re

# ==========================================
# 1. 자동 분류를 위한 키워드 매핑 사전 (분석 엔진)
# ==========================================
# 문서 내의 텍스트를 읽고, 키(Key) 단어가 포함되어 있다면 값(Value) 분류를 부여합니다.
# 사용자님이 효빈위키 설정에 맞게 자유롭게 추가/수정하실 수 있습니다.
KEYWORD_MAP = {
    # [빅데이터 분석기사 핵심 키워드]
    "빅데이터분석기사": "빅데이터분석기사",
    "데이터 기획": "빅데이터 분석 기획",
    "전처리": "데이터 전처리",
    "결측치": "데이터 전처리",
    "이상치": "데이터 전처리",
    "데이터 탐색": "데이터 탐색",
    "시각화": "데이터 시각화",
    "회귀": "회귀분석",
    "분류": "분류 알고리즘",
    "군집": "군집분석",
    "연관분석": "연관성 분석",
    "의사결정나무": "머신러닝",
    "인공신경망": "딥러닝",
    "마이닝": "데이터 마이닝",
    "통계": "통계학",
    "확률": "확률론",
    "모니터링": "분석결과 활용",
    "평가지표": "분석모형 평가",

    # [효빈위키 서브컬처 및 세계관 키워드]
    "효빈광역시": "효빈광역시",
    "효빈도시철도": "효빈도시철도",
    "창전구": "창전구",
    "청엽구": "청엽구",
    "가원구": "가원구",
    "시내버스": "효빈광역시 시내버스",
    "러브라이브": "러브라이브! 시리즈",
    "니지가사키": "니지가사키 스쿨 아이돌 동호회",
    "뱅드림": "BanG Dream!",
    "MyGO": "MyGO!!!!!",
    "Roselia": "Roselia",
    "걸즈 밴드 크라이": "걸즈 밴드 크라이",
    "토게나시 토게아리": "토게나시 토게아리",
    "봇치": "봇치 더 록!",
    "결속밴드": "결속밴드",
    "밈": "밈"
}

def analyze_and_inject_categories():
    # 현재 폴더의 모든 빅분기 HTML 파일 탐색
    html_files = glob.glob("빅분기*.html")
    
    success_count = 0
    skip_count = 0

    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            html = f.read()

        # 이미 카테고리 박스가 주입된 문서는 스킵 (중복 방지)
        if 'class="category-box' in html:
            print(f"[스킵] {filepath} 문서는 이미 분류 박스가 존재합니다.")
            skip_count += 1
            continue

        # 1. HTML 태그를 대략적으로 제거하여 순수 텍스트만 추출 (정확한 분석을 위함)
        text_content = re.sub(r'<[^>]+>', ' ', html)

        # 2. 문서 내용 분석 및 카테고리 매칭
        # 기본적으로 모든 문서는 '빅데이터분석기사 필기' 분류를 가짐
        categories = ["빅데이터분석기사 필기"]
        
        for keyword, category in KEYWORD_MAP.items():
            if keyword in text_content and category not in categories:
                categories.append(category)

        # 3. HTML a 태그 형태로 분류 링크 조립
        cat_links = []
        for cat in categories:
            # 띄어쓰기를 언더바(_)로 치환하여 href 링크 생성 (나무위키 표준)
            link_href = f"{cat.replace(' ', '_')}.html"
            cat_links.append(f'<a href="{link_href}" class="wiki-link">{cat}</a>')
        
        links_html = " | ".join(cat_links)

        # 4. 효빈위키 스타일의 분류 박스 HTML 생성
        category_box = f"""
        <div class="category-box bg-[#f9f9f9] border border-[#ccc] p-3 mb-5 rounded text-sm font-bold">
            <span class="font-bold text-[#7777AA]">분류:</span> 
            {links_html}
        </div>
        """

        # 5. 주입 위치 탐색: <div class="txt-lvl-1">문서제목</div> 바로 아래에 삽입
        # 정규표현식을 사용하여 txt-lvl-1 태그를 찾고 그 직후에 카테고리 박스를 붙여넣음
        pattern = r'(<div class="txt-lvl-1">.*?</div>)'
        
        if re.search(pattern, html):
            new_html = re.sub(pattern, r'\1\n' + category_box, html, count=1)
            
            # 파일 덮어쓰기
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_html)
            print(f"[완료] {filepath} 문서 내용 분석 성공! (추출된 분류: {', '.join(categories)})")
            success_count += 1
        else:
            print(f"[경고] {filepath} 문서에서 <div class=\"txt-lvl-1\"> 태그를 찾을 수 없습니다.")

    print(f"\n🎉 분석 및 주입 완료! (성공: {success_count}건, 스킵: {skip_count}건)")

if __name__ == "__main__":
    analyze_and_inject_categories()