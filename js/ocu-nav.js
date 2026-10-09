(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-ocu-container");
        if (!container) return;

        // 1. 주관 대학 (11개교)
        const hostUnivs = [
            { name: "국립강릉원주대학교", link: null },
            { name: "국립공주대학교", link: null },
            { name: "국립부경대학교", link: null },
            { name: "제주대학교", link: null },
            { name: "충북대학교", link: null },
            { name: "동덕여자대학교", link: null },
            { name: "부산외국어대학교", link: null },
            { name: "순천향대학교", link: null },
            { name: "용인대학교", link: null },
            { name: "인제대학교", link: null },
            { name: "효빈대학교", link: "효빈대학교.html" }
        ];

        // 2. 회원 대학 (79개교)
        const memberUnivs = [
            { name: "경상국립대학교", link: null },
            { name: "국립군산대학교", link: null },
            { name: "국립금오공과대학교", link: null },
            { name: "국립목포대학교", link: null },
            { name: "국립목포해양대학교", link: null },
            { name: "국립순천대학교", link: null },
            { name: "국립경국대학교", link: null },
            { name: "국립창원대학교", link: null },
            { name: "국립한국교통대학교", link: null },
            { name: "국립한국해양대학교", link: null },
            { name: "국립한밭대학교", link: null },
            { name: "국립서해대학교", link: "국립서해대학교.html" },
            { name: "부산교육대학교", link: null },
            { name: "부산대학교", link: null },
            { name: "서울시립대학교", link: null },
            { name: "육군사관학교", link: null },
            { name: "인천대학교", link: null },
            { name: "진주교육대학교", link: null },
            { name: "한경국립대학교", link: null },
            { name: "한국전통문화대학교", link: null },
            { name: "가야대학교", link: null },
            { name: "경남대학교", link: null },
            { name: "경동대학교", link: null },
            { name: "경성대학교", link: null },
            { name: "경희대학교", link: null },
            { name: "고신대학교", link: null },
            { name: "광운대학교", link: null },
            { name: "국민대학교", link: null },
            { name: "극동대학교", link: null },
            { name: "김천대학교", link: null },
            { name: "나사렛대학교", link: null },
            { name: "낙주대학교", link: "낙주대학교.html" },
            { name: "남부대학교", link: null },
            { name: "단국대학교", link: null },
            { name: "대진대학교", link: null },
            { name: "동명대학교", link: null },
            { name: "동서대학교", link: null },
            { name: "동신대학교", link: null },
            { name: "동아대학교", link: null },
            { name: "동양대학교", link: null },
            { name: "동의대학교", link: null },
            { name: "백석대학교", link: null },
            { name: "부산가톨릭대학교", link: null },
            { name: "부산장신대학교", link: null },
            { name: "서강대학교", link: null },
            { name: "서경대학교", link: null },
            { name: "서울신학대학교", link: null },
            { name: "서울장신대학교", link: null },
            { name: "서울한영대학교", link: null },
            { name: "서원대학교", link: null },
            { name: "선문대학교", link: null },
            { name: "성결대학교", link: null },
            { name: "성공회대학교", link: null },
            { name: "성균관대학교", link: null },
            { name: "성신여자대학교", link: null },
            { name: "세명대학교", link: null },
            { name: "숭실대학교", link: null },
            { name: "신라대학교", link: null },
            { name: "신한대학교", link: null },
            { name: "아신대학교", link: null },
            { name: "안양대학교", link: null },
            { name: "엽월대학교", link: "엽월대학교.html" },
            { name: "영산대학교", link: null },
            { name: "울산대학교", link: null },
            { name: "유원대학교", link: null },
            { name: "인천가톨릭대학교", link: null },
            { name: "제주국제대학교", link: null },
            { name: "중앙대학교", link: null },
            { name: "중원대학교", link: null },
            { name: "창신대학교", link: null },
            { name: "청운대학교", link: null },
            { name: "추계예술대학교", link: null },
            { name: "한국항공대학교", link: null },
            { name: "한라대학교", link: null },
            { name: "한신대학교", link: null },
            { name: "한서대학교", link: null },
            { name: "협성대학교", link: null },
            { name: "호서대학교", link: null },
            { name: "홍익대학교", link: null }
        ];

        // 5열 행 생성 헬퍼
        const renderSection = (list, title, countText) => {
            const rows = [];
            for (let i = 0; i < list.length; i += 5) {
                rows.push(list.slice(i, i + 5));
            }
            const totalRows = rows.length;

            return rows.map((chunk, idx) => {
                const isFirst = idx === 0;
                const thHtml = isFirst ? `
                    <th rowspan="${totalRows}" class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep leading-tight">
                        ${title}<br/><span class="text-[11px] font-normal text-gray-600">(${countText})</span>
                    </th>
                ` : "";

                const tdsHtml = chunk.map(u => `
                    <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep text-center">
                        <a class="text-[#0275d8] hover:underline cursor-pointer"${u.link ? ` onclick="goToLink('${u.link}')"` : ""}>${u.name}</a>
                    </td>
                `).join("");

                const emptyTds = chunk.length < 5 ? Array(5 - chunk.length).fill('<td class="bg-white border border-gray-200 py-2.5 px-1"></td>').join("") : "";

                return `<tr>${thHtml}${tdsHtml}${emptyTds}</tr>`;
            }).join("");
        };

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (OCU 컨소시엄 로고 박스) -->
                <div class="bg-white text-center py-3.5 px-3 flex justify-center items-center">
                    <div class="flex flex-col items-center">
                        <img src="이미지/svg/OCU_로고.svg" class="h-8 object-contain" onerror="this.src='이미지/svg/OCU_로고.svg'; this.onerror=function(){this.style.display='none';};"/>
                        <span class="text-[13px] font-bold text-[#0066b3] tracking-tight mt-1">OCU 컨소시엄</span>
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
                                <col class="w-[12%]">
                                <col class="w-[17.6%]"><col class="w-[17.6%]"><col class="w-[17.6%]"><col class="w-[17.6%]"><col class="w-[17.6%]">
                            </colgroup>
                            <tbody>
                                <!-- 1. 주관 대학 (11개교) -->
                                ${renderSection(hostUnivs, "주관 대학", "11개교")}
                                
                                <!-- 2. 회원 대학 (79개교) -->
                                ${renderSection(memberUnivs, "회원 대학", "79개교")}
                                
                                <!-- 3. 운영 대학 (1개교) -->
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 p-2 font-bold text-center align-middle break-keep leading-tight">
                                        운영 대학<br/><span class="text-[11px] font-normal text-gray-600">(1개교)</span>
                                    </th>
                                    <td colspan="5" class="bg-white border border-gray-200 py-2.5 px-2 text-center align-middle break-keep">
                                        <a class="text-[#0275d8] hover:underline cursor-pointer">한국열린사이버대학교</a>
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