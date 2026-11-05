document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("mygo-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입 (미아밴드 메인 테마: #2D4B7A 네이비 블루)
    const navStyle = `
    <style>
        .nw-frame-mia { border: 2px solid #2D4B7A; background: linear-gradient(to right, #2D4B7A, #4A70A0); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-mia { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #4A70A0; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #2D4B7A; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #2D4B7A; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        .flex-group { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group .nw-link { flex: 0 1 18%; min-width: 65px; }
    </style>
    `;

    // 2. HTML 구조 주입 (미아밴드 및 관계자)
    const navHtml = `
        <div class="nw-frame-mia shadow-sm">
            <div class="nw-title-mia">
                <a href="미아밴드.html" class="font-black text-xl hover:underline" style="color: #2D4B7A; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#2D4B7A" stroke-width="8" stroke-dasharray="10 5"/>
                        <circle cx="60" cy="60" r="40" fill="none" stroke="#4A70A0" stroke-width="2"/>
                        <polygon points="60,25 70,60 60,95 50,60" fill="#2D4B7A"/>
                        <polygon points="60,25 60,95 50,60" fill="#4A70A0"/>
                        <circle cx="60" cy="60" r="6" fill="#ffffff" stroke="#2D4B7A" stroke-width="3"/>
                    </svg>
                    미아밴드 (효빈시 버전 MyGO!!!!!)
                </a>
            </div>
            
            <!-- 1. 미아밴드 (MyGO!!!!!) 5인방 -->
            <details id="nw-mia-box" class="nw-box" style="border-color:#2D4B7A;">
                <summary style="background-color:#2D4B7A; color:white;" class="outline-none">🧭 미아밴드 (MyGO!!!!!) ▼</summary>
                <table class="nw-tbl" style="border-color:#2D4B7A;">
                    <tr>
                        <th class="w-[15%] bg-[#E8F0FE] text-[#1A365D]">미<br>아<br>밴<br>드</th>
                        <td class="w-[85%] py-3">
                            <div class="flex-group">
                                <a href="고다솔.html" class="nw-link"><img src="이미지/고다솔.webp" class="nw-img" onerror="this.style.display='none'">고다솔<span class="nw-subtext">(보컬)</span></a>
                                <a href="천애음.html" class="nw-link"><img src="이미지/천애음.webp" class="nw-img" onerror="this.style.display='none'">천애음<span class="nw-subtext">(기타)</span></a>
                                <a href="감라나.html" class="nw-link"><img src="이미지/감라나.webp" class="nw-img" onerror="this.style.display='none'">감라나<span class="nw-subtext">(리드 기타)</span></a>
                                <a href="나소연.html" class="nw-link"><img src="이미지/나소연.webp" class="nw-img" onerror="this.style.display='none'">나소연<span class="nw-subtext">(베이스)</span></a>
                                <a href="시인하.html" class="nw-link"><img src="이미지/시인하.webp" class="nw-img" onerror="this.style.display='none'">시인하<span class="nw-subtext">(드럼)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 2. 주변 인물 및 관계자 -->
            <details id="nw-side-box" class="nw-box mb-1" style="border-color:#553C9A;">
                <summary style="background-color:#553C9A; color:white;" class="outline-none">🌟 주변 인물 및 관계자 ▼</summary>
                <table class="nw-tbl" style="border-color:#553C9A;">
                    <tr>
                        <th class="w-[15%] bg-[#FAF5FF] text-[#44337A]">주<br>변<br>인</th>
                        <td class="w-[85%] py-3">
                             <div class="flex-group">
                                <a href="유채나.html" class="nw-link"><img src="이미지/유채나.webp" class="nw-img" onerror="this.style.display='none'">유채나<span class="nw-subtext">(스칼렛 스톰)</span></a>
                                <a href="김시연.html" class="nw-link"><img src="이미지/김시연.webp" class="nw-img" onerror="this.style.display='none'">김시연<span class="nw-subtext">(합법 얀데레)</span></a>
                                <a href="황보람.html" class="nw-link"><img src="이미지/황보람.webp" class="nw-img" onerror="this.style.display='none'">황보람<span class="nw-subtext">(10대 시의원)</span></a>
                                <a href="고현민.html" class="nw-link"><img src="이미지/고현민.webp" class="nw-img" onerror="this.style.display='none'">고현민<span class="nw-subtext">(관련 인물)</span></a>
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
    
    // 미아밴드 멤버
    const miaBand = ["고다솔", "천애음", "감라나", "나소연", "시인하"];
    // 띄워두신 탭 기반 주변인
    const sideChars = ["유채나", "김시연", "황보람", "고현민"]; 

    let isMatched = false;

    if (miaBand.includes(pageTitle)) {
        const box = document.getElementById('nw-mia-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (sideChars.includes(pageTitle)) {
        const box = document.getElementById('nw-side-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 그 외 문서에서는 기본적으로 미아밴드 박스를 오픈
    if (!isMatched) {
        const box = document.getElementById('nw-mia-box');
        if(box) box.open = true;
    }
});