document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("deoknam-local-gov-heads-nav-container");
    
    if (container) {
        container.innerHTML = `
        <table class="nav-table" style="border: 2px solid #335566; width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
                <td class="nav-header" style="background-color: #335566; padding: 8px;">
                    <span class="nav-header-wrap" style="display:inline-flex; align-items:center; gap:8px; justify-content: center; width: 100%;">
                        <a href="덕빈남도.html" class="wiki-link" style="color:white;">
                            <!-- 로고 강제 흰색 처리(invert) 및 크기 35px로 확대 -->
                            <img src="이미지/덕빈남도_로고.webp" style="vertical-align: middle; display:block; width: 35px; filter: brightness(0) invert(1);" alt="덕빈남도 로고">
                        </a>
                        <a href="덕빈남도.html#s-자치단체장" class="wiki-link" style="color:white; font-weight: bold;">민선 9기 덕빈남도 기초자치단체장</a>
                    </span>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; background-color: #fff;">
                    <details open style="border: none; margin: 0;">
                        <summary style="display:none;">[ 펼치기 · 접기 ]</summary>
                        <div style="padding: 5px;">
                             <table style="width: 100%; text-align: center; border-collapse: collapse; margin: 0;">
                                <!-- 1열 -->
                                <tr style="color: white;">
                                    <td style="width: 16.6%; background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="매성시.html" class="nav-th" style="color: white; font-weight: bold;">매성시</a></td>
                                    <td style="width: 16.6%; background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="매산군.html" class="nav-th" style="color: white; font-weight: bold;">매산군</a></td>
                                    <td style="width: 16.6%; background-color: var(--party-ppp); border: 1px solid #e2e8f0; padding: 5px;"><a href="비천시.html" class="nav-th" style="color: white; font-weight: bold;">비천시</a></td>
                                    <td style="width: 16.6%; background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="석창군.html" class="nav-th" style="color: white; font-weight: bold;">석창군</a></td>
                                    <td style="width: 16.6%; background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="방산시.html" class="nav-th" style="color: white; font-weight: bold;">방산시</a></td>
                                    <td style="width: 16.6%; background-color: var(--party-indep); border: 1px solid #e2e8f0; padding: 5px;"><a href="분주군.html" class="nav-th" style="color: white; font-weight: bold;">분주군</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="오세윤.html" class="nav-link minju">오세윤</a> (4선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="전지호.html" class="nav-link minju">전지호</a> (초선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="고정화.html" class="nav-link ppp">고정화</a> (4선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="최민규.html" class="nav-link minju">최민규</a> (재선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="이재원.html" class="nav-link minju">이재원</a> (3선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="김태수.html" class="nav-link indep">김태수</a> (재선)</td>
                                </tr>
                                <!-- 2열 -->
                                <tr style="color: white;">
                                    <td style="background-color: var(--party-ppp); border: 1px solid #e2e8f0; padding: 5px;"><a href="고포군.html" class="nav-th" style="color: white; font-weight: bold;">고포군</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="곡천군.html" class="nav-th" style="color: white; font-weight: bold;">곡천군</a></td>
                                    <td style="background-color: var(--party-indep); border: 1px solid #e2e8f0; padding: 5px;"><a href="인곡군.html" class="nav-th" style="color: white; font-weight: bold;">인곡군</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="관수군.html" class="nav-th" style="color: white; font-weight: bold;">관수군</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="운진군.html" class="nav-th" style="color: white; font-weight: bold;">운진군</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="두원군.html" class="nav-th" style="color: white; font-weight: bold;">두원군</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="문석준.html" class="nav-link ppp">문석준</a> (3선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="주언일.html" class="nav-link minju">주언일</a> (초선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="강준영.html" class="nav-link indep">강준영</a> (재선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="서윤수.html" class="nav-link minju">서윤수</a> (재선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="김도연.html" class="nav-link minju">김도연</a> (3선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="이영진.html" class="nav-link minju">이영진</a> (재선)</td>
                                </tr>
                                <!-- 3열 -->
                                <tr style="color: white;">
                                    <td style="background-color: var(--party-ppp); border: 1px solid #e2e8f0; padding: 5px;"><a href="마진시.html" class="nav-th" style="color: white; font-weight: bold;">마진시</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="덕주시.html" class="nav-th" style="color: white; font-weight: bold;">덕주시</a></td>
                                    <td style="background-color: var(--party-ppp); border: 1px solid #e2e8f0; padding: 5px;"><a href="하정시.html" class="nav-th" style="color: white; font-weight: bold;">하정시</a></td>
                                    <td style="background-color: var(--party-indep); border: 1px solid #e2e8f0; padding: 5px;"><a href="원안군.html" class="nav-th" style="color: white; font-weight: bold;">원안군</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="낙주시.html" class="nav-th" style="color: white; font-weight: bold;">낙주시</a></td>
                                    <td style="background-color: #f9f9f9; border: 1px solid #e2e8f0;"></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="문양인.html" class="nav-link ppp">문양인</a> (초선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="정동혁.html" class="nav-link minju">정동혁</a> (3선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="신태양.html" class="nav-link ppp">신태양</a> (3선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="윤재민.html" class="nav-link indep">윤재민</a> (재선)</td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="최현수.html" class="nav-link minju">최현수</a> (재선)</td>
                                    <td style="background-color: #f9f9f9; border: 1px solid #e2e8f0;"></td>
                                </tr>
                             </table>

                             <!-- 전국 지자체 이동 내비게이션 바 (덕남 강조) -->
                             <table style="width: 100%; text-align: center; border-collapse: collapse; margin-top: 5px;">
                                 <tr>
                                     <td style="background-color: #335566; color: white; padding: 10px; font-size: 0.85em; font-weight: bold; line-height: 1.6;">
                                         <a href="서울.html" style="color: white; text-decoration: none;">서울</a> · 
                                         <a href="전남광주.html" style="color: white; text-decoration: none;">전남광주</a> · 
                                         <a href="부산.html" style="color: white; text-decoration: none;">부산</a> · 
                                         <a href="대구.html" style="color: white; text-decoration: none;">대구</a> · 
                                         <a href="인천.html" style="color: white; text-decoration: none;">인천</a> · 
                                         <a href="대전.html" style="color: white; text-decoration: none;">대전</a> · 
                                         <a href="울산.html" style="color: white; text-decoration: none;">울산</a> · 
                                         <a href="효빈광역시.html" style="color: white; text-decoration: none;">효빈</a> · 
                                         <a href="경기.html" style="color: white; text-decoration: none;">경기</a> · 
                                         <a href="강원.html" style="color: white; text-decoration: none;">강원</a> · 
                                         <a href="충북.html" style="color: white; text-decoration: none;">충북</a> · 
                                         <a href="충남.html" style="color: white; text-decoration: none;">충남</a> · 
                                         <a href="전북.html" style="color: white; text-decoration: none;">전북</a> · 
                                         <a href="경북.html" style="color: white; text-decoration: none;">경북</a> · 
                                         <a href="경남.html" style="color: white; text-decoration: none;">경남</a> · 
                                         <a href="덕북.html" style="color: white; text-decoration: none;">덕북</a> · 
                                         <a href="덕남.html" style="color: #FFCC11; text-decoration: none;">덕남</a>
                                     </td>
                                 </tr>
                             </table>
                        </div>
                    </details>
                </td>
            </tr>
        </table>
        `;
    }
});