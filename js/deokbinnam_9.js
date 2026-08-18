document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinnamAssembly9Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #335566; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:4px;">
                                <img onerror="this.style.display='none'" src="이미지/덕남로고흰색.webp" style="vertical-align: middle; display:block;" width="20"/>
                            </a>
                    <a href="덕빈남도.html" style="color:white; text-decoration: none;">덕빈남도 제9대 국회의원</a>
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
                                            <td class="district-cell" style="width: 25%; background-color: #835B38; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제1선거구 (북서부)] 매성시·매산군·석창군.html" style="color: #ffffff; text-decoration: none;">[제1선거구 (북서부)] 매성시·매산군·석창군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #835B38; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제2선거구 (북동부)] 비천시·비원군·원안군.html" style="color: #ffffff; text-decoration: none;">[제2선거구 (북동부)] 비천시·비원군·원안군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제3선거구 (중서부)] 하정시·하산군·방산군.html" style="color: #ffffff; text-decoration: none;">[제3선거구 (중서부)] 하정시·하산군·방산군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #DC352A; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제4선거구 (중동부)] 덕주시·덕산군·낙주군.html" style="color: #ffffff; text-decoration: none;">[제4선거구 (중동부)] 덕주시·덕산군·낙주군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="홍재만.html" style="color: #835B38; text-decoration: none;">홍재만</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="구자춘.html" style="color: #835B38; text-decoration: none;">구자춘</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고영진.html" style="color: #808080; text-decoration: none;">고영진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김진택.html" style="color: #DC352A; text-decoration: none;">김진택</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #835B38; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제5선거구 (중남부)] 마진군·분주군.html" style="color: #ffffff; text-decoration: none;">[제5선거구 (중남부)] 마진군·분주군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #DC352A; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제6선거구 (남서해안)] 인곡군·곡천군·고포군.html" style="color: #ffffff; text-decoration: none;">[제6선거구 (남서해안)] 인곡군·곡천군·고포군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #835B38; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제7선거구 (남동해안)] 관수군·두원군·운진군.html" style="color: #ffffff; text-decoration: none;">[제7선거구 (남동해안)] 관수군·두원군·운진군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #DC352A; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제1선거구 (북서부)] 매성시·매산군·석창군.html" style="color: #ffffff; text-decoration: none;">[제1선거구 (북서부)] 매성시·매산군·석창군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="권재호.html" style="color: #835B38; text-decoration: none;">권재호</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="유정수.html" style="color: #DC352A; text-decoration: none;">유정수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="최성훈.html" style="color: #835B38; text-decoration: none;">최성훈</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="송재섭.html" style="color: #DC352A; text-decoration: none;">송재섭</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #DC352A; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제2선거구 (북동부)] 비천시·비원군·원안군.html" style="color: #ffffff; text-decoration: none;">[제2선거구 (북동부)] 비천시·비원군·원안군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #835B38; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제3선거구 (중서부)] 하정시·하산군·방산군.html" style="color: #ffffff; text-decoration: none;">[제3선거구 (중서부)] 하정시·하산군·방산군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #835B38; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제4선거구 (중동부)] 덕주시·덕산군·낙주군.html" style="color: #ffffff; text-decoration: none;">[제4선거구 (중동부)] 덕주시·덕산군·낙주군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #DC352A; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제5선거구 (중남부)] 마진군·분주군.html" style="color: #ffffff; text-decoration: none;">[제5선거구 (중남부)] 마진군·분주군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="하동수.html" style="color: #DC352A; text-decoration: none;">하동수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정일권.html" style="color: #835B38; text-decoration: none;">정일권</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="윤상철.html" style="color: #835B38; text-decoration: none;">윤상철</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="곽태영.html" style="color: #DC352A; text-decoration: none;">곽태영</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #835B38; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제6선거구 (남서해안)] 인곡군·곡천군·고포군.html" style="color: #ffffff; text-decoration: none;">[제6선거구 (남서해안)] 인곡군·곡천군·고포군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="[제7선거구 (남동해안)] 관수군·두원군·운진군.html" style="color: #ffffff; text-decoration: none;">[제7선거구 (남동해안)] 관수군·두원군·운진군</a></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="신재만.html" style="color: #835B38; text-decoration: none;">신재만</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="황석진.html" style="color: #808080; text-decoration: none;">황석진</a></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                        </tr>
                        </tbody>
                    </table>

                            <div class="result-header" style="text-align: center; padding: 8px; background-color: #f8f9fa; border-top: 1px solid #aaa; color: #005CB9; font-size: 0.95rem; font-weight: bold;">
                                <a href="제9대_국회의원_선거.html" style="color: #005CB9; text-decoration: none;">선거 결과</a>
                            </div>
                            <div class="result-content" style="text-align: center; padding: 12px; border-top: 1px solid #aaa; font-size: 0.85rem; background-color: #fff; line-height: 1.8; color: #888;">
                                * 해당 대수에는 당선무효, 사퇴 등의 특이사항이 없습니다.
                            </div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="제8대.html" style="color:#333; text-decoration:none; font-weight:bold;">제8대</a></div>
                        <div><a href="제10대.html" style="color:#333; text-decoration:none; font-weight:bold;">제10대</a> ▶</div>
                    </div>
                    <div class="nav-footer-areas tracking-wider" style="background-color: #667666; color: white; text-align: center; padding: 10px; font-size: 0.85rem; line-height: 1.8; border-top: 1px solid #aaa; letter-spacing: 0.5px;">
                        비례 · 서울 · 부산 · 대구 · 인천 · 광주 · 대전 · 울산 · 세종<br>
                        경기 · 강원 · 충북 · 충남 · 전남 · 전북 · 경북 · 경남 · 제주 · 효빈 · <span style="font-weight: bold; color: #fde047;">덕빈남도</span> 
                    </div>
                </div>
            </details>
        </div>
        `;

        container.innerHTML = html;
    }
    
    // 컴포넌트 렌더링 실행 (생성할 문서에 id="${containerId}" 인 div를 추가하세요)
    renderDeokbinnamAssembly9Nav('deokbinnam-assembly-9-nav-container');
});