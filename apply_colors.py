import os
from bs4 import BeautifulSoup

# 효빈광역시 및 덕빈남/북도 행정구역 퍼스널 컬러 데이터
region_colors = {
    "효빈광역시": "#7777aa",
    "중구": "#BB9955",
    "동구": "#FF9922",
    "서구": "#00AABB",
    "남구": "#DDBBFF",
    "북구": "#7799CC",
    "청엽구": "#006699",
    "창전구": "#33AAFF",
    "안천구": "#AA66DD",
    "탄성군": "#BBFF64",
    "덕빈북도": "#4AD898",
    "강주시": "#ffc94a",
    "계성시": "#ED7D95",
    "군천시": "#E7D600",
    "기도군": "#01B7ED",
    "낭원군": "#485EC6",
    "덕현군": "#FF5800",
    "모제군": "#A664A0",
    "반양군": "#D81C2F",
    "상안군": "#84C36E",
    "서진시": "#9CA5B9",
    "서해시": "#37B484",
    "선곡군": "#D6D5CA",
    "약산시": "#F8C8C4",
    "저천군": "#1D1D1D",
    "전산시": "#FF7F27",
    "치원군": "#aa7799",
    "천주시": "#8B4993",
    "빈주시": "#ffeeaa",
    "궁하구": "#8B4993",
    "천성구": "#8B4993",
    "빈성구": "#ffeeaa",
    "가원구": "#ffeeaa",
    "장기구": "#ffeeaa",
    "덕빈남도": "#335566",
    "매산군": "#A0FFF9",
    "매성시": "#FF6E90",
    "비천시": "#74F466",
    "석창군": "#0000A0",
    "방산시": "#FFF442",
    "분주군": "#FF3535",
    "고포군": "#B2FFDD",
    "곡천군": "#FF51C4",
    "인곡군": "#4cd2e2",
    "관수군": "#e49dfd",
    "운진군": "#bbff64",
    "두원군": "#e3ba3a",
    "마진시": "#ff99be",
    "덕주시": "#ff9ea9",
    "조전구": "#ff9ea9",
    "덕산구": "#ff9ea9",
    "하정시": "#ff3b72",
    "원안군": "#00aabb",
    "낙주시": "#bb0033"
}

def update_html_files(directory):
    # 지정한 폴더 내의 모든 HTML 파일을 순회합니다.
    for filename in os.listdir(directory):
        if not filename.endswith(".html"):
            continue

        # 파일명에서 확장자를 제외하여 지역명 추출 (예: '중구.html' -> '중구')
        region_name = filename.replace(".html", "")
        
        # 딕셔너리에 등록된 지역이 아니면 건너뜁니다.
        if region_name not in region_colors:
            continue
            
        color_code = region_colors[region_name]
        filepath = os.path.join(directory, filename)

        # HTML 문서를 UTF-8 인코딩으로 불러오기 (한글 깨짐 방지)
        with open(filepath, 'r', encoding='utf-8') as file:
            soup = BeautifulSoup(file, 'html.parser')

        # '1. 개요' 제목 태그 찾기 (h1, h2, h3 등 헤딩 태그 검사)
        overview_heading = None
        for heading in soup.find_all(['h1', 'h2', 'h3', 'h4']):
            if '1. 개요' in heading.get_text():
                overview_heading = heading
                break

        # 개요 문단을 찾았다면 나무위키 스타일의 이미지 프레임 삽입
        if overview_heading:
            # 전체를 감싸는 틀 (border와 둥근 모서리 적용)
            container = soup.new_tag('div')
            container['style'] = "width: 100%; max-width: 500px; margin: 15px 0; border: 1px solid #cccccc; border-radius: 4px; overflow: hidden;"

            # 이미지 태그 생성 (경로는 요구사항에 맞춰 '이미지/한국어이름.png'로 고정)
            img_tag = soup.new_tag('img')
            img_tag['src'] = f"이미지/{region_name}청.png"
            img_tag['alt'] = f"{region_name}청 전경"
            img_tag['style'] = "width: 100%; display: block; height: auto;"

            # 하단 퍼스널 컬러 적용 캡션 바
            caption_tag = soup.new_tag('div')
            caption_tag['style'] = f"background-color: {color_code}; color: #ffffff; text-align: center; padding: 10px; font-weight: bold; font-size: 15px;"
            caption_tag.string = f"{region_name}청"

            # 컨테이너에 이미지와 캡션을 조립
            container.append(img_tag)
            container.append(caption_tag)

            # '1. 개요' 태그 바로 아래에 삽입
            overview_heading.insert_after(container)

            # 변경된 내용을 원본 파일에 덮어쓰기 (인코딩 유지)
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(str(soup))
                
            print(f"[{region_name}] 문서 업데이트 완료! (컬러: {color_code}, 이미지 경로: 이미지/{region_name}청.png)")
        else:
            print(f"[{region_name}] 문서에 '1. 개요' 문단을 찾을 수 없습니다.")

# 스크립트 실행 (HTML 파일들이 위치한 경로를 입력하세요. 현재 폴더일 경우 '.' 사용)
target_directory = "." 
update_html_files(target_directory)