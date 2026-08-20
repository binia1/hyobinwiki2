(function() {
    const navHtml = `
        <div class="border border-[#ccc] rounded overflow-hidden mb-8 mt-4 bg-white shadow-sm font-sans">
            <details class="group" open>
                <summary class="cursor-pointer list-none p-0 m-0 outline-none border-b border-[#ccc]">
                    <!-- 상단 타이틀 바 (사선 그래픽 및 로고 반영) -->
                    <div class="relative flex items-center justify-center p-3 h-[70px]" 
                         style="background-color: #ffffff; 
                                background-image: 
                                    linear-gradient(110deg, #000 30px, transparent 31px, transparent 45px, #000 46px, #000 60px, transparent 61px, transparent 75px, #000 76px, #000 90px, transparent 91px), 
                                    linear-gradient(-70deg, #004EA2 100px, transparent 101px), 
                                    linear-gradient(-70deg, #C60C30 180px, transparent 181px); 
                                background-repeat: no-repeat; 
                                background-position: left top, right top, right top;">
                        <div class="flex items-center gap-3 bg-white px-6 py-1 z-10">
                            <img src="이미지/대한민국_국기.webp" class="h-8 border border-gray-300" alt="태극기"> 
                            <div class="flex flex-col justify-center">
                                <span class="text-[0.75rem] font-bold text-gray-700 leading-tight">대한민국</span>
                                <span class="font-bold text-[1.1rem] text-black leading-tight">폐지된 행정구역</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 펼치기/접기 버튼 영역 -->
                    <div class="py-1 text-sm border-t border-b font-bold text-center bg-[#f8f9fa] text-[#004EA2]">
                        <span class="group-open:hidden">[ 펼치기 ]</span>
                        <span class="hidden group-open:inline">[ 접기 · 접기 ]</span>
                    </div>
                </summary>
                
                <!-- 테이블 영역 (3단 레이아웃 반영) -->
                <table class="w-full text-[0.8rem] m-0 border-collapse table-fixed bg-white">
                    <colgroup>
                        <col style="width: 10%;">
                        <col style="width: 65%;">
                        <col style="width: 25%;">
                    </colgroup>
                    <style>
                        .nav-sup { color: #888; font-size: 0.75em; margin-left: 1px; font-weight: normal; }
                        .wiki-link { color: #004EA2; text-decoration: none; }
                        .wiki-link:hover { text-decoration: underline; }
                        .table-header { background-color: #999; color: white; padding: 6px; text-align: center; font-weight: bold; border: 1px solid #ddd; }
                        .region-header { background-color: #004EA2; color: white; text-align: center; font-weight: bold; border-bottom: 1px solid #ddd; }
                        .cell-common { text-align: center; padding: 8px; border-bottom: 1px solid #eee; border-left: 1px solid #eee; line-height: 1.6; }
                        .box-border-link { display: inline-block; border: 1px solid #004EA2; padding: 0 4px; border-radius: 2px; margin-bottom: 2px; }
                    </style>
                    <thead>
                        <tr>
                            <th class="table-header">지역</th>
                            <th class="table-header">지방자치단체</th>
                            <th class="table-header">기초자치단체 하위</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="region-header">경기</th>
                            <td class="cell-common">
                                <div class="box-border-link"><a href="황해도.html" class="wiki-link">황해도</a><sup class="nav-sup">북</sup></div><br>
                                <a href="벽성군.html" class="wiki-link">벽성군</a><sup class="nav-sup">북</sup> · <a href="장연군.html" class="wiki-link">장연군</a><sup class="nav-sup">북</sup> · <a href="서울시.html" class="wiki-link">서울시</a><sup class="nav-sup">승</sup> · <a href="개성시.html" class="wiki-link">개성시</a><sup class="nav-sup">북</sup> · <a href="개풍군.html" class="wiki-link">개풍군</a><sup class="nav-sup">북</sup> · <a href="연백군.html" class="wiki-link">연백군</a><sup class="nav-sup">북</sup> · <a href="북포천군.html" class="wiki-link">북포천군</a> · <a href="장단군.html" class="wiki-link">장단군</a><sup class="nav-sup">북</sup> · <a href="부천군.html" class="wiki-link">부천군</a> · <a href="인천시.html" class="wiki-link">인천시</a><sup class="nav-sup">승</sup> · <a href="시흥군.html" class="wiki-link">시흥군</a> · <a href="고양군.html" class="wiki-link">고양군</a> · <a href="미금시.html" class="wiki-link">미금시</a><sup class="nav-sup">95</sup> · <a href="남양주군.html" class="wiki-link">남양주군</a><sup class="nav-sup">95</sup> · <a href="송탄시.html" class="wiki-link">송탄시</a><sup class="nav-sup">95</sup> · <a href="평택군.html" class="wiki-link">평택군</a><sup class="nav-sup">95</sup>
                            </td>
                            <td class="cell-common text-[#004EA2]">
                                <a href="신동면.html" class="wiki-link">신동면</a> · <a href="소래면.html" class="wiki-link">소래면</a> · <a href="군자면.html" class="wiki-link">군자면</a> · <a href="수암면.html" class="wiki-link">수암면</a> · <a href="반월면.html" class="wiki-link">반월면</a> · <a href="영종면.html" class="wiki-link">영종면</a> · <a href="용유면.html" class="wiki-link">용유면</a> · <a href="일산구.html" class="wiki-link">일산구</a> · <a href="태안읍.html" class="wiki-link">태안읍</a> · <a href="동탄면.html" class="wiki-link">동탄면</a> · <a href="오포읍.html" class="wiki-link">오포읍</a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="region-header">인천</th>
                            <td class="cell-common">
                                <a href="중구_인천.html" class="wiki-link">중구</a><sup class="nav-sup">인천</sup> · <a href="동구_인천.html" class="wiki-link">동구</a><sup class="nav-sup">인천</sup>
                            </td>
                            <td class="cell-common"></td>
                        </tr>

                        <tr>
                            <th class="region-header">강원</th>
                            <td class="cell-common">
                                <div class="box-border-link"><a href="강원도.html" class="wiki-link">강원도</a></div><br>
                                <a href="평강군.html" class="wiki-link">평강군</a><sup class="nav-sup">북</sup> · <a href="김화군.html" class="wiki-link">김화군</a><sup class="nav-sup">북</sup> · <a href="명주군.html" class="wiki-link">명주군</a><sup class="nav-sup">95</sup> · <a href="삼척군.html" class="wiki-link">삼척군</a><sup class="nav-sup">95</sup> · <a href="원주군.html" class="wiki-link">원주군</a><sup class="nav-sup">95</sup> · <a href="춘천군.html" class="wiki-link">춘천군</a><sup class="nav-sup">95</sup>
                            </td>
                            <td class="cell-common">
                                <a href="황지읍.html" class="wiki-link">황지읍</a> · <a href="장성읍.html" class="wiki-link">장성읍</a> · <a href="북평읍.html" class="wiki-link">북평읍</a> · <a href="묵호읍.html" class="wiki-link">묵호읍</a> · <a href="경포면.html" class="wiki-link">경포면</a> · <a href="성덕면.html" class="wiki-link">성덕면</a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="region-header">충북</th>
                            <td class="cell-common">
                                <a href="제천군.html" class="wiki-link">제천군</a><sup class="nav-sup">95</sup> · <a href="중원군.html" class="wiki-link">중원군</a><sup class="nav-sup">95</sup> · <a href="청원군.html" class="wiki-link">청원군</a> · <a href="구_청주시.html" class="wiki-link">구 청주시</a>
                            </td>
                            <td class="cell-common">
                                <a href="사주면.html" class="wiki-link">사주면</a> · <a href="강서면.html" class="wiki-link">강서면</a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="region-header">충남</th>
                            <td class="cell-common">
                                <a href="대전시.html" class="wiki-link">대전시</a><sup class="nav-sup">승</sup> · <a href="대덕군.html" class="wiki-link">대덕군</a> · <a href="대천시.html" class="wiki-link">대천시</a><sup class="nav-sup">95</sup> · <a href="공주군.html" class="wiki-link">공주군</a><sup class="nav-sup">95</sup> · <a href="보령군.html" class="wiki-link">보령군</a><sup class="nav-sup">95</sup> · <a href="서산군.html" class="wiki-link">서산군</a><sup class="nav-sup">95</sup> · <a href="아산군.html" class="wiki-link">아산군</a><sup class="nav-sup">95</sup> · <a href="온양시.html" class="wiki-link">온양시</a><sup class="nav-sup">95</sup> · <a href="천안군.html" class="wiki-link">천안군</a><sup class="nav-sup">95</sup> · <a href="연기군.html" class="wiki-link">연기군</a><sup class="nav-sup">승</sup>
                            </td>
                            <td class="cell-common">
                                <a href="환성면.html" class="wiki-link">환성면</a> · <a href="유천면.html" class="wiki-link">유천면</a> · <a href="회덕면.html" class="wiki-link">회덕면</a> · <a href="산내면.html" class="wiki-link">산내면</a> · <a href="구즉면.html" class="wiki-link">구즉면</a> · <a href="탄동면.html" class="wiki-link">탄동면</a> · <a href="기성면.html" class="wiki-link">기성면</a> · <a href="진잠면.html" class="wiki-link">진잠면</a> · <a href="유성읍.html" class="wiki-link">유성읍</a> · <a href="동면.html" class="wiki-link">동면</a> · <a href="신탄진읍.html" class="wiki-link">신탄진읍</a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="region-header">전북</th>
                            <td class="cell-common">
                                <div class="box-border-link"><a href="전라북도.html" class="wiki-link">전라북도</a></div><br>
                                <a href="김제군.html" class="wiki-link">김제군</a><sup class="nav-sup">95</sup> · <a href="옥구군.html" class="wiki-link">옥구군</a><sup class="nav-sup">95</sup> · <a href="정읍군.html" class="wiki-link">정읍군</a><sup class="nav-sup">95</sup> · <a href="정주시.html" class="wiki-link">정주시</a><sup class="nav-sup">95</sup> · <a href="이리시.html" class="wiki-link">이리시</a><sup class="nav-sup">95</sup> · <a href="익산군.html" class="wiki-link">익산군</a><sup class="nav-sup">95</sup>
                            </td>
                            <td class="cell-common">
                                <a href="황화면.html" class="wiki-link">황화면</a> · <a href="미성읍.html" class="wiki-link">미성읍</a> · <a href="월촌면.html" class="wiki-link">월촌면</a> · <a href="내장면.html" class="wiki-link">내장면</a> · <a href="북일면.html" class="wiki-link">북일면</a> · <a href="팔봉면.html" class="wiki-link">팔봉면</a> · <a href="조촌읍.html" class="wiki-link">조촌읍</a> · <a href="초포면.html" class="wiki-link">초포면</a> · <a href="우전면.html" class="wiki-link">우전면</a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="region-header leading-tight">전남<br>광주</th>
                            <td class="cell-common">
                                <div class="box-border-link"><a href="전라남도.html" class="wiki-link">전라남도</a></div> · <div class="box-border-link"><a href="광주광역시.html" class="wiki-link">광주광역시</a></div><br>
                                <a href="광주시.html" class="wiki-link">광주시</a><sup class="nav-sup">승</sup> · <a href="광산군.html" class="wiki-link">광산군</a> · <a href="송정시.html" class="wiki-link">송정시</a> · <a href="광양군.html" class="wiki-link">광양군</a><sup class="nav-sup">95</sup> · <a href="나주군.html" class="wiki-link">나주군</a><sup class="nav-sup">95</sup> · <a href="동광양시.html" class="wiki-link">동광양시</a><sup class="nav-sup">95</sup> · <a href="승주군.html" class="wiki-link">승주군</a><sup class="nav-sup">95</sup> · <a href="구_여수시.html" class="wiki-link">구 여수시</a> · <a href="여천군.html" class="wiki-link">여천군</a> · <a href="여천시.html" class="wiki-link">여천시</a>
                            </td>
                            <td class="cell-common">
                                <a href="영산포읍.html" class="wiki-link">영산포읍</a> · <a href="도사면.html" class="wiki-link">도사면</a> · <a href="삼일읍.html" class="wiki-link">삼일읍</a> · <a href="이로면.html" class="wiki-link">이로면</a> · <a href="극락면.html" class="wiki-link">극락면</a> · <a href="서방면.html" class="wiki-link">서방면</a> · <a href="석곡면.html" class="wiki-link">석곡면</a> · <a href="효지면.html" class="wiki-link">효지면</a> · <a href="지산면.html" class="wiki-link">지산면</a> · <a href="서창면.html" class="wiki-link">서창면</a> · <a href="대촌면.html" class="wiki-link">대촌면</a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="region-header">경북</th>
                            <td class="cell-common">
                                <a href="울릉도.html" class="wiki-link">울릉도</a> · <a href="대구시.html" class="wiki-link">대구시</a><sup class="nav-sup">승</sup> · <a href="경산군.html" class="wiki-link">경산군</a><sup class="nav-sup">95</sup> · <a href="경주군.html" class="wiki-link">경주군</a><sup class="nav-sup">95</sup> · <a href="금릉군.html" class="wiki-link">금릉군</a><sup class="nav-sup">95</sup> · <a href="문경군.html" class="wiki-link">문경군</a><sup class="nav-sup">95</sup> · <a href="상주군.html" class="wiki-link">상주군</a><sup class="nav-sup">95</sup> · <a href="선산군.html" class="wiki-link">선산군</a><sup class="nav-sup">95</sup> · <a href="안동군.html" class="wiki-link">안동군</a><sup class="nav-sup">95</sup> · <a href="영일군.html" class="wiki-link">영일군</a><sup class="nav-sup">95</sup> · <a href="영천군.html" class="wiki-link">영천군</a><sup class="nav-sup">95</sup> · <a href="영풍군.html" class="wiki-link">영풍군</a><sup class="nav-sup">95</sup> · <a href="점촌시.html" class="wiki-link">점촌시</a><sup class="nav-sup">95</sup>
                            </td>
                            <td class="cell-common">
                                <a href="내동면.html" class="wiki-link">내동면</a> · <a href="월곡면.html" class="wiki-link">월곡면</a> · <a href="풍서면.html" class="wiki-link">풍서면</a> · <a href="달전면.html" class="wiki-link">달전면</a> · <a href="곡강면.html" class="wiki-link">곡강면</a> · <a href="인동면.html" class="wiki-link">인동면</a> · <a href="칠곡읍.html" class="wiki-link">칠곡읍</a> · <a href="성서면.html" class="wiki-link">성서면</a> · <a href="월배면.html" class="wiki-link">월배면</a> · <a href="고산면.html" class="wiki-link">고산면</a> · <a href="안심면.html" class="wiki-link">안심면</a> · <a href="공산면.html" class="wiki-link">공산면</a> · <a href="동촌면.html" class="wiki-link">동촌면</a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="region-header">경남</th>
                            <td class="cell-common">
                                <a href="부산시.html" class="wiki-link">부산시</a><sup class="nav-sup">승</sup> · <a href="동래군.html" class="wiki-link">동래군</a> · <a href="거제군.html" class="wiki-link">거제군</a><sup class="nav-sup">95</sup> · <a href="김해군.html" class="wiki-link">김해군</a><sup class="nav-sup">95</sup> · <a href="밀양군.html" class="wiki-link">밀양군</a><sup class="nav-sup">95</sup> · <a href="울산군.html" class="wiki-link">울산군</a><sup class="nav-sup">95</sup> · <a href="장승포시.html" class="wiki-link">장승포시</a><sup class="nav-sup">95</sup> · <a href="진양군.html" class="wiki-link">진양군</a><sup class="nav-sup">95</sup> · <a href="충무시.html" class="wiki-link">충무시</a><sup class="nav-sup">95</sup> · <a href="창원군.html" class="wiki-link">창원군</a><sup class="nav-sup">95</sup> · <a href="통영군.html" class="wiki-link">통영군</a><sup class="nav-sup">95</sup> · <a href="사천군.html" class="wiki-link">사천군</a><sup class="nav-sup">95</sup> · <a href="삼천포시.html" class="wiki-link">삼천포시</a><sup class="nav-sup">95</sup> · <a href="울산시.html" class="wiki-link">울산시</a><sup class="nav-sup">승</sup> · <a href="마산시.html" class="wiki-link">마산시</a> · <a href="진해시.html" class="wiki-link">진해시</a> · <a href="구_창원시.html" class="wiki-link">구 창원시</a>
                            </td>
                            <td class="cell-common">
                                <a href="원량면.html" class="wiki-link">원량면</a> · <a href="웅상읍.html" class="wiki-link">웅상읍</a> · <a href="울주구.html" class="wiki-link">울주구</a> · <a href="장유면.html" class="wiki-link">장유면</a> · <a href="남양면.html" class="wiki-link">남양면</a> · <a href="신현읍.html" class="wiki-link">신현읍</a> · <a href="상남면.html" class="wiki-link">상남면</a> · <a href="웅천면.html" class="wiki-link">웅천면</a> · <a href="웅동면.html" class="wiki-link">웅동면</a> · <a href="천가면.html" class="wiki-link">천가면</a> · <a href="대저읍.html" class="wiki-link">대저읍</a> · <a href="명지면.html" class="wiki-link">명지면</a> · <a href="가락면.html" class="wiki-link">가락면</a> · <a href="구포읍.html" class="wiki-link">구포읍</a> · <a href="사상면.html" class="wiki-link">사상면</a> · <a href="북면.html" class="wiki-link">북면</a> · <a href="방어진읍.html" class="wiki-link">방어진읍</a> · <a href="하상면.html" class="wiki-link">하상면</a> · <a href="대현면.html" class="wiki-link">대현면</a> · <a href="농소면.html" class="wiki-link">농소면</a> · <a href="강동면.html" class="wiki-link">강동면</a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="region-header">제주</th>
                            <td class="cell-common">
                                <div class="box-border-link"><a href="제주도_도.html" class="wiki-link">제주도(道)</a></div><br>
                                <a href="제주도_섬.html" class="wiki-link">제주도(島)</a> · <a href="남제주군.html" class="wiki-link">남제주군</a> · <a href="북제주군.html" class="wiki-link">북제주군</a>
                            </td>
                            <td class="cell-common">
                                <a href="중문면.html" class="wiki-link">중문면</a>
                            </td>
                        </tr>

                        <!-- 덕북 / 덕남 구역 (업데이트됨) -->
                        <tr>
                            <th class="region-header bg-[#002f6c]">덕북</th>
                            <td class="cell-common bg-[#f4f7f8]">
                                <a href="효빈시.html" class="wiki-link">효빈시</a><sup class="nav-sup">승</sup> · <strong>안천시</strong> · <a href="궁하시.html" class="wiki-link">궁하시</a> · <a href="천성군.html" class="wiki-link">천성군</a> · <a href="강산군.html" class="wiki-link">강산군</a><sup class="nav-sup">95</sup> · <a href="약천군.html" class="wiki-link">약천군</a><sup class="nav-sup">95</sup> · <a href="군양군.html" class="wiki-link">군양군</a><sup class="nav-sup">95</sup> · <a href="빈성군.html" class="wiki-link">빈성군</a><sup class="nav-sup">95</sup> · <a href="압일군.html" class="wiki-link">압일군</a><sup class="nav-sup">95</sup>
                            </td>
                            <td class="cell-common bg-[#f4f7f8]">
                                <a href="안천읍.html" class="wiki-link">안천읍</a> · <a href="이자읍.html" class="wiki-link">이자읍</a> · <a href="사능면.html" class="wiki-link">사능면</a> · <a href="어간면.html" class="wiki-link">어간면</a> · <a href="당가면.html" class="wiki-link">당가면</a> · <a href="중수면.html" class="wiki-link">중수면</a> · <a href="고송면.html" class="wiki-link">고송면</a> · <a href="청엽면.html" class="wiki-link">청엽면</a> · <a href="창전면.html" class="wiki-link">창전면</a> · <a href="흑전면.html" class="wiki-link">흑전면</a> · <a href="천성면.html" class="wiki-link">천성면</a> · <a href="마시면.html" class="wiki-link">마시면</a> · <a href="진목면.html" class="wiki-link">진목면</a> · <a href="상포면.html" class="wiki-link">상포면</a> · <a href="애음면.html" class="wiki-link">애음면</a> · <a href="석성면.html" class="wiki-link">석성면</a>
                            </td>
                        </tr>
                        
                        <tr>
                            <th class="region-header bg-[#002f6c]">덕남</th>
                            <td class="cell-common bg-[#f4f7f8]">
                                <a href="덕산군.html" class="wiki-link">덕산군</a><sup class="nav-sup">95</sup> · <a href="낙산군.html" class="wiki-link">낙산군</a><sup class="nav-sup">95</sup> · <a href="방천군.html" class="wiki-link">방천군</a><sup class="nav-sup">95</sup> · <a href="비원군.html" class="wiki-link">비원군</a><sup class="nav-sup">95</sup> · <a href="하산군.html" class="wiki-link">하산군</a><sup class="nav-sup">95</sup>
                            </td>
                            <td class="cell-common bg-[#f4f7f8]">
                                <a href="동석면.html" class="wiki-link">동석면</a> · <a href="토마면.html" class="wiki-link">토마면</a> · <a href="화진면.html" class="wiki-link">화진면</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <!-- 하단 범례 및 설명 영역 -->
                <div class="p-4 text-xs text-center border-t bg-[#f8f9fa] leading-relaxed text-gray-700">
                    1945년 <a href="남북분단.html" class="wiki-link">남북분단</a> 이후 현재까지 폐지된 행정구역만 기재하며, 행정구역 단계별로 구분 및 폐지 날짜 순서대로 나열한다.<br>
                    <span class="font-bold">북</span>: 폐지 후 <a href="이북_5도.html" class="wiki-link">이북 5도</a>에 명목상 존속. 단 <a href="옹진군.html" class="wiki-link">옹진군</a>은 인천광역시 소속이므로 폐지된 것으로 간주하지 않는다.<br>
                    <span class="font-bold">95</span>: 1995년 도농통합 / <span class="font-bold">승</span>: 광역자치단체 승격 / <span class="font-bold text-[#004EA2]">인천</span>: 인천형 행정체제 개편 / <span class="border px-1 border-gray-400 font-bold bg-white">테두리</span> : 광역자치단체<br>
                    <a href="일제강점기.html" class="wiki-link">일제강점기</a> · <a href="북한.html" class="wiki-link">북한</a>
                </div>
            </details>
        </div>
    `;

    const currentScript = document.currentScript;
    if (currentScript) {
        currentScript.insertAdjacentHTML('afterend', navHtml);
    } else {
        document.write(navHtml);
    }
})();