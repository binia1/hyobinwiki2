/**
 * 파일명: js/장기구학교.js
 * 설명: 장기구 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-장기구-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>장기구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="노동초등학교.html">노동초</a></td><td><a class="wiki-link" href="대정초등학교.html">대정초</a></td><td><a class="wiki-link" href="동원초등학교.html">동원초</a></td><td><a class="wiki-link" href="미천초등학교.html">미천초</a></td><td><a class="wiki-link" href="방거초등학교.html">방거초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="산중초등학교.html">산중초</a></td><td><a class="wiki-link" href="서면초등학교.html">서면초</a></td><td><a class="wiki-link" href="선격초등학교.html">선격초</a></td><td><a class="wiki-link" href="송원초등학교.html">송원초</a></td><td><a class="wiki-link" href="칠정초등학교.html">칠정초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="신화초등학교.html">신화초</a></td><td><a class="wiki-link" href="오택초등학교.html">오택초</a></td><td><a class="wiki-link" href="월삼초등학교.html">월삼초</a></td><td><a class="wiki-link" href="장기초등학교.html">장기초</a></td><td><a class="wiki-link" href="천종초등학교.html">천종초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="황명초등학교.html">황명초</a></td><td><a class="wiki-link" href="황태초등학교.html">황태초</a></td><td><a class="wiki-link" href="화면초등학교.html">화면초</a></td><td><a class="wiki-link" href="행복초등학교.html">행복초</a></td><td><a class="wiki-link" href="장기남초등학교.html">장기남초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="장기북초등학교.html">장기북초</a></td><td><a class="wiki-link" href="송정초등학교.html">송정초</a></td><td><a class="wiki-link" href="월명초등학교.html">월명초</a></td><td><a class="wiki-link" href="장산초등학교.html">장산초</a></td><td><a class="wiki-link" href="기원초등학교.html">기원초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="대정동초등학교.html">대정동초</a></td><td><a class="wiki-link" href="송원남초등학교.html">송원남초</a></td><td><a class="wiki-link" href="오택중앙초등학교.html">오택중앙초</a></td><td><a class="wiki-link" href="장기서초등학교.html">장기서초</a></td><td><a class="wiki-link" href="천종북초등학교.html">천종북초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="해오름초등학교.html">해오름초</a></td><td><a class="wiki-link" href="푸른솔초등학교.html">푸른솔초</a></td><td><a class="wiki-link" href="드림초등학교.html">드림초</a></td><td><a class="wiki-link" href="장기중앙초등학교.html">장기중앙초</a></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>장기구의 중학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="장기중학교.html">장기중</a></td><td><a class="wiki-link" href="대정중학교.html">대정중</a></td><td><a class="wiki-link" href="동원중학교.html">동원중</a></td><td><a class="wiki-link" href="미천중학교.html">미천중</a></td><td><a class="wiki-link" href="방거중학교.html">방거중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="송원중학교.html">송원중</a></td><td><a class="wiki-link" href="칠정중학교.html">칠정중</a></td><td><a class="wiki-link" href="오택중학교.html">오택중</a></td><td><a class="wiki-link" href="월삼중학교.html">월삼중</a></td><td><a class="wiki-link" href="천종중학교.html">천종중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="화면중학교.html">화면중</a></td><td><a class="wiki-link" href="행복중학교.html">행복중</a></td><td><a class="wiki-link" href="장산중학교.html">장산중</a></td><td><a class="wiki-link" href="기원중학교.html">기원중</a></td><td><a class="wiki-link" href="고류중학교.html">고류중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="사곡중학교.html">사곡중</a></td><td><a class="wiki-link" href="노동중학교.html">노동중</a></td><td><a class="wiki-link" href="빈주제일중학교.html">빈주제일중</a></td><td><a class="wiki-link" href="수류중학교.html">수류중</a></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>장기구의 고등학교</span>
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
<td>◈<a class="wiki-link" href="빈주전자고등학교.html">빈주전자고</a></td>
<td><a class="wiki-link" href="빈주제일고등학교.html">빈주제일고</a></td>
<td class="bg-boy"><a class="wiki-link" href="장기고등학교.html">장기고</a></td>
<td class="bg-girl"><a class="wiki-link" href="장기여자고등학교.html">장기여고</a></td>
<td><a class="wiki-link" href="대정고등학교.html">대정고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="송원고등학교.html">송원고</a></td>
<td class="bg-boy"><a class="wiki-link" href="송원남고등학교.html">송원남고</a></td>
<td class="bg-girl"><a class="wiki-link" href="송원여자고등학교.html">송원여고</a></td>
<td><a class="wiki-link" href="오택고등학교.html">오택고</a></td>
<td><a class="wiki-link" href="천종고등학교.html">천종고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="화면고등학교.html">화면고</a></td>
<td><a class="wiki-link" href="인일고등학교.html">인일고</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
