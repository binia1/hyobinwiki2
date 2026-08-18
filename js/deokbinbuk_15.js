document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinbukAssembly15Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #4AD898; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:4px;">
                    <div class="font-bold bg-white px-1 text-xs rounded" style="color: #4AD898;">H</div>
                    <a href="덕빈북도.html" style="color:white; text-decoration: none;">덕빈북도 제15대 국회의원</a>
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
                                            <td class="district-cell" style="width: 25%; background-color: #04972D; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시 갑.html" style="color: #ffffff; text-decoration: none;">빈주시 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시 을.html" style="color: #ffffff; text-decoration: none;">빈주시 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #1B5B40; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시 병.html" style="color: #ffffff; text-decoration: none;">빈주시 병</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="궁하시.html" style="color: #ffffff; text-decoration: none;">궁하시</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="차성원.html" style="color: #04972D; text-decoration: none;">차성원</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="신국환.html" style="color: #009A44; text-decoration: none;">신국환</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="주암인.html" style="color: #1B5B40; text-decoration: none;">주암인</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안수남.html" style="color: #009A44; text-decoration: none;">안수남</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천주시.html" style="color: #ffffff; text-decoration: none;">천주시</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003990; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천성군.html" style="color: #ffffff; text-decoration: none;">천성군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #04972D; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해시 갑.html" style="color: #ffffff; text-decoration: none;">서해시 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해시 을.html" style="color: #ffffff; text-decoration: none;">서해시 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="유광진.html" style="color: #009A44; text-decoration: none;">유광진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김가익.html" style="color: #003990; text-decoration: none;">김가익</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="송재환.html" style="color: #04972D; text-decoration: none;">송재환</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="임동주.html" style="color: #808080; text-decoration: none;">임동주</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #04972D; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="군천시 갑.html" style="color: #ffffff; text-decoration: none;">군천시 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #1B5B40; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="군천시 을.html" style="color: #ffffff; text-decoration: none;">군천시 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003990; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="낭원군·치원군.html" style="color: #ffffff; text-decoration: none;">낭원군·치원군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003990; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="전산시.html" style="color: #ffffff; text-decoration: none;">전산시</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="곽상태.html" style="color: #04972D; text-decoration: none;">곽상태</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="노영진.html" style="color: #1B5B40; text-decoration: none;">노영진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="배철민.html" style="color: #003990; text-decoration: none;">배철민</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="허남기.html" style="color: #003990; text-decoration: none;">허남기</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #003990; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="상안군·모제군.html" style="color: #ffffff; text-decoration: none;">상안군·모제군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003990; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서진시.html" style="color: #ffffff; text-decoration: none;">서진시</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #1B5B40; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="저천군·덕현군.html" style="color: #ffffff; text-decoration: none;">저천군·덕현군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #04972D; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="반양군·계성시.html" style="color: #ffffff; text-decoration: none;">반양군·계성시</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="백준호.html" style="color: #003990; text-decoration: none;">백준호</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남궁진.html" style="color: #003990; text-decoration: none;">남궁진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안기동.html" style="color: #1B5B40; text-decoration: none;">안기동</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강승호.html" style="color: #04972D; text-decoration: none;">강승호</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강주시·기도군 갑.html" style="color: #ffffff; text-decoration: none;">강주시·기도군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003990; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강주시·기도군 을.html" style="color: #ffffff; text-decoration: none;">강주시·기도군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="약산시-선곡군 갑.html" style="color: #ffffff; text-decoration: none;">약산시-선곡군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #1B5B40; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="약산시-선곡군 을.html" style="color: #ffffff; text-decoration: none;">약산시-선곡군 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="윤상원.html" style="color: #009A44; text-decoration: none;">윤상원</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="표진석.html" style="color: #003990; text-decoration: none;">표진석</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="하재영.html" style="color: #009A44; text-decoration: none;">하재영</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="문석환.html" style="color: #1B5B40; text-decoration: none;">문석환</a></td>
                                        </tr>
                        </tbody>
                    </table>

                            <div class="result-header" style="text-align: center; padding: 8px; background-color: #f8f9fa; border-top: 1px solid #aaa; color: #005CB9; font-size: 0.95rem; font-weight: bold;">
                                <a href="제15대_국회의원_선거.html" style="color: #005CB9; text-decoration: none;">선거 결과</a>
                            </div>
                            <div class="result-content" style="text-align: center; padding: 12px; border-top: 1px solid #aaa; font-size: 0.85rem; background-color: #fff; line-height: 1.8; color: #888;">
                                * 해당 대수에는 당선무효, 사퇴 등의 특이사항이 없습니다.
                            </div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="제14대.html" style="color:#333; text-decoration:none; font-weight:bold;">제14대</a></div>
                        <div><a href="제16대.html" style="color:#333; text-decoration:none; font-weight:bold;">제16대</a> ▶</div>
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
    renderDeokbinbukAssembly15Nav('deokbinbuk-assembly-15-nav-container');
});