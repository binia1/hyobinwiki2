/**
 * 파일명: js/천성구학교.js
 * 설명: 천성구 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-천성구-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>천성구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="관아초등학교.html">관아초</a></td><td><a class="wiki-link" href="녹하초등학교.html">녹하초</a></td><td><a class="wiki-link" href="대뢰초등학교.html">대뢰초</a></td><td><a class="wiki-link" href="마야초등학교.html">마야초</a></td><td><a class="wiki-link" href="백로초등학교.html">백로초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="복주초등학교.html">복주초</a></td><td><a class="wiki-link" href="비원초등학교.html">비원초</a></td><td><a class="wiki-link" href="비후초등학교.html">비후초</a></td><td><a class="wiki-link" href="빈전초등학교.html">빈전초</a></td><td><a class="wiki-link" href="산민초등학교.html">산민초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="세지초등학교.html">세지초</a></td><td><a class="wiki-link" href="엽월초등학교.html">엽월초</a></td><td><a class="wiki-link" href="유원초등학교.html">유원초</a></td><td><a class="wiki-link" href="육갑초등학교.html">육갑초</a></td><td><a class="wiki-link" href="인자초등학교.html">인자초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="장방초등학교.html">장방초</a></td><td><a class="wiki-link" href="정법초등학교.html">정법초</a></td><td><a class="wiki-link" href="천성초등학교.html">천성초</a></td><td><a class="wiki-link" href="팔호초등학교.html">팔호초</a></td><td><a class="wiki-link" href="호산초등학교.html">호산초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="후촌초등학교.html">후촌초</a></td><td><a class="wiki-link" href="천주초등학교.html">천주초</a></td><td><a class="wiki-link" href="한지초등학교.html">한지초</a></td><td><a class="wiki-link" href="천성남초등학교.html">천성남초</a></td><td><a class="wiki-link" href="천성북초등학교.html">천성북초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="성원초등학교.html">성원초</a></td><td><a class="wiki-link" href="성지초등학교.html">성지초</a></td><td><a class="wiki-link" href="천안초등학교.html">천안초</a></td><td><a class="wiki-link" href="성화초등학교.html">성화초</a></td><td><a class="wiki-link" href="천성중앙초등학교.html">천성중앙초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="복주남초등학교.html">복주남초</a></td><td><a class="wiki-link" href="관아서초등학교.html">관아서초</a></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>천성구의 중학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="천성중학교.html">천성중</a></td><td><a class="wiki-link" href="관아중학교.html">관아중</a></td><td><a class="wiki-link" href="대뢰중학교.html">대뢰중</a></td><td><a class="wiki-link" href="마야중학교.html">마야중</a></td><td><a class="wiki-link" href="복주중학교.html">복주중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="비원중학교.html">비원중</a></td><td><a class="wiki-link" href="빈전중학교.html">빈전중</a></td><td><a class="wiki-link" href="산민중학교.html">산민중</a></td><td><a class="wiki-link" href="세지중학교.html">세지중</a></td><td><a class="wiki-link" href="엽월중학교.html">엽월중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="유원중학교.html">유원중</a></td><td><a class="wiki-link" href="인자중학교.html">인자중</a></td><td><a class="wiki-link" href="정법중학교.html">정법중</a></td><td><a class="wiki-link" href="팔호중학교.html">팔호중</a></td><td><a class="wiki-link" href="천주중학교.html">천주중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="중은중학교.html">중은중</a></td><td><a class="wiki-link" href="천주중앙중학교.html">천주중앙중</a></td><td><a class="wiki-link" href="천주제일중학교.html">천주제일중</a></td><td><a class="wiki-link" href="천주북중학교.html">천주북중</a></td><td><a class="wiki-link" href="천주서중학교.html">천주서중</a></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>천성구의 고등학교</span>
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
<td>▣<a class="wiki-link" href="천주과학고등학교.html">천주과학고</a></td>
<td>◈<a class="wiki-link" href="천주정보산업고등학교.html">천주정보산업고</a></td>
<td>◈<a class="wiki-link" href="천주예술고등학교.html">천주예술고</a></td>
<td><a class="wiki-link" href="천성중앙고등학교.html">천성중앙고</a></td>
<td class="bg-boy"><a class="wiki-link" href="천성고등학교.html">천성고</a></td>
</tr>
<tr>
<td class="bg-girl"><a class="wiki-link" href="천성여자고등학교.html">천성여고</a></td>
<td><a class="wiki-link" href="대뢰고등학교.html">대뢰고</a></td>
<td><a class="wiki-link" href="복주고등학교.html">복주고</a></td>
<td class="bg-boy"><a class="wiki-link" href="비원고등학교.html">비원고</a></td>
<td class="bg-girl"><a class="wiki-link" href="비원여자고등학교.html">비원여고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="인자고등학교.html">인자고</a></td>
<td class="bg-boy"><a class="wiki-link" href="천주고등학교.html">천주고</a></td>
<td><a class="wiki-link" href="팔호고등학교.html">팔호고</a></td>
<td class="bg-girl"><a class="wiki-link" href="천주여자고등학교.html">천주여고</a></td>
<td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
