document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("군천시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #0284c7; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/군천시.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-white">군천시 시내버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">광역/급행</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-guncheon-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-guncheon-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">광역/급행</th>
<td>
<a href="#s-4-1">900</a> <a href="#s-4-1">910</a> <a href="#s-4-1">920</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선</th>
<td>
<a href="#s-4-2">100</a> <a href="#s-4-2">110</a> <a href="#s-4-2">120</a> <a href="#s-4-2">130</a> <a href="#s-4-2">140</a> <a href="#s-4-2">150</a> <a href="#s-4-2">160</a> <a href="#s-4-2">170</a> <a href="#s-4-2">180</a> <a href="#s-4-2">200</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">신득 방면</span> <a href="#s-4-3">50</a> <a href="#s-4-3">51</a> <a href="#s-4-3">52</a> <a href="#s-4-3">53</a> <a href="#s-4-3">54</a> <a href="#s-4-3">55</a> <a href="#s-4-3">56</a> <a href="#s-4-3">57</a> <a href="#s-4-3">701</a> <a href="#s-4-3">702</a> <a href="#s-4-3">703</a> <a href="#s-4-3">704</a> <a href="#s-4-3">705</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">한동 방면</span> <a href="#s-4-3">201</a> <a href="#s-4-3">202</a> <a href="#s-4-3">203</a> <a href="#s-4-3">204</a> <a href="#s-4-3">205</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">오조 방면</span> <a href="#s-4-3">301</a> <a href="#s-4-3">302</a> <a href="#s-4-3">303</a> <a href="#s-4-3">304</a> <a href="#s-4-3">305</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">남강 방면</span> <a href="#s-4-3">401</a> <a href="#s-4-3">402</a> <a href="#s-4-3">403</a> <a href="#s-4-3">404</a> <a href="#s-4-3">405</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">남오 방면</span> <a href="#s-4-3">501</a> <a href="#s-4-3">502</a> <a href="#s-4-3">503</a> <a href="#s-4-3">504</a> <a href="#s-4-3">505</a> <a href="#s-4-3">506</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs">을차 방면</span> <a href="#s-4-3">601</a> <a href="#s-4-3">602</a> <a href="#s-4-3">603</a> <a href="#s-4-3">604</a> <a href="#s-4-3">605</a> <a href="#s-4-3">606</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환 / 마을</th>
<td>
<span class="bus-badge bg-[#FFBF00] text-black font-normal text-xs mb-1">순환 / 마을</span>
<a href="#s-4-4">애음 11</a> <a href="#s-4-4">애음 12</a> <a href="#s-4-4">남민 21</a> <a href="#s-4-4">현해 31</a> <a href="#s-4-4">고옥 41</a> <a href="#s-4-4">호택 51</a> <a href="#s-4-4">군천 61</a> <a href="#s-4-4">신득 71</a> <a href="#s-4-4">산단 81</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});