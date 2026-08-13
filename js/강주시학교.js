/**
 * 파일명: js/강주시학교.js
 * 설명: 강주시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-강주시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>강주시의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="갈원초등학교.html">갈원초</a></td><td><a class="wiki-link" href="강주초등학교.html">강주초</a></td><td><a class="wiki-link" href="곡전초등학교.html">곡전초</a></td><td><a class="wiki-link" href="공문초등학교.html">공문초</a></td><td><a class="wiki-link" href="과탐초등학교.html">과탐초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="광릉초등학교.html">광릉초</a></td><td><a class="wiki-link" href="금상초등학교.html">금상초</a></td><td><a class="wiki-link" href="남조초등학교.html">남조초</a></td><td><a class="wiki-link" href="문성초등학교.html">문성초</a></td><td><a class="wiki-link" href="백택초등학교.html">백택초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="북예초등학교.html">북예초</a></td><td><a class="wiki-link" href="삼랑초등학교.html">삼랑초</a></td><td><a class="wiki-link" href="석동초등학교.html">석동초</a></td><td><a class="wiki-link" href="석북초등학교.html">석북초</a></td><td><a class="wiki-link" href="석서초등학교.html">석서초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="석성초등학교.html">석성초</a></td><td><a class="wiki-link" href="심전초등학교.html">심전초</a></td><td><a class="wiki-link" href="야판초등학교.html">야판초</a></td><td><a class="wiki-link" href="입포초등학교.html">입포초</a></td><td><a class="wiki-link" href="자유초등학교.html">자유초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="종상초등학교.html">종상초</a></td><td><a class="wiki-link" href="좌구초등학교.html">좌구초</a></td><td><a class="wiki-link" href="중앙초등학교.html">중앙초</a></td><td><a class="wiki-link" href="청성초등학교.html">청성초</a></td><td><a class="wiki-link" href="춘일초등학교.html">춘일초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="탕산초등학교.html">탕산초</a></td><td><a class="wiki-link" href="풍영초등학교.html">풍영초</a></td><td><a class="wiki-link" href="풍원초등학교.html">풍원초</a></td><td><a class="wiki-link" href="풍주초등학교.html">풍주초</a></td><td><a class="wiki-link" href="화궁초등학교.html">화궁초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="강주남초등학교.html">강주남초</a></td><td><a class="wiki-link" href="강주북초등학교.html">강주북초</a></td><td><a class="wiki-link" href="미래남초등학교.html">미래남초</a></td><td><a class="wiki-link" href="지학서초등학교.html">지학서초</a></td><td><a class="wiki-link" href="창의북초등학교.html">창의북초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="과탐남초등학교.html">과탐남초</a></td><td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>강주시의 중학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="강주중학교.html">강주중</a></td><td><a class="wiki-link" href="갈원중학교.html">갈원중</a></td><td><a class="wiki-link" href="곡전중학교.html">곡전중</a></td><td><a class="wiki-link" href="공문중학교.html">공문중</a></td><td><a class="wiki-link" href="과탐중학교.html">과탐중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="광릉중학교.html">광릉중</a></td><td><a class="wiki-link" href="금상중학교.html">금상중</a></td><td><a class="wiki-link" href="문성중학교.html">문성중</a></td><td><a class="wiki-link" href="백택중학교.html">백택중</a></td><td><a class="wiki-link" href="삼랑중학교.html">삼랑중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="심전중학교.html">심전중</a></td><td><a class="wiki-link" href="입포중학교.html">입포중</a></td><td><a class="wiki-link" href="자유중학교.html">자유중</a></td><td><a class="wiki-link" href="종상중학교.html">종상중</a></td><td><a class="wiki-link" href="청성중학교.html">청성중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="탕산중학교.html">탕산중</a></td><td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>강주시의 고등학교</span>
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
<td>◈<a class="wiki-link" href="강주바이오고등학교.html">강주바이오고</a></td>
<td><a class="wiki-link" href="강주고등학교.html">강주고</a></td>
<td class="bg-boy"><a class="wiki-link" href="강주남고등학교.html">강주남고</a></td>
<td class="bg-girl"><a class="wiki-link" href="강주여고등학교.html">강주여고</a></td>
<td><a class="wiki-link" href="문성고등학교.html">문성고</a></td>
</tr>
<tr>
<td class="bg-boy"><a class="wiki-link" href="문성남고등학교.html">문성남고</a></td>
<td class="bg-girl"><a class="wiki-link" href="문성여고등학교.html">문성여고</a></td>
<td><a class="wiki-link" href="광릉고등학교.html">광릉고</a></td>
<td><a class="wiki-link" href="삼랑고등학교.html">삼랑고</a></td>
<td><a class="wiki-link" href="심전고등학교.html">심전고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="청성고등학교.html">청성고</a></td>
<td><a class="wiki-link" href="지식고등학교.html">지식고</a></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
