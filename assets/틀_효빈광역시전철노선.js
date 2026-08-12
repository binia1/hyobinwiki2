(function() {
    // 1. 기존 쓰레기 스타일 제거 및 완벽한 테이블 스타일 주입
    const oldStyle = document.getElementById('style-template-opened-map');
    if (oldStyle) oldStyle.remove();

    const style = document.createElement('style');
    style.id = 'style-template-opened-map';
    style.textContent = `
        .wiki-hb-container {
            width: 100%;
            max-width: 850px;
            margin: 20px auto;
            font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
            color: #333;
        }
        .wiki-hb-table {
            width: 100% !important;
            border-collapse: collapse !important;
            border: 1px solid #ccc !important;
            text-align: center !important;
            background-color: #ffffff !important;
        }
        .wiki-hb-table th, .wiki-hb-table td {
            border: 1px solid #ccc !important;
            vertical-align: middle !important;
            padding: 0 !important; /* 색상 띠를 위해 기본 패딩 제거 */
        }
        
        /* 최상단 헤더 (흰 바탕, 검은 글씨) */
        .wiki-hb-header {
            padding: 12px !important;
            font-size: 16px !important;
            font-weight: 900 !important;
            background-color: #ffffff !important;
            color: #000000 !important;
        }

        /* 셀 상단 노선 색상 띠 */
        .hb-color-bar {
            height: 6px;
            width: 100%;
        }
        
        /* 링크 텍스트 박스 */
        .hb-text-box {
            padding: 15px 5px !important;
            background-color: #ffffff !important;
        }
        
        /* 링크 기본 색상 (사진과 동일하게 파란색 통일) */
        .hb-link {
            font-size: 15px !important;
            font-weight: bold !important;
            color: #0275d8 !important; 
            text-decoration: none !important;
        }
        .hb-link:hover {
            text-decoration: underline !important;
        }
        
        /* 하단 설명 및 권역 로우 */
        .hb-footer-row {
            padding: 10px !important;
            font-size: 12.5px !important;
            color: #555555 !important;
            background-color: #ffffff !important;
        }
    `;
    document.head.appendChild(style);

    // 2. image_2.png와 100% 동일한 HTML 테이블 템플릿
    const templateHTML = `
        <div class="wiki-hb-container" id="hyobin-opened-map">
            <table class="wiki-hb-table">
                <tbody>
                    <!-- 최상단 타이틀 -->
                    <tr>
                        <th colspan="4" class="wiki-hb-header">효빈권 전철 노선</th>
                    </tr>
                    
                    <!-- 1행: 1호선 ~ 4호선 -->
                    <tr>
                        <td style="width: 25%;">
                            <div class="hb-color-bar" style="background-color: #0077DD;"></div>
                            <div class="hb-text-box"><a href="1호선.html" class="hb-link">1호선</a></div>
                        </td>
                        <td style="width: 25%;">
                            <div class="hb-color-bar" style="background-color: #00CCAA;"></div>
                            <div class="hb-text-box"><a href="2호선.html" class="hb-link">2호선</a></div>
                        </td>
                        <td style="width: 25%;">
                            <div class="hb-color-bar" style="background-color: #FFCC11;"></div>
                            <div class="hb-text-box"><a href="3호선.html" class="hb-link">3호선</a></div>
                        </td>
                        <td style="width: 25%;">
                            <div class="hb-color-bar" style="background-color: #FF5522;"></div>
                            <div class="hb-text-box"><a href="4호선.html" class="hb-link">4호선</a></div>
                        </td>
                    </tr>

                    <!-- 2행: 5호선 ~ 8호선 -->
                    <tr>
                        <td style="width: 25%;">
                            <div class="hb-color-bar" style="background-color: #EE0022;"></div>
                            <div class="hb-text-box"><a href="5호선.html" class="hb-link">5호선</a></div>
                        </td>
                        <td style="width: 25%;">
                            <div class="hb-color-bar" style="background-color: #881188;"></div>
                            <div class="hb-text-box"><a href="6호선.html" class="hb-link">6호선</a></div>
                        </td>
                        <td style="width: 25%;">
                            <div class="hb-color-bar" style="background-color: #FF8899;"></div>
                            <div class="hb-text-box"><a href="7호선.html" class="hb-link">7호선</a></div>
                        </td>
                        <td style="width: 25%;">
                            <div class="hb-color-bar" style="background-color: #9856FF;"></div>
                            <div class="hb-text-box"><a href="8호선.html" class="hb-link">8호선</a></div>
                        </td>
                    </tr>

                    <!-- 3행: 빈효선광역전철 (전체 너비 병합) -->
                    <tr>
                        <td colspan="4">
                            <div class="hb-color-bar" style="background-color: #6677CC;"></div>
                            <div class="hb-text-box"><a href="빈효광역선.html" class="hb-link">빈효선광역전철</a></div>
                        </td>
                    </tr>

                    <!-- 4행: 미개통 노선 참조 링크 -->
                    <tr>
                        <td colspan="4" class="hb-footer-row">
                            미개통 효빈권 전철 노선은 <a href="효빈광역시_미개통_노선.html" class="hb-link" style="font-size:12.5px !important; font-weight:normal !important;">틀:효빈광역시 전철 노선/미개통</a> 참조
                        </td>
                    </tr>

                    <!-- 5행: 전체 권역 리스트 -->
                    <tr>
                        <td colspan="4" class="hb-footer-row">
                            수도권 · 동남권 · 대구권 · 대전권 · 광주권 · <b><a href="효빈권_전철.html" class="dn-link-v3">효빈권</a></b> · <a href="덕북권_전철.html" class="dn-link-v3">덕북권</a> · <a href="덕남권_전철.html" class="dn-link-v3">덕남권</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    // 3. 기존 중복된 틀 제거 후 깔끔하게 템플릿 삽입
    const existingMaps = document.querySelectorAll('.wiki-template-box, .wiki-hb-container');
    existingMaps.forEach(el => el.remove());

    if (document.currentScript) {
        document.currentScript.insertAdjacentHTML('afterend', templateHTML);
    } else {
        document.body.insertAdjacentHTML('beforeend', templateHTML);
    }
})();