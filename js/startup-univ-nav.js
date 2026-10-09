(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-startup-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 -->
                <div class="bg-[#003876] text-center py-2.5 px-3 flex justify-center items-center gap-1.5 border-b border-[#003876]">
                    <img src="이미지/svg/대한민국_정부_로고.svg" class="h-4 object-contain inline-block" onerror="this.style.display='none';"/>
                    <div class="text-[13px] font-bold text-white tracking-tight leading-tight">
                        <span class="text-[10px] font-normal block opacity-90">중소벤처기업부</span>
                        창업중심대학
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-gray-50 border-b border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup>
                                <col class="w-[8%]">
                                <col class="w-[14%]">
                                <col class="w-[78%]">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep leading-tight">대 학<br/>교</th>
                                    <th class="bg-gray-100 border border-gray-200 text-gray-700 p-2 font-semibold text-center align-middle break-keep">2022년 선정</th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.2] break-keep">
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/한양대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">한양대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/호서대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">호서대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/전북대_로고.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">전북대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/강원대.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">강원대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/대구대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">대구대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/부산대.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">부산대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/경상국립대학교_로고.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">경상국립대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/성균관대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">성균관대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/한남대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">한남대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/효빈대_로고.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/국립천주대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('천주대학교.html')">천주대학교</a></span>
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