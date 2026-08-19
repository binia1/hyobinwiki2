document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("lovelive-muse-nav-container");
    if (!container) return;

    // 1. 네비게이션 전용 디자인(CSS) 주입
    const navStyle = `
    <style>
        /* 나무위키 틀 스타일 (JS에서 동적 주입) */
        .nw-frame { border: 2px solid #e4007f; background-color: #e4007f; border-radius: 8px; padding: 10px; margin: 0 auto 20px; text-align: center; }
        .nw-title { background: white; margin: -5px -10px 10px; padding: 5px; }
        .nw-box { border: 2px solid; margin-bottom: 10px; background: #fff; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .nw-box { background: #1f2023; color: #ddd; }
        .nw-box summary { font-weight: bold; cursor: pointer; padding: 8px; color: white; display: flex; justify-content: center; align-items: center; gap: 10px; list-style: none; }
        .nw-box summary::-webkit-details-marker { display: none; }
        .nw-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 0.75rem; word-break: keep-all; }
        .nw-tbl th, .nw-tbl td { border: 1px solid currentColor; padding: 4px; vertical-align: middle; }
        .nw-img { width: 45px; height: 45px; object-fit: contain; margin: 0 auto 2px; display: block; }
        .nw-link { color: inherit; text-decoration: none; }
        .nw-link:hover { text-decoration: underline; }
    </style>
    `;

    // 2. 방대한 HTML 구조 주입 (뮤즈 멤버 박스 + 전체 시리즈 틀)
    const navHtml = `
        <!-- [뮤즈 멤버 목록 표 박스] -->
        <div class="w-full max-w-[600px] mx-auto border border-[#e10082] rounded-[10px] bg-[#ffc8c8] text-center text-[#e10082] overflow-hidden mb-6 shadow-sm">
            <div class="w-4/5 mx-auto py-2 border-b border-[#e10082] font-bold text-xl text-black">
                <a href="μ’s.html" class="nw-link"><img src="이미지/뮤즈 로고.webp" alt="μ’s" class="h-8 mx-auto" onerror="this.style.display='none'; this.nextSibling.style.display='inline';"><span style="display:none;">μ’s</span></a>
            </div>
            
            <!-- 멤버 (펼치기/접기) -->
            <details class="bg-white dark:bg-[#2d2f34] text-black dark:text-white p-2" open>
                <summary class="cursor-pointer text-xs text-gray-500 mb-2 list-none outline-none text-center">[ 펼치기 · 접기 ]</summary>
                <div class="flex justify-evenly flex-wrap gap-2 text-[11px] font-bold">
                    <a href="코사카 호노카.html" class="w-[30%] sm:w-[15%] flex flex-col items-center wiki-link hover:no-underline">
                        <img src="이미지/코사카 호노카.webp" class="w-4/5 object-contain" onerror="this.style.display='none'">
                        <span class="mt-1 px-1 py-[2px] rounded text-white bg-[#ffa400] w-full text-center">호노카</span>
                    </a>
                    <a href="아야세 에리.html" class="w-[30%] sm:w-[15%] flex flex-col items-center wiki-link hover:no-underline">
                        <img src="이미지/아야세 에리.webp" class="w-4/5 object-contain" onerror="this.style.display='none'">
                        <span class="mt-1 px-1 py-[2px] rounded text-white bg-[#41b6e6] w-full text-center">에리</span>
                    </a>
                    <a href="미나미 코토리.html" class="w-[30%] sm:w-[15%] flex flex-col items-center wiki-link hover:no-underline">
                        <img src="이미지/미나미 코토리.webp" class="w-4/5 object-contain" onerror="this.style.display='none'">
                        <span class="mt-1 px-1 py-[2px] rounded text-white bg-[#b2b4b2] w-full text-center">코토리</span>
                    </a>
                    <a href="소노다 우미.html" class="w-[30%] sm:w-[15%] flex flex-col items-center wiki-link hover:no-underline">
                        <img src="이미지/소노다 우미.webp" class="w-4/5 object-contain" onerror="this.style.display='none'">
                        <span class="mt-1 px-1 py-[2px] rounded text-white bg-[#003da5] w-full text-center">우미</span>
                    </a>
                    <a href="호시조라 린.html" class="w-[30%] sm:w-[15%] flex flex-col items-center wiki-link hover:no-underline">
                        <img src="이미지/호시조라 린.webp" class="w-4/5 object-contain" onerror="this.style.display='none'">
                        <span class="mt-1 px-1 py-[2px] rounded text-black bg-[#fedd00] w-full text-center">린</span>
                    </a>
                    <a href="니시키노 마키.html" class="w-[30%] sm:w-[15%] flex flex-col items-center wiki-link hover:no-underline">
                        <img src="이미지/니시키노 마키.webp" class="w-4/5 object-contain" onerror="this.style.display='none'">
                        <span class="mt-1 px-1 py-[2px] rounded text-white bg-[#ee2737] w-full text-center">마키</span>
                    </a>
                    <a href="토죠 노조미.html" class="w-[30%] sm:w-[15%] flex flex-col items-center wiki-link hover:no-underline">
                        <img src="이미지/토죠 노조미.webp" class="w-4/5 object-contain" onerror="this.style.display='none'">
                        <span class="mt-1 px-1 py-[2px] rounded text-white bg-[#84329b] w-full text-center">노조미</span>
                    </a>
                    <a href="코이즈미 하나요.html" class="w-[30%] sm:w-[15%] flex flex-col items-center wiki-link hover:no-underline">
                        <img src="이미지/코이즈미 하나요.webp" class="w-4/5 object-contain" onerror="this.style.display='none'">
                        <span class="mt-1 px-1 py-[2px] rounded text-white bg-[#00ab84] w-full text-center">하나요</span>
                    </a>
                    <a href="야자와 니코.html" class="w-[30%] sm:w-[15%] flex flex-col items-center wiki-link hover:no-underline">
                        <img src="이미지/야자와 니코.webp" class="w-4/5 object-contain" onerror="this.style.display='none'">
                        <span class="mt-1 px-1 py-[2px] rounded text-white bg-[#e31c79] w-full text-center">니코</span>
                    </a>
                </div>
            </details>
        </div>

        <!-- [러브라이브 전체 멤버 목록 둘러보기 틀] -->
        <div class="nw-frame shadow-sm">
            <div class="nw-title">
                <a href="러브 라이브! School idol project series.html" class="nw-link font-bold text-lg text-[#e4007f]"><img src="이미지/logo_lovelive_ko.svg" alt="러브 라이브! School idol project series" class="h-10 mx-auto" onerror="this.style.display='none'; this.nextSibling.style.display='inline';"><span style="display:none;">러브 라이브! School idol project series</span></a>
            </div>
            
            <details class="mb-1">
                <summary class="bg-[#1f2023] text-white text-xs p-1 outline-none text-center cursor-pointer">[ 펼치기 · 접기 ]</summary>
                
                <!-- μ's -->
                <details class="nw-box" style="border-color:#E50080;" open>
                    <summary style="background-color:#E50080;" class="outline-none">
                        <a href="러브 라이브!.html" class="nw-link"><img src="이미지/bnr_lovelive.webp" class="max-w-[450px] w-full object-contain" onerror="this.style.display='none'; this.nextSibling.style.display='inline';"><span style="display:none;">러브 라이브!</span></a>
                    </summary>
                    <table class="nw-tbl" style="border-color:#E50080;">
                        <tr>
                            <th rowspan="5" class="w-[10%] nw-th-col text-[#E50080]">등<br>장<br>인<br>물</th>
                            <th class="w-[10%] nw-th-col text-[#E50080]">그룹</th>
                            <td colspan="3" class="w-[60%] bg-[#FFCCE6] text-[#E50080] dark:bg-[#33001A] font-bold text-lg"><a href="μ’s.html" class="nw-link">μ’s</a></td>
                            <td rowspan="2" class="w-[20%] bg-[#B290D1] text-white dark:bg-[#3B1161] font-bold text-lg"><a href="A-RISE.html" class="nw-link">A-RISE</a></td>
                        </tr>
                        <tr>
                            <th class="nw-th-col text-[#E50080]">유닛</th>
                            <td class="bg-[#E28295] text-white dark:bg-[#560E1C] font-bold"><a href="Printemps.html" class="nw-link">Printemps</a></td>
                            <td class="bg-[#8AE2FF] text-white dark:bg-[#082934] font-bold"><a href="BiBi(러브 라이브!).html" class="nw-link">BiBi</a></td>
                            <td class="bg-[#BEFFBE] text-black dark:text-white dark:bg-[#192F19] font-bold"><a href="lily white.html" class="nw-link">lily white</a></td>
                        </tr>
                        <tr>
                            <th rowspan="3" class="nw-th-col text-[#E50080]">멤버</th>
                            <td><a href="코사카 호노카.html" class="nw-link"><img src="이미지/코사카 호노카.webp" class="nw-img" onerror="this.style.display='none'">코사카 호노카</a></td>
                            <td><a href="아야세 에리.html" class="nw-link"><img src="이미지/아야세 에리.webp" class="nw-img" onerror="this.style.display='none'">아야세 에리</a></td>
                            <td><a href="소노다 우미.html" class="nw-link"><img src="이미지/소노다 우미.webp" class="nw-img" onerror="this.style.display='none'">소노다 우미</a></td>
                            <td><a href="키라 츠바사.html" class="nw-link"><img src="이미지/키라 츠바사.webp" class="nw-img" onerror="this.style.display='none'">키라 츠바사</a></td>
                        </tr>
                        <tr>
                            <td><a href="미나미 코토리.html" class="nw-link"><img src="이미지/미나미 코토리.webp" class="nw-img" onerror="this.style.display='none'">미나미 코토리</a></td>
                            <td><a href="니시키노 마키.html" class="nw-link"><img src="이미지/니시키노 마키.webp" class="nw-img" onerror="this.style.display='none'">니시키노 마키</a></td>
                            <td><a href="호시조라 린.html" class="nw-link"><img src="이미지/호시조라 린.webp" class="nw-img" onerror="this.style.display='none'">호시조라 린</a></td>
                            <td><a href="유우키 안쥬.html" class="nw-link"><img src="이미지/유우키 안쥬.webp" class="nw-img" onerror="this.style.display='none'">유우키 안쥬</a></td>
                        </tr>
                        <tr>
                            <td><a href="코이즈미 하나요.html" class="nw-link"><img src="이미지/코이즈미 하나요.webp" class="nw-img" onerror="this.style.display='none'">코이즈미 하나요</a></td>
                            <td><a href="야자와 니코.html" class="nw-link"><img src="이미지/야자와 니코.webp" class="nw-img" onerror="this.style.display='none'">야자와 니코</a></td>
                            <td><a href="토죠 노조미.html" class="nw-link"><img src="이미지/토죠 노조미.webp" class="nw-img" onerror="this.style.display='none'">토죠 노조미</a></td>
                            <td><a href="토도 에레나.html" class="nw-link"><img src="이미지/토도 에레나.webp" class="nw-img" onerror="this.style.display='none'">토도 에레나</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="nw-th-col text-[#E50080]"><a href="러브 라이브!/음반.html" class="nw-link">음반</a></th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브!/음반/정규 싱글.html" class="nw-link">정규 싱글</a> · <a href="러브 라이브!/음반/유닛 싱글.html" class="nw-link">유닛 싱글</a> · <a href="러브 라이브!/음반.html" class="nw-link">듀오 & 트리오 싱글</a> · <a href="러브 라이브!/음반/앨범.html" class="nw-link">앨범</a> · <a href="러브 라이브!/음반.html" class="nw-link">게임 관련 음반</a> · <a href="러브 라이브!/음반/애니메이션.html" class="nw-link">애니메이션 관련 음반</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="nw-th-col text-[#E50080]">라이브</th>
                            <td colspan="4" class="text-left px-2"><a href="μ’s First LoveLive!.html" class="nw-link">First</a> · <a href="μ’s New Year LoveLive! 2013.html" class="nw-link">New Year</a> · <a href="μ’s 3rd Anniversary LoveLive!.html" class="nw-link">3rd</a> · <a href="μ’s → NEXT LoveLive! 2014 ~ENDLESS PARADE~.html" class="nw-link">2014</a> · <a href="μ’s Go→Go! LoveLive! 2015 〜Dream Sensation!〜.html" class="nw-link">2015</a> · <a href="μ’s FINAL LOVE LIVE! ~μ’sic forever~.html" class="nw-link">FINAL</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="nw-th-col text-[#E50080]">이벤트</th>
                            <td colspan="4" class="text-left px-2"><a href="μ’s Fan Meeting Tour.html" class="nw-link">μ’s Fan Meeting Tour</a><br>TVA 방송 10주년 기념 (<a href="러브 라이브! TV 애니메이션 방송 10주년 기념 Love Live! Special Talk Session.html" class="nw-link">Special Talk Session</a> · <a href="러브 라이브! TV 애니메이션 방송 10주년 기념 LoveLive! Orchestra Concert.html" class="nw-link">Orchestra Concert</a>)</td>
                        </tr>
                        <tr>
                            <th rowspan="6" class="nw-th-col text-[#E50080]">미<br>디<br>어<br><br>믹<br>스</th>
                            <th class="nw-th-col text-[#E50080]">라디오</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! μ’s 홍보부 ~니코린파나~.html" class="nw-link">μ’s 홍보부 ~니코린파나~</a> · <a href="Radio 아니메로믹스X러브 라이브! 노조에리 Radio Garden.html" class="nw-link">노조에리 Radio Garden</a></td>
                        </tr>
                        <tr>
                            <th class="nw-th-col text-[#E50080]">방송</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! School idol project series/미디어 믹스.html" class="nw-link">러브 라이부(部) 니코나마 과외활동 코토호노마키</a> · <a href="러브 라이브! School idol project series/미디어 믹스.html" class="nw-link">에미츤 파이트 클럽</a> · <a href="러브 라이브! School idol project series/미디어 믹스.html" class="nw-link">노조호노☆버라이어티 박스</a></td>
                        </tr>
                        <tr>
                            <th class="nw-th-col text-[#E50080]">소설</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! School idol diary.html" class="nw-link">School idol diary</a></td>
                        </tr>
                        <tr>
                            <th class="nw-th-col text-[#E50080]">코믹스</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브!/코믹스.html" class="nw-link">코믹스</a> · <a href="러브 라이브! School idol diary.html" class="nw-link">School idol diary 코믹스</a></td>
                        </tr>
                        <tr>
                            <th class="nw-th-col text-[#E50080]">애니</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브!/애니메이션.html" class="nw-link">애니메이션</a> (<a href="러브 라이브!(애니메이션 1기).html" class="nw-link">1기</a> · <a href="러브 라이브!(애니메이션 2기).html" class="nw-link">2기</a> · <a href="러브 라이브! 더 스쿨 아이돌 무비.html" class="nw-link">극장판</a>)</td>
                        </tr>
                        <tr>
                            <th class="nw-th-col text-[#E50080]">게임</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! School idol paradise.html" class="nw-link">스쿠파라</a></td>
                        </tr>
                        <tr>
                            <th rowspan="2" class="nw-th-col text-[#E50080]">관<br>련<br><br>문<br>서</th>
                            <th class="nw-th-col text-[#E50080]">2차 창작</th>
                            <td colspan="4" class="text-left px-2"><a href="나는 코우사카 호노카, 지금은 뉴욕에 와 있어!.html" class="nw-link">나는 코우사카 호노카, 지금은 뉴욕에 와 있어!</a> · <a href="논타누.html" class="nw-link">논타누</a> · <a href="러브라이브 2.5차원.html" class="nw-link">러브라이브 2.5차원</a> · <a href="러브 버스터즈.html" class="nw-link">러브 버스터즈</a> · <a href="뮤즈의 프로듀서(?).html" class="nw-link">뮤즈의 프로듀서(?)</a> · <a href="밀리라이브.html" class="nw-link">밀리라이브</a> · <a href="츙츙.html" class="nw-link">츙츙</a> · <a href="피아노로 듣는 러브라이브!.html" class="nw-link">피아노로 듣는 러브라이브!</a></td>
                        </tr>
                        <tr>
                            <th class="nw-th-col text-[#E50080]">기타</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브!/애니메이션/에피소드 가이드.html" class="nw-link">애니메이션 에피소드 가이드</a> · <a href="러브 라이브!/무대탐방.html" class="nw-link">무대탐방</a> · <a href="러브 라이브!/드라마 CD.html" class="nw-link">드라마 CD</a> · <a href="μ’s FINAL LOVE LIVE! ~μ’sic forever~/논란.html" class="nw-link">μ’s FINAL LIVE 논란</a> · <a href="니코니코니.html" class="nw-link">니코니코니</a> · <a href="학교의 허가 인정할 수 없어.html" class="nw-link">학교의 허가 인정할 수 없어</a></td>
                        </tr>
                    </table>
                </details>

                <!-- Aqours -->
                <details class="nw-box" style="border-color:#19B1F6;">
                    <summary style="background-color:#19B1F6;" class="outline-none">
                        <a href="러브 라이브! 선샤인!!.html" class="nw-link"><img src="이미지/bnr_sunshine.webp" class="max-w-[450px] w-full object-contain" onerror="this.style.display='none'; this.nextSibling.style.display='inline';"><span style="display:none;">러브 라이브! 선샤인!!</span></a>
                    </summary>
                    <table class="nw-tbl" style="border-color:#19B1F6;">
                        <tr>
                            <th rowspan="6" class="w-[10%] bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">등<br>장<br>인<br>물</th>
                            <th class="w-[10%] bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">그룹</th>
                            <td colspan="3" class="w-[60%] bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA] font-bold text-lg"><a href="Aqours.html" class="nw-link">Aqours</a></td>
                            <td rowspan="2" class="w-[20%] font-bold text-lg text-white" style="background-image:linear-gradient(to right, #664488, #995577);"><a href="Saint Snow.html" class="nw-link">Saint Snow</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">유닛</th>
                            <td class="bg-[#FFB38F] text-white dark:bg-[#461600] font-bold"><a href="CYaRon!.html" class="nw-link">CYaRon!</a></td>
                            <td class="bg-[#DA86BB] text-white dark:bg-[#6E405D] font-bold"><a href="AZALEA.html" class="nw-link">AZALEA</a></td>
                            <td class="bg-[#C692EB] text-white dark:bg-[#501A71] font-bold"><a href="Guilty Kiss.html" class="nw-link">Guilty Kiss</a></td>
                        </tr>
                        <tr>
                            <th rowspan="4" class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">멤버</th>
                            <td><a href="타카미 치카.html" class="nw-link"><img src="이미지/타카미 치카.webp" class="nw-img" onerror="this.style.display='none'">타카미 치카</a></td>
                            <td><a href="마츠우라 카난.html" class="nw-link"><img src="이미지/마츠우라 카난.webp" class="nw-img" onerror="this.style.display='none'">마츠우라 카난</a></td>
                            <td><a href="사쿠라우치 리코.html" class="nw-link"><img src="이미지/사쿠라우치 리코.webp" class="nw-img" onerror="this.style.display='none'">사쿠라우치 리코</a></td>
                            <td rowspan="2"><a href="카즈노 세이라.html" class="nw-link"><img src="이미지/카즈노 세이라.webp" class="nw-img" onerror="this.style.display='none'">카즈노 세이라</a></td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a href="와타나베 요우.html" class="nw-link"><img src="이미지/와타나베 요우.webp" class="nw-img" onerror="this.style.display='none'">와타나베 요우</a> <a href="와이와이와이.html" class="nw-link text-[#19B1F6]">*</a></td>
                            <td rowspan="2"><a href="쿠로사와 다이아.html" class="nw-link"><img src="이미지/쿠로사와 다이아.webp" class="nw-img" onerror="this.style.display='none'">쿠로사와 다이아</a></td>
                            <td rowspan="2"><a href="츠시마 요시코.html" class="nw-link"><img src="이미지/츠시마 요시코.webp" class="nw-img" onerror="this.style.display='none'">츠시마 요시코</a> <a href="와이와이와이.html" class="nw-link text-[#19B1F6]">*</a></td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a href="카즈노 리아.html" class="nw-link"><img src="이미지/카즈노 리아.webp" class="nw-img" onerror="this.style.display='none'">카즈노 리아</a></td>
                        </tr>
                        <tr>
                            <td><a href="쿠로사와 루비.html" class="nw-link"><img src="이미지/쿠로사와 루비.webp" class="nw-img" onerror="this.style.display='none'">쿠로사와 루비</a> <a href="와이와이와이.html" class="nw-link text-[#19B1F6]">*</a></td>
                            <td><a href="쿠니키다 하나마루.html" class="nw-link"><img src="이미지/쿠니키다 하나마루.webp" class="nw-img" onerror="this.style.display='none'">쿠니키다 하나마루</a></td>
                            <td><a href="오하라 마리.html" class="nw-link"><img src="이미지/오하라 마리.webp" class="nw-img" onerror="this.style.display='none'">오하라 마리</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" rowspan="2" class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]"><a href="러브 라이브! 선샤인!!/음반.html" class="nw-link">음반</a></th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! 선샤인!!/음반/애니메이션.html" class="nw-link">애니메이션 관련 음반</a></td>
                        </tr>
                        <tr>
                            <td colspan="3" class="text-left px-2 bg-[#fff] dark:bg-[#1f2023]"><a href="러브 라이브! 선샤인!!/음반/정규 싱글.html" class="nw-link">정규 싱글</a> · <a href="러브 라이브! 선샤인!!/음반/유닛 음반.html" class="nw-link">유닛 음반</a> · <a href="러브 라이브! 선샤인!!/음반/앨범.html" class="nw-link">앨범</a> · <a href="러브 라이브! 선샤인!!/음반.html" class="nw-link">듀오 & 트리오 싱글</a> · <a href="러브 라이브! 선샤인!!/음반.html" class="nw-link">게임 관련 음반</a></td>
                            <td><a href="러브 라이브! 선샤인!!/음반/정규 싱글.html" class="nw-link">정규 싱글</a></td>
                        </tr>
                        <tr>
                            <th rowspan="4" class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">라<br>이<br>브</th>
                            <th class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">공통</th>
                            <td colspan="4" class="text-left px-2"><a href="Saint Snow PRESENTS LOVELIVE! SUNSHINE!! HAKODATE UNIT CARNIVAL.html" class="nw-link">HAKODATE UNIT CARNIVAL</a> · <a href="러브 라이브! 선샤인!! Guilty Kiss × Saint Snow TWO-MAN LIVE.html" class="nw-link">Guilty Kiss × Saint Snow</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">정규</th>
                            <td colspan="3" class="text-left px-2"><a href="러브 라이브! 선샤인!! Aqours First LoveLive! ~Step! ZERO to ONE~.html" class="nw-link">First</a> · <a href="러브 라이브! 선샤인!! Aqours 2nd LoveLive! HAPPY PARTY TRAIN TOUR.html" class="nw-link">2nd</a> · <a href="러브 라이브! 선샤인!! Aqours 3rd LoveLive! Tour ~WONDERFUL STORIES~.html" class="nw-link">3rd</a> · <a href="러브 라이브! 선샤인!! Aqours 4th LoveLive! ~Sailing to the Sunshine~.html" class="nw-link">4th</a> · <a href="러브 라이브! 선샤인!! Aqours 5th LoveLive! ~Next SPARKLING!!~.html" class="nw-link">5th</a> · <del><a href="러브 라이브! 선샤인!! Aqours 6th LoveLive! DOME TOUR 2020.html" class="nw-link">6th</a></del> · <a href="러브 라이브! 선샤인!! Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~.html" class="nw-link">6th</a> · <a href="러브 라이브! 선샤인!! Aqours Finale LoveLive! ～永久stage～.html" class="nw-link">Finale</a></td>
                            <td><a href="Saint Snow 1st GIG ~Welcome to Dazzling White Town~.html" class="nw-link">1st</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">유닛</th>
                            <td class="text-left px-1"><a href="CYaRon! First LOVELIVE! ~Braveheart Coaster~.html" class="nw-link">First</a> · <a href="러브 라이브! 선샤인!! CYaRon! 2nd LoveLive! ~대혁명☆Wake Up Kingdom~.html" class="nw-link">2nd</a></td>
                            <td class="text-left px-1"><del><a href="AZALEA First LOVELIVE! ~Amazing Travel DNA~.html" class="nw-link">First</a></del> · <a href="러브 라이브! 선샤인!! AZALEA 1st LoveLive! ~In The Dark /*비밀 이야기*/~.html" class="nw-link">First</a> · <a href="러브 라이브! 선샤인!! AZALEA 2nd LoveLive! ~Amazing Travel DNA REBOOT~.html" class="nw-link">2nd</a></td>
                            <td class="text-left px-1"><a href="Guilty Kiss First LOVELIVE! ~New Romantic Sailors~.html" class="nw-link">First</a> · <a href="러브 라이브! 선샤인!! Guilty Kiss 2nd LoveLive! ~Return To Love ♡ Kiss Kiss Kiss~.html" class="nw-link">2nd</a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">기타</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! 선샤인!! Aqours World LoveLive! ASIA TOUR 2019.html" class="nw-link">ASIA TOUR 2019</a>(<a href="러브 라이브! 선샤인!! Aqours World LoveLive! ASIA TOUR 2019/서울 공연.html" class="nw-link">서울</a>) · <del><a href="LOVELIVE! SUNSHINE!! UNIT LIVE ADVENTURE 2020 ~PERFECT WORLD~.html" class="nw-link">PERFECT WORLD</a></del> · <a href="LOVELIVE! SUNSHINE!! UNIT LIVE ADVENTURE 2020.html" class="nw-link">UNIT LIVE 2020</a> · <del><a href="러브 라이브! 선샤인!! Aqours 5th Anniversary LoveLive! ~LET'S GO WONDER TRIP~.html" class="nw-link">5th Anniversary Live</a></del> · <a href="러브 라이브! 선샤인!! Aqours ONLINE LoveLive!.html" class="nw-link">ONLINE Live</a> · <a href="러브 라이브! 선샤인!! Aqours EXTRA LoveLive! ~DREAMY CONCERT 2021~.html" class="nw-link">EXTRA Live 2021</a> · <a href="러브 라이브! 선샤인!! Aqours EXTRA LoveLive! 2023 ~It’s a 無限大☆WORLD~.html" class="nw-link">EXTRA Live 2023</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">이벤트</th>
                            <td colspan="4" class="text-left px-2"><a href="Aqours in Seoul.html" class="nw-link">Aqours in Seoul</a> · <a href="러브 라이브! 선샤인!! Aqours 클럽 활동 LIVE & FAN MEETING ~Landing action Yeah!!~.html" class="nw-link">클럽 활동 LIVE & FAN MEETING</a>(<a href="러브 라이브! 선샤인!! Aqours 클럽 활동 LIVE & FAN MEETING ~Landing action Yeah!!~/서울 공연.html" class="nw-link">서울 공연</a>) · <a href="러브 라이브! 선샤인!! Aqours 클럽 활동 LIVE & FAN MEETING ~Hop! Step! Jump!~ 2018 유닛대항전국투어.html" class="nw-link">2018 유닛대항전국투어</a> · <a href="러브 라이브! 선샤인!! 누마즈 지모아이 마츠리.html" class="nw-link">누마즈 지모아이 마츠리</a>(<a href="러브 라이브! 선샤인!! 누마즈 지모아이 마츠리(2022).html" class="nw-link">2022</a>·<a href="러브 라이브! 선샤인!! 누마즈 지모아이 마츠리 2023.html" class="nw-link">2023</a>·<a href="러브 라이브! 선샤인!! 누마즈 지모아이 마츠리 2024.html" class="nw-link">2024</a>·<a href="러브 라이브! 선샤인!! 누마즈 지모아이 마츠리 2025.html" class="nw-link">2025</a>)</td>
                        </tr>
                        <tr>
                            <th rowspan="6" class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">미<br>디<br>어<br><br>믹<br>스</th>
                            <th class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">라디오</th>
                            <td colspan="4" class="text-left px-2"><a href="Aqours 우라노호시 여학원 RADIO!!!.html" class="nw-link">Aqours 우라노호시 여학원 RADIO!!!</a> · <a href="Aqours 우라노호시 여학원 RADIO!!!.html" class="nw-link">이벤트</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">방송</th>
                            <td colspan="4" class="text-left px-2"><a href="Aqours 우라노호시 여학원 생방송!!!.html" class="nw-link">Aqours 우라노호시 여학원 생방송!!!</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">소설</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! 선샤인!! School idol diary.html" class="nw-link">School idol diary</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">코믹스</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! 선샤인!!/코믹스.html" class="nw-link">코믹스</a> · <a href="러브 라이브! 선샤인!! School idol diary.html" class="nw-link">School idol diary 코믹스</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">애니</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! 선샤인!!/애니메이션.html" class="nw-link">TV 애니메이션</a> (<a href="러브 라이브! 선샤인!!(애니메이션 1기).html" class="nw-link">1기</a> · <a href="러브 라이브! 선샤인!!(애니메이션 2기).html" class="nw-link">2기</a> · <a href="러브 라이브! 선샤인!! 더 스쿨 아이돌 무비 오버 더 레인보우.html" class="nw-link">극장판</a>)</td>
                        </tr>
                        <tr>
                            <th class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">영화</th>
                            <td colspan="4" class="text-left px-2"><a href="Aqours Documentary.html" class="nw-link">Aqours Documentary</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#D1F4FA] text-[#06272D] dark:bg-[#06272D] dark:text-[#D1F4FA]">기타</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! 선샤인!!/애니메이션/에피소드 가이드.html" class="nw-link">애니메이션 에피소드 가이드</a> · <a href="러브 라이브! 선샤인!!/무대탐방.html" class="nw-link">무대탐방</a> · <a href="愛♡スクリ～ム！.html" class="nw-link">愛♡スクリ～ム！</a></td>
                        </tr>
                    </table>
                </details>

                <!-- Nijigasaki -->
                <details class="nw-box" style="border-color:#F8B656;">
                    <summary style="background-color:#F8B656;" class="outline-none">
                        <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회.html" class="nw-link"><img src="이미지/bnr_nijigasaki.webp" class="max-w-[450px] w-full object-contain" onerror="this.style.display='none'; this.nextSibling.style.display='inline';"><span style="display:none;">러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회</span></a>
                    </summary>
                    <table class="nw-tbl" style="border-color:#F8B656;">
                        <tr>
                            <th rowspan="6" class="w-[10%] bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">등<br>장<br>인<br>물</th>
                            <th class="w-[10%] bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">소속</th>
                            <td colspan="5" class="w-[80%] bg-[#FEEECD] text-[#322201] dark:bg-[#322201] dark:text-[#FEEECD] font-bold text-lg"><a href="니지가사키 학원 스쿨 아이돌 동호회.html" class="nw-link">니지가사키 학원 스쿨 아이돌 동호회</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">유닛</th>
                            <td class="w-[16%] bg-[#B9B9B9] text-white dark:bg-[#333333] font-bold"><a href="DiverDiva.html" class="nw-link">DiverDiva</a></td>
                            <td class="w-[16%] bg-[#E8868E] text-white dark:bg-[#35080B] font-bold"><a href="A·ZU·NA.html" class="nw-link">A·ZU·NA</a></td>
                            <td class="w-[16%] bg-[#FFE8DA] text-black dark:bg-[#482F1F] dark:text-white font-bold"><a href="QU4RTZ.html" class="nw-link">QU4RTZ</a></td>
                            <td class="w-[16%] bg-[#B6B0F4] text-white dark:bg-[#252244] font-bold"><a href="R3BIRTH.html" class="nw-link">R3BIRTH</a></td>
                            <td class="w-[16%] font-bold text-black dark:text-white">매니저</td>
                        </tr>
                        <tr>
                            <th rowspan="4" class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">멤버</th>
                            <td rowspan="2"><a href="아사카 카린.html" class="nw-link"><img src="이미지/아사카 카린.webp" class="nw-img" onerror="this.style.display='none'">아사카 카린</a></td>
                            <td><a href="우에하라 아유무.html" class="nw-link"><img src="이미지/우에하라 아유무.webp" class="nw-img" onerror="this.style.display='none'">우에하라 아유무</a></td>
                            <td><a href="나카스 카스미.html" class="nw-link"><img src="이미지/나카스 카스미.webp" class="nw-img" onerror="this.style.display='none'">나카스 카스미</a></td>
                            <td><a href="미후네 시오리코.html" class="nw-link"><img src="이미지/미후네 시오리코.webp" class="nw-img" onerror="this.style.display='none'">미후네 시오리코</a></td>
                            <td rowspan="4"><a href="타카사키 유우.html" class="nw-link"><img src="이미지/타카사키 유우.webp" class="nw-img" onerror="this.style.display='none'">타카사키 유우</a></td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a href="오사카 시즈쿠.html" class="nw-link"><img src="이미지/오사카 시즈쿠.webp" class="nw-img" onerror="this.style.display='none'">오사카 시즈쿠</a></td>
                            <td><a href="코노에 카나타.html" class="nw-link"><img src="이미지/코노에 카나타.webp" class="nw-img" onerror="this.style.display='none'">코노에 카나타</a></td>
                            <td rowspan="2"><a href="미아 테일러.html" class="nw-link"><img src="이미지/미아 테일러.webp" class="nw-img" onerror="this.style.display='none'">미아 테일러</a></td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a href="미야시타 아이.html" class="nw-link"><img src="이미지/미야시타 아이.webp" class="nw-img" onerror="this.style.display='none'">미야시타 아이</a></td>
                            <td><a href="엠마 베르데.html" class="nw-link"><img src="이미지/엠마 베르데.webp" class="nw-img" onerror="this.style.display='none'">엠마 베르데</a></td>
                        </tr>
                        <tr>
                            <td><a href="유키 세츠나.html" class="nw-link"><img src="이미지/유키 세츠나.webp" class="nw-img" onerror="this.style.display='none'">유키 세츠나</a></td>
                            <td><a href="텐노지 리나.html" class="nw-link"><img src="이미지/텐노지 리나.webp" class="nw-img" onerror="this.style.display='none'">텐노지 리나</a></td>
                            <td><a href="쇼우 란쥬.html" class="nw-link"><img src="이미지/쇼우 란쥬.webp" class="nw-img" onerror="this.style.display='none'">쇼우 란쥬</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]"><a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/음반.html" class="nw-link">음반</a></th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/음반/정규 앨범.html" class="nw-link">정규 앨범</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/음반/유닛 싱글.html" class="nw-link">유닛 싱글</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/음반.html" class="nw-link">솔로 싱글</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/음반/애니메이션.html" class="nw-link">애니메이션 관련 음반</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">라이브</th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 First Live “with You”.html" class="nw-link">First</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 2nd Live!.html" class="nw-link">2nd</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 3rd Live! School Idol Festival ~꿈의 시작~.html" class="nw-link">3rd</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 4th Live! ~Love the Life We Live~.html" class="nw-link">4th</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 5th Live! 무지개가 피어나는 장소.html" class="nw-link">5th</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 6th Live! I love You ⇆ You love Me.html" class="nw-link">6th</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 7th Live! NEW TOKIMEKI LAND.html" class="nw-link">7th</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 8th Live! TOKIMEKI Express.html" class="nw-link">8th</a><br><a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 FLOWER MUSIC LIVE『Boooooom Boooooom Bee!!』.html" class="nw-link">FLOWER MUSIC</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">이벤트</th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 교내 매칭 페스티벌.html" class="nw-link">교내 매칭 페스티벌</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 교내 셔플 페스티벌.html" class="nw-link">교내 셔플 페스티벌</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 UNIT LIVE & FAN MEETING.html" class="nw-link">UNIT LIVE & FAN MEETING</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 유닛 라이브.html" class="nw-link">유닛 라이브</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 니지여행 TOKIMEKI FAN MEETING TOUR.html" class="nw-link">니지여행</a> · <a href="러브 라이브! 니지가사키학원 스쿨 아이돌 동호회 LIVE＆FAN MEETING TOUR 니지가쿠 교외학습 노래하자♪춤추자♪이야기하자♪.html" class="nw-link">교외학습</a></td>
                        </tr>
                        <tr>
                            <th rowspan="6" class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">미<br>디<br>어<br><br>믹<br>스</th>
                            <th class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">라디오</th>
                            <td colspan="5" class="text-left px-2"><del><a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 보이는 라디오.html" class="nw-link">보이는 라디오</a></del> · <del><a href="러브 라이브! 니지가사키 학원 ~점심 시간 방송실~.html" class="nw-link">점심 시간 방송실</a></del> · <del><a href="러브 라이브! 니지가사키 학원 ~아침 시간 방송실~.html" class="nw-link">아침 시간 방송실</a></del> · <del><a href="러브 라이브! 니지가사키 학원 ~방과 후 방송실~.html" class="nw-link">방과 후 방송실</a></del> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/라디오.html" class="nw-link">라디오 아니가사키!</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/라디오.html" class="nw-link">니지치즈 방송실</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">방송</th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/생방송.html" class="nw-link">니지가사키 학원 스쿨 아이돌 동호회 생방송</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 ~AbemaTV 울트라 게임즈 이미지 걸 결정전~.html" class="nw-link">AbemaTV 울트라 게임즈 이미지 걸 결정전</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">코믹스</th>
                            <td colspan="5" class="text-left px-2"><a href="니지욘.html" class="nw-link">니지욘</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">애니</th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/애니메이션.html" class="nw-link">애니메이션</a> (<a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회(애니메이션 1기).html" class="nw-link">TVA 1기</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회(애니메이션 2기).html" class="nw-link">TVA 2기</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 NEXT SKY.html" class="nw-link">NEXT SKY</a> · <a href="영화 러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 완결편 제1장.html" class="nw-link">완결편 1장</a> · <a href="영화 러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 완결편 제2장.html" class="nw-link">완결편 2장</a>) · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/스페셜 드라마.html" class="nw-link">스페셜 드라마</a> · <a href="니지욘 애니메이션.html" class="nw-link">니지욘 애니메이션</a>(<a href="니지욘 애니메이션.html" class="nw-link">1기</a> · <a href="니지욘 애니메이션 2.html" class="nw-link">2기</a>)</td>
                        </tr>
                        <tr>
                            <th class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">소설</th>
                            <td colspan="5" class="text-left px-2"><a href="홍련의 검희.html" class="nw-link">홍련의 검희</a> ･ <a href="레전드 오브 니지가쿠.html" class="nw-link">레전드 오브 니지가쿠</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">게임</th>
                            <td colspan="5" class="text-left px-2">TOKIMEKI RunRuns ･ <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회 두근거림의 미래 지도.html" class="nw-link">두근거림의 미래 지도</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#feeecd] text-[#322201] dark:bg-[#322201] dark:text-[#feeecd]">기타</th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회.html" class="nw-link">선전 활동</a> (<a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/전격 온라인 분실.html" class="nw-link">전격</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/패미통 App 분실.html" class="nw-link">패미통</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/스쿠페스 분실.html" class="nw-link">스쿠페스</a>) · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/애니메이션/에피소드 가이드.html" class="nw-link">애니메이션 에피소드 가이드</a> · <a href="러브 라이브! 니지가사키 학원 스쿨 아이돌 동호회/무대탐방.html" class="nw-link">무대탐방</a> · <a href="유우뽀무.html" class="nw-link">유우뽀무</a></td>
                        </tr>
                    </table>
                </details>

                <!-- Liella! -->
                <details class="nw-box" style="border-color:#DA57D8;">
                    <summary style="background-color:#DA57D8;" class="outline-none">
                        <a href="러브 라이브! 슈퍼스타!!.html" class="nw-link"><img src="이미지/bnr_superstar.webp" class="max-w-[450px] w-full object-contain" onerror="this.style.display='none'; this.nextSibling.style.display='inline';"><span style="display:none;">러브 라이브! 슈퍼스타!!</span></a>
                    </summary>
                    <table class="nw-tbl" style="border-color:#DA57D8;">
                        <tr>
                            <th rowspan="6" class="w-[10%] bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">등<br>장<br>인<br>물</th>
                            <th class="w-[10%] bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">그룹</th>
                            <td colspan="4" class="w-[64%] bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7] font-bold text-lg"><a href="Liella!.html" class="nw-link">Liella!</a></td>
                            <td rowspan="2" class="w-[16%] bg-[#FFD2C5] text-[#7F4738] dark:bg-[#7F4738] dark:text-[#FFD2C5] font-bold"><a href="Sunny Passion.html" class="nw-link">Sunny Passion</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">유닛</th>
                            <td class="font-bold"><a href="CatChu!.html" class="nw-link">CatChu!</a></td>
                            <td class="font-bold"><a href="KALEIDOSCORE.html" class="nw-link">KALEIDOSCORE</a></td>
                            <td colspan="2" class="font-bold"><a href="5yncri5e!.html" class="nw-link">5yncri5e!</a></td>
                        </tr>
                        <tr>
                            <th rowspan="4" class="bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">멤버</th>
                            <td><a href="시부야 카논.html" class="nw-link"><img src="이미지/시부야 카논.webp" class="nw-img" onerror="this.style.display='none'">시부야 카논</a></td>
                            <td><a href="탕 쿠쿠.html" class="nw-link"><img src="이미지/탕 쿠쿠.webp" class="nw-img" onerror="this.style.display='none'">탕 쿠쿠</a></td>
                            <td><a href="아라시 치사토.html" class="nw-link"><img src="이미지/아라시 치사토.webp" class="nw-img" onerror="this.style.display='none'">아라시 치사토</a></td>
                            <td rowspan="2"><a href="오니츠 나츠미.html" class="nw-link"><img src="이미지/오니츠카 나츠미.webp" class="nw-img" onerror="this.style.display='none'">오니츠카 나츠미</a></td>
                            <td rowspan="2"><a href="히이라기 마오.html" class="nw-link"><img src="이미지/히이라기 마오.webp" class="nw-img" onerror="this.style.display='none'">히이라기 마오</a></td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a href="헤안나 스미레.html" class="nw-link"><img src="이미지/헤안나 스미레.webp" class="nw-img" onerror="this.style.display='none'">헤안나 스미레</a></td>
                            <td rowspan="2"><a href="하즈키 렌.html" class="nw-link"><img src="이미지/하즈키 렌.webp" class="nw-img" onerror="this.style.display='none'">하즈키 렌</a></td>
                            <td rowspan="2"><a href="사쿠라코지 키나코.html" class="nw-link"><img src="이미지/사쿠라코지 키나코.webp" class="nw-img" onerror="this.style.display='none'">사쿠라코지 키나코</a></td>
                        </tr>
                        <tr>
                            <td rowspan="2"><a href="오니츠카 토마리.html" class="nw-link"><img src="이미지/오니츠카 토마리.webp" class="nw-img" onerror="this.style.display='none'">오니츠카 토마리</a></td>
                            <td rowspan="2"><a href="히지리사와 유우나.html" class="nw-link"><img src="이미지/히지리사와 유우나.webp" class="nw-img" onerror="this.style.display='none'">히지리사와 유우나</a></td>
                        </tr>
                        <tr>
                            <td><a href="요네메 메이.html" class="nw-link"><img src="이미지/요네메 메이.webp" class="nw-img" onerror="this.style.display='none'">요네메 메이</a></td>
                            <td><a href="빈 마르가레테.html" class="nw-link"><img src="이미지/빈 마르가레테.webp" class="nw-img" onerror="this.style.display='none'">빈 마르가레테</a></td>
                            <td><a href="와카나 시키.html" class="nw-link"><img src="이미지/와카나 시키.webp" class="nw-img" onerror="this.style.display='none'">와카나 시키</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]"><a href="러브 라이브! 슈퍼스타!!/음반.html" class="nw-link">음반</a></th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 슈퍼스타!!/음반.html" class="nw-link">정규 싱글</a> · <a href="러브 라이브! 슈퍼스타!!/음반/애니메이션.html" class="nw-link">애니메이션 관련 음반</a> · <a href="러브 라이브! 슈퍼스타!!/음반/유닛 음반.html" class="nw-link">유닛 음반</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">라이브</th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 슈퍼스타!! Liella! First LoveLive! Tour ~Starlines~.html" class="nw-link">First</a> · <a href="러브 라이브! 슈퍼스타!! Liella! 2nd LoveLive! ~What a Wonderful Dream!!~.html" class="nw-link">2nd</a> · <a href="러브 라이브! 슈퍼스타!! Liella! 3rd LoveLive! Tour ~WE WILL!!~.html" class="nw-link">3rd</a> · <a href="러브 라이브! 슈퍼스타!! Liella! 4th LoveLive! Tour ~brand new Sparkle~.html" class="nw-link">4th</a> · <a href="러브 라이브! 슈퍼스타!! Liella! 5th LoveLive! ~Twinkle Triangle~.html" class="nw-link">5th</a> · <a href="러브 라이브! 슈퍼스타!! Liella! 6th LoveLive! Tour ~Let's be ONE~.html" class="nw-link">6th</a> · <a href="러브 라이브! 슈퍼스타!! Liella! 7th LoveLive! ~Fly! MUSIC WORLD♪~.html" class="nw-link">7th</a><br><a href="MTV Unplugged Presents: LoveLive! Superstar!! Liella!.html" class="nw-link">MTV Unplugged</a> · 튜토리엘라이브(<a href="Liella!의 튜토리엘라이브!!.html" class="nw-link">2025</a> · <a href="Liella!의 튜토리엘라이브!! 2026.html" class="nw-link">2026</a>) · <a href="러브 라이브! 슈퍼스타!! Liella! First Generation LoveLive! ～Wonderful Starlines～.html" class="nw-link">Wonderful Starlines</a> · <a href="러브 라이브! 슈퍼스타!! Liella! Special LoveLive! ~Connect the Stars~.html" class="nw-link">Connect the star</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">이벤트</th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 슈퍼스타!! Liella! LIVE&FAN MEETING Tour.html" class="nw-link">LIVE&FAN MEETING Tour</a> · <a href="러브 라이브! 슈퍼스타!! Liella! 유닛 라이브&팬미팅 투어 뮤직 토크 팀워크! 프라임 어드벤처!!.html" class="nw-link">유닛 라이브&팬미팅 투어</a></td>
                        </tr>
                        <tr>
                            <th rowspan="4" class="bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">미<br>디<br>어<br><br>믹<br>스</th>
                            <th class="bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">라디오</th>
                            <td colspan="5" class="text-left px-2"><a href="유이죠 런치타임 방송국 리에라지!.html" class="nw-link">유이죠 런치타임 방송국 리에라지!</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">방송</th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 슈퍼스타!!/생방송.html" class="nw-link">생방송</a> · 튜토리엘라(<a href="Liella!의 튜토리엘라!!.html" class="nw-link">1기</a> · <a href="Liella!의 튜토리엘라!! 2기.html" class="nw-link">2기</a>)</td>
                        </tr>
                        <tr>
                            <th class="bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">애니</th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 슈퍼스타!!/애니메이션.html" class="nw-link">TV 애니메이션</a> (<a href="러브 라이브! 슈퍼스타!!(애니메이션 1기).html" class="nw-link">1기</a> · <a href="러브 라이브! 슈퍼스타!!(애니메이션 2기).html" class="nw-link">2기</a> · <a href="러브 라이브! 슈퍼스타!!(애니메이션 3기).html" class="nw-link">3기</a>)</td>
                        </tr>
                        <tr>
                            <th class="bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">게임</th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 슈퍼스타!! 메모리 콜렉트.html" class="nw-link">메모리 콜렉트</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#F2E0F7] text-[#2C0038] dark:bg-[#2C0038] dark:text-[#F2E0F7]">기타</th>
                            <td colspan="5" class="text-left px-2"><a href="러브 라이브! 슈퍼스타!!/애니메이션/에피소드 가이드.html" class="nw-link">애니메이션 에피소드 가이드</a> · <a href="러브 라이브! 슈퍼스타!!/무대탐방.html" class="nw-link">무대탐방</a></td>
                        </tr>
                    </table>
                </details>

                <!-- Hasunosora -->
                <details class="nw-box" style="border-color:#FB8A9B;">
                    <summary style="background-color:#FB8A9B;" class="outline-none">
                        <a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽.html" class="nw-link"><img src="이미지/bnr_hasunosora_104_1.webp" class="max-w-[450px] w-full object-contain" onerror="this.style.display='none'; this.nextSibling.style.display='inline';"><span style="display:none;">러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽</span></a>
                    </summary>
                    <table class="nw-tbl" style="border-color:#FB8A9B;">
                        <tr>
                            <th rowspan="5" class="w-[10%] bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">등<br>장<br>인<br>물</th>
                            <th class="w-[10%] bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">소속</th>
                            <td colspan="4" class="w-[80%] bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0] font-bold text-lg"><a href="하스노소라 여학원 스쿨 아이돌 클럽.html" class="nw-link">하스노소라 여학원 스쿨 아이돌 클럽</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">유닛</th>
                            <td class="w-[20%] font-bold"><a href="스리즈 부케.html" class="nw-link">스리즈 부케</a></td>
                            <td class="w-[20%] font-bold"><a href="DOLLCHESTRA.html" class="nw-link">DOLLCHESTRA</a></td>
                            <td class="w-[20%] font-bold"><a href="미라쿠라파크!.html" class="nw-link">미라쿠라파크!</a></td>
                            <td class="w-[20%] font-bold"><a href="Edel Note.html" class="nw-link">Edel Note</a></td>
                        </tr>
                        <tr>
                            <th rowspan="2" class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">현<br>역<br>멤<br>버</th>
                            <td><a href="히노시타 카호.html" class="nw-link"><img src="이미지/히노시타 카호.webp" class="nw-img" onerror="this.style.display='none'">히노시타 카호</a></td>
                            <td><a href="무라노 사야카.html" class="nw-link"><img src="이미지/무라노 사야카.webp" class="nw-img" onerror="this.style.display='none'">무라노 사야카</a></td>
                            <td><a href="오사와 루리노.html" class="nw-link"><img src="이미지/오사와 루리노.webp" class="nw-img" onerror="this.style.display='none'">오사와 루리노</a></td>
                            <td><a href="세라스 야나기다 릴리엔펠트.html" class="nw-link"><img src="이미지/세라스 야나기다 릴리엔펠트.webp" class="nw-img" onerror="this.style.display='none'">세라스 야나기다<br>릴리엔펠트</a></td>
                        </tr>
                        <tr>
                            <td><a href="모모세 긴코.html" class="nw-link"><img src="이미지/모모세 긴코.webp" class="nw-img" onerror="this.style.display='none'">모모세 긴코</a></td>
                            <td><a href="카치마치 코스즈.html" class="nw-link"><img src="이미지/카치마치 코스즈.webp" class="nw-img" onerror="this.style.display='none'">카치마치 코스즈</a></td>
                            <td><a href="안요지 히메.html" class="nw-link"><img src="이미지/안요지 히메.webp" class="nw-img" onerror="this.style.display='none'">안요지 히메</a></td>
                            <td><a href="카츠라기 이즈미.html" class="nw-link"><img src="이미지/카츠라기 이즈미.webp" class="nw-img" onerror="this.style.display='none'">카츠라기 이즈미</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">졸<br>업<br>생</th>
                            <td><a href="오토무네 코즈에.html" class="nw-link"><img src="이미지/오토무네 코즈에.webp" class="nw-img" onerror="this.style.display='none'">오토무네 코즈에</a></td>
                            <td><a href="유기리 츠즈리.html" class="nw-link"><img src="이미지/유기리 츠즈리.webp" class="nw-img" onerror="this.style.display='none'">유기리 츠즈리</a></td>
                            <td><a href="후지시마 메구미.html" class="nw-link"><img src="이미지/후지시마 메구미.webp" class="nw-img" onerror="this.style.display='none'">후지시마 메구미</a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]"><a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽/음반.html" class="nw-link">음반</a></th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽/음반.html" class="nw-link">정규 앨범</a> · <a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽/음반.html" class="nw-link">미니 앨범</a> · <a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽/음반/유닛 음반.html" class="nw-link">유닛 싱글</a> · <a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽/음반/스플릿 싱글.html" class="nw-link">스플릿 싱글</a> · <a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽/음반/싱글.html" class="nw-link">싱글</a> · <a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽/커버곡.html" class="nw-link">커버곡</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]"><a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽.html" class="nw-link">라이브</a></th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽 1st Live Tour ～RUN！CAN！FUN！～.html" class="nw-link">1st</a> · <a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽 2nd Live Tour ～Blooming with ○○○～.html" class="nw-link">2nd</a> · <a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽 3rd Live Tour TRY TRI UNITY!!!.html" class="nw-link">3rd</a> · <a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽 4th Live Dream ～Bloom, The Dream Believers～.html" class="nw-link">4th</a> · <a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽 5th Live Tour ～4Pair Power Spread!!!!～.html" class="nw-link">5th</a> · <a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽 6th Live Dream ～Bloom Garden Party～.html" class="nw-link">6th</a></td>
                        </tr>
                        <tr>
                            <th rowspan="5" class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">미<br>디<br>어<br><br>믹<br>스</th>
                            <th class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">앱</th>
                            <td colspan="4" class="text-left px-2"><a href="Link! Like! 러브 라이브!.html" class="nw-link">Link! Like! 러브 라이브!</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">라디오</th>
                            <td colspan="4" class="text-left px-2"><a href="캉캉&린린의 미라쿠라 진로상담실 라디오.html" class="nw-link">캉캉&린린의 미라쿠라 진로상담실 라디오</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">코믹스</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! flowers*-하스노소라 여학원 스쿨 아이돌 클럽-.html" class="nw-link">러브 라이브! flowers*-하스노소라 여학원 스쿨 아이돌 클럽-</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">애니</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽 Bloom Garden Party.html" class="nw-link">극장판</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">기타</th>
                            <td colspan="4" class="text-left px-2"><a href="하나 둘에 하스노소라!.html" class="nw-link">하나 둘에 하스노소라!</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#F7B6C0] text-[#362023] dark:bg-[#362023] dark:text-[#F7B6C0]">기타</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! 하스노소라 여학원 스쿨 아이돌 클럽/무대탐방.html" class="nw-link">무대탐방</a></td>
                        </tr>
                    </table>
                </details>

                <!-- Bluebird -->
                <details class="nw-box" style="border-color:#ed6d00;">
                    <summary style="background-color:#ed6d00;" class="outline-none">
                        <a href="이키즈라이브! LOVELIVE! BLUEBIRD.html" class="nw-link"><img src="이미지/bnr_bluebird.webp" class="max-w-[450px] w-full object-contain" onerror="this.style.display='none'; this.nextSibling.style.display='inline';"><span style="display:none;">이키즈라이브! LOVELIVE! BLUEBIRD</span></a>
                    </summary>
                    <table class="nw-tbl" style="border-color:#ed6d00;">
                        <tr>
                            <th rowspan="6" class="w-[10%] bg-[#80c5e1] text-[#375561] dark:bg-[#375561] dark:text-[#80c5e1]">등<br>장<br>인<br>물</th>
                            <th class="w-[10%] bg-[#80c5e1] text-[#375561] dark:bg-[#375561] dark:text-[#80c5e1]">그룹</th>
                            <td colspan="4" class="w-[80%] bg-white dark:bg-[#1f2023] font-bold text-lg text-[#ed6d00]"><a href="이키즈라이부!.html" class="nw-link">이키즈라이부!</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#80c5e1] text-[#375561] dark:bg-[#375561] dark:text-[#80c5e1]">캠퍼스</th>
                            <td class="w-[20%] font-bold">아사쿠사<br>위성학교</td>
                            <td class="w-[20%] font-bold">후쿠이<br>위성학교</td>
                            <td class="w-[20%] font-bold">우메다<br>위성학교</td>
                            <td class="w-[20%] font-bold">도호쿠<br>위성학교</td>
                        </tr>
                        <tr>
                            <th rowspan="4" class="bg-[#80c5e1] text-[#375561] dark:bg-[#375561] dark:text-[#80c5e1]">멤버</th>
                            <td><a href="타카하시 폴카.html" class="nw-link"><img src="이미지/타카하시 폴카.webp" class="nw-img" onerror="this.style.display='none'">타카하시 폴카</a></td>
                            <td rowspan="2"><a href="카나자와 미라클.html" class="nw-link"><img src="이미지/카나자와 미라클.webp" class="nw-img" onerror="this.style.display='none'">카나자와 미라클</a></td>
                            <td><a href="하루미야 유쿠리.html" class="nw-link"><img src="이미지/하루미야 유쿠리.webp" class="nw-img" onerror="this.style.display='none'">하루미야 유쿠리</a></td>
                            <td rowspan="4"><a href="사사키 시온.html" class="nw-link"><img src="이미지/사사키 시온.webp" class="nw-img" onerror="this.style.display='none'">사사키 시온</a></td>
                        </tr>
                        <tr>
                            <td><a href="아자부 마이.html" class="nw-link"><img src="이미지/아자부 마이.webp" class="nw-img" onerror="this.style.display='none'">아자부 마이</a></td>
                            <td><a href="코노하나 오로라.html" class="nw-link"><img src="이미지/코노하나 오로라.webp" class="nw-img" onerror="this.style.display='none'">코노하나 오로라</a></td>
                        </tr>
                        <tr>
                            <td><a href="고토 아키라(러브 라이브!).html" class="nw-link"><img src="이미지/고토 아키라.webp" class="nw-img" onerror="this.style.display='none'">고토 아키라</a></td>
                            <td rowspan="2"><a href="쵸후 노리코.html" class="nw-link"><img src="이미지/쵸후 노리코.webp" class="nw-img" onerror="this.style.display='none'">쵸후 노리코</a></td>
                            <td><a href="야마다 미도리.html" class="nw-link"><img src="이미지/야마다 미도리.webp" class="nw-img" onerror="this.style.display='none'">야마다 미도리</a></td>
                        </tr>
                        <tr>
                            <td><a href="코마가타 하나비.html" class="nw-link"><img src="이미지/코마가타 하나비.webp" class="nw-img" onerror="this.style.display='none'">코마가타 하나비</a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th rowspan="2" class="bg-[#80c5e1] text-[#375561] dark:bg-[#375561] dark:text-[#80c5e1]">유닛</th>
                            <th class="bg-[#80c5e1] text-[#375561] dark:bg-[#375561] dark:text-[#80c5e1]">1기</th>
                            <td colspan="4" class="text-left px-2"><a href="CHAKI！.html" class="nw-link">CHAKI！</a> · <a href="Mi×Nori=Tea.html" class="nw-link">Mi×Nori=Tea</a> · <a href="Plumina.html" class="nw-link">Plumina</a> · <a href="SH1ON.html" class="nw-link">SH1ON</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#80c5e1] text-[#375561] dark:bg-[#375561] dark:text-[#80c5e1]">2기</th>
                            <td colspan="4" class="text-left px-2">투표중</td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#80c5e1] text-[#375561] dark:bg-[#375561] dark:text-[#80c5e1]"><a href="이키즈라이브! LOVELIVE! BLUEBIRD/음반.html" class="nw-link">음반</a></th>
                            <td colspan="4" class="text-left px-2"><a href="이키즈라이브! LOVELIVE! BLUEBIRD/음반.html" class="nw-link">싱글</a> · <a href="이키즈라이브! LOVELIVE! BLUEBIRD/음반/솔로 싱글.html" class="nw-link">솔로 싱글</a> · <a href="이키즈라이브! LOVELIVE! BLUEBIRD/커버곡.html" class="nw-link">커버곡</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#80c5e1] text-[#375561] dark:bg-[#375561] dark:text-[#80c5e1]">라이브</th>
                            <td colspan="4" class="text-left px-2"><a href="이키즈라이부! 1st LIVE ～ What is my L? ～.html" class="nw-link">1st</a> · <a href="이키즈라이부! 2nd LIVE.html" class="nw-link">2nd</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#80c5e1] text-[#375561] dark:bg-[#375561] dark:text-[#80c5e1]">라디오</th>
                            <td colspan="4" class="text-left px-2"><a href="이키즈라이부! 몰라라라디오!.html" class="nw-link">몰라라라디오!</a></td>
                        </tr>
                    </table>
                </details>

                <!-- Yohane -->
                <details class="nw-box" style="border-color:#19737D;">
                    <summary style="background-color:#19737D;" class="outline-none">
                        <a href="환일의 요하네 -SUNSHINE in the MIRROR-.html" class="nw-link"><img src="이미지/bnr_yohane.webp" class="max-w-[450px] w-full object-contain" onerror="this.style.display='none'; this.nextSibling.style.display='inline';"><span style="display:none;">환일의 요하네 -SUNSHINE in the MIRROR-</span></a>
                    </summary>
                    <table class="nw-tbl" style="border-color:#19737D;">
                        <tr>
                            <th colspan="2" rowspan="3" class="w-[16%] bg-[#DDDDDD] text-[#061a1c] dark:bg-[#061a1c] dark:text-[#DDDDDD]"><a href="환일의 요하네 -SUNSHINE in the MIRROR-/등장인물.html" class="nw-link">등장인물</a></th>
                            <td class="w-[28%]"><a href="요하네(환일의 요하네).html" class="nw-link"><img src="이미지/요하네.webp" class="nw-img" onerror="this.style.display='none'">요하네</a></td>
                            <td class="w-[28%]"><a href="하나마루(환일의 요하네).html" class="nw-link"><img src="이미지/하나마루.webp" class="nw-img" onerror="this.style.display='none'">하나마루</a></td>
                            <td class="w-[28%]"><a href="다이아(환일의 요하네).html" class="nw-link"><img src="이미지/다이아.webp" class="nw-img" onerror="this.style.display='none'">다이아</a></td>
                        </tr>
                        <tr>
                            <td><a href="루비(환일의 요하네).html" class="nw-link"><img src="이미지/루비.webp" class="nw-img" onerror="this.style.display='none'">루비</a></td>
                            <td><a href="치카(환일의 요하네).html" class="nw-link"><img src="이미지/치카.webp" class="nw-img" onerror="this.style.display='none'">치카</a></td>
                            <td><a href="요우(환일의 요하네).html" class="nw-link"><img src="이미지/요우.webp" class="nw-img" onerror="this.style.display='none'">요우</a></td>
                        </tr>
                        <tr>
                            <td><a href="카난(환일의 요하네).html" class="nw-link"><img src="이미지/카난.webp" class="nw-img" onerror="this.style.display='none'">카난</a></td>
                            <td><a href="리코(환일의 요하네).html" class="nw-link"><img src="이미지/리코.webp" class="nw-img" onerror="this.style.display='none'">리코</a></td>
                            <td><a href="마리(환일의 요하네).html" class="nw-link"><img src="이미지/마리.webp" class="nw-img" onerror="this.style.display='none'">마리</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#DDDDDD] text-[#061a1c] dark:bg-[#061a1c] dark:text-[#DDDDDD]">라이브</th>
                            <td colspan="3" class="text-left px-2"><a href="환일의 요하네 -The Story of the Sound of Heart-.html" class="nw-link">The Story of the Sound of Heart</a></td>
                        </tr>
                        <tr>
                            <th rowspan="4" class="bg-[#DDDDDD] text-[#061a1c] dark:bg-[#061a1c] dark:text-[#DDDDDD]">미<br>디<br>어<br><br>믹<br>스</th>
                            <th class="bg-[#DDDDDD] text-[#061a1c] dark:bg-[#061a1c] dark:text-[#DDDDDD]">지면기획</th>
                            <td colspan="3" class="text-left px-2"><a href="환일의 요하네 -SUNSHINE in the MIRROR-.html" class="nw-link">LoveLive! Days</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#DDDDDD] text-[#061a1c] dark:bg-[#061a1c] dark:text-[#DDDDDD]">코믹스</th>
                            <td colspan="3" class="text-left px-2"><a href="환일의 요하네 -SUNSHINE in the MIRROR-.html" class="nw-link">Unpolarized Reflexion</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#DDDDDD] text-[#061a1c] dark:bg-[#061a1c] dark:text-[#DDDDDD]">애니</th>
                            <td colspan="3" class="text-left px-2"><a href="환일의 요하네 -SUNSHINE in the MIRROR-/애니메이션.html" class="nw-link">애니메이션</a></td>
                        </tr>
                        <tr>
                            <th class="bg-[#DDDDDD] text-[#061a1c] dark:bg-[#061a1c] dark:text-[#DDDDDD]">게임</th>
                            <td colspan="3" class="text-left px-2"><a href="환일의 요하네 -BLAZE in the DEEPBLUE-.html" class="nw-link">BLAZE in the DEEPBLUE</a><br><a href="환일의 요하네 -NUMAZU in the MIRAGE-.html" class="nw-link">NUMAZU in the MIRAGE</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#DDDDDD] text-[#061a1c] dark:bg-[#061a1c] dark:text-[#DDDDDD]">기타</th>
                            <td colspan="3" class="text-left px-2"><a href="환일의 요하네 -SUNSHINE in the MIRROR-/애니메이션/에피소드 가이드.html" class="nw-link">애니메이션 에피소드 가이드</a> · <a href="환일의 요하네 -SUNSHINE in the MIRROR-/음반.html" class="nw-link">음반</a></td>
                        </tr>
                    </table>
                </details>

                <!-- Musical -->
                <details class="nw-box" style="border-color:#C40035;">
                    <summary style="background-color:#C40035;" class="outline-none">
                        <a href="러브 라이브! 스쿨 아이돌 뮤지컬.html" class="nw-link"><img src="이미지/bnr_musical.webp" class="max-w-[450px] w-full object-contain" onerror="this.style.display='none'; this.nextSibling.style.display='inline';"><span style="display:none;">러브 라이브! 스쿨 아이돌 뮤지컬</span></a>
                    </summary>
                    <table class="nw-tbl" style="border-color:#C40035;">
                        <tr>
                            <th colspan="2" class="w-[16%] bg-[#ef9a9a] text-[#362023] dark:bg-[#362023] dark:text-[#ef9a9a]">소속</th>
                            <td colspan="2" class="w-[42%] bg-[#ef9a9a] text-[#333] dark:bg-[#362023] dark:text-white font-bold text-lg"><a href="츠바키사쿠하나 여자 고등학교.html" class="nw-link">츠바키사쿠하나 여자 고등학교</a></td>
                            <td colspan="2" class="w-[42%] bg-[#ef9a9a] text-[#333] dark:bg-[#362023] dark:text-white font-bold text-lg"><a href="타키자쿠라 여학원.html" class="nw-link">타키자쿠라 여학원</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" rowspan="3" class="bg-[#ef9a9a] text-[#362023] dark:bg-[#362023] dark:text-[#ef9a9a]">멤버</th>
                            <td colspan="2"><a href="츠바키 루리카.html" class="nw-link"><img src="이미지/츠바키 루리카.webp" class="nw-img" onerror="this.style.display='none'">츠바키 루리카</a></td>
                            <td colspan="2"><a href="타키자와 안즈.html" class="nw-link"><img src="이미지/타키자와 안즈.webp" class="nw-img" onerror="this.style.display='none'">타키자와 안즈</a></td>
                        </tr>
                        <tr>
                            <td class="w-[21%]"><a href="스메라기 유즈하.html" class="nw-link"><img src="이미지/스메라기 유즈하.webp" class="nw-img" onerror="this.style.display='none'">스메라기 유즈하</a></td>
                            <td class="w-[21%]"><a href="호죠 유키노(러브 라이브!).html" class="nw-link"><img src="이미지/호죠 유키노.webp" class="nw-img" onerror="this.style.display='none'">호죠 유키노</a></td>
                            <td class="w-[21%]"><a href="와카츠키 미스즈.html" class="nw-link"><img src="이미지/와카츠키 미스즈.webp" class="nw-img" onerror="this.style.display='none'">와카츠키 미스즈</a></td>
                            <td class="w-[21%]"><a href="쿠루스 토아.html" class="nw-link"><img src="이미지/쿠루스 토아.webp" class="nw-img" onerror="this.style.display='none'">쿠루스 토아</a></td>
                        </tr>
                        <tr>
                            <td><a href="아마쿠사 히카루.html" class="nw-link"><img src="이미지/아마쿠사 히카루.webp" class="nw-img" onerror="this.style.display='none'">아마쿠사 히카루</a></td>
                            <td><a href="미카사 마야.html" class="nw-link"><img src="이미지/미카사 마야.webp" class="nw-img" onerror="this.style.display='none'">미카사 마야</a></td>
                            <td><a href="스즈키 레나.html" class="nw-link"><img src="이미지/스즈키 레나.webp" class="nw-img" onerror="this.style.display='none'">스즈키 레나</a></td>
                            <td><a href="하루카제 사야카.html" class="nw-link"><img src="이미지/하루카제 사야카.webp" class="nw-img" onerror="this.style.display='none'">하루카제 사야카</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="bg-[#ef9a9a] text-[#362023] dark:bg-[#362023] dark:text-[#ef9a9a]">실사 드라마</th>
                            <td colspan="4" class="text-left px-2"><a href="러브 라이브! 스쿨 아이돌 뮤지컬 the DRAMA.html" class="nw-link">러브 라이브! 스쿨 아이돌 뮤지컬 the DRAMA</a></td>
                        </tr>
                    </table>
                </details>

<!-- Series Common -->
                <details class="nw-box mb-2" style="border-color:#ccc;">
                    <summary class="!bg-white dark:!bg-[#1f2023] !text-black dark:!text-white outline-none flex gap-2 justify-center items-center py-2">
                        <img src="이미지/러브 라이브! School idol project series 로고.webp" alt="시리즈 로고" class="h-6" onerror="this.style.display='none'">
                        <span class="font-bold text-lg !text-black dark:!text-white">시리즈 공통</span>
                        <span class="text-xs font-normal text-gray-500">[ 펼치기 · 접기 ]</span>
                    </summary>
                    <table class="nw-tbl" style="border-color:#ccc;">
                        <tr>
                            <th colspan="2" class="w-[16%] !bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]"><a href="러브 라이브! School idol project series/유닛.html" class="nw-link">유닛</a></th>
                            <td class="text-left px-2"><a href="AiScReam.html" class="nw-link">AiScReam</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="!bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]"><a href="러브 라이브! School idol project series/음반.html" class="nw-link">음반</a></th>
                            <td class="text-left px-2"><a href="LIVE with a smile!.html" class="nw-link">LIVE with a smile!</a><br><a href="러브 라이브! 시리즈의 올 나이트 닛폰 GOLD.html" class="nw-link">올 나이트 닛폰 GOLD</a> 타이업송 (<a href="not ALONE not HITORI.html" class="nw-link">Aqours</a> · <a href="ミラクル STAY TUNE!.html" class="nw-link">니지가사키</a> · <a href="Shooting Voice!!.html" class="nw-link">Liella!</a>)<br><a href="異次元★♥BIGBANG.html" class="nw-link">異次元★♥BIGBANG</a><br><a href="Bring the LOVE！.html" class="nw-link">Bring the LOVE！</a><br><a href="愛♡スクリ～ム！.html" class="nw-link">愛♡スクリ～ム！</a><br><a href="LoveLive! Series 15th Anniversary Tribute Album.html" class="nw-link">LoveLive! Series 15th Anniversary Tribute Album</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="!bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]"><a href="러브 라이브! School idol project series/라이브.html" class="nw-link">라이브</a></th>
                            <td class="text-left px-2"><a href="러브 라이브! 페스 LoveLive! Series 9th Anniversary.html" class="nw-link">러브 라이브! 페스</a><br><a href="LoveLive! Series Presents COUNTDOWN LoveLive! 2021→2022 ~LIVE with a smile!~.html" class="nw-link">COUNTDOWN Live</a><br><a href="이차원 페스 아이돌마스터★♥러브 라이브! 노래 대항전.html" class="nw-link">이차원 페스 아이돌마스터★♥러브 라이브!</a><br><a href="LoveLive! Series Presents 유닛 고시엔 2024.html" class="nw-link">유닛 고시엔 2024</a><br><a href="Love Live! Series Asia Tour 2024 ~모두 함께 이뤄가는 이야기~.html" class="nw-link">Asia Tour 2024</a><br><a href="U-NEXT MUSIC FES.html" class="nw-link">U-NEXT MUSIC FES</a><br><a href="AiScReam presents TOPPING LIVE 녹기 전에 만나러 와♡♡♡.html" class="nw-link">TOPPING LIVE</a><br><a href="LoveLive! Series 15th Anniversary 러브 라이브! 페스.html" class="nw-link">15th Anniversary 러브 라이브! 페스</a></td>
                        </tr>
                        <tr>
                            <th colspan="2" class="!bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]">이벤트</th>
                            <td class="text-left px-2"><a href="스쿠페스 시리즈 감사제.html" class="nw-link">스쿠페스 시리즈 감사제</a> · <a href="러브 라이브! 퍼시픽 리그 6개 구단 콜라보 시합.html" class="nw-link">퍼시픽 리그 6개 구단 콜라보 시합</a> · <a href="러브 라이브! 시리즈의 올 나이트 닛폰 GOLD/신춘 감사 학원제.html" class="nw-link">신춘 감사 학원제</a> · <a href="J리그×러브 라이브! 시리즈 콜라보.html" class="nw-link">J리그 콜라보</a> · <a href="러브 라이브! 더비.html" class="nw-link">러브 라이브! 더비</a></td>
                        </tr>
                        <tr>
                            <th rowspan="3" class="w-[5%] !bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]"><a href="러브 라이브! School idol project series/미디어 믹스.html" class="nw-link">미<br>디<br>어<br><br>믹<br>스</a></th>
                            <th class="w-[11%] !bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]">잡지</th>
                            <td class="text-left px-2"><del><a href="전격 G's magazine.html" class="nw-link">전격 G's magazine</a></del>(폐간) · <a href="LoveLive! Days.html" class="nw-link">LoveLive! Days</a></td>
                        </tr>
                        <tr>
                            <th class="!bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]">라디오</th>
                            <td class="text-left px-2"><del><a href="러브 라이브! 시리즈의 올 나이트 닛폰 GOLD.html" class="nw-link">올 나이트 닛폰 GOLD</a></del> · <a href="러브 라이브! 시리즈 오피셜 카드 게임 presents AiScReam의 녹아내리는 시간♡♡♡.html" class="nw-link">AiScReam의 녹아내리는 시간♡♡♡</a></td>
                        </tr>
                        <tr>
                            <th class="!bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]">게임</th>
                            <td class="text-left px-2">스쿠페스 시리즈(<del><a href="러브라이브! 스쿨 아이돌 페스티벌.html" class="nw-link">스쿠페스</a></del> · <del><a href="러브 라이브! 스쿨 아이돌 페스티벌 ~after school ACTIVITY~.html" class="nw-link">아케페스</a></del>(<a href="러브 라이브! 스쿨 아이돌 페스티벌 ~after school ACTIVITY~ Wai-Wai! Home Meeting!!.html" class="nw-link">PS판</a>) · <del><a href="러브라이브! ALL STARS.html" class="nw-link">스쿠스타</a></del> · <del><a href="러브라이브! 스쿨 아이돌 페스티벌 2 MIRACLE LIVE!.html" class="nw-link">스쿠페스 2</a></del>)<br><a href="러브 라이브! 시리즈 오피셜 카드 게임.html" class="nw-link">러브카</a> · <a href="러브 라이브! 스쿨 아이돌 컬렉션.html" class="nw-link">스쿠코레</a>(발매 중단) · <del><a href="ぷちぐるラブライブ！.html" class="nw-link">푸치구루</a></del></td>
                        </tr>
                        <tr>
                            <th rowspan="4" class="!bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]">관<br>련<br><br>문<br>서</th>
                            <th class="!bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]"><a href="러브 라이브! School idol project series/용어.html" class="nw-link">용어</a></th>
                            <td class="text-left px-2"><a href="스쿨 아이돌.html" class="nw-link">스쿨 아이돌</a> · <a href="당신(러브 라이브!).html" class="nw-link">당신</a> · <a href="러브 라이브(용어).html" class="nw-link">러브 라이브 대회</a></td>
                        </tr>
                        <tr>
                            <th class="!bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]">팬</th>
                            <td class="text-left px-2"><a href="러브라이버.html" class="nw-link">러브라이버</a> · <a href="럽폭도.html" class="nw-link">럽폭도</a> · <a href="럽까.html" class="nw-link">럽까</a></td>
                        </tr>
                        <tr>
                            <th class="!bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]">커뮤니티</th>
                            <td class="text-left px-2"><a href="루리웹 러브 라이브 게시판.html" class="nw-link">루리웹</a> · <a href="오덕갤.html" class="nw-link">디시인사이드</a>(<a href="러브라이브 선샤인 마이너 갤러리.html" class="nw-link">선샤인 갤러리</a> · <a href="러브라이브! 니지동 마이너 갤러리.html" class="nw-link">니지동 갤러리</a>) · <a href="러브라이브 채널.html" class="nw-link">아카라이브</a></td>
                        </tr>
                        <tr>
                            <th class="!bg-[#ffcce6] !text-[#33001a] dark:!bg-[#33001a] dark:!text-[#dddddd]">기타</th>
                            <td class="text-left px-2"><a href="러브 라이브! School idol project series/애니메이션 연표.html" class="nw-link">애니메이션 연표</a> · <a href="러브 라이브! 시리즈 9주년 발표회.html" class="nw-link">시리즈 9주년 발표회</a> · <a href="러브 라이브! School idol project series/역대 내한 일람.html" class="nw-link">역대 내한 일람</a> · <a href="러브 라이브! School idol project series/유닛.html" class="nw-link">유닛</a> · <a href="러브 라이브! School idol project series/노래방 수록 목록.html" class="nw-link">노래방 수록 목록</a> · <a href="러브 라이브! School idol project series/시리즈 내 공통점.html" class="nw-link">시리즈 내 공통점</a> · <a href="러브 라이브! School idol project series/각종 기록.html" class="nw-link">각종 기록</a></td>
                        </tr>
                    </table>
                </details>
            </details>
            <!-- 하단 공통 링크 -->
            <div class="text-white font-bold text-center mt-2 text-[11px] pb-1">
                <a href="러브 라이브! School idol project series/역사.html" class="text-white hover:underline">역사</a> ·
                <a href="러브 라이브! School idol project series/등장인물.html" class="text-white hover:underline">등장인물</a> ·
                <a href="러브 라이브! School idol project series/역대 출연진.html" class="text-white hover:underline">출연진</a> ·
                <a href="러브 라이브! School idol project series/논란 및 사건 사고.html" class="text-white hover:underline">사건 사고</a> ·
                <a href="나무위키:프로젝트/러브 라이브!.html" class="text-white hover:underline">나무위키 프로젝트</a>
            </div>
        </div>
        `;

    // 3. 컨테이너에 일괄 주입
    container.innerHTML = navStyle + navHtml;
});