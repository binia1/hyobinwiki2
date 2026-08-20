document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("낙주시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col" style="background-color: #008855;">
<div class="flex items-center justify-center gap-2">
<img alt="낙주시 로고" class="h-[24px]" src="이미지/낙주시.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">낙주시</span>
<span class="text-sm font-bold">시내버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<div class="bg-gray-100 py-1 text-center border-b border-[#ccc] text-xs">
<span class="inline-block px-2 py-0.5 border border-gray-400 bg-white mr-1 text-[#008855] font-bold">시내</span>
<span class="inline-block px-2 py-0.5 border border-gray-400 bg-gray-200 text-gray-600">BRT</span>
</div>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header" style="background-color: #E60012; color: white;">BRT / 급행</th>
<td class="route-list">
<a class="font-bold text-[#E60012]" href="#b1">B1</a> <a class="font-bold text-[#E60012]" href="#b2">B2</a> | <a class="text-[#E60012]" href="#8000">8000</a> <a class="text-[#E60012]" href="#8100">8100</a> <a class="text-[#E60012]" href="#8200">8200</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #8E44AD; color: white;">광역 / 좌석</th>
<td class="route-list">
<a class="text-[#8E44AD]" href="#900">900</a> <a class="text-[#8E44AD]" href="#901">901</a> <a class="text-[#8E44AD]" href="#902">902</a> <a class="text-[#8E44AD]" href="#910">910</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #0068B7; color: white;">간선버스</th>
<td class="route-list">
<a class="text-[#0068B7]" href="#100">100</a> <a class="text-[#0068B7]" href="#101">101</a> <a class="text-[#0068B7]" href="#102">102</a> <a class="text-[#0068B7]" href="#103">103</a> <a class="text-[#0068B7]" href="#104">104</a> <a class="text-[#0068B7]" href="#105">105</a> <a class="text-[#0068B7]" href="#106">106</a> <a class="text-[#0068B7]" href="#107">107</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (진적/길산)</th>
<td class="route-list">
<a class="text-[#66C133]" href="#201">201</a> <a class="text-[#66C133]" href="#202">202</a> <a class="text-[#66C133]" href="#203">203</a> <a class="text-[#66C133]" href="#204">204</a> <a class="text-[#66C133]" href="#205">205</a> <a class="text-[#66C133]" href="#206">206</a> <a class="text-[#66C133]" href="#207">207</a> <a class="text-[#66C133]" href="#208">208</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (흥림/경영)</th>
<td class="route-list">
<a class="text-[#66C133]" href="#301">301</a> <a class="text-[#66C133]" href="#302">302</a> <a class="text-[#66C133]" href="#303">303</a> <a class="text-[#66C133]" href="#304">304</a> <a class="text-[#66C133]" href="#305">305</a> <a class="text-[#66C133]" href="#306">306</a> <a class="text-[#66C133]" href="#307">307</a> <a class="text-[#66C133]" href="#308">308</a> <a class="text-[#66C133]" href="#309">309</a> <a class="text-[#66C133]" href="#310">310</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (산언/진류)</th>
<td class="route-list">
<a class="text-[#66C133]" href="#401">401</a> <a class="text-[#66C133]" href="#402">402</a> <a class="text-[#66C133]" href="#403">403</a> <a class="text-[#66C133]" href="#404">404</a> <a class="text-[#66C133]" href="#405">405</a> <a class="text-[#66C133]" href="#406">406</a> <a class="text-[#66C133]" href="#407">407</a> <a class="text-[#66C133]" href="#408">408</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (대상/기좌)</th>
<td class="route-list">
<a class="text-[#66C133]" href="#501">501</a> <a class="text-[#66C133]" href="#502">502</a> <a class="text-[#66C133]" href="#503">503</a> <a class="text-[#66C133]" href="#504">504</a> <a class="text-[#66C133]" href="#505">505</a> <a class="text-[#66C133]" href="#506">506</a> <a class="text-[#66C133]" href="#507">507</a> <a class="text-[#66C133]" href="#508">508</a> <a class="text-[#66C133]" href="#509">509</a> <a class="text-[#66C133]" href="#510">510</a> <a class="text-[#66C133]" href="#511">511</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (우색/지기)</th>
<td class="route-list">
<a class="text-[#66C133]" href="#601">601</a> <a class="text-[#66C133]" href="#602">602</a> <a class="text-[#66C133]" href="#603">603</a> <a class="text-[#66C133]" href="#604">604</a> <a class="text-[#66C133]" href="#605">605</a> <a class="text-[#66C133]" href="#606">606</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">순환 / 마을</th>
<td class="route-list bg-gray-50">
<a class="text-gray-700 font-bold" href="#h11">회삼11</a> <a class="text-gray-700 font-bold" href="#h12">회삼12</a> <a class="text-gray-700 font-bold" href="#s21">삼채21</a> <a class="text-gray-700 font-bold" href="#p31">판창31</a> <a class="text-gray-700 font-bold" href="#l41">이달41</a> <a class="text-gray-700 font-bold" href="#t51">토마51</a> <a class="text-gray-700 font-bold" href="#c61">천풍61</a>
</td>
</tr>
</tbody>
</table>
<div class="bg-[#008855] text-white text-xs text-center py-1 font-bold">
                폐선 목록 · 문제점 · 개편 내역
            </div>
</details>
    `;
});