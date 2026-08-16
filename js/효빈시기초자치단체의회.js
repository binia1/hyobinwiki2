(function() {
    const renderHyobinCouncilOfficesNav = () => {
        const container = document.getElementById('hyobin-council-offices-nav-container');
        if (!container) return;

        container.innerHTML = `
<div class="w-full shadow-sm mx-auto border-2 bg-white" style="border-color: var(--wiki-city-color); max-width: 100%;">
    <table class="w-full border-collapse text-center text-[14px]" style="table-layout: fixed;">
        <thead>
            <tr>
                <td class="py-2.5 cursor-pointer select-none" colspan="5" onclick="toggleTable('hyobin-council-offices-top', 'hyobinCouncilToggleBtnTop')" style="background-color: var(--wiki-city-color); border-bottom: 1px solid rgba(255,255,255,0.4);">
                    <div class="flex items-center justify-center gap-3">
                        <img alt="지방의회 로고" class="h-10 object-contain drop-shadow-md" onerror="this.outerHTML='<div class=\\'text-white font-bold text-[14px]\\'>COUNCIL</div>';" src="이미지/의회_로고.svg"/>
                        <div class="text-white text-left leading-tight">
                            <div class="text-[13px] font-bold tracking-wide">효빈광역시</div>
                            <div class="text-[20px] font-extrabold tracking-widest drop-shadow-sm">기초자치단체 의회</div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="text-white py-1.5 cursor-pointer font-bold select-none hover:bg-white/20 transition-colors" colspan="5" onclick="toggleTable('hyobin-council-offices-top', 'hyobinCouncilToggleBtnTop')" style="background-color: var(--wiki-city-color); border-bottom: 1px solid rgba(255,255,255,0.4);">
                    <span id="hyobinCouncilToggleBtnTop">[ 접기 ]</span>
                </td>
            </tr>
        </thead>
        <tbody class="toggle-body" id="hyobin-council-offices-top">
            <tr>
                <td class="text-white py-1.5 font-bold" colspan="5" style="background-color: var(--wiki-city-color); border-bottom: 1px solid rgba(255,255,255,0.4);">
                    자치구
                </td>
            </tr>
            <tr>
                <td class="p-0 border-r border-white/50" style="width: 20%;">
                    <div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #BB9955;">
                        <img class="h-9 mb-1.5 object-contain" onerror="this.style.display='none'" src="이미지/중구_흰색로고.webp"/>중구
                    </div>
                    <div class="py-2.5 bg-white border-t border-gray-300">
                        <a class="text-black hover:text-[#BB9955] font-semibold text-decoration-none block w-full" href="중구의회.html">중구의회</a>
                    </div>
                </td>
                <td class="p-0 border-r border-white/50" style="width: 20%;">
                    <div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #FF9922;">
                        <img class="h-9 mb-1.5 object-contain" onerror="this.style.display='none'" src="이미지/동구_흰색로고.webp"/>동구
                    </div>
                    <div class="py-2.5 bg-white border-t border-gray-300">
                        <a class="text-black hover:text-[#FF9922] font-semibold text-decoration-none block w-full" href="동구의회.html">동구의회</a>
                    </div>
                </td>
                <td class="p-0 border-r border-white/50" style="width: 20%;">
                    <div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #00AABB;">
                        <img class="h-9 mb-1.5 object-contain" onerror="this.style.display='none'" src="이미지/서구_흰색로고.webp"/>서구
                    </div>
                    <div class="py-2.5 bg-white border-t border-gray-300">
                        <a class="text-black hover:text-[#00AABB] font-semibold text-decoration-none block w-full" href="서구의회.html">서구의회</a>
                    </div>
                </td>
                <td class="p-0 border-r border-white/50" style="width: 20%;">
                    <div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #DDBBFF;">
                        <img class="h-9 mb-1.5 object-contain" onerror="this.style.display='none'" src="이미지/남구_흰색로고.webp"/>남구
                    </div>
                    <div class="py-2.5 bg-white border-t border-gray-300">
                        <a class="text-black hover:text-[#a066dd] font-semibold text-decoration-none block w-full" href="남구의회.html">남구의회</a>
                    </div>
                </td>
                <td class="p-0 border-r border-white/50" style="width: 20%;">
                    <div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #7799CC;">
                        <img class="h-9 mb-1.5 object-contain" onerror="this.style.display='none'" src="이미지/북구_흰색로고.webp"/>북구
                    </div>
                    <div class="py-2.5 bg-white border-t border-gray-300">
                        <a class="text-black hover:text-[#7799CC] font-semibold text-decoration-none block w-full" href="북구의회.html">북구의회</a>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="text-white py-1.5 font-bold border-r border-white/50" colspan="3" style="background-color: var(--wiki-city-color); border-bottom: 1px solid rgba(255,255,255,0.4);">자치구</td>
                <td class="text-white py-1.5 font-bold" colspan="2" style="background-color: var(--wiki-city-color); border-bottom: 1px solid rgba(255,255,255,0.4);">자치군</td>
            </tr>
            <tr>
                <td class="p-0 border-r border-white/50" style="width: 20%;">
                    <div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #006699;">
                        <img class="h-9 mb-1.5 object-contain" onerror="this.style.display='none'" src="이미지/청엽구_흰색로고.webp"/>청엽구
                    </div>
                    <div class="py-2.5 bg-white border-t border-gray-300">
                        <a class="text-black hover:text-[#006699] font-semibold text-decoration-none block w-full" href="청엽구의회.html">청엽구의회</a>
                    </div>
                </td>
                <td class="p-0 border-r border-white/50" style="width: 20%;">
                    <div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #AA66DD;">
                        <img class="h-9 mb-1.5 object-contain" onerror="this.style.display='none'" src="이미지/안천구_흰색로고.webp"/>안천구
                    </div>
                    <div class="py-2.5 bg-white border-t border-gray-300">
                        <a class="text-black hover:text-[#AA66DD] font-semibold text-decoration-none block w-full" href="안천구의회.html">안천구의회</a>
                    </div>
                </td>
                <td class="p-0 border-r border-white/50" style="width: 20%;">
                    <div class="py-3 font-bold text-white flex flex-col items-center justify-center" style="background-color: #33AAFF;">
                        <img class="h-9 mb-1.5 object-contain" onerror="this.style.display='none'" src="이미지/창전구_흰색로고.webp"/>창전구
                    </div>
                    <div class="py-2.5 bg-white border-t border-gray-300">
                        <a class="text-black hover:text-[#33AAFF] font-semibold text-decoration-none block w-full" href="창전구의회.html">창전구의회</a>
                    </div>
                </td>
                <td class="p-0 border-r border-white/50" colspan="2" style="width: 40%;">
                    <div class="py-3 font-bold flex flex-col items-center justify-center text-gray-800" style="background-color: #BBFF64;">
                        <img class="h-9 mb-1.5 object-contain opacity-80" onerror="this.style.display='none'" src="이미지/탄성군_흰색로고.webp"/>탄성군
                    </div>
                    <div class="py-2.5 bg-white border-t border-gray-300">
                        <a class="text-black hover:text-[#77bb00] font-semibold text-decoration-none block w-full" href="탄성군의회.html">탄성군의회</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderHyobinCouncilOfficesNav);
    } else {
        renderHyobinCouncilOfficesNav();
    }
})();