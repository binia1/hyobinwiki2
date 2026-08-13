/**
 * 파일명: js/빈성구학교.js
 * 설명: 빈성구 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-빈성구-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>빈성구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="경전초등학교.html">경전초</a></td><td><a class="wiki-link" href="고전초등학교.html">고전초</a></td><td><a class="wiki-link" href="남면초등학교.html">남면초</a></td><td><a class="wiki-link" href="동면초등학교.html">동면초</a></td><td><a class="wiki-link" href="동신초등학교.html">동신초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="문내초등학교.html">문내초</a></td><td><a class="wiki-link" href="빈성초등학교.html">빈성초</a></td><td><a class="wiki-link" href="사민초등학교.html">사민초</a></td><td><a class="wiki-link" href="서구초등학교.html">서구초</a></td><td><a class="wiki-link" href="여사초등학교.html">여사초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="웅읍초등학교.html">웅읍초</a></td><td><a class="wiki-link" href="이은초등학교.html">이은초</a></td><td><a class="wiki-link" href="지산초등학교.html">지산초</a></td><td><a class="wiki-link" href="차당초등학교.html">차당초</a></td><td><a class="wiki-link" href="시능초등학교.html">시능초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="늑골초등학교.html">늑골초</a></td><td><a class="wiki-link" href="성산초등학교.html">성산초</a></td><td><a class="wiki-link" href="빈성남초등학교.html">빈성남초</a></td><td><a class="wiki-link" href="은성초등학교.html">은성초</a></td><td><a class="wiki-link" href="금성초등학교.html">금성초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="신성초등학교.html">신성초</a></td><td><a class="wiki-link" href="고소초등학교.html">고소초</a></td><td><a class="wiki-link" href="무은초등학교.html">무은초</a></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>빈성구의 중학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="빈성중학교.html">빈성중</a></td><td><a class="wiki-link" href="고전중학교.html">고전중</a></td><td><a class="wiki-link" href="남면중학교.html">남면중</a></td><td><a class="wiki-link" href="동신중학교.html">동신중</a></td><td><a class="wiki-link" href="문내중학교.html">문내중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서구중학교.html">서구중</a></td><td><a class="wiki-link" href="여사중학교.html">여사중</a></td><td><a class="wiki-link" href="이은중학교.html">이은중</a></td><td><a class="wiki-link" href="지산중학교.html">지산중</a></td><td><a class="wiki-link" href="시능중학교.html">시능중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="다은중학교.html">다은중</a></td><td><a class="wiki-link" href="고소중학교.html">고소중</a></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>빈성구의 고등학교</span>
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
<td>▣<a class="wiki-link" href="빈주과학고등학교.html">빈주과학고</a></td>
<td class="bg-girl"><a class="wiki-link" href="동신여자고등학교.html">동신여고</a></td>
<td class="bg-boy"><a class="wiki-link" href="빈성고등학교.html">빈성고</a></td>
<td class="bg-girl"><a class="wiki-link" href="빈성여자고등학교.html">빈성여고</a></td>
<td class="bg-boy"><a class="wiki-link" href="동신고등학교.html">동신고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="고전고등학교.html">고전고</a></td>
<td class="bg-boy"><a class="wiki-link" href="서구고등학교.html">서구고</a></td>
<td class="bg-girl"><a class="wiki-link" href="서구여자고등학교.html">서구여고</a></td>
<td><a class="wiki-link" href="이은고등학교.html">이은고</a></td>
<td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
