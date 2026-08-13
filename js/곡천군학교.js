/**
 * 파일명: js/곡천군학교.js
 * 설명: 곡천군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-곡천군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>곡천군의 초등학교 (총 12개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="곡천초등학교.html">곡천초등학교</a></td>
<td><a class="wiki-link" href="중앙초등학교.html">중앙초등학교</a></td>
<td><a class="wiki-link" href="동부초등학교.html">동부초등학교</a></td>
<td><a class="wiki-link" href="북동초등학교.html">북동초등학교</a></td>
<td><a class="wiki-link" href="인덕초등학교.html">인덕초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="사곡초등학교.html">사곡초등학교</a></td>
<td><a class="wiki-link" href="대포초등학교.html">대포초등학교</a></td>
<td><a class="wiki-link" href="하서초등학교.html">하서초등학교</a></td>
<td><a class="wiki-link" href="서호초등학교.html">서호초등학교</a></td>
<td><a class="wiki-link" href="하북초등학교.html">하북초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="용수초등학교.html">용수초등학교</a></td>
<td><a class="wiki-link" href="중곡초등학교.html">중곡초등학교</a></td>
<td><a class="wiki-link" href="남천초등학교.html">남천초등학교</a></td>
<td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>곡천군의 중학교 (총 7개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="곡천중학교.html">곡천중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="곡천여자중학교.html">곡천여자중학교</a></td>
<td><a class="wiki-link" href="북동중학교.html">북동중학교</a></td>
<td><a class="wiki-link" href="사곡중학교.html">사곡중학교</a></td>
<td><a class="wiki-link" href="하서중학교.html">하서중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="하북중학교.html">하북중학교</a></td>
<td><a class="wiki-link" href="용수중학교.html">용수중학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>곡천군의 고등학교 (총 4개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<div class="mb-1">
<span class="bg-girl px-1 border border-gray-200">여자고등학교</span>, 
                        이외 남녀공학
                    </div>
<div class="font-bold text-[#7777AA]">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="곡천고등학교.html">곡천고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="곡천여자고등학교.html">곡천여자고등학교</a></td>
<td>◈<a class="wiki-link" href="곡천공업고등학교.html">곡천공업고등학교</a></td>
<td>◈<a class="wiki-link" href="곡천생명과학고등학교.html">곡천생명과학고</a></td>
<td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
