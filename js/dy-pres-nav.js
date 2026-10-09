(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-dy-pres-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#003a70] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 공통 헤더 영역 -->
                <div class="bg-[#003a70] text-center py-2.5 px-3">
                    <div class="text-[15px] font-bold text-white flex justify-center items-center gap-2">
                        덕빈-영남 6개 대학교 총장협의회
                    </div>
                </div>
                
                <!-- 위키 자체 중복 텍스트 방지용 nw-details 유지 및 접힌 상태로 시작 -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#003a70]/5 border-b border-[#003a70] py-1.5 text-[11px] font-bold text-[#003a70] cursor-pointer select-none hover:bg-[#003a70]/15 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-[16.66%]"><col class="w-[16.66%]"><col class="w-[16.66%]">
                                <col class="w-[16.66%]"><col class="w-[16.66%]"><col class="w-[16.66%]">
                            </colgroup>
                            <tbody>
                                <!-- 지역 구분 (상단 컬러 헤더) -->
                                <tr>
                                    <th class="bg-[#74F466] border-b border-white text-white p-2 font-bold break-keep">덕빈(효빈)</th>
                                    <th class="bg-[#0F766E] border-b border-white text-white p-2 font-bold break-keep">덕빈(덕북)</th>
                                    <th class="bg-[#B32624] border-b border-white text-white p-2 font-bold break-keep">덕빈(덕남)</th>
                                    <th class="bg-[#003580] border-b border-white text-white p-2 font-bold break-keep">영남(부산)</th>
                                    <th class="bg-[#002266] border-b border-white text-white p-2 font-bold break-keep">영남(대구·경북)</th>
                                    <th class="bg-[#005a32] border-b border-white text-white p-2 font-bold break-keep">영남(울산)</th>
                                </tr>
                                
                                <!-- 대학 로고 영역 -->
                                <tr>
                                    <td class="bg-white border-x border-gray-200 p-2 h-[150px] align-middle">
                                        <img src="이미지/평안명대학교_UI.webp" class="h-[100px] w-auto mx-auto object-contain" ">
                                    </td>
                                    <td class="bg-white border-x border-gray-200 p-2 h-[150px] align-middle">
                                        <img src="이미지/저소대학교_UI.webp" class="h-[100px] w-auto mx-auto object-contain" ">
                                    </td>
                                    <td class="bg-white border-x border-gray-200 p-2 h-[150px] align-middle">
                                        <img src="이미지/svg/낙주대학교.svg" class="h-[100px] w-auto mx-auto object-contain" ">
                                    </td>
                                    <td class="bg-white border-x border-gray-200 p-2 h-[150px] align-middle">
                                        <img src="이미지/svg/경성대학교.svg" class="h-[100px] w-auto mx-auto object-contain" ">
                                    </td>
                                    <td class="bg-white border-x border-gray-200 p-2 h-[150px] align-middle">
                                        <img src="이미지/svg/영남대학교.svg" class="h-[100px] w-auto mx-auto object-contain" ">
                                    </td>
                                    <td class="bg-white border-x border-gray-200 p-2 h-[150px] align-middle">
                                        <img src="이미지/svg/울산대학교.svg" class="h-[100px] w-auto mx-auto object-contain" ">
                                    </td>
                                </tr>
                                
                                <!-- 대학 명칭 및 링크 (하단 컬러 푸터) -->
                                <tr>
                                    <td class="bg-[#74F466] text-white p-2 font-bold break-keep">
                                        <a class="cursor-pointer hover:underline" onclick="goToLink('평안명대학교.html')">평안명대학교</a>
                                    </td>
                                    <td class="bg-[#0F766E] text-white p-2 font-bold break-keep">
                                        <a class="cursor-pointer hover:underline" onclick="goToLink('저소대학교.html')">저소대학교</a>
                                    </td>
                                    <td class="bg-[#B32624] text-white p-2 font-bold break-keep">
                                        <a class="cursor-pointer hover:underline" onclick="goToLink('낙주대학교.html')">낙주대학교</a>
                                    </td>
                                    <td class="bg-[#003580] text-white p-2 font-bold break-keep">
                                        <a class="cursor-pointer hover:underline">경성대학교</a>
                                    </td>
                                    <td class="bg-[#002266] text-white p-2 font-bold break-keep">
                                        <a class="cursor-pointer hover:underline">영남대학교</a>
                                    </td>
                                    <td class="bg-[#005a32] text-white p-2 font-bold break-keep">
                                        <a class="cursor-pointer hover:underline">울산대학교</a>
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