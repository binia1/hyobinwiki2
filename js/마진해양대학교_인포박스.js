document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("마진해양대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    마진해양대학교<br/>
<span class="text-sm font-normal">Mazin Maritime University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="마진해양대학교 UI" class="w-48" src="이미지/마진해양대학교_UI.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>바다를 품고 세계로 항해하라</td></tr>
<tr><th>개교</th><td>1975년 (마진해양대)<br/>1982년 (마진대)</td></tr>
<tr><th>통합</th><td>2008년 3월 1일</td></tr>
<tr><th>성격</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립</a> 종합대학</td></tr>
<tr><th>상징</th><td>고래(동물), 해송(교목), 해당화(교화)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 마진 네이비 (#003876)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 오션 웨이브 블루 (#00A3E0)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈남도.html')">덕빈남도</a> <a class="wiki-link" onclick="goToLink('마진시.html')">마진시</a> 해양로 1</td></tr>
<tr><th>재적생</th><td>약 7,500명 <span class="text-xs text-gray-500">(통합 직후 대비 급감 중)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.mazin.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=마진해양대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        마진해양대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});