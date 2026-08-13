import os
import re
import shutil
from bs4 import BeautifulSoup

def process_html_files(directory="."):
    # js 폴더가 없으면 생성
    js_dir = os.path.join(directory, "js")
    if not os.path.exists(js_dir):
        os.makedirs(js_dir)

    # 디렉토리 내의 모든 HTML 파일 탐색
    for filename in os.listdir(directory):
        if not filename.endswith(".html"):
            continue

        filepath = os.path.join(directory, filename)
        
        # 1. 파일 읽기
        with open(filepath, 'r', encoding='utf-8') as f:
            html_content = f.read()

        soup = BeautifulSoup(html_content, 'html.parser')
        
        # 2. 타겟 네비게이션 박스 찾기 (<div class="hb-admin-table">)
        admin_table_div = soup.find('div', class_='hb-admin-table')
        
        if not admin_table_div:
            continue # 해당 박스가 없는 문서는 패스

        print(f"🔄 처리 중: {filename}")

        # 3. 원본 100% 보존을 위한 백업 파일 생성 (.bak)
        backup_path = filepath + ".bak"
        shutil.copy2(filepath, backup_path)

        # 4. 데이터 추출
        # (1) 테이블 원본 HTML 추출 (데이터 손실 방지를 위해 통째로 가져옴)
        table_tag = admin_table_div.find('table')
        table_html = str(table_tag).replace('`', '\\`') if table_tag else ""

        # (2) 헤더 정보 추출 (로고 이미지, 제목 등)
        img_tag = admin_table_div.find('img')
        img_src = img_tag['src'] if img_tag else "이미지/기본.webp"

        # 글자 크기가 13px인 div를 찾아 시/도 이름 추출 (예: 덕빈북도 강주시)
        title_div = admin_table_div.find('div', style=re.compile(r'font-size:\s*13px'))
        main_title = title_div.text.strip() if title_div else "지자체명"
        region_name = main_title.split()[-1] if main_title else "알수없음" # 강주시, 북구 등

        # (3) 메인 테마 색상 및 글자색 추출
        header_div = admin_table_div.find('div')
        style_text = header_div.get('style', '') if header_div else ''
        
        color_match = re.search(r'background-color:\s*(#[0-9a-fA-F]+)', style_text)
        main_color = color_match.group(1) if color_match else "#ffc94a"
        
        font_color_match = re.search(r'color:\s*([a-zA-Z]+|#[0-9a-fA-F]+)', style_text)
        text_color = font_color_match.group(1) if font_color_match else "black"

        # 5. JS 파일 생성 (요청하신 2단 분리형 헤더 디자인 템플릿 적용)
        js_content = f"""/**
 * 파일명: js/{region_name}행정.js
 * 설명: {main_title} 행정구역 전체 내비게이션 자동 생성
 * 특징: 원본 데이터 무손실 보존 및 2단 분리형 헤더 구조 적용
 */
(function() {{
    var mainColor = "{main_color}";
    var textColor = "{text_color}";
    var containers = document.querySelectorAll(".hb-{region_name}-nav");

    containers.forEach(function(container, index) {{
        var uniqueNavId = "{region_name}Nav_" + index;
        var uniqueLabelId = "{region_name}Label_" + index;

        var navHTML = `
        <style>
            /* 헤더 전용 스타일 */
            .nav-box-auto {{ border: 2px solid ${{mainColor}}; background-color: white; font-family: 'Noto Sans KR', sans-serif; box-sizing: border-box; margin: 20px 0; }}
            .nav-header-container-auto {{ cursor: pointer; }}
            .nav-header-top-auto {{ 
                background-color: ${{mainColor}}; 
                color: ${{textColor}}; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                padding: 15px 0; 
            }}
            .nav-header-title-box {{
                border: 1px solid ${{textColor}}; 
                display: flex; 
                align-items: center; 
                padding: 5px 15px; 
                gap: 15px;
            }}
            .nav-header-bottom-auto {{ 
                background-color: ${{mainColor}}; 
                color: ${{textColor}}; 
                text-align: center; 
                padding: 6px 0; 
                font-size: 13px; 
                font-weight: bold; 
                border-top: 1px solid rgba(0, 0, 0, 0.3);
            }}
        </style>
        
        <div class="nav-box-auto">
            <div class="nav-header-container-auto" onclick="toggleNav('${{uniqueNavId}}', '${{uniqueLabelId}}')">
                <div class="nav-header-top-auto">
                    <div class="nav-header-title-box">
                        <img src="{img_src}" alt="로고" style="height: 40px;" onerror="this.src='이미지/hyobin1.webp'">
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">{main_title}</div>
                            <div style="font-size: 20px; font-weight: 900;">행정구역</div>
                        </div>
                    </div>
                </div>
                <div class="nav-header-bottom-auto">
                    <span id="${{uniqueLabelId}}">[ 펼치기 · 접기 ]</span>
                </div>
            </div>
            
            <div id="${{uniqueNavId}}" style="transition: max-height 0.3s ease-out; overflow: hidden; max-height: 2000px; display: block;">
                <!-- 원본 테이블 100% 무손실 삽입 -->
                {table_html}
            </div>
        </div>
        `;
        
        container.innerHTML = navHTML;
    }});

    // 전역 토글 함수 (중복 선언 방지)
    if (typeof window.toggleNav === 'undefined') {{
        window.toggleNav = function(id, labelId) {{
            var content = document.getElementById(id);
            if (!content) return;

            if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {{
                content.style.maxHeight = '2000px';
            }} else {{
                content.style.maxHeight = '0px';
            }}
        }};
    }}
}})();
"""
        # JS 파일 저장
        js_filepath = os.path.join(js_dir, f"{region_name}행정.js")
        with open(js_filepath, 'w', encoding='utf-8') as js_file:
            js_file.write(js_content)

        # 6. 원본 HTML에서 기존 태그를 새 태그로 치환
        new_div = soup.new_tag("div", **{'class': f'hb-{region_name}-nav'})
        new_script = soup.new_tag("script", src=f"js/{region_name}행정.js")
        
        admin_table_div.insert_before(new_script)
        admin_table_div.replace_with(new_div)

        # 7. 수정된 HTML 저장
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(str(soup))
            
        print(f"✅ 완료: {filename} -> {region_name}행정.js 생성 및 치환 성공 (백업 완료)")

if __name__ == "__main__":
    print("🚀 HTML -> JS 변환 스크립트를 시작합니다...")
    process_html_files()
    print("🎉 모든 작업이 완료되었습니다!")