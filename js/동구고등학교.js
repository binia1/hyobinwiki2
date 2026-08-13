/**
 * 파일명: js/동구고등학교.js
 * 설명: 효빈광역시 동구의 고등학교 하단 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-동구고등학교-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
<div class="nav-box rounded overflow-hidden shadow-sm" style="border: 2px solid var(--wiki-main);">
<div class="nav-box-header cursor-default" style="background-color: #373a3c;">
<span>효빈광역시 동구의 고등학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<div class="mb-1">
<span class="bg-boy px-1 border border-gray-200">남자고등학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자고등학교</span>, 
                    이외 남녀공학
                </div>
<div class="font-bold text-[#FF9922]">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
</div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="덕현고등학교.html">덕현고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="덕현여자고등학교.html">덕현여자고등학교</a></td>
<td><a class="wiki-link" href="사가당고등학교.html">사가당고등학교</a></td>
<td><a class="wiki-link" href="전천고등학교.html">전천고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="사가당여자고등학교.html">사가당여자고등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="진흥고등학교.html">진흥고등학교</a></td>
<td class="bg-boy">⊙<a class="wiki-link" href="효빈동고등학교.html">효빈동고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="효빈동여자고등학교.html">효빈동여자고등학교</a></td>
<td>◈<a class="wiki-link" href="효빈정보고등학교.html">효빈정보고등학교</a></td>
<td></td>
</tr>
</table>
</div>
        `;
    });
});
