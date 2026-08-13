/**
 * 파일명: js/덕현군학교.js
 * 설명: 덕현군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-덕현군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도의 초등학교 (14개교)</span></div>
<table class="school-table">
<tr><td><a class="wiki-link" href="덕현초.html">덕현초</a></td><td><a class="wiki-link" href="망정초.html">망정초</a></td><td><a class="wiki-link" href="박성초.html">박성초</a></td><td><a class="wiki-link" href="부진초.html">부진초</a></td><td><a class="wiki-link" href="북견초.html">북견초</a></td></tr>
<tr><td><a class="wiki-link" href="영신초.html">영신초</a></td><td><a class="wiki-link" href="일광초.html">일광초</a></td><td><a class="wiki-link" href="조구초.html">조구초</a></td><td><a class="wiki-link" href="화원초.html">화원초</a></td><td><a class="wiki-link" href="흑성초.html">흑성초</a></td></tr>
<tr><td><a class="wiki-link" href="어진초.html">어진초</a></td><td><a class="wiki-link" href="현명초.html">현명초</a></td><td><a class="wiki-link" href="덕현남초.html">덕현남초</a></td><td><a class="wiki-link" href="덕현북초.html">덕현북초</a></td><td></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕현북도의 중학교 (10개교)</span></div>
<table class="school-table">
<tr><td><a class="wiki-link" href="덕현중.html">덕현중</a></td><td><a class="wiki-link" href="부진중.html">부진중</a></td><td><a class="wiki-link" href="화원중.html">화원중</a></td><td><a class="wiki-link" href="망정중.html">망정중</a></td><td><a class="wiki-link" href="영신중.html">영신중</a></td></tr>
<tr><td><a class="wiki-link" href="북견중.html">북견중</a></td><td><a class="wiki-link" href="흑성중.html">흑성중</a></td><td><a class="wiki-link" href="조구중.html">조구중</a></td><td><a class="wiki-link" href="일광중.html">일광중</a></td><td><a class="wiki-link" href="박성중.html">박성중</a></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕현북도의 고등학교 (7개교)</span></div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]"><div class="font-bold text-[#7777AA]">◈: 특성화고, 이외 일반계고</div></div>
<table class="school-table">
<tr><td>◈ <a class="wiki-link" href="덕현정보고.html">덕현정보고</a></td><td><a class="wiki-link" href="덕현고.html">덕현고</a></td><td class="bg-girl"><a class="wiki-link" href="덕현여고.html">덕현여고</a></td><td class="bg-girl"><a class="wiki-link" href="부진여고.html">부진여고</a></td><td><a class="wiki-link" href="부진고.html">부진고</a></td></tr>
<tr><td><a class="wiki-link" href="화원고.html">화원고</a></td><td>◈ <a class="wiki-link" href="부진상업고.html">부진상업고</a></td><td></td><td></td><td></td></tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
