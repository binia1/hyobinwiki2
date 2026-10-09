(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-study-abroad-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#003a70] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (details 밖으로 분리) -->
                <div class="bg-[#003a70] text-center py-2.5 px-3">
                    <div class="text-[11px] font-normal text-gray-300 mb-0.5">The Study Abroad Foundation</div>
                    <div class="text-[15px] font-bold text-white flex justify-center items-center gap-2">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        국제 교환·방문학생 프로그램
                    </div>
                </div>
                
                <!-- 기존 nw-details 클래스를 살려서 위키 자체의 중복 텍스트 출력을 차단 -->
                <details class="nw-details group">
                    <!-- 토글 버튼 -->
                    <summary class="list-none block w-full text-center bg-[#003a70]/5 border-b border-[#003a70] py-1.5 text-[11px] font-bold text-[#003a70] cursor-pointer select-none hover:bg-[#003a70]/15 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <!-- 본문 컨테이너 -->
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-[25%]">
                                <col class="w-[25%]">
                                <col class="w-[25%]">
                                <col class="w-[25%]">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th colspan="4" class="bg-gray-600 border-b border-[#003a70] text-white p-2 font-bold text-center">
                                        🇰🇷 대한민국
                                    </th>
                                </tr>
                                
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>강원대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>경북대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>국립공주대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>부산대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>서울과학기술대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>서울대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>서울시립대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>울산과학기술원</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>인천대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>전남대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>제주대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>충북대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>가톨릭대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>고려대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>국민대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>광운대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>단국대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>덕성여자대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>동덕여자대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>명지대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>서강대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>서울여자대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>성균관대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>숙명여자대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>숭실대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>연세대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>인하대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>중앙대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>포항공과대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>한국외국어대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>한국전통문화대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>한국항공대학교</a></td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>한양대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0275d8] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center"><span class="inline-block w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300 shrink-0"></span>홍익대학교</a></td>
                                    <!-- 효빈/덕남대학교 커스텀 아이콘 및 링크 컬러 -->
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0055AA] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center" onclick="goToLink('효빈대학교.html')"><span class="inline-block w-3.5 h-3.5 rounded-full bg-[#3344aa] border border-[#3344aa] shrink-0"></span>효빈대학교</a></td>
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0055AA] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center" onclick="goToLink('덕남대학교.html')"><span class="inline-block w-3.5 h-3.5 rounded-full bg-[#B32624] border border-[#B32624] shrink-0"></span>덕남대학교</a></td>
                                </tr>
                                <tr>
                                    <!-- 평안명대학교 커스텀 아이콘 및 링크 컬러 -->
                                    <td class="bg-white border border-[#003a70] p-2 text-center break-keep"><a class="text-[#0055AA] font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 justify-center" onclick="goToLink('평안명대학교.html')"><span class="inline-block w-3.5 h-3.5 rounded-full bg-[#1A237E] border border-[#1A237E] shrink-0"></span>평안명대학교</a></td>
                                    <td colspan="3" class="bg-white border border-[#003a70] p-2"></td>
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