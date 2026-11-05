document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("morfonica-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입 (모르포니카 테마: #33AAFF 스카이 블루)
    const navStyle = `
    <style>
        .nw-frame-morfonica { border: 2px solid #33AAFF; background: linear-gradient(to right, #33AAFF, #55CCFF); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-morfonica { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #55CCFF; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #33AAFF; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #33AAFF; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        .flex-group { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group .nw-link { flex: 0 1 18%; min-width: 65px; }
    </style>
    `;

    // 2. HTML 구조 주입 (모르포니카 및 주변 관계자)
    const navHtml = `
        <div class="nw-frame-morfonica shadow-sm">
            <div class="nw-title-morfonica">
                <a href="모르포니카_효빈.html" class="font-black text-xl hover:underline" style="color: #0077CC; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 모르포니카 전용 내장 SVG 로고 (나비 모티브) -->
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60,60 Q40,15 15,35 Q25,75 60,60 Z" fill="#33AAFF" stroke="#0077CC" stroke-width="3"/>
                        <path d="M60,60 Q80,15 105,35 Q95,75 60,60 Z" fill="#33AAFF" stroke="#0077CC" stroke-width="3"/>
                        <path d="M60,60 Q45,100 20,85 Q30,55 60,60 Z" fill="#88CCFF" stroke="#0077CC" stroke-width="3"/>
                        <path d="M60,60 Q75,100 100,85 Q90,55 60,60 Z" fill="#88CCFF" stroke="#0077CC" stroke-width="3"/>
                        <circle cx="60" cy="60" r="5" fill="#ffffff" stroke="#0077CC" stroke-width="2"/>
                    </svg>
                    모르포니카 (Morfonica 효빈)
                </a>
            </div>
            
            <!-- 1. 모르포니카 (Morfonica) 5인방 -->
            <details id="nw-morfonica-box" class="nw-box" style="border-color:#33AAFF;">
                <summary style="background-color:#33AAFF; color:white;" class="outline-none">🦋 모르포니카 (Morfonica) ▼</summary>
                <table class="nw-tbl" style="border-color:#33AAFF;">
                    <tr>
                        <th class="w-[15%] bg-[#E0F4FF] text-[#0077CC]">모<br>르<br>포<br>니<br>카</th>
                        <td class="w-[85%] py-3">
                            <div class="flex-group">
                                <a href="마서령.html" class="nw-link"><img src="이미지/마서령.webp" class="nw-img" onerror="this.style.display='none'">마서령<span class="nw-subtext">(보컬)</span></a>
                                <a href="기유호.html" class="nw-link"><img src="이미지/기유호.webp" class="nw-img" onerror="this.style.display='none'">기유호<span class="nw-subtext">(기타)</span></a>
                                <a href="심나나.html" class="nw-link"><img src="이미지/심나나.webp" class="nw-img" onerror="this.style.display='none'">심나나<span class="nw-subtext">(베이스)</span></a>
                                <a href="이주시.html" class="nw-link"><img src="이미지/이주시.webp" class="nw-img" onerror="this.style.display='none'">이주시<span class="nw-subtext">(드럼)</span></a>
                                <a href="조류희.html" class="nw-link"><img src="이미지/조류희.webp" class="nw-img" onerror="this.style.display='none'">조류희<span class="nw-subtext">(바이올린)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 2. 주변 인물 및 관계자 -->
            <details id="nw-side-box" class="nw-box mb-1" style="border-color:#8855CC;">
                <summary style="background-color:#8855CC; color:white;" class="outline-none">🌟 주변 인물 및 관계자 ▼</summary>
                <table class="nw-tbl" style="border-color:#8855CC;">
                    <tr>
                        <th class="w-[15%] bg-[#F3E5F5] text-[#4A148C]">관<br>계<br>자</th>
                        <td class="w-[85%] py-3">
                             <div class="flex-group">
                                <a href="이주미.html" class="nw-link"><img src="이미지/이주미.webp" class="nw-img" onerror="this.style.display='none'">이주미<span class="nw-subtext">(마서령의 멘티)</span></a>
                                <a href="박효빈.html" class="nw-link"><img src="이미지/박효빈.webp" class="nw-img" onerror="this.style.display='none'">박효빈<span class="nw-subtext">(든든한 후원자)</span></a>
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
    
    // 모르포니카 멤버
    const morfonica = ["마서령", "기유호", "심나나", "이주시", "조류희"];
    // 관련 주변 인물 (블루버드 멘토링 관련자 등)
    const sideChars = ["이주미", "박효빈"]; 

    let isMatched = false;

    if (morfonica.includes(pageTitle)) {
        const box = document.getElementById('nw-morfonica-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (sideChars.includes(pageTitle)) {
        const box = document.getElementById('nw-side-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 그 외 문서에서는 기본적으로 모르포니카 박스를 오픈
    if (!isMatched) {
        const box = document.getElementById('nw-morfonica-box');
        if(box) box.open = true;
    }
});