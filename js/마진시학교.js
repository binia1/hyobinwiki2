/**
 * 파일명: js/마진시학교.js
 * 설명: 마진시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-마진시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>마진시의 초등학교 (총 30개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="마진초등학교.html">마진초등학교</a></td>
<td><a class="wiki-link" href="중앙초등학교.html">중앙초등학교</a></td>
<td><a class="wiki-link" href="동부초등학교.html">동부초등학교</a></td>
<td><a class="wiki-link" href="서부초등학교.html">서부초등학교</a></td>
<td><a class="wiki-link" href="남부초등학교.html">남부초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="북부초등학교.html">북부초등학교</a></td>
<td><a class="wiki-link" href="신곡초등학교.html">신곡초등학교</a></td>
<td><a class="wiki-link" href="고곡초등학교.html">고곡초등학교</a></td>
<td><a class="wiki-link" href="월석초등학교.html">월석초등학교</a></td>
<td><a class="wiki-link" href="율영초등학교.html">율영초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="천대초등학교.html">천대초등학교</a></td>
<td><a class="wiki-link" href="청호초등학교.html">청호초등학교</a></td>
<td><a class="wiki-link" href="유록초등학교.html">유록초등학교</a></td>
<td><a class="wiki-link" href="창동초등학교.html">창동초등학교</a></td>
<td><a class="wiki-link" href="덕암초등학교.html">덕암초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="상정초등학교.html">상정초등학교</a></td>
<td><a class="wiki-link" href="신시초등학교.html">신시초등학교</a></td>
<td><a class="wiki-link" href="팔현초등학교.html">팔현초등학교</a></td>
<td><a class="wiki-link" href="장병초등학교.html">장병초등학교</a></td>
<td><a class="wiki-link" href="상본초등학교.html">상본초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="명야초등학교.html">명야초등학교</a></td>
<td><a class="wiki-link" href="수판초등학교.html">수판초등학교</a></td>
<td><a class="wiki-link" href="고사초등학교.html">고사초등학교</a></td>
<td><a class="wiki-link" href="송죽초등학교.html">송죽초등학교</a></td>
<td><a class="wiki-link" href="진목초등학교.html">진목초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="율곡초등학교.html">율곡초등학교</a></td>
<td><a class="wiki-link" href="석계초등학교.html">석계초등학교</a></td>
<td><a class="wiki-link" href="송정초등학교.html">송정초등학교</a></td>
<td><a class="wiki-link" href="화산초등학교.html">화산초등학교</a></td>
<td><a class="wiki-link" href="산욱초등학교.html">산욱초등학교</a></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>마진시의 중학교 (총 22개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                이외 남녀공학
            </div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="마진중학교.html">마진중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="마진여자중학교.html">마진여자중학교</a></td>
<td><a class="wiki-link" href="신곡중학교.html">신곡중학교</a></td>
<td><a class="wiki-link" href="고곡중학교.html">고곡중학교</a></td>
<td><a class="wiki-link" href="월석중학교.html">월석중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="율영중학교.html">율영중학교</a></td>
<td><a class="wiki-link" href="천대중학교.html">천대중학교</a></td>
<td><a class="wiki-link" href="청호중학교.html">청호중학교</a></td>
<td><a class="wiki-link" href="유록중학교.html">유록중학교</a></td>
<td><a class="wiki-link" href="창동중학교.html">창동중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="덕암중학교.html">덕암중학교</a></td>
<td><a class="wiki-link" href="상정중학교.html">상정중학교</a></td>
<td><a class="wiki-link" href="신시중학교.html">신시중학교</a></td>
<td><a class="wiki-link" href="팔현중학교.html">팔현중학교</a></td>
<td><a class="wiki-link" href="장병중학교.html">장병중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="상본중학교.html">상본중학교</a></td>
<td><a class="wiki-link" href="명야중학교.html">명야중학교</a></td>
<td><a class="wiki-link" href="수판중학교.html">수판중학교</a></td>
<td><a class="wiki-link" href="마진서중학교.html">마진서중학교</a></td>
<td><a class="wiki-link" href="마진동중학교.html">마진동중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="마진북중학교.html">마진북중학교</a></td>
<td><a class="wiki-link" href="마진남중학교.html">마진남중학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>마진시의 고등학교 (총 12개교)</span>
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
<td><a class="wiki-link" href="마진고등학교.html">마진고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="마진여자고등학교.html">마진여자고등학교</a></td>
<td><a class="wiki-link" href="월석고등학교.html">월석고등학교</a></td>
<td><a class="wiki-link" href="유록고등학교.html">유록고등학교</a></td>
<td><a class="wiki-link" href="상정고등학교.html">상정고등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="천대고등학교.html">천대고등학교</a></td>
<td><a class="wiki-link" href="마진중앙고등학교.html">마진중앙고등학교</a></td>
<td>◈<a class="wiki-link" href="마진공업고등학교.html">마진공업고등학교</a></td>
<td>◈<a class="wiki-link" href="마진상업고등학교.html">마진상업고등학교</a></td>
<td><a class="wiki-link" href="마진예술고등학교.html">마진예술고등학교</a></td>
</tr>
<tr>
<td>▣<a class="wiki-link" href="마진외국어고등학교.html">마진외국어고등학교</a></td>
<td><a class="wiki-link" href="마진체육고등학교.html">마진체육고등학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
