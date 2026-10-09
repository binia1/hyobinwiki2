(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-culture-content-container");
        if (!container) return;
        container.innerHTML = `
            <div class="border-2 border-[#003a70] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                <div class="bg-[#003a70] text-center py-2.5 px-3">
                    <div class="text-[15px] font-bold text-white flex justify-center items-center">문화콘텐츠 생산성 우수대학</div>
                </div>
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#003a70]/5 border-b border-[#003a70] py-1.5 text-[11px] font-bold text-[#003a70] cursor-pointer select-none hover:bg-[#003a70]/15 transition-colors [&::-webkit-details-marker]:hidden">[ 펼치기 · 접기 ]</summary>
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup><col class="w-[18%]"><col class="w-[82%]"></colgroup>
                            <tbody>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003a70] text-gray-800 p-2 font-bold text-center align-middle break-keep">선정 대학</th>
                                    <td class="bg-white border border-[#003a70] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">효빈대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">덕남대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">평안명대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전북대학교</a> <span class="text-[11px] text-gray-500 font-normal">(선정예정)</span>
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