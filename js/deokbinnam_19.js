document.addEventListener("DOMContentLoaded", function() {
    function renderDeokbinnamAssembly19Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #335566; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:4px;">
                                <img onerror="this.style.display='none'" src="이미지/덕남로고흰색.webp" style="vertical-align: middle; display:block;" width="20"/>
                            </a>
                    <a href="덕빈남도.html" style="color:white; text-decoration: none;">덕빈남도 제19대 국회의원</a>
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
                                            <td class="district-cell" style="width: 25%; background-color: #00529C; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고포군·곡천군.html" style="color: #ffffff; text-decoration: none;">고포군·곡천군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #0095DA; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="인곡군·관수군.html" style="color: #ffffff; text-decoration: none;">인곡군·관수군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #FFD400; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="낙주시·원안군 갑.html" style="color: #000000; text-decoration: none;">낙주시·원안군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #FFD400; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="낙주시·원안군 을.html" style="color: #000000; text-decoration: none;">낙주시·원안군 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이명규.html" style="color: #00529C; text-decoration: none;">이명규</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김동호.html" style="color: #0095DA; text-decoration: none;">김동호</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고성규.html" style="color: #FFD400; text-decoration: none;">고성규</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박현석.html" style="color: #FFD400; text-decoration: none;">박현석</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #FFD400; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕주시 갑.html" style="color: #000000; text-decoration: none;">덕주시 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #FFD400; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="덕주시 을.html" style="color: #000000; text-decoration: none;">덕주시 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #C9252B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="두원군·운진군.html" style="color: #ffffff; text-decoration: none;">두원군·운진군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #C9252B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="마진시·분주군.html" style="color: #ffffff; text-decoration: none;">마진시·분주군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이성태.html" style="color: #FFD400; text-decoration: none;">이성태</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이성진.html" style="color: #FFD400; text-decoration: none;">이성진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박운진.html" style="color: #C9252B; text-decoration: none;">박운진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="조한덕.html" style="color: #C9252B; text-decoration: none;">조한덕</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #FFD400; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="매성시.html" style="color: #000000; text-decoration: none;">매성시</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #FFD400; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="매산군.html" style="color: #000000; text-decoration: none;">매산군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #FFD400; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="방산시·석창군.html" style="color: #000000; text-decoration: none;">방산시·석창군</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #C9252B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="비천시·하정시.html" style="color: #ffffff; text-decoration: none;">비천시·하정시</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박정태.html" style="color: #FFD400; text-decoration: none;">박정태</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="조현수.html" style="color: #FFD400; text-decoration: none;">조현수</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강희철.html" style="color: #FFD400; text-decoration: none;">강희철</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박해룡.html" style="color: #C9252B; text-decoration: none;">박해룡</a></td>
                                        </tr>
                        </tbody>
                    </table>

                            <div class="result-header" style="text-align: center; padding: 8px; background-color: #f8f9fa; border-top: 1px solid #aaa; color: #005CB9; font-size: 0.95rem; font-weight: bold;">
                                <a href="제19대_국회의원_선거.html" style="color: #005CB9; text-decoration: none;">선거 결과</a>
                            </div>
                            <div class="result-content" style="text-align: center; padding: 12px; border-top: 1px solid #aaa; font-size: 0.85rem; background-color: #fff; line-height: 1.8; color: #888;">
                                * 해당 대수에는 당선무효, 사퇴 등의 특이사항이 없습니다.
                            </div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="제18대.html" style="color:#333; text-decoration:none; font-weight:bold;">제18대</a></div>
                        <div><a href="제20대.html" style="color:#333; text-decoration:none; font-weight:bold;">제20대</a> ▶</div>
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
    renderDeokbinnamAssembly19Nav('deokbinnam-assembly-19-nav-container');
});