document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("삼선대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    삼선대학교<br/>
<span class="text-sm font-normal">Samseon University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="삼선대학교 UI" class="w-48" src="이미지/삼선대학교_UI.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>결의(決意), 정진, 봉사</td></tr>
<tr><th>슬로건</th><td>그대, 결의의 빛이 되어라<br/><span class="text-xs font-normal">(Be the Light of Resolve)</span></td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#35C7B6; border:1px solid #ccc; vertical-align:middle;"></span> 삼선 제이드 (#35C7B6)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (종합대학)</td></tr>
<tr><th>법인</th><td>학교법인 삼선학원</td></tr>
<tr><th>설립자</th><td>위성진</td></tr>
<tr><th>개교</th><td>1960년 3월 1일</td></tr>
<tr><th>이사장</th><td>위훈자</td></tr>
<tr><th>총장</th><td>제15대 <a class="wiki-link" onclick="goToLink('위시윤.html')">위시윤</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('북구_효빈광역시.html')">북구</a> 등기대로 887 (등기동)</td></tr>
<tr><th>교통</th><td>1호선 <a class="wiki-link" onclick="goToLink('등기역.html')">등기역</a> (도보 5~10분)</td></tr>
<tr><th>재적생</th><td>
<strong>학부:</strong> 14,500명<br/>
<strong>대학원:</strong> 2,100명 <span class="text-xs text-gray-500">(2025년)</span>
</td></tr>
<tr><th>병원</th><td><a class="wiki-link" onclick="goToLink('삼선의료원.html')">삼선의료원</a><br/><span class="text-xs">(삼선대학교병원)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.samseon.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=삼선대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        삼선대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});