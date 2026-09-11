document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("강주가톨릭대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    강주가톨릭대학교<br/>
<span class="text-sm font-normal">Gangju Catholic University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="강주가톨릭대학교 UI" class="w-48" src="이미지/강주가톨릭대학교.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>진리(眞理), 사랑(愛), 봉사(奉仕)</td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (종합대학)</td></tr>
<tr><th>법인</th><td>학교법인 강주가톨릭학원</td></tr>
<tr><th>개교</th><td>1970년대 <span class="text-xs text-gray-500">(성모간호전문학교 모태)</span></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('강주시.html')">강주시</a> 종상동 33</td></tr>
<tr><th>상징</th><td>동물: 비둘기, 꽃: 백합</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.gangjucu.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=강주가톨릭대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        강주가톨릭대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});