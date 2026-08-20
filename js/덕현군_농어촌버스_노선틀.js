document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("덕현군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #FF5800; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/덕현군.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-white">덕현군 농어촌버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">광역</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#F7E600] text-black">순환/마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-deokhyeon-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-deokhyeon-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">광역</th>
<td>
<a href="#s-4-1">900</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 (100번대)</th>
<td>
<a href="#s-4-2">100</a> <a href="#s-4-2">110</a> <a href="#s-4-2">120</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(200/300/400/500번대)</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">화원면 방면</span> <a href="#s-4-3">201</a> <a href="#s-4-3">202</a> <a href="#s-4-3">203</a> <a href="#s-4-3">204</a> <a href="#s-4-3">205</a> <a href="#s-4-3">206</a> <a href="#s-4-3">207</a> <a href="#s-4-3">208</a> <a href="#s-4-3">209</a> <a href="#s-4-3">210</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">북견면 방면</span> <a href="#s-4-3">301</a> <a href="#s-4-3">302</a> <a href="#s-4-3">303</a> <a href="#s-4-3">304</a> <a href="#s-4-3">305</a> <a href="#s-4-3">306</a> <a href="#s-4-3">307</a> <a href="#s-4-3">308</a> <a href="#s-4-3">309</a> <a href="#s-4-3">310</a> <a href="#s-4-3">311</a> <a href="#s-4-3">312</a> <a href="#s-4-3">313</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">흑성면 방면</span> <a href="#s-4-3">401</a> <a href="#s-4-3">402</a> <a href="#s-4-3">403</a> <a href="#s-4-3">404</a> <a href="#s-4-3">405</a> <a href="#s-4-3">406</a> <a href="#s-4-3">407</a> <a href="#s-4-3">408</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">망정면 방면</span> <a href="#s-4-3">501</a> <a href="#s-4-3">502</a> <a href="#s-4-3">503</a> <a href="#s-4-3">504</a> <a href="#s-4-3">505</a> <a href="#s-4-3">506</a> <a href="#s-4-3">507</a> <a href="#s-4-3">508</a> <a href="#s-4-3">509</a> <a href="#s-4-3">510</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">덕현읍 외곽</span> <a href="#s-4-3">601</a> <a href="#s-4-3">602</a> <a href="#s-4-3">603</a> <a href="#s-4-3">604</a> <a href="#s-4-3">605</a> <a href="#s-4-3">606</a> <a href="#s-4-3">607</a> <a href="#s-4-3">608</a> <a href="#s-4-3">609</a> <a href="#s-4-3">610</a> <a href="#s-4-3">611</a> <a href="#s-4-3">612</a> <a href="#s-4-3">613</a> <a href="#s-4-3">614</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">부진읍 외곽</span> <a href="#s-4-3">701</a> <a href="#s-4-3">702</a> <a href="#s-4-3">703</a> <a href="#s-4-3">704</a> <a href="#s-4-3">705</a>
</td>
</tr>
<tr>
<th style="background-color: #F7E600; color: black;">순환 / 마을</th>
<td>
<span class="bus-badge bg-[#F7E600] text-black font-normal text-xs mb-1">부진 순환</span> <a href="#s-4-4">부진 11</a> <a href="#s-4-4">부진 12</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs">덕현 순환</span> <a href="#s-4-4">덕현 21</a> <a href="#s-4-4">덕현 22</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});