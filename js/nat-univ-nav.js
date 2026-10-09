(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-nat-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#003366] mb-5 text-[13px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 -->
                <div class="bg-[#003366] text-center py-2.5 px-3">
                    <div class="text-[14px] font-bold text-white flex justify-center items-center gap-1.5">
                        <img src="이미지/svg/대한민국_정부_로고.svg" class="h-4 inline-block object-contain" onerror="this.style.display='none';"/>
                        대한민국의 국립고등교육기관
                    </div>
                </div>
                
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#003366]/5 border-b border-[#003366] py-1 text-[11px] font-bold text-[#003366] cursor-pointer select-none hover:bg-[#003366]/15 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup>
                                <col class="w-[15%]">
                                <col class="w-[55%]">
                                <col class="w-[30%]">
                            </colgroup>
                            <tbody>
                                <!-- 상단 헤더 -->
                                <tr>
                                    <th class="bg-[#003366] border border-[#003366] text-white p-2 font-bold text-center">지역명</th>
                                    <th class="bg-[#003366] border border-[#003366] text-white p-2 font-bold text-center">대학</th>
                                    <th class="bg-[#003366] border border-[#003366] text-white p-2 font-bold text-center">교육대학</th>
                                </tr>
                                
                                <!-- 수도권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">수도권</th>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/서울과학기술대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>서울과학기술대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/서울대.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>서울대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/인천대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>인천대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한경국립대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>한경국립대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한국체육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>한국체육대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/경인교육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>경인교육대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/서울교육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>서울교육대학교</a>
                                    </td>
                                </tr>
                                
                                <!-- 강원권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">강원권</th>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/강원대.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>강원대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/춘천교육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>춘천교육대학교</a>
                                    </td>
                                </tr>
                                
                                <!-- 충청권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">충청권</th>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/공주대.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립공주대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국립한국교통대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립한국교통대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국립한밭대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립한밭대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/충남대.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>충남대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/충북대.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>충북대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한국교원대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>한국교원대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/공주교육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>공주교육대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/청주교육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>청주교육대학교</a>
                                    </td>
                                </tr>
                                
                                <!-- 경상권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">경상권</th>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/경북대.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>경북대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/경상국립대학교_로고.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>경상국립대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국립경국대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립경국대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국립금오공과대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립금오공과대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국립부경대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립부경대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국립창원대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립창원대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한국해양대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립한국해양대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/부산대.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>부산대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/대구교육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>대구교육대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/부산교육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>부산교육대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/진주교육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>진주교육대학교</a>
                                    </td>
                                </tr>
                                
                                <!-- 전라권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">전라권</th>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국립군산대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립군산대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국립목포대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립목포대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/목포해양대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립목포해양대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국립순천대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립순천대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/전남대.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>전남대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/전북대_로고.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>전북대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/광주교육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>광주교육대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/전주교육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>전주교육대학교</a>
                                    </td>
                                </tr>
                                
                                <!-- 제주권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">제주권</th>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/제주대.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>제주대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003366] p-2.5 text-center text-gray-400 font-bold">-</td>
                                </tr>
                                
                                <!-- 덕빈권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">덕빈권</th>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center" onclick="goToLink('국립서해대학교.html')"><img src="이미지/svg/국립서해대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립서해대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center" onclick="goToLink('서해해양대학교.html')"><img src="이미지/svg/국립서해해양대학교_UI.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립서해해양대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center" onclick="goToLink('천주대학교.html')"><img src="이미지/svg/국립천주대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립천주대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center" onclick="goToLink('덕남대학교.html')"><img src="이미지/국립덕남대학교_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>덕남대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center" onclick="goToLink('덕북대학교.html')"><img src="이미지/덕북대_로고.webp" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>덕북대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center" onclick="goToLink('효빈대학교.html')"><img src="이미지/효빈대_로고.webp" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>효빈대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center" onclick="goToLink('효빈해양대학교.html')"><img src="이미지/svg/효빈해양대학교_로고.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>효빈해양대학교</a>
                                    </td>
                                    <td class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center" onclick="goToLink('덕주교육대학교.html')"><img src="이미지/svg/국립덕주교육대학교_UI.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>덕주교육대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center" onclick="goToLink('빈주교육대학교.html')"><img src="이미지/svg/빈주교육대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>빈주교육대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center" onclick="goToLink('효빈교육대학교.html')"><img src="이미지/효빈교육대학교_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>효빈교육대학교</a>
                                    </td>
                                </tr>
                                
                                <!-- 하단 특수목적대 헤더 -->
                                <tr>
                                    <th class="bg-[#003366] border border-[#003366] text-white p-2 font-bold text-center">분류</th>
                                    <th colspan="2" class="bg-[#003366] border border-[#003366] text-white p-2 font-bold text-center">명칭</th>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">원격대학</th>
                                    <td colspan="2" class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한국방송통신대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>한국방송통신대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">전문대학</th>
                                    <td colspan="2" class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한국농수산대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>한국농수산대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">각종학교</th>
                                    <td colspan="2" class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한국예술종합학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>한국예술종합학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">대학원대학</th>
                                    <td colspan="2" class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/과학기술연합대학원대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>과학기술연합대학원대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국립암센터국제암대학원대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국립암센터국제암대학원대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한국학중앙연구원.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>한국학중앙연구원 한국학대학원</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">과학기술원</th>
                                    <td colspan="2" class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한국과학기술원.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>한국과학기술원(KAIST)</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/광주과학기술원.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>광주과학기술원(GIST)</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/대구경북과학기술원.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>대구경북과학기술원(DGIST)</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/울산과학기술원.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>울산과학기술원(UNIST)</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center" onclick="goToLink('효빈과학기술원.html')"><img src="이미지/HIST_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>효빈과학기술원(HIST)</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">사관학교</th>
                                    <td colspan="2" class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/육군사관학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>육군사관학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/해군사관학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>해군사관학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/공군사관학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>공군사관학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국군간호사관학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국군간호사관학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/육군3사관학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>육군3사관학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-[#003366] text-gray-800 p-2.5 font-bold text-center align-middle break-keep">기타</th>
                                    <td colspan="2" class="bg-white border border-[#003366] p-2.5 leading-[2.1] break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/경찰대학.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>경찰대학</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/국방대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>국방대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한국전통문화대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>한국전통문화대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한국에너지공과대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>한국에너지공과대학교</a><span class="mx-1 text-gray-400 font-bold">·</span>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer inline-flex items-center"><img src="이미지/svg/한국국방과학기술대학.svg" class="w-3.5 h-3.5 mr-1 object-contain" onerror="this.style.display='none';"/>한국국방과학기술대학</a>
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