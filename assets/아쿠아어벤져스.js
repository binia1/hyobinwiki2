document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("aqours-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 아쿠아 어벤져스 전용 틀 스타일 */
        .nw-frame-aqours { border: 2px solid #00A3E0; background: linear-gradient(to right, #00A3E0, #49BEE9); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-aqours { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #00A3E0; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #00A3E0; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #00A3E0; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입 (아쿠아 어벤져스)
    const navHtml = `
        <div class="nw-frame-aqours shadow-sm">
            <div class="nw-title-aqours">
                <a href="Aqours 오시 어벤져스.html" class="font-black text-xl hover:underline" style="color: #00A3E0; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 아쿠아 연합 전용 내장 SVG 로고 (닻과 태양, 물방울의 융합) -->
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="aqoursGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#00A3E0" />
                                <stop offset="100%" stop-color="#49BEE9" />
                            </linearGradient>
                            <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#FFCC11" />
                                <stop offset="100%" stop-color="#FF7F32" />
                            </linearGradient>
                        </defs>
                        <!-- Sunshine Background (태양) -->
                        <path d="M60,5 L65,25 L85,15 L75,35 L95,45 L75,55 L85,75 L65,65 L60,85 L55,65 L35,75 L45,55 L25,45 L45,35 L35,15 L55,25 Z" fill="url(#sunGrad)" opacity="0.9"/>
                        <!-- Marine Drop Base (물방울) -->
                        <path d="M60,30 C80,60 90,80 90,95 C90,111 76,120 60,120 C44,120 30,111 30,95 C30,80 40,60 60,30 Z" fill="url(#aqoursGrad)"/>
                        <!-- Inner Anchor (닻) -->
                        <path d="M60,50 circle(5) M45,85 Q60,105 75,85 M40,85 L45,80 M75,80 L80,85 M50,65 L70,65 M60,55 L60,95" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>
                    </svg>
                    Aqours 오시 어벤져스 (당가동 자경단)
                </a>
            </div>
            
            <!-- 1. 핵심 멤버 (Core 5) -->
            <details id="nw-core-box" class="nw-box" style="border-color:#00A3E0;">
                <summary style="background-color:#00A3E0; color:white;" class="outline-none">🌊 창립 핵심 멤버 (Core 5 - 물리·법적 심판조) ▼</summary>
                <table class="nw-tbl" style="border-color:#00A3E0;">
                    <tr>
                        <th class="w-[10%] bg-[#E0F4FB] text-[#006080]">멤<br>버</th>
                        <td class="w-[18%]"><a href="고해영.html" class="nw-link"><img src="이미지/고해영_치카_코스.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">고해영<span class="nw-subtext">(치카 / 텐션고문)</span></a></td>
                        <td class="w-[18%]"><a href="이리자.html" class="nw-link"><img src="이미지/이리자_리코_코스.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">이리자<span class="nw-subtext">(리코 / 쾌감펀치)</span></a></td>
                        <td class="w-[18%]"><a href="도선요.html" class="nw-link"><img src="이미지/도선요_요우_코스.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">도선요<span class="nw-subtext">(요우 / 요리·제복)</span></a></td>
                        <td class="w-[18%]"><a href="송과영.html" class="nw-link"><img src="이미지/송과영_카난_코스.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">송과영<span class="nw-subtext">(카난 / 피지컬)</span></a></td>
                        <td class="w-[18%]"><a href="석다연.html" class="nw-link"><img src="이미지/석다연.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">석다연<span class="nw-subtext">(다이아 / 법적처형)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 동맹 연합 (Youth 4) -->
            <details id="nw-youth-box" class="nw-box" style="border-color:#26C6DA;">
                <summary style="background-color:#26C6DA; color:white;" class="outline-none">✨ 동맹 연합 (Youth 4 - 유스 멤버) ▼</summary>
                <table class="nw-tbl" style="border-color:#26C6DA;">
                    <tr>
                        <th class="w-[12%] bg-[#E0F7FA] text-[#006064]">멤<br>버</th>
                        <td class="w-[22%]"><a href="석루비.html" class="nw-link"><img src="이미지/석루비.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">석루비<span class="nw-subtext">(루비 / 매운맛 팩폭)</span></a></td>
                        <td class="w-[22%]"><a href="하마루.html" class="nw-link"><img src="이미지/하마루_하나마루_코스.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">하마루<span class="nw-subtext">(하나마루 / 빵순이)</span></a></td>
                        <td class="w-[22%]"><a href="진선자.html" class="nw-link"><img src="이미지/진선자_요시코_코스.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">진선자<span class="nw-subtext">(요시코 / 응급실 VIP)</span></a></td>
                        <td class="w-[22%]"><a href="오하리.html" class="nw-link"><img src="이미지/오하리_마리_코스.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">오하리<span class="nw-subtext">(마리 / 자본주의)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 3. 주요 동맹 -->
            <details id="nw-allies-box" class="nw-box mb-1" style="border-color:#888888;">
                <summary style="background-color:#888888; color:white;" class="outline-none">🏢 주요 동맹 및 교두보 세력 ▼</summary>
                <table class="nw-tbl" style="border-color:#888888;">
                    <tr>
                        <th class="w-[12%] bg-[#dddddd] text-black">동<br>맹</th>
                        <td class="w-[44%]"><a href="무지개_동호회.html" class="nw-link"><div class="nw-img bg-[#ccc] flex items-center justify-center text-xs">🌈</div>무지개 동호회<span class="nw-subtext">(루비의 이중생활처)</span></a></td>
                        <td class="w-[44%]"><a href="임은혜.html" class="nw-link"><img src="이미지/임은혜.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">임은혜<span class="nw-subtext">(구출 대상 / 자본 스폰서)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    const core5 = ["고해영", "이리자", "도선요", "송과영", "석다연"];
    const youth4 = ["석루비", "하마루", "진선자", "오하리"];
    const allies = ["임은혜", "무지개 동호회"];

    let isMatched = false;

    if (core5.includes(pageTitle)) {
        const box = document.getElementById('nw-core-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (youth4.includes(pageTitle)) {
        const box = document.getElementById('nw-youth-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (allies.includes(pageTitle) || pageTitle === "Aqours 오시 어벤져스") {
        const box = document.getElementById('nw-allies-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우 기본으로 '주요 동맹(Allies)' 박스를 엽니다.
    if (!isMatched) {
        const box = document.getElementById('nw-allies-box');
        if(box) box.open = true;
    }
});