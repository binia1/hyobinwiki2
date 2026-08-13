/**
 * 파일명: js/석창군학교.js
 * 설명: 석창군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-석창군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>석창군의 초등학교 (총 22개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="석창초등학교.html">석창초등학교</a></td>
<td><a class="wiki-link" href="중앙초등학교.html">중앙초등학교</a></td>
<td><a class="wiki-link" href="남산초등학교.html">남산초등학교</a></td>
<td><a class="wiki-link" href="신성초등학교.html">신성초등학교</a></td>
<td><a class="wiki-link" href="강변초등학교.html">강변초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="덕산초등학교.html">덕산초등학교</a></td>
<td><a class="wiki-link" href="대흥초등학교.html">대흥초등학교</a></td>
<td><a class="wiki-link" href="창동초등학교.html">창동초등학교</a></td>
<td><a class="wiki-link" href="주안초등학교.html">주안초등학교</a></td>
<td><a class="wiki-link" href="읍악초등학교.html">읍악초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="오안초등학교.html">오안초등학교</a></td>
<td><a class="wiki-link" href="시목초등학교.html">시목초등학교</a></td>
<td><a class="wiki-link" href="조취초등학교.html">조취초등학교</a></td>
<td><a class="wiki-link" href="명성초등학교.html">명성초등학교</a></td>
<td><a class="wiki-link" href="외진초등학교.html">외진초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="언정초등학교.html">언정초등학교</a></td>
<td><a class="wiki-link" href="고산초등학교.html">고산초등학교</a></td>
<td><a class="wiki-link" href="상리초등학교.html">상리초등학교</a></td>
<td><a class="wiki-link" href="평촌초등학교.html">평촌초등학교</a></td>
<td><a class="wiki-link" href="서창초등학교.html">서창초등학교</a></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>석창군의 중학교 (총 12개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="석창중학교.html">석창중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="석창여자중학교.html">석창여자중학교</a></td>
<td><a class="wiki-link" href="석창서중학교.html">석창서중학교</a></td>
<td><a class="wiki-link" href="대흥중학교.html">대흥중학교</a></td>
<td><a class="wiki-link" href="대흥서중학교.html">대흥서중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="읍악중학교.html">읍악중학교</a></td>
<td><a class="wiki-link" href="오안중학교.html">오안중학교</a></td>
<td><a class="wiki-link" href="조취중학교.html">조취중학교</a></td>
<td><a class="wiki-link" href="명성중학교.html">명성중학교</a></td>
<td><a class="wiki-link" href="외진중학교.html">외진중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="언정중학교.html">언정중학교</a></td>
<td><a class="wiki-link" href="고산중학교.html">고산중학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>석창군의 고등학교 (총 6개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<div class="mb-1">
<span class="bg-girl px-1 border border-gray-200">여자고등학교</span>, 
                        이외 남녀공학
                    </div>
<div class="font-bold text-[#7777AA]">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="석창고등학교.html">석창고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="석창여자고등학교.html">석창여고</a></td>
<td><a class="wiki-link" href="대흥고등학교.html">대흥고등학교</a></td>
<td>◈<a class="wiki-link" href="석창물류고등학교.html">석창물류고</a></td>
<td>◈<a class="wiki-link" href="석창데이터과학고등학교.html">석창데이터고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="읍악고등학교.html">읍악고등학교</a></td>
<td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
