document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("매성시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="매성시 로고" class="h-[24px]" src="이미지/매성시.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">매성시</span>
<span class="text-sm font-bold">시내버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<div class="bg-gray-100 py-1 text-center border-b border-[#ccc] text-xs">
<span class="inline-block px-2 py-0.5 border border-gray-400 bg-white mr-1 text-[var(--wiki-main)] font-bold">시내</span>
<span class="inline-block px-2 py-0.5 border border-gray-400 bg-gray-200 text-gray-600">마을</span>
</div>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header">광역/간선</th>
<td class="route-list">
<span class="text-xs text-gray-500 font-bold mr-2">[광역]</span>
<a href="#1">1</a> <a href="#2">2</a> <a href="#3">3</a><br/>
<span class="text-xs text-gray-500 font-bold mr-2">[간선]</span>
<a href="#10">10</a> <a href="#11">11</a> <a href="#12">12</a> <a href="#13">13</a> <a href="#14">14</a> <a href="#15">15</a>
</td>
</tr>
<tr>
<th class="zone-header">지선버스<br/><span class="text-xs font-normal text-white">(20번대~30번대)</span></th>
<td class="route-list">
<span class="text-xs text-gray-500 font-bold mr-2">[근암동/초중학교 셔틀]</span>
<a href="#21">21</a> <a href="#22">22</a> <a href="#23">23</a> <a href="#24">24</a> <a href="#25">25</a> <a href="#26">26</a><br/>
<span class="text-xs text-gray-500 font-bold mr-2">[구도심/매성2동 학원가]</span>
<a href="#31">31</a> <a href="#32">32</a> <a href="#33">33</a> <a href="#34">34</a> <a href="#35">35</a> <a href="#36">36</a>
</td>
</tr>
<tr>
<th class="zone-header">지선버스<br/><span class="text-xs font-normal text-white">(40번대~60번대)</span></th>
<td class="route-list">
<span class="text-xs text-gray-500 font-bold mr-2">[개서동/식곡동/물류단지]</span>
<a href="#41">41</a> <a href="#42">42</a> <a href="#43">43</a> <a href="#44">44</a> <a href="#45">45</a> <a href="#46">46</a><br/>
<span class="text-xs text-gray-500 font-bold mr-2">[상강동/조천동/규래동]</span>
<a href="#51">51</a> <a href="#52">52</a> <a href="#53">53</a> <a href="#54">54</a> <a href="#55">55</a> <a href="#56">56</a> <a href="#57">57</a> <a href="#58">58</a> <a href="#59">59</a> <a href="#60">60</a> <a href="#61">61</a>
</td>
</tr>
<tr>
<th class="zone-header">순환/마을</th>
<td class="route-list bg-gray-50">
<a class="text-gray-700 font-bold" href="#101">101</a> <a class="text-gray-700 font-bold" href="#102">102</a> <a class="text-gray-700 font-bold" href="#111">111</a> <a class="text-gray-700 font-bold" href="#121">121</a>
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