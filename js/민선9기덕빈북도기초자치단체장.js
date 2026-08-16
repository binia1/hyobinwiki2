document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("deokbin-local-gov-heads-nav-container");
    
    if (container) {
        container.innerHTML = `
        <table class="nav-table" style="border: 2px solid #2ECC71; width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
                <td class="nav-header" style="background-color: #2ECC71; padding: 8px;">
                    <span class="nav-header-wrap" style="display:inline-flex; align-items:center; gap:8px; justify-content: center; width: 100%;">
                        <a href="덕빈북도.html" class="wiki-link" style="color:white;">
                            <!-- 로고 강제 흰색 처리(invert) 및 크기 35px로 확대 -->
                            <img src="이미지/덕북로고.webp" style="vertical-align: middle; display:block; width: 35px; filter: brightness(0) invert(1);" alt="덕빈북도 로고">
                        </a>
                        <a href="덕빈북도.html#s-자치단체장" class="wiki-link" style="color:white; font-weight: bold;">민선 9기 덕빈북도 기초자치단체장</a>
                    </span>
                </td>
            </tr>
            <tr>
                <td style="padding: 0; background-color: #fff;">
                    <details open style="border: none; margin: 0;">
                        <summary style="display:none;">[ 펼치기 · 접기 ]</summary>
                        <div style="padding: 5px;">
                             <table style="width: 100%; text-align: center; border-collapse: collapse; margin: 0;">
                                <tr style="color: white;">
                                    <td style="width: 16.6%; background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="강주시.html" class="nav-th" style="color: white; font-weight: bold;">강주시</a></td>
                                    <td style="width: 16.6%; background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="계성시.html" class="nav-th" style="color: white; font-weight: bold;">계성시</a></td>
                                    <td style="width: 16.6%; background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="군천시.html" class="nav-th" style="color: white; font-weight: bold;">군천시</a></td>
                                    <td style="width: 16.6%; background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="기도군.html" class="nav-th" style="color: white; font-weight: bold;">기도군</a></td>
                                    <td style="width: 16.6%; background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="낭원군.html" class="nav-th" style="color: white; font-weight: bold;">낭원군</a></td>
                                    <td style="width: 16.6%; background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="덕현군.html" class="nav-th" style="color: white; font-weight: bold;">덕현군</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="한성민.html" class="nav-link minju">한성민</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="오현주.html" class="nav-link minju">오현주</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="이성민.html" class="nav-link minju">이성민</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="조민규.html" class="nav-link minju">조민규</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="정우혁.html" class="nav-link minju">정우혁</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="고태훈.html" class="nav-link minju">고태훈</a></td>
                                </tr>
                                <tr style="color: white;">
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="모제군.html" class="nav-th" style="color: white; font-weight: bold;">모제군</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="반양군.html" class="nav-th" style="color: white; font-weight: bold;">반양군</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="빈주시.html" class="nav-th" style="color: white; font-weight: bold;">빈주시</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="상안군.html" class="nav-th" style="color: white; font-weight: bold;">상안군</a></td>
                                    <td style="background-color: var(--party-ppp); border: 1px solid #e2e8f0; padding: 5px;"><a href="서진시.html" class="nav-th" style="color: white; font-weight: bold;">서진시</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="서해시.html" class="nav-th" style="color: white; font-weight: bold;">서해시</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="진기현.html" class="nav-link minju">진기현</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="노준석.html" class="nav-link minju">노준석</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="이재성.html" class="nav-link minju">이재성</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="강미소.html" class="nav-link minju">강미소</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="김철호.html" class="nav-link ppp">김철호</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="최정아.html" class="nav-link minju">최정아</a></td>
                                </tr>
                                <tr style="color: white;">
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="선곡군.html" class="nav-th" style="color: white; font-weight: bold;">선곡군</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="약산시.html" class="nav-th" style="color: white; font-weight: bold;">약산시</a></td>
                                    <td style="background-color: var(--party-ppp); border: 1px solid #e2e8f0; padding: 5px;"><a href="저천군.html" class="nav-th" style="color: white; font-weight: bold;">저천군</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="전산시.html" class="nav-th" style="color: white; font-weight: bold;">전산시</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="천주시.html" class="nav-th" style="color: white; font-weight: bold;">천주시</a></td>
                                    <td style="background-color: var(--party-minju); border: 1px solid #e2e8f0; padding: 5px;"><a href="치원군.html" class="nav-th" style="color: white; font-weight: bold;">치원군</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="이지현.html" class="nav-link minju">이지현</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="박아상.html" class="nav-link minju">박아상</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="박성진.html" class="nav-link ppp">박성진</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="장은재.html" class="nav-link minju">장은재</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="김민철.html" class="nav-link minju">김민철</a></td>
                                    <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="유진태.html" class="nav-link minju">유진태</a></td>
                                </tr>
                             </table>

                             <!-- 전국 지자체 이동 내비게이션 바 (덕북 강조) -->
                             <table style="width: 100%; text-align: center; border-collapse: collapse; margin-top: 5px;">
                                 <tr>
                                     <td style="background-color: #2ECC71; color: white; padding: 10px; font-size: 0.85em; font-weight: bold; line-height: 1.6;">
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
                                         <a href="덕북.html" style="color: #FFCC11; text-decoration: none;">덕북</a> · 
                                         <a href="덕남.html" style="color: white; text-decoration: none;">덕남</a>
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