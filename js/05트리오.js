document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("05trio-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 05 트리오 전용 틀 스타일 */
        .nw-frame-05z { border: 2px solid #673AB7; background: linear-gradient(to right, #673AB7, #512DA8); border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: sans-serif; }
        .nw-title-05z { background: white; margin: -5px -10px 10px; padding: 10px; border-bottom: 2px solid #673AB7; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; font-size: 1.1rem; font-weight: 900; color: #4527A0; }
        .nw-box-05z { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box-05z { background: #1f2023; color: #ddd; }
        .nw-box-05z summary { font-weight: bold; cursor: pointer; padding: 8px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 0.95rem; }
        .nw-box-05z summary::-webkit-details-marker { display: none; }
        .nw-tbl-05z { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.85rem; word-break: keep-all; }
        
        /* 칸 내부 여백(padding) 제거 */
        .nw-tbl-05z th, .nw-tbl-05z td { border: 1px solid currentColor; padding: 0; vertical-align: top; text-align: center; }
        
        .nw-img-wrap { width: 100%; overflow: hidden; border-bottom: 1px solid #ddd; background-color: #fff; }
        
        /* 🔥 원본 비율 유지, 잘림 없음, 가로폭 100% 밀착 */
        .nw-img-05z { 
            width: 100%; 
            height: auto; /* 세로 길이는 이미지 비율에 맞춰 자연스럽게 늘어남 */
            display: block; 
            margin: 0; 
            border-radius: 0; 
            transition: transform 0.2s; 
        }
        
        .nw-link-05z:hover .nw-img-05z { transform: scale(1.05); }
        .nw-link-05z { color: inherit; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; height: 100%; }
        .nw-link-05z:hover { text-decoration: underline; color: #4527A0; }
        
        .nw-text-wrap { padding: 12px 5px; width: 100%; }
        .nw-subtext-05z { font-size: 0.75rem; color: #777; font-weight: normal; margin-top: 4px; line-height: 1.3; display: block; }
        
        /* 텍스트형 뱃지 링크 스타일 */
        .nw-flex-container-05z { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 12px; background: #fafafa; }
        [data-theme='dark'] .nw-flex-container-05z { background: #1a1a1c; }
        .nw-link-text-05z { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid #d1c4e9; border-radius: 20px; background: #ffffff; text-decoration: none; color: #1e293b; font-weight: bold; font-size: 0.85rem; transition: all 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        .nw-link-text-05z:hover { background: #ede7f6; border-color: #673ab7; transform: translateY(-1px); color: #4527a0; }
        .nw-link-text-05z .nw-badge-sub-05z { font-weight: normal; color: #64748b; font-size: 0.75rem; border-left: 1px solid #e2e8f0; padding-left: 6px; }
        [data-theme='dark'] .nw-link-text-05z { background: #2a2b2f; border-color: #4527A0; color: #e2e8f0; }
        [data-theme='dark'] .nw-link-text-05z:hover { background: #311B92; border-color: #673ab7; }
        [data-theme='dark'] .nw-link-text-05z .nw-badge-sub-05z { color: #94a3b8; border-color: #555; }
    </style>
    `;

    // 2. HTML 구조 주입
    const navHtml = `
        <div class="nw-frame-05z shadow-sm">
            <div class="nw-title-05z">
                <svg viewBox="0 0 100 100" class="h-7 w-7 mr-2 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="50,10 90,50 50,90 10,50" fill="#673AB7"/>
                    <polygon points="50,20 80,50 50,80 20,50" fill="#9575CD"/>
                    <circle cx="50" cy="50" r="10" fill="#FFF"/>
                </svg>
                지성과 광기의 05년생 동갑내기 (05 트리오)
            </div>
            
            <details id="nw-members-05z" class="nw-box-05z" style="border-color:#673AB7;" open>
                <summary style="background-color:#673AB7; color:white;" class="outline-none">💎 시스템을 지배하는 05년생 완전체 ▼</summary>
                <table class="nw-tbl-05z" style="border-color:#673AB7;">
                    <colgroup>
                        <col style="width: 33.33%;">
                        <col style="width: 33.33%;">
                        <col style="width: 33.33%;">
                    </colgroup>
                    <tr>
                        <td>
                            <a href="전노아.html" class="nw-link-05z">
                                <div class="nw-img-wrap"><img src="이미지/전노아.webp" class="nw-img-05z" onerror="this.src='이미지/효빈위키아이콘.webp'"></div>
                                <div class="nw-text-wrap">전노아<span class="nw-subtext-05z">(빈효선 / 행정학도 · 기획의 광견)</span></div>
                            </a>
                        </td>
                        <td>
                            <a href="임세하.html" class="nw-link-05z">
                                <div class="nw-img-wrap"><img src="이미지/임세하.webp" class="nw-img-05z" onerror="this.src='이미지/효빈위키아이콘.webp'"></div>
                                <div class="nw-text-wrap">임세하<span class="nw-subtext-05z">(7호선 / 기계공학도 · 공대 너드)</span></div>
                            </a>
                        </td>
                        <td>
                            <a href="미소하.html" class="nw-link-05z">
                                <div class="nw-img-wrap"><img src="이미지/미소하.webp" class="nw-img-05z" onerror="this.src='이미지/효빈위키아이콘.webp'"></div>
                                <div class="nw-text-wrap">미소하<span class="nw-subtext-05z">(5호선 / 정책분석가 · 웃는 팩폭기)</span></div>
                            </a>
                        </td>
                    </tr>
                </table>
            </details>

            <details id="nw-duo-05z" class="nw-box-05z mb-1" style="border-color:#512DA8;">
                <summary style="background-color:#512DA8; color:white;" class="outline-none">🔥 엘리트 카르텔 및 상호 관계 ▼</summary>
                <div class="nw-flex-container-05z border-t border-[#512DA8]">
                    <a href="전노아.html" class="nw-link-text-05z">영혼의 파트너<span class="nw-badge-sub-05z">전노아 × 임세하 (행정 불도저와 기계 안드로이드)</span></a>
                    <a href="임세하.html" class="nw-link-text-05z">맹목적 애정 공세<span class="nw-badge-sub-05z">임세하 → 미소하 (소하 밥은 내가 챙긴다)</span></a>
                    <a href="미소하.html" class="nw-link-text-05z">예산 기안서 콤보<span class="nw-badge-sub-05z">전노아 × 미소하 (회사 예산팀의 최고 악몽)</span></a>
                    <a href="전노아.html" class="nw-link-text-05z">문과와 이과의 융합<span class="nw-badge-sub-05z">05 트리오 (행정 + 기계 + 통계 = 무적)</span></a>
                </div>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;

    const pageTitle = document.title.split(" - ")[0].trim();
    const members = ["전노아", "임세하", "미소하", "05트리오"];

    if (members.includes(pageTitle)) {
        const box = document.getElementById('nw-members-05z');
        if(box) box.open = true;
    }
});