(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-ir-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#003a70] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                <div class="bg-[#003a70] text-center py-2.5 px-3">
                    <div class="text-[11px] font-normal text-gray-300 mb-0.5">Korean Association for Institutional Research</div>
                    <div class="text-[15px] font-bold text-white flex justify-center items-center gap-2">
                        한국대학IR협의회
                    </div>
                </div>
                
                <!-- 기존 nw-details 클래스를 살려서 위키 자체의 중복 텍스트 출력을 차단하고 닫힌 채로 시작 -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#003a70]/5 border-b border-[#003a70] py-1.5 text-[11px] font-bold text-[#003a70] cursor-pointer select-none hover:bg-[#003a70]/15 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup><col class="w-[15%]"><col class="w-[85%]"></colgroup>
                            <tbody>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003a70] text-gray-800 p-2 font-bold text-center align-middle break-keep">대학</th>
                                    <td class="bg-white border border-[#003a70] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">가야대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">가톨릭관동대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">강서대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경기대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경일대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">고려대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">광운대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">광주교육대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">광주대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국민대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립공주대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립금오공과대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립서해대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">김천대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">나사렛대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">남부대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">단국대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대구가톨릭대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대구대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대구한의대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대전대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대진대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동국대학교 WISE캠퍼스</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동국대학교 서울캠퍼스</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동서대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동신대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동아대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동양대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동의대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">명지대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">백석대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부산외국어대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울신학대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서원대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">세종대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">송원대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">수원대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">숙명여자대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">숭실대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">신라대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">아주대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">영남대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">옥선대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">용인대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">우석대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">울산대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">원광대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">유원대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">을지대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인제대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인하대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">중부대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">중앙대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">차의과학대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">청운대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">청주대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">추계예술대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('평안명대학교.html')">평안명대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">포항공과대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한경국립대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국공학대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한남대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한동대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한라대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한림대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한신대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한양대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">협성대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">호남대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">호원대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003a70] text-gray-800 p-2 font-bold text-center align-middle break-keep">전문대학</th>
                                    <td class="bg-white border border-[#003a70] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경남정보대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경인여자대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">계원예술대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">김해대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대구보건대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">덕북도립대학</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">마산대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">삼육보건대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">선린대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">용인예술과학대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전남과학대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">조선이공대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">춘해보건대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국관광대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한양여자대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한영대학교</a><span class="mx-1.5 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">효빈보건대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003a70] text-gray-800 p-2 font-bold text-center align-middle break-keep">대학원대학</th>
                                    <td class="bg-white border border-[#003a70] p-3 leading-[1.8] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">과학기술연합대학원대학교</a>
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