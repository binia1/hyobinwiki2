document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("선곡군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #D6D5CA; color: black;">
<div class="flex items-center gap-2">
<img src="이미지/선곡군.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-black">선곡군 농어촌버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">급행</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-seongok-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-seongok-routes">
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
<a href="#s-4-2">100</a> <a href="#s-4-2">110</a> <a href="#s-4-2">120</a> <a href="#s-4-2">130</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(150~700번대)</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">근교 방면 (150번대)</span> <a href="#s-4-3">151</a> <a href="#s-4-3">152</a> <a href="#s-4-3">153</a> <a href="#s-4-3">154</a> <a href="#s-4-3">155</a> <a href="#s-4-3">156</a> <a href="#s-4-3">157</a> <a href="#s-4-3">158</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">하미/효빈 접경 방면</span> <a href="#s-4-3">201</a> <a href="#s-4-3">202</a> <a href="#s-4-3">203</a> <a href="#s-4-3">204</a> <a href="#s-4-3">205</a> <a href="#s-4-3">206</a> <a href="#s-4-3">207</a> <a href="#s-4-3">208</a> <a href="#s-4-3">209</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">귀총/동구 방면</span> <a href="#s-4-3">301</a> <a href="#s-4-3">302</a> <a href="#s-4-3">303</a> <a href="#s-4-3">304</a> <a href="#s-4-3">305</a> <a href="#s-4-3">306</a> <a href="#s-4-3">307</a> <a href="#s-4-3">308</a> <a href="#s-4-3">309</a> <a href="#s-4-3">310</a> <a href="#s-4-3">311</a> <a href="#s-4-3">312</a> <a href="#s-4-3">313</a> <a href="#s-4-3">314</a> <a href="#s-4-3">315</a> <a href="#s-4-3">316</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">해로/우목 방면</span> <a href="#s-4-3">401</a> <a href="#s-4-3">402</a> <a href="#s-4-3">403</a> <a href="#s-4-3">404</a> <a href="#s-4-3">405</a> <a href="#s-4-3">406</a> <a href="#s-4-3">407</a> <a href="#s-4-3">408</a> <a href="#s-4-3">411</a> <a href="#s-4-3">412</a> <a href="#s-4-3">413</a> <a href="#s-4-3">414</a> <a href="#s-4-3">415</a> <a href="#s-4-3">416</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">원전 방면</span> <a href="#s-4-3">501</a> <a href="#s-4-3">502</a> <a href="#s-4-3">503</a> <a href="#s-4-3">504</a> <a href="#s-4-3">505</a> <a href="#s-4-3">506</a> <a href="#s-4-3">507</a> <a href="#s-4-3">508</a> <a href="#s-4-3">509</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">남소 방면</span> <a href="#s-4-3">601</a> <a href="#s-4-3">602</a> <a href="#s-4-3">603</a> <a href="#s-4-3">604</a> <a href="#s-4-3">605</a> <a href="#s-4-3">606</a> <a href="#s-4-3">607</a> <a href="#s-4-3">608</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">인채(도서지역) 방면</span> <a href="#s-4-3">700</a> <a href="#s-4-3">701</a> <a href="#s-4-3">702</a> <a href="#s-4-3">703</a> <a href="#s-4-3">704</a> <a href="#s-4-3">705</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환 / 마을</th>
<td>
<span class="bus-badge bg-[#FFBF00] text-black font-normal text-xs mb-1">순환</span> <a href="#s-4-4">선곡 11</a> <a href="#s-4-4">선곡 12</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs">마을</span> <a href="#s-4-4">하미 21</a> <a href="#s-4-4">인채 71</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});