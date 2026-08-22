document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-social-welfare-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 사회복지관 틀 전용 독립 CSS */
            .hb-social-container { border: 1px solid #ccc; margin: 15px 0; border-radius: 4px; overflow: hidden; background: #fff; font-family: 'Noto Sans KR', sans-serif; }
            .hb-social-summary { list-style: none; cursor: pointer; user-select: none; display: block; }
            .hb-social-summary::-webkit-details-marker { display: none; }

            /* 메인 헤더 (로고 크기 확대 및 디자인 정돈) */
            .hb-social-header { background-color: #7777AA; color: white; padding: 14px; display: flex; align-items: center; justify-content: center; gap: 12px; border-bottom: 2px solid #555588; }
            .hb-social-header img { height: 32px; object-fit: contain; } /* 로고 크기 확대 */
            .hb-social-title { font-size: 1.25rem; font-weight: 900; letter-spacing: -0.5px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); }

            /* 펼치기·접기 토글 서브바 */
            .hb-social-toggle { background-color: #666699; color: #fff; padding: 6px; font-size: 0.85rem; text-align: center; font-weight: bold; border-bottom: 1px solid #ccc; }
            .hb-social-toggle:hover { background-color: #555588; }

            /* 4열 테이블 격자 */
            .hb-social-table { width: 100%; border-collapse: collapse; text-align: center; margin: 0; table-layout: fixed; font-size: 0.9rem; }
            .hb-social-table th, .hb-social-table td { border: 1px solid #ccc; padding: 10px 8px; vertical-align: middle; background-color: #fff; color: #333; }
            .hb-social-table td:hover { background-color: #f9f9f9; }

            /* 하이퍼링크 스타일 */
            .hb-social-link { color: #0022AA; text-decoration: none; font-weight: bold; display: block; width: 100%; }
            .hb-social-link:hover { text-decoration: underline; }
        </style>

        <details class="hb-social-container" open>
            <summary class="hb-social-summary">
                <div class="hb-social-header">
                    <img alt="효빈광역시" onerror="this.style.display='none'" src="이미지/효빈광역시_흰색로고.webp"/>
                    <span class="hb-social-title">효빈광역시 사회복지관</span>
                </div>
                <div class="hb-social-toggle">[ 펼치기 · 접기 ]</div>
            </summary>
            
            <table class="hb-social-table">
                <tbody>
                    <tr>
                        <td><a href="조유종합사회복지관.html" class="hb-social-link">조유종합사회복지관</a></td>
                        <td><a href="효빈종합사회복지관.html" class="hb-social-link">효빈종합사회복지관</a></td>
                        <td><a href="덕현종합사회복지관.html" class="hb-social-link">덕현종합사회복지관</a></td>
                        <td><a href="사가당종합사회복지관.html" class="hb-social-link">사가당종합사회복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="당선종합사회복지관.html" class="hb-social-link">당선종합사회복지관</a></td>
                        <td><a href="과진종합사회복지관.html" class="hb-social-link">과진종합사회복지관</a></td>
                        <td><a href="효빈복지대학교_종합사회복지관.html" class="hb-social-link">효빈복지대학교 종합사회복지관</a></td>
                        <td><a href="효빈대학교_종합사회복지관.html" class="hb-social-link">효빈대학교 종합사회복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="고송종합사회복지관.html" class="hb-social-link">고송종합사회복지관</a></td>
                        <td><a href="토모리종합사회복지관.html" class="hb-social-link">토모리종합사회복지관</a></td>
                        <td><a href="사능종합사회복지관.html" class="hb-social-link">사능종합사회복지관</a></td>
                        <td><a href="추산종합사회복지관.html" class="hb-social-link">추산종합사회복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="중수종합사회복지관.html" class="hb-social-link">중수종합사회복지관</a></td>
                        <td><a href="오내종합사회복지관.html" class="hb-social-link">오내종합사회복지관</a></td>
                        <td><a href="항동종합사회복지관.html" class="hb-social-link">항동종합사회복지관</a></td>
                        <td><a href="어간종합사회복지관.html" class="hb-social-link">어간종합사회복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="월천종합사회복지관.html" class="hb-social-link">월천종합사회복지관</a></td>
                        <td><a href="곽산종합사회복지관.html" class="hb-social-link">곽산종합사회복지관</a></td>
                        <td><a href="평당종합사회복지관.html" class="hb-social-link">평당종합사회복지관</a></td>
                        <td><a href="청엽종합사회복지관.html" class="hb-social-link">청엽종합사회복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="우택종합사회복지관.html" class="hb-social-link">우택종합사회복지관</a></td>
                        <td><a href="우전종합사회복지관.html" class="hb-social-link">우전종합사회복지관</a></td>
                        <td><a href="비마종합사회복지관.html" class="hb-social-link">비마종합사회복지관</a></td>
                        <td><a href="마잡종합사회복지관.html" class="hb-social-link">마잡종합사회복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="등도종합사회복지관.html" class="hb-social-link">등도종합사회복지관</a></td>
                        <td><a href="창전종합사회복지관.html" class="hb-social-link">창전종합사회복지관</a></td>
                        <td><a href="칠심종합사회복지관.html" class="hb-social-link">칠심종합사회복지관</a></td>
                        <td><a href="동곡종합사회복지관.html" class="hb-social-link">동곡종합사회복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="팔조종합사회복지관.html" class="hb-social-link">팔조종합사회복지관</a></td>
                        <td><a href="안천종합사회복지관.html" class="hb-social-link">안천종합사회복지관</a></td>
                        <td><a href="당가종합사회복지관.html" class="hb-social-link">당가종합사회복지관</a></td>
                        <td><a href="이자종합사회복지관.html" class="hb-social-link">이자종합사회복지관</a></td>
                    </tr>
                    <tr>
                        <td><a href="팔망성종합사회복지관.html" class="hb-social-link">팔망성종합사회복지관</a></td>
                        <td><a href="하가종합사회복지관.html" class="hb-social-link">하가종합사회복지관</a></td>
                        <td><a href="탄성종합사회복지관.html" class="hb-social-link">탄성종합사회복지관</a></td>
                        <td><a href="고해종합사회복지관.html" class="hb-social-link">고해종합사회복지관</a></td>
                    </tr>
                </tbody>
            </table>
        </details>
        `;
    }
});