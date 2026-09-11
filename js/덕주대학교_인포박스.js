document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("덕주대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    덕주대학교<br/>
<span class="text-sm font-normal">Deokju University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="덕주대학교 UI" class="w-48" src="이미지/덕주대학교_UI.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>덕(德)을 닦고 주(州)를 밝히는 지성</td></tr>
<tr><th>개교</th><td>1954년 5월 10일</td></tr>
<tr><th>상징</th><td>비둘기(조), 은행나무(목), 목련(화)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 덕주 그린 (#00462A)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 은행 옐로우 (#F0B300)
                    </td></tr>
<tr><th>총장</th><td>제10대 김상미 박사</td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> / 4년제 종합대학</td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈남도.html')">덕빈남도</a> <a class="wiki-link" onclick="goToLink('덕주시.html')">덕주시</a> <a class="wiki-link" onclick="goToLink('덕산구.html')">덕산구</a> <a class="wiki-link" onclick="goToLink('영목동.html')">영목동</a> 영목로 50</td></tr>
<tr><th>재적생</th><td>학부생 약 14,000명 / 대학원생 약 2,500명</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.deokju.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=덕주대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        덕주대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});