(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-saf-univ-container");
        if (!container) return;

        // 37개 참여대학 목록
        const schools = [
            { name: "강원대학교", logo: "이미지/svg/강원대.svg", link: null },
            { name: "경북대학교", logo: "이미지/svg/경북대.svg", link: null },
            { name: "국립공주대학교", logo: "이미지/svg/공주대.svg", link: null },
            { name: "부산대학교", logo: "이미지/svg/부산대.svg", link: null },
            { name: "서울과학기술대학교", logo: "이미지/svg/서울과학기술대학교.svg", link: null },
            { name: "서울대학교", logo: "이미지/svg/서울대.svg", link: null },
            { name: "서울시립대학교", logo: "이미지/svg/서울시립대학교.svg", link: null },
            { name: "울산과학기술원", logo: "이미지/svg/울산과학기술원.svg", link: null },
            { name: "인천대학교", logo: "이미지/svg/인천대학교.svg", link: null },
            { name: "전남대학교", logo: "이미지/svg/전남대.svg", link: null },
            { name: "제주대학교", logo: "이미지/svg/제주대.svg", link: null },
            { name: "충북대학교", logo: "이미지/svg/충북대.svg", link: null },
            { name: "가톨릭대학교", logo: "이미지/svg/가톨릭대학교.svg", link: null },
            { name: "고려대학교", logo: "이미지/svg/고려대학교.svg", link: null },
            { name: "국민대학교", logo: "이미지/svg/국민대학교.svg", link: null },
            { name: "광운대학교", logo: "이미지/svg/광운대학교.svg", link: null },
            { name: "단국대학교", logo: "이미지/svg/단국대학교.svg", link: null },
            { name: "덕성여자대학교", logo: "이미지/svg/덕성여자대학교.svg", link: null },
            { name: "동덕여자대학교", logo: "이미지/svg/동덕여자대학교.svg", link: null },
            { name: "명지대학교", logo: "이미지/svg/명지대학교.svg", link: null },
            { name: "서강대학교", logo: "이미지/svg/서강대학교.svg", link: null },
            { name: "서울여자대학교", logo: "이미지/svg/서울여자대학교.svg", link: null },
            { name: "성균관대학교", logo: "이미지/svg/성균관대학교.svg", link: null },
            { name: "숙명여자대학교", logo: "이미지/svg/숙명여자대학교.svg", link: null },
            { name: "숭실대학교", logo: "이미지/svg/숭실대학교.svg", link: null },
            { name: "연세대학교", logo: "이미지/svg/연세대학교.svg", link: null },
            { name: "인하대학교", logo: "이미지/svg/인하대학교.svg", link: null },
            { name: "중앙대학교", logo: "이미지/svg/중앙대학교.svg", link: null },
            { name: "포항공과대학교", logo: "이미지/svg/포항공과대학교.svg", link: null },
            { name: "한국외국어대학교", logo: "이미지/svg/한국외국어대학교.svg", link: null },
            { name: "한국전통문화대학교", logo: "이미지/svg/한국전통문화대학교.svg", link: null },
            { name: "한국항공대학교", logo: "이미지/svg/한국항공대학교.svg", link: null },
            { name: "한양대학교", logo: "이미지/svg/한양대학교.svg", link: null },
            { name: "홍익대학교", logo: "이미지/svg/홍익대학교.svg", link: null },
            { name: "효빈대학교", logo: "이미지/효빈대_로고.webp", link: "효빈대학교.html" },
            { name: "덕남대학교", logo: "이미지/국립덕남대학교_UI.webp", link: "덕남대학교.html" },
            { name: "평안명대학교", logo: "이미지/평안명대학교_UI.webp", link: "평안명대학교.html" }
        ];

        // 4열 테이블 행 생성
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
                
                <!-- 상단 헤더 영역 (SAF 로고 박스) -->
                <div class="bg-white text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-5 py-1.5 flex items-center gap-3.5 bg-white shadow-sm">
                        <img src="이미지//SAF_로고.webp" class="h-7 object-contain" onerror="this.src='이미지/SAF_로고.webp'; this.onerror=function(){this.outerHTML='<div class=\\'bg-[#003865] text-white font-serif font-bold text-[16px] px-2.5 py-0.5 rounded-sm tracking-tight\\'>SAF</div>';};"/>
                        <div class="h-8 w-[1px] bg-gray-300"></div>
                        <div class="text-left leading-tight">
                            <div class="text-[10px] font-semibold text-gray-500 tracking-tight">The Study Abroad Foundation</div>
                            <div class="text-[14px] font-bold text-gray-900 tracking-tight mt-0.5">국제 교환·방문학생 프로그램</div>
                        </div>
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
                                <!-- 국가 헤더 행 (다크 그레이 #2B2B2B) -->
                                <tr>
                                    <th colspan="4" class="bg-[#2B2B2B] text-white py-1.5 font-bold text-[13px] border border-[#2B2B2B] text-center">
                                        🇰🇷 대한민국
                                    </th>
                                </tr>
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