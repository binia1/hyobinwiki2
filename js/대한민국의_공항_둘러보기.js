(function() {
    const navHtml = `
        <div class="border-2 border-[#ccc] rounded overflow-hidden mb-8 mt-4" style="background-color: var(--wiki-bg);">
            <details class="group" open>
                <summary class="cursor-pointer list-none text-center p-0 m-0 outline-none">
                    <div class="relative flex items-center justify-center p-3 border-b border-[#ccc]" style="background-color: var(--wiki-bg); background-image: linear-gradient(110deg, #000 15px, transparent 16px, transparent 30px, #000 31px, #000 45px, transparent 46px), linear-gradient(-70deg, #003478 20px, transparent 21px), linear-gradient(-70deg, #c60c30 40px, transparent 41px); background-repeat: no-repeat; background-position: left top, right top, right top;">
                        <span class="font-bold text-lg flex items-center gap-2" style="color: var(--wiki-text);">
                            <img src="이미지/대한민국_국기.webp" class="w-6 border" style="border-color: var(--wiki-border);" alt="태극기" onerror="this.style.display='none'; this.parentNode.insertAdjacentHTML('afterbegin', '🇰🇷');"> 
                            대한민국의 공항
                        </span>
                    </div>
                    <div class="py-1 text-sm border-b font-bold" style="background-color: var(--wiki-gray-bg); border-color: var(--wiki-border); color: var(--wiki-link);">
                        <span class="group-open:hidden">[ 펼치기 ]</span>
                        <span class="hidden group-open:inline">[ 접기 ]</span>
                    </div>
                </summary>
                
                <table class="w-full text-[0.85rem] m-0 border-none table-fixed" style="border-collapse: collapse;">
                    <colgroup>
                        <col style="width: 18%;">
                        <col style="width: 82%;">
                    </colgroup>
                    <style>
                        .airport-nav-table th { border: 1px solid var(--wiki-border); vertical-align: middle; }
                        .airport-nav-table td { border: 1px solid var(--wiki-border); vertical-align: middle; }
                        .sq-army { color: #7BA542; } /* 육군 */
                        .sq-navy { color: #173679; } /* 해군 */
                        .sq-af { color: #569CE2; }   /* 공군 */
                        .sq-usfk { color: #8A5A35; } /* 주한미군 */
                    </style>
                    <tbody class="airport-nav-table">
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">중추 공항</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="인천국제공항.html" class="wiki-link">인천</a>(서울)
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">거점 공항</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="김포국제공항.html" class="wiki-link">김포</a>(서울)<span class="sq-af">■</span><span class="sq-usfk">■</span> · 
                                <a href="김해국제공항.html" class="wiki-link">김해</a>(부산)<span class="sq-af">■</span><span class="sq-usfk">■</span> · 
                                <a href="제주국제공항.html" class="wiki-link">제주</a> · 
                                <a href="대구국제공항.html" class="wiki-link">대구</a><span class="sq-af">■</span><span class="sq-usfk">■</span> · 
                                <a href="청주국제공항.html" class="wiki-link">청주</a><span class="sq-af">■</span><span class="sq-usfk">■</span> · 
                                <a href="무안국제공항.html" class="wiki-link">무안</a>¹ · 
                                <strong><a href="효빈국제공항.html" class="wiki-link">효빈</a>(기도)</strong>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">일반 공항</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="광주공항.html" class="wiki-link">광주</a><span class="sq-af">■</span><span class="sq-usfk">■</span> · 
                                <a href="양양국제공항.html" class="wiki-link">양양</a> · 
                                <a href="울산공항.html" class="wiki-link">울산</a> · 
                                <a href="여수공항.html" class="wiki-link">여수</a> · 
                                <a href="포항경주공항.html" class="wiki-link">포항경주</a><span class="sq-navy">■</span><span class="sq-usfk">■</span> · 
                                <a href="사천공항.html" class="wiki-link">사천</a>(진주)<span class="sq-af">■</span> · 
                                <a href="군산공항.html" class="wiki-link">군산</a><span class="sq-af">■</span><span class="sq-usfk">■</span> · 
                                <a href="원주공항.html" class="wiki-link">원주</a>(횡성)<span class="sq-af">■</span>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">도심공항터미널</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="서울역_도심공항터미널.html" class="wiki-link">서울역</a> · 
                                <a href="광명역_도심공항터미널.html" class="wiki-link">광명역</a>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">시설·기타 비행장</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="울진비행훈련원.html" class="wiki-link">울진</a> · 
                                <a href="정석비행장.html" class="wiki-link">정석</a> · 
                                <a href="태안비행장.html" class="wiki-link">태안</a> · 
                                <a href="수색비행장.html" class="wiki-link">수색</a><span class="sq-army">■</span> · 
                                <a href="잠실_헬리패드.html" class="wiki-link">잠실 헬리패드</a> · 
                                운북 · 하늘누리 비행학교 · 산이
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">군 전용 공항</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                서울(성남)<span class="sq-af">■</span><span class="sq-usfk">■</span> · 
                                수원<span class="sq-af">■</span><span class="sq-usfk">■</span> · 
                                오산<span class="sq-af">■</span><span class="sq-usfk">■</span> · 
                                평택<span class="sq-usfk">■</span> · 
                                이천<span class="sq-army">■</span> · 
                                계룡<span class="sq-af">■</span> · 
                                충주<span class="sq-af">■</span> · 
                                성무<span class="sq-af">■</span> · 
                                예천<span class="sq-af">■</span> · 
                                강릉<span class="sq-af">■</span> · 
                                속초<span class="sq-army">■</span> · 
                                전주<span class="sq-army">■</span> · 
                                진해<span class="sq-navy">■</span> · 
                                목포<span class="sq-navy">■</span> · 
                                캠프 워커(대구)<span class="sq-usfk">■</span> · 
                                현리(인제)<span class="sq-army">■</span> · 
                                용인<span class="sq-army">■</span> · 
                                <strong><a href="효빈공군기지.html" class="wiki-link">안천</a></strong><span class="sq-af">■</span> · 
                                <strong><a href="방산비행장.html" class="wiki-link">방산</a></strong><span class="sq-navy">■</span>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">공사 중인 공항</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="울릉공항.html" class="wiki-link">울릉</a> · 
                                <a href="가덕도신공항.html" class="wiki-link">가덕도</a>(부산)
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">착공 예정 공항</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="대구경북신공항.html" class="wiki-link">대구경북</a><span class="sq-af">■</span><span class="sq-usfk">■</span> · 
                                <a href="흑산공항.html" class="wiki-link">흑산</a> · 
                                <a href="제주제2공항.html" class="wiki-link">제주2</a> · 
                                <a href="백령공항.html" class="wiki-link">백령</a><span class="sq-af">■</span>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">추진 중인 공항</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                경기남부(미정)<span class="sq-af">■</span> · 
                                포천<span class="sq-army">■</span> · 
                                서산<span class="sq-af">■</span> · 
                                새만금(군산)
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">무산된 공항</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                김제 · 
                                김해2<span class="sq-af">■</span><span class="sq-usfk">■</span> · 
                                밀양
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-black text-center py-2 text-white font-bold">폐쇄 공항</th>
                            <td class="text-left p-2.5 leading-relaxed text-gray-500">
                                여의도(서울) · 수영(부산) · 알뜨르(제주) · 충주(목행동) · 대전<span class="sq-army">■</span><span class="sq-af">■</span> · 전주(송천동)<span class="sq-army">■</span> · 캠프 페이지(춘천)<span class="sq-usfk">■</span> · 코엑스(도심공항)
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center p-3 bg-white text-[0.85rem]">
                                <div class="font-bold mb-1 text-[#333]">
                                    군(軍)공항: <span class="sq-army">■</span> 육군, <span class="sq-navy">■</span> 해군, <span class="sq-af">■</span> 공군, <span class="sq-usfk">■</span> 주한미군
                                </div>
                                <div class="text-[#333]">
                                    ¹ 제주항공 2216편 활주로 이탈 사고로 인해 무기한 운항 중단.
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </details>
        </div>
    `;

    // 현재 스크립트 위치 뒤에 삽입
    const currentScript = document.currentScript;
    if (currentScript) {
        currentScript.insertAdjacentHTML('afterend', navHtml);
    } else {
        document.write(navHtml);
    }
})();