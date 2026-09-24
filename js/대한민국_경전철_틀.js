document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('korea-lrt-template-container');
    if (!container) return;

    if (!document.getElementById('style-template-korea-lrt')) {
        const style = document.createElement('style');
        style.id = 'style-template-korea-lrt';
        style.textContent = `
            /* 대한민국 경전철 틀 전용 스타일 */
            .wiki-table-container-lrt {
                width: 100%;
                max-width: 800px;
                background-color: #fff;
                border: 3px solid #000;
                margin: 20px auto;
                font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', 'Nanum Gothic', sans-serif;
                font-size: 14px;
                text-align: center;
                color: #333;
            }
            .wiki-table-container-lrt table {
                width: 100% !important;
                border-collapse: collapse !important;
                border: none !important;
                margin: 0 !important;
                table-layout: fixed;
            }
            .wiki-table-container-lrt th, .wiki-table-container-lrt td {
                border: 1px solid #ccc !important;
                padding: 10px 5px !important;
                vertical-align: middle;
                word-break: keep-all;
                color: #000 !important; /* 🔥 전역 CSS의 하얀색 글씨 속성을 강제로 무시하고 검은색으로 고정 🔥 */
            }
            
            /* 상단 헤더 영역 */
            .header-cell-lrt {
                background-color: #f8f9fa !important;
                padding: 12px !important;
                border-bottom: 2px solid #000 !important;
                position: relative;
                font-size: 1.1rem !important;
            }
            .header-cell-lrt .flag-icon {
                display: inline-block;
                width: 24px;
                height: 16px;
                background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/320px-Flag_of_South_Korea.svg');
                background-size: cover;
                background-position: center;
                vertical-align: middle;
                margin-right: 8px;
                border: 1px solid #ddd;
            }
            .header-cell-lrt .header-bg-left {
                position: absolute; left: 0; top: 0; height: 100%; width: 60px;
                background: linear-gradient(135deg, transparent 25%, #000 25%, #000 50%, transparent 50%, transparent 75%, #000 75%, #000 100%);
                background-size: 20px 20px;
            }
            .header-cell-lrt .header-bg-right {
                position: absolute; right: 0; top: 0; height: 100%; width: 60px;
                background: linear-gradient(135deg, #c60c30 50%, #003478 50%);
            }
            .header-cell-lrt a {
                color: #000;
                font-weight: 900;
                text-decoration: none;
                position: relative;
                z-index: 1;
                font-size: 1.3rem;
            }

            /* 펼치기/접기 버튼 */
            .wiki-table-container-lrt details { width: 100%; border: none; margin: 0; padding: 0; }
            .wiki-table-container-lrt summary {
                cursor: pointer;
                padding: 8px;
                font-size: 14px;
                font-weight: bold;
                color: #000 !important;
                background-color: #fff;
                border-bottom: 2px solid #000;
                list-style: none;
                display: block !important;
                margin: 0 !important;
            }
            .wiki-table-container-lrt summary::-webkit-details-marker { display: none; }
            .wiki-table-container-lrt summary::before {
                content: "[ 펼치기 · 접기 ]";
                display: block;
                text-align: center;
            }

            /* 좌측 분류 영역 */
            .category-th-lrt { font-weight: 900; background-color: #f2f2f2 !important; width: 60px; color: #000 !important; }
            .sub-category-th-lrt { font-weight: bold; width: 60px; padding: 15px 5px !important; letter-spacing: 2px; writing-mode: vertical-lr; text-orientation: upright; color: #000 !important; }
            .bg-steel { background-color: #e9ecef !important; }
            .bg-rubber { background-color: #e0e0b8 !important; }
            
            /* 링크 공통 스타일 */
            .line-link { text-decoration: none; font-weight: bold; display: block; padding: 5px; color: #333; }
            .line-link:hover { text-decoration: underline; }
            
            /* 미개통/계획 노선 스타일 (회색 + 취소선) */
            .planned-line {
                color: #888 !important;
                text-decoration: line-through !important;
                font-weight: normal;
            }

            /* ---------------- 노선별 상단 색상 바 ---------------- */
            .td-with-bar { position: relative; padding-top: 15px !important; }
            .color-bar { position: absolute; top: 0; left: 0; right: 0; height: 12px; }
            
            /* 기존 노선 색상 */
            .c-bgl { background-color: #875c9b; }
            .c-ic2 { background-color: #f5a251; }
            .c-ui { background-color: #b0ce3e; }
            .c-gimpo { background-color: #ad8605; }
            .c-dongbuk { background-color: #881122; }
            .c-dg4 { background-color: #aaaaaa; }
            .c-myeonmok { background-color: #777777; }
            .c-byu { background-color: #444444; }
            
            .c-bs4 { background-color: #217dcb; }
            .c-ujb { background-color: #fda600; }
            .c-sillim { background-color: #6789ca; }
            .c-ysn { background-color: #7fc3e6; }
            .c-gj2 { background-color: #005c97; }
            .c-bs5 { background-color: #e21d38; }
            .c-gys { background-color: #666666; }
            .c-seobu { background-color: #555555; }
            
            .c-dg3 { background-color: #ffb100; }
            .c-ever { background-color: #56c271; }
            
            .c-wirye { background-color: #515c6d; }
            .c-dj2 { background-color: #92d14f; }
            .c-us1 { background-color: #ba142b; }
            .c-dongtan { background-color: #f37321; }
            .c-jeonggwan { background-color: #888888; }

            /* --- 추가된 노선 색상 --- */
            .c-hb5 { background-color: #EE0022; } /* 효빈 5호선 */
            .c-seohae { background-color: #0077B6; } /* 서해경전철 */
            .c-cheonju1 { background-color: #00AABB; } /* 천주 1호선 */
            
            .c-hb8 { background-color: #9856FF; } /* 효빈 8호선 */
            .c-binju2 { background-color: #C455F6; } /* 빈주 2호선 */
            .c-deokju1 { background-color: #FF4F91; } /* 덕주 1호선 */
            
            .c-changjeon { background-color: #33aaff; } /* 창전선 */
            
            .c-hb7 { background-color: #FF8899; } /* 효빈 7호선 */
            .c-binju3 { background-color: #6AE673; } /* 빈주 3호선 */

            /* 텍스트 색상 (개통 노선 전용 - planned-line이 없는 경우 적용됨) */
            .t-bgl { color: #875c9b !important; }
            .t-ic2 { color: #52a6ce !important; }
            .t-ui { color: #b0ce3e !important; }
            .t-gimpo { color: #ad8605 !important; }
            .t-bs4 { color: #217dcb !important; }
            .t-ujb { color: #217dcb !important; }
            .t-sillim { color: #217dcb !important; }
            .t-gj2 { color: #217dcb !important; }
            .t-dg3 { color: #217dcb !important; }
            .t-ever { color: #217dcb !important; }
            
            /* 개통 처리 노선의 명시적 텍스트 색상 */
            .t-hb5 { color: #EE0022 !important; }
            .t-hb7 { color: #FF8899 !important; }
            .t-hb8 { color: #9856FF !important; }
            .t-binju2 { color: #C455F6 !important; }
            .t-deokju1 { color: #FF4F91 !important; }

            /* 하단 정보 영역 */
            .footer-info {
                background-color: #fff;
                padding: 10px;
                font-size: 13px;
                border-top: 2px solid #000;
                text-align: left;
                color: #333;
            }
            .footer-info .badge {
                display: inline-block;
                background-color: #2b7a2e;
                color: #fff;
                padding: 2px 5px;
                border-radius: 3px;
                font-size: 11px;
                vertical-align: middle;
                margin-right: 5px;
            }
        `;
        document.head.appendChild(style);
    }

    const templateHTML = `
        <div class="wiki-table-container-lrt">
            <table>
                <thead>
                    <tr>
                        <th colspan="5" class="header-cell-lrt">
                            <div class="header-bg-left"></div>
                            <span class="flag-icon"></span>
                            <a href="대한민국의 경전철.html">대한민국의 경전철</a>
                            <div class="header-bg-right"></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="5" style="padding: 0 !important; border-bottom: 2px solid #000 !important;">
                            <details open>
                                <summary></summary>
                                <div style="width: 100%; margin: 0; padding: 0;">
                                    <table style="border: none !important;">
                                        <tbody>
                                            <!-- AGT 철제차륜 (4줄) : 개통일 순서 반영 -->
                                            <tr>
                                                <th rowspan="8" class="category-th-lrt">A<br><br>G<br><br>T</th>
                                                <th rowspan="4" class="sub-category-th-lrt bg-steel">철 제 차 륜</th>
                                                
                                                <td class="td-with-bar w-[28%]">
                                                    <div class="color-bar c-hb5"></div>
                                                    <a href="5호선.html" class="line-link t-hb5">효빈 5호선</a>
                                                </td>
                                                <td class="td-with-bar w-[28%]">
                                                    <div class="color-bar c-bgl"></div>
                                                    <a href="#" class="line-link t-bgl">부산김해경<br>전철</a>
                                                </td>
                                                <td class="td-with-bar w-[28%]">
                                                    <div class="color-bar c-ic2"></div>
                                                    <a href="인천 2호선.html" class="line-link t-ic2">인천 2호선</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-ui"></div>
                                                    <a href="우이신설선.html" class="line-link t-ui">우이신설선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-gimpo"></div>
                                                    <a href="#" class="line-link t-gimpo">김포 골드라<br>인</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-dongbuk"></div>
                                                    <a href="동북선.html" class="line-link planned-line">동북선</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-dg4"></div>
                                                    <a href="대구 4호선.html" class="line-link planned-line">대구 4호선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-myeonmok"></div>
                                                    <a href="면목선.html" class="line-link planned-line">면목선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-byu"></div>
                                                    <a href="#" class="line-link planned-line">부산·양산·<br>울산 광역철<br>도</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-seohae"></div>
                                                    <a href="서해경전철.html" class="line-link planned-line">서해경전철</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-cheonju1"></div>
                                                    <a href="천주_1호선.html" class="line-link planned-line">천주 1호선</a>
                                                </td>
                                                <td></td>
                                            </tr>

                                            <!-- AGT 고무차륜 (4줄) : 개통일 순서 반영 -->
                                            <tr>
                                                <th rowspan="4" class="sub-category-th-lrt bg-rubber" style="border-left: 1px solid #ccc !important;">고 무 차 륜</th>
                                                
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-bs4"></div>
                                                    <a href="부산 4호선.html" class="line-link t-bs4">부산 4호선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-ujb"></div>
                                                    <a href="#" class="line-link t-ujb">의정부 경전<br>철</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-sillim"></div>
                                                    <a href="신림선.html" class="line-link t-sillim">신림선</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-deokju1"></div>
                                                    <a href="덕주1호선.html" class="line-link t-deokju1">덕주 1호선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-hb8"></div>
                                                    <a href="8호선.html" class="line-link t-hb8">효빈 8호선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-binju2"></div>
                                                    <a href="빈주2호선.html" class="line-link t-binju2">빈주 2호선</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-ysn"></div>
                                                    <a href="#" class="line-link planned-line">양산 도시철<br>도</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-gj2"></div>
                                                    <a href="광주 2호선.html" class="line-link planned-line">광주 2호선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-bs5"></div>
                                                    <a href="부산 5호선.html" class="line-link planned-line">부산 5호선</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-gys"></div>
                                                    <a href="고양은평선.html" class="line-link planned-line">고양은평선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-seobu"></div>
                                                    <a href="서부선.html" class="line-link planned-line">서부선</a>
                                                </td>
                                                <td></td>
                                            </tr>

                                            <!-- 모노레일 (1줄) : 배열 정리 -->
                                            <tr>
                                                <th colspan="2" class="category-th-lrt" style="font-weight: bold; letter-spacing: 1px;">모노레일</th>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-dg3"></div>
                                                    <a href="대구 3호선.html" class="line-link t-dg3">대구 3호선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-changjeon"></div>
                                                    <a href="창전선.html" class="line-link planned-line">창전선</a>
                                                </td>
                                                <td></td>
                                            </tr>

                                            <!-- LIM (1줄) : 배열 정리 -->
                                            <tr>
                                                <th colspan="2" class="category-th-lrt" style="font-weight: bold; font-family: Arial, sans-serif;">LIM</th>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-ever"></div>
                                                    <a href="용인 에버라인.html" class="line-link t-ever">용인 에버라인</a>
                                                </td>
                                                <td colspan="2"></td>
                                            </tr>

                                            <!-- 노면전차 (3줄) : 개통일 순서 반영 -->
                                            <tr>
                                                <th rowspan="3" colspan="2" class="category-th-lrt" style="font-weight: bold; line-height: 1.4;">노면전차<br>(트램)</th>
                                                
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-hb7"></div>
                                                    <a href="7호선.html" class="line-link t-hb7">효빈 7호선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-wirye"></div>
                                                    <a href="위례선.html" class="line-link planned-line">위례선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-dj2"></div>
                                                    <a href="대전 2호선.html" class="line-link planned-line">대전 2호선</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-us1"></div>
                                                    <a href="울산 1호선.html" class="line-link planned-line">울산 1호선</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-dongtan"></div>
                                                    <a href="동탄 도시철도.html" class="line-link planned-line">동탄 도시철도</a>
                                                </td>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-jeonggwan"></div>
                                                    <a href="정관선.html" class="line-link planned-line">정관선</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="td-with-bar">
                                                    <div class="color-bar c-binju3"></div>
                                                    <a href="빈주3호선.html" class="line-link planned-line">빈주 3호선 (트램트레인)</a>
                                                </td>
                                                <td colspan="2"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    <!-- 하단 정보 영역 -->
                                    <div class="footer-info">
                                        <div style="margin-bottom: 8px; text-align: center;">
                                            <span class="badge">🔗</span> 
                                            <span style="color: #2b7a2e; font-weight: bold;">국토교통부의 차종 형식승인을 기준으로 함 (2017년 9월 5일 발표)</span>
                                        </div>
                                        <div style="color: #333; margin-bottom: 4px; text-align: center;">
                                            <span style="text-decoration: line-through; color: #888;">취소선</span>: 미개통 노선
                                        </div>
                                        <div style="color: #333; text-align: center;">
                                            미개통 노선은 예타 및 민투심 통과했으나 아직 착공예정이면 회색 글자
                                        </div>
                                    </div>
                                    
                                </div>
                            </details>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = templateHTML;
});