document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinbukAssembly21Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #4AD898; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:4px;">
                    <div class="font-bold bg-white px-1 text-xs rounded" style="color: #4AD898;">H</div>
                    <a href="덕빈북도.html" style="color:white; text-decoration: none;">덕빈북도 제21대 국회의원</a>
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
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천주시 갑.html" style="color: #ffffff; text-decoration: none;">천주시 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천주시 을.html" style="color: #ffffff; text-decoration: none;">천주시 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시 갑.html" style="color: #ffffff; text-decoration: none;">빈주시 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시 을.html" style="color: #ffffff; text-decoration: none;">빈주시 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고규미.html" style="color: #003B96; text-decoration: none;">고규미</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="하성민.html" style="color: #003B96; text-decoration: none;">하성민</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김현준.html" style="color: #003B96; text-decoration: none;">김현준</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고한선.html" style="color: #003B96; text-decoration: none;">고한선</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시 병.html" style="color: #ffffff; text-decoration: none;">빈주시 병</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시 정.html" style="color: #ffffff; text-decoration: none;">빈주시 정</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해시 갑.html" style="color: #ffffff; text-decoration: none;">서해시 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해시 을.html" style="color: #ffffff; text-decoration: none;">서해시 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="유상미.html" style="color: #003B96; text-decoration: none;">유상미</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박신언.html" style="color: #003B96; text-decoration: none;">박신언</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="최영호.html" style="color: #003B96; text-decoration: none;">최영호</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박진우.html" style="color: #003B96; text-decoration: none;">박진우</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="군천시.html" style="color: #ffffff; text-decoration: none;">군천시</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="낭원군.html" style="color: #ffffff; text-decoration: none;">낭원군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #EF426F; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="전산시·상안군·모제군·서진시.html" style="color: #ffffff; text-decoration: none;">전산시·상안군·모제군·서진시</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #EF426F; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="저천군·덕현군·치원군.html" style="color: #ffffff; text-decoration: none;">저천군·덕현군·치원군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="조현철.html" style="color: #003B96; text-decoration: none;">조현철</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="오선온.html" style="color: #003B96; text-decoration: none;">오선온</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="나두길.html" style="color: #EF426F; text-decoration: none;">나두길</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강동혁.html" style="color: #EF426F; text-decoration: none;">강동혁</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강주시·기도군 갑.html" style="color: #ffffff; text-decoration: none;">강주시·기도군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강주시·기도군 을.html" style="color: #ffffff; text-decoration: none;">강주시·기도군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="약산시·선곡군 갑.html" style="color: #ffffff; text-decoration: none;">약산시·선곡군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="약산시·선곡군 을.html" style="color: #ffffff; text-decoration: none;">약산시·선곡군 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="오시연.html" style="color: #003B96; text-decoration: none;">오시연</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박종선.html" style="color: #003B96; text-decoration: none;">박종선</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="구수만.html" style="color: #003B96; text-decoration: none;">구수만</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="구신원.html" style="color: #003B96; text-decoration: none;">구신원</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="계성시·반양군.html" style="color: #ffffff; text-decoration: none;">계성시·반양군</a></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; border-style: none solid;"></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; border-style: none solid;"></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; border-style: none solid;"></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강현수.html" style="color: #003B96; text-decoration: none;">강현수</a></td>
                                            <td style="border: 1px solid #aaa; border-style: none solid;"></td>
                                            <td style="border: 1px solid #aaa; border-style: none solid;"></td>
                                            <td style="border: 1px solid #aaa; border-style: none solid;"></td>
                                        </tr>
                        </tbody>
                    </table>

                            <div class="result-header" style="text-align: center; padding: 8px; background-color: #f8f9fa; border-top: 1px solid #aaa; color: #005CB9; font-size: 0.95rem; font-weight: bold;">
                                <a href="제21대_국회의원_선거.html" style="color: #005CB9; text-decoration: none;">선거 결과</a>
                            </div>
                            <div class="result-content" style="text-align: center; padding: 12px; border-top: 1px solid #aaa; font-size: 0.85rem; background-color: #fff; line-height: 1.8; color: #888;">
                                * 해당 대수에는 당선무효, 사퇴 등의 특이사항이 없습니다.
                            </div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="제20대.html" style="color:#333; text-decoration:none; font-weight:bold;">제20대</a></div>
                        <div><a href="제22대.html" style="color:#333; text-decoration:none; font-weight:bold;">제22대</a> ▶</div>
                    </div>
                    <div class="nav-footer-areas tracking-wider" style="background-color: #667666; color: white; text-align: center; padding: 10px; font-size: 0.85rem; line-height: 1.8; border-top: 1px solid #aaa; letter-spacing: 0.5px;">
                        비례 · 서울 · 부산 · 대구 · 인천 · 광주 · 대전 · 울산 · 세종<br>
                        경기 · 강원 · 충북 · 충남 · 전남 · 전북 · 경북 · 경남 · 제주 · 효빈 · <span style="font-weight: bold; color: #fde047;">덕빈북도</span> 
                    </div>
                </div>
            </details>
        </div>
        `;

        container.innerHTML = html;
    }
    
    // 컴포넌트 렌더링 실행 (생성할 문서에 id="${containerId}" 인 div를 추가하세요)
    renderDeokbinbukAssembly21Nav('deokbinbuk-assembly-21-nav-container');
});