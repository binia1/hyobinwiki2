(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-kabea-container");
        if (!container) return;

        const schools = [
            { name: "강원대학교", logo: "이미지/svg/강원대.svg", link: null },
            { name: "건국대학교", logo: "이미지/svg/건국대학교.svg", link: null },
            { name: "광운대학교", logo: "이미지/svg/광운대학교.svg", link: null },
            { name: "덕북대학교", logo: "이미지/덕북대_로고.webp", link: "덕북대학교.html" },
            { name: "명지대학교", logo: "이미지/svg/명지대학교.svg", link: null },
            { name: "부산대학교", logo: "이미지/svg/부산대.svg", link: null },
            { name: "서울시립대학교", logo: "이미지/svg/서울시립대학교.svg", link: null },
            { name: "연세대학교", logo: "이미지/svg/연세대학교.svg", link: null },
            { name: "엽월대학교", logo: "이미지/엽월대학교_UI.webp", link: "엽월대학교.html" },
            { name: "영남대학교", logo: "이미지/svg/영남대학교.svg", link: null },
            { name: "원광대학교", logo: "이미지/svg/원광대학교.svg", link: null },
            { name: "이화여자대학교", logo: "이미지/svg/이화여자대학교.svg", link: null },
            { name: "전북대학교", logo: "이미지/svg/전북대_로고.svg", link: null },
            { name: "충남대학교", logo: "이미지/svg/충남대.svg", link: null },
            { name: "충북대학교", logo: "이미지/svg/충북대.svg", link: null },
            { name: "한국외국어대학교", logo: "이미지/svg/한국외국어대학교.svg", link: null },
            { name: "한양대학교", logo: "이미지/svg/한양대학교.svg", link: null },
            { name: "홍익대학교", logo: "이미지/svg/홍익대학교.svg", link: null },
            { name: "효빈대학교", logo: "이미지/효빈대_로고.webp", link: "효빈대학교.html" }
        ];

        let rowsHTML = "";
        for (let i = 0; i < schools.length; i += 4) {
            const chunk = schools.slice(i, i + 4);
            rowsHTML += `<tr>${chunk.map(s => `
                <td class="bg-white border border-gray-200 py-2.5 px-1 align-middle break-keep text-center">
                    <img src="${s.logo}" class="inline-block w-4 h-4 mr-1.5 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                    <a class="text-[#0275d8] hover:underline cursor-pointer"${s.link ? ` onclick="goToLink('${s.link}')"` : ""}>${s.name}</a>
                </td>
            `).join("")}${chunk.length < 4 ? '<td class="bg-white border border-gray-200 py-2.5 px-1" colspan="' + (4 - chunk.length) + '"></td>' : ''}</tr>`;
        }

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (KABEA 로고) -->
                <div class="bg-white text-center py-3.5 px-3 flex justify-center items-center">
                    <img src="이미지/svg/KABEA_로고.svg" class="h-8 object-contain"  this.onerror=function(){this.style.display='none';};"/>
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