document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("약산시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #F8C8C4; color: black;">
<div class="flex items-center gap-2">
<img src="이미지/약산시.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-black">약산시 시내버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#485EC6]">광역</span>
<span class="bus-badge bg-[#FF5800]">좌석</span>
<span class="bus-badge bg-[#D81C2F]">급행좌석</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
</div>
<div class="macro-toggle" onclick="toggleMacro('macro-yaksan-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-yaksan-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #485EC6; color: white;">광역</th>
<td>
<a href="#s-4-1">4000</a> <a href="#s-4-1">5000</a> <a href="#s-4-1">7000</a> <a href="#s-4-1">8000</a> <a href="#s-4-1">9000</a>
</td>
</tr>
<tr>
<th style="background-color: #FF5800; color: white;">좌석</th>
<td>
<a href="#s-4-2">4004</a> <a href="#s-4-2">5555</a> <a href="#s-4-2">7777</a> <a href="#s-4-2">8888</a>
</td>
</tr>
<tr>
<th style="background-color: #D81C2F; color: white;">급행좌석</th>
<td>
<a href="#s-4-3">1000</a> <a href="#s-4-3">2000</a> <a href="#s-4-3">3000</a> <a href="#s-4-3">4000</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선</th>
<td>
<a href="#s-4-4">100</a> <a href="#s-4-4">100-1</a> <a href="#s-4-4">101</a> <a href="#s-4-4">101-1</a> <a href="#s-4-4">102</a> <a href="#s-4-4">102-1</a> <a href="#s-4-4">110</a> <a href="#s-4-4">110-1</a> <a href="#s-4-4">111</a> <a href="#s-4-4">112</a> <a href="#s-4-4">115</a> <a href="#s-4-4">120</a> <a href="#s-4-4">121</a> <a href="#s-4-4">122</a> <a href="#s-4-4">130</a> <a href="#s-4-4">131</a> <a href="#s-4-4">140</a> <a href="#s-4-4">140-1</a> <a href="#s-4-4">141</a> <a href="#s-4-4">142</a> <a href="#s-4-4">142-1</a> <a href="#s-4-4">143</a> <a href="#s-4-4">145</a> <a href="#s-4-4">150</a> <a href="#s-4-4">150-1</a> <a href="#s-4-4">155</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/><span class="text-xs font-normal">(200~300번대)</span></th>
<td>
<a href="#s-4-5">200</a> <a href="#s-4-5">200-1</a> <a href="#s-4-5">201</a> <a href="#s-4-5">203</a> <a href="#s-4-5">205</a> <a href="#s-4-5">210</a> <a href="#s-4-5">211</a> <a href="#s-4-5">215</a> <a href="#s-4-5">220</a> <a href="#s-4-5">222</a> <a href="#s-4-5">230</a> <a href="#s-4-5">240</a> <a href="#s-4-5">245</a> <a href="#s-4-5">250</a> <a href="#s-4-5">255</a> <a href="#s-4-5">260</a> <a href="#s-4-5">270</a> <a href="#s-4-5">280</a>
<a href="#s-4-5">300</a> <a href="#s-4-5">300-1</a> <a href="#s-4-5">301</a> <a href="#s-4-5">302</a> <a href="#s-4-5">305</a> <a href="#s-4-5">310</a> <a href="#s-4-5">311</a> <a href="#s-4-5">315</a> <a href="#s-4-5">320</a> <a href="#s-4-5">325</a> <a href="#s-4-5">330</a> <a href="#s-4-5">340</a> <a href="#s-4-5">350</a> <a href="#s-4-5">355</a> <a href="#s-4-5">360</a> <a href="#s-4-5">370</a> <a href="#s-4-5">380</a> <a href="#s-4-5">390</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/><span class="text-xs font-normal">(400~500번대)</span></th>
<td>
<a href="#s-4-6">400</a> <a href="#s-4-6">400-1</a> <a href="#s-4-6">401</a> <a href="#s-4-6">402</a> <a href="#s-4-6">403</a> <a href="#s-4-6">405</a> <a href="#s-4-6">410</a> <a href="#s-4-6">411</a> <a href="#s-4-6">412</a> <a href="#s-4-6">415</a> <a href="#s-4-6">420</a> <a href="#s-4-6">421</a> <a href="#s-4-6">425</a> <a href="#s-4-6">430</a> <a href="#s-4-6">431</a> <a href="#s-4-6">440</a> <a href="#s-4-6">445</a> <a href="#s-4-6">450</a> <a href="#s-4-6">451</a> <a href="#s-4-6">455</a> <a href="#s-4-6">460</a> <a href="#s-4-6">461</a> <a href="#s-4-6">470</a> <a href="#s-4-6">471</a> <a href="#s-4-6">480</a> <a href="#s-4-6">481</a> <a href="#s-4-6">482</a> <a href="#s-4-6">485</a> <a href="#s-4-6">490</a> <a href="#s-4-6">495</a>
<a href="#s-4-6">500</a> <a href="#s-4-6">500-1</a> <a href="#s-4-6">501</a> <a href="#s-4-6">502</a> <a href="#s-4-6">505</a> <a href="#s-4-6">510</a> <a href="#s-4-6">511</a> <a href="#s-4-6">515</a> <a href="#s-4-6">520</a> <a href="#s-4-6">521</a> <a href="#s-4-6">525</a> <a href="#s-4-6">530</a> <a href="#s-4-6">531</a> <a href="#s-4-6">540</a> <a href="#s-4-6">545</a> <a href="#s-4-6">550</a> <a href="#s-4-6">551</a> <a href="#s-4-6">555</a> <a href="#s-4-6">560</a> <a href="#s-4-6">570</a> <a href="#s-4-6">580</a> <a href="#s-4-6">590</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환</th>
<td>
<a href="#s-4-7">202</a> <a href="#s-4-7">333</a> <a href="#s-4-7">장곡순환 01</a> <a href="#s-4-7">장곡순환 02</a> <a href="#s-4-7">장곡순환 03</a> <a href="#s-4-7">화소순환 01</a> <a href="#s-4-7">화소순환 02</a> <a href="#s-4-7">원강순환 01</a>
</td>
</tr>
<tr>
<th style="background-color: #F7E600; color: black;">마을 (Y)</th>
<td>
<a href="#s-4-8">Y-1</a> <a href="#s-4-8">Y-2</a> <a href="#s-4-8">Y-3</a> <a href="#s-4-8">Y-4</a> <a href="#s-4-8">Y-5</a> <a href="#s-4-8">Y-6</a> <a href="#s-4-8">Y-7</a> <a href="#s-4-8">Y-8</a> <a href="#s-4-8">Y-9</a> <a href="#s-4-8">Y-10</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});