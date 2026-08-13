/**
 * 파일명: js/원안군학교.js
 * 설명: 원안군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-원안군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>원안군의 초등학교 (총 12개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="원안초등학교.html">원안초등학교</a></td>
<td><a class="wiki-link" href="상능초등학교.html">상능초등학교</a></td>
<td><a class="wiki-link" href="개색초등학교.html">개색초등학교</a></td>
<td><a class="wiki-link" href="소귀초등학교.html">소귀초등학교</a></td>
<td><a class="wiki-link" href="막자초등학교.html">막자초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="소궁초등학교.html">소궁초등학교</a></td>
<td><a class="wiki-link" href="노국초등학교.html">노국초등학교</a></td>
<td><a class="wiki-link" href="산음초등학교.html">산음초등학교</a></td>
<td><a class="wiki-link" href="소운초등학교.html">소운초등학교</a></td>
<td><a class="wiki-link" href="신평초등학교.html">신평초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="상리초등학교.html">상리초등학교</a></td>
<td><a class="wiki-link" href="중앙초등학교.html">중앙초등학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>원안군의 중학교 (총 7개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="원안중학교.html">원안중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="원안여자중학교.html">원안여자중학교</a></td>
<td><a class="wiki-link" href="상능중학교.html">상능중학교</a></td>
<td><a class="wiki-link" href="개색중학교.html">개색중학교</a></td>
<td><a class="wiki-link" href="소귀중학교.html">소귀중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="막자중학교.html">막자중학교</a></td>
<td><a class="wiki-link" href="노국중학교.html">노국중학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>원안군의 고등학교 (총 4개교)</span>
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
<td><a class="wiki-link" href="원안고등학교.html">원안고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="원안여자고등학교.html">원안여자고등학교</a></td>
<td><a class="wiki-link" href="상능고등학교.html">상능고등학교</a></td>
<td><a class="wiki-link" href="개색고등학교.html">개색고등학교</a></td>
<td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
