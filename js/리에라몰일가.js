/* 파일 경로: js/리에라몰일가.js */

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("lieramall-family-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입 (CSS 변수 사용 금지, 하드코딩 적용)
    const navStyle = `
    <style>
        /* 리에라몰 일가 전용 틀 스타일 */
        .nw-frame-liera { border: 2px solid #5E35B1; background: #ffffff; border-radius: 8px; padding: 12px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 10px rgba(94, 53, 177, 0.1); }
        .nw-title-liera { background: #EDE7F6; margin: -5px -10px 15px; padding: 12px; border-bottom: 2px solid #5E35B1; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; font-weight: 900; font-size: 1.25rem; color: #311B92; letter-spacing: 0.5px; }
        .nw-box-liera { border: 2px solid #5E35B1; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        .nw-box-liera summary { background-color: #5E35B1; color: white; font-weight: bold; cursor: pointer; padding: 10px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 1rem; outline: none; transition: background 0.2s; }
        .nw-box-liera summary:hover { background-color: #4527A0; }
        .nw-box-liera summary::-webkit-details-marker { display: none; }
        
        .nw-tbl-liera { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.9rem; word-break: keep-all; }
        .nw-tbl-liera th, .nw-tbl-liera td { border: 1px solid #5E35B1; padding: 12px 6px; vertical-align: middle; text-align: center; }
        .nw-tbl-liera th { background-color: #D1C4E9; color: #311B92; font-weight: bold; line-height: 1.4; }
        
        /* 인물 사진 및 카드 스타일 */
        .nw-img-liera { width: 85px; height: 85px; object-fit: cover; border-radius: 8px; margin: 0 auto 6px; display: block; border: 1px solid #B39DDB; transition: transform 0.2s, box-shadow 0.2s; background-color: #f8f9fa; }
        .nw-link-liera:hover .nw-img-liera { transform: scale(1.08); border-color: #5E35B1; box-shadow: 0 4px 8px rgba(94, 53, 177, 0.3); }
        .nw-link-liera { color: #333; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link-liera:hover { text-decoration: underline; color: #5E35B1; }
        .nw-subtext-liera { font-size: 0.75rem; color: #666; font-weight: normal; margin-top: 4px; line-height: 1.2; }
        
        /* 플렉스 그룹 배치 */
        .flex-group-liera { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group-liera .nw-link-liera { flex: 0 1 18%; min-width: 95px; }

        /* 가문의 수치 (빌런) 전용 스타일 */
        .nw-villain-row th { background-color: #FFEBEE !important; border-color: #C62828 !important; color: #B71C1C !important; }
        .nw-villain-row td { border-color: #C62828 !important; background-color: #FAFAFA; }
        .nw-link-villain .nw-img-liera { border-color: #EF9A9A; filter: grayscale(40%); }
        .nw-link-villain:hover .nw-img-liera { border-color: #C62828; filter: grayscale(0%); box-shadow: 0 4px 8px rgba(198, 40, 40, 0.3); }
        .nw-link-villain { color: #555; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; }
        .nw-link-villain:hover { text-decoration: underline; color: #C62828; }
    </style>
    `;

    // 2. HTML 구조 주입
    const navHtml = `
        <div class="nw-frame-liera">
            <div class="nw-title-liera">
                🏬 효빈시 최고의 서브컬처 성지 - 리에라몰 일가 (안천 유통 가문)
            </div>
            
            <details id="nw-liera-family-box" class="nw-box-liera" open>
                <summary>👨‍👩‍👧‍👦 가계도 및 구성원 ▼</summary>
                <table class="nw-tbl-liera">
                    <colgroup>
                        <col style="width: 14%;">
                        <col style="width: 86%;">
                    </colgroup>
                    
                    <!-- 창업주 세대 -->
                    <tr>
                        <th>창업주<br><span style="font-size: 0.75em; font-weight: normal;">(1대)</span></th>
                        <td>
                            <div class="flex-group-liera">
                                <a href="임승현.html" class="nw-link-liera">
                                    <img src="이미지/임승현.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임승현
                                    <span class="nw-subtext-liera">(안천 유통 창업주)</span>
                                </a>
                                <a href="오순녀.html" class="nw-link-liera">
                                    <img src="이미지/오순녀.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    오순녀
                                    <span class="nw-subtext-liera">(안방마님)</span>
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- 1세대 -->
                    <tr>
                        <th>1세대<br><span style="font-size: 0.75em; font-weight: normal;">(부모 세대)</span></th>
                        <td>
                            <div class="flex-group-liera">
                                <a href="임석현.html" class="nw-link-liera">
                                    <img src="이미지/임석현.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임석현
                                    <span class="nw-subtext-liera">(장남 / 독박 육아)</span>
                                </a>
                                <a href="임대식.html" class="nw-link-liera">
                                    <img src="이미지/임대식.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임대식
                                    <span class="nw-subtext-liera">(차남 / 민주유공자)</span>
                                </a>
                                <a href="임세혁.html" class="nw-link-liera">
                                    <img src="이미지/임세혁.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임세혁
                                    <span class="nw-subtext-liera">(4남 / 현 점장)</span>
                                </a>
                                <a href="연월엽.html" class="nw-link-liera">
                                    <img src="이미지/연월엽.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    연월엽
                                    <span class="nw-subtext-liera">(세혁 아내 / 렌 오시)</span>
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- 2세대 (세혁의 자녀들) -->
                    <tr>
                        <th>2세대<br><span style="font-size: 0.75em; font-weight: normal;">(은혜당 남매)</span></th>
                        <td>
                            <div class="flex-group-liera">
                                <a href="임은혜.html" class="nw-link-liera">
                                    <img src="이미지/임은혜.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임은혜
                                    <span class="nw-subtext-liera">(장녀 / 메구미 오시)</span>
                                </a>
                                <a href="임승민.html" class="nw-link-liera">
                                    <img src="이미지/임승민.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임승민
                                    <span class="nw-subtext-liera">(장남 / 토마리 오시)</span>
                                </a>
                                <a href="임은연.html" class="nw-link-liera">
                                    <img src="이미지/임은연.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임은연
                                    <span class="nw-subtext-liera">(차녀 / 꼬마 렌)</span>
                                </a>
                                <a href="임시연.html" class="nw-link-liera">
                                    <img src="이미지/임시연.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임시연
                                    <span class="nw-subtext-liera">(삼녀 / 기적의 막둥이)</span>
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- 3세대 (석현의 손주들) -->
                    <tr>
                        <th>3세대<br><span style="font-size: 0.75em; font-weight: normal;">(수호네 남매)</span></th>
                        <td>
                            <div class="flex-group-liera">
                                <a href="임수호.html" class="nw-link-liera">
                                    <img src="이미지/임수호.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임수호
                                    <span class="nw-subtext-liera">(장손)</span>
                                </a>
                                <a href="임수연.html" class="nw-link-liera">
                                    <img src="이미지/임수연.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임수연
                                    <span class="nw-subtext-liera">(손녀)</span>
                                </a>
                                <a href="임서우.html" class="nw-link-liera">
                                    <img src="이미지/임서우.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임서우
                                    <span class="nw-subtext-liera">(손자)</span>
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- 가문의 수치 (빌런) -->
                    <tr class="nw-villain-row">
                        <th>🚫<br>가문의<br>오점<br><span style="font-size: 0.75em; font-weight: normal;">(의절)</span></th>
                        <td style="border: 1px solid #C62828;">
                            <div class="flex-group-liera">
                                <a href="임대석.html" class="nw-link-villain">
                                    <img src="이미지/임대석.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임대석
                                    <span class="nw-subtext-liera" style="color:#C62828;">(3남 / 전과 10범)</span>
                                </a>
                                <a href="임진호.html" class="nw-link-villain">
                                    <img src="이미지/임진호.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    임진호
                                    <span class="nw-subtext-liera" style="color:#C62828;">(석현의 아들 / 패륜아)</span>
                                </a>
                                <a href="명예원.html" class="nw-link-villain">
                                    <img src="이미지/명예원.webp" class="nw-img-liera" onerror="this.style.display='none'">
                                    명예원
                                    <span class="nw-subtext-liera" style="color:#C62828;">(전 며느리 / 막장)</span>
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