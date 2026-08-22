// SPA 뷰어 환경에 맞게 DOMContentLoaded를 제거하고 즉시 실행 함수로 변경
(function() {
    const container = document.getElementById("lotte-mart-branch-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <table class="lotte-table" style="width: 100%; border: 2px solid #E60012; border-spacing: 0; border-collapse: collapse;">
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
                        <!-- 전역 CSS(테두리, 여백) 무력화 인라인 스타일 적용 -->
                        <details open style="margin: 0; border: none; background: transparent; border-radius: 0;">
                            <!-- 전역 flex 속성 무력화 및 강제 중앙 정렬 -->
                            <summary style="background-color: #f9f9f9; color: #333; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 8px 0; cursor: pointer; display: block; text-align: center; list-style: none;">
                                <span style="font-size: 0.9rem; font-weight: bold;">[ 펼치기 · 접기 ]</span>
                            </summary>
                            <div class="details-content" style="padding: 15px;">
                                <table style="width: 100%; border-collapse: collapse; text-align: center;">
                                    <tr>
                                        <td style="padding: 8px; border: none;">
                                            <a class="wiki-link" href="롯데마트_과진점.html">과진점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">서구 과진동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;">
                                            <a class="wiki-link" href="롯데마트_평당점.html">평당점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">남구 평당동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;">
                                            <a class="wiki-link" href="롯데마트_도변점.html">도변점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">탄성군 도변읍</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: none;">
                                            <a class="wiki-link" href="롯데마트_진희점.html">진희점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">북구 진희동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;">
                                            <a class="wiki-link" href="롯데마트_이자점.html">이자점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">안천구 이자동</span>
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