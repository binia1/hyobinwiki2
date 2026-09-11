document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("치고대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    치고대학교<br/>
<span class="text-sm font-normal">Chigo College</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="치고대학교 UI" class="w-48" src="이미지/치고대학교_UI.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>불굴, 도전, 승리</td></tr>
<tr><th>슬로건</th><td>포기하지 않아! 꿈을 향해 치고 나가라!</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#FF8833; border:1px solid #ccc; vertical-align:middle;"></span> 치고 미귤 (#FF8833)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('전문대학.html')">전문대학</a> (2/3년제)</td></tr>
<tr><th>법인</th><td>학교법인 치고학원</td></tr>
<tr><th>설립</th><td>1990년 3월 5일</td></tr>
<tr><th>총장</th><td>제4대 <a class="wiki-link" onclick="goToLink('연옥선.html')">연옥선</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('탄성군.html')">탄성군</a> <a class="wiki-link" onclick="goToLink('도변읍.html')">도변읍</a> 요우로 285 (<a class="wiki-link" onclick="goToLink('요우리.html')">요우리</a>)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>재적생</th><td>1,200명 <span class="text-xs text-gray-500">(2025년)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.chigo.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=치고대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        치고대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});