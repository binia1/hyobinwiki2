document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hyobin-bus-ceos-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 효빈권 버스 사장 연합회 전용 틀 스타일 (교통망 블루 & 에너지 오렌지 테마) */
        .nw-frame-bus { border: 2px solid #2980B9; background: linear-gradient(to right, #2980B9, #3498DB); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .nw-title-bus { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #2980B9; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #F39C12; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #2980B9; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; line-height: 1.2; }
        
        /* 텍스트형 뱃지 링크 스타일 (다수 사장단 용도) */
        .nw-flex-container { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 12px; background: #fafafa; }
        [data-theme='dark'] .nw-flex-container { background: #1a1a1c; }
        .nw-link-text { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid #cbd5e1; border-radius: 20px; background: #ffffff; text-decoration: none; color: #1e293b; font-weight: bold; font-size: 0.85rem; transition: all 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        .nw-link-text:hover { background: #f1f5f9; border-color: #94a3b8; transform: translateY(-1px); }
        .nw-link-text .nw-badge-sub { font-weight: normal; color: #64748b; font-size: 0.75rem; border-left: 1px solid #e2e8f0; padding-left: 6px; }
        [data-theme='dark'] .nw-link-text { background: #2a2b2f; border-color: #444; color: #e2e8f0; }
        [data-theme='dark'] .nw-link-text:hover { background: #3a3b3f; border-color: #666; }
        [data-theme='dark'] .nw-link-text .nw-badge-sub { color: #94a3b8; border-color: #555; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입 (버스 사장 연합회)
    const navHtml = `
        <div class="nw-frame-bus shadow-sm">
            <div class="nw-title-bus">
                <a href="효빈광역시_시내버스.html" class="font-black text-xl hover:underline" style="color: #2980B9; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 대중교통과 반짝이는 덕력을 상징하는 버스와 별 SVG 로고 -->
                    <svg viewBox="0 0 100 100" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="25" width="70" height="50" rx="10" fill="#2980B9"/>
                        <rect x="25" y="35" width="50" height="20" fill="#EBF5FB" rx="3"/>
                        <circle cx="30" cy="80" r="8" fill="#333"/>
                        <circle cx="70" cy="80" r="8" fill="#333"/>
                        <path d="M 25 70 L 35 70 M 65 70 L 75 70" stroke="#F1C40F" stroke-width="4" stroke-linecap="round"/>
                        <polygon points="85,15 88,25 98,25 90,32 93,42 85,36 77,42 80,32 72,25 82,25" fill="#F1C40F"/>
                    </svg>
                    효빈권 버스 사장 연합회 (운수업계 지배자 및 덕후 사장단)
                </a>
            </div>
            
            <!-- 1. 메이저 8대장 (개인 문서 보유자) -->
            <details id="nw-major-box" class="nw-box" style="border-color:#2980B9;">
                <summary style="background-color:#2980B9; color:white;" class="outline-none">👑 메이저 운송사 및 성덕 사장단 (Big 8) ▼</summary>
                <table class="nw-tbl" style="border-color:#2980B9;">
                    <tr>
                        <th rowspan="2" class="w-[12%] bg-[#EBF5FB] text-[#154360]">메이저<br>Big 8</th>
                        <td class="w-[22%]"><a href="옥덕호.html" class="nw-link"><img src="이미지/옥덕호.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">옥덕호<span class="nw-subtext">(칠양여객 / 요우·리나)</span></a></td>
                        <td class="w-[22%]"><a href="유성신.html" class="nw-link"><img src="이미지/유성신.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">유성신<span class="nw-subtext">(효빈여객 / 포피파)</span></a></td>
                        <td class="w-[22%]"><a href="서고준.html" class="nw-link"><img src="이미지/서고준.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">서고준<span class="nw-subtext">(효빈고속 / 케이온 유이)</span></a></td>
                        <td class="w-[22%]"><a href="이상휴.html" class="nw-link"><img src="이미지/이상휴.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">이상휴<span class="nw-subtext">(소진여객 / 치카·다이아)</span></a></td>
                    </tr>
                    <tr>
                        <td><a href="이목선.html" class="nw-link"><img src="이미지/이목선.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">이목선<span class="nw-subtext">(청엽여객 / 아오바 모카)</span></a></td>
                        <td><a href="마맹호.html" class="nw-link"><img src="이미지/마맹호.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">마맹호<span class="nw-subtext">(입포여객 / 가면라이더)</span></a></td>
                        <td><a href="최강한.html" class="nw-link"><img src="이미지/최강한.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">최강한<span class="nw-subtext">(송포여객 / 카난)</span></a></td>
                        <td><a href="고수현.html" class="nw-link"><img src="이미지/고수현.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">고수현<span class="nw-subtext">(판주여객 / 린코)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 준공영제 및 서브컬처 오너 연대 (회사 문서로 이동) -->
            <details id="nw-subculture-box" class="nw-box" style="border-color:#8E44AD;">
                <summary style="background-color:#8E44AD; color:white;" class="outline-none">🎧 기타 서브컬처 오너 연대 (덕업일치) ▼</summary>
                <div class="nw-flex-container border-t border-[#8E44AD]">
                    <a href="창전여객.html" class="nw-link-text">안오현<span class="nw-badge-sub">창전여객 / 마시로</span></a>
                    <a href="이자여객.html" class="nw-link-text">도영선<span class="nw-badge-sub">이자여객 / 리코·세츠나</span></a>
                    <a href="임천여객.html" class="nw-link-text">유산전<span class="nw-badge-sub">임천여객 / 봇치</span></a>
                    <a href="중성여객.html" class="nw-link-text">심우진<span class="nw-badge-sub">중성여객 / 우즈키</span></a>
                    <a href="남주여객.html" class="nw-link-text">유남주<span class="nw-badge-sub">남주여객 / 란쥬·시오리코</span></a>
                    <a href="덕빈고속.html" class="nw-link-text">신세계<span class="nw-badge-sub">덕빈고속 / 원피스 루피</span></a>
                    <a href="안천고속.html" class="nw-link-text">안전호<span class="nw-badge-sub">안천고속 / 건담 샤아</span></a>
                    <a href="청선여객.html" class="nw-link-text">오산동<span class="nw-badge-sub">청선여객 / 역전재판 나루호도</span></a>
                </div>
            </details>

            <!-- 3. 일반/현실주의 및 갱생 사장단 (회사 문서로 이동) -->
            <details id="nw-realist-box" class="nw-box" style="border-color:#27AE60;">
                <summary style="background-color:#27AE60; color:white;" class="outline-none">🏢 일반·현실주의 및 갱생 사장단 (생존자들) ▼</summary>
                <div class="nw-flex-container border-t border-[#27AE60]">
                    <a href="대산고속.html" class="nw-link-text">박정석<span class="nw-badge-sub">대산고속 / 무난함·클래식</span></a>
                    <a href="탄성여객.html" class="nw-link-text">유진오<span class="nw-badge-sub">탄성여객 / 일반인</span></a>
                    <a href="오진여객.html" class="nw-link-text">김덕산<span class="nw-badge-sub">오진여객 / 등산·트로트</span></a>
                    <a href="효안교통.html" class="nw-link-text">박득만<span class="nw-badge-sub">효안교통 / 현실주의</span></a>
                    <a href="대교여객.html" class="nw-link-text">마동탁<span class="nw-badge-sub">대교여객 / 개과천선</span></a>
                    <a href="내삼여객.html" class="nw-link-text">고진혁<span class="nw-badge-sub">내삼여객 / 개과천선</span></a>
                    <a href="월주여객.html" class="nw-link-text">맹기석<span class="nw-badge-sub">월주여객 / 생존·PTSD</span></a>
                </div>
            </details>

            <!-- 4. 청산된 흑역사 및 적폐 카르텔 (개인 문서로 이동) -->
            <details id="nw-villain-box" class="nw-box mb-1" style="border-color:#C0392B;">
                <summary style="background-color:#C0392B; color:white;" class="outline-none">🚫 청산된 흑역사 및 적폐 카르텔 (영구 퇴출) ▼</summary>
                <table class="nw-tbl" style="border-color:#C0392B;">
                    <tr>
                        <th class="w-[12%] bg-[#FDEDEC] text-[#7B241C]">두청<br>운수</th>
                        <td class="w-[44%]"><a href="윤대환.html" class="nw-link"><img src="이미지/윤대환.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">윤대환<span class="nw-subtext">(실소유주 / 만악의 근원·빌런)</span></a></td>
                        <td class="w-[44%]"><a href="개민지.html" class="nw-link"><img src="이미지/개민지.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">개민지<span class="nw-subtext">(바지사장 / 꼬리 자르기 희생양)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    // 분류 배열 (Major 8인은 인물명으로 감지, 나머지는 회사명으로 감지)
    const majorCEOs = ["옥덕호", "유성신", "서고준", "이상휴", "이목선", "마맹호", "최강한", "고수현", "칠양여객", "효빈여객", "효빈고속", "소진여객", "청엽여객", "입포여객", "송포여객", "판주여객"];
    const subcultureCompanies = ["창전여객", "이자여객", "임천여객", "중성여객", "남주여객", "덕빈고속", "안천고속", "청선여객"];
    const realistCompanies = ["대산고속", "탄성여객", "오진여객", "효안교통", "대교여객", "내삼여객", "월주여객"];
    const villainCEOs = ["윤대환", "개민지", "두청운수"];

    let isMatched = false;

    if (majorCEOs.includes(pageTitle)) {
        const box = document.getElementById('nw-major-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (subcultureCompanies.includes(pageTitle)) {
        const box = document.getElementById('nw-subculture-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (realistCompanies.includes(pageTitle)) {
        const box = document.getElementById('nw-realist-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (villainCEOs.includes(pageTitle)) {
        const box = document.getElementById('nw-villain-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우 기본으로 메이저 운송사 박스를 엽니다.
    if (!isMatched) {
        const box = document.getElementById('nw-major-box');
        if(box) box.open = true;
    }
});