import os
import hashlib
from bs4 import BeautifulSoup

def generate_dynamic_svg(museum_name):
    """박물관 이름의 해시값을 추출해 형태, 패턴, 색상이 완전히 제각각인 고퀄리티 SVG 엠블럼 생성"""
    short_name = museum_name.replace("미술관", "")
    if len(short_name) > 2:
        short_name = short_name[:2]
        
    h = hashlib.md5(museum_name.encode('utf-8')).hexdigest()
    
    # 1. 고급스러운 컬러 팔레트 배합 (배경색, 포인트색, 텍스트색)
    palettes = [
        ("#003366", "#FFCC00", "#FFFFFF"), # 네이비 / 골드
        ("#800000", "#FFD700", "#FFFFFF"), # 마룬 / 골드
        ("#005533", "#F0E68C", "#FFFFFF"), # 다크그린 / 카키
        ("#4B0082", "#E6E6FA", "#FFFFFF"), # 인디고 / 라벤더
        ("#2F4F4F", "#20B2AA", "#FFFFFF"), # 다크슬레이트 / 라이트씨그린
        ("#8B0000", "#FFA07A", "#FFFFFF"), # 다크레드 / 라이트살몬
        ("#191970", "#00BFFF", "#FFFFFF"), # 미드나잇블루 / 딥스카이블루
        ("#556B2F", "#DAA520", "#FFFFFF")  # 올리브 / 골든로드
    ]
    palette = palettes[int(h[0:2], 16) % len(palettes)]
    bg_color, accent_color, txt_color = palette

    # 2. 베이스 도형 결정
    shape_type = int(h[2:4], 16) % 5
    if shape_type == 0: # 방패형
        base_shape = f'<path d="M 10 20 L 50 5 L 90 20 L 90 50 C 90 85 50 95 50 95 C 50 95 10 85 10 50 Z" fill="{bg_color}" stroke="{accent_color}" stroke-width="4"/>'
    elif shape_type == 1: # 이중 테두리 원형
        base_shape = f'<circle cx="50" cy="50" r="45" fill="{bg_color}" stroke="{accent_color}" stroke-width="6"/><circle cx="50" cy="50" r="38" fill="none" stroke="{accent_color}" stroke-width="1" stroke-dasharray="3,3"/>'
    elif shape_type == 2: # 육각형
        base_shape = f'<polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="{bg_color}" stroke="{accent_color}" stroke-width="4"/>'
    elif shape_type == 3: # 마름모형
        base_shape = f'<polygon points="50,5 95,50 50,95 5,50" fill="{bg_color}" stroke="{accent_color}" stroke-width="5"/>'
    else: # 모서리가 둥근 배지형
        base_shape = f'<rect x="10" y="10" width="80" height="80" rx="15" fill="{bg_color}" stroke="{accent_color}" stroke-width="4"/>'

    # 3. 내부 모티프(문양) 결정 (박물관/문화재 느낌의 프레임워크)
    motif_type = int(h[4:6], 16) % 5
    inner_motif = ""
    if motif_type == 0: # 전시물/스크롤 형상
        inner_motif = f'<path d="M 25 30 L 75 30 L 75 70 L 25 70 Z" fill="none" stroke="{accent_color}" stroke-width="2" opacity="0.8"/>'
    elif motif_type == 1: # 월계수 잎
        inner_motif = f'<path d="M 15 60 Q 50 90 85 60 Q 80 50 75 55 Q 50 80 25 55 Q 20 50 15 60 Z" fill="{accent_color}" opacity="0.9"/>'
    elif motif_type == 2: # 빛나는 별
        inner_motif = f'<polygon points="50,20 58,40 80,40 62,53 69,75 50,62 31,75 38,53 20,40 42,40" fill="{accent_color}" opacity="0.9"/>'
    elif motif_type == 3: # 기둥/건축 형상
        inner_motif = f'<rect x="35" y="30" width="8" height="40" fill="{accent_color}" opacity="0.8"/><rect x="57" y="30" width="8" height="40" fill="{accent_color}" opacity="0.8"/><path d="M 30 30 L 70 30 L 65 20 L 35 20 Z" fill="{accent_color}" opacity="0.9"/>'
    else: # 궤도/아트 형상
        inner_motif = f'<ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke="{accent_color}" stroke-width="2" transform="rotate(30 50 50)"/><ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke="{accent_color}" stroke-width="2" transform="rotate(120 50 50)"/>'

    svg_code = f"""
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="mx-auto h-16 w-auto dynamic-museum-logo" data-museum="{museum_name}">
        {base_shape}
        {inner_motif}
        <text x="50" y="58" font-family="'Noto Sans KR', sans-serif" font-weight="900" font-size="22" text-anchor="middle" fill="{txt_color}" style="text-shadow: 1px 1px 3px rgba(0,0,0,0.7);">{short_name}</text>
    </svg>
    """
    return svg_code

