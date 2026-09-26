document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("bokjigo-people-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 복지여고 인물 틀 스타일 (스쿨 그린 & 골드 테마) */
        .nw-frame-bokji { border: 2px solid #1E5631; background: linear-gradient(to right, #1E5631, #2E7D32); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: sans-serif; }
        .nw-title-bokji { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #1E5631; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; font-size: 1.1rem; font-weight: 900; color: #1E5631; }
        .nw-box-bokji { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box-bokji { background: #1f2023; color: #ddd; }
        .nw-box-bokji summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box-bokji summary::-webkit-details-marker { display: none; }
        .nw-tbl-bokji { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl-bokji th, .nw-tbl-bokji td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img-bokji { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link-bokji:hover .nw-img-bokji { transform: scale(1.05); border-color: #D4AF37; }
        .nw-link-bokji { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link-bokji:hover { text-decoration: underline; color: #1E5631; }
        .nw-subtext-bokji { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; line-height: 1.2; }
    </style>
    `;

    // 2. HTML 구조 주입
    const navHtml = `
        <div class="nw-frame-bokji shadow-sm">
            <div class="nw-title-bokji">
                <!-- 아카데믹한 방패와 책을 상징하는 로고 -->
                <svg viewBox="0 0 100 100" class="h-7 w-7 mr-2 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 10 L10 30 L50 50 L90 30 Z" fill="#1E5631"/>
                    <path d="M20 40 L20 70 L50 90 L80 70 L80 40 L50 55 Z" fill="#2E7D32"/>
                    <circle cx="50" cy="50" r="10" fill="#D4AF37"/>
                </svg>
                복지여자고등학교 관련 인물 (참교육의 요람)
            </div>
            
            <!-- 1. 참스승 (현직 교직원) -->
            <details id="nw-teachers-box" class="nw-box-bokji" style="border-color:#1E5631;">
                <summary style="background-color:#1E5631; color:white;" class="outline-none">🏫 참교육의 요람 (현직 교직원) ▼</summary>
                <table class="nw-tbl-bokji" style="border-color:#1E5631;">
                    <tr>
                        <th class="w-[12%] bg-[#E8F5E9] text-[#1B5E20]">참스승</th>
                        <td class="w-[22%]"><a href="유혜경.html" class="nw-link-bokji"><img src="이미지/유혜경.webp" class="nw-img-bokji" onerror="this.src='이미지/효빈위키아이콘.webp'">유혜경<span class="nw-subtext-bokji">(교장 / 철의 여인)</span></a></td>
                        <td class="w-[22%]"><a href="이희명.html" class="nw-link-bokji"><img src="이미지/이희명.webp" class="nw-img-bokji" onerror="this.src='이미지/효빈위키아이콘.webp'">이희명<span class="nw-subtext-bokji">(일반사회 / 수호신)</span></a></td>
                        <td class="w-[22%]"><a href="홍수빈.html" class="nw-link-bokji"><img src="이미지/홍수빈.webp" class="nw-img-bokji" onerror="this.src='이미지/효빈위키아이콘.webp'">홍수빈<span class="nw-subtext-bokji">(수학 / 팩폭 계산기)</span></a></td>
                        <td class="w-[22%]"><a href="문수연.html" class="nw-link-bokji"><img src="이미지/문수연.webp" class="nw-img-bokji" onerror="this.src='이미지/효빈위키아이콘.webp'">문수연<span class="nw-subtext-bokji">(국어 / 금의환향)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 전설의 동문 (졸업생) -->
            <details id="nw-alumni-box" class="nw-box-bokji" style="border-color:#2980B9;">
                <summary style="background-color:#2980B9; color:white;" class="outline-none">🎓 전설의 동문 (복지고 출신 및 4인방) ▼</summary>
                <table class="nw-tbl-bokji" style="border-color:#2980B9;">
                    <tr>
                        <th class="w-[12%] bg-[#EAF2F8] text-[#154360]">졸업생</th>
                        <td class="w-[22%]"><a href="문수하.html" class="nw-link-bokji"><img src="이미지/문수하.webp" class="nw-img-bokji" onerror="this.src='이미지/효빈위키아이콘.webp'">문수하<span class="nw-subtext-bokji">(번역가 / 언어 요새)</span></a></td>
                        <td class="w-[22%]"><a href="강해나.html" class="nw-link-bokji"><img src="이미지/강해나.webp" class="nw-img-bokji" onerror="this.src='이미지/효빈위키아이콘.webp'">강해나<span class="nw-subtext-bokji">(시청 주무관 / 불도저 반장)</span></a></td>
                        <td class="w-[22%]"><a href="최유리.html" class="nw-link-bokji"><img src="이미지/최유리.webp" class="nw-img-bokji" onerror="this.src='이미지/효빈위키아이콘.webp'">최유리<span class="nw-subtext-bokji">(사회부 기자 / 스피커)</span></a></td>
                        <td class="w-[22%]"><a href="백지원.html" class="nw-link-bokji"><img src="이미지/백지원.webp" class="nw-img-bokji" onerror="this.src='이미지/효빈위키아이콘.webp'">백지원<span class="nw-subtext-bokji">(일러스트레이터 / 지원사격)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 3. 캐릭터 (재학생) -->
            <details id="nw-character-box" class="nw-box-bokji" style="border-color:#F39C12;">
                <summary style="background-color:#F39C12; color:white;" class="outline-none">🌸 캐릭터 부문 (재학생 및 마스코트) ▼</summary>
                <table class="nw-tbl-bokji" style="border-color:#F39C12;">
                    <tr>
                        <th class="w-[12%] bg-[#FEF5E7] text-[#7E5109]">캐릭터</th>
                        <td class="w-[88%]"><a href="미소율.html" class="nw-link-bokji"><img src="이미지/미소율.webp" class="nw-img-bokji" onerror="this.src='이미지/효빈위키아이콘.webp'">미소율<span class="nw-subtext-bokji">(2학년 재학생 / 콩알 요정·애니메이션 마스코트)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 4. 흑역사 (이석우) -->
            <details id="nw-villain-box" class="nw-box-bokji mb-1" style="border-color:#C0392B;">
                <summary style="background-color:#C0392B; color:white;" class="outline-none">🚫 영구 퇴출 (학교의 수치 및 흑역사) ▼</summary>
                <table class="nw-tbl-bokji" style="border-color:#C0392B;">
                    <tr>
                        <th class="w-[12%] bg-[#FDEDEC] text-[#7B241C]">퇴출자</th>
                        <td class="w-[88%]"><a href="이석우.html" class="nw-link-bokji"><img src="이미지/이석우.webp" class="nw-img-bokji" onerror="this.src='이미지/효빈위키아이콘.webp'">이석우<span class="nw-subtext-bokji">(前 진로교사 / 폭언 및 만행으로 파면)</span></a></td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    // 분류 배열
    const teachers = ["유혜경", "이희명", "홍수빈", "문수연"];
    const alumni = ["문수하", "강해나", "최유리", "백지원"];
    const characters = ["미소율"];
    const villains = ["이석우"];

    let isMatched = false;

    // 현재 열려있는 문서의 주인공에 맞춰 해당 탭이 자동으로 열립니다.
    if (teachers.includes(pageTitle)) {
        const box = document.getElementById('nw-teachers-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (alumni.includes(pageTitle)) {
        const box = document.getElementById('nw-alumni-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (characters.includes(pageTitle)) {
        const box = document.getElementById('nw-character-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (villains.includes(pageTitle)) {
        const box = document.getElementById('nw-villain-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우 기본으로 교직원 박스를 엽니다.
    if (!isMatched) {
        const box = document.getElementById('nw-teachers-box');
        if(box) box.open = true;
    }
});