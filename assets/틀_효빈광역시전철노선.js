(function() {
    // 1. 스타일 (CSS) 자동 주입
    if (!document.getElementById('style-template-opened-map')) {
        const style = document.createElement('style');
        style.id = 'style-template-opened-map';
        style.textContent = `
            /* [틀:효빈광역시 전철 노선] 전용 스타일 */
            .wiki-template-box {
                border: 2px solid #7777AA;
                border-radius: 6px;
                overflow: hidden;
                margin: 20px auto;
                max-width: 600px; /* 너비 적절히 조정 */
                background: #fff;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                font-family: 'Apple SD Gothic Neo', sans-serif;
            }

            .template-header {
                background-color: #7777AA;
                color: white;
                padding: 10px;
                text-align: center;
                font-weight: bold;
                font-size: 1.1rem;
            }
            .template-header a { color: white; text-decoration: none; }
            .template-header a:hover { text-decoration: underline; }

            .template-details { width: 100%; }
            .template-summary {
                cursor: pointer;
                padding: 8px;
                font-size: 0.85rem;
                color: #555;
                background-color: #f0f0f0;
                text-align: center;
                list-style: none;
                border-bottom: 1px solid #ddd;
            }
            .template-summary::-webkit-details-marker { display: none; }
            .template-summary:hover { background-color: #e0e0e0; }

            .grid-layout {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                border: 1px solid #ddd;
                background-color: #f9f9f9;
            }

            .color-bar { height: 8px; width: 100%; }

            .text-cell {
                padding: 12px 5px;
                text-align: center;
                font-size: 15px;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: white;
                border-right: 1px solid #eee;
                border-bottom: 1px solid #eee;
                color: #0275d8;
                text-decoration: none;
                transition: background 0.2s;
                min-height: 45px;
            }
            .text-cell:hover { background-color: #f0f7ff; text-decoration: underline; }
            
            .footer-note {
                grid-column: 1 / -1; /* 전체 너비 차지 */
                padding: 10px;
                text-align: center;
                font-size: 0.85rem;
                color: gray;
                background-color: #fff;
                border-top: 1px solid #eee;
            }
            .footer-note a { color: gray; text-decoration: none; font-weight: bold; }
            .footer-note a:hover { text-decoration: underline; color: #555; }
        `;
        document.head.appendChild(style);
    }

    // 2. HTML 템플릿 (개통 노선도 내용)
    // 하단 링크를 '틀_미개통노선도_설명문서.html'로 정확히 연결함
    const templateHTML = `
        <div class="wiki-template-box">
            <!-- 제목 (헤더) -->
            <div class="template-header">
                <a href="효빈도시철도.html">효빈광역시 전철 노선</a>
            </div>

            <!-- 접기/펼치기 영역 -->
            <details class="template-details" open>
                <summary class="template-summary">[ 펼치기 · 접기 ]</summary>
                
                <div class="grid-layout">
                    <!-- 1행: 색상 띠 (1~4호선) -->
                    <div class="color-bar" style="background-color: #0077DD;"></div>
                    <div class="color-bar" style="background-color: #00CCAA;"></div>
                    <div class="color-bar" style="background-color: #FFCC11;"></div>
                    <div class="color-bar" style="background-color: #FF5522;"></div>

                    <!-- 2행: 노선명 (1~4호선) -->
                    <a href="1호선.html" class="text-cell" style="color:#0077DD;">1호선</a>
                    <a href="2호선.html" class="text-cell" style="color:#00CCAA;">2호선</a>
                    <a href="3호선.html" class="text-cell" style="color:#FFCC11;">3호선</a>
                    <a href="4호선.html" class="text-cell" style="color:#FF5522;">4호선</a>

                    <!-- 3행: 색상 띠 (5~8호선) -->
                    <div class="color-bar" style="background-color: #EE0022;"></div>
                    <div class="color-bar" style="background-color: #881188;"></div>
                    <div class="color-bar" style="background-color: #FF8899;"></div>
                    <div class="color-bar" style="background-color: #9856FF;"></div>

                    <!-- 4행: 노선명 (5~8호선) -->
                    <a href="5호선.html" class="text-cell" style="color:#EE0022;">5호선</a>
                    <a href="6호선.html" class="text-cell" style="color:#881188;">6호선</a>
                    <a href="7호선.html" class="text-cell" style="color:#FF8899;">7호선</a>
                    <a href="8호선.html" class="text-cell" style="color:#9856FF;">8호선</a>

                    <!-- 5행: 색상 띠 (빈효선 등) -->
                    <div class="color-bar" style="background-color: #6677CC;"></div>
                    <div class="color-bar" style="background-color: transparent;"></div>
                    <div class="color-bar" style="background-color: transparent;"></div>
                    <div class="color-bar" style="background-color: transparent;"></div>

                    <!-- 6행: 노선명 (빈효선 등) -->
                    <a href="빈효광역선.html" class="text-cell" style="color:#6677CC; letter-spacing: -1px;">빈효선광역전철</a>
                    <div class="text-cell" style="cursor: default; color: inherit;"></div>
                    <div class="text-cell" style="cursor: default; color: inherit;"></div>
                    <div class="text-cell" style="cursor: default; color: inherit;"></div>

                    <!-- 하단 문구 (링크 연결 완료) -->
                    <div class="footer-note">
                        계획·건설 중인 노선은 
                        <a href="효빈광역시_미개통_노선.html">[틀:효빈광역시 전철 노선/미개통]</a> 참조
                    </div>
                </div>
            </details>
        </div>
    `;

    // 3. HTML 삽입
    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();