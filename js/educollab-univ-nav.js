(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-educollab-univ-container");
        if (!container) return;

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (정부 태극 로고 + 흰색 테두리 타이틀 박스) -->
                <div class="bg-[#003876] text-center py-2.5 px-3 flex justify-center items-center">
                    <div class="border border-white rounded px-3.5 py-1 flex items-center gap-2.5 bg-[#003876]">
                        <img src="이미지/svg/대한민국_정부_로고.svg" class="h-6 object-contain" onerror="this.style.display='none';"/>
                        <div class="text-left leading-tight text-white">
                            <div class="text-[11px] font-normal tracking-tight opacity-90">교육부 대학재정지원사업</div>
                            <div class="text-[14px] font-bold tracking-tight">부처 협업형 인재양성사업 선정 대학</div>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-gray-50 border-y border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup>
                                <col class="w-[15%]">
                                <col class="w-[70%]">
                                <col class="w-[15%]">
                            </colgroup>
                            <tbody>
                                <!-- 테이블 헤더 행 -->
                                <tr>
                                    <th class="bg-gray-50 border border-gray-300 text-gray-800 py-2 px-2 font-bold text-center">분야</th>
                                    <th class="bg-gray-50 border border-gray-300 text-gray-800 py-2 px-2 font-bold text-center">대학명</th>
                                    <th class="bg-gray-50 border border-gray-300 text-gray-800 py-2 px-2 font-bold text-center">담당부처</th>
                                </tr>
                                
                                <!-- 1. 미래형자동차 ~ 8. 신기술융합디자인 (교육부, 산업통상자원부 묶음) -->
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">미래형자동차</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">가천대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경남대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경성대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경일대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립공주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">단국대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부산대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">성균관대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">영남대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">원광대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인천대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전북대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">청주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국공학대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한양대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">호서대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('빈주대학교.html')">빈주대학교</a>
                                    </td>
                                    <td rowspan="8" class="bg-white border border-gray-300 p-2 text-center align-middle font-semibold text-[#0275d8] break-keep leading-snug">
                                        교육부, 산업통상자원부
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">자원개발</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립한국해양대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립부경대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">세종대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">연세대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한양대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">수소산업</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">명지대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울과학기술대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">숭실대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">아주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">중앙대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">온실가스감축</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립한국해양대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">건국대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동아대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">아주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">연세대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인하대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전남대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전북대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국공학대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한양대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('빈주대학교.html')">빈주대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">이차전지</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">가천대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부산대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인하대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">시스템반도체</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">가천대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">강남대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경희대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">광운대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립금오공과대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립부경대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국립한밭대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국민대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">단국대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대구대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동국대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">명지대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부산대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">삼육대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">선문대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">성균관대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">숭실대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">아주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">연세대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">울산대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">이화여자대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인제대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인하대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전북대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">중앙대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">청주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">충남대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국공학대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한양대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한양대학교 ERICA캠퍼스</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">호서대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">홍익대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('삼선대학교.html')">삼선대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('엽월대학교.html')">엽월대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">바이오헬스</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">가천대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국민대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부산대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">성균관대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">우석대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">신기술융합디자인</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">성균관대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인천대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">청주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한양대학교 ERICA캠퍼스</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">홍익대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대학교</a>
                                    </td>
                                </tr>

                                <!-- 9. AI반도체 -->
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">AI반도체</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">성균관대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">숭실대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle font-semibold text-[#0275d8] break-keep leading-snug">
                                        교육부, 과학기술정보통신부
                                    </td>
                                </tr>

                                <!-- 10. 의료인공지능 -->
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">의료인공지능</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부산대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">성균관대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">아주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한림대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕남대학교.html')">덕남대학교</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle font-semibold text-[#0275d8] break-keep leading-snug">
                                        교육부, 보건복지부
                                    </td>
                                </tr>

                                <!-- 11. 디지털물산업 -->
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">디지털물산업</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국민대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울시립대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">세종대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">연세대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">충남대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('평안명대학교.html')">평안명대학교</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle font-semibold text-[#0275d8] break-keep leading-snug">
                                        대한민국 교육부, 환경부
                                    </td>
                                </tr>

                                <!-- 12. 그린리모델링 & 13. 공간정보 (교육부, 국토교통부 묶음) -->
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">그린리모델링</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경북대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">성균관대학교</a>
                                    </td>
                                    <td rowspan="2" class="bg-white border border-gray-300 p-2 text-center align-middle font-semibold text-[#0275d8] break-keep leading-snug">
                                        교육부, 국토교통부
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">공간정보</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경북대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경희대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">남서울대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울시립대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">안양대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인하대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전북대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">청주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕남대학교.html')">덕남대학교</a>
                                    </td>
                                </tr>

                                <!-- 14. 정보보안 -->
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">정보보안</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울여자대학교</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle font-semibold text-[#0275d8] break-keep leading-snug">
                                        교육부, 개인정보보호위원회
                                    </td>
                                </tr>

                                <!-- 15. 지식재산 -->
                                <tr>
                                    <th class="bg-white border border-gray-300 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">지식재산</th>
                                    <td class="bg-white border border-gray-300 p-2.5 leading-relaxed break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경북대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경상국립대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경희대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">고려대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">광운대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">국민대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">군산대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">단국대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">대진대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동국대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동덕여자대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동아대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">동의대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">삼육대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서경대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울과학기술대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">서울대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">숙명여자대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">신한대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">아주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">안양대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">영남대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인제대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">인하대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">제주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">중앙대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">청주대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">충남대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">포항공과대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한남대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한라대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한서대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a>, 
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대학교</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle font-semibold text-[#0275d8] break-keep leading-snug">
                                        교육부, 지식재산처
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