/**
 * 파일명: js/상안군학교.js
 * 설명: 상안군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-상안군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>상안군의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="낙산초등학교.html">낙산초</a></td><td><a class="wiki-link" href="사류초등학교.html">사류초</a></td><td><a class="wiki-link" href="상안초등학교.html">상안초</a></td><td><a class="wiki-link" href="승정초등학교.html">승정초</a></td><td><a class="wiki-link" href="이부초등학교.html">이부초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="일채초등학교.html">일채초</a></td><td><a class="wiki-link" href="태서초등학교.html">태서초</a></td><td><a class="wiki-link" href="패총초등학교.html">패총초</a></td><td><a class="wiki-link" href="행송초등학교.html">행송초</a></td><td><a class="wiki-link" href="상안남초등학교.html">상안남초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="상안북초등학교.html">상안북초</a></td><td><a class="wiki-link" href="도원초등학교.html">도원초</a></td><td><a class="wiki-link" href="대삼초등학교.html">대삼초</a></td><td><a class="wiki-link" href="세곡초등학교.html">세곡초</a></td><td><a class="wiki-link" href="순화초등학교.html">순화초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="약사초등학교.html">약사초</a></td><td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>상안군의 중학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="상안중학교.html">상안중</a></td><td><a class="wiki-link" href="이부중학교.html">이부중</a></td><td><a class="wiki-link" href="태서중학교.html">태서중</a></td><td><a class="wiki-link" href="패총중학교.html">패총중</a></td><td><a class="wiki-link" href="상산중학교.html">상산중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="일채중학교.html">일채중</a></td><td><a class="wiki-link" href="기천중학교.html">기천중</a></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>상안군의 고등학교</span>
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
<td><a class="wiki-link" href="상안고등학교.html">상안고</a></td><td><a class="wiki-link" href="이부고등학교.html">이부고</a></td><td><a class="wiki-link" href="태서고등학교.html">태서고</a></td><td>◈<a class="wiki-link" href="상안상업고등학교.html">상안상업고</a></td><td class="bg-girl"><a class="wiki-link" href="상안여자고등학교.html">상안여고</a></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
