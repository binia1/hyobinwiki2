(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-soc-econ-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (사진과 동일한 LINC+ 로고 박스) -->
                <div class="bg-white text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-4 py-1.5 flex items-center gap-3.5 bg-white shadow-sm">
                        <img src="이미지/svg/LINC+_로고.svg" class="h-7 object-contain"  this.onerror=function(){this.style.display='none';};"/>
                        <div class="h-7 w-[1px] bg-gray-300"></div>
                        <div class="text-left leading-tight">
                            <div class="text-[10px] font-semibold text-gray-500 tracking-wide">Social Economics University Council</div>
                            <div class="text-[15px] font-bold text-[#005BAC] tracking-tight">사회적경제대학협의회</div>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#005BAC] border-t border-[#005BAC] py-1 text-[11px] font-bold text-white cursor-pointer select-none hover:bg-[#004885] transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-1/4"><col class="w-1/4"><col class="w-1/4"><col class="w-1/4">
                            </colgroup>
                            <tbody>
                                <!-- 국가 헤더 행 -->
                                <tr>
                                    <th colspan="4" class="bg-[#003876] border border-[#003876] text-white py-1 text-center font-bold">
                                        🇰🇷 대한민국
                                    </th>
                                </tr>
                                
                                <!-- 37개 회원 대학 (4열 균등 배치) -->
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">가톨릭관동대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">건국대학교 GLOCAL캠퍼스</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">경남대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">경일대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">계명대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">국립강릉원주대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">국립목포대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">국립안동대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">국립한국해양대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">국립한밭대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">국민대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">대구대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕남대학교.html')">덕남대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">동명대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">동의대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('삼선대학교.html')">삼선대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">성균관대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('엽월대학교.html')">엽월대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">영남대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">인제대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">전남대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">전북대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">전주대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">제주대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">중앙대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">창원대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">충남대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">한국공학대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">한남대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">한림대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">한서대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">한양대학교 ERICA</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">호남대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">호서대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈복지대학교.html')">효빈복지대학교</a></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1"></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1"></td>
                                    <td class="bg-white border border-gray-200 py-2.5 px-1"></td>
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