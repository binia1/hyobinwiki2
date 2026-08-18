document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinbukAssembly5Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #4AD898; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:4px;">
                    <div class="font-bold bg-white px-1 text-xs rounded" style="color: #4AD898;">H</div>
                    <a href="덕빈북도.html" style="color:white; text-decoration: none;">덕빈북도 제5대(민의원) 국회의원</a>
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
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="효빈시 갑.html" style="color: #ffffff; text-decoration: none;">효빈시 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="효빈시 을.html" style="color: #ffffff; text-decoration: none;">효빈시 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="효빈시 병.html" style="color: #ffffff; text-decoration: none;">효빈시 병</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="효빈시 정.html" style="color: #ffffff; text-decoration: none;">효빈시 정</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="윤치성.html" style="color: #000080; text-decoration: none;">윤치성</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이태수.html" style="color: #000080; text-decoration: none;">이태수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강기태.html" style="color: #000080; text-decoration: none;">강기태</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="송창식.html" style="color: #000080; text-decoration: none;">송창식</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시 갑.html" style="color: #ffffff; text-decoration: none;">빈주시 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="약산군.html" style="color: #ffffff; text-decoration: none;">약산군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈주시 을.html" style="color: #ffffff; text-decoration: none;">빈주시 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천주시.html" style="color: #ffffff; text-decoration: none;">천주시</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="장동환.html" style="color: #000080; text-decoration: none;">장동환</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이민섭.html" style="color: #000080; text-decoration: none;">이민섭</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이석기.html" style="color: #000080; text-decoration: none;">이석기</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="송진우.html" style="color: #000080; text-decoration: none;">송진우</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해군 갑.html" style="color: #ffffff; text-decoration: none;">서해군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서해군 을.html" style="color: #ffffff; text-decoration: none;">서해군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="상안군 갑.html" style="color: #ffffff; text-decoration: none;">상안군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="상안군 을.html" style="color: #ffffff; text-decoration: none;">상안군 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="주원국.html" style="color: #808080; text-decoration: none;">주원국</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정성국.html" style="color: #000080; text-decoration: none;">정성국</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안기현.html" style="color: #808080; text-decoration: none;">안기현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이종태.html" style="color: #000080; text-decoration: none;">이종태</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="저천군 갑.html" style="color: #ffffff; text-decoration: none;">저천군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="저천군 을.html" style="color: #ffffff; text-decoration: none;">저천군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강주시.html" style="color: #ffffff; text-decoration: none;">강주시</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈성군 갑.html" style="color: #ffffff; text-decoration: none;">빈성군 갑</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김성수.html" style="color: #808080; text-decoration: none;">김성수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="한기용.html" style="color: #000080; text-decoration: none;">한기용</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김재철.html" style="color: #808080; text-decoration: none;">김재철</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="최형만.html" style="color: #808080; text-decoration: none;">최형만</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="빈성군 을.html" style="color: #ffffff; text-decoration: none;">빈성군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천성군 갑.html" style="color: #ffffff; text-decoration: none;">천성군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="천성군 을.html" style="color: #ffffff; text-decoration: none;">천성군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="낭원군.html" style="color: #ffffff; text-decoration: none;">낭원군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박영식.html" style="color: #000080; text-decoration: none;">박영식</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="한준수.html" style="color: #808080; text-decoration: none;">한준수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강상철.html" style="color: #000080; text-decoration: none;">강상철</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="신진욱.html" style="color: #000080; text-decoration: none;">신진욱</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="치원군.html" style="color: #ffffff; text-decoration: none;">치원군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강산군.html" style="color: #ffffff; text-decoration: none;">강산군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="군천군 갑.html" style="color: #ffffff; text-decoration: none;">군천군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="군천군 을.html" style="color: #ffffff; text-decoration: none;">군천군 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="오명석.html" style="color: #808080; text-decoration: none;">오명석</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="윤종수.html" style="color: #000080; text-decoration: none;">윤종수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="장승태.html" style="color: #808080; text-decoration: none;">장승태</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박찬호.html" style="color: #000080; text-decoration: none;">박찬호</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕현군.html" style="color: #ffffff; text-decoration: none;">덕현군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="반양군 갑.html" style="color: #ffffff; text-decoration: none;">반양군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="반양군 을.html" style="color: #ffffff; text-decoration: none;">반양군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="탄성군.html" style="color: #ffffff; text-decoration: none;">탄성군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="유인탁.html" style="color: #000080; text-decoration: none;">유인탁</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이병학.html" style="color: #000080; text-decoration: none;">이병학</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="임대영.html" style="color: #808080; text-decoration: none;">임대영</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="권도환.html" style="color: #808080; text-decoration: none;">권도환</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="선곡군.html" style="color: #ffffff; text-decoration: none;">선곡군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="기도군.html" style="color: #ffffff; text-decoration: none;">기도군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="모제군.html" style="color: #ffffff; text-decoration: none;">모제군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #000080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="전산군.html" style="color: #ffffff; text-decoration: none;">전산군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정동윤.html" style="color: #000080; text-decoration: none;">정동윤</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안상수.html" style="color: #000080; text-decoration: none;">안상수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김명환.html" style="color: #000080; text-decoration: none;">김명환</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="최도영.html" style="color: #000080; text-decoration: none;">최도영</a></td>
                                        </tr>
                        </tbody>
                    </table>

                            <div class="result-header" style="text-align: center; padding: 8px; background-color: #f8f9fa; border-top: 1px solid #aaa; color: #005CB9; font-size: 0.95rem; font-weight: bold;">
                                <a href="제5대(민의원)_국회의원_선거.html" style="color: #005CB9; text-decoration: none;">선거 결과</a>
                            </div>
                            <div class="result-content" style="text-align: center; padding: 12px; border-top: 1px solid #aaa; font-size: 0.85rem; background-color: #fff; line-height: 1.8; color: #888;">
                                * 해당 대수에는 당선무효, 사퇴 등의 특이사항이 없습니다.
                            </div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="제4대.html" style="color:#333; text-decoration:none; font-weight:bold;">제4대</a></div>
                        <div><a href="제5대(참의원).html" style="color:#333; text-decoration:none; font-weight:bold;">제5대(참의원)</a> ▶</div>
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
    renderDeokbinbukAssembly5Nav('deokbinbuk-assembly-5-nav-container');
});