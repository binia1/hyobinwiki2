/**
 * 파일명: js/모제군학교.js
 * 설명: 모제군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-모제군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 모제군의 초등학교 (11개교)</span></div>
<table class="school-table text-center text-xs">
<tr><td><a class="wiki-link" href="괴천초.html">괴천초</a></td><td><a class="wiki-link" href="모제초.html">모제초</a></td><td><a class="wiki-link" href="약궁초.html">약궁초</a></td><td><a class="wiki-link" href="양광초.html">양광초</a></td></tr>
<tr><td><a class="wiki-link" href="장어초.html">장어초</a></td><td><a class="wiki-link" href="청해초.html">청해초</a></td><td><a class="wiki-link" href="백로초.html">백로초</a></td><td><a class="wiki-link" href="서모제초.html">서모제초</a></td></tr>
<tr><td><a class="wiki-link" href="순수초.html">순수초</a></td><td><a class="wiki-link" href="모제남초.html">모제남초</a></td><td><a class="wiki-link" href="청정서초.html">청정서초</a></td><td></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 모제군의 중학교 (8개교)</span></div>
<table class="school-table text-center text-xs">
<tr><td><a class="wiki-link" href="모제중.html">모제중</a></td><td><a class="wiki-link" href="약궁중.html">약궁중</a></td><td><a class="wiki-link" href="장어중.html">장어중</a></td><td><a class="wiki-link" href="청해중.html">청해중</a></td></tr>
<tr><td><a class="wiki-link" href="괴천중.html">괴천중</a></td><td><a class="wiki-link" href="양광중.html">양광중</a></td><td><a class="wiki-link" href="가운중.html">가운중</a></td><td><a class="wiki-link" href="산전중.html">산전중</a></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 모제군의 고등학교 (4개교)</span></div>
<table class="school-table text-center text-xs">
<tr><td><a class="wiki-link" href="모제고.html">모제고</a></td><td><a class="wiki-link" href="약궁고.html">약궁고</a></td><td><a class="wiki-link" href="청정고.html">청정고</a></td><td><a class="wiki-link" href="청해고.html">청해고</a></td></tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
