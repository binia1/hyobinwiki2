(function() {
    // 1. 기존의 쓰레기 같은 스타일과 태그들을 싹 다 청소
    const oldStyles = document.querySelectorAll('style[id^="style-template-unopened-map-deokbin"], style[id^="style-template-deokbuk"]');
    oldStyles.forEach(el => el.remove());
    const existingMaps = document.querySelectorAll('.wiki-table-container-db, .wiki-db-wrap-v3, #deokbuk-unopened-map');
    existingMaps.forEach(el => el.remove());

    // 2. 붕 뜨는 현상을 100% 차단하고 흰색/검은색 테마를 강제하는 CSS 주입
    const style = document.createElement('style');
    style.id = 'style-template-deokbuk-transit-final';
    style.textContent = `
        /* 외부 컨테이너: 좌우 너비 100% 강제, 두꺼운 외곽선으로 붕 뜨는 현상 완전 억제 */
        .wiki-db-wrap-v3 {
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
        .wiki-db-table-v3 {
            width: 100% !important;
            border-collapse: collapse !important;
            border: none !important;
            margin: 0 !important;
            table-layout: fixed !important;         }
        .wiki-db-table-v3 th, .wiki-db-table-v3 td {
            border: 1px solid #ccc !important;
            text-align: center !important;
            vertical-align: middle !important;
            color: #333;
            font-size: 14px;
            word-break: keep-all;
        }
        
        /* 접기/펼치기 버튼 설정 */
        .wiki-db-details-v3 summary {
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
        .wiki-db-details-v3 summary::-webkit-details-marker { display: none; }
        .wiki-db-details-v3 summary:hover { background-color: #f9f9f9 !important; }
        
        /* 내부 미개통 테이블 */
        .wiki-db-inner-table-v3 {
            width: 100% !important;
            border-collapse: collapse !important;
            border: none !important;
            table-layout: fixed !important;
            margin: 0 !important;
        }
        .wiki-db-inner-table-v3 td {
            border-top: none !important;
            border-bottom: 1px solid #ccc !important;
            text-align: center !important;
            vertical-align: middle !important;
            background-color: #fff !important;
        }
        .wiki-db-inner-table-v3 tr:last-child td {
            border-bottom: none !important;
        }

        /* 공통 텍스트 및 라벨 스타일 */
        .db-badge-v3 {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 4px;
            color: #fff !important;
            font-size: 13px;
            font-weight: 900;
        }
        .db-link-v3 {
            color: #0022AA !important;
            text-decoration: none !important;
            font-weight: bold !important;
            font-size: 14px;
        }
        .db-link-v3:hover {
            text-decoration: underline !important;
        }
    `;
    document.head.appendChild(style);

    // 3. 덕남권과 똑같은 양식으로 빈주 1,2호선과 빈주광역철도를 상단에 배치한 완벽한 HTML
    const templateHTML = `
        <div class="wiki-db-wrap-v3" id="deokbuk-unopened-map">
            <table class="wiki-db-table-v3">
                <tbody>
                    <!-- 최상단 헤더: 확실한 흰 바탕, 검은 글씨, 굵은 테두리 -->
                    <tr>
                        <th colspan="3" style="padding: 12px !important; font-size: 16px !important; font-weight: 900 !important; background-color: #fff !important; color: #000 !important; border-bottom: none !important;">덕북권 전철 노선</th>
                    </tr>
                    
                    <!-- 개통 노선 영역 (빈주1호선, 빈주2호선, 빈주권 광역철도) -->
                    <tr>
                        <!-- 빈주 1호선 (황금색) -->
                        <td style="width: 33.33%; padding: 18px !important; background-color: #fff !important; border-top: 5px solid #CFBA0F !important;">
                            <a href="빈주1호선.html" style="color: #0022AA !important; font-size: 16px !important; font-weight: bold !important; text-decoration: none !important;">빈주 1호선</a>
                        </td>
                        <!-- 빈주 2호선 (보라색) -->
                        <td style="width: 33.33%; padding: 18px !important; background-color: #fff !important; border-top: 5px solid #C455F6 !important;">
                            <a href="빈주2호선.html" style="color: #0022AA !important; font-size: 16px !important; font-weight: bold !important; text-decoration: none !important;">빈주 2호선</a>
                        </td>
                        <!-- 빈주권 광역철도 (코레일 블루) -->
                        <td style="width: 33.33%; padding: 18px !important; background-color: #fff !important; border-top: 5px solid #005BAC !important;">
                            <a href="빈주권_광역철도.html" style="color: #0022AA !important; font-size: 16px !important; font-weight: bold !important; text-decoration: none !important;">빈주권 광역철도</a>
                        </td>
                    </tr>
                    
                    <!-- 권역 리스트 (누락됐던 수도권, 동남권 등 100% 복구) -->
                    <tr>
                        <td colspan="3" style="padding: 10px !important; font-size: 13px !important; color: #555 !important; background-color: #fff !important;">
                            수도권 · 동남권 · 대구권 · 대전권 · 광주권 · <a href="효빈권_전철.html" class="dn-link-v3">효빈권</a> · <b><a href="덕북권_전철.html" class="dn-link-v3">덕북권</a></b> · <a href="덕남권_전철.html" class="dn-link-v3">덕남권</a>
                        </td>
                    </tr>
                    
                    <!-- 미개통 노선 영역 -->
                    <tr>
                        <td colspan="3" style="padding: 0 !important; border-bottom: none !important;">
                            <details class="wiki-db-details-v3" open>
                                <summary>[ 미개통 노선 펼치기 · 접기 ]</summary>
                                
                                <table class="wiki-db-inner-table-v3">
                                    <tbody>
                                        <!-- 상태 배지 1 (건설 중) -->
                                        <tr>
                                            <td colspan="3" style="padding: 12px !important; border-bottom: 1px solid #ccc !important;">
                                                <span class="db-badge-v3" style="background-color: #4F8320 !important;">건설 중</span>
                                                <span style="font-size: 11px; margin-left: 5px; color: #555;">(실착공 기준)</span>
                                            </td>
                                        </tr>
                                        
                                        <!-- 노선 영역 1 (건설 중) -->
                                        <tr>
                                            <td style="width: 33.33%; padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #6677CC !important;">
                                                <a href="빈효광역선.html" class="db-link-v3">빈효선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">부진 연장('30)</span>
                                            </td>
                                            <td style="width: 33.33%; padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #EE0022 !important;">
                                                <a href="5호선.html" class="db-link-v3">5호선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">하미 연장('32)</span>
                                            </td>
                                            <td style="width: 33.33%; padding: 20px 10px !important; background-color: #fafafa !important;"></td> <!-- 빈칸 -->
                                        </tr>

                                        <!-- 상태 배지 2 (설계 및 추진 중) -->
                                        <tr>
                                            <td colspan="3" style="padding: 12px !important; border-top: 1px solid #ccc !important; border-bottom: 1px solid #ccc !important;">
                                                <span class="db-badge-v3" style="background-color: #FF8000 !important;">설계 및 추진 중</span>
                                                <span style="font-size: 11px; margin-left: 5px; color: #555;">(신설 예정 역사 포함)</span>
                                            </td>
                                        </tr>

                                        <!-- 노선 영역 2-1 (설계 중 첫줄) -->
                                        <tr>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #55DDEE !important;">
                                                <a href="서해경전철.html" class="db-link-v3">서해선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">서해경전철('34)</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #6677CC !important;">
                                                <a href="빈효광역선.html" class="db-link-v3">빈효선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">치원지선('31)</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-top: 5px solid #00AABB !important;">
                                                <a href="천주1호선.html" class="db-link-v3">천주 1호선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">남궁하-세지('35)</span>
                                            </td>
                                        </tr>
                                        
                                        <!-- 노선 영역 2-2 (설계 중 두번째 줄) -->
                                        <tr>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #CFBA0F !important;">
                                                <a href="빈주1호선.html" class="db-link-v3">빈주 1호선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">오택중앙 연장('31)</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #C455F6 !important;">
                                                <a href="빈주2호선.html" class="db-link-v3">빈주 2호선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">고전 연장('33)</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; background-color: #fafafa !important;"></td> <!-- 빈칸 -->
                                        </tr>

                                        <!-- 상태 배지 3 (계획 중) -->
                                        <tr>
                                            <td colspan="3" style="padding: 12px !important; border-top: 1px solid #ccc !important; border-bottom: 1px solid #ccc !important;">
                                                <span class="db-badge-v3" style="background-color: #9E9E9E !important;">계획 중</span>
                                                <span style="font-size: 11px; margin-left: 5px; color: #555;">(국가·도시철도망 구축계획)</span>
                                            </td>
                                        </tr>
                                        
                                        <!-- 노선 영역 3-1 (계획 중 첫줄) -->
                                        <tr>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #FB637E !important;">
                                                <a href="HDTX-A.html" class="db-link-v3">HDTX-A</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">고송-덕주('36)</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #9d8de2 !important;">
                                                <a href="HDTX-B.html" class="db-link-v3">HDTX-B</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">창전중앙-군천</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-top: 5px solid #6AE673 !important;">
                                                <a href="빈주3호선.html" class="db-link-v3">빈주 3호선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">미천-북계성('36)</span>
                                            </td>
                                        </tr>

                                        <!-- 노선 영역 3-2 (계획 중 두번째 줄) -->
                                        <tr>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #FF5522 !important;">
                                                <a href="4호선.html" class="db-link-v3">4호선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">약산 연장</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #8D6E63 !important;">
                                                <a href="천주2호선.html" class="db-link-v3">천주 2호선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">천성-팔호</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-top: 5px solid #CFBA0F !important;">
                                                <a href="빈주1호선.html" class="db-link-v3">빈주 1호선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">동습지선</span>
                                            </td>
                                        </tr>

                                        <!-- 노선 영역 3-3 (계획 중 세번째 줄) -->
                                        <tr>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #888888 !important;">
                                                <a href="강주트램.html" class="db-link-v3">강주선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">강주트램</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #888888 !important;">
                                                <a href="약산트램.html" class="db-link-v3">약산선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">약산트램</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-top: 5px solid #888888 !important;">
                                                <a href="낭원천주선.html" class="db-link-v3">낭원천주선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">도시간 경전철</span>
                                            </td>
                                        </tr>

                                        <!-- 노선 영역 3-4 (계획 중 네번째 줄) -->
                                        <tr>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; border-top: 5px solid #888888 !important;">
                                                <a href="군천전산트램트레인.html" class="db-link-v3">군천전산선</a><br>
                                                <span style="font-size: 12px !important; color: #666 !important; display: inline-block; margin-top: 5px;">도시간 트램</span>
                                            </td>
                                            <td style="padding: 20px 10px !important; border-right: 1px solid #ccc !important; background-color: #fafafa !important;"></td> <!-- 빈칸 -->
                                            <td style="padding: 20px 10px !important; background-color: #fafafa !important;"></td> <!-- 빈칸 -->
                                        </tr>
                                    </tbody>
                                </table>
                            </details>
                        </td>
                    </tr>
                    
                    <!-- 최하단 주석 -->
                    <tr>
                        <td colspan="3" style="padding: 12px !important; font-size: 12px !important; color: #555 !important; background-color: #fafafa !important; border-top: 1px solid #ccc !important;">
                            ※ 상기 노선별 개통 및 착공 시기는 효빈광역시, 덕빈북도 및 국가 계획에 따르며 변동될 수 있음.<br>
                            ※ 사업 진행 단계(예타 조사, 실시계획 승인 등)에 따라 일정이 지연될 가능성이 높음.
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