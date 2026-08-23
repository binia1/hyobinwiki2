import glob

# js 폴더 안의 pop.js 파일들만 찾아서 표 스타일만 교체합니다. (HTML 파일 절대 안 건드림)
js_files = glob.glob("js/*_pop.js")

for path in js_files:
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # 겹침을 유발하는 기존 스타일을 가로 스크롤 강제 스타일로 교체
    old_style = 'style="width: 100%; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;"'
    new_style = 'style="width: max-content !important; min-width: 100% !important; table-layout: auto !important; border-collapse: collapse; text-align: right; font-size: 0.75em; white-space: nowrap; border: 1px solid #ccc;"'
    
    if old_style in text:
        text = text.replace(old_style, new_style)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)

print("씨발 눈뽕 표 겹침 현상, 모든 JS 파일에서 수정 완료!")