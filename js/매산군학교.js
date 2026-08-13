/**
 * 파일명: js/매산군학교.js
 * 설명: 매산군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-매산군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>매산군의 초등학교 (총 22개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="대현초등학교.html">대현초등학교</a></td>
<td><a class="wiki-link" href="중앙초등학교.html">중앙초등학교</a></td>
<td><a class="wiki-link" href="남부초등학교.html">남부초등학교</a></td>
<td><a class="wiki-link" href="북부초등학교.html">북부초등학교</a></td>
<td><a class="wiki-link" href="신흥초등학교.html">신흥초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="신운초등학교.html">신운초등학교</a></td>
<td><a class="wiki-link" href="무천초등학교.html">무천초등학교</a></td>
<td><a class="wiki-link" href="서창초등학교.html">서창초등학교</a></td>
<td><a class="wiki-link" href="율주초등학교.html">율주초등학교</a></td>
<td><a class="wiki-link" href="동부초등학교.html">동부초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="강운초등학교.html">강운초등학교</a></td>
<td><a class="wiki-link" href="이율초등학교.html">이율초등학교</a></td>
<td><a class="wiki-link" href="송림초등학교.html">송림초등학교</a></td>
<td><a class="wiki-link" href="육산초등학교.html">육산초등학교</a></td>
<td><a class="wiki-link" href="우곡초등학교.html">우곡초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="상곡초등학교.html">상곡초등학교</a></td>
<td><a class="wiki-link" href="조건초등학교.html">조건초등학교</a></td>
<td><a class="wiki-link" href="덕신초등학교.html">덕신초등학교</a></td>
<td><a class="wiki-link" href="채산초등학교.html">채산초등학교</a></td>
<td><a class="wiki-link" href="군선초등학교.html">군선초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="대야초등학교.html">대야초등학교</a></td>
<td><a class="wiki-link" href="해변초등학교.html">해변초등학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>매산군의 중학교 (총 14개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="대현중학교.html">대현중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="대현여자중학교.html">대현여자중학교</a></td>
<td><a class="wiki-link" href="대현서중학교.html">대현서중학교</a></td>
<td><a class="wiki-link" href="신운중학교.html">신운중학교</a></td>
<td><a class="wiki-link" href="신운여자중학교.html">신운여자중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="율주중학교.html">율주중학교</a></td>
<td><a class="wiki-link" href="율주여자중학교.html">율주여자중학교</a></td>
<td><a class="wiki-link" href="이율중학교.html">이율중학교</a></td>
<td><a class="wiki-link" href="육산중학교.html">육산중학교</a></td>
<td><a class="wiki-link" href="우곡중학교.html">우곡중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="조건중학교.html">조건중학교</a></td>
<td><a class="wiki-link" href="덕신중학교.html">덕신중학교</a></td>
<td><a class="wiki-link" href="채산중학교.html">채산중학교</a></td>
<td><a class="wiki-link" href="군선중학교.html">군선중학교</a></td>
<td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>매산군의 고등학교 (총 6개교)</span>
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
<td><a class="wiki-link" href="대현고등학교.html">대현고등학교</a></td>
<td><a class="wiki-link" href="매산고등학교.html">매산고등학교</a></td>
<td><a class="wiki-link" href="신운고등학교.html">신운고등학교</a></td>
<td><a class="wiki-link" href="율주고등학교.html">율주고등학교</a></td>
<td>◈<a class="wiki-link" href="매산해양과학고등학교.html">매산해양과학고</a></td>
</tr>
<tr>
<td>◈<a class="wiki-link" href="매산농업고등학교.html">매산농업고등학교</a></td>
<td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
