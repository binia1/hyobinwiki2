document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-special-facilities-nav-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 특수 시설 틀 전용 독립 CSS */
            .hb-special-container { border: 1px solid #ccc; margin: 15px 0; border-radius: 4px; overflow: hidden; background: #fff; font-family: 'Noto Sans KR', sans-serif; }
            .hb-special-summary { list-style: none; cursor: pointer; user-select: none; display: block; }
            .hb-special-summary::-webkit-details-marker { display: none; }

            /* 메인 헤더 (로고 크기 확대 및 디자인 정돈) */
            .hb-special-header { background-color: #7777AA; color: white; padding: 14px; display: flex; align-items: center; justify-content: center; gap: 12px; border-bottom: 2px solid #555588; }
            .hb-special-header img { height: 32px; object-fit: contain; } /* 로고 크기 확대 */
            .hb-special-title { font-size: 1.25rem; font-weight: 900; letter-spacing: -0.5px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2); }

            /* 펼치기·접기 토글 서브바 */
            .hb-special-toggle { background-color: #666699; color: #fff; padding: 6px; font-size: 0.85rem; text-align: center; font-weight: bold; border-bottom: 1px solid #ccc; }
            .hb-special-toggle:hover { background-color: #555588; }

            /* 4열 테이블 격자 */
            .hb-special-table { width: 100%; border-collapse: collapse; text-align: center; margin: 0; table-layout: fixed; font-size: 0.9rem; }
            .hb-special-table th, .hb-special-table td { border: 1px solid #ccc; padding: 10px 8px; vertical-align: middle; background-color: #fff; color: #333; }
            .hb-special-table td:hover { background-color: #f9f9f9; }

            /* 하이퍼링크 스타일 */
            .hb-special-link { color: #0022AA; text-decoration: none; font-weight: bold; display: block; width: 100%; }
            .hb-special-link:hover { text-decoration: underline; }
            
            /* 빈 칸(-) 처리 */
            .hb-special-empty { color: #aaa; }
        </style>

        <details class="hb-special-container" open>
            <summary class="hb-special-summary">
                <div class="hb-special-header">
                    <img alt="효빈광역시" onerror="this.style.display='none'" src="이미지/효빈광역시_흰색로고.webp"/>
                    <span class="hb-special-title">효빈광역시 특수 시설</span>
                </div>
                <div class="hb-special-toggle">[ 펼치기 · 접기 ]</div>
            </summary>
            
            <table class="hb-special-table">
                <tbody>
                    <tr>
                        <td><a href="궤도랑.html" class="hb-special-link">궤도랑</a></td>
                        <td><a href="스타더스트_콤플렉스.html" class="hb-special-link">스타더스트 콤플렉스</a></td>
                        <td><a href="한바다의_품.html" class="hb-special-link">한바다의 품</a></td>
                        <td><a href="빛의_전당.html" class="hb-special-link">빛의 전당</a></td>
                    </tr>
                    <tr>
                        <td><a href="파스텔_옐로우_콤플렉스.html" class="hb-special-link">파스텔 옐로우 콤플렉스</a></td>
                        <td><a href="크로스비트_아카데미.html" class="hb-special-link">크로스비트 아카데미</a></td>
                        <td><a href="효빈_아카이브.html" class="hb-special-link">효빈 아카이브</a></td>
                        <td><a href="소하_비전_센터.html" class="hb-special-link">소하 비전 센터</a></td>
                    </tr>
                    <tr>
                        <td><a href="다로나_&_유리아_테크니컬_랩.html" class="hb-special-link">다로나 & 유리아 테크니컬 랩</a></td>
                        <td><a href="하루빈의_숲_&_F학점_쉼터.html" class="hb-special-link">하루빈의 숲 & F학점 쉼터</a></td>
                        <td class="hb-special-empty">-</td>
                        <td class="hb-special-empty">-</td>
                    </tr>
                </tbody>
            </table>
        </details>
        `;
    }
});