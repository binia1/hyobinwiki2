document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("donggu-trash-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 동구대 쓰레기 5인방 전용 틀 스타일 (오물, 경고, 빌런 테마) */
        .nw-frame-trash { border: 2px solid #5A4A42; background: linear-gradient(to right, #5A4A42, #7D6B5D); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .nw-title-trash { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #5A4A42; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #8B0000; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #8B0000; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입 (쓰레기 5인방)
    const navHtml = `
        <div class="nw-frame-trash shadow-sm">
            <div class="nw-title-trash">
                <a href="동구대_쓰레기_5인방.html" class="font-black text-xl hover:underline" style="color: #5A4A42; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 인간 폐기물을 상징하는 쓰레기통 SVG 로고 -->
                    <svg viewBox="0 0 100 100" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 25 L70 25 L75 35 L25 35 Z" fill="#666" />
                        <path d="M42 15 L58 15 L58 25 L42 25 Z" fill="#888" />
                        <path d="M30 35 L70 35 L62 90 L38 90 Z" fill="#999" />
                        <line x1="42" y1="45" x2="44" y2="80" stroke="#444" stroke-width="4" stroke-linecap="round"/>
                        <line x1="50" y1="45" x2="50" y2="80" stroke="#444" stroke-width="4" stroke-linecap="round"/>
                        <line x1="58" y1="45" x2="56" y2="80" stroke="#444" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                    동구대 쓰레기 5인방 (인간 폐기물 카르텔)
                </a>
            </div>
            
            <!-- 1. 핵심 멤버 (인간 폐기물 5인조) -->
            <details id="nw-core-box" class="nw-box" style="border-color:#8B0000;">
                <summary style="background-color:#8B0000; color:white;" class="outline-none">🗑️ 인간 폐기물 5인조 (전원 영구퇴학·구속) ▼</summary>
                <table class="nw-tbl" style="border-color:#8B0000;">
                    <tr>
                        <th class="w-[10%] bg-[#F9EBEA] text-[#7B241C]">멤<br>버</th>
                        <td class="w-[18%]"><a href="김재욱.html" class="nw-link"><img src="이미지/김재욱_머그샷.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">김재욱<span class="nw-subtext">(리더 / 찌질한 금수저)</span></a></td>
                        <td class="w-[18%]"><a href="개기원.html" class="nw-link"><img src="이미지/개기원.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">개기원<span class="nw-subtext">(단신 뽀록 헬창)</span></a></td>
                        <td class="w-[18%]"><a href="우중호.html" class="nw-link"><img src="이미지/우중호.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">우중호<span class="nw-subtext">(발정난 나르시시스트)</span></a></td>
                        <td class="w-[18%]"><a href="송채린.html" class="nw-link"><img src="이미지/송채린.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">송채린<span class="nw-subtext">(권력형 스폰녀 1호)</span></a></td>
                        <td class="w-[18%]"><a href="우민지.html" class="nw-link"><img src="이미지/우민지.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">우민지<span class="nw-subtext">(권력형 스폰녀 2호)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 배후 및 적폐 세력 -->
            <details id="nw-enablers-box" class="nw-box" style="border-color:#6E2C00;">
                <summary style="background-color:#6E2C00; color:white;" class="outline-none">🦠 배후 스폰서 및 맹신하는 범죄자들 ▼</summary>
                <table class="nw-tbl" style="border-color:#6E2C00;">
                    <tr>
                        <th class="w-[12%] bg-[#F6DDCC] text-[#6E2C00]">적<br>폐</th>
                        <td class="w-[29%]"><a href="경철래.html" class="nw-link"><img src="이미지/경철래.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">경철래<span class="nw-subtext">(추악한 꼰대 교수 / 스폰서)</span></a></td>
                        <td class="w-[29%]"><a href="윤대환.html" class="nw-link"><img src="이미지/윤대환.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">윤대환<span class="nw-subtext">(효빈 최악의 범죄자 시장)</span></a></td>
                        <td class="w-[29%]"><a href="석형준.html" class="nw-link"><img src="이미지/석형준.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">석형준<span class="nw-subtext">(전 도지사 / 숭배 대상)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 3. 심판자 및 철퇴 -->
            <details id="nw-judges-box" class="nw-box mb-1" style="border-color:#154360;">
                <summary style="background-color:#154360; color:white;" class="outline-none">🔨 참교육 및 완벽한 심판자들 ▼</summary>
                <table class="nw-tbl" style="border-color:#154360;">
                    <tr>
                        <th class="w-[12%] bg-[#EAF2F8] text-[#154360]">철<br>퇴</th>
                        <td class="w-[29%]"><a href="오마리.html" class="nw-link"><div class="nw-img bg-[#ccc] flex items-center justify-center text-xs">✨</div>오마리 일행<span class="nw-subtext">(피해자 및 최후의 승자)</span></a></td>
                        <td class="w-[29%]"><a href="박효빈.html" class="nw-link"><img src="이미지/박효빈.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">박효빈<span class="nw-subtext">(효빈시장 / 징벌적 철퇴)</span></a></td>
                        <td class="w-[29%]"><a href="지선진.html" class="nw-link"><img src="이미지/지선진.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">지선진<span class="nw-subtext">(국회의원 / 국회 감사)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    const core5 = ["김재욱", "개기원", "우중호", "송채린", "우민지", "동구대 쓰레기 5인방"];
    const enablers = ["경철래", "윤대환", "석형준"];
    const judges = ["오마리", "오하리", "하마루", "성공린", "박효빈", "지선진", "김성송"];

    let isMatched = false;

    if (core5.includes(pageTitle)) {
        const box = document.getElementById('nw-core-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (enablers.includes(pageTitle)) {
        const box = document.getElementById('nw-enablers-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (judges.includes(pageTitle)) {
        const box = document.getElementById('nw-judges-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우 기본으로 '핵심 멤버' 박스를 엽니다.
    if (!isMatched) {
        const box = document.getElementById('nw-core-box');
        if(box) box.open = true;
    }
});