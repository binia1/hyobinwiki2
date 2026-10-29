import glob
import pandas as pd
from bs4 import BeautifulSoup
import re

def clean_text(text):
    # 텍스트 내 다중 공백 및 줄바꿈 정리
    return re.sub(r'\s+', ' ', text).strip()

def extract_symbols_and_svg(output_filename="효빈_시군구_상징데이터.xlsx"):
    html_files = glob.glob("*.html")
    extracted_data = []

    # '시', '군', '구'로 끝나거나 괄호가 붙은 문서명만 필터링 (예: 효빈광역시, 탄성군, 북구(효빈))
    region_pattern = re.compile(r'(시|군|구)(?:\([^)]+\))?$')

    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')
            
        title_tag = soup.find('h1')
        if not title_tag:
            continue
            
        region_name = title_tag.text.strip()
        
        # 시/군/구가 아닌 문서(동, 읍, 면 등)는 처리하지 않음
        if not region_pattern.search(region_name):
            continue
            
        data = {
            '행정구역': region_name,
            'CI': '',
            '브랜드 슬로건': '',
            '공식 마스코트(설명)': '',
            '마스코트(SVG코드)': '',
            '상징꽃': '',
            '상징나무': '',
            '상징새': ''
        }

        # 1. 인포박스에서 구화/군화 등 추출
        infobox = soup.find('aside', class_='infobox')
        if infobox:
            for row in infobox.find_all('tr'):
                headers = row.find_all('th')
                cells = row.find_all('td')
                
                for th in headers:
                    th_text = th.text.strip()
                    if th_text in ['시화', '구화', '군화']:
                        data['상징꽃'] = clean_text(cells[0].text) if cells else ''
                    elif th_text in ['시목', '구목', '군목']:
                        data['상징나무'] = clean_text(cells[0].text) if cells else ''
                    elif th_text in ['시조', '구조', '군조']:
                        data['상징새'] = clean_text(cells[0].text) if cells else ''

        # 2. 본문 표에서 CI, 슬로건, 마스코트 설명 및 SVG 원본 코드 추출
        for tr in soup.find_all('tr'):
            tds = tr.find_all(['td', 'th'])
            if len(tds) >= 2:
                # 공백을 제거하여 헤더 텍스트 판별
                header_text = tds[0].text.strip().replace(' ', '')
                content_cell = tds[1]
                content_text = clean_text(content_cell.text)
                
                if 'CI' in header_text:
                    data['CI'] = content_text
                elif '슬로건' in header_text:
                    data['브랜드 슬로건'] = content_text
                elif '마스코트' in header_text or '캐릭터' in header_text:
                    data['공식 마스코트(설명)'] = content_text
                    
                    # SVG 태그를 찾아 원본 HTML 문자열로 저장
                    svg_tag = content_cell.find('svg')
                    if svg_tag:
                        data['마스코트(SVG코드)'] = str(svg_tag)

        # 상징 데이터가 존재하는 경우에만 리스트에 추가
        if any(v for k, v in data.items() if k != '행정구역'):
            extracted_data.append(data)

    # 엑셀 파일로 저장
    if extracted_data:
        df = pd.DataFrame(extracted_data)
        df.to_excel(output_filename, index=False, engine='openpyxl')
        print(f"총 {len(extracted_data)}개 시/군/구 데이터 및 SVG 코드 추출이 완료되었습니다.")
    else:
        print("조건에 맞는 상징 데이터를 찾지 못했습니다.")

if __name__ == "__main__":
    extract_symbols_and_svg()