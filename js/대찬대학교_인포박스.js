document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("대찬대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    대찬대학교<br/>
<span class="text-sm font-normal">Daechan University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="대찬대학교 UI" class="w-48" src="이미지/대찬대학교.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>성실, 협동, 개척</td></tr>
<tr><th>슬로건</th><td>세계와 함께하는 글로벌 대찬</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#8B4513; border:1px solid #ccc; vertical-align:middle;"></span> 대찬 브라운 (#8B4513)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (종합대학)</td></tr>
<tr><th>법인</th><td>학교법인 대찬학원</td></tr>
<tr><th>설립</th><td>1989년 3월 10일</td></tr>
<tr><th>총장</th><td>제4대 <a class="wiki-link" onclick="goToLink('노서랑.html')">노서랑</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('탄성군.html')">탄성군</a> <a class="wiki-link" onclick="goToLink('도향면.html')">도향면</a> 춘일경로 55 (<a class="wiki-link" onclick="goToLink('춘일경리.html')">춘일경리</a>)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>재적생</th><td>1,500명 <span class="text-xs text-gray-500">(2025년)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.daechan.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=대찬대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        대찬대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});