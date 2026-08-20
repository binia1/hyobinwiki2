document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("마진시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="마진시 로고" class="h-[24px]" src="이미지/마진시.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">마진시</span>
<span class="text-sm font-bold">시내버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header" style="background-color: #8E44AD; color: white;">좌석/광역</th>
<td class="route-list">
<a class="font-bold text-[#8E44AD]" href="#7">7</a> <a class="font-bold text-[#8E44AD]" href="#8">8</a> <a class="font-bold text-[#8E44AD]" href="#99">99</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #0068B7; color: white;">간선버스</th>
<td class="route-list">
<a class="text-[#0068B7]" href="#1">1</a> <a class="text-[#0068B7]" href="#2">2</a> <a class="text-[#0068B7]" href="#3">3</a> <a class="text-[#0068B7]" href="#4">4</a> <a class="text-[#0068B7]" href="#5">5</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (천대/유록)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">천대:</span> <a class="text-[#66C133]" href="#11">11</a> <a class="text-[#66C133]" href="#12">12</a> <a class="text-[#66C133]" href="#13">13</a> <a class="text-[#66C133]" href="#14">14</a> <a class="text-[#66C133]" href="#15">15</a> <a class="text-[#66C133]" href="#16">16</a> <a class="text-[#66C133]" href="#17">17</a> <a class="text-[#66C133]" href="#18">18</a> <a class="text-[#66C133]" href="#19">19</a> <a class="text-[#66C133]" href="#20">20</a> <a class="text-[#66C133]" href="#21">21</a> <br/>
<span class="text-xs text-gray-500 mr-1">유록:</span> <a class="text-[#66C133]" href="#31">31</a> <a class="text-[#66C133]" href="#32">32</a> <a class="text-[#66C133]" href="#33">33</a> <a class="text-[#66C133]" href="#34">34</a> <a class="text-[#66C133]" href="#35">35</a> <a class="text-[#66C133]" href="#36">36</a> <a class="text-[#66C133]" href="#37">37</a> <a class="text-[#66C133]" href="#38">38</a> <a class="text-[#66C133]" href="#39">39</a> <a class="text-[#66C133]" href="#40">40</a> <a class="text-[#66C133]" href="#41">41</a> <a class="text-[#66C133]" href="#42">42</a> <a class="text-[#66C133]" href="#43">43</a> <a class="text-[#66C133]" href="#44">44</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (상정/팔현/장병)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">상정:</span> <a class="text-[#66C133]" href="#51">51</a> <a class="text-[#66C133]" href="#52">52</a> <a class="text-[#66C133]" href="#53">53</a> <a class="text-[#66C133]" href="#54">54</a> <a class="text-[#66C133]" href="#55">55</a> <a class="text-[#66C133]" href="#56">56</a> <a class="text-[#66C133]" href="#57">57</a> <a class="text-[#66C133]" href="#58">58</a> <a class="text-[#66C133]" href="#59">59</a> <br/>
<span class="text-xs text-gray-500 mr-1">팔현:</span> <a class="text-[#66C133]" href="#61">61</a> <a class="text-[#66C133]" href="#62">62</a> <a class="text-[#66C133]" href="#63">63</a> <a class="text-[#66C133]" href="#64">64</a> <a class="text-[#66C133]" href="#65">65</a> <a class="text-[#66C133]" href="#66">66</a> <a class="text-[#66C133]" href="#67">67</a> <br/>
<span class="text-xs text-gray-500 mr-1">장병:</span> <a class="text-[#66C133]" href="#71">71</a> <a class="text-[#66C133]" href="#72">72</a> <a class="text-[#66C133]" href="#73">73</a> <a class="text-[#66C133]" href="#74">74</a> <a class="text-[#66C133]" href="#75">75</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (상본/명야/수판/고사)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">상본:</span> <a class="text-[#66C133]" href="#81">81</a> <a class="text-[#66C133]" href="#82">82</a> <a class="text-[#66C133]" href="#83">83</a> <br/>
<span class="text-xs text-gray-500 mr-1">명야:</span> <a class="text-[#66C133]" href="#91">91</a> <a class="text-[#66C133]" href="#92">92</a> <a class="text-[#66C133]" href="#93">93</a> <a class="text-[#66C133]" href="#94">94</a> <a class="text-[#66C133]" href="#95">95</a> <a class="text-[#66C133]" href="#96">96</a> <br/>
<span class="text-xs text-gray-500 mr-1">수판:</span> <a class="text-[#66C133]" href="#111">111</a> <a class="text-[#66C133]" href="#112">112</a> <a class="text-[#66C133]" href="#113">113</a> <a class="text-[#66C133]" href="#114">114</a> <a class="text-[#66C133]" href="#115">115</a> <a class="text-[#66C133]" href="#116">116</a> <a class="text-[#66C133]" href="#117">117</a> <a class="text-[#66C133]" href="#118">118</a> <br/>
<span class="text-xs text-gray-500 mr-1">고사:</span> <a class="text-[#66C133]" href="#121">121</a> <a class="text-[#66C133]" href="#122">122</a> <a class="text-[#66C133]" href="#123">123</a> <a class="text-[#66C133]" href="#124">124</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">마을버스</th>
<td class="route-list bg-gray-50">
<span class="text-xs text-gray-500 mr-1">마진:</span> <a class="text-gray-700 font-bold" href="#m101">마진 101</a> <a class="text-gray-700 font-bold" href="#m102">마진 102</a> | 
                            <span class="text-xs text-gray-500 mr-1">월석:</span> <a class="text-gray-700 font-bold" href="#w110">월석 110</a> <a class="text-gray-700 font-bold" href="#w120">월석 120</a> | 
                            <span class="text-xs text-gray-500 mr-1">천대:</span> <a class="text-gray-700 font-bold" href="#c130">천대 130</a>
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