document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("poppin-nav-container");
    if (!container) return;

    const navStyle = `
    <style>
        .nw-frame-poppin { border: 2px solid #FF3377; background: linear-gradient(to right, #FF3377, #FF7799); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-poppin { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #FF7799; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #FF3377; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #FF3377; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        .flex-group { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group .nw-link { flex: 0 1 18%; min-width: 65px; }
    </style>
    `;

    const navHtml = `
        <div class="nw-frame-poppin shadow-sm">
            <div class="nw-title-poppin">
                <a href="포핀스타.html" class="font-black text-xl hover:underline" style="color: #FF3377; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="60,10 75,45 110,45 80,65 90,100 60,80 30,100 40,65 10,45 45,45" fill="#FF3377" stroke="#FF7799" stroke-width="4" stroke-linejoin="round"/>
                        <circle cx="60" cy="60" r="15" fill="#ffffff" opacity="0.8"/>
                    </svg>
                    스튜디오 효빈 (포핀스타)
                </a>
            </div>
            
            <!-- 1. 포핀스타 (효빈시 포핀파티 5인방) -->
            <details id="nw-star-box" class="nw-box" style="border-color:#FF3377;">
                <summary style="background-color:#FF3377; color:white;" class="outline-none">⭐ 포핀스타 (Poppin'Star) ▼</summary>
                <table class="nw-tbl" style="border-color:#FF3377;">
                    <tr>
                        <th class="w-[15%] bg-[#FFF0F5] text-[#C2185B]">포<br>핀<br>스<br>타</th>
                        <td class="w-[85%] py-3">
                            <div class="flex-group">
                                <a href="강숙미.html" class="nw-link"><img src="이미지/강숙미.webp" class="nw-img" onerror="this.style.display='none'">강숙미<span class="nw-subtext">(기타/보컬)</span></a>
                                <a href="오다혜.html" class="nw-link"><img src="이미지/오다혜.webp" class="nw-img" onerror="this.style.display='none'">오다혜<span class="nw-subtext">(리드 기타)</span></a>
                                <a href="우서림.html" class="nw-link"><img src="이미지/우서림.webp" class="nw-img" onerror="this.style.display='none'">우서림<span class="nw-subtext">(베이스)</span></a>
                                <a href="양사야.html" class="nw-link"><img src="이미지/양사야.webp" class="nw-img" onerror="this.style.display='none'">양사야<span class="nw-subtext">(드럼)</span></a>
                                <a href="이아리.html" class="nw-link"><img src="이미지/이아리.webp" class="nw-img" onerror="this.style.display='none'">이아리<span class="nw-subtext">(키보드)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 2. 주변 인물 -->
            <details id="nw-side-box" class="nw-box" style="border-color:#FF9800;">
                <summary style="background-color:#FF9800; color:white;" class="outline-none">🌟 주변 인물 및 관계자 ▼</summary>
                <table class="nw-tbl" style="border-color:#FF9800;">
                    <tr>
                        <th class="w-[15%] bg-[#FFF3E0] text-[#E65100]">관<br>계<br>자</th>
                        <td class="w-[85%] py-3">
                             <div class="flex-group">
                                <a href="오다구.html" class="nw-link"><img src="이미지/오다구.webp" class="nw-img" onerror="this.style.display='none'">오다구<span class="nw-subtext">(효빈도시공사)</span></a>
                                <a href="최영숙.html" class="nw-link"><img src="이미지/최영숙.webp" class="nw-img" onerror="this.style.display='none'">최영숙<span class="nw-subtext">(다혜 어머니)</span></a>
                                <a href="오덕훈.html" class="nw-link"><img src="이미지/오덕훈.webp" class="nw-img" onerror="this.style.display='none'">오덕훈<span class="nw-subtext">(다혜 오빠)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 3. 적대 세력 -->
            <details id="nw-villain-box" class="nw-box mb-1" style="border-color:#B71C1C;">
                <summary style="background-color:#B71C1C; color:white;" class="outline-none">☠️ 빌런 및 적대 세력 ▼</summary>
                <table class="nw-tbl" style="border-color:#B71C1C;">
                    <tr>
                        <th class="w-[15%] bg-[#FFEBEE] text-[#B71C1C]">빌<br>런</th>
                        <td class="w-[85%] py-3">
                             <div class="flex-group">
                                <a href="윤재훈.html" class="nw-link"><img src="이미지/윤재훈.webp" class="nw-img" onerror="this.style.display='none'">윤재훈<span class="nw-subtext">(극우 하수인)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    const pageTitle = document.title.split(" - ")[0].trim();
    
    const poppinStar = ["강숙미", "오다혜", "우서림", "양사야", "이아리"];
    const sideChars = ["오다구", "최영숙", "오덕훈"]; 
    const villains = ["윤재훈"];

    let isMatched = false;

    if (poppinStar.includes(pageTitle)) {
        const box = document.getElementById('nw-star-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (sideChars.includes(pageTitle)) {
        const box = document.getElementById('nw-side-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (villains.includes(pageTitle)) {
        const box = document.getElementById('nw-villain-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 경우 기본으로 포핀스타 박스 오픈
    if (!isMatched) {
        const box = document.getElementById('nw-star-box');
        if(box) box.open = true;
    }
});