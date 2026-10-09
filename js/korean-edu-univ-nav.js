(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-korean-edu-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#003a70] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 -->
                <div class="bg-[#003a70] text-center py-2.5 px-3">
                    <div class="text-[15px] font-bold text-white flex justify-center items-center">
                        대한민국의 교육대학 (초등교육과 포함)
                    </div>
                </div>
                
                <!-- 기존 nw-details 클래스로 위키 중복 텍스트 방지 및 기본 접힌 상태 -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#003a70]/5 border-b border-[#003a70] py-1.5 text-[11px] font-bold text-[#003a70] cursor-pointer select-none hover:bg-[#003a70]/15 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup><col class="w-[20%]"><col class="w-[80%]"></colgroup>
                            <tbody>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003a70] text-gray-800 p-2 font-bold text-center align-middle break-keep">교육대학</th>
                                    <td class="bg-white border border-[#003a70] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경인교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">공주교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">광주교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대구교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕주교육대학교.html')">덕주교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부산교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('빈주교육대학교.html')">빈주교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전주교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">진주교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">청주교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">춘천교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈교육대학교.html')">효빈교육대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th rowspan="2" class="bg-gray-50 border border-[#003a70] text-gray-800 p-2 font-bold text-center align-middle break-keep">
                                        교육대학 외<br/>초등교육과 개설 대학
                                    </th>
                                    <td class="bg-white border border-[#003a70] p-3 leading-[1.8] break-keep">
                                        <span class="font-bold text-[#005BAC] mr-2">국립</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">제주대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국교원대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-3 leading-[1.8] break-keep">
                                        <span class="font-bold text-[#b32624] mr-2">사립</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">이화여자대학교</a>
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