document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("저천군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #1D1D1D; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/저천군.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold">저천군 농어촌버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">급행</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-jeocheon-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-jeocheon-routes">
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
<a href="#s-4-2">100</a> <a href="#s-4-2">110</a> <a href="#s-4-2">120</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/>(200/300/400번대)</th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">저천터미널 기점</span>
<a href="#s-4-3">201</a> <a href="#s-4-3">202</a> <a href="#s-4-3">203</a> <a href="#s-4-3">204</a> <a href="#s-4-3">205</a> <a href="#s-4-3">211</a> <a href="#s-4-3">212</a> <a href="#s-4-3">213</a> <a href="#s-4-3">214</a> <a href="#s-4-3">215</a> <a href="#s-4-3">221</a> <a href="#s-4-3">222</a> <a href="#s-4-3">223</a> <a href="#s-4-3">224</a> <a href="#s-4-3">225</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">우구터미널 기점</span>
<a href="#s-4-3">301</a> <a href="#s-4-3">302</a> <a href="#s-4-3">303</a> <a href="#s-4-3">304</a> <a href="#s-4-3">311</a> <a href="#s-4-3">312</a> <a href="#s-4-3">313</a> <a href="#s-4-3">314</a> <a href="#s-4-3">321</a> <a href="#s-4-3">322</a> <a href="#s-4-3">323</a> <a href="#s-4-3">324</a> <a href="#s-4-3">331</a> <a href="#s-4-3">332</a> <a href="#s-4-3">333</a> <a href="#s-4-3">334</a> <a href="#s-4-3">341</a> <a href="#s-4-3">342</a> <a href="#s-4-3">343</a> <a href="#s-4-3">344</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">산백터미널 기점</span>
<a href="#s-4-3">401</a> <a href="#s-4-3">402</a> <a href="#s-4-3">403</a> <a href="#s-4-3">404</a> <a href="#s-4-3">405</a> <a href="#s-4-3">406</a> <a href="#s-4-3">407</a> <a href="#s-4-3">408</a> <a href="#s-4-3">409</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환 / 마을</th>
<td>
<span class="bus-badge bg-[#FFBF00] text-black font-normal text-xs mb-1">순환</span> <a href="#s-4-4">410</a> <a href="#s-4-4">저천 10</a> <a href="#s-4-4">저천 11</a> <a href="#s-4-4">우구 20</a> <a href="#s-4-4">우구 21</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs">마을</span> <a href="#s-4-4">저천 12</a> <a href="#s-4-4">저천 13</a> <a href="#s-4-4">저천 14</a> <a href="#s-4-4">우구 22</a> <a href="#s-4-4">우구 23</a> <a href="#s-4-4">우구 24</a> <a href="#s-4-4">산백 30</a> <a href="#s-4-4">산백 31</a> <a href="#s-4-4">색성 40</a> <a href="#s-4-4">동면 50</a> <a href="#s-4-4">송남 60</a> <a href="#s-4-4">송북 70</a> <a href="#s-4-4">이좌 80</a> <a href="#s-4-4">외산 90</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});