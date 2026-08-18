document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinbukAssembly2Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #4AD898; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:4px;">
                    <div class="font-bold bg-white px-1 text-xs rounded" style="color: #4AD898;">H</div>
                    <a href="덕빈북도.html" style="color:white; text-decoration: none;">덕빈북도 제2대 국회의원</a>
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
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="효빈시 갑.html" style="color: #ffffff; text-decoration: none;">효빈시 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="효빈시 을.html" style="color: #ffffff; text-decoration: none;">효빈시 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시.html" style="color: #ffffff; text-decoration: none;">빈주시</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천성군.html" style="color: #ffffff; text-decoration: none;">천성군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="윤치성.html" style="color: #808080; text-decoration: none;">윤치성</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이태수.html" style="color: #808080; text-decoration: none;">이태수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="장동환.html" style="color: #808080; text-decoration: none;">장동환</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="유갑수.html" style="color: #808080; text-decoration: none;">유갑수</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #ADFF2F; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해군 갑.html" style="color: #000000; text-decoration: none;">서해군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해군 을.html" style="color: #ffffff; text-decoration: none;">서해군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #ADFF2F; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천주시.html" style="color: #000000; text-decoration: none;">천주시</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강주시.html" style="color: #ffffff; text-decoration: none;">강주시</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김성진.html" style="color: #ADFF2F; text-decoration: none;">김성진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이민우.html" style="color: #808080; text-decoration: none;">이민우</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="송진우.html" style="color: #ADFF2F; text-decoration: none;">송진우</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="오동진.html" style="color: #808080; text-decoration: none;">오동진</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="상안군.html" style="color: #ffffff; text-decoration: none;">상안군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="저천군 갑.html" style="color: #ffffff; text-decoration: none;">저천군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #ADFF2F; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="저천군 을.html" style="color: #000000; text-decoration: none;">저천군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #ADFF2F; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈성군 갑.html" style="color: #000000; text-decoration: none;">빈성군 갑</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="윤택근.html" style="color: #808080; text-decoration: none;">윤택근</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김성수.html" style="color: #808080; text-decoration: none;">김성수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박기훈.html" style="color: #ADFF2F; text-decoration: none;">박기훈</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강동식.html" style="color: #ADFF2F; text-decoration: none;">강동식</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈성군 을.html" style="color: #ffffff; text-decoration: none;">빈성군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="낭원군.html" style="color: #ffffff; text-decoration: none;">낭원군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="치원군.html" style="color: #ffffff; text-decoration: none;">치원군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="약산군.html" style="color: #ffffff; text-decoration: none;">약산군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이병학.html" style="color: #808080; text-decoration: none;">이병학</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김현수.html" style="color: #808080; text-decoration: none;">김현수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이종길.html" style="color: #808080; text-decoration: none;">이종길</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="조일태.html" style="color: #808080; text-decoration: none;">조일태</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #C0C0FF; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강산군.html" style="color: #000000; text-decoration: none;">강산군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강산군.html" style="color: #ffffff; text-decoration: none;">강산군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="군천군.html" style="color: #ffffff; text-decoration: none;">군천군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕현군.html" style="color: #ffffff; text-decoration: none;">덕현군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="신동철.html" style="color: #C0C0FF; text-decoration: none;">신동철</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="최동식.html" style="color: #808080; text-decoration: none;">최동식</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="장승태.html" style="color: #808080; text-decoration: none;">장승태</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="심상철.html" style="color: #808080; text-decoration: none;">심상철</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="반양군.html" style="color: #ffffff; text-decoration: none;">반양군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="탄성군.html" style="color: #ffffff; text-decoration: none;">탄성군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="선곡군.html" style="color: #ffffff; text-decoration: none;">선곡군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #ADFF2F; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="기도군.html" style="color: #000000; text-decoration: none;">기도군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="임대영.html" style="color: #808080; text-decoration: none;">임대영</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정기태.html" style="color: #808080; text-decoration: none;">정기태</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="유진호.html" style="color: #808080; text-decoration: none;">유진호</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="송원식.html" style="color: #ADFF2F; text-decoration: none;">송원식</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="모제군.html" style="color: #ffffff; text-decoration: none;">모제군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="전산군.html" style="color: #ffffff; text-decoration: none;">전산군</a></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; border-style: none solid;"></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; border-style: none solid;"></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안명국.html" style="color: #808080; text-decoration: none;">안명국</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김종길.html" style="color: #808080; text-decoration: none;">김종길</a></td>
                                            <td style="border: 1px solid #aaa; border-style: none solid;"></td>
                                            <td style="border: 1px solid #aaa; border-style: none solid;"></td>
                                        </tr>
                        </tbody>
                    </table>

                            <div class="result-header" style="text-align: center; padding: 8px; background-color: #f8f9fa; border-top: 1px solid #aaa; color: #005CB9; font-size: 0.95rem; font-weight: bold;">
                                <a href="제2대_국회의원_선거.html" style="color: #005CB9; text-decoration: none;">선거 결과</a>
                            </div>
                            <div class="result-content" style="text-align: center; padding: 12px; border-top: 1px solid #aaa; font-size: 0.85rem; background-color: #fff; line-height: 1.8; color: #888;">
                                * 해당 대수에는 당선무효, 사퇴 등의 특이사항이 없습니다.
                            </div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="제헌.html" style="color:#333; text-decoration:none; font-weight:bold;">제헌</a></div>
                        <div><a href="제3대.html" style="color:#333; text-decoration:none; font-weight:bold;">제3대</a> ▶</div>
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
    renderDeokbinbukAssembly2Nav('deokbinbuk-assembly-2-nav-container');
});