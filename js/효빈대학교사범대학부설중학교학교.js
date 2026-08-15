/**
 * 파일명: js/효빈대학교사범대학부설중학교학교.js
 * 설명: 효빈대학교 사범대학 부설중학교 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-효빈대학교사범대학부설중학교-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 서구의 중학교</span>
</div>
<div class="school-nav-info p-2 text-center text-xs border-b border-[var(--wiki-border)]">
<div class="mb-1">
<span class="bg-boy px-1 border border-[var(--wiki-border)] rounded">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-[var(--wiki-border)] rounded">여자중학교</span>, 
                    이외 남녀공학
                </div>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="과진중학교.html">과진중</a></td>
<td><a class="wiki-link" href="나살리중학교.html">나살리중</a></td>
<td><a class="wiki-link" href="내성중학교.html">내성중</a></td>
<td><a class="wiki-link" href="당선중학교.html">당선중</a></td>
<td><a class="wiki-link" href="사복중학교.html">사복중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서구중학교.html">서구중</a></td>
<td><a class="wiki-link" href="신북중학교.html">신북중</a></td>
<td><a class="wiki-link" href="운진중학교.html">운진중</a></td>
<td><a class="wiki-link" href="청덕중학교.html">청덕중</a></td>
<td><a class="wiki-link" href="청산중학교.html">청산중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="칠천중학교.html">칠천중</a></td>
<td><a class="wiki-link" href="헌산중학교.html">헌산중</a></td>
<td><a class="wiki-link" href="효빈대부설중학교.html">효빈대부설중</a></td>
<td><a class="wiki-link" href="효빈서중학교.html">효빈서중</a></td>
<td><a class="wiki-link" href="효빈체육중학교.html">효빈체육중</a></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
