document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("덕빈보건대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    덕빈보건대학교<br/>
<span class="text-sm font-normal">Deokbin Health University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="덕빈보건대학교 UI" class="w-48" src="이미지/덕빈보건대학교.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>인술(仁術)로 세상을 치유하라</td></tr>
<tr><th>개교</th><td>1979년 11월 12일</td></tr>
<tr><th>성격</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립</a> <a class="wiki-link" onclick="goToLink('전문대학.html')">전문대학</a></td></tr>
<tr><th>상징</th><td>비둘기(조), 소나무(목), 백합(화)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 메디컬 틸 그린 (#008A62)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 헬스케어 블루 (#0055A5)
                    </td></tr>
<tr><th>총장</th><td>제12대 김희망 박사</td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈남도.html')">덕빈남도</a> <a class="wiki-link" onclick="goToLink('덕주시.html')">덕주시</a> <a class="wiki-link" onclick="goToLink('조전구.html')">조전구</a> 신만동 보건로 101</td></tr>
<tr><th>재적생</th><td>약 3,200명 <span class="text-xs text-gray-500">(2025년 기준)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.deokbinhealth.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=덕빈보건대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        덕빈보건대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});