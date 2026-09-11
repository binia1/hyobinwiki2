document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("덕빈폴리텍대학-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    덕빈폴리텍대학<br/>
<span class="text-sm font-normal">Deokbin Polytechnic College</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="덕빈폴리텍대학 UI" class="w-48" src="이미지/폴리텍.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>땀방울이 기술로, 기술이 미래로</td></tr>
<tr><th>개교</th><td>1985년 3월 2일</td></tr>
<tr><th>성격</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립</a> <a class="wiki-link" onclick="goToLink('전문대학.html')">전문대학</a></td></tr>
<tr><th>상징</th><td>톱니바퀴(엠블럼), 불꽃(상징물), 작업복(?)</td></tr>
<tr><th>재단</th><td>학교법인 덕빈산업학원</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 공단 정비복 네이비 (#2C3E50)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 스파크 오렌지 (#FF6D00)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈남도.html')">덕빈남도</a> <a class="wiki-link" onclick="goToLink('방산시.html')">방산시</a> <a class="wiki-link" onclick="goToLink('정수면.html')">정수면</a> 산업로 444</td></tr>
<tr><th>재적생</th><td>약 2,100명</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.dbpoly.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=덕빈폴리텍대학" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        덕빈폴리텍대학 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});