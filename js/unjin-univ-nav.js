(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-unjin-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#bbff64] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (운진군 심볼 100% 순백색 실루엣 필터 적용) -->
                <div class="bg-[#bbff64] text-center py-2.5 px-3">
                    <div class="text-[15px] font-bold text-gray-900 flex justify-center items-center gap-2">
                        <img src="이미지/운진군.webp" alt="" class="h-4 inline-block object-contain" style="filter: brightness(0) invert(1);" onerror="this.src='이미지/운진군.webp'; this.style.filter='brightness(0) invert(1)'; this.onerror=function(){this.style.display='none';};"/>
                        <span>운진군의 대학</span>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" open>
                    <summary class="list-none block w-full text-center bg-[#bbff64]/20 border-b border-[#bbff64] py-1.5 text-[11px] font-bold text-gray-800 cursor-pointer select-none hover:bg-[#bbff64]/35 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <!-- 캠퍼스 표기 안내문 바 -->
                        <div class="text-[11px] px-3 py-1.5 border-b border-[#bbff64] text-gray-600 text-left bg-gray-50 break-keep">
                            각 대학의 제1캠퍼스(본교)는 캠퍼스를 표기하지 않고, 2캠퍼스(이원화)부터 "OO대학교(AA캠퍼스)"과 같이 표기함. 분교는 캠퍼스명 표시에서 OO대학교 AA캠퍼스로 괄호 없이 표시함.
                        </div>

                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup>
                                <col class="w-[18%]">
                                <col class="w-[82%]">
                            </colgroup>
                            <tbody>
                                <!-- 1. 국립 -->
                                <tr>
                                    <th class="bg-[#bbff64] border border-[#bbff64] text-gray-900 p-2.5 font-bold text-center align-middle break-keep text-[13px]">
                                        국립
                                    </th>
                                    <td class="bg-white border border-[#bbff64] p-3 leading-[1.8] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/국립덕남대학교_UI.webp" class="w-3.5 h-3.5 mr-1.5 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕남대학교.html')">덕남대학교(운진캠퍼스)</a>
                                        </span>
                                    </td>
                                </tr>

                                <!-- 2. 사립 -->
                                <tr>
                                    <th class="bg-[#bbff64] border border-[#bbff64] text-gray-900 p-2.5 font-bold text-center align-middle break-keep text-[13px]">
                                        사립
                                    </th>
                                    <td class="bg-white border border-[#bbff64] p-3 leading-[1.8] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/엽월대학교.webp" class="w-3.5 h-3.5 mr-1.5 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('엽월대학교.html')">엽월대학교(덕남캠퍼스)</a>
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