document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("덕북과학기술대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    덕북과학기술대학교<br/>
<span class="text-sm font-normal">Deokbuk University of Science and Technology</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="덕북과기대 UI" class="w-48" src="이미지/덕북과학기술대학교.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>기술로 여는 미래, 창의로 빚는 세계</td></tr>
<tr><th>개교</th><td>1991년 3월 12일</td></tr>
<tr><th>상징</th><td>톱니바퀴(엠블럼), 규소(상징 원소), 잣나무(교목)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 테크 블루 (#004B87)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 실리콘 시안 (#00A8E8)
                    </td></tr>
<tr><th>총장</th><td>제8대 강창조 박사</td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> / 4년제 공과대학교</td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('빈주시.html')">빈주시</a> <a class="wiki-link" onclick="goToLink('장기구.html')">장기구</a> <a class="wiki-link" onclick="goToLink('시능동.html')">시능동</a> 공학로 101</td></tr>
<tr><th>재적생</th><td>약 5,800명 <span class="text-xs text-gray-500">(2025년 기준)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.dust.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=덕북과학기술대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        덕북과학기술대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});