document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("곡천군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="곡천군 로고" class="h-[24px]" src="이미지/곡천군.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">곡천군</span>
<span class="text-sm font-bold">농어촌버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header" style="background-color: #669988; color: white;">간선 (탁한 청록)</th>
<td class="route-list">
<a class="font-bold text-[#669988]" href="#10">10</a> <a class="font-bold text-[#669988]" href="#20">20</a> <a class="font-bold text-[#669988]" href="#30">30</a> <a class="font-bold text-[#669988]" href="#40">40</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (북동/사곡 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">북동:</span> <a class="text-[#66C133]" href="#10-1">10-1</a> <a class="text-[#66C133]" href="#10-2">10-2</a> <a class="text-[#66C133]" href="#10-3">10-3</a> <a class="text-[#66C133]" href="#10-4">10-4</a> <a class="text-[#66C133]" href="#10-5">10-5</a> <a class="text-[#66C133]" href="#10-6">10-6</a> <a class="text-[#66C133]" href="#10-7">10-7</a> <a class="text-[#66C133]" href="#10-8">10-8</a> <a class="text-[#66C133]" href="#10-9">10-9</a> <a class="text-[#66C133]" href="#10-10">10-10</a> <a class="text-[#66C133]" href="#10-11">10-11</a> <a class="text-[#66C133]" href="#10-12">10-12</a> <br/>
<span class="text-xs text-gray-500 mr-1">사곡:</span> <a class="text-[#66C133]" href="#20-1">20-1</a> <a class="text-[#66C133]" href="#20-2">20-2</a> <a class="text-[#66C133]" href="#20-3">20-3</a> <a class="text-[#66C133]" href="#20-4">20-4</a> <a class="text-[#66C133]" href="#20-5">20-5</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (하서/하북 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">하서:</span> <a class="text-[#66C133]" href="#30-1">30-1</a> <a class="text-[#66C133]" href="#30-2">30-2</a> <a class="text-[#66C133]" href="#30-3">30-3</a> <a class="text-[#66C133]" href="#30-4">30-4</a> <a class="text-[#66C133]" href="#30-5">30-5</a> <a class="text-[#66C133]" href="#30-6">30-6</a> <a class="text-[#66C133]" href="#30-7">30-7</a> <a class="text-[#66C133]" href="#30-8">30-8</a> <a class="text-[#66C133]" href="#30-9">30-9</a> <a class="text-[#66C133]" href="#30-10">30-10</a> <a class="text-[#66C133]" href="#30-11">30-11</a> <a class="text-[#66C133]" href="#30-12">30-12</a> <a class="text-[#66C133]" href="#30-13">30-13</a> <a class="text-[#66C133]" href="#30-14">30-14</a> <br/>
<span class="text-xs text-gray-500 mr-1">하북:</span> <a class="text-[#66C133]" href="#40-1">40-1</a> <a class="text-[#66C133]" href="#40-2">40-2</a> <a class="text-[#66C133]" href="#40-3">40-3</a> <a class="text-[#66C133]" href="#40-4">40-4</a> <a class="text-[#66C133]" href="#40-5">40-5</a> <a class="text-[#66C133]" href="#40-6">40-6</a> <a class="text-[#66C133]" href="#40-7">40-7</a> <a class="text-[#66C133]" href="#40-8">40-8</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (용수/중곡/남천)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">용수:</span> <a class="text-[#66C133]" href="#50-1">50-1</a> <a class="text-[#66C133]" href="#50-2">50-2</a> <a class="text-[#66C133]" href="#50-3">50-3</a> <a class="text-[#66C133]" href="#50-4">50-4</a> <br/>
<span class="text-xs text-gray-500 mr-1">중곡:</span> <a class="text-[#66C133]" href="#60-1">60-1</a> <a class="text-[#66C133]" href="#60-2">60-2</a> <a class="text-[#66C133]" href="#60-3">60-3</a> <a class="text-[#66C133]" href="#60-4">60-4</a> <a class="text-[#66C133]" href="#60-5">60-5</a> <a class="text-[#66C133]" href="#60-6">60-6</a> <a class="text-[#66C133]" href="#60-7">60-7</a> <a class="text-[#66C133]" href="#60-8">60-8</a> <a class="text-[#66C133]" href="#60-9">60-9</a> <br/>
<span class="text-xs text-gray-500 mr-1">남천:</span> <a class="text-[#66C133]" href="#70-1">70-1</a> <a class="text-[#66C133]" href="#70-2">70-2</a> <a class="text-[#66C133]" href="#70-3">70-3</a> <a class="text-[#66C133]" href="#70-4">70-4</a> <a class="text-[#66C133]" href="#70-5">70-5</a> <a class="text-[#66C133]" href="#70-6">70-6</a> <a class="text-[#66C133]" href="#70-7">70-7</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">순환 / 마을</th>
<td class="route-list bg-gray-50">
<a class="text-gray-700 font-bold" href="#m1">곡천 1번</a> <a class="text-gray-700 font-bold" href="#m2">곡천 2번</a> <a class="text-gray-700 font-bold" href="#m3">북동 3번</a> <a class="text-gray-700 font-bold" href="#m4">의료 4번</a>
</td>
</tr>
</tbody>
</table>
<div class="bg-[var(--wiki-main)] text-white text-xs text-center py-1 font-bold">
                폐선 목록 · 문제점 · 개편 내역
            </div>
</details>
    `;
});