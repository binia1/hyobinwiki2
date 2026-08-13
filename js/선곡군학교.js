/**
 * 파일명: js/선곡군학교.js
 * 설명: 선곡군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-선곡군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>덕빈북도 선곡군의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="견취초등학교.html">견취초등학교</a></td>
<td><a class="wiki-link" href="귀총초등학교.html">귀총초등학교</a></td>
<td><a class="wiki-link" href="남소초등학교.html">남소초등학교</a></td>
<td><a class="wiki-link" href="동구초등학교.html">동구초등학교</a></td>
<td><a class="wiki-link" href="선곡초등학교.html">선곡초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="성륜초등학교.html">성륜초등학교</a></td>
<td><a class="wiki-link" href="우목초등학교.html">우목초등학교</a></td>
<td><a class="wiki-link" href="원전초등학교.html">원전초등학교</a></td>
<td><a class="wiki-link" href="인채초등학교.html">인채초등학교</a></td>
<td><a class="wiki-link" href="하미초등학교.html">하미초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="해로초등학교.html">해로초등학교</a></td>
<td><a class="wiki-link" href="환자초등학교.html">환자초등학교</a></td>
<td><a class="wiki-link" href="선곡서초등학교.html">선곡서초등학교</a></td>
<td><a class="wiki-link" href="선곡북초등학교.html">선곡북초등학교</a></td>
<td><a class="wiki-link" href="갑부초등학교.html">갑부초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="금장초등학교.html">금장초등학교</a></td>
<td><a class="wiki-link" href="하미제일초등학교.html">하미제일초등학교</a></td>
<td><a class="wiki-link" href="선곡제일초등학교.html">선곡제일초등학교</a></td>
<td><a class="wiki-link" href="사민초등학교.html">사민초등학교</a></td>
<td></td>
</tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>덕빈북도 선곡군의 중학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="선곡중학교.html">선곡중학교</a></td>
<td><a class="wiki-link" href="귀총중학교.html">귀총중학교</a></td>
<td><a class="wiki-link" href="성륜중학교.html">성륜중학교</a></td>
<td><a class="wiki-link" href="하미중학교.html">하미중학교</a></td>
<td><a class="wiki-link" href="해로중학교.html">해로중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="원전중학교.html">원전중학교</a></td>
<td><a class="wiki-link" href="남소중학교.html">남소중학교</a></td>
<td><a class="wiki-link" href="동구중학교.html">동구중학교</a></td>
<td><a class="wiki-link" href="인채중학교.html">인채중학교</a></td>
<td><a class="wiki-link" href="선곡남중학교.html">선곡남중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="하미남중학교.html">하미남중학교</a></td>
<td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>덕빈북도 선곡군의 고등학교</span>
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
<td><a class="wiki-link" href="선곡생명과학고등학교.html">선곡생명과학고</a> ◈</td>
<td><a class="wiki-link" href="선곡고등학교.html">선곡고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="선곡여자고등학교.html">선곡여자고등학교</a></td>
<td><a class="wiki-link" href="원전고등학교.html">원전고등학교</a></td>
<td><a class="wiki-link" href="하미고등학교.html">하미고등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="해로고등학교.html">해로고등학교</a></td>
<td><a class="wiki-link" href="하미공업고등학교.html">하미공업고등학교</a> ◈</td>
<td><a class="wiki-link" href="인채고등학교.html">인채고등학교</a></td>
<td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
