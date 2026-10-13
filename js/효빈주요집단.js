/* 파일 경로: js/효빈주요집단.js */

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hyobin-factions-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입 (CSS 변수 사용 금지, 하드코딩 적용)
    const navStyle = `
    <style>
        /* 효빈 주요 집단 틀 스타일 */
        .nw-frame-faction { border: 2px solid #263238; background: #ffffff; border-radius: 8px; padding: 12px; margin: 0 auto 20px; text-align: center; box-shadow: 0 4px 12px rgba(38, 50, 56, 0.15); }
        .nw-title-faction { background: #ECEFF1; margin: -5px -10px 15px; padding: 12px; border-bottom: 2px solid #263238; display: flex; justify-content: center; align-items: center; border-top-left-radius: 6px; border-top-right-radius: 6px; font-weight: 900; font-size: 1.2rem; color: #263238; letter-spacing: 0.5px; }
        .nw-box-faction { border: 2px solid #263238; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        .nw-box-faction summary { background-color: #263238; color: white; font-weight: bold; cursor: pointer; padding: 10px; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; font-size: 1rem; outline: none; transition: background 0.2s; }
        .nw-box-faction summary:hover { background-color: #37474F; }
        .nw-box-faction summary::-webkit-details-marker { display: none; }
        
        .nw-tbl-faction { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.9rem; word-break: keep-all; }
        .nw-tbl-faction th, .nw-tbl-faction td { border: 1px solid #263238; padding: 12px 6px; vertical-align: middle; text-align: center; }
        .nw-tbl-faction th { background-color: #CFD8DC; color: #263238; font-weight: bold; line-height: 1.4; }
        
        /* 세력 대표 이미지 및 카드 스타일 */
        .nw-img-faction { width: 90px; height: 90px; object-fit: cover; border-radius: 12px; margin: 0 auto 6px; display: block; border: 2px solid #90A4AE; transition: transform 0.2s, box-shadow 0.2s; background-color: #f8f9fa; }
        .nw-link-faction:hover .nw-img-faction { transform: scale(1.08); border-color: #263238; box-shadow: 0 4px 8px rgba(38, 50, 56, 0.3); }
        .nw-link-faction { color: #333; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; font-size: 0.95rem; }
        .nw-link-faction:hover { text-decoration: underline; color: #263238; }
        .nw-subtext-faction { font-size: 0.75rem; color: #666; font-weight: normal; margin-top: 4px; line-height: 1.2; }
        
        /* 플렉스 그룹 배치 */
        .flex-group-faction { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; padding: 5px 0; }
        .flex-group-faction .nw-link-faction { flex: 0 1 20%; min-width: 105px; }

        /* 쓰레기 범죄 집단 전용 경고 스타일 */
        .nw-villain-row th { background-color: #FFEBEE !important; border-color: #B71C1C !important; color: #B71C1C !important; }
        .nw-villain-row td { border-color: #B71C1C !important; background-color: #FAFAFA; }
        .nw-link-villain .nw-img-faction { border-color: #EF9A9A; filter: grayscale(30%) sepia(20%) hue-rotate(-50deg); border-radius: 4px; }
        .nw-link-villain:hover .nw-img-faction { border-color: #B71C1C; filter: grayscale(0%); box-shadow: 0 4px 8px rgba(183, 28, 28, 0.4); }
        .nw-link-villain { color: #555; text-decoration: none; font-weight: bold; display: flex; flex-direction: column; align-items: center; font-size: 0.95rem; }
        .nw-link-villain:hover { text-decoration: underline; color: #B71C1C; }
    </style>
    `;

    // 2. HTML 구조 주입
    const navHtml = `
        <div class="nw-frame-faction">
            <div class="nw-title-faction">
                🌐 효빈광역시 주요 세력 및 집단 (카르텔 & 자경단)
            </div>
            
            <details id="nw-faction-box" class="nw-box-faction" open>
                <summary>⚔️ 세계관 주요 조직망 ▼</summary>
                <table class="nw-tbl-faction">
                    <colgroup>
                        <col style="width: 16%;">
                        <col style="width: 84%;">
                    </colgroup>
                    
                    <!-- 4대 메이저 서브컬처 카르텔 -->
                    <tr>
                        <th>🌟 4대 메이저<br>카르텔<br><span style="font-size: 0.75em; font-weight: normal;">(행정·자본·무력)</span></th>
                        <td>
                            <div class="flex-group-faction">
                                <a href="효빈 뮤즈 연합.html" class="nw-link-faction">
                                    <img src="이미지/노정미.webp" class="nw-img-faction" onerror="this.style.display='none'">
                                    효빈 뮤즈 연합
                                    <span class="nw-subtext-faction">(행정·정치 장악 / 96·98즈)</span>
                                </a>
                                <a href="Aqours 오시 어벤져스.html" class="nw-link-faction">
                                    <img src="이미지/고해영.webp" class="nw-img-faction" onerror="this.style.display='none'">
                                    Aqours 어벤져스
                                    <span class="nw-subtext-faction">(물리·법적 자경단 / 당가동)</span>
                                </a>
                                <a href="무지개 동호회.html" class="nw-link-faction">
                                    <img src="이미지/김시연.webp" class="nw-img-faction" onerror="this.style.display='none'">
                                    무지개 동호회
                                    <span class="nw-subtext-faction">(캠퍼스 지배 / 사이버·무력)</span>
                                </a>
                                <a href="리에하스 연합.html" class="nw-link-faction">
                                    <img src="이미지/임은혜.webp" class="nw-img-faction" onerror="this.style.display='none'">
                                    리에하스 연합
                                    <span class="nw-subtext-faction">(자본주의 스폰서 / 방송 크루)</span>
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- 지역 및 특수 동맹 -->
                    <tr>
                        <th>🏫 지역·특수 연합<br><span style="font-size: 0.75em; font-weight: normal;">(끈끈한 유대)</span></th>
                        <td>
                            <div class="flex-group-faction">
                                <a href="팔망성고 3인방.html" class="nw-link-faction">
                                    <img src="이미지/최후영.webp" class="nw-img-faction" onerror="this.style.display='none'">
                                    팔망성고 3인방
                                    <span class="nw-subtext-faction">(이키즈라이브 현실 현신)</span>
                                </a>
                                <a href="엘린지역아동센터.html" class="nw-link-faction">
                                    <img src="이미지/박효빈.webp" class="nw-img-faction" onerror="this.style.display='none'">
                                    엘린 지아센 연합
                                    <span class="nw-subtext-faction">(상처받은 영혼들의 안식처)</span>
                                </a>
                                <a href="창건고 1, 2기생.html" class="nw-link-faction">
                                    <img src="이미지/당가영.webp" class="nw-img-faction" onerror="this.style.display='none'">
                                    창건고 1, 2기생
                                    <span class="nw-subtext-faction">(전설의 어머니 세대 유니버스)</span>
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- 쓰레기 범죄 및 혐오 세력 (빌런) -->
                    <tr class="nw-villain-row">
                        <th>🚫 효빈시의 오점<br><span style="font-size: 0.75em; font-weight: normal;">(인간 폐기물/빌런)</span></th>
                        <td>
                            <div class="flex-group-faction">
                                <a href="동구대 쓰레기 5인방.html" class="nw-link-villain">
                                    <img src="이미지/김재욱.webp" class="nw-img-faction" onerror="this.style.display='none'">
                                    동구대 쓰레기 5인방
                                    <span class="nw-subtext-faction" style="color:#B71C1C;">(영구퇴학·구속 / 폐기물 카르텔)</span>
                                </a>
                                <a href="윤재훈.html" class="nw-link-villain">
                                    <img src="이미지/윤재훈.webp" class="nw-img-faction" onerror="this.style.display='none'">
                                    윤재훈 일당
                                    <span class="nw-subtext-faction" style="color:#B71C1C;">(극악무도 혐오 빌런 / 참교육)</span>
                                </a>
                                <a href="족포초등학교.html" class="nw-link-villain">
                                    <img src="이미지/족포초등학교.webp" class="nw-img-faction" onerror="this.style.display='none'">
                                    족포초 일진 카르텔
                                    <span class="nw-subtext-faction" style="color:#B71C1C;">(만악의 근원 / 현재 폐교)</span>
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