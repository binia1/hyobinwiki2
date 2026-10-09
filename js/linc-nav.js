(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-linc-container");
        if (!container) return;

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (사진과 동일한 LINC 3.0 로고 박스) -->
                <div class="bg-white text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-4 py-1.5 flex items-center gap-3.5 bg-white shadow-sm">
                        <img src="이미지/svg/LINC3.0_로고.svg" class="h-7 object-contain" onerror="this.src='이미지/svg/LINC3.0_로고.svg'; this.onerror=function(){this.style.display='none';};"/>
                        <div class="h-7 w-[1px] bg-gray-300"></div>
                        <div class="text-left leading-tight">
                            <div class="text-[10px] font-semibold text-gray-500 tracking-wide">Leaders in INdustry-university Cooperation (LINC 3.0 / 일반대)</div>
                            <div class="text-[15px] font-bold text-[#005BAC] tracking-tight">3단계 산학연협력 선도대학 육성사업</div>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#005BAC] border-t border-[#005BAC] py-1 text-[11px] font-bold text-white cursor-pointer select-none hover:bg-[#004885] transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-[11%]">
                                <col class="w-[14%]">
                                <col class="w-[75%]">
                            </colgroup>
                            <tbody>
                                <!-- 소제목 행 -->
                                <tr>
                                    <th colspan="3" class="bg-[#003876] border border-[#003876] text-white py-1.5 text-center font-bold">
                                        회원 대학(일반대)
                                    </th>
                                </tr>
                                
                                <!-- 컬럼 헤더 행 -->
                                <tr>
                                    <th class="bg-[#004B90] border border-gray-300 text-white py-1.5 px-2 font-bold text-center">유형</th>
                                    <th class="bg-[#004B90] border border-gray-300 text-white py-1.5 px-2 font-bold text-center">구분</th>
                                    <th class="bg-[#004B90] border border-gray-300 text-white py-1.5 px-2 font-bold text-center">대학명</th>
                                </tr>
                                
                                <!-- 1. 기술혁신선도형 (16개교) -->
                                <tr>
                                    <th rowspan="2" class="bg-[#004B90] border border-gray-300 text-white p-2.5 font-bold text-center align-middle break-keep leading-tight">
                                        기술혁신<br/>선도형<br/>(16개교)
                                    </th>
                                    <th class="bg-[#EAEFF5] border border-gray-300 text-gray-800 p-2 font-semibold text-center align-middle break-keep">
                                        수도권 (3개교)
                                    </th>
                                    <td class="bg-white border border-gray-300 p-3 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">고려대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">성균관대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한양대</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-[#EAEFF5] border border-gray-300 text-gray-800 p-2 font-semibold text-center align-middle break-keep">
                                        지방 (13개교)
                                    </th>
                                    <td class="bg-white border border-gray-300 p-3 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">강원대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경북대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경상국립대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립부경대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부산대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전남대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전북대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">충남대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">충북대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">포항공대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕남대학교.html')">덕남대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대</a>
                                    </td>
                                </tr>
                                
                                <!-- 2. 수요맞춤성장형 (63개교) -->
                                <tr>
                                    <th rowspan="6" class="bg-[#004B90] border border-gray-300 text-white p-2.5 font-bold text-center align-middle break-keep leading-tight">
                                        수요맞춤<br/>성장형<br/>(63개교)
                                    </th>
                                    <th class="bg-[#EAEFF5] border border-gray-300 text-gray-800 p-2 font-semibold text-center align-middle break-keep">
                                        수도권 (12개교)
                                    </th>
                                    <td class="bg-white border border-gray-300 p-3 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">가톨릭대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경희대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국민대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">단국대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동국대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서강대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울과기대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">아주대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인하대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">중앙대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국공학대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한양대(ERICA)</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-[#EAEFF5] border border-gray-300 text-gray-800 p-2 font-semibold text-center align-middle break-keep">
                                        충청권 (10개교)
                                    </th>
                                    <td class="bg-white border border-gray-300 p-3 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">건양대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립한국교통대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립한밭대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대전대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">선문대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">순천향대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국기술교육대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한남대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한서대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">호서대</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-[#EAEFF5] border border-gray-300 text-gray-800 p-2 font-semibold text-center align-middle break-keep">
                                        호남제주권 (9개교)
                                    </th>
                                    <td class="bg-white border border-gray-300 p-3 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">광주대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립목포대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동신대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">우석대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">원광대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전주대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">제주대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">조선대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">호남대</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-[#EAEFF5] border border-gray-300 text-gray-800 p-2 font-semibold text-center align-middle break-keep">
                                        대경강원권 (12개교)
                                    </th>
                                    <td class="bg-white border border-gray-300 p-3 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">가톨릭관동대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">강릉원주대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경운대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경일대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">계명대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립경국대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립금오공대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대구대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대구한의대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">영남대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한동대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한림대</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-[#EAEFF5] border border-gray-300 text-gray-800 p-2 font-semibold text-center align-middle break-keep">
                                        동남권 (10개교)
                                    </th>
                                    <td class="bg-white border border-gray-300 p-3 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경남대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경성대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립창원대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립한국해양대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동명대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동서대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동아대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동의대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">울산대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인제대</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-[#EAEFF5] border border-gray-300 text-gray-800 p-2 font-semibold text-center align-middle break-keep">
                                        덕빈권 (10개교)
                                    </th>
                                    <td class="bg-white border border-gray-300 p-3 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('엽월대학교.html')">엽월대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('천주대학교.html')">천주대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('삼선대학교.html')">삼선대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('평안명대학교.html')">평안명대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">선빈대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('빈주대학교.html')">빈주대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">덕주대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('서해해양대학교.html')">서해해양대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('국립서해대학교.html')">국립서해대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('낙주대학교.html')">낙주대</a>
                                    </td>
                                </tr>
                                
                                <!-- 3. 협력기반구축형 (10개교) -->
                                <tr>
                                    <th rowspan="2" class="bg-[#004B90] border border-gray-300 text-white p-2.5 font-bold text-center align-middle break-keep leading-tight">
                                        협력기반<br/>구축형<br/>(10개교)
                                    </th>
                                    <th class="bg-[#EAEFF5] border border-gray-300 text-gray-800 p-2 font-semibold text-center align-middle break-keep">
                                        수도권 (2개교)
                                    </th>
                                    <td class="bg-white border border-gray-300 p-3 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">숙명여대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인천대</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-[#EAEFF5] border border-gray-300 text-gray-800 p-2 font-semibold text-center align-middle break-keep">
                                        지방 (8개교)
                                    </th>
                                    <td class="bg-white border border-gray-300 p-3 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">고려대(세종)</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립공주대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립목포해양대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동국대(WISE)</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">목원대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">신라대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">우송대</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">위덕대</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <!-- 하단 기수 이동 네비게이션 바 (사진과 동일) -->
                        <div class="flex justify-between items-center text-[11px] py-1.5 px-3 bg-gray-50 border-t border-gray-200">
                            <span class="italic text-[#0275d8] cursor-pointer hover:underline">LINC+ (2017~2021)</span>
                            <span class="text-gray-400 font-bold">←</span>
                            <span class="italic font-bold text-gray-800">LINC 3.0 (2022~2027)</span>
                        </div>
                    </div>
                </details>
            </div>
            
        `;

        container.innerHTML = templateHTML;
    });
})();