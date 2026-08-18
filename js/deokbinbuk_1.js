document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinbukAssembly1Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #4AD898; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:4px;">
                    <div class="font-bold bg-white px-1 text-xs rounded" style="color: #4AD898;">H</div>
                    <a href="덕빈북도.html" style="color:white; text-decoration: none;">덕빈북도 제헌 국회의원</a>
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
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="효빈부 갑.html" style="color: #ffffff; text-decoration: none;">효빈부 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #1271B5; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="효빈부 을.html" style="color: #ffffff; text-decoration: none;">효빈부 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #008000; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천주군 갑.html" style="color: #ffffff; text-decoration: none;">천주군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천주군 을.html" style="color: #ffffff; text-decoration: none;">천주군 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이경수.html" style="color: #808080; text-decoration: none;">이경수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박진태.html" style="color: #1271B5; text-decoration: none;">박진태</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="송진우.html" style="color: #008000; text-decoration: none;">송진우</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="백남식.html" style="color: #808080; text-decoration: none;">백남식</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해군 갑.html" style="color: #ffffff; text-decoration: none;">서해군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해군 을.html" style="color: #ffffff; text-decoration: none;">서해군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #008000; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주부.html" style="color: #ffffff; text-decoration: none;">빈주부</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #27176F; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강주부.html" style="color: #ffffff; text-decoration: none;">강주부</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="최인규.html" style="color: #808080; text-decoration: none;">최인규</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정대철.html" style="color: #808080; text-decoration: none;">정대철</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김성호.html" style="color: #008000; text-decoration: none;">김성호</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이만영.html" style="color: #27176F; text-decoration: none;">이만영</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="상안군.html" style="color: #ffffff; text-decoration: none;">상안군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="저천군.html" style="color: #ffffff; text-decoration: none;">저천군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #1271B5; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈성군 갑.html" style="color: #ffffff; text-decoration: none;">빈성군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈성군 을.html" style="color: #ffffff; text-decoration: none;">빈성군 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박재홍.html" style="color: #808080; text-decoration: none;">박재홍</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="한동수.html" style="color: #808080; text-decoration: none;">한동수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김철수.html" style="color: #1271B5; text-decoration: none;">김철수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강일구.html" style="color: #808080; text-decoration: none;">강일구</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강산군.html" style="color: #ffffff; text-decoration: none;">강산군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #008000; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="군천군.html" style="color: #ffffff; text-decoration: none;">군천군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #27176F; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕현군.html" style="color: #ffffff; text-decoration: none;">덕현군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="반양군.html" style="color: #ffffff; text-decoration: none;">반양군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="신동철.html" style="color: #808080; text-decoration: none;">신동철</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="장승태.html" style="color: #008000; text-decoration: none;">장승태</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="백남진.html" style="color: #27176F; text-decoration: none;">백남진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="윤석민.html" style="color: #808080; text-decoration: none;">윤석민</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="탄성군.html" style="color: #ffffff; text-decoration: none;">탄성군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="약산군.html" style="color: #ffffff; text-decoration: none;">약산군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #008000; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="선곡군.html" style="color: #ffffff; text-decoration: none;">선곡군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="기도군.html" style="color: #ffffff; text-decoration: none;">기도군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="장동식.html" style="color: #808080; text-decoration: none;">장동식</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이민섭.html" style="color: #808080; text-decoration: none;">이민섭</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="유진호.html" style="color: #008000; text-decoration: none;">유진호</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김영구.html" style="color: #808080; text-decoration: none;">김영구</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #1271B5; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="모제군.html" style="color: #ffffff; text-decoration: none;">모제군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="전산군.html" style="color: #ffffff; text-decoration: none;">전산군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="치원군.html" style="color: #ffffff; text-decoration: none;">치원군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="낭원군.html" style="color: #ffffff; text-decoration: none;">낭원군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안명국.html" style="color: #1271B5; text-decoration: none;">안명국</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김종길.html" style="color: #808080; text-decoration: none;">김종길</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안병호.html" style="color: #808080; text-decoration: none;">안병호</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김현수.html" style="color: #808080; text-decoration: none;">김현수</a></td>
                                        </tr>
                        </tbody>
                    </table>

                            <div class="result-header" style="text-align: center; padding: 8px; background-color: #f8f9fa; border-top: 1px solid #aaa; color: #005CB9; font-size: 0.95rem; font-weight: bold;">
                                <a href="제헌_국회의원_선거.html" style="color: #005CB9; text-decoration: none;">선거 결과</a>
                            </div>
                            <div class="result-content" style="text-align: center; padding: 12px; border-top: 1px solid #aaa; font-size: 0.85rem; background-color: #fff; line-height: 1.8; color: #888;">
                                * 해당 대수에는 당선무효, 사퇴 등의 특이사항이 없습니다.
                            </div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div></div>
                        <div><a href="제2대.html" style="color:#333; text-decoration:none; font-weight:bold;">제2대</a> ▶</div>
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
    renderDeokbinbukAssembly1Nav('deokbinbuk-assembly-1-nav-container');
});