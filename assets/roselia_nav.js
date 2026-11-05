document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("roselia-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입 (로젤리아 고딕 테마: #4A148C 딥 퍼플)
    const navStyle = `
    <style>
        .nw-frame-roselia { border: 2px solid #4A148C; background: linear-gradient(to right, #311B92, #4A148C); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-roselia { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #4A148C; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #4A148C; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #4A148C; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        .flex-group { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group .nw-link { flex: 0 1 18%; min-width: 65px; }
    </style>
    `;

    // 2. HTML 구조 주입 (로젤리아 및 관계자)
    const navHtml = `
        <div class="nw-frame-roselia shadow-sm">
            <div class="nw-title-roselia">
                <a href="효빈대학교_로젤리아.html" class="font-black text-xl hover:underline" style="color: #4A148C; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 로젤리아 전용 내장 SVG 로고 (장미 모티브) -->
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60,10 C80,30 90,50 60,70 C30,50 40,30 60,10 Z" fill="#880E4F"/>
                        <path d="M40,35 C20,40 10,60 30,85 C50,70 50,55 40,35 Z" fill="#AD1457"/>
                        <path d="M80,35 C100,40 110,60 90,85 C70,70 70,55 80,35 Z" fill="#AD1457"/>
                        <path d="M30,85 C40,110 60,115 60,90 C55,75 40,75 30,85 Z" fill="#C2185B"/>
                        <path d="M90,85 C80,110 60,115 60,90 C65,75 80,75 90,85 Z" fill="#C2185B"/>
                        <circle cx="60" cy="65" r="12" fill="#E91E63"/>
                    </svg>
                    로젤리아 (Roselia 효빈)
                </a>
            </div>
            
            <!-- 1. 로젤리아 (Roselia) 5인방 -->
            <details id="nw-roselia-box" class="nw-box" style="border-color:#4A148C;">
                <summary style="background-color:#4A148C; color:white;" class="outline-none">🌹 로젤리아 (Roselia) ▼</summary>
                <table class="nw-tbl" style="border-color:#4A148C;">
                    <tr>
                        <th class="w-[15%] bg-[#EDE7F6] text-[#311B92]">로<br>젤<br>리<br>아</th>
                        <td class="w-[85%] py-3">
                            <div class="flex-group">
                                <a href="우희나.html" class="nw-link"><img src="이미지/우희나.webp" class="nw-img" onerror="this.style.display='none'">우희나<span class="nw-subtext">(보컬)</span></a>
                                <a href="허사영.html" class="nw-link"><img src="이미지/허사영.webp" class="nw-img" onerror="this.style.display='none'">허사영<span class="nw-subtext">(리드 기타)</span></a>
                                <a href="이리사.html" class="nw-link"><img src="이미지/이리사.webp" class="nw-img" onerror="this.style.display='none'">이리사<span class="nw-subtext">(베이스)</span></a>
                                <a href="김인자.html" class="nw-link"><img src="이미지/김인자.webp" class="nw-img" onerror="this.style.display='none'">김인자<span class="nw-subtext">(키보드)</span></a>
                                <a href="태아연.html" class="nw-link"><img src="이미지/태아연.webp" class="nw-img" onerror="this.style.display='none'">태아연<span class="nw-subtext">(드럼)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 2. 주변 인물 및 가족 관계자 -->
            <details id="nw-side-box" class="nw-box mb-1" style="border-color:#880E4F;">
                <summary style="background-color:#880E4F; color:white;" class="outline-none">🥀 주변 인물 및 관계자 ▼</summary>
                <table class="nw-tbl" style="border-color:#880E4F;">
                    <tr>
                        <th class="w-[15%] bg-[#FCE4EC] text-[#880E4F]">관<br>계<br>자</th>
                        <td class="w-[85%] py-3">
                             <div class="flex-group">
                                <a href="태미연.html" class="nw-link"><img src="이미지/태미연.webp" class="nw-img" onerror="this.style.display='none'">태미연<span class="nw-subtext">(아연의 친언니)</span></a>
                                <a href="허아영.html" class="nw-link"><img src="이미지/허아영.webp" class="nw-img" onerror="this.style.display='none'">허아영<span class="nw-subtext">(사영의 동생)</span></a>
                                <a href="이미사.html" class="nw-link"><img src="이미지/이미사.webp" class="nw-img" onerror="this.style.display='none'">이미사<span class="nw-subtext">(관계자)</span></a>
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
    
    // 로젤리아 멤버 목록
    const roseliaParty = ["우희나", "허사영", "이리사", "김인자", "태아연"];
    // 주변인 및 가족 (토모에, 히나 포지션 등)
    const sideChars = ["태미연", "허아영", "이미사"]; 

    let isMatched = false;

    if (roseliaParty.includes(pageTitle)) {
        const box = document.getElementById('nw-roselia-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (sideChars.includes(pageTitle)) {
        const box = document.getElementById('nw-side-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 경우 기본으로 로젤리아 박스 오픈
    if (!isMatched) {
        const box = document.getElementById('nw-roselia-box');
        if(box) box.open = true;
    }
});