document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("석창군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="석창군 로고" class="h-[24px]" src="이미지/석창군.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">석창군</span>
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
<a class="font-bold text-[#8E44AD]" href="#900">900</a> <a class="font-bold text-[#8E44AD]" href="#910">910</a> <a class="font-bold text-[#8E44AD]" href="#920">920</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #0068B7; color: white;">간선버스</th>
<td class="route-list">
<a class="text-[#0068B7]" href="#10">10</a> <a class="text-[#0068B7]" href="#11">11</a> <a class="text-[#0068B7]" href="#12">12</a> <a class="text-[#0068B7]" href="#13">13</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (석창/대흥 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">석창:</span> <a class="text-[#66C133]" href="#101">101</a> <a class="text-[#66C133]" href="#102">102</a> <a class="text-[#66C133]" href="#103">103</a> <a class="text-[#66C133]" href="#104">104</a> <a class="text-[#66C133]" href="#105">105</a> <a class="text-[#66C133]" href="#106">106</a> <a class="text-[#66C133]" href="#107">107</a> <br/>
<span class="text-xs text-gray-500 mr-1">대흥:</span> <a class="text-[#66C133]" href="#108">108</a> <a class="text-[#66C133]" href="#109">109</a> <a class="text-[#66C133]" href="#110">110</a> <a class="text-[#66C133]" href="#111">111</a> <a class="text-[#66C133]" href="#112">112</a> <a class="text-[#66C133]" href="#113">113</a> <a class="text-[#66C133]" href="#114">114</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (읍악/오안 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">읍악:</span> <a class="text-[#66C133]" href="#201">201</a> <a class="text-[#66C133]" href="#202">202</a> <a class="text-[#66C133]" href="#203">203</a> <a class="text-[#66C133]" href="#204">204</a> <br/>
<span class="text-xs text-gray-500 mr-1">오안:</span> <a class="text-[#66C133]" href="#205">205</a> <a class="text-[#66C133]" href="#206">206</a> <a class="text-[#66C133]" href="#207">207</a> <br/>
<span class="text-xs text-gray-500 mr-1">읍악/오안 교차:</span> <a class="text-[#66C133]" href="#208">208</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (조취/명성 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">조취:</span> <a class="text-[#66C133]" href="#301">301</a> <a class="text-[#66C133]" href="#302">302</a> <a class="text-[#66C133]" href="#303">303</a> <a class="text-[#66C133]" href="#304">304</a> <br/>
<span class="text-xs text-gray-500 mr-1">명성:</span> <a class="text-[#66C133]" href="#305">305</a> <a class="text-[#66C133]" href="#306">306</a> <a class="text-[#66C133]" href="#307">307</a> <a class="text-[#66C133]" href="#308">308</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (외진/언정/고산 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">외진:</span> <a class="text-[#66C133]" href="#401">401</a> <a class="text-[#66C133]" href="#402">402</a> <a class="text-[#66C133]" href="#403">403</a> <a class="text-[#66C133]" href="#404">404</a> <br/>
<span class="text-xs text-gray-500 mr-1">언정:</span> <a class="text-[#66C133]" href="#405">405</a> <a class="text-[#66C133]" href="#406">406</a> <a class="text-[#66C133]" href="#407">407</a> <a class="text-[#66C133]" href="#408">408</a> <br/>
<span class="text-xs text-gray-500 mr-1">고산:</span> <a class="text-[#66C133]" href="#501">501</a> <a class="text-[#66C133]" href="#502">502</a> <a class="text-[#66C133]" href="#503">503</a> <a class="text-[#66C133]" href="#504">504</a> <a class="text-[#66C133]" href="#505">505</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (교차 권역)</th>
<td class="route-list">
<a class="text-[#66C133]" href="#601">601</a> <a class="text-[#66C133]" href="#602">602</a> <a class="text-[#66C133]" href="#603">603</a> <a class="text-[#66C133]" href="#604">604</a> <a class="text-[#66C133]" href="#605">605</a> <a class="text-[#66C133]" href="#606">606</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">순환 / 마을</th>
<td class="route-list bg-gray-50">
<a class="text-gray-700 font-bold" href="#m1">석창 01</a> <a class="text-gray-700 font-bold" href="#m2">석창 02</a> <a class="text-gray-700 font-bold" href="#m11">데이터 11</a> <a class="text-gray-700 font-bold" href="#m21">대흥 21</a> <a class="text-gray-700 font-bold" href="#m22">대흥 22</a> <a class="text-gray-700 font-bold" href="#m31">물류 31</a> <a class="text-gray-700 font-bold" href="#m41">외진 41</a> <a class="text-gray-700 font-bold" href="#m51">조취 51</a>
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