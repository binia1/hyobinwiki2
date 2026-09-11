document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("해총대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    해총대학교<br/>
<span class="text-sm font-normal">Haechong College</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="해총대학교 UI" class="w-48" src="이미지/해총대학교_UI.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>기술보국, 성실, 개척</td></tr>
<tr><th>슬로건</th><td>거친 파도를 넘어, 기술로 승부한다</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#003366; border:1px solid #ccc; vertical-align:middle;"></span> 해총 네이비 (#003366)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('전문대학.html')">전문대학</a> (2/3/4년제)</td></tr>
<tr><th>법인</th><td>학교법인 해총학원</td></tr>
<tr><th>설립</th><td>1981년 3월 5일</td></tr>
<tr><th>총장</th><td>제7대 <a class="wiki-link" onclick="goToLink('이성남.html')">이성남</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('서구_효빈광역시.html')">서구</a> 과진로 91 (<a class="wiki-link" onclick="goToLink('과진동.html')">과진동</a>)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>재적생</th><td>3,500명 <span class="text-xs text-gray-500">(2025년)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.hc.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=해총대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        해총대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});