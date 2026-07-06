(function() {
    const navHtml = `
        <div class="border-2 border-[#1f2e5c] rounded overflow-hidden mb-8 mt-4" style="background-color: var(--wiki-bg);">
            <details class="group" open>
                <summary class="cursor-pointer list-none text-center p-0 m-0 outline-none">
                    <div class="relative flex items-center justify-center p-3 border-b border-[#1f2e5c]" style="background-color: var(--wiki-bg); background-image: linear-gradient(110deg, #000 15px, transparent 16px, transparent 30px, #000 31px, #000 45px, transparent 46px), linear-gradient(-70deg, #003478 20px, transparent 21px), linear-gradient(-70deg, #c60c30 40px, transparent 41px); background-repeat: no-repeat; background-position: left top, right top, right top;">
                        <span class="font-bold text-lg flex items-center gap-2" style="color: var(--wiki-text);">
                            <img src="이미지/대한민국_국기.webp" class="w-6 border" style="border-color: var(--wiki-border);" alt="태극기"> 
                            대한민국 폐지된 행정구역
                        </span>
                    </div>
                    <div class="py-1 text-sm border-b font-bold" style="background-color: var(--wiki-gray-bg); border-color: var(--wiki-border); color: var(--wiki-link);">
                        <span class="group-open:hidden">[ 펼치기 ]</span>
                        <span class="hidden group-open:inline">[ 접기 ]</span>
                    </div>
                </summary>
                
                <div class="p-3 text-xs text-center border-b leading-relaxed" style="border-color: var(--wiki-border); color: var(--wiki-text); opacity: 0.9;">
                    • 1945년 <a href="남북분단.html" class="wiki-link">남북분단</a> 이후 현재까지 폐지된 <a href="대한민국의_행정구역.html" class="wiki-link">대한민국의 행정구역</a><br>
                    • 행정구역 단계별로 구분 및 폐지 날짜 순서대로 나열<br>
                    • <strong>북</strong>: 폐지 후 <a href="이북_5도.html" class="wiki-link">이북 5도</a>에 명목상 존속 (단, <a href="옹진군.html" class="wiki-link">옹진군</a>은 인천광역시 소속으로, <a href="황해도.html" class="wiki-link">황해도</a> 소속과 별개 취급) / <strong>95</strong>: 1995년 도농통합으로 인한 폐지 / <strong>승</strong>: 광역자치단체 승격으로 인한 폐지<br>
                    • <span class="border px-1" style="border-color: var(--wiki-border);">테두리</span> : 광역자치단체 / <em>이탤릭체</em> : 기초자치단체 하위 행정구역
                </div>

                <table class="w-full text-[0.85rem] m-0 border-none table-fixed">
                    <colgroup>
                        <col style="width: 12%;">
                        <col style="width: 88%;">
                    </colgroup>
                    <style>
                        .nav-sup { color: #888; font-size: 0.75em; margin-left: 1px; font-weight: normal; }
                    </style>
                    <tbody>
                        <tr>
                            <th class="bg-[#004EA2] text-white text-center py-2">경기</th>
                            <td class="text-center p-2 leading-relaxed">
                                <div class="inline-block border px-2 mb-1" style="border-color: var(--wiki-link);"><a href="황해도.html" class="wiki-link">황해도</a><sup class="nav-sup">북</sup></div><br>
                                <a href="벽성군.html" class="wiki-link">벽성군</a><sup class="nav-sup">북</sup> · <a href="장연군.html" class="wiki-link">장연군</a><sup class="nav-sup">북</sup> · <a href="서울시.html" class="wiki-link">서울시</a><sup class="nav-sup">승</sup> · <a href="개성시.html" class="wiki-link">개성시</a><sup class="nav-sup">북</sup> · <a href="개풍군.html" class="wiki-link">개풍군</a><sup class="nav-sup">북</sup> · <a href="연백군.html" class="wiki-link">연백군</a><sup class="nav-sup">북</sup> · <a href="북포천군.html" class="wiki-link">북포천군</a> · <a href="장단군.html" class="wiki-link">장단군</a><sup class="nav-sup">북</sup> · <a href="부천군.html" class="wiki-link">부천군</a> · <a href="인천시.html" class="wiki-link">인천시</a><sup class="nav-sup">승</sup> · <a href="시흥군.html" class="wiki-link">시흥군</a> · <a href="고양군.html" class="wiki-link">고양군</a> · <a href="미금시.html" class="wiki-link">미금시</a><sup class="nav-sup">95</sup> · <a href="남양주군.html" class="wiki-link">남양주군</a><sup class="nav-sup">95</sup> · <a href="송탄시.html" class="wiki-link">송탄시</a><sup class="nav-sup">95</sup> · <a href="평택군.html" class="wiki-link">평택군</a><sup class="nav-sup">95</sup><br>
                                <em><a href="반월면.html" class="wiki-link">반월면</a> · <a href="일산구.html" class="wiki-link">일산구</a> · <a href="태안읍.html" class="wiki-link">태안읍</a> · <a href="동탄면.html" class="wiki-link">동탄면</a> · <a href="오포읍.html" class="wiki-link">오포읍</a></em>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#004EA2] text-white text-center py-2">강원</th>
                            <td class="text-center p-2 leading-relaxed">
                                <div class="inline-block border px-2 mb-1" style="border-color: var(--wiki-link);"><a href="강원도.html" class="wiki-link">강원도</a></div><br>
                                <a href="평강군.html" class="wiki-link">평강군</a><sup class="nav-sup">북</sup> · <a href="김화군.html" class="wiki-link">김화군</a><sup class="nav-sup">북</sup> · <a href="명주군.html" class="wiki-link">명주군</a><sup class="nav-sup">95</sup> · <a href="삼척군.html" class="wiki-link">삼척군</a><sup class="nav-sup">95</sup> · <a href="원주군.html" class="wiki-link">원주군</a><sup class="nav-sup">95</sup> · <a href="춘천군.html" class="wiki-link">춘천군</a><sup class="nav-sup">95</sup>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#004EA2] text-white text-center py-2">충북</th>
                            <td class="text-center p-2 leading-relaxed">
                                <a href="제천군.html" class="wiki-link">제천군</a><sup class="nav-sup">95</sup> · <a href="중원군.html" class="wiki-link">중원군</a><sup class="nav-sup">95</sup> · <a href="청원군.html" class="wiki-link">청원군</a> · <a href="구_청주시.html" class="wiki-link">구 청주시</a>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#004EA2] text-white text-center py-2">충남</th>
                            <td class="text-center p-2 leading-relaxed">
                                <a href="대전시.html" class="wiki-link">대전시</a><sup class="nav-sup">승</sup> · <a href="대덕군.html" class="wiki-link">대덕군</a> · <a href="대천시.html" class="wiki-link">대천시</a><sup class="nav-sup">95</sup> · <a href="공주군.html" class="wiki-link">공주군</a><sup class="nav-sup">95</sup> · <a href="보령군.html" class="wiki-link">보령군</a><sup class="nav-sup">95</sup> · <a href="서산군.html" class="wiki-link">서산군</a><sup class="nav-sup">95</sup> · <a href="아산군.html" class="wiki-link">아산군</a><sup class="nav-sup">95</sup> · <a href="온양시.html" class="wiki-link">온양시</a><sup class="nav-sup">95</sup> · <a href="천안군.html" class="wiki-link">천안군</a><sup class="nav-sup">95</sup> · <a href="연기군.html" class="wiki-link">연기군</a><sup class="nav-sup">승</sup>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#004EA2] text-white text-center py-2">전북</th>
                            <td class="text-center p-2 leading-relaxed">
                                <div class="inline-block border px-2 mb-1" style="border-color: var(--wiki-link);"><a href="전라북도.html" class="wiki-link">전라북도</a></div><br>
                                <a href="김제군.html" class="wiki-link">김제군</a><sup class="nav-sup">95</sup> · <a href="옥구군.html" class="wiki-link">옥구군</a><sup class="nav-sup">95</sup> · <a href="정읍군.html" class="wiki-link">정읍군</a><sup class="nav-sup">95</sup> · <a href="정주시.html" class="wiki-link">정주시</a><sup class="nav-sup">95</sup> · <a href="이리시.html" class="wiki-link">이리시</a><sup class="nav-sup">95</sup> · <a href="익산군.html" class="wiki-link">익산군</a><sup class="nav-sup">95</sup>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#004EA2] text-white text-center py-2">전남</th>
                            <td class="text-center p-2 leading-relaxed">
                                <a href="광주시.html" class="wiki-link">광주시</a><sup class="nav-sup">승</sup> · <a href="광산군.html" class="wiki-link">광산군</a> · <a href="송정시.html" class="wiki-link">송정시</a> · <a href="광양군.html" class="wiki-link">광양군</a><sup class="nav-sup">95</sup> · <a href="나주군.html" class="wiki-link">나주군</a><sup class="nav-sup">95</sup> · <a href="동광양시.html" class="wiki-link">동광양시</a><sup class="nav-sup">95</sup> · <a href="승주군.html" class="wiki-link">승주군</a><sup class="nav-sup">95</sup> · <a href="구_여수시.html" class="wiki-link">구 여수시</a> · <a href="여천군.html" class="wiki-link">여천군</a> · <a href="여천시.html" class="wiki-link">여천시</a>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#004EA2] text-white text-center py-2">경북</th>
                            <td class="text-center p-2 leading-relaxed">
                                <a href="울릉도.html" class="wiki-link">울릉도</a> · <a href="대구시.html" class="wiki-link">대구시</a><sup class="nav-sup">승</sup> · <a href="경산군.html" class="wiki-link">경산군</a><sup class="nav-sup">95</sup> · <a href="경주군.html" class="wiki-link">경주군</a><sup class="nav-sup">95</sup> · <a href="금릉군.html" class="wiki-link">금릉군</a><sup class="nav-sup">95</sup> · <a href="문경군.html" class="wiki-link">문경군</a><sup class="nav-sup">95</sup> · <a href="선산군.html" class="wiki-link">선산군</a><sup class="nav-sup">95</sup> · <a href="안동군.html" class="wiki-link">안동군</a><sup class="nav-sup">95</sup> · <a href="영일군.html" class="wiki-link">영일군</a><sup class="nav-sup">95</sup> · <a href="영천군.html" class="wiki-link">영천군</a><sup class="nav-sup">95</sup> · <a href="영풍군.html" class="wiki-link">영풍군</a><sup class="nav-sup">95</sup> · <a href="점촌시.html" class="wiki-link">점촌시</a><sup class="nav-sup">95</sup><br>
                                <em><a href="내동면.html" class="wiki-link">내동면</a> · <a href="월곡면.html" class="wiki-link">월곡면</a> · <a href="풍서면.html" class="wiki-link">풍서면</a></em>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#004EA2] text-white text-center py-2">경남</th>
                            <td class="text-center p-2 leading-relaxed">
                                <a href="부산시.html" class="wiki-link">부산시</a><sup class="nav-sup">승</sup> · <a href="동래군.html" class="wiki-link">동래군</a> · <a href="거제군.html" class="wiki-link">거제군</a><sup class="nav-sup">95</sup> · <a href="김해군.html" class="wiki-link">김해군</a><sup class="nav-sup">95</sup> · <a href="밀양군.html" class="wiki-link">밀양군</a><sup class="nav-sup">95</sup> · <a href="울산군.html" class="wiki-link">울산군</a><sup class="nav-sup">95</sup> · <a href="장승포시.html" class="wiki-link">장승포시</a><sup class="nav-sup">95</sup> · <a href="진양군.html" class="wiki-link">진양군</a><sup class="nav-sup">95</sup> · <a href="충무시.html" class="wiki-link">충무시</a><sup class="nav-sup">95</sup> · <a href="창원군.html" class="wiki-link">창원군</a><sup class="nav-sup">95</sup> · <a href="통영군.html" class="wiki-link">통영군</a><sup class="nav-sup">95</sup> · <a href="사천군.html" class="wiki-link">사천군</a><sup class="nav-sup">95</sup> · <a href="삼천포시.html" class="wiki-link">삼천포시</a><sup class="nav-sup">95</sup> · <a href="울산시.html" class="wiki-link">울산시</a><sup class="nav-sup">승</sup> · <a href="마산시.html" class="wiki-link">마산시</a> · <a href="진해시.html" class="wiki-link">진해시</a> · <a href="구_창원시.html" class="wiki-link">구 창원시</a><br>
                                <em><a href="원량면.html" class="wiki-link">원량면</a> · <a href="웅상읍.html" class="wiki-link">웅상읍</a> · <a href="울주구.html" class="wiki-link">울주구</a> · <a href="장유면.html" class="wiki-link">장유면</a></em>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#004EA2] text-white text-center py-2">제주</th>
                            <td class="text-center p-2 leading-relaxed">
                                <div class="inline-block border px-2 mb-1" style="border-color: var(--wiki-link);"><a href="제주도_도.html" class="wiki-link">제주도(濟州道)</a></div><br>
                                <a href="제주도_섬.html" class="wiki-link">제주도(濟州島)</a> · <a href="남제주군.html" class="wiki-link">남제주군</a> · <a href="북제주군.html" class="wiki-link">북제주군</a>
                            </td>
                        </tr>
                        <!-- 덕북 / 덕남 추가 구역 -->
                        <tr>
                            <th class="bg-[#004EA2] text-white text-center py-2">덕북</th>
                            <td class="text-center p-2 leading-relaxed" style="background-color: var(--wiki-gray-bg);">
                                <a href="효빈시.html" class="wiki-link">효빈시</a><sup class="nav-sup">승</sup> · <strong style="color: var(--wiki-text);">안천시</strong> · <a href="궁하시.html" class="wiki-link">궁하시</a> · <a href="천성군.html" class="wiki-link">천성군</a> · <a href="강산군.html" class="wiki-link">강산군</a><sup class="nav-sup">95</sup> · <a href="약천군.html" class="wiki-link">약천군</a><sup class="nav-sup">95</sup> · <a href="군양군.html" class="wiki-link">군양군</a><sup class="nav-sup">95</sup> · <a href="빈성군.html" class="wiki-link">빈성군</a><sup class="nav-sup">95</sup> · <a href="압일군.html" class="wiki-link">압일군</a><sup class="nav-sup">95</sup><br>
                                <em><a href="안천읍.html" class="wiki-link">안천읍</a> · <a href="이자읍.html" class="wiki-link">이자읍</a> · <a href="사능면.html" class="wiki-link">사능면</a> · <a href="어간면.html" class="wiki-link">어간면</a> · <a href="당가면.html" class="wiki-link">당가면</a> · <a href="중수면.html" class="wiki-link">중수면</a> · <a href="고송면.html" class="wiki-link">고송면</a> · <a href="청엽면.html" class="wiki-link">청엽면</a> · <a href="창전면.html" class="wiki-link">창전면</a></em>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#004EA2] text-white text-center py-2">덕남</th>
                            <td class="text-center p-2 leading-relaxed" style="background-color: var(--wiki-gray-bg);">
                                <a href="덕산군.html" class="wiki-link">덕산군</a><sup class="nav-sup">95</sup> · <a href="낙산군.html" class="wiki-link">낙산군</a><sup class="nav-sup">95</sup> · <a href="방천군.html" class="wiki-link">방천군</a><sup class="nav-sup">95</sup> · <a href="비원군.html" class="wiki-link">비원군</a><sup class="nav-sup">95</sup> · <a href="하산군.html" class="wiki-link">하산군</a><sup class="nav-sup">95</sup>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center p-2" style="background-color: var(--wiki-gray-bg);">
                                <a href="일제강점기의_폐지된_행정구역.html" class="wiki-link">일제강점기의 폐지된 행정구역</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </details>
        </div>
    `;

    // 현재 실행 중인 스크립트 태그를 찾아서 바로 그 위치 뒤에 HTML을 삽입합니다.
    const currentScript = document.currentScript;
    if (currentScript) {
        currentScript.insertAdjacentHTML('afterend', navHtml);
    } else {
        // Fallback for older browsers
        document.write(navHtml);
    }
})();