document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinbukHead5Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #4AD898; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:6px;">
<img src="이미지/덕북로고.webp" alt="덕빈북도 로고" style="height: 40px !important; width: auto; vertical-align: middle; filter: brightness(0) invert(1);">
                    <a href="덕빈북도.html" style="color:white; text-decoration: none;">덕빈북도 민선 5기 기초자치단체장</a>
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
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해시.html" style="color: #ffffff; text-decoration: none;">서해시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시.html" style="color: #ffffff; text-decoration: none;">빈주시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="약산시.html" style="color: #ffffff; text-decoration: none;">약산시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천주시.html" style="color: #ffffff; text-decoration: none;">천주시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강주시.html" style="color: #ffffff; text-decoration: none;">강주시</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남영선.html" style="color: #0082CD; text-decoration: none;">남영선</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="양재현.html" style="color: #0082CD; text-decoration: none;">양재현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="옥지현.html" style="color: #0082CD; text-decoration: none;">옥지현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강수성.html" style="color: #0082CD; text-decoration: none;">강수성</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="송지훈.html" style="color: #0082CD; text-decoration: none;">송지훈</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="군천시.html" style="color: #ffffff; text-decoration: none;">군천시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="계성시.html" style="color: #ffffff; text-decoration: none;">계성시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #C9252B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서진시.html" style="color: #ffffff; text-decoration: none;">서진시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="전산시.html" style="color: #ffffff; text-decoration: none;">전산시</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="낭원군.html" style="color: #ffffff; text-decoration: none;">낭원군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강유현.html" style="color: #0082CD; text-decoration: none;">강유현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서금진.html" style="color: #0082CD; text-decoration: none;">서금진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="공하진.html" style="color: #C9252B; text-decoration: none;">공하진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="영승현.html" style="color: #0082CD; text-decoration: none;">영승현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="오산기.html" style="color: #0082CD; text-decoration: none;">오산기</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="기도군.html" style="color: #ffffff; text-decoration: none;">기도군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕현군.html" style="color: #ffffff; text-decoration: none;">덕현군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #C9252B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="모제군.html" style="color: #ffffff; text-decoration: none;">모제군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="반양군.html" style="color: #ffffff; text-decoration: none;">반양군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #C9252B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="상안군.html" style="color: #ffffff; text-decoration: none;">상안군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="오시연.html" style="color: #0082CD; text-decoration: none;">오시연</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="임은현.html" style="color: #0082CD; text-decoration: none;">임은현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김산기.html" style="color: #C9252B; text-decoration: none;">김산기</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="윤안현.html" style="color: #0082CD; text-decoration: none;">윤안현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="구성만.html" style="color: #C9252B; text-decoration: none;">구성만</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #0082CD; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="선곡군.html" style="color: #ffffff; text-decoration: none;">선곡군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #C9252B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="저천군.html" style="color: #ffffff; text-decoration: none;">저천군</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #C9252B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="치원군.html" style="color: #ffffff; text-decoration: none;">치원군</a></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="임성현.html" style="color: #0082CD; text-decoration: none;">임성현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="양기현.html" style="color: #C9252B; text-decoration: none;">양기현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="연감건.html" style="color: #C9252B; text-decoration: none;">연감건</a></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                        </tr>
                        </tbody>
                    </table>
                    <div class="result-note">
<span style="color: #0062cc; font-weight: bold;">선거 결과</span><br/>
<span style="opacity: 0.9;">
                    * 덕현군수 오산기(새누리당) 당선무효 <i class="fas fa-arrow-right mx-1 text-xs"></i> <b>2011년 보궐선거 임은현(새정치민주연합) 당선</b>
</span>
</div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="민선 4기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 4기</a></div>
                        <div><a href="민선 6기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 6기</a> ▶</div>
                    </div>
                </div>
            </details>
        </div>
        `;

        container.innerHTML = html;
    }
    
    // 컴포넌트 렌더링 실행
    renderDeokbinbukHead5Nav('deokbinbuk-head-5-nav-container');
});