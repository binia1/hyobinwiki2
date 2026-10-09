(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-ai-edu-container");
        if (!container) return;
        container.innerHTML = `
            <div class="border-2 border-[#003a70] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                <div class="bg-[#003a70] py-2.5 px-3 flex justify-center">
                    <div class="inline-flex items-center border border-white/40 rounded px-4 py-1.5 gap-3">
                        <img alt="정부상징" src="이미지/svg/대한민국_정부_로고.svg" class="h-8 object-contain" onerror="this.style.display='none'"/>
                        <div class="text-left text-white leading-tight">
                            <div class="text-[11px] font-normal opacity-80">AI Education Alliance and Policy lab</div>
                            <div class="text-[14px] font-bold">교원의 인공지능·디지털 역량 강화 지원 체제</div>
                        </div>
                    </div>
                </div>
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#003a70]/5 border-b border-[#003a70] py-1.5 text-[11px] font-bold text-[#003a70] cursor-pointer select-none hover:bg-[#003a70]/15 transition-colors [&::-webkit-details-marker]:hidden">[ 펼치기 · 접기 ]</summary>
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-[16%]"><col class="w-[16%]"><col class="w-[16%]"><col class="w-[16%]"><col class="w-[16%]"><col class="w-[20%]">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003a70] text-gray-800 py-2 font-bold">수도권</th>
                                    <th class="bg-gray-50 border border-[#003a70] text-gray-800 py-2 font-bold">충청권</th>
                                    <th class="bg-gray-50 border border-[#003a70] text-gray-800 py-2 font-bold">경북권</th>
                                    <th class="bg-gray-50 border border-[#003a70] text-gray-800 py-2 font-bold">경남권</th>
                                    <th class="bg-gray-50 border border-[#003a70] text-gray-800 py-2 font-bold">호남권</th>
                                    <th class="bg-gray-50 border border-[#003a70] text-gray-800 py-2 font-bold">덕빈권</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-3 align-top">
                                        <img src="이미지/svg/서울대.svg" class="w-[60px] h-[60px] object-contain mx-auto mb-2" onerror="this.style.display='none'"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block font-bold">서울대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003a70] p-3 align-top">
                                        <img src="이미지/svg/공주대.svg" class="w-[60px] h-[60px] object-contain mx-auto mb-2" onerror="this.style.display='none'"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block font-bold">국립공주대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003a70] p-3 align-top">
                                        <img src="이미지/svg/경북대.svg" class="w-[60px] h-[60px] object-contain mx-auto mb-2" onerror="this.style.display='none'"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block font-bold">경북대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003a70] p-3 align-top">
                                        <img src="이미지/svg/부산대.svg" class="w-[60px] h-[60px] object-contain mx-auto mb-2" onerror="this.style.display='none'"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block font-bold">부산대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003a70] p-3 align-top">
                                        <img src="이미지/svg/전남대.svg" class="w-[60px] h-[60px] object-contain mx-auto mb-2" onerror="this.style.display='none'"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block font-bold">전남대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003a70] p-3 align-top">
                                        <img src="이미지/효빈대_로고.webp" class="w-[60px] h-[60px] object-contain mx-auto mb-2" onerror="this.style.display='none'"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block font-bold">효빈대학교</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </details>
            </div>
        `;
    });
})();