// js/효빈시장목록.js
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-market-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div class="w-full mx-auto border-2 mb-8 text-sm font-sans bg-white shadow-sm" style="border-color: #996633;">
            <div class="text-white p-2.5 flex justify-center items-center gap-3 border-b" style="background-color: #996633; border-bottom-color: #996633;">
                <img alt="효빈광역시 로고" class="h-8 object-contain bg-transparent" onerror="this.style.display='none'" src="이미지/logo.webp"/>
                <div class="flex flex-col items-center justify-center text-center">
                    <span class="font-extrabold text-[17px] tracking-widest leading-tight drop-shadow-sm text-white">효빈광역시 관내 전통시장</span>
                </div>
            </div>
            <div class="bg-white text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-gray-100 transition-colors border-b text-gray-700" onclick="toggleTable('market-nav-body', 'marketToggleBtn')" style="border-bottom-color: #996633;">
                <span id="marketToggleBtn">[ 접기 ]</span>
            </div>
            <table class="w-full border-collapse bg-white text-center table-fixed text-[13px] text-gray-800">
                <colgroup>
                    <col style="width: 15%;"/>
                    <col style="width: 85%;"/>
                </colgroup>
                <tbody class="toggle-body" id="market-nav-body">
                    <!-- 중구 -->
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#BB9955] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">중구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="색수시장.html">색수</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="서남시장.html">서남</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="내항시장.html">내항</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="중앙시장(효빈).html">중앙</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="약맥시장.html">약맥</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="조유시장.html">조유</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈서부시장.html">효빈서부</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="중구시장.html">중구</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="내조시장.html">내조</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#FF9922] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">동구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="덕현시장.html">덕현</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="사가당시장.html">사가당</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈역전시장.html">효빈역전</a> <span class="text-gray-300 mx-1">·</span>
                            <strong class="text-gray-800 break-keep">제왕</strong> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="포제시장.html">포제</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="홍소시장.html">홍소</a>
                        </td>
                    </tr>
                    <!-- 서구 -->
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#00AABB] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">서구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="칠천시장.html">칠천</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="당선시장.html">당선</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="사복시장.html">사복</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="과진시장.html">과진</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="청덕시장.html">청덕</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="북성시장.html">북성</a>
                        </td>
                    </tr>
                    <!-- 남구 -->
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#DDBBFF] text-gray-800 py-2 font-bold border-r border-white border-b border-white shadow-inner">남구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="평당회산시장.html">평당회산</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="고당시장.html">고당</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="어간수산시장.html">어간수산</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="항동시장.html">항동</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="어간시장.html">어간</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="월천시장.html">월천</a>
                        </td>
                    </tr>
                    <!-- 북구 -->
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#7799CC] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">북구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="중수시장.html">중수</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="청능도매종합시장.html">청능도매종합</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="사능시장.html">사능</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="사능중앙시장.html">사능중앙</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="남전도매시장.html">남전도매</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="천왕사시장.html">천왕사</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="고송시장.html">고송</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="해서시장.html">해서</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="오내시장.html">오내</a>
                        </td>
                    </tr>
                    <!-- 창전구 -->
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#33AAFF] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">창전구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="창전시장.html">창전</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="보통시장.html">보통</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="칠심시장.html">칠심</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="칠심서민시장.html">칠심서민</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="진백시장.html">진백</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="동곡중앙시장.html">동곡중앙</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="마시시장.html">마시</a>
                        </td>
                    </tr>
                    <!-- 청엽구 -->
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#006699] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">청엽구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="청엽시장.html">청엽</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="우전시장.html">우전</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="마잡시장.html">마잡</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="비마리시장.html">비마리</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="와산시장.html">와산</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="남부시장(효빈).html">남부</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="등동시장.html">등동</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="입동시장.html">입동</a>
                        </td>
                    </tr>
                    <!-- 안천구 -->
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#AA66DD] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">안천구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="상가시장.html">상가</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="안천시장.html">안천</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="당가시장.html">당가</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="하가시장.html">하가</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="안천주공시장.html">안천주공</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="팔망성시장.html">팔망성</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="악부시장.html">악부</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="이자시장.html">이자</a>
                        </td>
                    </tr>
                    <!-- 탄성군 -->
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#BBFF64] text-gray-800 py-2 font-bold border-r border-white border-b border-white shadow-inner">탄성군</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="탄성시장.html">탄성</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="도변시장.html">도변</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="고해시장.html">고해</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="도향시장.html">도향</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="탄성야진시장.html">탄성야진</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
    }
});