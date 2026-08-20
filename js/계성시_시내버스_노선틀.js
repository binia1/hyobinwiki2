document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("계성시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #ED7D95; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/계성시.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-white">계성시 시내버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">급행</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선/좌석</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-gyeseong-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-gyeseong-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">급행</th>
<td>
<a href="#s-4-1">900</a> <a href="#s-4-1">910</a> <a href="#s-4-1">920</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선</th>
<td>
<a href="#s-4-2">100</a> <a href="#s-4-2">101</a> <a href="#s-4-2">102</a> <a href="#s-4-2">103</a> <a href="#s-4-2">104</a> <a href="#s-4-2">105</a> <a href="#s-4-2">106</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선/좌석</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">지선 (200번대)</span> <a href="#s-4-3">201</a> <a href="#s-4-3">202</a> <a href="#s-4-3">203</a> <a href="#s-4-3">204</a> <a href="#s-4-3">205</a> <a href="#s-4-3">206</a> <a href="#s-4-3">207</a> <a href="#s-4-3">208</a> <a href="#s-4-3">209</a> <a href="#s-4-3">210</a> <a href="#s-4-3">211</a> <a href="#s-4-3">212</a> <a href="#s-4-3">213</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">지선 (800번대)</span> <a href="#s-4-3">810</a> <a href="#s-4-3">811</a> <a href="#s-4-3">812</a> <a href="#s-4-3">820</a> <a href="#s-4-3">821</a> <a href="#s-4-3">822</a> <a href="#s-4-3">830</a> <a href="#s-4-3">831</a> <a href="#s-4-3">832</a> <a href="#s-4-3">833</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">좌석 (3000번대)</span> <a href="#s-4-3">3100</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환</th>
<td>
<a href="#s-4-4">10</a> <a href="#s-4-4">11</a> <a href="#s-4-4">20</a> <a href="#s-4-4">21</a>
</td>
</tr>
<tr>
<th style="background-color: #F7E600; color: black;">마을</th>
<td>
<span class="bus-badge bg-[#F7E600] text-black font-normal text-xs mb-1">계성</span> <a href="#s-4-5">계성 01</a> <a href="#s-4-5">계성 02</a> <a href="#s-4-5">계성 03</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs mb-1">진백/부남</span> <a href="#s-4-5">진백 01</a> <a href="#s-4-5">진백 02</a> <a href="#s-4-5">부남 01</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs mb-1">천동/호두</span> <a href="#s-4-5">천동 01</a> <a href="#s-4-5">천동 02</a> <a href="#s-4-5">천동 03</a> <a href="#s-4-5">호두 01</a> <a href="#s-4-5">호두 02</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs">마시</span> <a href="#s-4-5">마시 01</a> <a href="#s-4-5">마시 02</a> <a href="#s-4-5">마시 03</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});