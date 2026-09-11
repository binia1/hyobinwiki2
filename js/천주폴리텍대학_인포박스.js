document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("천주폴리텍대학-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    천주폴리텍대학<br/>
<span class="text-sm font-normal">Cheonju Polytechnic College</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="천주폴리텍대학 UI" class="w-48" src="이미지/폴리텍.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>기술이 국력이다, 땀흘리는 젊음</td></tr>
<tr><th>개교</th><td>1996년 3월</td></tr>
<tr><th>상징</th><td>참수리(동물), 느티나무(교목)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 천주폴리텍 네이비 (#003A56)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 천주폴리텍 오렌지 (#F37021)
                    </td></tr>
<tr><th>총장</th><td>제11대 김상복</td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('전문대학.html')">전문대학</a> / <a class="wiki-link" onclick="goToLink('사립대학.html')">사립</a> (국책특수대학 성격)</td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('천주시.html')">천주시</a> 산단로 100</td></tr>
<tr><th>재적생</th><td>약 1,200명 <span class="text-xs text-gray-500">(소수정예)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.cjpoly.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=천주폴리텍대학" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        천주폴리텍대학 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});