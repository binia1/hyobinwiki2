/**
 * 파일명: js/남구(효빈)학교.js
 * 설명: 남구(효빈) 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-남구(효빈)-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 남구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="간건초등학교.html">간건초등학교</a></td>
<td><a class="wiki-link" href="간자초등학교.html">간자초등학교</a></td>
<td><a class="wiki-link" href="고관초등학교.html">고관초등학교</a></td>
<td><a class="wiki-link" href="곽산초등학교.html">곽산초등학교</a></td>
<td><a class="wiki-link" href="곽암초등학교.html">곽암초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="남구초등학교.html">남구초등학교</a></td>
<td><a class="wiki-link" href="능사초등학교.html">능사초등학교</a></td>
<td><a class="wiki-link" href="박산초등학교.html">박산초등학교</a></td>
<td><a class="wiki-link" href="삼선초등학교.html">삼선초등학교</a></td>
<td><a class="wiki-link" href="상원대초등학교.html">상원대초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="선산초등학교.html">선산초등학교</a></td>
<td><a class="wiki-link" href="설채초등학교.html">설채초등학교</a></td>
<td><a class="wiki-link" href="신거초등학교.html">신거초등학교</a></td>
<td><a class="wiki-link" href="신흥초등학교.html">신흥초등학교</a></td>
<td><a class="wiki-link" href="애마초등학교.html">애마초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="앵판초등학교.html">앵판초등학교</a></td>
<td><a class="wiki-link" href="어간초등학교.html">어간초등학교</a></td>
<td><a class="wiki-link" href="어천초등학교.html">어천초등학교</a></td>
<td><a class="wiki-link" href="월천남초등학교.html">월천남초등학교</a></td>
<td><a class="wiki-link" href="월천초등학교.html">월천초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="종람초등학교.html">종람초등학교</a></td>
<td><a class="wiki-link" href="중천초등학교.html">중천초등학교</a></td>
<td><a class="wiki-link" href="판령초등학교.html">판령초등학교</a></td>
<td><a class="wiki-link" href="평남초등학교.html">평남초등학교</a></td>
<td><a class="wiki-link" href="평당초등학교.html">평당초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="평산초등학교.html">평산초등학교</a></td>
<td><a class="wiki-link" href="평안초등학교.html">평안초등학교</a></td>
<td><a class="wiki-link" href="포장초등학교.html">포장초등학교</a></td>
<td><a class="wiki-link" href="항구초등학교.html">항구초등학교</a></td>
<td><a class="wiki-link" href="항동초등학교.html">항동초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="해안초등학교.html">해안초등학교</a></td>
<td><a class="wiki-link" href="효빈남초등학교.html">효빈남초등학교</a></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 남구의 중학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="고간중학교.html">고간중학교</a></td>
<td><a class="wiki-link" href="곽산중학교.html">곽산중학교</a></td>
<td><a class="wiki-link" href="박산중학교.html">박산중학교</a></td>
<td><a class="wiki-link" href="산내중학교.html">산내중학교</a></td>
<td><a class="wiki-link" href="선산중학교.html">선산중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="어간중학교.html">어간중학교</a></td>
<td><a class="wiki-link" href="어산중학교.html">어산중학교</a></td>
<td><a class="wiki-link" href="언어중학교.html">언어중학교</a></td>
<td><a class="wiki-link" href="평남중학교.html">평남중학교</a></td>
<td><a class="wiki-link" href="평당중학교.html">평당중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="평언중학교.html">평언중학교</a></td>
<td><a class="wiki-link" href="항동중학교.html">항동중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="효빈남여자중학교.html">효빈남여자중학교</a></td>
<td class="bg-boy"><a class="wiki-link" href="효빈남중학교.html">효빈남중학교</a></td>
<td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 남구의 고등학교</span>
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
<td><a class="wiki-link" href="곽산고등학교.html">곽산고등학교</a></td>
<td><a class="wiki-link" href="박산고등학교.html">박산고등학교</a></td>
<td><a class="wiki-link" href="박월고등학교.html">박월고등학교</a></td>
<td><a class="wiki-link" href="소안고등학교.html">소안고등학교</a></td>
<td><a class="wiki-link" href="어간고등학교.html">어간고등학교</a></td>
</tr>
<tr>
<td class="bg-girl"><a class="wiki-link" href="어간여자고등학교.html">어간여자고등학교</a></td>
<td>⊙<a class="wiki-link" href="평당고등학교.html">평당고등학교</a></td>
<td><a class="wiki-link" href="항동고등학교.html">항동고등학교</a></td>
<td>◈<a class="wiki-link" href="효빈기계공업고등학교.html">효빈기계공업고등학교</a></td>
<td class="bg-boy"><a class="wiki-link" href="효빈남고등학교.html">효빈남고등학교</a></td>
</tr>
<tr>
<td>▣<a class="wiki-link" href="효빈해양산업고등학교.html">효빈해양산업고등학교</a></td>
<td><a class="wiki-link" href="효천고등학교.html">효천고등학교</a></td>
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
