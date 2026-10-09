(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-abeek-container");
        if (!container) return;

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (ABEEK 로고 박스) -->
                <div class="bg-white text-center py-2.5 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-5 py-1.5 flex items-center justify-center bg-white shadow-sm">
                        <img src="이미지/svg/ABEEK_로고.svg" class="h-7 object-contain" onerror="this.src='이미지/svg/ABEEK_로고.svg'; this.onerror=function(){this.style.display='none';};"/>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-gray-50 border-y border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <!-- 기준일 헤더 행 (블랙 배경 #000000) -->
                        <div class="bg-black text-white text-center py-1.5 font-bold text-[13px] tracking-tight">
                            2025년 3월 기준
                        </div>
                        
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup>
                                <col class="w-[5%]">
                                <col class="w-[7%]">
                                <col class="w-[88%]">
                            </colgroup>
                            <tbody>
                                <!-- 1. EAC -->
                                <tr>
                                    <th rowspan="2" class="bg-black text-white border-b border-gray-700 p-1 text-center font-bold align-middle [writing-mode:vertical-rl] tracking-widest text-[13px]">
                                        대학
                                    </th>
                                    <th class="bg-black text-white border-b border-gray-700 border-l border-gray-700 p-2 text-center font-bold align-middle">
                                        EAC
                                    </th>
                                    <td class="bg-white border-b border-gray-200 border-l border-gray-300 p-3 leading-[2.1] break-keep text-[#0275d8]">
                                        <a class="hover:underline cursor-pointer">가천대학교</a> · 
                                        <a class="hover:underline cursor-pointer">강원대학교</a> · 
                                        <a class="hover:underline cursor-pointer">건국대학교</a> · 
                                        <a class="hover:underline cursor-pointer">건양대학교</a> · 
                                        <a class="hover:underline cursor-pointer">경기대학교</a> · 
                                        <a class="hover:underline cursor-pointer">경북대학교</a> · 
                                        <a class="hover:underline cursor-pointer">경상국립대학교</a> · 
                                        <a class="hover:underline cursor-pointer">경희대학교</a> · 
                                        <a class="hover:underline cursor-pointer">광운대학교</a> · 
                                        <a class="hover:underline cursor-pointer">국립경국대학교</a> · 
                                        <a class="hover:underline cursor-pointer">국립공주대학교</a> · 
                                        <a class="hover:underline cursor-pointer">국립군산대학교</a> · 
                                        <a class="hover:underline cursor-pointer">국립금오공과대학교</a> · 
                                        <a class="hover:underline cursor-pointer">국립목포대학교</a> · 
                                        <a class="hover:underline cursor-pointer">국립부경대학교</a> · 
                                        <a class="hover:underline cursor-pointer">국립한국교통대학교</a> · 
                                        <a class="hover:underline cursor-pointer">국립한밭대학교</a> · 
                                        <a class="hover:underline cursor-pointer">국민대학교</a> · 
                                        <a class="hover:underline cursor-pointer">단국대학교</a> · 
                                        <a class="hover:underline cursor-pointer">대구대학교</a> · 
                                        <a class="hover:underline cursor-pointer">대진대학교</a> · 
                                        <a class="hover:underline cursor-pointer">동국대학교</a> · 
                                        <a class="hover:underline cursor-pointer">동신대학교</a> · 
                                        <a class="hover:underline cursor-pointer">동아대학교</a> · 
                                        <a class="hover:underline cursor-pointer">동의대학교</a> · 
                                        <a class="hover:underline cursor-pointer">명지대학교</a> · 
                                        <a class="hover:underline cursor-pointer">목원대학교</a> · 
                                        <a class="hover:underline cursor-pointer">부산대학교</a> · 
                                        <a class="hover:underline cursor-pointer">상지대학교</a> · 
                                        <a class="hover:underline cursor-pointer">서울과학기술대학교</a> · 
                                        <a class="hover:underline cursor-pointer">서울대학교</a> · 
                                        <a class="hover:underline cursor-pointer">서울시립대학교</a> · 
                                        <a class="hover:underline cursor-pointer">선문대학교</a> · 
                                        <a class="hover:underline cursor-pointer">성결대학교</a> · 
                                        <a class="hover:underline cursor-pointer">성균관대학교</a> · 
                                        <a class="hover:underline cursor-pointer">세종대학교</a> · 
                                        <a class="hover:underline cursor-pointer">순천향대학교</a> · 
                                        <a class="hover:underline cursor-pointer">숭실대학교</a> · 
                                        <a class="hover:underline cursor-pointer">아주대학교</a> · 
                                        <a class="hover:underline cursor-pointer">영남대학교</a> · 
                                        <a class="hover:underline cursor-pointer">울산대학교</a> · 
                                        <a class="hover:underline cursor-pointer">이화여자대학교</a> · 
                                        <a class="hover:underline cursor-pointer">인제대학교</a> · 
                                        <a class="hover:underline cursor-pointer">인하대학교</a> · 
                                        <a class="hover:underline cursor-pointer">전남대학교</a> · 
                                        <a class="hover:underline cursor-pointer">전북대학교</a> · 
                                        <a class="hover:underline cursor-pointer">전주대학교</a> · 
                                        <a class="hover:underline cursor-pointer">제주대학교</a> · 
                                        <a class="hover:underline cursor-pointer">조선대학교</a> · 
                                        <a class="hover:underline cursor-pointer">중앙대학교</a> · 
                                        <a class="hover:underline cursor-pointer">충남대학교</a> · 
                                        <a class="hover:underline cursor-pointer">한국기술교육대학교</a> · 
                                        <a class="hover:underline cursor-pointer">한남대학교</a> · 
                                        <a class="hover:underline cursor-pointer">한동대학교</a> · 
                                        <a class="hover:underline cursor-pointer">한양대학교 ERICA</a> · 
                                        <a class="hover:underline cursor-pointer">한양대학교</a> · 
                                        <a class="hover:underline cursor-pointer">호서대학교</a> · 
                                        <a class="hover:underline cursor-pointer">홍익대학교</a> · 
                                        <a class="hover:underline cursor-pointer">홍익대학교 세종캠퍼스</a> · 
                                        <a class="hover:underline cursor-pointer" onclick="goToLink('평안명대학교.html')">평안명대학교</a> · 
                                        <a class="hover:underline cursor-pointer" onclick="goToLink('빈주대학교.html')">빈주대학교</a> · 
                                        <a class="hover:underline cursor-pointer" onclick="goToLink('천주대학교.html')">천주대학교</a> · 
                                        <a class="hover:underline cursor-pointer">선빈대학교</a> · 
                                        <a class="hover:underline cursor-pointer">덕주대학교</a> · 
                                        <a class="hover:underline cursor-pointer" onclick="goToLink('덕남대학교.html')">덕남대학교</a>
                                    </td>
                                </tr>
                                
                                <!-- 2. CAC -->
                                <tr>
                                    <th class="bg-black text-white border-b border-gray-700 border-l border-gray-700 p-2 text-center font-bold align-middle">
                                        CAC
                                    </th>
                                    <td class="bg-white border-b border-gray-200 border-l border-gray-300 p-3 leading-[2.1] break-keep text-[#0275d8]">
                                        <a class="hover:underline cursor-pointer">건양대학교</a> · 
                                        <a class="hover:underline cursor-pointer">경북대학교</a> · 
                                        <a class="hover:underline cursor-pointer">경희대학교</a> · 
                                        <a class="hover:underline cursor-pointer">광운대학교</a> · 
                                        <a class="hover:underline cursor-pointer">국립목포대학교</a> · 
                                        <a class="hover:underline cursor-pointer">동국대학교</a> · 
                                        <a class="hover:underline cursor-pointer">동아대학교</a> · 
                                        <a class="hover:underline cursor-pointer">동의대학교</a> · 
                                        <a class="hover:underline cursor-pointer">명지대학교</a> · 
                                        <a class="hover:underline cursor-pointer">상명대학교</a> · 
                                        <a class="hover:underline cursor-pointer">성결대학교</a> · 
                                        <a class="hover:underline cursor-pointer">성균관대학교</a> · 
                                        <a class="hover:underline cursor-pointer">세종대학교</a> · 
                                        <a class="hover:underline cursor-pointer">숭실대학교</a> · 
                                        <a class="hover:underline cursor-pointer">인제대학교</a> · 
                                        <a class="hover:underline cursor-pointer">전북대학교</a> · 
                                        <a class="hover:underline cursor-pointer">중앙대학교</a> · 
                                        <a class="hover:underline cursor-pointer">한동대학교</a> · 
                                        <a class="hover:underline cursor-pointer" onclick="goToLink('삼선대학교.html')">삼선대학교</a> · 
                                        <a class="hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a> · 
                                        <a class="hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대학교</a>
                                    </td>
                                </tr>
                                
                                <!-- 3. ETAC (시드니) -->
                                <tr>
                                    <th rowspan="2" class="bg-black text-white p-1 text-center font-bold align-middle text-[11px] leading-tight tracking-wider">
                                        E<br/>T<br/>A<br/>C
                                    </th>
                                    <th class="bg-black text-white border-b border-gray-700 border-l border-gray-700 p-1 text-center font-bold align-middle text-[11px] leading-tight">
                                        시<br/>드<br/>니
                                    </th>
                                    <td class="bg-white border-b border-gray-200 border-l border-gray-300 p-3 leading-relaxed break-keep text-center text-[#0275d8]">
                                        <a class="hover:underline cursor-pointer">두원공과대학교</a> · 
                                        <a class="hover:underline cursor-pointer">대림대학교</a> · 
                                        <a class="hover:underline cursor-pointer">연성대학교</a> · 
                                        <a class="hover:underline cursor-pointer">영남이공대학교</a> · 
                                        <a class="hover:underline cursor-pointer">울산과학대학교</a>
                                    </td>
                                </tr>
                                
                                <!-- 4. ETAC (더블린) -->
                                <tr>
                                    <th class="bg-black text-white border-l border-gray-700 p-1 text-center font-bold align-middle text-[11px] leading-tight">
                                        더<br/>블<br/>린
                                    </th>
                                    <td class="bg-white border-l border-gray-300 p-3 leading-relaxed break-keep text-center text-[#0275d8]">
                                        <a class="hover:underline cursor-pointer">동의과학대학교</a> · 
                                        <a class="hover:underline cursor-pointer">아주자동차대학교</a> · 
                                        <a class="hover:underline cursor-pointer">인하공업전문대학</a> · 
                                        <a class="hover:underline cursor-pointer">조선이공대학교</a>
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