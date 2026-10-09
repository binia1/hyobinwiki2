(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-hyobin-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#7777aa] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (로고 100% 순백색 실루엣 필터 적용) -->
                <div class="bg-[#7777aa] text-center py-2.5 px-3">
                    <div class="text-[15px] font-bold text-white flex justify-center items-center gap-2">
                        <img src="이미지/svg/효빈광역시.svg" alt="" class="h-4 inline-block object-contain" style="filter: brightness(0) invert(1);" onerror="this.src='이미지/logo.webp'; this.style.filter='brightness(0) invert(1)'; this.onerror=function(){this.style.display='none';};"/>
                        <span>효빈광역시 대학교 현황</span>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" open>
                    <summary class="list-none block w-full text-center bg-[#7777aa]/10 border-b border-[#7777aa] py-1.5 text-[11px] font-bold text-[#7777aa] cursor-pointer select-none hover:bg-[#7777aa]/20 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <!-- 캠퍼스 표기 안내문 바 -->
                        <div class="text-[11px] px-3 py-1.5 border-b border-[#7777aa] text-gray-500 text-left bg-gray-50 break-keep">
                            각 대학의 제1캠퍼스(본교)는 캠퍼스를 표기하지 않고, 2캠퍼스(이원화)부터 "OO대학교(AA캠퍼스)"과 같이 표기함. 분교는 캠퍼스명 표시에서 OO대학교 AA캠퍼스로 괄호 없이 표시함.
                        </div>

                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup>
                                <col class="w-[14%]">
                                <col class="w-[7%]">
                                <col class="w-[79%]">
                            </colgroup>
                            <tbody>
                                <!-- 1. 국립 (2행) -->
                                <tr>
                                    <th rowspan="2" class="bg-[#7777aa] border border-[#7777aa] text-white p-2 font-bold text-center align-middle break-keep text-[13px]">
                                        국립
                                    </th>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㄷ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/덕북대_로고.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대학교(효빈캠퍼스)</a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㅎ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/효빈대_로고.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a>
                                        </span>
                                        <span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/HIST_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈과학기술원.html')">효빈과학기술원(HIST)</a>
                                        </span>
                                        <span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/효빈교육대학교_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈교육대학교.html')">효빈교육대학교</a>
                                        </span>
                                        <span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/svg/효빈해양대학교_로고.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈해양대학교.html')">효빈해양대학교</a>
                                        </span>
                                    </td>
                                </tr>

                                <!-- 2. 사립 (8행) -->
                                <tr>
                                    <th rowspan="8" class="bg-[#7777aa] border border-[#7777aa] text-white p-2 font-bold text-center align-middle break-keep text-[13px]">
                                        사립
                                    </th>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㄱ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/광연대학교.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('광연대학교.html')">광연대학교</a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㄷ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/동구대학교.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('동구대학교.html')">동구대학교</a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㅂ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/중촌대학교.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('중촌대학교.html')">중촌대학교</a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㅅ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/삼선대학교_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('삼선대학교.html')">삼선대학교</a>
                                        </span>
                                        <span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/성택대학교.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('성택대학교.html')">성택대학교</a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㅇ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/엽월대학교.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('엽월대학교.html')">엽월대학교</a>
                                        </span>
                                        <span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/옥선대학교_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('옥선대학교.html')">옥선대학교</a>
                                        </span>
                                        <span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/안월대학교.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('안월대학교.html')">안월대학교</a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㅊ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/svg/청엽국제학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('청엽국제학교.html')">청엽국제학교 대학부</a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㅍ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/평안명대학교_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('평안명대학교.html')">평안명대학교</a>
                                        </span>
                                        <span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/평천대학교.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('평천대학교.html')">평천대학교</a>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㅎ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/해천대학교.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('해천대학교.html')">해천대학교</a>
                                        </span>
                                        <span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/효빈복지대학교_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈복지대학교.html')">효빈복지대학교</a>
                                        </span>
                                        <span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <span class="inline-flex items-center">
                                            <img src="이미지/svg/효빈외대.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈외국어대학교.html')">효빈외국어대학교</a>
                                        </span>
                                    </td>
                                </tr>

                                <!-- 3. 원격대학 (1행) -->
                                <tr>
                                    <th class="bg-[#7777aa] border border-[#7777aa] text-white p-2 font-bold text-center align-middle break-keep text-[13px]">
                                        원격대학
                                    </th>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle">
                                        ㅇ
                                    </th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.1] break-keep">
                                        <span class="inline-flex items-center">
                                            <img src="이미지/svg/한국방송통신대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                            <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('한국방송통신대학교.html')">한국방송통신대학교 효빈·덕북지역대학</a>
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