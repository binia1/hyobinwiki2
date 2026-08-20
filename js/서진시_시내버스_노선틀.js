document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("서진시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #9CA5B9; color: black;">
<div class="flex items-center gap-2">
<img src="이미지/서진시.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-black">서진시 시내버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">급행</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-seojin-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-seojin-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">급행</th>
<td>
<a href="#s-4-1">900</a> <a href="#s-4-1">910</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 (100번대)</th>
<td>
<a href="#s-4-2">100</a> <a href="#s-4-2">101</a> <a href="#s-4-2">110</a> <a href="#s-4-2">120</a> <a href="#s-4-2">130</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(200/300/400/500번대)</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">사추 방면</span> <a href="#s-4-3">201</a> <a href="#s-4-3">202</a> <a href="#s-4-3">203</a> <a href="#s-4-3">204</a> <a href="#s-4-3">205</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">남진재동 방면</span> <a href="#s-4-3">301</a> <a href="#s-4-3">302</a> <a href="#s-4-3">303</a> <a href="#s-4-3">304</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">진목/산단 방면</span> <a href="#s-4-3">401</a> <a href="#s-4-3">402</a> <a href="#s-4-3">403</a> <a href="#s-4-3">404</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">구도심 방면</span> <a href="#s-4-3">501</a> <a href="#s-4-3">502</a> <a href="#s-4-3">503</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환 / 마을</th>
<td>
<span class="bus-badge bg-[#FFBF00] text-black font-normal text-xs mb-1">순환</span> <a href="#s-4-4">아은 11</a> <a href="#s-4-4">아은 12</a> <a href="#s-4-4">서진 21</a> <a href="#s-4-4">서진 22</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs">마을</span> <a href="#s-4-4">서진 13</a> <a href="#s-4-4">서목 23</a> <a href="#s-4-4">진목 31</a> <a href="#s-4-4">진목 32</a> <a href="#s-4-4">남진 41</a> <a href="#s-4-4">사추 51</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});