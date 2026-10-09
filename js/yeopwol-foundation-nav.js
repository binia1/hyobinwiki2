(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-yeopwol-foundation-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#182C53] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (#182C53 엽월 사파이어 적용) -->
                <div class="bg-[#182C53] text-center py-2.5 px-3">
                    <span class="text-[13px] font-normal block mb-0.5 text-gray-300"></span>
                    <span class="font-bold text-[16px] text-white">학교법인 엽월학원</span>
                </div>
                
                <!-- 기존 nw-details 클래스로 위키 중복 텍스트 방지 및 기본 접힌 상태 -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#182C53]/10 border-b border-[#182C53] py-1.5 text-[11px] font-bold text-[#182C53] cursor-pointer select-none hover:bg-[#182C53]/20 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup><col class="w-[20%]"><col class="w-[80%]"></colgroup>
                            <tbody>
                                <tr>
                                    <th class="bg-gray-50 border border-[#182C53] text-gray-800 p-2 font-bold text-center align-middle break-keep">학원 법인</th>
                                    <td class="bg-white border border-[#182C53] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">학교법인 엽월학원</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#182C53] text-gray-800 p-2 font-bold text-center align-middle break-keep">대학교</th>
                                    <td class="bg-white border border-[#182C53] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('엽월대학교.html')">엽월대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#182C53] text-gray-800 p-2 font-bold text-center align-middle break-keep">고등학교</th>
                                    <td class="bg-white border border-[#182C53] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">창건고등학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#182C53] text-gray-800 p-2 font-bold text-center align-middle break-keep">중학교</th>
                                    <td class="bg-white border border-[#182C53] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">창건중학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span><a class="text-[#0275d8] hover:underline cursor-pointer">평당중학교</a>
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