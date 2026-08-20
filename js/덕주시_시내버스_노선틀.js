document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("덕주시_시내버스-nav-container");
    if (!container) return;

    container.innerHTML = `
<details class="nav-table-container mb-8" open="">
<summary class="route-summary-header list-none flex-col">
<div class="flex items-center justify-center gap-2">
<img alt="덕주시 로고" class="h-[24px]" src="이미지/덕주시.webp"/>
<div class="flex flex-col items-center">
<span class="text-xs">덕주시</span>
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
<a class="font-bold text-[#E60012]" href="#8000">8000</a> <a class="font-bold text-[#E60012]" href="#8100">8100</a> <a class="font-bold text-[#E60012]" href="#8200">8200</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #8E44AD; color: white;">광역/좌석</th>
<td class="route-list">
<a class="text-[#8E44AD]" href="#1000">1000</a> <a class="text-[#8E44AD]" href="#1001">1001</a> <a class="text-[#AA66DD]" href="#2000">2000</a> <a class="text-[#8E44AD]" href="#3000">3000</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #AA66DD; color: white;">간선버스</th>
<td class="route-list">
<a class="text-[#AA66DD]" href="#100">100</a> <a class="text-[#AA66DD]" href="#101">101</a> <a class="text-[#AA66DD]" href="#102">102</a> <a class="text-[#AA66DD]" href="#105">105</a> <a class="text-[#AA66DD]" href="#110">110</a> <a class="text-[#AA66DD]" href="#120">120</a> <a class="text-[#AA66DD]" href="#200">200</a> <a class="text-[#AA66DD]" href="#201">201</a> <a class="text-[#AA66DD]" href="#210">210</a> <a class="text-[#AA66DD]" href="#300">300</a> <a class="text-[#AA66DD]" href="#301">301</a> <a class="text-[#AA66DD]" href="#310">310</a> <a class="text-[#AA66DD]" href="#320">320</a> <a class="text-[#AA66DD]" href="#400">400</a> <a class="text-[#AA66DD]" href="#410">410</a> <a class="text-[#AA66DD]" href="#420">420</a> <a class="text-[#AA66DD]" href="#430">430</a> <a class="text-[#AA66DD]" href="#450">450</a> <a class="text-[#AA66DD]" href="#460">460</a> <a class="text-[#AA66DD]" href="#500">500</a> <a class="text-[#AA66DD]" href="#510">510</a> <a class="text-[#AA66DD]" href="#520">520</a> <a class="text-[#AA66DD]" href="#550">550</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #3344aa; color: white;">지선버스 (600번대)</th>
<td class="route-list">
<a class="text-[#3344aa]" href="#601">601</a> <a class="text-[#3344aa]" href="#602">602</a> <a class="text-[#3344aa]" href="#603">603</a> <a class="text-[#3344aa]" href="#604">604</a> <a class="text-[#3344aa]" href="#611">611</a> <a class="text-[#3344aa]" href="#612">612</a> <a class="text-[#3344aa]" href="#613">613</a> <a class="text-[#3344aa]" href="#614">614</a> <a class="text-[#3344aa]" href="#615">615</a> <a class="text-[#3344aa]" href="#616">616</a> <a class="text-[#3344aa]" href="#621">621</a> <a class="text-[#3344aa]" href="#622">622</a> <a class="text-[#3344aa]" href="#623">623</a> <a class="text-[#3344aa]" href="#624">624</a> <a class="text-[#3344aa]" href="#625">625</a> <a class="text-[#3344aa]" href="#631">631</a> <a class="text-[#3344aa]" href="#632">632</a> <a class="text-[#3344aa]" href="#633">633</a> <a class="text-[#3344aa]" href="#641">641</a> <a class="text-[#3344aa]" href="#642">642</a> <a class="text-[#3344aa]" href="#643">643</a> <a class="text-[#3344aa]" href="#644">644</a> <a class="text-[#3344aa]" href="#645">645</a> <a class="text-[#3344aa]" href="#646">646</a> <a class="text-[#3344aa]" href="#651">651</a> <a class="text-[#3344aa]" href="#652">652</a> <a class="text-[#3344aa]" href="#653">653</a> <a class="text-[#3344aa]" href="#654">654</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #3344aa; color: white;">지선버스 (700번대)</th>
<td class="route-list">
<a class="text-[#3344aa]" href="#701">701</a> <a class="text-[#3344aa]" href="#702">702</a> <a class="text-[#3344aa]" href="#703">703</a> <a class="text-[#3344aa]" href="#704">704</a> <a class="text-[#3344aa]" href="#705">705</a> <a class="text-[#3344aa]" href="#706">706</a> <a class="text-[#3344aa]" href="#707">707</a> <a class="text-[#3344aa]" href="#711">711</a> <a class="text-[#3344aa]" href="#712">712</a> <a class="text-[#3344aa]" href="#713">713</a> <a class="text-[#3344aa]" href="#714">714</a> <a class="text-[#3344aa]" href="#721">721</a> <a class="text-[#3344aa]" href="#722">722</a> <a class="text-[#3344aa]" href="#723">723</a> <a class="text-[#3344aa]" href="#724">724</a> <a class="text-[#3344aa]" href="#731">731</a> <a class="text-[#3344aa]" href="#732">732</a> <a class="text-[#3344aa]" href="#733">733</a> <a class="text-[#3344aa]" href="#734">734</a> <a class="text-[#3344aa]" href="#735">735</a> <a class="text-[#3344aa]" href="#736">736</a> <a class="text-[#3344aa]" href="#737">737</a> <a class="text-[#3344aa]" href="#741">741</a> <a class="text-[#3344aa]" href="#742">742</a> <a class="text-[#3344aa]" href="#743">743</a> <a class="text-[#3344aa]" href="#744">744</a>
</td>
</tr>
<tr>
<th class="zone-header" style="background-color: #FFC107; color: black;">마을버스</th>
<td class="route-list bg-gray-50">
<a class="text-gray-700 font-bold" href="#d01">덕주01</a> <a class="text-gray-700 font-bold" href="#d02">덕주02</a> <a class="text-gray-700 font-bold" href="#d03">덕주03</a> <a class="text-gray-700 font-bold" href="#d04">덕주04</a> <a class="text-gray-700 font-bold" href="#d05">덕주05</a> <a class="text-gray-700 font-bold" href="#d06">덕주06</a> | 
                            <a class="text-gray-700 font-bold" href="#j01">조전01</a> <a class="text-gray-700 font-bold" href="#j02">조전02</a> <a class="text-gray-700 font-bold" href="#j03">조전03</a> <a class="text-gray-700 font-bold" href="#j04">조전04</a> <a class="text-gray-700 font-bold" href="#j05">조전05</a> | 
                            <a class="text-gray-700 font-bold" href="#w01">원명01</a> <a class="text-gray-700 font-bold" href="#w02">원명02</a> | <a class="text-gray-700 font-bold" href="#s01">신도01</a>
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