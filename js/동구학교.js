/**
 * 파일명: js/동구학교.js
 * 설명: 동구 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-동구-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 동구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="덕현초등학교.html">덕현초등학교</a></td>
<td><a class="wiki-link" href="동구초등학교.html">동구초등학교</a></td>
<td><a class="wiki-link" href="매남초등학교.html">매남초등학교</a></td>
<td><a class="wiki-link" href="모산초등학교.html">모산초등학교</a></td>
<td><a class="wiki-link" href="부선초등학교.html">부선초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="사가당초등학교.html">사가당초등학교</a></td>
<td><a class="wiki-link" href="사덕초등학교.html">사덕초등학교</a></td>
<td><a class="wiki-link" href="산군초등학교.html">산군초등학교</a></td>
<td><a class="wiki-link" href="산인초등학교.html">산인초등학교</a></td>
<td><a class="wiki-link" href="시건초등학교.html">시건초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="신간초등학교.html">신간초등학교</a></td>
<td><a class="wiki-link" href="신곡초등학교.html">신곡초등학교</a></td>
<td><a class="wiki-link" href="신분초등학교.html">신분초등학교</a></td>
<td><a class="wiki-link" href="원내초등학교.html">원내초등학교</a></td>
<td><a class="wiki-link" href="전덕초등학교.html">전덕초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="전천초등학교.html">전천초등학교</a></td>
<td><a class="wiki-link" href="처곡초등학교.html">처곡초등학교</a></td>
<td><a class="wiki-link" href="효빈동초등학교.html">효빈동초등학교</a></td>
<td></td><td></td>
</tr>
</table>
</div>
<!-- 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 동구의 중학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="나공중학교.html">나공중학교</a></td>
<td><a class="wiki-link" href="덕현중학교.html">덕현중학교</a></td>
<td><a class="wiki-link" href="모산중학교.html">모산중학교</a></td>
<td><a class="wiki-link" href="사가당중학교.html">사가당중학교</a></td>
<td><a class="wiki-link" href="산군중학교.html">산군중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="전덕중학교.html">전덕중학교</a></td>
<td><a class="wiki-link" href="전천중학교.html">전천중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="효빈동여자중학교.html">효빈동여자중학교</a></td>
<td class="bg-boy"><a class="wiki-link" href="효빈동중학교.html">효빈동중학교</a></td>
<td></td>
</tr>
</table>
</div>
<!-- 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
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
<td class="bg-boy">⊙<a class="wiki-link" href="효빈동고등학교.html">효빈동고등학교</a></td>
</tr>
<tr>
<td class="bg-girl"><a class="wiki-link" href="효빈동여자고등학교.html">효빈동여자고등학교</a></td>
<td>◈<a class="wiki-link" href="효빈정보고등학교.html">효빈정보고등학교</a></td>
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
