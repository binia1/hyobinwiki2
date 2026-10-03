import os
from bs4 import BeautifulSoup

# 1. 대상 지역 리스트 (효빈광역시 구군, 천성구, 궁하구, 천주시 완벽 제외)
regions = [
    # 덕빈북도
    "강주시", "계성시", "군천시", "서진시", "서해시", "약산시", "전산시", 
    "기도군", "낭원군", "덕현군", "모제군", "반양군", "상안군", "선곡군", "저천군", "치원군",
    "가원구", "빈성구", "장기구", 
    # 덕빈남도
    "낙주시", "방산시", "운진군", "마진시", "매산군", "매성시", "석창군", "하정시", 
    "관수군", "분주군", "곡천군", "인곡군", "원안군", "두원군", "고포군",
    "덕산구", "조전구"
]

print("=== 하위 행정구역 본문 대개편 작업을 시작합니다 ===")

for region in regions:
    file_path = f"{region}.html"
    
    if not os.path.exists(file_path):
        print(f"[{region}] 파일이 존재하지 않아 건너뜁니다.")
        continue
        
    # HTML 파일 읽기
    with open(file_path, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")
        
    # 2. '하위 행정구역' 제목을 가진 h2(대문단) 태그 찾기
    target_h2 = None
    for h2 in soup.find_all(['h2', 'h3']):
        text = h2.get_text(strip=True)
        if '하위 행정구역' in text or '행정구역' in text:
            target_h2 = h2
            break
            
    if not target_h2:
        print(f"[{region}] '하위 행정구역' 문단을 찾을 수 없습니다. (스킵)")
        continue
        
    # 3. 기존 하위 행정구역 내용 싹 비우기
    # target_h2 다음 요소부터 탐색하여, 다음 h2(새로운 대문단)가 나오거나 footer가 나올 때까지 삭제
    curr = target_h2.find_next_sibling()
    while curr:
        next_sib = curr.find_next_sibling()
        
        # 다음 대문단(h2)을 만나거나 하단 푸터를 만나면 정지
        if curr.name == 'h2' or (curr.name == 'div' and curr.get('id') == 'footer-container'):
            break
            
        curr.extract() # 요소 삭제
        curr = next_sib
        
    # 4. 새로 삽입할 내용 생성 (상세내용 아이콘 + JS 네비게이션 틀)
    clean_name = region.replace(" ", "")
    
    # 보내주신 사진(image_2.png)과 동일한 구조의 나무위키식 링크 박스
    new_content_html = f"""
    <div style="display: flex; align-items: center; margin-bottom: 20px; margin-top: 15px;">
        <img src="이미지/svg/상세_내용_아이콘.svg" alt="상세 내용" style="width: 22px; height: 22px; margin-right: 8px;">
        <span style="font-size: 0.95rem; color: var(--wiki-text);">
            자세한 내용은 <a class="wiki-link" href="{region}_행정구역.html">{region}/행정</a> 문서를 참고하십시오.
        </span>
    </div>
    
    <!-- {region} 행정구역 네비게이션 틀 (외부 스크립트) -->
    <script defer="defer" src="js/{clean_name}행정.js"></script>
    <div class="hb-{clean_name}-nav"></div>
    """
    
    new_soup = BeautifulSoup(new_content_html, "html.parser")
    
    # 5. 기존 h2 태그(문단 번호는 유지됨) 바로 아래에 새 내용 꽂아넣기
    target_h2.insert_after(new_soup)
    
    # 변경된 내용 저장
    with open(file_path, "w", encoding="utf-8") as f:
        # prettify()를 쓰면 디자인이 깨질 수 있으므로 str() 유지
        f.write(str(soup))
        
    print(f"[{region}] 하위 행정구역 문단 분리 및 틀 교체 완료!")

print("\n=== 모든 작업이 완료되었습니다 ===")