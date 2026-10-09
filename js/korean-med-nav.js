(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-korean-med-container");
        if (!container) return;

        const schools = [
            { name: "가천대학교 한의과대학", logo: "이미지/svg/가천대학교.svg", link: null },
            { name: "경희대학교 한의과대학", logo: "이미지/svg/경희대학교.svg", link: null },
            { name: "대구한의대학교 한의과대학", logo: "이미지/svg/대구한의대학교.svg", link: null },
            { name: "대전대학교 한의과대학", logo: "이미지/svg/대전대학교.svg", link: null },
            { name: "동국대학교 한의과대학", logo: "이미지/svg/동국대학교.svg", link: null },
            { name: "동신대학교 한의과대학", logo: "이미지/svg/동신대학교.svg", link: null },
            { name: "동의대학교 한의과대학", logo: "이미지/svg/동의대학교.svg", link: null },
            { name: "부산대학교 한의학전문대학원", logo: "이미지/svg/부산대.svg", link: null },
            { name: "상지대학교 한의과대학", logo: "이미지/svg/상지대학교.svg", link: null },
            { name: "세명대학교 한의과대학", logo: "이미지/svg/세명대학교.svg", link: null },
            { name: "우석대학교 한의과대학", logo: "이미지/svg/우석대학교.svg", link: null },
            { name: "원광대학교 한의과대학", logo: "이미지/svg/원광대학교.svg", link: null },
            { name: "효빈대학교 한의과대학", logo: "이미지/효빈대_로고.webp", link: "효빈대학교.html" }
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
                        <img src="이미지/ACKM_로고.webp" class="h-7 object-contain" onerror="this.src='이미지/ACKM_로고.webp'; this.onerror=function(){this.style.display='none';};"/>
                        <div class="h-7 w-[1px] bg-gray-300"></div>
                        <div class="text-left leading-tight">
                            <div class="text-[10px] font-semibold text-gray-500 tracking-wide uppercase">Association of Korean Medicine Colleges</div>
                            <div class="text-[14px] font-bold text-[#005BAC] tracking-tight mt-0.5">한국한의과대학·한의학전문대학원협회 회원교</div>
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