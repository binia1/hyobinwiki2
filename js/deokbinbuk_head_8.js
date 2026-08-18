document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinbukHead8Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #4AD898; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:6px;">
<img src="이미지/덕북로고.webp" alt="덕빈북도 로고" style="height: 40px !important; width: auto; vertical-align: middle; filter: brightness(0) invert(1);">
                    <a href="덕빈북도.html" style="color:white; text-decoration: none;">덕빈북도 민선 8기 기초자치단체장</a>
                </span>
            </div>
            <details  style="width: 100%;">
                <summary class="nav-summary" style="background-color: #fff; text-align: center; padding: 6px; cursor: pointer; font-size: 0.9rem; font-weight: bold; border-bottom: 1px solid #aaa; color: #333; list-style: none;">
                    [ 펼치기 · 접기 ]
                </summary>
                <div style="padding: 0;">
                    <table class="nav-table" style="width: 100%; border-collapse: collapse; table-layout: fixed; background-color: #ffffff; text-align: center; font-size: 0.95rem; word-break: keep-all;">
                        <tbody>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해시.html" style="color: #ffffff; text-decoration: none;">서해시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시.html" style="color: #ffffff; text-decoration: none;">빈주시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="약산시.html" style="color: #ffffff; text-decoration: none;">약산시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천주시.html" style="color: #ffffff; text-decoration: none;">천주시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강주시.html" style="color: #ffffff; text-decoration: none;">강주시</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="최정아.html" style="color: #003B96; text-decoration: none;">최정아</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이재성.html" style="color: #003B96; text-decoration: none;">이재성</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박아상.html" style="color: #003B96; text-decoration: none;">박아상</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김민철.html" style="color: #003B96; text-decoration: none;">김민철</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="한성민.html" style="color: #003B96; text-decoration: none;">한성민</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="군천시.html" style="color: #ffffff; text-decoration: none;">군천시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="계성시.html" style="color: #ffffff; text-decoration: none;">계성시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #E61E2B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서진시.html" style="color: #ffffff; text-decoration: none;">서진시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="전산시.html" style="color: #ffffff; text-decoration: none;">전산시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="낭원군.html" style="color: #ffffff; text-decoration: none;">낭원군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="윤서진.html" style="color: #003B96; text-decoration: none;">윤서진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="오현주.html" style="color: #003B96; text-decoration: none;">오현주</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김철호.html" style="color: #E61E2B; text-decoration: none;">김철호</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="장은재.html" style="color: #003B96; text-decoration: none;">장은재</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정우혁.html" style="color: #003B96; text-decoration: none;">정우혁</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="기도군.html" style="color: #ffffff; text-decoration: none;">기도군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕현군.html" style="color: #ffffff; text-decoration: none;">덕현군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #E61E2B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="모제군.html" style="color: #ffffff; text-decoration: none;">모제군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="반양군.html" style="color: #ffffff; text-decoration: none;">반양군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="상안군.html" style="color: #ffffff; text-decoration: none;">상안군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="조민규.html" style="color: #003B96; text-decoration: none;">조민규</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고태훈.html" style="color: #003B96; text-decoration: none;">고태훈</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="오성국.html" style="color: #E61E2B; text-decoration: none;">오성국</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="노준석.html" style="color: #003B96; text-decoration: none;">노준석</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강미소.html" style="color: #003B96; text-decoration: none;">강미소</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="선곡군.html" style="color: #ffffff; text-decoration: none;">선곡군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #E61E2B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="저천군.html" style="color: #ffffff; text-decoration: none;">저천군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #E61E2B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="치원군.html" style="color: #ffffff; text-decoration: none;">치원군</a></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이지현.html" style="color: #003B96; text-decoration: none;">이지현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박성진.html" style="color: #E61E2B; text-decoration: none;">박성진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="백민우.html" style="color: #E61E2B; text-decoration: none;">백민우</a></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                        </tr>
                        </tbody>
                    </table>
                    
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="민선 7기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 7기</a></div>
                        <div><a href="민선 9기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 9기</a> ▶</div>
                    </div>
                </div>
            </details>
        </div>
        `;

        container.innerHTML = html;
    }
    
    // 컴포넌트 렌더링 실행
    renderDeokbinbukHead8Nav('deokbinbuk-head-8-nav-container');
});