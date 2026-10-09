(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-univ-press-container");
        if (!container) return;

        // 54개 회원교 전체 데이터 (가나다순 정렬 및 개별 로고/링크 매핑)
        const schools = [
            { name: "가톨릭대학교", logo: "이미지/svg/가톨릭대학교.svg", link: null },
            { name: "건국대학교", logo: "이미지/svg/건국대학교.svg", link: null },
            { name: "경남대학교", logo: "이미지/svg/경남대학교.svg", link: null },
            { name: "경북대학교", logo: "이미지/svg/경북대.svg", link: null },
            { name: "경상국립대학교", logo: "이미지/svg/경상국립대학교_로고.svg", link: null },
            { name: "경성대학교", logo: "이미지/svg/경성대학교.svg", link: null },
            { name: "경희대학교", logo: "이미지/svg/경희대학교.svg", link: null },
            { name: "계명대학교", logo: "이미지/svg/계명대학교.svg", link: null },
            { name: "고려대학교", logo: "이미지/svg/고려대학교.svg", link: null },
            { name: "국립공주대학교", logo: "이미지/svg/공주대.svg", link: null },
            { name: "국민대학교", logo: "이미지/svg/국민대학교.svg", link: null },
            { name: "단국대학교", logo: "이미지/svg/단국대학교.svg", link: null },
            { name: "대구가톨릭대학교", logo: "이미지/svg/대구가톨릭대학교.svg", link: null },
            { name: "대구대학교", logo: "이미지/svg/대구대학교.svg", link: null },
            { name: "덕남대학교", logo: "이미지/국립덕남대학교_UI.webp", link: "덕남대학교.html" },
            { name: "덕북대학교", logo: "이미지/덕북대_로고.webp", link: "덕북대학교.html" },
            { name: "동국대학교", logo: "이미지/svg/동국대학교.svg", link: null },
            { name: "동아대학교", logo: "이미지/svg/동아대학교.svg", link: null },
            { name: "명지대학교", logo: "이미지/svg/명지대학교.svg", link: null },
            { name: "부산대학교", logo: "이미지/svg/부산대.svg", link: null },
            { name: "부산외국어대학교", logo: "이미지/svg/부산외국어대학교.svg", link: null },
            { name: "삼선대학교", logo: "이미지/삼선대학교_UI.webp", link: "삼선대학교.html" },
            { name: "서강대학교", logo: "이미지/svg/서강대학교.svg", link: null },
            { name: "서울대학교", logo: "이미지/svg/서울대.svg", link: null },
            { name: "성결대학교", logo: "이미지/svg/성결대학교.svg", link: null },
            { name: "성신여자대학교", logo: "이미지/svg/성신여자대학교.svg", link: null },
            { name: "세종대학교", logo: "이미지/svg/세종대학교.svg", link: null },
            { name: "연세대학교", logo: "이미지/svg/연세대학교.svg", link: null },
            { name: "엽월대학교", logo: "이미지/엽월대학교_UI.webp", link: "엽월대학교.html" },
            { name: "영남대학교", logo: "이미지/svg/영남대학교.svg", link: null },
            { name: "울산대학교", logo: "이미지/svg/울산대학교.svg", link: null },
            { name: "이화여자대학교", logo: "이미지/svg/이화여자대학교.svg", link: null },
            { name: "인천대학교", logo: "이미지/svg/인천대학교.svg", link: null },
            { name: "인하대학교", logo: "이미지/svg/인하대학교.svg", link: null },
            { name: "장로회신학대학교", logo: "이미지/svg/장로회신학대학교.svg", link: null },
            { name: "전남대학교", logo: "이미지/svg/전남대.svg", link: null },
            { name: "전북대학교", logo: "이미지/svg/전북대_로고.svg", link: null },
            { name: "제주대학교", logo: "이미지/svg/제주대.svg", link: null },
            { name: "조선대학교", logo: "이미지/svg/조선대학교.svg", link: null },
            { name: "중앙대학교", logo: "이미지/svg/중앙대학교.svg", link: null },
            { name: "천주대학교", logo: "이미지/svg/국립천주대학교.svg", link: "천주대학교.html" },
            { name: "총신대학교", logo: "이미지/svg/총신대학교.svg", link: null },
            { name: "충남대학교", logo: "이미지/svg/충남대.svg", link: null },
            { name: "충북대학교", logo: "이미지/svg/충북대.svg", link: null },
            { name: "평안명대학교", logo: "이미지/평안명대학교_UI.webp", link: "평안명대학교.html" },
            { name: "한국교원대학교", logo: "이미지/svg/한국교원대학교.svg", link: null },
            { name: "한국방송통신대학교", logo: "이미지/svg/한국방송통신대학교.svg", link: null },
            { name: "한국외국어대학교", logo: "이미지/svg/한국외국어대학교.svg", link: null },
            { name: "한국침례신학대학교", logo: "이미지/svg/한국침례신학대학교.svg", link: null },
            { name: "한국학중앙연구원", logo: "이미지/svg/한국학중앙연구원.svg", link: null },
            { name: "한남대학교", logo: "이미지/svg/한남대학교.svg", link: null },
            { name: "한신대학교", logo: "이미지/svg/한신대학교.svg", link: null },
            { name: "한양대학교", logo: "이미지/svg/한양대학교.svg", link: null },
            { name: "효빈대학교", logo: "이미지/효빈대_로고.webp", link: "효빈대학교.html" }
        ];

        // 인라인 유동형 텍스트 생성 (가나다순 리스트에 중앙점 분할 적용)
        const itemsHTML = schools.map(s => `
            <span class="inline-flex items-center mx-1">
                <img src="${s.logo}" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                <a class="text-[#0275d8] hover:underline cursor-pointer"${s.link ? ` onclick="goToLink('${s.link}')"` : ""}>${s.name}</a>
            </span>
        `).join('<span class="text-gray-400 font-bold mx-1">·</span>');

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (사진과 동일한 블랙 헤더 및 테두리 로고 박스) -->
                <div class="bg-[#181818] text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-white/70 rounded px-4 py-2 flex items-center gap-3.5 bg-black/60 shadow-sm">
                        <img src="이미지/한국대학출판협회_로고.webp" class="h-7 object-contain" onerror="this.src='이미지/한국대학출판협회_로고.webp'; this.onerror=function(){this.style.display='none';};"/>
                        <div class="h-7 w-[1px] bg-white/40"></div>
                        <div class="text-left leading-tight text-white">
                            <div class="text-[10px] font-semibold text-gray-300 tracking-wide uppercase">The Association of Korean University Presses</div>
                            <div class="text-[14px] font-bold tracking-tight mt-0.5">한국대학출판협회</div>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-[#181818] border-t border-[#333333] py-1 text-[11px] font-bold text-white cursor-pointer select-none hover:bg-[#252525] transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <!-- 사진과 동일한 인라인 줄바꿈 배치 -->
                    <div class="w-full p-4 text-center leading-[2.4] break-keep bg-white">
                        ${itemsHTML}
                    </div>
                </details>
            </div>
        `;

        container.innerHTML = templateHTML;
    });
})();