/**
 * 파일명: js/청엽구초등학교.js
 * 설명: 효빈광역시 청엽구의 초등학교 하단 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-청엽구초등학교-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 청엽구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="고점초등학교.html">고점초</a></td><td><a class="wiki-link" href="기타초등학교.html">기타초</a></td><td><a class="wiki-link" href="남동초등학교.html">남동초</a></td><td><a class="wiki-link" href="남부초등학교.html">남부초</a></td><td><a class="wiki-link" href="단남초등학교.html">단남초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="단라초등학교.html">단라초</a></td><td><a class="wiki-link" href="동리초등학교.html">동리초</a></td><td><a class="wiki-link" href="모카초등학교.html">모카초</a></td><td><a class="wiki-link" href="비마초등학교.html">비마초</a></td><td><a class="wiki-link" href="빈선초등학교.html">빈선초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="사경초등학교.html">사경초</a></td><td><a class="wiki-link" href="사노초등학교.html">사노초</a></td><td><a class="wiki-link" href="사온초등학교.html">사온초</a></td><td><a class="wiki-link" href="새곡초등학교.html">새곡초</a></td><td class="font-bold"><a class="wiki-link" href="색수초등학교.html">색수초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서남초등학교.html">서남초</a></td><td><a class="wiki-link" href="서릉초등학교.html">서릉초</a></td><td><a class="wiki-link" href="서북초등학교.html">서북초</a></td><td><a class="wiki-link" href="서승초등학교.html">서승초</a></td><td><a class="wiki-link" href="신괴초등학교.html">신괴초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="신나초등학교.html">신나초</a></td><td><a class="wiki-link" href="신지초등학교.html">신지초</a></td><td><a class="wiki-link" href="심녕초등학교.html">심녕초</a></td><td><a class="wiki-link" href="안곡초등학교.html">안곡초</a></td><td><a class="wiki-link" href="애천초등학교.html">애천초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="애포초등학교.html">애포초</a></td><td><a class="wiki-link" href="언산초등학교.html">언산초</a></td><td><a class="wiki-link" href="왕교초등학교.html">왕교초</a></td><td><a class="wiki-link" href="우전초등학교.html">우전초</a></td><td><a class="wiki-link" href="우택초등학교.html">우택초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="월언초등학교.html">월언초</a></td><td><a class="wiki-link" href="이사초등학교.html">이사초</a></td><td><a class="wiki-link" href="입동초등학교.html">입동초</a></td><td><a class="wiki-link" href="입빈초등학교.html">입빈초</a></td><td><a class="wiki-link" href="장원초등학교.html">장원초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="청남초등학교.html">청남초</a></td><td><a class="wiki-link" href="청반초등학교.html">청반초</a></td><td><a class="wiki-link" href="청엽초등학교.html">청엽초</a></td><td><a class="wiki-link" href="토포초등학교.html">토포초</a></td><td><a class="wiki-link" href="헌이송초등학교.html">헌이송초</a></td>
</tr>
</table>
</div>
        `;
    });
});
