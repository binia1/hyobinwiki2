(function() {
    const renderAncheonOfficesNav = () => {
        const container = document.getElementById('ancheon-offices-nav-container');
        if (!container) return;

        container.innerHTML = `
<div class="w-full max-w-4xl mx-auto border-2 mb-8 text-sm font-sans bg-white shadow-md rounded overflow-hidden" style="border-color: var(--wiki-main2);">
<!-- 헤더 영역 -->
<div class="text-white p-2.5 flex justify-center items-center gap-3 border-b" style="background-color: var(--wiki-main2); border-bottom-color: var(--wiki-main2);">
<img alt="효빈광역시 안천구 로고" class="h-9 w-9 object-contain bg-transparent opacity-90" src="이미지/안천구_흰색로고.webp"/>
<div class="flex flex-col items-center justify-center text-center">
<span class="font-bold text-[12px] leading-tight opacity-90 text-gray-100">효빈광역시 안천구 소재</span>
<span class="font-extrabold text-[18px] tracking-widest leading-tight drop-shadow-sm">관공서</span>
</div>
</div>
<!-- 접기/펼치기 토글 버튼 -->
<div class="text-white text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-white/20 transition-colors" onclick="toggleTable('ancheon-nav-body', 'ancheonToggleBtn')" style="background-color: #8c42c2;">
<span id="ancheonToggleBtn">[ 접기 ]</span>
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
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5 flex-wrap">
<img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/안천구.webp"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="안천구청.html">안천구청</a>
<span class="text-[10px] text-gray-500 font-bold block w-full mt-0.5">(본청·이자출장소)</span>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/의회_로고.svg"/>
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
<img class="w-4 h-4 object-contain" src="이미지/대한민국_경찰청_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈광역시_경찰청.html">효빈광역시경찰청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/대한민국_경찰청_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈안천경찰서.html">효빈안천경찰서</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/대한민국_경찰청_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈이자경찰서.html">효빈이자경찰서</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/대한민국_소방청_로고.svg"/>
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
<img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/보건소.svg"/>
<a class="text-green-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈안천구보건소.html">효빈안천구보건소</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/안천병원.svg"/>
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
<img class="w-4 h-4 object-contain" src="이미지/우정사업본부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="안천우체국.html">안천우체국</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/대한민국_정부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="동효빈세무서.html">동효빈세무서</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/대한민국_정부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방국세청.html">효빈지방국세청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/대한민국_법무부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈교도소.html">효빈교도소</a>
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