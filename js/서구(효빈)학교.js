/**
 * 파일명: js/서구(효빈)학교.js
 * 설명: 서구(효빈) 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-서구(효빈)-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 서구의 초등학교</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="고도초등학교.html">고도초</a></td><td><a class="wiki-link" href="과성초등학교.html">과성초</a></td><td><a class="wiki-link" href="과진초등학교.html">과진초</a></td><td><a class="wiki-link" href="과한초등학교.html">과한초</a></td><td><a class="wiki-link" href="나살리초등학교.html">나살리초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="내성초등학교.html">내성초</a></td><td><a class="wiki-link" href="당선초등학교.html">당선초</a></td><td><a class="wiki-link" href="명일초등학교.html">명일초</a></td><td><a class="wiki-link" href="미아초등학교.html">미아초</a></td><td><a class="wiki-link" href="복지초등학교.html">복지초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="북문초등학교.html">북문초</a></td><td><a class="wiki-link" href="산산초등학교.html">산산초</a></td><td><a class="wiki-link" href="산진초등학교.html">산진초</a></td><td><a class="wiki-link" href="서구초등학교.html">서구초</a></td><td><a class="wiki-link" href="성내초등학교.html">성내초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="신원초등학교.html">신원초</a></td><td><a class="wiki-link" href="언연초등학교.html">언연초</a></td><td><a class="wiki-link" href="운촌초등학교.html">운촌초</a></td><td><a class="wiki-link" href="은안초등학교.html">은안초</a></td><td><a class="wiki-link" href="이라초등학교.html">이라초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="주산초등학교.html">주산초</a></td><td><a class="wiki-link" href="청덕초등학교.html">청덕초</a></td><td><a class="wiki-link" href="칠천초등학교.html">칠천초</a></td><td><a class="wiki-link" href="태이초등학교.html">태이초</a></td><td><a class="wiki-link" href="헌산초등학교.html">헌산초</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="효빈서초등학교.html">효빈서초</a></td><td><del>족포초</del></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<p class="text-sm mt-1 text-gray-500 pl-2">
                ※ <a class="wiki-link" href="족포초등학교.html"><del>족포초</del></a>는 현 시장인 <a class="wiki-link" href="박효빈.html">박효빈</a>의 모교이며, 과거 시장이 학교폭력을 당했을 때 당시 같은 반이던 가해자 <a class="wiki-link" href="윤재훈.html">윤재훈</a>이 시장 아들이라는 이유로 폭력을 방관한 일화가 있다. 내성동 인구 급감으로 2024년 폐교되었으며, 현재는 그 자리에 정신건강증진센터가 생겼다.
            </p>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 서구의 중학교</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="과진중학교.html">과진중</a></td><td><a class="wiki-link" href="나살리중학교.html">나살리중</a></td><td><a class="wiki-link" href="내성중학교.html">내성중</a></td><td><a class="wiki-link" href="당선중학교.html">당선중</a></td><td><a class="wiki-link" href="사복중학교.html">사복중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서구중학교.html">서구중</a></td><td><a class="wiki-link" href="신북중학교.html">신북중</a></td><td><a class="wiki-link" href="운진중학교.html">운진중</a></td><td><a class="wiki-link" href="청덕중학교.html">청덕중</a></td><td><a class="wiki-link" href="청산중학교.html">청산중</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="칠천중학교.html">칠천중</a></td><td><a class="wiki-link" href="헌산중학교.html">헌산중</a></td><td><a class="wiki-link" href="효빈대부설중학교.html">효빈대부설중</a></td><td><a class="wiki-link" href="효빈서중학교.html">효빈서중</a></td><td><a class="wiki-link" href="효빈체육중학교.html">효빈체육중</a></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 서구의 고등학교</span>
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
<td class="bg-boy"><a class="wiki-link" href="과진고등학교.html">과진고</a></td><td>※<a class="wiki-link" href="나살리고등학교.html">나살리고</a></td><td class="bg-boy"><a class="wiki-link" href="내성고등학교.html">내성고</a></td><td>◈<a class="wiki-link" href="내죽고등학교.html">내죽고</a></td><td class="bg-boy"><a class="wiki-link" href="당선고등학교.html">당선고</a></td>
</tr>
<tr>
<td class="bg-girl"><a class="wiki-link" href="당선여자고등학교.html">당선여고</a></td><td class="bg-boy"><a class="wiki-link" href="복지고등학교.html">복지고</a></td><td class="bg-girl"><a class="wiki-link" href="복지여자고등학교.html">복지여고</a></td><td><a class="wiki-link" href="청덕고등학교.html">청덕고</a></td><td><a class="wiki-link" href="효빈대부설고등학교.html">효빈대부설고</a></td>
</tr>
<tr>
<td class="bg-boy"><a class="wiki-link" href="효빈북고등학교.html">효빈북고</a></td><td class="bg-boy"><a class="wiki-link" href="효빈서고등학교.html">효빈서고</a></td><td class="bg-girl"><a class="wiki-link" href="효빈서여자고등학교.html">효빈서여고</a></td><td>▣<a class="wiki-link" href="효빈체육고등학교.html">효빈체육고</a></td><td></td>
</tr>
</table>
</div>
<!-- 대학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>효빈광역시 서구의 대학교/전문대학</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="효빈대학교.html">효빈대학교 당선캠퍼스</a></td>
<td><a class="wiki-link" href="효빈복지대학교.html">효빈복지대학교</a></td>
<td><a class="wiki-link" href="효빈과학기술원.html">효빈과학기술원</a></td>
<td><a class="wiki-link" href="해총대학교.html">해총대학교</a></td>
<td><a class="wiki-link" href="중촌대학교.html">중촌대학교</a></td>
</tr>
</table>
</div>
<p class="text-sm mt-2 text-gray-600">인구 대비 학교가 꽤 많은 지역으로, 윗쪽 고송신도시 남부 지역 학생수요까지 맡을 정도로 꽤 많은 수이다.</p>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
