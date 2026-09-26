(function() {
    const renderDeokjuOfficesNav = () => {
        const container = document.getElementById('deokju-offices-nav-container');
        if (!container) return;

        container.innerHTML = `
<div class="w-full mx-auto border-2 border-[#1A365D] mb-8 text-sm font-sans bg-white shadow-md rounded overflow-hidden">
<!-- 헤더 영역 -->
<div class="bg-[#1A365D] text-white p-2.5 flex justify-center items-center gap-3 border-b border-[#1A365D]">
<img alt="덕주시 로고" class="h-9 w-9 object-contain bg-transparent opacity-90" onerror="this.src='이미지/덕주시.webp'" src="이미지/덕주시.webp"/>
<div class="flex flex-col items-center justify-center text-center">
<span class="font-bold text-[12px] leading-tight opacity-90 text-gray-100">덕빈남도 덕주시 소재</span>
<span class="font-extrabold text-[18px] tracking-widest leading-tight drop-shadow-sm">관공서 및 공공기관</span>
</div>
</div>
<!-- 접기/펼치기 토글 버튼 -->
<div class="bg-[#2B548E] text-white text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-[#152A4A] transition-colors" onclick="toggleTable('deokju-nav-body', 'deokjuToggleBtn')">
<span id="deokjuToggleBtn">[ 펼치기 · 접기 ]</span>
</div>
<table class="w-full border-collapse bg-white text-center table-fixed text-gray-800">
<colgroup>
<col style="width: 16%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
</colgroup>
<tbody class="toggle-body text-[13px]" id="deokju-nav-body">

<!-- 1. 지방자치 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">지방자치</th>
<td class="border border-gray-300 p-2 align-middle bg-[#f0f4f8]" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/덕남로고.webp" onerror="this.src='이미지/덕주시.webp'"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈남도청.html">덕빈남도청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/의회_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈남도의회.html">덕빈남도의회</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle bg-[#f0f4f8]" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/덕주시.webp"/><a class="font-bold tracking-tighter break-keep leading-tight text-[#1A365D] hover:underline" href="덕주시청.html">덕주시청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/의회_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주시의회.html">덕주시의회</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/덕주시.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕산구청.html">덕산구청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/덕주시.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="조전구청.html">조전구청</a></div>
</div>
</td>
</tr>

<!-- 2. 치안/소방 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1">치안</div>
<div class="text-red-600">소방</div>
</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈남도경찰청.html">덕빈남도경찰청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕산경찰서.html">덕산경찰서</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="조전경찰서.html">조전경찰서</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_소방청_로고.svg"/><a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈남도소방본부.html">덕빈남도소방본부</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_소방청_로고.svg"/><a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕산소방서.html">덕산소방서</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_소방청_로고.svg"/><a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="조전소방서.html">조전소방서</a></div>
</div>
</td>
</tr>

<!-- 3. 법조/교정 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">법조/교정</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_법원_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주지방법원.html">덕주지방법원</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_검찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주지방검찰청.html">덕주지방검찰청</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_법무부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕남지방교정청.html">덕남지방교정청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_법무부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주교도소.html">덕주교도소</a></div>
</div>
</td>
</tr>

<!-- 4. 교육/문화/의료 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">교육/문화<br>의료</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/교육청_로고.webp"/><a class="text-red-600 hover:text-red-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈남도교육청.html">덕빈남도교육청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/교육청_로고.webp"/><a class="text-green-600 hover:text-green-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주교육지원청.html">덕주교육지원청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/덕남대학교_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕남대학교.html">덕남대학교</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/덕주학생교육문화회관_로고.webp"/><a class="text-green-600 hover:text-green-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주학생교육문화회관.html">덕주학생교육문화회관</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/덕주문화회관_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주문화회관.html">덕주문화회관</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/덕남대학교병원_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕남대학교병원.html">덕남대학교병원</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/덕주의료원_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주의료원.html">덕주의료원</a></div>
</div>
</td>
</tr>

<!-- 5. 보건/우정/세무 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1 text-green-600">보건</div>
<div class="mb-1">우정</div>
<div>세무</div>
</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex flex-col items-center justify-center gap-y-2">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/보건소.svg"/><a class="text-green-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕산구보건소.html">덕산구보건소</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/보건소.svg"/><a class="text-green-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="조전구보건소.html">조전구보건소</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex flex-col items-center justify-center gap-y-2">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/우정사업본부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕남지방우정청.html">덕남지방우정청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/우정사업본부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주우체국.html">덕주우체국</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/우정사업본부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="남덕주우체국.html">남덕주우체국</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주세무서.html">덕주세무서</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="남덕주세무서.html">남덕주세무서</a></div>
</div>
</td>
</tr>

<!-- 6. 국가행정 / 기타 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1">국가행정</div>
<div>기타기관</div>
</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방고용노동청 덕주지청.html">효빈지방고용노동청 덕주지청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕남남부보훈지청.html">덕남남부보훈지청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕남지방병무청.html">덕남지방병무청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕남지방조달청.html">덕남지방조달청</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_정부_로고.svg'" src="이미지/svg/대한민국_정부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="국립덕주박물관.html">국립덕주박물관</a>
</div>
</td>
</tr>

<!-- 7. 지방공기업 및 산하기관 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">공기업<br>산하기관</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/덕주도시철도공사_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주도시철도공사.html">덕주도시철도공사</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/덕주도시공사_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주도시공사.html">덕주도시공사</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/덕주문화예술원_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주문화예술원.html">덕주문화예술원</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/덕주수소산업기술원_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕주수소산업기술원.html">덕주수소산업기술원</a></div>
</div>
</td>
</tr>

</tbody>
</table>
</div>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderDeokjuOfficesNav);
    } else {
        renderDeokjuOfficesNav();
    }
})();