/**
 * 파일명: js/족포초등학교학교.js
 * 설명: 족포초등학교 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-족포초등학교-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 서구의 초등학교</span>
</div>
<div class="school-nav-info p-2 text-center text-xs border-b border-[var(--wiki-border)]">
<div class="mb-1">
<span class="bg-boy px-1 border border-[var(--wiki-border)] rounded">남자초등학교</span>, 
                    <span class="bg-girl px-1 border border-[var(--wiki-border)] rounded">여자초등학교</span>, 
                    이외 남녀공학
                </div>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="고도초등학교.html">고도초</a></td>
<td><a class="wiki-link" href="과성초등학교.html">과성초</a></td>
<td><a class="wiki-link" href="과진초등학교.html">과진초</a></td>
<td><a class="wiki-link" href="과한초등학교.html">과한초</a></td>
<td><a class="wiki-link" href="나살리초등학교.html">나살리초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="내성초등학교.html">내성초</a></td>
<td><a class="wiki-link" href="당선초등학교.html">당선초</a></td>
<td><a class="wiki-link" href="명일초등학교.html">명일초</a></td>
<td><a class="wiki-link" href="미아초등학교.html">미아초</a></td>
<td><a class="wiki-link" href="복지초등학교.html">복지초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="북문초등학교.html">북문초</a></td>
<td><a class="wiki-link" href="산산초등학교.html">산산초</a></td>
<td><a class="wiki-link" href="산진초등학교.html">산진초</a></td>
<td><a class="wiki-link" href="서구초등학교.html">서구초</a></td>
<td><a class="wiki-link" href="성내초등학교.html">성내초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="신원초등학교.html">신원초</a></td>
<td><a class="wiki-link" href="언연초등학교.html">언연초</a></td>
<td><a class="wiki-link" href="운촌초등학교.html">운촌초</a></td>
<td><a class="wiki-link" href="은안초등학교.html">은안초</a></td>
<td><a class="wiki-link" href="이라초등학교.html">이라초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="주산초등학교.html">주산초</a></td>
<td><a class="wiki-link" href="청덕초등학교.html">청덕초</a></td>
<td><a class="wiki-link" href="칠천초등학교.html">칠천초</a></td>
<td><a class="wiki-link" href="태이초등학교.html">태이초</a></td>
<td><a class="wiki-link" href="헌산초등학교.html">헌산초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="효빈서초등학교.html">효빈서초</a></td>
<td><del><a class="wiki-link text-gray-400" href="족포초등학교.html">족포초(폐교)</a></del></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
