document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("saemirae-hyobin-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px; font-family: 'Noto Sans KR', sans-serif;">
            <div style="border: 2px solid #41B6B5; border-radius: 2px; overflow: hidden; background-color: white;">
                
                <!-- 상단 헤더 (민트색) -->
                <div style="background-color: #41B6B5; text-align: center; padding: 12px;">
                    <span style="display:inline-flex; align-items:center; justify-content:center; gap:6px;">
                        <a class="wiki-link" href="새미래민주당.html" style="color:white; font-weight:900; font-size: 1.25rem; text-decoration: none; letter-spacing: -1px;" class="hover:underline">
                            새미래민주당 <span style="font-weight: 700; font-size: 1.15rem; letter-spacing: -0.5px;">효빈광역시당 지역위원장</span>
                        </a>
                    </span>
                </div>
                
                <!-- 펼치기/접기 바 (민트색) -->
                <details open style="margin: 0;">
                    <summary style="background-color: #41B6B5; color: white; text-align: center; padding: 6px; cursor: pointer; font-size: 0.9rem; font-weight: bold; list-style: none; border-top: 1px solid rgba(255,255,255,0.3);">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div style="padding: 0;">
                        <!-- 위원장 목록 테이블 (딥블루 & 화이트) -->
                        <table style="width: 100%; text-align: center; border-collapse: collapse; table-layout: fixed;">
                            
                            <!-- 시당위원장 (전체 너비 3칸 차지) -->
                            <tr>
                                <td colspan="3" style="background-color: #24539B; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white;">시당위원장</td>
                            </tr>
                            <tr>
                                <td colspan="3" style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;">
                                    <a href="조낙지.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">조낙지</a>
                                </td>
                            </tr>
                            
                            <!-- 1열 (3개 지역구) -->
                            <tr>
                                <td style="background-color: #24539B; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white; width: 33.33%;"><a href="중구-동구.html" style="color: white; text-decoration: none;">중구·동구</a></td>
                                <td style="background-color: #24539B; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white; width: 33.33%;"><a href="서구(선거구).html" style="color: white; text-decoration: none;">서구</a></td>
                                <td style="background-color: #24539B; padding: 8px; border: 1px solid #ddd; font-weight: bold; color: white; width: 33.33%;"><a href="청엽구_갑.html" style="color: white; text-decoration: none;">청엽 갑</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="조낙지.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">조낙지</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="지총민.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">지총민</a></td>
                                <td style="padding: 10px 8px; border: 1px solid #ddd; background-color: #fff;"><a href="유인철.html" style="color: #0055AA; text-decoration: none; font-weight: 500;" class="hover:underline">유인철</a></td>
                            </tr>
                        </table>

                        <!-- 하단 푸터 (타 정당 및 지역) -->
                        <div style="background-color: #41B6B5; padding: 12px; text-align: center; line-height: 1.6;">
                            <div style="color: white; font-size: 0.85rem; font-weight: bold; margin-bottom: 4px;">
                                더불어민주당 · 국민의힘 · 조국혁신당 · 진보당 · 개혁신당 · 정의당
                            </div>
                            <div style="color: white; font-size: 0.8rem;">
                                서울 · 전남광주 · 인천 · 대전 · 울산 · 세종 · 경기 · 강원 · 충북 · 충남 · 전북 · 경북 · 경남 · 제주 · 효빈 · 덕북 · 덕남
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
        `;
    }
});