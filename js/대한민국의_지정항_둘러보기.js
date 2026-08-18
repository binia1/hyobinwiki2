(function() {
    const navHtml = `
        <div class="border-2 border-[#ccc] rounded overflow-hidden mb-8 mt-4" style="background-color: var(--wiki-bg);">
            <details class="group" open>
                <summary class="cursor-pointer list-none text-center p-0 m-0 outline-none">
                    <div class="relative flex items-center justify-center p-3 border-b border-[#ccc]" style="background-color: var(--wiki-bg); background-image: linear-gradient(110deg, #000 15px, transparent 16px, transparent 30px, #000 31px, #000 45px, transparent 46px), linear-gradient(-70deg, #003478 20px, transparent 21px), linear-gradient(-70deg, #c60c30 40px, transparent 41px); background-repeat: no-repeat; background-position: left top, right top, right top;">
                        <span class="font-bold text-lg flex items-center gap-2" style="color: var(--wiki-text);">
                            <img src="이미지/대한민국_국기.webp" class="w-6 border" style="border-color: var(--wiki-border);" alt="태극기" onerror="this.style.display='none'; this.parentNode.insertAdjacentHTML('afterbegin', '🇰🇷');"> 
                            대한민국의 지정항 ⚓
                        </span>
                    </div>
                    <div class="py-1 text-sm border-b font-bold" style="background-color: var(--wiki-gray-bg); border-color: var(--wiki-border); color: var(--wiki-link);">
                        <span class="group-open:hidden">[ 펼치기 ]</span>
                        <span class="hidden group-open:inline">[ 접기 ]</span>
                    </div>
                </summary>
                
                <table class="w-full text-[0.85rem] m-0 border-none table-fixed" style="border-collapse: collapse;">
                    <colgroup>
                        <col style="width: 15%;">
                        <col style="width: 85%;">
                    </colgroup>
                    <style>
                        .port-nav-table th { border: 1px solid var(--wiki-border); vertical-align: middle; }
                        .port-nav-table td { border: 1px solid var(--wiki-border); vertical-align: middle; }
                        .port-red { color: #EE0022; }
                        .port-blue { color: #0055AA; }
                    </style>
                    <tbody class="port-nav-table">
                        <!-- 무역항 -->
                        <tr>
                            <th colspan="2" class="bg-[#c2cadd] text-[#333] text-center py-1.5 font-bold text-[0.95rem]">무역항</th>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">서해안</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-blue">인천항</a> · 
                                <a href="#" class="wiki-link port-blue">인천신항</a> · 
                                <a href="#" class="wiki-link port-blue">경인항</a> · 
                                <a href="#" class="wiki-link port-blue">서울항</a> · 
                                <a href="#" class="wiki-link port-blue">평택·당진항</a> · 
                                <a href="#" class="wiki-link port-blue">대산항</a> · 
                                <a href="#" class="wiki-link port-red">태안항</a> · 
                                <a href="#" class="wiki-link port-blue">보령항</a> · 
                                <a href="#" class="wiki-link port-blue">장항항</a> · 
                                <a href="#" class="wiki-link port-blue">목포항</a> · 
                                <a href="#" class="wiki-link port-blue">새만금항</a> · 
                                <strong><a href="효빈항 국제여객터미널.html" class="wiki-link">효빈항</a></strong> · 
                                <strong><a href="강주항.html" class="wiki-link">강주항</a></strong> · 
                                <strong><a href="서진항.html" class="wiki-link">서진항</a></strong> · 
                                <strong><a href="군천항.html" class="wiki-link">군천항</a></strong> ·  
                                <strong><a href="서해항.html" class="wiki-link">서해항</a></strong>

                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">남해안</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-blue">부산항</a> · 
                                <a href="#" class="wiki-link port-blue">부산신항</a> · 
                                <a href="#" class="wiki-link port-red">진해항</a> · 
                                <a href="#" class="wiki-link port-blue">마산항</a> · 
                                <a href="#" class="wiki-link port-blue">고현항</a> · 
                                <a href="#" class="wiki-link port-red">옥포항</a> · 
                                <a href="#" class="wiki-link port-red">장승포항</a> · 
                                <a href="#" class="wiki-link port-red">통영항</a> · 
                                <a href="#" class="wiki-link port-red">삼천포항</a> · 
                                <a href="#" class="wiki-link port-red">하동항</a> · 
                                <a href="#" class="wiki-link port-blue">여수항</a> · 
                                <a href="#" class="wiki-link port-blue">광양항</a> · 
                                <a href="#" class="wiki-link port-blue">완도항</a> · 
                                <strong><a href="궁하항.html" class="wiki-link">궁하항</a></strong> · 
                                <strong><a href="방산항.html" class="wiki-link">방산항</a></strong> · 
                                <strong><a href="운진항.html" class="wiki-link">운진항</a></strong>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">동해안</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-red">속초항</a> · 
                                <a href="#" class="wiki-link port-red">옥계항</a> · 
                                <a href="#" class="wiki-link port-red">묵호항</a> · 
                                <a href="#" class="wiki-link port-blue">동해항</a> · 
                                <a href="#" class="wiki-link port-blue">삼척항</a> · 
                                <a href="#" class="wiki-link port-blue">호산항</a> · 
                                <a href="#" class="wiki-link port-blue">포항항</a> · 
                                <a href="#" class="wiki-link port-blue">울산항</a> · 
                                <a href="#" class="wiki-link port-blue">울산신항</a> · 
                                <a href="#" class="wiki-link port-blue">장생포항</a>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">제주도</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-blue">제주항</a> · 
                                <a href="#" class="wiki-link port-red">서귀포항</a>
                            </td>
                        </tr>
                        
                        <!-- 연안항 -->
                        <tr>
                            <th colspan="2" class="bg-[#c2cadd] text-[#333] text-center py-1.5 font-bold text-[0.95rem]">연안항</th>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">서해안</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-red">격렬비열도항</a> · 
                                <a href="#" class="wiki-link port-red">용기포항</a> · 
                                <a href="#" class="wiki-link port-blue">연평도항</a> · 
                                <a href="#" class="wiki-link port-blue">대천항</a> · 
                                <a href="#" class="wiki-link port-red">마량진항</a> · 
                                <a href="#" class="wiki-link port-red">상왕등도항</a> · 
                                <a href="#" class="wiki-link port-blue">송공항</a> · 
                                <a href="#" class="wiki-link port-red">대흑산도항</a> · 
                                <a href="#" class="wiki-link port-red">홍도항</a> · 
                                <a href="#" class="wiki-link port-red">가거항리항</a> · 
                                <strong><a href="전산항.html" class="wiki-link">전산항</a></strong> · 
                                <strong><a href="비천항.html" class="wiki-link">비천항</a></strong>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">남해안</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-blue">부산남항</a> · 
                                <a href="#" class="wiki-link port-red">중화항</a> · 
                                <a href="#" class="wiki-link port-red">국도항</a> · 
                                <a href="#" class="wiki-link port-blue">거문도항</a> · 
                                <a href="#" class="wiki-link port-red">나로도항</a> · 
                                <a href="#" class="wiki-link port-red">녹동신항</a> · 
                                <a href="#" class="wiki-link port-red">강진항</a> · 
                                <a href="#" class="wiki-link port-blue">화흥포항</a> · 
                                <a href="#" class="wiki-link port-blue">땅끝항</a> · 
                                <a href="#" class="wiki-link port-blue">진도항</a> · 
                                <strong><a href="마진항.html" class="wiki-link">마진항</a></strong>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">동해안</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-blue">주문진항</a> · 
                                <a href="#" class="wiki-link port-red">울릉항</a> · 
                                <a href="#" class="wiki-link port-red">후포항</a> · 
                                <a href="#" class="wiki-link port-blue">강구항</a> · 
                                <a href="#" class="wiki-link port-blue">구룡포항</a>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">제주도</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-red">추자항</a> · 
                                <a href="#" class="wiki-link port-red">애월항</a> · 
                                <a href="#" class="wiki-link port-red">한림항</a> · 
                                <a href="#" class="wiki-link port-red">화순항</a> · 
                                <a href="#" class="wiki-link port-blue">성산항</a>
                            </td>
                        </tr>

                        <!-- 국가어항 -->
                        <tr>
                            <th colspan="2" class="bg-[#c2cadd] text-[#333] text-center py-1.5 font-bold text-[0.95rem]">국가어항</th>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">서해안</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-red">선진포항</a> · 어류정항 · 대명항 · 소래포구항 · 덕적도항 · 울도항 · 궁평항 · 장고항 · 삼길포항 · 안흥항 · 영목항 · 모항항 · 남당항 · 오천항 · 외연도항 · 무창포항 · 홍원항 · 연도항(군산) · 어청도항 · 격포항 · 위도항 · 구시포항 · 계마항 · 안마항 · 전장포항 · 삽진항 · 원평항 · 우이도항 · 가거도항
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">남해안</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-red">서거차항</a> · 서망항 · 수품항 · 초평항 · 어란진항 · 보옥항 · 이목항 · 소안항 · 마량항 · 청산도항 · 여서항 · 득암항 · 회진항 · 도장항 · 사동항(완도) · 초도항 · 녹동항 · 풍남항 · 시산항 · 발포항 · 여호항 · 낭도항 · 국동항 · 돌산항 · 안도항 · 연도항(여수) · 노량항 · 미조항 · 물건항 · 신수항 · 맥전포항 · 능양항 · 남포항 · 삼덕항 · 욕지항 · 호두항 · 대포근포항 · 매물도항 · 다대다포항 · 구조라항 · 지세포항 · 능포항 · 외포항 · 광암항 · 원전항 · 천성항 · <a href="#" class="wiki-link port-blue">다대포항</a> · 
                                <strong><a href="어간항.html" class="wiki-link">어간항</a></strong> · 
                                <strong><a href="낙주항.html" class="wiki-link">낙주항</a></strong>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">동해안</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-red">대변항</a> · 방어진항 · 정자항 · <a href="#" class="wiki-link port-blue">읍천항</a> · <a href="#" class="wiki-link port-blue">감포항</a> · 양포항 · 대보항 · 구계항 · 축산항 · 대진항(영덕) · 구산항 · 오산항 · 죽변항 · 남양항 · 사동항(울릉) · 저동항 · 현포항 · 임원항 · 장호항 · 궁촌항 · 덕산항 · 금진항 · 강릉항 · 사천진항 · 남애항 · 수산항 · 대포항 · 아야진항 · 공현진항 · 거진항 · 대진항(고성)
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-[#f5f5f5] text-center py-2 text-[#333] font-bold">제주도</th>
                            <td class="text-left p-2.5 leading-relaxed">
                                <a href="#" class="wiki-link port-red">도두항</a> · 모슬포항 · 위미항 · 김녕항 · 신양항
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center p-2.5 bg-white text-[0.85rem] text-[#333] font-bold">
                                항만법 제3조(항만의 구분 및 지정)와 동법 시행령 제2조(항만의 명칭 등)에 따른 구분
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