// js/효빈도서관목록.js
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-library-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div class="w-full mx-auto border-2 mb-8 text-sm font-sans bg-white shadow-sm" style="border-color: #7777AA;">
            <div class="text-white p-2.5 flex justify-center items-center gap-3 border-b" style="background-color: #7777AA; border-bottom-color: #7777AA;">
                <img alt="효빈광역시 로고" class="h-8 object-contain bg-transparent" onerror="this.style.display='none'" src="이미지/logo.webp"/>
                <div class="flex flex-col items-center justify-center text-center">
                    <span class="font-extrabold text-[17px] tracking-widest leading-tight drop-shadow-sm text-white">효빈광역시 관내 공공도서관</span>
                </div>
            </div>
            <div class="bg-white text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-gray-100 transition-colors border-b text-gray-700" onclick="toggleTable('lib-nav-body', 'libToggleBtn')" style="border-bottom-color: #7777AA;">
                <span id="libToggleBtn">[ 접기 ]</span>
            </div>
            <table class="w-full border-collapse bg-white text-center table-fixed text-[13px] text-gray-800">
                <colgroup>
                    <col style="width: 15%;"/>
                    <col style="width: 85%;"/>
                </colgroup>
                <tbody class="toggle-body" id="lib-nav-body">
                    <!-- 시청산하 시립도서관 -->
                    <tr>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-b border-gray-300 tracking-wide text-[14px]" colspan="2">시청산하 시립도서관</th>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#7799CC] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">북구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈시청한바다도서관.html">효빈시청한바다도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#006699] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">청엽구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈도서관.html">효빈도서관</a>
                        </td>
                    </tr>
                    <!-- 교육청 산하 시립도서관 -->
                    <tr>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-b border-gray-300 border-t border-gray-300 tracking-wide text-[14px]" colspan="2">교육청 산하 시립도서관</th>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#BB9955] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">중구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립중앙도서관.html">효빈광역시립중앙도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#FF9922] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">동구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립덕현도서관.html">효빈광역시립덕현도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#00AABB] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">서구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립당선도서관.html">효빈광역시립당선도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#DDBBFF] text-gray-800 py-2 font-bold border-r border-white border-b border-white shadow-inner">남구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립항동분관.html">효빈광역시립항동분관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립평당도서관.html">효빈광역시립평당도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#7799CC] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">북구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립시민도서관.html">효빈광역시립시민도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립오내도서관.html">효빈광역시립오내도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#33AAFF] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">창전구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립창전도서관.html">효빈광역시립창전도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#006699] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">청엽구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립청엽도서관.html">효빈광역시립청엽도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립비마도서관.html">효빈광역시립비마도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#AA66DD] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">안천구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립안천도서관.html">효빈광역시립안천도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#BBFF64] text-gray-800 py-2 font-bold border-r border-white border-b border-white shadow-inner">탄성군</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="효빈광역시립탄성도서관.html">효빈광역시립탄성도서관</a><span class="text-[10px] text-gray-500 font-bold ml-0.5">(예정)</span>
                        </td>
                    </tr>
                    <!-- 구·군립도서관 -->
                    <tr>
                        <th class="bg-[#7777AA] text-white py-1.5 font-bold border-b border-gray-300 border-t border-gray-300 tracking-wide text-[14px]" colspan="2">구·군립도서관</th>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#BB9955] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">중구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="중구립도서관.html">중구립도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="중구효빈전차도서관.html">중구효빈전차도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#FF9922] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">동구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="동구립사가당도서관.html">동구립사가당도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="전천도서관.html">전천도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#00AABB] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">서구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="서구립도서관.html">서구립도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="사복도서관.html">사복도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="청덕도서관.html">청덕도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="과진과학도서관.html">과진과학도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#DDBBFF] text-gray-800 py-2 font-bold border-r border-white border-b border-white shadow-inner">남구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="평당평산도서관.html">평당평산도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="어간도서관.html">어간도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="남구해양도서관.html">남구해양도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#7799CC] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">북구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="중수도서관.html">중수도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <strong class="text-gray-800 break-keep">고송도서관</strong> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="만화애니메이션도서관.html">만화애니메이션도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="북구청도서관.html">북구청도서관</a><span class="text-[10px] text-gray-500 font-bold ml-0.5">(예정)</span>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#33AAFF] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">창전구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="칠심도서관.html">칠심도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="쌍엽도서관.html">쌍엽도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="창전문화도서관.html">창전문화도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#006699] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">청엽구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="청엽구청도서관.html">청엽구청도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="우전도서관.html">우전도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#AA66DD] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">안천구</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="안천팔망성도서관.html">안천팔망성도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="당가도서관.html">당가도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="이자도서관.html">이자도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="이자공원도서관.html">이자공원도서관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <th class="bg-[#BBFF64] text-gray-800 py-2 font-bold border-r border-white border-b border-white shadow-inner">탄성군</th>
                        <td class="text-center py-2 px-3 leading-loose">
                            <a class="text-[#0275d8] hover:underline break-keep" href="탄성군립도서관.html">탄성군립도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="탄성군청작은도서관.html">탄성군청작은도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="앵내도서관.html">앵내도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="탄성군청소년센터_작은도서관.html">탄성군청소년센터 작은도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="서목읍작은도서관.html">서목읍작은도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="고해읍작은도서관.html">고해읍작은도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="소원장난감도서관.html">소원장난감도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="도향면작은도서관.html">도향면작은도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="정근면_작은도서관.html">정근면 작은도서관</a> <span class="text-gray-300 mx-1">·</span>
                            <a class="text-[#0275d8] hover:underline break-keep" href="흑택아이스크림도서관.html">흑택아이스크림도서관</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
    }
});