document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("효빈복지대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    효빈복지대학교<br/>
<span class="text-sm font-normal">Hyobin Social Welfare University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="효빈복지대학교 UI" class="w-48" src="이미지/효빈복지대학교_UI.webp"/>
</div>
</div>
<table>
<tr><th>교시</th><td>클라이언트 중심 (Client-Centered)</td></tr>
<tr><th>슬로건</th><td>모든 이의 사람다운 생활을 만들어가는<br/>효빈복지대</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#669988; border:1px solid #ccc; vertical-align:middle;"></span> 효빈복지대 초록 (#669988)<br/><span class="text-xs text-gray-500">일명 수술복/요양원 감성 색상</span>
</td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (복지·보건 특성화 대학)</td></tr>
<tr><th>법인</th><td>학교법인 효빈복지교육재단</td></tr>
<tr><th>설립자</th><td>박현건</td></tr>
<tr><th>개교</th><td>1955년 3월 24일 <span class="text-xs font-bold text-red-500">(개교 70주년)</span><a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>총장</th><td>제15대 <a class="wiki-link" onclick="goToLink('우시랑.html')">우시랑</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('서구_효빈광역시.html')">서구</a> 복지로 112 (사복동)</td></tr>
<tr><th>재적생</th><td>
                        학부: 874명 / 대학원: 20명 <span class="text-xs text-gray-500">(2025년 기준)</span>
</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.hswu.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=효빈복지대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        효빈복지대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});