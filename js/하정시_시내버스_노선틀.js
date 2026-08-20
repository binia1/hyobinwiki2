document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("하정시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="하정시 로고" class="h-[24px]" src="이미지/하정시.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">하정시</span>
<span class="text-sm font-bold">시내버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<div class="bg-gray-100 py-1 text-center border-b border-[#ccc] text-xs">
<span class="inline-block px-2 py-0.5 border border-gray-400 bg-white mr-1 text-[var(--wiki-main)] font-bold">시내</span>
<span class="inline-block px-2 py-0.5 border border-gray-400 bg-gray-200 text-gray-600">마을</span>
</div>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header">좌석/간선</th>
<td class="route-list">
<a href="#900">900</a> <a href="#910">910</a> <a href="#10">10</a> <a href="#11">11</a> <a href="#12">12</a> <a href="#13">13</a> <a href="#14">14</a>
</td>
</tr>
<tr>
<th class="zone-header">하정/해성<br/>권역 지선</th>
<td class="route-list">
<a href="#101">101</a> <a href="#102">102</a> <a href="#103">103</a> <a href="#104">104</a> <a href="#105">105</a> <a href="#106">106</a> <a href="#107">107</a> <a href="#108">108</a> <a href="#109">109</a> <a href="#110">110</a><br/>
<a href="#111">111</a> <a href="#112">112</a> <a href="#113">113</a> <a href="#114">114</a> <a href="#115">115</a> <a href="#116">116</a> <a href="#117">117</a> <a href="#118">118</a> <a href="#119">119</a>
</td>
</tr>
<tr>
<th class="zone-header">별당읍<br/>권역 지선</th>
<td class="route-list">
<a href="#201">201</a> <a href="#202">202</a> <a href="#203">203</a> <a href="#204">204</a> <a href="#205">205</a> <a href="#206">206</a> <a href="#207">207</a> <a href="#208">208</a> <a href="#209">209</a> <a href="#210">210</a><br/>
<a href="#211">211</a>
</td>
</tr>
<tr>
<th class="zone-header">구주면<br/>권역 지선</th>
<td class="route-list">
<a href="#301">301</a> <a href="#302">302</a> <a href="#303">303</a> <a href="#304">304</a> <a href="#305">305</a> <a href="#306">306</a>
</td>
</tr>
<tr>
<th class="zone-header">팔봉면<br/>권역 지선</th>
<td class="route-list">
<a href="#401">401</a> <a href="#402">402</a> <a href="#403">403</a> <a href="#404">404</a> <a href="#405">405</a> <a href="#406">406</a> <a href="#407">407</a> <a href="#408">408</a> <a href="#409">409</a> <a href="#410">410</a>
</td>
</tr>
<tr>
<th class="zone-header">기타 면<br/>권역 지선</th>
<td class="route-list">
<span class="text-xs text-gray-500 font-bold mr-2">[등전/귀선]</span>
<a href="#501">501</a> <a href="#502">502</a> <a href="#503">503</a> <a href="#504">504</a> <a href="#511">511</a> <a href="#512">512</a> <a href="#513">513</a> <a href="#514">514</a><br/>
<span class="text-xs text-gray-500 font-bold mr-2">[산동면]</span>
<a href="#601">601</a> <a href="#602">602</a> <a href="#603">603</a> <a href="#604">604</a> <a href="#605">605</a> <a href="#606">606</a> <a href="#607">607</a> <a href="#608">608</a><br/>
<span class="text-xs text-gray-500 font-bold mr-2">[산서면]</span>
<a href="#701">701</a> <a href="#702">702</a> <a href="#703">703</a> <a href="#704">704</a> <a href="#705">705</a> <a href="#706">706</a> <a href="#707">707</a> <a href="#708">708</a> <a href="#709">709</a> <a href="#710">710</a><br/>
<a href="#711">711</a> <a href="#712">712</a> <a href="#713">713</a> <a href="#714">714</a> <a href="#715">715</a> <a href="#716">716</a> <a href="#717">717</a> <a href="#718">718</a> <a href="#719">719</a>
</td>
</tr>
<tr>
<th class="zone-header">순환/마을</th>
<td class="route-list bg-gray-50">
<a class="text-gray-700 font-bold" href="#h01">하정01</a> <a class="text-gray-700 font-bold" href="#h02">하정02</a> <a class="text-gray-700 font-bold" href="#e11">교육11</a> <a class="text-gray-700 font-bold" href="#s21">산서21</a>
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