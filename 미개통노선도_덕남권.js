(function() {
    // 1. 스타일 (CSS) 자동 주입
    if (!document.getElementById('style-template-unopened-map-deoknam')) {
        const style = document.createElement('style');
        style.id = 'style-template-unopened-map-deoknam';
        style.textContent = `
            /* 덕남권 미개통 노선도 전용 스타일 */
            .wiki-table-container-dn {
                width: 100%;
                max-width: 750px;
                background-color: #fff;
                border: 1px solid #ccc;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                margin: 20px auto;
                font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', 'Nanum Gothic', sans-serif;
                font-size: 14px;
                text-align: center;
                color: #373a3c;
            }
            .wiki-table-container-dn table {
                width: 100% !important; 
                border-collapse: collapse !important;
                border: none !important;
                margin: 0 !important;
            }
            .wiki-table-container-dn th, .wiki-table-container-dn td {
                border: 1px solid #ccc !important;
                padding: 0 !important;
            }
            .header-cell-dn {
                background-color: #C62828 !important; /* 덕남권 메인 테마 색상 */
                color: #fff !important;
                padding: 16px !important; 
                font-size: 1.2rem !important; 
                font-weight: bold;
                border-bottom: 1px solid #000 !important;
                letter-spacing: 0.5px; 
            }
            .header-link-dn { color: #fff; text-decoration: none; }
            .header-link-dn:hover { text-decoration: underline; }

            .wiki-table-container-dn details { width: 100%; }
            .wiki-table-container-dn summary {
                cursor: pointer;
                padding: 5px;
                font-size: 13px;
                color: #000;
                background-color: #fff;
                border-bottom: 1px solid #ddd;
                list-style: none;
            }
            .wiki-table-container-dn summary::-webkit-details-marker { display: none; }
            .wiki-table-container-dn summary::before {
                content: "[ 펼치기 · 접기 ]";
                color: #0275d8;
                font-size: 12px;
                display: block;
                text-align: center;
            }
            .wiki-table-container-dn details[open] summary::before { content: "[ 펼치기 · 접기 ]"; }

            .content-area-dn { padding: 5px 10px 10px 10px; background-color: #fff; }

            /* 뱃지 스타일 */
            .status-badge {
                display: inline-block;
                padding: 2px 6px;
                border-radius: 6px;
                color: #fff;
                font-weight: bold;
                font-size: 12px;
                margin: 10px 0 5px 0;
            }
            .badge-construction { background-color: #4F8320; }
            .badge-design { background-color: #FF8000; }
            .badge-planned { background-color: #999; }
            .badge-promoting { background-color: #cc0000; } /* 추진 중 뱃지 추가 */

            /* 노선 그리드 시스템 */
            .line-grid-dn {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                background-color: #ccc;
            }
            .line-cell-dn {
                background-color: #fff;
                display: flex;
                flex-direction: column;
                text-decoration: none;
                color: #000;
                min-height: 40px;
            }
            .line-cell-dn:hover { background-color: #f9f9f9; }
            .line-color-bar-dn { height: 12px; width: 100%; }
            .line-text-dn {
                padding: 8px 4px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
            .line-name-dn { font-weight: bold; font-size: 13.5px; }
            .line-detail-dn { font-size: 11px; color: #555; margin-top: 2px; line-height: 1.2; word-break: keep-all; }
            
            .footnote-box-dn {
                font-size: 11px;
                color: #555;
                text-align: left;
                margin-top: 5px;
                padding: 5px;
                border-top: 1px solid #eee;
                line-height: 1.4;
            }

            /* 노선 색상 클래스 */
            .bg-deokju2 { background-color: #41b6e6; }
            .bg-dn-gwangyeok { background-color: #005BAC; } /* 코레일 블루 */
            .bg-nakju { background-color: #4CAF50; }
            .bg-bs { background-color: #795548; }
            .bg-ms { background-color: #009688; }
            .bg-hdtxa { background-color: #FB637E; }
            
            .empty-cell-dn { background-color: #f0f0f0; cursor: default; pointer-events: none; }
        `;
        document.head.appendChild(style);
    }

    // 2. HTML 템플릿 (덕남권 미개통 노선도 틀 내용)
    const templateHTML = `
        <div class="wiki-table-container-dn">
             <table>
                 <thead>
                     <tr>
                         <th class="header-cell-dn">
                             <a href="덕남권_미개통_노선.html" class="header-link-dn">덕남권 전철 미개통 노선</a>
                         </th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td style="padding: 0;">
                             <details open>
                                 <summary></summary>
                                 <div class="content-area-dn">
                                     
                                     <!-- 1. 착공 예정 / 공사중 -->
                                     <div class="status-badge badge-design">착공 예정</div>
                                     
                                     <div class="line-grid-dn">
                                         <!-- 덕남권 광역철도 -->
                                         <a href="덕남권_광역철도.html" class="line-cell-dn">
                                             <div class="line-color-bar-dn bg-dn-gwangyeok"></div>
                                             <div class="line-text-dn">
                                                 <span class="line-name-dn">덕남권 광역철도</span>
                                                 <span class="line-detail-dn">방산~마진</span>
                                             </div>
                                         </a>
                                         <!-- 빈칸 3개 -->
                                         <div class="line-cell-dn empty-cell-dn"></div>
                                         <div class="line-cell-dn empty-cell-dn"></div>
                                         <div class="line-cell-dn empty-cell-dn"></div>
                                     </div>
                                     
                                     <!-- 2. 추진 중 -->
                                     <div class="status-badge badge-promoting">추진 중</div>
                                     
                                     <div class="line-grid-dn">
                                         <!-- 방산석창경전철 -->
                                         <a href="방산석창경전철.html" class="line-cell-dn">
                                             <div class="line-color-bar-dn bg-bs"></div>
                                             <div class="line-text-dn">
                                                 <span class="line-name-dn">방산-석창 경전철</span>
                                                 <span class="line-detail-dn"></span>
                                             </div>
                                         </a>
                                         <!-- 낙주트램 -->
                                         <a href="낙주트램.html" class="line-cell-dn">
                                             <div class="line-color-bar-dn bg-nakju"></div>
                                             <div class="line-text-dn">
                                                 <span class="line-name-dn">낙주 트램</span>
                                                 <span class="line-detail-dn">BRT 1번 전환</span>
                                             </div>
                                         </a>
                                         <!-- 빈칸 2개 -->
                                         <div class="line-cell-dn empty-cell-dn"></div>
                                         <div class="line-cell-dn empty-cell-dn"></div>
                                     </div>

                                     <!-- 3. 계획 및 구상 중 -->
                                     <div class="status-badge badge-planned">계획 및 구상 중</div>
                                     
                                     <div class="line-grid-dn">
                                         <!-- 덕주 2호선 -->
                                         <a href="덕주2호선.html" class="line-cell-dn">
                                             <div class="line-color-bar-dn bg-deokju2"></div>
                                             <div class="line-text-dn">
                                                 <span class="line-name-dn">덕주 2호선</span>
                                                 <span class="line-detail-dn">노면전차</span>
                                             </div>
                                         </a>
                                         <!-- 매성매산경전철 -->
                                         <a href="매성매산경전철.html" class="line-cell-dn">
                                             <div class="line-color-bar-dn bg-ms"></div>
                                             <div class="line-text-dn">
                                                 <span class="line-name-dn">매성-매산 경전철</span>
                                                 <span class="line-detail-dn">구상중</span>
                                             </div>
                                         </a>
                                         <!-- HDTX-A -->
                                         <a href="HDTX-A.html" class="line-cell-dn">
                                             <div class="line-color-bar-dn bg-hdtxa"></div>
                                             <div class="line-text-dn">
                                                 <span class="line-name-dn">HDTX-A</span>
                                                 <span class="line-detail-dn">고송교차로~덕주('36)</span>
                                             </div>
                                         </a>
                                         <!-- 빈칸 1개 -->
                                         <div class="line-cell-dn empty-cell-dn"></div>
                                     </div>
                                     
                                     <div style="font-size: 11px; text-align: center; margin-bottom: 5px;">
                                         개통된 덕남권 전철 노선은 <b><a href="덕남권_전철.html" style="color:#000;">덕남권 전철 노선</a></b> 참조
                                     </div>
                                     
                                     <!-- 하단 범례 -->
                                     <div class="footnote-box-dn">
                                         ※ 상기 노선별 개통 시기는 지자체 및 국가 계획에 따르며 변동될 수 있음.
                                     </div>
                                  </div>
                             </details>
                         </td>
                     </tr>
                 </tbody>
             </table>
        </div>
    `;

    // 3. HTML 삽입 (이 스크립트가 호출된 위치 바로 뒤에)
    if (document.currentScript) {
        document.currentScript.insertAdjacentHTML('afterend', templateHTML);
    } else {
        const mapZones = document.querySelectorAll('#deoknam-unopened-map');
        if (mapZones.length > 0) {
            mapZones[mapZones.length - 1].insertAdjacentHTML('beforeend', templateHTML);
        }
    }
})();