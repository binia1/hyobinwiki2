import os
from bs4 import BeautifulSoup

target_files = [
    "고송신도시.html", "과진지구.html", "곽산기계산업단지.html", "뇌전공업단지.html",
    "덕현지구.html", "도변지구.html", "동곡공업지구.html", "루비리.html",
    "서목해양공단.html", "소장지구.html", "송재섭.html", "신영신산업단지.html",
    "쌍엽지구.html", "앵내지구.html", "우전지구.html", "유인철.html",
    "중수지구.html", "진백-광정산업단지.html", "창전지구.html", "채산식품단지.html",
    "청덕지구.html", "청엽지구.html", "평당해운산업지구.html", "평전공단.html",
    "항동물류지구.html", "효빈공단.html", "효빈공단_ 팔조지구.html",
    "효빈공단_마잡헌이송지구.html", "효빈공단_포장-신흥지구.html",
    "흑택루비지구.html", "흑택리.html"
]

for filepath in target_files:
    if not os.path.exists(filepath):
        print(f"[파일 없음 스킵] {filepath}")
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')
    infobox = soup.find('aside', class_='infobox')
    
    if not infobox:
        print(f"[인포박스 없음 스킵] {filepath}")
        continue

    doc_name = os.path.splitext(os.path.basename(filepath))[0]

    # 1. 인포박스 내 모든 이미지 태그를 검사하여 원본 이미지 경로(src) 추출
    all_imgs = infobox.find_all('img')
    if all_imgs and all_imgs[0].get('src'):
        img_src = all_imgs[0]['src']
        img_alt = all_imgs[0].get('alt', f"{doc_name} 이미지")
    else:
        img_src = f"이미지/{doc_name}_전경.webp"
        img_alt = f"{doc_name} 전경"

    # 2. 기존 인포박스 내부의 모든 기존 이미지 태그 및 감싸는 행/블록을 완전히 제거하여 중복 원천 차단
    for img in all_imgs:
        parent_tr = img.find_parent('tr')
        if parent_tr:
            parent_tr.decompose()
        else:
            parent_div = img.find_parent('div')
            if parent_div:
                parent_div.decompose()
            else:
                img.decompose()

    # 3. 기존 타이틀 영역(한자, 영문 등) 보존
    title_row = infobox.find('div', class_='infobox-title-row')
    if title_row:
        custom_title_html = str(title_row)
    else:
        custom_title_html = f'''<div class="infobox-title-row" style="padding: 15px; text-align: center; border-bottom: 1px solid #ccc; background-color: #fff;">
<div class="infobox-name" style="width: 100%;">
<div class="text-xl font-bold">{doc_name}</div>
<div class="text-[10px] opacity-70 uppercase">Hyobin Metropolitan City</div>
</div>
</div>'''

    # 4. 상단 라벨 추출
    top_label_div = infobox.find('div', class_='infobox-top-label')
    if top_label_div:
        top_label = top_label_div.get_text(strip=True)
    else:
        top_label = "효빈광역시의 주요 정보"

    # 5. 이미지가 모두 제거된 순수한 테이블 HTML 추출
    table = infobox.find('table')
    table_html = str(table) if table else ""

    # 6. 단 하나의 메인 빅 이미지와 지도, 보존된 타이틀/테이블을 조합한 최종 인포박스 생성
    new_infobox_html = f'''<aside class="infobox shrink-0 shadow-sm rounded overflow-hidden order-1 md:order-2" style="width: 320px; max-width: 100%;">
<div class="infobox-top-label">{top_label}</div>

{custom_title_html}

<!-- 단 하나의 메인 빅 이미지 영역 -->
<div class="infobox-image border-b border-[#ccc]" style="width: 100%; height: 250px; overflow: hidden; background: #eee;">
<img alt="{img_alt}" src="{img_src}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentNode.innerHTML='<div class=\\'flex flex-col items-center justify-center w-full h-full text-sm text-gray-400 font-bold bg-gray-100\\'>{doc_name}<br>이미지 없음</div>'"/>
</div>

<!-- 지도 영역 -->
<div class="infobox-map border-b border-[#ccc]" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/" style="width: 160%; height: 160%; border: none; 
                       position: absolute; top: 0; left: 0;
                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>

{table_html}
</aside>'''

    infobox.replace_with(BeautifulSoup(new_infobox_html, 'html.parser'))

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(str(soup))

    print(f"[중복 이미지 완벽 제거 완료] {filepath}")

print("모든 지정 파일의 변환이 완료되었습니다.")