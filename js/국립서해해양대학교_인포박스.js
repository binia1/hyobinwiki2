document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("국립서해해양대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    국립서해해양대학교<br/>
<span class="text-sm font-normal">Seohae National Maritime University (SNMU)</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="국립서해해양대학교 UI" class="w-48" src="이미지/국립서해해양대학교_UI.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>진리(眞理) 탐구, 해양(海洋) 개척</td></tr>
<tr><th>개교</th><td>1965년 3월 5일</td></tr>
<tr><th>상징</th><td>갈매기(동물), 동백나무(교목), 해당화(교화)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#004080; border:1px solid #ccc; vertical-align:middle;"></span> 마린 블루 (#004080)<br/>
<span style="display:inline-block; width:15px; height:15px; background:#F5FFFA; border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 씨 폼 화이트 (#F5FFFA)
                    </td></tr>
<tr><th>총장</th><td>제9대 이형석</td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('서해시.html')">서해시</a> 해양로 1 (해안동1가)</td></tr>
<tr><th>재적생</th><td>학부생 약 6,500명 / 대학원생 약 800명</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.snmu.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=서해해양대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        서해해양대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});