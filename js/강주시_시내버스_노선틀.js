document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("강주시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<div class="wiki-macro-table-container mt-6">
<div class="macro-header flex-col gap-1" style="background-color: #ffc94a; color: black;">
<div class="flex items-center gap-2">
<img src="이미지/강주시.webp" style="height:30px; border-radius:50%; padding:2px;"/>
<span class="text-xl font-bold text-black">강주시 시내버스 노선</span>
</div>
</div>
<div class="text-center py-2 bg-gray-50 border-b border-gray-300">
<span class="bus-badge bg-[#990033]">광역</span>
<span class="bus-badge bg-[#00b5e2]">간선</span>
<span class="bus-badge bg-[#8DC63F]">지선</span>
<span class="bus-badge bg-[#FFBF00] text-black">순환</span>
<span class="bus-badge bg-[#F7E600] text-black">마을</span>
</div>
<div class="macro-toggle" onclick="toggleMacro('macro-gangju-routes')">[ 접기 ]</div>
<div class="macro-content" id="macro-gangju-routes">
<table class="macro-table route-list-table">
<tbody>
<tr>
<th style="background-color: #990033; color: white;">광역</th>
<td>
<a href="#s-5-1">900</a> <a href="#s-5-1">910</a> <a href="#s-5-1">920</a> <a href="#s-5-1">930</a>
</td>
</tr>
<tr>
<th style="background-color: #00b5e2; color: white;">간선</th>
<td>
<a href="#s-5-2">100</a> <a href="#s-5-2">101</a> <a href="#s-5-2">102</a> <a href="#s-5-2">110</a> <a href="#s-5-2">120</a> <a href="#s-5-2">130</a> <a href="#s-5-2">140</a> <a href="#s-5-2">150</a> <a href="#s-5-2">160</a> <a href="#s-5-2">170</a> <a href="#s-5-2">180</a> <a href="#s-5-2">190</a>
</td>
</tr>
<tr>
<th style="background-color: #8DC63F; color: white;">지선<br/><span class="text-xs font-normal">(200번대)</span></th>
<td>
<span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">갈원면</span> <a href="#s-5-3">201</a> <a href="#s-5-3">202</a> <a href="#s-5-3">203</a> <a href="#s-5-3">204</a> <a href="#s-5-3">205</a> <a href="#s-5-3">206</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">곡전면</span> <a href="#s-5-3">211</a> <a href="#s-5-3">212</a> <a href="#s-5-3">213</a> <a href="#s-5-3">214</a> <a href="#s-5-3">215</a> <a href="#s-5-3">216</a> <a href="#s-5-3">217</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">공문면</span> <a href="#s-5-3">221</a> <a href="#s-5-3">222</a> <a href="#s-5-3">223</a> <a href="#s-5-3">224</a> <a href="#s-5-3">225</a> <a href="#s-5-3">226</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">금상면</span> <a href="#s-5-3">231</a> <a href="#s-5-3">232</a> <a href="#s-5-3">233</a> <a href="#s-5-3">234</a> <a href="#s-5-3">235</a> <a href="#s-5-3">236</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">북예면</span> <a href="#s-5-3">241</a> <a href="#s-5-3">242</a> <a href="#s-5-3">243</a> <a href="#s-5-3">244</a> <a href="#s-5-3">245</a> <a href="#s-5-3">246</a> <a href="#s-5-3">247</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">석동면</span> <a href="#s-5-3">251</a> <a href="#s-5-3">252</a> <a href="#s-5-3">253</a> <a href="#s-5-3">254</a> <a href="#s-5-3">255</a> <a href="#s-5-3">256</a> <a href="#s-5-3">257</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">석북면</span> <a href="#s-5-3">261</a> <a href="#s-5-3">262</a> <a href="#s-5-3">263</a> <a href="#s-5-3">264</a> <a href="#s-5-3">265</a> <a href="#s-5-3">266</a> <a href="#s-5-3">267</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">석서면</span> <a href="#s-5-3">271</a> <a href="#s-5-3">272</a> <a href="#s-5-3">273</a> <a href="#s-5-3">274</a> <a href="#s-5-3">275</a> <a href="#s-5-3">276</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">풍영면</span> <a href="#s-5-3">281</a> <a href="#s-5-3">282</a> <a href="#s-5-3">283</a> <a href="#s-5-3">284</a> <a href="#s-5-3">285</a> <a href="#s-5-3">286</a>
<br/><span class="bus-badge bg-[#8DC63F] font-normal text-xs mb-1">풍원면</span> <a href="#s-5-3">291</a> <a href="#s-5-3">292</a> <a href="#s-5-3">293</a>
</td>
</tr>
<tr>
<th style="background-color: #FFBF00; color: black;">순환 / 마을</th>
<td>
<span class="bus-badge bg-[#FFBF00] text-black font-normal text-xs mb-1">순환</span> <a href="#s-5-4">강주 11</a> <a href="#s-5-4">강주 12</a> <a href="#s-5-4">중앙 21</a>
<br/><span class="bus-badge bg-[#F7E600] text-black font-normal text-xs">마을</span> <a href="#s-5-4">좌구 31</a> <a href="#s-5-4">청성 41</a> <a href="#s-5-4">석서 51</a> <a href="#s-5-4">북예 61</a> <a href="#s-5-4">풍영 71</a> <a href="#s-5-4">과탐 81</a> <a href="#s-5-4">야판 91</a> <a href="#s-5-4">삼랑 01</a> <a href="#s-5-4">문성 02</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
    `;
});