(function() {
    const renderAncheonOfficesNav = () => {
        const container = document.getElementById('ancheon-offices-nav-container');
        if (!container) return;

        container.innerHTML = `
<div class="w-full mx-auto border-2 border-[#8c42c2] mb-8 text-sm font-sans bg-white shadow-md rounded overflow-hidden">
<!-- 헤더 영역 -->
<div class="bg-[#8c42c2] text-white p-2.5 flex justify-center items-center gap-3 border-b border-[#8c42c2]">
<img alt="효빈광역시 안천구 로고" class="h-9 w-9 object-contain bg-transparent opacity-90" onerror="this.src='이미지/안천구.webp'" src="이미지/안천구_흰색로고.webp"/>
<div class="flex flex-col items-center justify-center text-center">
<span class="font-bold text-[12px] leading-tight opacity-90 text-gray-100">효빈광역시 안천구 소재</span>
<span class="font-extrabold text-[18px] tracking-widest leading-tight drop-shadow-sm">관공서</span>
</div>
</div>
<!-- 접기/펼치기 토글 버튼 -->
<div class="bg-[#9d4bd9] text-white text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-[#7a32ab] transition-colors" onclick="toggleTable('ancheon-nav-body', 'ancheonToggleBtn')">
<span id="ancheonToggleBtn">[ 펼치기 · 접기 ]</span>
</div>
<table class="w-full border-collapse bg-white text-center table-fixed text-gray-800">
<colgroup>
<col style="width: 16%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
</colgroup>
<tbody class="toggle-body text-[13px]" id="ancheon-nav-body">
<!-- 1. 지방자치 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">지방자치</th>
<td class="border border-gray-300 p-2 align-middle bg-[#f4ebfa]"> <!-- 안천구청 강조 -->
<div class="flex items-center justify-center gap-1.5 flex-wrap">
<img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/안천구.webp"/>
<a class="text-[#8c42c2] hover:underline font-bold tracking-tighter break-keep leading-tight" href="안천구청(효빈).html">안천구청</a>
<span class="text-[10px] text-gray-500 font-bold block w-full mt-0.5">(본청·이자출장소)</span>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/의회_로고.svg'" src="이미지/svg/의회_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="안천구의회.html">안천구의회</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle"></td>
<td class="border border-gray-300 p-2 align-middle"></td>
</tr>
<!-- 2. 치안/소방 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1">치안</div>
<div class="text-red-600">소방</div>
</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_경찰청_로고.svg'" src="이미지/svg/대한민국_경찰청_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈광역시경찰청.html">효빈광역시경찰청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_경찰청_로고.svg'" src="이미지/svg/대한민국_경찰청_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈안천경찰서.html">효빈안천경찰서</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_경찰청_로고.svg'" src="이미지/svg/대한민국_경찰청_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈이자경찰서.html">효빈이자경찰서</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_소방청_로고.svg'" src="이미지/svg/대한민국_소방청_로고.svg"/>
<a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈안천소방서.html">효빈안천소방서</a>
</div>
</td>
</tr>
<!-- 3. 교육/의료 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">교육/의료</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈광역시_교육청_로고.webp"/>
<a class="text-green-600 hover:text-green-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈광역시안천교육지원청.html">효빈광역시안천교육지원청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/svg/보건소.svg"/>
<a class="text-green-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈안천구보건소.html">효빈안천구보건소</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/svg/안천병원.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="안천병원.html">안천병원</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle"></td>
</tr>
<!-- 4. 우정/세무/기타 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1">우정</div>
<div class="mb-1">세무</div>
<div>기타</div>
</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/우정사업본부_로고.svg'" src="이미지/svg/우정사업본부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="안천우체국.html">안천우체국</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_정부_로고.svg'" src="이미지/svg/대한민국_정부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="동효빈세무서.html">동효빈세무서</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_정부_로고.svg'" src="이미지/svg/대한민국_정부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방국세청.html">효빈지방국세청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_법무부_로고.svg'" src="이미지/svg/대한민국_법무부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈교도소.html">효빈교도소</a>
</div>
</td>
</tr>
<!-- 5. 시청소속기관 (신규 추가) -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">시청소속기관</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈문화공사_로고.webp"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈문화공사.html">효빈문화공사</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈글로벌도시재단_로고.webp"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈글로벌도시재단.html">효빈글로벌도시재단</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/효빈성평등가족과_평생교육진흥원_로고.webp"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈성평등가족과 평생교육진흥원.html">효빈성평등가족과<br>평생교육진흥원</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderAncheonOfficesNav);
    } else {
        renderAncheonOfficesNav();
    }
})();