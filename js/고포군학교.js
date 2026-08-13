/**
 * 파일명: js/고포군학교.js
 * 설명: 고포군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-고포군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>고포군의 초등학교 (총 7개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="고포초등학교.html">고포초등학교</a></td>
<td><a class="wiki-link" href="항만초등학교.html">항만초등학교</a></td>
<td><a class="wiki-link" href="동원초등학교.html">동원초등학교</a></td>
<td><a class="wiki-link" href="포선초등학교.html">포선초등학교</a></td>
<td><a class="wiki-link" href="대산초등학교.html">대산초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="북부초등학교.html">북부초등학교</a></td>
<td><a class="wiki-link" href="신성초등학교.html">신성초등학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>고포군의 중학교 (총 4개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="고포중학교.html">고포중학교</a></td>
<td><a class="wiki-link" href="동원중학교.html">동원중학교</a></td>
<td><a class="wiki-link" href="포선중학교.html">포선중학교</a></td>
<td><a class="wiki-link" href="대산중학교.html">대산중학교</a></td>
<td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>고포군의 고등학교 (총 2개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<div class="font-bold text-[#7777AA]">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="고포고등학교.html">고포고등학교</a></td>
<td>◈<a class="wiki-link" href="고포해양과학고등학교.html">고포해양과학고</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
