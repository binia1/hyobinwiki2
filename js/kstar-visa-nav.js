(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-kstar-visa-container");
        if (!container) return;

        // 37개 참여대학 목록
        const schools = [
            { name: "강원대학교", logo: "이미지/svg/강원대.svg", link: null },
            { name: "과학기술연합대학원대학교", logo: "이미지/svg/과학기술연합대학원대학교.svg", link: null },
            { name: "광주과학기술원", logo: "이미지/svg/광주과학기술원.svg", link: null },
            { name: "경북대학교", logo: "이미지/svg/경북대.svg", link: null },
            { name: "경상국립대학교", logo: "이미지/svg/경상국립대학교_로고.svg", link: null },
            { name: "경희대학교", logo: "이미지/svg/경희대학교.svg", link: null },
            { name: "고려대학교(서울)", logo: "이미지/svg/고려대학교.svg", link: null },
            { name: "고려대학교(세종)", logo: "이미지/svg/고려대학교.svg", link: null },
            { name: "대구경북과학기술원", logo: "이미지/svg/대구경북과학기술원.svg", link: null },
            { name: "덕남대학교", logo: "이미지/국립덕남대학교_UI.webp", link: "덕남대학교.html" },
            { name: "덕북대학교", logo: "이미지/덕북대_로고.webp", link: "덕북대학교.html" },
            { name: "동아대학교", logo: "이미지/svg/동아대학교.svg", link: null },
            { name: "부경대학교", logo: "이미지/svg/국립부경대학교.svg", link: null },
            { name: "부산대학교", logo: "이미지/svg/부산대.svg", link: null },
            { name: "삼선대학교", logo: "이미지/삼선대학교_UI.webp", link: "삼선대학교.html" },
            { name: "서강대학교", logo: "이미지/svg/서강대학교.svg", link: null },
            { name: "서울대학교", logo: "이미지/svg/서울대.svg", link: null },
            { name: "성균관대학교", logo: "이미지/svg/성균관대학교.svg", link: null },
            { name: "순천향대학교", logo: "이미지/svg/순천향대학교.svg", link: null },
            { name: "아주대학교", logo: "이미지/svg/아주대학교.svg", link: null },
            { name: "연세대학교(서울)", logo: "이미지/svg/연세대학교.svg", link: null },
            { name: "연세대학교(미래)", logo: "이미지/svg/연세대학교.svg", link: null },
            { name: "울산과학기술원", logo: "이미지/svg/울산과학기술원.svg", link: null },
            { name: "인하대학교", logo: "이미지/svg/인하대학교.svg", link: null },
            { name: "전남대학교", logo: "이미지/svg/전남대.svg", link: null },
            { name: "전북대학교", logo: "이미지/svg/전북대_로고.svg", link: null },
            { name: "제주대학교", logo: "이미지/svg/제주대.svg", link: null },
            { name: "중앙대학교", logo: "이미지/svg/중앙대학교.svg", link: null },
            { name: "충남대학교", logo: "이미지/svg/충남대.svg", link: null },
            { name: "충북대학교", logo: "이미지/svg/충북대.svg", link: null },
            { name: "평안명대학교", logo: "이미지/평안명대학교_UI.webp", link: "평안명대학교.html" },
            { name: "포항공과대학교", logo: "이미지/svg/포항공과대학교.svg", link: null },
            { name: "한국과학기술원", logo: "이미지/svg/한국과학기술원.svg", link: null },
            { name: "한국해양대학교", logo: "이미지/svg/한국해양대학교.svg", link: null },
            { name: "한양대학교(서울)", logo: "이미지/svg/한양대학교.svg", link: null },
            { name: "한양대학교(ERICA)", logo: "이미지/svg/한양대학교.svg", link: null },
            { name: "효빈대학교", logo: "이미지/효빈대_로고.webp", link: "효빈대학교.html" }
        ];

        // 인라인 유동형 텍스트 생성
        const itemsHTML = schools.map(s => `
            <span class="inline-flex items-center mx-1">
                <img src="${s.logo}" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                <a class="text-[#0275d8] hover:underline cursor-pointer"${s.link ? ` onclick="goToLink('${s.link}')"` : ""}>${s.name}</a>
            </span>
        `).join('<span class="text-gray-400 font-bold mx-1">·</span>');

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (사진과 동일한 K-STAR 비자트랙 로고 박스) -->
                <div class="bg-white text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-4 py-1.5 flex items-center gap-3.5 bg-white shadow-sm">
                        <img src="이미지/KSTAR_비자트랙_로고.webp" class="h-8 object-contain" onerror="this.src='이미지/KSTAR_비자트랙_로고.webp'; this.onerror=function(){this.style.display='none';};"/>
                        <div class="h-8 w-[1px] bg-gray-300"></div>
                        <div class="text-left leading-tight">
                            <div class="text-[10px] font-semibold text-[#005BAC] tracking-wide">K-STAR Visa Track</div>
                            <div class="text-[14px] font-bold text-[#005BAC] tracking-tight mt-0.5">K-STAR 비자트랙 참여대학</div>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (파란색 토글바 #005BAC, 기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-[#005BAC] border-t border-[#005BAC] py-1 text-[11px] font-bold text-white cursor-pointer select-none hover:bg-[#004885] transition-colors [&::-webkit-details-marker]:hidden">
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