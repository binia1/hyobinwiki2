document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("평안명대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    평안명대학교<br/>
<span class="text-sm font-normal">Pyeong-an-myeong University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="평안명대학교 UI" class="w-48" src="이미지/평안명대학교_UI.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>도전(Challenge), 열정(Passion), 비상(Galaxy)</td></tr>
<tr><th>슬로건</th><td>꿈을 향해 쏘아 올려라, 평안명 갤럭시! (Let's Galaxy!)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#74F466; border:1px solid #ccc; vertical-align:middle;"></span> 스미레 그린 (#74F466)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (종합대학)</td></tr>
<tr><th>법인</th><td>학교법인 평안명학원</td></tr>
<tr><th>설립자</th><td>명평안</td></tr>
<tr><th>개교</th><td>1967년 9월 28일 <span class="text-xs font-bold text-red-500">(58주년)</span></td></tr>
<tr><th>총장</th><td>제14대 <a class="wiki-link" onclick="goToLink('명안나.html')">명안나</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('북구_효빈광역시.html')">북구</a> 사연로 77 (사연동)</td></tr>
<tr><th>재적생</th><td>
<strong>학부:</strong> 13,500명<br/>
<strong>대학원:</strong> 1,200명 <span class="text-xs text-gray-500">(2025년)</span>
</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.pam.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=평안명대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        평안명대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});