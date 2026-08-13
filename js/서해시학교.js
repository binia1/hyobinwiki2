/**
 * 파일명: js/서해시학교.js
 * 설명: 서해시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-서해시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 서해시의 초등학교 (49개교)</span></div>
<table class="school-table text-center text-[0.7rem]">
<tr><td><a class="wiki-link" href="구원초.html">구원초</a></td><td><a class="wiki-link" href="긍사초.html">긍사초</a></td><td><a class="wiki-link" href="내야초.html">내야초</a></td><td><a class="wiki-link" href="마원초.html">마원초</a></td><td><a class="wiki-link" href="무원초.html">무원초</a></td><td><a class="wiki-link" href="문진초.html">문진초</a></td></tr>
<tr><td><a class="wiki-link" href="반풍초.html">반풍초</a></td><td><a class="wiki-link" href="방부초.html">방부초</a></td><td><a class="wiki-link" href="번전초.html">번전초</a></td><td><a class="wiki-link" href="북야초.html">북야초</a></td><td><a class="wiki-link" href="상포초.html">상포초</a></td><td><a class="wiki-link" href="서앙초.html">서앙초</a></td></tr>
<tr><td><a class="wiki-link" href="서해초.html">서해초</a></td><td><a class="wiki-link" href="신항초.html">신항초</a></td><td><a class="wiki-link" href="압일초.html">압일초</a></td><td><a class="wiki-link" href="우곡초.html">우곡초</a></td><td><a class="wiki-link" href="우궁초.html">우궁초</a></td><td><a class="wiki-link" href="원변초.html">원변초</a></td></tr>
<tr><td><a class="wiki-link" href="원길초.html">원길초</a></td><td><a class="wiki-link" href="장서초.html">장서초</a></td><td><a class="wiki-link" href="좌산초.html">좌산초</a></td><td><a class="wiki-link" href="지중초.html">지중초</a></td><td><a class="wiki-link" href="천로초.html">천로초</a></td><td><a class="wiki-link" href="첨천초.html">첨천초</a></td></tr>
<tr><td><a class="wiki-link" href="통마초.html">통마초</a></td><td><a class="wiki-link" href="통산초.html">통산초</a></td><td><a class="wiki-link" href="포구초.html">포구초</a></td><td><a class="wiki-link" href="해안초.html">해안초</a></td><td><a class="wiki-link" href="해양초.html">해양초</a></td><td><a class="wiki-link" href="향원초.html">향원초</a></td></tr>
<tr><td><a class="wiki-link" href="서해남초.html">서해남초</a></td><td><a class="wiki-link" href="서해북초.html">서해북초</a></td><td><a class="wiki-link" href="해안남초.html">해안남초</a></td><td><a class="wiki-link" href="항만초.html">항만초</a></td><td><a class="wiki-link" href="바다초.html">바다초</a></td><td><a class="wiki-link" href="서산초.html">서산초</a></td></tr>
<tr><td><a class="wiki-link" href="서광초.html">서광초</a></td><td><a class="wiki-link" href="해랑초.html">해랑초</a></td><td><a class="wiki-link" href="다별초.html">다별초</a></td><td><a class="wiki-link" href="대사초.html">대사초</a></td><td><a class="wiki-link" href="산상초.html">산상초</a></td><td><a class="wiki-link" href="시능초.html">시능초</a></td></tr>
<tr><td><a class="wiki-link" href="주운초.html">주운초</a></td><td><a class="wiki-link" href="서해서초.html">서해서초</a></td><td><a class="wiki-link" href="서해동초.html">서해동초</a></td><td><a class="wiki-link" href="신두초.html">신두초</a></td><td><a class="wiki-link" href="조충초.html">조충초</a></td><td><a class="wiki-link" href="마득초.html">마득초</a></td></tr>
<tr><td><a class="wiki-link" href="개총초.html">개총초</a></td><td><a class="wiki-link" href="주운초2.html">주운초</a></td><td></td><td></td><td></td><td></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 서해시의 중학교 (24개교)</span></div>
<table class="school-table text-center text-[0.8rem]">
<tr><td><a class="wiki-link" href="서해중.html">서해중</a></td><td><a class="wiki-link" href="구원중.html">구원중</a></td><td><a class="wiki-link" href="내야중.html">내야중</a></td><td><a class="wiki-link" href="문진중.html">문진중</a></td><td><a class="wiki-link" href="방부중.html">방부중</a></td><td><a class="wiki-link" href="번전중.html">번전중</a></td></tr>
<tr><td><a class="wiki-link" href="상포중.html">상포중</a></td><td><a class="wiki-link" href="신항중.html">신항중</a></td><td><a class="wiki-link" href="압일중.html">압일중</a></td><td><a class="wiki-link" href="우궁중.html">우궁중</a></td><td><a class="wiki-link" href="원변중.html">원변중</a></td><td><a class="wiki-link" href="장서중.html">장서중</a></td></tr>
<tr><td><a class="wiki-link" href="좌산중.html">좌산중</a></td><td><a class="wiki-link" href="천로중.html">천로중</a></td><td><a class="wiki-link" href="통마중.html">통마중</a></td><td><a class="wiki-link" href="포구중.html">포구중</a></td><td><a class="wiki-link" href="해안중.html">해안중</a></td><td><a class="wiki-link" href="해양중.html">해양중</a></td></tr>
<tr><td><a class="wiki-link" href="항만중.html">항만중</a></td><td><a class="wiki-link" href="푸른중.html">푸른중</a></td><td><a class="wiki-link" href="사인중.html">사인중</a></td><td><a class="wiki-link" href="수주중.html">수주중</a></td><td><a class="wiki-link" href="요이중.html">요이중</a></td><td><a class="wiki-link" href="사송중.html">사송중</a></td></tr>
</table>
</div>
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default"><span>덕빈북도 서해시의 고등학교 (19개교)</span></div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]"><div class="font-bold text-[#7777AA]">▣: 특목고, ◈: 특성화고, 이외 일반계고</div></div>
<table class="school-table text-center text-[0.8rem]">
<tr><td>▣ <a class="wiki-link" href="덕빈체육고.html">덕빈체육고</a></td><td>◈ <a class="wiki-link" href="서해해양과학고.html">서해해양과학고</a></td><td>◈ <a class="wiki-link" href="서해항만물류고.html">서해항만물류고</a></td><td><a class="wiki-link" href="서해중앙고.html">서해중앙고</a></td><td class="bg-boy"><a class="wiki-link" href="서해고.html">서해고</a></td><td class="bg-girl"><a class="wiki-link" href="서해여고.html">서해여고</a></td></tr>
<tr><td class="bg-boy"><a class="wiki-link" href="우궁고.html">우궁고</a></td><td><a class="wiki-link" href="문진고.html">문진고</a></td><td class="bg-boy"><a class="wiki-link" href="방부고.html">방부고</a></td><td class="bg-girl"><a class="wiki-link" href="방부여고.html">방부여고</a></td><td><a class="wiki-link" href="신항고.html">신항고</a></td><td><a class="wiki-link" href="압일고.html">압일고</a></td></tr>
<tr><td><a class="wiki-link" href="원변고.html">원변고</a></td><td><a class="wiki-link" href="천로고.html">천로고</a></td><td><a class="wiki-link" href="해안고.html">해안고</a></td><td>▣ <a class="wiki-link" href="서해국제고.html">서해국제고</a></td><td>▣ <a class="wiki-link" href="서해외국어고.html">서해외국어고</a></td><td><a class="wiki-link" href="천로고_일반.html">천로고</a></td></tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
