(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-sw-core-container");
        if (!container) return;

        // 헬퍼: 학교 아이템 생성 (로고 + 명칭 + 링크 + 윗첨자)
        const item = (name, logoName, sup = null, link = null) => `
            <span class="inline-flex items-center mx-1">
                <img src="이미지/${logoName}" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                <a class="text-[#0275d8] hover:underline cursor-pointer"${link ? ` onclick="goToLink('${link}')"` : ""}>${name}</a>${sup ? `<sup class="text-[10px] text-gray-700 font-bold ml-0.5">${sup}</sup>` : ""}
            </span>
        `;

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (SW중심대학 로고 박스) -->
                <div class="bg-white text-center py-2.5 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-5 py-1.5 flex items-center justify-center bg-white shadow-sm">
                        <img src="이미지/svg/SW중심대학_로고.svg" class="h-7 object-contain"  this.onerror=function(){this.style.display='none';};"/>
                        <span class="text-[16px] font-extrabold text-gray-900 tracking-tight italic ml-1" style="font-family: 'Nanum Pen Script', cursive, sans-serif;">SW중심대학</span>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-gray-50 border-y border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup>
                                <col class="w-[15%]">
                                <col class="w-[85%]">
                            </colgroup>
                            <tbody>
                                <!-- 수도권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">수도권</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.3] break-keep">
                                        ${item('가천대학교', '가천대학교.webp', '재')} · 
                                        ${item('경기대학교', '경기대학교.webp')} · 
                                        ${item('경희대학교', '경희대학교.webp', '재')} · 
                                        ${item('고려대학교', '고려대학교.webp', '재')} · 
                                        ${item('국민대학교', '국민대학교.webp', '재')} · 
                                        ${item('단국대학교', '단국대학교.webp', '재')} · 
                                        ${item('동국대학교', '동국대학교.webp', '재')} · 
                                        ${item('삼육대학교', '삼육대학교.webp', '특')} · 
                                        ${item('서강대학교', '서강대학교.webp', '재')} · 
                                        ${item('성균관대학교', '성균관대학교.webp', '재')} · 
                                        ${item('세종대학교', '세종대학교.webp', '재')} · 
                                        ${item('숙명여자대학교', '숙명여자대학교.webp')} · 
                                        ${item('숭실대학교', '숭실대학교.webp', '재')} · 
                                        ${item('신한대학교', '신한대학교.webp')} · 
                                        ${item('아주대학교', '아주대학교.webp', '재')} · 
                                        ${item('연세대학교', '연세대학교.webp')} · 
                                        ${item('인하대학교', '인하대학교.webp')} · 
                                        ${item('한국공학대학교', '한국공학대학교.webp', '특')} · 
                                        ${item('한국항공대학교', '한국항공대학교.webp', '특')} · 
                                        ${item('한성대학교', '한성대학교.webp')} · 
                                        ${item('한신대학교', '한신대학교.webp', '특')} · 
                                        ${item('한양대학교(ERICA)', '한양대학교.webp', '재')} · 
                                        ${item('중앙대학교', '중앙대학교.webp')} · 
                                        ${item('서울시립대학교', '서울시립대학교.webp')}
                                    </td>
                                </tr>
                                
                                <!-- 관동권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">관동권</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.3] break-keep">
                                        ${item('한라대학교', '한라대학교.webp', '특')} · 
                                        ${item('한림대학교', '한림대학교.webp', '재')} · 
                                        ${item('강원대학교', '이미지/svg/강원대.svg')}
                                    </td>
                                </tr>
                                
                                <!-- 호서권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">호서권</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.3] break-keep">
                                        ${item('건양대학교', '건양대학교.webp')} · 
                                        ${item('고려대학교(세종)', '고려대학교.webp')} · 
                                        ${item('국립공주대학교', '이미지/svg/공주대.svg')} · 
                                        ${item('국립한밭대학교', '국립한밭대학교.webp')} · 
                                        ${item('선문대학교', '선문대학교.webp', '재')} · 
                                        ${item('순천향대학교', '순천향대학교.webp')} · 
                                        ${item('우송대학교', '우송대학교.webp', '재')} · 
                                        ${item('충남대학교', '이미지/svg/충남대.svg', '재')} · 
                                        ${item('한국과학기술원', '한국과학기술원.svg', '재')} · 
                                        ${item('한국기술교육대학교', '한국기술교육대학교.svg')} · 
                                        ${item('호서대학교', '호서대학교.webp')} · 
                                        ${item('청주대학교', '청주대학교.webp')} · 
                                        ${item('목원대학교', '목원대학교.webp')} · 
                                        ${item('대전대학교', '대전대학교.webp')}
                                    </td>
                                </tr>
                                
                                <!-- 동남권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">동남권</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.3] break-keep">
                                        ${item('경남대학교', '경남대학교.webp')} · 
                                        ${item('국립부경대학교', '이미지/svg/국립부경대학교.svg')} · 
                                        ${item('국립창원대학교', '국립창원대학교.webp', '특')} · 
                                        ${item('동아대학교', '동아대학교.webp')} · 
                                        ${item('부산대학교', '이미지/svg/부산대.svg', '재')} · 
                                        ${item('울산대학교', '이미지/svg/울산대학교.svg')} · 
                                        ${item('인제대학교', '인제대학교.webp', '특')}
                                    </td>
                                </tr>
                                
                                <!-- 대경권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">대경권</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.3] break-keep">
                                        ${item('경북대학교', '이미지/svg/경북대.svg', '재')} · 
                                        ${item('경운대학교', '경운대학교.webp', '특')} · 
                                        ${item('영남대학교', '이미지/svg/영남대학교.svg')} · 
                                        ${item('한동대학교', '한동대학교.webp', '재')} · 
                                        ${item('대구대학교', '대구대학교.webp')}
                                    </td>
                                </tr>
                                
                                <!-- 호남권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">호남권</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.3] break-keep">
                                        ${item('국립군산대학교', '국립군산대학교.webp')} · 
                                        ${item('국립순천대학교', '국립순천대학교.webp')} · 
                                        ${item('전남대학교', '이미지/svg/전남대.svg')} · 
                                        ${item('전북대학교', '이미지/svg/전북대_로고.svg')} · 
                                        ${item('조선대학교', '이미지/svg/조선대학교.svg', '재')}
                                    </td>
                                </tr>
                                
                                <!-- 덕빈권 -->
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 p-2.5 font-bold text-center align-middle break-keep">덕빈권</th>
                                    <td class="bg-white border border-gray-200 p-2.5 leading-[2.3] break-keep">
                                        ${item('효빈대학교', '효빈대_로고.webp', null, '효빈대학교.html')} · 
                                        ${item('천주대학교', '국립천주대학교.svg', null, '천주대학교.html')} · 
                                        ${item('평안명대학교', '평안명대학교_UI.webp', null, '평안명대학교.html')} · 
                                        ${item('삼선대학교', '삼선대학교_UI.webp', null, '삼선대학교.html')} · 
                                        ${item('덕북대학교', '덕북대_로고.webp', null, '덕북대학교.html')} · 
                                        ${item('덕남대학교', '국립덕남대학교_UI.webp', null, '덕남대학교.html')}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <!-- 하단 특화/재선정 범례 주석 -->
                        <div class="text-[11px] text-center text-gray-600 py-1.5 bg-gray-50 border-t border-gray-200 font-medium">
                            <sup>특</sup>: 특화트랙(중·소규모대학), <sup>재</sup>: 재선정 대학
                        </div>
                    </div>
                </details>
            </div>
        `;

        container.innerHTML = templateHTML;
    });
})();