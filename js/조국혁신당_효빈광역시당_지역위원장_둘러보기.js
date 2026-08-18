document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("joguk-hyobin-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px; font-family: 'Noto Sans KR', sans-serif;">
            <div style="border: 2px solid #0073CF; border-radius: 2px; overflow: hidden; background-color: white;">
                
                <!-- 상단 헤더 (네이비 - 트루블루 - 네이비 3분할) -->
                <div style="display: flex; width: 100%; min-height: 48px;">
                    <div style="flex: 1; background-color: #002D62;"></div>
                    <div style="flex: 3; background-color: #0073CF; display: flex; align-items: center; justify-content: center; padding: 10px;">
                        <a class="wiki-link" href="조국혁신당.html" style="color:white; font-weight:900; font-size: 1.15rem; text-decoration: none; letter-spacing: -0.5px;" class="hover:underline">
                            조국혁신당 효빈광역시당 지역위원장
                        </a>
                    </div>
                    <div style="flex: 1; background-color: #002D62;"></div>
                </div>
                
                <!-- 펼치기/접기 바 (트루블루 - 네이비 - 트루블루 3분할) -->
                <details open style="margin: 0;">
                    <summary style="display: flex; width: 100%; cursor: pointer; list-style: none; margin: 0; padding: 0; border-top: 1px solid rgba(255,255,255,0.3);">
                        <div style="flex: 1; background-color: #0073CF;"></div>
                        <div style="flex: 3; background-color: #002D62; text-align: center; padding: 6px; color: white; font-size: 0.9rem; font-weight: bold;">
                            [ 펼치기 · 접기 ]
                        </div>
                        <div style="flex: 1; background-color: #0073CF;"></div>
                    </summary>
                    
                    <div style="padding: 0;">
                        <!-- 위원장 목록 테이블 -->
                        <table style="width: 100%; text-align: center; border-collapse: collapse; table-layout: fixed;">
                            
                            <!-- 시당위원장 (전체 너비 차지) -->
                            <tr>
                                <td colspan="3" style="background-color: #0073CF; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white;">시당위원장</td>
                            </tr>
                            <tr>
                                <td colspan="3" style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;">
                                    <a href="임건석.html" style="color: #333; text-decoration: none; font-weight: 500;" class="hover:underline">임건석</a>
                                </td>
                            </tr>
                            
                            <!-- 1열 (3개 지역구) -->
                            <tr>
                                <td style="background-color: #0073CF; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white; width: 33.33%;"><a href="동구(효빈).html" style="color: white; text-decoration: none;">동</a></td>
                                <td style="background-color: #0073CF; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white; width: 33.33%;"><a href="서구(선거구).html" style="color: white; text-decoration: none;">서</a></td>
                                <td style="background-color: #0073CF; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white; width: 33.33%;"><a href="남구_갑(효빈).html" style="color: white; text-decoration: none;">남</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="조우영.html" style="color: #333; text-decoration: none; font-weight: 500;" class="hover:underline">조우영</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="주예현.html" style="color: #333; text-decoration: none; font-weight: 500;" class="hover:underline">주예현</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="김안혁.html" style="color: #333; text-decoration: none; font-weight: 500;" class="hover:underline">김안혁</a></td>
                            </tr>

                            <!-- 2열 (3개 지역구) -->
                            <tr>
                                <td style="background-color: #0073CF; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white;"><a href="북구_갑(효빈).html" style="color: white; text-decoration: none;">북</a></td>
                                <td style="background-color: #0073CF; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white;"><a href="안천구_갑.html" style="color: white; text-decoration: none;">안천</a></td>
                                <td style="background-color: #0073CF; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white;"><a href="탄성군(선거구).html" style="color: white; text-decoration: none;">탄성</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="신현국.html" style="color: #333; text-decoration: none; font-weight: 500;" class="hover:underline">신현국</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="사성현.html" style="color: #333; text-decoration: none; font-weight: 500;" class="hover:underline">사성현</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="유상진.html" style="color: #333; text-decoration: none; font-weight: 500;" class="hover:underline">유상진</a></td>
                            </tr>

                            <!-- 3열 (조국혁신당 텍스트 셀 박스) -->
                            <tr>
                                <td colspan="2" style="background-color: #fff; border: 1px solid #ddd;"></td>
                                <td style="background-color: #0073CF; padding: 18px 8px; border: 1px solid #ddd; vertical-align: middle;">
                                    <a href="조국혁신당.html" style="color: white; font-weight: 900; font-size: 1.25rem; text-decoration: none; letter-spacing: -0.5px;">조국혁신당</a>
                                </td>
                            </tr>
                        </table>

                        <!-- 하단 푸터 (타 정당 및 지역) -->
                        <div style="background-color: #0073CF; padding: 12px; text-align: center; line-height: 1.6; border-top: 1px solid rgba(255,255,255,0.2);">
                            <div style="color: white; font-size: 0.85rem; font-weight: bold; margin-bottom: 4px;">
                                더불어민주당 · 국민의힘 · 진보당 · 개혁신당 · 새미래민주당 · 정의당
                            </div>
                            <div style="color: white; font-size: 0.8rem;">
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