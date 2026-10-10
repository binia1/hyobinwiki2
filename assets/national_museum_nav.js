document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("national-museum-nav-container");
    if (!container) return;

    // 토글 함수 전역 스코프 등록
    window.toggleNationalMuseum = function(bodyId, btnId) {
        const body = document.getElementById(bodyId);
        const btn = document.getElementById(btnId);
        if (body.style.display === "none") {
            body.style.display = "table-row-group";
            btn.textContent = "[ 접기 ]";
        } else {
            body.style.display = "none";
            btn.textContent = "[ 펼치기 ]";
        }
    };

    const template = `
        <div class="border border-gray-400 bg-white rounded-sm shadow-sm overflow-hidden text-sm">
            <!-- 상단 그래디언트 헤더 -->
            <div class="relative py-2 px-3 text-center flex items-center justify-center font-bold text-black border-b border-gray-400" 
                 style="background-image: linear-gradient(120deg, #fff 5%, #000 5.1% 9%, #fff 9.1% 10%, #000 10.1% 14%, #fff 14.1% 15%, #000 15.1% 19%, #fff 19.1% 81%, #cd313a 81.1% 90%, #0047a0 90.1%);">
                <span class="inline-flex w-[27px] p-[1px] bg-black/20 mr-2 align-middle">
                    <img src="이미지/svg/한국_국기.svg" class="w-full h-auto" onerror="this.style.display='none'" alt="대한민국 국기">
                </span>
                <span class="text-black bg-white/70 px-2 py-0.5 rounded-sm">대한민국의 국립박물관</span>
            </div>

            <!-- 토글 버튼 영역 -->
            <div class="text-center py-1.5 bg-[#f8f9fa] border-b border-gray-300 text-xs">
                <button id="toggle-national-museum-btn" class="text-gray-600 hover:text-black font-semibold focus:outline-none" onclick="toggleNationalMuseum('national-museum-body', 'toggle-national-museum-btn')">
                    [ 접기 ]
                </button>
            </div>

            <!-- 본문 테이블 -->
            <table class="w-full border-collapse text-center">
                <tbody id="national-museum-body">
                    
                    <!-- 국회 -->
                    <tr>
                        <th colspan="2" class="bg-[#580009] text-[#CFA547] font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/국회휘장.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 국회
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300">
                            <a href="국회박물관.html" class="text-black hover:underline">국회박물관</a>
                        </td>
                    </tr>

                    <!-- 국가정보원 -->
                    <tr>
                        <th colspan="2" class="bg-[#06377a] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/국가정보원_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 국가정보원
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300">
                            <a href="안보전시관.html" class="text-black hover:underline">안보전시관</a>
                        </td>
                    </tr>

                    <!-- 재정경제부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 재정경제부
                        </th>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="w-[30%] bg-[#3777bc] text-white font-bold py-1 border-r border-gray-300">한국조폐공사</td>
                        <td class="w-[70%] py-1 px-2 text-left bg-white"><a href="한국조폐공사 화폐박물관.html" class="text-[#0275d8] hover:underline">한국조폐공사 화폐박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">관세청</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="관세박물관.html" class="text-[#0275d8] hover:underline">관세박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">국세청</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립조세박물관.html" class="text-[#0275d8] hover:underline">국립조세박물관</a></td>
                    </tr>

                    <!-- 과학기술정보통신부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 과학기술정보통신부
                        </th>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#2056ae] text-white font-bold py-1 border-r border-gray-300">국립과학관◈</td>
                        <td class="py-1 px-2 text-left leading-relaxed bg-white text-gray-700">
                            <a href="국립중앙과학관.html" class="text-[#0275d8] hover:underline">대전(중앙)</a> · 
                            <a href="국립과천과학관.html" class="text-[#0275d8] hover:underline">과천</a> · 
                            <a href="국립어린이과학관.html" class="text-[#0275d8] hover:underline">서울(어린이)</a> · 
                            <a href="국립광주과학관.html" class="text-[#0275d8] hover:underline">광주</a> · 
                            <a href="국립대구과학관.html" class="text-[#0275d8] hover:underline">대구</a> · 
                            <a href="국립부산과학관.html" class="text-[#0275d8] hover:underline">부산</a> · 
                            <a href="국립강원전문과학관.html" class="text-[#0275d8] hover:underline">원주(강원)</a> · 
                            <a href="국립효빈과학관.html" class="text-[#0275d8] font-bold hover:underline">효빈</a> · 
                            <a href="국립울산탄소중립전문과학관.html" class="text-[#0275d8] hover:underline">울산</a><sup class="text-xs text-gray-500"> 2027년 예정</sup>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#0e3859] text-white font-bold py-1 border-r border-gray-300">한국지질자원연구원</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="지질박물관.html" class="text-[#0275d8] hover:underline">지질박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#2A5CAA] text-white font-bold py-1 border-r border-gray-300">한국항공우주연구원</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="우주과학관.html" class="text-[#0275d8] hover:underline">우주과학관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#ff0d01] text-white font-bold py-1 border-r border-gray-300">우정사업본부<br><span class="text-xs font-normal">/서울중앙우체국</span></td>
                        <td class="py-1 px-2 text-left bg-white"><a href="우표박물관.html" class="text-[#0275d8] hover:underline">우표박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#ff0d01] text-white font-bold py-1 border-r border-gray-300">우정사업본부<br><span class="text-xs font-normal">/우정공무원교육원</span></td>
                        <td class="py-1 px-2 text-left bg-white"><a href="우정박물관.html" class="text-[#0275d8] hover:underline">우정박물관</a></td>
                    </tr>

                    <!-- 외교부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 외교부
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300">
                            <a href="외교사료관.html" class="text-black hover:underline">외교사료관</a>
                        </td>
                    </tr>

                    <!-- 통일부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 통일부
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300">
                            <a href="국립6.25전쟁납북자기념관.html" class="text-black hover:underline">국립6.25전쟁납북자기념관</a>
                        </td>
                    </tr>

                    <!-- 법무부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 법무부
                        </th>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#1e4a71] text-white font-bold py-1 border-r border-gray-300">검찰청</td>
                        <td class="py-1 px-2 text-left bg-white text-gray-700">
                            <a href="검찰역사관.html" class="text-[#0275d8] hover:underline">검찰역사관</a> · 
                            <a href="국가형사사법기록관.html" class="text-[#0275d8] hover:underline">국가형사사법기록관</a>
                        </td>
                    </tr>

                    <!-- 국방부 -->
                    <tr>
                        <th colspan="2" class="bg-[#c5003e] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_국방부_심벌.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 국방부
                        </th>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#ee7800] text-white font-bold py-1 border-r border-gray-300">전쟁기념사업회</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="전쟁기념관.html" class="text-[#0275d8] hover:underline">전쟁기념관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#008940] text-white font-bold py-1 border-r border-gray-300">육군사관학교</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="육군박물관.html" class="text-[#0275d8] hover:underline">육군박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#000080] text-white font-bold py-1 border-r border-gray-300">해군사관학교</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="해군사관학교박물관.html" class="text-[#0275d8] hover:underline">해군사관학교박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#34acf1] text-white font-bold py-1 border-r border-gray-300">공군사관학교</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립공군박물관.html" class="text-[#0275d8] hover:underline">국립공군박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#F62400] text-white font-bold py-1 border-r border-gray-300">육군부사관학교</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립전사박물관.html" class="text-[#0275d8] hover:underline">국립전사박물관</a></td>
                    </tr>

                    <!-- 행정안전부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 행정안전부
                        </th>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#2350a9] text-white font-bold py-1 border-r border-gray-300">경찰청</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립경찰박물관.html" class="text-[#0275d8] hover:underline">국립경찰박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#e8402d] text-white font-bold py-1 border-r border-gray-300">소방청</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립소방박물관.html" class="text-[#0275d8] hover:underline">국립소방박물관</a><sup class="text-xs text-gray-500"> 2027년 예정</sup></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#005249] text-white font-bold py-1 border-r border-gray-300">일제강제동원피해자지원재단</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립일제강제동원역사관.html" class="text-[#0275d8] hover:underline">국립일제강제동원역사관</a></td>
                    </tr>

                    <!-- 국가보훈부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 국가보훈부
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300 text-gray-700 leading-relaxed">
                            <a href="독립기념관.html" class="text-[#0275d8] hover:underline">독립기념관</a> · 
                            <a href="국립대한민국임시정부기념관.html" class="text-[#0275d8] hover:underline">국립대한민국임시정부기념관</a> · 
                            <a href="호남호국기념관.html" class="text-[#0275d8] hover:underline">호남호국기념관</a>
                        </td>
                    </tr>

                    <!-- 산업통상부 (효빈시 추가 부처) -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 산업통상부
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300 text-gray-700 leading-relaxed">
                            <a href="국립효빈공업박물관.html" class="text-[#0275d8] font-bold hover:underline">국립효빈공업박물관</a>
                        </td>
                    </tr>

                    <!-- 문화체육관광부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 문화체육관광부
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300 text-gray-700 leading-relaxed bg-white">
                            <a href="대한민국역사박물관.html" class="text-[#0275d8] hover:underline">대한민국역사박물관</a> · 
                            <a href="국립한글박물관.html" class="text-[#0275d8] hover:underline">국립한글박물관</a> · 
                            <a href="국립한국문학관.html" class="text-[#0275d8] hover:underline">국립한국문학관</a> · 
                            <a href="국립효빈박물관.html" class="text-[#0275d8] font-bold hover:underline">국립효빈박물관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#b77a2e] text-white font-bold py-1 border-r border-gray-300">국립박물관</td>
                        <td class="py-1 px-2 text-left leading-relaxed bg-white text-gray-700">
                            <a href="국립중앙박물관.html" class="text-[#0275d8] hover:underline">서울(중앙)</a> · 
                            <a href="국립춘천박물관.html" class="text-[#0275d8] hover:underline">춘천</a> · 
                            <a href="국립청주박물관.html" class="text-[#0275d8] hover:underline">청주</a> · 
                            <a href="국립공주박물관.html" class="text-[#0275d8] hover:underline">공주</a> · 
                            <a href="국립부여박물관.html" class="text-[#0275d8] hover:underline">부여</a> · 
                            <a href="국립전주박물관.html" class="text-[#0275d8] hover:underline">전주</a> · 
                            <a href="국립익산박물관.html" class="text-[#0275d8] hover:underline">익산</a> · 
                            <a href="국립광주박물관.html" class="text-[#0275d8] hover:underline">광주</a> · 
                            <a href="국립나주박물관.html" class="text-[#0275d8] hover:underline">나주</a> · 
                            <a href="국립대구박물관.html" class="text-[#0275d8] hover:underline">대구</a> · 
                            <a href="국립경주박물관.html" class="text-[#0275d8] hover:underline">경주</a> · 
                            <a href="국립진주박물관.html" class="text-[#0275d8] hover:underline">진주</a> · 
                            <a href="국립김해박물관.html" class="text-[#0275d8] hover:underline">김해</a> · 
                            <a href="국립제주박물관.html" class="text-[#0275d8] hover:underline">제주</a> · 
                            <a href="국립충주박물관.html" class="text-[#0275d8] hover:underline">충주</a><sup class="text-xs text-gray-500"> 2026년 예정</sup> · 
                            <a href="국립덕주박물관.html" class="text-[#0275d8] font-bold hover:underline">덕주</a> · 
                            <a href="국립빈주박물관.html" class="text-[#0275d8] font-bold hover:underline">빈주</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#000] text-white font-bold py-1 border-r border-gray-300">국립현대미술관</td>
                        <td class="py-1 px-2 text-left leading-relaxed bg-white text-gray-700">
                            <a href="국립현대미술관.html" class="text-[#0275d8] hover:underline">과천(본관)</a> · 
                            <a href="국립현대미술관.html" class="text-[#0275d8] hover:underline">서울</a> · 
                            <a href="국립현대미술관.html" class="text-[#0275d8] hover:underline">덕수궁</a> · 
                            <a href="국립현대미술관.html" class="text-[#0275d8] hover:underline">청주</a> · 
                            <a href="국립현대미술관 효빈관.html" class="text-[#0275d8] font-bold hover:underline">효빈관</a> · 
                            <a href="국립현대미술관.html" class="text-[#0275d8] hover:underline">대전</a><sup class="text-xs text-gray-500"> 2029년 예정</sup>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">국립민속박물관</td>
                        <td class="py-1 px-2 text-left bg-white text-gray-700">
                            <a href="국립민속박물관.html" class="text-[#0275d8] hover:underline">서울(본관)</a> · 
                            <a href="국립민속박물관.html" class="text-[#0275d8] hover:underline">파주</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">국가유산청</td>
                        <td class="py-1 px-2 text-left leading-relaxed bg-white text-gray-700">
                            <a href="국립고궁박물관.html" class="text-[#0275d8] hover:underline">국립고궁박물관</a> · 
                            <a href="국립조선왕조실록박물관.html" class="text-[#0275d8] hover:underline">국립조선왕조실록박물관</a> · 
                            <a href="덕수궁 석조전.html" class="text-[#0275d8] hover:underline">석조전 대한제국역사관</a> · 
                            <a href="현충사.html" class="text-[#0275d8] hover:underline">충무공이순신기념관</a> · 
                            <a href="영릉.html" class="text-[#0275d8] hover:underline">세종대왕역사문화관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">국립문화유산연구원</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="천연기념물센터.html" class="text-[#0275d8] hover:underline">천연기념물센터</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">국립해양유산연구소</td>
                        <td class="py-1 px-2 text-left bg-white text-gray-700">
                            <span class="text-sm">해양유물전시관</span> <a href="국립해양유산연구소.html" class="text-[#0275d8] hover:underline">목포(본관)</a> · 
                            <a href="국립해양유산연구소.html" class="text-[#0275d8] hover:underline">태안</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#663300] text-white font-bold py-1 border-r border-gray-300">국립국악원</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국악박물관.html" class="text-[#0275d8] hover:underline">국악박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#000] text-[#beb094] font-bold py-1 border-r border-gray-300">국립중앙극장</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="공연예술박물관.html" class="text-[#0275d8] hover:underline">공연예술박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#0000ff] text-white font-bold py-1 border-r border-gray-300">국립아시아문화전당</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="아시아문화박물관.html" class="text-[#0275d8] hover:underline">아시아문화박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#00448c] text-white font-bold py-1 border-r border-gray-300">국민체육진흥공단</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립스포츠박물관.html" class="text-[#0275d8] hover:underline">국립스포츠박물관</a><sup class="text-xs text-gray-500"> 2026년 예정</sup></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#016bb9] text-white font-bold py-1 border-r border-gray-300">대한체육회</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="한국체육박물관.html" class="text-[#0275d8] hover:underline">한국체육박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#0c218b] text-white font-bold py-1 border-r border-gray-300">태권도진흥재단</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립태권도박물관.html" class="text-[#0275d8] hover:underline">국립태권도박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#333] text-white font-bold py-1 border-r border-gray-300">한국영상자료원</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="한국영화박물관.html" class="text-[#0275d8] hover:underline">한국영화박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#e03c31] text-white font-bold py-1 border-r border-gray-300">한국저작권위원회</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립저작권박물관.html" class="text-[#0275d8] hover:underline">국립저작권박물관</a></td>
                    </tr>

                    <!-- 농림축산식품부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 농림축산식품부
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300 bg-white">
                            <a href="국립농업박물관.html" class="text-black hover:underline">국립농업박물관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#013e7d] text-white font-bold py-1 border-r border-gray-300">한국마사회</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="말박물관.html" class="text-[#0275d8] hover:underline">말박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">산림청</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립산악박물관.html" class="text-[#0275d8] hover:underline">국립산악박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">산림청 / 국립수목원</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="산림박물관.html" class="text-[#0275d8] hover:underline">산림박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">국립농업과학원</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="잠사곤충박물관.html" class="text-[#0275d8] hover:underline">잠사곤충박물관</a></td>
                    </tr>

                    <!-- 보건복지부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 보건복지부
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300 text-gray-700 bg-white">
                            <a href="국립효빈복지박물관.html" class="text-[#0275d8] font-bold hover:underline">국립효빈복지박물관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">국립소록도병원</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="한센병박물관.html" class="text-[#0275d8] hover:underline">한센병박물관</a></td>
                    </tr>

                    <!-- 성평등가족부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 성평등가족부
                        </th>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#FCB037] text-[#4d4d4f] font-bold py-1 border-r border-gray-300">한국양성평등교육진흥원</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립여성사전시관.html" class="text-[#0275d8] hover:underline">국립여성사전시관</a></td>
                    </tr>

                    <!-- 국토교통부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 국토교통부
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300 text-gray-700 bg-white">
                            <a href="국립항공박물관.html" class="text-[#0275d8] hover:underline">국립항공박물관</a> · 
                            <a href="국토발전전시관.html" class="text-[#0275d8] hover:underline">국토발전전시관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">국토지리정보원</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립지도박물관.html" class="text-[#0275d8] hover:underline">국립지도박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#A3CD39] text-white font-bold py-1 border-r border-gray-300">한국토지주택공사</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="토지주택박물관.html" class="text-[#0275d8] hover:underline">토지주택박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#0054A6] text-white font-bold py-1 border-r border-gray-300">한국철도공사</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="철도박물관.html" class="text-[#0275d8] hover:underline">철도박물관</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">새만금개발청</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립새만금간척박물관.html" class="text-[#0275d8] hover:underline">국립새만금간척박물관</a></td>
                    </tr>

                    <!-- 해양수산부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 해양수산부
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300 text-gray-700 leading-relaxed bg-white">
                            <a href="국립해양박물관.html" class="text-[#0275d8] hover:underline">국립해양박물관(중앙)</a> · 
                            <a href="국립인천해양박물관.html" class="text-[#0275d8] hover:underline">국립인천해양박물관</a> · 
                            <a href="국립해양수산박물관.html" class="text-[#0275d8] hover:underline">국립해양수산박물관</a><sup class="text-xs text-gray-500"> 2030년 예정</sup> · 
                            <a href="국립효빈해양관.html" class="text-[#0275d8] font-bold hover:underline">국립효빈해양관</a> · 
                            <a href="효빈해양역사·선박박물관.html" class="text-[#0275d8] font-bold hover:underline">효빈해양역사·선박박물관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#0062ac] text-white font-bold py-1 border-r border-gray-300">국립해양과학관</td>
                        <td class="py-1 px-2 text-left bg-white text-gray-700">
                            <a href="국립울진해양과학관.html" class="text-[#0275d8] hover:underline">울진</a> · 
                            <a href="국립해양과학관.html" class="text-[#0275d8] hover:underline">청주</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#01ada1] text-white font-bold py-1 border-r border-gray-300">국립해양생물자원관</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립해양생물자원관.html" class="text-[#0275d8] hover:underline">국립해양생물자원관 씨큐리움</a></td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">한국항로표지기술원</td>
                        <td class="py-1 px-2 text-left bg-white"><a href="국립등대박물관.html" class="text-[#0275d8] hover:underline">국립등대박물관</a></td>
                    </tr>

                    <!-- 기후에너지환경부 -->
                    <tr>
                        <th colspan="2" class="bg-[#003764] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 기후에너지환경부
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300 text-gray-700 leading-relaxed bg-white">
                            <a href="국립생태원.html" class="text-[#0275d8] hover:underline">국립생태원</a> · 
                            <a href="국립생물자원관.html" class="text-[#0275d8] hover:underline">국립생물자원관</a> · 
                            <a href="국립낙동강생물자원관.html" class="text-[#0275d8] hover:underline">국립낙동강생물자원관</a> · 
                            <a href="국립호남권생물자원관.html" class="text-[#0275d8] hover:underline">국립호남권생물자원관</a>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-300">
                        <td class="bg-[#003764] text-white font-bold py-1 border-r border-gray-300">기상청</td>
                        <td class="py-1 px-2 text-left leading-relaxed bg-white text-gray-700">
                            <span class="text-sm">국립기상박물관·과학관</span> <a href="국립기상박물관.html" class="text-[#0275d8] hover:underline">국립기상박물관</a> · 
                            <a href="국립밀양기상과학관.html" class="text-[#0275d8] hover:underline">국립밀양기상과학관</a> · 
                            <a href="국립충주기상과학관.html" class="text-[#0275d8] hover:underline">국립충주기상과학관</a> · 
                            <a href="국립대구기상과학관.html" class="text-[#0275d8] hover:underline">국립대구기상과학관</a> · 
                            <a href="국립전북기상과학관.html" class="text-[#0275d8] hover:underline">국립전북기상과학관</a> · 
                            <a href="국립충남기상과학관.html" class="text-[#0275d8] hover:underline">국립충남기상과학관</a> · 
                            <a href="국립여수해양기상과학관.html" class="text-[#0275d8] hover:underline">국립여수해양기상과학관</a>
                        </td>
                    </tr>

                    <!-- 한국은행 -->
                    <tr>
                        <th colspan="2" class="bg-[#004884] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/한국은행_심볼.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 한국은행
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300 text-gray-700 bg-white">
                            <a href="한국은행 화폐박물관.html" class="text-[#0275d8] hover:underline">한국은행 화폐박물관</a> · 
                            <a href="효빈화폐금융박물관.html" class="text-[#0275d8] font-bold hover:underline">효빈화폐금융박물관</a>
                        </td>
                    </tr>

                    <!-- 국립박물관단지 -->
                    <tr>
                        <th colspan="2" class="bg-[#002466] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/국립박물관단지_흰색_심볼.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 국립박물관단지
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300 text-gray-700 leading-relaxed bg-white">
                            <a href="국립어린이박물관.html" class="text-[#0275d8] hover:underline">국립어린이박물관</a> · 
                            <a href="국가기록박물관.html" class="text-[#0275d8] hover:underline">국가기록박물관</a><sup class="text-xs text-gray-500"> 2030년 예정</sup> · 
                            <a href="국립도시건축박물관.html" class="text-[#0275d8] hover:underline">국립도시건축박물관</a><sup class="text-xs text-gray-500"> 2030년 예정</sup> · 
                            <a href="국립디지털문화유산센터.html" class="text-[#0275d8] hover:underline">국립디지털문화유산센터</a><sup class="text-xs text-gray-500"> 2030년 예정</sup> · 
                            <a href="국립디자인박물관.html" class="text-[#0275d8] hover:underline">국립디자인박물관</a><sup class="text-xs text-gray-500"> 2030년 예정</sup>
                        </td>
                    </tr>

                    <!-- 정부대전청사 상설 및 특별전시관 -->
                    <tr>
                        <th colspan="2" class="bg-[#002466] text-white font-bold py-1 border-b border-gray-300">
                            <img src="이미지/svg/대한민국_정부_로고.svg" class="inline-block h-[20px] mr-1 align-middle" onerror="this.style.display='none'"> 정부대전청사 상설 및 특별전시관
                        </th>
                    </tr>
                    <tr>
                        <td colspan="2" class="py-1.5 px-2 border-b border-gray-300 text-gray-700 leading-relaxed bg-white">
                            <a href="발명인의 전당.html" class="text-[#0275d8] hover:underline">발명인의 전당</a> · 
                            <a href="조달전시관.html" class="text-[#0275d8] hover:underline">조달전시관</a> · 
                            <a href="정부조달상품문화전시장.html" class="text-[#0275d8] hover:underline">정부조달상품문화전시장</a> · 
                            <a href="통계전시관.html" class="text-[#0275d8] hover:underline">통계전시관</a> · 
                            <a href="숲사랑체험관.html" class="text-[#0275d8] hover:underline">숲사랑체험관</a> · 
                            <a href="국가기록전시관.html" class="text-[#0275d8] hover:underline">국가기록전시관</a> · 
                            <a href="병무역사기록관.html" class="text-[#0275d8] hover:underline">병무역사기록관</a> · 
                            <a href="관세기록관.html" class="text-[#0275d8] hover:underline">관세기록관</a>
                        </td>
                    </tr>

                    <!-- Footer Note -->
                    <tr>
                        <td colspan="2" class="py-1 px-2 text-center text-xs text-gray-500 bg-gray-200">
                            ◈ 표시가 붙어 있는 것은 과학관 설립·운영 및 육성에 관한 법률에 해당한다.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = template;
});