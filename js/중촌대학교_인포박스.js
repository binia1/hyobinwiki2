document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("중촌대학교-infobox-container");
    if (container) {
        container.innerHTML = `
<div class="infobox-title">중촌대학교<br/><span style="font-size:0.8em; font-weight:normal;">Jungchon University (JCU)</span></div>
<div class="p-0 bg-white text-center border-b">
    <!-- 학교 전경 이미지가 인포박스에 꽉 차게 나오도록 설정 -->
    <div class="w-full flex justify-center">
        <img alt="중촌대학교 전경" class="w-full object-cover" src="이미지/중촌대학교_전경.webp" style="max-height: 250px;"/>
    </div>
</div>
<table>
    <tr><th>교훈</th><td>진리 탐구, 실용, 봉사</td></tr>
    <tr><th>슬로건</th><td>내일의 실력을 키우는 곳, 중촌</td></tr>
    <tr><th>교색</th><td>
        <span style="display:inline-block; width:15px; height:15px; background:#103867; border:1px solid #ccc; vertical-align:middle;"></span> 중촌 네이비 (#103867)<br/>
        <span style="display:inline-block; width:15px; height:15px; background:#F47920; border:1px solid #ccc; vertical-align:middle; margin-top:4px;"></span> 중촌 오렌지 (#F47920)
    </td></tr>
    <tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
    <tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (4년제 종합대학)</td></tr>
    <tr><th>법인</th><td>학교법인 중촌학원</td></tr>
    <tr><th>설립자</th><td>중촌(中村) 이만식</td></tr>
    <tr><th>개교</th><td>1992년 3월 5일 <span class="text-xs font-bold text-red-500">(34주년)</span></td></tr>
    <tr><th>총장</th><td>제9대 <strong><a class="wiki-link" onclick="goToLink('우서진.html')">우서진</a></strong> <span class="text-xs text-gray-500">(전임: 소영한)</span></td></tr>
    <tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> 서구 청덕동 323</td></tr>
    <tr><th>재학생</th><td>3,412명 <span class="text-xs text-gray-500">(2025년 기준)</span></td></tr>
    <tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.jungchon.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
    <div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
        <iframe src="https://binia1.github.io/mymap/?name=중촌대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
        </iframe>
    </div>
    <div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
        중촌대학교 캠퍼스 맵 (인터랙티브)
    </div>
</div>
        `;
    }
});