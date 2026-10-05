(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("shizuoka-infobox-container");
        if (!container) return;

        // 테마 색상 (시즈오카현)
        const themeColor = "#033570"; 

        // 정당별 공식 상징색 (뱃지용)
        const partyColors = {
            "자유민주당": "#3CA324", // 자민당 초록
            "입헌민주당": "#004098", // 입민당 파랑
            "공명당": "#EB6EA5", // 공명당 분홍
            "국민민주당": "#F5A500", // 국민민주당 노랑/주황
            "무소속": "#808080"  // 무소속 회색
        };

        // 뱃지 생성 헬퍼 함수
        const createBadge = (partyName) => {
            const color = partyColors[partyName] || "#000000";
            return `<span class="inline-block px-2 py-1 text-xs font-bold text-white rounded-md shadow-sm whitespace-nowrap" style="background-color: ${color};">${partyName}</span>`;
        };

        container.innerHTML = `
            <table class="float-right ml-5 mb-5 w-full max-w-[430px] border-collapse bg-white text-sm border-2 shadow-md" style="border-color: ${themeColor};">
                <colgroup>
                    <col style="width: 25%;">
                    <col style="width: 25%;">
                    <col style="width: 25%;">
                    <col style="width: 25%;">
                </colgroup>
                <tbody>
                    <!-- 타이틀 -->
                    <tr>
                        <td colspan="4" class="p-2 text-center border-b border-gray-300 bg-gray-50 text-gray-900">
                            <span class="text-lg">🇯🇵</span> <a href="일본.html" class="text-blue-600 hover:underline">일본</a> <strong><a href="현(행정구역).html#일본" class="text-gray-900 hover:underline">현(県)</a></strong>
                        </td>
                    </tr>
                    
                    <!-- 현 문장 및 이름 -->
                    <tr>
                        <td colspan="2" class="p-4 border-r border-b border-gray-300 text-center align-middle">
                            <img src="이미지/svg/시즈오카현_문장.svg" alt="시즈오카현 문장" class="mx-auto h-[65px] w-auto object-contain" onerror="this.style.display='none'">
                        </td>
                        <td colspan="2" class="p-4 border-b border-gray-300 text-center align-middle leading-tight">
                            <strong class="text-lg block mb-1">시즈오카현</strong>
                            <span class="inline-block px-2 py-0.5 mb-1 text-xs text-gray-500 bg-gray-100 border border-gray-200 rounded">[틀: ja]</span><br/>
                            <span class="text-xs text-gray-600">Shizuoka Prefecture</span>
                        </td>
                    </tr>

                    <!-- 구글 지도 -->
                    <tr>
                        <td colspan="4" class="p-0 border-b border-gray-300 h-64">
                            <iframe src="https://maps.google.com/maps?q=시즈오카현&t=&z=11&ie=UTF8&iwloc=&output=embed" class="w-full h-full border-none"></iframe>
                        </td>
                    </tr>

                    <!-- 일반 정보 -->
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">현청 소재지</td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center align-middle">
                            <a href="시즈오카시.html" class="text-[#0275d8] hover:underline">시즈오카시</a> <a href="아오이구.html" class="text-[#0275d8] hover:underline">아오이구</a> 오테마치 9-6
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">하위 행정구역</td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center align-middle">23시 12정</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">지방</td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center align-middle">
                            <a href="주부(일본).html" class="text-[#0275d8] hover:underline">주부</a>, <a href="도카이.html#s-1" class="text-[#0275d8] hover:underline">도카이</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">면적</td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center align-middle">7,777.42㎢</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">인구</td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center align-middle">3,443,104명</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">인구밀도</td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center align-middle">456명/㎢</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">GDP(명목)</td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center align-middle">약 $1,582억 <span class="text-xs text-gray-500">(2018)</span></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">1인당 GDP</td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center align-middle">$43,281 <span class="text-xs text-gray-500">(2018)</span></td>
                    </tr>

                    <!-- 정치/행정 정보 -->
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">현지사</td>
                        <td class="p-2 border border-gray-300 text-center align-middle">${createBadge('무소속')}</td>
                        <td class="p-2 border border-gray-300 text-center align-middle leading-tight">스즈키 야스토모<br/><span class="text-xs text-gray-500">(鈴木康友, 초선)</span></td>
                    </tr>

                    <!-- 현의회 -->
                    <tr>
                        <td colspan="2" rowspan="4" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">현의회<br/><span class="text-xs font-normal">(68석)</span></td>
                        <td class="p-2 border border-gray-300 text-center align-middle">${createBadge('자유민주당')}</td>
                        <td class="p-2 border border-gray-300 text-center align-middle">41석</td>
                    </tr>
                    <tr>
                        <td class="p-2 border border-gray-300 text-center align-middle">${createBadge('입헌민주당')}</td>
                        <td class="p-2 border border-gray-300 text-center align-middle">17석</td>
                    </tr>
                    <tr>
                        <td class="p-2 border border-gray-300 text-center align-middle">${createBadge('공명당')}</td>
                        <td class="p-2 border border-gray-300 text-center align-middle">5석</td>
                    </tr>
                    <tr>
                        <td class="p-2 border border-gray-300 text-center align-middle">${createBadge('무소속')}</td>
                        <td class="p-2 border border-gray-300 text-center align-middle">5석</td>
                    </tr>

                    <!-- 중의원 -->
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">중의원<br/><span class="text-xs font-normal">(8/465석)</span></td>
                        <td class="p-2 border border-gray-300 text-center align-middle">${createBadge('자유민주당')}</td>
                        <td class="p-2 border border-gray-300 text-center align-middle">8석</td>
                    </tr>

                    <!-- 참의원 -->
                    <tr>
                        <td colspan="2" rowspan="3" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};"><a href="일본_참의원.html" class="text-white hover:underline">참의원</a><br/><span class="text-xs font-normal">(4/245석)</span></td>
                        <td class="p-2 border border-gray-300 text-center align-middle">${createBadge('자유민주당')}</td>
                        <td class="p-2 border border-gray-300 text-center align-middle">2석</td>
                    </tr>
                    <tr>
                        <td class="p-2 border border-gray-300 text-center align-middle">${createBadge('국민민주당')}</td>
                        <td class="p-2 border border-gray-300 text-center align-middle">1석</td>
                    </tr>
                    <tr>
                        <td class="p-2 border border-gray-300 text-center align-middle">${createBadge('무소속')}</td>
                        <td class="p-2 border border-gray-300 text-center align-middle">1석</td>
                    </tr>

                    <!-- 상징 -->
                    <tr>
                        <td rowspan="3" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">상징</td>
                        <td class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">현화</td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center align-middle"><a href="철쭉.html" class="text-[#0275d8] hover:underline">철쭉</a></td>
                    </tr>
                    <tr>
                        <td class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">현목</td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center align-middle"><a href="목서.html" class="text-[#0275d8] hover:underline">목서</a></td>
                    </tr>
                    <tr>
                        <td class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};">현조</td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center align-middle"><a href="긴꼬리딱새.html" class="text-[#0275d8] hover:underline">긴꼬리딱새</a></td>
                    </tr>

                    <!-- 기타 정보 -->
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};"><a href="지역번호/외국.html#일본" class="text-white hover:underline">지역번호</a></td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold align-middle">053~055, 0550, 0557, 0558</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold text-white align-middle" style="background-color: ${themeColor};"><a href="ISO_3166-2.html" class="text-white hover:underline">ISO 3166-2</a></td>
                        <td colspan="2" class="p-2 border border-gray-300 text-center font-bold align-middle">JP-22</td>
                    </tr>

                    <!-- 하단 외부 링크 아이콘 -->
                    <tr>
                        <td colspan="4" class="p-3 border border-gray-300 bg-gray-50 text-center align-middle">
                            <div class="flex justify-center items-center gap-3">
                                <a href="http://www.pref.shizuoka.jp/.html" class="hover:opacity-75 transition-opacity"><img src="이미지/svg/홈페이지_아이콘.svg" class="w-6 h-6" onerror="this.style.display='none'"></a>
                                <a href="https://shizuokaseoul.com/.html" class="hover:opacity-75 transition-opacity"><img src="이미지/svg/홈페이지_아이콘.svg" class="w-6 h-6" onerror="this.style.display='none'"></a>
                                <a href="https://blog.naver.com/goshizuoka/.html" class="hover:opacity-75 transition-opacity"><img src="이미지/svg/네이버_블로그_아이콘.svg" class="w-6 h-6" onerror="this.style.display='none'"></a>
                                <a href="https://page.line.me/170nzbag?openQrModal=true.html" class="hover:opacity-75 transition-opacity"><img src="이미지/svg/라인_아이콘.svg" class="w-6 h-6" onerror="this.style.display='none'"></a>
                                <a href="https://www.youtube.com/channel/UCfLiXKHJ3EdMBDUeLjzmAvA.html" class="hover:opacity-75 transition-opacity"><img src="이미지/svg/유튜브_아이콘.svg" class="w-6 h-6" onerror="this.style.display='none'"></a>
                                <a href="https://instagram.com/fujippy_shizuokaken.html" class="hover:opacity-75 transition-opacity"><img src="이미지/svg/인스타그램_아이콘.svg" class="w-6 h-6" onerror="this.style.display='none'"></a>
                                <a href="https://www.facebook.com/iine.pref.shizuoka.html" class="hover:opacity-75 transition-opacity"><img src="이미지/svg/페이스북_아이콘.svg" class="w-6 h-6" onerror="this.style.display='none'"></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;
    });
})();