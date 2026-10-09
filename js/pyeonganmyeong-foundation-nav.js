(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-pyeonganmyeong-foundation-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#74F466] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (#74F466 스미레 그린 적용) -->
                <div class="bg-[#74F466] text-center py-2.5 px-3">
                    <span class="text-[13px] font-normal block mb-0.5 text-[#C5CAE9]"></span>
                    <span class="font-bold text-[16px] text-white">학교법인 평안명학원</span>
                </div>
                
                <!-- 기존 nw-details 클래스를 활용하여 위키 자체 중복 텍스트 방지 및 접힌 상태로 시작 -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#74F466]/10 border-b border-[#74F466] py-1.5 text-[11px] font-bold text-gray-800 cursor-pointer select-none hover:bg-[#74F466]/20 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup><col class="w-[20%]"><col class="w-[80%]"></colgroup>
                            <tbody>
                                <tr>
                                    <th class="bg-gray-50 border border-[#74F466] text-gray-800 p-2 font-bold text-center align-middle break-keep">학원 법인</th>
                                    <td class="bg-white border border-[#74F466] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">학교법인 평안명학원</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#74F466] text-gray-800 p-2 font-bold text-center align-middle break-keep">대학교</th>
                                    <td class="bg-white border border-[#74F466] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('평안명대학교.html')">평안명대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#74F466] text-gray-800 p-2 font-bold text-center align-middle break-keep">고등학교</th>
                                    <td class="bg-white border border-[#74F466] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">청남고등학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#74F466] text-gray-800 p-2 font-bold text-center align-middle break-keep">중학교</th>
                                    <td class="bg-white border border-[#74F466] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">유류중학교</a>
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