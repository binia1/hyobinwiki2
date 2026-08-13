/**
 * 파일명: js/반양군학교.js
 * 설명: 반양군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-반양군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 반양군의 초등학교 (11개교)</span></div>
<table class="school-table text-center text-xs">
<tr><td><a class="wiki-link" href="반양초.html">반양초</a></td><td><a class="wiki-link" href="복구초.html">복구초</a></td><td><a class="wiki-link" href="북부초.html">북부초</a></td><td><a class="wiki-link" href="삽곡초.html">삽곡초</a></td></tr>
<tr><td><a class="wiki-link" href="수상초.html">수상초</a></td><td><a class="wiki-link" href="인와초.html">인와초</a></td><td><a class="wiki-link" href="적판초.html">적판초</a></td><td><a class="wiki-link" href="토정초.html">토정초</a></td></tr>
<tr><td><a class="wiki-link" href="하원초.html">하원초</a></td><td><a class="wiki-link" href="반양남초.html">반양남초</a></td><td><a class="wiki-link" href="반양서초.html">반양서초</a></td><td></td></tr>
</table>
</div>
<!-- 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 반양군의 중학교 (8개교)</span></div>
<table class="school-table text-center text-xs">
<tr><td><a class="wiki-link" href="반양중.html">반양중</a></td><td><a class="wiki-link" href="삽곡중.html">삽곡중</a></td><td><a class="wiki-link" href="복구중.html">복구중</a></td><td><a class="wiki-link" href="하원중.html">하원중</a></td></tr>
<tr><td><a class="wiki-link" href="북부중.html">북부중</a></td><td><a class="wiki-link" href="수상중.html">수상중</a></td><td><a class="wiki-link" href="인와중.html">인와중</a></td><td><a class="wiki-link" href="토정중.html">토정중</a></td></tr>
</table>
</div>
<!-- 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 반양군의 고등학교 (4개교)</span></div>
<table class="school-table text-center text-xs">
<tr><td><a class="wiki-link" href="반양고.html">반양고</a></td><td><a class="wiki-link" href="삽곡고.html">삽곡고</a></td><td class="bg-girl"><a class="wiki-link" href="반양여고.html">반양여고</a></td><td><a class="wiki-link" href="복구고.html">복구고</a></td></tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
