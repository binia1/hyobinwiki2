document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hyobin-presidents-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 효빈광역시 대학 총장 협의회 전용 틀 스타일 (아카데믹 네이비/골드 테마) */
        .nw-frame-presidents { border: 2px solid #1B263B; background: linear-gradient(to right, #1B263B, #415A77); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .nw-title-presidents { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #1B263B; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link:hover .nw-img { transform: scale(1.05); border-color: #D4AF37; }
        .nw-link { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link:hover { text-decoration: underline; color: #D4AF37; }
        .nw-subtext { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; }
        
        /* 텍스트형 뱃지 링크 스타일 (서브 대학들 용도) */
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

    // 2. 방대한 HTML 구조 주입 (대학 총장 협의회)
    const navHtml = `
        <div class="nw-frame-presidents shadow-sm">
            <div class="nw-title-presidents">
                <a href="효빈광역시_대학_총장_협의회.html" class="font-black text-xl hover:underline" style="color: #1B263B; display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none;">
                    <!-- 학문과 권위를 상징하는 신전 기둥 및 학사모 SVG 로고 -->
                    <svg viewBox="0 0 100 100" class="h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 30 L90 30 L50 10 Z" fill="#1B263B" />
                        <rect x="20" y="35" width="10" height="45" fill="#415A77" />
                        <rect x="45" y="35" width="10" height="45" fill="#415A77" />
                        <rect x="70" y="35" width="10" height="45" fill="#415A77" />
                        <path d="M10 80 L90 80 L90 90 L10 90 Z" fill="#1B263B" />
                        <path d="M50 45 L65 52 L50 59 L35 52 Z" fill="#D4AF37" />
                        <path d="M63 53 L63 65" stroke="#D4AF37" stroke-width="2" />
                    </svg>
                    효빈광역시 대학 총장 협의회 (지성과 광기의 리더십)
                </a>
            </div>
            
            <!-- 1. 주요 7대 사학 총장 (문서 보유 및 세계관 핵심 인물들) -->
            <details id="nw-core-box" class="nw-box" style="border-color:#D4AF37;">
                <summary style="background-color:#1B263B; color:#D4AF37;" class="outline-none">👑 주요 대학 총장 연대 (성덕·개혁 군주 7인) ▼</summary>
                <table class="nw-tbl" style="border-color:#D4AF37;">
                    <tr>
                        <th rowspan="2" class="w-[12%] bg-[#FDFBF7] text-[#8B6508]">주요<br>총장</th>
                        <td class="w-[22%]"><a href="민부선.html" class="nw-link"><img src="이미지/민부선.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">민부선<span class="nw-subtext">(효빈대 / 베르데·샤이니)</span></a></td>
                        <td class="w-[22%]"><a href="오성현.html" class="nw-link"><img src="이미지/오성현.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">오성현<span class="nw-subtext">(성택대 / 타천의 마계 리더)</span></a></td>
                        <td class="w-[22%]"><a href="김성송.html" class="nw-link"><img src="이미지/김성송.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">김성송<span class="nw-subtext">(동구대 / 극한의 시간통제)</span></a></td>
                        <td class="w-[22%]"><a href="명안나.html" class="nw-link"><img src="이미지/명안나.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">명안나<span class="nw-subtext">(평안명대 / 갤럭시 센터)</span></a></td>
                    </tr>
                    <tr>
                        <td><a href="하진수.html" class="nw-link"><img src="이미지/하진수.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">하진수<span class="nw-subtext">(엽월대 / 사파이어·게임광)</span></a></td>
                        <td><a href="위시윤.html" class="nw-link"><img src="이미지/위시윤.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">위시윤<span class="nw-subtext">(삼선대 / 적성 제일주의)</span></a></td>
                        <td><a href="우시랑.html" class="nw-link"><img src="이미지/우시랑.webp" class="nw-img" onerror="this.src='이미지/효빈위키아이콘.webp'">우시랑<span class="nw-subtext">(효빈복지대 / 동호회 복지)</span></a></td>
                        <td class="bg-gray-50"><span class="text-xs text-gray-400">효빈권<br>총장협의회</span></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 4년제 종합/특수대학 총장 -->
            <details id="nw-4yr-box" class="nw-box" style="border-color:#415A77;">
                <summary style="background-color:#415A77; color:white;" class="outline-none">🏛️ 4년제 종합 및 특수대학 총장 ▼</summary>
                <div class="nw-flex-container border-t border-[#415A77]">
                    <a href="유영태.html" class="nw-link-text">유영태<span class="nw-badge-sub">HIST</span></a>
                    <a href="나영곤.html" class="nw-link-text">나영곤<span class="nw-badge-sub">효빈교육대</span></a>
                    <a href="해상민.html" class="nw-link-text">해상민<span class="nw-badge-sub">효빈해양대</span></a>
                    <a href="양연태오.html" class="nw-link-text">양연태오<span class="nw-badge-sub">광연대</span></a>
                    <a href="우서진.html" class="nw-link-text">우서진<span class="nw-badge-sub">중촌대</span></a>
                    <a href="남영곡.html" class="nw-link-text">남영곡<span class="nw-badge-sub">옥선대</span></a>
                    <a href="소고영.html" class="nw-link-text">소고영<span class="nw-badge-sub">안월대</span></a>
                    <a href="James_K._Park.html" class="nw-link-text">James K. Park<span class="nw-badge-sub">청엽국제학교</span></a>
                    <a href="김광수.html" class="nw-link-text">김광수<span class="nw-badge-sub">평천대</span></a>
                    <a href="이사현.html" class="nw-link-text">이사현<span class="nw-badge-sub">해천대</span></a>
                    <a href="여서경.html" class="nw-link-text">여서경<span class="nw-badge-sub">효빈외대</span></a>
                </div>
            </details>

            <!-- 3. 전문/기능대학 총장 -->
            <details id="nw-2yr-box" class="nw-box mb-1" style="border-color:#778DA9;">
                <summary style="background-color:#778DA9; color:white;" class="outline-none">🎓 전문 및 기능대학 총장 ▼</summary>
                <div class="nw-flex-container border-t border-[#778DA9]">
                    <a href="원지연.html" class="nw-link-text">원지연<span class="nw-badge-sub">안신대 (단일건물)</span></a>
                    <a href="연옥선.html" class="nw-link-text">연옥선<span class="nw-badge-sub">치고대 (폐교위기 비리총장)</span></a>
                    <a href="유서강.html" class="nw-link-text">유서강<span class="nw-badge-sub">선자대</span></a>
                    <a href="노서랑.html" class="nw-link-text">노서랑<span class="nw-badge-sub">대찬대</span></a>
                    <a href="안고성.html" class="nw-link-text">안고성<span class="nw-badge-sub">삽곡대</span></a>
                    <a href="이성남.html" class="nw-link-text">이성남<span class="nw-badge-sub">해총대</span></a>
                    <a href="이시연.html" class="nw-link-text">이시연<span class="nw-badge-sub">효빈과학대</span></a>
                    <a href="오고선.html" class="nw-link-text">오고선<span class="nw-badge-sub">효빈보건대</span></a>
                    <a href="고요성.html" class="nw-link-text">고요성<span class="nw-badge-sub">효빈예술대</span></a>
                    <a href="송기술.html" class="nw-link-text">송기술<span class="nw-badge-sub">한국폴리텍VIII</span></a>
                </div>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    // 분류 배열 (이름 또는 대학명으로 매칭)
    const corePresidents = ["민부선", "오성현", "김성송", "명안나", "하진수", "위시윤", "우시랑", "효빈대학교", "성택대학교", "동구대학교", "평안명대학교", "엽월대학교", "삼선대학교", "효빈복지대학교"];
    const fourYearPresidents = ["유영태", "나영곤", "해상민", "양연태오", "우서진", "남영곡", "소고영", "James K. Park", "김광수", "이사현", "여서경", "효빈과학기술원", "HIST", "효빈교육대학교", "효빈해양대학교", "광연대학교", "중촌대학교", "옥선대학교", "안월대학교", "청엽국제학교", "평천대학교", "해천대학교", "효빈외국어대학교"];
    const twoYearPresidents = ["원지연", "연옥선", "유서강", "노서랑", "안고성", "이성남", "이시연", "오고선", "고요성", "송기술", "안신대학교", "치고대학교", "선자대학교", "대찬대학교", "삽곡대학교", "해총대학교", "효빈과학대학교", "효빈보건대학교", "효빈예술대학교", "한국폴리텍VIII대학"];

    let isMatched = false;

    if (corePresidents.includes(pageTitle)) {
        const box = document.getElementById('nw-core-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (fourYearPresidents.includes(pageTitle)) {
        const box = document.getElementById('nw-4yr-box');
        if(box) { box.open = true; isMatched = true; }
    }
    if (twoYearPresidents.includes(pageTitle)) {
        const box = document.getElementById('nw-2yr-box');
        if(box) { box.open = true; isMatched = true; }
    }
    
    // 매칭되지 않는 문서에서 이 틀을 열었을 경우 기본으로 '주요 대학 총장 연대' 박스를 엽니다.
    if (!isMatched) {
        const box = document.getElementById('nw-core-box');
        if(box) box.open = true;
    }
});