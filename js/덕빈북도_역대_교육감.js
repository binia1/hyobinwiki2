document.addEventListener("DOMContentLoaded", function() {
    const deokbinbukEduNavHTML = `
    <div style="border: 1px solid #005691; border-radius: 2px; margin-bottom: 20px; font-family: 'Noto Sans KR', sans-serif; background-color: #fff; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        
        <!-- 상단 헤더 영역 -->
        <div style="background-color: #79d2cc; padding: 15px; text-align: center;">
            <img src="이미지/덕빈북도_교육청_로고.svg" alt="덕빈북도 교육청 로고" onerror="this.style.display='none'" style="width: 45px; height: auto; margin: 0 auto 8px auto; display: block; filter: brightness(0) invert(1);">
            <div style="color: white; font-weight: 900; font-size: 1.15rem; letter-spacing: -0.5px;">덕빈북도교육감</div>
        </div>
        
        <!-- 접기/펼치기 토글 바 -->
        <details class="wiki-folder" open="" style="margin: 0; border: none;">
            <summary class="wiki-folder-summary" style="border: none; border-top: 1px solid #5ab8b2; background-color: #5ab8b2; color: white; padding: 6px; font-size: 0.9rem; font-weight: bold; text-align: center; cursor: pointer; list-style: none;">
                [ 펼치기 · 접기 ]
            </summary>
            <div class="wiki-folder-content" style="padding: 0;">
                
                <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed; margin: 0;">
                    <tbody>
                        <!-- 1줄: 관선 제1~5대 -->
                        <tr style="background-color: #fff;">
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제1대</div>
                                <a href="김창배.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">김창배</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제2대</div>
                                <a href="박성환.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">박성환</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제3대</div>
                                <a href="이재훈.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">이재훈</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제4·5대</div>
                                <a href="최명길.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">최명길</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제6대</div>
                                <a href="정동수.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">정동수</a>
                            </td>
                        </tr>
                        
                        <!-- 2줄: 관선 제7~10대 및 간선 제11대 -->
                        <tr style="background-color: #fff;">
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제7대</div>
                                <a href="한기영.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">한기영</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제8대</div>
                                <a href="조영진.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">조영진</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제9·10대</div>
                                <a href="강진규.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">강진규</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제11대</div>
                                <a href="오태식.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">오태식</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제12대</div>
                                <a href="임석호.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">임석호</a>
                            </td>
                        </tr>

                        <!-- 3줄: 간선 제13~14대 및 민선 제15~16대 -->
                        <tr style="background-color: #fff;">
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제13대</div>
                                <a href="백남준.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">백남준</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제14대</div>
                                <a href="신태환.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">신태환</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제15대</div>
                                <a href="유기택.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">유기택</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제16대</div>
                                <a href="안명진.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">안명진</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;">
                                <div style="font-size: 0.8rem; color: #777; margin-bottom: 3px;">제17·18·19대</div>
                                <a href="권상민.html" style="color: #0055aa; text-decoration: none; font-size: 0.95rem;">권상민</a>
                            </td>
                        </tr>

                        <!-- 4줄: 제20대 현직 하이라이트 -->
                        <tr style="background-color: #fff;">
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px; background-color: #fef3c7; box-shadow: inset 0 0 0 2px #79d2cc;" colspan="1">
                                <div style="font-size: 0.8rem; color: #059669; margin-bottom: 3px; font-weight: bold;">제20대</div>
                                <a href="유근혁.html" style="color: #0055aa; text-decoration: none; font-size: 1rem; font-weight: bold;">유근혁</a>
                            </td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;"></td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;"></td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;"></td>
                            <td style="border: 1px solid #e0e0e0; padding: 12px 5px;"></td>
                        </tr>
                    </tbody>
                </table>
                
                <!-- 하단 공식 슬로건 영역 -->
                <div style="padding: 12px; text-align: center; background-color: #fafafa; border-top: 1px solid #e0e0e0;">
                    <span style="font-size: 1.05rem; font-weight: 900; letter-spacing: -0.5px;">
                        <span style="color: #0055aa;">배움이 즐거운 학교,</span> <span style="color: #79d2cc;">함께 성장하는</span> <span style="color: #f39c12;">덕빈 교육</span>
                    </span>
                </div>
            </div>
        </details>
    </div>
    `;

    const container = document.querySelector(".deokbinbuk-edu-nav-container");
    if (container) {
        container.innerHTML = deokbinbukEduNavHTML;
    }
});