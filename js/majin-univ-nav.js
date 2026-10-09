(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-majin-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#ff99be] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (마진시 심볼 100% 순백색 실루엣 필터 적용) -->
                <div class="bg-[#ff99be] text-center py-2.5 px-3">
                    <div class="text-[15px] font-bold text-gray-900 flex justify-center items-center gap-2">
                        <img src="이미지/마진시.webp" alt="" class="h-4 inline-block object-contain" style="filter: brightness(0) invert(1);" onerror="this.src='이미지/마진시.webp'; this.style.filter='brightness(0) invert(1)'; this.onerror=function(){this.style.display='none';};"/>
                        <span>마진시의 대학</span>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" open>
                    <summary class="list-none block w-full text-center bg-[#ff99be]/15 border-b border-[#ff99be] py-1.5 text-[11px] font-bold text-gray-800 cursor-pointer select-none hover:bg-[#ff99be]/30 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <!-- 캠퍼스 표기 안내문 바 -->
                        <div class="text-[11px] px-3 py-1.5 border-b border-[#ff99be] text-gray-600 text-left bg-gray-50 break-keep">
                            각 대학의 제1캠퍼스(본교)는 캠퍼스를 표기하지 않고, 2캠퍼스(이원화)부터 "OO대학교(AA캠퍼스)"과 같이 표기함. 분교는 캠퍼스명 표시에서 OO대학교 AA캠퍼스로 괄호 없이 표시함.
                        </div>

                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup>
                                <col class="w-[14%]">
                                <col class="w-[7%]">
                                <col class="w-[79%]">
                            </colgroup>
                            <tbody>
                                <!-- 1. 국립 (1행: ㄷ) -->
                                <tr>
                                    <th class="bg-[#ff99be] border border-[#ff99be] text-gray-900 p-2 font-bold text-center align-middle break-keep text-[13px]">
                                        국립
                                    </th>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㄷ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/국립덕남대학교_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕남대학교.html')">덕남대학교(마진캠퍼스)</a>
                                        </span>
                                    </td>
                                </tr>

                                <!-- 2. 사립 (1행: ㅁ) -->
                                <tr>
                                    <th class="bg-[#ff99be] border border-[#ff99be] text-gray-900 p-2 font-bold text-center align-middle break-keep text-[13px]">
                                        사립
                                    </th>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㅁ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/svg/마진해양대학교_UI.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('마진해양대학.html')">마진해양대학</a>
                                        </span>
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