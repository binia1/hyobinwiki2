(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-museum-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (정부 태극 로고 + 타이틀) -->
                <div class="bg-white text-center py-2 px-3 flex justify-center items-center gap-1.5 border-b border-gray-200">
                    <img src="이미지/svg/대한민국_정부_로고.svg" class="h-4 object-contain inline-block" onerror="this.style.display='none';"/>
                    <span class="text-[13px] font-bold text-gray-900 tracking-tight">대한민국의 국립대학 박물관</span>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-gray-50 border-b border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-[30%]">
                                <col class="w-[70%]">
                            </colgroup>
                            <tbody>
                                <!-- 테이블 헤더 (블랙 배경 #000000) -->
                                <tr>
                                    <th class="bg-black text-white py-1.5 px-2 font-bold text-center border border-gray-700">지역명</th>
                                    <th class="bg-black text-white py-1.5 px-2 font-bold text-center border border-gray-700">대학박물관</th>
                                </tr>
                                
                                <!-- 수도권 (1행) -->
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep">수도권</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울대학교박물관</a>
                                    </td>
                                </tr>
                                
                                <!-- 강원권 (3행) -->
                                <tr>
                                    <th rowspan="3" class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep">강원권</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">강원대학교 중앙박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">강원대학교 강릉박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">춘천교육대학교 교육박물관</a>
                                    </td>
                                </tr>
                                
                                <!-- 충청권 (5행) -->
                                <tr>
                                    <th rowspan="5" class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep">충청권</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립공주대학교 역사박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">충남대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">충북대학교박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국교원대학교 교육박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립한국교통대학교 박물관</a>
                                    </td>
                                </tr>
                                
                                <!-- 경상권 (7행) -->
                                <tr>
                                    <th rowspan="7" class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep">경상권</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경상국립대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립부경대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부산대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립창원대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립한국해양대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경북대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립경국대학교 박물관</a>
                                    </td>
                                </tr>
                                
                                <!-- 전라권 (5행) -->
                                <tr>
                                    <th rowspan="5" class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep">전라권</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립군산대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립목포대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립순천대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전남대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전북대학교 박물관</a>
                                    </td>
                                </tr>
                                
                                <!-- 제주권 (1행) -->
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep">제주권</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">제주대학교 박물관</a>
                                    </td>
                                </tr>
                                
                                <!-- 덕빈권 (6행) -->
                                <tr>
                                    <th rowspan="6" class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep">덕빈권</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교_박물관.html')">효빈대학교 중앙박물관 및 애니철도 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕남대학교.html')">덕남대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('천주대학교.html')">천주대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('국립서해대학교.html')">국립서해대학교 박물관</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('서해해양대학교.html')">국립서해해양대학교 해양박물관</a>
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