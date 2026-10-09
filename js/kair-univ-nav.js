(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-kair-univ-container");
        if (!container) return;

        // 1. 일반대학 (70개교)
        const univs = [
            { name: "가야대학교", logo: "이미지/svg/가야대학교.svg", link: null },
            { name: "가톨릭관동대학교", logo: "이미지/svg/가톨릭관동대학교.svg", link: null },
            { name: "강서대학교", logo: "이미지/svg/강서대학교.svg", link: null },
            { name: "경기대학교", logo: "이미지/svg/경기대학교.svg", link: null },
            { name: "경일대학교", logo: "이미지/svg/경일대학교.svg", link: null },
            { name: "고려대학교", logo: "이미지/svg/고려대학교.svg", link: null },
            { name: "광운대학교", logo: "이미지/svg/광운대학교.svg", link: null },
            { name: "광주교육대학교", logo: "이미지/svg/광주교육대학교.svg", link: null },
            { name: "광주대학교", logo: "이미지/svg/광주대학교.svg", link: null },
            { name: "국민대학교", logo: "이미지/svg/국민대학교.svg", link: null },
            { name: "국립공주대학교", logo: "이미지/svg/공주대.svg", link: null },
            { name: "국립금오공과대학교", logo: "이미지/svg/국립금오공과대학교.svg", link: null },
            { name: "국립서해대학교", logo: "이미지/svg/국립서해대학교.svg", link: "국립서해대학교.html" },
            { name: "김천대학교", logo: "이미지/svg/김천대학교.svg", link: null },
            { name: "나사렛대학교", logo: "이미지/svg/나사렛대학교.svg", link: null },
            { name: "남부대학교", logo: "이미지/svg/남부대학교.svg", link: null },
            { name: "단국대학교", logo: "이미지/svg/단국대학교.svg", link: null },
            { name: "대구가톨릭대학교", logo: "이미지/svg/대구가톨릭대학교.svg", link: null },
            { name: "대구대학교", logo: "이미지/svg/대구대학교.svg", link: null },
            { name: "대구한의대학교", logo: "이미지/svg/대구한의대학교.svg", link: null },
            { name: "대전대학교", logo: "이미지/svg/대전대학교.svg", link: null },
            { name: "대진대학교", logo: "이미지/svg/대진대학교.svg", link: null },
            { name: "동국대학교 WISE캠퍼스", logo: "이미지/svg/동국대학교.svg", link: null },
            { name: "동국대학교 서울캠퍼스", logo: "이미지/svg/동국대학교.svg", link: null },
            { name: "동서대학교", logo: "이미지/svg/동서대학교.svg", link: null },
            { name: "동신대학교", logo: "이미지/svg/동신대학교.svg", link: null },
            { name: "동아대학교", logo: "이미지/svg/동아대학교.svg", link: null },
            { name: "동양대학교", logo: "이미지/svg/동양대학교.svg", link: null },
            { name: "동의대학교", logo: "이미지/svg/동의대학교.svg", link: null },
            { name: "명지대학교", logo: "이미지/svg/명지대학교.svg", link: null },
            { name: "백석대학교", logo: "이미지/svg/백석대학교.svg", link: null },
            { name: "부산외국어대학교", logo: "이미지/svg/부산외국어대학교.svg", link: null },
            { name: "서울신학대학교", logo: "이미지/svg/서울신학대학교.svg", link: null },
            { name: "서원대학교", logo: "이미지/svg/서원대학교.svg", link: null },
            { name: "세종대학교", logo: "이미지/svg/세종대학교.svg", link: null },
            { name: "송원대학교", logo: "이미지/svg/송원대학교.svg", link: null },
            { name: "수원대학교", logo: "이미지/svg/수원대학교.svg", link: null },
            { name: "숙명여자대학교", logo: "이미지/svg/숙명여자대학교.svg", link: null },
            { name: "숭실대학교", logo: "이미지/svg/숭실대학교.svg", link: null },
            { name: "신라대학교", logo: "이미지/svg/신라대학교.svg", link: null },
            { name: "아주대학교", logo: "이미지/svg/아주대학교.svg", link: null },
            { name: "영남대학교", logo: "이미지/svg/영남대학교.svg", link: null },
            { name: "옥선대학교", logo: "이미지/옥선대학교_UI.webp", link: "옥선대학교.html" },
            { name: "용인대학교", logo: "이미지/svg/용인대학교.svg", link: null },
            { name: "우석대학교", logo: "이미지/svg/우석대학교.svg", link: null },
            { name: "울산대학교", logo: "이미지/svg/울산대학교.svg", link: null },
            { name: "원광대학교", logo: "이미지/svg/원광대학교.svg", link: null },
            { name: "유원대학교", logo: "이미지/svg/유원대학교.svg", link: null },
            { name: "을지대학교", logo: "이미지/svg/을지대학교.svg", link: null },
            { name: "인제대학교", logo: "이미지/svg/인제대학교.svg", link: null },
            { name: "인하대학교", logo: "이미지/svg/인하대학교.svg", link: null },
            { name: "중부대학교", logo: "이미지/svg/중부대학교.svg", link: null },
            { name: "중앙대학교", logo: "이미지/svg/중앙대학교.svg", link: null },
            { name: "차의과학대학교", logo: "이미지/svg/차의과학대학교.svg", link: null },
            { name: "청운대학교", logo: "이미지/svg/청운대학교.svg", link: null },
            { name: "청주대학교", logo: "이미지/svg/청주대학교.svg", link: null },
            { name: "추계예술대학교", logo: "이미지/svg/추계예술대학교.svg", link: null },
            { name: "평안명대학교", logo: "이미지/평안명대학교_UI.webp", link: "평안명대학교.html" },
            { name: "포항공과대학교", logo: "이미지/svg/포항공과대학교.svg", link: null },
            { name: "한경국립대학교", logo: "이미지/svg/한경국립대학교.svg", link: null },
            { name: "한국공학대학교", logo: "이미지/svg/한국공학대학교.svg", link: null },
            { name: "한남대학교", logo: "이미지/svg/한남대학교.svg", link: null },
            { name: "한동대학교", logo: "이미지/svg/한동대학교.svg", link: null },
            { name: "한라대학교", logo: "이미지/svg/한라대학교.svg", link: null },
            { name: "한림대학교", logo: "이미지/svg/한림대학교.svg", link: null },
            { name: "한신대학교", logo: "이미지/svg/한신대학교.svg", link: null },
            { name: "한양대학교", logo: "이미지/svg/한양대학교.svg", link: null },
            { name: "협성대학교", logo: "이미지/svg/협성대학교.svg", link: null },
            { name: "호남대학교", logo: "이미지/svg/호남대학교.svg", link: null },
            { name: "호원대학교", logo: "이미지/svg/호원대학교.svg", link: null }
        ];

        // 2. 전문대학 (17개교)
        const colleges = [
            { name: "경남정보대학교", logo: "이미지/svg/경남정보대학교.svg", link: null },
            { name: "경인여자대학교", logo: "이미지/svg/경인여자대학교.svg", link: null },
            { name: "계원예술대학교", logo: "이미지/svg/계원예술대학교.svg", link: null },
            { name: "김해대학교", logo: "이미지/svg/김해대학교.svg", link: null },
            { name: "대구보건대학교", logo: "이미지/svg/대구보건대학교.svg", link: null },
            { name: "덕북도립대학", logo: "이미지/svg/덕북도립대학.svg", link: "덕북도립대학.html" },
            { name: "마산대학교", logo: "이미지/svg/마산대학교.svg", link: null },
            { name: "삼육보건대학교", logo: "이미지/svg/삼육보건대학교.svg", link: null },
            { name: "선린대학교", logo: "이미지/svg/선린대학교.svg", link: null },
            { name: "용인예술과학대학교", logo: "이미지/svg/용인예술과학대학교.svg", link: null },
            { name: "전남과학대학교", logo: "이미지/svg/전남과학대학교.svg", link: null },
            { name: "조선이공대학교", logo: "이미지/svg/조선이공대학교.svg", link: null },
            { name: "춘해보건대학교", logo: "이미지/svg/춘해보건대학교.svg", link: null },
            { name: "한국관광대학교", logo: "이미지/svg/한국관광대학교.svg", link: null },
            { name: "한양여자대학교", logo: "이미지/svg/한양여자대학교.svg", link: null },
            { name: "한영대학교", logo: "이미지/svg/한영대학교.svg", link: null },
            { name: "효빈보건대학교", logo: "이미지/svg/효빈보건대학교.svg", link: "효빈보건대학교.html" }
        ];

        // 3. 대학원대학 (1개교)
        const gradSchools = [
            { name: "과학기술연합대학원대학교", logo: "이미지/svg/과학기술연합대학원대학교.svg", link: null }
        ];

        // 인라인 아이템 렌더링 헬퍼
        const renderInlineList = (list) => list.map(s => `
            <span class="inline-flex items-center mx-1">
                <img src="${s.logo}" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                <a class="text-[#0275d8] hover:underline cursor-pointer"${s.link ? ` onclick="goToLink('${s.link}')"` : ""}>${s.name}</a>
            </span>
        `).join('<span class="text-gray-400 font-bold mx-1">·</span>');

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (KAIR 로고 박스) -->
                <div class="bg-white text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-5 py-1.5 flex items-center gap-3 bg-white shadow-sm">
                        <img src="이미지/KAIR_로고.webp" class="h-7 object-contain" onerror="this.src='이미지/KAIR_로고.webp'; this.onerror=function(){this.style.display='none';};"/>
                        <div class="h-7 w-[1px] bg-gray-300"></div>
                        <div class="text-left leading-tight">
                            <div class="text-[10px] font-semibold text-gray-500 tracking-tight">Korean Association for Institutional Research</div>
                            <div class="text-[14px] font-bold text-gray-900 tracking-tight mt-0.5">한국대학IR협의회</div>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-gray-50 border-y border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-left table-fixed">
                            <colgroup>
                                <col class="w-[8%]">
                                <col class="w-[10%]">
                                <col class="w-[82%]">
                            </colgroup>
                            <tbody>
                                <!-- 1. 대학 -->
                                <tr>
                                    <th rowspan="3" class="bg-[#168c99] border border-gray-200 text-white p-2 font-bold text-center align-middle break-keep text-[13px] leading-tight">
                                        회원<br/>대학
                                    </th>
                                    <th class="bg-[#168c99] border border-gray-200 text-white p-2 font-bold text-center align-middle break-keep">
                                        대학
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-left">
                                        ${renderInlineList(univs)}
                                    </td>
                                </tr>
                                
                                <!-- 2. 전문대학 -->
                                <tr>
                                    <th class="bg-[#168c99] border border-gray-200 text-white p-2 font-bold text-center align-middle break-keep">
                                        전문대학
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-left">
                                        ${renderInlineList(colleges)}
                                    </td>
                                </tr>
                                
                                <!-- 3. 대학원대학 -->
                                <tr>
                                    <th class="bg-[#168c99] border border-gray-200 text-white p-2 font-bold text-center align-middle break-keep text-[11px] leading-tight">
                                        대학원대학
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-left">
                                        ${renderInlineList(gradSchools)}
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