/**
 * 파일명: js/약산시학교.js
 * 설명: 약산시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-약산시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 약산시의 초등학교 (31개교)</span></div>
<table class="school-table text-center text-[0.7rem]">
<tr><td><a class="wiki-link" href="고곡초.html">고곡초</a></td><td><a class="wiki-link" href="공천초.html">공천초</a></td><td><a class="wiki-link" href="광정초.html">광정초</a></td><td><a class="wiki-link" href="근강초.html">근강초</a></td><td><a class="wiki-link" href="대염초.html">대염초</a></td><td><a class="wiki-link" href="매목초.html">매목초</a></td></tr>
<tr><td><a class="wiki-link" href="보녕초.html">보녕초</a></td><td><a class="wiki-link" href="북천초.html">북천초</a></td><td><a class="wiki-link" href="산형초.html">산형초</a></td><td><a class="wiki-link" href="삼미초.html">삼미초</a></td><td><a class="wiki-link" href="상수구초.html">상수구초</a></td><td><a class="wiki-link" href="석동초.html">석동초</a></td></tr>
<tr><td><a class="wiki-link" href="성가초.html">성가초</a></td><td><a class="wiki-link" href="약산초.html">약산초</a></td><td><a class="wiki-link" href="염원초.html">염원초</a></td><td><a class="wiki-link" href="우부초.html">우부초</a></td><td><a class="wiki-link" href="원강초.html">원강초</a></td><td><a class="wiki-link" href="자미초.html">자미초</a></td></tr>
<tr><td><a class="wiki-link" href="장곡초.html">장곡초</a></td><td><a class="wiki-link" href="체신초.html">체신초</a></td><td><a class="wiki-link" href="하수구초.html">하수구초</a></td><td><a class="wiki-link" href="홍하초.html">홍하초</a></td><td><a class="wiki-link" href="화소초.html">화소초</a></td><td><a class="wiki-link" href="수랑초.html">수랑초</a></td></tr>
<tr><td><a class="wiki-link" href="약산중앙초.html">약산중앙초</a></td><td><a class="wiki-link" href="약산서초.html">약산서초</a></td><td><a class="wiki-link" href="약산북초.html">약산북초</a></td><td><a class="wiki-link" href="약산동초.html">약산동초</a></td><td><a class="wiki-link" href="치유남초.html">치유남초</a></td><td><a class="wiki-link" href="기랑초.html">기랑초</a></td></tr>
<tr><td><a class="wiki-link" href="조소초.html">조소초</a></td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 약산시의 중학교 (20개교)</span></div>
<table class="school-table text-center text-[0.8rem]">
<tr><td><a class="wiki-link" href="약산중.html">약산중</a></td><td><a class="wiki-link" href="고곡중.html">고곡중</a></td><td><a class="wiki-link" href="근강중.html">근강중</a></td><td><a class="wiki-link" href="보녕중.html">보녕중</a></td><td><a class="wiki-link" href="약산제일중.html">약산제일중</a></td></tr>
<tr><td><a class="wiki-link" href="원성중.html">원성중</a></td><td><a class="wiki-link" href="주남중.html">주남중</a></td><td><a class="wiki-link" href="탄미중.html">탄미중</a></td><td><a class="wiki-link" href="산형중.html">산형중</a></td><td><a class="wiki-link" href="삼미중.html">삼미중</a></td></tr>
<tr><td><a class="wiki-link" href="석동중.html">석동중</a></td><td><a class="wiki-link" href="성가중.html">성가중</a></td><td><a class="wiki-link" href="염원중.html">염원중</a></td><td><a class="wiki-link" href="우부중.html">우부중</a></td><td><a class="wiki-link" href="원강중.html">원강중</a></td></tr>
<tr><td><a class="wiki-link" href="장곡중.html">장곡중</a></td><td><a class="wiki-link" href="화소중.html">화소중</a></td><td><a class="wiki-link" href="무기중.html">무기중</a></td><td><a class="wiki-link" href="약산서중.html">약산서중</a></td><td><a class="wiki-link" href="치유중.html">치유중</a></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 약산시의 고등학교 (15개교)</span></div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]"><div class="font-bold text-[#7777AA]">▣: 특목고, ◈: 특성화고, 이외 일반계고</div></div>
<table class="school-table text-center text-[0.8rem]">
<tr><td>◈ <a class="wiki-link" href="약산보건고.html">약산보건고</a></td><td><a class="wiki-link" href="탄미고.html">탄미고</a></td><td class="bg-boy"><a class="wiki-link" href="약산남고.html">약산남고</a></td><td class="bg-girl"><a class="wiki-link" href="약산여고.html">약산여고</a></td><td><a class="wiki-link" href="무기고.html">무기고</a></td></tr>
<tr><td><a class="wiki-link" href="원강고.html">원강고</a></td><td class="bg-girl"><a class="wiki-link" href="원강여고.html">원강여고</a></td><td><a class="wiki-link" href="장곡고.html">장곡고</a></td><td><a class="wiki-link" href="화소고.html">화소고</a></td><td><a class="wiki-link" href="산형고.html">산형고</a></td></tr>
<tr><td><a class="wiki-link" href="삼미고.html">삼미고</a></td><td><a class="wiki-link" href="우부고.html">우부고</a></td><td>◈ <a class="wiki-link" href="약산상업고.html">약산상업고</a></td><td><a class="wiki-link" href="소망고.html">소망고</a></td><td>▣ <a class="wiki-link" href="약산과학고.html">약산과학고</a></td></tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
