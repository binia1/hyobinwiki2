(function() {
    const renderBinjuOfficesNav = () => {
        const container = document.getElementById('binju-offices-nav-container');
        if (!container) return;

        container.innerHTML = `
<div class="w-full mx-auto border-2 border-[#1E3B70] mb-8 text-sm font-sans bg-white shadow-md rounded overflow-hidden">
<!-- 헤더 영역 -->
<div class="bg-[#1E3B70] text-white p-2.5 flex justify-center items-center gap-3 border-b border-[#1E3B70]">
<img alt="빈주시 로고" class="h-9 w-9 object-contain bg-transparent opacity-90" onerror="this.src='이미지/빈주시.webp'" src="이미지/빈주시.webp"/>
<div class="flex flex-col items-center justify-center text-center">
<span class="font-bold text-[12px] leading-tight opacity-90 text-gray-100">덕빈북도 빈주시 소재</span>
<span class="font-extrabold text-[18px] tracking-widest leading-tight drop-shadow-sm">관공서 및 공공기관</span>
</div>
</div>
<!-- 접기/펼치기 토글 버튼 -->
<div class="bg-[#294B8A] text-white text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-[#152B52] transition-colors" onclick="toggleTable('binju-nav-body', 'binjuToggleBtn')">
<span id="binjuToggleBtn">[ 펼치기 · 접기 ]</span>
</div>
<table class="w-full border-collapse bg-white text-center table-fixed text-gray-800">
<colgroup>
<col style="width: 16%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
<col style="width: 21%;"/>
</colgroup>
<tbody class="toggle-body text-[13px]" id="binju-nav-body">

<!-- 1. 지방자치 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">지방자치</th>
<td class="border border-gray-300 p-2 align-middle bg-[#f0f4f8]" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/덕북로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈북도청.html">덕빈북도청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/의회_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈북도의회.html">덕빈북도의회</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle bg-[#f0f4f8]" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/빈주시.webp"/><a class="font-bold tracking-tighter break-keep leading-tight text-[#1E3B70] hover:underline" href="빈주시청.html">빈주시청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/의회_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주시의회.html">빈주시의회</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/빈주시.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="가원구청.html">가원구청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/빈주시.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈성구청.html">빈성구청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/빈주시.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="장기구청.html">장기구청</a></div>
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
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈북도경찰청.html">덕빈북도경찰청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주가원경찰서.html">빈주가원경찰서</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주빈성경찰서.html">빈주빈성경찰서</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_경찰청_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주장기경찰서.html">빈주장기경찰서</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_소방청_로고.svg"/><a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈북도소방본부.html">덕빈북도소방본부</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_소방청_로고.svg"/><a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주가원소방서.html">빈주가원소방서</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_소방청_로고.svg"/><a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주빈성소방서.html">빈주빈성소방서</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_소방청_로고.svg"/><a class="text-red-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주장기소방서.html">빈주장기소방서</a></div>
</div>
</td>
</tr>

<!-- 3. 법조/교정 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">법조/교정</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_법원_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주지방법원.html">빈주지방법원</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_검찰청_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주지방검찰청.html">빈주지방검찰청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_법무부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주교도소.html">빈주교도소</a>
</div>
</td>
</tr>

<!-- 4. 교육/문화/의료 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">교육/문화<br>의료</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/교육청_로고.webp"/><a class="text-red-600 hover:text-red-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈북도교육청.html">덕빈북도교육청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/교육청_로고.webp"/><a class="text-green-600 hover:text-green-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주교육지원청.html">빈주교육지원청</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/교육청_로고.webp"/><a class="text-green-600 hover:text-green-800 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주학생교육문화관.html">빈주학생교육문화관</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/덕북대학교_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕북대학교.html">덕북대학교</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/덕북대학교병원_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕북대학교병원.html">덕북대학교병원</a></div>
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
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/보건소.svg"/><a class="text-green-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="가원구보건소.html">가원구보건소</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/보건소.svg"/><a class="text-green-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈성구보건소.html">빈성구보건소</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/보건소.svg"/><a class="text-green-600 hover:underline font-semibold tracking-tighter break-keep leading-tight" href="장기구보건소.html">장기구보건소</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/우정사업본부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주우체국.html">빈주우체국</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/우정사업본부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="서빈주우체국.html">서빈주우체국</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="북빈주세무서.html">북빈주세무서</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주세무서.html">빈주세무서</a></div>
</div>
</td>
</tr>

<!-- 6. 국가행정 / 기타 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">
<div class="mb-1">행정</div>
<div class="mb-1">보훈</div>
<div>기타기관</div>
</th>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex flex-col items-center justify-center gap-y-2">
<div class="flex items-center gap-1">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕빈지방환경청.html">덕빈지방환경청</a>
</div>
<div class="flex items-center gap-1">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="효빈지방고용노동청 빈주지청.html">효빈지방고용노동청 빈주지청</a>
</div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle">
<div class="flex items-center justify-center gap-1.5">
<img class="w-4 h-4 object-contain" src="이미지/svg/대한민국_정부_로고.svg"/>
<a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="덕북북부지방보훈청.html">덕북북부지방보훈청</a>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/코레일_로고.svg'" src="이미지/svg/코레일_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="한국철도공사 덕북본부.html">한국철도공사 덕북본부</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.src='이미지/svg/대한민국_정부_로고.svg'" src="이미지/svg/대한민국_정부_로고.svg"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="국립빈주박물관.html">국립빈주박물관</a></div>
</div>
</td>
</tr>

<!-- 7. 지방공기업 및 산하기관 -->
<tr>
<th class="bg-gray-50 py-3 font-bold text-gray-800 border border-gray-300 align-middle">공기업<br>산하기관</th>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/빈주도시철도공사_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주도시철도공사.html">빈주도시철도공사</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/빈주도시공사_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주도시공사.html">빈주도시공사</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/빈주시시설관리공단_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주시시설관리공단.html">빈주시시설관리공단</a></div>
</div>
</td>
<td class="border border-gray-300 p-2 align-middle" colspan="2">
<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/빈주장기컨벤션센터_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주 장기 컨벤션센터.html">빈주 장기 컨벤션센터</a></div>
<div class="flex items-center gap-1"><img class="w-4 h-4 object-contain" onerror="this.style.display='none'" src="이미지/빈주테크노파크_로고.webp"/><a class="text-[#0275d8] hover:underline font-semibold tracking-tighter break-keep leading-tight" href="빈주테크노파크.html">빈주테크노파크</a></div>
</div>
</td>
</tr>

</tbody>
</table>
</div>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderBinjuOfficesNav);
    } else {
        renderBinjuOfficesNav();
    }
})();