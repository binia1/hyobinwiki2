document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("child-center-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    // 테마 컬러: 지아센 오렌지(#F59E0B)와 빌런 진영의 크림슨 레드(#EF4444) 조합
    const navStyle = `
    <style>
        .cc-frame { border: 2px solid #F59E0B; background-color: #F59E0B; border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .cc-title { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #D97706; display: flex; justify-content: center; align-items: center; }
        .cc-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .cc-box { background: #1f2023; color: #ddd; }
        .cc-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .cc-box summary::-webkit-details-marker { display: none; }
        .cc-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .cc-tbl th, .cc-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .cc-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .cc-link:hover .cc-img { transform: scale(1.05); border-color: #F59E0B; }
        .cc-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .cc-link:hover { text-decoration: underline; color: #D97706; }
        .cc-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        .cc-strike { text-decoration: line-through; color: #999; font-size: 0.65rem; }
    </style>
    `;

    // 2. HTML 구조 주입 (빌런 2명 포함 전체 관계성 리팩토링)
    const navHtml = `
        <div class="cc-frame shadow-sm">
            <div class="cc-title">
                <a href="지역아동센터.html" class="font-black text-xl hover:underline" style="color: #F59E0B; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <svg viewBox="0 0 24 24" class="h-8 w-8 drop-shadow-md" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    지역아동센터 (지아센) 인물 관계도
                </a>
            </div>
            
            <!-- 1. 전설의 멘토와 제자들 (기적의 40점 방어전) -->
            <details id="cc-mentor-box" class="cc-box" style="border-color:#D97706;">
                <summary style="background-color:#D97706; color:#FFFFFF;" class="outline-none">🔥 지아센 전설의 사제지간 (영혼의 스터디 및 알바 동맹) ▼</summary>
                <table class="cc-tbl" style="border-color:#D97706;">
                    <tr>
                        <th class="w-[16%] bg-[#FEF3C7] text-[#B45309]">5과목<br>독박 멘토</th>
                        <td colspan="2">
                            <a href="박효빈.html" class="cc-link">
                                <img src="이미지/박효빈.webp" class="cc-img" onerror="this.style.display='none'">
                                박효빈
                                <span class="cc-subtext">('먼지' 짬처리 피해자)</span>
                                <span class="cc-strike">생명과학은 그냥 내가 가르칠게</span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th class="bg-[#FEF3C7] text-[#B45309]">기적의 40점<br>& 자본주의 피딩</th>
                        <td class="w-[42%]">
                            <a href="지민성.html" class="cc-link">
                                <img src="이미지/지민성.webp" class="cc-img" onerror="this.style.display='none'">
                                지민성
                                <span class="cc-subtext">(기적의 40점 방어전)</span>
                            </a>
                        </td>
                        <td class="w-[42%]">
                            <a href="나수미.html" class="cc-link">
                                <img src="이미지/나수미.webp" class="cc-img" onerror="this.style.display='none'">
                                나수미
                                <span class="cc-subtext">(자본주의 피딩)</span>
                            </a>
                        </td>
                    </tr>
                </table>
            </details>

            <!-- 2. 지아센 연합 (하스노소라 분파) -->
            <details id="cc-hasu-box" class="cc-box" style="border-color:#F7B6C0;">
                <summary style="background-color:#F7B6C0; color:#362023;" class="outline-none">🌸 지아센 연합 (하스노소라 분파 핵심 멤버) ▼</summary>
                <table class="cc-tbl" style="border-color:#F7B6C0;">
                    <tr>
                        <th class="w-[15%] bg-[#FCE7F3] text-[#BE185D]">지아센<br>연합</th>
                        <td class="w-[17%]"><a href="유초애.html" class="cc-link"><img src="이미지/유초애.webp" class="cc-img" onerror="this.style.display='none'">유초애<span class="cc-subtext">(코즈에)</span></a></td>
                        <td class="w-[17%]"><a href="도소영.html" class="cc-link"><img src="이미지/도소영.webp" class="cc-img" onerror="this.style.display='none'">도소영<span class="cc-subtext">(코스즈)</span></a></td>
                        <td class="w-[17%]"><a href="하화연.html" class="cc-link"><img src="이미지/하화연.webp" class="cc-img" onerror="this.style.display='none'">하화연<span class="cc-subtext">(카호)</span></a></td>
                        <td class="w-[17%]"><a href="유세라.html" class="cc-link"><img src="이미지/유세라.webp" class="cc-img" onerror="this.style.display='none'">유세라<span class="cc-subtext">(세라스)</span></a></td>
                        <td class="w-[17%]"><a href="이주미.html" class="cc-link"><img src="이미지/이주미.webp" class="cc-img" onerror="this.style.display='none'">이주미<span class="cc-subtext">(이즈미)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 3. 지아센 빌런 연합 (짬처리의 주범들) -->
            <details id="cc-villain-box" class="cc-box" style="border-color:#EF4444;">
                <summary style="background-color:#EF4444; color:#FFFFFF;" class="outline-none">💢 지아센 빌런즈 (짬처리의 주범 및 환장의 듀오) ▼</summary>
                <table class="cc-tbl" style="border-color:#EF4444;">
                    <tr>
                        <th class="w-[15%] bg-[#FEE2E2] text-[#B91C1C]">업무 떠넘기기<br>만악의 근원</th>
                        <td class="w-[42.5%]">
                            <a href="먼지년.html" class="cc-link">
                                <img src="이미지/히드라리스크.webp" class="cc-img" onerror="this.style.display='none'">
                                먼지년
                                <span class="cc-subtext">(업무 짬처리 주동자)</span>
                            </a>
                        </td>
                        <td class="w-[42.5%]">
                            <a href="경영15병신.html" class="cc-link">
                                <img src="이미지/초3_수학_수포자_짤.webp" class="cc-img" onerror="this.style.display='none'">
                                경영15병신
                                <span class="cc-subtext">(환장의 콜라보)</span>
                            </a>
                        </td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 문서 타이틀 감지를 통한 박스 자동 열기
    const pageTitle = document.title.split(" - ")[0].trim();
    
    const mentorMembers = ["박효빈", "박효빈/생애", "지민성", "나수미"];
    const hasuMembers = ["도소영", "유초애", "하화연", "유세라", "이주미"];
    const villainMembers = ["먼지년", "경영15병신"];

    let isMatched = false;

    if (mentorMembers.includes(pageTitle) || pageTitle.includes("박효빈")) {
        const box = document.getElementById('cc-mentor-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (hasuMembers.includes(pageTitle)) {
        const box = document.getElementById('cc-hasu-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (villainMembers.includes(pageTitle)) {
        const box = document.getElementById('cc-villain-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 일반 문서에서 로드 시 기본으로 사제지간과 빌런 박스 등을 적절히 제어
    if (!isMatched) {
        document.getElementById('cc-mentor-box').open = true;
        document.getElementById('cc-hasu-box').open = true;
        document.getElementById('cc-villain-box').open = true;
    }
});