(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('hw-korea-rail-nav-container');
        if (!container) return;

        // 접기/펼치기 토글 함수
        window.toggleKoreaRailNav = function() {
            const body = document.getElementById('hw-korea-rail-tbody');
            const btn = document.getElementById('hw-korea-rail-btn');
            if (body.style.display === 'none') {
                body.style.display = 'table-row-group';
                btn.textContent = '[접기]';
            } else {
                body.style.display = 'none';
                btn.textContent = '[펼치기]';
            }
        };

        // 캡슐화된 스타일 및 HTML 템플릿 (원본 구조 100% 반영)
        const template = `
            <style>
                #hw-korea-rail-nav { 
                    width: 100%; max-width: 100%; margin: 10px 0; font-family: 'Noto Sans KR', sans-serif; font-size: 0.85rem;
                    border: 1px solid #ccc; background-color: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1); line-height: 1.6;
                }
                #hw-korea-rail-nav table { width: 100%; border-collapse: collapse; margin: 0; }
                #hw-korea-rail-nav td, #hw-korea-rail-nav th { border: 1px solid #ddd; vertical-align: middle; }
                #hw-korea-rail-nav a { text-decoration: none; color: #373a3c; transition: all 0.2s; }
                #hw-korea-rail-nav a:hover { text-decoration: underline; color: #0275d8; }
                
                /* 헤더 중앙 정렬 및 토글 버튼 우측 고정 (디자인 유지) */
                #hw-korea-rail-nav .wiki-nav-header {
                    position: relative; padding: 4px; text-align: center; font-weight: bold; color: black;
                    background: linear-gradient(120deg, #fff 5%, #000 5.1% 9%, #fff 9.1% 10%, #000 10.1% 14%, #fff 14.1% 15%, #000 15.1% 19%, #fff 19.1% 81%, #cd313a 81.1% 90%, #005BAC 90.1%);
                    border-bottom: 2px solid #000;
                }
                #hw-korea-rail-nav .header-content {
                    display: inline-flex; align-items: center; background-color: rgba(255, 255, 255, 0.95); padding: 4px 14px; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.2); font-size: 0.95rem;
                }
                #hw-korea-rail-nav .toggle-btn {
                    position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
                    background-color: #fff; color: #005BAC; border: 1px solid #005BAC; border-radius: 4px; padding: 2px 8px; font-size: 0.8rem; font-weight: bold; cursor: pointer;
                }
                #hw-korea-rail-nav .toggle-btn:hover { background-color: #f0f8ff; }
                
                /* 원본 본문 구조 (칸 분할 없음) */
                #hw-korea-rail-nav .col-category { width: 100px; text-align: center; font-weight: bold; padding: 5px 0; border-bottom: 1px solid #fff; }
                #hw-korea-rail-nav .col-content { padding: 5px 10px; background-color: #fff; border-bottom: 1px solid #ccc; text-align: left; }
                #hw-korea-rail-nav .nav-item { display: inline-block; width: 9rem; padding: 1px 0; vertical-align: top; }
                #hw-korea-rail-nav .nav-item.wide { width: 18rem; }
                #hw-korea-rail-nav .fictional a { font-weight: bold; color: #0044BB !important; }
                
                /* 카테고리 색상 */
                #hw-korea-rail-nav .bg-high-speed { background-color: #c81010; color: white; }
                #hw-korea-rail-nav .bg-high-speed a { color: white; }
                #hw-korea-rail-nav .bg-semi-high { background-color: #ffbb04; color: black; }
                #hw-korea-rail-nav .bg-semi-high a { color: black; }
                #hw-korea-rail-nav .bg-trunk { background-color: #1063c8; color: white; }
                #hw-korea-rail-nav .bg-trunk a { color: white; }
                #hw-korea-rail-nav .bg-branch { background-color: #51c810; color: #191919; }
                #hw-korea-rail-nav .bg-branch a { color: #191919; }
                #hw-korea-rail-nav .bg-industrial { background-color: #2d2d2d; color: white; }
                #hw-korea-rail-nav .bg-industrial a { color: white; }
                #hw-korea-rail-nav .bg-planned { background-color: #454545; color: #ddd; }
            </style>

            <div id="hw-korea-rail-nav">
                <table>
                    <thead>
                        <tr>
                            <td colspan="2" class="wiki-nav-header">
                                <div class="header-content">
                                    <img src="대한민국_국기.webp" onerror="this.style.display='none'" style="width: 20px; height: 14px; border: 1px solid #ccc; object-fit: cover; margin-right: 6px;" alt="국기">
                                    대한민국의 국가철도 및 전용철도 노선
                                </div>
                                <button id="hw-korea-rail-btn" class="toggle-btn" onclick="toggleKoreaRailNav()">[접기]</button>
                            </td>
                        </tr>
                    </thead>
                    <tbody id="hw-korea-rail-tbody">
                        <tr>
                            <td class="col-category bg-high-speed"><a href="https://namu.wiki/w/고속철도" target="_blank">고속철도</a></td>
                            <td class="col-content">
                                <div class="nav-item"><a href="https://namu.wiki/w/경부고속선" target="_blank">경부고속선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/호남고속선" target="_blank">호남고속선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/수서평택고속선" target="_blank">수서평택고속선</a></div>
                                <div class="nav-item fictional"><a href="빈효고속선.html">빈효고속선</a></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-category bg-semi-high"><a href="https://namu.wiki/w/대한민국의 준고속철도" target="_blank">준고속철도</a></td>
                            <td class="col-content">
                                <div class="nav-item"><a href="https://namu.wiki/w/경강선" target="_blank">경강선(원주~강릉)</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/서해선" target="_blank">서해선(홍성~서화성)</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/중앙선" target="_blank">중앙선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/중부내륙선" target="_blank">중부내륙선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/동해선" target="_blank">동해선(태화강~삼척)</a></div>
                                <div class="nav-item fictional"><a href="덕빈선.html">덕빈선</a></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-category bg-trunk"><a href="https://namu.wiki/w/간선철도" target="_blank">간선철도</a></td>
                            <td class="col-content">
                                <div class="nav-item"><a href="https://namu.wiki/w/경인선" target="_blank">경인선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경부선" target="_blank">경부선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경의선" target="_blank">경의선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/호남선" target="_blank">호남선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경원선" target="_blank">경원선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/충북선" target="_blank">충북선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경전선" target="_blank">경전선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/장항선" target="_blank">장항선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/전라선" target="_blank">전라선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경춘선" target="_blank">경춘선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/동해선" target="_blank">동해선(부산진~태화강)</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/영동선" target="_blank">영동선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경북선" target="_blank">경북선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/태백선" target="_blank">태백선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/안산선" target="_blank">안산선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/과천선" target="_blank">과천선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/분당선" target="_blank">분당선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/일산선" target="_blank">일산선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/신분당선" target="_blank">신분당선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/서해선" target="_blank">서해선(대곡~원시)</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/인천국제공항철도" target="_blank">인천국제공항선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경강선" target="_blank">경강선(성남~여주)</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/진접선" target="_blank">진접선</a></div>
                                <div class="nav-item wide"><a href="https://namu.wiki/w/수도권 광역급행철도 A노선" target="_blank">수도권광역급행철도에이선</a></div>
                                <div class="nav-item fictional"><a href="빈효선.html">빈효선</a></div>
                                <div class="nav-item fictional"><a href="강빈선.html">강빈선</a></div>
                                <div class="nav-item fictional"><a href="경빈선.html">경빈선</a></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-category bg-branch"><a href="https://namu.wiki/w/지선철도" target="_blank">지선철도</a></td>
                            <td class="col-content">
                                <div class="nav-item"><a href="https://namu.wiki/w/경부고속선" target="_blank">경부고속지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경강선" target="_blank">경강지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/안산연결선" target="_blank">서해지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/중앙선" target="_blank">중앙지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경부선" target="_blank">경부지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경의선" target="_blank">경의지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/호남선" target="_blank">호남지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경전선" target="_blank">경전지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/장항선" target="_blank">장항지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/전라선" target="_blank">전라지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/평내기지선" target="_blank">경춘지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/동해선" target="_blank">동해지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/영동선" target="_blank">영동지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/문경선" target="_blank">경북지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/태백선" target="_blank">태백지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/시흥기지선" target="_blank">안산지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/분당기지선" target="_blank">분당지선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/인천국제공항철도" target="_blank">인천국제공항지선</a></div>
                                <div class="nav-item fictional"><a href="상빈선.html">상빈선</a></div>
                                <div class="nav-item fictional"><a href="매덕선.html">매덕선</a></div>
                                <div class="nav-item fictional"><a href="마낙선.html">마낙선</a></div>
                                <div class="nav-item fictional"><a href="효빈항선.html">효빈항선</a></div>
                                <div class="nav-item fictional"><a href="서진항선.html">서진항선</a></div>
                                <div class="nav-item fictional"><a href="청선인자선.html">청선인자선</a></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-category bg-industrial"><a href="https://namu.wiki/w/전용철도" target="_blank">전용철도</a></td>
                            <td class="col-content">
                                <div class="nav-item"><a href="https://namu.wiki/w/광양제철소선" target="_blank">광양제철소선</a></div>
                                <div class="nav-item wide"><a href="https://namu.wiki/w/현대제철" target="_blank">당진제철소 내부 철도</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/석탄부두선" target="_blank">석탄부두선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/제1전투비행단선" target="_blank">공군 제1전투비행단선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/포항제철소선" target="_blank">포항제철소선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/제11전투비행단선" target="_blank">공군 제11전투비행단선</a></div>
                                <div class="nav-item wide fictional"><a href="효빈공단인입선.html">효빈공단인입선</a></div>
                                <div class="nav-item fictional"><a href="수포현대선.html">수포현대선</a></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-category bg-planned"><span style="color: inherit;">운행 예정</span></td>
                            <td class="col-content">
                                <div class="nav-item"><a href="https://namu.wiki/w/부전-마산 복선전철" target="_blank">경전선(부전~마산)</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/신안산선" target="_blank">신안산선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/춘천속초선" target="_blank">춘천속초선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/경강선" target="_blank">경강선(시흥~성남)</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/인덕원동탄선" target="_blank">동탄인덕원선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/수도권 광역급행철도 B노선" target="_blank">수도권 광역급행철도 B선</a></div>
                                <div class="nav-item"><a href="https://namu.wiki/w/수도권 광역급행철도 C노선" target="_blank">수도권 광역급행철도 C선</a></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        container.innerHTML = template;
    });
})();