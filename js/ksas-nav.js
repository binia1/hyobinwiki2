(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-ksas-container");
        if (!container) return;

        // 24개 대학 목록 (가나다순)
        const universities = [
            { name: "건국대학교", logo: "이미지/svg/건국대학교.svg", link: null },
            { name: "경북대학교", logo: "이미지/svg/경북대.svg", link: null },
            { name: "경상국립대학교", logo: "이미지/svg/경상국립대학교_로고.svg", link: null },
            { name: "경희대학교", logo: "이미지/svg/경희대학교.svg", link: null },
            { name: "공군사관학교", logo: "이미지/svg/공군사관학교.svg", link: null },
            { name: "광주과학기술원", logo: "이미지/svg/광주과학기술원.svg", link: null },
            { name: "국립순천대학교", logo: "이미지/svg/국립순천대학교.svg", link: null },
            { name: "덕주대학교", logo: "이미지/svg/덕주대학교_UI.svg", link: null },
            { name: "부산대학교", logo: "이미지/svg/부산대.svg", link: null },
            { name: "서울대학교", logo: "이미지/svg/서울대.svg", link: null },
            { name: "세종대학교", logo: "이미지/svg/세종대학교.svg", link: null },
            { name: "엽월대학교", logo: "이미지/엽월대학교_UI.webp", link: "엽월대학교.html" },
            { name: "연세대학교", logo: "이미지/svg/연세대학교.svg", link: null },
            { name: "울산대학교", logo: "이미지/svg/울산대학교.svg", link: null },
            { name: "인하대학교", logo: "이미지/svg/인하대학교.svg", link: null },
            { name: "전북대학교", logo: "이미지/svg/전북대_로고.svg", link: null },
            { name: "조선대학교", logo: "이미지/svg/조선대학교.svg", link: null },
            { name: "충남대학교", logo: "이미지/svg/충남대.svg", link: null },
            { name: "포항공과대학교", logo: "이미지/svg/포항공과대학교.svg", link: null },
            { name: "한국과학기술원", logo: "이미지/svg/한국과학기술원.svg", link: null },
            { name: "한국항공대학교", logo: "이미지/svg/한국항공대학교.svg", link: null },
            { name: "한양대학교", logo: "이미지/svg/한양대학교.svg", link: null },
            { name: "한서대학교", logo: "이미지/svg/한서대학교.svg", link: null },
            { name: "효빈대학교", logo: "이미지/효빈대_로고.webp", link: "효빈대학교.html" }
        ];

        // 8개 기관 목록
        const institutes = [
            { name: "국방과학연구소", logo: "이미지/svg/국방과학연구소.svg" },
            { name: "대한항공", logo: "이미지/svg/대한항공.svg" },
            { name: "한화에어로스페이스", logo: "이미지/svg/한화에어로스페이스.svg" },
            { name: "한국기계연구원", logo: "이미지/svg/한국기계연구원.svg" },
            { name: "한국전자통신연구원", logo: "이미지/svg/한국전자통신연구원.svg" },
            { name: "한국항공우주산업", logo: "이미지/svg/한국항공우주산업.svg" },
            { name: "한국항공우주연구원", logo: "이미지/svg/한국항공우주연구원.svg" },
            { name: "항공안전기술원", logo: "이미지/svg/항공안전기술원.svg" }
        ];

        // 4열 테이블 행 생성 헬퍼
        const renderRows = (list, isUniv = true) => {
            let html = "";
            for (let i = 0; i < list.length; i += 4) {
                const chunk = list.slice(i, i + 4);
                html += `<tr>${chunk.map(item => `
                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep text-center">
                        <img src="${item.logo}" class="inline-block w-4 h-4 mr-1.5 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                        <a class="text-[#0275d8] hover:underline cursor-pointer"${isUniv && item.link ? ` onclick="goToLink('${item.link}')"` : ""}>${item.name}</a>
                    </td>
                `).join("")}${chunk.length < 4 ? '<td class="bg-white border border-gray-200 py-2.5 px-1" colspan="' + (4 - chunk.length) + '"></td>' : ''}</tr>`;
            }
            return html;
        };

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (KSAS 로고 박스) -->
                <div class="bg-white text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-4 py-1.5 flex items-center gap-3.5 bg-white shadow-sm">
                        <img src="이미지/svg/한국항공우주학회_로고.svg" class="h-7 object-contain" onerror="this.src='이미지/svg/한국항공우주학회_로고.svg'; this.onerror=function(){this.style.display='none';};"/>
                        <div class="h-7 w-[1px] bg-gray-300"></div>
                        <div class="text-[15px] font-bold text-gray-900 tracking-tight">한국항공우주학회 분회</div>
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
                                <col class="w-1/4"><col class="w-1/4"><col class="w-1/4"><col class="w-1/4">
                            </colgroup>
                            <tbody>
                                <!-- 1. 대학 섹션 -->
                                <tr>
                                    <th colspan="4" class="bg-[#2B2B2B] border border-[#2B2B2B] text-white py-1.5 px-2 font-bold text-center">
                                        대학
                                    </th>
                                </tr>
                                ${renderRows(universities, true)}
                                
                                <!-- 2. 기관 섹션 -->
                                <tr>
                                    <th colspan="4" class="bg-[#2B2B2B] border border-[#2B2B2B] text-white py-1.5 px-2 font-bold text-center">
                                        기관
                                    </th>
                                </tr>
                                ${renderRows(institutes, false)}
                            </tbody>
                        </table>
                    </div>
                </details>
            </div>
        `;

        container.innerHTML = templateHTML;
    });
})();