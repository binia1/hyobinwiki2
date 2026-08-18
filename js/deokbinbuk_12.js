document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinbukAssembly12Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #4AD898; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:4px;">
                    <div class="font-bold bg-white px-1 text-xs rounded" style="color: #4AD898;">H</div>
                    <a href="덕빈북도.html" style="color:white; text-decoration: none;">덕빈북도 제12대 국회의원</a>
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
                                            <td class="district-cell" style="width: 25%; background-color: #0A84E9; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제1(빈주/빈성).html" style="color: #ffffff; text-decoration: none;">덕빈북 제1(빈주/빈성)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #0A84E9; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제2(탄성/선곡/약산).html" style="color: #ffffff; text-decoration: none;">덕빈북 제2(탄성/선곡/약산)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #0A84E9; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제3(강주/강산/기도/저천).html" style="color: #ffffff; text-decoration: none;">덕빈북 제3(강주/강산/기도/저천)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #E6573B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제4(천성/궁하/치원).html" style="color: #ffffff; text-decoration: none;">덕빈북 제4(천성/궁하/치원)</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="주암인.html" style="color: #0A84E9; text-decoration: none;">주암인</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="조산태.html" style="color: #0A84E9; text-decoration: none;">조산태</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정계철.html" style="color: #0A84E9; text-decoration: none;">정계철</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서진우.html" style="color: #E6573B; text-decoration: none;">서진우</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #E6573B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제5(천주/낭원).html" style="color: #ffffff; text-decoration: none;">덕빈북 제5(천주/낭원)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제6(반양/계성/덕현).html" style="color: #ffffff; text-decoration: none;">덕빈북 제6(반양/계성/덕현)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #ED2939; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제7(서해/압일).html" style="color: #ffffff; text-decoration: none;">덕빈북 제7(서해/압일)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #ED2939; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제8(상안/서진/모제).html" style="color: #ffffff; text-decoration: none;">덕빈북 제8(상안/서진/모제)</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강태원.html" style="color: #E6573B; text-decoration: none;">강태원</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강승호.html" style="color: #808080; text-decoration: none;">강승호</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="황도식.html" style="color: #ED2939; text-decoration: none;">황도식</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남궁진.html" style="color: #ED2939; text-decoration: none;">남궁진</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #E6573B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제9(군천/군양/전산).html" style="color: #ffffff; text-decoration: none;">덕빈북 제9(군천/군양/전산)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #ED2939; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제1(빈주/빈성).html" style="color: #ffffff; text-decoration: none;">덕빈북 제1(빈주/빈성)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #ED2939; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제2(탄성/선곡/약산).html" style="color: #ffffff; text-decoration: none;">덕빈북 제2(탄성/선곡/약산)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #ED2939; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제3(강주/강산/기도/저천).html" style="color: #ffffff; text-decoration: none;">덕빈북 제3(강주/강산/기도/저천)</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="홍길수.html" style="color: #E6573B; text-decoration: none;">홍길수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안덕경.html" style="color: #ED2939; text-decoration: none;">안덕경</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정기훈.html" style="color: #ED2939; text-decoration: none;">정기훈</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="윤성호.html" style="color: #ED2939; text-decoration: none;">윤성호</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #0A84E9; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제4(천성/궁하/치원).html" style="color: #ffffff; text-decoration: none;">덕빈북 제4(천성/궁하/치원)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #0A84E9; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제5(천주/낭원).html" style="color: #ffffff; text-decoration: none;">덕빈북 제5(천주/낭원)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #0A84E9; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제6(반양/계성/덕현).html" style="color: #ffffff; text-decoration: none;">덕빈북 제6(반양/계성/덕현)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #0A84E9; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제7(서해/압일).html" style="color: #ffffff; text-decoration: none;">덕빈북 제7(서해/압일)</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="오명석.html" style="color: #0A84E9; text-decoration: none;">오명석</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김가익.html" style="color: #0A84E9; text-decoration: none;">김가익</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남구혁.html" style="color: #0A84E9; text-decoration: none;">남구혁</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="배창호.html" style="color: #0A84E9; text-decoration: none;">배창호</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #0A84E9; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제8(상안/서진/모제).html" style="color: #ffffff; text-decoration: none;">덕빈북 제8(상안/서진/모제)</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #0A84E9; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕빈북 제9(군천/군양/전산).html" style="color: #ffffff; text-decoration: none;">덕빈북 제9(군천/군양/전산)</a></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; border-style: none solid;"></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; border-style: none solid;"></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="조명환.html" style="color: #0A84E9; text-decoration: none;">조명환</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="신동일.html" style="color: #0A84E9; text-decoration: none;">신동일</a></td>
                                            <td style="border: 1px solid #aaa; border-style: none solid;"></td>
                                            <td style="border: 1px solid #aaa; border-style: none solid;"></td>
                                        </tr>
                        </tbody>
                    </table>

                            <div class="result-header" style="text-align: center; padding: 8px; background-color: #f8f9fa; border-top: 1px solid #aaa; color: #005CB9; font-size: 0.95rem; font-weight: bold;">
                                <a href="제12대_국회의원_선거.html" style="color: #005CB9; text-decoration: none;">선거 결과</a>
                            </div>
                            <div class="result-content" style="text-align: center; padding: 12px; border-top: 1px solid #aaa; font-size: 0.85rem; background-color: #fff; line-height: 1.8; color: #888;">
                                * 해당 대수에는 당선무효, 사퇴 등의 특이사항이 없습니다.
                            </div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="제11대.html" style="color:#333; text-decoration:none; font-weight:bold;">제11대</a></div>
                        <div><a href="제13대.html" style="color:#333; text-decoration:none; font-weight:bold;">제13대</a> ▶</div>
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
    renderDeokbinbukAssembly12Nav('deokbinbuk-assembly-12-nav-container');
});