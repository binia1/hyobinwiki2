document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("한국국방과학기술대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    한국국방과학기술대학교<br/>
<span class="text-sm font-normal">Korea National Defense Technology University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="한국국방과학기술대학교 UI" class="w-48" src="이미지/대한민국_정부_로고.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>조국을 지키는 방패, 미래를 여는 기술</td></tr>
<tr><th>개교</th><td>1978년 9월 1일</td></tr>
<tr><th>성격</th><td><a class="wiki-link" onclick="goToLink('국립대학.html')">국립</a> <a class="wiki-link" onclick="goToLink('특수목적대학.html')">특수목적대학</a></td></tr>
<tr><th>상징</th><td>호랑이(동물), 무궁화(교화), 소나무(교목)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 국방 밀리터리 그린 (#2C4A31)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 호국 카키 골드 (#9A8B66)
                    </td></tr>
<tr><th>총장</th><td>제12대 김국방 <span class="text-xs text-gray-500">(예비역 육군 중장)</span></td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈남도.html')">덕빈남도</a> <a class="wiki-link" onclick="goToLink('방산시.html')">방산시</a> <a class="wiki-link" onclick="goToLink('주강동.html')">주강동</a> 호국로 111</td></tr>
<tr><th>재적생</th><td>약 3,500명 <span class="text-xs text-gray-500">(소수 정예)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.kndt.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=한국국방과학기술대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        한국국방과학기술대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});