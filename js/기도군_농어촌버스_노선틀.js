document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("기도군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #01B7ED; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/기도군.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-white">기도군 농어촌버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#485EC6]">광역 (효빈)</span>
<span class="bus-badge bg-[#77BBDD] text-black border border-gray-400">광역 (기도)</span>
<span class="bus-badge bg-[#FF5800]">좌석 (효빈)</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#F7E600] text-black">순환/마을/공영</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-gido-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-gido-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #00b5e2; color: white;">간선</th>
<td>
<a href="#s-4-1">10</a> <a href="#s-4-1">22</a> <a href="#s-4-1">50</a> <a href="#s-4-1">100</a> <a href="#s-4-1">101</a> <a href="#s-4-1">102</a> <a href="#s-4-1">300</a> <a href="#s-4-1">301</a> <a href="#s-4-1">333</a> <a href="#s-4-1">333-1</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">150번대</span> <a href="#s-4-2">151</a> <a href="#s-4-2">152</a> <a href="#s-4-2">153</a> <a href="#s-4-2">154</a> <a href="#s-4-2">155</a> <a href="#s-4-2">156</a> <a href="#s-4-2">157</a> <a href="#s-4-2">158</a> <a href="#s-4-2">159</a> <a href="#s-4-2">160</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">200번대</span> <a href="#s-4-2">201</a> <a href="#s-4-2">202</a> <a href="#s-4-2">203</a> <a href="#s-4-2">204</a> <a href="#s-4-2">205</a> <a href="#s-4-2">206</a> <a href="#s-4-2">207</a> <a href="#s-4-2">208</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">300번대</span> <a href="#s-4-2">330</a> <a href="#s-4-2">331</a> <a href="#s-4-2">332</a> <a href="#s-4-2">333(공항)</a> <a href="#s-4-2">334</a> <a href="#s-4-2">335</a> <a href="#s-4-2">336</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">400/500번대</span> <a href="#s-4-2">401</a> <a href="#s-4-2">402</a> <a href="#s-4-2">403</a> <a href="#s-4-2">404</a> <a href="#s-4-2">405</a> <a href="#s-4-2">501</a> <a href="#s-4-2">502</a> <a href="#s-4-2">503</a> <a href="#s-4-2">504</a> <a href="#s-4-2">505</a> <a href="#s-4-2">506</a> <a href="#s-4-2">507</a> <a href="#s-4-2">508</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">600번대</span> <a href="#s-4-2">601</a> <a href="#s-4-2">602</a> <a href="#s-4-2">603</a> <a href="#s-4-2">604</a> <a href="#s-4-2">605</a>
</td>
</tr>
<tr>
<th style="background-color: #F7E600; color: black;">순환/마을/공영</th>
<td>
<span class="bus-badge bg-[#F7E600] text-black font-normal text-xs mb-1">순환/마을</span> <a href="#s-4-3">기도 01</a> <a href="#s-4-3">기도 02</a> <a href="#s-4-3">기도 03</a> <a href="#s-4-3">염곡 11</a> <a href="#s-4-3">염곡 12</a> <a href="#s-4-3">염곡 13</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs border border-gray-400">공영</span> <a href="#s-4-3">주길 21</a> <a href="#s-4-3">하포 31</a> <a href="#s-4-3">진경 41</a> <a href="#s-4-3">삼면 51</a> <a href="#s-4-3">용야 61</a> <a href="#s-4-3">고관 71</a>
</td>
</tr>
<tr>
<th style="background-color: #485EC6; color: white;">광역/좌석</th>
<td>
<span class="bus-badge bg-[#77BBDD] text-black font-normal text-xs mb-1 border border-gray-400">광역 (기도)</span> <a href="#s-4-4">700</a>
<br/><span class="bus-badge bg-[#485EC6] font-normal text-xs mb-1">광역 (효빈)</span> <a class="mr-3" href="#s-4-4">3000</a> <a href="#s-4-4">3000R</a>
<br/><span class="bus-badge bg-[#FF5800] font-normal text-xs">좌석 (효빈)</span> <a class="mr-3" href="#s-4-4">2222</a> <a class="mr-3" href="#s-4-4">3333</a> <a href="#s-4-4">9999</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});