import os
import re

# HTML 파일들이 있는 폴더 경로 (현재 폴더)
folder_path = "./" 

# '군', '시', '면', '읍', '동', '리'로 끝나고 뒤에 바로 '_지도.png'가 붙는 경우만 잡는 정규식
# 예: 이미지/하산군_지도.png (O), 이미지/청엽동_지도.png (O)
# 예외: 이미지/캠퍼스_지도.png (X), 이미지/관광지도.png (X)
pattern = re.compile(
    r'<img[^>]*src=["\']이미지/([^/"\']+[군시면읍동리])_지도\.png["\'][^>]*>', 
    re.IGNORECASE | re.DOTALL
)

# 폴더 내의 모든 파일 탐색
for filename in os.listdir(folder_path):
    if filename.endswith(".html"):
        # 문서 제목 추출 (예: "하산군.html" -> "하산군")
        doc_title = filename.replace(".html", "")
        filepath = os.path.join(folder_path, filename)
        
        # 원본 HTML 읽기
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # 행정구역 지도 패턴이 발견될 경우에만 치환
        if pattern.search(content):
            
            def replace_map(match):
                # 추출된 이름 (예: 하산군, 효빈시, 토진읍 등)
                map_name = match.group(1) 
                
                return f"""<div class="w-full bg-[#f9f9f9] border-t border-b">
                    <div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
                        <iframe src="https://binia1.github.io/mymap/?name={map_name}" 
                                style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
                        </iframe>
                    </div>
                    <div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        {doc_title} 지도 (인터랙티브)
                    </div>
                </div>"""
            
            # 코드 교체
            new_content = pattern.sub(replace_map, content)
            
            # 변경된 내용을 덮어쓰기
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"✅ {filename} 행정구역 지도 코드 변환 완료!")