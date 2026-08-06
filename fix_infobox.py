import os
import re

# HTML 파일들이 있는 디렉토리 경로 (예: 현재 디렉토리)
target_directory = "."

# 찾을 기존 패턴 (예시 구조)
# infobox-title-row 안에 infobox-logo가 포함된 기존 형태
old_pattern = re.compile(
    r'<div class="infobox-title-row">.*?'
    r'<div class="infobox-logo">.*?</div>.*?'
    r'<div class="infobox-name">.*?</div>.*?'
    r'</div>',
    re.DOTALL
)

# 교체할 새로운 구조 (지도 크기 250px에 맞춘 빵빵한 이미지 영역 + 타이틀)
def get_new_content(match):
    # 기존 이름 영역 등의 내용을 추출하거나 새로 구성
    return '''<div class="infobox-title-row" style="padding: 15px; text-align: center; border-bottom: 1px solid #ccc; background-color: #fff;">
<div class="infobox-name" style="width: 100%;">
<div class="text-xl font-bold">안천지구</div>
<div class="text-[10px] opacity-70 uppercase">Ancheon District / 安川地區</div>
</div>
</div>
<div class="infobox-image border-b border-[#ccc]" style="width: 100%; height: 250px; overflow: hidden; background: #eee;">
<img alt="전경" src="이미지/안천역_일반열차_전경.webp" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentNode.innerHTML='<div class=\'flex flex-col items-center justify-center w-full h-full text-sm text-gray-400 font-bold bg-gray-100\'>안천지구<br>안천역 전경</div>'"/>
</div>'''

# 폴더 내 모든 HTML 파일 순회
for root, dirs, files in os.walk(target_directory):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # 패턴 매치 확인 및 교체
            new_content, count = re.subn(old_pattern, get_new_content, content)
            if count > 0:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"[변환 완료] {file_path} ({count}개소 수정)")