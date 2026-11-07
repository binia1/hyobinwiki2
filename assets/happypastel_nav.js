document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("happypastel-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입 (해피파스텔월드 테마: #FFCA28 파스텔 옐로우)
    const navStyle = `
    <style>
        .nw-frame-happy { border: 2px solid #FFB300; background: linear-gradient(to right, #FFF59D, #FFCA28, #FFF59D); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-happy { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #FFB300; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #FFB300; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #FF9800; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        .flex-group { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group .nw-link { flex: 0 1 15%; min-width: 65px; }
    </style>
    `;

    // 2. HTML 구조 주입 (해피파스텔월드 6인방 및 환산채 옹)
    const navHtml = `
        <div class="nw-frame-happy shadow-sm">
            <div class="nw-title-happy">
                <a href="해피파스텔월드.html" class="font-black text-xl hover:underline" style="color: #F57F17; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 해피파스텔월드 전용 내장 SVG 로고 (스마일 & 파스텔) -->
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="60" r="50" fill="#FFCA28" stroke="#F57F17" stroke-width="4"/>
                        <circle cx="40" cy="45" r="8" fill="#F57F17"/>
                        <circle cx="80" cy="45" r="8" fill="#F57F17"/>
                        <path d="M 35 70 Q 60 95 85 70" fill="none" stroke="#F57F17" stroke-width="6" stroke-linecap="round"/>
                        <circle cx="20" cy="20" r="10" fill="#F48FB1" opacity="0.8"/>
                        <circle cx="100" cy="90" r="12" fill="#81D4FA" opacity="0.8"/>
                    </svg>
                    해피파스텔월드 (Happy Pastel World)
                </a>
            </div>
            
            <!-- 1. 해피파스텔월드 (6인조 드림팀) -->
            <details id="nw-happy-box" class="nw-box" style="border-color:#FFB300;">
                <summary style="background-color:#FFB300; color:white;" class="outline-none">✨ 해피파스텔월드 6인방 ▼</summary>
                <table class="nw-tbl" style="border-color:#FFB300;">
                    <tr>
                        <th class="w-[15%] bg-[#FFF9C4] text-[#F57F17]">멤<br>버</th>
                        <td class="w-[85%] py-3">
                            <div class="flex-group">
                                <a href="현마음.html" class="nw-link"><img src="이미지/현마음.webp" class="nw-img" onerror="this.style.display='none'">현마음<span class="nw-subtext">(메인 보컬)</span></a>
                                <a href="천성로.html" class="nw-link"><img src="이미지/천성로.webp" class="nw-img" onerror="this.style.display='none'">천성로<span class="nw-subtext">(베이스/보컬)</span></a>
                                <a href="허아영.html" class="nw-link"><img src="이미지/허아영.webp" class="nw-img" onerror="this.style.display='none'">허아영<span class="nw-subtext">(리드 기타)</span></a>
                                <a href="양이브.html" class="nw-link"><img src="이미지/양이브.webp" class="nw-img" onerror="this.style.display='none'">양이브<span class="nw-subtext">(키보드)</span></a>
                                <a href="송화음.html" class="nw-link"><img src="이미지/송화음.webp" class="nw-img" onerror="this.style.display='none'">송화음<span class="nw-subtext">(드럼)</span></a>
                                <a href="오미사.html" class="nw-link"><img src="이미지/오미사.webp" class="nw-img" onerror="this.style.display='none'">오미사<span class="nw-subtext">(DJ/미셸)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 2. 관련 인물 (명예 고문 등) -->
            <details id="nw-side-box" class="nw-box mb-1" style="border-color:#F48FB1;">
                <summary style="background-color:#F48FB1; color:white;" class="outline-none">🌸 종신 명예 고문 및 관계자 ▼</summary>
                <table class="nw-tbl" style="border-color:#F48FB1;">
                    <tr>
                        <th class="w-[15%] bg-[#FCE4EC] text-[#C2185B]">관<br>계<br>자</th>
                        <td class="w-[85%] py-3">
                             <div class="flex-group">
                                <a href="환산채.html" class="nw-link"><img src="이미지/환산채.webp" class="nw-img" onerror="this.style.display='none'">환산채<span class="nw-subtext">(종신 명예 고문)</span></a>
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
    
    // 해피파스텔월드 6인방 (미셸은 오미사로 통합 검색)
    const happyParty = ["현마음", "천성로", "허아영", "양이브", "송화음", "오미사", "미셸"];
    // 90대 전 시장님(...) 등 관련자
    const sideChars = ["환산채"]; 

    let isMatched = false;

    if (happyParty.includes(pageTitle)) {
        const box = document.getElementById('nw-happy-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (sideChars.includes(pageTitle)) {
        const box = document.getElementById('nw-side-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 경우 기본으로 해피파스텔월드 6인방 박스 오픈
    if (!isMatched) {
        const box = document.getElementById('nw-happy-box');
        if(box) box.open = true;
    }
});