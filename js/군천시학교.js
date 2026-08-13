/**
 * 파일명: js/군천시학교.js
 * 설명: 군천시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-군천시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 군천시의 초등학교 (30개교)</span></div>
<table class="school-table">
<tr><td><a class="wiki-link" href="고옥초.html">고옥초</a></td><td><a class="wiki-link" href="군천초.html">군천초</a></td><td><a class="wiki-link" href="남강초.html">남강초</a></td><td><a class="wiki-link" href="남민초.html">남민초</a></td><td><a class="wiki-link" href="남오초.html">남오초</a></td></tr>
<tr><td><a class="wiki-link" href="대청초.html">대청초</a></td><td><a class="wiki-link" href="신득초.html">신득초</a></td><td><a class="wiki-link" href="애음초.html">애음초</a></td><td><a class="wiki-link" href="오조초.html">오조초</a></td><td><a class="wiki-link" href="을차초.html">을차초</a></td></tr>
<tr><td><a class="wiki-link" href="조빈초.html">조빈초</a></td><td><a class="wiki-link" href="중동초.html">중동초</a></td><td><a class="wiki-link" href="진곡초.html">진곡초</a></td><td><a class="wiki-link" href="천택초.html">천택초</a></td><td><a class="wiki-link" href="하강초.html">하강초</a></td></tr>
<tr><td><a class="wiki-link" href="하합초.html">하합초</a></td><td><a class="wiki-link" href="한동초.html">한동초</a></td><td><a class="wiki-link" href="현남초.html">현남초</a></td><td><a class="wiki-link" href="현해초.html">현해초</a></td><td><a class="wiki-link" href="호산초.html">호산초</a></td></tr>
<tr><td><a class="wiki-link" href="호택초.html">호택초</a></td><td><a class="wiki-link" href="군천서초.html">군천서초</a></td><td><a class="wiki-link" href="군천북초.html">군천북초</a></td><td><a class="wiki-link" href="생태남초.html">생태남초</a></td><td><a class="wiki-link" href="맑은샘초.html">맑은샘초</a></td></tr>
<tr><td><a class="wiki-link" href="옥택초.html">옥택초</a></td><td><a class="wiki-link" href="학구초.html">학구초</a></td><td><a class="wiki-link" href="견전초.html">견전초</a></td><td><a class="wiki-link" href="관야초.html">관야초</a></td><td><a class="wiki-link" href="가립초.html">가립초</a></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 군천시의 중학교 (12개교)</span></div>
<table class="school-table">
<tr><td><a class="wiki-link" href="군천중.html">군천중</a></td><td><a class="wiki-link" href="고옥중.html">고옥중</a></td><td><a class="wiki-link" href="남강중.html">남강중</a></td><td><a class="wiki-link" href="남민중.html">남민중</a></td><td><a class="wiki-link" href="대청중.html">대청중</a></td></tr>
<tr><td><a class="wiki-link" href="신득중.html">신득중</a></td><td><a class="wiki-link" href="애음중.html">애음중</a></td><td><a class="wiki-link" href="진곡중.html">진곡중</a></td><td><a class="wiki-link" href="하강중.html">하강중</a></td><td><a class="wiki-link" href="현남중.html">현남중</a></td></tr>
<tr><td><a class="wiki-link" href="현해중.html">현해중</a></td><td><a class="wiki-link" href="군천서중.html">군천서중</a></td><td></td><td></td><td></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 군천시의 고등학교 (11개교)</span></div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]"><div class="font-bold text-[#7777AA]">▣: 특목고, ◈: 특성화고, 이외 일반계고</div></div>
<table class="school-table">
<tr><td>▣ <a class="wiki-link" href="덕빈외고.html">덕빈외고</a></td><td>▣ <a class="wiki-link" href="덕빈과학고.html">덕빈과학고</a></td><td>◈ <a class="wiki-link" href="군천생태농업고.html">군천생태농업고</a></td><td class="bg-girl"><a class="wiki-link" href="애음여고.html">애음여고</a></td><td><a class="wiki-link" href="군천고.html">군천고</a></td></tr>
<tr><td class="bg-girl"><a class="wiki-link" href="군천여고.html">군천여고</a></td><td><a class="wiki-link" href="남민고.html">남민고</a></td><td><a class="wiki-link" href="애음고.html">애음고</a></td><td><a class="wiki-link" href="하강고.html">하강고</a></td><td><a class="wiki-link" href="현해고.html">현해고</a></td></tr>
<tr><td><a class="wiki-link" href="강주상업고.html">강주상업고</a></td><td></td><td></td><td></td><td></td></tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
