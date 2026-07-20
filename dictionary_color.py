import json
import os

# 1. 아까 저장한 JSON 파일 읽어오기
json_filename = "효빈위키_CSS_색상사전.json"
html_filename = "효빈위키_컬러팔레트.html"

try:
    with open(json_filename, "r", encoding="utf-8") as f:
        color_dict = json.load(f)
except FileNotFoundError:
    print(f"❌ {json_filename} 파일을 찾을 수 없습니다. 이전 스크립트를 먼저 실행해 주세요.")
    exit()

# 2. HTML 기본 골대 및 CSS 스타일 (디자인)
html_content = """
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>🎨 효빈위키 전체 CSS 색상 팔레트</title>
    <style>
        body { font-family: 'Noto Sans KR', sans-serif; background-color: #f4f6fa; padding: 30px; margin: 0; }
        h1 { text-align: center; color: #333; margin-bottom: 40px; font-weight: 900; letter-spacing: -1px; }
        .grid-container { 
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); 
            gap: 20px; 
            max-width: 1400px; 
            margin: 0 auto; 
        }
        .color-card { 
            background: #ffffff; 
            border-radius: 10px; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.05); 
            overflow: hidden; 
            display: flex; 
            align-items: stretch;
            transition: transform 0.2s;
        }
        .color-card:hover { transform: translateY(-5px); box-shadow: 0 8px 15px rgba(0,0,0,0.1); }
        .color-box { width: 100px; flex-shrink: 0; border-right: 1px solid #eee; }
        .color-info { padding: 15px; flex-grow: 1; }
        .hex-code { font-size: 1.2rem; font-weight: 900; color: #222; margin-bottom: 8px; font-family: monospace; }
        .var-badge { 
            display: inline-block; 
            background: #f0f0f5; 
            color: #555; 
            padding: 4px 8px; 
            border-radius: 4px; 
            font-size: 0.75rem; 
            margin: 0 4px 4px 0; 
            font-weight: bold;
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <h1>🎨 효빈위키 전체 CSS 색상 팔레트 (총 {total_colors}색)</h1>
    <div class="grid-container">
"""

# 3. 색상 사전 데이터를 돌면서 카드 생성
for hex_code, var_list in color_dict.items():
    # '!important'가 붙어있는 경우 순수 색상값만 추출해 배경색으로 사용
    clean_hex = hex_code.replace(" !important", "").strip()
    
    # 변수명들을 예쁜 배지(Badge) 모양으로 만들기
    badges_html = "".join([f"<span class='var-badge'>{var}</span>" for var in var_list])
    
    # 카드 HTML 추가
    html_content += f"""
        <div class="color-card">
            <div class="color-box" style="background-color: {clean_hex};"></div>
            <div class="color-info">
                <div class="hex-code">{hex_code.upper()}</div>
                <div>{badges_html}</div>
            </div>
        </div>
    """

# 4. HTML 닫기
html_content += """
    </div>
</body>
</html>
"""

# HTML 파일로 저장
with open(html_filename, "w", encoding="utf-8") as f:
    f.write(html_content.replace("{total_colors}", str(len(color_dict))))

print(f"🎉 성공! [{html_filename}] 파일이 생성되었습니다.")
print("👉 폴더에서 이 HTML 파일을 더블클릭하여 웹 브라우저로 열어보세요.")