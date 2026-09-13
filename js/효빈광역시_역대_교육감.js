document.addEventListener("DOMContentLoaded", function() {
    const hyobinEduNavHTML = `
    <div style="border: 1px solid #005691; border-radius: 2px; margin-bottom: 20px; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        
        <!-- 상단 헤더 영역 -->
        <div style="background-color: #0284c7; padding: 15px; text-align: center;">
            <img src="이미지/효빈광역시_교육청_로고.webp" alt="효빈광역시 교육청 로고" style="width: 45px; height: auto; margin: 0 auto 8px auto; display: block; filter: brightness(0) invert(1);">
            <div style="color: white; font-weight: 900; font-size: 1.15rem; letter-spacing: -0.5px;">효빈광역시교육감</div>
        </div>
        
        <!-- 접기/펼치기 토글 바 -->
        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-top: 1px solid #016295; background-color: #016295; color: white; padding: 6px; font-size: 0.9rem; font-weight: bold; text-align: center; cursor: pointer; list-style: none;">
                [ 펼치기 · 접기 ]
            </summary>
            <div class="wiki-folder-content" style="padding: 0;">
                
                <!-- 5열 데이터 테이블 -->
                <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed; margin: 0;">
                    <tbody>
                        <!-- 1번째 줄 -->
                        <tr style="background-color: #fff;">
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #4db8ff; margin-bottom: 3px;">제1대</div>
                                <a href="유상진.html" style="color: #0055aa; text-decoration: none; font-size: 1rem;">유상진</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #4db8ff; margin-bottom: 3px;">제2대</div>
                                <a href="송석율.html" style="color: #0055aa; text-decoration: none; font-size: 1rem;">송석율</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #4db8ff; margin-bottom: 3px;">제3대</div>
                                <a href="고현무.html" style="color: #0055aa; text-decoration: none; font-size: 1rem;">고현무</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #4db8ff; margin-bottom: 3px;">제4대</div>
                                <a href="용주영.html" style="color: #0055aa; text-decoration: none; font-size: 1rem;">용주영</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #4db8ff; margin-bottom: 3px;">제5대</div>
                                <a href="고성훈.html" style="color: #0055aa; text-decoration: none; font-size: 1rem;">고성훈</a>
                            </td>
                        </tr>
                        
                        <!-- 2번째 줄 -->
                        <tr style="background-color: #fff;">
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #4db8ff; margin-bottom: 3px;">제6·7대</div>
                                <a href="신윤민.html" style="color: #0055aa; text-decoration: none; font-size: 1rem;">신윤민</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #4db8ff; margin-bottom: 3px;">제8~10대</div>
                                <a href="민송현.html" style="color: #0055aa; text-decoration: none; font-size: 1rem;">민송현</a>
                            </td>
                            <!-- 현직 하이라이트 셀 -->
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px; background-color: #e6f7ff; box-shadow: inset 0 0 0 2px #0284c7;">
                                <div style="font-size: 0.8rem; color: #0284c7; margin-bottom: 3px; font-weight: bold;">제11·12대</div>
                                <a href="이남현.html" style="color: #0055aa; text-decoration: none; font-size: 1rem; font-weight: bold;">이남현</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;"></td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;"></td>
                        </tr>
                    </tbody>
                </table>
                
                <!-- 하단 슬로건 영역 -->
                <div style="padding: 12px; text-align: center; background-color: #fafafa; border-top: 1px solid #e0e0e0;">
                    <span style="font-size: 1.1rem; font-weight: 900; letter-spacing: -0.5px;">
                        <span style="color: #0055aa;">덕성으로</span> <span style="color: #f39c12;">하나되는,</span> <span style="color: #0284c7;">다함께 새로운</span> <span style="color: #e74c3c;">효빈교육</span>
                    </span>
                </div>
            </div>
        </details>
    </div>
    `;

    const container = document.querySelector(".hyobin-edu-nav-container");
    if (container) {
        container.innerHTML = hyobinEduNavHTML;
    }
});