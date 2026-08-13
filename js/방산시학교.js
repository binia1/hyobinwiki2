/**
 * 파일명: js/방산시학교.js
 * 설명: 방산시 초/중/고등학교 목록 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-방산시-school");

    containers.forEach(function(container) {
        var schoolHTML = `
<div class="space-y-4">
<!-- 1. 초등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>방산시의 초등학교 (총 42개교)</span>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="방산초등학교.html">방산초등학교</a></td>
<td><a class="wiki-link" href="청전초등학교.html">청전초등학교</a></td>
<td><a class="wiki-link" href="주강초등학교.html">주강초등학교</a></td>
<td><a class="wiki-link" href="중앙초등학교.html">중앙초등학교</a></td>
<td><a class="wiki-link" href="서중초등학교.html">서중초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="동공초등학교.html">동공초등학교</a></td>
<td><a class="wiki-link" href="석원초등학교.html">석원초등학교</a></td>
<td><a class="wiki-link" href="매복초등학교.html">매복초등학교</a></td>
<td><a class="wiki-link" href="율목초등학교.html">율목초등학교</a></td>
<td><a class="wiki-link" href="북산초등학교.html">북산초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="서남초등학교.html">서남초등학교</a></td>
<td><a class="wiki-link" href="도수초등학교.html">도수초등학교</a></td>
<td><a class="wiki-link" href="약신초등학교.html">약신초등학교</a></td>
<td><a class="wiki-link" href="장수초등학교.html">장수초등학교</a></td>
<td><a class="wiki-link" href="탕천초등학교.html">탕천초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="미강초등학교.html">미강초등학교</a></td>
<td><a class="wiki-link" href="양복초등학교.html">양복초등학교</a></td>
<td><a class="wiki-link" href="냉천초등학교.html">냉천초등학교</a></td>
<td><a class="wiki-link" href="약원초등학교.html">약원초등학교</a></td>
<td><a class="wiki-link" href="무산초등학교.html">무산초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="계촌초등학교.html">계촌초등학교</a></td>
<td><a class="wiki-link" href="정수초등학교.html">정수초등학교</a></td>
<td><a class="wiki-link" href="신성초등학교.html">신성초등학교</a></td>
<td><a class="wiki-link" href="동평초등학교.html">동평초등학교</a></td>
<td><a class="wiki-link" href="평안초등학교.html">평안초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="영동초등학교.html">영동초등학교</a></td>
<td><a class="wiki-link" href="산포초등학교.html">산포초등학교</a></td>
<td><a class="wiki-link" href="대곡초등학교.html">대곡초등학교</a></td>
<td><a class="wiki-link" href="장재초등학교.html">장재초등학교</a></td>
<td><a class="wiki-link" href="송촌초등학교.html">송촌초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="금호초등학교.html">금호초등학교</a></td>
<td><a class="wiki-link" href="구도초등학교.html">구도초등학교</a></td>
<td><a class="wiki-link" href="송림초등학교.html">송림초등학교</a></td>
<td><a class="wiki-link" href="봉수초등학교.html">봉수초등학교</a></td>
<td><a class="wiki-link" href="용천초등학교.html">용천초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="신흥초등학교.html">신흥초등학교</a></td>
<td><a class="wiki-link" href="학포초등학교.html">학포초등학교</a></td>
<td><a class="wiki-link" href="장천초등학교.html">장천초등학교</a></td>
<td><a class="wiki-link" href="매화초등학교.html">매화초등학교</a></td>
<td><a class="wiki-link" href="금강초등학교.html">금강초등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="청송초등학교.html">청송초등학교</a></td>
<td><a class="wiki-link" href="덕림초등학교.html">덕림초등학교</a></td>
<td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 2. 중학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>방산시의 중학교 (총 21개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<span class="bg-boy px-1 border border-gray-200">남자중학교</span>, 
                    <span class="bg-girl px-1 border border-gray-200">여자중학교</span>, 
                    이외 남녀공학
                </div>
<table class="school-table">
<tr>
<td class="bg-boy"><a class="wiki-link" href="방산중학교.html">방산중학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="청전중학교.html">청전중학교</a></td>
<td><a class="wiki-link" href="주강중학교.html">주강중학교</a></td>
<td><a class="wiki-link" href="중앙중학교.html">중앙중학교</a></td>
<td><a class="wiki-link" href="서중중학교.html">서중중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="동공중학교.html">동공중학교</a></td>
<td><a class="wiki-link" href="석원중학교.html">석원중학교</a></td>
<td><a class="wiki-link" href="율목중학교.html">율목중학교</a></td>
<td><a class="wiki-link" href="북산중학교.html">북산중학교</a></td>
<td><a class="wiki-link" href="서남중학교.html">서남중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="장수중학교.html">장수중학교</a></td>
<td><a class="wiki-link" href="탕천중학교.html">탕천중학교</a></td>
<td><a class="wiki-link" href="미강중학교.html">미강중학교</a></td>
<td><a class="wiki-link" href="양복중학교.html">양복중학교</a></td>
<td><a class="wiki-link" href="냉천중학교.html">냉천중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="약원중학교.html">약원중학교</a></td>
<td><a class="wiki-link" href="무산중학교.html">무산중학교</a></td>
<td><a class="wiki-link" href="계촌중학교.html">계촌중학교</a></td>
<td><a class="wiki-link" href="정수중학교.html">정수중학교</a></td>
<td><a class="wiki-link" href="매복중학교.html">매복중학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="도수중학교.html">도수중학교</a></td>
<td></td><td></td><td></td><td></td>
</tr>
</table>
</div>
<!-- 3. 고등학교 -->
<div class="nav-box rounded overflow-hidden shadow-sm">
<div class="nav-box-header cursor-default">
<span>방산시의 고등학교 (총 13개교)</span>
</div>
<div class="bg-white p-2 text-center text-xs border-b border-[#ccc]">
<div class="mb-1">
<span class="bg-girl px-1 border border-gray-200">여자고등학교</span>, 
                        이외 남녀공학
                    </div>
<div class="font-bold text-[#7777AA]">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</div>
</div>
<table class="school-table">
<tr>
<td><a class="wiki-link" href="방산고등학교.html">방산고등학교</a></td>
<td class="bg-girl"><a class="wiki-link" href="청전여자고등학교.html">청전여자고등학교</a></td>
<td><a class="wiki-link" href="서중고등학교.html">서중고등학교</a></td>
<td><a class="wiki-link" href="주강고등학교.html">주강고등학교</a></td>
<td><a class="wiki-link" href="율목고등학교.html">율목고등학교</a></td>
</tr>
<tr>
<td><a class="wiki-link" href="북산고등학교.html">북산고등학교</a></td>
<td><a class="wiki-link" href="서남고등학교.html">서남고등학교</a></td>
<td><a class="wiki-link" href="방산제일고등학교.html">방산제일고등학교</a></td>
<td><td class="bg-girl"><a class="wiki-link" href="방산여자고등학교.html">방산여자고등학교</a></td>
<td>◈<a class="wiki-link" href="서중공업고등학교.html">서중공업고등학교</a></td>
</td></tr>
<tr>
<td>◈<a class="wiki-link" href="방산공업고등학교.html">방산공업고등학교</a></td>
<td>◈<a class="wiki-link" href="서중농업고등학교.html">서중농업고등학교</a></td>
<td><a class="wiki-link" href="방산예술고등학교.html">방산예술고등학교</a></td>
<td></td><td></td>
</tr>
</table>
</div>
</div>
        `;
        container.innerHTML = schoolHTML;
    });
});
