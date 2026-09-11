document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("방산대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    방산대학교<br/>
<span class="text-sm font-normal">Bangsan University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="방산대학교 UI" class="w-48" src="이미지/방산대학교_UI.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>방산(防産)의 지성, 국가의 미래</td></tr>
<tr><th>개교</th><td>1972년 11월 12일</td></tr>
<tr><th>성격</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립</a> 종합대학</td></tr>
<tr><th>상징</th><td>사자(동물), 소나무(목), 철쭉(화)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 방산 라이온 레드 (#A31D1D)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 서중 샌드 골드 (#D4AF37)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈남도.html')">덕빈남도</a> <a class="wiki-link" onclick="goToLink('방산시.html')">방산시</a> <a class="wiki-link" onclick="goToLink('서중읍.html')">서중읍</a> 대학로 10</td></tr>
<tr><th>재적생</th><td>약 8,500명 <span class="text-xs text-gray-500">(2025년 기준)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.bangsan.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=방산대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        방산대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});