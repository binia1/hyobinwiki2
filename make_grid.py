import pandas as pd

# 1. 원본 CSV 데이터 로드 및 병합 (기존과 동일)
roads_df = pd.read_csv('hyobin_road_analysis (1).csv')
buses_df = pd.read_csv('효빈광역시_도로별_경유버스_대장_2026. 5. 3..csv')
facilities_df = pd.read_csv('도로중심_역_및_시설물대장_2026. 5. 3. (6).csv')

merged_df = pd.merge(roads_df, buses_df[['도로명', '경유_버스_목록']], on='도로명', how='left')
facilities_grouped = facilities_df.groupby('인접도로명')['시설물명'].apply(lambda x: ', '.join(x.dropna().unique())).reset_index()
facilities_grouped.rename(columns={'인접도로명': '도로명', '시설물명': '주변 시설물'}, inplace=True)
merged_df = pd.merge(merged_df, facilities_grouped, on='도로명', how='left').fillna('')

# 2. 유저 제공 행정구역 메타데이터 설정
# (광역자치단체, 기초자치단체, 퍼스널 컬러, 로고 경로)
meta_data = [
    ("효빈광역시", "효빈광역시", "#7777aa", "이미지/효빈광역시_흰색로고.png"),
    ("효빈광역시", "중구", "#BB9955", "이미지/중구_흰색로고.png"),
    ("효빈광역시", "동구", "#FF9922", "이미지/동구_흰색로고.png"),
    ("효빈광역시", "서구", "#00AABB", "이미지/서구_흰색로고.png"),
    ("효빈광역시", "남구", "#DDBBFF", "이미지/남구_흰색로고.png"),
    ("효빈광역시", "북구", "#7799CC", "이미지/북구_흰색로고.png"),
    ("효빈광역시", "청엽구", "#006699", "이미지/청엽구_흰색로고.png"),
    ("효빈광역시", "창전구", "#33AAFF", "이미지/창전구_흰색로고.png"),
    ("효빈광역시", "안천구", "#AA66DD", "이미지/안천구_흰색로고.png"),
    ("효빈광역시", "탄성군", "#BBFF64", "이미지/탄성군_흰색로고.png"),
    ("덕빈북도", "덕빈북도", "#4AD898", "이미지/덕북로고흰색.png"),
    ("덕빈북도", "기도군", "#01B7ED", "이미지/기도군.png"),
    ("덕빈북도", "낭원군", "#485EC6", "이미지/낭원군.png"),
    ("덕빈북도", "덕현군", "#FF5800", "이미지/덕현군.png"),
    ("덕빈북도", "약산시", "#F8C8C4", "이미지/약산시.png"),
    ("덕빈북도", "선곡군", "#D6D5CA", "이미지/선곡군.png"),
    ("덕빈북도", "천주시", "#8B4993", "이미지/천주시.png")
]

# 3. 초성 추출 함수
def get_chosung(text):
    if not text: return '기타'
    c = text[0]
    if '가' <= c <= '깋': return 'ㄱ'
    elif '나' <= c <= '닣': return 'ㄴ'
    elif '다' <= c <= '딯': return 'ㄷ'
    elif '라' <= c <= '맇': return 'ㄹ'
    elif '마' <= c <= '밓': return 'ㅁ'
    elif '바' <= c <= '빟': return 'ㅂ'
    elif '사' <= c <= '싷': return 'ㅅ'
    elif '아' <= c <= '잏': return 'ㅇ'
    elif '자' <= c <= '짛': return 'ㅈ'
    elif '차' <= c <= '칳': return 'ㅊ'
    elif '카' <= c <= '킿': return 'ㅋ'
    elif '타' <= c <= '탛': return 'ㅌ'
    elif '파' <= c <= '핗': return 'ㅍ'
    elif '하' <= c <= '힣': return 'ㅎ'
    return '기타'

# 4. 도로 분류 및 맵핑
# 대로(Daero)는 광역단위로, 로(Road)는 기초단위로 분류
chosung_list = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', '기타']

