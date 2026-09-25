document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("riehasu-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 리에하스 연합 전용 틀 스타일 */
        .nw-frame { border: 2px solid #C084FC; background-color: #C084FC; border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #E879F9; display: flex; justify-content: center; align-items: center; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #C084FC; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #C084FC; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        /* 창건고 동창 그룹을 위한 플렉스 래퍼 */
        .alumni-group { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
        .alumni-group .nw-link { flex: 0 1 12%; min-width: 65px; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입
    const navHtml = `
        <div class="nw-frame shadow-sm">
            <div class="nw-title">
                <a href="리에하스_연합.html" class="font-black text-xl hover:underline" style="color: #C084FC; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 리에하스 전용 내장 SVG 로고 (Liella 별 + Hasunosora 연꽃 융합) -->
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="riehasuGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#DA57D8" />
                                <stop offset="100%" stop-color="#C084FC" />
                            </linearGradient>
                            <linearGradient id="riehasuGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stop-color="#F7B6C0" />
                                <stop offset="100%" stop-color="#84C36E" />
                            </linearGradient>
                        </defs>
                        <!-- Hasunosora Lotus Base -->
                        <path d="M60,10 C80,30 110,40 110,70 C110,95 85,110 60,110 C35,110 10,95 10,70 C10,40 40,30 60,10 Z" fill="url(#riehasuGrad2)" opacity="0.9"/>
                        <!-- Liella Star Overlay -->
                        <polygon points="60,20 72,46 100,50 78,68 84,96 60,82 36,96 42,68 20,50 48,46" fill="url(#riehasuGrad1)"/>
                        <!-- Center Sparkle -->
                        <path d="M60,45 Q60,60 45,60 Q60,60 60,75 Q60,60 75,60 Q60,60 60,45 Z" fill="#ffffff"/>
                    </svg>
                    리에하스 연합 (Liella-Hasu Alliance)
                </a>
            </div>
            
            <!-- 1. 하스노소라 분파 -->
            <details id="nw-hasu-box" class="nw-box" style="border-color:#F7B6C0;">
                <summary style="background-color:#F7B6C0; color:#362023;" class="outline-none">🌸 하스노소라 분파 (당가동 및 지아센 연합) ▼</summary>
                <table class="nw-tbl" style="border-color:#F7B6C0;">
                    <tr>
                        <th rowspan="3" class="w-[10%] bg-[#F7B6C0] text-[#362023]">핵<br>심<br><br>멤<br>버</th>
                        <td><a href="임은혜.html" class="nw-link"><img src="이미지/임은혜.webp" class="nw-img" onerror="this.style.display='none'">임은혜<span class="nw-subtext">(메구미)</span></a></td>
                        <td><a href="안공주.html" class="nw-link"><img src="이미지/안공주.webp" class="nw-img" onerror="this.style.display='none'">안공주<span class="nw-subtext">(히메)</span></a></td>
                        <td><a href="유리내.html" class="nw-link"><img src="이미지/유리내.webp" class="nw-img" onerror="this.style.display='none'">유리내<span class="nw-subtext">(루리노)</span></a></td>
                        <td><a href="백모모.html" class="nw-link"><img src="이미지/백모모.webp" class="nw-img" onerror="this.style.display='none'">백모모<span class="nw-subtext">(긴코)</span></a></td>
                    </tr>
                    <tr>
                        <td><a href="유초애.html" class="nw-link"><img src="이미지/유초애.webp" class="nw-img" onerror="this.style.display='none'">유초애<span class="nw-subtext">(코즈에)</span></a></td>
                        <td><a href="도소영.html" class="nw-link"><img src="이미지/도소영.webp" class="nw-img" onerror="this.style.display='none'">도소영<span class="nw-subtext">(코스즈)</span></a></td>
                        <td><a href="사양화.html" class="nw-link"><img src="이미지/사양화.webp" class="nw-img" onerror="this.style.display='none'">사양화<span class="nw-subtext">(사야카)</span></a></td>
                        <td><a href="하화연.html" class="nw-link"><img src="이미지/하화연.webp" class="nw-img" onerror="this.style.display='none'">하화연<span class="nw-subtext">(카호)</span></a></td>
                    </tr>
                    <tr>
                        <td><a href="유세라.html" class="nw-link"><img src="이미지/유세라.webp" class="nw-img" onerror="this.style.display='none'">유세라<span class="nw-subtext">(세라스)</span></a></td>
                        <td><a href="이주미.html" class="nw-link"><img src="이미지/이주미.webp" class="nw-img" onerror="this.style.display='none'">이주미<span class="nw-subtext">(이즈미)</span></a></td>
                        <td><a href="추주리.html" class="nw-link"><img src="이미지/추주리.webp" class="nw-img" onerror="this.style.display='none'">추주리<span class="nw-subtext">(츠즈리)</span></a></td>
                        <td></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 리에라 분파 -->
            <details id="nw-liella-box" class="nw-box" style="border-color:#DA57D8;">
                <summary style="background-color:#DA57D8; color:white;" class="outline-none">💫 리에라 분파 (캠퍼스 및 창건고 동창) ▼</summary>
                <table class="nw-tbl" style="border-color:#DA57D8;">
                    <tr>
                        <th class="w-[10%] bg-[#F2E0F7] text-[#2C0038]">핵<br>심<br>멤<br>버</th>
                        <td class="w-[18%]"><a href="가노은.html" class="nw-link"><img src="이미지/가노은.webp" class="nw-img" onerror="this.style.display='none'">가노은<span class="nw-subtext">(카논)</span></a></td>
                        <td class="w-[18%]"><a href="마루빈.html" class="nw-link"><img src="이미지/마루빈.webp" class="nw-img" onerror="this.style.display='none'">마루빈<span class="nw-subtext">(마르가레테)</span></a></td>
                        <td class="w-[18%]"><a href="오낙희.html" class="nw-link"><img src="이미지/오낙희.webp" class="nw-img" onerror="this.style.display='none'">오낙희<span class="nw-subtext">(나츠미)</span></a></td>
                        <td class="w-[18%]"><a href="가희나.html" class="nw-link"><img src="이미지/가희나.webp" class="nw-img" onerror="this.style.display='none'">가희나<span class="nw-subtext">(키나코)</span></a></td>
                        <td class="w-[18%]"><a href="오마리.html" class="nw-link"><img src="이미지/오마리.webp" class="nw-img" onerror="this.style.display='none'">오마리<span class="nw-subtext">(토마리)</span></a></td>
                    </tr>
                    <tr>
                        <th class="bg-[#F2E0F7] text-[#2C0038]">창<br>건<br>고<br><br>동<br>창</th>
                        <td colspan="5" class="py-3">
                            <div class="alumni-group">
                                <a href="연월엽.html" class="nw-link"><img src="이미지/연월엽.webp" class="nw-img" onerror="this.style.display='none'">연월엽<span class="nw-subtext">(렌)</span></a>
                                <a href="당가영.html" class="nw-link"><img src="이미지/당가영.webp" class="nw-img" onerror="this.style.display='none'">당가영<span class="nw-subtext">(쿠쿠)</span></a>
                                <a href="시화음.html" class="nw-link"><img src="이미지/시화음.webp" class="nw-img" onerror="this.style.display='none'">시화음<span class="nw-subtext">(카논)</span></a>
                                <a href="명안유.html" class="nw-link"><img src="이미지/명안유.webp" class="nw-img" onerror="this.style.display='none'">명안유<span class="nw-subtext">(스미레)</span></a>
                                <a href="천사도.html" class="nw-link"><img src="이미지/천사도.webp" class="nw-img" onerror="this.style.display='none'">천사도<span class="nw-subtext">(치사토)</span></a>
                                <a href="완시윤.html" class="nw-link"><img src="이미지/완시윤.webp" class="nw-img" onerror="this.style.display='none'">완시윤<span class="nw-subtext">(시키)</span></a>
                                <a href="이미녀.html" class="nw-link"><img src="이미지/이미녀.webp" class="nw-img" onerror="this.style.display='none'">이미녀<span class="nw-subtext">(메이)</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 3. 연합 전체 및 조력자 (전체 박스) -->
            <details id="nw-all-box" class="nw-box mb-1" style="border-color:#888888;">
                <summary style="background-color:#888888; color:white;" class="outline-none">🏢 전체 연합 관련자 (리에라몰 일가) ▼</summary>
                <table class="nw-tbl" style="border-color:#888888;">
                    <tr>
                        <th class="w-[12%] bg-[#dddddd] text-black">리에라몰<br>일가</th>
                        <td class="w-[17.6%]"><a href="임세혁.html" class="nw-link"><img src="이미지/임세혁.webp" class="nw-img" onerror="this.style.display='none'">임세혁<span class="nw-subtext">(점장/아빠)</span></a></td>
                        <td class="w-[17.6%]"><a href="연월엽.html" class="nw-link"><img src="이미지/연월엽.webp" class="nw-img" onerror="this.style.display='none'">연월엽<span class="nw-subtext">(렌/엄마)</span></a></td>
                        <td class="w-[17.6%]"><a href="임승민.html" class="nw-link"><img src="이미지/임승민.webp" class="nw-img" onerror="this.style.display='none'">임승민<span class="nw-subtext">(남동생)</span></a></td>
                        <td class="w-[17.6%]"><a href="임은연.html" class="nw-link"><img src="이미지/임은연.webp" class="nw-img" onerror="this.style.display='none'">임은연<span class="nw-subtext">(여동생)</span></a></td>
                        <td class="w-[17.6%]"><a href="임시연.html" class="nw-link"><img src="이미지/임시연.webp" class="nw-img" onerror="this.style.display='none'">임시연<span class="nw-subtext">(막내)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    const hasuMembers = ["임은혜", "안공주", "유리내", "백모모", "유초애", "도소영", "사양화", "하화연", "유세라", "이주미", "추주리"];
    const liellaMembers = ["가노은", "마루빈", "오낙희", "가희나", "오마리", "연월엽", "당가영", "시화음", "명안유", "천사도", "완시윤", "이미녀"];
    const familyMembers = ["임세혁", "연월엽", "임승민", "임은연", "임시연"];

    let isMatched = false;

    // 현재 페이지 멤버가 속한 분파 박스 열기 (연월엽처럼 교집합인 경우 둘 다 열림)
    if (hasuMembers.includes(pageTitle)) {
        const box = document.getElementById('nw-hasu-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (liellaMembers.includes(pageTitle)) {
        const box = document.getElementById('nw-liella-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (familyMembers.includes(pageTitle) || pageTitle === "리에하스 연합") {
        const box = document.getElementById('nw-all-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 만약 그 외 문서에서 이 틀을 불러온다면 기본으로 전체 관련자 박스만 열어둠
    if (!isMatched) {
        const box = document.getElementById('nw-all-box');
        if(box) box.open = true;
    }
});