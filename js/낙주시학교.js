/**
 * 파일명: js/낙주시학교.js
 * 설명: 낙주시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-낙주시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>덕빈남도 낙주시의 초등학교</span>
</div>
<table class="school-table">
<tr><td><a class="wiki-link" href="회삼초등학교.html">회삼초</a></td><td><a class="wiki-link" href="희실초등학교.html">희실초</a></td><td><a class="wiki-link" href="양지초등학교.html">양지초</a></td><td><a class="wiki-link" href="흥천초등학교.html">흥천초</a></td><td><a class="wiki-link" href="백운초등학교.html">백운초</a></td></tr>
<tr><td><a class="wiki-link" href="광명초등학교.html">광명초</a></td><td><a class="wiki-link" href="샛별초등학교.html">샛별초</a></td><td><a class="wiki-link" href="다솔초등학교.html">다솔초</a></td><td><a class="wiki-link" href="푸른초등학교.html">푸른초</a></td><td><a class="wiki-link" href="삼채초등학교.html">삼채초</a></td></tr>
<tr><td><a class="wiki-link" href="전야초등학교.html">전야초</a></td><td><a class="wiki-link" href="북삼채초등학교.html">북삼채초</a></td><td><a class="wiki-link" href="마루초등학교.html">마루초</a></td><td><a class="wiki-link" href="소나초등학교.html">소나초</a></td><td><a class="wiki-link" href="두둔초등학교.html">두둔초</a></td></tr>
<tr><td><a class="wiki-link" href="나래초등학교.html">나래초</a></td><td><a class="wiki-link" href="이달초등학교.html">이달초</a></td><td><a class="wiki-link" href="등촌초등학교.html">등촌초</a></td><td><a class="wiki-link" href="이달북초등학교.html">이달북초</a></td><td><a class="wiki-link" href="고몽초등학교.html">고몽초</a></td></tr>
<tr><td><a class="wiki-link" href="미내초등학교.html">미내초</a></td><td><a class="wiki-link" href="가온초등학교.html">가온초</a></td><td><a class="wiki-link" href="판창초등학교.html">판창초</a></td><td><a class="wiki-link" href="신판초등학교.html">신판초</a></td><td><a class="wiki-link" href="햇살초등학교.html">햇살초</a></td></tr>
<tr><td><a class="wiki-link" href="천풍초등학교.html">천풍초</a></td><td><a class="wiki-link" href="산업초등학교.html">산업초</a></td><td><a class="wiki-link" href="물류초등학교.html">물류초</a></td><td><a class="wiki-link" href="낙주초등학교.html">낙주초</a></td><td><a class="wiki-link" href="중앙초등학교.html">중앙초</a></td></tr>
<tr><td><a class="wiki-link" href="엽산초등학교.html">엽산초</a></td><td><a class="wiki-link" href="남산초등학교.html">남산초</a></td><td><a class="wiki-link" href="고규초등학교.html">고규초</a></td><td><a class="wiki-link" href="유암초등학교.html">유암초</a></td><td><a class="wiki-link" href="봉황초등학교.html">봉황초</a></td></tr>
<tr><td><a class="wiki-link" href="금강초등학교.html">금강초</a></td><td><a class="wiki-link" href="은하초등학교.html">은하초</a></td><td><a class="wiki-link" href="성원초등학교.html">성원초</a></td><td><a class="wiki-link" href="토마초등학교.html">토마초</a></td><td><a class="wiki-link" href="문화초등학교.html">문화초</a></td></tr>
<tr><td><a class="wiki-link" href="이파초등학교.html">이파초</a></td><td><a class="wiki-link" href="예술초등학교.html">예술초</a></td><td><a class="wiki-link" href="대웅초등학교.html">대웅초</a></td><td><a class="wiki-link" href="서광초등학교.html">서광초</a></td><td><a class="wiki-link" href="화주초등학교.html">화주초</a></td></tr>
<tr><td><a class="wiki-link" href="서구초등학교.html">서구초</a></td><td><a class="wiki-link" href="서부초등학교.html">서부초</a></td><td><a class="wiki-link" href="남서초등학교.html">남서초</a></td><td><a class="wiki-link" href="진적초등학교.html">진적초</a></td><td><a class="wiki-link" href="두진초등학교.html">두진초</a></td></tr>
<tr><td><a class="wiki-link" href="명암초등학교.html">명암초</a></td><td><a class="wiki-link" href="길산초등학교.html">길산초</a></td><td><a class="wiki-link" href="구암초등학교.html">구암초</a></td><td><a class="wiki-link" href="운산초등학교.html">운산초</a></td><td><a class="wiki-link" href="흥림초등학교.html">흥림초</a></td></tr>
<tr><td><a class="wiki-link" href="경영초등학교.html">경영초</a></td><td><a class="wiki-link" href="산언초등학교.html">산언초</a></td><td><a class="wiki-link" href="두원초등학교.html">두원초</a></td><td><a class="wiki-link" href="선성초등학교.html">선성초</a></td><td><a class="wiki-link" href="무풍초등학교.html">무풍초</a></td></tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>덕빈남도 낙주시의 중학교</span>
</div>
<table class="school-table">
<tr><td><a class="wiki-link" href="고규중학교.html">고규중</a></td><td><a class="wiki-link" href="대웅중학교.html">대웅중</a></td><td><a class="wiki-link" href="등촌중학교.html">등촌중</a></td><td><a class="wiki-link" href="삼채북중학교.html">삼채북중</a></td><td><a class="wiki-link" href="삼채중학교.html">삼채중</a></td></tr>
<tr><td><a class="wiki-link" href="유암중학교.html">유암중</a></td><td><a class="wiki-link" href="이달중학교.html">이달중</a></td><td><a class="wiki-link" href="전야중학교.html">전야중</a></td><td><a class="wiki-link" href="천풍중학교.html">천풍중</a></td><td><a class="wiki-link" href="판창동중학교.html">판창동중</a></td></tr>
<tr><td><a class="wiki-link" href="판창중학교.html">판창중</a></td><td><a class="wiki-link" href="하주중학교.html">하주중</a></td><td><a class="wiki-link" href="회삼중학교.html">회삼중</a></td><td><a class="wiki-link" href="희실중학교.html">희실중</a></td><td><a class="wiki-link" href="낙주남중학교.html">낙주남중</a></td></tr>
<tr><td><a class="wiki-link" href="낙주여자중학교.html">낙주여중</a></td><td><a class="wiki-link" href="낙주중학교.html">낙주중</a></td><td><a class="wiki-link" href="성원중학교.html">성원중</a></td><td><a class="wiki-link" href="서구중학교.html">서구중</a></td><td><a class="wiki-link" href="엽산남중학교.html">엽산남중</a></td></tr>
<tr><td><a class="wiki-link" href="엽산중학교.html">엽산중</a></td><td><a class="wiki-link" href="이파중학교.html">이파중</a></td><td><a class="wiki-link" href="토마중학교.html">토마중</a></td><td><a class="wiki-link" href="경영중학교.html">경영중</a></td><td><a class="wiki-link" href="길산중학교.html">길산중</a></td></tr>
<tr><td><a class="wiki-link" href="두원중학교.html">두원중</a></td><td><a class="wiki-link" href="명암중학교.html">명암중</a></td><td><a class="wiki-link" href="산언중학교.html">산언중</a></td><td><a class="wiki-link" href="선성중학교.html">선성중</a></td><td><a class="wiki-link" href="진적중학교.html">진적중</a></td></tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>덕빈남도 낙주시의 고등학교</span>
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
<td><a class="wiki-link" href="낙주고등학교.html">낙주고</a></td>
<td class="bg-girl"><a class="wiki-link" href="낙주여자고등학교.html">낙주여고</a></td>
<td><a class="wiki-link" href="회삼고등학교.html">회삼고</a></td>
<td><a class="wiki-link" href="희실고등학교.html">희실고</a></td>
<td><a class="wiki-link" href="삼채고등학교.html">삼채고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="전야고등학교.html">전야고</a></td>
<td><a class="wiki-link" href="이달고등학교.html">이달고</a></td>
<td><a class="wiki-link" href="등촌고등학교.html">등촌고</a></td>
<td><a class="wiki-link" href="판창고등학교.html">판창고</a></td>
<td><a class="wiki-link" href="천풍고등학교.html">천풍고</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="대웅고등학교.html">대웅고</a></td>
<td><a class="wiki-link" href="화주고등학교.html">화주고</a></td>
<td><a class="wiki-link" href="진적고등학교.html">진적고</a></td>
<td><a class="wiki-link" href="덕빈사대부고.html">덕빈사대부고</a></td>
<td>◈ <a class="wiki-link" href="낙주정밀공업고등학교.html">낙주정밀공고</a></td>
</tr>
<tr>
<td>◈ <a class="wiki-link" href="낙주테크노과학고등학교.html">낙주테크노과학고</a></td>
<td>◈ <a class="wiki-link" href="낙주비즈니스고등학교.html">낙주비즈니스고</a></td>
<td>◈ <a class="wiki-link" href="길산생명과학고등학교.html">길산생명과학고</a></td>
<td>▣ <a class="wiki-link" href="낙주외국어고등학교.html">낙주외고</a></td>
<td>▣ <a class="wiki-link" href="낙주예술고등학교.html">낙주예고</a></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
