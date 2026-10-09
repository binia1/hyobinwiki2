(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-icue-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#003a70] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 -->
                <div class="bg-[#003a70] text-center py-2.5 px-3">
                    <div class="text-[11px] font-normal text-gray-300 mb-0.5">International Consortium for Universities of Education in East Asia</div>
                    <div class="text-[15px] font-bold text-white flex justify-center items-center">
                        동아시아 교원양성 국제컨소시엄 (ICUE)
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
                                <col class="w-1/4"><col class="w-1/4"><col class="w-1/4"><col class="w-1/4">
                            </colgroup>
                            <tbody>
                                <!-- 대한민국 -->
                                <tr>
                                    <th colspan="4" class="bg-gray-600 border border-[#003a70] text-white p-2 font-bold text-center">
                                        🇰🇷 대한민국 (21개교)
                                    </th>
                                </tr>
                                <tr>
                                    <td colspan="2" class="bg-gray-50 border border-[#003a70] p-2.5 text-left font-bold break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립공주대학교</a> <span class="text-[11px] text-gray-500 font-normal">(사무국 · 운영위원)</span>
                                    </td>
                                    <td colspan="2" class="bg-gray-50 border border-[#003a70] p-2.5 text-left font-bold break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울교육대학교</a> <span class="text-[11px] text-gray-500 font-normal">(운영위원)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">경북대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">경인교육대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">공주교육대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">광주교육대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">대구교육대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕주교육대학교.html')">덕주교육대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">부산교육대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('빈주교육대학교.html')">빈주교육대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">서울시립대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">순천대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">전남대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">전주교육대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">제주대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">진주교육대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">청주교육대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">춘천교육대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">충북대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">한국교원대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈교육대학교.html')">효빈교육대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"></td>
                                </tr>
                                
                                <!-- 중국 -->
                                <tr>
                                    <th colspan="4" class="bg-gray-600 border border-[#003a70] text-white p-2 font-bold text-center">
                                        🇨🇳 중국 (14개교)
                                    </th>
                                </tr>
                                <tr>
                                    <td colspan="2" class="bg-gray-50 border border-[#003a70] p-2.5 text-left font-bold break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">베이징사범대학</a> <span class="text-[11px] text-gray-500 font-normal">(사무국 · 운영위원)</span>
                                    </td>
                                    <td colspan="2" class="bg-gray-50 border border-[#003a70] p-2.5 text-left font-bold break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">화둥사범대학</a> <span class="text-[11px] text-gray-500 font-normal">(운영위원)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">강소사범대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">광서사범대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">난징사범대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">둥베이사범대학</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">산시사범대학(산서)</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">산시사범대학(섬서)</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">상하이사범대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">시난대학</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">장쑤사범대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">홍콩교육대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">화중사범대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">후난사범대학</a></td>
                                </tr>
                                
                                <!-- 일본 -->
                                <tr>
                                    <th colspan="4" class="bg-gray-600 border border-[#003a70] text-white p-2 font-bold text-center">
                                        🇯🇵 일본 (13개교)
                                    </th>
                                </tr>
                                <tr>
                                    <td colspan="2" class="bg-gray-50 border border-[#003a70] p-2.5 text-left font-bold break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">도쿄학예대학</a> <span class="text-[11px] text-gray-500 font-normal">(사무국 · 운영위원)</span>
                                    </td>
                                    <td colspan="2" class="bg-gray-50 border border-[#003a70] p-2.5 text-left font-bold break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">오사카교육대학</a> <span class="text-[11px] text-gray-500 font-normal">(운영위원)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">교토교육대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">나라교육대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">나루토교육대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">사이타마대학</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">아이치교육대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">에히메대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">요코하마국립대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">죠에츠교육대학</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">치바대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">홋카이도교육대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">히로시마대학</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 break-keep"></td>
                                </tr>
                                
                                <!-- 대만 -->
                                <tr>
                                    <th colspan="4" class="bg-gray-600 border border-[#003a70] text-white p-2 font-bold text-center">
                                        🇹🇼 대만 (2개교)
                                    </th>
                                </tr>
                                <tr>
                                    <td colspan="2" class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">국립타이완사범대학</a></td>
                                    <td colspan="2" class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">국립타이중교육대학</a></td>
                                </tr>
                                
                                <!-- 몽골 -->
                                <tr>
                                    <th colspan="4" class="bg-gray-600 border border-[#003a70] text-white p-2 font-bold text-center">
                                        🇲🇳 몽골 (1개교)
                                    </th>
                                </tr>
                                <tr>
                                    <td colspan="4" class="bg-white border border-[#003a70] p-2 break-keep"><a class="text-[#0275d8] hover:underline cursor-pointer">몽골국립교육대학</a></td>
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