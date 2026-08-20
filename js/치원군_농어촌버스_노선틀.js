document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("치원군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #aa7799; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/치원군.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-white">치원군 농어촌버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#485EC6]">광역 (효빈/약산)</span>
<span class="bus-badge bg-[#FF5800]">좌석 (효빈/약산)</span>
<span class="bus-badge bg-[#D81C2F]">급행좌석 (약산)</span>
<span class="bus-badge bg-[#BB0033]">간/지선/급행 (치원)</span>
<span class="bus-badge bg-[#003366]">좌석 (치원)</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환/마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-chiwon-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-chiwon-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #BB0033; color: white;">치원 면허<br/>(간선/지선/급행/심야)</th>
<td>
<a href="#s-5-1">100</a> <a href="#s-5-1">101</a> <a href="#s-5-1">102</a> <a href="#s-5-1">103</a> <a href="#s-5-1">104</a> <a href="#s-5-1">105</a> <a href="#s-5-1">106</a> <a href="#s-5-1">107</a> <a href="#s-5-1">108(급행)</a> <a href="#s-5-1">109(심야)</a> <a href="#s-5-1">200</a> <a href="#s-5-1">201</a> <a href="#s-5-1">202</a> <a href="#s-5-1">203</a> <a href="#s-5-1">204</a> <a href="#s-5-1">205</a> <a href="#s-5-1">206</a> <a href="#s-5-1">207</a> <a href="#s-5-1">208</a> <a href="#s-5-1">209</a> <a href="#s-5-1">210</a> <a href="#s-5-1">211</a> <a href="#s-5-1">212(광역)</a> <a href="#s-5-1">300</a> <a href="#s-5-1">301</a> <a href="#s-5-1">302</a> <a href="#s-5-1">303</a> <a href="#s-5-1">304</a> <a href="#s-5-1">305</a> <a href="#s-5-1">306</a> <a href="#s-5-1">307</a> <a href="#s-5-1">308</a> <a href="#s-5-1">309</a> <a href="#s-5-1">310</a> <a href="#s-5-1">311</a> <a href="#s-5-1">312(특화)</a> <a href="#s-5-1">400</a> <a href="#s-5-1">401</a> <a href="#s-5-1">402</a> <a href="#s-5-1">403</a> <a href="#s-5-1">404</a> <a href="#s-5-1">405</a> <a href="#s-5-1">406</a> <a href="#s-5-1">407</a> <a href="#s-5-1">408</a> <a href="#s-5-1">409</a> <a href="#s-5-1">500</a> <a href="#s-5-1">501</a> <a href="#s-5-1">502</a> <a href="#s-5-1">503</a> <a href="#s-5-1">504</a> <a href="#s-5-1">505</a> <a href="#s-5-1">506</a> <a href="#s-5-1">507</a> <a href="#s-5-1">508</a> <a href="#s-5-1">509</a> <a href="#s-5-1">600</a> <a href="#s-5-1">601</a> <a href="#s-5-1">602</a> <a href="#s-5-1">603</a> <a href="#s-5-1">604</a> <a href="#s-5-1">605</a> <a href="#s-5-1">606</a> <a href="#s-5-1">607</a> <a href="#s-5-1">608</a> <a href="#s-5-1">701</a> <a href="#s-5-1">702</a> <a href="#s-5-1">703</a> <a href="#s-5-1">704</a> <a href="#s-5-1">705</a> <a href="#s-5-1">706(특화)</a> <a href="#s-5-1">707</a>
</td>
</tr>
<tr>
<th style="background-color: #003366; color: white;">치원 면허<br/>(좌석)</th>
<td>
<a href="#s-5-2">510</a> <a href="#s-5-2">870</a> <a href="#s-5-2">871</a> <a href="#s-5-2">872</a> <a href="#s-5-2">873</a> <a href="#s-5-2">874</a> <a href="#s-5-2">875</a> <a href="#s-5-2">876</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환/마을</th>
<td>
<a href="#s-5-3">치원 11</a> <a href="#s-5-3">치원 12</a> <a href="#s-5-3">후등 01</a> <a href="#s-5-3">후등 02</a>
</td>
</tr>
<tr>
<th style="background-color: #485EC6; color: white;">타 지자체 면허<br/>(광역/좌석/급행/지선)</th>
<td>
<span class="bus-badge bg-[#485EC6] font-normal text-xs mb-1">효빈 광역</span> <a class="mr-3" href="#s-5-4">7000</a> <a class="mr-3" href="#s-5-4">9000</a>
<br/><span class="bus-badge bg-[#FF5800] font-normal text-xs mb-1">효빈 좌석</span> <a href="#s-5-4">7777</a>
<br/><span class="bus-badge bg-[#D81C2F] font-normal text-xs mb-1">약산 급좌</span> <a href="#s-5-4">1000</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">약산 지선</span> <a class="mr-3" href="#s-5-4">440</a> <a class="mr-3" href="#s-5-4">445</a> <a class="mr-3" href="#s-5-4">480</a> <a class="mr-3" href="#s-5-4">481</a> <a class="mr-3" href="#s-5-4">482</a> <a class="mr-3" href="#s-5-4">485</a> <a class="mr-3" href="#s-5-4">490</a> <a class="mr-3" href="#s-5-4">495</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});