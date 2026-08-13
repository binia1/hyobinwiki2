/**
 * 파일명: js/궁하구학교.js
 * 설명: 궁하구 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-궁하구-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4 my-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>궁하구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="견산초등학교.html">견산초</a></td><td><a class="wiki-link" href="경전초등학교.html">경전초</a></td><td><a class="wiki-link" href="계고초등학교.html">계고초</a></td><td><a class="wiki-link" href="과림초등학교.html">과림초</a></td><td><a class="wiki-link" href="궁하초등학교.html">궁하초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="부중초등학교.html">부중초</a></td><td><a class="wiki-link" href="산취초등학교.html">산취초</a></td><td><a class="wiki-link" href="서팔초등학교.html">서팔초</a></td><td><a class="wiki-link" href="선남초등학교.html">선남초</a></td><td><a class="wiki-link" href="시곡초등학교.html">시곡초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="아이초등학교.html">아이초</a></td><td><a class="wiki-link" href="절천초등학교.html">절천초</a></td><td><a class="wiki-link" href="조향초등학교.html">조향초</a></td><td><a class="wiki-link" href="청선초등학교.html">청선초</a></td><td><a class="wiki-link" href="협화초등학교.html">협화초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="궁하남초등학교.html">궁하남초</a></td><td><a class="wiki-link" href="궁하제일초등학교.html">궁하제일초</a></td><td><a class="wiki-link" href="하원초등학교.html">하원초</a></td><td><a class="wiki-link" href="하리초등학교.html">하리초</a></td><td><a class="wiki-link" href="궁전초등학교.html">궁전초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="신궁초등학교.html">신궁초</a></td><td><a class="wiki-link" href="과림남초등학교.html">과림남초</a></td><td><a class="wiki-link" href="산취중앙초등학교.html">산취중앙초</a></td><td><a class="wiki-link" href="서팔동초등학교.html">서팔동초</a></td><td><a class="wiki-link" href="아이북초등학교.html">아이북초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="청선서초등학교.html">청선서초</a></td><td><a class="wiki-link" href="궁하서초등학교.html">궁하서초</a></td><td><a class="wiki-link" href="신선남초등학교.html">신선남초</a></td><td><a class="wiki-link" href="청선남초등학교.html">청선남초</a></td><td><a class="wiki-link" href="북방초등학교.html">북방초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="산중초등학교.html">산중초</a></td><td><a class="wiki-link" href="사야초등학교.html">사야초</a></td><td><a class="wiki-link" href="대수초등학교.html">대수초</a></td><td><a class="wiki-link" href="유소초등학교.html">유소초</a></td><td><a class="wiki-link" href="궁하수용초등학교.html">궁하수용초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="견절초등학교.html">견절초</a></td><td><a class="wiki-link" href="서팔북초등학교.html">서팔북초</a></td><td><a class="wiki-link" href="서팔남초등학교.html">서팔남초</a></td><td><a class="wiki-link" href="서팔서초등학교.html">서팔서초</a></td><td><a class="wiki-link" href="아이서초등학교.html">아이서초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="아이남초등학교.html">아이남초</a></td><td><a class="wiki-link" href="아이다쾌초등학교.html">아이다쾌초</a></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>궁하구의 중학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="견산중학교.html">견산중</a></td><td><a class="wiki-link" href="경전중학교.html">경전중</a></td><td><a class="wiki-link" href="과림중학교.html">과림중</a></td><td><a class="wiki-link" href="궁하중학교.html">궁하중</a></td><td><a class="wiki-link" href="부중중학교.html">부중중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="산취중학교.html">산취중</a></td><td><a class="wiki-link" href="서팔중학교.html">서팔중</a></td><td><a class="wiki-link" href="선남중학교.html">선남중</a></td><td><a class="wiki-link" href="시곡중학교.html">시곡중</a></td><td><a class="wiki-link" href="조향중학교.html">조향중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="청선중학교.html">청선중</a></td><td><a class="wiki-link" href="협화중학교.html">협화중</a></td><td><a class="wiki-link" href="궁전중학교.html">궁전중</a></td><td><a class="wiki-link" href="청선남중학교.html">청선남중</a></td><td><a class="wiki-link" href="궁하남중학교.html">궁하남중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서팔남중학교.html">서팔남중</a></td><td><a class="wiki-link" href="아이중학교.html">아이중</a></td><td><a class="wiki-link" href="아이서중학교.html">아이서중</a></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>궁하구의 고등학교</span>
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
<td><a class="wiki-link" href="궁하제일고등학교.html">궁하제일고</a></td><td class="bg-boy"><a class="wiki-link" href="궁하고등학교.html">궁하고</a></td><td class="bg-girl"><a class="wiki-link" href="궁하여자고등학교.html">궁하여고</a></td><td><a class="wiki-link" href="과림고등학교.html">과림고</a></td><td><a class="wiki-link" href="산취고등학교.html">산취고</a></td>
</tr>
<tr>
<td class="bg-boy"><a class="wiki-link" href="청선고등학교.html">청선고</a></td><td class="bg-girl"><a class="wiki-link" href="청선여자고등학교.html">청선여고</a></td><td class="bg-girl"><a class="wiki-link" href="서팔여자고등학교.html">서팔여고</a></td><td class="bg-boy"><a class="wiki-link" href="서팔고등학교.html">서팔고</a></td><td class="bg-boy"><a class="wiki-link" href="아이고등학교.html">아이고</a></td>
</tr>
<tr>
<td class="bg-girl"><a class="wiki-link" href="아이여자고등학교.html">아이여고</a></td><td>◈<a class="wiki-link" href="궁하공업고등학교.html">궁하공업고</a></td><td><a class="wiki-link" href="서팔제일고등학교.html">서팔제일고</a></td><td><a class="wiki-link" href="아이남고등학교.html">아이남고</a></td><td><a class="wiki-link" href="협화고등학교.html">협화고</a></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
