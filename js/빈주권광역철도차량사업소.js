document.addEventListener("DOMContentLoaded", function() {
    // HTML 문서 쪽에 <div id="binju-metro-depots-nav-container"></div> 가 있어야 합니다.
    // 만약 기존에 쓰시던 ID가 있다면 아래 ID 이름을 수정해 주세요.
    const container = document.getElementById("binju-metro-depots-nav-container");
    
    if (container) {
        container.innerHTML = `
        <details class="nav-template" open style="border: 1px solid #ccc; margin: 10px 0; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <summary style="background-color: #7777AA; color: white; padding: 8px; font-weight: bold; cursor: pointer; text-align: center; list-style: none; border-bottom: 1px solid #666699;">
                <span>한국철도공사 빈주권 광역철도 차량사업소</span>
                <div style="font-weight: normal; font-size: 0.85em; margin-top: 2px; color: #eee;">[ 펼치기 · 접기 ]</div>
            </summary>
            <div class="nav-template-content overflow-x-auto">
                <table style="margin:0; width:100%; border-collapse: collapse; text-align: center; font-size: 0.9rem; border: 1px solid #ccc;">
                    <!-- 헤더 부분 -->
                    <tr>
                        <td colspan="2" style="background-color: #0054A6; color: white; padding: 8px; text-align: center; font-weight: bold; border-bottom: 1px solid rgba(255, 255, 255, 0.4);">
                            <a href="빈주광역철도.html" style="color: white; text-decoration: none;">빈주권 광역철도</a>
                        </td>
                    </tr>
                    <!-- 차량기지 목록 (정확한 50:50 분할 및 1px 구분선) -->
                    <tr>
                        <td style="width: 50%; padding: 8px; text-align: center; background-color: #F9F9FA; border: 1px solid #ccc; vertical-align: top;">
                            <a href="풍영차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">풍영</a><sup style="font-size: 0.7em; color: #888;">[중]</sup>
                        </td>
                        <td style="width: 50%; padding: 8px; text-align: center; background-color: #F9F9FA; border: 1px solid #ccc; vertical-align: top;">
                            <a href="계성차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">계성</a><sup style="font-size: 0.7em; color: #888;">[중]</sup>
                        </td>
                    </tr>
                    <!-- 범례 -->
                    <tr>
                        <td colspan="2" style="padding: 8px; text-align: left; background-color: #F9F9FA; border: 1px solid #ccc; font-size: 0.8rem; opacity: 0.8; line-height: 1.4;">
                            [중] 중정비 기지
                        </td>
                    </tr>
                </table>
            </div>
        </details>
        `;
    }
});