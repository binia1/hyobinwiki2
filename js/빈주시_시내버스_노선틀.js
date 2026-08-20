document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("빈주시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #ffeeaa; color: black;">
<div class="flex items-center gap-2">
<img src="이미지/빈주시.webp" style="height:30px; border-radius:50%; padding:2px; border: 1px solid #ccc;"/>
<span class="text-xl font-bold text-black">빈주시 시내버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">급행</span>
<span class="bus-badge bg-[#003366]">좌석</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#AA33CC]">지선(보라)</span>
<span class="bus-badge bg-[#00c7b1]">특화/지선(청록)</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
<span class="bus-badge bg-[#ffeeaa] text-black" style="border:1px solid #ccc;">공영(베이지)</span>
<span class="bus-badge bg-[#8DC63F]">심야</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-binju-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-binju-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">급행</th>
<td>
<a href="#s-4-1">600</a> <a href="#s-4-1">601</a> <a href="#s-4-1">700</a> <a href="#s-4-1">710</a> <a href="#s-4-1">720</a>
</td>
</tr>
<tr>
<th style="background-color: #003366; color: white;">좌석</th>
<td>
<a href="#s-4-2">800</a> <a href="#s-4-2">900</a> <a href="#s-4-2">덕빈01</a>
</td>
</tr>
<tr>
<th style="background-color: #AA33CC; color: white;">지선 (광역형)</th>
<td>
<a href="#s-4-3">810</a> <a href="#s-4-3">811</a> <a href="#s-4-3">812</a> <a href="#s-4-3">820</a> <a href="#s-4-3">821</a> <a href="#s-4-3">822</a> <a href="#s-4-3">830</a> <a href="#s-4-3">831</a> <a href="#s-4-3">832</a> <a href="#s-4-3">840</a> <a href="#s-4-3">841</a> <a href="#s-4-3">850</a> <a href="#s-4-3">851</a> <a href="#s-4-3">860</a> <a href="#s-4-3">861</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 (100번대)</th>
<td>
<a href="#s-4-4">100</a> <a href="#s-4-4">101</a> <a href="#s-4-4">102</a> <a href="#s-4-4">105</a> <a href="#s-4-4">110</a> <a href="#s-4-4">120</a> <a href="#s-4-4">130</a> <a href="#s-4-4">150</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 (200번대)</th>
<td>
<a href="#s-4-4">200</a> <a href="#s-4-4">201</a> <a href="#s-4-4">202</a> <a href="#s-4-4">204</a> <a href="#s-4-4">210</a> <a href="#s-4-4">220</a> <a href="#s-4-4">230</a> <a href="#s-4-4">240</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 (300~500번대)</th>
<td>
<a href="#s-4-4">300</a> <a href="#s-4-4">301</a> <a href="#s-4-4">302</a> <a href="#s-4-4">305</a> <a href="#s-4-4">310</a> <a href="#s-4-4">320</a> <a href="#s-4-4">400</a> <a href="#s-4-4">405</a> <a href="#s-4-4">411</a> <a href="#s-4-4">420</a> <a href="#s-4-4">430</a> <a href="#s-4-4">450</a> <a href="#s-4-4">500</a> <a href="#s-4-4">501</a> <a href="#s-4-4">502</a> <a href="#s-4-4">503</a> <a href="#s-4-4">510</a>
</td>
</tr>
<tr>
<th style="background-color: #00c7b1; color: white;">지선 / 특화 (청록)</th>
<td>
<span class="bus-badge bg-[#00c7b1] font-normal text-xs mb-1">장기 권역</span> <a href="#s-4-5">장기 01</a> <a href="#s-4-5">장기 02</a> <a href="#s-4-5">장기 03</a> <a href="#s-4-5">장기 04</a> <a href="#s-4-5">장기 05</a> <a href="#s-4-5">장기 06</a> <a href="#s-4-5">장기 07</a> <a href="#s-4-5">장기 08</a> <a href="#s-4-5">장기 09</a> <a href="#s-4-5">장기 10</a> <a href="#s-4-5">장기 11</a> <a href="#s-4-5">장기 12</a> <a href="#s-4-5">장기 13</a> <a href="#s-4-5">장기 14</a> <a href="#s-4-5">장기 15</a> <a href="#s-4-5">장기 16</a>
<br/><span class="bus-badge bg-[#00c7b1] font-normal text-xs mb-1">가원 권역</span> <a href="#s-4-5">가원 01</a> <a href="#s-4-5">가원 02</a> <a href="#s-4-5">가원 03</a> <a href="#s-4-5">가원 04</a> <a href="#s-4-5">가원 05</a> <a href="#s-4-5">가원 07</a> <a href="#s-4-5">가원 08</a> <a href="#s-4-5">가원 13</a> <a href="#s-4-5">가원 16</a>
<br/><span class="bus-badge bg-[#00c7b1] font-normal text-xs mb-1">빈성 권역</span> <a href="#s-4-5">빈성 01</a> <a href="#s-4-5">빈성 02</a> <a href="#s-4-5">빈성 03</a> <a href="#s-4-5">빈성 04</a> <a href="#s-4-5">빈성 05</a> <a href="#s-4-5">빈성 07</a> <a href="#s-4-5">빈성 08</a> <a href="#s-4-5">빈성 09</a> <a href="#s-4-5">빈성 10</a> <a href="#s-4-5">빈성 14</a>
<br/><span class="bus-badge bg-[#00c7b1] font-normal text-xs mb-1">외곽 지선</span> <a href="#s-4-5">송원 01</a> <a href="#s-4-5">송원 02</a> <a href="#s-4-5">오택 01</a>
<br/><span class="bus-badge bg-[#00c7b1] font-normal text-xs">특화 노선</span> <a href="#s-4-5">테크노 01</a> <a href="#s-4-5">산단 02</a>
</td>
</tr>
<tr>
<th style="background-color: #F7E600; color: black;">마을</th>
<td>
<a href="#s-4-6">아논 01</a> <a href="#s-4-6">늑골 01</a> <a href="#s-4-6">서면 01</a> <a href="#s-4-6">노동 01</a> <a href="#s-4-6">여연 02</a>
</td>
</tr>
<tr>
<th style="background-color: #ffeeaa; color: black;">공영 (베이지)</th>
<td>
<a href="#s-4-7">빈성 11</a> <a href="#s-4-7">가원 10</a> <a href="#s-4-7">가원 11</a> <a href="#s-4-7">노동 02</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">심야</th>
<td>
<a href="#s-4-8">N10</a> <a href="#s-4-8">N20</a> <a href="#s-4-8">N30</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});