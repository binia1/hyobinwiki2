document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("family-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입 (CSS 변수 사용 금지, 하드코딩 적용)
    const navStyle = `
    <style>
        /* 김성민 의원 일가 전용 틀 스타일 */
        .nw-frame-family { border: 2px solid #1E3A8A; background: #ffffff; border-radius: 8px; padding: 12px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nw-title-family { background: #F8FAFC; margin: -5px -10px 15px; padding: 12px; border-bottom: 2px solid #1E3A8A; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; font-weight: 900; font-size: 1.25rem; color: #1E3A8A; }
        .nw-box-family { border: 2px solid #1E3A8A; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        .nw-box-family summary { background-color: #1E3A8A; color: white; font-weight: bold; cursor: pointer; padding: 10px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 1rem; outline: none; }
        .nw-box-family summary::-webkit-details-marker { display: none; }
        
        .nw-tbl-family { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.9rem; word-break: keep-all; }
        .nw-tbl-family th, .nw-tbl-family td { border: 1px solid #1E3A8A; padding: 10px 6px; vertical-align: middle; text-align: center; }
        .nw-tbl-family th { background-color: #DBEAFE; color: #1E3A8A; font-weight: bold; }
        
        /* 인물 사진 및 카드 스타일 */
        .nw-img-family { width: 90px; height: 90px; object-fit: cover; border-radius: 8px; margin: 0 auto 6px; display: block; border: 1px solid #CBD5E1; transition: transform 0.2s; }
        .nw-link-family:hover .nw-img-family { transform: scale(1.05); border-color: #1E3A8A; }
        .nw-link-family { color: #333; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link-family:hover { text-decoration: underline; color: #1E3A8A; }
        .nw-subtext-family { font-size: 0.75rem; color: #64748B; font-weight: normal; margin-top: 4px; line-height: 1.2; }
        
        /* 플렉스 그룹 배치 */
        .flex-group-family { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; padding: 10px 0; }
        .flex-group-family .nw-link-family { flex: 0 1 20%; min-width: 100px; }
    </style>
    `;

    // 2. HTML 구조 주입 (김성민 의원 일가)
    const navHtml = `
        <div class="nw-frame-family">
            <div class="nw-title-family">
                🏛️ 효빈시 최고의 덕후 명문가 - 김성민 의원 일가
            </div>
            
            <details id="nw-family-box" class="nw-box-family" open>
                <summary>👨‍👩‍👧‍👦 가족 구성원 ▼</summary>
                <table class="nw-tbl-family">
                    <colgroup>
                        <col style="width: 15%;">
                        <col style="width: 85%;">
                    </colgroup>
                    <tr>
                        <th>1세대<br><span style="font-size: 0.75em; font-weight: normal;">(부모)</span></th>
                        <td>
                            <div class="flex-group-family">
                                <a href="김성민.html" class="nw-link-family">
                                    <img src="이미지/김성민.webp" class="nw-img-family" onerror="this.style.display='none'">
                                    김성민
                                    <span class="nw-subtext-family">(아버지 / 선거의 제왕)</span>
                                </a>
                                <a href="이한선.html" class="nw-link-family">
                                    <img src="이미지/이한선.webp" class="nw-img-family" onerror="this.style.display='none'">
                                    이한선
                                    <span class="nw-subtext-family">(어머니 / 철혈의 사모님)</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>2세대<br><span style="font-size: 0.75em; font-weight: normal;">(자녀)</span></th>
                        <td>
                            <div class="flex-group-family">
                                <a href="김시율.html" class="nw-link-family">
                                    <img src="이미지/김시율.webp" class="nw-img-family" onerror="this.style.display='none'">
                                    김시율
                                    <span class="nw-subtext-family">(장남 / 건프라 마스터)</span>
                                </a>
                                <a href="김시안.html" class="nw-link-family">
                                    <img src="이미지/김시안.webp" class="nw-img-family" onerror="this.style.display='none'">
                                    김시안
                                    <span class="nw-subtext-family">(장녀 / 팩폭 제조기)</span>
                                </a>
                                <a href="김시연.html" class="nw-link-family">
                                    <img src="이미지/김시연.webp" class="nw-img-family" onerror="this.style.display='none'">
                                    김시연
                                    <span class="nw-subtext-family">(차녀 / 합법 얀데레)</span>
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    container.innerHTML = navStyle + navHtml;
});