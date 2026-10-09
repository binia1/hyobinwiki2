(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-campus-park-container");
        if (!container) return;

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (정부 3개 부처 합동 로고 박스) -->
                <div class="bg-[#003876] text-center py-2.5 px-3 flex justify-center items-center">
                    <div class="border border-white rounded px-3 py-1 flex items-center gap-2.5 bg-[#003876]">
                        <img src="이미지/svg/대한민국_정부_로고.svg" class="h-6 object-contain" onerror="this.style.display='none';"/>
                        <div class="text-left leading-tight text-white">
                            <div class="text-[10px] font-normal tracking-tight opacity-90">교육부 국토교통부 중소벤처기업부</div>
                            <div class="text-[13px] font-bold tracking-tight">캠퍼스 혁신파크 사업 선정 대학</div>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-gray-50 border-y border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-[9%]">
                                <col class="w-[18%]">
                                <col class="w-[11%]">
                                <col class="w-[11%]">
                                <col class="w-[11%]">
                                <col class="w-[40%]">
                            </colgroup>
                            <tbody>
                                <!-- 테이블 헤더 -->
                                <tr>
                                    <th rowspan="2" class="bg-gray-50 border border-gray-300 text-gray-800 p-2 font-bold text-center align-middle">선정 기수</th>
                                    <th rowspan="2" class="bg-gray-50 border border-gray-300 text-gray-800 p-2 font-bold text-center align-middle">대학명</th>
                                    <th colspan="2" class="bg-gray-50 border border-gray-300 text-gray-800 p-1 font-bold text-center">사업규모</th>
                                    <th rowspan="2" class="bg-gray-50 border border-gray-300 text-gray-800 p-2 font-bold text-center align-middle">사업비</th>
                                    <th rowspan="2" class="bg-gray-50 border border-gray-300 text-gray-800 p-2 font-bold text-center align-middle">유치업종</th>
                                </tr>
                                <tr>
                                    <th class="bg-gray-100 border border-gray-300 text-gray-700 p-1 text-[11px] font-semibold text-center">부지(㎡)</th>
                                    <th class="bg-gray-100 border border-gray-300 text-gray-700 p-1 text-[11px] font-semibold text-center">연면적(㎡)</th>
                                </tr>
                                
                                <!-- 1기 (2019년) -->
                                <tr>
                                    <th rowspan="3" class="bg-white border border-gray-300 text-gray-800 p-2 font-bold text-center align-middle">
                                        1기<br/><span class="text-[10px] font-normal text-gray-500">(2019년)</span>
                                    </th>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle break-keep">
                                        <img src="이미지/svg/강원대.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">강원대</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2">66,500</td>
                                    <td class="bg-white border border-gray-300 p-2">50,950</td>
                                    <td class="bg-white border border-gray-300 p-2">504 억원</td>
                                    <td class="bg-white border border-gray-300 p-2 text-left leading-tight break-keep text-[11px]">데이터, 바이오, 정밀의료, 디지털 치료기기, 에너지 신산업</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle break-keep">
                                        <img src="이미지/svg/한남대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한남대</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2">21,000</td>
                                    <td class="bg-white border border-gray-300 p-2">23,820</td>
                                    <td class="bg-white border border-gray-300 p-2">424 억원</td>
                                    <td class="bg-white border border-gray-300 p-2 text-left leading-tight break-keep text-[11px]">기계, 금속, 바이오, 화학, 지식서비스, ICT</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle break-keep">
                                        <img src="이미지/svg/한양대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한양대(ERICA)</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2">186,848</td>
                                    <td class="bg-white border border-gray-300 p-2">984,826</td>
                                    <td class="bg-white border border-gray-300 p-2">6,900 억원</td>
                                    <td class="bg-white border border-gray-300 p-2 text-left leading-tight break-keep text-[11px]">IT, 첨단부품소재, 스마트제조혁신, BT, CT, 바이오, 의료</td>
                                </tr>
                                
                                <!-- 2기 (2021년) -->
                                <tr>
                                    <th rowspan="3" class="bg-white border border-gray-300 text-gray-800 p-2 font-bold text-center align-middle">
                                        2기<br/><span class="text-[10px] font-normal text-gray-500">(2021년)</span>
                                    </th>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle break-keep">
                                        <img src="이미지/svg/경북대.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">경북대</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2">32,000</td>
                                    <td class="bg-white border border-gray-300 p-2">22,000</td>
                                    <td class="bg-white border border-gray-300 p-2">1,204 억원</td>
                                    <td class="bg-white border border-gray-300 p-2 text-left leading-tight break-keep text-[11px]">의료기기, 의약품 제조, 첨단 제조, 컴퓨터 프로그래밍</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle break-keep">
                                        <img src="이미지/svg/전남대.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전남대</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2">35,609</td>
                                    <td class="bg-white border border-gray-300 p-2">22,350</td>
                                    <td class="bg-white border border-gray-300 p-2">1,500 억원</td>
                                    <td class="bg-white border border-gray-300 p-2 text-left leading-tight break-keep text-[11px]">IT, 환경공학기술(ET), 생명공학기술(BT), 문화콘텐츠기술(CT)</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle break-keep">
                                        <img src="이미지/효빈대_로고.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2">34,200</td>
                                    <td class="bg-white border border-gray-300 p-2">23,500</td>
                                    <td class="bg-white border border-gray-300 p-2">1,380 억원</td>
                                    <td class="bg-white border border-gray-300 p-2 text-left leading-tight break-keep text-[11px]">문화콘텐츠, 모빌리티, 철도, 소프트웨어산업</td>
                                </tr>
                                
                                <!-- 3기 (2022년) -->
                                <tr>
                                    <th rowspan="3" class="bg-white border border-gray-300 text-gray-800 p-2 font-bold text-center align-middle">
                                        3기<br/><span class="text-[10px] font-normal text-gray-500">(2022년)</span>
                                    </th>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle break-keep">
                                        <img src="이미지/svg/전북대_로고.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">전북대</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2">36,580</td>
                                    <td class="bg-white border border-gray-300 p-2">22,300</td>
                                    <td class="bg-white border border-gray-300 p-2">1,110 억원</td>
                                    <td class="bg-white border border-gray-300 p-2 text-left leading-tight break-keep text-[11px]">문화콘텐츠, ICT, 바이오융복합</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle break-keep">
                                        <img src="이미지/svg/국립창원대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">창원대</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2">18,000</td>
                                    <td class="bg-white border border-gray-300 p-2">22,490</td>
                                    <td class="bg-white border border-gray-300 p-2">504 억원</td>
                                    <td class="bg-white border border-gray-300 p-2 text-left leading-tight break-keep text-[11px]">스마트제조, 탄소중립, 지능형 방위, 항공</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle break-keep">
                                        <img src="이미지/덕북대_로고.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2">26,500</td>
                                    <td class="bg-white border border-gray-300 p-2">21,800</td>
                                    <td class="bg-white border border-gray-300 p-2">980 억원</td>
                                    <td class="bg-white border border-gray-300 p-2 text-left leading-tight break-keep text-[11px]">데이터, 바이오, 지능형방위</td>
                                </tr>
                                
                                <!-- 4기 (2023년) -->
                                <tr>
                                    <th rowspan="2" class="bg-white border border-gray-300 text-gray-800 p-2 font-bold text-center align-middle">
                                        4기<br/><span class="text-[10px] font-normal text-gray-500">(2023년)</span>
                                    </th>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle break-keep">
                                        <img src="이미지/svg/단국대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">단국대(천안)</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2">21,453</td>
                                    <td class="bg-white border border-gray-300 p-2">19,997</td>
                                    <td class="bg-white border border-gray-300 p-2">536.2 억원</td>
                                    <td class="bg-white border border-gray-300 p-2 text-left leading-tight break-keep text-[11px]">첨단 부품·소재, 생명공학(바이오), 건강관리(헬스케어) 업종</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-300 p-2 text-center align-middle break-keep">
                                        <img src="이미지/svg/국립부경대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">부경대</a>
                                    </td>
                                    <td class="bg-white border border-gray-300 p-2">18,000</td>
                                    <td class="bg-white border border-gray-300 p-2">20,000</td>
                                    <td class="bg-white border border-gray-300 p-2">530 억원</td>
                                    <td class="bg-white border border-gray-300 p-2 text-left leading-tight break-keep text-[11px]">지능형(스마트)해양수산, 파워반도체, 지능형건강관리(스마트헬스)</td>
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