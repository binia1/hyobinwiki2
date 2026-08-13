/**
 * 파일명: js/계성시학교.js
 * 설명: 계성시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-계성시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>계성시의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="계성초등학교.html">계성초</a></td><td><a class="wiki-link" href="마시초등학교.html">마시초</a></td><td><a class="wiki-link" href="부남초등학교.html">부남초</a></td><td><a class="wiki-link" href="성내초등학교.html">성내초</a></td><td><a class="wiki-link" href="시로초등학교.html">시로초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="아마초등학교.html">아마초</a></td><td><a class="wiki-link" href="진등초등학교.html">진등초</a></td><td><a class="wiki-link" href="진백초등학교.html">진백초</a></td><td><a class="wiki-link" href="천동초등학교.html">천동초</a></td><td><a class="wiki-link" href="하가초등학교.html">하가초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="호두초등학교.html">호두초</a></td><td><a class="wiki-link" href="호원초등학교.html">호원초</a></td><td><a class="wiki-link" href="계성남초등학교.html">계성남초</a></td><td><a class="wiki-link" href="계성북초등학교.html">계성북초</a></td><td><a class="wiki-link" href="성광초등학교.html">성광초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="성명초등학교.html">성명초</a></td><td><a class="wiki-link" href="시정초등학교.html">시정초</a></td><td><a class="wiki-link" href="천서초등학교.html">천서초</a></td><td><a class="wiki-link" href="진백중앙초등학교.html">진백중앙초</a></td><td><a class="wiki-link" href="호두남초등학교.html">호두남초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="마시중앙초등학교.html">마시중앙초</a></td><td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>계성시의 중학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="계성중학교.html">계성중</a></td><td><a class="wiki-link" href="마시중학교.html">마시중</a></td><td><a class="wiki-link" href="부남중학교.html">부남중</a></td><td><a class="wiki-link" href="성내중학교.html">성내중</a></td><td><a class="wiki-link" href="진백중학교.html">진백중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="천동중학교.html">천동중</a></td><td><a class="wiki-link" href="하가중학교.html">하가중</a></td><td><a class="wiki-link" href="호두중학교.html">호두중</a></td><td><a class="wiki-link" href="계성남중학교.html">계성남중</a></td><td><a class="wiki-link" href="계성북중학교.html">계성북중</a></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>계성시의 고등학교</span>
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
<td>◈<a class="wiki-link" href="계성디자인고등학교.html">계성디자인고</a></td>
<td><a class="wiki-link" href="계성고등학교.html">계성고</a></td>
<td class="bg-boy"><a class="wiki-link" href="계성남고등학교.html">계성남고</a></td>
<td class="bg-girl"><a class="wiki-link" href="계성여고등학교.html">계성여고</a></td>
<td><a class="wiki-link" href="마시고등학교.html">마시고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="진백고등학교.html">진백고</a></td>
<td><a class="wiki-link" href="천동고등학교.html">천동고</a></td>
<td><a class="wiki-link" href="호두고등학교.html">호두고</a></td>
<td><a class="wiki-link" href="미래고등학교.html">미래고</a></td>
<td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
