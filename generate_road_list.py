import pandas as pd
import os

# ==========================================
# 1. 초성 자동 추출 함수 (수정 불필요)
# ==========================================
CHOSUNG_LIST = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
DOUBLE_TO_SINGLE = {'ㄲ': 'ㄱ', 'ㄸ': 'ㄷ', 'ㅃ': 'ㅂ', 'ㅆ': 'ㅅ', 'ㅉ': 'ㅈ'}

def get_initial_consonant(text):
    if pd.isna(text) or not str(text):
        return '기타'
    first_char = str(text).strip()[0]
    if '가' <= first_char <= '힣':
        ch_index = (ord(first_char) - ord('가')) // 588
        chosung = CHOSUNG_LIST[ch_index]
        return DOUBLE_TO_SINGLE.get(chosung, chosung)
    return '기타'

# ==========================================
# 2. 데이터 불러오기 (여기를 수정하세요!)
# ==========================================
# 🛑 기존에 사용하시던 df 로딩 코드를 여기에 넣으세요!
# (아래는 임시 코드입니다. 지우고 본인 코드로 교체하세요)
# 예: df = pd.read_csv('원본_도로데이터.csv') 
data = {'도로명': ['강무로', '고간로', '남당로', '도변대로', '쌍엽로', '효빈대로', '아소로', '아율로']} 
df = pd.DataFrame(data)

# '초성' 열 자동 추가
df['초성'] = df['도로명'].apply(get_initial_consonant)

# 저장할 초성 목록 미리 뽑아두기 (네비게이션 버튼용)
available_chosungs = sorted(list(set(df['초성'])))


# ==========================================
# 3. HTML 템플릿 영역 (원본 위키 디자인 완벽 복원)
# ==========================================
def get_html_top(current_chosung):
    # 상단 탭 버튼(네비게이션) HTML 조립
    buttons_html = ""
    for ch in available_chosungs:
        # 현재 보고 있는 초성이면 색상을 다르게 표시 (활성화 상태)
        active_class = "bg-blue-100 border-blue-500 text-blue-800 shadow-inner" if ch == current_chosung else "hover:bg-blue-50"
        buttons_html += f'<a href="효빈광역시_도로목록_{ch}.html" class="wiki-btn {active_class} px-3 py-1 font-bold text-lg">{ch}</a>\n'

    return f"""<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>효빈광역시 관내 도로 목록 ({current_chosung}) - 효빈위키</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* 기존 원본 문서의 CSS를 그대로 복원했습니다 */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700;900&display=swap');
        
        :root {{ 
            --wiki-main: #4a5568; 
            --wiki-sub: #edf2f7;
            --wiki-border: #cbd5e0; 
            --wiki-bg: #ffffff; 
            --wiki-text: #2d3748; 
            --wiki-gray-bg: #f7fafc; 
            --wiki-link: #3182ce;
            --wiki-table-header: #4a5568;
            --wiki-table-header-text: #ffffff;
        }}

        body {{ font-family: 'Noto Sans KR', sans-serif; background-color: var(--wiki-bg); color: var(--wiki-text); line-height: 1.6; word-break: keep-all; margin: 0; }}
        .wiki-container {{ max-width: 1400px; margin: 0 auto; padding: 20px 40px; border-left: 1px solid var(--wiki-border); border-right: 1px solid var(--wiki-border); min-height: 100vh; background-color: var(--wiki-bg); }}

        .txt-lvl-1 {{ font-size: 3.0rem !important; font-weight: 900 !important; color: #1a202c; line-height: 1.1; letter-spacing: -1.5px; margin-bottom: 0; }} 
        .title-area {{ display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 2px solid #cbd5e0; margin-bottom: 20px; padding-bottom: 10px; }}
        
        .wiki-btn {{ border: 1px solid #cbd5e0; background: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; color: #4a5568; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 4px; text-decoration: none !important; }}
        .category-box {{ background: var(--wiki-gray-bg); border: 1px solid var(--wiki-border); padding: 8px 12px; font-size: 0.85rem; margin: 15px 0; border-radius: 4px; }}
        
        .wiki-table {{ border-collapse: collapse; width: 100%; margin: 10px 0; border: 1px solid var(--wiki-border); font-size: 0.85rem; }}
        .wiki-table th {{ background-color: var(--wiki-table-header); color: var(--wiki-table-header-text); padding: 10px; border: 1px solid var(--wiki-border); text-align: center; font-weight: bold; white-space: nowrap; position: sticky; top: 0; z-index: 10; }} /* 표 헤더 고정 기능 추가 */
        .wiki-table td {{ padding: 10px; border: 1px solid var(--wiki-border); background: white; vertical-align: middle; }}
        .wiki-table-center {{ text-align: center; }}

        .road-color-box {{ display: inline-block; width: 14px; height: 14px; border-radius: 3px; margin-right: 5px; vertical-align: middle; border: 1px solid #a0aec0; box-shadow: 1px 1px 3px rgba(0,0,0,0.1); }}
        .road-image-preview {{ width: 90px; height: 60px; object-fit: cover; border-radius: 4px; border: 1px solid #cbd5e0; cursor: zoom-in; transition: transform 0.2s, box-shadow 0.2s; background-color: #eee; }}
        .road-image-preview:hover {{ transform: scale(1.05); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }}
    </style>
</head>
<body>
    <!-- 상단 네비게이션바 (원본 유지) -->
    <nav class="text-white p-3 flex justify-between items-center shadow-md sticky top-0 z-50" style="background-color: #7777aa;">
        <div class="flex items-center gap-4 cursor-pointer" onclick="goToLink('index.html')">
            <span class="font-bold text-xl tracking-wider">HyobinWiki</span>
        </div>
    </nav>

    <div class="wiki-container shadow-lg">
        <div class="title-area">
            <!-- 제목에 초성이 함께 표시되도록 수정 -->
            <div class="txt-lvl-1">효빈광역시 관내 도로 목록 ({current_chosung})</div>
            <div class="flex gap-2 mb-1">
                <span class="wiki-btn">문서</span><span class="wiki-btn">토론</span><span class="wiki-btn">편집</span><span class="wiki-btn">역사</span>
            </div>
        </div>

        <div class="category-box">
            <span class="font-bold" style="color: var(--wiki-main);">분류:</span> 
            효빈광역시 | 도로 | 교통 | {current_chosung}목록
        </div>

        <!-- 새로 추가된 자음별 네비게이션 탭 -->
        <div class="flex flex-wrap gap-2 mb-6 p-4 bg-gray-50 border border-gray-200 rounded">
            <span class="font-bold text-gray-700 mr-3 flex items-center">초성 이동:</span>
            {buttons_html}
        </div>

        <!-- 데이터 테이블 시작 -->
        <div class="overflow-x-auto">
            <table class="wiki-table" style="margin: 0;">
                <thead>
                    <tr>
                        <th width="8%">사진</th>
                        <th width="10%">도로명</th>
                        <th width="8%">노선 색상</th>
                        <th width="7%">총 연장</th>
                        <th width="10%">기점</th>
                        <th width="10%">종점</th>
                        <th width="20%">경유 행정구역</th>
                        <th width="14%">경유 버스</th>
                        <th width="13%">주요 시설물</th>
                    </tr>
                </thead>
                <tbody>
"""

