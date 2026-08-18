document.addEventListener("DOMContentLoaded", function() {
    function renderHyobinHead3Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #7777aa; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">

                <span style="display:inline-flex; align-items:center; gap:6px;">
                    <img src="이미지/logo.webp" alt="효빈광역시 로고" style="height: 40px !important; width: auto; vertical-align: middle; filter: brightness(0) invert(1);">
                    <a href="효빈광역시.html" style="color:white; text-decoration: none;">효빈광역시 민선 3기 기초자치단체장</a>
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
                                            <td class="district-cell" style="width: 20%; background-color: #FFD700; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="중구.html" style="color: #000000; text-decoration: none;">중구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0095DA; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="동구.html" style="color: #ffffff; text-decoration: none;">동구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #1B5B40; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서구.html" style="color: #ffffff; text-decoration: none;">서구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #FFD700; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남구.html" style="color: #000000; text-decoration: none;">남구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #00736D; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="북구.html" style="color: #ffffff; text-decoration: none;">북구</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="신유림.html" style="color: #FFD700; text-decoration: none;">신유림</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정미현.html" style="color: #0095DA; text-decoration: none;">정미현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="조서원.html" style="color: #1B5B40; text-decoration: none;">조서원</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="임유정.html" style="color: #FFD700; text-decoration: none;">임유정</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고민현.html" style="color: #00736D; text-decoration: none;">고민현</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #FFD700; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="청엽구.html" style="color: #000000; text-decoration: none;">청엽구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #FFD700; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안천구.html" style="color: #000000; text-decoration: none;">안천구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #00736D; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="창전구.html" style="color: #ffffff; text-decoration: none;">창전구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0095DA; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="탄성군.html" style="color: #ffffff; text-decoration: none;">탄성군</a></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="문연민.html" style="color: #FFD700; text-decoration: none;">문연민</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="도영만.html" style="color: #FFD700; text-decoration: none;">도영만</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고안성.html" style="color: #00736D; text-decoration: none;">고안성</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="신영한.html" style="color: #0095DA; text-decoration: none;">신영한</a></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                        </tr>
                        </tbody>
                    </table>
                    <div class="result-note">
<span style="color: #0062cc; font-weight: bold;">선거 결과</span><br/>
<span style="opacity: 0.9;">
                    * 당초 새천년민주당 소속이던 다수의 구청장들이 임기 중반 열린우리당 창당에 합류하며 당적을 대거 변경하였다.<br/>
                    * 북구, 창전구청장은 분당 사태 당시 잔류하여 새천년민주당의 후신인 민주당(2005) 소속으로 임기를 마쳤다.
                    </span>
</div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="민선 2기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 2기</a></div>
                        <div><a href="민선 4기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 4기</a> ▶</div>
                    </div>
                </div>
            </details>
        </div>
        `;

        container.innerHTML = html;
    }
    
    // 컴포넌트 렌더링 실행
    renderHyobinHead3Nav('hyobin-head-3-nav-container');
});