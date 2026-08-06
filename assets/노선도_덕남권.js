(function() {
    // 1. 기존의 쓰레기 같은 스타일과 태그들을 싹 다 청소
    const oldStyles = document.querySelectorAll('style[id^="style-template-deoknam-transit"]');
    oldStyles.forEach(el => el.remove());
    const existingMaps = document.querySelectorAll('.wiki-dn-container, .wiki-dn-wrap-v3, #deoknam-unopened-map');
    existingMaps.forEach(el => el.remove());

    // 2. 붕 뜨는 현상을 100% 차단하는 강력한 CSS 주입
    const style = document.createElement('style');
    style.id = 'style-template-deoknam-transit-final';
    style.textContent = `
        /* 외부 컨테이너: 좌우 너비 100% 강제, 두꺼운 외곽선으로 붕 뜨는 현상 완전 억제 */
        .wiki-dn-wrap-v3 {
            width: 100% !important;
            max-width: 100% !important;
            margin: 30px 0 !important;
            border: 2px solid #ccc !important;
            border-radius: 4px;
            background: #fff;
            box-sizing: border-box !important;
            clear: both;
        }
        
        /* 메인 테이블: 여백 없이 꽉 채우기 */
        .wiki-dn-table-v3 {
            width: 100% !important;
            border-collapse: collapse !important;
            border: none !important;
            margin: 0 !important;
            table-layout: fixed !important; 
        }
        .wiki-dn-table-v3 th, .wiki-dn-table-v3 td {
            border: 1px solid #ccc !important;
            text-align: center !important;
            vertical-align: middle !important;
            color: #333;
            font-size: 14px;
            word-break: keep-all;
        }
        
        /* 접기/펼치기 버튼 설정 */
        .wiki-dn-details-v3 summary {
            cursor: pointer;
            font-weight: bold;
            list-style: none;
            outline: none;
            padding: 12px;
            background-color: #fff !important;
            color: #000 !important;
            display: block;
            text-align: center;
            border-bottom: 1px solid #ccc !important;
        }
        .wiki-dn-details-v3 summary::-webkit-details-marker { display: none; }
        .wiki-dn-details-v3 summary:hover { background-color: #f9f9f9 !important; }
        
        /* 내부 미개통 테이블 */
        .wiki-dn-inner-table-v3 {
            width: 100% !important;
            border-collapse: collapse !important;
            border: none !important;
            table-layout: fixed !important;
            margin: 0 !important;
        }
        .wiki-dn-inner-table-v3 td {
            border-top: none !important;
            border-bottom: 1px solid #ccc !important;
            text-align: center !important;
            vertical-align: middle !important;
            background-color: #fff !important;
        }
        .wiki-dn-inner-table-v3 tr:last-child td {
            border-bottom: none !important;
        }

        /* 공통 텍스트 및 라벨 스타일 */
        .dn-badge-v3 {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 4px;
            color: #fff !important;
            font-size: 13px;
            font-weight: 900;
        }
        .dn-link-v3 {
            color: #0022AA !important;
            text-decoration: none !important;
            font-weight: bold !important;
            font-size: 14px;
        }
        .dn-link-v3:hover {
            text-decoration: underline !important;
        }
    `;
    document.head.appendChild(style);

    // 3. 붕 뜨는 빈 줄을 없애고 border-top으로 깔끔하게 마감한 완벽한 HTML
    const templateHTML = `
        <div class="wiki-dn-wrap-v3" id="deoknam-unopened-map">
            <table class="wiki-dn-table-v3">
                <tbody>
                    <!-- 최상단 헤더: 확실한 흰 바탕, 검은 글씨, 굵은 테두리 -->
                    <tr>
                        <th colspan="3" style="padding: 12px !important; font-size: 16px !important; font-weight: 900 !important; background-color: #fff !important; color: #000 !important; border-bottom: none !important;">덕남권 전철 노선</th>
                    </tr>
                    
                    <!-- 1호선 개통 구간 (빈 줄 없애고 border-top 5px로 핫핑크 띠 완벽 구현) -->
                    <tr>
                        <td colspan="3" style="padding: 18px !important; background-color: #fff !important; border-top: 5px solid #FF4F91 !important;">
                            <a href="덕주1호선.html" style="color: #0022AA !important; font-size: 17px !important; font-weight: bold !important; text-decoration: none !important;">1호선</a>
                        </td>
                    </tr>
                    
                    <!-- 권역 리스트 (누락됐던 수도권, 동남권 등 100% 복구) -->
                    <tr>
                        <td colspan="3" style="padding: 10px !important; font-size: 13px !important; color: #555 !important; background-color: #fff !important;">
                            수도권 · 동남권 · 대구권 · 대전권 · 광주권 · 효빈권 · 덕북권 · <b>덕남권</b>
                        </td>
                    </tr>
                    
                    <!-- 미개통 노선 영역 -->
                    <tr>
                        <td colspan="3" style="padding: 0 !important; border-bottom: none !important;">
                            <details class="wiki-dn-details-v3" open>
                                <summary>[ 미개통 노선 펼치기 · 접기 ]</summary>
                                
                                <table class="wiki-dn-inner-table-v3">
                                    <tbody>
                                        <!-- 상태 배지 (착공 예정 / 추진 중) -->
                                        <tr>
                                            <td style="width: 33.33%; padding: 12px !important; border-right: 1px solid #ccc !important;">
                                                <span class="dn-badge-v3" style="background-color: #FFC107 !important;">착공 예정</span>
                                            </td>
                                            <td colspan="2" style="width: 66.66%; padding: 12px !important;">
                                                <span class="dn-badge-v3" style="background-color: #C62828 !important;">추진 중</span>
                                            </td>
                                        </tr>
                                        
                                        <!-- 노선 영역 (각 노선별 색상 띠를 border-top 5px로 꽉 차게 구현) -->
                                        <tr>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #005BAC !important;">
                                                <a href="덕남권_광역철도.html" class="dn-link-v3">덕남권 광역철도</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">방산~마진 (1단계)</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #795548 !important;">
                                                <a href="방산석창경전철.html" class="dn-link-v3">방산-석창선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">경전철</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-top: 5px solid #4CAF50 !important;">
                                                <a href="낙주트램.html" class="dn-link-v3">낙주 트램</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">BRT 전환</span>
                                            </td>
                                        </tr>
                                        
                                        <!-- 상태 배지 (계획 중) -->
                                        <tr>
                                            <td colspan="3" style="padding: 12px !important; border-top: 1px solid #ccc !important; border-bottom: 1px solid #ccc !important;">
                                                <span class="dn-badge-v3" style="background-color: #9E9E9E !important;">계획 중</span>
                                            </td>
                                        </tr>
                                        
                                        <!-- 노선 영역 (각 노선별 색상 띠를 border-top 5px로 구현) -->
                                        <tr>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #41b6e6 !important;">
                                                <a href="덕주2호선.html" class="dn-link-v3">덕주 2호선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">노면전차 1·2단계</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #009688 !important;">
                                                <a href="매성매산경전철.html" class="dn-link-v3">매성매산선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">구상 중</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-top: 5px solid #FB637E !important;">
                                                <a href="HDTX-A.html" class="dn-link-v3">HDTX-A</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">고송교차로~덕주</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </details>
                        </td>
                    </tr>
                    
                    <!-- 최하단 주석 -->
                    <tr>
                        <td colspan="3" style="padding: 12px !important; font-size: 12px !important; color: #555 !important; background-color: #fafafa !important; border-top: 1px solid #ccc !important;">
                            ※ 상기 노선별 개통 및 착공 시기는 덕빈남도 및 국가 계획에 따르며 변동될 수 있음.
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