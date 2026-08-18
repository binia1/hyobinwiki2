document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinnamHead8Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #335566; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">

                <span style="display:inline-flex; align-items:center; gap:6px;">
                    <img src="이미지/덕빈남도_로고.webp" alt="덕빈남도 로고" style="height: 40px !important; width: auto; vertical-align: middle; filter: brightness(0) invert(1);">
                    <a href="덕빈남도.html" style="color:white; text-decoration: none;">덕빈남도 민선 8기 기초자치단체장</a>
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
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕주시.html" style="color: #ffffff; text-decoration: none;">덕주시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="매성시.html" style="color: #ffffff; text-decoration: none;">매성시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="원안군.html" style="color: #ffffff; text-decoration: none;">원안군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #E61E2B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="비천시.html" style="color: #ffffff; text-decoration: none;">비천시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="방산시.html" style="color: #ffffff; text-decoration: none;">방산시</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정동혁.html" style="color: #003B96; text-decoration: none;">정동혁</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="오세윤.html" style="color: #003B96; text-decoration: none;">오세윤</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="윤재민.html" style="color: #808080; text-decoration: none;">윤재민</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고정화.html" style="color: #E61E2B; text-decoration: none;">고정화</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이재원.html" style="color: #003B96; text-decoration: none;">이재원</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="마진시.html" style="color: #ffffff; text-decoration: none;">마진시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #E61E2B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="하정시.html" style="color: #ffffff; text-decoration: none;">하정시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="낙주시.html" style="color: #ffffff; text-decoration: none;">낙주시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #E61E2B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고포군.html" style="color: #ffffff; text-decoration: none;">고포군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="분주군.html" style="color: #ffffff; text-decoration: none;">분주군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="백수안.html" style="color: #808080; text-decoration: none;">백수안</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="신태양.html" style="color: #E61E2B; text-decoration: none;">신태양</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="최현수.html" style="color: #003B96; text-decoration: none;">최현수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="문석준.html" style="color: #E61E2B; text-decoration: none;">문석준</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김태수.html" style="color: #808080; text-decoration: none;">김태수</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="석창군.html" style="color: #ffffff; text-decoration: none;">석창군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #000000; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="곡천군.html" style="color: #ffffff; text-decoration: none;">곡천군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="매산군.html" style="color: #ffffff; text-decoration: none;">매산군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="인곡군.html" style="color: #ffffff; text-decoration: none;">인곡군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="관수군.html" style="color: #ffffff; text-decoration: none;">관수군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="최민규.html" style="color: #003B96; text-decoration: none;">최민규</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="공석.html" style="color: #000000; text-decoration: none;">공석</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="한성진.html" style="color: #003B96; text-decoration: none;">한성진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강준영.html" style="color: #808080; text-decoration: none;">강준영</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서윤수.html" style="color: #003B96; text-decoration: none;">서윤수</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="운진군.html" style="color: #ffffff; text-decoration: none;">운진군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="두원군.html" style="color: #ffffff; text-decoration: none;">두원군</a></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김도연.html" style="color: #003B96; text-decoration: none;">김도연</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이영진.html" style="color: #003B96; text-decoration: none;">이영진</a></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                        </tr>
                        </tbody>
                    </table>
                    <div class="result-note">
<span style="color: #0062cc; font-weight: bold;">선거 결과</span><br/>
<span style="opacity: 0.9;">
                    * 석창군수 최민규(국민의힘) 2025년 더불어민주당 전격 입당<br/>
                    * 곡천군수 정용석(국민의힘) 임기 후반부 당선무효 <i class="fas fa-arrow-right mx-1 text-xs"></i> <b>잔여임기 1년 미만으로 보궐선거 미실시 (공석)</b><br/>
                    * 마진시장 백수안, 인곡군수 강준영 무소속 탈당
                    </span>
</div>
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
    renderDeokbinnamHead8Nav('deokbinnam-head-8-nav-container');
});