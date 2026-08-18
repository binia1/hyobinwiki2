document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("justice-hyobin-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px; font-family: 'Noto Sans KR', sans-serif;">
            <div style="border: 2px solid #FFED00; border-radius: 2px; overflow: hidden; background-color: white;">
                
                <!-- 상단 헤더 (노란색 + 우측 3색 사선 포인트) -->
                <div style="background-color: #FFED00; text-align: center; padding: 12px; position: relative; overflow: hidden;">
                    <span style="display:inline-flex; align-items:center; justify-content:center; gap:6px; position: relative; z-index: 2;">
                        <!-- 정의당 체크마크 로고 (SVG) -->
                        <a class="wiki-link" href="정의당.html" style="display:flex; align-items:center; text-decoration:none;">
                            <svg width="24" height="24" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15,45 L40,75 L85,20 L70,10 L40,50 L25,35 Z" />
                            </svg>
                        </a>
                        <a class="wiki-link" href="정의당.html" style="color:black; font-weight:900; font-size: 1.15rem; text-decoration: none; letter-spacing: -0.5px;" class="hover:underline">
                            정의당 효빈광역시당 지역위원장
                        </a>
                    </span>
                    <!-- 우측 상단 정의당 아이덴티티 3색 사선 -->
                    <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100%; background: linear-gradient(60deg, transparent 35%, #E61E68 35% 55%, #009959 55% 75%, #4D227A 75%); z-index: 1;"></div>
                </div>
                
                <!-- 펼치기/접기 바 (노란색 바탕, 검은 글씨) -->
                <details open style="margin: 0;">
                    <summary style="background-color: #FFED00; color: black; text-align: center; padding: 6px; cursor: pointer; font-size: 0.9rem; font-weight: bold; list-style: none; border-top: 1px solid rgba(0,0,0,0.1);">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div style="padding: 0;">
                        <!-- 위원장 목록 테이블 -->
                        <table style="width: 100%; text-align: center; border-collapse: collapse; table-layout: fixed;">
                            
                            <!-- 시당위원장 (전체 너비 3칸 차지) -->
                            <tr>
                                <td colspan="3" style="background-color: #009959; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white;">시당위원장</td>
                            </tr>
                            <tr>
                                <td colspan="3" style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;">
                                    <a href="이사원.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">이사원</a>
                                </td>
                            </tr>
                            
                            <!-- 1열 (3개 지역구) -->
                            <tr>
                                <td style="background-color: #009959; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white; width: 33.33%;"><a href="북구_갑(효빈).html" style="color: white; text-decoration: none;">북구</a></td>
                                <td style="background-color: #009959; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white; width: 33.33%;"><a href="서구(선거구).html" style="color: white; text-decoration: none;">서구</a></td>
                                <td style="background-color: #009959; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white; width: 33.33%;"><a href="남구_갑(효빈).html" style="color: white; text-decoration: none;">남구</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="이사원.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">이사원</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="신석현.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">신석현</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="유은현.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">유은현</a></td>
                            </tr>
                        </table>

                        <!-- 하단 푸터 (타 정당 및 지역) -->
                        <div style="background-color: #FFED00; padding: 12px; text-align: center; line-height: 1.6; border-top: 1px solid rgba(0,0,0,0.1);">
                            <div style="color: black; font-size: 0.85rem; font-weight: bold; margin-bottom: 4px;">
                                더불어민주당 · 국민의힘 · 조국혁신당 · 진보당 · 개혁신당 · 새미래민주당
                            </div>
                            <div style="color: #333; font-size: 0.8rem;">
                                서울 · 전남광주 · 부산 · 대구 · 인천 · 대전 · 울산 · 세종 · 경기 · 강원 · 충북 · 충남 · 전북 · 경북 · 경남 · 제주 · 효빈 · 덕북 · 덕남
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
        `;
    }
});