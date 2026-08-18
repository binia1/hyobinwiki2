document.addEventListener("DOMContentLoaded", function() {
    function renderHyobinHead2Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #7777aa; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">

                <span style="display:inline-flex; align-items:center; gap:6px;">
                    <img src="이미지/logo.webp" alt="효빈광역시 로고" style="height: 40px !important; width: auto; vertical-align: middle; filter: brightness(0) invert(1);">
                    <a href="효빈광역시.html" style="color:white; text-decoration: none;">효빈광역시 민선 2기 기초자치단체장</a>
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
                                            <td class="district-cell" style="width: 20%; background-color: #00AA7B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="중구.html" style="color: #ffffff; text-decoration: none;">중구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #1B5B40; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="동구.html" style="color: #ffffff; text-decoration: none;">동구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #1B5B40; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서구.html" style="color: #ffffff; text-decoration: none;">서구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #00AA7B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남구.html" style="color: #ffffff; text-decoration: none;">남구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #00AA7B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="북구.html" style="color: #ffffff; text-decoration: none;">북구</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="신유림.html" style="color: #00AA7B; text-decoration: none;">신유림</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정미현.html" style="color: #1B5B40; text-decoration: none;">정미현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="조서원.html" style="color: #1B5B40; text-decoration: none;">조서원</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="신원심.html" style="color: #00AA7B; text-decoration: none;">신원심</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="구임현.html" style="color: #00AA7B; text-decoration: none;">구임현</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #00AA7B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="청엽구.html" style="color: #ffffff; text-decoration: none;">청엽구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #00AA7B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안천구.html" style="color: #ffffff; text-decoration: none;">안천구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #00AA7B; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="창전구.html" style="color: #ffffff; text-decoration: none;">창전구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #0095DA; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="탄성군.html" style="color: #ffffff; text-decoration: none;">탄성군</a></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="문연민.html" style="color: #00AA7B; text-decoration: none;">문연민</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="도영만.html" style="color: #00AA7B; text-decoration: none;">도영만</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고안성.html" style="color: #00AA7B; text-decoration: none;">고안성</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정만춘.html" style="color: #0095DA; text-decoration: none;">정만춘</a></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                        </tr>
                        </tbody>
                    </table>
                    <div class="result-note">
<span style="color: #0062cc; font-weight: bold;">선거 결과</span><br/>
<span style="opacity: 0.9;">
                    * 2000년 새정치국민회의가 새천년민주당으로 창당됨에 따라 당적 변경
                    </span>
</div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="민선 1기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 1기</a></div>
                        <div><a href="민선 3기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 3기</a> ▶</div>
                    </div>
                </div>
            </details>
        </div>
        `;

        container.innerHTML = html;
    }
    
    // 컴포넌트 렌더링 실행
    renderHyobinHead2Nav('hyobin-head-2-nav-container');
});