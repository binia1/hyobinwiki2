document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-local-gov-heads-nav-container");
    
    if (container) {
        container.innerHTML = `
        <table class="nav-table" style="border: 2px solid #7777AA; width: 100%; border-collapse: collapse;">
            <tr>
                <td class="nav-header" style="background-color: #7777AA; padding: 8px;">
                    <span class="nav-header-wrap" style="display:inline-flex; align-items:center; gap:8px; justify-content: center; width: 100%;">
                        <a class="wiki-link" href="효빈광역시.html" style="color:white;">
                            <!-- 로고 강제 흰색 처리(invert) 및 크기 35px로 확대 -->
                            <img src="이미지/logo.webp" style="vertical-align: middle; display:block; width: 35px; filter: brightness(0) invert(1);" alt="로고"/>
                        </a>
                        <a class="wiki-link" href="효빈광역시.html#s-자치단체장" style="color:white; font-weight: bold;">민선 9기 효빈광역시 기초자치단체장</a>
                    </span>
                </td>
            </tr>
            <tr>
                <td style="padding: 0;">
                    <details open="" style="border: none; margin: 0;">
                        <summary style="display:none;">[ 펼치기 · 접기 ]</summary>
                        <div style="padding: 5px;">
                            <table style="width: 100%; text-align: center; border-collapse: collapse;">
                                <!-- 1열 -->
                                <tr style="background-color: #003B96; color: white;">
                                    <td style="width: 33.3%; padding: 5px;"><a class="nav-th" href="중구.html" style="color: white; font-weight: bold;">중구</a></td>
                                    <td style="width: 33.3%; background-color: #0073CF; padding: 5px;"><a class="nav-th" href="동구.html" style="color: white; font-weight: bold;">동구</a></td>
                                    <td style="width: 33.3%; padding: 5px;"><a class="nav-th" href="서구.html" style="color: white; font-weight: bold;">서구</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 5px;"><a class="nav-link minju" href="구성연.html">구성연</a> (재선)</td>
                                    <td style="padding: 5px;"><a class="nav-link joguk" href="조우영.html">조우영</a> (재선)</td>
                                    <td style="padding: 5px;"><a class="nav-link minju" href="부서원.html">부서원</a> (초선)</td>
                                </tr>
                                <!-- 2열 -->
                                <tr style="background-color: #003B96; color: white;">
                                    <td style="padding: 5px;"><a class="nav-th" href="남구.html" style="color: white; font-weight: bold;">남구</a></td>
                                    <td style="padding: 5px;"><a class="nav-th" href="북구.html" style="color: white; font-weight: bold;">북구</a></td>
                                    <td style="padding: 5px;"><a class="nav-th" href="청엽구.html" style="color: white; font-weight: bold;">청엽구</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 5px;"><a class="nav-link minju" href="오전희.html">오전희</a> (3선)</td>
                                    <td style="padding: 5px;"><a class="nav-link minju" href="김지언.html">김지언</a> (재선)</td>
                                    <td style="padding: 5px;"><a class="nav-link minju" href="권상남.html">권상남</a> (3선)</td>
                                </tr>
                                <!-- 3열 -->
                                <tr style="background-color: #003B96; color: white;">
                                    <td style="padding: 5px;"><a class="nav-th" href="안천구.html" style="color: white; font-weight: bold;">안천구</a></td>
                                    <td style="padding: 5px;"><a class="nav-th" href="창전구.html" style="color: white; font-weight: bold;">창전구</a></td>
                                    <td style="padding: 5px;"><a class="nav-th" href="탄성군.html" style="color: white; font-weight: bold;">탄성군</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 5px;"><a class="nav-link minju" href="이규희.html">이규희</a> (초선)</td>
                                    <td style="padding: 5px;"><a class="nav-link minju" href="전역헌.html">전역헌</a> (3선)</td>
                                    <td style="padding: 5px;"><a class="nav-link minju" href="성선설.html">성선설</a> (재선)</td>
                                </tr>
                                <tr>
                                    <td colspan="3" style="background-color: #f9f9f9; font-size: 0.9em; padding: 10px;">
                                        <a class="wiki-link" href="제9회_전국동시지방선거_효빈광역시.html">선거 결과</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- 추가된 지역 이동 바 (군산시장 문서 스타일 반영) -->
                            <table style="width: 100%; text-align: center; border-collapse: collapse; margin-top: 5px;">
                                <tr>
                                    <td style="background-color: #003B96; color: white; padding: 10px; font-size: 0.85em; font-weight: bold; line-height: 1.6;">
                                        <a href="서울.html" style="color: white; text-decoration: none;">서울</a> · 
                                        <a href="전남광주.html" style="color: white; text-decoration: none;">전남광주</a> · 
                                        <a href="부산.html" style="color: white; text-decoration: none;">부산</a> · 
                                        <a href="대구.html" style="color: white; text-decoration: none;">대구</a> · 
                                        <a href="인천.html" style="color: white; text-decoration: none;">인천</a> · 
                                        <a href="대전.html" style="color: white; text-decoration: none;">대전</a> · 
                                        <a href="울산.html" style="color: white; text-decoration: none;">울산</a> · 
                                        <a href="효빈광역시.html" style="color: #FFCC11; text-decoration: none;">효빈</a> · 
                                        <a href="경기.html" style="color: white; text-decoration: none;">경기</a> · 
                                        <a href="강원.html" style="color: white; text-decoration: none;">강원</a> · 
                                        <a href="충북.html" style="color: white; text-decoration: none;">충북</a> · 
                                        <a href="충남.html" style="color: white; text-decoration: none;">충남</a> · 
                                        <a href="전북.html" style="color: white; text-decoration: none;">전북</a> · 
                                        <a href="경북.html" style="color: white; text-decoration: none;">경북</a> · 
                                        <a href="경남.html" style="color: white; text-decoration: none;">경남</a> · 
                                        <a href="덕북.html" style="color: white; text-decoration: none;">덕북</a> · 
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