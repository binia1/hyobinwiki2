document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("모제군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #A664A0; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/모제군.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-white">모제군 농어촌버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">급행</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#F7E600] text-black">순환/마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-moje-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-moje-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">급행</th>
<td>
<a href="#s-4-1">900</a> <a href="#s-4-1">901</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 (100번대)</th>
<td>
<a href="#s-4-2">100</a> <a href="#s-4-2">100-1</a> <a href="#s-4-2">101</a> <a href="#s-4-2">102</a> <a href="#s-4-2">103</a> <a href="#s-4-2">104</a> <a href="#s-4-2">105</a> <a href="#s-4-2">106</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(200/300/400/500/600번대)</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">청해면 방면</span> <a href="#s-4-3">201</a> <a href="#s-4-3">201-1</a> <a href="#s-4-3">202</a> <a href="#s-4-3">202-1</a> <a href="#s-4-3">203</a> <a href="#s-4-3">204</a> <a href="#s-4-3">205</a> <a href="#s-4-3">206</a> <a href="#s-4-3">207</a> <a href="#s-4-3">208</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">장어면 방면</span> <a href="#s-4-3">301</a> <a href="#s-4-3">301-1</a> <a href="#s-4-3">302</a> <a href="#s-4-3">302-1</a> <a href="#s-4-3">303</a> <a href="#s-4-3">304</a> <a href="#s-4-3">305</a> <a href="#s-4-3">306</a> <a href="#s-4-3">307</a> <a href="#s-4-3">308</a> <a href="#s-4-3">309</a> <a href="#s-4-3">310</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">양광면 방면</span> <a href="#s-4-3">401</a> <a href="#s-4-3">401-1</a> <a href="#s-4-3">402</a> <a href="#s-4-3">402-1</a> <a href="#s-4-3">403</a> <a href="#s-4-3">404</a> <a href="#s-4-3">405</a> <a href="#s-4-3">406</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">괴천면 방면</span> <a href="#s-4-3">501</a> <a href="#s-4-3">501-1</a> <a href="#s-4-3">502</a> <a href="#s-4-3">502-1</a> <a href="#s-4-3">503</a> <a href="#s-4-3">504</a> <a href="#s-4-3">505</a> <a href="#s-4-3">506</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">약궁면(산단) 방면</span> <a href="#s-4-3">601</a> <a href="#s-4-3">601-1</a> <a href="#s-4-3">602</a> <a href="#s-4-3">603</a> <a href="#s-4-3">604</a> <a href="#s-4-3">605</a> <a href="#s-4-3">606</a> <a href="#s-4-3">607</a> <a href="#s-4-3">608</a> <a href="#s-4-3">609</a>
</td>
</tr>
<tr>
<th style="background-color: #F7E600; color: black;">순환 / 마을</th>
<td>
<span class="bus-badge bg-[#F7E600] text-black font-normal text-xs mb-1">모제 순환</span> <a href="#s-4-4">모제 11</a> <a href="#s-4-4">모제 12</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs">약궁 마을</span> <a href="#s-4-4">약궁 01</a> <a href="#s-4-4">약궁 02</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});