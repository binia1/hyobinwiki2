import os
import re
from bs4 import BeautifulSoup

def fix_mixed_footnotes(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    # 1. 꼬여버린 기존 하단 각주 데이터 백업 (<div class="footnotes"> 방식)
    old_fn_texts = {}
    old_footnotes_div = soup.find('div', class_='footnotes')
    if old_footnotes_div:
        for item in old_footnotes_div.find_all('div', class_='footnote-item'):
            fn_id = item.get('id')  # 예: fn-1
            a_tag = item.find('a')
            if a_tag:
                a_tag.decompose() # 앞의 [1] 번호 태그만 깔끔하게 삭제
            
            # 남은 각주 텍스트를 HTML 태그 유지한 채로 저장
            text = "".join([str(c) for c in item.contents]).strip()
            old_fn_texts[fn_id] = text
        
        # 텍스트 백업 완료 후 구형 각주 섹션 삭제
        old_footnotes_div.decompose() 

    # 2. 이전 스크립트가 잘못 만들었던 각주 섹션도 전부 청소
    for sect in soup.find_all('div', class_='footnote-section'):
        sect.decompose()

    # 3. 문서 위에서부터 모든 방식의 각주를 찾아 순서대로 재번호 매기기
    footnotes_data = []
    counter = 1

    for tag in soup.find_all(['sup', 'a']):
        fn_text = None
        
        # 패턴 A: 인포박스 등에 쓰인 CSS 호버 툴팁 방식 (wiki-fn-sup)
        if tag.name == 'sup' and 'wiki-fn-sup' in tag.get('class', []):
            tooltip = tag.find('span', class_='wiki-fn-tooltip')
            if tooltip:
                fn_text = "".join([str(c) for c in tooltip.contents]).strip()
        
        # 패턴 B: 옛날 자바스크립트 onclick 팝업 방식
        elif tag.name == 'sup' and tag.has_attr('onclick'):
            match = re.search(r"innerHTML\s*=\s*'([^']+)'", tag['onclick'])
            if match:
                fn_text = match.group(1)
                
        # 패턴 C: 남구 문서처럼 쓰인 a 태그 하이퍼링크 방식 (footnote-link)
        elif tag.name == 'a' and 'footnote-link' in tag.get('class', []):
            href = tag.get('href', '').replace('#', '') # 예: fn-1
            if href in old_fn_texts:
                fn_text = old_fn_texts[href]

        # 각주 데이터를 찾았다면 새로운 표준 태그로 교체
        if fn_text:
            # 색상을 하드코딩하지 않고 각 문서의 메인 테마색(var(--wiki-main))을 자동으로 따라가게 설정
            new_html = f'''<sup class="wiki-fn-sup"><a href="#fn-{counter}" id="rfn-{counter}" style="color: var(--wiki-main); text-decoration: none; font-weight: bold;">[{counter}]</a><span class="wiki-fn-tooltip">{fn_text}</span></sup>'''
            new_tag = BeautifulSoup(new_html, 'html.parser').sup
            tag.replace_with(new_tag)
            
            footnotes_data.append({'id': counter, 'text': fn_text})
            counter += 1

    # 4. 완벽하게 정렬된 단일 하단 각주 목록 생성
    if footnotes_data:
        fn_section_html = """
        <div class="footnote-section" style="margin-top: 40px; padding-top: 20px; border-top: 2px solid var(--wiki-border); clear: both; background-color: var(--wiki-gray-bg); border-radius: 8px; padding: 20px;">
            <h3 style="font-size: 1.5rem !important; font-weight: bold; margin-bottom: 15px; margin-top: 0; padding-left: 0; border: none; color: var(--wiki-text);">각주</h3>
            <ul class="footnote-list" style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; line-height: 1.6; color: var(--wiki-text);">
        """
        for fn in footnotes_data:
            fn_section_html += f'''<li style="margin-bottom: 8px; display: flex; align-items: flex-start; gap: 10px;"><a href="#rfn-{fn['id']}" id="fn-{fn['id']}" style="color: var(--wiki-main); font-weight: bold; text-decoration: none;">[{fn['id']}]</a> <span>{fn['text']}</span></li>\n'''
        
        fn_section_html += "</ul></div>"
        
        # footer 영역 바로 위에 삽입
        footer = soup.find('div', id='footer-container')
        if footer:
            footer.insert_before(BeautifulSoup(fn_section_html, 'html.parser'))

    # 수정된 내용을 HTML 파일로 다시 저장
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))
        
    print(f"[{os.path.basename(file_path)}] 복구 완료: 총 {len(footnotes_data)}개 각주 정렬됨.")

# 실행 폴더 설정
target_directory = '.'
for filename in os.listdir(target_directory):
    if filename.endswith(".html"):
        fix_mixed_footnotes(os.path.join(target_directory, filename))