directory = '.'

for filename in os.listdir(directory):
    # '~박물관.html'로 끝나는 파일만 타겟팅
    if filename.endswith("미술관.html"):
        filepath = os.path.join(directory, filename)
        
        with open(filepath, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')
            
        museum_name = filename.replace('.html', '')
        changed = False
        
        # 1. 인포박스 로고 처리 (SVG 중복 방지 철저)
        infobox = soup.find(class_=lambda x: x and 'infobox' in x)
        if infobox:
            logo_container = infobox.find(class_=lambda x: x and ('infobox-logo' in x or 'w-full text-center' in x))
            
            if logo_container:
                # 이미 컨테이너 내부에 <svg> 태그가 하나라도 존재하면 무조건 스킵
                has_svg = logo_container.find('svg') is not None
                
                # 수동 이미지 로고가 있는지도 체크
                existing_img = logo_container.find('img')
                has_manual_logo = existing_img and existing_img.get('src') and '로고' in existing_img.get('src')
                
                if not has_svg and not has_manual_logo:
                    logo_container.clear()
                    svg_soup = BeautifulSoup(generate_dynamic_svg(museum_name), 'html.parser')
                    logo_container.append(svg_soup)
                    changed = True

        # 2. 개요 문단 텍스트 위로 [한 열 전체를 차지하는] 전경 이미지 박스 삽입
        overview_heading = soup.find(lambda tag: tag.name == 'h2' and '개요' in tag.get_text())
        
        if overview_heading:
            # 개요 섹션 어딘가에 이미 전경 이미지가 있는지 넉넉하게 체크
            has_img_box = False
            curr = overview_heading.find_next_sibling()
            while curr and curr.name not in ['h2', 'h3']: # 다음 문단 제목 전까지 탐색
                if f'이미지/{museum_name}.webp' in str(curr):
                    has_img_box = True
                    break
                curr = curr.find_next_sibling()

            # 이미지 박스가 없으면 강제 주입 (가로 전체 차지)
            if not has_img_box:
                img_box = soup.new_tag('div', **{'class': 'w-full mb-4 border border-gray-300 bg-white p-2 text-center rounded block clear-both'})
                
                new_img = soup.new_tag('img', src=f'이미지/{museum_name}.webp', alt=f'{museum_name} 전경', **{'class': 'mx-auto max-w-full h-auto max-h-96 object-contain'})
                
                caption = soup.new_tag('div', **{'class': 'text-sm text-gray-600 mt-2 font-bold'})
                caption.string = f'{museum_name} 전경'
                
                img_box.append(new_img)
                img_box.append(caption)
                
                overview_heading.insert_after(img_box)
                changed = True

        # 3. 변경 사항이 있을 때만 파일 저장
        if changed:
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(str(soup))
            print(f'[완료] {filename} : 다이내믹 박물관 로고 및 가로형 전경 이미지 적용')
        else:
            print(f'[패스] {filename} : 이미 로고가 있거나 완벽하게 세팅됨')