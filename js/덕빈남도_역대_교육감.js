document.addEventListener("DOMContentLoaded", function() {
    const deokbinnamEduNavHTML = `
    <div style="border: 1px solid #005691; border-radius: 2px; margin-bottom: 20px; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        
        <!-- 상단 헤더 영역 -->
        <div style="background-color: #0077DD; padding: 15px; text-align: center;">
            <img src="이미지/덕빈남도_교육청_로고.svg" alt="덕빈남도 교육청 로고" onerror="this.style.display='none'" style="width: 45px; height: auto; margin: 0 auto 8px auto; display: block; filter: brightness(0) invert(1);">
            <div style="color: white; font-weight: 900; font-size: 1.15rem; letter-spacing: -0.5px;">덕빈남도교육감</div>
        </div>
        
        <!-- 접기/펼치기 토글 바 -->
        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-top: 1px solid #005bb5; background-color: #005bb5; color: white; padding: 6px; font-size: 0.9rem; font-weight: bold; text-align: center; cursor: pointer; list-style: none;">
                [ 펼치기 · 접기 ]
            </summary>
            <div class="wiki-folder-content" style="padding: 0;">
                
                <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed; margin: 0;">
                    <tbody>
                        <!-- 1줄: 관선 제1~5대 -->
                        <tr style="background-color: #fff;">
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제1대</div>
                                <a href="이석준.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">이석준</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제2대</div>
                                <a href="김형철.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">김형철</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제3대</div>
                                <a href="박정수.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">박정수</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제4·5대</div>
                                <a href="최동건.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">최동건</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제6대</div>
                                <a href="정태민.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">정태민</a>
                            </td>
                        </tr>
                        
                        <!-- 2줄: 관선 제7~10대 및 간선 제11대 -->
                        <tr style="background-color: #fff;">
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제7대</div>
                                <a href="한영수.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">한영수</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제8대</div>
                                <a href="강민호.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">강민호</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제9·10대</div>
                                <a href="송기택.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">송기택</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제11대</div>
                                <a href="조학영.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">조학영</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제12대</div>
                                <a href="윤석진.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">윤석진</a>
                            </td>
                        </tr>

                        <!-- 3줄: 간선 제13~14대 및 민선 제15~17대 -->
                        <tr style="background-color: #fff;">
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제13대</div>
                                <a href="임대환.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">임대환</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제14대</div>
                                <a href="백성기.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">백성기</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제15대</div>
                                <a href="김영호.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">김영호</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제16·17대</div>
                                <a href="장태산.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">장태산</a>
                            </td>
                            <!-- 제18·19·20대 우미현 현직 하이라이트 -->
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px; background-color: #f0f9ff; box-shadow: inset 0 0 0 2px #0077DD;">
                                <div style="font-size: 0.8rem; color: #0077DD; margin-bottom: 3px; font-weight: bold;">제18·19·20대</div>
                                <a href="우미현.html" style="color: #0055aa; text-decoration: none; font-size: 1rem; font-weight: bold;">우미현</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <!-- 하단 공식 슬로건 영역 -->
                <div style="padding: 12px; text-align: center; background-color: #fafafa; border-top: 1px solid #e0e0e0;">
                    <span style="font-size: 1.05rem; font-weight: 900; letter-spacing: -0.5px;">
                        <span style="color: #0077DD;">꿈을 키우는 교실,</span> <span style="color: #00CCAA;">미래를 여는</span> <span style="color: #333;">덕빈남도 교육</span>
                    </span>
                </div>
            </div>
        </details>
    </div>
    `;

    const container = document.querySelector(".deokbinnam-edu-nav-container");
    if (container) {
        container.innerHTML = deokbinnamEduNavHTML;
    }
});