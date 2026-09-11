document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("선빈대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    선빈대학교<br/>
<span class="text-sm font-normal">Sunbin University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="선빈대학교 UI" class="w-48" src="이미지/선빈대학교_UI.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>진리(眞理), 지성(至誠), 봉사(奉仕)</td></tr>
<tr><th>개교</th><td>1968년 3월 2일</td></tr>
<tr><th>상징</th><td>사자(동물), 소나무(교목), 매화(교화)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 선빈 크림슨 (#8A1538)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 선빈 골드 (#B38B22)
                    </td></tr>
<tr><th>총장</th><td>제13대 이현철 박사</td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> / 4년제</td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('빈주시.html')">빈주시</a> <a class="wiki-link" onclick="goToLink('빈성구.html')">빈성구</a> <a class="wiki-link" onclick="goToLink('이은동.html')">이은동</a> 율곡로 24</td></tr>
<tr><th>재적생</th><td>약 6,200명 <span class="text-xs text-gray-500">(2025년 기준)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.sunbin.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=선빈대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        선빈대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});