document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("엽월대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    엽월대학교<br/>
<span class="text-sm font-normal">Yeopwol University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="엽월대학교 UI" class="w-48" src="이미지/엽월대학교_UI.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>예절(禮節), 지성, 조화</td></tr>
<tr><th>슬로건</th><td>바다를 품은 지성, 세상을 연주하다</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#182C53; border:1px solid #ccc; vertical-align:middle;"></span> 엽월 사파이어 (#182C53)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (종합대학)</td></tr>
<tr><th>법인</th><td>학교법인 엽월학원</td></tr>
<tr><th>설립자</th><td>하수월 (河水月)</td></tr>
<tr><th>개교</th><td>1955년 5월 1일 <span class="text-xs font-bold text-red-500">(70주년)</span></td></tr>
<tr><th>총장</th><td>제18대 <a class="wiki-link" onclick="goToLink('하진수.html')">하진수</a></td></tr>
<tr><th>주소</th><td>
<strong>청엽(본)캠퍼스:</strong><br/>
<a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('청엽구.html')">청엽구</a> 해안대로 1004 (등동)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a><br/>
<hr style="margin: 4px 0; border: 0; border-top: 1px dashed #ccc;"/>
<strong>운진 덕남캠퍼스:</strong><br/>
<a class="wiki-link" onclick="goToLink('덕빈남도.html')">덕빈남도</a> <a class="wiki-link" onclick="goToLink('운진군.html')">운진군</a> 운남면 월성리 100
                    </td></tr>
<tr><th>재적생</th><td>
<strong>학부:</strong> 21,500명<br/>
<strong>대학원:</strong> 4,100명 <span class="text-xs text-gray-500">(2025년 기준)</span>
</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.yeopwol.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=엽월대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        엽월대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});