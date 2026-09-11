document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("군천대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    군천대학교<br/>
<span class="text-sm font-normal">Guncheon University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="군천대학교 UI" class="w-48" src="이미지/군천대학교.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>진리(眞理), 창조(創造), 봉사(奉仕)</td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (종합대학)</td></tr>
<tr><th>법인</th><td>학교법인 군천학원</td></tr>
<tr><th>개교</th><td>1950년대</td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('군천시.html')">군천시</a> 중동 석목동 <span class="text-xs text-gray-500">(현 군천시 중동)</span></td></tr>
<tr><th>상징</th><td>동물: 청룡(Blue Dragon)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#003366; border:1px solid #ccc; vertical-align:middle;"></span> 드래곤 네이비 (#003366)<br/>
<span style="display:inline-block; width:15px; height:15px; background:#0055A4; border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 청룡 블루 (#0055A4)
                    </td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.guncheon.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=군천대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        군천대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});