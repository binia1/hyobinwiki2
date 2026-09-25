document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("muse-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 효빈 뮤즈 연합 전용 틀 스타일 */
        .nw-frame-muse { border: 2px solid #E22B6D; background: linear-gradient(to right, #E22B6D, #F56600); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-muse { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #F56600; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #E22B6D; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #E22B6D; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        .flex-group { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
        .flex-group .nw-link { flex: 0 1 20%; min-width: 65px; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입 (뮤즈 연합)
    const navHtml = `
        <div class="nw-frame-muse shadow-sm">
            <div class="nw-title-muse">
                <a href="효빈 뮤즈 연합.html" class="font-black text-xl hover:underline" style="color: #E22B6D; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 뮤즈 연합 전용 내장 SVG 로고 (9각별 + 음표 융합) -->
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="museGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#E22B6D" />
                                <stop offset="100%" stop-color="#F56600" />
                            </linearGradient>
                        </defs>
                        <!-- 9-pointed star background representing 9 members -->
                        <polygon points="60,5 72,40 108,25 85,55 115,75 80,80 90,115 60,95 30,115 40,80 5,75 35,55 12,25 48,40" fill="url(#museGrad)" opacity="0.85"/>
                        <!-- Inner Circle -->
                        <circle cx="60" cy="60" r="30" fill="#ffffff" shadow="0 0 5px rgba(0,0,0,0.3)"/>
                        <!-- Musical Note -->
                        <path d="M55,40 L70,35 L70,65 Q70,75 60,75 Q50,75 50,65 Q50,55 60,55 L65,55 L65,45 L55,48 Z" fill="#E22B6D"/>
                    </svg>
                    효빈 뮤즈 연합 (현실판 96/98즈)
                </a>
            </div>
            
            <!-- 1. 96년생 언니즈 -->
            <details id="nw-96-box" class="nw-box" style="border-color:#9B7EDD;">
                <summary style="background-color:#9B7EDD; color:white;" class="outline-none">🔮 96년생 언니즈 (행정 및 영적 지주) ▼</summary>
                <table class="nw-tbl" style="border-color:#9B7EDD;">
                    <tr>
                        <th class="w-[12%] bg-[#E8E1F7] text-[#3A2272]">멤<br>버</th>
                        <td class="w-[29%]"><a href="노정미.html" class="nw-link"><img src="이미지/노정미.webp" class="nw-img" onerror="this.style.display='none'">노정미<span class="nw-subtext">(노조미 / 시의원)</span></a></td>
                        <td class="w-[29%]"><a href="원우미.html" class="nw-link"><img src="이미지/원우미.webp" class="nw-img" onerror="this.style.display='none'">원우미<span class="nw-subtext">(우미 / 주무관)</span></a></td>
                        <td class="w-[29%]"><a href="강토리.html" class="nw-link"><img src="이미지/강토리.webp" class="nw-img" onerror="this.style.display='none'">강토리<span class="nw-subtext">(코토리 / 센터장)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 98년생 동생즈 -->
            <details id="nw-98-box" class="nw-box" style="border-color:#F2803A;">
                <summary style="background-color:#F2803A; color:white;" class="outline-none">🍞 98년생 동생즈 (실무 및 무력 담당) ▼</summary>
                <table class="nw-tbl" style="border-color:#F2803A;">
                    <tr>
                        <th class="w-[12%] bg-[#FCE5D9] text-[#7A3612]">멤<br>버</th>
                        <td class="w-[22%]"><a href="안예리.html" class="nw-link"><img src="이미지/안예리.webp" class="nw-img" onerror="this.style.display='none'">안예리<span class="nw-subtext">(에리 / 구의원)</span></a></td>
                        <td class="w-[22%]"><a href="호내영.html" class="nw-link"><img src="이미지/호내영.webp" class="nw-img" onerror="this.style.display='none'">호내영<span class="nw-subtext">(호노카 / 카페매니저)</span></a></td>
                        <td class="w-[22%]"><a href="하나영.html" class="nw-link"><img src="이미지/하나영.webp" class="nw-img" onerror="this.style.display='none'">하나영<span class="nw-subtext">(하나요 / 영양사)</span></a></td>
                        <td class="w-[22%]"><a href="서진희.html" class="nw-link"><img src="이미지/서진희.webp" class="nw-img" onerror="this.style.display='none'">서진희<span class="nw-subtext">(마키 / 의사)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 3. 07년생 막내즈 -->
            <details id="nw-07-box" class="nw-box" style="border-color:#E22B6D;">
                <summary style="background-color:#E22B6D; color:white;" class="outline-none">🐾 07년생 막내즈 (지아센 제자 듀오) ▼</summary>
                <table class="nw-tbl" style="border-color:#E22B6D;">
                    <tr>
                        <th class="w-[12%] bg-[#FADCE8] text-[#690E2D]">멤<br>버</th>
                        <td class="w-[44%]"><a href="성공린.html" class="nw-link"><img src="이미지/성공린.webp" class="nw-img" onerror="this.style.display='none'">성공린<span class="nw-subtext">(린 / 동구대 무도인)</span></a></td>
                        <td class="w-[44%]"><a href="양미소.html" class="nw-link"><img src="이미지/양미소.webp" class="nw-img" onerror="this.style.display='none'">양미소<span class="nw-subtext">(니코 / 주방 폭군)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 4. 관련자 및 산하 -->
            <details id="nw-related-box" class="nw-box mb-1" style="border-color:#888888;">
                <summary style="background-color:#888888; color:white;" class="outline-none">🏢 연합 관계자 및 외부 억제기 ▼</summary>
                <table class="nw-tbl" style="border-color:#888888;">
                    <tr>
                        <th class="w-[12%] bg-[#dddddd] text-black">관<br>계<br>자</th>
                        <td class="w-[44%]"><a href="박효빈.html" class="nw-link"><img src="이미지/박효빈.webp" class="nw-img" onerror="this.style.display='none'">박효빈<span class="nw-subtext">(효빈광역시장 / 구심점)</span></a></td>
                        <td class="w-[44%]"><a href="원유미.html" class="nw-link"><img src="이미지/원유미.webp" class="nw-img" onerror="this.style.display='none'">원유미<span class="nw-subtext">(연구원장)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    const unni96 = ["노정미", "원우미", "강토리"];
    const dongsaeng98 = ["안예리", "호내영", "하나영", "서진희"];
    const maknae07 = ["성공린", "양미소"];
    const related = ["박효빈", "원유미"];

    let isMatched = false;

    if (unni96.includes(pageTitle)) {
        const box = document.getElementById('nw-96-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (dongsaeng98.includes(pageTitle)) {
        const box = document.getElementById('nw-98-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (maknae07.includes(pageTitle)) {
        const box = document.getElementById('nw-07-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (related.includes(pageTitle) || pageTitle === "효빈 뮤즈 연합") {
        const box = document.getElementById('nw-related-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서(일반 시청 문서 등)에서 틀을 열었을 경우 기본으로 관련자 박스 오픈
    if (!isMatched) {
        const box = document.getElementById('nw-related-box');
        if(box) box.open = true;
    }
});