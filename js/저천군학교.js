/**
 * 파일명: js/저천군학교.js
 * 설명: 저천군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-저천군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 저천군의 초등학교 (14개교)</span></div>
<table class="school-table text-center text-xs">
<tr><td><a class="wiki-link" href="궐생초.html">궐생초</a></td><td><a class="wiki-link" href="동면초.html">동면초</a></td><td><a class="wiki-link" href="산백초.html">산백초</a></td><td><a class="wiki-link" href="색성초.html">색성초</a></td><td><a class="wiki-link" href="송남초.html">송남초</a></td></tr>
<tr><td><a class="wiki-link" href="송북초.html">송북초</a></td><td><a class="wiki-link" href="외산초.html">외산초</a></td><td><a class="wiki-link" href="우구초.html">우구초</a></td><td><a class="wiki-link" href="이좌초.html">이좌초</a></td><td><a class="wiki-link" href="저천초.html">저천초</a></td></tr>
<tr><td><a class="wiki-link" href="점립초.html">점립초</a></td><td><a class="wiki-link" href="토경초.html">토경초</a></td><td><a class="wiki-link" href="저천남초.html">저천남초</a></td><td><a class="wiki-link" href="저천북초.html">저천북초</a></td><td></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 저천군의 중학교 (9개교)</span></div>
<p class="text-[0.7rem] bg-white p-1 text-center text-red-500 font-bold">※ 점립중학교는 학생 수 급감으로 곧 폐교 예정이다.</p>
<table class="school-table text-center text-xs">
<tr><td><a class="wiki-link" href="저천중.html">저천중</a></td><td><a class="wiki-link" href="우구중.html">우구중</a></td><td><a class="wiki-link" href="토경중.html">토경중</a></td><td><a class="wiki-link" href="산백중.html">산백중</a></td><td><a class="wiki-link" href="점립중.html">점립중</a></td></tr>
<tr><td><a class="wiki-link" href="동면중.html">동면중</a></td><td><a class="wiki-link" href="송남중.html">송남중</a></td><td><a class="wiki-link" href="송북중.html">송북중</a></td><td><a class="wiki-link" href="외산중.html">외산중</a></td><td></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 저천군의 고등학교 (6개교)</span></div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]"><div class="font-bold text-[#7777AA]">◈: 특성화고, 이외 일반계고</div></div>
<table class="school-table text-center text-xs">
<tr><td class="bg-boy">◈ <a class="wiki-link" href="저천산업고.html">저천산업고</a></td><td><a class="wiki-link" href="저천고.html">저천고</a></td><td class="bg-girl"><a class="wiki-link" href="저천여고.html">저천여고</a></td><td><a class="wiki-link" href="산백고.html">산백고</a></td><td><a class="wiki-link" href="우구고.html">우구고</a></td></tr>
<tr><td><a class="wiki-link" href="토경고.html">토경고</a></td><td></td><td></td><td></td><td></td></tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
