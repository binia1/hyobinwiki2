document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hyobin-cv-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 효빈 철도 캐릭터 성우진 전용 틀 스타일 (아이돌/서브컬처 팝 테마) */
        .nw-frame-cv { border: 2px solid #9856FF; background: linear-gradient(to right, #9856FF, #FF8899); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .nw-title-cv { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #9856FF; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 65px; height: 65px; object-fit: cover; border-radius: 50%; margin: 0 auto 6px; display: block; border: 2px solid #eee; transition: transform 0.2s, border-color 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.08); border-color: #9856FF; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; font-size: 0.85rem; }
        .nw-link:hover { text-decoration: underline; color: #9856FF; }
        .nw-cv-info { font-size: 0.75rem; margin-top: 6px; line-height: 1.3; background: #f8f9fa; padding: 4px; border-radius: 4px; border: 1px solid #e9ecef; }
        [data-theme='dark'] .nw-cv-info { background: #2a2b2f; border-color: #444; }
        .nw-kr-cv { font-weight: bold; color: #333; }
        [data-theme='dark'] .nw-kr-cv { color: #ccc; }
        .nw-kr-cv:hover { text-decoration: underline; color: #EE0022; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입
    const navHtml = `
        <div class="nw-frame-cv shadow-sm">
            <div class="nw-title-cv">
                <a href="레일_루미네.html" class="font-black text-xl hover:underline" style="color: #9856FF; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 마이크와 철도를 형상화한 SVG 로고 -->
                    <svg viewBox="0 0 100 100" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="35" r="15" fill="#FF8899"/>
                        <rect x="45" y="50" width="10" height="30" fill="#9856FF" rx="3"/>
                        <path d="M 30 45 A 20 20 0 0 0 70 45" fill="none" stroke="#6677CC" stroke-width="5" stroke-linecap="round"/>
                        <line x1="50" y1="80" x2="50" y2="95" stroke="#6677CC" stroke-width="5"/>
                        <line x1="35" y1="95" x2="65" y2="95" stroke="#6677CC" stroke-width="5" stroke-linecap="round"/>
                    </svg>
                    효빈권 전철 캐릭터(Rail-Lumine) 성우진
                </a>
            </div>
            
            <!-- 1. 그룹 1: HAF 오리지널 라인업 (1~4호선) -->
            <details id="nw-gen1-box" class="nw-box" style="border-color:#0077DD;">
                <summary style="background-color:#0077DD; color:white;" class="outline-none">🎤 HAF 오리지널 개국공신 (1~4호선) ▼</summary>
                <table class="nw-tbl" style="border-color:#0077DD;">
                    <tr>
                        <th class="w-[10%] bg-[#E6F2FF] text-[#005BAC]">성<br>우</th>
                        <!-- 1호선 고나미 -->
                        <td class="w-[22.5%]">
                            <a href="세토_아사미.html" class="nw-link"><img src="이미지/세토_아사미.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 세토 아사미</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="박지윤.html" class="nw-kr-cv">박지윤</a><br>
                                <a href="고나미.html" class="hover:underline font-bold text-xs" style="color:#0077DD;">[1호선] 고나미</a>
                            </div>
                        </td>
                        <!-- 2호선 하루빈 -->
                        <td class="w-[22.5%]">
                            <a href="우치다_마아야.html" class="nw-link"><img src="이미지/우치다_마아야.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 우치다 마아야</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="김선혜.html" class="nw-kr-cv">김선혜</a><br>
                                <a href="하루빈.html" class="hover:underline font-bold text-xs" style="color:#00CCAA;">[2호선] 하루빈</a>
                            </div>
                        </td>
                        <!-- 3호선 박라미 -->
                        <td class="w-[22.5%]">
                            <a href="이시카와_유이.html" class="nw-link"><img src="이미지/이시카와_유이.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 이시카와 유이</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="이새아.html" class="nw-kr-cv">이새아</a><br>
                                <a href="박라미.html" class="hover:underline font-bold text-xs" style="color:#FFCC11;">[3호선] 박라미</a>
                            </div>
                        </td>
                        <!-- 4호선 다로나 -->
                        <td class="w-[22.5%]">
                            <a href="타네자키_아츠미.html" class="nw-link"><img src="이미지/타네자키_아츠미.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 타네자키 아츠미</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="윤아영.html" class="nw-kr-cv">윤아영</a><br>
                                <a href="다로나.html" class="hover:underline font-bold text-xs" style="color:#FF5522;">[4호선] 다로나</a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 2. 그룹 2: 넥스트 제너레이션 (5~8호선) -->
            <details id="nw-gen2-box" class="nw-box" style="border-color:#EE0022;">
                <summary style="background-color:#EE0022; color:white;" class="outline-none">🎧 넥스트 제너레이션 (5~8호선) ▼</summary>
                <table class="nw-tbl" style="border-color:#EE0022;">
                    <tr>
                        <th class="w-[10%] bg-[#FDE6E9] text-[#AA0011]">성<br>우</th>
                        <!-- 5호선 미소하 -->
                        <td class="w-[18%]">
                            <a href="쿠노_미사키.html" class="nw-link"><img src="이미지/쿠노_미사키.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 쿠노 미사키</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="김채하.html" class="nw-kr-cv">김채하</a><br>
                                <a href="미소하.html" class="hover:underline font-bold text-xs" style="color:#EE0022;">[5호선] 미소하</a>
                            </div>
                        </td>
                        <!-- 6호선 라세나 -->
                        <td class="w-[18%]">
                            <a href="키토_아카리.html" class="nw-link"><img src="이미지/키토_아카리.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 키토 아카리</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="김율.html" class="nw-kr-cv">김율</a><br>
                                <a href="라세나.html" class="hover:underline font-bold text-xs" style="color:#881188;">[6호선] 라세나</a>
                            </div>
                        </td>
                        <!-- 7호선 임세정 -->
                        <td class="w-[18%]">
                            <a href="스즈키_아이나.html" class="nw-link"><img src="이미지/스즈키_아이나.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 스즈키 아이나</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="윤미나.html" class="nw-kr-cv">윤미나</a><br>
                                <a href="임세정.html" class="hover:underline font-bold text-xs" style="color:#FF8899;">[7호선] 임세정</a>
                            </div>
                        </td>
                        <!-- 7호선 임세하 -->
                        <td class="w-[18%]">
                            <a href="다테_사유리.html" class="nw-link"><img src="이미지/다테_사유리.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 다테 사유리</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="방연지.html" class="nw-kr-cv">방연지</a><br>
                                <a href="임세하.html" class="hover:underline font-bold text-xs" style="color:#FF8899;">[7호선] 임세하</a>
                            </div>
                        </td>
                        <!-- 8호선 유리아 -->
                        <td class="w-[18%]">
                            <a href="사이토_슈카.html" class="nw-link"><img src="이미지/사이토_슈카.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 사이토 슈카</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="장예나.html" class="nw-kr-cv">장예나</a><br>
                                <a href="유리아.html" class="hover:underline font-bold text-xs" style="color:#9856FF;">[8호선] 유리아</a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 3. 그룹 3: 광역망 & 타 지역 연합 (창전/빈효/빈주/덕주) -->
            <details id="nw-gen3-box" class="nw-box mb-1" style="border-color:#33AAFF;">
                <summary style="background-color:#33AAFF; color:white;" class="outline-none">🌟 광역망 & 인접 지자체 연합 (창전·빈효·빈주·덕주) ▼</summary>
                <table class="nw-tbl" style="border-color:#33AAFF;">
                    <tr>
                        <th class="w-[10%] bg-[#E6F5FF] text-[#0066BB]">성<br>우</th>
                        <!-- 창전선 심세이 -->
                        <td class="w-[18%]">
                            <a href="페이튼_나오미.html" class="nw-link"><img src="이미지/페이튼_나오미.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 페이튼 나오미</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="장미.html" class="nw-kr-cv">장미</a><br>
                                <a href="심세이.html" class="hover:underline font-bold text-xs" style="color:#33AAFF;">[창전선] 심세이</a>
                            </div>
                        </td>
                        <!-- 빈효선 전노아 -->
                        <td class="w-[18%]">
                            <a href="마에다_카오리.html" class="nw-link"><img src="이미지/마에다_카오리.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 마에다 카오리</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="김현지.html" class="nw-kr-cv">김현지</a><br>
                                <a href="전노아.html" class="hover:underline font-bold text-xs" style="color:#6677CC;">[빈효선] 전노아</a>
                            </div>
                        </td>
                        <!-- 빈주1호선 박빛나 -->
                        <td class="w-[18%]">
                            <a href="사쿠라_아야네.html" class="nw-link"><img src="이미지/사쿠라_아야네.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 사쿠라 아야네</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="김하영.html" class="nw-kr-cv">김하영</a><br>
                                <a href="박빛나.html" class="hover:underline font-bold text-xs" style="color:#CFBA0F;">[빈주1] 박빛나</a>
                            </div>
                        </td>
                        <!-- 빈주2호선 김소빈 -->
                        <td class="w-[18%]">
                            <a href="하나자와_카나.html" class="nw-link"><img src="이미지/하나자와_카나.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 하나자와 카나</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="김연우.html" class="nw-kr-cv">김연우</a><br>
                                <a href="김소빈.html" class="hover:underline font-bold text-xs" style="color:#C455F6;">[빈주2] 김소빈</a>
                            </div>
                        </td>
                        <!-- 덕주1호선 이덕희 -->
                        <td class="w-[18%]">
                            <a href="신도_아마네.html" class="nw-link"><img src="이미지/신도_아마네.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">🇯🇵 신도 아마네</a>
                            <div class="nw-cv-info">
                                🇰🇷 <a href="박시윤.html" class="nw-kr-cv">박시윤</a><br>
                                <a href="이덕희.html" class="hover:underline font-bold text-xs" style="color:#FF4F91;">[덕주1] 이덕희</a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    // 분류 배열 (캐릭터 이름 또는 성우 이름(한/일)으로 매칭)
    const gen1 = ["고나미", "박지윤", "세토 아사미", "하루빈", "김선혜", "우치다 마아야", "박라미", "이새아", "이시카와 유이", "다로나", "윤아영", "타네자키 아츠미"];
    const gen2 = ["미소하", "김채하", "쿠노 미사키", "라세나", "김율", "키토 아카리", "임세정", "윤미나", "스즈키 아이나", "임세하", "방연지", "다테 사유리", "유리아", "장예나", "사이토 슈카"];
    const gen3 = ["심세이", "장미", "페이튼 나오미", "전노아", "김현지", "마에다 카오리", "박빛나", "김하영", "사쿠라 아야네", "김소빈", "김연우", "하나자와 카나", "이덕희", "박시윤", "신도 아마네"];

    let isMatched = false;

    if (gen1.includes(pageTitle)) {
        const box = document.getElementById('nw-gen1-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (gen2.includes(pageTitle)) {
        const box = document.getElementById('nw-gen2-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (gen3.includes(pageTitle)) {
        const box = document.getElementById('nw-gen3-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우 기본으로 'HAF 오리지널' 박스를 엽니다.
    // (또는 전체가 열려 있게 하려면 아래 분기를 삭제해도 됩니다.)
    if (!isMatched) {
        const box = document.getElementById('nw-gen1-box');
        if(box) box.open = true;
    }
});