/**
 * 파일명: js/창전구학교.js
 * 설명: 창전구 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-창전구-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 창전구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="광정초등학교.html">광정초</a></td><td><a class="wiki-link" href="내산초등학교.html">내산초</a></td><td><a class="wiki-link" href="독선초등학교.html">독선초</a></td><td><a class="wiki-link" href="동곡초등학교.html">동곡초</a></td><td><a class="wiki-link" href="동자초등학교.html">동자초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="마시초등학교.html">마시초</a></td><td><a class="wiki-link" href="배로초등학교.html">배로초</a></td><td><a class="wiki-link" href="보통초등학교.html">보통초</a></td><td><a class="wiki-link" href="산원초등학교.html">산원초</a></td><td><a class="wiki-link" href="생덕초등학교.html">생덕초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="소선초등학교.html">소선초</a></td><td><a class="wiki-link" href="소역초등학교.html">소역초</a></td><td><a class="wiki-link" href="시곡초등학교.html">시곡초</a></td><td><a class="wiki-link" href="시로초등학교.html">시로초</a></td><td><a class="wiki-link" href="신개초등학교.html">신개초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="신악초등학교.html">신악초</a></td><td><a class="wiki-link" href="신언초등학교.html">신언초</a></td><td><a class="wiki-link" href="오양초등학교.html">오양초</a></td><td><a class="wiki-link" href="월삼초등학교.html">월삼초</a></td><td><a class="wiki-link" href="유류초등학교.html">유류초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="이엽초등학교.html">이엽초</a></td><td><a class="wiki-link" href="진백초등학교.html">진백초</a></td><td><a class="wiki-link" href="창상초등학교.html">창상초</a></td><td><a class="wiki-link" href="창전초등학교.html">창전초</a></td><td><a class="wiki-link" href="칠심초등학교.html">칠심초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="투자초등학교.html">투자초</a></td><td><a class="wiki-link" href="팔조초등학교.html">팔조초</a></td><td><a class="wiki-link" href="해성초등학교.html">해성초</a></td><td><a class="wiki-link" href="회계초등학교.html">회계초</a></td><td><a class="wiki-link" href="회전초등학교.html">회전초</a></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 창전구의 중학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="광정중학교.html">광정중</a></td><td><a class="wiki-link" href="내산중학교.html">내산중</a></td><td class="bg-girl"><a class="wiki-link" href="동곡여자중학교.html">동곡여중</a></td><td><a class="wiki-link" href="동곡중학교.html">동곡중</a></td><td><a class="wiki-link" href="마시중학교.html">마시중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="시로중학교.html">시로중</a></td><td><a class="wiki-link" href="시송중학교.html">시송중</a></td><td class="bg-girl"><a class="wiki-link" href="쌍엽여자중학교.html">쌍엽여중</a></td><td><a class="wiki-link" href="쌍엽중학교.html">쌍엽중</a></td><td><a class="wiki-link" href="오아중학교.html">오아중</a></td>
</tr>
<tr>
<td class="bg-girl"><a class="wiki-link" href="월삼여자중학교.html">월삼여중</a></td><td><a class="wiki-link" href="월삼중학교.html">월삼중</a></td><td><a class="wiki-link" href="유류중학교.html">유류중</a></td><td><a class="wiki-link" href="은내중학교.html">은내중</a></td><td>※<a class="wiki-link" href="이엽중학교.html">이엽중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="진백중학교.html">진백중</a></td><td><a class="wiki-link" href="창전중학교.html">창전중</a></td><td><a class="wiki-link" href="칠심중학교.html">칠심중</a></td><td><a class="wiki-link" href="투자중학교.html">투자중</a></td><td><a class="wiki-link" href="팔조중학교.html">팔조중</a></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 창전구의 고등학교</span>
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
<td class="bg-boy"><a class="wiki-link" href="동곡고등학교.html">동곡고</a></td><td class="bg-girl"><a class="wiki-link" href="동곡여자고등학교.html">동곡여고</a></td><td>◈<a class="wiki-link" href="마시고등학교.html">마시고</a></td><td><a class="wiki-link" href="시로고등학교.html">시로고</a></td><td class="bg-boy"><a class="wiki-link" href="쌍엽고등학교.html">쌍엽고</a></td>
</tr>
<tr>
<td class="bg-girl"><a class="wiki-link" href="쌍엽여자고등학교.html">쌍엽여고</a></td><td class="bg-boy"><a class="wiki-link" href="월삼고등학교.html">월삼고</a></td><td class="bg-girl"><a class="wiki-link" href="월삼여자고등학교.html">월삼여고</a></td><td>※<a class="wiki-link" href="이엽고등학교.html">이엽고</a></td><td><a class="wiki-link" href="진백고등학교.html">진백고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="창전고등학교.html">창전고</a></td><td>◈<a class="wiki-link" href="창전상업고등학교.html">창전상고</a></td><td></td><td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
