(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-hyobin-campus-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#3344aa] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (#3344aa 효빈대 파랑 적용) -->
                <div class="bg-[#3344aa] text-center py-2.5 px-3">
                    <div class="text-[15px] font-bold text-white flex justify-center items-center gap-2">
                        효빈대학교의 캠퍼스
                    </div>
                </div>
                
                <!-- 위키 중복 텍스트 방지 및 접힌 상태로 시작 -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#3344aa]/5 border-b border-[#3344aa] py-1.5 text-[11px] font-bold text-[#3344aa] cursor-pointer select-none hover:bg-[#3344aa]/15 transition-colors [&::-webkit-details-marker]:hidden">
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
                                <!-- 본캠퍼스 (당선캠퍼스) -->
                                <tr>
                                    <td colspan="4" class="bg-gray-50 border border-[#3344aa] p-3 text-center align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer font-bold text-[13px]" onclick="goToLink('효빈대학교.html')">
                                            당선(본)캠퍼스
                                        </a>
                                    </td>
                                </tr>
                                
                                <!-- 이원화 및 지역 특성화 캠퍼스 4개소 (25% 균등 분할) -->
                                <tr>
                                    <td class="bg-white border border-[#3344aa] p-3 text-center align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교_이자캠퍼스.html')">
                                            이자캠퍼스
                                        </a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-3 text-center align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교_천주캠퍼스.html')">
                                            천주캠퍼스
                                        </a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-3 text-center align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교_낭원캠퍼스.html')">
                                            낭원캠퍼스
                                        </a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-3 text-center align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교_강주캠퍼스.html')">
                                            강주캠퍼스
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