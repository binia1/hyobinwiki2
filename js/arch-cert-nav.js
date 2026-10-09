(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-arch-cert-container");
        if (!container) return;

        // 국내 78개 인증 프로그램 목록
        const domesticPrograms = [
            { univ: "가천대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2024-2029" },
            { univ: "가톨릭관동대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2014-2028" },
            { univ: "강원대학교(춘천)", dept: "문화예술공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2008-2030" },
            { univ: "건국대학교", dept: "", major: "건축전문대학원", degree: "#대학원석사", link: null, url: "#", period: "2009-2024" },
            { univ: "경기대학교", dept: "창의공과대학", major: "건축학전공", degree: "", link: null, url: "#", period: "2009-2025" },
            { univ: "경남대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2020-2023" },
            { univ: "경북대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2009-2024" },
            { univ: "경상국립대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2011-2026" },
            { univ: "경성대학교", dept: "공과대학 건축디자인학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2021-2026" },
            { univ: "경일대학교", dept: "SMART인프라대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2021-2025" },
            { univ: "경희대학교", dept: "공과대학", major: "건축학전공", degree: "", link: null, url: "#", period: "2013-2028" },
            { univ: "계명대학교", dept: "공과대학 건설토목공학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2018-2022" },
            { univ: "고려대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2012-2022" },
            { univ: "광운대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2014-2027" },
            { univ: "국립공주대학교", dept: "천안공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2014-2024" },
            { univ: "국민대학교", dept: "건축대학 건축학부", major: "건축설계전공", degree: "", link: null, url: "#", period: "2010-2026" },
            { univ: "국립금오공과대학교", dept: "공학계열 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2017-2025" },
            { univ: "남서울대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2017-2028" },
            { univ: "단국대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2010-2023" },
            { univ: "대구가톨릭대학교", dept: "공과대학", major: "건축학전공", degree: "", link: null, url: "#", period: "2014-2025" },
            { univ: "덕남대학교", dept: "디자인환경대학", major: "건축학과", degree: "", link: "덕남대학교.html", url: "#", period: "2024-2029" },
            { univ: "덕북대학교", dept: "창의공과대학", major: "건축학과", degree: "", link: "덕북대학교.html", url: "#", period: "2023-2028" },
            { univ: "동국대학교", dept: "일반대학원", major: "건축공학과(4+2)", degree: "#대학원석사", link: null, url: "#", period: "2017-2026" },
            { univ: "동명대학교", dept: "건축•디자인대학 건축학부", major: "건축학과(5년)", degree: "", link: null, url: "#", period: "2018-2022" },
            { univ: "동서대학교", dept: "건축토목계열", major: "건축학과", degree: "", link: null, url: "#", period: "2012-2023" },
            { univ: "동아대학교", dept: "디자인환경대학", major: "건축학과", degree: "", link: null, url: "#", period: "2009-2025" },
            { univ: "동의대학교", dept: "공과대학 건설공학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2013-2024" },
            { univ: "명지대학교", dept: "건축대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2007-2022" },
            { univ: "명지대학교", dept: "건축대학 건축학부", major: "전통건축전공", degree: "", link: null, url: "#", period: "2017-2022" },
            { univ: "목원대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2020-2025" },
            { univ: "국립목포대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2011-2026" },
            { univ: "국립부경대학교", dept: "조형학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2008-2023" },
            { univ: "부산대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2011-2028" },
            { univ: "배재대학교", dept: "문화예술대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2017-2025" },
            { univ: "삼육대학교", dept: "문화예술대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2017-2024" },
            { univ: "서울과학기술대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2008-2023" },
            { univ: "서울대학교", dept: "공과대학 건축학과", major: "건축학전공", degree: "", link: null, url: "#", period: "2007-2022" },
            { univ: "서울시립대학교", dept: "도시과학대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2007-2022" },
            { univ: "선문대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2012-2023" },
            { univ: "성균관대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2009-2023" },
            { univ: "세종대학교", dept: "공과대학 건축공학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2011-2026" },
            { univ: "국립순천대학교", dept: "공과대학", major: "건축학부", degree: "", link: null, url: "#", period: "2019-2023" },
            { univ: "순천향대학교", dept: "SCH미디어랩스", major: "건축학과", degree: "", link: null, url: "#", period: "2022-2027" },
            { univ: "숭실대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2012-2027" },
            { univ: "신라대학교", dept: "공과대학 건축학부", major: "건축학전공(5년제)", degree: "", link: null, url: "#", period: "2022-2025" },
            { univ: "아주대학교", dept: "공과대학 건축학과", major: "건축학전공", degree: "", link: null, url: "#", period: "2011-2026" },
            { univ: "연세대학교", dept: "공과대학 건축공학과", major: "건축학전공", degree: "", link: null, url: "#", period: "2009-2025" },
            { univ: "영남대학교", dept: "건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2008-2026" },
            { univ: "엽월대학교", dept: "문화예술공과대학 건축학부", major: "건축학전공", degree: "", link: "엽월대학교.html", url: "#", period: "2020-2025" },
            { univ: "울산대학교", dept: "디자인·건축융합대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2008-2024" },
            { univ: "원광대학교", dept: "창의공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2016-2024" },
            { univ: "이화여자대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2011-2026" },
            { univ: "인제대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2022-2027" },
            { univ: "인천대학교", dept: "일반대학원", major: "건축학과(4+2)", degree: "#대학원석사", link: null, url: "#", period: "2021-2025" },
            { univ: "인하대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2014-2024" },
            { univ: "전남대학교(광주)", dept: "공과대학 건축학부", major: "건축·도시설계전공", degree: "", link: null, url: "#", period: "2011-2026" },
            { univ: "전남대학교(여수)", dept: "공학대학", major: "건축디자인학과", degree: "", link: null, url: "#", period: "2022-2026" },
            { univ: "전주대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2017-2023" },
            { univ: "조선대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2012-2023" },
            { univ: "중앙대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2014-2024" },
            { univ: "제주대학교", dept: "공과대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2012-2024" },
            { univ: "천주대학교", dept: "공학계열 건축학부", major: "건축학전공", degree: "", link: "천주대학교.html", url: "#", period: "2021-2026" },
            { univ: "국립창원대학교", dept: "공과대학", major: "건축학부", degree: "", link: null, url: "#", period: "2017-2028" },
            { univ: "청주대학교", dept: "공과대학 휴먼환경디자인학부", major: "건축학ㆍ건축공학전공", degree: "", link: null, url: "#", period: "2012-2023" },
            { univ: "충남대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2008-2023" },
            { univ: "충북대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2012-2022" },
            { univ: "평안명대학교", dept: "공과대학 건축공학부", major: "건축학전공", degree: "", link: "평안명대학교.html", url: "#", period: "2021-2026" },
            { univ: "한경국립대학교", dept: "디자인건축융합학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2013-2024" },
            { univ: "국립한국교통대학교", dept: "공과대학 건축학과", major: "건축학과", degree: "", link: null, url: "#", period: "2010-2026" },
            { univ: "한국예술종합학교", dept: "미술원", major: "건축과", degree: "", link: null, url: "#", period: "2015-2026" },
            { univ: "한남대학교", dept: "공과대학", major: "건축학전공", degree: "", link: null, url: "#", period: "2015-2026" },
            { univ: "국립한밭대학교", dept: "건설환경조형대학", major: "건축학과", degree: "", link: null, url: "#", period: "2010-2025" },
            { univ: "한양대학교", dept: "공과대학", major: "건축학부", degree: "", link: null, url: "#", period: "2008-2023" },
            { univ: "한양대학교 ERICA", dept: "공학대학", major: "건축학부", degree: "", link: null, url: "#", period: "2009-2023" },
            { univ: "호서대학교", dept: "공과대학", major: "건축학과", degree: "", link: null, url: "#", period: "2009-2025" },
            { univ: "홍익대학교(서울)", dept: "건축도시대학 건축학부", major: "건축학전공", degree: "", link: null, url: "#", period: "2007-2023" },
            { univ: "홍익대학교(세종)", 과학기술대학: "과학기술대학 건축공학부", major: "건축디자인전공", degree: "", link: null, url: "#", period: "2012-2023" },
            { univ: "효빈대학교", dept: "건축도시대학 건축학부", major: "건축학전공", degree: "", link: "효빈대학교.html", url: "#", period: "2022-2027" }
        ];

        // 국외 3개 인증 프로그램 목록
        const overseasPrograms = [
            { univ: "인도네시아 반둥공과대학교 (ITB)", dept: "", major: "", degree: "#대학원석사", link: null, url: "#", period: "2016-2024" },
            { univ: "인도네시아 이슬람대학교 (UII)", dept: "", major: "", degree: "", link: null, url: "#", period: "2017-2025" },
            { univ: "인도네시아 가자마다대학교 (UGM)", dept: "", major: "", degree: "", link: null, url: "#", period: "2020-2022" }
        ];

        // 테이블 행 렌더링 헬퍼
        const renderRow = (item) => `
            <tr>
                <td class="bg-white border border-gray-200 py-3 px-2 align-middle text-center break-keep">
                    <div>
                        <a class="text-[#0275d8] font-bold hover:underline cursor-pointer text-[13px]"${item.link ? ` onclick="goToLink('${item.link}')"` : ""}>${item.univ}</a>
                    </div>
                    ${item.degree ? `<div class="text-[#2e7d32] text-[10px] font-semibold mt-0.5">${item.degree}</div>` : ""}
                    ${item.dept ? `<div class="text-gray-700 text-[11px] mt-0.5">${item.dept}</div>` : ""}
                    ${item.major ? `<div class="text-[#0275d8] italic text-[11px] mt-0.5">${item.major}</div>` : ""}
                </td>
                <td class="bg-white border border-gray-200 py-3 px-2 align-middle text-center">
                    <a href="${item.url}" class="inline-flex items-center gap-0.5 text-[#2e7d32] hover:underline font-mono text-[11px]">
                        <span class="text-[12px]">📩</span>#
                    </a>
                </td>
                <td class="bg-white border border-gray-200 py-3 px-2 align-middle text-center font-sans text-gray-700 text-[12px]">
                    ${item.period}
                </td>
            </tr>
        `;

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (KAAB 공식 로고 박스) -->
                <div class="bg-white text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-4 py-1.5 flex items-center gap-2.5 bg-white shadow-sm">
                        <img src="이미지/svg/KAAB_로고.svg" class="h-7 object-contain" onerror="this.src='이미지/svg/KAAB_로고.svg'; this.onerror=function(){this.style.display='none';};"/>
                        <div class="text-left leading-tight">
                            <div class="text-[14px] font-bold text-gray-900 tracking-tight">한국건축학교육인증원</div>
                            <div class="text-[9px] font-semibold text-gray-400 tracking-wide">Korea Architectural Accrediting Board</div>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-gray-50 border-y border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <!-- 섹션 소제목 -->
                        <div class="bg-white py-2.5 text-center border-b border-gray-200">
                            <span class="text-[14px] font-bold text-gray-900 tracking-tight">국내 건축학교육 인증프로그램</span>
                        </div>
                        
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-[60%]">
                                <col class="w-[18%]">
                                <col class="w-[22%]">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 py-2 px-2 font-bold text-center">프로그램</th>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 py-2 px-2 font-bold text-center">홈페이지</th>
                                    <th class="bg-gray-50 border border-gray-200 text-gray-800 py-2 px-2 font-bold text-center">인증기간</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${domesticPrograms.map(renderRow).join("")}
                                
                                <!-- 국외 섹션 헤더 -->
                                <tr>
                                    <th colspan="3" class="bg-gray-100 border-y border-gray-300 py-2 text-center font-bold text-gray-900 text-[13px]">
                                        국외 건축학교육 인증프로그램
                                    </th>
                                </tr>
                                ${overseasPrograms.map(renderRow).join("")}
                            </tbody>
                        </table>
                        
                        <!-- 하단 주석 및 안내사항 -->
                        <div class="bg-gray-50 p-3.5 text-[11px] text-gray-600 border-t border-gray-200 text-left leading-relaxed">
                            <div>* 대학교학사: 대학교 건축학사 (Bachelor of Architecture) 학위</div>
                            <div>* 대학원석사: 대학원 건축석사 (Master of Architecture) 학위</div>
                            <div class="text-gray-500 mt-1">별도의 표기가 없는 경우, 대학교 건축학사(B.Arch) 과정임</div>
                            <div class="text-gray-500">건축학교육인증의 인증현황은 이곳에서도 확인 가능함</div>
                            <div class="text-gray-400 mt-0.5">위의 표는 2022년 7월 31일의 인증현황을 기준으로 함</div>
                        </div>
                    </div>
                </details>
            </div>
        `;

        container.innerHTML = templateHTML;
    });
})();