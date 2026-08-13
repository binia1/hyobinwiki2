/**
 * 파일명: js/낭원군학교.js
 * 설명: 낭원군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-낭원군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 낭원군의 초등학교 (25개교)</span></div>
<table class="school-table">
<tr><td><a class="wiki-link" href="낭원초.html">낭원초</a></td><td><a class="wiki-link" href="내덕초.html">내덕초</a></td><td><a class="wiki-link" href="명향초.html">명향초</a></td><td><a class="wiki-link" href="모례초.html">모례초</a></td><td><a class="wiki-link" href="미전초.html">미전초</a></td></tr>
<tr><td><a class="wiki-link" href="백성초.html">백성초</a></td><td><a class="wiki-link" href="빙천초.html">빙천초</a></td><td><a class="wiki-link" href="상곡초.html">상곡초</a></td><td><a class="wiki-link" href="송천초.html">송천초</a></td><td><a class="wiki-link" href="오처초.html">오처초</a></td></tr>
<tr><td><a class="wiki-link" href="우입초.html">우입초</a></td><td><a class="wiki-link" href="전포초.html">전포초</a></td><td><a class="wiki-link" href="초건초.html">초건초</a></td><td><a class="wiki-link" href="토진초.html">토진초</a></td><td><a class="wiki-link" href="판주초.html">판주초</a></td></tr>
<tr><td><a class="wiki-link" href="풍성초.html">풍성초</a></td><td><a class="wiki-link" href="회염초.html">회염초</a></td><td><a class="wiki-link" href="흑천초.html">흑천초</a></td><td><a class="wiki-link" href="낭원서초.html">낭원서초</a></td><td><a class="wiki-link" href="낭원북초.html">낭원북초</a></td></tr>
<tr><td><a class="wiki-link" href="으뜸남초.html">으뜸남초</a></td><td><a class="wiki-link" href="명향서초.html">명향서초</a></td><td><a class="wiki-link" href="광전초.html">광전초</a></td><td><a class="wiki-link" href="궁내초.html">궁내초</a></td><td><a class="wiki-link" href="서야초.html">서야초</a></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 낭원군의 중학교 (10개교)</span></div>
<table class="school-table">
<tr><td><a class="wiki-link" href="낭원중.html">낭원중</a></td><td><a class="wiki-link" href="내덕중.html">내덕중</a></td><td><a class="wiki-link" href="명향중.html">명향중</a></td><td><a class="wiki-link" href="백성중.html">백성중</a></td><td><a class="wiki-link" href="송천중.html">송천중</a></td></tr>
<tr><td><a class="wiki-link" href="전포중.html">전포중</a></td><td><a class="wiki-link" href="토진중.html">토진중</a></td><td><a class="wiki-link" href="판주중.html">판주중</a></td><td><a class="wiki-link" href="초건중.html">초건중</a></td><td><a class="wiki-link" href="모례중.html">모례중</a></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 낭원군의 고등학교 (8개교)</span></div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]"><div class="font-bold text-[#7777AA]">◈: 특성화고, ▣: 특목고, 이외 일반계고</div></div>
<table class="school-table">
<tr><td>▣ <a class="wiki-link" href="덕빈예술고.html">덕빈예술고</a></td><td>◈ <a class="wiki-link" href="낭원공업고.html">낭원공업고</a></td><td class="bg-boy"><a class="wiki-link" href="낭원남고.html">낭원남고</a></td><td class="bg-girl"><a class="wiki-link" href="낭원여고.html">낭원여고</a></td><td><a class="wiki-link" href="낭원고.html">낭원고</a></td></tr>
<tr><td><a class="wiki-link" href="전포고.html">전포고</a></td><td><a class="wiki-link" href="판주고.html">판주고</a></td><td><a class="wiki-link" href="송천고.html">송천고</a></td><td></td><td></td></tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
