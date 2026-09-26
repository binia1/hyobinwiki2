document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hyobin-professors-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 효빈권 참교수 연합회 전용 틀 스타일 (학문의 권위 / 딥 틸 & 골드 테마) */
        .nw-frame-profs { border: 2px solid #115E59; background: linear-gradient(to right, #115E59, #0F766E); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .nw-title-profs { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #115E59; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #D4AF37; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #0F766E; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; line-height: 1.2; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입 (교수벤져스 연대)
    const navHtml = `
        <div class="nw-frame-profs shadow-sm">
            <div class="nw-title-profs">
                <a href="교수벤져스.html" class="font-black text-xl hover:underline" style="color: #115E59; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 학문과 진리, 철퇴를 상징하는 방패와 만년필 SVG 로고 -->
                    <svg viewBox="0 0 100 100" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 10 L15 25 L15 60 C15 80 50 95 50 95 C50 95 85 80 85 60 L85 25 Z" fill="#115E59"/>
                        <path d="M50 15 L20 28 L20 58 C20 75 50 88 50 88 C50 88 80 75 80 58 L80 28 Z" fill="#0F766E"/>
                        <!-- 만년필 펜촉 (팩트 폭격) -->
                        <path d="M50 30 L40 60 L45 70 L50 75 L55 70 L60 60 Z" fill="#D4AF37"/>
                        <path d="M50 30 L50 75" stroke="#115E59" stroke-width="2"/>
                        <circle cx="50" cy="55" r="3" fill="#115E59"/>
                    </svg>
                    효빈권 참교수 연합회 (팩트 폭격기 및 교수벤져스)
                </a>
            </div>
            
            <!-- 1. 네임드 참교수 (효빈대 & 동구대 학문적 지주) -->
            <details id="nw-named-box" class="nw-box" style="border-color:#145A32;">
                <summary style="background-color:#145A32; color:white;" class="outline-none">🎓 네임드 참스승 연대 (행동하는 지성인) ▼</summary>
                <table class="nw-tbl" style="border-color:#145A32;">
                    <tr>
                        <th class="w-[12%] bg-[#EAFAF1] text-[#145A32]">교<br>수</th>
                        <td class="w-[22%]"><a href="은권규.html" class="nw-link"><img src="이미지/은권규.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">은권규<span class="nw-subtext">(심리학 / 프로파일러·노조미 오시)</span></a></td>
                        <td class="w-[22%]"><a href="최형석.html" class="nw-link"><img src="이미지/최형석.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">최형석<span class="nw-subtext">(부동산학 / 두청 슬레이어)</span></a></td>
                        <td class="w-[22%]"><a href="권기준.html" class="nw-link"><img src="이미지/권기준.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">권기준 (K)<span class="nw-subtext">(철도운영학 / 데이터 스나이퍼)</span></a></td>
                        <td class="w-[22%]"><a href="황세철.html" class="nw-link"><img src="이미지/황세철.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">황세철<span class="nw-subtext">(동구대 경영학 / 빛세철)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 이니셜 교수벤져스 (철학, 외교, 도시, 복지의 수호자들) -->
            <details id="nw-initial-box" class="nw-box" style="border-color:#2980B9;">
                <summary style="background-color:#2980B9; color:white;" class="outline-none">🏛️ 이니셜 교수벤져스 (무관용 팩트 폭격기) ▼</summary>
                <table class="nw-tbl" style="border-color:#2980B9;">
                    <tr>
                        <th class="w-[10%] bg-[#EAF2F8] text-[#154360]">교<br>수</th>
                        <td class="w-[15%]"><a href="박_교수.html" class="nw-link"><img src="이미지/박_교수.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">박 교수<span class="nw-subtext">(사회복지실천학)</span></a></td>
                        <td class="w-[15%]"><a href="S_교수.html" class="nw-link"><img src="이미지/S_교수.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">S 교수<span class="nw-subtext">(일어일문학)</span></a></td>
                        <td class="w-[15%]"><a href="J_교수.html" class="nw-link"><img src="이미지/J_교수.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">J 교수<span class="nw-subtext">(도시공학)</span></a></td>
                        <td class="w-[15%]"><a href="F_교수.html" class="nw-link"><img src="이미지/F_교수.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">F 교수<span class="nw-subtext">(프랑스어학)</span></a></td>
                        <td class="w-[15%]"><a href="H_교수.html" class="nw-link"><img src="이미지/H_교수.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">H 교수<span class="nw-subtext">(정치외교학 / 지성의 방패)</span></a></td>
                        <td class="w-[15%]"><a href="M_교수.html" class="nw-link"><img src="이미지/M_교수.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">M 교수<span class="nw-subtext">(필리핀어학 / 진리의 수호자)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 3. 메디컬 참교육 듀오 (의학적 팩트와 생사결단) -->
            <details id="nw-medical-box" class="nw-box" style="border-color:#C0392B;">
                <summary style="background-color:#C0392B; color:white;" class="outline-none">🩺 메디컬 참교육 듀오 (영안실 및 합법적 진료 거부) ▼</summary>
                <table class="nw-tbl" style="border-color:#C0392B;">
                    <tr>
                        <th class="w-[12%] bg-[#FDEDEC] text-[#7B241C]">의<br>료</th>
                        <td class="w-[44%]"><a href="간호학과_교수.html" class="nw-link"><img src="이미지/간호학과_교수.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">간호학과 교수<span class="nw-subtext">(트리아지 마스터 / 인성 흑색 태그 선고)</span></a></td>
                        <td class="w-[44%]"><a href="정형외과_교수.html" class="nw-link"><img src="이미지/정형외과_교수.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">정형외과 교수<span class="nw-subtext">(시크 닥터 / 수술 3개월 대기열 참교육)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 4. 특임/석좌교수 연대 (전직 관료 및 CEO 출신 지성인) -->
            <details id="nw-honorary-box" class="nw-box mb-1" style="border-color:#7D3C98;">
                <summary style="background-color:#7D3C98; color:white;" class="outline-none">🎖️ 특임·석좌교수 연대 (덕업일치 및 명예 지성인) ▼</summary>
                <table class="nw-tbl" style="border-color:#7D3C98;">
                    <tr>
                        <th class="w-[12%] bg-[#F4ECF7] text-[#4A235A]">명<br>예</th>
                        <td class="w-[44%]"><a href="오다구.html" class="nw-link"><img src="이미지/오다구.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">오다구<span class="nw-subtext">(효빈대 철도운영학 특임교수 / 철도 깎는 노인)</span></a></td>
                        <td class="w-[44%]"><a href="정민재.html" class="nw-link"><img src="이미지/정민재.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">정민재<span class="nw-subtext">(삼선대 금융통계학 석좌교수 / 금융덕후)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    // 분류 배열
    const namedProfs = ["은권규", "최형석", "황세철", "권기준", "K 교수"];
    const initialProfs = ["박 교수", "P 교수", "S 교수", "J 교수", "F 교수", "H 교수", "M 교수", "교수벤져스"];
    const medicalProfs = ["간호학과 교수", "정형외과 교수"];
    const honoraryProfs = ["오다구", "정민재"];

    let isMatched = false;

    if (namedProfs.includes(pageTitle)) {
        const box = document.getElementById('nw-named-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (initialProfs.includes(pageTitle)) {
        const box = document.getElementById('nw-initial-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (medicalProfs.includes(pageTitle)) {
        const box = document.getElementById('nw-medical-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (honoraryProfs.includes(pageTitle)) {
        const box = document.getElementById('nw-honorary-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우 기본으로 이니셜 교수벤져스 박스를 엽니다.
    if (!isMatched) {
        const box = document.getElementById('nw-initial-box');
        if(box) box.open = true;
    }
});