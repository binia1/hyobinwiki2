document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("효빈교육대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    효빈교육대학교<br/>
<span class="text-sm font-normal">Hyobin National University of Education</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="효빈교육대학교 UI" class="w-48" src="이미지/효빈교육대학교_UI.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>큰 스승, 참된 교육, 밝은 미래</td></tr>
<tr><th>슬로건</th><td>아이들의 꿈을 키우는 효빈의 심장</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#2E409F; border:1px solid #ccc; vertical-align:middle;"></span> 효빈 에듀 네이비 (#2E409F)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('국립대학.html')">국립대학</a> (교육대학교)</td></tr>
<tr><th>설립</th><td>1962년 3월 1일</td></tr>
<tr><th>총장</th><td>제8대 <a class="wiki-link" onclick="goToLink('나영곤.html')">나영곤</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('북구_효빈광역시.html')">북구</a> 천왕사로 781 (<a class="wiki-link" onclick="goToLink('천왕사동.html')">천왕사동</a>)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>재적생</th><td>
<strong>학부:</strong> 1,200명<br/>
<strong>대학원:</strong> 500명 <span class="text-xs text-gray-500">(2025년)</span>
</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="http://www.hnue.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=효빈교육대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        효빈교육대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});