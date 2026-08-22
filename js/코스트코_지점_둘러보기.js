(function() {
    const container = document.getElementById("costco-branch-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <table class="costco-table" style="width: 100%; border: 2px solid var(--costco-red, #e31837); border-collapse: collapse; margin: 0;">
                <tr>
                    <td style="background-color: var(--costco-red, #e31837); text-align: center; padding: 12px; border: none;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <a href="코스트코.html" class="wiki-link" style="text-decoration: none;">
                                <img src="이미지/코스트코_로고.webp" alt="코스트코 로고" style="height: 35px; filter: brightness(0) invert(1);" onerror="this.style.display='none'; this.parentNode.insertAdjacentHTML('afterbegin', '<span style=\\'color:white; font-weight:900; font-size:1.5rem;\\'>COSTCO</span>');">
                            </a>
                            <span style="font-size: 1.2rem !important; font-weight: bold; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
                                코스트코 코리아 매장
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0; background-color: #fff; border: none;">
                        <!-- 전역 CSS(테두리, 여백) 무력화 인라인 스타일 적용 -->
                        <details open style="margin: 0; border: none; background: transparent; border-radius: 0;">
                            <!-- 전역 flex 속성 무력화 및 강제 중앙 정렬, CSS 변수 Fallback 적용 -->
                            <summary style="background-color: var(--costco-blue, #005daa); color: white; border-bottom: 1px solid #eee; padding: 8px 10px; font-weight: bold; cursor: pointer; display: block; text-align: center; list-style: none;">
                                <span style="font-size: 0.9rem;">[ 지점 목록 펼치기 · 접기 ]</span>
                            </summary>
                            <div class="details-content" style="padding: 15px;">
                                <!-- 지점 목록 테이블 -->
                                <table style="width: 100%; border-collapse: collapse; text-align: center; border: none; margin: 0;">
                                    <tr>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_양평점.html" class="wiki-link">양평점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_대구점.html" class="wiki-link">대구점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_대전점.html" class="wiki-link">대전점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_양재점.html" class="wiki-link">양재점</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_상봉점.html" class="wiki-link">상봉점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_일산점.html" class="wiki-link">일산점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_부산점.html" class="wiki-link">부산점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_울산점.html" class="wiki-link">울산점</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_광명점.html" class="wiki-link">광명점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_의정부점.html" class="wiki-link">의정부점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_천안점.html" class="wiki-link">천안점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_공세점.html" class="wiki-link">공세점</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_송도점.html" class="wiki-link">송도점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_대구혁신도시점.html" class="wiki-link">대구 혁신도시점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_세종점.html" class="wiki-link">세종점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_하남점.html" class="wiki-link">하남점</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_김해점.html" class="wiki-link">김해점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_고척점.html" class="wiki-link">고척점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_청라점.html" class="wiki-link">청라점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_평택점.html" class="wiki-link">평택점</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_효빈점.html" class="wiki-link">효빈점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_이자점.html" class="wiki-link">이자점</a></td>
                                        <td style="padding: 6px; border: none;"><a href="코스트코_빈주점.html" class="wiki-link">빈주점</a></td>
                                        <td style="padding: 6px; border: none;"></td>
                                    </tr>
                                </table>
                            </div>
                        </details>
                    </td>
                </tr>
            </table>
        </div>
        `;
    }
})();