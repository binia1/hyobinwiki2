/**
 * 파일명: js/중구효빈학교.js
 * 설명: 중구(효빈) 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-중구효빈-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 중구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="내조초등학교.html">내조초등학교</a></td>
<td><a class="wiki-link" href="내항초등학교.html">내항초등학교</a></td>
<td><a class="wiki-link" href="리사초등학교.html">리사초등학교</a></td>
<td><a class="wiki-link" href="상원초등학교.html">상원초등학교</a></td>
<td><a class="wiki-link" href="신덕초등학교.html">신덕초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="심동초등학교.html">심동초등학교</a></td>
<td><a class="wiki-link" href="약맥초등학교.html">약맥초등학교</a></td>
<td><a class="wiki-link" href="천석초등학교.html">천석초등학교</a></td>
<td><a class="wiki-link" href="효빈원동초등학교.html">효빈원동초등학교</a></td>
<td><a class="wiki-link" href="효빈중동초등학교.html">효빈중동초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="효빈중앙초등학교.html">효빈중앙초등학교</a></td>
<td><a class="wiki-link" href="효빈초등학교.html">효빈초등학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 중구의 중학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="내조중학교.html">내조중학교</a></td>
<td><a class="wiki-link" href="내항중학교.html">내항중학교</a></td>
<td><a class="wiki-link" href="삼각중학교.html">삼각중학교</a></td>
<td><a class="wiki-link" href="창선중학교.html">창선중학교</a></td>
<td><a class="wiki-link" href="효빈중학교.html">효빈중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="효빈중앙중학교.html">효빈중앙중학교</a></td>
<td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 중구의 고등학교</span>
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
<td><a class="wiki-link" href="다판고등학교.html">다판고등학교</a></td>
<td><a class="wiki-link" href="효빈고등학교.html">효빈고등학교</a></td>
<td>◈<a class="wiki-link" href="효빈상업고등학교.html">효빈상업고등학교</a></td>
<td><a class="wiki-link" href="효빈중앙고등학교.html">효빈중앙고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="효빈여자고등학교.html">효빈여자고등학교</a></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
