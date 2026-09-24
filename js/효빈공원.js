document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobin-parks-nav-container");
    if (container) {
        container.innerHTML = `
<div class="w-full mx-auto border-2 mb-8 text-sm font-sans bg-white shadow-sm mt-4" style="border-color: #7777AA;">
    <div class="text-white p-2.5 flex justify-center items-center gap-3 border-b" style="background-color: #7777AA; border-bottom-color: #7777AA;">
        <img alt="효빈광역시 로고" class="h-8 object-contain bg-transparent" onerror="this.style.display='none'" src="이미지/logo.webp"/>
        <div class="flex flex-col items-center justify-center text-center">
            <span class="font-extrabold text-[17px] tracking-widest leading-tight drop-shadow-sm text-white">효빈광역시 관내 주요 공원</span>
        </div>
    </div>
    <div class="bg-white text-center text-xs py-1.5 cursor-pointer font-bold select-none hover:bg-gray-100 transition-colors border-b text-gray-700" onclick="toggleTable('park-nav-body', 'parkToggleBtn')" style="border-bottom-color: #7777AA;">
        <span id="parkToggleBtn">[ 접기 ]</span>
    </div>
    <table class="w-full border-collapse bg-white text-center table-fixed text-[13px] text-gray-800">
        <colgroup>
            <col style="width: 15%;"/>
            <col style="width: 85%;"/>
        </colgroup>
        <tbody class="toggle-body" id="park-nav-body">
            <!-- 북구 -->
            <tr class="border-b border-gray-200">
                <th class="bg-[#7799CC] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">북구</th>
                <td class="text-center py-2 px-3 leading-loose">
                    <a class="text-[#0275d8] hover:underline break-keep" href="시청공원.html">시청</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="사가당공원.html">사가당</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="진희공원.html">진희</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="고송공원.html">고송</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="중수강변공원.html">중수강변</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="중수해안공원.html">중수해안</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="월음공원.html">월음</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="고송강변공원.html">고송강변</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="목금공원.html">목금</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="평전공원.html">평전</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="귤발공원.html">귤발</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="굴회공원.html">굴회</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="삼성공원.html">삼성</a>
                </td>
            </tr>
            <!-- 중구 -->
            <tr class="border-b border-gray-200">
                <th class="bg-[#BB9955] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">중구</th>
                <td class="text-center py-2 px-3 leading-loose">
                    <a class="text-[#0275d8] hover:underline break-keep" href="효빈성공원.html">효빈성</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="조유공원.html">조유</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="구보공원.html">구보</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="우이문화촌.html">우이문화촌공원</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="소장해변공원.html">소장해변</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="어신공원.html">어신</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="골만공원.html">골만</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="내조공원역.html">내조공원</a>
                </td>
            </tr>
            <!-- 동구 -->
            <tr class="border-b border-gray-200">
                <th class="bg-[#FF9922] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">동구</th>
                <td class="text-center py-2 px-3 leading-loose">
                    <a class="text-[#0275d8] hover:underline break-keep" href="결나공원.html">결나</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="사가당공원.html">사가당</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="천풍공원.html">천풍</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="전채공원.html">전채</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="삼댁공원.html">삼댁</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="전야공원.html">전야</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="고속철도공원.html">고속철도</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="동구청공원.html">동구청</a>
                </td>
            </tr>
            <!-- 남구 -->
            <tr class="border-b border-gray-200">
                <th class="bg-[#DDBBFF] text-gray-800 py-2 font-bold border-r border-white border-b border-white shadow-inner">남구</th>
                <td class="text-center py-2 px-3 leading-loose">
                    <a class="text-[#0275d8] hover:underline break-keep" href="창문공원.html">창문</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="소궁공원.html">소궁</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="이파공원.html">이파</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="명주공원.html">명주</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="어간공원.html">어간</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="곽산역공원.html">곽산역</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="기랑공원.html">기랑</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="석무공원.html">석무</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="백생공원.html">백생</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="평당중앙공원.html">평당중앙</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="국목공원.html">국목</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="봉전공원.html">봉전</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="강번공원.html">강번</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="리어공원.html">리어</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="능남공원.html">능남</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="항동삼각공원.html">항동삼각</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="곽암해수욕장.html">곽암</a>
                </td>
            </tr>
            <!-- 서구 -->
            <tr class="border-b border-gray-200">
                <th class="bg-[#00AABB] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">서구</th>
                <td class="text-center py-2 px-3 leading-loose">
                    <a class="text-[#0275d8] hover:underline break-keep" href="효빈성북문.html">효빈성북문</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="구 칠천군사기지공원.html">구 칠천군사기지공원</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="송진공원.html">송진</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="청덕공원.html">청덕</a>
                </td>
            </tr>
            <!-- 청엽구 -->
            <tr class="border-b border-gray-200">
                <th class="bg-[#006699] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">청엽구</th>
                <td class="text-center py-2 px-3 leading-loose">
                    <a class="text-[#0275d8] hover:underline break-keep" href="비마리유적지구.html">비마리유적지구공원</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="청엽삼각공원.html">청엽삼각</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="청엽구민공원.html">청엽구민</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="남전공원.html">남전</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="상미공원.html">상미</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="주음공원.html">주음</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="관협공원.html">관협</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="효빈교통문화공원.html">효빈교통문화</a>
                </td>
            </tr>
            <!-- 창전구 -->
            <tr class="border-b border-gray-200">
                <th class="bg-[#33AAFF] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">창전구</th>
                <td class="text-center py-2 px-3 leading-loose">
                    <a class="text-[#0275d8] hover:underline break-keep" href="전중공원.html">전중</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="마시공원.html">마시</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="광정공원.html">광정</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="보통공원.html">보통</a>
                </td>
            </tr>
            <!-- 안천구 -->
            <tr class="border-b border-gray-200">
                <th class="bg-[#AA66DD] text-white py-2 font-bold border-r border-white border-b border-white shadow-inner">안천구</th>
                <td class="text-center py-2 px-3 leading-loose">
                    <a class="text-[#0275d8] hover:underline break-keep" href="이자공원.html">이자</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="팔망성공원.html">팔망성</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="백합공원.html">백합</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="안천가변공원.html">안천가변</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="하가공원.html">하가</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="치구역공원.html">치구역</a>
                </td>
            </tr>
            <!-- 탄성군 -->
            <tr class="border-b border-gray-200">
                <th class="bg-[#BBFF64] text-gray-800 py-2 font-bold border-r border-white border-b border-white shadow-inner">탄성군</th>
                <td class="text-center py-2 px-3 leading-loose">
                    <a class="text-[#0275d8] hover:underline break-keep" href="탄성공원.html">탄성</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="다이아공원.html">다이아</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="루비공원.html">루비</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="아이스크림_공원.html">아이스크림</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="고무공원.html">고무</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="명채공원.html">명채</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="말우공원.html">말우</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="공리공원.html">공리</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="상량공원.html">상량</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="고해역철도공원.html">고해역철도</a> <span class="text-gray-300 mx-1">·</span>
                    <a class="text-[#0275d8] hover:underline break-keep" href="승남공원.html">승남</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
        `;
    }
});