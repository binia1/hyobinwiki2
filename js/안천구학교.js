/**
 * 파일명: js/안천구학교.js
 * 설명: 안천구 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-안천구-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 안천구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="고소초등학교.html">고소초</a></td><td><a class="wiki-link" href="교신초등학교.html">교신초</a></td><td><a class="wiki-link" href="군선초등학교.html">군선초</a></td><td><a class="wiki-link" href="뇌전초등학교.html">뇌전초</a></td><td><a class="wiki-link" href="능릉초등학교.html">능릉초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="당가초등학교.html">당가초</a></td><td><a class="wiki-link" href="도자초등학교.html">도자초</a></td><td><a class="wiki-link" href="도정초등학교.html">도정초</a></td><td><a class="wiki-link" href="당포초등학교.html">당포초</a></td><td><a class="wiki-link" href="리나초등학교.html">리나초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="리의초등학교.html">리의초</a></td><td><a class="wiki-link" href="백합초등학교.html">백합초</a></td><td><a class="wiki-link" href="북택초등학교.html">북택초</a></td><td><a class="wiki-link" href="상가초등학교.html">상가초</a></td><td><a class="wiki-link" href="서수초등학교.html">서수초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="성공초등학교.html">성공초</a></td><td><a class="wiki-link" href="성저초등학교.html">성저초</a></td><td><a class="wiki-link" href="소령초등학교.html">소령초</a></td><td><a class="wiki-link" href="소유초등학교.html">소유초</a></td><td><a class="wiki-link" href="시택초등학교.html">시택초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="신동초등학교.html">신동초</a></td><td><a class="wiki-link" href="신선초등학교.html">신선초</a></td><td><a class="wiki-link" href="안천초등학교.html">안천초</a></td><td><a class="wiki-link" href="영색무초등학교.html">영색무초</a></td><td><a class="wiki-link" href="유우초등학교.html">유우초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="이자초등학교.html">이자초</a></td><td><a class="wiki-link" href="제택초등학교.html">제택초</a></td><td><a class="wiki-link" href="창건초등학교.html">창건초</a></td><td><a class="wiki-link" href="채회초등학교.html">채회초</a></td><td><a class="wiki-link" href="천옥초등학교.html">천옥초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="탄자초등학교.html">탄자초</a></td><td><a class="wiki-link" href="태택초등학교.html">태택초</a></td><td><a class="wiki-link" href="택류초등학교.html">택류초</a></td><td><a class="wiki-link" href="택소초등학교.html">택소초</a></td><td><a class="wiki-link" href="팔망성초등학교.html">팔망성초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="포성초등학교.html">포성초</a></td><td><a class="wiki-link" href="하가초등학교.html">하가초</a></td><td><a class="wiki-link" href="하구초등학교.html">하구초</a></td><td><a class="wiki-link" href="하화초등학교.html">하화초</a></td><td><a class="wiki-link" href="화범초등학교.html">화범초</a></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 안천구의 중학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="군남중학교.html">군남중</a></td><td><a class="wiki-link" href="능천중학교.html">능천중</a></td><td><a class="wiki-link" href="당가중학교.html">당가중</a></td><td><a class="wiki-link" href="백합중학교.html">백합중</a></td><td><a class="wiki-link" href="북택중학교.html">북택중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서수중학교.html">서수중</a></td><td><a class="wiki-link" href="성저중학교.html">성저중</a></td><td><a class="wiki-link" href="신동중학교.html">신동중</a></td><td><a class="wiki-link" href="안천중학교.html">안천중</a></td><td><a class="wiki-link" href="영색무중학교.html">영색무중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="원선중학교.html">원선중</a></td><td class="bg-girl"><a class="wiki-link" href="이자여자중학교.html">이자여중</a></td><td><a class="wiki-link" href="이자중학교.html">이자중</a></td><td><a class="wiki-link" href="제택중학교.html">제택중</a></td><td><a class="wiki-link" href="창건중학교.html">창건중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="탄자중학교.html">탄자중</a></td><td><a class="wiki-link" href="팔망성중학교.html">팔망성중</a></td><td><a class="wiki-link" href="하가중학교.html">하가중</a></td><td><a class="wiki-link" href="하구중학교.html">하구중</a></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 안천구의 고등학교</span>
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
<td><a class="wiki-link" href="당가고등학교.html">당가고</a></td><td><a class="wiki-link" href="북택고등학교.html">북택고</a></td><td><a class="wiki-link" href="안천고등학교.html">안천고</a></td><td>▣<a class="wiki-link" href="안천과학고등학교.html">안천과고</a></td><td class="bg-girl"><a class="wiki-link" href="안천여자고등학교.html">안천여고</a></td>
</tr>
<tr>
<td>◈<a class="wiki-link" href="안천정보고등학교.html">안천정보고</a></td><td><a class="wiki-link" href="영색무고등학교.html">영색무고</a></td><td><a class="wiki-link" href="이자고등학교.html">이자고</a></td><td class="bg-girl"><a class="wiki-link" href="이자여자고등학교.html">이자여고</a></td><td><a class="wiki-link" href="제택고등학교.html">제택고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="창건고등학교.html">창건고</a></td><td><a class="wiki-link" href="팔망성고등학교.html">팔망성고</a></td><td><a class="wiki-link" href="하가고등학교.html">하가고</a></td><td>◈<a class="wiki-link" href="효빈농생명고등학교.html">효빈농생명고</a></td><td class="bg-girl"><a class="wiki-link" href="당가여자고등학교.html">당가여고</a></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
