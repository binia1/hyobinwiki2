        (function() {
            // 1. 스타일 (CSS) 자동 주입
            // 문서 내에 스타일이 없으면 동적으로 삽입합니다.
            if (!document.getElementById('style-template-unopened-map')) {
                const style = document.createElement('style');
                style.id = 'style-template-unopened-map';
                
                style.textContent = `
                    /* 미개통 노선도 틀 전용 전체 컨테이너 스타일 */
                    .wiki-table-container {
                        width: 100%;
                        max-width: 800px;
                        background-color: #fff;
                        border: 1px solid #ccc;
                        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                        margin: 20px auto;
                        font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', 'Nanum Gothic', sans-serif;
                        font-size: 14px;
                        text-align: center;
                        color: #373a3c;
                    }
                    .wiki-table-container table {
                        width: 100% !important;
                        border-collapse: collapse !important;
                        border: none !important;
                        margin: 0 !important;
                    }
                    .wiki-table-container th, .wiki-table-container td {
                        border: 1px solid #ccc !important;
                        padding: 0 !important;
                    }

                    /* 헤더 영역 */
                    .header-cell {
                        background-color: #1F2023 !important;
                        color: #fff !important;
                        padding: 16px !important;
                        font-size: 1.2rem !important;
                        font-weight: bold;
                        border-bottom: 1px solid #000 !important;
                        letter-spacing: 0.5px;
                    }
                    .header-link { color: #fff; text-decoration: none; }
                    .header-link:hover { text-decoration: underline; }

                    /* 펼치기/접기 기능 (details/summary) */
                    .wiki-table-container details { width: 100%; }
                    .wiki-table-container summary {
                        cursor: pointer;
                        padding: 5px;
                        font-size: 13px;
                        color: #000;
                        background-color: #fff;
                        border-bottom: 1px solid #ddd;
                        list-style: none;
                    }
                    .wiki-table-container summary::-webkit-details-marker { display: none; }
                    .wiki-table-container summary::before {
                        content: "[ 펼치기 · 접기 ]";
                        color: #0275d8;
                        font-size: 12px;
                        display: block;
                        text-align: center;
                    }
                    .content-area { padding: 5px 10px 10px 10px; background-color: #fff; }

                    /* 뱃지 스타일 (위키 이미지 참조) */
                    .status-header {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 15px 0 5px 0;
                        gap: 5px;
                    }
                    .status-badge {
                        display: inline-block;
                        padding: 2px 8px;
                        border-radius: 4px;
                        color: #fff;
                        font-weight: bold;
                        font-size: 12px;
                    }
                    /* 건설 중 (초록) */
                    .badge-construction { background-color: #4F8320; }
                    /* 착공 예정 (노랑) */
                    .badge-scheduled { background-color: #ffcc00; color: #333; }
                    /* 설계 중 (주황) */
                    .badge-design { background-color: #FF8000; }
                    /* 계획/추진 중 (회색) */
                    .badge-planned { background-color: #999; }
                    
                    .status-desc { font-size: 11px; color: #555; }

                    /* 노선 그리드 시스템 */
                    .line-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 2px;
                        margin-bottom: 15px;
                        border: 1px solid #ccc;
                        background-color: #ccc;
                    }
                    .line-cell {
                        background-color: #fff;
                        display: flex;
                        flex-direction: column;
                        text-decoration: none;
                        color: #000;
                        min-height: 50px;
                        position: relative;
                    }
                    .line-cell:hover { background-color: #f4f5f7; }
                    .line-color-bar { height: 12px; width: 100%; }
                    .line-text {
                        padding: 8px 4px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                    }
                    .line-name { font-weight: bold; font-size: 14px; display: flex; align-items: baseline; gap: 2px; text-align: center; line-height: 1.2; }
                    .line-year { font-size: 0.8em; font-weight: normal; color: #555; }
                    .line-detail { font-size: 11px; color: #666; margin-top: 4px; line-height: 1.3; text-align: center; word-break: keep-all; }
                    .empty-cell { background-color: #f9f9f9; cursor: default; }

                    /* 하단 각주 영역 */
                    .footnote-box {
                        font-size: 11px;
                        color: #555;
                        text-align: left;
                        margin-top: 10px;
                        padding: 8px;
                        border-top: 1px solid #eee;
                        line-height: 1.5;
                        word-break: keep-all;
                    }

                    /* 노선 색상 클래스 (지정해주신 공식 색상 완벽 반영) */
                    .bg-line1 { background-color: #0077DD; }
                    .bg-line2 { background-color: #00CCAA; }
                    .bg-line3 { background-color: #FFCC11; }
                    .bg-line4 { background-color: #FF5522; }
                    .bg-line5 { background-color: #EE0022; }
                    .bg-line6 { background-color: #881188; }
                    .bg-line7 { background-color: #FF8899; } /* 수정됨 */
                    .bg-line8 { background-color: #9856FF; }
                    .bg-line9 { background-color: #808080; } /* 수정됨 */
                    .bg-changjeon { background-color: #33AAFF; } /* 수정됨 */
                    .bg-binhyo { background-color: #6677CC; }
                    .bg-cheongyeop { background-color: #D6D5CA; border-bottom: 1px solid #ccc; box-sizing: border-box; } /* 수정됨 */
                    .bg-gangbin { background-color: #0054A6; }
                    .bg-ancheon { background-color: #B2FFDD; } /* 수정됨 */
                    .bg-hdtx-a { background-color: #FB637E; } /* 수정됨 */
                    .bg-hdtx-b { background-color: #9d8de2; } /* 수정됨 */
                `;
                document.head.appendChild(style);
            }

            // 2. HTML 템플릿 (새로운 데이터와 연도 반영)
            const templateHTML = `
                <div class="wiki-table-container">
                     <table>
                         <thead>
                             <tr>
                                 <th class="header-cell">
                                     <a href="효빈광역시_미개통_노선.html" class="header-link">효빈권 전철 미개통 노선</a>
                                 </th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td style="padding: 0;">
                                     <details open>
                                         <summary></summary>
                                         <div class="content-area">
                                             
                                             <div class="status-header">
                                                 <span class="status-badge badge-construction">건설 중</span>
                                                 <span class="status-desc">실착공 기준</span>
                                             </div>
                                             
                                             <div class="line-grid">
                                                 <!-- 창전선 -->
                                                 <a href="창전선.html" class="line-cell">
                                                     <div class="line-color-bar bg-changjeon"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">창전선<span class="line-year">('27)</span></span>
                                                         <span class="line-detail">1단계(팔조-하성천)</span>
                                                     </div>
                                                 </a>
                                                 <!-- 1호선 신설역 -->
                                                 <a href="운양역.html" class="line-cell">
                                                     <div class="line-color-bar bg-line1"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">1호선<span class="line-year">('28)</span></span>
                                                         <span class="line-detail">운양역 신설</span>
                                                     </div>
                                                 </a>
                                                 <!-- 5호선 하미연장선 -->
                                                 <a href="5호선.html" class="line-cell">
                                                     <div class="line-color-bar bg-line5"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">5호선<span class="line-year">('32)</span></span>
                                                         <span class="line-detail">하미연장선(포성산-하미)</span>
                                                     </div>
                                                 </a>
                                                 <!-- 빈칸 채우기 -->
                                                 <div class="line-cell empty-cell"></div>
                                             </div>
                                             
                                             <div class="status-header">
                                                 <span class="status-badge badge-scheduled">착공 예정</span>
                                             </div>
                                             
                                             <div class="line-grid">
                                                 <!-- 5호선 덕현중앙역 -->
                                                 <a href="덕현중앙역.html" class="line-cell">
                                                     <div class="line-color-bar bg-line5"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">5호선<span class="line-year">('29)</span></span>
                                                         <span class="line-detail">덕현중앙역</span>
                                                     </div>
                                                 </a>
                                                 <!-- 빈효선 덕현중앙역 -->
                                                 <a href="덕현중앙역.html" class="line-cell">
                                                     <div class="line-color-bar bg-binhyo"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">빈효선<span class="line-year">('29)</span></span>
                                                         <span class="line-detail">덕현중앙역</span>
                                                     </div>
                                                 </a>
                                                 <!-- 청엽선 -->
                                                 <a href="청엽선.html" class="line-cell">
                                                     <div class="line-color-bar bg-cheongyeop"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">청엽선<span class="line-year">('34)</span></span>
                                                         <span class="line-detail">엽월대 - 청엽국제학교</span>
                                                     </div>
                                                 </a>
                                                 <!-- 빈효선 치원지선 -->
                                                 <a href="치원지선.html" class="line-cell">
                                                     <div class="line-color-bar bg-binhyo"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">빈효선<span class="line-year">('31)</span></span>
                                                         <span class="line-detail">치원지선(화소-치원)</span>
                                                     </div>
                                                 </a>
                                             </div>
                                             
                                             <div class="status-header">
                                                 <span class="status-badge badge-planned">계획 중</span>
                                                 <span class="status-desc">구상 및 타당성 검토 중 포함</span>
                                             </div>
                                             
                                             <div class="line-grid">
                                                 <!-- HDTX-A -->
                                                 <a href="HDTX-A.html" class="line-cell">
                                                     <div class="line-color-bar bg-hdtx-a"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">HDTX-A<span class="line-year">('36)</span></span>
                                                         <span class="line-detail">고송교차로 - 덕주</span>
                                                     </div>
                                                 </a>
                                                 <!-- HDTX-B -->
                                                 <a href="HDTX-B.html" class="line-cell">
                                                     <div class="line-color-bar bg-hdtx-b"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">HDTX-B</span>
                                                         <span class="line-detail">창전중앙 - 군천</span>
                                                     </div>
                                                 </a>
                                                 <!-- 강빈선 -->
                                                 <a href="강빈선.html" class="line-cell">
                                                     <div class="line-color-bar bg-gangbin"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">강빈선</span>
                                                         <span class="line-detail">평천대 - 강주</span>
                                                     </div>
                                                 </a>
                                                 <!-- 안천선 -->
                                                 <a href="안천선.html" class="line-cell">
                                                     <div class="line-color-bar bg-ancheon"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">안천선</span>
                                                         <span class="line-detail">당가중앙 - 앵내중앙</span>
                                                     </div>
                                                 </a>
                                                 <!-- 9호선 -->
                                                 <a href="9호선.html" class="line-cell">
                                                     <div class="line-color-bar bg-line9"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">9호선</span>
                                                         <span class="line-detail">북고송 - 흑택</span>
                                                     </div>
                                                 </a>
                                                 <!-- 1호선 연장 -->
                                                 <a href="1호선.html" class="line-cell">
                                                     <div class="line-color-bar bg-line1"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">1호선</span>
                                                         <span class="line-detail">장선 - 궁하 연장</span>
                                                     </div>
                                                 </a>
                                                 <!-- 8호선 연장 -->
                                                 <a href="8호선.html" class="line-cell">
                                                     <div class="line-color-bar bg-line8"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">8호선</span>
                                                         <span class="line-detail">연장 방향 미정</span>
                                                     </div>
                                                 </a>
                                                 <!-- 7호선 사능선 복구 -->
                                                 <a href="7호선.html" class="line-cell">
                                                     <div class="line-color-bar bg-line7"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">7호선<span class="line-year">('33)</span></span>
                                                         <span class="line-detail">사능선(사능삼거리-해서)</span>
                                                     </div>
                                                 </a>
                                                 <!-- 4호선 성저역 신설 -->
                                                 <a href="성저역.html" class="line-cell">
                                                     <div class="line-color-bar bg-line4"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">4호선</span>
                                                         <span class="line-detail">성저역 신설</span>
                                                     </div>
                                                 </a>
                                                 <!-- 4호선 약산연장 -->
                                                 <a href="4호선.html" class="line-cell">
                                                     <div class="line-color-bar bg-line4"></div>
                                                     <div class="line-text">
                                                         <span class="line-name">4호선</span>
                                                         <span class="line-detail">약산연장(고해-약산)</span>
                                                     </div>
                                                 </a>
                                                 <!-- 빈칸 채우기 -->
                                                 <div class="line-cell empty-cell"></div>
                                                 <div class="line-cell empty-cell"></div>
                                             </div>
                                             
                                             <div style="font-size: 11px; text-align: center; margin: 15px 0 5px 0;">
                                                 개통된 효빈광역시 전철 노선은 <b><a href="효빈권 전철 노선.html" style="color:#0275d8; text-decoration: none;">효빈권 전철 노선</a></b> 참조
                                             </div>
                                             
                                             <!-- 하단 범례 -->
                                             <div class="footnote-box">
                                                 ※ <b>1</b> : 사업계획 승인 · <b>2</b> : 실시계획 승인 / <b>3</b> : 기본계획 승인 · <b>4</b> : 실시협약 체결 · <b>5</b> : 중앙투자심사 통과 / <b>6</b> : 예비타당성조사 통과 · <b>7</b> : 민자적격성조사 통과<br>
                                                 ※ 노선명 옆의 연도는 개통 목표 연도이며, 상기 노선별 개통 시기 및 노선은 효빈광역시 및 국가 계획에 따라 변동될 수 있습니다.<br>
                                                 ※ 강빈선 등 일부 노선은 상위 철도망 계획(HDTX) 추진 현황에 따라 사업 계획이 변경될 수 있습니다.
                                             </div>
                                          </div>
                                     </details>
                                 </td>
                             </tr>
                         </tbody>
                     </table>
                </div>
            `;

            // 3. HTML 삽입
            // 스크립트가 실행된 위치(문서 내)에 틀을 추가합니다.
            const scriptTag = document.currentScript;
            if(scriptTag) {
                scriptTag.insertAdjacentHTML('afterend', templateHTML);
            } else {
                // 테스트용 fallback (currentScript가 없을 경우 body 맨 뒤에 추가)
                document.body.insertAdjacentHTML('beforeend', templateHTML);
            }
        })();