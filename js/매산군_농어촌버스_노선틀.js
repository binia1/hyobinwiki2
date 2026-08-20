document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("매산군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="매산군 로고" class="h-[24px]" src="이미지/매산군.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">매산군</span>
<span class="text-sm font-bold">농어촌버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<div class="bg-gray-100 py-1 text-center border-b border-[#ccc] text-xs">
<span class="inline-block px-2 py-0.5 border border-gray-400 bg-white mr-1 text-[var(--wiki-link)] font-bold">군내</span>
<span class="inline-block px-2 py-0.5 border border-gray-400 bg-gray-200 text-gray-600">마을</span>
</div>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header">광역/간선</th>
<td class="route-list">
<span class="text-xs text-gray-500 font-bold mr-2">[광역]</span>
<a href="#9000" style="color: #8E44AD;">9000</a> <a href="#9100" style="color: #8E44AD;">9100</a> <a href="#9200" style="color: #8E44AD;">9200</a><br/>
<span class="text-xs text-gray-500 font-bold mr-2">[간선]</span>
<a href="#1000" style="color: #0068B7;">1000</a> <a href="#1001" style="color: #0068B7;">1001</a> <a href="#1100" style="color: #0068B7;">1100</a> <a href="#1101" style="color: #0068B7;">1101</a> <a href="#1200" style="color: #0068B7;">1200</a>
</td>
</tr>
<tr>
<th class="zone-header">지선 (신운/이율)</th>
<td class="route-list">
<a href="#2001" style="color: #66C133;">2001</a> <a href="#2002" style="color: #66C133;">2002</a> <a href="#2003" style="color: #66C133;">2003</a> <a href="#2004" style="color: #66C133;">2004</a> <a href="#2005" style="color: #66C133;">2005</a> <a href="#2006" style="color: #66C133;">2006</a> <a href="#2007" style="color: #66C133;">2007</a> <a href="#2008" style="color: #66C133;">2008</a> <a href="#2009" style="color: #66C133;">2009</a> <a href="#2010" style="color: #66C133;">2010</a>
</td>
</tr>
<tr>
<th class="zone-header">지선 (율주/조건)</th>
<td class="route-list">
<a href="#3001" style="color: #66C133;">3001</a> <a href="#3002" style="color: #66C133;">3002</a> <a href="#3003" style="color: #66C133;">3003</a> <a href="#3004" style="color: #66C133;">3004</a> <a href="#3005" style="color: #66C133;">3005</a> <a href="#3006" style="color: #66C133;">3006</a> <a href="#3007" style="color: #66C133;">3007</a> <a href="#3008" style="color: #66C133;">3008</a> <a href="#3009" style="color: #66C133;">3009</a> <a href="#3010" style="color: #66C133;">3010</a> <a href="#3011" style="color: #66C133;">3011</a> <a href="#3012" style="color: #66C133;">3012</a> <a href="#3013" style="color: #66C133;">3013</a> <a href="#3014" style="color: #66C133;">3014</a> <a href="#3015" style="color: #66C133;">3015</a> <a href="#3016" style="color: #66C133;">3016</a> <a href="#3017" style="color: #66C133;">3017</a> <a href="#3018" style="color: #66C133;">3018</a>
</td>
</tr>
<tr>
<th class="zone-header">지선 (육산/우곡)</th>
<td class="route-list">
<span class="text-xs text-gray-500 font-bold mr-2">[육산면]</span>
<a href="#4001" style="color: #66C133;">4001</a> <a href="#4002" style="color: #66C133;">4002</a> <a href="#4003" style="color: #66C133;">4003</a> <a href="#4004" style="color: #66C133;">4004</a> <a href="#4005" style="color: #66C133;">4005</a><br/>
<span class="text-xs text-gray-500 font-bold mr-2">[우곡면]</span>
<a href="#5001" style="color: #66C133;">5001</a> <a href="#5002" style="color: #66C133;">5002</a> <a href="#5003" style="color: #66C133;">5003</a> <a href="#5004" style="color: #66C133;">5004</a> <a href="#5005" style="color: #66C133;">5005</a> <a href="#5006" style="color: #66C133;">5006</a> <a href="#5007" style="color: #66C133;">5007</a> <a href="#5008" style="color: #66C133;">5008</a> <a href="#5009" style="color: #66C133;">5009</a> <a href="#5010" style="color: #66C133;">5010</a> <a href="#5011" style="color: #66C133;">5011</a> <a href="#5012" style="color: #66C133;">5012</a> <a href="#5013" style="color: #66C133;">5013</a>
</td>
</tr>
<tr>
<th class="zone-header">지선 (덕신/채산/군선)</th>
<td class="route-list">
<span class="text-xs text-gray-500 font-bold mr-2">[덕신면]</span>
<a href="#6001" style="color: #66C133;">6001</a> <a href="#6002" style="color: #66C133;">6002</a> <a href="#6003" style="color: #66C133;">6003</a> <a href="#6004" style="color: #66C133;">6004</a> <a href="#6005" style="color: #66C133;">6005</a> <a href="#6006" style="color: #66C133;">6006</a> <a href="#6007" style="color: #66C133;">6007</a> <a href="#6008" style="color: #66C133;">6008</a><br/>
<span class="text-xs text-gray-500 font-bold mr-2">[채산면]</span>
<a href="#7001" style="color: #66C133;">7001</a> <a href="#7002" style="color: #66C133;">7002</a> <a href="#7003" style="color: #66C133;">7003</a> <a href="#7004" style="color: #66C133;">7004</a> <a href="#7005" style="color: #66C133;">7005</a> <a href="#7006" style="color: #66C133;">7006</a> <a href="#7007" style="color: #66C133;">7007</a> <a href="#7008" style="color: #66C133;">7008</a> <a href="#7009" style="color: #66C133;">7009</a> <a href="#7010" style="color: #66C133;">7010</a> <a href="#7011" style="color: #66C133;">7011</a> <a href="#7012" style="color: #66C133;">7012</a> <a href="#7013" style="color: #66C133;">7013</a> <a href="#7014" style="color: #66C133;">7014</a> <a href="#7015" style="color: #66C133;">7015</a><br/>
<span class="text-xs text-gray-500 font-bold mr-2">[군선면]</span>
<a href="#8001" style="color: #66C133;">8001</a> <a href="#8002" style="color: #66C133;">8002</a> <a href="#8003" style="color: #66C133;">8003</a> <a href="#8004" style="color: #66C133;">8004</a> <a href="#8005" style="color: #66C133;">8005</a> <a href="#8006" style="color: #66C133;">8006</a> <a href="#8007" style="color: #66C133;">8007</a> <a href="#8008" style="color: #66C133;">8008</a> <a href="#8009" style="color: #66C133;">8009</a> <a href="#8010" style="color: #66C133;">8010</a>
</td>
</tr>
<tr>
<th class="zone-header">순환/마을</th>
<td class="route-list bg-gray-50">
<a class="text-gray-700 font-bold" href="#m11">대현 11</a> <a class="text-gray-700 font-bold" href="#m12">대현 12</a> <a class="text-gray-700 font-bold" href="#m21">신운 21</a> <a class="text-gray-700 font-bold" href="#m22">신운 22</a> <a class="text-gray-700 font-bold" href="#m31">율주 31</a> <a class="text-gray-700 font-bold" href="#m32">율주 32</a>
</td>
</tr>
</tbody>
</table>
<div class="bg-[var(--wiki-link)] text-white text-xs text-center py-1 font-bold">
                폐선 목록 · 문제점 · 개편 내역
            </div>
</details>
    `;
});