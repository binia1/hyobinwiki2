/**
 * 파일명: js/북구초등학교.js
 * 설명: 효빈광역시 북구의 초등학교 하단 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-북구초등학교-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
<div class="nav-box rounded overflow-hidden shadow-sm" style="border: 2px solid var(--wiki-main);">
<div class="nav-box-header cursor-default" style="background-color: #373a3c;">
<span>효빈광역시 북구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="개포초등학교.html">개포초</a></td><td><a class="wiki-link" href="고서초등학교.html">고서초</a></td><td><a class="wiki-link" href="고송초등학교.html">고송초</a></td><td><a class="wiki-link" href="곡진초등학교.html">곡진초</a></td><td><a class="wiki-link" href="근선초등학교.html">근선초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="남전초등학교.html">남전초</a></td><td><a class="wiki-link" href="대금초등학교.html">대금초</a></td><td><a class="wiki-link" href="도모초등학교.html">도모초</a></td><td><a class="wiki-link" href="등기초등학교.html">등기초</a></td><td><a class="wiki-link" href="모리초등학교.html">모리초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="북구초등학교.html">북구초</a></td><td><a class="wiki-link" href="사능초등학교.html">사능초</a></td><td><a class="wiki-link" href="새올초등학교.html">새올초</a></td><td><a class="wiki-link" href="생곡초등학교.html">생곡초</a></td><td><a class="wiki-link" href="생선초등학교.html">생선초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서노초등학교.html">서노초</a></td><td><a class="wiki-link" href="소금초등학교.html">소금초</a></td><td><a class="wiki-link" href="소산초등학교.html">소산초</a></td><td><a class="wiki-link" href="소조초등학교.html">소조초</a></td><td><a class="wiki-link" href="수포초등학교.html">수포초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="시남초등학교.html">시남초</a></td><td><a class="wiki-link" href="신영초등학교.html">신영초</a></td><td><a class="wiki-link" href="신천초등학교.html">신천초</a></td><td><a class="wiki-link" href="아논초등학교.html">아논초</a></td><td><a class="wiki-link" href="아자초등학교.html">아자초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="아진초등학교.html">아진초</a></td><td><a class="wiki-link" href="언각초등학교.html">언각초</a></td><td><a class="wiki-link" href="오내초등학교.html">오내초</a></td><td><a class="wiki-link" href="원산초등학교.html">원산초</a></td><td><a class="wiki-link" href="원촌초등학교.html">원촌초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="월남초등학교.html">월남초</a></td><td><a class="wiki-link" href="월림초등학교.html">월림초</a></td><td><a class="wiki-link" href="월박초등학교.html">월박초</a></td><td><a class="wiki-link" href="유로초등학교.html">유로초</a></td><td><a class="wiki-link" href="입선초등학교.html">입선초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="입희초등학교.html">입희초</a></td><td><a class="wiki-link" href="잠선초등학교.html">잠선초</a></td><td><a class="wiki-link" href="재당초등학교.html">재당초</a></td><td><a class="wiki-link" href="중수초등학교.html">중수초</a></td><td><a class="wiki-link" href="진헌초등학교.html">진헌초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="진희초등학교.html">진희초</a></td><td><a class="wiki-link" href="채산초등학교.html">채산초</a></td><td><a class="wiki-link" href="천왕사초등학교.html">천왕사초</a></td><td><a class="wiki-link" href="청능초등학교.html">청능초</a></td><td><a class="wiki-link" href="치남초등학교.html">치남초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="토모초등학교.html">토모초</a></td><td><a class="wiki-link" href="평전초등학교.html">평전초</a></td><td><a class="wiki-link" href="하내초등학교.html">하내초</a></td><td><a class="wiki-link" href="해서초등학교.html">해서초</a></td><td><a class="wiki-link" href="효빈교대부설초등학교.html">효빈교대부설초</a></td>
</tr>
</table>
</div>
        `;
    });
});
