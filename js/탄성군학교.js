/**
 * 파일명: js/탄성군학교.js
 * 설명: 탄성군 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-탄성군-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 탄성군의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="계층초등학교.html">계층초</a></td><td><a class="wiki-link" href="고무초등학교.html">고무초</a></td><td><a class="wiki-link" href="고해초등학교.html">고해초</a></td><td><a class="wiki-link" href="공리초등학교.html">공리초</a></td><td><a class="wiki-link" href="도변초등학교.html">도변초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="도향초등학교.html">도향초</a></td><td><a class="wiki-link" href="루비초등학교.html">루비초</a></td><td><a class="wiki-link" href="무한초등학교.html">무한초</a></td><td><a class="wiki-link" href="미성초등학교.html">미성초</a></td><td><a class="wiki-link" href="미우초등학교.html">미우초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서목초등학교.html">서목초</a></td><td><a class="wiki-link" href="성규초등학교.html">성규초</a></td><td><a class="wiki-link" href="소원초등학교.html">소원초</a></td><td><a class="wiki-link" href="소춘초등학교.html">소춘초</a></td><td><a class="wiki-link" href="수안초등학교.html">수안초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="승남초등학교.html">승남초</a></td><td><a class="wiki-link" href="앵내초등학교.html">앵내초</a></td><td><a class="wiki-link" href="야진초등학교.html">야진초</a></td><td><a class="wiki-link" href="영왕초등학교.html">영왕초</a></td><td><a class="wiki-link" href="요우초등학교.html">요우초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="윤부초등학교.html">윤부초</a></td><td><a class="wiki-link" href="은염초등학교.html">은염초</a></td><td><a class="wiki-link" href="이와초등학교.html">이와초</a></td><td><a class="wiki-link" href="입리초등학교.html">입리초</a></td><td><a class="wiki-link" href="잠재초등학교.html">잠재초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="정근초등학교.html">정근초</a></td><td><a class="wiki-link" href="정명초등학교.html">정명초</a></td><td><a class="wiki-link" href="천가초등학교.html">천가초</a></td><td><a class="wiki-link" href="탄성초등학교.html">탄성초</a></td><td><a class="wiki-link" href="토영초등학교.html">토영초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="파래초등학교.html">파래초</a></td><td><a class="wiki-link" href="표명초등학교.html">표명초</a></td><td><a class="wiki-link" href="흑택초등학교.html">흑택초</a></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 탄성군의 중학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="고무중학교.html">고무중</a></td><td><a class="wiki-link" href="고해중학교.html">고해중</a></td><td><a class="wiki-link" href="공리중학교.html">공리중</a></td><td class="bg-girl"><a class="wiki-link" href="도변여자중학교.html">도변여중</a></td><td><a class="wiki-link" href="도변중학교.html">도변중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="도향중학교.html">도향중</a></td><td><a class="wiki-link" href="루비중학교.html">루비중</a></td><td><a class="wiki-link" href="미우중학교.html">미우중</a></td><td><a class="wiki-link" href="서목중학교.html">서목중</a></td><td><a class="wiki-link" href="소원중학교.html">소원중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="승남중학교.html">승남중</a></td><td><a class="wiki-link" href="앵내중학교.html">앵내중</a></td><td><a class="wiki-link" href="야진중학교.html">야진중</a></td><td><a class="wiki-link" href="요우중학교.html">요우중</a></td><td><a class="wiki-link" href="윤부중학교.html">윤부중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="잠재중학교.html">잠재중</a></td><td><a class="wiki-link" href="정근중학교.html">정근중</a></td><td><a class="wiki-link" href="천가중학교.html">천가중</a></td><td class="bg-boy"><a class="wiki-link" href="탄성남중학교.html">탄성남중</a></td><td class="bg-girl"><a class="wiki-link" href="탄성여자중학교.html">탄성여중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="탄성중학교.html">탄성중</a></td><td><a class="wiki-link" href="흑택중학교.html">흑택중</a></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 탄성군의 고등학교</span>
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
<td><a class="wiki-link" href="고해고등학교.html">고해고</a></td><td><a class="wiki-link" href="도변고등학교.html">도변고</a></td><td class="bg-girl"><a class="wiki-link" href="도변여자고등학교.html">도변여고</a></td><td><a class="wiki-link" href="서목고등학교.html">서목고</a></td><td><a class="wiki-link" href="소원고등학교.html">소원고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="앵내고등학교.html">앵내고</a></td><td><a class="wiki-link" href="야진고등학교.html">야진고</a></td><td><a class="wiki-link" href="탄성고등학교.html">탄성고</a></td><td>▣<a class="wiki-link" href="탄성과학고등학교.html">탄성과고</a></td><td>◈<a class="wiki-link" href="탄성상업고등학교.html">탄성상고</a></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
