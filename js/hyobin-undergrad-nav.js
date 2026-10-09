(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-hyobin-undergrad-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#3344aa] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (#3344aa 적용) -->
                <div class="bg-[#3344aa] text-center py-2.5 px-3">
                    <div class="text-[15px] font-bold text-white flex justify-center items-center gap-2">
                        효빈대학교의 학부
                    </div>
                </div>
                
                <!-- 위키 중복 텍스트 방지 nw-details 및 기본 접힌 상태 -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#3344aa]/5 border-b border-[#3344aa] py-1.5 text-[11px] font-bold text-[#3344aa] cursor-pointer select-none hover:bg-[#3344aa]/15 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <!-- 3열 균등 분할 (각 33.33%) -->
                            <colgroup>
                                <col class="w-1/3">
                                <col class="w-1/3">
                                <col class="w-1/3">
                            </colgroup>
                            <tbody>
                                <!-- 당선(본)캠퍼스 헤더 (총 21개 단과대학 / 7개 행 완벽 대칭) -->
                                <tr>
                                    <th colspan="3" class="bg-[#3344aa] border border-[#3344aa] text-white p-2 font-bold text-center">당선(본)캠퍼스</th>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-2-2')">인문대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-2-1')">언어문학대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-8')">사범대학</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-3-2')">사회과학대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-3-1')">사회복지학대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-3-3')">상과대학</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-4-4')">자연과학대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-4-3')">생활과학대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-6-6')">교통대학</a>
                                    </td>
                                </tr>
                                <!-- 공과대학 분리 단과대 영역 -->
                                <tr>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-6-1')">기계공업대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-6-2')">전기공업대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-6-3')">토목공업대학</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-6-4')">화학공업대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-5-1')">의과대학</a>
                                        <span class="text-[11px] text-gray-500 block mt-0.5">(의학·치의학·한의학·수의학)</span>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-5-2')">약학대학</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-5-3')">간호대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-5-4')">보건대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-7-5')">예술대학</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-7-4')">음악대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-7-2')">미술대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-7-6')">무용대학</a>
                                    </td>
                                </tr>
                                
                                <!-- 이자캠퍼스 헤더 (3개 단과대 / 1개 행 균등 배치) -->
                                <tr>
                                    <th colspan="3" class="bg-[#3344aa] border border-[#3344aa] text-white p-2 font-bold text-center">이자캠퍼스</th>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-4-1')">농업대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-4-2')">생명대학</a>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-7-3')">디자인대학</a>
                                    </td>
                                </tr>
                                
                                <!-- 천주 / 낭원 / 강주 캠퍼스 헤더 (3개 캠퍼스 / 1개 행 균등 배치) -->
                                <tr>
                                    <th colspan="3" class="bg-[#3344aa] border border-[#3344aa] text-white p-2 font-bold text-center">천주 / 낭원 / 강주 캠퍼스</th>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-6-5')">천주캠퍼스</a>
                                        <span class="text-[11px] text-gray-500 block mt-0.5">응용예술대, 응용과학대</span>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-9')">낭원캠퍼스</a>
                                        <span class="text-[11px] text-gray-500 block mt-0.5">융합학부, 지역개발학부</span>
                                    </td>
                                    <td class="bg-white border border-[#3344aa] p-2.5 align-middle">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer block" onclick="goToLink('효빈대학교_학부.html#s-4-5')">강주캠퍼스</a>
                                        <span class="text-[11px] text-gray-500 block mt-0.5">해양대학, 환경산업대</span>
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