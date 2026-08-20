document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("반양군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #D81C2F; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/반양군.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-white">반양군 농어촌버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#AA33CC]">자체 광역/좌석</span>
<span class="bus-badge bg-[#00b5e2]">간선/급행</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#F7E600] text-black">순환/마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-banyang-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-banyang-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #AA33CC; color: white;">자체 광역 / 좌석</th>
<td>
<a href="#s-4-1">810</a> <a href="#s-4-1">811</a> <a href="#s-4-1">812</a> <a href="#s-4-1">821</a> <a href="#s-4-1">850</a> <a href="#s-4-1">851</a> <a href="#s-4-1">3100</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 / 급행</th>
<td>
<a href="#s-4-2">100</a> <a href="#s-4-2">100-1(급행)</a> <a href="#s-4-2">110</a> <a href="#s-4-2">120</a> <a href="#s-4-2">130</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(200/300/400번대)</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">북부/시전 방면</span> <a href="#s-4-3">201</a> <a href="#s-4-3">202</a> <a href="#s-4-3">203</a> <a href="#s-4-3">204</a> <a href="#s-4-3">205</a> <a href="#s-4-3">206</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">복구/상생 방면</span> <a href="#s-4-3">301</a> <a href="#s-4-3">302</a> <a href="#s-4-3">303</a> <a href="#s-4-3">304</a> <a href="#s-4-3">305</a> <a href="#s-4-3">306</a> <a href="#s-4-3">307</a> <a href="#s-4-3">308</a> <a href="#s-4-3">309</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">수상 방면</span> <a href="#s-4-3">401</a> <a href="#s-4-3">402</a> <a href="#s-4-3">403</a> <a href="#s-4-3">404</a> <a href="#s-4-3">405</a> <a href="#s-4-3">406</a> <a href="#s-4-3">407</a> <a href="#s-4-3">408</a> <a href="#s-4-3">409</a> <a href="#s-4-3">410</a> <a href="#s-4-3">411</a> <a href="#s-4-3">412</a> <a href="#s-4-3">413</a> <a href="#s-4-3">414</a> <a href="#s-4-3">415</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(500/600번대)</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">인와/적판 방면</span> <a href="#s-4-4">501</a> <a href="#s-4-4">502</a> <a href="#s-4-4">503</a> <a href="#s-4-4">504</a> <a href="#s-4-4">505</a> <a href="#s-4-4">506</a> <a href="#s-4-4">507</a> <a href="#s-4-4">508</a> <a href="#s-4-4">509</a> <a href="#s-4-4">510</a> <a href="#s-4-4">511</a> <a href="#s-4-4">512</a> <a href="#s-4-4">513</a> <a href="#s-4-4">514</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">하원/토정 방면</span> <a href="#s-4-4">601</a> <a href="#s-4-4">602</a> <a href="#s-4-4">603</a> <a href="#s-4-4">604</a> <a href="#s-4-4">605</a> <a href="#s-4-4">606</a> <a href="#s-4-4">607</a> <a href="#s-4-4">608</a> <a href="#s-4-4">609</a> <a href="#s-4-4">610</a>
</td>
</tr>
<tr>
<th style="background-color: #F7E600; color: black;">순환 / 마을</th>
<td>
<span class="bus-badge bg-[#F7E600] text-black font-normal text-xs mb-1">반양 순환</span> <a href="#s-4-5">반양 11</a> <a href="#s-4-5">반양 12</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs">삽곡 순환</span> <a href="#s-4-5">삽곡 21</a> <a href="#s-4-5">삽곡 22</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});