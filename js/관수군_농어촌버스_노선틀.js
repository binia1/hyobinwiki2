document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("관수군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="관수군 로고" src="이미지/관수군.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">관수군</span>
<span class="text-sm font-bold">농어촌버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header" style="background-color: #8E44AD; color: white;">좌석버스</th>
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
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (관수/북원 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">관수:</span> <a class="text-[#66C133]" href="#101">101</a> <a class="text-[#66C133]" href="#102">102</a> <a class="text-[#66C133]" href="#103">103</a> <a class="text-[#66C133]" href="#104">104</a> <a class="text-[#66C133]" href="#105">105</a> <a class="text-[#66C133]" href="#106">106</a> <a class="text-[#66C133]" href="#107">107</a> <a class="text-[#66C133]" href="#108">108</a> <a class="text-[#66C133]" href="#109">109</a> <br/>
<span class="text-xs text-gray-500 mr-1">북원:</span> <a class="text-[#66C133]" href="#151">151</a> <a class="text-[#66C133]" href="#152">152</a> <a class="text-[#66C133]" href="#153">153</a> <a class="text-[#66C133]" href="#154">154</a> <a class="text-[#66C133]" href="#155">155</a> <a class="text-[#66C133]" href="#156">156</a> <a class="text-[#66C133]" href="#157">157</a> <a class="text-[#66C133]" href="#158">158</a> <a class="text-[#66C133]" href="#159">159</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (금담/금진/여원)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">금담:</span> <a class="text-[#66C133]" href="#201">201</a> <a class="text-[#66C133]" href="#202">202</a> <a class="text-[#66C133]" href="#203">203</a> <a class="text-[#66C133]" href="#204">204</a> <a class="text-[#66C133]" href="#205">205</a> <a class="text-[#66C133]" href="#206">206</a> <a class="text-[#66C133]" href="#207">207</a> <a class="text-[#66C133]" href="#208">208</a> <a class="text-[#66C133]" href="#209">209</a> <a class="text-[#66C133]" href="#210">210</a> <a class="text-[#66C133]" href="#211">211</a> <br/>
<span class="text-xs text-gray-500 mr-1">금진:</span> <a class="text-[#66C133]" href="#251">251</a> <a class="text-[#66C133]" href="#252">252</a> <a class="text-[#66C133]" href="#253">253</a> <a class="text-[#66C133]" href="#254">254</a> <a class="text-[#66C133]" href="#255">255</a> <a class="text-[#66C133]" href="#256">256</a> <a class="text-[#66C133]" href="#257">257</a> <a class="text-[#66C133]" href="#258">258</a> <a class="text-[#66C133]" href="#259">259</a> <br/>
<span class="text-xs text-gray-500 mr-1">여원:</span> <a class="text-[#66C133]" href="#301">301</a> <a class="text-[#66C133]" href="#302">302</a> <a class="text-[#66C133]" href="#303">303</a> <a class="text-[#66C133]" href="#304">304</a> <a class="text-[#66C133]" href="#305">305</a> <a class="text-[#66C133]" href="#306">306</a> <a class="text-[#66C133]" href="#307">307</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (극산/황강/실주)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">극산:</span> <a class="text-[#66C133]" href="#351">351</a> <a class="text-[#66C133]" href="#352">352</a> <a class="text-[#66C133]" href="#353">353</a> <a class="text-[#66C133]" href="#354">354</a> <a class="text-[#66C133]" href="#355">355</a> <a class="text-[#66C133]" href="#356">356</a> <br/>
<span class="text-xs text-gray-500 mr-1">황강:</span> <a class="text-[#66C133]" href="#401">401</a> <a class="text-[#66C133]" href="#402">402</a> <a class="text-[#66C133]" href="#403">403</a> <a class="text-[#66C133]" href="#404">404</a> <a class="text-[#66C133]" href="#405">405</a> <a class="text-[#66C133]" href="#406">406</a> <a class="text-[#66C133]" href="#407">407</a> <a class="text-[#66C133]" href="#408">408</a> <br/>
<span class="text-xs text-gray-500 mr-1">실주:</span> <a class="text-[#66C133]" href="#451">451</a> <a class="text-[#66C133]" href="#452">452</a> <a class="text-[#66C133]" href="#453">453</a> <a class="text-[#66C133]" href="#454">454</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (조원/원단)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">조원:</span> <a class="text-[#66C133]" href="#501">501</a> <a class="text-[#66C133]" href="#502">502</a> <a class="text-[#66C133]" href="#503">503</a> <a class="text-[#66C133]" href="#504">504</a> <a class="text-[#66C133]" href="#505">505</a> <br/>
<span class="text-xs text-gray-500 mr-1">원단:</span> <a class="text-[#66C133]" href="#551">551</a> <a class="text-[#66C133]" href="#552">552</a> <a class="text-[#66C133]" href="#553">553</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">마을버스</th>
<td class="route-list bg-gray-50">
<span class="text-xs text-gray-500 mr-1">관수:</span> <a class="text-gray-700 font-bold" href="#m01">관수 01</a> <a class="text-gray-700 font-bold" href="#m02">관수 02</a> <a class="text-gray-700 font-bold" href="#m03">관수 03</a> <br/>
<span class="text-xs text-gray-500 mr-1">북원:</span> <a class="text-gray-700 font-bold" href="#b11">북원 11</a> <a class="text-gray-700 font-bold" href="#b12">북원 12</a> <a class="text-gray-700 font-bold" href="#b13">북원 13</a>
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