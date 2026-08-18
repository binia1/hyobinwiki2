document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinnamHead6Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #335566; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">

                <span style="display:inline-flex; align-items:center; gap:6px;">
                    <img src="이미지/덕빈남도_로고.webp" alt="덕빈남도 로고" style="height: 40px !important; width: auto; vertical-align: middle; filter: brightness(0) invert(1);">
                    <a href="덕빈남도.html" style="color:white; text-decoration: none;">덕빈남도 민선 6기 기초자치단체장</a>
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
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕주시.html" style="color: #ffffff; text-decoration: none;">덕주시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="매성시.html" style="color: #ffffff; text-decoration: none;">매성시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="원안군.html" style="color: #ffffff; text-decoration: none;">원안군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #C9151E; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="비천시.html" style="color: #ffffff; text-decoration: none;">비천시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="방산시.html" style="color: #ffffff; text-decoration: none;">방산시</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김영산.html" style="color: #004EA2; text-decoration: none;">김영산</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="지영훈.html" style="color: #004EA2; text-decoration: none;">지영훈</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안기현.html" style="color: #004EA2; text-decoration: none;">안기현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고정화.html" style="color: #C9151E; text-decoration: none;">고정화</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이재원.html" style="color: #004EA2; text-decoration: none;">이재원</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="마진시.html" style="color: #ffffff; text-decoration: none;">마진시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #C9151E; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="하정시.html" style="color: #ffffff; text-decoration: none;">하정시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="낙주시.html" style="color: #ffffff; text-decoration: none;">낙주시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고포군.html" style="color: #ffffff; text-decoration: none;">고포군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="분주군.html" style="color: #ffffff; text-decoration: none;">분주군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강은현.html" style="color: #004EA2; text-decoration: none;">강은현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="원재현.html" style="color: #C9151E; text-decoration: none;">원재현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="우신광.html" style="color: #004EA2; text-decoration: none;">우신광</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강은한.html" style="color: #808080; text-decoration: none;">강은한</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="우구한.html" style="color: #004EA2; text-decoration: none;">우구한</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="석창군.html" style="color: #ffffff; text-decoration: none;">석창군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="곡천군.html" style="color: #ffffff; text-decoration: none;">곡천군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="매산군.html" style="color: #ffffff; text-decoration: none;">매산군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #C9151E; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="인곡군.html" style="color: #ffffff; text-decoration: none;">인곡군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="관수군.html" style="color: #ffffff; text-decoration: none;">관수군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="양수한.html" style="color: #004EA2; text-decoration: none;">양수한</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남연석.html" style="color: #808080; text-decoration: none;">남연석</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="한성진.html" style="color: #004EA2; text-decoration: none;">한성진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="은성현.html" style="color: #C9151E; text-decoration: none;">은성현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남기하.html" style="color: #808080; text-decoration: none;">남기하</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="운진군.html" style="color: #ffffff; text-decoration: none;">운진군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="두원군.html" style="color: #ffffff; text-decoration: none;">두원군</a></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="상성현.html" style="color: #004EA2; text-decoration: none;">상성현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안지현.html" style="color: #004EA2; text-decoration: none;">안지현</a></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                        </tr>
                        </tbody>
                    </table>
                    <div class="result-note">
<span style="color: #0062cc; font-weight: bold;">선거 결과</span><br/>
<span style="opacity: 0.9;">
                    * 당초 당선된 분주군수 노진태(새누리당) 당선무효 <i class="fas fa-arrow-right mx-1 text-xs"></i> <b>2016년 보궐선거 우구한(무소속 -&gt; 더불어민주당) 당선</b>
</span>
</div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="민선 5기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 5기</a></div>
                        <div><a href="민선 7기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 7기</a> ▶</div>
                    </div>
                </div>
            </details>
        </div>
        `;

        container.innerHTML = html;
    }
    
    // 컴포넌트 렌더링 실행
    renderDeokbinnamHead6Nav('deokbinnam-head-6-nav-container');
});