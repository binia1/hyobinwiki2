(function() {
    // 1. 스타일 (CSS) 자동 주입
    if (!document.getElementById('style-template-unopened-map-deokbin')) {
        const style = document.createElement('style');
        style.id = 'style-template-unopened-map-deokbin';
        style.textContent = `
            /* 덕빈권 미개통 노선도 전용 스타일 */
            .wiki-table-container-db {
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
            .wiki-table-container-db table {
                width: 100% !important; 
                border-collapse: collapse !important;
                border: none !important;
                margin: 0 !important;
            }
            .wiki-table-container-db th, .wiki-table-container-db td {
                border: 1px solid #ccc !important;
                padding: 0 !important;
            }
            .header-cell-db {
                background-color: #0054A6 !important; /* 덕빈권 메인 테마 블루 */
                color: #fff !important;
                padding: 16px !important; 
                font-size: 1.2rem !important; 
                font-weight: bold;
                border-bottom: 1px solid #000 !important;
                letter-spacing: 0.5px; 
            }
            .header-link-db { color: #fff; text-decoration: none; }
            .header-link-db:hover { text-decoration: underline; }

            .wiki-table-container-db details { width: 100%; }
            .wiki-table-container-db summary {
                cursor: pointer;
                padding: 5px;
                font-size: 13px;
                color: #000;
                background-color: #fff;
                border-bottom: 1px solid #ddd;
                list-style: none;
            }
            .wiki-table-container-db summary::-webkit-details-marker { display: none; }
            .wiki-table-container-db summary::before {
                content: "[ 펼치기 · 접기 ]";
                color: #0275d8;
                font-size: 12px;
                display: block;
                text-align: center;
            }
            .wiki-table-container-db details[open] summary::before { content: "[ 펼치기 · 접기 ]"; }

            .content-area-db { padding: 5px 10px 10px 10px; background-color: #fff; }

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

            /* 노선 그리드 시스템 */
            .line-grid-db {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                background-color: #ccc;
            }
            .line-cell-db {
                background-color: #fff;
                display: flex;
                flex-direction: column;
                text-decoration: none;
                color: #000;
                min-height: 40px;
            }
            .line-cell-db:hover { background-color: #f9f9f9; }
            .line-color-bar-db { height: 12px; width: 100%; }
            .line-text-db {
                padding: 8px 4px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
            .line-name-db { font-weight: bold; font-size: 13.5px; }
            .line-detail-db { font-size: 11px; color: #555; margin-top: 2px; line-height: 1.2; word-break: keep-all; }
            
            .footnote-box-db {
                font-size: 11px;
                color: #555;
                text-align: left;
                margin-top: 5px;
                padding: 5px;
                border-top: 1px solid #eee;
                line-height: 1.4;
            }

            /* 덕빈권역 및 관련 노선 색상 클래스 */
            .bg-binju1 { background-color: #CFBA0F; }
            .bg-binju2 { background-color: #C455F6; }
            .bg-binju3 { background-color: #6AE673; }
            .bg-seohae { background-color: #0088CC; }
            .bg-cheonju1 { background-color: #008B8B; }
            .bg-cheonju2 { background-color: #8D6E63; }
            .bg-binhyo { background-color: #6677CC; }
            .bg-hdtxa { background-color: #FB637E; }
            .bg-hdtxb { background-color: #9d8de2; }
            .bg-line4 { background-color: #FF5522; }
            .bg-line5 { background-color: #EE0022; }
            .bg-tram { background-color: #888888; }
            .empty-cell-db { background-color: #f0f0f0; cursor: default; pointer-events: none; }
        `;
        document.head.appendChild(style);
    }

    // 2. HTML 템플릿 (덕빈권 미개통 노선도 틀 내용)
    const templateHTML = `
        <div class="wiki-table-container-db">
             <table>
                 <thead>
                     <tr>
                         <th class="header-cell-db">
                             <a href="덕빈북도_미개통_노선.html" class="header-link-db">덕빈북도 전철 미개통 노선</a>
                         </th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td style="padding: 0;">
                             <details open>
                                 <summary></summary>
                                 <div class="content-area-db">
                                     
                                     <!-- 1. 건설 중 -->
                                     <div class="status-badge badge-construction">건설 중</div>
                                     <div style="font-size: 11px; display:inline-block; margin-left: 5px;">실착공 기준</div>
                                     
                                     <div class="line-grid-db">
                                         <!-- 빈효선 부진 연장 -->
                                         <a href="빈효선.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-binhyo"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">빈효선</span>
                                                 <span class="line-detail-db">부진 연장('30)</span>
                                             </div>
                                         </a>
                                         <!-- 5호선 하미연장 -->
                                         <a href="5호선.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-line5"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">5호선</span>
                                                 <span class="line-detail-db">하미 연장('32)</span>
                                             </div>
                                         </a>
                                         <!-- 빈칸 2개 -->
                                         <div class="line-cell-db empty-cell-db"></div>
                                         <div class="line-cell-db empty-cell-db"></div>
                                     </div>
                                     
                                     <!-- 2. 착공 예정 / 설계 중 -->
                                     <div class="status-badge badge-design">설계 및 추진 중</div>
                                     <div style="font-size: 11px; display:inline-block; margin-left: 5px;">신설 예정 역사 포함</div>
                                     
                                     <div class="line-grid-db">
                                         <!-- 서해경전철 -->
                                         <a href="서해경전철.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-seohae"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">서해선</span>
                                                 <span class="line-detail-db">서해경전철('34)</span>
                                             </div>
                                         </a>
                                         <!-- 빈효선 치원지선 -->
                                         <a href="빈효선.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-binhyo"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">빈효선</span>
                                                 <span class="line-detail-db">치원지선('31)</span>
                                             </div>
                                         </a>
                                         <!-- 천주 1호선 -->
                                         <a href="천주1호선.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-cheonju1"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">천주 1호선</span>
                                                 <span class="line-detail-db">남궁하-세지('35)</span>
                                             </div>
                                         </a>
                                         <!-- 빈주 1호선 오택연장 -->
                                         <a href="빈주1호선.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-binju1"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">빈주 1호선</span>
                                                 <span class="line-detail-db">오택중앙 연장('31)</span>
                                             </div>
                                         </a>
                                         <!-- 빈주 2호선 고전연장 -->
                                         <a href="빈주2호선.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-binju2"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">빈주 2호선</span>
                                                 <span class="line-detail-db">고전 연장('33)</span>
                                             </div>
                                         </a>
                                         <!-- 빈칸 3개 -->
                                         <div class="line-cell-db empty-cell-db"></div>
                                         <div class="line-cell-db empty-cell-db"></div>
                                         <div class="line-cell-db empty-cell-db"></div>
                                     </div>
                                     
                                     <!-- 3. 계획 중 -->
                                     <div class="status-badge badge-planned">계획 중</div>
                                     <div style="font-size: 11px; display:inline-block; margin-left: 5px;">국가·도시철도망 구축계획</div>
                                     
                                     <div class="line-grid-db">
                                         <!-- HDTX-A -->
                                         <a href="HDTX-A.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-hdtxa"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">HDTX-A</span>
                                                 <span class="line-detail-db">고송-덕주('36)</span>
                                             </div>
                                         </a>
                                         <!-- HDTX-B -->
                                         <a href="HDTX-B.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-hdtxb"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">HDTX-B</span>
                                                 <span class="line-detail-db">창전중앙-군천</span>
                                             </div>
                                         </a>
                                         <!-- 빈주 3호선 -->
                                         <a href="빈주3호선.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-binju3"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">빈주 3호선</span>
                                                 <span class="line-detail-db">미천-북계성('36)</span>
                                             </div>
                                         </a>
                                         <!-- 4호선 약산연장 -->
                                         <a href="4호선.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-line4"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">4호선</span>
                                                 <span class="line-detail-db">약산 연장</span>
                                             </div>
                                         </a>
                                         <!-- 천주 2호선 -->
                                         <a href="천주2호선.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-cheonju2"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">천주 2호선</span>
                                                 <span class="line-detail-db">천성-팔호</span>
                                             </div>
                                         </a>
                                         <!-- 빈주 1호선 동습지선 -->
                                         <a href="빈주1호선.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-binju1"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">빈주 1호선</span>
                                                 <span class="line-detail-db">동습지선</span>
                                             </div>
                                         </a>
                                         <!-- 강주트램 -->
                                         <a href="강주트램.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-tram"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">강주선</span>
                                                 <span class="line-detail-db">강주트램</span>
                                             </div>
                                         </a>
                                         <!-- 약산트램 -->
                                         <a href="약산트램.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-tram"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">약산선</span>
                                                 <span class="line-detail-db">약산트램</span>
                                             </div>
                                         </a>
                                         <!-- 낭원천주선 -->
                                         <a href="낭원천주선.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-tram"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">낭원천주선</span>
                                                 <span class="line-detail-db">도시간 경전철</span>
                                             </div>
                                         </a>
                                         <!-- 군천전산선 -->
                                         <a href="군천전산트램트레인.html" class="line-cell-db">
                                             <div class="line-color-bar-db bg-tram"></div>
                                             <div class="line-text-db">
                                                 <span class="line-name-db">군천전산선</span>
                                                 <span class="line-detail-db">도시간 트램</span>
                                             </div>
                                         </a>
                                         <!-- 빈칸 2개 -->
                                         <div class="line-cell-db empty-cell-db"></div>
                                         <div class="line-cell-db empty-cell-db"></div>
                                     </div>
                                     
                                     <div style="font-size: 11px; text-align: center; margin-bottom: 5px;">
                                         개통된 덕빈북도 전철 노선은 <b><a href="덕북권_전철.html" style="color:#000;">덕북권 전철 노선</a></b> 참조
                                     </div>
                                     
                                     <!-- 하단 범례 -->
                                     <div class="footnote-box-db">
                                         ※ 상기 노선별 개통 시기는 효빈광역시, 덕빈북도 및 국가 계획에 따르며 변동될 수 있음.<br>
                                         ※ 사업 진행 단계(예타 조사, 실시계획 승인 등)에 따라 일정이 지연될 가능성이 높음.
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
        // 혹시 비동기 로드로 currentScript를 못 잡을 경우를 대비한 폴백
        const mapZones = document.querySelectorAll('#deokbin-unopened-map, #deokbuk-transit-zone');
        if (mapZones.length > 0) {
            mapZones[mapZones.length - 1].insertAdjacentHTML('beforeend', templateHTML);
        }
    }
})();