html_bottom = """
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
"""

# ==========================================
# 4. 행(<tr>) 생성 함수 (여기도 확인!)
# ==========================================
def generate_table_rows(group_df):
    rows_html = ""
    for index, row in group_df.iterrows():
        # 🛑 기존에 사용하시던 <tr> 태그 조립 코드를 이 안에 그대로 붙여넣으세요!
        # 아래는 임시 예시입니다.
        rows_html += f"""
        <tr class="hover:bg-gray-50 transition-colors">
            <td class="wiki-table-center">
                <img src="이미지/{row['도로명']}.png" alt="{row['도로명']}" class="road-image-preview" loading="lazy" onerror="this.src='https://via.placeholder.com/150x100?text=No+Image'">
            </td>
            <td class="font-bold text-center text-gray-800">{row['도로명']}</td>
            <!-- ... 나머지 컬럼들 ... -->
        </tr>
        """
    return rows_html

# ==========================================
# 5. 분할 및 저장 실행 (메인 로직)
# ==========================================
output_dir = '분할된_도로목록'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# 초성별로 그룹화하여 HTML 파일 생성
for chosung, group_df in df.groupby('초성'):
    print(f"[{chosung}] 초성 도로 데이터 처리 중... ({len(group_df)}개)")
    
    html_top = get_html_top(chosung)
    table_content = generate_table_rows(group_df)
    final_html = html_top + table_content + html_bottom
    
    file_name = f"{output_dir}/효빈광역시_도로목록_{chosung}.html"
    with open(file_name, 'w', encoding='utf-8') as f:
        f.write(final_html)

print("\n🎉 모든 자음별 HTML 문서 분할 생성이 완료되었습니다!")
print(f"생성된 파일들은 [{output_dir}] 폴더를 확인해 주세요.")