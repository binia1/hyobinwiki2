document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hyobin-toxic-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 효빈대 폐기물 카르텔 전용 틀 스타일 (방사성/맹독성 유해물질 테마) */
        .nw-frame-toxic { border: 2px solid #2C3E2D; background: linear-gradient(to right, #2C3E2D, #4A5D23); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .nw-title-toxic { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #2C3E2D; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #7B8D42; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #4A5D23; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입 (효빈대 폐기물 전체 연대)
    const navHtml = `
        <div class="nw-frame-toxic shadow-sm">
            <div class="nw-title-toxic">
                <a href="안농운과_앰생_트리오.html" class="font-black text-xl hover:underline" style="color: #2C3E2D; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 유해물질(Biohazard) 및 범죄를 상징하는 방사능 경고 SVG 로고 -->
                    <svg viewBox="0 0 100 100" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" fill="#F1C40F" stroke="#2C3E2D" stroke-width="4"/>
                        <circle cx="50" cy="50" r="10" fill="#2C3E2D"/>
                        <path d="M 50 35 A 15 15 0 0 0 37 27 L 25 15 A 35 35 0 0 1 75 15 L 63 27 A 15 15 0 0 0 50 35 Z" fill="#2C3E2D"/>
                        <path d="M 37 60 A 15 15 0 0 0 30 50 L 12 50 A 35 35 0 0 1 20 78 L 33 67 A 15 15 0 0 0 37 60 Z" fill="#2C3E2D"/>
                        <path d="M 63 60 A 15 15 0 0 1 70 50 L 88 50 A 35 35 0 0 0 80 78 L 67 67 A 15 15 0 0 1 63 60 Z" fill="#2C3E2D"/>
                    </svg>
                    효빈대 최악의 방사성 폐기물 (성범죄 및 혐오 카르텔)
                </a>
            </div>
            
            <!-- 1. 권력형 성범죄 카르텔 (가해자 4인방) -->
            <details id="nw-core-box" class="nw-box" style="border-color:#4A5D23;">
                <summary style="background-color:#4A5D23; color:white;" class="outline-none">☣️ 권력형 성범죄 가해자 (전원 파면 및 출교·구속) ▼</summary>
                <table class="nw-tbl" style="border-color:#4A5D23;">
                    <tr>
                        <th class="w-[12%] bg-[#F0F4E8] text-[#2C3E2D]">주<br>범</th>
                        <td class="w-[22%]"><a href="안농운.html" class="nw-link"><img src="이미지/안농운.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">안농운<span class="nw-subtext">(징역 30년 / 가발·뽕브라)</span></a></td>
                        <td class="w-[22%]"><a href="조창렬.html" class="nw-link"><img src="이미지/조창렬.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">조창렬<span class="nw-subtext">(징역 19년 / 159cm 앰생)</span></a></td>
                        <td class="w-[22%]"><a href="이송윤.html" class="nw-link"><img src="이미지/이송윤.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">이송윤<span class="nw-subtext">(징역 19년 / 기레기 주니어)</span></a></td>
                        <td class="w-[22%]"><a href="전개욱.html" class="nw-link"><img src="이미지/전개욱.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">전개욱<span class="nw-subtext">(징역 19년 / 아빠 찬스 자폭맨)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 사회적 테러리스트 (제적/출교 혐오 카르텔) -->
            <details id="nw-hate-box" class="nw-box" style="border-color:#6B8E23;">
                <summary style="background-color:#6B8E23; color:white;" class="outline-none">☢️ 사회적 테러리스트 및 혐오종자 (효빈대 제적·출교) ▼</summary>
                <table class="nw-tbl" style="border-color:#6B8E23;">
                    <tr>
                        <th class="w-[12%] bg-[#F5F5DC] text-[#4B5320]">혐<br>오</th>
                        <td class="w-[44%]"><a href="이차야.html" class="nw-link"><img src="이미지/이차야.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">이차야<span class="nw-subtext">(효빈대 제적 / 공식 동네북·전투력 측정기)</span></a></td>
                        <td class="w-[44%]"><a href="A씨.html" class="nw-link"><img src="이미지/A씨.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">A씨 (익명)<span class="nw-subtext">(부동산학과 출교 / 엠마의 빵 테러범)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 3. 배후 및 가문 파멸 (유유상종) -->
            <details id="nw-family-box" class="nw-box" style="border-color:#7B7D7D;">
                <summary style="background-color:#7B7D7D; color:white;" class="outline-none">🏚️ 찌질한 배후 세력 및 멸문지화 연대 ▼</summary>
                <table class="nw-tbl" style="border-color:#7B7D7D;">
                    <tr>
                        <th class="w-[12%] bg-[#F2F3F4] text-[#424949]">파<br>멸</th>
                        <td class="w-[29%]"><a href="이송윤의_아버지.html" class="nw-link"><img src="이미지/이송윤의_아버지.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">이송윤 아버지<span class="nw-subtext">(파면 기자 / 50억 소송 파산)</span></a></td>
                        <td class="w-[29%]"><a href="전개욱의_아버지.html" class="nw-link"><img src="이미지/전개욱의_아버지.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">전개욱 아버지<span class="nw-subtext">(파면 경찰 간부 / 자폭 희생양)</span></a></td>
                        <td class="w-[29%]"><a href="조광훈.html" class="nw-link"><img src="이미지/조광훈.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">조광훈 (부활제일교회)<span class="nw-subtext">(사이비 목사 / 정신병 배양소)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 4. 완벽한 철퇴 (참교육자들) -->
            <details id="nw-judges-box" class="nw-box mb-1" style="border-color:#154360;">
                <summary style="background-color:#154360; color:white;" class="outline-none">🔨 무관용 참교육자 (완벽한 단죄와 철퇴) ▼</summary>
                <table class="nw-tbl" style="border-color:#154360;">
                    <tr>
                        <th class="w-[12%] bg-[#EAF2F8] text-[#154360]">철<br>퇴</th>
                        <td class="w-[22%]"><a href="민부선.html" class="nw-link"><img src="이미지/민부선.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">민부선 총장<span class="nw-subtext">(영구 출교 및 파면 지시)</span></a></td>
                        <td class="w-[22%]"><a href="은권규.html" class="nw-link"><img src="이미지/은권규.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">은권규 교수<span class="nw-subtext">(범죄심리 권위자 / 안농운 척살)</span></a></td>
                        <td class="w-[22%]"><a href="김시연.html" class="nw-link"><img src="이미지/김시연.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">김시연 사단<span class="nw-subtext">(물리적·법적 완벽한 단죄)</span></a></td>
                        <td class="w-[22%]"><a href="고노애.html" class="nw-link"><img src="이미지/고노애.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">고노애 & 노정미<span class="nw-subtext">(최종 생존자 및 승리자)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    const coreVillains = ["안농운", "조창렬", "이송윤", "전개욱", "안농운과 앰생 트리오", "앰생 트리오"];
    const hateVillains = ["이차야", "A씨"];
    const family = ["이송윤의 아버지", "전개욱의 아버지", "조광훈", "부활제일교회"];
    const judges = ["민부선", "은권규", "김시연", "고노애", "노정미", "주성우", "오이슬", "강하애", "유채나", "박효빈"];

    let isMatched = false;

    if (coreVillains.includes(pageTitle) || pageTitle === "효빈대 쓰레기 3인방") {
        const box = document.getElementById('nw-core-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (hateVillains.includes(pageTitle)) {
        const box = document.getElementById('nw-hate-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (family.includes(pageTitle)) {
        const box = document.getElementById('nw-family-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (judges.includes(pageTitle)) {
        const box = document.getElementById('nw-judges-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우, 해당 문서가 혐오 종자면 nw-hate-box를, 아니면 nw-core-box를 기본으로 엽니다.
    if (!isMatched) {
        if (["이차야", "A씨"].includes(pageTitle)) {
            const box = document.getElementById('nw-hate-box');
            if(box) box.open = true;
        } else {
            const box = document.getElementById('nw-core-box');
            if(box) box.open = true;
        }
    }
});