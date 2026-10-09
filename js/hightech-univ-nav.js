(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-hightech-univ-container");
        if (!container) return;

        // 동반성장형 묶음 헬퍼
        const pair = (u1, l1, u2, l2, u3 = null, l3 = null) => {
            let res = `&lt; <span class="inline-flex items-center"><img src="이미지/${l1}" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">${u1}</a></span> - <span class="inline-flex items-center"><img src="이미지/${l2}" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">${u2}</a></span>`;
            if (u3) {
                res += ` - <span class="inline-flex items-center"><img src="이미지/${l3}" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">${u3}</a></span>`;
            }
            res += ` &gt;`;
            return res;
        };

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 -->
                <div class="bg-[#003876] text-center py-2.5 px-3 flex justify-center items-center gap-1.5 border-b border-[#003876]">
                    <img src="이미지/svg/대한민국_정부_로고.svg" class="h-4 object-contain inline-block" onerror="this.style.display='none';"/>
                    <div class="text-[13px] font-bold text-white tracking-tight leading-tight">
                        <span class="text-[10px] font-normal block opacity-90">교육부</span>
                        첨단산업 특성화대학
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-gray-50 border-b border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup>
                                <col class="w-[12%]">
                                <col class="w-[10%]">
                                <col class="w-[13%]">
                                <col class="w-[65%]">
                            </colgroup>
                            <tbody>
                                <!-- 1. 반도체 (수도권) -->
                                <tr>
                                    <th rowspan="4" class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep">반도체</th>
                                    <th rowspan="2" class="bg-white border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle break-keep">수도권</th>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-semibold text-center align-middle break-keep">단독형</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.2] break-keep">
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/가천대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">가천대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/광운대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">광운대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/서강대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">서강대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/서울대.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">서울대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/성균관대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">성균관대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/연세대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">연세대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/중앙대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">중앙대학교</a></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-semibold text-center align-middle break-keep leading-tight">동반 성장형</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.2] break-keep">
                                        ${pair('고려대학교', '고려대학교.svg', '인제대학교', '인제대학교.svg')} · 
                                        ${pair('명지대학교', '명지대학교.svg', '호서대학교', '호서대학교.svg')} · 
                                        ${pair('아주대학교', '아주대학교.svg', '국립한밭대학교', '국립한밭대학교.svg')} · 
                                        ${pair('인하대학교', '인하대학교.svg', '강원대학교', '이미지/svg/강원대.svg')} · 
                                        ${pair('한국공학대학교', '한국공학대학교.svg', '국립공주대학교', '이미지/svg/공주대.svg')}
                                    </td>
                                </tr>
                                
                                <!-- 1. 반도체 (비수도권) -->
                                <tr>
                                    <th rowspan="2" class="bg-white border border-gray-200 text-gray-700 p-2 font-bold text-center align-middle break-keep">비수도권</th>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-semibold text-center align-middle break-keep">단독형</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.2] break-keep">
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/경북대.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">경북대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/고려대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">고려대학교 세종캠퍼스</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/부산대.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">부산대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/효빈대_로고.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('효빈대학교.html')">효빈대학교</a></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-700 p-2 font-semibold text-center align-middle break-keep leading-tight">동반 성장형</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.2] break-keep">
                                        ${pair('경상국립대학교', '이미지/svg/경상국립대학교_로고.svg', '국립부경대학교', '이미지/svg/국립부경대학교.svg')} · 
                                        ${pair('국립금오공과대학교', '이미지/svg/국립금오공과대학교.svg', '영남대학교', '이미지/svg/영남대학교.svg')} · 
                                        ${pair('전북대학교', '이미지/svg/전북대_로고.svg', '전남대학교', '이미지/svg/전남대.svg')} · 
                                        ${pair('충북대학교', '이미지/svg/충북대.svg', '충남대학교', '이미지/svg/충남대.svg', '한국기술교육대학교', '한국기술교육대학교.svg')} · 
                                        &lt; <span class="inline-flex items-center"><img src="이미지/덕북대_로고.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕북대학교.html')">덕북대학교</a></span> - <span class="inline-flex items-center"><img src="이미지/국립덕남대학교_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('덕남대학교.html')">덕남대학교</a></span> &gt;
                                    </td>
                                </tr>
                                
                                <!-- 2. 이차전지 -->
                                <tr>
                                    <th colspan="3" class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep">이차전지</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.2] break-keep">
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/국립부경대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">국립부경대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/울산대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">울산대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/인하대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">인하대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/전남대.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">전남대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/한양대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">한양대학교 ERICA</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/엽월대학교_UI.webp" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer" onclick="goToLink('엽월대학교.html')">엽월대학교</a></span>
                                    </td>
                                </tr>
                                
                                <!-- 3. 바이오 -->
                                <tr>
                                    <th colspan="3" class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep">바이오</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.2] break-keep">
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/순천향대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">순천향대학교</a></span> · 
                                        <span class="inline-flex items-center mr-1"><img src="이미지/svg/인하대학교.svg" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/><a class="text-[#0275d8] hover:underline cursor-pointer">인하대학교</a></span>
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