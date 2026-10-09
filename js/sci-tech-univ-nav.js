(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-sci-tech-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#152238] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (#152238 적용) -->
                <div class="bg-[#152238] text-center py-2 px-3">
                    <div class="text-[14px] font-bold text-white flex justify-center items-center">
                        과학기술특성화대학 2.0
                    </div>
                </div>
                
                <!-- open 속성을 추가하여 기본적으로 펼쳐진 상태 유지 -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#152238]/5 border-b border-[#152238] py-1.5 text-[11px] font-bold text-[#152238] cursor-pointer select-none hover:bg-[#152238]/15 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-[16.666%]"><col class="w-[16.666%]"><col class="w-[16.666%]">
                                <col class="w-[16.666%]"><col class="w-[16.666%]"><col class="w-[16.666%]">
                            </colgroup>
                            <tbody>
                                <!-- 6개 과학기술특성화대학 (동일한 서식 및 구조) -->
                                <tr>
                                    <td class="bg-[#003366] text-white p-3 align-middle">
                                        <span class="block text-[15px] font-bold tracking-wide">KAIST</span>
                                        <span class="block text-[11px] font-normal text-gray-300 mt-0.5">한국과학기술원</span>
                                    </td>
                                    <td class="bg-[#A12830] text-white p-3 align-middle">
                                        <span class="block text-[15px] font-bold tracking-wide">GIST</span>
                                        <span class="block text-[11px] font-normal text-gray-300 mt-0.5">광주과학기술원</span>
                                    </td>
                                    <td class="bg-[#231F20] text-white p-3 align-middle">
                                        <span class="block text-[15px] font-bold tracking-wide">DGIST</span>
                                        <span class="block text-[11px] font-normal text-gray-300 mt-0.5">대구경북과학기술원</span>
                                    </td>
                                    <td class="bg-[#00458C] text-white p-3 align-middle">
                                        <span class="block text-[15px] font-bold tracking-wide">UNIST</span>
                                        <span class="block text-[11px] font-normal text-gray-300 mt-0.5">울산과학기술원</span>
                                    </td>
                                    <td class="bg-[#004488] text-white p-3 align-middle">
                                        <a class="block cursor-pointer hover:underline text-white" onclick="goToLink('효빈과학기술원.html')">
                                            <span class="block text-[15px] font-bold tracking-wide">HIST</span>
                                            <span class="block text-[11px] font-normal text-gray-300 mt-0.5">효빈과학기술원</span>
                                        </a>
                                    </td>
                                    <td class="bg-[#692876] text-white p-3 align-middle">
                                        <span class="block text-[15px] font-bold tracking-wide">POSTECH</span>
                                        <span class="block text-[11px] font-normal text-gray-300 mt-0.5">포항공과대학교</span>
                                    </td>
                                </tr>
                                
                                <!-- 하단 관련 문서 -->
                                <tr>
                                    <td colspan="6" class="bg-gray-50 border-t border-[#152238] p-2.5 text-left text-[12px] leading-relaxed break-keep">
                                        <span class="font-bold text-[#152238] mr-1">관련 문서:</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">과학기술원</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">포카전(카포전)</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효히전.html')">효히전</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">STadium</a>
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