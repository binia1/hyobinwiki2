(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-gifted-sci-container");
        if (!container) return;

        // 32개 운영대학 전체 목록 (가나다순)
        const centers = [
            { name: "가천대학교", link: null },
            { name: "강원대학교", link: null },
            { name: "국립강릉원주대학교", link: null },
            { name: "경남대학교", link: null },
            { name: "경북대학교", link: null },
            { name: "경상국립대학교", link: null },
            { name: "국립경국대학교", link: null },
            { name: "국립공주대학교", link: null },
            { name: "국립군산대학교", link: null },
            { name: "국립목포대학교", link: null },
            { name: "국립순천대학교", link: null },
            { name: "국립창원대학교", link: null },
            { name: "대진대학교", link: null },
            { name: "덕남대학교", link: "덕남대학교.html" },
            { name: "덕북대학교", link: "덕북대학교.html" },
            { name: "덕주교육대학교", link: "덕주교육대학교.html" },
            { name: "동국대학교", link: null },
            { name: "부산대학교", link: null },
            { name: "서울교육대학교", link: null },
            { name: "서울대학교", link: null },
            { name: "아주대학교", link: null },
            { name: "연세대학교", link: null },
            { name: "울산대학교", link: null },
            { name: "인천대학교", link: null },
            { name: "전남대학교", link: null },
            { name: "전북대학교", link: null },
            { name: "제주대학교", link: null },
            { name: "천주대학교", link: "천주대학교.html" },
            { name: "청주교육대학교", link: null },
            { name: "충남대학교", link: null },
            { name: "충북대학교", link: null },
            { name: "효빈대학교", link: "효빈대학교.html" }
        ];

        // 3열 테이블 행 생성 (32개교 / 3 = 11행)
        let rowsHTML = "";
        for (let i = 0; i < centers.length; i += 3) {
            const chunk = centers.slice(i, i + 3);
            rowsHTML += `<tr>${chunk.map(c => `
                <td class="bg-white border border-gray-200 py-2.5 px-2 align-middle break-keep text-center">
                    <a class="text-[#0275d8] hover:underline cursor-pointer"${c.link ? ` onclick="goToLink('${c.link}')"` : ""}>${c.name}</a> 과학영재교육원
                </td>
            `).join("")}${chunk.length < 3 ? '<td class="bg-white border border-gray-200 py-2.5 px-2" colspan="' + (3 - chunk.length) + '"></td>' : ''}</tr>`;
        }

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (정부 태극 로고 + 타이틀) -->
                <div class="bg-white text-center py-2.5 px-3 flex justify-center items-center gap-1.5 border-b border-gray-200">
                    <img src="이미지/svg/대한민국_정부_로고.svg" class="h-4 object-contain inline-block" onerror="this.style.display='none';"/>
                    <div class="text-[13px] font-bold text-gray-900 tracking-tight leading-tight">
                        과학기술정보통신부 주관<br/>대학부설 과학영재교육원
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-gray-50 border-b border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-1/3"><col class="w-1/3"><col class="w-1/3">
                            </colgroup>
                            <tbody>
                                ${rowsHTML}
                            </tbody>
                        </table>
                    </div>
                </details>
            </div>
        `;

        container.innerHTML = templateHTML;
    });
})();