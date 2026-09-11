document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("선자대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    선자대학교<br/>
<span class="text-sm font-normal">Seonja University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="선자대학교 UI" class="w-48" src="이미지/선자대학교_UI.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>진실, 창의, 봉사</td></tr>
<tr><th>슬로건</th><td>어둠을 밝히는 기술의 빛, 선자대학교</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#4F4F4F; border:1px solid #ccc; vertical-align:middle;"></span> 요하네 그레이 (#4F4F4F)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('전문대학.html')">전문대학</a> (2/3/4년제)</td></tr>
<tr><th>법인</th><td>학교법인 선자학원</td></tr>
<tr><th>설립</th><td>1983년 3월 1일</td></tr>
<tr><th>총장</th><td>제6대 <a class="wiki-link" onclick="goToLink('유서강.html')">유서강</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('동구_효빈광역시.html')">동구</a> 전천로 23 (<a class="wiki-link" onclick="goToLink('전천동.html')">전천동</a>)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>재적생</th><td>3,300명 <span class="text-xs text-gray-500">(2025년)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.seonja.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=선자대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        선자대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});