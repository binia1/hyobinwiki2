document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("rainbow-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 무지개 동호회 전용 틀 스타일 */
        .nw-frame-rainbow { border: 2px solid #673AB7; background: linear-gradient(to right, #673AB7, #9C27B0); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-rainbow { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #9C27B0; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #673AB7; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #673AB7; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        /* 다수 인원 배치를 위한 플렉스 그룹 */
        .flex-group { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group .nw-link { flex: 0 1 12%; min-width: 65px; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입 (무지개 동호회)
    const navHtml = `
        <div class="nw-frame-rainbow shadow-sm">
            <div class="nw-title-rainbow">
                <a href="무지개 동호회.html" class="font-black text-xl hover:underline" style="color: #673AB7; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 무지개 동호회 전용 내장 SVG 로고 (구름과 무지개 아치) -->
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="rainbowArc" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#FF5800" />
                                <stop offset="25%" stop-color="#E7D600" />
                                <stop offset="50%" stop-color="#37B484" />
                                <stop offset="75%" stop-color="#01B7ED" />
                                <stop offset="100%" stop-color="#673AB7" />
                            </linearGradient>
                        </defs>
                        <!-- Rainbow Arcs -->
                        <path d="M20,80 A40,40 0 0,1 100,80" fill="none" stroke="url(#rainbowArc)" stroke-width="12" stroke-linecap="round"/>
                        <path d="M35,80 A25,25 0 0,1 85,80" fill="none" stroke="#ED7D95" stroke-width="8" stroke-linecap="round" opacity="0.8"/>
                        <!-- Cloud Base -->
                        <path d="M25,85 Q20,70 35,70 Q45,55 60,60 Q75,55 85,70 Q100,70 95,85 Z" fill="#ffffff" filter="drop-shadow(0px 3px 2px rgba(0,0,0,0.2))"/>
                        <!-- Center Sparkle -->
                        <path d="M60,65 Q60,75 50,75 Q60,75 60,85 Q60,75 70,75 Q60,75 60,65 Z" fill="#F8B6C4"/>
                    </svg>
                    효빈대학교 무지개 동호회 (Rainbow Club)
                </a>
            </div>
            
            <!-- 1. 수뇌부 (Core 7) -->
            <details id="nw-core7-box" class="nw-box" style="border-color:#673AB7;">
                <summary style="background-color:#673AB7; color:white;" class="outline-none">👑 수뇌부 (Core 7 - 창설 멤버) ▼</summary>
                <table class="nw-tbl" style="border-color:#673AB7;">
                    <tr>
                        <th class="w-[12%] bg-[#F0E6FA] text-[#3A1E71]">수<br>뇌<br>부</th>
                        <td class="w-[88%] py-3">
                            <div class="flex-group">
                                <a href="김시연.html" class="nw-link"><img src="이미지/김시연.webp" class="nw-img" onerror="this.style.display='none'">김시연<span class="nw-subtext">(합법 얀데레)</span></a>
                                <a href="고소유.html" class="nw-link"><img src="이미지/고소유.webp" class="nw-img" onerror="this.style.display='none'">고소유<span class="nw-subtext">(천연 탱커)</span></a>
                                <a href="오이슬.html" class="nw-link"><img src="이미지/오이슬.webp" class="nw-img" onerror="this.style.display='none'">오이슬<span class="nw-subtext">(참이슬좌)</span></a>
                                <a href="나수미.html" class="nw-link"><img src="이미지/나수미.webp" class="nw-img" onerror="this.style.display='none'">나수미<span class="nw-subtext">(탄수화물 폭격)</span></a>
                                <a href="유채나.html" class="nw-link"><img src="이미지/유채나.webp" class="nw-img" onerror="this.style.display='none'">유채나<span class="nw-subtext">(스칼렛 스톰)</span></a>
                                <a href="고노애.html" class="nw-link"><img src="이미지/고노애.webp" class="nw-img" onerror="this.style.display='none'">고노애<span class="nw-subtext">(프로파일러)</span></a>
                                <a href="강하애.html" class="nw-link"><img src="이미지/강하애.webp" class="nw-img" onerror="this.style.display='none'">강하애<span class="nw-subtext">(다쟈레 고문관)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 2. 확장 멤버 (Extended 6) -->
            <details id="nw-ext6-box" class="nw-box" style="border-color:#3F51B5;">
                <summary style="background-color:#3F51B5; color:white;" class="outline-none">✨ 확장 멤버 (Extended 6 - 후발 합류조) ▼</summary>
                <table class="nw-tbl" style="border-color:#3F51B5;">
                    <tr>
                        <th class="w-[12%] bg-[#E8EAF6] text-[#1A237E]">확<br>장<br>조</th>
                        <td class="w-[88%] py-3">
                            <div class="flex-group">
                                <a href="소남주.html" class="nw-link"><img src="이미지/소남주.webp" class="nw-img" onerror="this.style.display='none'">소남주<span class="nw-subtext">(대형 댕댕이)</span></a>
                                <a href="태미아.html" class="nw-link"><img src="이미지/태미아.webp" class="nw-img" onerror="this.style.display='none'">태미아<span class="nw-subtext">(월반 천재)</span></a>
                                <a href="조향림.html" class="nw-link"><img src="이미지/조향림.webp" class="nw-img" onerror="this.style.display='none'">조향림<span class="nw-subtext">(런웨이 서빙)</span></a>
                                <a href="엠마_체레스떼.html" class="nw-link"><img src="이미지/엠마_체레스떼.webp" class="nw-img" onerror="this.style.display='none'">엠마 체레스떼<span class="nw-subtext">(하늘색 엠마망)</span></a>
                                <a href="천리내.html" class="nw-link"><img src="이미지/천리내.webp" class="nw-img" onerror="this.style.display='none'">천리내<span class="nw-subtext">(이과 영재)</span></a>
                                <a href="김시안.html" class="nw-link"><img src="이미지/김시안.webp" class="nw-img" onerror="this.style.display='none'">김시안<span class="nw-subtext">(명예 팩폭러)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 3. 샌드백 듀오 & 관련자 -->
            <details id="nw-sandbag-box" class="nw-box mb-1" style="border-color:#795548;">
                <summary style="background-color:#795548; color:white;" class="outline-none">🥊 샌드백 듀오 및 동맹 세력 ▼</summary>
                <table class="nw-tbl" style="border-color:#795548;">
                    <tr>
                        <th class="w-[12%] bg-[#EFEBE9] text-[#3E2723]">샌<br>드<br>백</th>
                        <td class="w-[44%]"><a href="주성우.html" class="nw-link"><img src="이미지/주성우.webp" class="nw-img" onerror="this.style.display='none'">주성우<span class="nw-subtext">(물리 방패)</span></a></td>
                        <td class="w-[44%]"><a href="은현성.html" class="nw-link"><img src="이미지/은현성.webp" class="nw-img" onerror="this.style.display='none'">은현성<span class="nw-subtext">(팩폭 소방수)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    const core7 = ["김시연", "고소유", "오이슬", "나수미", "유채나", "고노애", "강하애"];
    const ext6 = ["소남주", "태미아", "조향림", "엠마 체레스떼", "천리내", "김시안"];
    const sandbag = ["주성우", "은현성"];

    let isMatched = false;

    if (core7.includes(pageTitle)) {
        const box = document.getElementById('nw-core7-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (ext6.includes(pageTitle)) {
        const box = document.getElementById('nw-ext6-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (sandbag.includes(pageTitle) || pageTitle === "무지개 동호회") {
        const box = document.getElementById('nw-sandbag-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 기타 외부 문서에서 열 경우 기본적으로 Core 7 박스를 오픈
    if (!isMatched) {
        const box = document.getElementById('nw-core7-box');
        if(box) box.open = true;
    }
});