document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("해천대학교-infobox-container");
    if (container) {
        container.innerHTML = `
<div class="infobox-header">
    해천대학교<br/>
    <span class="text-sm font-normal">Haecheon University</span>
</div>
<div class="p-0 bg-white text-center border-b">
    <!-- 학교 전경 이미지가 꽉 차게 나오도록 사이즈(w-full) 적용 -->
    <div class="w-full flex justify-center">
        <img alt="해천대학교 전경" class="w-full object-cover" src="이미지/해천대학교.webp" style="max-height: 250px;"/>
    </div>
</div>
<table>
    <tr><th>교훈</th><td>성실, 협동, 창의</td></tr>
    <tr><th>슬로건</th><td>내일의 Job을 잡(Job)아라! 실무 중심 해천대학교</td></tr>
    <tr><th>교색</th><td>
        <span style="display:inline-block; width:15px; height:15px; background:#00BFFF; border:1px solid #ccc; vertical-align:middle;"></span> 해천 스카이 블루 (#00BFFF)
    </td></tr>
    <tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
    <tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (종합대학)</td></tr>
    <tr><th>법인</th><td>학교법인 해천학원</td></tr>
    <tr><th>설립자</th><td>이해천</td></tr>
    <tr><th>개교</th><td>1990년 3월 5일 <span class="text-xs font-bold text-red-500">(35주년)</span></td></tr>
    <tr><th>총장</th><td>제6대 <a class="wiki-link" onclick="goToLink('이사현.html')">이사현</a></td></tr>
    <tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('안천구.html')">안천구</a> 이자로 9 (<a class="wiki-link" onclick="goToLink('이자동.html')">이자동</a>)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
    <tr><th>재적생</th><td>
        <strong>학부:</strong> 7,500명<br/>
        <strong>대학원:</strong> 150명 <span class="text-xs text-gray-500">(2025년 기준)</span>
    </td></tr>
    <tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.haecheon.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
    <div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
        <iframe src="https://binia1.github.io/mymap/?name=해천대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
        </iframe>
    </div>
    <div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
        해천대학교 캠퍼스 맵 (인터랙티브)
    </div>
</div>
        `;
    }
});