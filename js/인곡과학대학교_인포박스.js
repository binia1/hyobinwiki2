document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("인곡과학대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    인곡과학대학교<br/>
<span class="text-sm font-normal">Ingok Science College</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="인곡과학대학교 UI" class="w-48" src="이미지/인곡과학대학교_UI.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>기술로 여는 미래, 인곡의 자부심 <del>(미래가 안 보인다)</del></td></tr>
<tr><th>개교</th><td>1994년 3월 5일</td></tr>
<tr><th>성격</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립</a> <a class="wiki-link" onclick="goToLink('전문대학.html')">전문대학</a></td></tr>
<tr><th>상징</th><td>독수리(조), 은행나무(목), 철쭉(화)</td></tr>
<tr><th>재단</th><td>학교법인 인곡학원 <span class="text-xs font-bold text-red-600">(관선이사 파견 중)</span></td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 인곡 철쭉 크림슨 (#9A2A46)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 은행나무 옐로우 (#D4A017)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈남도.html')">덕빈남도</a> <a class="wiki-link" onclick="goToLink('인곡군.html')">인곡군</a> <a class="wiki-link" onclick="goToLink('인곡읍.html')">인곡읍</a> 과학로 1</td></tr>
<tr><th>재적생</th><td>약 800명 <span class="text-xs font-bold text-red-600">(2025년 기준, 폐교 위기)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.ingok.ac.kr" target="_blank">공식 홈페이지</a> <del>(관리가 안 되고 있다)</del></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=인곡과학대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        인곡과학대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});