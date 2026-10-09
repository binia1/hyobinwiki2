(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-kusf-container");
        if (!container) return;

        // 141개 회원교 전체 데이터 (가나다순 정렬 및 개별 로고/링크 매핑)
        const schools = [
            { name: "가천대학교", logo: "이미지/svg/가천대학교.svg", link: null },
            { name: "가톨릭관동대학교", logo: "이미지/svg/가톨릭관동대학교.svg", link: null },
            { name: "강동대학교", logo: "이미지/svg/강동대학교.svg", link: null },
            { name: "강릉영동대학교", logo: "이미지/svg/강릉영동대학교.svg", link: null },
            { name: "강서대학교", logo: "이미지/svg/강서대학교.svg", link: null },
            { name: "강원대학교", logo: "이미지/svg/강원대.svg", link: null },
            { name: "강원도립대학교", logo: "이미지/svg/강원도립대학교.svg", link: null },
            { name: "건국대학교", logo: "이미지/svg/건국대학교.svg", link: null },
            { name: "경기대학교", logo: "이미지/svg/경기대학교.svg", link: null },
            { name: "경남대학교", logo: "이미지/svg/경남대학교.svg", link: null },
            { name: "경동대학교", logo: "이미지/svg/경동대학교.svg", link: null },
            { name: "경북대학교", logo: "이미지/svg/경북대.svg", link: null },
            { name: "경북전문대학교", logo: "이미지/svg/경북전문대학교.svg", link: null },
            { name: "경상국립대학교", logo: "이미지/svg/경상국립대학교_로고.svg", link: null },
            { name: "경성대학교", logo: "이미지/svg/경성대학교.svg", link: null },
            { name: "경운대학교", logo: "이미지/svg/경운대학교.svg", link: null },
            { name: "경일대학교", logo: "이미지/svg/경일대학교.svg", link: null },
            { name: "경희대학교", logo: "이미지/svg/경희대학교.svg", link: null },
            { name: "계명대학교", logo: "이미지/svg/계명대학교.svg", link: null },
            { name: "계명문화대학교", logo: "이미지/svg/계명문화대학교.svg", link: null },
            { name: "고려대학교", logo: "이미지/svg/고려대학교.svg", link: null },
            { name: "고신대학교", logo: "이미지/svg/고신대학교.svg", link: null },
            { name: "광운대학교", logo: "이미지/svg/광운대학교.svg", link: null },
            { name: "광주대학교", logo: "이미지/svg/광주대학교.svg", link: null },
            { name: "광주여자대학교", logo: "이미지/svg/광주여자대학교.svg", link: null },
            { name: "구미대학교", logo: "이미지/svg/구미대학교.svg", link: null },
            { name: "국민대학교", logo: "이미지/svg/국민대학교.svg", link: null },
            { name: "국립강릉원주대학교", logo: "이미지/svg/국립강릉원주대학교.svg", link: null },
            { name: "국립경국대학교", logo: "이미지/svg/국립경국대학교.svg", link: null },
            { name: "국립공주대학교", logo: "이미지/svg/공주대.svg", link: null },
            { name: "국립군산대학교", logo: "이미지/svg/국립군산대학교.svg", link: null },
            { name: "국립목포대학교", logo: "이미지/svg/국립목포대학교.svg", link: null },
            { name: "국립목포해양대학교", logo: "이미지/svg/목포해양대학교.svg", link: null },
            { name: "국립서해대학교", logo: "이미지/svg/국립서해대학교.svg", link: "국립서해대학교.html" },
            { name: "국립순천대학교", logo: "이미지/svg/국립순천대학교.svg", link: null },
            { name: "국립창원대학교", logo: "이미지/svg/국립창원대학교.svg", link: null },
            { name: "국립한국교통대학교", logo: "이미지/svg/국립한국교통대학교.svg", link: null },
            { name: "국립한국해양대학교", logo: "이미지/svg/한국해양대학교.svg", link: null },
            { name: "국제대학교", logo: "이미지/svg/국제대학교.svg", link: null },
            { name: "군장대학교", logo: "이미지/svg/군장대학교.svg", link: null },
            { name: "김천대학교", logo: "이미지/svg/김천대학교.svg", link: null },
            { name: "김해대학교", logo: "이미지/svg/김해대학교.svg", link: null },
            { name: "낙주대학교", logo: "이미지/svg/낙주대학교.svg", link: "낙주대학교.html" },
            { name: "나사렛대학교", logo: "이미지/svg/나사렛대학교.svg", link: null },
            { name: "남부대학교", logo: "이미지/svg/남부대학교.svg", link: null },
            { name: "단국대학교", logo: "이미지/svg/단국대학교.svg", link: null },
            { name: "대경대학교", logo: "이미지/svg/대경대학교.svg", link: null },
            { name: "대구과학대학교", logo: "이미지/svg/대구과학대학교.svg", link: null },
            { name: "대구대학교", logo: "이미지/svg/대구대학교.svg", link: null },
            { name: "대덕대학교", logo: "이미지/svg/대덕대학교.svg", link: null },
            { name: "대전과학기술대학교", logo: "이미지/svg/대전과학기술대학교.svg", link: null },
            { name: "대전대학교", logo: "이미지/svg/대전대학교.svg", link: null },
            { name: "덕남대학교", logo: "이미지/국립덕남대학교_UI.webp", link: "덕남대학교.html" },
            { name: "덕북대학교", logo: "이미지/덕북대_로고.webp", link: "덕북대학교.html" },
            { name: "동강대학교", logo: "이미지/svg/동강대학교.svg", link: null },
            { name: "동국대학교", logo: "이미지/svg/동국대학교.svg", link: null },
            { name: "동명대학교", logo: "이미지/svg/동명대학교.svg", link: null },
            { name: "동서대학교", logo: "이미지/svg/동서대학교.svg", link: null },
            { name: "동신대학교", logo: "이미지/svg/동신대학교.svg", link: null },
            { name: "동아대학교", logo: "이미지/svg/동아대학교.svg", link: null },
            { name: "동양대학교", logo: "이미지/svg/동양대학교.svg", link: null },
            { name: "동원과학기술대학교", logo: "이미지/svg/동원과학기술대학교.svg", link: null },
            { name: "동원대학교", logo: "이미지/svg/동원대학교.svg", link: null },
            { name: "동의과학대학교", logo: "이미지/svg/동의과학대학교.svg", link: null },
            { name: "동의대학교", logo: "이미지/svg/동의대학교.svg", link: null },
            { name: "디지털서울문화예술대학교", logo: "이미지/svg/디지털서울문화예술대학교.svg", link: null },
            { name: "마산대학교", logo: "이미지/svg/마산대학교.svg", link: null },
            { name: "명지대학교", logo: "이미지/svg/명지대학교.svg", link: null },
            { name: "목원대학교", logo: "이미지/svg/목원대학교.svg", link: null },
            { name: "목포과학대학교", logo: "이미지/svg/목포과학대학교.svg", link: null },
            { name: "문경대학교", logo: "이미지/svg/문경대학교.svg", link: null },
            { name: "방산대학교", logo: "이미지/svg/방산대학교_UI.svg", link: "방산대학교.html" },
            { name: "배재대학교", logo: "이미지/svg/배재대학교.svg", link: null },
            { name: "백석대학교", logo: "이미지/svg/백석대학교.svg", link: null },
            { name: "백석문화대학교", logo: "이미지/svg/백석문화대학교.svg", link: null },
            { name: "부산대학교", logo: "이미지/svg/부산대.svg", link: null },
            { name: "부산외국어대학교", logo: "이미지/svg/부산외국어대학교.svg", link: null },
            { name: "사이버한국외국어대학교", logo: "이미지/svg/사이버한국외국어대학교.svg", link: null },
            { name: "삼선대학교", logo: "이미지/삼선대학교_UI.webp", link: "삼선대학교.html" },
            { name: "상명대학교", logo: "이미지/svg/상명대학교.svg", link: null },
            { name: "상지대학교", logo: "이미지/svg/상지대학교.svg", link: null },
            { name: "서울대학교", logo: "이미지/svg/서울대.svg", link: null },
            { name: "서해해양대학교", logo: "이미지/svg/국립서해해양대학교_UI.svg", link: "서해해양대학교.html" },
            { name: "선문대학교", logo: "이미지/svg/선문대학교.svg", link: null },
            { name: "성결대학교", logo: "이미지/svg/성결대학교.svg", link: null },
            { name: "성균관대학교", logo: "이미지/svg/성균관대학교.svg", link: null },
            { name: "세경대학교", logo: "이미지/svg/세경대학교.svg", link: null },
            { name: "세종대학교", logo: "이미지/svg/세종대학교.svg", link: null },
            { name: "세한대학교", logo: "이미지/svg/세한대학교.svg", link: null },
            { name: "송원대학교", logo: "이미지/svg/송원대학교.svg", link: null },
            { name: "송호대학교", logo: "이미지/svg/송호대학교.svg", link: null },
            { name: "수원대학교", logo: "이미지/svg/수원대학교.svg", link: null },
            { name: "순천향대학교", logo: "이미지/svg/순천향대학교.svg", link: null },
            { name: "숭실대학교", logo: "이미지/svg/숭실대학교.svg", link: null },
            { name: "신성대학교", logo: "이미지/svg/신성대학교.svg", link: null },
            { name: "아주대학교", logo: "이미지/svg/아주대학교.svg", link: null },
            { name: "안동과학대학교", logo: "이미지/svg/안동과학대학교.svg", link: null },
            { name: "안양대학교", logo: "이미지/svg/안양대학교.svg", link: null },
            { name: "여주대학교", logo: "이미지/svg/여주대학교.svg", link: null },
            { name: "연세대학교", logo: "이미지/svg/연세대학교.svg", link: null },
            { name: "엽월대학교", logo: "이미지/엽월대학교_UI.webp", link: "엽월대학교.html" },
            { name: "영남대학교", logo: "이미지/svg/영남대학교.svg", link: null },
            { name: "영산대학교", logo: "이미지/svg/영산대학교.svg", link: null },
            { name: "용인대학교", logo: "이미지/svg/용인대학교.svg", link: null },
            { name: "용인예술과학대학교", logo: "이미지/svg/용인예술과학대학교.svg", link: null },
            { name: "우석대학교", logo: "이미지/svg/우석대학교.svg", link: null },
            { name: "울산과학대학교", logo: "이미지/svg/울산과학대학교.svg", link: null },
            { name: "울산대학교", logo: "이미지/svg/울산대학교.svg", link: null },
            { name: "원광대학교", logo: "이미지/svg/원광대학교.svg", link: null },
            { name: "위덕대학교", logo: "이미지/svg/위덕대학교.svg", link: null },
            { name: "인제대학교", logo: "이미지/svg/인제대학교.svg", link: null },
            { name: "인천대학교", logo: "이미지/svg/인천대학교.svg", link: null },
            { name: "인하대학교", logo: "이미지/svg/인하대학교.svg", link: null },
            { name: "저소대학교", logo: "이미지/저소대학교_UI.webp", link: "저소대학교.html" },
            { name: "전남과학대학교", logo: "이미지/svg/전남과학대학교.svg", link: null },
            { name: "전북대학교", logo: "이미지/svg/전북대_로고.svg", link: null },
            { name: "전주기전대학", logo: "이미지/svg/전주기전대학.svg", link: null },
            { name: "전주대학교", logo: "이미지/svg/전주대학교.svg", link: null },
            { name: "전주비전대학교", logo: "이미지/svg/전주비전대학교.svg", link: null },
            { name: "제주대학교", logo: "이미지/svg/제주대.svg", link: null },
            { name: "제주한라대학교", logo: "이미지/svg/제주한라대학교.svg", link: null },
            { name: "조선대학교", logo: "이미지/svg/조선대학교.svg", link: null },
            { name: "조선이공대학교", logo: "이미지/svg/조선이공대학교.svg", link: null },
            { name: "중부대학교", logo: "이미지/svg/중부대학교.svg", link: null },
            { name: "중앙대학교", logo: "이미지/svg/중앙대학교.svg", link: null },
            { name: "중원대학교", logo: "이미지/svg/중원대학교.svg", link: null },
            { name: "천주대학교", logo: "이미지/svg/국립천주대학교.svg", link: "천주대학교.html" },
            { name: "청주대학교", logo: "이미지/svg/청주대학교.svg", link: null },
            { name: "초당대학교", logo: "이미지/svg/초당대학교.svg", link: null },
            { name: "충남대학교", logo: "이미지/svg/충남대.svg", link: null },
            { name: "충북대학교", logo: "이미지/svg/충북대.svg", link: null },
            { name: "충북보건과학대학교", logo: "이미지/svg/충북보건과학대학교.svg", link: null },
            { name: "평안명대학교", logo: "이미지/평안명대학교_UI.webp", link: "평안명대학교.html" },
            { name: "한경국립대학교", logo: "이미지/svg/한경국립대학교.svg", link: null },
            { name: "한국골프대학교", logo: "이미지/svg/한국골프대학교.svg", link: null },
            { name: "한국체육대학교", logo: "이미지/svg/한국체육대학교.svg", link: null },
            { name: "한남대학교", logo: "이미지/svg/한남대학교.svg", link: null },
            { name: "한라대학교", logo: "이미지/svg/한라대학교.svg", link: null },
            { name: "한림대학교", logo: "이미지/svg/한림대학교.svg", link: null },
            { name: "한양대학교", logo: "이미지/svg/한양대학교.svg", link: null },
            { name: "효빈대학교", logo: "이미지/효빈대_로고.webp", link: "효빈대학교.html" }
        ];

        // 3열 테이블 행 생성 (141개교 / 3 = 47행 균등 배치)
        let rowsHTML = "";
        for (let i = 0; i < schools.length; i += 3) {
            const chunk = schools.slice(i, i + 3);
            rowsHTML += `<tr>${chunk.map(s => `
                <td class="bg-white border border-gray-200 py-2.5 px-2 align-middle break-keep text-center">
                    <img src="${s.logo}" class="inline-block w-4 h-4 mr-1.5 align-[-2px] object-contain" onerror="this.style.display='none';"/>
                    <a class="text-[#0275d8] hover:underline cursor-pointer"${s.link ? ` onclick="goToLink('${s.link}')"` : ""}>${s.name}</a>
                </td>
            `).join("")}</tr>`;
        }

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (사진과 동일한 KUSF 로고 박스 헤더) -->
                <div class="bg-white text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-4 py-1.5 flex items-center gap-3.5 bg-white shadow-sm">
                        <img src="이미지/KUSF_로고.webp" class="h-7 object-contain" onerror="this.src='이미지/KUSF_로고.webp'; this.onerror=function(){this.style.display='none';};"/>
                        <div class="h-7 w-[1px] bg-gray-300"></div>
                        <div class="text-left leading-tight">
                            <div class="text-[10px] font-semibold text-gray-500 tracking-wide">Korea University Sport Federation</div>
                            <div class="text-[14px] font-bold text-gray-900 tracking-tight mt-0.5">한국대학스포츠협의회 회원교</div>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 펼쳐진 상태 유지) -->
                <details class="nw-details group">
                    <summary class="list-none block w-full text-center bg-gray-50 border-y border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
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