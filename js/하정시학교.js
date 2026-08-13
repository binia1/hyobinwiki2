/**
 * 파일명: js/하정시학교.js
 * 설명: 하정시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-하정시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>하정시의 초등학교 (총 24개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="하정초등학교.html">하정초등학교</a></td>
<td><a class="wiki-link" href="규산초등학교.html">규산초등학교</a></td>
<td><a class="wiki-link" href="해성초등학교.html">해성초등학교</a></td>
<td><a class="wiki-link" href="율진초등학교.html">율진초등학교</a></td>
<td><a class="wiki-link" href="동석초등학교.html">동석초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="별당초등학교.html">별당초등학교</a></td>
<td><a class="wiki-link" href="중앙초등학교.html">중앙초등학교</a></td>
<td><a class="wiki-link" href="남부초등학교.html">남부초등학교</a></td>
<td><a class="wiki-link" href="북부초등학교.html">북부초등학교</a></td>
<td><a class="wiki-link" href="서부초등학교.html">서부초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="구주초등학교.html">구주초등학교</a></td>
<td><a class="wiki-link" href="팔봉초등학교.html">팔봉초등학교</a></td>
<td><a class="wiki-link" href="등전초등학교.html">등전초등학교</a></td>
<td><a class="wiki-link" href="귀선초등학교.html">귀선초등학교</a></td>
<td><a class="wiki-link" href="산동초등학교.html">산동초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="산서초등학교.html">산서초등학교</a></td>
<td><a class="wiki-link" href="장성초등학교.html">장성초등학교</a></td>
<td><a class="wiki-link" href="광산초등학교.html">광산초등학교</a></td>
<td><a class="wiki-link" href="탄광초등학교.html">탄광초등학교</a></td>
<td><a class="wiki-link" href="희망초등학교.html">희망초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="평화초등학교.html">평화초등학교</a></td>
<td><a class="wiki-link" href="문예초등학교.html">문예초등학교</a></td>
<td><a class="wiki-link" href="예술초등학교.html">예술초등학교</a></td>
<td><a class="wiki-link" href="체육초등학교.html">체육초등학교</a></td>
<td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>하정시의 중학교 (총 13개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="하정중학교.html">하정중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="하정여자중학교.html">하정여자중학교</a></td>
<td><a class="wiki-link" href="규산중학교.html">규산중학교</a></td>
<td><a class="wiki-link" href="해성중학교.html">해성중학교</a></td>
<td><a class="wiki-link" href="율진중학교.html">율진중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="별당중학교.html">별당중학교</a></td>
<td><a class="wiki-link" href="동석중학교.html">동석중학교</a></td>
<td><a class="wiki-link" href="구주중학교.html">구주중학교</a></td>
<td><a class="wiki-link" href="팔봉중학교.html">팔봉중학교</a></td>
<td><a class="wiki-link" href="등전중학교.html">등전중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="귀선중학교.html">귀선중학교</a></td>
<td><a class="wiki-link" href="산동중학교.html">산동중학교</a></td>
<td><a class="wiki-link" href="산서중학교.html">산서중학교</a></td>
<td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>하정시의 고등학교 (총 7개교)</span>
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
<td><a class="wiki-link" href="하정고등학교.html">하정고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="하정여자고등학교.html">하정여자고등학교</a></td>
<td><a class="wiki-link" href="별당고등학교.html">별당고등학교</a></td>
<td>◈<a class="wiki-link" href="하정공업고등학교.html">하정공업고등학교</a></td>
<td>◈<a class="wiki-link" href="하정상업고등학교.html">하정상업고등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="하정예술고등학교.html">하정예술고등학교</a></td>
<td><a class="wiki-link" href="덕빈고등학교.html">덕빈고등학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
