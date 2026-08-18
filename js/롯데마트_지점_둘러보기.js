document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("lotte-mart-branch-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <table class="lotte-table" style="width: 100%; border: 2px solid var(--lotte-red, #E60012);">
                <tr>
                    <td style="background-color: #fff; text-align: center; padding: 15px; border-bottom: none !important;">
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px;">
                            <img alt="롯데마트 로고" onerror="this.style.display='none'; this.parentNode.insertAdjacentHTML('afterbegin', '<span style=\\'color:#E60012; font-weight:900; font-size:2rem;\\'>LOTTE Mart</span>');" src="이미지/롯데마트_로고.svg" style="height: 40px;"/>
                            <span style="font-size: 1.1rem !important; font-weight: bold; color: #000;">
                                롯데마트 효빈광역시 지점
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0; background-color: #fff; border-top: none !important;">
                        <details open>
                            <summary style="background-color: #f9f9f9; color: #333; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 8px 0; cursor: pointer;">
                                <span style="font-size: 0.9rem; margin: 0 auto; display: block; text-align: center; font-weight: bold;">[ 펼치기 · 접기 ]</span>
                            </summary>
                            <div class="details-content" style="padding: 10px;">
                                <table style="width: 100%; border: none;">
                                    <tr>
                                        <td>
                                            <a class="wiki-link" href="롯데마트_과진점.html">과진점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">서구 과진동</span>
                                        </td>
                                        <td>
                                            <a class="wiki-link" href="롯데마트_평당점.html">평당점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">남구 평당동</span>
                                        </td>
                                        <td>
                                            <a class="wiki-link" href="롯데마트_도변점.html">도변점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">탄성군 도변읍</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a class="wiki-link" href="롯데마트_진희점.html">진희점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">북구 진희동</span>
                                        </td>
                                        <td>
                                            <a class="wiki-link" href="롯데마트_이자점.html">이자점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">안천구 이자동</span>
                                        </td>
                                        <td></td>
                                    </tr>
                                </table>
                                <div style="margin-top: 10px; padding: 5px; background-color: var(--lotte-red, #E60012); text-align: center; border-radius: 4px;">
                                    <span style="color: white; font-weight: bold; font-size: 0.85rem;">
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
});