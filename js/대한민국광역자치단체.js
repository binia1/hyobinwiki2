(function() {
    const renderKoreaMetroGovNav = () => {
        const container = document.getElementById('korea-metro-gov-nav-container');
        if (!container) return;

        container.innerHTML = `
<style>
    /* 로고 색상 반전 및 레이아웃을 위한 스타일 캡슐화 */
    #korea-metro-gov-nav-container .color-bar {
        height: 32px; border-bottom: 1px solid #ccc; display: flex; justify-content: center; align-items: center;
    }
    #korea-metro-gov-nav-container .color-bar img {
        height: 20px; filter: brightness(0) invert(1); object-fit: contain;
    }
    #korea-metro-gov-nav-container .name-bar {
        height: 32px; background: white; display: flex; justify-content: center; align-items: center; padding: 0 4px;
    }
    #korea-metro-gov-nav-container a { text-decoration: none; word-break: keep-all; }
    #korea-metro-gov-nav-container a:hover { text-decoration: underline; }
    #korea-metro-gov-nav-container td { border: 1px solid #ccc; padding: 0; vertical-align: middle; }
</style>
<table class="council-grid-table" style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.8rem; font-weight: bold; margin: 0; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
<colgroup>
    <col style="width: 20%;">
    <col style="width: 20%;">
    <col style="width: 20%;">
    <col style="width: 20%;">
    <col style="width: 20%;">
</colgroup>
<tr>
<td colspan="5" style="border-color: #000; border-bottom: 1px solid #ccc; padding: 10px; background: linear-gradient(120deg, #fff 5%, #000 5.1% 9%, #fff 9.1% 10%, #000 10.1% 14%, #fff 14.1% 15%, #000 15.1% 19%, #fff 19.1% 81%, #cd313a 81.1% 90%, #0047a0 90.1%);">
<div class="flex justify-center items-center gap-3">
<img alt="대한민국 국장" class="bg-white rounded-full w-10 h-10 object-contain shadow-sm border border-gray-200 p-1" src="이미지/svg/대한민국_국장.svg" onerror="this.style.display='none'"/>
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
<tbody class="hidden-content" id="council-nav-body" style="display: table-row-group;">
<!-- 1번째 줄 -->
<tr>
<td><div class="color-bar" style="background-color: #ae1932;"><img src="이미지/svg/서울특별시.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="서울특별시청.html" style="color: #ae1932;">서울특별시청</a></div></td>
<td><div class="color-bar" style="background-color: #003da5;"><img src="이미지/svg/전남광주통합특별시.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="전남광주통합특별시청.html" style="color: #003da5;">전남광주통합특별시청</a></div></td>
<td><div class="color-bar" style="background-color: #E5007F;"><img src="이미지/svg/부산광역시.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="부산광역시청.html" style="color: #E5007F;">부산광역시청</a></div></td>
<td><div class="color-bar" style="background-color: #008837;"><img src="이미지/svg/대구광역시.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="대구광역시청.html" style="color: #008837;">대구광역시청</a></div></td>
<td><div class="color-bar" style="background-color: #0079c1;"><img src="이미지/svg/인천광역시.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="인천광역시청.html" style="color: #0079c1;">인천광역시청</a></div></td>
</tr>

<!-- 2번째 줄 -->
<tr>
<td><div class="color-bar" style="background-color: #00ae4d;"><img src="이미지/svg/대전광역시.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="대전광역시청.html" style="color: #00ae4d;">대전광역시청</a></div></td>
<td><div class="color-bar" style="background-color: #008c95;"><img src="이미지/svg/울산광역시.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="울산광역시청.html" style="color: #008c95;">울산광역시청</a></div></td>
<td><div class="color-bar" style="background-color: #00a0c6;"><img src="이미지/svg/세종특별자치시.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="세종특별자치시청.html" style="color: #00a0c6;">세종특별자치시청</a></div></td>
<td><div class="color-bar" style="background-color: #164194;"><img src="이미지/svg/경기도.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="경기도청.html" style="color: #164194;">경기도청</a></div></td>
<td><div class="color-bar" style="background-color: #D50037;"><img src="이미지/svg/강원도.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="강원특별자치도청.html" style="color: #D50037;">강원특별자치도청</a></div></td>
</tr>

<!-- 3번째 줄 -->
<tr>
<td><div class="color-bar" style="background-color: #6f448c;"><img src="이미지/svg/충청북도.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="충청북도청.html" style="color: #6f448c;">충청북도청</a></div></td>
<td><div class="color-bar" style="background-color: #8c8c70;"><img src="이미지/svg/충청남도.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="충청남도청.html" style="color: #8c8c70;">충청남도청</a></div></td>
<td><div class="color-bar" style="background-color: #024694;"><img src="이미지/svg/전북특별자치도.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="전북특별자치도청.html" style="color: #024694;">전북특별자치도청</a></div></td>
<td><div class="color-bar" style="background-color: #0070bb;"><img src="이미지/svg/경상북도.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="경상북도청.html" style="color: #0070bb;">경상북도청</a></div></td>
<td><div class="color-bar" style="background-color: #f15a38;"><img src="이미지/svg/경상남도.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="경상남도청.html" style="color: #f15a38;">경상남도청</a></div></td>
</tr>

<!-- 4번째 줄 -->
<tr>
<td colspan="2"><div class="color-bar" style="background-color: #939499;"><img src="이미지/svg/제주특별자치도.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="제주특별자치도청.html" style="color: #666;">제주특별자치도청</a></div></td>
<td><div class="color-bar" style="background-color: #7777AA;"><img src="이미지/hyobin1.webp" onerror="this.style.display='none'"></div><div class="name-bar"><a href="효빈광역시청.html" style="color: #7777AA;">효빈광역시청</a></div></td>
<td><div class="color-bar" style="background-color: #4ad898;"><img src="이미지/svg/덕빈북도.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="덕빈북도청.html" style="color: #4ad898;">덕빈북도청</a></div></td>
<td><div class="color-bar" style="background-color: #335566;"><img src="이미지/svg/덕빈남도.svg" onerror="this.style.display='none'"></div><div class="name-bar"><a href="덕빈남도청.html" style="color: #335566;">덕빈남도청</a></div></td>
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