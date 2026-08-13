/**
 * 파일명: js/북구중학교.js
 * 설명: 효빈광역시 북구의 중학교 하단 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-북구중학교-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
<div class="nav-box rounded overflow-hidden shadow-sm" style="border: 2px solid var(--wiki-main);">
<div class="nav-box-header cursor-default" style="background-color: #373a3c;">
<span>효빈광역시 북구의 중학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                이외 남녀공학
            </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="고송중학교.html">고송중</a></td><td><a class="wiki-link" href="남전중학교.html">남전중</a></td><td><a class="wiki-link" href="내개중학교.html">내개중</a></td><td><a class="wiki-link" href="등기중학교.html">등기중</a></td><td><a class="wiki-link" href="만초중학교.html">만초중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="사녹중학교.html">사녹중</a></td><td><a class="wiki-link" href="사능중학교.html">사능중</a></td><td><a class="wiki-link" href="서도중학교.html">서도중</a></td><td><a class="wiki-link" href="소부중학교.html">소부중</a></td><td><a class="wiki-link" href="소요중학교.html">소요중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="수포중학교.html">수포중</a></td><td><a class="wiki-link" href="습지중학교.html">습지중</a></td><td><a class="wiki-link" href="신영중학교.html">신영중</a></td><td><a class="wiki-link" href="오내중학교.html">오내중</a></td><td><a class="wiki-link" href="이선중학교.html">이선중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="입희중학교.html">입희중</a></td><td class="bg-girl"><a class="wiki-link" href="중수여자중학교.html">중수여중</a></td><td class="bg-boy"><a class="wiki-link" href="중수중학교.html">중수중</a></td><td><a class="wiki-link" href="진희중학교.html">진희중</a></td><td><a class="wiki-link" href="채산중학교.html">채산중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="천왕사중학교.html">천왕사중</a></td><td><a class="wiki-link" href="청능중학교.html">청능중</a></td><td><a class="wiki-link" href="추산중학교.html">추산중</a></td><td><a class="wiki-link" href="포산중학교.html">포산중</a></td><td><a class="wiki-link" href="해서중학교.html">해서중</a></td>
</tr>
<tr>
<td class="bg-girl"><a class="wiki-link" href="효빈북여자중학교.html">효빈북여중</a></td><td class="bg-boy"><a class="wiki-link" href="효빈북중학교.html">효빈북중</a></td><td><a class="wiki-link" href="효빈제일중학교.html">효빈제일중</a></td><td></td><td></td>
</tr>
</table>
</div>
        `;
    });
});
