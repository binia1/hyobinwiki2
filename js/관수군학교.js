/**
 * 파일명: js/관수군학교.js
 * 설명: 관수군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-관수군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>관수군의 초등학교 (총 18개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="관수초등학교.html">관수초등학교</a></td>
<td><a class="wiki-link" href="중앙초등학교.html">중앙초등학교</a></td>
<td><a class="wiki-link" href="남산초등학교.html">남산초등학교</a></td>
<td><a class="wiki-link" href="신성초등학교.html">신성초등학교</a></td>
<td><a class="wiki-link" href="강변초등학교.html">강변초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="북원초등학교.html">북원초등학교</a></td>
<td><a class="wiki-link" href="공단초등학교.html">공단초등학교</a></td>
<td><a class="wiki-link" href="문화초등학교.html">문화초등학교</a></td>
<td><a class="wiki-link" href="서원초등학교.html">서원초등학교</a></td>
<td><a class="wiki-link" href="금담초등학교.html">금담초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="금진초등학교.html">금진초등학교</a></td>
<td><a class="wiki-link" href="여원초등학교.html">여원초등학교</a></td>
<td><a class="wiki-link" href="극산초등학교.html">극산초등학교</a></td>
<td><a class="wiki-link" href="황강초등학교.html">황강초등학교</a></td>
<td><a class="wiki-link" href="실주초등학교.html">실주초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="조원초등학교.html">조원초등학교</a></td>
<td><a class="wiki-link" href="원단초등학교.html">원단초등학교</a></td>
<td><a class="wiki-link" href="고산초등학교.html">고산초등학교</a></td>
<td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>관수군의 중학교 (총 9개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="관수중학교.html">관수중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="관수여자중학교.html">관수여자중학교</a></td>
<td><a class="wiki-link" href="신성중학교.html">신성중학교</a></td>
<td class="bg-boy"><a class="wiki-link" href="북원중학교.html">북원중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="북원여자중학교.html">북원여자중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="금담중학교.html">금담중학교</a></td>
<td><a class="wiki-link" href="금진중학교.html">금진중학교</a></td>
<td><a class="wiki-link" href="여원중학교.html">여원중학교</a></td>
<td><a class="wiki-link" href="황강중학교.html">황강중학교</a></td>
<td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>관수군의 고등학교 (총 5개교)</span>
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
<td><a class="wiki-link" href="관수고등학교.html">관수고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="관수여자고등학교.html">관수여자고등학교</a></td>
<td><a class="wiki-link" href="북원고등학교.html">북원고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="북원여자고등학교.html">북원여자고등학교</a></td>
<td>◈<a class="wiki-link" href="관수공업고등학교.html">관수공업고등학교</a></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
