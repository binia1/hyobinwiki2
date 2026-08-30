(function() {
    const templateHTML = `
        <table class="wiki-nav-table">
            <thead>
                <tr>
                    <td colspan="2" class="wiki-nav-header">
                        <div class="header-content">
                            <span style="display: inline-flex; width: 20px; height: 14px; border: 1px solid #ccc; vertical-align: middle; background: url('대한민국_국기.webp') center/cover no-repeat; margin-right: 5px;"></span>
                            대한민국의 국가철도 및 전용철도 노선
                        </div>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-category bg-high-speed"><a href="https://namu.wiki/w/빈효고속선철도" target="_blank" style="color:white;">빈효고속선철도</a></td>
                    <td class="col-content">
                        <div class="nav-item"><a href="https://namu.wiki/w/경부고속선" target="_blank">경부고속선</a></div>
                        <div class="nav-item"><a href="https://namu.wiki/w/호남고속선" target="_blank">호남고속선</a></div>
                        <div class="nav-item"><a href="https://namu.wiki/w/수서평택고속선" target="_blank">수서평택고속선</a></div>
                        <div class="nav-item fictional"><a href="빈효고속선.html">빈효고속선</a></div>
                    </td>
                </tr>
                <tr>
                    <td class="col-category bg-semi-high"><a href="https://namu.wiki/w/대한민국의 준빈효고속선철도" target="_blank" style="color:black;">준빈효고속선철도</a></td>
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
                    <td class="col-category bg-trunk"><a href="https://namu.wiki/w/간선철도" target="_blank" style="color:white;">간선철도</a></td>
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
                    <td class="col-category bg-branch"><a href="https://namu.wiki/w/지선철도" target="_blank" style="color:#191919;">지선철도</a></td>
                    <td class="col-content">
                        <div class="nav-item"><a href="https://namu.wiki/w/경부고속선" target="_blank">경부빈효고속선지선</a></div>
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
                    <td class="col-category bg-industrial"><a href="https://namu.wiki/w/전용철도" target="_blank" style="color:white;">전용철도</a></td>
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
                    <td class="col-category bg-planned"><span style="color:#ddd">운행 예정</span></td>
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
    `;

    // 삽입할 목표 div ID (national-railway-template)
    const targetDiv = document.getElementById('national-railway-template');
    if (targetDiv) {
        targetDiv.innerHTML = templateHTML;
    } else if (document.currentScript) {
        document.currentScript.insertAdjacentHTML('afterend', templateHTML);
    }
})();