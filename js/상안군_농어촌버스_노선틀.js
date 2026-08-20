document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("상안군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #84C36E; color: black;">
<div class="flex items-center gap-2">
<img src="이미지/상안군.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-black">상안군 농어촌버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">좌석</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#63CF68]">공영</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-sangan-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-sangan-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">좌석</th>
<td>
<a href="#s-4-1">990</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 (100번대)</th>
<td>
<a href="#s-4-2">100</a> <a href="#s-4-2">101</a> <a href="#s-4-2">110</a> <a href="#s-4-2">120</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(200/300/400/500번대)</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">태서/낙산 방면</span> <a href="#s-4-3">201</a> <a href="#s-4-3">202</a> <a href="#s-4-3">203</a> <a href="#s-4-3">204</a> <a href="#s-4-3">205</a> <a href="#s-4-3">206</a> <a href="#s-4-3">207</a> <a href="#s-4-3">211</a> <a href="#s-4-3">212</a> <a href="#s-4-3">213</a> <a href="#s-4-3">214</a> <a href="#s-4-3">215</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">패총 방면</span> <a href="#s-4-3">301</a> <a href="#s-4-3">302</a> <a href="#s-4-3">303</a> <a href="#s-4-3">304</a> <a href="#s-4-3">305</a> <a href="#s-4-3">306</a> <a href="#s-4-3">307</a> <a href="#s-4-3">308</a> <a href="#s-4-3">309</a> <a href="#s-4-3">310</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">승정/사류 방면</span> <a href="#s-4-3">401</a> <a href="#s-4-3">402</a> <a href="#s-4-3">403</a> <a href="#s-4-3">404</a> <a href="#s-4-3">405</a> <a href="#s-4-3">406</a> <a href="#s-4-3">407</a> <a href="#s-4-3">408</a> <a href="#s-4-3">409</a> <a href="#s-4-3">411</a> <a href="#s-4-3">412</a> <a href="#s-4-3">413</a> <a href="#s-4-3">414</a> <a href="#s-4-3">415</a> <a href="#s-4-3">416</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">일채/이부 방면</span> <a href="#s-4-3">501</a> <a href="#s-4-3">502</a> <a href="#s-4-3">503</a> <a href="#s-4-3">504</a> <a href="#s-4-3">505</a> <a href="#s-4-3">506</a> <a href="#s-4-3">507</a> <a href="#s-4-3">511</a> <a href="#s-4-3">512</a> <a href="#s-4-3">513</a>
</td>
</tr>
<tr>
<th style="background-color: #63CF68; color: black;">공영버스</th>
<td>
<span class="bus-badge bg-[#63CF68] text-black font-normal text-xs mb-1">상안읍 순환</span> <a href="#s-4-4">상안 10</a> <a href="#s-4-4">상안 11</a> <a href="#s-4-4">상안 12</a> <a href="#s-4-4">상안 13</a> <a href="#s-4-4">상안 14</a>
<br/><span class="bus-badge bg-[#63CF68] text-black font-normal text-xs mb-1">이부면 순환</span> <a href="#s-4-4">이부 20</a> <a href="#s-4-4">이부 21</a> <a href="#s-4-4">이부 22</a>
<br/><span class="bus-badge bg-[#63CF68] text-black font-normal text-xs">읍면 순환</span> <a href="#s-4-4">패총 31</a> <a href="#s-4-4">태서 41</a> <a href="#s-4-4">승정 51</a> <a href="#s-4-4">사류 61</a> <a href="#s-4-4">일채 71</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});