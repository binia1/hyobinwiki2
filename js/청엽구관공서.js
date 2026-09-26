(function() {
    const renderCheongyeopOfficesNav = () => {
        const container = document.getElementById('cheongyeop-offices-nav-container');
        if (!container) return;

        container.innerHTML = `
<div class="w-full mx-auto border-2 border-[#005588] mb-8 text-sm font-sans bg-white">
<div class="bg-[#005588] text-white p-2.5 flex justify-center items-center gap-3 border-b border-[#005588]">
<img alt="효빈광역시 청엽구 로고" class="h-9 w-9 object-contain bg-transparent opacity-90" onerror="this.src='이미지/청엽구.webp'" src="이미지/청엽구_흰색로고.webp"/>
<div class="flex flex-col items-center justify-center text-center">
<span class="font-bold text-[12px] leading-tight opacity-90 text-gray-100">효빈광역시 청엽구 소재</span>
<span class="font-extrabold text-[18px] tracking-widest leading-tight drop-shadow-sm">관공서</span>
</div>
</div>
<div class="bg-[#006699] text-white text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-[#003355] transition-colors" onclick="toggleTable('cheongyeop-nav-body', 'cheongyeopToggleBtn')">
<span id="cheongyeopToggleBtn">[ 펼치기 · 접기 ]</span>
</div>
<table class="w-full border-collapse bg-white text-center table-fixed text-gray-800">
<colgroup>
<col style="width: 16%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
</colgroup>
<tbody class="toggle-body text-[13px]" id="cheongyeop-nav-body">
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">지방자치</th>
<td class="border border-gray-300 p-2 align-middle bg-[#e5f0f5]" colspan="2"> <!-- 청엽구청 강조 -->
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/청엽구.webp"/><a class="font-bold tracking-tighter break-keep leading-tight text-[#005588] hover:underline" href="청엽구청(효빈).html">청엽구청</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/의회_로고.svg'" src="이미지/svg/의회_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="청엽구의회.html">청엽구의회</a></div>
</td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1">치안</div>
<div class="text-red-600">소방</div>
</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_경찰청_로고.svg'" src="이미지/svg/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈청엽경찰서.html">효빈청엽경찰서</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_소방청_로고.svg'" src="이미지/svg/대한민국_소방청_로고.svg"/><a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈청엽소방서.html">효빈청엽소방서</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2"></td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">교육/보건</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈광역시_교육청_로고.webp"/><a class="text-green-600 hover:text-green-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈광역시남부교육지원청.html">효빈광역시남부교육지원청</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/svg/보건소.svg"/><a class="text-green-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈청엽구보건소.html">효빈청엽구보건소</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/svg/우전병원.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="우전병원.html">우전병원</a></div>
</td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1">우정</div>
<div>세무</div>
</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/우정사업본부_로고.svg'" src="이미지/svg/우정사업본부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="청엽우체국.html">청엽우체국</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_정부_로고.svg'" src="이미지/svg/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="남효빈세무서.html">남효빈세무서</a></div>
</td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">시청소속기관</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈_컬쳐레스풀_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈 컬쳐레스풀.html">효빈 컬쳐레스풀</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈관광공사_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈관광공사.html">효빈관광공사</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈디자인진흥원_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈디자인진흥원.html">효빈디자인진흥원</a></div>
</td>
</tr>
</tbody>
</table>
</div>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderCheongyeopOfficesNav);
    } else {
        renderCheongyeopOfficesNav();
    }
})();