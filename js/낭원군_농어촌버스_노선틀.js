document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("낭원군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #485EC6; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/낭원군.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-white">낭원군 농어촌버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">광역/좌석</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-nangwon-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-nangwon-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">광역 / 좌석</th>
<td>
<a href="#s-4-1">900</a> <a href="#s-4-1">900-1</a> <a href="#s-4-1">910</a> <a href="#s-4-1">920</a> <a href="#s-4-1">930</a> <a href="#s-4-1">930-1</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선</th>
<td>
<a href="#s-4-2">100</a> <a href="#s-4-2">100-1</a> <a href="#s-4-2">101</a> <a href="#s-4-2">101-1</a> <a href="#s-4-2">102</a> <a href="#s-4-2">110</a> <a href="#s-4-2">120</a> <a href="#s-4-2">130</a> <a href="#s-4-2">140</a> <a href="#s-4-2">150</a> <a href="#s-4-2">160</a> <a href="#s-4-2">170</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(200번대)</th>
<td>
<a href="#s-4-3">201</a> <a href="#s-4-3">201-1</a> <a href="#s-4-3">201-2</a> <a href="#s-4-3">201-3</a> <a href="#s-4-3">202</a> <a href="#s-4-3">202-1</a> <a href="#s-4-3">202-2</a> <a href="#s-4-3">203</a> <a href="#s-4-3">203-1</a> <a href="#s-4-3">203-2</a> <a href="#s-4-3">203-3</a> <a href="#s-4-3">203-4</a> <a href="#s-4-3">204</a> <a href="#s-4-3">204-1</a> <a href="#s-4-3">204-2</a> <a href="#s-4-3">205</a> <a href="#s-4-3">205-1</a> <a href="#s-4-3">205-2</a> <a href="#s-4-3">205-3</a> <a href="#s-4-3">206</a> <a href="#s-4-3">206-1</a> <a href="#s-4-3">206-2</a> <a href="#s-4-3">207</a> <a href="#s-4-3">207-1</a> <a href="#s-4-3">207-2</a> <a href="#s-4-3">207-3</a> <a href="#s-4-3">207-4</a> <a href="#s-4-3">208</a> <a href="#s-4-3">208-1</a> <a href="#s-4-3">208-2</a> <a href="#s-4-3">209</a> <a href="#s-4-3">209-1</a> <a href="#s-4-3">209-2</a> <a href="#s-4-3">209-3</a> <a href="#s-4-3">210</a> <a href="#s-4-3">210-1</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(300번대)</th>
<td>
<a href="#s-4-4">301</a> <a href="#s-4-4">301-1</a> <a href="#s-4-4">301-2</a> <a href="#s-4-4">302</a> <a href="#s-4-4">302-1</a> <a href="#s-4-4">302-2</a> <a href="#s-4-4">302-3</a> <a href="#s-4-4">303</a> <a href="#s-4-4">303-1</a> <a href="#s-4-4">303-2</a> <a href="#s-4-4">303-3</a> <a href="#s-4-4">304</a> <a href="#s-4-4">304-1</a> <a href="#s-4-4">304-2</a> <a href="#s-4-4">305</a> <a href="#s-4-4">305-1</a> <a href="#s-4-4">305-2</a> <a href="#s-4-4">305-3</a> <a href="#s-4-4">306</a> <a href="#s-4-4">306-1</a> <a href="#s-4-4">306-2</a> <a href="#s-4-4">307</a> <a href="#s-4-4">307-1</a> <a href="#s-4-4">307-2</a> <a href="#s-4-4">308</a> <a href="#s-4-4">308-1</a> <a href="#s-4-4">308-2</a> <a href="#s-4-4">308-3</a> <a href="#s-4-4">308-4</a> <a href="#s-4-4">309</a> <a href="#s-4-4">309-1</a> <a href="#s-4-4">309-2</a> <a href="#s-4-4">310</a> <a href="#s-4-4">310-1</a> <a href="#s-4-4">310-2</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(400/500번대)</th>
<td>
<a href="#s-4-5">401</a> <a href="#s-4-5">401-1</a> <a href="#s-4-5">401-2</a> <a href="#s-4-5">402</a> <a href="#s-4-5">402-1</a> <a href="#s-4-5">403</a> <a href="#s-4-5">403-1</a> <a href="#s-4-5">403-2</a> <a href="#s-4-5">403-3</a> <a href="#s-4-5">404</a> <a href="#s-4-5">404-1</a> <a href="#s-4-5">404-2</a> <a href="#s-4-5">405</a> <a href="#s-4-5">405-1</a> <a href="#s-4-5">405-2</a> <a href="#s-4-5">405-3</a> <a href="#s-4-5">406</a> <a href="#s-4-5">406-1</a> <a href="#s-4-5">406-2</a> <a href="#s-4-5">406-3</a> <a href="#s-4-5">407</a> <a href="#s-4-5">407-1</a> <a href="#s-4-5">407-2</a> <a href="#s-4-5">408</a> <a href="#s-4-5">408-1</a> <a href="#s-4-5">408-2</a> <a href="#s-4-5">409</a> <a href="#s-4-5">409-1</a> <a href="#s-4-5">409-2</a> <a href="#s-4-5">410</a> <a href="#s-4-5">410-1</a>
<br/><a href="#s-4-6">501</a> <a href="#s-4-6">501-1</a> <a href="#s-4-6">501-2</a> <a href="#s-4-6">502</a> <a href="#s-4-6">502-1</a> <a href="#s-4-6">503</a> <a href="#s-4-6">503-1</a> <a href="#s-4-6">503-2</a> <a href="#s-4-6">504</a> <a href="#s-4-6">504-1</a> <a href="#s-4-6">504-2</a> <a href="#s-4-6">505</a> <a href="#s-4-6">505-1</a> <a href="#s-4-6">505-2</a> <a href="#s-4-6">506</a> <a href="#s-4-6">506-1</a> <a href="#s-4-6">506-2</a> <a href="#s-4-6">506-3</a> <a href="#s-4-6">507</a> <a href="#s-4-6">507-1</a> <a href="#s-4-6">508</a> <a href="#s-4-6">508-1</a> <a href="#s-4-6">508-2</a> <a href="#s-4-6">509</a> <a href="#s-4-6">509-1</a> <a href="#s-4-6">510</a> <a href="#s-4-6">510-1</a> <a href="#s-4-6">510-2</a> <a href="#s-4-6">511</a> <a href="#s-4-6">511-1</a> <a href="#s-4-6">511-2</a> <a href="#s-4-6">512</a> <a href="#s-4-6">512-1</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환 / 마을</th>
<td>
<span class="bus-badge bg-[#FFBF00] text-black font-normal text-xs mb-1">순환</span> <a href="#s-4-7">낭원 11</a> <a href="#s-4-7">낭원 12</a> <a href="#s-4-7">낭원 13</a> <a href="#s-4-7">낭원 14</a> <a href="#s-4-7">전포 21</a> <a href="#s-4-7">전포 22</a> <a href="#s-4-7">전포 23</a> <a href="#s-4-7">판주 31</a> <a href="#s-4-7">판주 32</a> <a href="#s-4-7">토진 41</a> <a href="#s-4-7">토진 42</a> <a href="#s-4-7">내덕 01</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs">마을</span> <a href="#s-4-8">명향 01</a> <a href="#s-4-8">명향 02</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});