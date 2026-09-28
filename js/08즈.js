document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("08z-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 08즈 전용 틀 스타일 (망고 오렌지 & 에너제틱 테마) */
        .nw-frame-08z { border: 2px solid #F39C12; background: linear-gradient(to right, #F39C12, #E67E22); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: sans-serif; }
        .nw-title-08z { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #F39C12; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; font-size: 1.1rem; font-weight: 900; color: #D35400; }
        .nw-box-08z { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box-08z { background: #1f2023; color: #ddd; }
        .nw-box-08z summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box-08z summary::-webkit-details-marker { display: none; }
        .nw-tbl-08z { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.8rem; word-break: keep-all; }
        .nw-tbl-08z th, .nw-tbl-08z td { border: 1px solid currentColor; padding: 8px 4px; vertical-align: middle; text-align: center; }
        .nw-img-08z { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; margin: 0 auto 4px; display: block; border: 1px solid #ddd; transition: transform 0.2s; }
        .nw-link-08z:hover .nw-img-08z { transform: scale(1.05); border-color: #F39C12; }
        .nw-link-08z { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link-08z:hover { text-decoration: underline; color: #D35400; }
        .nw-subtext-08z { font-size: 0.7rem; color: #777; font-weight: normal; margin-top: 2px; line-height: 1.2; }
        
        /* 텍스트형 뱃지 링크 스타일 (케미 용도) */
        .nw-flex-container-08z { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 12px; background: #fafafa; }
        [data-theme='dark'] .nw-flex-container-08z { background: #1a1a1c; }
        .nw-link-text-08z { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid #fbd29a; border-radius: 20px; background: #ffffff; text-decoration: none; color: #1e293b; font-weight: bold; font-size: 0.85rem; transition: all 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        .nw-link-text-08z:hover { background: #fdf2e3; border-color: #f39c12; transform: translateY(-1px); color: #D35400; }
        .nw-link-text-08z .nw-badge-sub-08z { font-weight: normal; color: #64748b; font-size: 0.75rem; border-left: 1px solid #e2e8f0; padding-left: 6px; }
        [data-theme='dark'] .nw-link-text-08z { background: #2a2b2f; border-color: #664109; color: #e2e8f0; }
        [data-theme='dark'] .nw-link-text-08z:hover { background: #3f2805; border-color: #f39c12; }
        [data-theme='dark'] .nw-link-text-08z .nw-badge-sub-08z { color: #94a3b8; border-color: #555; }
    </style>
    `;

    // 2. HTML 구조 주입
    const navHtml = `
        <div class="nw-frame-08z shadow-sm">
            <div class="nw-title-08z">
                <!-- 반짝이는 별과 폭발하는 에너지를 상징하는 아이콘 -->
                <svg viewBox="0 0 100 100" class="h-7 w-7 mr-2 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 5 L60 35 L95 40 L65 60 L75 95 L50 75 L25 95 L35 60 L5 40 L40 35 Z" fill="#F1C40F"/>
                    <circle cx="50" cy="50" r="15" fill="#E67E22"/>
                    <path d="M50 30 L50 70 M30 50 L70 50" stroke="#FFF" stroke-width="4" stroke-linecap="round"/>
                </svg>
                마의 08년생 동갑내기 (08즈)
            </div>
            
            <!-- 1. 08즈 멤버 (5인방) -->
            <details id="nw-members-box" class="nw-box-08z" style="border-color:#F39C12;" open>
                <summary style="background-color:#F39C12; color:white;" class="outline-none">✨ 비글미와 대환장 케미의 주역들 ▼</summary>
                <table class="nw-tbl-08z" style="border-color:#F39C12;">
                    <tr>
                        <td class="w-[20%]"><a href="하루아.html" class="nw-link-08z"><img src="이미지/하루아.webp" class="nw-img-08z" onerror="this.src='이미지/효빈위키아이콘.webp'">하루아<span class="nw-subtext-08z">(행동대장 / 2호선 가족)</span></a></td>
                        <td class="w-[20%]"><a href="유리아.html" class="nw-link-08z"><img src="이미지/유리아.webp" class="nw-img-08z" onerror="this.src='이미지/효빈위키아이콘.webp'">유리아<span class="nw-subtext-08z">(도파민 재앙신 / 8호선)</span></a></td>
                        <td class="w-[20%]"><a href="임세연.html" class="nw-link-08z"><img src="이미지/임세연.webp" class="nw-img-08z" onerror="this.src='이미지/효빈위키아이콘.webp'">임세연<span class="nw-subtext-08z">(전담 억제기 / 7호선 가족)</span></a></td>
                        <td class="w-[20%]"><a href="미소율.html" class="nw-link-08z"><img src="이미지/미소율.webp" class="nw-img-08z" onerror="this.src='이미지/효빈위키아이콘.webp'">미소율<span class="nw-subtext-08z">(콩알 요정 / 5호선 가족)</span></a></td>
                        <td class="w-[20%]"><a href="심세이.html" class="nw-link-08z"><img src="이미지/심세이.webp" class="nw-img-08z" onerror="this.src='이미지/효빈위키아이콘.webp'">심세이<span class="nw-subtext-08z">(가짜 우아함 / 창전선)</span></a></td>
                    </tr>
                </table>
            </details>

            <!-- 2. 환장의 단짝 듀오 및 케미 -->
            <details id="nw-duo-box" class="nw-box-08z mb-1" style="border-color:#E67E22;">
                <summary style="background-color:#E67E22; color:white;" class="outline-none">🔥 환장의 콤비 및 먹이사슬 ▼</summary>
                <div class="nw-flex-container-08z border-t border-[#E67E22]">
                    <a href="하루아.html" class="nw-link-text-08z">3월생 비글 듀오<span class="nw-badge-sub-08z">하루아 × 유리아 (도파민 폭주)</span></a>
                    <a href="미소율.html" class="nw-link-text-08z">전속 경호원과 콩알<span class="nw-badge-sub-08z">하루아 × 미소율 (쌍방 구원)</span></a>
                    <a href="임세연.html" class="nw-link-text-08z">언니 피해자 연대<span class="nw-badge-sub-08z">하루아 × 임세연 (신세 한탄)</span></a>
                    <a href="심세이.html" class="nw-link-text-08z">가짜 우아함 붕괴기<span class="nw-badge-sub-08z">심세이 vs 하루아·유리아</span></a>
                    <a href="임세연.html" class="nw-link-text-08z">혈압 상승과 츳코미<span class="nw-badge-sub-08z">임세연 vs 유리아·심세이</span></a>
                    <a href="미소율.html" class="nw-link-text-08z">극성 팬보이 모드<span class="nw-badge-sub-08z">심세이 → 미소율 (디저트 공세)</span></a>
                </div>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    // 3. 현재 페이지 타이틀 감지 및 박스 자동 열기 로직
    const pageTitle = document.title.split(" - ")[0].trim();
    
    const members = ["하루아", "유리아", "임세연", "미소율", "심세이", "08즈"];

    // 08즈 멤버 문서인 경우 멤버 박스를 기본으로 엽니다. (이미 HTML에 open 속성이 들어가 있으므로 기본적으로 열려있습니다)
    if (members.includes(pageTitle)) {
        const box = document.getElementById('nw-members-box');
        if(box) box.open = true;
    }
});