document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("palmang-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 팔망성고 3인방 전용 틀 스타일 */
        .nw-frame-palmang { border: 2px solid #4A235A; background: linear-gradient(to right, #4A235A, #2C1535); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-palmang { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #4A235A; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        /* 개별 캐릭터 테마 강조 호버 효과 */
        .link-hooyoung:hover { color: #CA96FF; }
        .link-hooyoung:hover .nw-img { border-color: #CA96FF; }
        
        .link-dongryeong:hover { color: #2E8B57; }
        .link-dongryeong:hover .nw-img { border-color: #2E8B57; }
        
        .link-heeyeon:hover { color: #F1C40F; }
        .link-heeyeon:hover .nw-img { border-color: #F1C40F; }
        
        .flex-group { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group .nw-link { flex: 0 1 25%; min-width: 65px; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입
    const navHtml = `
        <div class="nw-frame-palmang shadow-sm">
            <div class="nw-title-palmang">
                <a href="팔망성고 3인방.html" class="font-black text-xl hover:underline" style="color: #4A235A; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 팔망성고 3인방 전용 내장 SVG 로고 (8각별과 블루버드 융합) -->
                    <svg viewBox="0 0 120 120" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="palmangGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#4A235A" />
                                <stop offset="100%" stop-color="#CA96FF" />
                            </linearGradient>
                            <linearGradient id="birdGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#00A3E0" />
                                <stop offset="100%" stop-color="#33AAFF" />
                            </linearGradient>
                        </defs>
                        <!-- 8-Pointed Star (팔망성) -->
                        <g fill="url(#palmangGrad)" opacity="0.9">
                            <rect x="35" y="35" width="50" height="50" transform="rotate(0 60 60)" rx="5"/>
                            <rect x="35" y="35" width="50" height="50" transform="rotate(45 60 60)" rx="5"/>
                        </g>
                        <!-- Inner Circle -->
                        <circle cx="60" cy="60" r="22" fill="#ffffff" shadow="0 0 5px rgba(0,0,0,0.3)"/>
                        <!-- Bluebird Motif (블루버드) -->
                        <path d="M50,70 Q40,60 55,45 Q70,45 75,55 Q80,65 65,75 Q55,80 50,70 Z" fill="url(#birdGrad)"/>
                        <path d="M70,50 L75,45 L78,52 Z" fill="#F1C40F"/> <!-- 부리 -->
                    </svg>
                    팔망성고 3인방 (이키즈라이브! 블루버드)
                </a>
            </div>
            
            <!-- 1. 핵심 멤버 (03년생 방통고 트리오) -->
            <details id="nw-trio-box" class="nw-box" style="border-color:#4A235A;">
                <summary style="background-color:#4A235A; color:white;" class="outline-none">✨ 핵심 멤버 (03년생 찐친 트리오) ▼</summary>
                <table class="nw-tbl" style="border-color:#4A235A;">
                    <tr>
                        <th class="w-[12%] bg-[#F4ECF7] text-[#2C1535]">3<br>인<br>방</th>
                        <td class="w-[29%]" style="border-bottom: 4px solid #CA96FF; background: #fafafa;">
                            <a href="최후영.html" class="nw-link link-hooyoung"><img src="이미지/최후영.webp" class="nw-img" onerror="this.style.display='none'">최후영<span class="nw-subtext">(보이스/성우)</span></a>
                        </td>
                        <td class="w-[29%]" style="border-bottom: 4px solid #2E8B57; background: #fafafa;">
                            <a href="오동령.html" class="nw-link link-dongryeong"><img src="이미지/오동령.webp" class="nw-img" onerror="this.style.display='none'">오동령<span class="nw-subtext">(물리력/헬창)</span></a>
                        </td>
                        <td class="w-[29%]" style="border-bottom: 4px solid #F1C40F; background: #fafafa;">
                            <a href="고희연.html" class="nw-link link-heeyeon"><img src="이미지/고희연.webp" class="nw-img" onerror="this.style.display='none'">고희연<span class="nw-subtext">(어그로/유튜버)</span></a>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 2. 주요 동맹 및 카르텔 연결고리 -->
            <details id="nw-cartel-box" class="nw-box mb-1" style="border-color:#888888;">
                <summary style="background-color:#888888; color:white;" class="outline-none">🏢 효빈시 타 세력 카르텔 연결고리 ▼</summary>
                <table class="nw-tbl" style="border-color:#888888;">
                    <tr>
                        <th class="w-[12%] bg-[#dddddd] text-black">동<br>맹</th>
                        <td class="w-[88%] py-3">
                            <div class="flex-group">
                                <a href="무지개_동호회.html" class="nw-link link-heeyeon"><div class="nw-img bg-[#eee] flex items-center justify-center text-xs">🌈</div>무지개 동호회<span class="nw-subtext">(호구 선배 포지션)</span></a>
                                <a href="Aqours_오시_어벤져스.html" class="nw-link link-dongryeong"><div class="nw-img bg-[#eee] flex items-center justify-center text-xs">🌊</div>Aqours 어벤져스<span class="nw-subtext">(오동령 중학교 동창)</span></a>
                                <a href="임은혜.html" class="nw-link"><img src="이미지/임은혜.webp" class="nw-img" onerror="this.style.display='none'">임은혜<span class="nw-subtext">(합방 및 스폰서)</span></a>
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
    
    const trio = ["최후영", "오동령", "고희연"];
    const cartel = ["무지개 동호회", "Aqours 오시 어벤져스", "임은혜"];

    let isMatched = false;

    if (trio.includes(pageTitle)) {
        const box = document.getElementById('nw-trio-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    if (cartel.includes(pageTitle) || pageTitle === "팔망성고 3인방") {
        const box = document.getElementById('nw-cartel-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우 기본으로 3인방 박스를 오픈
    if (!isMatched) {
        const box = document.getElementById('nw-trio-box');
        if(box) box.open = true;
    }
});