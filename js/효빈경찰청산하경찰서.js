(function() {
    const renderHyobinPoliceOfficesNav = () => {
        const container = document.getElementById('hyobin-police-offices-nav-container');
        if (!container) return;

        container.innerHTML = `
<div class="w-full max-w-4xl mx-auto border-2 mb-8 bg-white shadow-md rounded overflow-hidden" style="border-color: var(--wiki-city-color);">
<table class="w-full border-collapse text-center text-[14px]" style="table-layout: fixed;">
<thead>
<tr>
<td class="py-2.5 cursor-pointer select-none border-b" colspan="4" onclick="toggleTable('hyobin-police-offices', 'hyobinPoliceToggleBtn')" style="background-color: var(--wiki-city-color); border-bottom-color: var(--wiki-city-color);">
<div class="flex items-center justify-center gap-3">
<img alt="경찰 로고" class="h-10 object-contain drop-shadow-md" src="이미지/대한민국_경찰청_로고.svg"/>
<div class="text-white text-left leading-tight">
<div class="text-[13px] font-bold tracking-wide">대한민국 경찰청</div>
<div class="text-[20px] font-extrabold tracking-widest drop-shadow-sm">효빈광역시경찰청 산하 경찰서</div>
</div>
</div>
</td>
</tr>
<tr>
<td class="text-white text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-white/20 transition-colors" colspan="4" onclick="toggleTable('hyobin-police-offices', 'hyobinPoliceToggleBtn')" style="background-color: var(--wiki-city-color);">
<span id="hyobinPoliceToggleBtn">[ 접기 ]</span>
</td>
</tr>
</thead>
<tbody class="toggle-body" id="hyobin-police-offices">
<!-- 1열 -->
<tr>
<td class="p-0 border-r border-b border-gray-300" style="width: 25%;">
<div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #21598f;">중부서</div>
<div class="py-2.5 bg-white border-t border-gray-300"><a class="text-black hover:text-[#21598f] font-semibold block w-full" href="효빈중부경찰서.html">효빈중부경찰서</a></div>
</td>
<td class="p-0 border-r border-b border-gray-300" style="width: 25%;">
<div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #ff9922;">동부서★</div>
<div class="py-2.5 bg-white border-t border-gray-300"><a class="text-black hover:text-[#ff9922] font-semibold block w-full" href="효빈동부경찰서.html">효빈동부경찰서</a></div>
</td>
<td class="p-0 border-r border-b border-gray-300" style="width: 25%;">
<div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #00AABB;">서부서</div>
<div class="py-2.5 bg-white border-t border-gray-300"><a class="text-black hover:text-[#00AABB] font-semibold block w-full" href="효빈서부경찰서.html">효빈서부경찰서</a></div>
</td>
<td class="p-0 border-b border-gray-300" style="width: 25%;">
<div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #7799CC;">남부서</div>
<div class="py-2.5 bg-white border-t border-gray-300"><a class="text-black hover:text-[#7799CC] font-semibold block w-full" href="효빈남부경찰서.html">효빈남부경찰서</a></div>
</td>
</tr>
<!-- 2열 -->
<tr>
<td class="p-0 border-r border-b border-gray-300">
<div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #5577AA;">북부서</div>
<div class="py-2.5 bg-white border-t border-gray-300"><a class="text-black hover:text-[#5577AA] font-semibold block w-full" href="효빈북부경찰서.html">효빈북부경찰서</a></div>
</td>
<td class="p-0 border-r border-b border-gray-300">
<div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #006699;">청엽서</div>
<div class="py-2.5 bg-white border-t border-gray-300"><a class="text-black hover:text-[#006699] font-semibold block w-full" href="효빈청엽경찰서.html">효빈청엽경찰서</a></div>
</td>
<td class="p-0 border-r border-b border-gray-300">
<div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #33AAFF;">창전서</div>
<div class="py-2.5 bg-white border-t border-gray-300"><a class="text-black hover:text-[#33AAFF] font-semibold block w-full" href="효빈창전경찰서.html">효빈창전경찰서</a></div>
</td>
<td class="p-0 border-b border-gray-300">
<div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #AA66DD;">안천서</div>
<div class="py-2.5 bg-white border-t border-gray-300"><a class="text-black hover:text-[#AA66DD] font-semibold block w-full" href="효빈안천경찰서.html">효빈안천경찰서</a></div>
</td>
</tr>
<!-- 3열 -->
<tr>
<td class="p-0 border-r border-gray-300">
<div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #8c42c2;">이자서</div>
<div class="py-2.5 bg-white border-t border-gray-300"><a class="text-black hover:text-[#8c42c2] font-semibold block w-full" href="효빈이자경찰서.html">효빈이자경찰서</a></div>
</td>
<td class="p-0 border-r border-gray-300">
<div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #338866;">고송서</div>
<div class="py-2.5 bg-white border-t border-gray-300"><a class="text-black hover:text-[#338866] font-semibold block w-full" href="효빈고송경찰서.html">효빈고송경찰서</a></div>
</td>
<td class="p-0 border-gray-300" colspan="2">
<div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #84C36E;">탄성서</div>
<div class="py-2.5 bg-white border-t border-gray-300"><a class="text-black hover:text-[#84C36E] font-semibold block w-full" href="효빈탄성경찰서.html">효빈탄성경찰서</a></div>
</td>
</tr>
</tbody>
</table>
</div>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderHyobinPoliceOfficesNav);
    } else {
        renderHyobinPoliceOfficesNav();
    }
})();