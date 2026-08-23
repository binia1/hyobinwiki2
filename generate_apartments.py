import os

# 설정 파일 및 출력 디렉토리
DATA_FILE = "apartments.txt"
OUTPUT_DIR = "output_wiki"

os.makedirs(OUTPUT_DIR, exist_ok=True)

# 데이터를 구별로 담을 딕셔너리
districts_data = {}

print("아파트 데이터 파싱을 시작합니다...")

# 1. 파일 읽기 및 파싱
with open(DATA_FILE, "r", encoding="utf-8") as f:
  for line in f:
    parts = [p.strip() for p in line.strip().split("\t")]
    if len(parts) < 8:
      continue

    gu = parts[0]
    hangjeongdong = parts[1]
    beopjeongdong = parts[2]
    apt_name = parts[3]
    builder = parts[4]
    households = parts[5]
    level = parts[6]
    move_in = parts[7]
    desc = parts[8] if len(parts) > 8 and parts[8] else ""
    block = parts[9] if len(parts) > 9 and parts[9] else ""
    new_town = parts[10] if len(parts) > 10 and parts[10] else ""

    if gu not in districts_data:
      districts_data[gu] = []

    districts_data[gu].append({
        "hangjeongdong": hangjeongdong,
        "beopjeongdong": beopjeongdong,
        "apt_name": apt_name,
        "builder": builder,
        "households": households,
        "level": level,
        "move_in": move_in,
        "desc": desc,
        "block": block,
        "new_town": new_town,
    })


