document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("서해시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #37B484; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/서해시.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-white">서해시 시내버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">광역/급행/좌석/공항</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-seohae-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-seohae-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">급행/좌석/기타</th>
<td>
<span class="bus-badge bg-[#990033] font-normal text-xs mb-1">광역</span> <a href="#s-5-1">900</a>
<br/><span class="bus-badge bg-[#990033] font-normal text-xs mb-1">공항</span> <a href="#s-5-1">910</a>
<br/><span class="bus-badge bg-[#990033] font-normal text-xs mb-1">급행</span> <a href="#s-5-1">920</a> <a href="#s-5-1">930</a>
<br/><span class="bus-badge bg-[#990033] font-normal text-xs">좌석</span> <a href="#s-5-1">940</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선</th>
<td>
<a href="#s-5-2">100</a> <a href="#s-5-2">101</a> <a href="#s-5-2">102</a> <a href="#s-5-2">103</a> <a href="#s-5-2">104</a> <a href="#s-5-2">105</a> <a href="#s-5-2">106</a> <a href="#s-5-2">107</a> <a href="#s-5-2">108</a> <a href="#s-5-2">109</a> <a href="#s-5-2">110</a> <a href="#s-5-2">111</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">도심 밀착 (200번대)</span> <a href="#s-5-3">201</a> <a href="#s-5-3">202</a> <a href="#s-5-3">203</a> <a href="#s-5-3">204</a> <a href="#s-5-3">205</a> <a href="#s-5-3">206</a> <a href="#s-5-3">207</a> <a href="#s-5-3">208</a> <a href="#s-5-3">209</a> <a href="#s-5-3">210</a> <a href="#s-5-3">211</a> <a href="#s-5-3">212</a> <a href="#s-5-3">213</a> <a href="#s-5-3">214</a> <a href="#s-5-3">215</a> <a href="#s-5-3">216</a> <a href="#s-5-3">217</a> <a href="#s-5-3">218</a> <a href="#s-5-3">219</a> <a href="#s-5-3">220</a> <a href="#s-5-3">221</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">원변읍 연계 (300번대)</span> <a href="#s-5-3">301</a> <a href="#s-5-3">302</a> <a href="#s-5-3">303</a> <a href="#s-5-3">304</a> <a href="#s-5-3">305</a> <a href="#s-5-3">306</a> <a href="#s-5-3">307</a> <a href="#s-5-3">308</a> <a href="#s-5-3">309</a> <a href="#s-5-3">310</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">번전읍 연계 (400번대)</span> <a href="#s-5-3">401</a> <a href="#s-5-3">402</a> <a href="#s-5-3">403</a> <a href="#s-5-3">404</a> <a href="#s-5-3">405</a> <a href="#s-5-3">406</a> <a href="#s-5-3">407</a> <a href="#s-5-3">408</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">압일읍 연계 (500번대)</span> <a href="#s-5-3">501</a> <a href="#s-5-3">502</a> <a href="#s-5-3">503</a> <a href="#s-5-3">504</a> <a href="#s-5-3">505</a> <a href="#s-5-3">506</a> <a href="#s-5-3">507</a> <a href="#s-5-3">508</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">문진읍 연계 (600번대)</span> <a href="#s-5-3">601</a> <a href="#s-5-3">602</a> <a href="#s-5-3">603</a> <a href="#s-5-3">604</a> <a href="#s-5-3">605</a> <a href="#s-5-3">606</a> <a href="#s-5-3">607</a> <a href="#s-5-3">608</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">우곡/해안/지중/북야 (700~800번대)</span> <a href="#s-5-3">701</a> <a href="#s-5-3">702</a> <a href="#s-5-3">703</a> <a href="#s-5-3">704</a> <a href="#s-5-3">705</a> <a href="#s-5-3">801</a> <a href="#s-5-3">802</a> <a href="#s-5-3">803</a> <a href="#s-5-3">804</a> <a href="#s-5-3">805</a> <a href="#s-5-3">851</a> <a href="#s-5-3">852</a> <a href="#s-5-3">853</a> <a href="#s-5-3">854</a> <a href="#s-5-3">855</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환</th>
<td>
<a href="#s-5-4">서해 11</a> <a href="#s-5-4">서해 12</a> <a href="#s-5-4">우궁 21</a> <a href="#s-5-4">우궁 22</a> <a href="#s-5-4">방부 31</a>
</td>
</tr>
<tr>
<th style="background-color: #F7E600; color: black;">마을</th>
<td>
<span class="bus-badge bg-[#F7E600] text-black font-normal text-xs mb-1">읍면 셔틀</span> <a href="#s-5-5">원변 01</a> <a href="#s-5-5">원변 02</a> <a href="#s-5-5">원변 03</a> <a href="#s-5-5">번전 01</a> <a href="#s-5-5">번전 02</a> <a href="#s-5-5">압일 01</a> <a href="#s-5-5">압일 02</a> <a href="#s-5-5">문진 01</a> <a href="#s-5-5">문진 02</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs mb-1">도심 골목</span> <a href="#s-5-5">신항 01</a> <a href="#s-5-5">신항 02</a> <a href="#s-5-5">통마 01</a> <a href="#s-5-5">통마 02</a> <a href="#s-5-5">해안 01</a> <a href="#s-5-5">해안 02</a> <a href="#s-5-5">상포 01</a> <a href="#s-5-5">상포 02</a> <a href="#s-5-5">서앙 01</a> <a href="#s-5-5">서앙 02</a> <a href="#s-5-5">무원 01</a> <a href="#s-5-5">좌산 01</a> <a href="#s-5-5">포구 01</a> <a href="#s-5-5">포구 02</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});