/**
 * 파일명: js/매성시학교.js
 * 설명: 매성시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-매성시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>매성시의 초등학교 (총 16개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="매성초등학교.html">매성초</a></td>
<td><a class="wiki-link" href="매화초등학교.html">매화초</a></td>
<td><a class="wiki-link" href="장미초등학교.html">장미초</a></td>
<td><a class="wiki-link" href="철쭉초등학교.html">철쭉초</a></td>
<td><a class="wiki-link" href="근암초등학교.html">근암초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="중앙초등학교.html">중앙초</a></td>
<td><a class="wiki-link" href="서부초등학교.html">서부초</a></td>
<td><a class="wiki-link" href="동부초등학교.html">동부초</a></td>
<td><a class="wiki-link" href="남산초등학교.html">남산초</a></td>
<td><a class="wiki-link" href="북부초등학교.html">북부초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="조천초등학교.html">조천초</a></td>
<td><a class="wiki-link" href="식곡초등학교.html">식곡초</a></td>
<td><a class="wiki-link" href="상강초등학교.html">상강초</a></td>
<td><a class="wiki-link" href="우음초등학교.html">우음초</a></td>
<td><a class="wiki-link" href="규래초등학교.html">규래초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="개서초등학교.html">개서초</a></td>
<td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>매성시의 중학교 (총 12개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                이외 남녀공학
            </div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="매성중학교.html">매성중</a></td>
<td class="bg-girl"><a class="wiki-link" href="매성여자중학교.html">매성여중</a></td>
<td><a class="wiki-link" href="근암중학교.html">근암중</a></td>
<td class="bg-boy"><a class="wiki-link" href="근암남중학교.html">근암남중</a></td>
<td class="bg-girl"><a class="wiki-link" href="근암여중학교.html">근암여중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="북부중학교.html">북부중</a></td>
<td><a class="wiki-link" href="조천중학교.html">조천중</a></td>
<td><a class="wiki-link" href="식곡중학교.html">식곡중</a></td>
<td><a class="wiki-link" href="상강중학교.html">상강중</a></td>
<td><a class="wiki-link" href="우음중학교.html">우음중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="규래중학교.html">규래중</a></td>
<td><a class="wiki-link" href="개서중학교.html">개서중</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>매성시의 고등학교 (총 6개교)</span>
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
<td class="bg-boy"><a class="wiki-link" href="매성고등학교.html">매성고</a></td>
<td class="bg-girl"><a class="wiki-link" href="매성여자고등학교.html">매성여고</a></td>
<td><a class="wiki-link" href="근암고등학교.html">근암고</a></td>
<td><a class="wiki-link" href="우음고등학교.html">우음고</a></td>
<td><a class="wiki-link" href="조천고등학교.html">조천고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="개서고등학교.html">개서고</a></td>
<td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});