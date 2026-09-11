document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("빈주교육대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    빈주교육대학교<br/>
<span class="text-sm font-normal">Binju Nat'l Univ. of Education</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="빈주교육대학교 UI" class="w-48" src="이미지/빈주교육대학교.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>진리(眞理), 창의(創意), 사명(使命)</td></tr>
<tr><th>개교</th><td>1960년대 초</td></tr>
<tr><th>성격</th><td><a class="wiki-link" onclick="goToLink('국립대학.html')">국립</a> <a class="wiki-link" onclick="goToLink('교육대학.html')">교육대학</a></td></tr>
<tr><th>총장</th><td>제15대 김정학(金正學)</td></tr>
<tr><th>상징</th><td>동물: 황소, 교목: 느티나무, 교화: 목련</td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('빈주시.html')">빈주시</a> 빈성구 교원로 55</td></tr>
<tr><th>재적생</th><td>학부생 1,784명 / 대학원생 822명</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.bnue.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=빈주교육대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        빈주교육대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});