document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("비천시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="비천시 로고" class="h-[24px]" src="이미지/비천시.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">비천시</span>
<span class="text-sm font-bold">시내버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header" style="background-color: #8E44AD; color: white;">좌석버스</th>
<td class="route-list">
<a class="font-bold text-[#8E44AD]" href="#900">900</a> <a class="font-bold text-[#8E44AD]" href="#910">910</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #0068B7; color: white;">간선버스</th>
<td class="route-list">
<a class="text-[#0068B7]" href="#10">10</a> <a class="text-[#0068B7]" href="#11">11</a> <a class="text-[#0068B7]" href="#12">12</a> <a class="text-[#0068B7]" href="#13">13</a> <a class="text-[#0068B7]" href="#14">14</a> <a class="text-[#0068B7]" href="#15">15</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (벽산/서군/소육)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">벽산:</span> <a class="text-[#66C133]" href="#101">101</a> <a class="text-[#66C133]" href="#102">102</a> <a class="text-[#66C133]" href="#103">103</a> <a class="text-[#66C133]" href="#104">104</a> <a class="text-[#66C133]" href="#105">105</a> <a class="text-[#66C133]" href="#106">106</a> <a class="text-[#66C133]" href="#107">107</a> <a class="text-[#66C133]" href="#108">108</a> <a class="text-[#66C133]" href="#109">109</a> <br/>
<span class="text-xs text-gray-500 mr-1">서군:</span> <a class="text-[#66C133]" href="#201">201</a> <a class="text-[#66C133]" href="#202">202</a> <a class="text-[#66C133]" href="#203">203</a> <a class="text-[#66C133]" href="#204">204</a> <a class="text-[#66C133]" href="#205">205</a> <a class="text-[#66C133]" href="#206">206</a> <a class="text-[#66C133]" href="#207">207</a> <a class="text-[#66C133]" href="#208">208</a> <a class="text-[#66C133]" href="#209">209</a> <a class="text-[#66C133]" href="#210">210</a> <a class="text-[#66C133]" href="#211">211</a> <a class="text-[#66C133]" href="#212">212</a> <a class="text-[#66C133]" href="#213">213</a> <a class="text-[#66C133]" href="#214">214</a> <br/>
<span class="text-xs text-gray-500 mr-1">소육:</span> <a class="text-[#66C133]" href="#301">301</a> <a class="text-[#66C133]" href="#302">302</a> <a class="text-[#66C133]" href="#303">303</a> <a class="text-[#66C133]" href="#304">304</a> <a class="text-[#66C133]" href="#305">305</a> <a class="text-[#66C133]" href="#306">306</a> <a class="text-[#66C133]" href="#307">307</a> <a class="text-[#66C133]" href="#308">308</a> <a class="text-[#66C133]" href="#309">309</a> <a class="text-[#66C133]" href="#310">310</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (수국/괴성)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">수국:</span> <a class="text-[#66C133]" href="#401">401</a> <a class="text-[#66C133]" href="#402">402</a> <a class="text-[#66C133]" href="#403">403</a> <a class="text-[#66C133]" href="#404">404</a> <a class="text-[#66C133]" href="#405">405</a> <a class="text-[#66C133]" href="#406">406</a> <a class="text-[#66C133]" href="#407">407</a> <a class="text-[#66C133]" href="#408">408</a> <br/>
<span class="text-xs text-gray-500 mr-1">괴성:</span> <a class="text-[#66C133]" href="#501">501</a> <a class="text-[#66C133]" href="#502">502</a> <a class="text-[#66C133]" href="#503">503</a> <a class="text-[#66C133]" href="#504">504</a> <a class="text-[#66C133]" href="#505">505</a> <a class="text-[#66C133]" href="#506">506</a> <a class="text-[#66C133]" href="#507">507</a> <a class="text-[#66C133]" href="#508">508</a> <a class="text-[#66C133]" href="#509">509</a> <a class="text-[#66C133]" href="#510">510</a> <a class="text-[#66C133]" href="#511">511</a> <a class="text-[#66C133]" href="#512">512</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (고녕/진격산/구락)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">고녕:</span> <a class="text-[#66C133]" href="#601">601</a> <a class="text-[#66C133]" href="#602">602</a> <a class="text-[#66C133]" href="#603">603</a> <a class="text-[#66C133]" href="#604">604</a> <a class="text-[#66C133]" href="#605">605</a> <a class="text-[#66C133]" href="#606">606</a> <br/>
<span class="text-xs text-gray-500 mr-1">진격산:</span> <a class="text-[#66C133]" href="#701">701</a> <a class="text-[#66C133]" href="#702">702</a> <a class="text-[#66C133]" href="#703">703</a> <br/>
<span class="text-xs text-gray-500 mr-1">구락:</span> <a class="text-[#66C133]" href="#801">801</a> <a class="text-[#66C133]" href="#802">802</a> <a class="text-[#66C133]" href="#803">803</a> <a class="text-[#66C133]" href="#804">804</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">순환/마늘버스</th>
<td class="route-list bg-gray-50">
<span class="text-xs text-gray-500 mr-1">순환:</span> <a class="text-gray-700 font-bold" href="#c01">비천01</a> <a class="text-gray-700 font-bold" href="#c02">비천02</a> | 
                            <span class="text-xs text-gray-500 mr-1">마을:</span> <a class="text-gray-700 font-bold" href="#m11">괴림11</a> <a class="text-gray-700 font-bold" href="#m21">벽산21</a>
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