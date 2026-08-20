document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("분주군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="분주군 로고" class="h-[24px]" src="이미지/분주군.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">분주군</span>
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
<a class="font-bold text-[#8E44AD]" href="#z1">좌석1</a> <a class="font-bold text-[#8E44AD]" href="#z2">좌석2</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #0068B7; color: white;">간선버스</th>
<td class="route-list">
<a class="text-[#0068B7]" href="#b1">본선1</a> <a class="text-[#0068B7]" href="#b2">본선2</a> <a class="text-[#0068B7]" href="#b3">본선3</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (신안/원구 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">신안:</span> <a class="text-[#66C133]" href="#11">11</a> <a class="text-[#66C133]" href="#12">12</a> <a class="text-[#66C133]" href="#13">13</a> <a class="text-[#66C133]" href="#14">14</a> <a class="text-[#66C133]" href="#15">15</a> <a class="text-[#66C133]" href="#16">16</a> <a class="text-[#66C133]" href="#17">17</a> <a class="text-[#66C133]" href="#18">18</a> <br/>
<span class="text-xs text-gray-500 mr-1">원구:</span> <a class="text-[#66C133]" href="#21">21</a> <a class="text-[#66C133]" href="#22">22</a> <a class="text-[#66C133]" href="#23">23</a> <a class="text-[#66C133]" href="#24">24</a> <a class="text-[#66C133]" href="#25">25</a> <a class="text-[#66C133]" href="#26">26</a> <a class="text-[#66C133]" href="#27">27</a> <a class="text-[#66C133]" href="#28">28</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (대자/나천 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">대자:</span> <a class="text-[#66C133]" href="#31">31</a> <a class="text-[#66C133]" href="#32">32</a> <a class="text-[#66C133]" href="#33">33</a> <a class="text-[#66C133]" href="#34">34</a> <a class="text-[#66C133]" href="#35">35</a> <a class="text-[#66C133]" href="#36">36</a> <a class="text-[#66C133]" href="#37">37</a> <br/>
<span class="text-xs text-gray-500 mr-1">나천:</span> <a class="text-[#66C133]" href="#41">41</a> <a class="text-[#66C133]" href="#42">42</a> <a class="text-[#66C133]" href="#43">43</a> <a class="text-[#66C133]" href="#44">44</a> <a class="text-[#66C133]" href="#45">45</a> <a class="text-[#66C133]" href="#46">46</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (정남/하권 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">정남:</span> <a class="text-[#66C133]" href="#51">51</a> <a class="text-[#66C133]" href="#52">52</a> <a class="text-[#66C133]" href="#53">53</a> <a class="text-[#66C133]" href="#54">54</a> <a class="text-[#66C133]" href="#55">55</a> <a class="text-[#66C133]" href="#56">56</a> <br/>
<span class="text-xs text-gray-500 mr-1">하권:</span> <a class="text-[#66C133]" href="#61">61</a> <a class="text-[#66C133]" href="#62">62</a> <a class="text-[#66C133]" href="#63">63</a> <a class="text-[#66C133]" href="#64">64</a> <a class="text-[#66C133]" href="#65">65</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (이복/평미/정동 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">이복:</span> <a class="text-[#66C133]" href="#71">71</a> <a class="text-[#66C133]" href="#72">72</a> <a class="text-[#66C133]" href="#73">73</a> <a class="text-[#66C133]" href="#74">74</a> <a class="text-[#66C133]" href="#75">75</a> <br/>
<span class="text-xs text-gray-500 mr-1">평미:</span> <a class="text-[#66C133]" href="#81">81</a> <a class="text-[#66C133]" href="#82">82</a> <a class="text-[#66C133]" href="#83">83</a> <a class="text-[#66C133]" href="#84">84</a> <a class="text-[#66C133]" href="#85">85</a> <br/>
<span class="text-xs text-gray-500 mr-1">정동:</span> <a class="text-[#66C133]" href="#91">91</a> <a class="text-[#66C133]" href="#92">92</a> <a class="text-[#66C133]" href="#93">93</a> <a class="text-[#66C133]" href="#94">94</a> <a class="text-[#66C133]" href="#95">95</a> <a class="text-[#66C133]" href="#96">96</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">순환 / 마을</th>
<td class="route-list bg-gray-50">
<a class="text-gray-700 font-bold" href="#m1">읍내순환1</a> <a class="text-gray-700 font-bold" href="#m2">읍내순환2</a> <a class="text-gray-700 font-bold" href="#m3">외곽순환3</a> <a class="text-gray-700 font-bold" href="#m4">신안마을1</a> <a class="text-gray-700 font-bold" href="#m5">대자마을1</a>
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