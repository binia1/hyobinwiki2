document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-disabled-welfare-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 장애인종합복지관 틀 전용 독립 CSS */
            .hb-disabled-container { border: 1px solid #ccc; margin: 15px 0; border-radius: 4px; overflow: hidden; background: #fff; font-family: 'Noto Sans KR', sans-serif; }
            .hb-disabled-summary { list-style: none; cursor: pointer; user-select: none; display: block; }
            .hb-disabled-summary::-webkit-details-marker { display: none; }

            /* 메인 헤더 (로고 크기 확대 및 디자인 정돈) */
            .hb-disabled-header { background-color: #7777AA; color: white; padding: 14px; display: flex; align-items: center; justify-content: center; gap: 12px; border-bottom: 2px solid #555588; }
            .hb-disabled-header img { height: 32px; object-fit: contain; } /* 로고 크기 확대 */
            .hb-disabled-title { font-size: 1.25rem; font-weight: 900; letter-spacing: -0.5px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); }

            /* 펼치기·접기 토글 서브바 */
            .hb-disabled-toggle { background-color: #666699; color: #fff; padding: 6px; font-size: 0.85rem; text-align: center; font-weight: bold; border-bottom: 1px solid #ccc; }
            .hb-disabled-toggle:hover { background-color: #555588; }

            /* 4열 테이블 격자 */
            .hb-disabled-table { width: 100%; border-collapse: collapse; text-align: center; margin: 0; table-layout: fixed; font-size: 0.9rem; }
            .hb-disabled-table th, .hb-disabled-table td { border: 1px solid #ccc; padding: 10px 8px; vertical-align: middle; background-color: #fff; color: #333; }
            .hb-disabled-table td:hover { background-color: #f9f9f9; }

            /* 하이퍼링크 스타일 */
            .hb-disabled-link { color: #0022AA; text-decoration: none; font-weight: bold; display: block; width: 100%; }
            .hb-disabled-link:hover { text-decoration: underline; }
            
            /* 빈 칸(-) 처리 */
            .hb-disabled-empty { color: #aaa; }
        </style>

        <details class="hb-disabled-container" open>
            <summary class="hb-disabled-summary">
                <div class="hb-disabled-header">
                    <img alt="효빈광역시" onerror="this.style.display='none'" src="이미지/효빈광역시_흰색로고.webp"/>
                    <span class="hb-disabled-title">효빈광역시 장애인종합복지관</span>
                </div>
                <div class="hb-disabled-toggle">[ 펼치기 · 접기 ]</div>
            </summary>
            
            <table class="hb-disabled-table">
                <tbody>
                    <tr>
                        <td><a href="뇌전장애인종합복지관.html" class="hb-disabled-link">뇌전장애인종합복지관</a></td>
                        <td><a href="마잡장애인종합복지관.html" class="hb-disabled-link">마잡장애인종합복지관</a></td>
                        <td><a href="진백장애인종합복지관.html" class="hb-disabled-link">진백장애인종합복지관</a></td>
                        <td><a href="우이장애인종합복지관.html" class="hb-disabled-link">우이장애인종합복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="당선장애인종합복지관.html" class="hb-disabled-link">당선장애인종합복지관</a></td>
                        <td><a href="평당장애인종합복지관.html" class="hb-disabled-link">평당장애인종합복지관</a></td>
                        <td><a href="칠심장애인종합복지관.html" class="hb-disabled-link">칠심장애인종합복지관</a></td>
                        <td><a href="천왕사장애인종합복지관.html" class="hb-disabled-link">천왕사장애인종합복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="도변장애인종합복지관.html" class="hb-disabled-link">도변장애인종합복지관</a></td>
                        <td><a href="서목장애인종합복지관.html" class="hb-disabled-link">서목장애인종합복지관</a></td>
                        <td class="hb-disabled-empty">-</td>
                        <td class="hb-disabled-empty">-</td>
                    </tr>
                </tbody>
            </table>
        </details>
        `;
    }
});