(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-pub-lib-container");
        if (!container) return;

        const templateHTML = `
            <div class="border-2 border-[#203864] mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (#203864 적용 + 노란색 타이틀 박스) -->
                <div class="bg-[#203864] text-center py-2.5 px-3 flex justify-center items-center">
                    <div class="border border-[#FFD700] rounded-sm px-3 py-1 flex items-center gap-2">
                        <span class="text-[#FFD700] text-[15px] font-bold tracking-tight">국공립대학도서관협의회 회원교</span>
                    </div>
                </div>
                
                <!-- 열려 있는 상태로 시작하는 details 구조 -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-[#203864] border-t border-[#203864] py-1 text-[11px] font-bold text-white cursor-pointer select-none hover:bg-[#1a2e54] transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-1/4"><col class="w-1/4"><col class="w-1/4"><col class="w-1/4">
                            </colgroup>
                            <tbody>
                                <!-- 1. 일반대학 (41개교) -->
                                <tr>
                                    <th colspan="4" class="bg-[#222222] border border-[#222222] text-white py-1.5 px-2 font-bold text-center">
                                        일반대학 (41개교)
                                    </th>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/강원대.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">강원대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/경북대.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경북대학교</a> 중앙도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/경상국립대학교_로고.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경상국립대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/광주과학기술원.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">광주과학기술원</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립강릉원주대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립강릉원주대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/공주대.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립공주대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립군산대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립군산대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립금오공과대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립금오공과대학교</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립목포대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립목포대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립부경대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립부경대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립순천대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립순천대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립경국대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립경국대학교</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립창원대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립창원대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/한국해양대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립한국해양대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립한밭대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립한밭대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/대구경북과학기술원.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대구경북과학기술원</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/부산대.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부산대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/서울과학기술대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울과학기술대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/서울대.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울대학교</a> 중앙도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/서울시립대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울시립대학교</a> 중앙도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/울산과학기술원.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">울산과학기술원</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/인천대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인천대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/전남대.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전남대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/전북대_로고.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전북대학교</a> 중앙도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/제주대.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">제주대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/충남대.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">충남대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/충북대.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">충북대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/한경국립대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한경국립대학교</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/한국과학기술원.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국과학기술원</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/한국교원대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국교원대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립한국교통대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립한국교통대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/한국체육대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국체육대학교</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/효빈대_로고.webp" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a> 중앙도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/HIST_UI.webp" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈과학기술원.html')">효빈과학기술원</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/효빈교육대학교_UI.webp" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈교육대학교.html')">효빈교육대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/효빈해양대학교_로고.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈해양대학교.html')">효빈해양대학교</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립서해대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('국립서해대학교.html')">국립서해대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립서해해양대학교_UI.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('서해해양대학교.html')">국립서해해양대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/덕북대_로고.webp" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대학교</a> 중앙도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립천주대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('천주대학교.html')">국립천주대학교</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/국립덕남대학교_UI.webp" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕남대학교.html')">덕남대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1"></td>
                                    <td class="bg-white border border-gray-200 py-2 px-1"></td>
                                    <td class="bg-white border border-gray-200 py-2 px-1"></td>
                                </tr>

                                <!-- 2. 교육대학 (13개교) -->
                                <tr>
                                    <th colspan="4" class="bg-[#222222] border border-[#222222] text-white py-1.5 px-2 font-bold text-center">
                                        교육대학 (13개교)
                                    </th>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/경인교육대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경인교육대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/공주교육대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">공주교육대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/광주교육대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">광주교육대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/대구교육대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대구교육대학교</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/부산교육대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부산교육대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/서울교육대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울교육대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/전주교육대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전주교육대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/진주교육대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">진주교육대학교</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/청주교육대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">청주교육대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/춘천교육대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">춘천교육대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/효빈교육대학교_UI.webp" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈교육대학교.html')">효빈교육대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/빈주교육대학교_UI.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('빈주교육대학교.html')">빈주교육대학교</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국립덕주교육대학교_UI.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕주교육대학교.html')">덕주교육대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1"></td>
                                    <td class="bg-white border border-gray-200 py-2 px-1"></td>
                                    <td class="bg-white border border-gray-200 py-2 px-1"></td>
                                </tr>

                                <!-- 3. 기타대학 (11개교) -->
                                <tr>
                                    <th colspan="4" class="bg-[#222222] border border-[#222222] text-white py-1.5 px-2 font-bold text-center">
                                        기타대학 (11개교)
                                    </th>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/경찰대학.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경찰대학</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/공군사관학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">공군사관학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국군간호사관학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국군간호사관학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/국방대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국방대학교</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/육군3사관학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">육군3사관학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/육군사관학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">육군사관학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/한국방송통신대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국방송통신대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/한국예술종합학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국예술종합학교</a> 도서관
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/한국전통문화대학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국전통문화대학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/해군사관학교.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">해군사관학교</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1 align-middle break-keep">
                                        <img src="이미지/svg/한국국방과학기술대학.svg" class="inline-block w-4 h-4 mr-1 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국국방과학기술대학</a> 도서관
                                    </td>
                                    <td class="bg-white border border-gray-200 py-2 px-1"></td>
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