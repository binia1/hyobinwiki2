document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("afterglow-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입 (애프터글로우 노을/석양 테마: #E53935 크림슨 레드)
    const navStyle = `
    <style>
        .nw-frame-afterglow { border: 2px solid #E53935; background: linear-gradient(to right, #C62828, #E53935, #FF7043); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-afterglow { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #E53935; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #E53935; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #E53935; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        .flex-group { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group .nw-link { flex: 0 1 18%; min-width: 65px; }
    </style>
    `;

    // 2. HTML 구조 주입 (애프터글로우 및 주변 관계자)
    const navHtml = `
        <div class="nw-frame-afterglow shadow-sm">
            <div class="nw-title-afterglow">
                <a href="애프터글로우_효빈.html" class="font-black text-xl hover:underline" style="color: #C62828; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 애프터글로우 전용 내장 SVG 로고 (석양 모티브) -->
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <!-- 태양 -->
                        <circle cx="60" cy="70" r="25" fill="#FFCA28" />
                        <!-- 구름 1 -->
                        <path d="M20,80 Q30,60 50,70 Q60,50 80,70 Q90,65 100,80 Z" fill="#E53935" opacity="0.9" />
                        <!-- 구름 2 -->
                        <path d="M10,95 Q25,80 50,90 Q70,75 90,90 Q105,85 115,95 Z" fill="#C62828" />
                    </svg>
                    애프터글로우 (Afterglow 효빈)
                </a>
            </div>
            
            <!-- 1. 애프터글로우 (Afterglow) 5인방 -->
            <details id="nw-afterglow-box" class="nw-box" style="border-color:#E53935;">
                <summary style="background-color:#E53935; color:white;" class="outline-none">🎸 애프터글로우 (소꿉친구 5인방) ▼</summary>
                <table class="nw-tbl" style="border-color:#E53935;">
                    <tr>
                        <th class="w-[15%] bg-[#FFEBEE] text-[#B71C1C]">애<br>프<br>터<br>글<br>로<br>우</th>
                        <td class="w-[85%] py-3">
                            <div class="flex-group">
                                <a href="문주란.html" class="nw-link"><img src="이미지/문주란.webp" class="nw-img" onerror="this.style.display='none'">문주란<span class="nw-subtext">(보컬/기타)</span></a>
                                <a href="천모카.html" class="nw-link"><img src="이미지/천모카.webp" class="nw-img" onerror="this.style.display='none'">천모카<span class="nw-subtext">(리드 기타)</span></a>
                                <a href="허마리.html" class="nw-link"><img src="이미지/허마리.webp" class="nw-img" onerror="this.style.display='none'">허마리<span class="nw-subtext">(베이스)</span></a>
                                <a href="태미연.html" class="nw-link"><img src="이미지/태미연.webp" class="nw-img" onerror="this.style.display='none'">태미연<span class="nw-subtext">(드럼)</span></a>
                                <a href="하규미.html" class="nw-link"><img src="이미지/하규미.webp" class="nw-img" onerror="this.style.display='none'">하규미<span class="nw-subtext">(키보드)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 2. 주변 인물 및 가족 관계자 -->
            <details id="nw-side-box" class="nw-box mb-1" style="border-color:#FF7043;">
                <summary style="background-color:#FF7043; color:white;" class="outline-none">🌇 주변 인물 및 관계자 ▼</summary>
                <table class="nw-tbl" style="border-color:#FF7043;">
                    <tr>
                        <th class="w-[15%] bg-[#FBE9E7] text-[#D84315]">관<br>계<br>자</th>
                        <td class="w-[85%] py-3">
                             <div class="flex-group">
                                <a href="태아연.html" class="nw-link"><img src="이미지/태아연.webp" class="nw-img" onerror="this.style.display='none'">태아연<span class="nw-subtext">(미연의 여동생)</span></a>
                                <a href="문문도.html" class="nw-link"><img src="이미지/문문도.webp" class="nw-img" onerror="this.style.display='none'">문문도<span class="nw-subtext">(주란의 아버지)</span></a>
                                <a href="나수민.html" class="nw-link"><img src="이미지/나수민.webp" class="nw-img" onerror="this.style.display='none'">나수민<span class="nw-subtext">(동창 및 지인)</span></a>
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
    
    // 애프터글로우 멤버 목록
    const afterglowParty = ["문주란", "천모카", "허마리", "태미연", "하규미"];
    // 주변인 및 가족 (문주란 아빠(가칭 문문도), 태아연 등)
    const sideChars = ["태아연", "문문도", "나수민"]; 

    let isMatched = false;

    if (afterglowParty.includes(pageTitle)) {
        const box = document.getElementById('nw-afterglow-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (sideChars.includes(pageTitle)) {
        const box = document.getElementById('nw-side-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 경우 기본으로 애프터글로우 박스 오픈
    if (!isMatched) {
        const box = document.getElementById('nw-afterglow-box');
        if(box) box.open = true;
    }
});