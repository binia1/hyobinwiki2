/**
 * 파일명: js/서진시고등학교개교.js
 * 설명: 덕빈북도 서진시의 고등학교 (8개교) 하단 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-서진시고등학교개교-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>덕빈북도 서진시의 고등학교 (8개교)</span>
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
<td class="bg-special">◈ <a class="wiki-link" href="서진공업고등학교.html">서진공업고</a></td>
<td class="font-bold border-2 border-[var(--wiki-main)] bg-gray-100"><a class="wiki-link" href="서진고등학교.html">서진고</a></td>
<td><a class="wiki-link" href="아은고등학교.html">아은고</a></td>
<td class="bg-girl"><a class="wiki-link" href="서진여자고등학교.html">서진여고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="진목고등학교.html">진목고</a></td>
<td class="bg-girl"><a class="wiki-link" href="산영여자고등학교.html">산영여고</a></td>
<td class="bg-girl"><a class="wiki-link" href="아은여자고등학교.html">아은여고</a></td>
<td class="bg-special">◈ <a class="wiki-link" href="서진상업고등학교.html">서진상업고</a></td>
</tr>
</table>
</div>
        `;
    });
});