# 2. 효빈위키 정식 양식 HTML 생성 함수 (f-string 에러 원천 차단 방식)
def generate_wiki_html(gu_name, apts):
  rows_html = ""
  for apt in apts:
    rows_html += f"""
            <tr>
                <td>{apt['hangjeongdong']}</td>
                <td>{apt['beopjeongdong']}</td>
                <td><a href="{apt['apt_name']}.html" class="wiki-link">{apt['apt_name']}</a></td>
                <td>{apt['builder']}</td>
                <td>{apt['households']}</td>
                <td>{apt['move_in']}</td>
                <td class="text-left px-3">{apt['desc']}</td>
            </tr>
            """

  # f-string 대신 일반 멀티라인 문자열과 .replace()를 사용하여 중괄호 충돌 방지
  html_template = """<!DOCTYPE html>
<html lang="ko">
<head>
    <link rel="icon" href="이미지/효빈위키아이콘.webp">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>효빈광역시/__GU_NAME__/아파트 - 효빈위키</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
        
        :root { 
            --wiki-nav: #7777AA; 
            --wiki-header: #BBFF64;
            --wiki-header-text: #000000;
            --wiki-border: #ccc; 
            --wiki-bg: #ffffff; 
            --wiki-text: #373a3c; 
            --wiki-gray-bg: #F9F9FA; 
            --wiki-link: #0022AA; 
        }

        [data-theme='dark'] { 
            --wiki-nav: #444477;
            --wiki-header: #88AA33;
            --wiki-header-text: #ffffff;
            --wiki-border: #444; 
            --wiki-bg: #121212; 
            --wiki-text: #eeeeee; 
            --wiki-link: #0022AA; 
        }

        body { font-family: 'Noto Sans KR', sans-serif; background-color: var(--wiki-bg); color: var(--wiki-text); line-height: 1.6; margin: 0; }
        .wiki-container { max-width: 1280px; margin: 0 auto; padding: 20px 40px; border-left: 1px solid var(--wiki-border); border-right: 1px solid var(--wiki-border); min-height: 100vh; background-color: var(--wiki-bg); display: flex; flex-direction: column; }

        table { border-collapse: collapse !important; width: 100% !important; margin: 15px 0; border: 1px solid var(--wiki-border) !important; }
        th, td { border: 1px solid var(--wiki-border) !important; padding: 8px 6px; text-align: center; vertical-align: middle; font-size: 0.9rem; word-break: break-word; }
        th { background-color: #7777AA; color: white; font-weight: bold; }

        .wiki-link { color: var(--wiki-link); font-weight: bold; cursor: pointer; text-decoration: none; display: inline-block; }
        .wiki-link:hover { text-decoration: underline; }
        
        del { color: #aaa; text-decoration: line-through; }
        [data-theme='dark'] del { color: #777; }

        h1 { font-size: 2.5rem !important; font-weight: 700 !important; margin-bottom: 1.5rem; line-height: 1.2; border-bottom: 2px solid var(--wiki-header); padding-bottom: 10px; }
        h2 { font-size: 1.85rem !important; font-weight: 700 !important; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid var(--wiki-border); padding-bottom: 0.3rem; display: flex; align-items: center; gap: 10px; }
        h2::before { content: ""; display: inline-block; width: 5px; height: 1.8rem; background: var(--wiki-header); }
        
        .nav-logo-box { width: 30px; height: 30px; background: white; color: var(--wiki-main); border-radius: 4px; font-weight: 900; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
        .wiki-tool-btn { padding: 4px 12px; font-size: 11px; border-right: 1px solid var(--wiki-border); cursor: pointer; color: inherit; display: flex; align-items: center; text-decoration: none; }
        #wiki-msg-box { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: white; padding: 10px 24px; border-radius: 50px; font-size: 14px; z-index: 10000; display: none; }
    </style>
    <script src="ad_logic.js"></script>
    <link rel="stylesheet" href="wiki_font_standard.css">
</head>        
<body data-theme="light">
    <div id="wiki-msg-box"></div>

    <nav class="font-sans bg-[#7777AA] text-white p-3 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div class="flex items-center gap-2">
            <div class="nav-logo-box">H</div>
            <a href="index.html" class="font-bold text-xl cursor-pointer no-underline text-white">HyobinWiki</a>
            <div class="hidden md:flex gap-3 text-sm opacity-90 ml-4">
                <a href="index.html" class="hover:underline font-bold text-white no-underline">대문</a>
                <a href="최근_변경.html" class="hover:underline text-white no-underline">최근 변경</a>
                <a href="최근_토론.html" class="hover:underline text-white no-underline">최근 토론</a>
            </div>
        </div>
        <div class="flex flex-col items-end gap-1">
            <div class="flex items-center gap-2">
                <div class="hidden lg:flex items-center gap-1 mr-2">
                    <a href="편집요청.html" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold">편집요청</a>
                    <a href="최근_토론.html" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold">토론</a>
                    <a href="역사.html" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold">역사</a>
                    <a href="즐겨찾기.html" class="bg-[#666699] hover:bg-[#555588] text-yellow-300 text-xs px-2 py-1 rounded transition-colors no-underline font-bold" title="즐겨찾기">★</a>
                    <a href="더보기.html" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-1 rounded transition-colors no-underline font-bold flex items-center gap-1">더보기 <span class="text-[9px]">▼</span></a>
                </div>
                <input type="text" id="headerSearchInput" placeholder="문서 검색" class="p-1 px-3 rounded text-black text-sm focus:outline-none border-none shadow-inner w-32 md:w-48" onkeypress="if(event.keyCode==13) { handleSearch('headerSearchInput'); }">
                <button onclick="handleSearch('headerSearchInput')" class="bg-[#555588] p-1 px-3 rounded text-xs transition-colors shadow-inner font-bold">🔍</button>
            </div>
        </div>
    </nav>

    <div class="wiki-container shadow-lg">
        <div class="flex justify-between items-end mb-4">
            <h1 class="m-0 border-none p-0">효빈광역시/__GU_NAME__/아파트</h1>
            <div class="flex bg-white border rounded overflow-hidden shadow-sm mb-4">
                <a href="토론.html" class="wiki-tool-btn">토론</a>
                <a href="수정.html" class="wiki-tool-btn">편집</a>
                <a href="역사.html" class="wiki-tool-btn">역사</a>
                <div class="px-3 py-1 text-[11px] cursor-pointer hover:bg-gray-100" onclick="showMsg('즐겨찾기에 추가됨')">★</div>
            </div>
        </div>

        <!-- 분류 박스 -->
        <div class="category-box bg-white border p-2 mb-4 text-xs">
            <span class="font-bold text-[#7777AA]">분류:</span> 
            <a href="효빈광역시.html" class="wiki-link">효빈광역시</a> | 
            <a href="효빈광역시의_건축물.html" class="wiki-link">효빈광역시의 건축물</a> |
            <a href="아파트.html" class="wiki-link">아파트</a> |
            <a href="__GU_NAME__.html" class="wiki-link">__GU_NAME__</a>
        </div>

        <!-- 아파트 내비게이션 박스 (분류 박스 바로 아래 배치) -->
        <div id="hb-apt-nav"></div>
        <script src="js/효빈아파트.js"></script>

        <h2>1. 개요</h2>
        <p>
            <a href="효빈광역시.html" class="wiki-link">효빈광역시</a> <a href="__GU_NAME__.html" class="wiki-link">__GU_NAME__</a> 내에 위치한 아파트 및 공동주택 단지들을 정리한 문서.
        </p>

        <h2>2. 관내 아파트 단지 현황</h2>
        <table>
            <thead>
                <tr>
                    <th style="width: 12%;">행정동</th>
                    <th style="width: 12%;">법정동</th>
                    <th style="width: 18%;">아파트명</th>
                    <th style="width: 12%;">시공사</th>
                    <th style="width: 10%;">세대수</th>
                    <th style="width: 10%;">입주연월</th>
                    <th style="width: 26%;">특징 및 설명</th>
                </tr>
            </thead>
            <tbody>
                __ROWS_HTML__
            </tbody>
        </table>

        <div id="footer-container"></div>
        <script src="assets/load-footer.js"></script>
    </div>

    <script>
        function showMsg(text) {
            const box = document.getElementById('wiki-msg-box');
            box.innerText = text; box.style.display = 'block';
            setTimeout(() => { box.style.display = 'none'; }, 2000);
        }
    </script>
    <script src="assets/wiki_index.js"></script>
    <script src="assets/hb_wiki_core.js"></script>
    <script src="assets/hb_index_scripts.js"></script>
    <script src="assets/jana.js"></script>
</body>
</html>
"""

  return (
      html_template.replace("__GU_NAME__", gu_name)
      .replace("__ROWS_HTML__", rows_html)
  )


# 3. 구별로 파싱 및 파일 생성 실행
for gu, apts in districts_data.items():
  output_filename = os.path.join(OUTPUT_DIR, f"{gu}_아파트.html")
  html_content = generate_wiki_html(gu, apts)
  with open(output_filename, "w", encoding="utf-8") as out_file:
    out_file.write(html_content)
  print(f"생성 완료: {output_filename} (총 {len(apts)}개 단지)")

print("\n모든 구별 아파트 문서 파일이 에러 없이 완벽하게 생성되었습니다!")