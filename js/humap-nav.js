(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-humap-container");
        if (!container) return;

        // 링크 생성 헬퍼 (파란색 등재 링크 / 빨간색 미등재 링크)
        const b = (name, link = null) => `<a class="text-[#0275d8] hover:underline cursor-pointer"${link ? ` onclick="goToLink('${link}')"` : ""}>${name}</a>`;
        const r = (name) => `<span class="text-[#d32f2f] hover:underline cursor-pointer">${name}</span>`;
        const dot = '<span class="text-gray-400 font-bold mx-1.5">·</span>';

        const templateHTML = `
            <div class="border border-[#06663E] mb-5 text-[12px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (HUMAP 로고 박스) -->
                <div class="bg-white text-center py-3 px-3 flex justify-center items-center">
                    <div class="border border-gray-300 rounded px-5 py-1.5 flex items-center gap-3.5 bg-white shadow-sm">
                        <img src="이미지/HUMAP_로고.webp" class="h-8 object-contain" onerror="this.src='이미지/HUMAP_로고.webp'; this.onerror=function(){this.style.display='none';};"/>
                        <div class="h-8 w-[1px] bg-gray-300"></div>
                        <div class="text-left leading-tight">
                            <div class="text-[10px] font-semibold text-[#06663E] tracking-tight">Hyogo University Mobility in Asia and the Pacific</div>
                            <div class="text-[16px] font-extrabold text-[#06663E] tracking-tight mt-0.5">HUMAP</div>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-[#06663E] border-t border-[#06663E] py-1 text-[11px] font-bold text-white cursor-pointer select-none hover:bg-[#055232] transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full">
                        <table class="w-full border-collapse text-[12px] text-center table-fixed">
                            <colgroup>
                                <col class="w-[14%]">
                                <col class="w-[86%]">
                            </colgroup>
                            <tbody>
                                <!-- ================= [1. 아시아] ================= -->
                                <tr>
                                    <th colspan="2" class="bg-[#055232] text-white py-1.5 font-bold text-[13px] border-b border-[#044228]">
                                        아시아
                                    </th>
                                </tr>
                                
                                <!-- 대한민국 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇰🇷</div>
                                        <div>대한민국</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${b('경남대학교')}${dot}${b('경희대학교')}${dot}${b('고려대학교')}${dot}${b('광주교육대학교')}${dot}${b('광주대학교')}${dot}${b('국민대학교')}${dot}${b('군산대학교')}${dot}${b('대구교육대학교')}${dot}${b('동서대학교')}${dot}${b('동아대학교')}${dot}${b('동의대학교')}${dot}${b('목포대학교')}${dot}${b('목포해양대학교')}${dot}${b('부경대학교')}${dot}${b('부산대학교')}${dot}${b('부산외국어대학교')}${dot}${b('상명대학교')}${dot}${b('서울교육대학교')}${dot}${b('서울여자대학교')}${dot}${b('성결대학교')}${dot}${b('성균관대학교')}${dot}${b('성신여자대학교')}${dot}${b('숙명여자대학교')}${dot}${b('아주대학교')}${dot}${b('연세대학교')}${dot}${b('이화여자대학교')}${dot}${b('인천대학교')}${dot}${b('제주대학교')}${dot}${b('천주대학교', '천주대학교.html')}${dot}${b('포항공과대학교')}${dot}${b('한국항공대학교')}${dot}${b('한국해양대학교')}${dot}${b('한남대학교')}${dot}${b('한양대학교')}${dot}${b('호서대학교')}${dot}${b('효빈대학교', '효빈대학교.html')}
                                    </td>
                                </tr>
                                
                                <!-- 대만 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇹🇼</div>
                                        <div>대만</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${r('국립가오슝제일과기대학')}${dot}${b('국립대만대학')}${dot}${r('국립대만예술대학')}${dot}${r('국립대만해양대학')}${dot}${r('국립연합대학')}${dot}${r('국립윈린과기대학')}${dot}${r('국립자이대학')}${dot}${b('국립중앙대학')}${dot}${r('국립타이중교육대학')}${dot}${r('난타이과기대학')}${dot}${r('둥하이대학')}${dot}${r('슈더과기대학')}${dot}${r('징이대학')}${dot}${r('창룽대학')}${dot}${r('카이난대학')}
                                    </td>
                                </tr>
                                
                                <!-- 몽골 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇲🇳</div>
                                        <div>몽골</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${r('몽골과학기술대학교')}
                                    </td>
                                </tr>
                                
                                <!-- 방글라데시 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇧🇩</div>
                                        <div>방글라데시</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${r('국제경영농업기술대학교')}${dot}${r('다카 대학교')}${dot}${r('다포딜 국제대학교')}
                                    </td>
                                </tr>
                                
                                <!-- 베트남 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇻🇳</div>
                                        <div>베트남</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${r('베트남상매대학')}${dot}${r('호찌민 교육대학')}${dot}${r('호찌민 사범대학')}${dot}${r('호찌민 인문사회과학대학')}
                                    </td>
                                </tr>
                                
                                <!-- 인도 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇮🇳</div>
                                        <div>인도</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${r('공업경영대학교')}
                                    </td>
                                </tr>
                                
                                <!-- 인도네시아 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇮🇩</div>
                                        <div>인도네시아</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${b('11월 10일 공과대학교')}${dot}${b('가자마다 대학교')}${dot}${r('다르마프르사다 대학교')}${dot}${b('반둥 공과대학교')}${dot}${r('붕 하타 대학교')}${dot}${r('사탸와차나 기독대학교')}${dot}${r('시아쿠알라 대학교')}${dot}${b('아이를랑가 대학교')}${dot}${r('우다야나 대학교')}${dot}${b('인도네시아 대학교')}${dot}${b('하사누딘 대학교')}
                                    </td>
                                </tr>
                                
                                <!-- 일본 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇯🇵</div>
                                        <div>일본</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${b('간사이국제대학')}${dot}${b('고베가쿠인대학')}${dot}${r('고베국제대학')}${dot}${b('고베대학')}${dot}${r('고베쇼인여자학원대학')}${dot}${r('고베시간호대학')}${dot}${b('고베시외국어대학')}${dot}${b('고베신와대학')}${dot}${r('고베약과대학')}${dot}${r('고베여자대학')}${dot}${b('고베여학원대학')}${dot}${b('고베예술공과대학')}${dot}${r('무코가와여자대학')}${dot}${r('소노다학원여자대학')}${dot}${r('아시야대학')}${dot}${b('오테마에대학')}${dot}${b('유통과학대학')}${dot}${b('간세이가쿠인대학')}${dot}${b('코난대학')}${dot}${r('코난여자대학')}${dot}${r('코시엔대학')}${dot}${b('효고교육대학')}${dot}${b('효고대학')}${dot}${b('효고현립대학')}${dot}${r('히메지대학')}${dot}${r('히메지독쿄대학')}
                                    </td>
                                </tr>
                                
                                <!-- 중국 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇨🇳</div>
                                        <div>중국</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${r('광둥공업대학')}${dot}${r('광둥외어외역대학')}${dot}${b('난징대학')}${dot}${b('난카이대학')}${dot}${r('내몽골대학')}${dot}${b('닝보대학')}${dot}${b('다롄이공대학')}${dot}${r('다롄해사대학')}${dot}${r('둥베이사범대학')}${dot}${r('베이징공업대학')}${dot}${b('베이징대학')}${dot}${b('베이징사범대학')}${dot}${b('베이징외국어대학')}${dot}${r('베이징체신대학')}${dot}${r('상하이해양대학')}${dot}${r('쑤저우과기대학')}${dot}${r('쑤저우대학')}${dot}${r('쑤저우시립대학')}${dot}${b('연변대학')}${dot}${r('자오칭대학')}${dot}${b('저장대학')}${dot}${r('중국의과대학')}${dot}${b('중국인민대학')}${dot}${b('중산대학')}${dot}${b('지린대학')}${dot}${r('톈진공업대학')}${dot}${r('톈진외국어대학')}${dot}${b('푸단대학')}${dot}${r('하이난대학')}${dot}${r('하이난사범대학')}${dot}${b('홍콩중문대학')}${dot}${r('화난사범대학')}${dot}${b('화둥사범대학')}${dot}${r('후난과기학원')}
                                    </td>
                                </tr>
                                
                                <!-- 태국 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇹🇭</div>
                                        <div>태국</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${r('라차팟 수안두싯 대학교')}${dot}${r('수라나리 공과대학교')}${dot}${b('쭐랄롱꼰 대학교')}${dot}${r('치앙마이 대학교')}${dot}${r('타이니치 공과대학교')}${dot}${b('탐마삿 대학교')}
                                    </td>
                                </tr>
                                
                                <!-- 필리핀 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇵🇭</div>
                                        <div>필리핀</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${r('AMA 대학교')}${dot}${b('마닐라 아테네오 대학교')}${dot}${r('미리엄 칼리지')}${dot}${r('아시아 트리니티 대학교')}${dot}${r('어셤션 대학교')}${dot}${r('엔데룬 칼리지')}${dot}${b('필리핀 대학교')}
                                    </td>
                                </tr>
                                
                                <!-- ================= [2. 아메리카] ================= -->
                                <tr>
                                    <th colspan="2" class="bg-[#055232] text-white py-1.5 font-bold text-[13px] border-b border-[#044228]">
                                        아메리카
                                    </th>
                                </tr>
                                
                                <!-- 미국 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇺🇸</div>
                                        <div>미국</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${b('곤자가 대학교')}${dot}${r('세인트 마틴 칼리지')}${dot}${r('애리조나 대학교')}${dot}${r('에버그린 주립 칼리지')}${dot}${r('오거스타나 대학교')}${dot}${r('와이오밍 대학교')}${dot}${b('워싱턴 대학교')}${dot}${r('이스턴 워싱턴 대학교')}${dot}${b('일리노이 대학교/어배너-섐페인 캠퍼스')}${dot}${b('피츠버그 대학교')}${dot}${b('하와이 대학교')}
                                    </td>
                                </tr>
                                
                                <!-- 브라질 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇧🇷</div>
                                        <div>브라질</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${r('론드리나 주립대학교')}${dot}${r('파라나 연방기술교육센터')}${dot}${r('파라나 연방대학교')}
                                    </td>
                                </tr>
                                
                                <!-- 캐나다 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇨🇦</div>
                                        <div>캐나다</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${b('퀸스 대학교')}
                                    </td>
                                </tr>
                                
                                <!-- 유엔 (코스타리카) -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep text-[11px] leading-tight">
                                        <div class="text-base mb-0.5">🇺🇳</div>
                                        <div>유엔<br/>(코스타리카)</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${b('유엔 평화대학교')}
                                    </td>
                                </tr>
                                
                                <!-- ================= [3. 오세아니아] ================= -->
                                <tr>
                                    <th colspan="2" class="bg-[#055232] text-white py-1.5 font-bold text-[13px] border-b border-[#044228]">
                                        오세아니아
                                    </th>
                                </tr>
                                
                                <!-- 뉴질랜드 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇳🇿</div>
                                        <div>뉴질랜드</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${b('와이카토 대학교')}${dot}${b('캔터베리 대학교')}
                                    </td>
                                </tr>
                                
                                <!-- 호주 -->
                                <tr>
                                    <th class="bg-[#06663E] border border-gray-200 text-white p-2.5 font-bold text-center align-middle break-keep">
                                        <div class="text-base mb-0.5">🇦🇺</div>
                                        <div>호주</div>
                                    </th>
                                    <td class="bg-white border border-gray-200 p-3 leading-[2.3] break-keep text-center">
                                        ${b('그리피스 대학교')}${dot}${b('뉴사우스웨일스 대학교')}${dot}${b('머독 대학교')}${dot}${b('서호주 대학교')}${dot}${b('선샤인 코스트 대학교')}${dot}${b('에디스 코완 대학교')}${dot}${b('커틴 대학교')}${dot}${b('퀸즐랜드 공과대학교')}${dot}${b('퀸즐랜드 대학교')}${dot}${r('호주 노틀데임 대학교')}${dot}${r('호주해양대학')}
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