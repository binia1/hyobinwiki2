document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("덕북도립대학-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                덕북도립대학<br/>
<span class="text-sm font-normal">Deokbuk Provincial College</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="덕북도립대학 UI" class="w-48" src="이미지/덕북도립대학.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>진리(眞理), 창조(創造), 실용(實用)</td></tr>
<tr><th>슬로건</th><td>덕빈의 내일을 짓는 실무 중심 명문</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#005BAC; border:1px solid #ccc; vertical-align:middle;"></span> 덕북 블루 (#005BAC)<br/>
<span style="display:inline-block; width:15px; height:15px; background:#FF5800; border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 덕북 오렌지 (#FF5800)
                </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('공립대학.html')">공립</a> <a class="wiki-link" onclick="goToLink('전문대학.html')">전문대학</a> (2/3/4년제)</td></tr>
<tr><th>설립</th><td>1998년 3월 10일</td></tr>
<tr><th>총장</th><td>제8대 윤석진</td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('약산시.html')">약산시</a> <a class="wiki-link" onclick="goToLink('장곡읍.html')">장곡읍</a> 도립길 10<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>재적생</th><td>2,800명 <span class="text-xs text-gray-500">(2025년)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.dbpc.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=덕북도립대학" style="width: 160%; height: 160%; border: none; 
                                                   position: absolute; top: 0; left: 0;
                                                   transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                    덕북도립대학 캠퍼스 맵 (인터랙티브)
                </div>
</div>

        `;
    }
});