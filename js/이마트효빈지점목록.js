(function() {
    const container = document.getElementById("emart-hyobin-branches-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <table class="emart-table" style="width: 100%; border: 2px solid var(--emart-yellow, #fcb417); border-collapse: collapse; margin: 0;">
                <tr>
                    <td style="background-color: var(--emart-yellow, #fcb417); text-align: center; padding: 12px; border: none;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <a href="이마트.html" class="wiki-link" style="text-decoration: none;">
                                <img src="이미지/이마트_로고.webp" alt="이마트 로고" style="height: 35px;" onerror="this.style.display='none'; this.parentNode.insertAdjacentHTML('afterbegin', '<span style=\\'color:white; font-weight:900; font-size:1.5rem;\\'>emart</span>');">
                            </a>
                            <span style="font-size: 1.2rem !important; font-weight: bold; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
                                이마트 효빈광역시 지점
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0; background-color: #fff; border: none;">
                        <!-- 전역 CSS(테두리, 여백) 무력화 인라인 스타일 적용 -->
                        <details open style="margin: 0; border: none; background: transparent; border-radius: 0;">
                            <!-- 전역 flex 속성 무력화 및 강제 중앙 정렬, CSS 변수 Fallback 적용 -->
                            <summary style="background-color: #f9f9f9; color: #333; border-bottom: 1px solid #eee; border-top: 1px solid var(--emart-yellow, #fcb417); padding: 8px 10px; font-weight: bold; cursor: pointer; display: block; text-align: center; list-style: none;">
                                <span style="font-size: 0.9rem;">[ 지점 목록 펼치기 · 접기 ]</span>
                            </summary>
                            <div class="details-content" style="padding: 15px;">
                                <table style="width: 100%; border-collapse: collapse; text-align: center; border: none; margin: 0;">
                                    <tr>
                                        <td style="padding: 8px; border: none;">
                                            <a href="이마트_효빈점.html" class="wiki-link">효빈점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">중구 리사동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;">
                                            <a href="이마트_효빈고속버스터미널점.html" class="wiki-link">효빈고속버스터미널점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">북구 해서동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;">
                                            <a href="이마트_월천점.html" class="wiki-link">월천점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">남구 월천동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;">
                                            <a href="이마트_안천점.html" class="wiki-link">안천점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">안천구 제택동</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px; border: none;">
                                            <a href="이마트_중수점.html" class="wiki-link">중수점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">북구 중수동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;">
                                            <a href="이마트_마잡점.html" class="wiki-link">마잡점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">청엽구 마잡동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;">
                                            <a href="이마트_사복점.html" class="wiki-link">사복점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">서구 사복동</span>
                                        </td>
                                        <td style="padding: 8px; border: none;">
                                            <a href="이마트_창전점.html" class="wiki-link">창전점</a><br>
                                            <span class="small-text" style="font-size: 0.8em; color: #666;">창전구 창전동</span>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- 전국 지역 목록 하단 추가 -->
                                <div style="margin-top: 15px; padding: 8px; background-color: var(--emart-yellow, #fcb417); text-align: center; border-radius: 4px;">
                                    <span style="color: white; font-weight: bold; font-size: 0.85rem; line-height: 1.5; text-shadow: 1px 1px 1px rgba(0,0,0,0.2);">
                                        <a href="https://namu.wiki/w/이마트/지점" target="_blank" style="color:white; text-decoration:none;" class="hover:underline">전국</a> ㆍ 서울 ㆍ 부산 ㆍ 대구 ㆍ 인천 ㆍ 광주 ㆍ 대전 ㆍ 울산 ㆍ <span style="text-decoration: line-through; opacity: 0.7;">세종</span><br/>
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