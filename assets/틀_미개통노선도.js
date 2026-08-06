(function() {
    // 1. 기존의 쓰레기 같은 스타일과 태그들을 싹 다 청소
    const oldStyles = document.querySelectorAll('style[id^="style-template-unopened-map"]');
    oldStyles.forEach(el => el.remove());
    const existingMaps = document.querySelectorAll('.wiki-table-container, .wiki-hb-wrap-v4, #hyobin-unopened-map');
    existingMaps.forEach(el => el.remove());

    // 2. image_3.png 완벽 오마주 CSS 주입 (붕 뜨는 현상 100% 차단)
    const style = document.createElement('style');
    style.id = 'style-template-unopened-map-final';
    style.textContent = `
        .wiki-hb-wrap-v4 {
            width: 100% !important;
            max-width: 850px !important;
            margin: 20px auto !important;
            border: 1px solid #ccc !important;
            background: #fff;
            box-sizing: border-box !important;
            font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
            clear: both;
        }
        
        .wiki-hb-table-v4 {
            width: 100% !important;
            border-collapse: collapse !important;
            border: none !important;
            margin: 0 !important;
            table-layout: fixed !important; 
        }
        .wiki-hb-table-v4 th, .wiki-hb-table-v4 td {
            border: 1px solid #ccc !important;
            text-align: center !important;
            vertical-align: middle !important;
            color: #333;
            font-size: 14px;
            word-break: keep-all;
        }
        
        /* 최상단 타이틀 */
        .wiki-hb-header-v4 {
            padding: 12px !important;
            font-size: 15px !important;
            font-weight: 900 !important;
            background-color: #fff !important;
            color: #000 !important;
            border-bottom: 1px solid #ccc !important;
        }
        
        /* 접기/펼치기 버튼 설정 */
        .wiki-hb-details-v4 summary {
            cursor: pointer;
            font-weight: bold;
            list-style: none;
            outline: none;
            padding: 8px;
            background-color: #fff !important;
            color: #000 !important;
            display: block;
            text-align: center;
            border-bottom: 1px solid #ccc !important;
            font-size: 13px;
        }
        .wiki-hb-details-v4 summary::-webkit-details-marker { display: none; }
        
        /* 내부 테이블 */
        .wiki-hb-inner-table-v4 {
            width: 100% !important;
            border-collapse: collapse !important;
            border: none !important;
            table-layout: fixed !important;
            margin: 0 !important;
        }
        .wiki-hb-inner-table-v4 td {
            border-top: none !important;
            border-bottom: 1px solid #ccc !important;
            border-right: 1px solid #ccc !important;
            text-align: center !important;
            vertical-align: middle !important;
            background-color: #fff !important;
            padding: 15px 5px !important;
        }
        .wiki-hb-inner-table-v4 td:last-child {
            border-right: none !important;
        }
        
        /* 뱃지 영역 (테두리 없음 처리) */
        .badge-row-v4 td {
            padding: 10px !important;
            border-top: none !important;
        }

        /* 뱃지 디자인 */
        .hb-badge-v4 {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            color: #fff !important;
            font-size: 12px;
            font-weight: 900;
            margin-right: 4px;
        }
        
        /* 텍스트 링크 (image_3.png 파란색) */
        .hb-link-v4 {
            color: #0275d8 !important;
            text-decoration: none !important;
            font-weight: bold !important;
            font-size: 14px;
            display: inline-block;
            margin-bottom: 3px;
        }
        .hb-link-v4:hover { text-decoration: underline !important; }
        
        .hb-sublink-v4 {
            color: #0275d8 !important;
            text-decoration: none !important;
            font-size: 13px;
        }
        .hb-sublink-v4:hover { text-decoration: underline !important; }

        /* 하단 텍스트 */
        .hb-footer-v4 {
            font-size: 12px !important;
            color: #555 !important;
            background-color: #fff !important;
            padding: 10px !important;
            text-align: center !important;
            line-height: 1.5;
        }
    `;
    document.head.appendChild(style);

    // 3. image_3.png 완벽 오마주 HTML (빈 줄 없이 border-top 두꺼운 선으로 색상 띠 구현)
    const templateHTML = `
        <div class="wiki-hb-wrap-v4" id="hyobin-unopened-map">
            <table class="wiki-hb-table-v4">
                <tbody>
                    <tr>
                        <th class="wiki-hb-header-v4">효빈권 전철 미개통 노선</th>
                    </tr>
                    <tr>
                        <td style="padding: 0 !important; border: none !important;">
                            <details class="wiki-hb-details-v4" open>
                                <summary>[ 펼치기 · 접기 ]</summary>
                                
                                <table class="wiki-hb-inner-table-v4">
                                    <tbody>
                                        <!-- 건설 중 -->
                                        <tr class="badge-row-v4">
                                            <td colspan="4">
                                                <span class="hb-badge-v4" style="background-color: #4F8320;">건설 중</span>
                                                <span style="font-size: 12px; font-weight: bold;">실착공 기준</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 5px solid #33AAFF !important;">
                                                <a href="창전선.html" class="hb-link-v4">창전선</a><sup style="color:#0275d8;">('27)</sup><br>
                                                <a href="창전선.html" class="hb-sublink-v4">1단계(팔조-하성천)</a>
                                            </td>
                                            <td style="border-top: 5px solid #0077DD !important;">
                                                <a href="운양역.html" class="hb-link-v4">1호선</a><sup style="color:#0275d8;">('28)</sup><br>
                                                <a href="운양역.html" class="hb-sublink-v4">운양역 신설</a>
                                            </td>
                                            <td style="border-top: 5px solid #EE0022 !important;">
                                                <a href="5호선.html" class="hb-link-v4">5호선</a><sup style="color:#0275d8;">('32)</sup><br>
                                                <a href="5호선.html" class="hb-sublink-v4">하미연장선</a>
                                            </td>
                                            <td style="border-top: 5px solid #e0e0e0 !important; color: #999;">-</td>
                                        </tr>

                                        <!-- 착공 예정 / 설계 중 -->
                                        <tr class="badge-row-v4">
                                            <td colspan="2" style="border-right: 1px solid #ccc !important;">
                                                <span class="hb-badge-v4" style="background-color: #FFC107; color: #000 !important;">착공 예정</span><sup style="font-weight:bold;">1·2</sup>
                                            </td>
                                            <td colspan="2">
                                                <span class="hb-badge-v4" style="background-color: #FF8000;">설계 중</span><sup style="font-weight:bold;">3·4·5</sup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 5px solid #EE0022 !important;">
                                                <a href="덕현중앙역.html" class="hb-link-v4">5호선</a><sup style="color:#0275d8;">('29)</sup><br>
                                                <a href="덕현중앙역.html" class="hb-sublink-v4">덕현중앙역</a>
                                            </td>
                                            <td style="border-top: 5px solid #6677CC !important;">
                                                <a href="덕현중앙역.html" class="hb-link-v4">빈효선</a><sup style="color:#0275d8;">('29)</sup><br>
                                                <a href="덕현중앙역.html" class="hb-sublink-v4">덕현중앙역</a>
                                            </td>
                                            <td style="border-top: 5px solid #D6D5CA !important;">
                                                <a href="청엽선.html" class="hb-link-v4">청엽선</a><sup style="color:#0275d8;">('34)</sup><br>
                                                <a href="청엽선.html" class="hb-sublink-v4">엽월대-청엽국제학교</a>
                                            </td>
                                            <td style="border-top: 5px solid #6677CC !important;">
                                                <a href="치원지선.html" class="hb-link-v4">빈효선</a><sup style="color:#0275d8;">('31)</sup><br>
                                                <a href="치원지선.html" class="hb-sublink-v4">치원지선</a>
                                            </td>
                                        </tr>

                                        <!-- 계획 중 (HDTX, 강빈선 등등) -->
                                        <tr class="badge-row-v4">
                                            <td colspan="4" style="background-color: #f9f9f9 !important;">
                                                <span class="hb-badge-v4" style="background-color: #9E9E9E;">계획 중</span><sup style="font-weight:bold;">6·7</sup>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 5px solid #FB637E !important;">
                                                <a href="HDTX-A.html" class="hb-link-v4">HDTX-A</a><sup style="color:#0275d8;">('36)</sup><br>
                                                <a href="HDTX-A.html" class="hb-sublink-v4">고송교차로-덕주</a>
                                            </td>
                                            <td style="border-top: 5px solid #9d8de2 !important;">
                                                <a href="HDTX-B.html" class="hb-link-v4">HDTX-B</a><br>
                                                <a href="HDTX-B.html" class="hb-sublink-v4">창전중앙-군천</a>
                                            </td>
                                            <td style="border-top: 5px solid #0054A6 !important;">
                                                <a href="강빈선.html" class="hb-link-v4">강빈선</a><br>
                                                <a href="강빈선.html" class="hb-sublink-v4">평천대-강주</a>
                                            </td>
                                            <td style="border-top: 5px solid #B2FFDD !important;">
                                                <a href="안천선.html" class="hb-link-v4">안천선</a><br>
                                                <a href="안천선.html" class="hb-sublink-v4">당가중앙-앵내중앙</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 5px solid #808080 !important;">
                                                <a href="9호선.html" class="hb-link-v4">9호선</a><br>
                                                <a href="9호선.html" class="hb-sublink-v4">북고송-흑택</a>
                                            </td>
                                            <td style="border-top: 5px solid #0077DD !important;">
                                                <a href="1호선.html" class="hb-link-v4">1호선</a><br>
                                                <a href="1호선.html" class="hb-sublink-v4">장선-궁하 연장</a>
                                            </td>
                                            <td style="border-top: 5px solid #9856FF !important;">
                                                <a href="8호선.html" class="hb-link-v4">8호선</a><br>
                                                <a href="8호선.html" class="hb-sublink-v4">연장 방향 미정</a>
                                            </td>
                                            <td style="border-top: 5px solid #FF8899 !important;">
                                                <a href="7호선.html" class="hb-link-v4">7호선</a><sup style="color:#0275d8;">('33)</sup><br>
                                                <a href="7호선.html" class="hb-sublink-v4">사능선(사능삼거리-해서)</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="border-top: 5px solid #FF5522 !important;">
                                                <a href="성저역.html" class="hb-link-v4">4호선</a><br>
                                                <a href="성저역.html" class="hb-sublink-v4">성저역 신설</a>
                                            </td>
                                            <td style="border-top: 5px solid #FF5522 !important;">
                                                <a href="4호선.html" class="hb-link-v4">4호선</a><br>
                                                <a href="4호선.html" class="hb-sublink-v4">약산연장(고해-약산)</a>
                                            </td>
                                            <td style="border-top: 5px solid #e0e0e0 !important; color: #999;">-</td>
                                            <td style="border-top: 5px solid #e0e0e0 !important; color: #999;">-</td>
                                        </tr>
                                        
                                        <!-- 하단 링크 및 각주 -->
                                        <tr>
                                            <td colspan="4" class="hb-footer-v4" style="border-top: 1px solid #ccc !important;">
                                                개통된 효빈권 전철 노선은 <a href="효빈권_전철.html" style="color:#0275d8; text-decoration:none; font-weight:bold;">틀:효빈권 전철 노선</a> 참조
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="4" class="hb-footer-v4" style="text-align: left !important; padding: 10px 15px !important; border-top: 1px solid #eee !important;">
                                                <sup>1</sup>: 사업계획 승인 · <sup>2</sup>: 실시계획 승인 / <sup>3</sup>: 기본계획 승인 · <sup>4</sup>: 실시협약 체결 · <sup>5</sup>: 중앙투자심사 통과 / <sup>6</sup>: 예비타당성조사 통과 · <sup>7</sup>: 민자적격성조사 통과<br>
                                                ※ 상기 노선별 개통 시기 및 노선은 효빈광역시 및 국가 계획에 따라 변동될 수 있습니다.<br>
                                                ※ 강빈선 등 일부 노선은 상위 철도망 계획(HDTX) 추진 현황에 따라 사업 계획이 변경될 수 있습니다.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </details>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    // 4. 스크립트 실행 위치에 템플릿 삽입
    if (document.currentScript) {
        document.currentScript.insertAdjacentHTML('afterend', templateHTML);
    } else {
        const renderZone = document.getElementById('template-render-zone') || document.querySelector('.wiki-container');
        if (renderZone) {
            renderZone.insertAdjacentHTML('beforeend', templateHTML);
        } else {
            document.body.insertAdjacentHTML('beforeend', templateHTML);
        }
    }
})();