document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-metro-depots-nav-container");
    
    if (container) {
        container.innerHTML = `
        <details class="nav-template" open style="border: 1px solid #ccc; margin: 10px 0; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <summary style="background-color: #7777AA; color: white; padding: 8px; font-weight: bold; cursor: pointer; text-align: center; list-style: none; border-bottom: 1px solid #666699;">
                <span>효빈 도시철도 차량사업소</span>
                <div style="font-weight: normal; font-size: 0.85em; margin-top: 2px; color: #eee;">[ 펼치기 · 접기 ]</div>
            </summary>
            <div class="nav-template-content overflow-x-auto">
                <table style="margin:0; width:100%; border-collapse: collapse; text-align: center; font-size: 0.9rem; border: 1px solid #ccc;">
                    <!-- 효빈교통공사 헤더 -->
                    <tr>
                        <td colspan="4" style="background-color: #0077DD; color: white; padding: 8px; text-align: center; font-weight: bold; border-bottom: 1px solid rgba(255, 255, 255, 0.4);">
                            <a href="효빈교통공사.html" style="color: white; text-decoration: none;">효빈교통공사</a>
                        </td>
                    </tr>
                    <!-- 1~4호선 헤더 -->
                    <tr>
                        <td style="background-color: #0077DD; color: white; width: 25%; padding: 6px; font-weight: bold; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc;">
                            <a href="1호선.html" style="color: white; text-decoration: none;">1호선</a>
                        </td>
                        <td style="background-color: #00CCAA; color: white; width: 25%; padding: 6px; font-weight: bold; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc;">
                            <a href="2호선.html" style="color: white; text-decoration: none;">2호선</a>
                        </td>
                        <td style="background-color: #FFCC11; color: black; width: 25%; padding: 6px; font-weight: bold; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc;">
                            <a href="3호선.html" style="color: black; text-decoration: none;">3호선</a>
                        </td>
                        <td style="background-color: #FF5522; color: white; width: 25%; padding: 6px; font-weight: bold; border-bottom: 1px solid #ccc;">
                            <a href="4호선.html" style="color: white; text-decoration: none;">4호선</a>
                        </td>
                    </tr>
                    <!-- 1~4호선 내용 -->
                    <tr>
                        <td style="padding: 8px; text-align: center; background-color: #F9F9FA; border: 1px solid #ccc; vertical-align: top;">
                            <a href="곽산차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">곽산</a><sup style="font-size: 0.7em; color: #888;">[중]</sup><br/>
                            <a href="승남차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">승남</a><br/>
                            <a href="장선차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">장선</a><sup style="font-size: 0.7em; color: #888;">[중][시종착]</sup>
                        </td>
                        <td style="padding: 8px; text-align: center; background-color: #F9F9FA; border: 1px solid #ccc; vertical-align: top;">
                            <a href="항동차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">항동</a><sup style="font-size: 0.7em; color: #888;">[중]</sup><br/>
                            <a href="입동차량주박기지.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">입동</a><sup style="font-size: 0.7em; color: #888;">[주박]</sup><br/>
                            <a href="신영차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">신영</a><sup style="font-size: 0.7em; color: #888;">[중]</sup>
                        </td>
                        <td style="padding: 8px; text-align: center; background-color: #F9F9FA; border: 1px solid #ccc; vertical-align: top;">
                            <a href="팔조차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">팔조</a><sup style="font-size: 0.7em; color: #888;">[중]</sup><br/>
                            <a href="주길차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">주길</a>
                        </td>
                        <td style="padding: 8px; text-align: center; background-color: #F9F9FA; border: 1px solid #ccc; vertical-align: top;">
                            <a href="고해차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">고해</a><br/>
                            <a href="평당차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">평당</a>
                        </td>
                    </tr>
                    <!-- 5~8호선 헤더 -->
                    <tr>
                        <td style="background-color: #EE0022; color: white; padding: 6px; font-weight: bold; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc;">
                            <a href="5호선.html" style="color: white; text-decoration: none;">5호선</a>
                        </td>
                        <td style="background-color: #881188; color: white; padding: 6px; font-weight: bold; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc;">
                            <a href="6호선.html" style="color: white; text-decoration: none;">6호선</a>
                        </td>
                        <td style="background-color: #FF8899; color: white; padding: 6px; font-weight: bold; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc;">
                            <a href="7호선.html" style="color: white; text-decoration: none;">7호선</a>
                        </td>
                        <td style="background-color: #9856FF; color: white; padding: 6px; font-weight: bold; border-bottom: 1px solid #ccc;">
                            <a href="8호선.html" style="color: white; text-decoration: none;">8호선</a>
                        </td>
                    </tr>
                    <!-- 5~8호선 내용 -->
                    <tr>
                        <td style="padding: 8px; text-align: center; background-color: #F9F9FA; border: 1px solid #ccc; vertical-align: top;">
                            <a href="청덕차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">청덕</a><br/>
                            <a href="하미차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;"><del style="color:#888;">하미</del></a><sup style="font-size: 0.7em; color: #888;">[예정]</sup>
                        </td>
                        <td style="padding: 8px; text-align: center; background-color: #F9F9FA; border: 1px solid #ccc; vertical-align: top;">
                            <a href="마잡차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">마잡</a><br/>
                            <a href="추산차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">추산</a>
                        </td>
                        <td style="padding: 8px; text-align: center; background-color: #F9F9FA; border: 1px solid #ccc; vertical-align: top;">
                            <a href="내항차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">내항</a>
                        </td>
                        <td style="padding: 8px; text-align: center; background-color: #F9F9FA; border: 1px solid #ccc; vertical-align: top;">
                            <a href="곽산차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">곽산</a><sup style="font-size: 0.7em; color: #888;">[1호선공용]</sup>
                        </td>
                    </tr>
                    <!-- 한국철도공사 및 빈효선 헤더 -->
                    <tr>
                        <td colspan="4" style="background-color: #6677CC; color: white; padding: 8px; text-align: center; font-weight: bold; border-top: 1px solid #ccc; border-bottom: 1px solid rgba(255, 255, 255, 0.4);">
                            <a href="한국철도공사_광역전철.html" style="color: white; text-decoration: none;">한국철도공사 광역전철</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" style="background-color: #6677CC; color: white; padding: 8px; text-align: center; font-weight: bold; border-bottom: 1px solid #ccc;">
                            <a href="빈효선.html" style="color: white; text-decoration: none;">빈효선</a>
                        </td>
                    </tr>
                    <!-- 빈효선 내용: 세로 3줄 정렬 및 치원 취소선 적용 -->
                    <tr>
                        <td colspan="4" style="padding: 8px; text-align: center; background-color: #F9F9FA; border: 1px solid #ccc; line-height: 1.6;">
                            <a href="고남차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">고남</a><br/>
                            <a href="효빈항차량주박기지.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">효빈항</a><sup style="font-size: 0.7em; color: #888;">[주박]</sup><br/>
                            <del style="color:#888;"><a href="치원차량사업소.html" style="color: #0022AA; font-weight: bold; text-decoration: none;">치원</a></del><sup style="font-size: 0.7em; color: #888;">[계획]</sup>
                        </td>
                    </tr>
                    <!-- 범례 -->
                    <tr>
                        <td colspan="4" style="padding: 8px; text-align: left; background-color: #F9F9FA; border: 1px solid #ccc; font-size: 0.8rem; opacity: 0.8; line-height: 1.4;">
                            [중] 중정비 가능한 기지<br/>
                            [주박] 주박용 기지 또는 주재<br/>
                            [시종착] 시종착역과 연결된 기지
                        </td>
                    </tr>
                </table>
            </div>
        </details>
        `;
    }
});