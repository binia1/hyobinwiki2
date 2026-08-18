document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("homeplus-branch-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <table class="homeplus-table" style="width: 100%; border: 2px solid var(--homeplus-red, #e31837);">
                <tr>
                    <td style="background-color: var(--homeplus-red, #e31837); text-align: center; padding: 10px;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <a href="홈플러스.html" class="wiki-link"><img src="이미지/홈플러스_로고.webp" alt="홈플러스 로고" style="height: 35px;"></a>
                            <span style="font-size: 1.2rem !important; font-weight: bold; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
                                홈플러스 <span style="font-size: 0.9em;">효빈광역시 지점</span>
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0; background-color: #fff;">
                        <details open>
                            <summary style="background-color: #f9f9f9; color: #333; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 8px 0; cursor: pointer;">
                                <span style="font-size: 0.9rem; margin: 0 auto; display: block; text-align: center; font-weight: bold;">[ 펼치기 · 접기 ]</span>
                            </summary>
                            <div class="details-content" style="padding: 10px;">
                                <table style="width: 100%; border: none;">
                                    <tr>
                                        <td>
                                            <a href="홈플러스_고송점.html" class="wiki-link">고송점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">북구 고송동</span>
                                        </td>
                                        <td>
                                            <a href="홈플러스_효빈역점.html" class="wiki-link">효빈역점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">동구 사가당동</span>
                                        </td>
                                        <td>
                                            <a href="홈플러스_청엽점.html" class="wiki-link">청엽점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">청엽구 청엽동</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="홈플러스_사노점.html" class="wiki-link">사노점(메가푸드마켓)</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">청엽구 사노동</span>
                                        </td>
                                        <td>
                                            <a href="홈플러스_탄성점.html" class="wiki-link" style="color: #999; text-decoration: line-through;">탄성점 (폐점)</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">탄성군 탄성읍</span>
                                        </td>
                                        <td>
                                            <a href="홈플러스_청능점.html" class="wiki-link" style="color: #999; text-decoration: line-through;">청능점 (폐점)</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">북구 청능동</span>
                                        </td>
                                    </tr>
                                </table>

                                <!-- 하단 전국 지점 둘러보기 영역 -->
                                <div style="margin-top: 10px; padding: 5px; background-color: var(--homeplus-red, #e31837); text-align: center; border-radius: 4px;">
                                    <span style="color: white; font-weight: bold; font-size: 0.85rem;">
                                        전국 ㆍ 서울 ㆍ 부산 ㆍ 대구 ㆍ 인천 ㆍ 광주 ㆍ 대전 ㆍ 울산 ㆍ 세종<br/>
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