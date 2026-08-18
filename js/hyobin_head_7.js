document.addEventListener("DOMContentLoaded", function() {
    function renderHyobinHead7Nav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = `
        <div class="nav-box shadow-sm" style="border: 1px solid #aaa; margin-bottom: 30px; background-color: #fff; font-family: 'Noto Sans KR', sans-serif;">
            <div class="nav-header tracking-wide" style="background-color: #7777aa; color: white; text-align: center; font-weight: bold; padding: 8px; font-size: 1.05rem;">

                <span style="display:inline-flex; align-items:center; gap:6px;">
                    <img src="이미지/logo.webp" alt="효빈광역시 로고" style="height: 40px !important; width: auto; vertical-align: middle; filter: brightness(0) invert(1);">
                    <a href="효빈광역시.html" style="color:white; text-decoration: none;">효빈광역시 민선 7기 기초자치단체장</a>
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
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="중구.html" style="color: #ffffff; text-decoration: none;">중구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="동구.html" style="color: #ffffff; text-decoration: none;">동구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="서구.html" style="color: #ffffff; text-decoration: none;">서구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="남구.html" style="color: #ffffff; text-decoration: none;">남구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="북구.html" style="color: #ffffff; text-decoration: none;">북구</a></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="고영민.html" style="color: #004EA2; text-decoration: none;">고영민</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="우영철.html" style="color: #004EA2; text-decoration: none;">우영철</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="노서현.html" style="color: #004EA2; text-decoration: none;">노서현</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="오전희.html" style="color: #004EA2; text-decoration: none;">오전희</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="정주연.html" style="color: #004EA2; text-decoration: none;">정주연</a></td>
                                        </tr>
                                        <tr>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="청엽구.html" style="color: #ffffff; text-decoration: none;">청엽구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="안천구.html" style="color: #ffffff; text-decoration: none;">안천구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="창전구.html" style="color: #ffffff; text-decoration: none;">창전구</a></td>
                                            <td class="district-cell" style="width: 20%; background-color: #004EA2; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="탄성군.html" style="color: #ffffff; text-decoration: none;">탄성군</a></td>
                                            <td style="width: 20%; background-color: #f9f9f9; border: 1px solid #aaa; "></td>
                                        </tr>
                                        <tr>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="권상남.html" style="color: #004EA2; text-decoration: none;">권상남</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="이규희.html" style="color: #004EA2; text-decoration: none;">이규희</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="전역헌.html" style="color: #004EA2; text-decoration: none;">전역헌</a></td>
                                            <td class="member-cell" style="background-color: #ffffff; padding: 8px 4px; border: 1px solid #aaa; font-weight: bold;"><a href="조왕현.html" style="color: #004EA2; text-decoration: none;">조왕현</a></td>
                                            <td style="border: 1px solid #aaa; "></td>
                                        </tr>
                        </tbody>
                    </table>
                    <div class="result-note">
<span style="color: #0062cc; font-weight: bold;">선거 결과</span><br/>
<span style="opacity: 0.9;">
                    * 당초 당선된 동구청장 조양현(자유한국당) 당선무효 <i class="fas fa-arrow-right mx-1 text-xs"></i> <b>2020년 보궐선거 우영철(더불어민주당) 당선</b>
</span>
</div>
                    <div class="nav-bottom-links" style="background-color: #f8f9fa; display: flex; justify-content: space-between; padding: 8px 15px; font-size: 0.85rem; font-weight: bold; border-top: 1px solid #aaa;">
                        <div>◀ <a href="민선 6기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 6기</a></div>
                        <div><a href="민선 8기.html" style="color:#333; text-decoration:none; font-weight:bold;">민선 8기</a> ▶</div>
                    </div>
                </div>
            </details>
        </div>
        `;

        container.innerHTML = html;
    }
    
    // 컴포넌트 렌더링 실행
    renderHyobinHead7Nav('hyobin-head-7-nav-container');
});