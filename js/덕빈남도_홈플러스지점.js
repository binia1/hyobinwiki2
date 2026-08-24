// SPA 뷰어 환경에 맞게 DOMContentLoaded를 제거하고 즉시 실행 함수로 변경
(function() {
    const container = document.getElementById("homeplus-deokbinnam-branch-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <table class="homeplus-table" style="width: 100%; border: 2px solid var(--homeplus-red, #e31837); border-collapse: collapse; margin: 0;">
                <tr>
                    <td style="background-color: var(--homeplus-red, #e31837); text-align: center; padding: 12px; border: none;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <a href="홈플러스.html" class="wiki-link" style="text-decoration: none;">
                                <img src="이미지/홈플러스_로고.webp" alt="홈플러스 로고" style="height: 35px;" onerror="this.style.display='none'; this.parentNode.insertAdjacentHTML('afterbegin', '<span style=\\'color:white; font-weight:900; font-size:1.5rem;\\'>Homeplus</span>');">
                            </a>
                            <span style="font-size: 1.2rem !important; font-weight: bold; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
                                홈플러스 덕빈남도 지점
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0; background-color: #fff; border: none;">
                        <details open style="margin: 0; border: none; background: transparent; border-radius: 0;">
                            <summary style="background-color: #f9f9f9; color: #333; border-bottom: 1px solid #eee; border-top: 1px solid var(--homeplus-red, #e31837); padding: 8px 10px; font-weight: bold; cursor: pointer; display: block; text-align: center; list-style: none;">
                                <span style="font-size: 0.9rem;">[ 지점 목록 펼치기 · 접기 ]</span>
                            </summary>
                            <div class="details-content" style="padding: 15px;">
                                <table style="width: 100%; border-collapse: collapse; text-align: center; border: none; margin: 0;">
                                    <tr>
                                        <td style="padding: 8px; border: none; width: 33.33%;">
                                            <a href="홈플러스_덕주중앙점.html" class="wiki-link">덕주중앙점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">덕주시 덕산구 중앙동</span>
                                        </td>
                                        <td style="padding: 8px; border: none; width: 33.33%;">
                                            <a href="홈플러스_덕주조전점.html" class="wiki-link">덕주조전점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">덕주시 조전구 조전동</span>
                                        </td>
                                        <td style="padding: 8px; border: none; width: 33.33%;">
                                            <a href="홈플러스_낙주점.html" class="wiki-link">낙주점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">낙주시 회삼동</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: none;">
                                            <a href="홈플러스_마진점.html" class="wiki-link">마진점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">마진시 마진동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;"></td>
                                        <td style="padding: 8px; border: none;"></td>
                                    </tr>
                                </table>
                                <div style="margin-top: 15px; padding: 8px; background-color: var(--homeplus-red, #e31837); text-align: center; border-radius: 4px;">
                                    <span style="color: white; font-weight: bold; font-size: 0.85rem; line-height: 1.5; text-shadow: 1px 1px 1px rgba(0,0,0,0.2);">
                                        <a href="https://namu.wiki/w/홈플러스/지점" target="_blank" style="color:white; text-decoration:none;" class="hover:underline">전국</a> ㆍ 서울 ㆍ 부산 ㆍ 대구 ㆍ 인천 ㆍ 광주 ㆍ 대전 ㆍ 울산 ㆍ 세종<br/>
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