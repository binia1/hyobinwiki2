/**
 * 파일명: js/기도군학교.js
 * 설명: 기도군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-기도군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 기도군의 초등학교 (18개교)</span></div>
<table class="school-table">
<tr><td><a class="wiki-link" href="경택초.html">경택초</a></td><td><a class="wiki-link" href="고관초.html">고관초</a></td><td><a class="wiki-link" href="기도초.html">기도초</a></td><td><a class="wiki-link" href="금원초.html">금원초</a></td><td><a class="wiki-link" href="삼면초.html">삼면초</a></td></tr>
<tr><td><a class="wiki-link" href="신산초.html">신산초</a></td><td><a class="wiki-link" href="염곡초.html">염곡초</a></td><td><a class="wiki-link" href="용야초.html">용야초</a></td><td><a class="wiki-link" href="주길초.html">주길초</a></td><td><a class="wiki-link" href="주양초.html">주양초</a></td></tr>
<tr><td><a class="wiki-link" href="중천초.html">중천초</a></td><td><a class="wiki-link" href="진경초.html">진경초</a></td><td><a class="wiki-link" href="하포초.html">하포초</a></td><td><a class="wiki-link" href="해오라기초.html">해오라기초</a></td><td><a class="wiki-link" href="화목초.html">화목초</a></td></tr>
<tr><td><a class="wiki-link" href="기도서초.html">기도서초</a></td><td><a class="wiki-link" href="기도북초.html">기도북초</a></td><td><a class="wiki-link" href="하늘빛초.html">하늘빛초</a></td><td></td><td></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 기도군의 중학교 (9개교)</span></div>
<table class="school-table">
<tr><td><a class="wiki-link" href="기도중.html">기도중</a></td><td><a class="wiki-link" href="염곡중.html">염곡중</a></td><td><a class="wiki-link" href="주양중.html">주양중</a></td><td><a class="wiki-link" href="화목중.html">화목중</a></td><td><a class="wiki-link" href="신산중.html">신산중</a></td></tr>
<tr><td><a class="wiki-link" href="금원중.html">금원중</a></td><td><a class="wiki-link" href="하포중.html">하포중</a></td><td><a class="wiki-link" href="고관중.html">고관중</a></td><td><a class="wiki-link" href="삼면중.html">삼면중</a></td><td></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 기도군의 고등학교 (8개교)</span></div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]"><div class="font-bold text-[#7777AA]">◈: 특성화고, 이외 일반계고</div></div>
<table class="school-table">
<tr><td>◈ <a class="wiki-link" href="기도상업고.html">기도상업고</a></td><td><a class="wiki-link" href="기도고.html">기도고</a></td><td class="bg-girl"><a class="wiki-link" href="기도여고.html">기도여고</a></td><td><a class="wiki-link" href="신산고.html">신산고</a></td><td><a class="wiki-link" href="염곡고.html">염곡고</a></td></tr>
<tr><td><a class="wiki-link" href="주양고.html">주양고</a></td><td>◈ <a class="wiki-link" href="주길항공과학고.html">주길항공과학고</a></td><td><a class="wiki-link" href="효빈항공고.html">효빈항공고</a></td><td></td><td></td></tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
