document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-senior-center-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 노인종합복지관 틀 전용 독립 CSS */
            .hb-senior-container { border: 1px solid #ccc; margin: 15px 0; border-radius: 4px; overflow: hidden; background: #fff; font-family: 'Noto Sans KR', sans-serif; }
            .hb-senior-summary { list-style: none; cursor: pointer; user-select: none; display: block; }
            .hb-senior-summary::-webkit-details-marker { display: none; }

            /* 메인 헤더 (로고 크기 확대 및 디자인 정돈) */
            .hb-senior-header { background-color: #7777AA; color: white; padding: 14px; display: flex; align-items: center; justify-content: center; gap: 12px; border-bottom: 2px solid #555588; }
            .hb-senior-header img { height: 32px; object-fit: contain; } /* 로고 크기 20px -> 32px로 확대 */
            .hb-senior-title { font-size: 1.25rem; font-weight: 900; letter-spacing: -0.5px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); }

            /* 펼치기·접기 토글 서브바 */
            .hb-senior-toggle { background-color: #666699; color: #fff; padding: 6px; font-size: 0.85rem; text-align: center; font-weight: bold; border-bottom: 1px solid #ccc; }
            .hb-senior-toggle:hover { background-color: #555588; }

            /* 4열 테이블 격자 */
            .hb-senior-table { width: 100%; border-collapse: collapse; text-align: center; margin: 0; table-layout: fixed; font-size: 0.9rem; }
            .hb-senior-table th, .hb-senior-table td { border: 1px solid #ccc; padding: 10px 8px; vertical-align: middle; background-color: #fff; color: #333; }
            .hb-senior-table td:hover { background-color: #f9f9f9; }

            /* 하이퍼링크 스타일 */
            .hb-senior-link { color: #0022AA; text-decoration: none; font-weight: bold; display: block; width: 100%; }
            .hb-senior-link:hover { text-decoration: underline; }
            
            /* 빈 칸(-) 처리 */
            .hb-senior-empty { color: #aaa; }
        </style>

        <details class="hb-senior-container" open>
            <summary class="hb-senior-summary">
                <div class="hb-senior-header">
                    <img alt="효빈광역시" onerror="this.style.display='none'" src="이미지/효빈광역시_흰색로고.webp"/>
                    <span class="hb-senior-title">효빈광역시 노인종합복지관</span>
                </div>
                <div class="hb-senior-toggle">[ 펼치기 · 접기 ]</div>
            </summary>
            
            <table class="hb-senior-table">
                <tbody>
                    <tr>
                        <td><a href="고송노인종합복지관.html" class="hb-senior-link">고송노인종합복지관</a></td>
                        <td><a href="평당노인종합복지관.html" class="hb-senior-link">평당노인종합복지관</a></td>
                        <td><a href="창전노인종합복지관.html" class="hb-senior-link">창전노인종합복지관</a></td>
                        <td><a href="사가당노인종합복지관.html" class="hb-senior-link">사가당노인종합복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="우이노인종합복지관.html" class="hb-senior-link">우이노인종합복지관</a></td>
                        <td><a href="청덕노인종합복지관.html" class="hb-senior-link">청덕노인종합복지관</a></td>
                        <td><a href="팔조노인종합복지관.html" class="hb-senior-link">팔조노인종합복지관</a></td>
                        <td><a href="칠심노인종합복지관.html" class="hb-senior-link">칠심노인종합복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="사복노인종합복지관.html" class="hb-senior-link">사복노인종합복지관</a></td>
                        <td><a href="비마노인종합복지관.html" class="hb-senior-link">비마노인종합복지관</a></td>
                        <td><a href="추산노인종합복지관.html" class="hb-senior-link">추산노인종합복지관</a></td>
                        <td><a href="과진노인종합복지관.html" class="hb-senior-link">과진노인종합복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="청엽노인종합복지관.html" class="hb-senior-link">청엽노인종합복지관</a></td>
                        <td><a href="미성노인종합복지관.html" class="hb-senior-link">미성노인종합복지관</a></td>
                        <td><a href="당선노인종합복지관.html" class="hb-senior-link">당선노인종합복지관</a></td>
                        <td><a href="조유노인종합복지관.html" class="hb-senior-link">조유노인종합복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="하가노인종합복지관.html" class="hb-senior-link">하가노인종합복지관</a></td>
                        <td><a href="팔망성노인종합복지관.html" class="hb-senior-link">팔망성노인종합복지관</a></td>
                        <td><a href="동리노인종합복지관.html" class="hb-senior-link">동리노인종합복지관</a></td>
                        <td><a href="쌍엽노인종합복지관.html" class="hb-senior-link">쌍엽노인종합복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="하구노인종합복지관.html" class="hb-senior-link">하구노인종합복지관</a></td>
                        <td><a href="서목노인종합복지관.html" class="hb-senior-link">서목노인종합복지관</a></td>
                        <td><a href="도변노인종합복지관.html" class="hb-senior-link">도변노인종합복지관</a></td>
                        <td><a href="흑택노인종합복지관.html" class="hb-senior-link">흑택노인종합복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="뇌전노인종합복지관.html" class="hb-senior-link">뇌전노인종합복지관</a></td>
                        <td><a href="천왕사노인종합복지관.html" class="hb-senior-link">천왕사노인종합복지관</a></td>
                        <td><a href="중수노인종합복지관.html" class="hb-senior-link">중수노인종합복지관</a></td>
                        <td><a href="어간노인종합복지관.html" class="hb-senior-link">어간노인종합복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="항동노인종합복지관.html" class="hb-senior-link">항동노인종합복지관</a></td>
                        <td class="hb-senior-empty">-</td>
                        <td class="hb-senior-empty">-</td>
                        <td class="hb-senior-empty">-</td>
                    </tr>
                </tbody>
            </table>
        </details>
        `;
    }
});