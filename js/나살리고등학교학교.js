/**
 * 파일명: js/나살리고등학교학교.js
 * 설명: 나살리 고등학교 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-나살리고등학교-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 서구의 고등학교</span>
</div>
<div class="school-nav-info p-2 text-center text-xs border-b border-[var(--wiki-border)]">
<div class="mb-1">
<span class="bg-boy px-1 border border-[var(--wiki-border)] rounded">남자고등학교</span>, 
                    <span class="bg-girl px-1 border border-[var(--wiki-border)] rounded">여자고등학교</span>, 
                    이외 남녀공학
                </div>
<div class="font-bold text-[var(--wiki-fixed)]">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
</div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="과진고등학교.html">과진고</a></td>
<td>※<a class="wiki-link" href="나살리고등학교.html">나살리고</a></td>
<td class="bg-boy"><a class="wiki-link" href="내성고등학교.html">내성고</a></td>
<td>◈<a class="wiki-link" href="내죽고등학교.html">내죽고</a></td>
<td class="bg-boy"><a class="wiki-link" href="당선고등학교.html">당선고</a></td>
</tr>
<tr>
<td class="bg-girl"><a class="wiki-link" href="당선여자고등학교.html">당선여고</a></td>
<td class="bg-boy"><a class="wiki-link" href="복지고등학교.html">복지고</a></td>
<td class="bg-girl"><a class="wiki-link" href="복지여자고등학교.html">복지여고</a></td>
<td><a class="wiki-link" href="청덕고등학교.html">청덕고</a></td>
<td>⊙<a class="wiki-link" href="효빈대학교 사범대학 부설고등학교.html">효빈대부설고</a></td>
</tr>
<tr>
<td class="bg-boy"><a class="wiki-link" href="효빈북고등학교.html">효빈북고</a></td>
<td class="bg-boy"><a class="wiki-link" href="효빈서고등학교.html">효빈서고</a></td>
<td class="bg-girl"><a class="wiki-link" href="효빈서여자고등학교.html">효빈서여고</a></td>
<td>▣<a class="wiki-link" href="효빈체육고등학교.html">효빈체육고</a></td>
<td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
