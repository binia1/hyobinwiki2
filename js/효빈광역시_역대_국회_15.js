document.addEventListener("DOMContentLoaded", function() {
    function render효빈광역시_역대_국회Assembly15Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #7777AA; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">
                <span style="display:inline-flex; align-items:center; gap:4px;">
                                <img onerror="this.style.display='none'" src="이미지/효빈광역시_흰색로고.webp" style="vertical-align: middle; display:block;" width="20"/>
                            </a>
                    <a href="효빈광역시.html" style="color:white; text-decoration: none;">효빈광역시 제15대 국회의원</a>
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
                                            <td class="district-cell" style="width: 25%; background-color: #003990; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남구 갑.html" style="color: #ffffff; text-decoration: none;">남구 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남구 을.html" style="color: #ffffff; text-decoration: none;">남구 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="북구·동구 갑.html" style="color: #ffffff; text-decoration: none;">북구·동구 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="북구·동구 을.html" style="color: #ffffff; text-decoration: none;">북구·동구 을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안덕경.html" style="color: #003990; text-decoration: none;">안덕경</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="상안길.html" style="color: #009A44; text-decoration: none;">상안길</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="권미현.html" style="color: #009A44; text-decoration: none;">권미현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="구승락.html" style="color: #009A44; text-decoration: none;">구승락</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="청엽갑.html" style="color: #ffffff; text-decoration: none;">청엽갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="청엽을.html" style="color: #ffffff; text-decoration: none;">청엽을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안천갑.html" style="color: #ffffff; text-decoration: none;">안천갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안천을.html" style="color: #ffffff; text-decoration: none;">안천을</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="문능현.html" style="color: #009A44; text-decoration: none;">문능현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="송류진.html" style="color: #009A44; text-decoration: none;">송류진</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고형민.html" style="color: #009A44; text-decoration: none;">고형민</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="진성현.html" style="color: #009A44; text-decoration: none;">진성현</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 25%; background-color: #1B5B40; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서구.html" style="color: #ffffff; text-decoration: none;">서구</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="창전구·탄성군 갑.html" style="color: #ffffff; text-decoration: none;">창전구·탄성군 갑</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #009A44; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="창전구·탄성군 을.html" style="color: #ffffff; text-decoration: none;">창전구·탄성군 을</a></td>
                                            <td class="district-cell" style="width: 25%; background-color: #1B5B40; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="중구.html" style="color: #ffffff; text-decoration: none;">중구</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="강석현.html" style="color: #1B5B40; text-decoration: none;">강석현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="김국민.html" style="color: #009A44; text-decoration: none;">김국민</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="원대현.html" style="color: #009A44; text-decoration: none;">원대현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="개성민.html" style="color: #1B5B40; text-decoration: none;">개성민</a></td>
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
                        경기 · 강원 · 충북 · 충남 · 전남 · 전북 · 경북 · 경남 · 제주 · 효빈
                    </div>
                </div>
            </details>
        </div>
        `;

        container.innerHTML = html;
    }
    
    // 컴포넌트 렌더링 실행 (생성할 문서에 id="${containerId}" 인 div를 추가하세요)
    render효빈광역시_역대_국회Assembly15Nav('효빈광역시_역대_국회-assembly-15-nav-container');
});