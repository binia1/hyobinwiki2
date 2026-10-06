import os
import re
from bs4 import BeautifulSoup

def process_wiki_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # HTML 파싱
    soup = BeautifulSoup(html_content, 'html.parser')

    # 1. 불필요한 태그 정리 (빈 툴팁 div 및 중복 스타일 태그 제거)
    for tooltip_div in soup.find_all('div', id='wiki-footnote-tooltip'):
        tooltip_div.decompose()

    if soup.body:
        for style_tag in soup.body.find_all('style'):
            if '.wiki-fn-sup' in style_tag.text:
                style_tag.decompose()

    # 2. 모든 각주 수집 및 순차적 재번호 매기기
    footnotes_data = []
    footnote_counter = 1

    # 문서 내의 모든 <sup> 태그를 순서대로 탐색
    for sup in soup.find_all('sup'):
        fn_text = ""
        
        # 케이스 A: 본문에 있는 기존 onclick 각주
        if sup.has_attr('onclick') and 'wiki-footnote-tooltip' in sup['onclick']:
            # 정규식으로 innerHTML='(내용)' 안의 내용만 추출
            match = re.search(r"innerHTML\s*=\s*'([^']+)'", sup['onclick'])
            if match:
                fn_text = match.group(1)
        
        # 케이스 B: 인포박스 등에 있는 정상적인 CSS 호버 각주
        elif 'wiki-fn-sup' in sup.get('class', []):
            tooltip_span = sup.find('span', class_='wiki-fn-tooltip')
            if tooltip_span:
                # 내부 HTML 태그(<br>, <strong> 등)를 유지하며 문자열로 추출
                fn_text = "".join([str(c) for c in tooltip_span.contents])
        
        # 각주 데이터를 찾았다면 새로운 HTML 포맷으로 덮어쓰기
        if fn_text:
            new_sup_html = f'''<sup class="wiki-fn-sup"><a href="#fn-{footnote_counter}" id="rfn-{footnote_counter}" style="color: #005BAC; text-decoration: none; font-weight: bold;">[{footnote_counter}]</a><span class="wiki-fn-tooltip">{fn_text}</span></sup>'''
            new_sup = BeautifulSoup(new_sup_html, 'html.parser').sup
            sup.replace_with(new_sup)
            
            footnotes_data.append({
                'id': footnote_counter,
                'text': fn_text
            })
            footnote_counter += 1

    # 3. 하단 각주 목록(Footnote Section) 완벽 재생성
    if footnotes_data:
        # 기존에 꼬여있던 각주 섹션 삭제
        for old_fn_section in soup.find_all('div', class_='footnote-section'):
            old_fn_section.decompose()

        # 새로운 각주 섹션 조립
        fn_section_html = """
        <div class="footnote-section" style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #ccc; clear: both; background-color: #F9F9FA; border-radius: 8px; padding: 20px;">
            <h3 style="font-size: 1.5rem !important; font-weight: bold; margin-bottom: 15px; margin-top: 0; padding-left: 0; border: none; color: #333;">각주</h3>
            <ul class="footnote-list" style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; line-height: 1.6; color: #444;">
        """
        for fn in footnotes_data:
            fn_section_html += f'''<li style="margin-bottom: 8px; display: flex; align-items: flex-start; gap: 10px;"><a href="#rfn-{fn['id']}" id="fn-{fn['id']}" style="color: #BBFF64; font-weight: bold; text-decoration: none;">[{fn['id']}]</a> <span>{fn['text']}</span></li>\n'''
        
        fn_section_html += """
            </ul>
        </div>
        """
        
        # 문서 맨 아래 <div id="footer-container"> 바로 위에 삽입
        footer = soup.find('div', id='footer-container')
        if footer:
            new_fn_section = BeautifulSoup(fn_section_html, 'html.parser')
            footer.insert_before(new_fn_section)

    # 4. 수정된 내용으로 파일 덮어쓰기
    with open(file_path, 'w', encoding='utf-8') as f:
        # 원래의 들여쓰기와 구조를 최대한 유지하며 저장
        f.write(str(soup))
    
    print(f"[{file_path}] 처리 완료: 총 {len(footnotes_data)}개의 각주 복구됨.")

# 실행할 폴더 경로 지정 (현재 폴더는 '.')
target_directory = '.'

# 폴더 내의 모든 HTML 파일을 순회하며 스크립트 적용
for filename in os.listdir(target_directory):
    if filename.endswith(".html"):
        process_wiki_html(os.path.join(target_directory, filename))