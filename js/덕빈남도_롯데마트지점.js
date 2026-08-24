// SPA 뷰어 환경에 맞게 DOMContentLoaded를 제거하고 즉시 실행 함수로 변경
(function() {
    const container = document.getElementById("lotte-mart-deokbinnam-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <table class="lotte-table" style="width: 100%; border: 2px solid #E60012; border-spacing: 0; border-collapse: collapse;">
                <tr>
                    <td style="background-color: #fff; text-align: center; padding: 15px; border-bottom: none !important;">
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px;">
                            <img alt="롯데마트 로고" onerror="this.style.display='none'; this.parentNode.insertAdjacentHTML('afterbegin', '<span style=\\'color:#E60012; font-weight:900; font-size:2rem;\\'>LOTTE Mart</span>');" src="이미지/롯데마트_로고.svg" style="height: 40px;"/>
                            <span style="font-size: 1.1rem !important; font-weight: bold; color: #000;">
                                롯데마트 덕빈남도 지점
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0; background-color: #fff; border-top: none !important;">
                        <details open style="margin: 0; border: none; background: transparent; border-radius: 0;">
                            <summary style="background-color: #f9f9f9; color: #333; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 8px 0; cursor: pointer; display: block; text-align: center; list-style: none;">
                                <span style="font-size: 0.9rem; font-weight: bold;">[ 펼치기 · 접기 ]</span>
                            </summary>
                            <div class="details-content" style="padding: 15px;">
                                <table style="width: 100%; border-collapse: collapse; text-align: center;">
                                    <tr>
                                        <td style="padding: 8px; border: none; width: 33.33%;">
                                            <a class="wiki-link" href="롯데마트_조전점.html">조전점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">덕주시 조전구 조전동</span>
                                        </td>
                                        <td style="padding: 8px; border: none; width: 33.33%;">
                                            <a class="wiki-link" href="롯데마트_낙주점.html">낙주점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">낙주시 삼채동</span>
                                        </td>
                                        <td style="padding: 8px; border: none; width: 33.33%;">
                                            <a class="wiki-link" href="롯데마트_방산점.html">방산점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">방산시 주강동</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: none;">
                                            <a class="wiki-link" href="롯데마트_매성점.html">매성점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">매성시 근암동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;">
                                            <a class="wiki-link" href="롯데마트_비천점.html">비천점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">비천시 성두동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;"></td>
                                    </tr>
                                </table>
                                <div style="margin-top: 15px; padding: 8px; background-color: #E60012; text-align: center; border-radius: 4px;">
                                    <span style="color: white; font-weight: bold; font-size: 0.85rem; line-height: 1.5;">
                                        전국 ㆍ 서울 ㆍ 부산 ㆍ 대구 ㆍ 인천 ㆍ 광주 ㆍ 대전 ㆍ 울산 ㆍ <span style="text-decoration: line-through; opacity: 0.7;">세종</span><br/>
                                        경기 ㆍ 경상 ㆍ 충청 ㆍ 전라 ㆍ 강원 ㆍ 제주 ㆍ <a href="효빈광역시.html" style="color:white; text-decoration:none;" class="hover:underline">효빈</a> ㆍ <a href="덕북.html" style="color:white; text-decoration:none;" class="hover:underline">덕북</a> ㆍ <a href="덕남.html" style="color:white; text-decoration:none;" class="hover:underline">덕남</a>
                                    </span>
                                </div>
                            </div>
                        </details>
                    </td>
                </tr>
            </table>
        </div>
        `;
    }
})();