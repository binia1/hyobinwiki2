document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("chiwon-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 치원 4인방 전용 틀 스타일 (지적이고 단호한 네이비/스틸블루 테마) */
        .nw-frame-chiwon { border: 2px solid #2C3E50; background: linear-gradient(to right, #2C3E50, #4CA1AF); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-chiwon { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #2C3E50; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #2C3E50; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #2C3E50; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입 (치원 4인방)
    const navHtml = `
        <div class="nw-frame-chiwon shadow-sm">
            <div class="nw-title-chiwon">
                <a href="치원남부중학교_4인방.html" class="font-black text-xl hover:underline" style="color: #2C3E50; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 치원 4인방 전용 내장 SVG 로고 (심판과 정의를 상징하는 천칭) -->
                    <svg viewBox="0 0 100 100" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 15 L50 85 M20 35 L80 35 M20 35 L10 65 L30 65 Z M80 35 L70 65 L90 65 Z" stroke="#2C3E50" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                        <path d="M10 65 Q20 75 30 65 M70 65 Q80 75 90 65" stroke="#2C3E50" stroke-width="4" fill="none"/>
                        <circle cx="50" cy="85" r="8" fill="#2C3E50"/>
                    </svg>
                    치원남부중학교 절친 4인방 (윤간석 심판 연대)
                </a>
            </div>
            
            <!-- 1. 핵심 멤버 (절친 4인방) -->
            <details id="nw-core-box" class="nw-box" style="border-color:#2980B9;">
                <summary style="background-color:#2980B9; color:white;" class="outline-none">⚖️ 윤간석 심판 연대 (절친 4인방) ▼</summary>
                <table class="nw-tbl" style="border-color:#2980B9;">
                    <tr>
                        <th class="w-[12%] bg-[#EAF2F8] text-[#154360]">멤<br>버</th>
                        <td class="w-[22%]"><a href="이세리.html" class="nw-link"><img src="이미지/이세리.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">이세리<span class="nw-subtext">(사복과 / 탱커·록스타)</span></a></td>
                        <td class="w-[22%]"><a href="강수아.html" class="nw-link"><img src="이미지/강수아.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">강수아<span class="nw-subtext">(정외과 / 치밀한 설계자)</span></a></td>
                        <td class="w-[22%]"><a href="안세영.html" class="nw-link"><img src="이미지/안세영.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">안세영<span class="nw-subtext">(물리학과 / 이과 브레인)</span></a></td>
                        <td class="w-[22%]"><a href="송선영.html" class="nw-link"><img src="이미지/송선영.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">송선영<span class="nw-subtext">(의과대학 / 금강불괴 힐러)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 심판 대상 (적폐 3대장) -->
            <details id="nw-villains-box" class="nw-box" style="border-color:#C0392B;">
                <summary style="background-color:#C0392B; color:white;" class="outline-none">🔥 치원군 척결 대상 (적폐 3대장) ▼</summary>
                <table class="nw-tbl" style="border-color:#C0392B;">
                    <tr>
                        <th class="w-[12%] bg-[#FDEDEC] text-[#7B241C]">대<br>상</th>
                        <td class="w-[29%]"><a href="윤간석.html" class="nw-link"><img src="이미지/윤간석.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">윤간석<span class="nw-subtext">(전 교장 / 철천지원수 1호)</span></a></td>
                        <td class="w-[29%]"><a href="백민우.html" class="nw-link"><img src="이미지/백민우.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">백민우<span class="nw-subtext">(전 군수 / 장학금 강탈범)</span></a></td>
                        <td class="w-[29%]"><a href="연예원.html" class="nw-link"><img src="이미지/연예원.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">연예원<span class="nw-subtext">(일진 / 완벽한 인과응보)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 3. 주요 조력자 및 은인 -->
            <details id="nw-allies-box" class="nw-box mb-1" style="border-color:#27AE60;">
                <summary style="background-color:#27AE60; color:white;" class="outline-none">🛡️ 주요 조력자 및 든든한 은인 ▼</summary>
                <table class="nw-tbl" style="border-color:#27AE60;">
                    <tr>
                        <th class="w-[12%] bg-[#EAFAF1] text-[#145A32]">조<br>력</th>
                        <td class="w-[44%]"><a href="이성화.html" class="nw-link"><div class="nw-img bg-[#ccc] flex items-center justify-center text-3xl">👴</div>치원군 할아버지 연합<span class="nw-subtext">(이성화·신은희 / 무적의 방패막이)</span></a></td>
                        <td class="w-[44%]"><a href="오한숙.html" class="nw-link"><img src="이미지/오한숙.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">오한숙<span class="nw-subtext">(참스승 / 정신적 지주)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    const core4 = ["이세리", "강수아", "안세영", "송선영"];
    const villains = ["윤간석", "백민우", "연예원"];
    const allies = ["이성화", "신은희", "오한숙", "치원군 할아버지 연합"];

    let isMatched = false;

    if (core4.includes(pageTitle)) {
        const box = document.getElementById('nw-core-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (villains.includes(pageTitle)) {
        const box = document.getElementById('nw-villains-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (allies.includes(pageTitle)) {
        const box = document.getElementById('nw-allies-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우 기본으로 '핵심 멤버' 박스를 엽니다.
    if (!isMatched) {
        const box = document.getElementById('nw-core-box');
        if(box) box.open = true;
    }
});