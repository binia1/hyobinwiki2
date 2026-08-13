/**
 * 파일명: js/항동2가학교.js
 * 설명: 항동2가 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-항동2가-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<div class="nav-box rounded overflow-hidden shadow-sm mt-2">
<div class="nav-box-header cursor-default">
<span>항동2가 관내 학교</span>
</div>
<table class="school-table text-center text-sm bg-white">
<tr>
<th class="bg-gray-100 w-24 border text-black font-bold">고등학교</th>
<td class="border p-2">
<a class="wiki-link" href="효빈해양산업고등학교.html">효빈해양산업고등학교</a>
</td>
</tr>
<tr>
<th class="bg-gray-100 w-24 border text-black font-bold">중학교</th>
<td class="border p-2">
<a class="wiki-link" href="항동중학교.html">항동중학교</a>
</td>
</tr>
<tr>
<th class="bg-gray-100 w-24 border text-black font-bold">초등학교</th>
<td class="border p-2">
<a class="wiki-link" href="항동초등학교.html">항동초</a>, <a class="wiki-link" href="항구초등학교.html">항구초</a>, <a class="wiki-link" href="종람초등학교.html">종람초</a>
</td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
