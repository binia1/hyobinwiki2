document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("국립덕주교육대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    덕주교육대학교<br/>
<span class="text-sm font-normal">Deokju National University of Education</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="국립덕주교육대학교 UI" class="w-48" src="이미지/국립덕주교육대학교_UI.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>참된 스승, 바른 교육, 밝은 미래</td></tr>
<tr><th>개교</th><td>1964년 3월 1일</td></tr>
<tr><th>상징</th><td>학(동물), 소나무(교목), 매화(교화)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 덕주 에듀 블루 (#003366)
                    </td></tr>
<tr><th>총장</th><td>제16대 이정사 박사</td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('국립대학.html')">국립대학</a> / <a class="wiki-link" onclick="goToLink('교육대학.html')">교육대학</a></td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈남도.html')">덕빈남도</a> <a class="wiki-link" onclick="goToLink('덕주시.html')">덕주시</a> <a class="wiki-link" onclick="goToLink('조전구.html')">조전구</a> <a class="wiki-link" onclick="goToLink('모은동.html')">모은동</a> 교원로 1</td></tr>
<tr><th>재적생</th><td>학부생 약 1,600명 / 대학원생 약 800명 <span class="text-xs text-gray-500">(소수정예)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.deokjue.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=덕주교육대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        덕주교육대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});