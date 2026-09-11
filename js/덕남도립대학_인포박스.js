document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("덕남도립대학-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    덕남도립대학<br/>
<span class="text-sm font-normal">Deoknam Provincial College</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="덕남도립대학 UI" class="w-48" src="이미지/덕남도립대학_UI.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>지역과 함께, 미래를 향한 실용 지성</td></tr>
<tr><th>개교</th><td>1998년 3월 10일</td></tr>
<tr><th>성격</th><td><a class="wiki-link" onclick="goToLink('공립대학.html')">공립</a> <a class="wiki-link" onclick="goToLink('전문대학.html')">전문대학</a> <span class="text-xs text-gray-500">(덕빈남도청 산하)</span></td></tr>
<tr><th>상징</th><td>황조롱이(조), 느티나무(목), 철쭉(화)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 도립 아그로 그린 (#287042)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 황조롱이 골드 (#D48D1D)
                    </td></tr>
<tr><th>총장</th><td>제9대 조현우 박사</td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈남도.html')">덕빈남도</a> <a class="wiki-link" onclick="goToLink('하정시.html')">하정시</a> <a class="wiki-link" onclick="goToLink('별당읍.html')">별당읍</a> 도립대학로 1</td></tr>
<tr><th>재적생</th><td>약 950명 <span class="text-xs text-gray-500">(2025년 기준, 수직 낙하 중)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.dn.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=덕남도립대학" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        덕남도립대학 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});