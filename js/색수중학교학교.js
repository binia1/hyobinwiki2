/**
 * 파일명: js/색수중학교학교.js
 * 설명: 색수중학교 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-색수중학교-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 청엽구의 중학교</span>
</div>
<div class="school-nav-info p-2 text-center text-xs">
<span class="bg-boy px-1 border border-[var(--wiki-border)] rounded">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-[var(--wiki-border)] rounded">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="남동중학교.html">남동중</a></td><td><a class="wiki-link" href="남부중학교.html">남부중</a></td><td class="bg-girl"><a class="wiki-link" href="동리여자중학교.html">동리여중</a></td><td><a class="wiki-link" href="동리중학교.html">동리중</a></td><td><a class="wiki-link" href="등동중학교.html">등동중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="마잡중학교.html">마잡중</a></td><td><a class="wiki-link" href="마장중학교.html">마장중</a></td><td><a class="wiki-link" href="모카중학교.html">모카중</a></td><td><a class="wiki-link" href="비내중학교.html">비내중</a></td><td><a class="wiki-link" href="비마중학교.html">비마중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="빈동중학교.html">빈동중</a></td><td><a class="wiki-link" href="사노중학교.html">사노중</a></td><td class="font-bold text-[var(--wiki-main)]"><a class="wiki-link" href="색수중학교.html">색수중</a></td><td><a class="wiki-link" href="서승중학교.html">서승중</a></td><td><a class="wiki-link" href="서증중학교.html">서증중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="승령중학교.html">승령중</a></td><td><a class="wiki-link" href="신자중학교.html">신자중</a></td><td><a class="wiki-link" href="우전중학교.html">우전중</a></td><td><a class="wiki-link" href="우택중학교.html">우택중</a></td><td><a class="wiki-link" href="원남중학교.html">원남중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="이사중학교.html">이사중</a></td><td><a class="wiki-link" href="입동중학교.html">입동중</a></td><td><a class="wiki-link" href="청빈중학교.html">청빈중</a></td><td><a class="wiki-link" href="청엽국제중학교.html">청엽국제중</a></td><td class="bg-girl"><a class="wiki-link" href="청엽여자중학교.html">청엽여중</a></td>
</tr>
<tr>
<td class="bg-boy"><a class="wiki-link" href="청엽중학교.html">청엽중</a></td><td><a class="wiki-link" href="팔천중학교.html">팔천중</a></td><td><a class="wiki-link" href="헌이송중학교.html">헌이송중</a></td><td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
