(function() {
    const renderGawonOfficesNav = () => {
        const container = document.getElementById('gawon-offices-nav-container');
        if (!container) return;

        container.innerHTML = `
<div class="w-full mx-auto border-2 border-[#1E3B70] mb-8 text-sm font-sans bg-white shadow-md rounded overflow-hidden">
<!-- 헤더 영역 -->
<div class="bg-[#1E3B70] text-white p-2.5 flex justify-center items-center gap-3 border-b border-[#1E3B70]">
<img alt="가원구 로고" class="h-9 w-9 object-contain bg-transparent opacity-90" onerror="this.src='이미지/빈주시.webp'" src="이미지/빈주시.webp"/>
<div class="flex flex-col items-center justify-center text-center">
<span class="font-bold text-[12px] leading-tight opacity-90 text-gray-100">덕빈북도 빈주시 가원구 소재</span>
<span class="font-extrabold text-[18px] tracking-widest leading-tight drop-shadow-sm">행정기관</span>
</div>
</div>
<!-- 접기/펼치기 토글 버튼 -->
<div class="bg-[#294B8A] text-white text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-[#152B52] transition-colors" onclick="toggleTable('gawon-nav-body', 'gawonToggleBtn')">
<span id="gawonToggleBtn">[ 펼치기 · 접기 ]</span>
</div>
<table class="w-full border-collapse bg-white text-center table-fixed text-gray-800">
<colgroup>
<col style="width: 16%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
</colgroup>
<tbody class="toggle-body text-[13px]" id="gawon-nav-body">
<!-- 1. 지방자치 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">지방자치</th>
<td class="border border-gray-300 p-2 align-middle bg-[#f0f4f8]">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/덕북로고.webp"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈북도청.html">덕빈북도청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle bg-[#f0f4f8]">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/의회_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈북도의회.html">덕빈북도의회</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle bg-[#f0f4f8]">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/빈주시.webp"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주시청.html">빈주시청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle bg-[#f0f4f8]"> <!-- 가원구청 강조 -->
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/빈주시.webp"/>
<a class="font-bold tracking-tighter break-keep leading-tight text-[#1E3B70] hover:underline" href="가원구청.html">가원구청</a>
</div>
</td>
</tr>
<!-- 2. 법조 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">법조</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_법원_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주지방법원.html">빈주지방법원</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_검찰청_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주지방검찰청.html">빈주지방검찰청</a>
</div>
</td>
</tr>
<!-- 3. 교육 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">교육</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/교육청_로고.webp"/>
<a class="text-red-600 hover:text-red-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈북도교육청.html">덕빈북도교육청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/교육청_로고.webp"/>
<a class="text-green-600 hover:text-green-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주교육지원청.html">빈주교육지원청</a>
</div>
</td>
</tr>
<!-- 4. 치안/소방 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1">치안</div>
<div class="text-red-600">소방</div>
</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_경찰청_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈북도경찰청.html">덕빈북도경찰청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_경찰청_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주가원경찰서.html">빈주가원경찰서</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_소방청_로고.svg"/>
<a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈북도소방본부.html">덕빈북도소방본부</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_소방청_로고.svg"/>
<a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주가원소방서.html">빈주가원소방서</a>
</div>
</td>
</tr>
<!-- 5. 보건/세무/병무/환경 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1 text-green-600">보건</div>
<div class="mb-1">세무</div>
<div>병무 / 환경</div>
</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/보건소.svg"/>
<a class="text-green-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="가원구보건소.html">가원구보건소</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="가원세무서.html">가원세무서</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈지방병무청.html">덕빈지방병무청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈지방환경청.html">덕빈지방환경청</a>
</div>
</td>
</tr>
<!-- 6. 기타기관 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">기타기관</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/코레일_로고.svg'" src="이미지/svg/코레일_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="한국철도공사 덕북본부.html">한국철도공사 덕북본부</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="3"></td>
</tr>
</tbody>
</table>
</div>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderGawonOfficesNav);
    } else {
        renderGawonOfficesNav();
    }
})();