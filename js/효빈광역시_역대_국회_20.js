document.addEventListener("DOMContentLoaded", function() {
    function render효빈광역시_역대_국회Assembly20Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #7777AA; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:4px;">
                                <img onerror="this.style.display='none'" src="이미지/효빈광역시_흰색로고.webp" style="vertical-align: middle; display:block;" width="20"/>
                            </a>
                    <a href="효빈광역시.html" style="color:white; text-decoration: none;">효빈광역시 제20대 국회의원</a>
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
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남구 갑.html" style="color: #ffffff; text-decoration: none;">남구 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남구 을.html" style="color: #ffffff; text-decoration: none;">남구 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="북구 갑.html" style="color: #ffffff; text-decoration: none;">북구 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="북구 을.html" style="color: #ffffff; text-decoration: none;">북구 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="노신상.html" style="color: #003B96; text-decoration: none;">노신상</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="구지남.html" style="color: #000000; text-decoration: none;">구지남</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="조상현.html" style="color: #003B96; text-decoration: none;">조상현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="원성준.html" style="color: #003B96; text-decoration: none;">원성준</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="청엽갑.html" style="color: #ffffff; text-decoration: none;">청엽갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="청엽을.html" style="color: #ffffff; text-decoration: none;">청엽을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안천갑.html" style="color: #ffffff; text-decoration: none;">안천갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안천을.html" style="color: #ffffff; text-decoration: none;">안천을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="기명민.html" style="color: #003B96; text-decoration: none;">기명민</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="두강민.html" style="color: #003B96; text-decoration: none;">두강민</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="도구연.html" style="color: #000000; text-decoration: none;">도구연</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="우구인.html" style="color: #003B96; text-decoration: none;">우구인</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서구.html" style="color: #ffffff; text-decoration: none;">서구</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="창전 갑.html" style="color: #ffffff; text-decoration: none;">창전 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="창전 을.html" style="color: #ffffff; text-decoration: none;">창전 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #003B96; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="탄성군.html" style="color: #ffffff; text-decoration: none;">탄성군</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="두영민.html" style="color: #000000; text-decoration: none;">두영민</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고안성.html" style="color: #003B96; text-decoration: none;">고안성</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="노상현.html" style="color: #003B96; text-decoration: none;">노상현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="박현만.html" style="color: #003B96; text-decoration: none;">박현만</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #808080; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="동구·중구.html" style="color: #ffffff; text-decoration: none;">동구·중구</a></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                            <td style="width: 25%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="용시현.html" style="color: #808080; text-decoration: none;">용시현</a></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                        </tr>
                        </tbody>
                    </table>

                            <div class="result-header" style="text-align: center; padding: 8px; background-color: #f8f9fa; border-top: 1px solid #aaa; color: #005CB9; font-size: 0.95rem; font-weight: bold;">
                                <a href="제20대_국회의원_선거.html" style="color: #005CB9; text-decoration: none;">선거 결과</a>
                            </div>
                            <div class="result-content" style="text-align: center; padding: 12px; border-top: 1px solid #aaa; font-size: 0.85rem; background-color: #fff; line-height: 1.8; color: #888;">
                                * 해당 대수에는 당선무효, 사퇴 등의 특이사항이 없습니다.
                            </div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="제19대.html" style="color:#333; text-decoration:none; font-weight:bold;">제19대</a></div>
                        <div><a href="제21대.html" style="color:#333; text-decoration:none; font-weight:bold;">제21대</a> ▶</div>
                    </div>
                    <div class="nav-footer-areas tracking-wider" style="background-color: #667666; color: white; text-align: center; padding: 10px; font-size: 0.85rem; line-height: 1.8; border-top: 1px solid #aaa; letter-spacing: 0.5px;">
                        비례 · 서울 · 부산 · 대구 · 인천 · 광주 · 대전 · 울산 · 세종<br>
                        경기 · 강원 · 충북 · 충남 · 전남 · 전북 · 경북 · 경남 · 제주 · 효빈
                    </div>
                </div>
            </details>
        </div>
        `;

        container.innerHTML = html;
    }
    
    // 컴포넌트 렌더링 실행 (생성할 문서에 id="${containerId}" 인 div를 추가하세요)
    render효빈광역시_역대_국회Assembly20Nav('효빈광역시_역대_국회-assembly-20-nav-container');
});