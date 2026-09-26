document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hyobin-fakenews-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 허위사실 유포 및 사이버불링 카르텔 전용 틀 스타일 (가짜뉴스 경고 / 범죄 테마) */
        .nw-frame-fakenews { border: 2px solid #2C3E50; background: linear-gradient(to right, #2C3E50, #E74C3C); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .nw-title-fakenews { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #2C3E50; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #E74C3C; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #E74C3C; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입 (찌라시 멸망전 빌런 연대)
    const navHtml = `
        <div class="nw-frame-fakenews shadow-sm">
            <div class="nw-title-fakenews">
                <a href="박효빈_공직선거법_위반_허위사실_유포_및_제자_사이버불링_사건.html" class="font-black text-xl hover:underline" style="color: #2C3E50; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 가짜뉴스와 찌라시 척결을 상징하는 확성기 & 금지 표시 SVG 로고 -->
                    <svg viewBox="0 0 100 100" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 20 40 L 40 40 L 60 20 L 60 80 L 40 60 L 20 60 Z" fill="#7F8C8D"/>
                        <path d="M 65 30 A 25 25 0 0 1 65 70" fill="none" stroke="#7F8C8D" stroke-width="6" stroke-linecap="round"/>
                        <path d="M 75 20 A 40 40 0 0 1 75 80" fill="none" stroke="#7F8C8D" stroke-width="6" stroke-linecap="round"/>
                        <!-- 차단/금지 마크 -->
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#E74C3C" stroke-width="8"/>
                        <line x1="18" y1="18" x2="82" y2="82" stroke="#E74C3C" stroke-width="8"/>
                    </svg>
                    효빈시 찌라시 멸망전 (허위사실 유포 및 사이버불링 카르텔)
                </a>
            </div>
            
            <!-- 1. 주범 및 기레기 카르텔 -->
            <details id="nw-core-box" class="nw-box" style="border-color:#C0392B;">
                <summary style="background-color:#C0392B; color:white;" class="outline-none">🚨 주범 및 찌라시 기레기 (전원 구속 및 징계 파면) ▼</summary>
                <table class="nw-tbl" style="border-color:#C0392B;">
                    <tr>
                        <th class="w-[12%] bg-[#FDEDEC] text-[#7B241C]">주<br>범</th>
                        <td class="w-[29%]"><a href="조진우.html" class="nw-link"><img src="이미지/조진우.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">조진우<span class="nw-subtext">(징역 12년 / 딥페이크 성범죄)</span></a></td>
                        <td class="w-[29%]"><a href="임기춘.html" class="nw-link"><img src="이미지/임기춘.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">임기춘<span class="nw-subtext">(조선일보 파면 / 악마의 편집)</span></a></td>
                        <td class="w-[29%]"><a href="윤만우.html" class="nw-link"><img src="이미지/윤만우.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">윤만우<span class="nw-subtext">(현행범 체포 / 분식집 패드립충)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 2차 가해 및 억까 동조자 -->
            <details id="nw-bully-box" class="nw-box" style="border-color:#E67E22;">
                <summary style="background-color:#E67E22; color:white;" class="outline-none">🗑️ 2차 가해 및 악플러 (사회적 멸망 및 억대 빚더미) ▼</summary>
                <table class="nw-tbl" style="border-color:#E67E22;">
                    <tr>
                        <th class="w-[12%] bg-[#FEF5E7] text-[#B9770E]">가<br>해</th>
                        <td class="w-[29%]"><a href="장동우.html" class="nw-link"><img src="이미지/장동우.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">장동우<span class="nw-subtext">(징역형 / 안천대교 비아냥충)</span></a></td>
                        <td class="w-[29%]"><a href="인태준.html" class="nw-link"><img src="이미지/인태준.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">인태준<span class="nw-subtext">(영구 퇴출 / 과고 능지 자폭충)</span></a></td>
                        <td class="w-[29%]"><a href="박효빈 공직선거법 위반 허위사실 유포 및 제자 사이버불링 사건.html#s-6" class="nw-link"><img src="이미지/효빈위키아이콘.webp" class="nw-img">익명 악플러 6인<span class="nw-subtext">(신상 특정 / 억대 가압류 폭탄)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 3. 완벽한 철퇴 (참교육자들) -->
            <details id="nw-judges-box" class="nw-box mb-1" style="border-color:#2C3E50;">
                <summary style="background-color:#2C3E50; color:white;" class="outline-none">🔨 무관용 참교육자 (완벽한 단죄와 철퇴) ▼</summary>
                <table class="nw-tbl" style="border-color:#2C3E50;">
                    <tr>
                        <th class="w-[12%] bg-[#EAECEE] text-[#2C3E50]">철<br>퇴</th>
                        <td class="w-[22%]"><a href="박효빈.html" class="nw-link"><img src="이미지/박효빈.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">박효빈 시장<span class="nw-subtext">(태평양 어깨 / 자비 없는 고소)</span></a></td>
                        <td class="w-[22%]"><a href="이주미.html" class="nw-link"><img src="이미지/이주미.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">이주미<span class="nw-subtext">(정당방위 사자후 / 완벽한 결백)</span></a></td>
                        <td class="w-[22%]"><a href="하화연.html" class="nw-link"><img src="이미지/하화연.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">하화연<span class="nw-subtext">(분식집 2차 사자후 / 인실좆)</span></a></td>
                        <td class="w-[22%]"><a href="최원형.html" class="nw-link"><img src="이미지/최원형.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">최원형 & 2심 판사<span class="nw-subtext">(법정모독 참교육 / 징역 12년)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    const coreVillains = ["조진우", "임기춘", "윤만우", "박효빈 공직선거법 위반 허위사실 유포 및 제자 사이버불링 사건"];
    const bullies = ["장동우", "인태준", "악플러"];
    const judges = ["박효빈", "이주미", "하화연", "최원형", "천 비서실장"];

    let isMatched = false;

    if (coreVillains.includes(pageTitle)) {
        const box = document.getElementById('nw-core-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (bullies.includes(pageTitle)) {
        const box = document.getElementById('nw-bully-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (judges.includes(pageTitle)) {
        const box = document.getElementById('nw-judges-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우, 가해자 문서면 nw-bully-box를 엽니다.
    if (!isMatched) {
        if (["장동우", "인태준"].includes(pageTitle)) {
            const box = document.getElementById('nw-bully-box');
            if(box) box.open = true;
        } else {
            const box = document.getElementById('nw-core-box');
            if(box) box.open = true;
        }
    }
});