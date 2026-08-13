/**
 * 파일명: js/분주군학교.js
 * 설명: 분주군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-분주군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>분주군의 초등학교 (총 13개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="분주초등학교.html">분주초등학교</a></td>
<td><a class="wiki-link" href="중앙초등학교.html">중앙초등학교</a></td>
<td><a class="wiki-link" href="동부초등학교.html">동부초등학교</a></td>
<td><a class="wiki-link" href="신안초등학교.html">신안초등학교</a></td>
<td><a class="wiki-link" href="대자초등학교.html">대자초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="원구초등학교.html">원구초등학교</a></td>
<td><a class="wiki-link" href="나천초등학교.html">나천초등학교</a></td>
<td><a class="wiki-link" href="정남초등학교.html">정남초등학교</a></td>
<td><a class="wiki-link" href="하권초등학교.html">하권초등학교</a></td>
<td><a class="wiki-link" href="이복초등학교.html">이복초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="평미초등학교.html">평미초등학교</a></td>
<td><a class="wiki-link" href="정동초등학교.html">정동초등학교</a></td>
<td><a class="wiki-link" href="장암초등학교.html">장암초등학교</a></td>
<td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>분주군의 중학교 (총 8개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="분주중학교.html">분주중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="분주여자중학교.html">분주여자중학교</a></td>
<td><a class="wiki-link" href="신안중학교.html">신안중학교</a></td>
<td><a class="wiki-link" href="대자중학교.html">대자중학교</a></td>
<td><a class="wiki-link" href="원구중학교.html">원구중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="나천중학교.html">나천중학교</a></td>
<td><a class="wiki-link" href="정남중학교.html">정남중학교</a></td>
<td><a class="wiki-link" href="하권중학교.html">하권중학교</a></td>
<td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>분주군의 고등학교 (총 4개교)</span>
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
<td><a class="wiki-link" href="분주고등학교.html">분주고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="분주여자고등학교.html">분주여자고등학교</a></td>
<td>◈<a class="wiki-link" href="분주해양과학고등학교.html">분주해양과학고</a></td>
<td>◈<a class="wiki-link" href="분주생명과학고등학교.html">분주생명과학고</a></td>
<td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
