/**
 * 파일명: js/다판고등학교학교.js
 * 설명: 다판고등학교 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-다판고등학교-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 중구의 고등학교</span>
</div>
<div class="school-nav-info p-2 text-center text-xs">
<div class="mb-1">
<span class="bg-boy px-1 border border-[var(--wiki-border)] rounded">남자고등학교</span>, 
                    <span class="bg-girl px-1 border border-[var(--wiki-border)] rounded">여자고등학교</span>, 
                    이외 남녀공학
                </div>
<div class="font-bold" style="color: var(--wiki-fixed)">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
</div>
<table class="school-table">
<tr>
<td class="font-bold"><a class="wiki-link" href="다판고등학교.html">다판고등학교</a></td>
<td><a class="wiki-link" href="효빈고등학교.html">효빈고등학교</a></td>
<td>◈<a class="wiki-link" href="효빈상업고등학교.html">효빈상업고등학교</a></td>
<td><a class="wiki-link" href="효빈중앙고등학교.html">효빈중앙고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="효빈여자고등학교.html">효빈여자고등학교</a></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
