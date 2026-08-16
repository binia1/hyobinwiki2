(function() {
    const renderBukguOfficesNav = () => {
        const container = document.getElementById('bukgu-offices-nav-container');
        if (!container) return;

        container.innerHTML = `
<div class="w-full mx-auto border-2 border-[#7799CC] mb-8 text-sm font-sans bg-white">
<div class="bg-[#7799CC] text-white p-2.5 flex justify-center items-center gap-3 border-b border-[#7799CC]">
<img alt="효빈광역시 북구 로고" class="h-9 w-9 object-contain bg-transparent" onerror="this.src='이미지/북구.webp'" src="이미지/북구_흰색로고.webp"/>
<div class="flex flex-col items-center justify-center text-center">
<span class="font-bold text-[12px] leading-tight opacity-90">효빈광역시 북구 소재</span>
<span class="font-extrabold text-[18px] tracking-widest leading-tight drop-shadow-sm">관공서</span>
</div>
</div>
<div class="bg-[#6688BB] text-white text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-[#5577AA] transition-colors" onclick="toggleTable('bukgu-nav-body', 'bukguToggleBtn')">
<span id="bukguToggleBtn">[ 펼치기 · 접기 ]</span>
</div>
<table class="w-full border-collapse bg-white text-center table-fixed text-gray-800">
<colgroup>
<col style="width: 16%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
</colgroup>
<tbody class="toggle-body text-[13px]" id="bukgu-nav-body">
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">지방자치</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/logo.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈광역시청.html">효빈광역시청</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/의회_로고.svg'" src="이미지/의회_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈광역시의회.html">효빈광역시의회</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle"> <!-- 북구청 강조 (#7799CC 톤) -->
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/북구.webp"/><a class="text-[#7799CC] hover:underline font-bold tracking-tighter break-keep leading-tight" href="북구청(효빈).html">북구청</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/의회_로고.svg'" src="이미지/의회_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="북구의회.html">북구의회</a></div>
</td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">법조</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_법원_로고.svg'" src="이미지/대한민국_법원_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈고등법원.html">효빈고등법원</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_법원_로고.svg'" src="이미지/대한민국_법원_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방법원.html">효빈지방법원</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5 flex-wrap"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_검찰청_로고.svg'" src="이미지/대한민국_검찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈고등검찰청.html">효빈고등검찰청</a> <span class="text-[10px] text-gray-500 font-bold break-keep"><del>(변경예정)</del></span></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5 flex-wrap"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_검찰청_로고.svg'" src="이미지/대한민국_검찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방검찰청.html">효빈지방검찰청</a> <span class="text-[10px] text-gray-500 font-bold break-keep"><del>(변경예정)</del></span></div>
</td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">교육</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈광역시_교육청_로고.webp"/><a class="text-red-600 hover:text-red-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈광역시교육청.html">효빈광역시교육청</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈광역시_교육청_로고.webp"/><a class="text-green-600 hover:text-green-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈광역시북부교육지원청.html">효빈광역시북부교육지원청</a></div>
</td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1">치안</div>
<div class="text-red-600">소방</div>
</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_경찰청_로고.svg'" src="이미지/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈북부경찰서.html">효빈북부경찰서</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_경찰청_로고.svg'" src="이미지/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈고송경찰서.html">효빈고송경찰서</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_소방청_로고.svg'" src="이미지/대한민국_소방청_로고.svg"/><a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈북부소방서.html">효빈북부소방서</a></div>
</td>
<td class="border border-gray-300 p-2"></td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1 text-green-600">보건</div>
<div class="mb-1">우정</div>
<div>세무</div>
</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/보건소.svg"/><a class="text-green-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈북구보건소.html">효빈북구보건소</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/우정사업본부_로고.svg'" src="이미지/우정사업본부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈덕북지방우정청.html">효빈덕북지방우정청</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/우정사업본부_로고.svg'" src="이미지/우정사업본부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="북효빈우체국.html">북효빈우체국</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_정부_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="북효빈세무서.html">북효빈세무서</a></div>
</td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">평생학습</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/북구.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="고송도서관.html">고송도서관</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/북구.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="중수도서관.html">중수도서관</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/북구.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈만화애니메이션도서관.html">효빈만화애니메이션도서관</a></div>
</td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle" rowspan="4">기타 국가기관</th>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_정부_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방고용노동청.html">효빈지방고용노동청</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_정부_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방보훈청.html">효빈지방보훈청</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_정부_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방교정청.html">효빈지방교정청</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_정부_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방조달청.html">효빈지방조달청</a></div></td>
</tr>
<tr>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_정부_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈덕북지방노동위원회.html">효빈덕북지방노동위원회</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="저작권특별사법경찰대 효빈사무소.html">저작권특별사법경찰대 효빈사무소</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_정부_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="국가기록원 효빈기록정보센터.html">국가기록원 효빈기록정보센터</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_정부_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="정부청사관리본부 효빈청사관리소.html">정부청사관리본부 효빈청사관리소</a></div></td>
</tr>
<tr>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_정부_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방식품의약품안전청.html">효빈지방식품의약품안전청</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_정부_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈지방데이터청.html">덕빈지방데이터청</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_정부_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방기상청.html">효빈지방기상청</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/감사원_로고.svg'" src="이미지/감사원_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="감사원 효빈사무소.html">감사원 효빈사무소</a></div></td>
</tr>
<tr>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_선거관리위원회_로고.svg'" src="이미지/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방국토관리청.html">효빈지방국토관리청</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/대한민국_선거관리위원회_로고.svg'" src="이미지/대한민국_선거관리위원회_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈광역시선거관리위원회.html">효빈광역시선거관리위원회</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈대_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈대학교.html">효빈대학교</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈대_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈대학교병원.html">효빈대학교병원</a></div></td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle" rowspan="3">시청소속기관</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/logo.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈교통공사.html">효빈교통공사</a></div></td>
<td class="border border-gray-300 p-2 align-middle" colspan="2"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈도시공사_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈광역시도시공사.html">효빈광역시도시공사</a></div></td>
</tr>
<tr>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈애니메이션본부_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈애니메이션본부.html">효빈애니메이션본부</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈문화재단_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈문화재단.html">효빈문화재단</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/logo.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈연구원.html">효빈연구원</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/logo.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈정보산업진흥원.html">효빈정보산업진흥원</a></div></td>
</tr>
<tr>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/logo.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈테크노파크.html">효빈테크노파크</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/logo.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="만화애니메이션의전당.html">만화애니메이션의전당</a></div></td>
<td class="border border-gray-300 p-2 align-middle"><div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/HSCO_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="HSCO.html">HSCO(효빈전시컨벤션센터)</a></div></td>
<td class="border border-gray-300 p-2 align-middle"></td>
</tr>
</tbody>
</table>
</div>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderBukguOfficesNav);
    } else {
        renderBukguOfficesNav();
    }
})();