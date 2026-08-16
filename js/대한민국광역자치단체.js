(function() {
    const renderKoreaMetroGovNav = () => {
        const container = document.getElementById('korea-metro-gov-nav-container');
        if (!container) return;

        container.innerHTML = `
<table class="council-grid-table">
<tr>
<td colspan="5" style="border-color: #000; border-bottom: 1px solid #ccc; padding: 10px; background: linear-gradient(120deg, #fff 5%, #000 5.1% 9%, #fff 9.1% 10%, #000 10.1% 14%, #fff 14.1% 15%, #000 15.1% 19%, #fff 19.1% 81%, #cd313a 81.1% 90%, #0047a0 90.1%);">
<div class="flex justify-center items-center gap-3">
<img alt="대한민국 국장" class="bg-white rounded-full w-10 h-10 object-contain shadow-sm border border-gray-200 p-1" src="이미지/대한민국_국장.svg"/>
<div class="text-left text-black leading-tight">
<div class="text-xs drop-shadow-md font-bold text-gray-800">대한민국</div>
<div class="text-xl font-extrabold tracking-widest drop-shadow-md">광역자치단체</div>
</div>
</div>
</td>
</tr>
<tr>
<td class="hover:bg-gray-200 transition" colspan="5" onclick="toggleBody('council-nav-body')" style="background: #f8f9fa; padding: 8px; border-bottom: 1px solid #ccc; color: #444; font-size: 13px; cursor: pointer; user-select: none;">
                [ 펼치기 · 접기 ]
            </td>
</tr>
<tbody class="hidden-content" id="council-nav-body">
<tr>
<td style="width: 20%;"><div class="color-bar" style="background-color: #ae1932;"></div><div class="name-bar"><a href="서울특별시청.html" style="color: #ae1932;">서울특별시청</a></div></td>
<td style="width: 20%;"><div class="color-bar" style="background-color: #E5007F;"></div><div class="name-bar"><a href="부산광역시청.html" style="color: #E5007F;">부산광역시청</a></div></td>
<td style="width: 20%;"><div class="color-bar" style="background-color: #008837;"></div><div class="name-bar"><a href="대구광역시청.html" style="color: #008837;">대구광역시청</a></div></td>
<td style="width: 20%;"><div class="color-bar" style="background-color: #0079c1;"></div><div class="name-bar"><a href="인천광역시청.html" style="color: #0079c1;">인천광역시청</a></div></td>
<td style="width: 20%;"><div class="color-bar" style="background-color: #e8340b;"></div><div class="name-bar"><a href="광주광역시청.html" style="color: #e8340b;">광주광역시청</a></div></td>
</tr>
<tr>
<td><div class="color-bar" style="background-color: #00ae4d;"></div><div class="name-bar"><a href="대전광역시청.html" style="color: #00ae4d;">대전광역시청</a></div></td>
<td><div class="color-bar" style="background-color: #008c95;"></div><div class="name-bar"><a href="울산광역시청.html" style="color: #008c95;">울산광역시청</a></div></td>
<td><div class="color-bar" style="background-color: #00a0c6;"></div><div class="name-bar"><a href="세종특별자치시청.html" style="color: #00a0c6;">세종특별자치시청</a></div></td>
<td><div class="color-bar" style="background-color: #164194;"></div><div class="name-bar"><a href="경기도청.html" style="color: #164194;">경기도청</a></div></td>
<td><div class="color-bar" style="background-color: #D50037;"></div><div class="name-bar"><a href="강원특별자치도청.html" style="color: #D50037;">강원특별자치도청</a></div></td>
</tr>
<tr>
<td><div class="color-bar" style="background-color: #6f448c;"></div><div class="name-bar"><a href="충청북도청.html" style="color: #6f448c;">충청북도청</a></div></td>
<td><div class="color-bar" style="background-color: #8c8c70;"></div><div class="name-bar"><a href="충청남도청.html" style="color: #8c8c70;">충청남도청</a></div></td>
<td><div class="color-bar" style="background-color: #024694;"></div><div class="name-bar"><a href="전북특별자치도청.html" style="color: #024694;">전북특별자치도청</a></div></td>
<td><div class="color-bar" style="background-color: #ffcc00;"></div><div class="name-bar"><a href="전라남도청.html" style="color: #d4a000;">전라남도청</a></div></td>
<td><div class="color-bar" style="background-color: #0070bb;"></div><div class="name-bar"><a href="경상북도청.html" style="color: #0070bb;">경상북도청</a></div></td>
</tr>
<tr>
<td><div class="color-bar" style="background-color: #f15a38;"></div><div class="name-bar"><a href="경상남도청.html" style="color: #f15a38;">경상남도청</a></div></td>
<td><div class="color-bar" style="background-color: #939499;"></div><div class="name-bar"><a href="제주특별자치도청.html" style="color: #666;">제주특별자치도청</a></div></td>
<td><div class="color-bar" style="background-color: #7777AA;"></div><div class="name-bar bg-gray-100"><a href="효빈광역시청.html" style="color: #7777AA;">효빈광역시청</a></div></td>
<td><div class="color-bar" style="background-color: #2ECC71;"></div><div class="name-bar"><a href="덕빈북도청.html" style="color: #2ECC71;">덕빈북도청</a></div></td>
<td><div class="color-bar" style="background-color: #335566;"></div><div class="name-bar"><a href="덕빈남도청.html" style="color: #335566;">덕빈남도청</a></div></td>
</tr>
</tbody>
</table>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderKoreaMetroGovNav);
    } else {
        renderKoreaMetroGovNav();
    }
})();