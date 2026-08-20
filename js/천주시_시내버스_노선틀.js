document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("천주시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #8B4993; color: white;">
<div class="flex items-center gap-2">
<img src="이미지/천주시.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-white">천주시 시내버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">광역급행(준)</span>
<span class="bus-badge bg-[#990033]">급행</span>
<span class="bus-badge bg-[#003366]">좌석</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
</div>
<div class="macro-toggle" onclick="toggleFold('macro-cheonju-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-cheonju-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">광역급행(준)</th>
<td>
<a class="font-bold text-red-600" href="#s-4-1">(M)1004</a>
</td>
</tr>
<tr>
<th style="background-color: #990033; color: white;">급행</th>
<td>
<a href="#s-4-2">1000</a> <a href="#s-4-2">1001</a> <a href="#s-4-2">1002</a> <a href="#s-4-2">1003</a>
</td>
</tr>
<tr>
<th style="background-color: #003366; color: white;">좌석</th>
<td>
<a href="#s-4-3">800</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 (100번대)</th>
<td>
<a href="#s-4-4">100</a> <a href="#s-4-4">101</a> <a href="#s-4-4">102</a> <a href="#s-4-4">103</a> <a href="#s-4-4">104</a> <a href="#s-4-4">105</a> <a href="#s-4-4">106</a> <a href="#s-4-4">107</a> <a href="#s-4-4">108</a> <a href="#s-4-4">109</a> <a href="#s-4-4">110</a> <a href="#s-4-4">111</a> <a href="#s-4-4">112</a> <a href="#s-4-4">113</a> <a href="#s-4-4">114</a> <a href="#s-4-4">115</a> <a href="#s-4-4">116</a> <a href="#s-4-4">117</a> <a href="#s-4-4">118</a> <a href="#s-4-4">119</a> <a href="#s-4-4">120</a> <a href="#s-4-4">121</a> <a href="#s-4-4">122</a> <a href="#s-4-4">123</a> <a href="#s-4-4">124</a> <a href="#s-4-4">125</a> <a href="#s-4-4">126</a> <a href="#s-4-4">127</a> <a href="#s-4-4">128</a> <a href="#s-4-4">129</a> <a href="#s-4-4">130</a> <a href="#s-4-4">131</a> <a href="#s-4-4">132</a> <a href="#s-4-4">133</a> <a href="#s-4-4">134</a> <a href="#s-4-4">135</a> <a href="#s-4-4">136</a> <a href="#s-4-4">137</a> <a href="#s-4-4">138</a> <a href="#s-4-4">139</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 (200번대)</th>
<td>
<a href="#s-4-4">200</a> <a href="#s-4-4">201</a> <a href="#s-4-4">202</a> <a href="#s-4-4">203</a> <a href="#s-4-4">204</a> <a href="#s-4-4">205</a> <a href="#s-4-4">206</a> <a href="#s-4-4">207</a> <a href="#s-4-4">208</a> <a href="#s-4-4">209</a> <a href="#s-4-4">210</a> <a href="#s-4-4">211</a> <a href="#s-4-4">212</a> <a href="#s-4-4">213</a> <a href="#s-4-4">214</a> <a href="#s-4-4">215</a> <a href="#s-4-4">216</a> <a href="#s-4-4">217</a> <a href="#s-4-4">218</a> <a href="#s-4-4">219</a> <a href="#s-4-4">220</a> <a href="#s-4-4">221</a> <a href="#s-4-4">222</a> <a href="#s-4-4">223</a> <a href="#s-4-4">224</a> <a href="#s-4-4">225</a> <a href="#s-4-4">226</a> <a href="#s-4-4">227</a> <a href="#s-4-4">228</a> <a href="#s-4-4">229</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선 (500번대)</th>
<td>
<a href="#s-4-4">500</a> <a href="#s-4-4">501</a> <a href="#s-4-4">502</a> <a href="#s-4-4">503</a> <a href="#s-4-4">504</a> <a href="#s-4-4">505</a> <a href="#s-4-4">506</a> <a href="#s-4-4">507</a> <a href="#s-4-4">508</a> <a href="#s-4-4">509</a> <a href="#s-4-4">510</a> <a href="#s-4-4">511</a> <a href="#s-4-4">512</a> <a href="#s-4-4">513</a> <a href="#s-4-4">514</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선 (300번대)</th>
<td>
<a href="#s-4-5">300</a> <a href="#s-4-5">301</a> <a href="#s-4-5">302</a> <a href="#s-4-5">303</a> <a href="#s-4-5">304</a> <a href="#s-4-5">305</a> <a href="#s-4-5">306</a> <a href="#s-4-5">307</a> <a href="#s-4-5">308</a> <a href="#s-4-5">309</a> <a href="#s-4-5">310</a> <a href="#s-4-5">311</a> <a href="#s-4-5">312</a> <a href="#s-4-5">313</a> <a href="#s-4-5">314</a> <a href="#s-4-5">315</a> <a href="#s-4-5">316</a> <a href="#s-4-5">317</a> <a href="#s-4-5">318</a> <a href="#s-4-5">319</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선 (400번대)</th>
<td>
<a href="#s-4-5">400</a> <a href="#s-4-5">401</a> <a href="#s-4-5">402</a> <a href="#s-4-5">403</a> <a href="#s-4-5">404</a> <a href="#s-4-5">405</a> <a href="#s-4-5">406</a> <a href="#s-4-5">407</a> <a href="#s-4-5">408</a> <a href="#s-4-5">409</a> <a href="#s-4-5">410</a> <a href="#s-4-5">411</a> <a href="#s-4-5">412</a> <a href="#s-4-5">413</a> <a href="#s-4-5">414</a> <a href="#s-4-5">415</a> <a href="#s-4-5">416</a> <a href="#s-4-5">417</a> <a href="#s-4-5">418</a> <a href="#s-4-5">419</a> <a href="#s-4-5">420</a> <a href="#s-4-5">421</a> <a href="#s-4-5">422</a> <a href="#s-4-5">423</a> <a href="#s-4-5">424</a> <a href="#s-4-5">425</a> <a href="#s-4-5">426</a> <a href="#s-4-5">427</a> <a href="#s-4-5">428</a> <a href="#s-4-5">429</a> <a href="#s-4-5">430</a> <a href="#s-4-5">431</a> <a href="#s-4-5">432</a> <a href="#s-4-5">433</a> <a href="#s-4-5">434</a> <a href="#s-4-5">435</a> <a href="#s-4-5">436</a> <a href="#s-4-5">437</a> <a href="#s-4-5">438</a> <a href="#s-4-5">439</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환/마을</th>
<td>
<span class="bus-badge bg-[#F7E600] text-black font-normal text-xs mb-1">천성구 마을</span> <a href="#s-4-6">천성 01</a> <a href="#s-4-6">천성 02</a> <a href="#s-4-6">천성 03</a> <a href="#s-4-6">천성 04</a> <a href="#s-4-6">천성 05</a> <a href="#s-4-6">천성 06</a> <a href="#s-4-6">천성 07</a> <a href="#s-4-6">천성 08</a> <a href="#s-4-6">천성 09</a> <a href="#s-4-6">천성 10</a> <a href="#s-4-6">천성 11</a> <a href="#s-4-6">천성 12</a> <a href="#s-4-6">천성 13</a> <a href="#s-4-6">천성 14</a> <a href="#s-4-6">천성 15</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs mb-1">궁하구 마을</span> <a href="#s-4-6">궁하 01</a> <a href="#s-4-6">궁하 02</a> <a href="#s-4-6">궁하 03</a> <a href="#s-4-6">궁하 04</a> <a href="#s-4-6">궁하 05</a> <a href="#s-4-6">궁하 06</a>
<br/><span class="bus-badge bg-[#FFBF00] text-black font-normal text-xs">권역 순환</span> <a href="#s-4-6">청선순환 1</a> <a href="#s-4-6">청선순환 2</a> <a href="#s-4-6">산취순환 1</a> <a href="#s-4-6">과림순환 1</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});