def generate_navbox(broad, district, color, logo):
    is_broad_box = (broad == district)
    title_sub = broad
    title_main = f"관내 {'대로' if is_broad_box else '로'}"
    
    # 해당 구역 도로 필터링
    target_roads = []
    for _, row in merged_df.iterrows():
        road_name = row['도로명']
        full_path = str(row['시작지점']) + str(row['종착지점']) + str(row['경유 행정구역'])
        
        # '대로/고속도로/순환선' 여부 확인
        is_daero = any(kw in road_name for kw in ['대로', '고속도로', '순환선'])
        
        # 광역박스면 '대로'만, 기초박스면 '일반 로'만 포함
        if is_broad_box:
            if is_daero and broad in full_path:
                target_roads.append(road_name)
        else:
            if not is_daero and district in full_path:
                target_roads.append(road_name)
    
    if not target_roads: return ""
    
    target_roads = sorted(list(set(target_roads)))
    
    # 초성별 그룹화
    grouped = {c: [] for c in chosung_list}
    for r in target_roads:
        grouped[get_chosung(r)].append(r)
        
    # 테이블 행 생성
    rows_html = ""
    link_idx = 0
    for c in chosung_list:
        if not grouped[c]: continue
        links = []
        for r in grouped[c]:
            link_idx += 1
            # 사진처럼 붉은색과 파란색 링크를 교차 적용
            color_class = "blue-link" if link_idx % 3 == 0 else "red-link"
            links.append(f'<a href="{r}.html" class="{color_class}">{r}</a>')
        
        td_content = " · ".join(links)
        rows_html += f'<tr><th style="background-color:{color};">{c}</th><td>{td_content}</td></tr>'

    return f"""
    <!-- {district} 둘러보기 틀 -->
    <div class="wiki-navbox" style="border-color: {color};">
        <div class="wiki-navbox-header" style="background-color: {color};">
            <div class="header-content">
                <img src="이미지/{logo}" alt="로고" onerror="this.style.display='none'">
                <div>
                    <div class="title-sub">{title_sub}</div>
                    <div class="title-main">{district} {title_main}</div>
                </div>
            </div>
        </div>
        <details open>
            <summary>[ 펼치기 · 접기 ]</summary>
            <table class="wiki-navbox-table">
                {rows_html}
            </table>
            <div class="wiki-navbox-footer" style="background-color: {color};">
                {broad}의 도로 틀 둘러보기
            </div>
        </details>
    </div>
    """

# 5. 전체 HTML 파일 조립
html_start = """<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<style>
    .wiki-navbox { border: 2px solid #ccc; width: 100%; max-width: 900px; margin: 20px auto; font-family: sans-serif; font-size: 0.85rem; }
    .wiki-navbox-header { color: white; padding: 10px; }
    .header-content { display: flex; align-items: center; justify-content: center; gap: 15px; }
    .header-content img { height: 45px; }
    .title-sub { font-size: 0.9rem; font-weight: bold; }
    .title-main { font-size: 1.25rem; font-weight: 900; }
    
    summary { text-align: center; padding: 5px; cursor: pointer; background: #eee; font-weight: bold; list-style: none; border-bottom: 1px solid #ccc; }
    summary::-webkit-details-marker { display: none; }
    
    .wiki-navbox-table { width: 100%; border-collapse: collapse; background: white; }
    .wiki-navbox-table th { color: white; width: 30px; border: 1px solid #ccc; padding: 8px; font-weight: bold; }
    .wiki-navbox-table td { border: 1px solid #ccc; padding: 8px 15px; line-height: 1.8; text-align: center; }
    
    .wiki-navbox-footer { color: white; text-align: center; padding: 5px; font-weight: bold; font-size: 0.8rem; }
    
    .red-link { color: #d32f2f; text-decoration: none; font-weight: bold; }
    .blue-link { color: #1976d2; text-decoration: none; font-weight: bold; }
    a:hover { text-decoration: underline; }
</style>
</head>
<body>
"""

all_navboxes = ""
for broad, district, color, logo in meta_data:
    all_navboxes += generate_navbox(broad, district, color, logo)

html_end = "</body></html>"

# 6. 파일 저장
with open('행정구역별_맞춤형_둘러보기틀.html', 'w', encoding='utf-8') as f:
    f.write(html_start + all_navboxes + html_end)

print("✅ '행정구역별_맞춤형_둘러보기틀.html' 생성이 완료되었습니다!")