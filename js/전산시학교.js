/**
 * 파일명: js/전산시학교.js
 * 설명: 전산시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-전산시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 전산시의 초등학교 (21개교)</span></div>
<table class="school-table text-center text-[0.7rem]">
<tr><td><a class="wiki-link" href="고곡초.html">고곡초</a></td><td><a class="wiki-link" href="고진초.html">고진초</a></td><td><a class="wiki-link" href="근자초.html">근자초</a></td><td><a class="wiki-link" href="백목초.html">백목초</a></td><td><a class="wiki-link" href="상면초.html">상면초</a></td><td><a class="wiki-link" href="소천초.html">소천초</a></td></tr>
<tr><td><a class="wiki-link" href="송강초.html">송강초</a></td><td><a class="wiki-link" href="수판초.html">수판초</a></td><td><a class="wiki-link" href="순월초.html">순월초</a></td><td><a class="wiki-link" href="신산초.html">신산초</a></td><td><a class="wiki-link" href="암택초.html">암택초</a></td><td><a class="wiki-link" href="전산초.html">전산초</a></td></tr>
<tr><td><a class="wiki-link" href="중부초.html">중부초</a></td><td><a class="wiki-link" href="태하초.html">태하초</a></td><td><a class="wiki-link" href="하면초.html">하면초</a></td><td><a class="wiki-link" href="해진초.html">해진초</a></td><td><a class="wiki-link" href="후전초.html">후전초</a></td><td><a class="wiki-link" href="육천초.html">육천초</a></td></tr>
<tr><td><a class="wiki-link" href="전산남초.html">전산남초</a></td><td><a class="wiki-link" href="전산북초.html">전산북초</a></td><td><a class="wiki-link" href="상생서초.html">상생서초</a></td><td></td><td></td><td></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 전산시의 중학교 (12개교)</span></div>
<table class="school-table text-center text-[0.8rem]">
<tr><td><a class="wiki-link" href="전산중.html">전산중</a></td><td><a class="wiki-link" href="고곡중.html">고곡중</a></td><td><a class="wiki-link" href="고진중.html">고진중</a></td><td><a class="wiki-link" href="백목중.html">백목중</a></td></tr>
<tr><td><a class="wiki-link" href="송강중.html">송강중</a></td><td><a class="wiki-link" href="순월중.html">순월중</a></td><td><a class="wiki-link" href="암택중.html">암택중</a></td><td><a class="wiki-link" href="해진중.html">해진중</a></td></tr>
<tr><td><a class="wiki-link" href="수판중.html">수판중</a></td><td><a class="wiki-link" href="신산중.html">신산중</a></td><td><a class="wiki-link" href="중부중.html">중부중</a></td><td><a class="wiki-link" href="후전중.html">후전중</a></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 전산시의 고등학교 (8개교)</span></div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]"><div class="font-bold text-[#7777AA]">◈: 특성화고, 이외 일반계고</div></div>
<table class="school-table text-center text-[0.8rem]">
<tr><td>◈ <a class="wiki-link" href="전산정보고.html">전산정보고</a></td><td class="bg-boy"><a class="wiki-link" href="전산고.html">전산고</a></td><td class="bg-girl"><a class="wiki-link" href="전민고.html">전민고</a></td><td class="bg-girl"><a class="wiki-link" href="전산여고.html">전산여고</a></td></tr>
<tr><td><a class="wiki-link" href="순월고.html">순월고</a></td><td>◈ <a class="wiki-link" href="전산과학고.html">전산과학고</a></td><td><a class="wiki-link" href="해진고.html">해진고</a></td><td class="bg-boy"><a class="wiki-link" href="송강고.html">송강고</a></td></tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
