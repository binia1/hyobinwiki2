(function() {
    document.addEventListener("DOMContentLoaded", function() {
        const container = document.getElementById("korea-river-nav-container");
        if (!container) return;

        const htmlContent = `
        <style>
            .korea-river-table {
                width: 100%;
                border-collapse: collapse;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                font-size: 13px;
                border: 2px solid #0068B7;
                margin-bottom: 15px;
            }
            .korea-river-table th, .korea-river-table td {
                border: 1px solid #e0e0e0;
                padding: 8px 10px;
                text-align: center;
                vertical-align: middle;
            }
            .korea-river-header {
                background-color: #0068B7; /* 나무위키 하천 틀 기본 파란색 */
                color: #ffffff;
                font-weight: bold;
                font-size: 15px;
                padding: 10px;
            }
            .korea-river-header-inner {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
            .korea-river-icon {
                border: 1px solid white;
                border-radius: 4px;
                padding: 2px 4px;
                display: inline-block;
            }
            .korea-river-toggle {
                background-color: #ffffff;
                color: #333333;
                font-size: 12px;
                font-weight: bold;
                padding: 6px;
                border-bottom: 2px solid #0068B7;
            }
            .korea-river-category {
                background-color: #0068B7;
                color: #ffffff;
                font-weight: bold;
            }
            .korea-river-item {
                background-color: #ffffff;
                width: 33.33%;
            }
            .korea-river-item a {
                color: #0275d8;
                text-decoration: none;
            }
            .korea-river-item a:hover {
                text-decoration: underline;
            }
        </style>
        
        <table class="korea-river-table">
            <tr>
                <td colspan="3" class="korea-river-header">
                    <div class="korea-river-header-inner">
                        <span class="korea-river-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                <path d="M2 6c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3"></path>
                                <path d="M2 12c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3"></path>
                                <path d="M2 18c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3"></path>
                            </svg>
                        </span>
                        <span>대한민국<br>하천</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="3" class="korea-river-toggle">[ 펼치기 · 접기 ]</td>
            </tr>
            
            <!-- 한강권역 -->
            <tr>
                <td colspan="3" class="korea-river-category">한강권역</td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="한강수계.html">한강수계</a></td>
                <td class="korea-river-item"><a href="안성천수계.html">안성천수계</a></td>
                <td class="korea-river-item"><a href="양양남대천수계.html">양양남대천수계</a></td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="삼척오십천수계.html">삼척오십천수계</a></td>
                <td class="korea-river-item"><a href="강릉남대천수계.html">강릉남대천수계</a></td>
                <td class="korea-river-item"><a href="한강서해권수계.html">한강서해권수계</a></td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="한강동해권수계.html">한강동해권수계</a></td>
                <td class="korea-river-item"></td>
                <td class="korea-river-item"></td>
            </tr>

            <!-- 낙동강권역 -->
            <tr>
                <td colspan="3" class="korea-river-category">낙동강권역</td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="낙동강수계.html">낙동강수계</a></td>
                <td class="korea-river-item"><a href="형산강수계.html">형산강수계</a></td>
                <td class="korea-river-item"><a href="태화강수계.html">태화강수계</a></td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="영덕오십천수계.html">영덕오십천수계</a></td>
                <td class="korea-river-item"><a href="서낙동강수계.html">서낙동강수계</a></td>
                <td class="korea-river-item"><a href="회야강수계.html">회야강수계</a></td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="낙동강동해권수계.html">낙동강동해권수계</a></td>
                <td class="korea-river-item"><a href="낙동강남해권수계.html">낙동강남해권수계</a></td>
                <td class="korea-river-item"></td>
            </tr>

            <!-- 금강권역 -->
            <tr>
                <td colspan="3" class="korea-river-category">금강권역</td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="금강수계.html">금강수계</a></td>
                <td class="korea-river-item"><a href="삽교천수계.html">삽교천수계</a></td>
                <td class="korea-river-item"><a href="만경강수계.html">만경강수계</a></td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="동진강수계.html">동진강수계</a></td>
                <td class="korea-river-item"><a href="금강서해권수계.html">금강서해권수계</a></td>
                <td class="korea-river-item"></td>
            </tr>

            <!-- 팔천강권역 (새로 추가된 효빈/덕빈 권역) -->
            <tr>
                <td colspan="3" class="korea-river-category">팔천강권역</td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="팔천강수계.html">팔천강수계</a></td>
                <td class="korea-river-item"><a href="곡천강수계.html">곡천강수계</a></td>
                <td class="korea-river-item"><a href="상만강수계.html">상만강수계</a></td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="약궁천수계.html">약궁천수계</a></td>
                <td class="korea-river-item"><a href="팔천강서남해권수계.html">팔천강서남해권수계</a></td>
                <td class="korea-river-item"></td>
            </tr>

            <!-- 섬진강권역 -->
            <tr>
                <td colspan="3" class="korea-river-category">섬진강권역</td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="섬진강수계.html">섬진강수계</a></td>
                <td class="korea-river-item"><a href="섬진강남해권수계.html">섬진강남해권수계</a></td>
                <td class="korea-river-item"></td>
            </tr>

            <!-- 영산강권역 -->
            <tr>
                <td colspan="3" class="korea-river-category">영산강권역</td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="영산강수계.html">영산강수계</a></td>
                <td class="korea-river-item"><a href="탐진강수계.html">탐진강수계</a></td>
                <td class="korea-river-item"><a href="영산강서해권수계.html">영산강서해권수계</a></td>
            </tr>

            <!-- 제주도권역 -->
            <tr>
                <td colspan="3" class="korea-river-category">제주도권역</td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="서북부하천수계.html">서북부 하천 수계</a></td>
                <td class="korea-river-item"><a href="한라산수계.html">한라산수계</a></td>
                <td class="korea-river-item"><a href="동부하천수계.html">동부 하천 수계</a></td>
            </tr>
            <tr>
                <td class="korea-river-item"><a href="서귀포수계.html">서귀포수계</a></td>
                <td class="korea-river-item"><a href="남원수계.html">남원수계</a></td>
                <td class="korea-river-item"></td>
            </tr>
        </table>
        `;
        
        container.innerHTML = htmlContent;
    });
})();