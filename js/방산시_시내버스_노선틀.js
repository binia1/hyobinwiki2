document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("방산시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="방산시 로고" class="h-[24px]" src="이미지/방산시.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">방산시</span>
<span class="text-sm font-bold">시내버스 노선</span>
</div>
</div>
<span class="toggle-text">[ 펼치기 · 접기 ]</span>
</summary>
<table class="route-table-grid">
<tbody>
<tr>
<th class="zone-header" style="background-color: #E60012; color: white;">급행버스</th>
<td class="route-list">
<a class="font-bold text-[#E60012]" href="#1">1</a> <a class="font-bold text-[#E60012]" href="#2">2</a> <a class="font-bold text-[#E60012]" href="#3">3</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #8E44AD; color: white;">광역/좌석</th>
<td class="route-list">
<a class="text-[#8E44AD]" href="#8">8</a> <a class="text-[#8E44AD]" href="#9">9</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #0068B7; color: white;">간선버스</th>
<td class="route-list">
<a class="text-[#0068B7]" href="#11">11</a> <a class="text-[#0068B7]" href="#12">12</a> <a class="text-[#0068B7]" href="#13">13</a> <a class="text-[#0068B7]" href="#14">14</a> <a class="text-[#0068B7]" href="#15">15</a> <a class="text-[#0068B7]" href="#16">16</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (서중/동공)</th>
<td class="route-list">
<a class="text-[#66C133]" href="#21">21</a> <a class="text-[#66C133]" href="#22">22</a> <a class="text-[#66C133]" href="#23">23</a> <a class="text-[#66C133]" href="#24">24</a> <a class="text-[#66C133]" href="#25">25</a> <a class="text-[#66C133]" href="#26">26</a> <a class="text-[#66C133]" href="#27">27</a> <a class="text-[#66C133]" href="#28">28</a> <a class="text-[#66C133]" href="#29">29</a> <a class="text-[#66C133]" href="#30">30</a> <a class="text-[#66C133]" href="#31">31</a> | 
                            <a class="text-[#66C133]" href="#41">41</a> <a class="text-[#66C133]" href="#42">42</a> <a class="text-[#66C133]" href="#43">43</a> <a class="text-[#66C133]" href="#44">44</a> <a class="text-[#66C133]" href="#45">45</a> <a class="text-[#66C133]" href="#46">46</a> <a class="text-[#66C133]" href="#47">47</a> <a class="text-[#66C133]" href="#48">48</a> <a class="text-[#66C133]" href="#49">49</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (기타 읍면)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">석원/양복:</span> <a class="text-[#66C133]" href="#51">51</a> <a class="text-[#66C133]" href="#52">52</a> <a class="text-[#66C133]" href="#53">53</a> <a class="text-[#66C133]" href="#54">54</a> <a class="text-[#66C133]" href="#55">55</a> <a class="text-[#66C133]" href="#56">56</a> <a class="text-[#66C133]" href="#57">57</a> | 
                            <a class="text-[#66C133]" href="#61">61</a> <a class="text-[#66C133]" href="#62">62</a> <a class="text-[#66C133]" href="#63">63</a> <a class="text-[#66C133]" href="#64">64</a> <a class="text-[#66C133]" href="#65">65</a> <a class="text-[#66C133]" href="#66">66</a> <a class="text-[#66C133]" href="#67">67</a> <a class="text-[#66C133]" href="#68">68</a><br/>
<span class="text-xs text-gray-500 mr-1">오지 노선:</span> <a class="text-[#66C133]" href="#71">71</a> <a class="text-[#66C133]" href="#72">72</a> <a class="text-[#66C133]" href="#73">73</a> <a class="text-[#66C133]" href="#74">74</a> <a class="text-[#66C133]" href="#75">75</a> | 
                            <a class="text-[#66C133]" href="#81">81</a> <a class="text-[#66C133]" href="#82">82</a> <a class="text-[#66C133]" href="#83">83</a> <a class="text-[#66C133]" href="#84">84</a> <a class="text-[#66C133]" href="#85">85</a> | 
                            <a class="text-[#66C133]" href="#91">91</a> <a class="text-[#66C133]" href="#92">92</a> <a class="text-[#66C133]" href="#93">93</a> <a class="text-[#66C133]" href="#94">94</a> <a class="text-[#66C133]" href="#95">95</a> <a class="text-[#66C133]" href="#96">96</a> | 
                            <a class="text-[#66C133]" href="#101">101</a> <a class="text-[#66C133]" href="#102">102</a> <a class="text-[#66C133]" href="#103">103</a> <a class="text-[#66C133]" href="#104">104</a> | 
                            <a class="text-[#66C133]" href="#111">111</a> <a class="text-[#66C133]" href="#112">112</a> <a class="text-[#66C133]" href="#113">113</a> <a class="text-[#66C133]" href="#114">114</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">순환/마을버스</th>
<td class="route-list bg-gray-50">
<span class="text-xs text-gray-500 mr-1">순환:</span> <a class="text-gray-700 font-bold" href="#121">121</a> <a class="text-gray-700 font-bold" href="#122">122</a> <a class="text-gray-700 font-bold" href="#131">131</a> <a class="text-gray-700 font-bold" href="#141">141</a> | 
                            <span class="text-xs text-gray-500 mr-1">마을:</span> <a class="text-gray-700 font-bold" href="#151">151</a> <a class="text-gray-700 font-bold" href="#161">161</a> <a class="text-gray-700 font-bold" href="#171">171</a>
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