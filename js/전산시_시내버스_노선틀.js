document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("전산시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #FF7F27; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/전산시.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold">전산시 시내버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">급행</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-jeonsan-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-jeonsan-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">급행</th>
<td>
<a href="#s-4-1">900</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 (100번대)</th>
<td>
<a href="#s-4-2">100</a> <a href="#s-4-2">101</a> <a href="#s-4-2">102</a> <a href="#s-4-2">103</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(200/300/400/500번대)</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">고진/백목 방면</span>
<a href="#s-4-3">201</a> <a href="#s-4-3">202</a> <a href="#s-4-3">203</a> <a href="#s-4-3">204</a> <a href="#s-4-3">205</a> <a href="#s-4-3">206</a> <a href="#s-4-3">207</a> <a href="#s-4-3">208</a> <a href="#s-4-3">209</a> <a href="#s-4-3">210</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">송강/수판 방면</span>
<a href="#s-4-3">301</a> <a href="#s-4-3">302</a> <a href="#s-4-3">303</a> <a href="#s-4-3">304</a> <a href="#s-4-3">305</a> <a href="#s-4-3">306</a> <a href="#s-4-3">307</a> <a href="#s-4-3">308</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">상면/하면 방면</span>
<a href="#s-4-3">401</a> <a href="#s-4-3">402</a> <a href="#s-4-3">403</a> <a href="#s-4-3">404</a> <a href="#s-4-3">405</a> <a href="#s-4-3">406</a> <a href="#s-4-3">407</a> <a href="#s-4-3">408</a> <a href="#s-4-3">409</a> <a href="#s-4-3">410</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">신산/산단 방면</span>
<a href="#s-4-3">501</a> <a href="#s-4-3">502</a> <a href="#s-4-3">503</a> <a href="#s-4-3">504</a> <a href="#s-4-3">505</a> <a href="#s-4-3">506</a> <a href="#s-4-3">507</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환 / 마을</th>
<td>
<span class="bus-badge bg-[#FFBF00] text-black font-normal text-xs mb-1">순환</span> <a href="#s-4-4">10</a> <a href="#s-4-4">11</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs">마을</span> <a href="#s-4-4">31</a> <a href="#s-4-4">32</a> <a href="#s-4-4">33</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});