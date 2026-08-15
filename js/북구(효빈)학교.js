/**
 * 파일명: js/북구(효빈)학교.js
 * 설명: 북구(효빈) 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-북구(효빈)-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
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
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 북구의 중학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="고송중학교.html">고송중</a></td><td><a class="wiki-link" href="남전중학교.html">남전중</a></td><td><a class="wiki-link" href="내개중학교.html">내개중</a></td><td><a class="wiki-link" href="등기중학교.html">등기중</a></td><td><a class="wiki-link" href="만초중학교.html">만초중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="사녹중학교.html">사녹중</a></td><td><a class="wiki-link" href="사능중학교.html">사능중</a></td><td><a class="wiki-link" href="서도중학교.html">서도중</a></td><td><a class="wiki-link" href="소부중학교.html">소부중</a></td><td><a class="wiki-link" href="소요중학교.html">소요중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="수포중학교.html">수포중</a></td><td><a class="wiki-link" href="습지중학교.html">습지중</a></td><td><a class="wiki-link" href="신영중학교.html">신영중</a></td><td><a class="wiki-link" href="오내중학교.html">오내중</a></td><td><a class="wiki-link" href="이선중학교.html">이선중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="입희중학교.html">입희중</a></td><td class="bg-girl"><a class="wiki-link" href="중수여자중학교.html">중수여중</a></td><td class="bg-boy"><a class="wiki-link" href="중수중학교.html">중수중</a></td><td><a class="wiki-link" href="진희중학교.html">진희중</a></td><td><a class="wiki-link" href="채산중학교.html">채산중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="천왕사중학교.html">천왕사중</a></td><td><a class="wiki-link" href="청능중학교.html">청능중</a></td><td><a class="wiki-link" href="추산중학교.html">추산중</a></td><td><a class="wiki-link" href="포산중학교.html">포산중</a></td><td><a class="wiki-link" href="해서중학교.html">해서중</a></td>
</tr>
<tr>
<td class="bg-girl"><a class="wiki-link" href="효빈북여자중학교.html">효빈북여중</a></td><td class="bg-boy"><a class="wiki-link" href="효빈북중학교.html">효빈북중</a></td><td><a class="wiki-link" href="효빈제일중학교.html">효빈제일중</a></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm" style="border: 2px solid var(--wiki-main);">
<div class="nav-box-header cursor-default" style="background-color: #373a3c;">
<span>효빈광역시 북구의 고등학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<div class="mb-1">
<span class="bg-boy px-1 border border-gray-200">남자고등학교</span>, 
                        <span class="bg-girl px-1 border border-gray-200">여자고등학교</span>, 
                        이외 남녀공학
                    </div>
<div class="font-bold text-[#FF9922]">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
</div>
<table class="school-table">
<tbody>
<tr>
<td class="bg-boy"><a class="wiki-link" href="고송고등학교.html">고송고</a></td>
<td class="bg-girl"><a class="wiki-link" href="고송여자고등학교.html">고송여고</a></td>
<td><a class="wiki-link" href="북구_고등학교_템플릿.html?school=namjeon">남전고</a></td>
<td><a class="wiki-link" href="북구_고등학교_템플릿.html?school=saneung">사능고</a></td>
<td><a class="wiki-link" href="북구_고등학교_템플릿.html?school=sannam">산남고</a></td>
</tr>
<tr>
<td>⊙<a class="wiki-link" href="서신고등학교.html">서신고</a></td>
<td><a class="wiki-link" href="북구_고등학교_템플릿.html?school=sochang">소창고</a></td>
<td><a class="wiki-link" href="북구_고등학교_템플릿.html?school=onae">오내고</a></td>
<td class="bg-boy"><a class="wiki-link" href="북구_고등학교_템플릿.html?school=inam">이남고</a></td>
<td><a class="wiki-link" href="북구_고등학교_템플릿.html?school=inseo">인서고</a></td>
</tr>
<tr>
<td class="bg-boy"><a class="wiki-link" href="중수고등학교.html">중수고</a></td>
<td class="bg-girl"><a class="wiki-link" href="중수여자고등학교.html">중수여고</a></td>
<td><a class="wiki-link" href="북구_고등학교_템플릿.html?school=jinhee">진희고</a></td>
<td><a class="wiki-link" href="북구_고등학교_템플릿.html?school=cheonwangsa">천왕사고</a></td>
<td>※<a class="wiki-link" href="북구_고등학교_템플릿.html?school=cheongnam">청남고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="토모고등학교.html">토모고</a></td>
<td><a class="wiki-link" href="북구_고등학교_템플릿.html?school=pyeongjeon">평전고</a></td>
<td>◈<a class="wiki-link" href="북구_고등학교_템플릿.html?school=hbtech">효빈북부공고</a></td>
<td class="bg-girl"><a class="wiki-link" href="북구_고등학교_템플릿.html?school=hbgirls">효빈북여고</a></td>
<td>▣<a class="wiki-link" href="효빈예술고등학교.html">효빈예고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="북구_고등학교_템플릿.html?school=hbjeil">효빈제일고</a></td>
<td>▣<a class="wiki-link" href="효빈종합고등학교.html">효빈종합고</a></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</div>
<p class="mt-4 font-bold text-md">■ 대학교</p>
<ul class="list-disc pl-5 text-sm">
<li><a class="wiki-link" href="효빈대학교.html">효빈대학교</a> (주소지는 당선동이나, 북구 소조동, 사능동에도 일부 걸쳐져 있는 형태)</li>
<li><a class="wiki-link" href="효빈교육대학교.html">효빈교육대학교</a></li>
<li><a class="wiki-link" href="삼선대학교.html">삼선대학교</a></li>
<li><a class="wiki-link" href="평안명대학교.html">평안명대학교</a></li>
<li><a class="wiki-link" href="옥선대학교.html">옥선대학교</a></li>
</ul>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
