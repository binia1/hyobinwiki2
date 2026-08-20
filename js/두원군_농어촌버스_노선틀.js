document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("두원군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="두원군 로고" class="h-[24px]" src="이미지/두원군.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">두원군</span>
<span class="text-sm font-bold">농어촌버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header" style="background-color: #8E44AD; color: white;">광역/좌석</th>
<td class="route-list">
<a class="font-bold text-[#8E44AD]" href="#900">900</a> <a class="font-bold text-[#8E44AD]" href="#910">910</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #0068B7; color: white;">간선버스</th>
<td class="route-list">
<a class="font-bold text-[#0068B7]" href="#10">10</a> <a class="font-bold text-[#0068B7]" href="#11">11</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (두원/승린 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">두원:</span> <a class="text-[#66C133]" href="#101">101</a> <a class="text-[#66C133]" href="#102">102</a> <a class="text-[#66C133]" href="#103">103</a> <a class="text-[#66C133]" href="#104">104</a> <a class="text-[#66C133]" href="#105">105</a> <a class="text-[#66C133]" href="#106">106</a> <a class="text-[#66C133]" href="#107">107</a> <a class="text-[#66C133]" href="#108">108</a> <a class="text-[#66C133]" href="#109">109</a> <br/>
<span class="text-xs text-gray-500 mr-1">승린:</span> <a class="text-[#66C133]" href="#201">201</a> <a class="text-[#66C133]" href="#202">202</a> <a class="text-[#66C133]" href="#203">203</a> <a class="text-[#66C133]" href="#204">204</a> <a class="text-[#66C133]" href="#205">205</a> <a class="text-[#66C133]" href="#206">206</a> <a class="text-[#66C133]" href="#207">207</a> <a class="text-[#66C133]" href="#208">208</a> <a class="text-[#66C133]" href="#209">209</a> <a class="text-[#66C133]" href="#210">210</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (서운/남 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">서운:</span> <a class="text-[#66C133]" href="#301">301</a> <a class="text-[#66C133]" href="#302">302</a> <a class="text-[#66C133]" href="#303">303</a> <a class="text-[#66C133]" href="#304">304</a> <a class="text-[#66C133]" href="#305">305</a> <a class="text-[#66C133]" href="#306">306</a> <a class="text-[#66C133]" href="#307">307</a> <a class="text-[#66C133]" href="#308">308</a> <a class="text-[#66C133]" href="#309">309</a> <a class="text-[#66C133]" href="#310">310</a> <a class="text-[#66C133]" href="#311">311</a> <a class="text-[#66C133]" href="#312">312</a> <br/>
<span class="text-xs text-gray-500 mr-1">남면:</span> <a class="text-[#66C133]" href="#401">401</a> <a class="text-[#66C133]" href="#402">402</a> <a class="text-[#66C133]" href="#403">403</a> <a class="text-[#66C133]" href="#404">404</a> <a class="text-[#66C133]" href="#405">405</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (신/선문 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">신면:</span> <a class="text-[#66C133]" href="#501">501</a> <a class="text-[#66C133]" href="#502">502</a> <a class="text-[#66C133]" href="#503">503</a> <br/>
<span class="text-xs text-gray-500 mr-1">선문:</span> <a class="text-[#66C133]" href="#601">601</a> <a class="text-[#66C133]" href="#602">602</a> <a class="text-[#66C133]" href="#603">603</a> <a class="text-[#66C133]" href="#604">604</a> <a class="text-[#66C133]" href="#605">605</a> <a class="text-[#66C133]" href="#606">606</a> <a class="text-[#66C133]" href="#607">607</a> <a class="text-[#66C133]" href="#608">608</a> <a class="text-[#66C133]" href="#609">609</a> <a class="text-[#66C133]" href="#610">610</a> <a class="text-[#66C133]" href="#611">611</a> <a class="text-[#66C133]" href="#612">612</a> <a class="text-[#66C133]" href="#613">613</a> <a class="text-[#66C133]" href="#614">614</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (대선/총선 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">대선:</span> <a class="text-[#66C133]" href="#701">701</a> <a class="text-[#66C133]" href="#702">702</a> <a class="text-[#66C133]" href="#703">703</a> <a class="text-[#66C133]" href="#704">704</a> <a class="text-[#66C133]" href="#705">705</a> <a class="text-[#66C133]" href="#706">706</a> <br/>
<span class="text-xs text-gray-500 mr-1">총선:</span> <a class="text-[#66C133]" href="#801">801</a> <a class="text-[#66C133]" href="#802">802</a> <a class="text-[#66C133]" href="#803">803</a> <a class="text-[#66C133]" href="#804">804</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">순환 / 마을</th>
<td class="route-list bg-gray-50">
<a class="text-gray-700 font-bold" href="#m1">두원 1번</a> <a class="text-gray-700 font-bold" href="#m11">승린 11번</a> <a class="text-gray-700 font-bold" href="#m21">대선 21번</a>
</td>
</tr>
</tbody>
</table>
<div class="bg-[var(--wiki-main)] text-white text-xs text-center py-1 font-bold">
                폐선 목록 · 문제점 · 개편 내역
            </div>
</details>
    `;
});