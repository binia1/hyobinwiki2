document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-family-center-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 가족센터 틀 전용 독립 CSS */
            .hb-family-container { border: 1px solid #ccc; margin: 15px 0; border-radius: 4px; overflow: hidden; background: #fff; font-family: 'Noto Sans KR', sans-serif; }
            .hb-family-summary { list-style: none; cursor: pointer; user-select: none; display: block; }
            .hb-family-summary::-webkit-details-marker { display: none; }

            /* 메인 헤더 (로고 크기 확대 및 디자인 정돈) */
            .hb-family-header { background-color: #7777AA; color: white; padding: 14px; display: flex; align-items: center; justify-content: center; gap: 12px; border-bottom: 2px solid #555588; }
            .hb-family-header img { height: 32px; object-fit: contain; } /* 로고 크기 확대 */
            .hb-family-title { font-size: 1.25rem; font-weight: 900; letter-spacing: -0.5px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); }

            /* 펼치기·접기 토글 서브바 */
            .hb-family-toggle { background-color: #666699; color: #fff; padding: 6px; font-size: 0.85rem; text-align: center; font-weight: bold; border-bottom: 1px solid #ccc; }
            .hb-family-toggle:hover { background-color: #555588; }

            /* 4열 테이블 격자 */
            .hb-family-table { width: 100%; border-collapse: collapse; text-align: center; margin: 0; table-layout: fixed; font-size: 0.9rem; }
            .hb-family-table th, .hb-family-table td { border: 1px solid #ccc; padding: 10px 8px; vertical-align: middle; background-color: #fff; color: #333; }
            .hb-family-table td:hover { background-color: #f9f9f9; }

            /* 하이퍼링크 스타일 */
            .hb-family-link { color: #0022AA; text-decoration: none; font-weight: bold; display: block; width: 100%; }
            .hb-family-link:hover { text-decoration: underline; }
            
            /* 빈 칸(-) 처리 */
            .hb-family-empty { color: #aaa; }
        </style>

        <details class="hb-family-container" open>
            <summary class="hb-family-summary">
                <div class="hb-family-header">
                    <img alt="효빈광역시" onerror="this.style.display='none'" src="이미지/효빈광역시_흰색로고.webp"/>
                    <span class="hb-family-title">효빈광역시 가족센터</span>
                </div>
                <div class="hb-family-toggle">[ 펼치기 · 접기 ]</div>
            </summary>
            
            <table class="hb-family-table">
                <tbody>
                    <tr>
                        <td><a href="효빈시_중구_가족센터.html" class="hb-family-link">효빈시 중구 가족센터</a></td>
                        <td><a href="효빈시_동구_가족센터.html" class="hb-family-link">효빈시 동구 가족센터</a></td>
                        <td><a href="효빈시_서구_가족센터.html" class="hb-family-link">효빈시 서구 가족센터</a></td>
                        <td><a href="효빈시_남구_가족센터.html" class="hb-family-link">효빈시 남구 가족센터</a></td>
                    </tr>
                    <tr>
                        <td><a href="효빈시_북구_가족센터.html" class="hb-family-link">효빈시 북구 가족센터</a></td>
                        <td><a href="효빈시_북구_가족센터_중수분소.html" class="hb-family-link">효빈시 북구 가족센터 중수분소</a></td>
                        <td><a href="효빈시_안천구_가족센터.html" class="hb-family-link">효빈시 안천구 가족센터</a></td>
                        <td><a href="효빈시_안천구_가족센터_이자분소.html" class="hb-family-link">효빈시 안천구 가족센터 이자분소</a></td>
                    </tr>
                    <tr>
                        <td><a href="효빈시_창전구_가족센터.html" class="hb-family-link">효빈시 창전구 가족센터</a></td>
                        <td><a href="효빈시_청엽구_가족센터.html" class="hb-family-link">효빈시 청엽구 가족센터</a></td>
                        <td><a href="효빈시_탄성군_가족센터.html" class="hb-family-link">효빈시 탄성군 가족센터</a></td>
                        <td class="hb-family-empty">-</td>
                    </tr>
                </tbody>
            </table>
        </details>
        `;
    }
});