document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("운진군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="운진군 로고" class="h-[24px]" src="이미지/운진군.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">운진군</span>
<span class="text-sm font-bold">농어촌버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header" style="background-color: #8E44AD; color: white;">좌석/광역</th>
<td class="route-list">
<a class="font-bold text-[#8E44AD]" href="#9">9</a> <a class="font-bold text-[#8E44AD]" href="#99">99</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #0068B7; color: white;">간선버스</th>
<td class="route-list">
<a class="font-bold text-[#0068B7]" href="#1">1</a> <a class="text-[#0068B7]" href="#2">2</a> <a class="text-[#0068B7]" href="#3">3</a> <a class="text-[#0068B7]" href="#4">4</a> <a class="text-[#0068B7]" href="#5">5</a> <a class="text-[#0068B7]" href="#6">6</a> <a class="text-[#0068B7]" href="#7">7</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #99DD88; color: black;">지선 (운진/운남 권역)</th>
<td class="route-list bg-gray-50">
<span class="text-xs text-gray-500 mr-1">운진:</span> <a class="text-[#66C133]" href="#11">11</a> <a class="text-[#66C133]" href="#12">12</a> <a class="text-[#66C133]" href="#13">13</a> <a class="text-[#66C133]" href="#14">14</a> <a class="text-[#66C133]" href="#15">15</a> <a class="text-[#66C133]" href="#16">16</a> <a class="text-[#66C133]" href="#17">17</a> <a class="text-[#66C133]" href="#18">18</a> <br/>
<span class="text-xs text-gray-500 mr-1">운남:</span> <a class="text-[#66C133]" href="#21">21</a> <a class="text-[#66C133]" href="#22">22</a> <a class="text-[#66C133]" href="#23">23</a> <a class="text-[#66C133]" href="#24">24</a> <a class="text-[#66C133]" href="#25">25</a> <a class="text-[#66C133]" href="#26">26</a> <a class="text-[#66C133]" href="#27">27</a> <a class="text-[#66C133]" href="#28">28</a> <a class="text-[#66C133]" href="#29">29</a> <a class="text-[#66C133]" href="#30">30</a> <a class="text-[#66C133]" href="#31">31</a> <a class="text-[#66C133]" href="#32">32</a> <a class="text-[#66C133]" href="#33">33</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #99DD88; color: black;">지선 (금산/사내 권역)</th>
<td class="route-list bg-gray-50">
<span class="text-xs text-gray-500 mr-1">금산:</span> <a class="text-[#66C133]" href="#41">41</a> <a class="text-[#66C133]" href="#42">42</a> <a class="text-[#66C133]" href="#43">43</a> <a class="text-[#66C133]" href="#44">44</a> <a class="text-[#66C133]" href="#45">45</a> <a class="text-[#66C133]" href="#46">46</a> <br/>
<span class="text-xs text-gray-500 mr-1">사내:</span> <a class="text-[#66C133]" href="#51">51</a> <a class="text-[#66C133]" href="#52">52</a> <a class="text-[#66C133]" href="#53">53</a> <a class="text-[#66C133]" href="#54">54</a> <a class="text-[#66C133]" href="#55">55</a> <a class="text-[#66C133]" href="#56">56</a> <a class="text-[#66C133]" href="#57">57</a> <a class="text-[#66C133]" href="#58">58</a> <a class="text-[#66C133]" href="#59">59</a> <a class="text-[#66C133]" href="#60">60</a> <a class="text-[#66C133]" href="#61">61</a> <a class="text-[#66C133]" href="#62">62</a> <a class="text-[#66C133]" href="#63">63</a> <a class="text-[#66C133]" href="#64">64</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #99DD88; color: black;">지선 (신운/산인/산곶/도군)</th>
<td class="route-list bg-gray-50">
<span class="text-xs text-gray-500 mr-1">신운:</span> <a class="text-[#66C133]" href="#71">71</a> <a class="text-[#66C133]" href="#72">72</a> <a class="text-[#66C133]" href="#73">73</a> <a class="text-[#66C133]" href="#74">74</a> <a class="text-[#66C133]" href="#75">75</a> <br/>
<span class="text-xs text-gray-500 mr-1">산인:</span> <a class="text-[#66C133]" href="#81">81</a> <a class="text-[#66C133]" href="#82">82</a> <a class="text-[#66C133]" href="#83">83</a> <a class="text-[#66C133]" href="#84">84</a> <a class="text-[#66C133]" href="#85">85</a> <a class="text-[#66C133]" href="#86">86</a> <a class="text-[#66C133]" href="#87">87</a> <a class="text-[#66C133]" href="#88">88</a> <a class="text-[#66C133]" href="#89">89</a> <a class="text-[#66C133]" href="#90">90</a> <a class="text-[#66C133]" href="#91">91</a> <br/>
<span class="text-xs text-gray-500 mr-1">산곶:</span> <a class="text-[#66C133]" href="#111">111</a> <a class="text-[#66C133]" href="#112">112</a> <a class="text-[#66C133]" href="#113">113</a> <a class="text-[#66C133]" href="#114">114</a> <a class="text-[#66C133]" href="#115">115</a> <a class="text-[#66C133]" href="#116">116</a> <a class="text-[#66C133]" href="#117">117</a> <a class="text-[#66C133]" href="#118">118</a> <a class="text-[#66C133]" href="#119">119</a> <br/>
<span class="text-xs text-gray-500 mr-1">도군:</span> <a class="text-[#66C133]" href="#121">121</a> <a class="text-[#66C133]" href="#122">122</a> <a class="text-[#66C133]" href="#123">123</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #99DD88; color: black;">순환 / 마을</th>
<td class="route-list bg-gray-50">
<span class="text-xs text-gray-500 mr-1">운진:</span> <a class="text-gray-700 font-bold" href="#u101">운진 101</a> <a class="text-gray-700 font-bold" href="#u102">운진 102</a> <br/>
<span class="text-xs text-gray-500 mr-1">운남:</span> <a class="text-gray-700 font-bold" href="#u201">운남 201</a> <a class="text-gray-700 font-bold" href="#u202">운남 202</a> <a class="text-gray-700 font-bold" href="#u203">운남 203</a> <br/>
<span class="text-xs text-gray-500 mr-1">기타:</span> <a class="text-gray-700 font-bold" href="#g301">금산 301</a> <a class="text-gray-700 font-bold" href="#s401">산곶 401</a>
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