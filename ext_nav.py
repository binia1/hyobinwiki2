import os
import glob
import pandas as pd
from bs4 import BeautifulSoup

def extract_all_nav_data(target_dir):
    # 폴더 내 모든 HTML 파일 탐색
    html_files = glob.glob(os.path.join(target_dir, "**/*.html"), recursive=True)
    print(f"총 {len(html_files)}개 HTML 문서에서 <nav> 데이터 추출을 시작합니다...")
    
    extracted_data = []
    total_nav_count = 0
    
    for file_path in html_files:
        doc_name = os.path.basename(file_path).replace(".html", "")
        
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
            
        # 문서 내 모든 <nav> 태그 찾기
        nav_tags = soup.find_all('nav')
        
        for idx, nav in enumerate(nav_tags, 1):
            total_nav_count += 1
            
            # 1. ID 및 Class 속성 추출
            nav_id = nav.get('id', '')
            nav_class = ' '.join(nav.get('class', [])) if nav.get('class') else ''
            
            # 2. 태그를 제외한 순수 텍스트 내용 추출 (공백 정리)
            text_content = nav.get_text(separator=' | ', strip=True)
            
            # 3. <nav> 안에 포함된 모든 하이퍼링크(<a>) 텍스트와 주소 추출
            links = []
            for a_tag in nav.find_all('a'):
                link_text = a_tag.get_text(strip=True)
                link_href = a_tag.get('href', '')
                if link_text or link_href:
                    links.append(f"{link_text} ({link_href})")
            links_str = "\n".join(links)
            
            # 4. 나중에 통째로 복사하거나 리팩토링할 때 쓸 원본 HTML 코드
            raw_html = str(nav)
            
            extracted_data.append({
                "문서명": doc_name,
                "파일 경로": file_path,
                "NAV 순번": f"#{idx}",
                "ID": nav_id,
                "Class": nav_class,
                "순수 텍스트 요약": text_content,
                "포함된 링크 목록": links_str,
                "원본 HTML 코드": raw_html
            })
            
    # 데이터프레임 변환 및 엑셀 저장
    if extracted_data:
        df = pd.DataFrame(extracted_data)
        
        # 엑셀 저장 설정
        output_filename = "효빈위키_NAV_태그_완벽추출결과.xlsx"
        with pd.ExcelWriter(output_filename, engine='openpyxl') as writer:
            df.to_excel(writer, sheet_name='NAV_추출내역', index=False)
            
        print("==========================================")
        print(f"🎉 추출 완료! '{output_filename}' 파일이 생성되었습니다.")
        print(f"📁 분석한 문서 수: {len(html_files)}개")
        print(f"🧭 추출된 <nav> 태그 총합: {total_nav_count}개")
        print("==========================================")
    else:
        print("⚠️ 문서 내에서 <nav> 태그를 발견하지 못했습니다.")

# 필수 라이브러리가 없다면 터미널에: pip install beautifulsoup4 pandas openpyxl
# 실제 HTML 문서들이 들어있는 폴더 경로를 입력하세요. (현재 폴더면 ".")
extract_all_nav_data(".")