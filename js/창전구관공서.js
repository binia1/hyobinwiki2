(function() {
    const renderChangjeonOfficesNav = () => {
        const container = document.getElementById('changjeon-offices-nav-container');
        if (!container) return;

        container.innerHTML = `
<div class="w-full mx-auto border-2 border-[#2288CC] mb-8 text-sm font-sans bg-white">
<div class="bg-[#2288CC] text-white p-2.5 flex justify-center items-center gap-3 border-b border-[#2288CC]">
<img alt="효빈광역시 창전구 로고" class="h-9 w-9 object-contain bg-transparent opacity-90" onerror="this.src='이미지/창전구.webp'" src="이미지/창전구_흰색_로고.webp"/>
<div class="flex flex-col items-center justify-center text-center">
<span class="font-bold text-[12px] leading-tight opacity-90 text-gray-100">효빈광역시 창전구 소재</span>
<span class="font-extrabold text-[18px] tracking-widest leading-tight drop-shadow-sm">관공서</span>
</div>
</div>
<div class="bg-[#2b99e6] text-white text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-[#1a6ba3] transition-colors" onclick="toggleTable('changjeon-nav-body', 'changjeonToggleBtn')">
<span id="changjeonToggleBtn">[ 펼치기 · 접기 ]</span>
</div>
<table class="w-full border-collapse bg-white text-center table-fixed text-gray-800">
<colgroup>
<col style="width: 16%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
</colgroup>
<tbody class="toggle-body text-[13px]" id="changjeon-nav-body">
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">지방자치</th>
<td class="border border-gray-300 p-2 align-middle bg-[#e6f4ff]" colspan="2"> <!-- 창전구청 강조 -->
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/창전구.webp"/><a class="font-bold tracking-tighter break-keep leading-tight text-[#2288CC] hover:underline" href="창전구청(효빈).html">창전구청</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/의회_로고.svg'" src="이미지/svg/의회_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="창전구의회.html">창전구의회</a></div>
</td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1">치안</div>
<div class="text-red-600">소방</div>
</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_경찰청_로고.svg'" src="이미지/svg/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈창전경찰서.html">효빈창전경찰서</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_소방청_로고.svg'" src="이미지/svg/대한민국_소방청_로고.svg"/><a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈창전소방서.html">효빈창전소방서</a></div>
</td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">교육/보건</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈광역시_교육청_로고.webp"/><a class="text-green-600 hover:text-green-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈광역시창전교육지원청.html">효빈광역시창전교육지원청</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/svg/보건소.svg"/><a class="text-green-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈창전구보건소.html">효빈창전구보건소</a></div>
</td>
</tr>
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1">우정</div>
<div>세무</div>
</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/우정사업본부_로고.svg'" src="이미지/svg/우정사업본부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="창전우체국.html">창전우체국</a></div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_정부_로고.svg'" src="이미지/svg/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="창전세무서.html">창전세무서</a></div>
</td>
</tr>
</tbody>
</table>
</div>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderChangjeonOfficesNav);
    } else {
        renderChangjeonOfficesNav();
    }
})();