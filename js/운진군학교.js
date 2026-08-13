/**
 * 파일명: js/운진군학교.js
 * 설명: 운진군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-운진군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>운진군의 초등학교 (총 23개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="운진초등학교.html">운진초등학교</a></td>
<td><a class="wiki-link" href="중앙초등학교.html">중앙초등학교</a></td>
<td><a class="wiki-link" href="오가초등학교.html">오가초등학교</a></td>
<td><a class="wiki-link" href="율곡초등학교.html">율곡초등학교</a></td>
<td><a class="wiki-link" href="동화초등학교.html">동화초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="강변초등학교.html">강변초등학교</a></td>
<td><a class="wiki-link" href="송림초등학교.html">송림초등학교</a></td>
<td><a class="wiki-link" href="운남초등학교.html">운남초등학교</a></td>
<td><a class="wiki-link" href="대동초등학교.html">대동초등학교</a></td>
<td><a class="wiki-link" href="남천초등학교.html">남천초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="수목초등학교.html">수목초등학교</a></td>
<td><a class="wiki-link" href="서강초등학교.html">서강초등학교</a></td>
<td><a class="wiki-link" href="화평초등학교.html">화평초등학교</a></td>
<td><a class="wiki-link" href="금산초등학교.html">금산초등학교</a></td>
<td><a class="wiki-link" href="은산초등학교.html">은산초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="사내초등학교.html">사내초등학교</a></td>
<td><a class="wiki-link" href="풍산초등학교.html">풍산초등학교</a></td>
<td><a class="wiki-link" href="신운초등학교.html">신운초등학교</a></td>
<td><a class="wiki-link" href="학산초등학교.html">학산초등학교</a></td>
<td><a class="wiki-link" href="산인초등학교.html">산인초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="산곶초등학교.html">산곶초등학교</a></td>
<td><a class="wiki-link" href="어항초등학교.html">어항초등학교</a></td>
<td><a class="wiki-link" href="도군초등학교.html">도군초등학교</a></td>
<td></td><td></td>
</tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>운진군의 중학교 (총 12개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
<span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 이외 남녀공학
</div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="운진중학교.html">운진중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="동화중학교.html">동화중학교</a></td>
<td><a class="wiki-link" href="율곡중학교.html">율곡중학교</a></td>
<td><a class="wiki-link" href="운진서중학교.html">운진서중학교</a></td>
<td><a class="wiki-link" href="운남중학교.html">운남중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="대동중학교.html">대동중학교</a></td>
<td><a class="wiki-link" href="운남남부중학교.html">운남남부중학교</a></td>
<td><a class="wiki-link" href="금산중학교.html">금산중학교</a></td>
<td><a class="wiki-link" href="사내중학교.html">사내중학교</a></td>
<td><a class="wiki-link" href="신운중학교.html">신운중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="산인중학교.html">산인중학교</a></td>
<td><a class="wiki-link" href="산곶중학교.html">산곶중학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>운진군의 고등학교 (총 8개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<div class="mb-1">
<span class="bg-girl px-1 border border-gray-200">여자고등학교</span>, 이외 남녀공학
</div>
<div class="font-bold text-[#7777AA]">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="운진고등학교.html">운진고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="운진여자고등학교.html">운진여자고등학교</a></td>
<td><a class="wiki-link" href="운남고등학교.html">운남고등학교</a></td>
<td><a class="wiki-link" href="사내고등학교.html">사내고등학교</a></td>
<td><a class="wiki-link" href="덕빈중앙고등학교.html">덕빈중앙고등학교</a></td>
</tr>
<tr>
<td>◈<a class="wiki-link" href="운진정밀공업고등학교.html">운진정밀공고</a></td>
<td>◈<a class="wiki-link" href="운진테크노과학고등학교.html">운진테크노과학고</a></td>
<td>▣<a class="wiki-link" href="덕빈과학고등학교.html">덕빈과학고등학교</a></td>
<td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
