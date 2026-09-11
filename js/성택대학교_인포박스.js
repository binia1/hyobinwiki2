document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("성택대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    성택대학교<br/>
<span class="text-sm font-normal">Seongtaek University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="성택대학교 UI" class="w-48" src="이미지/성택대학교_UI.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>진리(眞理), 성실(誠實), 봉사(奉仕)</td></tr>
<tr><th>슬로건</th><td>하늘의 뜻을 땅에 심다, 성택</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#4B0082; border:1px solid #ccc; vertical-align:middle;"></span> 요하네 딥 퍼플 (#4B0082)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (종합대학)</td></tr>
<tr><th>법인</th><td>학교법인 성택학원</td></tr>
<tr><th>설립</th><td>1981년 3월 5일</td></tr>
<tr><th>총장</th><td>제9대 <a class="wiki-link" onclick="goToLink('오성현.html')">오성현</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('안천구.html')">안천구</a> 타천로 82 (<a class="wiki-link" onclick="goToLink('타천동.html')">타천동</a>)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>재적생</th><td>
<strong>학부:</strong> 10,500명<br/>
<strong>대학원:</strong> 800명 <span class="text-xs text-gray-500">(2025년)</span>
</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.seongtaek.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=성택대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        성택대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});