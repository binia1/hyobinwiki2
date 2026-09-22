// 파일 경로: assets/틀_한국철도공사의_여객열차_등급.js

(function() {
    const templateHTML = `
    <div class="wiki-table-wrap my-4 max-w-2xl mx-auto overflow-x-auto border border-gray-300 bg-white">
        <table class="w-full border-collapse text-sm text-center font-['Noto_Sans_KR']">
            <tbody>
                <tr>
                    <th colspan="2" class="border-b border-gray-300 p-2 bg-white text-black font-bold">
                        <a href="한국철도공사.html" class="flex items-center justify-center gap-1 hover:underline text-[#005BAC]">
                            <span class="font-black italic text-lg tracking-tighter">KORAIL</span> 
                            <span>한국철도공사의 여객열차 등급</span>
                        </a>
                    </th>
                </tr>
                <tr>
                    <td colspan="2" class="border-b border-gray-300 p-1 bg-white text-xs text-gray-700 cursor-pointer hover:bg-gray-100">
                        [ 펼치기 · 접기 ]
                    </td>
                </tr>
                <tr>
                    <th class="border-r border-b border-gray-300 p-2 bg-[#005BAC] text-white font-bold w-1/4">고속</th>
                    <td class="border-b border-gray-300 p-2 text-left bg-white">
                        <a href="KTX.html" class="text-[#005BAC] hover:underline font-medium">KTX</a>, 
                        <a href="KTX-산천.html" class="text-[#005BAC] hover:underline font-medium">KTX-산천</a>, 
                        <a href="KTX-청룡.html" class="text-[#005BAC] hover:underline font-medium">KTX-청룡</a>
                    </td>
                </tr>
                <tr>
                    <th class="border-r border-b border-gray-300 p-2 bg-[#005BAC] text-white font-bold">준고속</th>
                    <td class="border-b border-gray-300 p-2 text-left bg-white">
                        <a href="KTX-이음.html" class="text-black hover:underline font-medium">KTX-이음</a>
                    </td>
                </tr>
                <tr>
                    <th class="border-r border-b border-gray-300 p-2 bg-[#005BAC] text-white font-bold">특급</th>
                    <td class="border-b border-gray-300 p-2 text-left bg-white">
                        <a href="ITX-청춘.html" class="text-green-600 hover:underline font-medium">ITX-청춘</a>
                    </td>
                </tr>
                <tr>
                    <th class="border-r border-b border-gray-300 p-2 bg-[#005BAC] text-white font-bold" rowspan="3">급행</th>
                    <td class="border-b border-gray-300 p-2 text-left bg-white">
                        <a href="새마을호.html" class="text-[#005BAC] hover:underline font-medium">새마을호</a>, 
                        <a href="ITX-새마을.html" class="text-red-600 hover:underline font-bold">ITX-새마을</a>, 
                        <a href="ITX-마음.html" class="text-red-600 hover:underline font-bold">ITX-마음</a>
                    </td>
                </tr>
                <tr>
                    <td class="border-b border-gray-300 p-2 text-left bg-white">
                        <a href="무궁화호.html" class="text-red-600 hover:underline font-bold">무궁화호</a>, 
                        <a href="누리로.html" class="text-[#005BAC] hover:underline font-medium">누리로</a>
                    </td>
                </tr>
                <tr>
                    <td class="border-b border-gray-300 p-2 text-left bg-white">
                        <a href="급행_광역전철.html" class="text-red-600 hover:underline font-bold">급행 광역전철</a>
                    </td>
                </tr>
                <tr>
                    <th class="border-r border-b border-gray-300 p-2 bg-[#005BAC] text-white font-bold">보통</th>
                    <td class="border-b border-gray-300 p-2 text-left bg-white">
                        <a href="일반_광역전철.html" class="text-black hover:underline font-medium">일반 광역전철</a>
                    </td>
                </tr>
                <tr>
                    <th class="border-r border-b border-gray-300 p-2 bg-[#005BAC] text-white font-bold">관광</th>
                    <td class="border-b border-gray-300 p-2 text-left bg-white">
                        <a href="관광열차.html" class="text-[#005BAC] hover:underline font-medium">틀 참고</a>
                    </td>
                </tr>
                <tr>
                    <th class="border-r border-gray-300 p-2 bg-gray-500 text-white font-bold">폐지</th>
                    <td class="p-2 text-left bg-white">
                        <a href="관광호.html" class="text-gray-500 hover:underline">관광호</a>, 
                        <a href="비둘기호.html" class="text-gray-500 hover:underline">비둘기호</a>, 
                        <a href="통근열차.html" class="text-gray-500 hover:underline">통근열차</a>, 
                        <a href="통일호.html" class="text-gray-500 hover:underline">통일호</a>, 
                        <a href="SRT.html" class="text-gray-500 hover:underline">SRT</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `;

    const scriptTag = document.currentScript;
    if (scriptTag) {
        // 스크립트 태그가 위치한 곳 바로 앞에 HTML 템플릿을 삽입합니다.
        scriptTag.insertAdjacentHTML('beforebegin', templateHTML);
    }
})();