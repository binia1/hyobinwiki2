document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hyobin-judges-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 효빈 사법부 덕후 5인방 전용 틀 스타일 (엘리트 법관 / 무관용 철퇴 테마) */
        .nw-frame-judges { border: 2px solid #1A252C; background: linear-gradient(to right, #1A252C, #2C3E50); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .nw-title-judges { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #1A252C; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #D4AF37; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #1A252C; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입 (사법부 덕후 판사 5인방 연대)
    const navHtml = `
        <div class="nw-frame-judges shadow-sm">
            <div class="nw-title-judges">
                <a href="덕후_재판장_5인방.html" class="font-black text-xl hover:underline" style="color: #1A252C; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 사법 정의의 천칭과 덕후의 별을 상징하는 SVG 로고 -->
                    <svg viewBox="0 0 100 100" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 10 L50 90 M20 40 L80 40" stroke="#1A252C" stroke-width="6" stroke-linecap="round"/>
                        <path d="M20 40 L10 60 L30 60 Z M80 40 L70 60 L90 60 Z" stroke="#1A252C" stroke-width="4" fill="none"/>
                        <!-- 왼쪽 저울의 별 (서브컬처 덕력) -->
                        <polygon points="20,48 22,54 28,54 23,58 25,64 20,60 15,64 17,58 12,54 18,54" fill="#D4AF37"/>
                        <!-- 오른쪽 저울의 철퇴 (사법 정의) -->
                        <circle cx="80" cy="56" r="6" fill="#1A252C"/>
                        <path d="M10 60 Q20 75 30 60 M70 60 Q80 75 90 60" stroke="#1A252C" stroke-width="4" fill="none"/>
                        <rect x="40" y="85" width="20" height="5" fill="#1A252C"/>
                    </svg>
                    효빈지법·고법 사법 정의 연대 (성공한 덕후 재판장 5인방)
                </a>
            </div>
            
            <!-- 1. 효빈지방법원 1심 재판장 (무관용의 맷돌) -->
            <details id="nw-district-box" class="nw-box" style="border-color:#2980B9;">
                <summary style="background-color:#2980B9; color:white;" class="outline-none">⚖️ 효빈지방법원 1심 부장판사 (무관용의 철퇴) ▼</summary>
                <table class="nw-tbl" style="border-color:#2980B9;">
                    <tr>
                        <th class="w-[12%] bg-[#EAF2F8] text-[#154360]">1심<br>재판부</th>
                        <td class="w-[29%]"><a href="최원형.html" class="nw-link"><img src="이미지/최_부장판사.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">최원형<span class="nw-subtext">(민사 / 카스밍 오시·사법적 맷돌)</span></a></td>
                        <td class="w-[29%]"><a href="강원승.html" class="nw-link"><img src="이미지/강원승.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">강원승<span class="nw-subtext">(형사 / 마르가레테 오시·불협화음 소거)</span></a></td>
                        <td class="w-[29%]"><a href="하성휘.html" class="nw-link"><img src="이미지/하성휘.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">하성휘<span class="nw-subtext">(형사 / 사요 오시·무관용의 단두대)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 효빈고등법원 2심 재판장 (상식과 조화의 수호자) -->
            <details id="nw-high-box" class="nw-box" style="border-color:#8E44AD;">
                <summary style="background-color:#8E44AD; color:white;" class="outline-none">🏛️ 효빈고등법원 2심 부장판사 (상식과 조화의 수호자) ▼</summary>
                <table class="nw-tbl" style="border-color:#8E44AD;">
                    <tr>
                        <th class="w-[12%] bg-[#F4ECF7] text-[#4A235A]">항소심<br>재판부</th>
                        <td class="w-[44%]"><a href="구정연.html" class="nw-link"><img src="이미지/구정연.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">구정연<span class="nw-subtext">(형사 / 아리사 오시·팩트 폭격기)</span></a></td>
                        <td class="w-[44%]"><a href="양주승.html" class="nw-link"><img src="이미지/양주승.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">양주승<span class="nw-subtext">(형사 / 루이 오시·얼음장 같은 조화)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 3. 소속 법원 및 주요 참교육 대상 -->
            <details id="nw-target-box" class="nw-box mb-1" style="border-color:#7F8C8D;">
                <summary style="background-color:#7F8C8D; color:white;" class="outline-none">🏢 소속 기관 및 주요 참교육 대상 ▼</summary>
                <table class="nw-tbl" style="border-color:#7F8C8D;">
                    <tr>
                        <th class="w-[12%] bg-[#F2F4F4] text-[#424949]">기관<br>&대상</th>
                        <td class="w-[22%]"><a href="효빈지방법원.html" class="nw-link"><img src="이미지/효빈고등법원.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">효빈지방법원<span class="nw-subtext">(사법 정의 1심 보루)</span></a></td>
                        <td class="w-[22%]"><a href="효빈고등법원.html" class="nw-link"><img src="이미지/효빈고등법원.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">효빈고등법원<span class="nw-subtext">(항소심의 팩트 지옥)</span></a></td>
                        <td class="w-[22%]"><a href="조창렬.html" class="nw-link"><img src="이미지/조창렬.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">조창렬 일당<span class="nw-subtext">(징역 15년 / 궤변의 최후)</span></a></td>
                        <td class="w-[22%]"><a href="조진우.html" class="nw-link"><img src="이미지/조진우.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">조진우<span class="nw-subtext">(징역 12년 / 법정모독 즉결)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    // 분류 배열
    const districtJudges = ["최원형", "최 모 부장판사", "강원승", "강 부장판사", "하성휘"];
    const highJudges = ["구정연", "양주승"];
    const targets = ["효빈지방법원", "효빈고등법원", "조창렬", "안농운", "이송윤", "전개욱", "조진우", "김동식", "덕후 재판장 5인방"];

    let isMatched = false;

    if (districtJudges.includes(pageTitle)) {
        const box = document.getElementById('nw-district-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (highJudges.includes(pageTitle)) {
        const box = document.getElementById('nw-high-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (targets.includes(pageTitle)) {
        const box = document.getElementById('nw-target-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우 기본으로 1심 재판부(지방법원) 박스를 엽니다.
    if (!isMatched) {
        const box = document.getElementById('nw-district-box');
        if(box) box.open = true;
    }
});