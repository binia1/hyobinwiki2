document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("mujica-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입 (효빈무지카 테마: #5C0029 다크 버건디)
    const navStyle = `
    <style>
        .nw-frame-mujica { border: 2px solid #5C0029; background: linear-gradient(to right, #2A0012, #5C0029, #2A0012); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-mujica { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #5C0029; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #121212; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #8E0045; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #8E0045; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        .flex-group { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group .nw-link { flex: 0 1 18%; min-width: 65px; }
    </style>
    `;

    // 2. HTML 구조 주입 (효빈무지카 4인조 및 관계자)
    const navHtml = `
        <div class="nw-frame-mujica shadow-sm">
            <div class="nw-title-mujica">
                <a href="효빈무지카.html" class="font-black text-xl hover:underline" style="color: #5C0029; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 효빈무지카 전용 내장 SVG 로고 (가면무도회 마스크 모티브) -->
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10,40 C30,20 50,40 60,60 C70,40 90,20 110,40 C115,50 110,70 90,80 C70,90 60,100 60,100 C60,100 50,90 30,80 C10,70 5,50 10,40 Z" fill="#2A0012" stroke="#8E0045" stroke-width="4"/>
                        <circle cx="35" cy="55" r="10" fill="#ffffff"/>
                        <circle cx="85" cy="55" r="10" fill="#ffffff"/>
                        <path d="M60,60 L60,80" stroke="#8E0045" stroke-width="3"/>
                    </svg>
                    효빈무지카 (Ave Mujica 효빈)
                </a>
            </div>
            
            <!-- 1. 효빈무지카 (Ave Mujica) 4인방 (냐무 포지션 없음) -->
            <details id="nw-mujica-box" class="nw-box" style="border-color:#5C0029;">
                <summary style="background-color:#5C0029; color:white;" class="outline-none">🎭 효빈무지카 (Ave Mujica) ▼</summary>
                <table class="nw-tbl" style="border-color:#5C0029;">
                    <tr>
                        <th class="w-[15%] bg-[#FCE4EC] text-[#5C0029]">효<br>빈<br>무<br>지<br>카</th>
                        <td class="w-[85%] py-3">
                            <div class="flex-group">
                                <a href="이사희.html" class="nw-link"><img src="이미지/이사희.webp" class="nw-img" onerror="this.style.display='none'">이사희<span class="nw-subtext">(오블리비오니스)</span></a>
                                <a href="우이화.html" class="nw-link"><img src="이미지/우이화.webp" class="nw-img" onerror="this.style.display='none'">우이화<span class="nw-subtext">(돌로리스)</span></a>
                                <a href="문주미.html" class="nw-link"><img src="이미지/문주미.webp" class="nw-img" onerror="this.style.display='none'">문주미<span class="nw-subtext">(모르티스)</span></a>
                                <a href="우미정.html" class="nw-link"><img src="이미지/우미정.webp" class="nw-img" onerror="this.style.display='none'">우미정<span class="nw-subtext">(티모리스)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 2. 주변 인물 및 적대 세력 -->
            <details id="nw-side-box" class="nw-box mb-1" style="border-color:#4A0000;">
                <summary style="background-color:#4A0000; color:white;" class="outline-none">🕯️ 주변 인물 및 관계자 ▼</summary>
                <table class="nw-tbl" style="border-color:#4A0000;">
                    <tr>
                        <th class="w-[15%] bg-[#FFEBEE] text-[#4A0000]">관<br>계<br>자</th>
                        <td class="w-[85%] py-3">
                             <div class="flex-group">
                                <a href="하츠네.html" class="nw-link"><img src="이미지/하츠네.webp" class="nw-img" onerror="this.style.display='none'">하츠네<span class="nw-subtext">(이화의 이복이모)</span></a>
                                <a href="윤대환.html" class="nw-link"><img src="이미지/윤대환.webp" class="nw-img" onerror="this.style.display='none'">윤대환<span class="nw-subtext">(사기의 원흉)</span></a>
                                <a href="박효빈.html" class="nw-link"><img src="이미지/박효빈.webp" class="nw-img" onerror="this.style.display='none'">박효빈<span class="nw-subtext">(사희의 든든한 아군)</span></a>
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
    
    // 효빈무지카 멤버 목록 (냐무 없음)
    const mujicaParty = ["이사희", "우이화", "문주미", "우미정"];
    // 주변인 (웹페이지 세계관 기준)
    const sideChars = ["하츠네", "윤대환", "박효빈"]; 

    let isMatched = false;

    if (mujicaParty.includes(pageTitle)) {
        const box = document.getElementById('nw-mujica-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (sideChars.includes(pageTitle)) {
        const box = document.getElementById('nw-side-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 경우 기본으로 효빈무지카 박스 오픈
    if (!isMatched) {
        const box = document.getElementById('nw-mujica-box');
        if(box) box.open = true;
    }
});