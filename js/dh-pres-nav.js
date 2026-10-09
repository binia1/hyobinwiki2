(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-dh-pres-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#003a70] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 공통 헤더 영역 -->
                <div class="bg-[#003a70] text-center py-2.5 px-3">
                    <div class="text-[15px] font-bold text-white flex justify-center items-center gap-2">
                        덕빈-호남 5개 대학교 총장협의회
                    </div>
                </div>
                
                <!-- 기존 nw-details 클래스로 위키 중복 텍스트 방지 및 기본 접힌 상태 -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#003a70]/5 border-b border-[#003a70] py-1.5 text-[11px] font-bold text-[#003a70] cursor-pointer select-none hover:bg-[#003a70]/15 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-[20%]"><col class="w-[20%]"><col class="w-[20%]">
                                <col class="w-[20%]"><col class="w-[20%]">
                            </colgroup>
                            <tbody>
                                <!-- 지역 구분 (상단 컬러 헤더) -->
                                <tr>
                                    <th class="bg-[#007A33] border-b border-white text-white p-2 font-bold break-keep">덕빈(효빈)</th>
                                    <th class="bg-[#1E3A8A] border-b border-white text-white p-2 font-bold break-keep">덕빈(덕북)</th>
                                    <th class="bg-[#991B1B] border-b border-white text-white p-2 font-bold break-keep">덕빈(덕남)</th>
                                    <th class="bg-[#004795] border-b border-white text-white p-2 font-bold break-keep">호남(광주)</th>
                                    <th class="bg-[#d62828] border-b border-white text-white p-2 font-bold break-keep">호남(전북)</th>
                                </tr>
                                
                                <!-- 대학 로고 영역 (원본 이미지 경로 100% 보존) -->
                                <tr>
                                    <td class="bg-white border-x border-gray-200 p-2 h-[160px] align-middle">
                                        <img src="이미지/삼선대학교_UI.webp" class="h-[110px] w-auto mx-auto object-contain" ">
                                    </td>
                                    <td class="bg-white border-x border-gray-200 p-2 h-[160px] align-middle">
                                        <img src="이미지/빈주대학교_UI.webp" class="h-[110px] w-auto mx-auto object-contain" ">
                                    </td>
                                    <td class="bg-white border-x border-gray-200 p-2 h-[160px] align-middle">
                                        <img src="이미지/svg/방산대학교_UI.svg" class="h-[110px] w-auto mx-auto object-contain" ">
                                    </td>
                                    <td class="bg-white border-x border-gray-200 p-2 h-[160px] align-middle">
                                        <img src="이미지/svg/조선대학교.svg" class="h-[110px] w-auto mx-auto object-contain" ">
                                    </td>
                                    <td class="bg-white border-x border-gray-200 p-2 h-[160px] align-middle">
                                        <img src="이미지/svg/전주대학교.svg" class="h-[110px] w-auto mx-auto object-contain" ">
                                    </td>
                                </tr>
                                
                                <!-- 대학 명칭 및 링크 (하단 컬러 푸터) -->
                                <tr>
                                    <td class="bg-[#007A33] text-white p-2 font-bold break-keep">
                                        <a class="cursor-pointer hover:underline text-white block" onclick="goToLink('삼선대학교.html')">삼선대학교</a>
                                    </td>
                                    <td class="bg-[#1E3A8A] text-white p-2 font-bold break-keep">
                                        <a class="cursor-pointer hover:underline text-white block" onclick="goToLink('빈주대학교.html')">빈주대학교</a>
                                    </td>
                                    <td class="bg-[#991B1B] text-white p-2 font-bold break-keep">
                                        <a class="cursor-pointer hover:underline text-white block" onclick="goToLink('방산대학교.html')">방산대학교</a>
                                    </td>
                                    <td class="bg-[#004795] text-white p-2 font-bold break-keep">
                                        <a class="cursor-pointer hover:underline text-white block">조선대학교</a>
                                    </td>
                                    <td class="bg-[#d62828] text-white p-2 font-bold break-keep">
                                        <a class="cursor-pointer hover:underline text-white block">전주대학교</a>
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