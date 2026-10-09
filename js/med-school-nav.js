(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-med-school-container");
        if (!container) return;

        const schools = [
            { name: "가천대학교 의과대학", logo: "이미지/svg/가천대학교.svg", link: null },
            { name: "가톨릭관동대학교 의과대학", logo: "이미지/svg/가톨릭관동대학교.svg", link: null },
            { name: "가톨릭대학교 의과대학", logo: "이미지/svg/가톨릭대학교.svg", link: null },
            { name: "강원대학교 의과대학", logo: "이미지/svg/강원대.svg", link: null },
            { name: "건국대학교 의과대학", logo: "이미지/svg/건국대학교.svg", link: null },
            { name: "건양대학교 의과대학", logo: "이미지/svg/건양대학교.svg", link: null },
            { name: "경북대학교 의과대학", logo: "이미지/svg/경북대.svg", link: null },
            { name: "경상국립대학교 의과대학", logo: "이미지/svg/경상국립대학교_로고.svg", link: null },
            { name: "경희대학교 의과대학", logo: "이미지/svg/경희대학교.svg", link: null },
            { name: "계명대학교 의과대학", logo: "이미지/svg/계명대학교.svg", link: null },
            { name: "고려대학교 의과대학", logo: "이미지/svg/고려대학교.svg", link: null },
            { name: "고신대학교 의과대학", logo: "이미지/svg/고신대학교.svg", link: null },
            { name: "단국대학교 의과대학", logo: "이미지/svg/단국대학교.svg", link: null },
            { name: "대구가톨릭대학교 의과대학", logo: "이미지/svg/대구가톨릭대학교.svg", link: null },
            { name: "덕남대학교 의과대학", logo: "이미지/국립덕남대학교_UI.webp", link: "덕남대학교.html" },
            { name: "덕북대학교 의과대학", logo: "이미지/덕북대_로고.webp", link: "덕북대학교.html" },
            { name: "동국대학교 의과대학", logo: "이미지/svg/동국대학교.svg", link: null },
            { name: "동아대학교 의과대학", logo: "이미지/svg/동아대학교.svg", link: null },
            { name: "부산대학교 의과대학", logo: "이미지/svg/부산대.svg", link: null },
            { name: "삼선대학교 의과대학", logo: "이미지/삼선대학교_UI.webp", link: "삼선대학교.html" },
            { name: "서울대학교 의과대학", logo: "이미지/svg/서울대.svg", link: null },
            { name: "성균관대학교 의과대학", logo: "이미지/svg/성균관대학교.svg", link: null },
            { name: "순천향대학교 의과대학", logo: "이미지/svg/순천향대학교.svg", link: null },
            { name: "아주대학교 의과대학", logo: "이미지/svg/아주대학교.svg", link: null },
            { name: "연세대학교 의과대학", logo: "이미지/svg/연세대학교.svg", link: null },
            { name: "연세대학교 원주의과대학", logo: "이미지/svg/연세대학교.svg", link: null },
            { name: "엽월대학교 의과대학", logo: "이미지/엽월대학교_UI.webp", link: "엽월대학교.html" },
            { name: "영남대학교 의과대학", logo: "이미지/svg/영남대학교.svg", link: null },
            { name: "울산대학교 의과대학", logo: "이미지/svg/울산대학교.svg", link: null },
            { name: "원광대학교 의과대학", logo: "이미지/svg/원광대학교.svg", link: null },
            { name: "을지대학교 의과대학", logo: "이미지/svg/을지대학교.svg", link: null },
            { name: "이화여자대학교 의과대학", logo: "이미지/svg/이화여자대학교.svg", link: null },
            { name: "인제대학교 의과대학", logo: "이미지/svg/인제대학교.svg", link: null },
            { name: "인하대학교 의과대학", logo: "이미지/svg/인하대학교.svg", link: null },
            { name: "전남대학교 의과대학", logo: "이미지/svg/전남대.svg", link: null },
            { name: "전북대학교 의과대학", logo: "이미지/svg/전북대_로고.svg", link: null },
            { name: "제주대학교 의과대학", logo: "이미지/svg/제주대.svg", link: null },
            { name: "조선대학교 의과대학", logo: "이미지/svg/조선대학교.svg", link: null },
            { name: "중앙대학교 의과대학", logo: "이미지/svg/중앙대학교.svg", link: null },
            { name: "차의과학대학교 의학전문대학원", logo: "이미지/svg/차의과학대학교.svg", link: null },
            { name: "충남대학교 의과대학", logo: "이미지/svg/충남대.svg", link: null },
            { name: "충북대학교 의과대학", logo: "이미지/svg/충북대.svg", link: null },
            { name: "한림대학교 의과대학", logo: "이미지/svg/한림대학교.svg", link: null },
            { name: "한양대학교 의과대학", logo: "이미지/svg/한양대학교.svg", link: null },
            { name: "효빈대학교 의과대학", logo: "이미지/효빈대_로고.webp", link: "효빈대학교.html" }
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
                <div class="bg-white text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-4 py-1.5 flex items-center gap-3.5 bg-white shadow-sm">
                        <img src="이미지/KAMC_로고.webp" class="h-7 object-contain" onerror="this.src='이미지/KAMC_로고.webp'; this.onerror=function(){this.style.display='none';};"/>
                        <div class="h-7 w-[1px] bg-gray-300"></div>
                        <div class="text-left leading-tight">
                            <div class="text-[10px] font-semibold text-gray-500 tracking-wide uppercase">Korea Association of Medical Colleges</div>
                            <div class="text-[14px] font-bold text-[#005BAC] tracking-tight mt-0.5">한국의과대학·의학전문대학원협회 회원교</div>
                        </div>
                    </div>
                </div>
                <details class="nw-details group">
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