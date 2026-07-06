(function() {
    // 1. 스타일 (CSS) 자동 주입
    // 틀에 필요한 스타일이 문서에 없으면 추가합니다.
    if (!document.getElementById('style-template-unopened-map')) {
        const style = document.createElement('style');
        style.id = 'style-template-unopened-map';
        style.textContent = `
            /* 미개통 노선도 틀 전용 스타일 */
            .wiki-table-container {
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
            .wiki-table-container table {
                width: 100% !important; /* 위키 기본 스타일 덮어쓰기 */
                border-collapse: collapse !important;
                border: none !important;
                margin: 0 !important;
            }
            .wiki-table-container th, .wiki-table-container td {
                border: 1px solid #ccc !important;
                padding: 0 !important;
            }
            .header-cell {
                background-color: #1F2023 !important;
                color: #fff !important;
                padding: 16px !important; /* 여백 대폭 증가 (12px -> 16px) */
                font-size: 1.2rem !important; /* 글자 크기 확대 */
                font-weight: bold;
                border-bottom: 1px solid #000 !important;
                letter-spacing: 0.5px; /* 자간을 살짝 줘서 시원하게 */
            }
            .header-link { color: #fff; text-decoration: none; }
            .header-link:hover { text-decoration: underline; }

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
            .wiki-table-container details[open] summary::before { content: "[ 펼치기 · 접기 ]"; }

            .content-area { padding: 5px 10px 10px 10px; background-color: #fff; }

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
            .badge-scheduled { background-color: #ffcc00; color: #fff; text-shadow: 0 0 2px rgba(0,0,0,0.5); }
            .badge-design { background-color: #FF8000; }
            .badge-promoting { background-color: #cc0000; }
            .badge-planned { background-color: #999; }

            /* 노선 그리드 시스템 */
            .line-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                background-color: #ccc;
            }
            .line-cell {
                background-color: #fff;
                display: flex;
                flex-direction: column;
                text-decoration: none;
                color: #000;
                min-height: 40px;
            }
            .line-cell:hover { background-color: #f9f9f9; }
            .line-color-bar { height: 12px; width: 100%; }
            .line-text {
                padding: 8px 4px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
            .line-name { font-weight: bold; font-size: 14px; }
            .line-detail { font-size: 11px; color: #555; margin-top: 2px; line-height: 1.2; }
            
            .footnote-box {
                font-size: 11px;
                color: #555;
                text-align: left;
                margin-top: 5px;
                padding: 5px;
                border-top: 1px solid #eee;
                line-height: 1.4;
            }

            /* 노선 색상 클래스 */
            .bg-changjeon { background-color: #33aaff; }
            .bg-binhyo { background-color: #6677CC; }
            .bg-line5 { background-color: #EE0022; }
            .bg-line1 { background-color: #0077DD; }
            .bg-line4 { background-color: #FF5522; }
            .bg-gangbin { background-color: #0054A6; }
            .bg-cheongyeop { background-color: #D6D5CA; }
            .bg-ancheon { background-color: #00D3AD; }
            .bg-line9 { background-color: #808080; }
            .bg-line8 { background-color: #9856FF; }
            .empty-cell { background-color: #f0f0f0; }
        `;
        document.head.appendChild(style);
    }

    // 2. HTML 템플릿 (미개통 노선도 틀 내용)
    const templateHTML = `
        <div class="wiki-table-container">
             <table>
                 <thead>
                     <tr>
                         <th class="header-cell">
                             <a href="효빈광역시_미개통_노선.html" class="header-link">효빈광역시 전철 미개통 노선</a>
                         </th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td style="padding: 0;">
                             <details open>
                                 <summary></summary>
                                 <div class="content-area">
                                     
                                     <!-- 1. 건설 중 -->
                                     <div class="status-badge badge-construction">건설 중</div>
                                     <div style="font-size: 11px; display:inline-block; margin-left: 5px;">실착공 기준</div>
                                     
                                     <div class="line-grid">
                                         <!-- 창전선 -->
                                         <a href="창전선.html" class="line-cell">
                                             <div class="line-color-bar bg-changjeon"></div>
                                             <div class="line-text">
                                                 <span class="line-name">창전선</span>
                                                 <span class="line-detail">팔조 - 하성천</span>
                                             </div>
                                         </a>
                                         <!-- 빈효선 -->
                                         <a href="빈효광역선.html" class="line-cell">
                                             <div class="line-color-bar bg-binhyo"></div>
                                             <div class="line-text">
                                                 <span class="line-name">빈효선</span>
                                                 <span class="line-detail">광역전철</span>
                                             </div>
                                         </a>
                                         <!-- 5호선 -->
                                         <a href="5호선.html" class="line-cell">
                                             <div class="line-color-bar bg-line5"></div>
                                             <div class="line-text">
                                                 <span class="line-name">5호선</span>
                                                 <span class="line-detail">포성산 - 하미연장선</span>
                                             </div>
                                         </a>
                                         <!-- 1호선 신설역 -->
                                         <a href="운양역.html" class="line-cell">
                                             <div class="line-color-bar bg-line1"></div>
                                             <div class="line-text">
                                                 <span class="line-name">1호선</span>
                                                 <span class="line-detail">운양역 신설</span>
                                             </div>
                                         </a>
                                     </div>
                                     
                                     <!-- 2. 착공 예정 / 설계 중 -->
                                     <div class="status-badge badge-design">설계 및 추진 중</div>
                                     <div style="font-size: 11px; display:inline-block; margin-left: 5px;">신설 예정 역사 포함</div>
                                     
                                     <div class="line-grid">
                                         <!-- 5호선 덕현중앙역 -->
                                         <a href="덕현중앙역.html" class="line-cell">
                                             <div class="line-color-bar bg-line5"></div>
                                             <div class="line-text">
                                                 <span class="line-name">5호선</span>
                                                 <span class="line-detail">덕현중앙역</span>
                                             </div>
                                         </a>
                                         <!-- 빈효선 덕현중앙역 -->
                                         <a href="덕현중앙역.html" class="line-cell">
                                             <div class="line-color-bar bg-binhyo"></div>
                                             <div class="line-text">
                                                 <span class="line-name">빈효선</span>
                                                 <span class="line-detail">덕현중앙역</span>
                                             </div>
                                         </a>
                                         <!-- 4호선 신설역 -->
                                         <a href="성저역.html" class="line-cell">
                                             <div class="line-color-bar bg-line4"></div>
                                             <div class="line-text">
                                                 <span class="line-name">4호선</span>
                                                 <span class="line-detail">성저역 신설</span>
                                             </div>
                                         </a>
                                         <!-- 빈 칸 -->
                                         <div class="line-cell empty-cell"></div>
                                     </div>
                                     
                                     <!-- 3. 계획 중 -->
                                     <div class="status-badge badge-planned">계획 중</div>
                                     <div style="font-size: 11px; display:inline-block; margin-left: 5px;">국가·도시철도망 구축계획</div>
                                     
                                     <div class="line-grid">
                                         <!-- 강빈선 -->
                                         <a href="강빈선광역철도.html" class="line-cell">
                                             <div class="line-color-bar bg-gangbin"></div>
                                             <div class="line-text">
                                                 <span class="line-name">강빈선</span>
                                                 <span class="line-detail">광역철도</span>
                                             </div>
                                         </a>
                                         <!-- 청엽선 -->
                                         <a href="청엽선.html" class="line-cell">
                                             <div class="line-color-bar bg-cheongyeop"></div>
                                             <div class="line-text">
                                                 <span class="line-name">청엽선</span>
                                                 <span class="line-detail">엽월대 - 청엽</span>
                                             </div>
                                         </a>
                                         <!-- 안천선 -->
                                         <a href="안천선.html" class="line-cell">
                                             <div class="line-color-bar bg-ancheon"></div>
                                             <div class="line-text">
                                                 <span class="line-name">안천선</span>
                                                 <span class="line-detail">당가중앙 - 중앙</span>
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
                                                 <span class="line-detail">약산/천주 연장</span>
                                             </div>
                                         </a>
                                         <!-- 4호선 연장 -->
                                         <a href="4호선.html" class="line-cell">
                                             <div class="line-color-bar bg-line4"></div>
                                             <div class="line-text">
                                                 <span class="line-name">4호선</span>
                                                 <span class="line-detail">약산 연장</span>
                                             </div>
                                         </a>
                                         <!-- 8호선 연장 -->
                                         <a href="8호선.html" class="line-cell">
                                             <div class="line-color-bar bg-line8"></div>
                                             <div class="line-text">
                                                 <span class="line-name">8호선</span>
                                                 <span class="line-detail">신흥 연장</span>
                                             </div>
                                         </a>
                                         <!-- 빈 칸 -->
                                         <div class="line-cell empty-cell"></div>
                                     </div>
                                     
                                     <div style="font-size: 11px; text-align: center; margin-bottom: 5px;">
                                         개통된 효빈광역시 전철 노선은 <b><a href="효빈권 전철 노선.html" style="color:#000;">효빈권 전철 노선</a></b> 참조
                                     </div>
                                     
                                     <!-- 하단 범례 -->
                                     <div class="footnote-box">
                                         ※ <b>1</b> : 사업계획 승인 · <b>2</b> : 실시계획 승인 / <b>3</b> : 기본계획 승인 · <b>4</b> : 실시협약 체결 · <b>5</b> : 중앙투자심사 통과 / <b>6</b> : 예비타당성조사 통과 · <b>7</b> : 민자적격성조사 통과
                                         <br>※ 상기 노선별 개통 시기는 효빈광역시 및 국가 계획에 따르며 변동될 수 있음.
                                     </div>
                                  </div>
                             </details>
                         </td>
                     </tr>
                 </tbody>
             </table>
        </div>
    `;

    // 3. HTML 삽입 (스크립트 태그 바로 뒤에)
    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();