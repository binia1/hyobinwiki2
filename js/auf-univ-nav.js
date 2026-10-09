(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-auf-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (AUF 로고 및 테두리 박스) -->
                <div class="bg-white text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-4 py-1.5 flex items-center gap-3.5 bg-white shadow-sm">
                        <img src="이미지/AUF_로고.webp" class="h-8 object-contain" onerror="this.src='이미지/AUF_로고.webp'; this.onerror=function(){this.style.display='none';};"/>
                        <div class="h-8 w-[1px] bg-gray-300"></div>
                        <div class="text-left leading-tight">
                            <div class="text-[10px] font-semibold text-[#7B0C0C] tracking-tight">L’Agence Universitaire de la Francophonie</div>
                            <div class="text-[15px] font-bold text-[#7B0C0C] tracking-tight mt-0.5">프랑스어권 대학연합</div>
                        </div>
                    </div>
                </div>
                
                <!-- 버건디 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-[#7B0C0C] border-t border-[#7B0C0C] py-1 text-[11px] font-bold text-white cursor-pointer select-none hover:bg-[#660909] transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup>
                                <col class="w-[15%]">
                                <col class="w-[85%]">
                            </colgroup>
                            <tbody>
                                <!-- 1. 대한민국 -->
                                <tr>
                                    <th class="bg-[#7B0C0C] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇰🇷</div>
                                        <div>대한민국</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.2] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/svg/숙명여자대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer">숙명여자대학교</a>
                                        </span>
                                        <span class="text-gray-400 font-bold mx-1.5">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/svg/아주대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer">아주대학교</a>
                                        </span>
                                        <span class="text-gray-400 font-bold mx-1.5">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/svg/전북대_로고.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer">전북대학교</a>
                                        </span>
                                        <span class="text-gray-400 font-bold mx-1.5">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/svg/한국외국어대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer">한국외국어대학교</a>
                                        </span>
                                        <span class="text-gray-400 font-bold mx-1.5">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/효빈대_로고.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a>
                                        </span>
                                    </td>
                                </tr>
                                
                                <!-- 2. 중국 -->
                                <tr>
                                    <th class="bg-[#7B0C0C] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇨🇳</div>
                                        <div>중국</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.2] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/svg/우한대학.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer">우한대학</a>
                                        </span>
                                        <span class="text-gray-400 font-bold mx-1.5">·</span>
                                        <span class="text-[#d32f2f] cursor-pointer hover:underline">시안외국어대학</span>
                                        <span class="text-gray-400 font-bold mx-1.5">·</span>
                                        <span class="text-[#d32f2f] cursor-pointer hover:underline">쓰촨외국어대학</span>
                                        <span class="text-gray-400 font-bold mx-1.5">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/svg/상하이교통대학.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer">상하이교통대학</a>
                                        </span>
                                        <span class="text-gray-400 font-bold mx-1.5">·</span>
                                        <span class="text-[#d32f2f] cursor-pointer hover:underline">쿤밍의과대학</span>
                                        <span class="text-gray-400 font-bold mx-1.5">·</span>
                                        <span class="text-[#d32f2f] cursor-pointer hover:underline">화남사범대학</span>
                                        <span class="text-gray-400 font-bold mx-1.5">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/퉁지대학.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer">퉁지대학</a>
                                        </span>
                                    </td>
                                </tr>
                                
                                <!-- 3. 일본 -->
                                <tr>
                                    <th class="bg-[#7B0C0C] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇯🇵</div>
                                        <div>일본</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.2] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/주오대학.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer">주오대학</a>
                                        </span>
                                    </td>
                                </tr>
                                
                                <!-- 4. 미국 -->
                                <tr>
                                    <th class="bg-[#7B0C0C] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇺🇸</div>
                                        <div>미국</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.2] break-keep">
                                        <span class="text-[#d32f2f] cursor-pointer hover:underline">라파예트 루이지애나 대학교</span>
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