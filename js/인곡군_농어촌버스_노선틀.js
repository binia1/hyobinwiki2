document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("인곡군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="인곡군 로고" class="h-[24px]" src="이미지/인곡군.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">인곡군</span>
<span class="text-sm font-bold">농어촌버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header" style="background-color: #8E44AD; color: white;">광역/좌석</th>
<td class="route-list">
<a class="font-bold text-[#8E44AD]" href="#8">8</a> <a class="font-bold text-[#8E44AD]" href="#9">9</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #0068B7; color: white;">간선버스</th>
<td class="route-list">
<a class="text-[#0068B7]" href="#1">1</a> <a class="text-[#0068B7]" href="#2">2</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (인곡읍/거남면)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">인곡:</span> <a class="text-[#66C133]" href="#11">11</a> <a class="text-[#66C133]" href="#12">12</a> <a class="text-[#66C133]" href="#13">13</a> <a class="text-[#66C133]" href="#14">14</a> <a class="text-[#66C133]" href="#15">15</a> <a class="text-[#66C133]" href="#16">16</a> <a class="text-[#66C133]" href="#17">17</a> <a class="text-[#66C133]" href="#18">18</a> <a class="text-[#66C133]" href="#19">19</a> <a class="text-[#66C133]" href="#20">20</a> <a class="text-[#66C133]" href="#21">21</a> <br/>
<span class="text-xs text-gray-500 mr-1">거남:</span> <a class="text-[#66C133]" href="#31">31</a> <a class="text-[#66C133]" href="#32">32</a> <a class="text-[#66C133]" href="#33">33</a> <a class="text-[#66C133]" href="#34">34</a> <a class="text-[#66C133]" href="#35">35</a> <a class="text-[#66C133]" href="#36">36</a> <a class="text-[#66C133]" href="#37">37</a> <a class="text-[#66C133]" href="#38">38</a> <a class="text-[#66C133]" href="#39">39</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (속류면)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">속류:</span> <a class="text-[#66C133]" href="#301">301</a> <a class="text-[#66C133]" href="#302">302</a> <a class="text-[#66C133]" href="#303">303</a> <a class="text-[#66C133]" href="#304">304</a> <a class="text-[#66C133]" href="#305">305</a> <a class="text-[#66C133]" href="#306">306</a> <a class="text-[#66C133]" href="#307">307</a> <a class="text-[#66C133]" href="#308">308</a> <a class="text-[#66C133]" href="#309">309</a> <a class="text-[#8DC63F]" href="#310">310</a> <a class="text-[#66C133]" href="#311">311</a> <a class="text-[#66C133]" href="#312">312</a> <a class="text-[#66C133]" href="#313">313</a> <a class="text-[#66C133]" href="#314">314</a> <a class="text-[#66C133]" href="#315">315</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (대건/시오면)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">대건:</span> <a class="text-[#66C133]" href="#41">41</a> <a class="text-[#66C133]" href="#42">42</a> <a class="text-[#66C133]" href="#43">43</a> <a class="text-[#66C133]" href="#44">44</a> <a class="text-[#66C133]" href="#45">45</a> <a class="text-[#66C133]" href="#46">46</a> <a class="text-[#66C133]" href="#47">47</a> <br/>
<span class="text-xs text-gray-500 mr-1">시오:</span> <a class="text-[#66C133]" href="#501">501</a> <a class="text-[#66C133]" href="#502">502</a> <a class="text-[#66C133]" href="#503">503</a> <a class="text-[#66C133]" href="#504">504</a> <a class="text-[#66C133]" href="#505">505</a> <a class="text-[#66C133]" href="#506">506</a> <a class="text-[#66C133]" href="#507">507</a> <a class="text-[#66C133]" href="#508">508</a> <a class="text-[#66C133]" href="#509">509</a> <a class="text-[#66C133]" href="#510">510</a> <a class="text-[#66C133]" href="#511">511</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (낭염/고신면)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">낭염:</span> <a class="text-[#66C133]" href="#61">61</a> <a class="text-[#66C133]" href="#62">62</a> <a class="text-[#66C133]" href="#63">63</a> <a class="text-[#66C133]" href="#64">64</a> <a class="text-[#66C133]" href="#65">65</a> <a class="text-[#66C133]" href="#66">66</a> <br/>
<span class="text-xs text-gray-500 mr-1">고신:</span> <a class="text-[#66C133]" href="#71">71</a> <a class="text-[#66C133]" href="#72">72</a> <a class="text-[#66C133]" href="#73">73</a> <a class="text-[#66C133]" href="#74">74</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">마을버스</th>
<td class="route-list bg-gray-50">
<a class="text-gray-700 font-bold" href="#m1">인곡 1번</a> <a class="text-gray-700 font-bold" href="#m2">인곡 2번</a> <a class="text-gray-700 font-bold" href="#m3">대건 1번</a> <a class="text-gray-700 font-bold" href="#m4">거남 1번</a>
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