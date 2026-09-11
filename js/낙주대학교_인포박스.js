document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("낙주대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    낙주대학교<br/>
<span class="text-sm font-normal">Nakju University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="낙주대학교 UI" class="w-48" src="이미지/낙주대학교.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>창의(創意), 봉사(奉仕), 낙주(樂州)</td></tr>
<tr><th>개교</th><td>1956년 4월 12일</td></tr>
<tr><th>상징</th><td>백학(조), 소나무(목), 철쭉(화)</td></tr>
<tr><th>재단</th><td>학교법인 낙주학원</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 이파 철쭉 크림슨 (#B2183D)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 백학 파인 그린 (#005B43)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립</a> <a class="wiki-link" onclick="goToLink('종합대학.html')">종합대학</a></td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈남도.html')">덕빈남도</a> <a class="wiki-link" onclick="goToLink('낙주시.html')">낙주시</a> <a class="wiki-link" onclick="goToLink('이파동.html')">이파동</a> 대학로 100</td></tr>
<tr><th>재적생</th><td>학부생 약 15,000명 / 대학원생 약 2,500명</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.nakju.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=낙주대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        낙주대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});