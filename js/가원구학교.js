/**
 * 파일명: js/가원구학교.js
 * 설명: 가원구 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-가원구-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>가원구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="가원초등학교.html">가원초</a></td><td><a class="wiki-link" href="관동초등학교.html">관동초</a></td><td><a class="wiki-link" href="내성초등학교.html">내성초</a></td><td><a class="wiki-link" href="동태초등학교.html">동태초</a></td><td><a class="wiki-link" href="상만초등학교.html">상만초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서원초등학교.html">서원초</a></td><td><a class="wiki-link" href="수곡초등학교.html">수곡초</a></td><td><a class="wiki-link" href="수옥초등학교.html">수옥초</a></td><td><a class="wiki-link" href="아천초등학교.html">아천초</a></td><td><a class="wiki-link" href="역천초등학교.html">역천초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="육미초등학교.html">육미초</a></td><td><a class="wiki-link" href="주전초등학교.html">주전초</a></td><td><a class="wiki-link" href="중앙초등학교.html">중앙초</a></td><td><a class="wiki-link" href="지미초등학교.html">지미초</a></td><td><a class="wiki-link" href="천남초등학교.html">천남초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="천조초등학교.html">천조초</a></td><td><a class="wiki-link" href="풍은초등학교.html">풍은초</a></td><td><a class="wiki-link" href="현권초등학교.html">현권초</a></td><td><a class="wiki-link" href="협산초등학교.html">협산초</a></td><td><a class="wiki-link" href="가람초등학교.html">가람초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="원동초등학교.html">원동초</a></td><td><a class="wiki-link" href="가온초등학교.html">가온초</a></td><td><a class="wiki-link" href="중앙남초등학교.html">중앙남초</a></td><td><a class="wiki-link" href="가원북초등학교.html">가원북초</a></td><td><a class="wiki-link" href="새별초등학교.html">새별초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="상만동초등학교.html">상만동초</a></td><td><a class="wiki-link" href="천남서초등학교.html">천남서초</a></td><td><a class="wiki-link" href="가원중앙초등학교.html">가원중앙초</a></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>가원구의 중학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="가원중학교.html">가원중</a></td><td><a class="wiki-link" href="관동중학교.html">관동중</a></td><td><a class="wiki-link" href="내성중학교.html">내성중</a></td><td><a class="wiki-link" href="동태중학교.html">동태중</a></td><td><a class="wiki-link" href="상만중학교.html">상만중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서원중학교.html">서원중</a></td><td><a class="wiki-link" href="수곡중학교.html">수곡중</a></td><td><a class="wiki-link" href="중앙중학교.html">중앙중</a></td><td><a class="wiki-link" href="천남중학교.html">천남중</a></td><td><a class="wiki-link" href="풍은중학교.html">풍은중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="현권중학교.html">현권중</a></td><td><a class="wiki-link" href="가람중학교.html">가람중</a></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>가원구의 고등학교</span>
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
<td>◈<a class="wiki-link" href="빈주공업고등학교.html">빈주공업고</a></td>
<td>◈<a class="wiki-link" href="빈주상업고등학교.html">빈주상업고</a></td>
<td class="bg-boy"><a class="wiki-link" href="가원고등학교.html">가원고</a></td>
<td class="bg-girl"><a class="wiki-link" href="가원여자고등학교.html">가원여고</a></td>
<td><a class="wiki-link" href="상만고등학교.html">상만고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서원고등학교.html">서원고</a></td>
<td class="bg-boy"><a class="wiki-link" href="중앙고등학교.html">중앙고</a></td>
<td class="bg-girl"><a class="wiki-link" href="중앙여자고등학교.html">중앙여고</a></td>
<td><a class="wiki-link" href="천남고등학교.html">천남고</a></td>
<td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
