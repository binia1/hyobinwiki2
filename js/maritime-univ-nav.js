(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-maritime-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#003a70] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (#003a70 적용 + 대한민국 정부 상징) -->
                <div class="bg-[#003a70] text-center py-2 px-3">
                    <div class="text-[14px] font-bold text-white flex justify-center items-center gap-1.5">
                        <img alt="정부상징" src="이미지/svg/대한민국_정부_로고.svg" class="h-4 inline-block object-contain" onerror="this.style.display='none'"/>
                        대한민국의 해양대학교
                    </div>
                </div>
                
                <!-- 펼쳐진 상태 유지 -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#003a70]/5 border-b border-[#003a70] py-1 text-[11px] font-bold text-[#003a70] cursor-pointer select-none hover:bg-[#003a70]/15 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-1/4">
                                <col class="w-1/4">
                                <col class="w-1/4">
                                <col class="w-1/4">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <!-- 1. 국립한국해양대학교 (로고 흰색화 필터 적용) -->
                                    <td class="bg-[#102B82] border-r border-white/20 p-4 align-middle transition-opacity hover:opacity-95">
                                        <a class="block cursor-pointer text-white no-underline">
                                            <img src="이미지/svg/한국해양대학교.svg" class="h-12 w-auto mx-auto mb-2 object-contain" style="filter: brightness(0) invert(1);" "/>
                                            <span class="block text-[13px] font-bold tracking-tight text-white hover:underline">국립한국해양대학교</span>
                                        </a>
                                    </td>
                                    
                                    <!-- 2. 국립목포해양대학교 (기본 유지) -->
                                    <td class="bg-[#00589B] border-r border-white/20 p-4 align-middle transition-opacity hover:opacity-95">
                                        <a class="block cursor-pointer text-white no-underline">
                                            <img src="이미지/svg/목포해양대학교.svg" class="h-12 w-auto mx-auto mb-2 object-contain" "/>
                                            <span class="block text-[13px] font-bold tracking-tight text-white hover:underline">국립목포해양대학교</span>
                                        </a>
                                    </td>
                                    
                                    <!-- 3. 국립효빈해양대학교 (로고 흰색화 필터 적용) -->
                                    <td class="bg-[#004080] border-r border-white/20 p-4 align-middle transition-opacity hover:opacity-95">
                                        <a class="block cursor-pointer text-white no-underline" onclick="goToLink('효빈해양대학교.html')">
                                            <img src="이미지/svg/효빈_한바다_퍼스널_아이콘.svg" class="h-12 w-auto mx-auto mb-2 object-contain" style="filter: brightness(0) invert(1);" "/>
                                            <span class="block text-[13px] font-bold tracking-tight text-white hover:underline">국립효빈해양대학교</span>
                                        </a>
                                    </td>
                                    
                                    <!-- 4. 국립서해해양대학교 (기본 유지) -->
                                    <td class="bg-[#004B87] p-4 align-middle transition-opacity hover:opacity-95">
                                        <a class="block cursor-pointer text-white no-underline" onclick="goToLink('서해해양대학교.html')">
                                            <img src="이미지/svg/국립서해해양대학교_UI.svg" class="h-12 w-auto mx-auto mb-2 object-contain" "/>
                                            <span class="block text-[13px] font-bold tracking-tight text-white hover:underline">국립서해해양대학교</span>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </details>
            </div>
        `;

        container.innerHTML = templateHTML;
    });
})();