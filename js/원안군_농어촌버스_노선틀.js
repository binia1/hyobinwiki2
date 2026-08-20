document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("원안군_농어촌버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="원안군 로고" class="h-[24px]" src="이미지/원안군.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">원안군</span>
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
<a class="font-bold text-[#8E44AD]" href="#7">7</a> <a class="font-bold text-[#8E44AD]" href="#8">8</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #0068B7; color: white;">간선버스</th>
<td class="route-list">
<a class="font-bold text-[#0068B7]" href="#1">1</a> <a class="font-bold text-[#0068B7]" href="#2">2</a> <a class="font-bold text-[#0068B7]" href="#3">3</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (원안/상능 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">원안:</span> <a class="text-[#66C133]" href="#11">11</a> <a class="text-[#66C133]" href="#12">12</a> <a class="text-[#66C133]" href="#13">13</a> <a class="text-[#66C133]" href="#14">14</a> <a class="text-[#66C133]" href="#15">15</a> <a class="text-[#66C133]" href="#16">16</a> <a class="text-[#66C133]" href="#17">17</a> <a class="text-[#66C133]" href="#18">18</a> <a class="text-[#66C133]" href="#19">19</a> <br/>
<span class="text-xs text-gray-500 mr-1">상능:</span> <a class="text-[#66C133]" href="#21">21</a> <a class="text-[#66C133]" href="#22">22</a> <a class="text-[#66C133]" href="#23">23</a> <a class="text-[#66C133]" href="#24">24</a> <a class="text-[#66C133]" href="#25">25</a> <a class="text-[#66C133]" href="#26">26</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (개색/소귀 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">개색:</span> <a class="text-[#66C133]" href="#31">31</a> <a class="text-[#66C133]" href="#32">32</a> <a class="text-[#66C133]" href="#33">33</a> <a class="text-[#66C133]" href="#34">34</a> <a class="text-[#66C133]" href="#35">35</a> <a class="text-[#66C133]" href="#36">36</a> <a class="text-[#66C133]" href="#37">37</a> <a class="text-[#66C133]" href="#38">38</a> <a class="text-[#66C133]" href="#39">39</a> <a class="text-[#66C133]" href="#40">40</a> <a class="text-[#66C133]" href="#41">41</a> <br/>
<span class="text-xs text-gray-500 mr-1">소귀:</span> <a class="text-[#66C133]" href="#51">51</a> <a class="text-[#66C133]" href="#52">52</a> <a class="text-[#66C133]" href="#53">53</a> <a class="text-[#66C133]" href="#54">54</a> <a class="text-[#66C133]" href="#55">55</a> <a class="text-[#66C133]" href="#56">56</a> <a class="text-[#66C133]" href="#57">57</a> <a class="text-[#66C133]" href="#58">58</a> <a class="text-[#66C133]" href="#59">59</a> <a class="text-[#66C133]" href="#60">60</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (막자/소궁 권역)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">막자:</span> <a class="text-[#66C133]" href="#61">61</a> <a class="text-[#66C133]" href="#62">62</a> <a class="text-[#66C133]" href="#63">63</a> <a class="text-[#66C133]" href="#64">64</a> <a class="text-[#66C133]" href="#65">65</a> <a class="text-[#66C133]" href="#66">66</a> <a class="text-[#66C133]" href="#67">67</a> <a class="text-[#66C133]" href="#68">68</a> <a class="text-[#66C133]" href="#69">69</a> <br/>
<span class="text-xs text-gray-500 mr-1">소궁:</span> <a class="text-[#66C133]" href="#71">71</a> <a class="text-[#66C133]" href="#72">72</a> <a class="text-[#66C133]" href="#73">73</a> <a class="text-[#66C133]" href="#74">74</a> <a class="text-[#66C133]" href="#75">75</a> <a class="text-[#66C133]" href="#76">76</a> <a class="text-[#66C133]" href="#77">77</a> <a class="text-[#66C133]" href="#78">78</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #66C133; color: white;">지선 (노국/산음/소운)</th>
<td class="route-list">
<span class="text-xs text-gray-500 mr-1">노국:</span> <a class="text-[#66C133]" href="#81">81</a> <a class="text-[#66C133]" href="#82">82</a> <a class="text-[#66C133]" href="#83">83</a> <a class="text-[#66C133]" href="#84">84</a> <a class="text-[#66C133]" href="#85">85</a> <a class="text-[#66C133]" href="#86">86</a> <br/>
<span class="text-xs text-gray-500 mr-1">산음:</span> <a class="text-[#66C133]" href="#91">91</a> <a class="text-[#66C133]" href="#92">92</a> <a class="text-[#66C133]" href="#93">93</a> <a class="text-[#66C133]" href="#94">94</a> <a class="text-[#66C133]" href="#95">95</a> <br/>
<span class="text-xs text-gray-500 mr-1">소운:</span> <a class="text-[#66C133]" href="#111">111</a> <a class="text-[#66C133]" href="#112">112</a> <a class="text-[#66C133]" href="#113">113</a> <a class="text-[#66C133]" href="#114">114</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">순환 / 마을</th>
<td class="route-list bg-gray-50">
<span class="text-xs text-gray-500 mr-1">원안:</span> <a class="text-gray-700 font-bold" href="#m101">원안 101</a> <a class="text-gray-700 font-bold" href="#m102">원안 102</a> <br/>
<span class="text-xs text-gray-500 mr-1">상능:</span> <a class="text-gray-700 font-bold" href="#m121">상능 121</a> <br/>
<span class="text-xs text-gray-500 mr-1">개색:</span> <a class="text-gray-700 font-bold" href="#m131">개색 131</a>
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