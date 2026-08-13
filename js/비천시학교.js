/**
 * 파일명: js/비천시학교.js
 * 설명: 비천시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-비천시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>비천시의 초등학교 (총 16개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="비천초등학교.html">비천초등학교</a></td>
<td><a class="wiki-link" href="성두초등학교.html">성두초등학교</a></td>
<td><a class="wiki-link" href="벽산초등학교.html">벽산초등학교</a></td>
<td><a class="wiki-link" href="괴림초등학교.html">괴림초등학교</a></td>
<td><a class="wiki-link" href="은암초등학교.html">은암초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="부음초등학교.html">부음초등학교</a></td>
<td><a class="wiki-link" href="구승초등학교.html">구승초등학교</a></td>
<td><a class="wiki-link" href="서군초등학교.html">서군초등학교</a></td>
<td><a class="wiki-link" href="소육초등학교.html">소육초등학교</a></td>
<td><a class="wiki-link" href="수국초등학교.html">수국초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="괴성초등학교.html">괴성초등학교</a></td>
<td><a class="wiki-link" href="고녕초등학교.html">고녕초등학교</a></td>
<td><a class="wiki-link" href="진격초등학교.html">진격초등학교</a></td>
<td><a class="wiki-link" href="구락초등학교.html">구락초등학교</a></td>
<td><a class="wiki-link" href="서호초등학교.html">서호초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="장포초등학교.html">장포초등학교</a></td>
<td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>비천시의 중학교 (총 9개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="비천중학교.html">비천중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="비천여자중학교.html">비천여자중학교</a></td>
<td><a class="wiki-link" href="성두중학교.html">성두중학교</a></td>
<td><a class="wiki-link" href="벽산중학교.html">벽산중학교</a></td>
<td><a class="wiki-link" href="괴림중학교.html">괴림중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서군중학교.html">서군중학교</a></td>
<td><a class="wiki-link" href="소육중학교.html">소육중학교</a></td>
<td><a class="wiki-link" href="수국중학교.html">수국중학교</a></td>
<td><a class="wiki-link" href="고녕중학교.html">고녕중학교</a></td>
<td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>비천시의 고등학교 (총 6개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<div class="mb-1">
<span class="bg-boy px-1 border border-gray-200">남자고등학교</span>, 
                        <span class="bg-girl px-1 border border-gray-200">여자고등학교</span>, 
                        이외 남녀공학
                    </div>
<div class="font-bold text-[#7777AA]">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="비천고등학교.html">비천고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="비천여자고등학교.html">비천여자고등학교</a></td>
<td><a class="wiki-link" href="성두고등학교.html">성두고등학교</a></td>
<td><a class="wiki-link" href="벽산고등학교.html">벽산고등학교</a></td>
<td>◈<a class="wiki-link" href="비천공업고등학교.html">비천공업고등학교</a></td>
</tr>
<tr>
<td>◈<a class="wiki-link" href="비천상업고등학교.html">비천상업고등학교</a></td>
<td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
