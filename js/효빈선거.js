/* 파일 경로: js/효빈선거.js */

/**
 * 효빈광역시 선거 결과(11.3) 및 설명(11.4) 렌더링 함수
 * @param {string} containerId - 내용을 넣을 HTML 요소의 ID
 */
function renderHyobinElectionSection(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-election-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            /* 컨테이너 및 테이블 공통 */
            .hb-elec-wrapper { width: 100%; overflow-x: auto; margin-bottom: 2rem; }
            .hb-elec-table { width: 100%; border-collapse: collapse; border: 1px solid #ccc; text-align: center; }
            .hb-elec-table th, .hb-elec-table td { border: 1px solid #e5e7eb; padding: 6px 4px; vertical-align: middle; }
            
            /* 헤더 스타일 (로고 적용) */
            .hb-elec-thead th.main-header { background-color: #7777AA; color: white; padding: 10px; position: relative; }
            .hb-elec-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-elec-logo { max-height: 28px; width: auto; }
            .hb-elec-title { font-weight: bold; font-size: 1.1em; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; color: white; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }

            /* 서브 헤더 */
            .hb-elec-sub-header td { background-color: #f3f4f6; font-weight: bold; font-size: 0.9em; }

            /* 본문 토글용 */
            .hb-elec-tbody { transition: all 0.2s; }
            .hb-elec-tbody.hidden { display: none; }

            /* 정당 배지 (Badge) */
            .w-badge { display: inline-block; padding: 2px 6px; border-radius: 4px; color: white; font-size: 0.8em; text-decoration: none; vertical-align: middle; margin-bottom: 2px; }
            .badge-minju { background-color: #004EA2; }
            .badge-gukhim { background-color: #E61E2B; }
            .badge-reform { background-color: #FF7920; }
            .badge-jinbo { background-color: #D6001C; }
            .badge-justice-22nd { background-color: #008000; } /* 녹색정의당 */
            .badge-justice-8th { background-color: #FFED00; color: #000 !important; } /* 정의당(노란색) */
            .badge-new-future { background-color: #45BABD; }
            .badge-liberty { background-color: #0958A7; }
            .badge-sonamu { background-color: #1A246B; }
            .badge-joguk { background-color: #0073CF; }
            .badge-independent { background-color: #999; }
            .badge-progressive { background-color: #79D2CC; }
            .badge-moderate { background-color: #999; }

            /* 승리 강조 (Winner) */
            .win-minju { color: #004EA2; font-weight: bold; background-color: rgba(0, 78, 162, 0.05); }
            .win-gukhim { color: #E61E2B; font-weight: bold; background-color: rgba(230, 30, 43, 0.05); }
            .win-jinbo { color: #D6001C; font-weight: bold; background-color: rgba(214, 0, 28, 0.05); }
            .win-independent { color: #333; font-weight: bold; background-color: rgba(0,0,0,0.05); }

            /* 설명 텍스트 (11.4) */
            .hb-desc-text { line-height: 1.8; font-size: 0.95rem; margin-top: 1rem; text-align: justify; }
            .hb-desc-text p { margin-bottom: 1rem; }
            .hb-desc-text a { color: #004EA2; text-decoration: none; }
            .hb-desc-text a:hover { text-decoration: underline; }
            
            /* 유틸리티 */
            .text-sm { font-size: 0.8rem; }
            .text-xs { font-size: 0.65rem; }
            .bg-gray-50 { background-color: #f9fafb; }
            .font-bold { font-weight: bold; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. HTML 조립 함수 ---
    const createTable = (id, title, fontSize, headerHTML, bodyHTML) => {
        return `
            <div class="hb-elec-wrapper">
                <table class="hb-elec-table" style="font-size: ${fontSize};">
                    <thead class="hb-elec-thead">
                        <tr>
                            <th colspan="100%" class="main-header">
                                <div class="hb-elec-header-content">
                                    <img src="이미지/hyobin1.webp" class="hb-elec-logo" alt="로고" onerror="this.style.display='none'"/>
                                    <span class="hb-elec-title">${title}</span>
                                    <span class="hb-toggle-btn" data-target="${id}">[접기]</span>
                                </div>
                            </th>
                        </tr>
                        ${headerHTML}
                    </thead>
                    <tbody id="${id}" class="hb-elec-tbody">
                        ${bodyHTML}
                    </tbody>
                </table>
            </div>
        `;
    };

    // --- 3. 데이터 정의 (HTML 문자열) ---

    // 11.3.1. 제20대 대선
    const presHeader = `
        <tr class="hb-elec-sub-header">
            <td style="width: 12%;">구분</td>
            <td><a href="더불어민주당.html" class="w-badge badge-minju">더불어민주당</a></td>
            <td><a href="국민의힘.html" class="w-badge badge-gukhim">국민의힘</a></td>
            <td><a href="개혁신당.html" class="w-badge badge-reform">개혁신당</a></td>
            <td>격차 (1위/2위)</td>
            <td>투표율</td>
        </tr>
        <tr class="hb-elec-sub-header">
            <td>후보</td>
            <td><strong><a href="이재명.html" style="color:inherit;">이재명</a></strong></td>
            <td><a href="김문수.html" style="color:inherit;">김문수</a></td>
            <td><a href="이준석.html" style="color:inherit;">이준석</a></td>
            <td>표차</td>
            <td>득표수/선거인</td>
        </tr>
    `;
    const presBody = `
        <tr class="font-bold bg-gray-50"><td>전체 합계</td><td class="win-minju">1,659,989 (78.67%)</td><td>268,476 (12.72%)</td><td>133,526 (6.33%)</td><td>+764,745</td><td>84.90%</td></tr>
        <tr><td><a href="남구.html" style="color:inherit;">남구</a></td><td class="win-minju">181,674 (67.91%)</td><td>59,309 (22.17%)</td><td>21,562 (8.06%)</td><td>122,365 (45.74%p)</td><td>86.35%</td></tr>
        <tr><td><a href="북구.html" style="color:inherit;">북구</a></td><td class="win-minju">304,903 (83.12%)</td><td>32,793 (8.94%)</td><td>21,789 (5.94%)</td><td>272,110 (74.18%p)</td><td>84.23%</td></tr>
        <tr><td><a href="동구.html" style="color:inherit;">동구</a></td><td class="win-minju">94,248 (70.79%)</td><td>27,839 (20.91%)</td><td>6,803 (5.11%)</td><td>66,409 (49.88%p)</td><td>83.43%</td></tr>
        <tr><td><a href="서구.html" style="color:inherit;">서구</a></td><td class="win-minju">152,648 (74.02%)</td><td>33,037 (16.02%)</td><td>16,518 (8.01%)</td><td>119,611 (58.00%p)</td><td>87.21%</td></tr>
        <tr><td><a href="중구.html" style="color:inherit;">중구</a></td><td class="win-minju">49,272 (78.16%)</td><td>9,910 (15.72%)</td><td>2,609 (4.14%)</td><td>39,362 (62.44%p)</td><td>88.42%</td></tr>
        <tr><td><a href="안천구.html" style="color:inherit;">안천구</a></td><td class="win-minju">246,424 (81.56%)</td><td>30,757 (10.18%)</td><td>16,436 (5.44%)</td><td>215,667 (71.38%p)</td><td>82.23%</td></tr>
        <tr><td><a href="청엽구.html" style="color:inherit;">청엽구</a></td><td class="win-minju">278,994 (82.28%)</td><td>31,805 (9.38%)</td><td>18,784 (5.54%)</td><td>247,189 (72.90%p)</td><td>86.33%</td></tr>
        <tr><td><a href="창전구.html" style="color:inherit;">창전구</a></td><td class="win-minju">207,038 (81.16%)</td><td>25,713 (10.08%)</td><td>17,448 (6.84%)</td><td>181,325 (71.08%p)</td><td>84.21%</td></tr>
        <tr><td><a href="탄성군.html" style="color:inherit;">탄성군</a></td><td class="win-minju">144,788 (81.79%)</td><td>17,313 (9.78%)</td><td>11,577 (6.54%)</td><td>127,475 (72.01%p)</td><td>84.44%</td></tr>
    `;

    // 11.3.2.1. 제22대 총선
    const parlHeader = `
        <tr class="hb-elec-sub-header">
            <td style="width: 10%;">지역구</td>
            <td><a href="더불어민주당.html" class="w-badge badge-minju">더불어민주당</a></td>
            <td><a href="국민의힘.html" class="w-badge badge-gukhim">국민의힘</a></td>
            <td><a href="진보당.html" class="w-badge badge-jinbo">진보당</a></td>
            <td><a href="개혁신당.html" class="w-badge badge-reform">개혁신당</a></td>
            <td>무소속 / 기타</td>
            <td>격차(1,2위)</td>
        </tr>
    `;
    const parlBody = `
        <tr class="font-bold bg-gray-50"><td>합계</td><td class="win-minju">1,331,710 (76.03%) / 13석</td><td>167,982 (9.59%) / 0석</td><td>80,751 (4.61%) / 1석</td><td>24,100 (1.38%) / 0석</td><td colspan="2">-</td></tr>
        <tr><td><a href="남구_갑(효빈).html">남구 갑</a></td><td class="win-minju"><strong><a href="고정민.html" style="color:inherit;">고정민</a></strong><br/>84,346 (70.96%)</td><td><a href="우신면.html">우신면</a> (20.50%)</td><td>무공천</td><td><a href="기아락.html">기아락</a> (6.22%)</td><td><a href="진현보.html">진현보</a> <a href="자유통일당.html" class="w-badge badge-liberty">자유통일</a> (2.32%)</td><td class="win-minju">+50.46%p</td></tr>
        <tr><td><a href="남구_을(효빈).html">남구 을</a></td><td>무공천</td><td><a href="개성동.html">개성동</a> (14.22%)</td><td class="win-jinbo"><strong><a href="신원임.html" style="color:inherit;">신원임</a></strong><br/>60,501 (55.54%)</td><td><a href="색수통.html">색수통</a> (1.12%)</td><td><a href="상춘성.html">상춘성</a> <span class="w-badge badge-independent">무소속</span> (29.12%)</td><td class="win-jinbo">+26.42%p</td></tr>
        <tr><td><a href="북구_갑(효빈).html">북구 갑</a></td><td class="win-minju"><strong><a href="조상현.html" style="color:inherit;">조상현</a></strong><br/>88,263 (82.11%)</td><td><a href="신항문.html">신항문</a> (9.97%)</td><td>무공천</td><td>무공천</td><td><a href="고미국.html">고미국</a> <a href="녹색정의당.html" class="w-badge badge-justice-22nd">녹색정의</a> (5.22%)<br><a href="양영훈.html">양영훈</a> <span class="w-badge badge-independent">무소속</span> (2.70%)</td><td class="win-minju">+72.14%p</td></tr>
        <tr><td><a href="북구_을(효빈).html">북구 을</a></td><td class="win-minju"><strong><a href="원성준.html" style="color:inherit;">원성준</a></strong><br/>73,707 (80.89%)</td><td><a href="오한길.html">오한길</a> (10.46%)</td><td><a href="주영현.html">주영현</a> (6.61%)</td><td>무공천</td><td><a href="문근현.html">문근현</a> <a href="녹색정의당.html" class="w-badge badge-justice-22nd">녹색정의</a> (2.04%)</td><td class="win-minju">+70.43%p</td></tr>
        <tr><td><a href="북구_병(효빈).html">북구 병</a></td><td class="win-minju"><strong><a href="이찬대.html" style="color:inherit;">이찬대</a></strong><br/>80,483 (81.69%)</td><td><a href="유줄리.html">유줄리</a> (9.94%)</td><td>무공천</td><td>무공천</td><td><a href="추하다.html">추하다</a> <a href="새로운미래.html" class="w-badge badge-new-future">새미래</a> (8.37%)</td><td class="win-minju">+71.75%p</td></tr>
        <tr><td><a href="서구(선거구).html">서구</a></td><td class="win-minju"><strong><a href="지선진.html" style="color:inherit;">지선진</a></strong><br/>128,239 (79.55%)</td><td><a href="기규택.html">기규택</a> (12.22%)</td><td>무공천</td><td><a href="상주영.html">상주영</a> (7.20%)</td><td><a href="심주언.html">심주언</a> <a href="녹색정의당.html" class="w-badge badge-justice-22nd">녹색정의</a> (1.03%)</td><td class="win-minju">+67.33%p</td></tr>
        <tr><td><a href="안천_갑(효빈).html">안천 갑</a></td><td class="win-minju"><strong><a href="고선규.html" style="color:inherit;">고선규</a></strong><br/>92,702 (80.40%)</td><td><a href="조경원.html">조경원</a> (13.40%)</td><td><a href="문언산.html">문언산</a> (5.10%)</td><td>무공천</td><td><a href="우인산.html">우인산</a> <a href="녹색정의당.html" class="w-badge badge-justice-22nd">녹색정의</a> (1.10%)</td><td class="win-minju">+67.00%p</td></tr>
        <tr><td><a href="안천_을(효빈).html">안천 을</a></td><td class="win-minju"><strong><a href="신진영.html" style="color:inherit;">신진영</a></strong><br/>79,133 (56.70%)</td><td><a href="재진숙.html">재진숙</a> (8.10%)</td><td>무공천</td><td><a href="기성현.html">기성현</a> (3.20%)</td><td><a href="박송현.html">박송현</a> <span class="w-badge badge-independent">무(민주계)</span> (32.00%)</td><td class="win-minju">+24.70%p</td></tr>
        <tr><td><a href="중구_동구.html">중구 동구</a></td><td class="win-minju"><strong><a href="김성민.html" style="color:inherit;">김성민</a></strong><br/>126,776 (75.70%)</td><td><a href="주민우.html">주민우</a> (19.57%)</td><td>무공천</td><td><a href="목영민.html">목영민</a> (3.22%)</td><td><a href="조광훈.html">조광훈</a> <a href="자유통일당.html" class="w-badge badge-liberty">자유통일</a> (1.51%)</td><td class="win-minju">+56.13%p</td></tr>
        <tr><td><a href="창전구_갑.html">창전 갑</a></td><td class="win-minju"><strong><a href="추산령.html" style="color:inherit;">추산령</a></strong><br/>82,263 (81.09%)</td><td><a href="윤재훈.html">윤재훈</a> (5.20%)</td><td>무공천</td><td><a href="안원욱.html">안원욱</a> (2.60%)</td><td><a href="주현진.html">주현진</a> <span class="w-badge badge-independent">무(보수계)</span> (11.11%)</td><td class="win-minju">+69.98%p</td></tr>
        <tr><td><a href="창전구_을.html">창전 을</a></td><td class="win-minju"><strong><a href="노상현.html" style="color:inherit;">노상현</a></strong><br/>85,549 (80.11%)</td><td><a href="성주현.html">성주현</a> (10.97%)</td><td><a href="위지현.html">위지현</a> (3.22%)</td><td>무공천</td><td><a href="사중일.html">사중일</a> <a href="소나무당.html" class="w-badge badge-sonamu">소나무</a> (5.70%)</td><td class="win-minju">+69.14%p</td></tr>
        <tr><td><a href="청엽구_갑(효빈).html">청엽 갑</a></td><td class="win-minju"><strong><a href="신수인.html" style="color:inherit;">신수인</a></strong><br/>109,726 (81.51%)</td><td><a href="원춘석.html">원춘석</a> (9.47%)</td><td><a href="우은미.html">우은미</a> (9.02%)</td><td>무공천</td><td>-</td><td class="win-minju">+72.04%p</td></tr>
        <tr><td><a href="청엽구_을(효빈).html">청엽 을</a></td><td class="win-minju"><strong><a href="소판권.html" style="color:inherit;">소판권</a></strong><br/>115,078 (80.80%)</td><td><a href="김상언.html">김상언</a> (9.22%)</td><td>무공천</td><td>무공천</td><td><a href="조낙지.html">조낙지</a> <a href="새로운미래.html" class="w-badge badge-new-future">새미래</a> (9.98%)</td><td class="win-minju">+70.82%p</td></tr>
        <tr><td><a href="탄성군(선거구).html">탄성</a></td><td class="win-minju"><strong><a href="박청권.html" style="color:inherit;">박청권</a></strong><br/>123,049 (79.12%)</td><td><a href="정철규.html">정철규</a> (9.33%)</td><td>무공천</td><td>무공천</td><td><a href="임산곡.html">임산곡</a> <span class="w-badge badge-independent">무소속</span> (11.55%)</td><td class="win-minju">+67.57%p</td></tr>
    `;

    // 11.3.3.1. 효빈광역시장 (제8회 지선)
    const mayorHeader = `
        <tr class="hb-elec-sub-header">
            <td>지역명</td>
            <td><a href="더불어민주당.html" class="w-badge badge-minju">더불어민주당</a><br/><a href="박효빈.html" style="color:inherit;">박효빈</a></td>
            <td><a href="국민의힘.html" class="w-badge badge-gukhim">국민의힘</a><br/><a href="윤재훈.html" style="color:inherit;">윤재훈</a></td>
            <td><a href="정의당.html" class="w-badge badge-justice-8th">정의당</a><br/><a href="이사원.html" style="color:inherit;">이사원</a></td>
            <td><span class="w-badge badge-independent">무소속</span><br/><a href="강성택.html" style="color:inherit;">강성택</a> (진보)</td>
            <td><span class="w-badge badge-independent">무소속</span><br/><a href="유성민.html" style="color:inherit;">유성민</a> (보수)</td>
            <td>격차</td>
        </tr>
    `;
    const mayorBody = `
        <tr class="font-bold bg-gray-50"><td>전체 합계</td><td class="win-minju">1,008,290 (67.89%)</td><td>148,403 (9.99%)</td><td>47,465 (3.20%)</td><td>62,323 (4.20%)</td><td>218,604 (14.72%)</td><td>53.17%p</td></tr>
        <tr><td><a href="중구.html">중구</a></td><td class="win-minju">28,207 (67.54%)</td><td>3,165 (7.58%)</td><td>1,315 (3.15%)</td><td>1,453 (3.48%)</td><td>7,624 (18.25%)</td><td>49.29%p</td></tr>
        <tr><td><a href="남구.html">남구</a></td><td class="win-minju">119,219 (59.78%)</td><td>27,282 (13.68%)</td><td>6,900 (3.46%)</td><td>7,398 (3.71%)</td><td>38,632 (19.38%)</td><td>40.40%p</td></tr>
        <tr><td><a href="서구.html">서구</a></td><td class="win-minju">90,803 (65.57%)</td><td>14,956 (10.80%)</td><td>4,431 (3.20%)</td><td>5,885 (4.25%)</td><td>22,409 (16.18%)</td><td>49.39%p</td></tr>
        <tr><td><a href="동구.html">동구</a></td><td class="win-minju">52,804 (54.50%)</td><td>14,320 (14.78%)</td><td>2,654 (2.74%)</td><td>7,499 (7.74%)</td><td>19,612 (20.24%)</td><td>34.26%p</td></tr>
        <tr><td><a href="청엽구.html">청엽구</a></td><td class="win-minju">174,859 (70.46%)</td><td>24,643 (9.93%)</td><td>8,015 (3.23%)</td><td>9,703 (3.91%)</td><td>30,949 (12.46%)</td><td>58.00%p</td></tr>
        <tr><td><a href="북구.html">북구</a></td><td class="win-minju">186,368 (74.37%)</td><td>17,341 (6.92%)</td><td>7,943 (3.17%)</td><td>8,645 (3.45%)</td><td>30,299 (12.08%)</td><td>62.29%p</td></tr>
        <tr><td><a href="안천구.html">안천구</a></td><td class="win-minju">146,951 (71.33%)</td><td>19,798 (9.61%)</td><td>6,283 (3.05%)</td><td>9,270 (4.50%)</td><td>23,715 (11.51%)</td><td>59.82%p</td></tr>
        <tr><td><a href="창전구.html">창전구</a></td><td class="win-minju">126,941 (70.15%)</td><td>15,652 (8.65%)</td><td>5,971 (3.30%)</td><td>7,437 (4.11%)</td><td>24,956 (13.79%)</td><td>56.36%p</td></tr>
        <tr><td><a href="탄성군.html">탄성군</a></td><td class="win-minju">82,138 (66.90%)</td><td>11,246 (9.16%)</td><td>3,953 (3.22%)</td><td>5,033 (4.10%)</td><td>20,408 (16.61%)</td><td>50.29%p</td></tr>
    `;

    // 11.3.3.2. 기초자치단체장
    const districtHeader = `
        <tr class="hb-elec-sub-header">
            <td style="width: 10%;">지역구</td>
            <td><a href="더불어민주당.html" class="w-badge badge-minju">더불어민주당</a></td>
            <td><a href="국민의힘.html" class="w-badge badge-gukhim">국민의힘</a></td>
            <td><a href="정의당.html" class="w-badge badge-justice-8th">정의당</a></td>
            <td><a href="진보당.html" class="w-badge badge-jinbo">진보당</a></td>
            <td colspan="2"><span class="w-badge badge-independent">무소속 / 기타</span></td>
        </tr>
    `;
    const districtBody = `
        <tr class="font-bold bg-gray-50"><td>합계/의석</td><td>265,514 (78.34%) / 5석</td><td>39,749 (11.74%) / 1석</td><td>33,522 / 0석</td><td>-</td><td colspan="2">2석</td></tr>
        <tr><td><a href="중구(효빈).html">중구</a></td><td class="win-minju"><strong><a href="구성연.html" style="color:inherit;">구성연</a></strong><br/>24,803 (59.39%)</td><td><a href="부서원.html">부서원</a> (32.14%)</td><td>-</td><td>-</td><td colspan="2"><a href="임성진.html">임성진</a> (8.47%)</td></tr>
        <tr><td><a href="남구(효빈).html">남구</a></td><td><a href="오전희.html">오전희</a> (33.01%)</td><td class="win-gukhim"><strong><a href="강덕수.html" style="color:inherit;">강덕수</a></strong><br/>66,829 (33.51%)</td><td><a href="기미국.html">기미국</a> (4.98%)</td><td>-</td><td><a href="권영성.html">권영성</a> (20.40%)</td><td><a href="상술현.html">상술현</a> (8.10%)</td></tr>
        <tr><td><a href="서구(선거구).html">서구</a></td><td class="win-minju"><strong><a href="노서현.html" style="color:inherit;">노서현</a></strong><br/>97,091 (70.11%)</td><td><a href="신원직.html">신원직</a> (23.20%)</td><td>-</td><td>-</td><td colspan="2"><a href="안생덕.html">안생덕</a> (6.69%)</td></tr>
        <tr><td><a href="동구(효빈).html">동구</a></td><td><a href="우영철.html">우영철</a> (38.27%)</td><td><a href="임체제.html">임체제</a> (20.72%)</td><td>-</td><td>-</td><td class="win-independent" colspan="2"><strong><a href="조우영.html" style="color:inherit;">조우영</a></strong><br/>39,734 (41.01%)</td></tr>
        <tr><td><a href="청엽구(효빈).html">청엽구</a></td><td><a href="유인철.html">유인철</a> (41.05%)</td><td><a href="송재섭.html">송재섭</a> (14.60%)</td><td><a href="구재분.html">구재분</a> (2.22%)</td><td>-</td><td class="win-independent" colspan="2"><strong><a href="권상남.html" style="color:inherit;">권상남</a></strong><br/>104,553 (42.13%)</td></tr>
        <tr><td><a href="북구(효빈).html">북구</a></td><td class="win-minju font-bold p-3 text-sm" colspan="6"><a href="더불어민주당.html" style="color:inherit; text-decoration:none;">더불어민주당</a> <a href="김지언.html" style="color:inherit;">김지언</a> 무투표 당선</td></tr>
        <tr><td><a href="안천구(효빈).html">안천구</a></td><td class="win-minju font-bold p-3 text-sm" colspan="6"><a href="더불어민주당.html" style="color:inherit; text-decoration:none;">더불어민주당</a> <a href="이규희.html" style="color:inherit;">이규희</a> 무투표 당선</td></tr>
        <tr><td><a href="창전구(효빈).html">창전구</a></td><td class="win-minju"><strong><a href="전역헌.html" style="color:inherit;">전역헌</a></strong><br/>132,587 (73.27%)</td><td><a href="고자년.html">고자년</a> (14.92%)</td><td>-</td><td><a href="진추희.html">진추희</a> (6.11%)</td><td colspan="2"><a href="안원욱.html">안원욱</a> (5.70%)</td></tr>
        <tr><td><a href="탄성군(선거구).html">탄성군</a></td><td class="win-minju"><strong><a href="성선설.html" style="color:inherit;">성선설</a></strong><br/>75,115 (61.18%)</td><td><a href="양악설.html">양악설</a> (15.02%)</td><td>-</td><td>-</td><td><a href="심원식.html">심원식</a> (14.50%)</td><td><a href="유상진.html">유상진</a> (9.30%)</td></tr>
    `;
// 6. 9회 지선 (구청장)
    const dist9Header = `
        <tr class="hb-elec-sub-header">
            <td style="width: 10%;">지역구</td>
            <td><a href="더불어민주당.html" class="w-badge badge-minju">더불어민주당</a></td>
            <td><a href="국민의힘.html" class="w-badge badge-gukhim">국민의힘</a></td>
            <td><a href="개혁신당.html" class="w-badge badge-reform">개혁신당</a> / <a href="진보당.html" class="w-badge badge-jinbo">진보당</a></td>
            <td><a href="조국혁신당.html" class="w-badge badge-joguk">조국혁신당</a> / <a href="정의당.html" class="w-badge badge-justice-8th">정의당</a></td>
            <td><span class="w-badge badge-independent">무소속 / 기타</span></td>
        </tr>
    `;
    const dist9Body = `
        <tr class="font-bold bg-gray-50"><td>합계/의석</td><td>8석</td><td>0석</td><td>0석 / 0석</td><td>1석 / 0석</td><td>0석</td></tr>
        <tr><td><a href="중구(효빈).html">중구</a></td><td class="win-minju font-bold text-sm" colspan="5"><a href="더불어민주당.html" style="color:inherit; text-decoration:none;">더불어민주당</a> <a href="구성연.html" style="color:inherit;">구성연</a> 무투표 당선</td></tr>
        <tr><td><a href="남구(효빈).html">남구</a></td><td class="win-minju"><strong><a href="오전희.html" style="color:inherit;">오전희</a></strong><br/>151,604 (66.50%)</td><td><a href="권영성.html">권영성</a> (24.40%)</td><td><a href="색수통.html">색수통</a> <span class="w-badge badge-reform">개혁</span> (4.60%)</td><td><a href="기미국.html">기미국</a> <span class="w-badge badge-justice-8th">정의</span> (4.50%)</td><td>-</td></tr>
        <tr><td><a href="서구(선거구).html">서구</a></td><td class="win-minju"><strong><a href="부서원.html" style="color:inherit;">부서원</a></strong><br/>120,187 (70.20%)</td><td><a href="신원직.html">신원직</a> (14.30%)</td><td><a href="임성진.html">임성진</a> <span class="w-badge badge-reform">개혁</span> (2.20%)</td><td>-</td><td><a href="안생덕.html">안생덕</a> <span class="w-badge badge-independent">무소속</span> (13.30%)</td></tr>
        <tr><td><a href="동구(효빈).html">동구</a></td><td><a href="우영철.html">우영철</a> (41.10%)</td><td><a href="임체제.html">임체제</a> (14.10%)</td><td><a href="목영민.html">목영민</a> <span class="w-badge badge-reform">개혁</span> (1.05%)</td><td class="win-joguk"><strong><a href="조우영.html" style="color:inherit;">조우영</a></strong> <span class="w-badge badge-joguk">조국</span><br/>42,636 (41.72%)</td><td><a href="조광훈.html">조광훈</a> <span class="w-badge badge-liberty">자유통일</span> (2.03%)</td></tr>
        <tr><td><a href="청엽구(효빈).html">청엽구</a></td><td class="win-minju"><strong><a href="권상남.html" style="color:inherit;">권상남</a></strong><br/>201,982 (69.53%)</td><td><a href="송재섭.html">송재섭</a> (10.30%)</td><td><a href="양은진.html">양은진</a> <span class="w-badge badge-reform">개혁</span> (4.76%)<br><a href="우은미.html">우은미</a> <span class="w-badge badge-jinbo">진보</span> (3.30%)</td><td><a href="구재분.html">구재분</a> <span class="w-badge badge-justice-8th">정의</span> (5.40%)</td><td><a href="유인철.html">유인철</a> <span class="w-badge badge-new-future">새미래</span> (6.71%)</td></tr>
        <tr><td><a href="북구(효빈).html">북구</a></td><td class="win-minju"><strong><a href="김지언.html" style="color:inherit;">김지언</a></strong><br/>233,586 (78.13%)</td><td><a href="신항문.html">신항문</a> (9.98%)</td><td><a href="소정훈.html">소정훈</a> <span class="w-badge badge-reform">개혁</span> (4.59%)</td><td>-</td><td><a href="만석현.html">만석현</a> <span class="w-badge badge-independent">무소속</span> (7.30%)</td></tr>
        <tr><td><a href="안천구(효빈).html">안천구</a></td><td class="win-minju"><strong><a href="이규희.html" style="color:inherit;">이규희</a></strong><br/>194,635 (79.32%)</td><td><a href="조경원.html">조경원</a> (14.32%)</td><td><a href="문언산.html">문언산</a> <span class="w-badge badge-jinbo">진보</span> (6.36%)</td><td>-</td><td>-</td></tr>
        <tr><td><a href="창전구(효빈).html">창전구</a></td><td class="win-minju"><strong><a href="전역헌.html" style="color:inherit;">전역헌</a></strong><br/>158,814 (77.93%)</td><td><a href="고자년.html">고자년</a> (12.42%)</td><td><a href="안원욱.html">안원욱</a> <span class="w-badge badge-reform">개혁</span> (3.30%)<br><a href="위지현.html">위지현</a> <span class="w-badge badge-jinbo">진보</span> (2.43%)</td><td>-</td><td><a href="진추희.html">진추희</a> <span class="w-badge badge-independent">무소속</span> (3.92%)</td></tr>
        <tr><td><a href="탄성군(선거구).html">탄성군</a></td><td class="win-minju"><strong><a href="성선설.html" style="color:inherit;">성선설</a></strong><br/>102,059 (66.65%)</td><td><a href="양악설.html">양악설</a> (8.04%)</td><td>-</td><td><a href="유상진.html">유상진</a> <span class="w-badge badge-joguk">조국</span> (15.42%)</td><td><a href="심원식.html">심원식</a> <span class="w-badge badge-independent">무소속</span> (9.89%)</td></tr>    `;
        // 11.3.4.1. 효빈광역시장 (제9회 지선 - 제공된 데이터 반영)
    const mayor9thHeader = `
        <tr class="hb-elec-sub-header">
            <td>지역명</td>
            <td><a href="더불어민주당.html" class="w-badge badge-minju">더불어민주당</a><br/><a href="박효빈.html" style="color:inherit;">박효빈</a></td>
            <td><a href="국민의힘.html" class="w-badge badge-gukhim">국민의힘</a><br/><a href="윤재훈.html" style="color:inherit;">윤재훈</a></td>
            <td><a href="정의당.html" class="w-badge badge-justice-8th">정의당</a><br/><a href="이사원.html" style="color:inherit;">이사원</a></td>
            <td><a href="새미래민주당.html" class="w-badge badge-new-future">새미래민주당</a><br/><a href="지총민.html" style="color:inherit;">지총민</a></td>
            <td><span class="w-badge badge-independent">무소속</span><br/><a href="유성민.html" style="color:inherit;">유성민</a> (보수)</td>
        </tr>
    `;
    const mayor9thBody = `
        <tr class="font-bold bg-gray-50"><td>전체 합계</td><td class="win-minju">1,338,915 (76.79%)</td><td>71,633 (4.11%)</td><td>52,438 (3.01%)</td><td>14,507 (0.83%)</td><td>266,187 (15.27%)</td></tr>
        <tr><td><a href="중구.html">중구</a></td><td class="win-minju">37,135 (73.49%)</td><td>1,915 (3.79%)</td><td>1,505 (2.98%)</td><td>348 (0.69%)</td><td>9,629 (19.05%)</td></tr>
        <tr><td><a href="남구.html">남구</a></td><td class="win-minju">156,642 (68.71%)</td><td>13,063 (5.73%)</td><td>7,318 (3.21%)</td><td>1,687 (0.74%)</td><td>49,267 (21.61%)</td></tr>
        <tr><td><a href="서구.html">서구</a></td><td class="win-minju">126,316 (73.78%)</td><td>7,567 (4.42%)</td><td>5,153 (3.01%)</td><td>1,438 (0.84%)</td><td>30,733 (17.95%)</td></tr>
        <tr><td><a href="동구.html">동구</a></td><td class="win-minju">70,944 (69.42%)</td><td>5,784 (5.66%)</td><td>2,636 (2.58%)</td><td>1,573 (1.54%)</td><td>21,259 (20.79%)</td></tr>
        <tr><td><a href="청엽구.html">청엽구</a></td><td class="win-minju">230,509 (79.35%)</td><td>11,561 (3.98%)</td><td>8,860 (3.05%)</td><td>2,265 (0.78%)</td><td>37,302 (12.85%)</td></tr>
        <tr><td><a href="북구.html">북구</a></td><td class="win-minju">244,439 (81.76%)</td><td>9,895 (3.31%)</td><td>8,939 (2.99%)</td><td>2,062 (0.69%)</td><td>33,637 (11.25%)</td></tr>
        <tr><td><a href="안천구.html">안천구</a></td><td class="win-minju">196,549 (80.10%)</td><td>9,545 (3.89%)</td><td>7,066 (2.88%)</td><td>2,208 (0.90%)</td><td>30,012 (12.23%)</td></tr>
        <tr><td><a href="창전구.html">창전구</a></td><td class="win-minju">160,831 (78.92%)</td><td>6,806 (3.34%)</td><td>6,337 (3.11%)</td><td>1,671 (0.82%)</td><td>28,146 (13.82%)</td></tr>
        <tr><td><a href="탄성군.html">탄성군</a></td><td class="win-minju">115,550 (75.46%)</td><td>5,497 (3.59%)</td><td>4,624 (3.02%)</td><td>1,255 (0.82%)</td><td>26,202 (17.12%)</td></tr>
    `;

    // 11.3.4. 교육감
    const eduHeader = `
        <tr class="hb-elec-sub-header">
            <td>구분</td>
            <td><span class="w-badge badge-progressive">진보</span> <a href="이남현.html" style="color:inherit;">이남현</a></td>
            <td><span class="w-badge badge-moderate">중도</span> <a href="오수영.html" style="color:inherit;">오수영</a></td>
        </tr>
    `;
    const eduBody = `
        <tr class="font-bold bg-gray-50"><td>합계</td><td class="win-minju">928,608 (52.72%)</td><td>832,789 (47.28%)</td></tr>
        <tr><td><a href="중구(효빈).html">중구</a></td><td>46.46%</td><td class="win-independent">53.54%</td></tr>
        <tr><td><a href="남구(효빈).html">남구</a></td><td class="win-minju">56.67%</td><td>43.33%</td></tr>
        <tr><td><a href="서구(선거구).html">서구</a></td><td class="win-minju">52.61%</td><td>47.39%</td></tr>
        <tr><td><a href="동구(효빈).html">동구</a></td><td>46.82%</td><td class="win-independent">53.18%</td></tr>
        <tr><td><a href="청엽구(효빈).html">청엽구</a></td><td class="win-minju">56.60%</td><td>43.40%</td></tr>
        <tr><td><a href="창전구(효빈).html">창전구</a></td><td>49.71%</td><td class="win-independent">50.29%</td></tr>
        <tr><td><a href="북구(효빈).html">북구</a></td><td class="win-minju">53.22%</td><td>46.78%</td></tr>
        <tr><td><a href="안천구(효빈).html">안천구</a></td><td class="win-minju">54.22%</td><td>45.78%</td></tr>
        <tr><td><a href="탄성군(선거구).html">탄성군</a></td><td>47.11%</td><td class="win-independent">52.89%</td></tr>
    `;

    // 의회 현황
    const councilHeader = `
        <tr class="hb-elec-sub-header">
            <td><a href="더불어민주당.html" class="w-badge badge-minju">더불어민주당</a></td>
            <td><a href="국민의힘.html" class="w-badge badge-gukhim">국민의힘</a></td>
            <td><a href="진보당.html" class="w-badge badge-jinbo">진보당</a></td>
            <td><a href="조국혁신당.html" class="w-badge badge-joguk">조국혁신당</a></td>
            <td>계</td>
        </tr>
    `;
    const councilBody = `
        <tr class="font-bold"><td>34석</td><td>1석</td><td>3석</td><td>1석</td><td>40석</td></tr>
    `;

    // 11.4. 설명 텍스트
    const descriptionText = `
        <div class="hb-desc-text">
            <p><a href="https://namu.wiki/w/호남" target="_blank">호남</a>지역 못지 않게 <a href="https://namu.wiki/w/민주당계%20정당" target="_blank">민주당계 정당</a> 강세 지역이다. 호남지역보다는 <a href="https://namu.wiki/w/보수" target="_blank">보수</a>세가 있는 지역으로, <a href="https://namu.wiki/w/지방자치단체장" target="_blank">지자체장</a>이 한번이긴 하지만 <a href="https://namu.wiki/w/보수정당" target="_blank">보수정당</a> 사람이 된 적이 있고, <a href="남구_갑(효빈).html">남구 갑</a> 지역구는 보수정당후보가 여러 번 <a href="https://namu.wiki/w/국회의원" target="_blank">국회의원</a>을 했던 곳이기도 하다. 주로 보수정당이 센 지역구는 남구 갑지역구인 <a href="평당동.html">평당동</a>과 <a href="https://namu.wiki/w/원도심" target="_blank">원도심</a> 지역인 <a href="동구.html">동구</a> 정도이며, 나머지 지역은 <a href="https://namu.wiki/w/민주당" target="_blank">민주당</a>이 강세인 지역이고 <a href="남구_을(효빈).html">남구 을</a>의 <a href="월천동.html">월천동</a> 지역은 <a href="https://namu.wiki/w/진보정당" target="_blank">진보정당</a> 강세인 지역이기도 하며 <a href="북구.html">북구</a>지역에서도 일부 있다. 참고로 위의 표를 보면 알겠지만 1990년대 중후반에는 의외로 <a href="https://namu.wiki/w/진보" target="_blank">진보</a>와 보수모두 지역 전체적으로 지금과 대비하여 격차가 적었던 시절이었는데(1998년 당시 진보 62, 보수38) <a href="https://namu.wiki/w/제4회%20전국동시지방선거" target="_blank">2006년</a> 오히려 보수 지지층이 감소한 상태에서 민주진보진영이 분열해버려 3표차이로 보수성향 후보인 <a href="윤대환.html">윤대환</a>이 당선되었고, 이후 <a href="효빈광역시.html">효빈광역시</a> 역사상 최악의 시기인 전차 폐지 및 <a href="https://namu.wiki/w/도시철도" target="_blank">도시철도</a> 개발 중지기가 찾아왔으며, <a href="윤대환.html">윤대환</a> 일가는 <a href="https://namu.wiki/w/시외버스" target="_blank">시외</a>,<a href="https://namu.wiki/w/시내버스" target="_blank">시내버스</a>일가로서 사익을 위해 시민들의 큰 지지를 받던 <a href="효빈전차.html">효빈전차</a>를 폐지하려는 시도에 이르게 된다, 이를 위해 <a href="https://namu.wiki/w/시민단체" target="_blank">시민단체</a>를 위장할 사람들을 매수하고, <a href="회주공업.html">회주공업</a> <a href="박신유.html">박신유</a>의 아들 <a href="박성인.html">박성인</a>를 암살하려다 실패하였으며, 당시 <a href="https://namu.wiki/w/지방자치제" target="_blank">지방자치제</a>가 크게 강화되었다는 사실을 안 <a href="윤대환.html">윤시장</a>은 시장 직권으로 전차폐지 및 도시철도 예산낭비 방지를 위한 건설 중단 선언을 하고 말았다.</p>
            <p>그러나 이미 <a href="https://namu.wiki/w/군사정권" target="_blank">군사정권</a>시절에 전차 구간 일부 폐쇄로 인해 지옥도를 겪었던 <a href="사능동.html">사능동</a>, <a href="해서동.html">해서동</a> 일대 주민들의 큰 반발과 폐지시 엄청난 <a href="https://namu.wiki/w/교통체증" target="_blank">교통혼잡</a>이 예상되는 <a href="중구.html">중구</a> 일대의 <a href="https://namu.wiki/w/시위" target="_blank">시위</a>가 진행되었고, 시장의 권한이라며 강압적인 방식으로 시민들을 제압하였고, 당시 <a href="https://namu.wiki/w/대통령" target="_blank">대통령</a>에게 시민들이 서한을 보내 이 사실을 알리자 대통령에게 질책을 받기도 하였다. 그러다가 비서관의 내부폭로로 인해 점차 <a href="https://namu.wiki/w/지지율" target="_blank">지지율</a>이 감소하는 것도 모자라 효빈 전체에서 그에게 크게 분노하게 되었고, 그의 텃밭인 <a href="평당5동.html">평당5동</a> 지역을 제외하면 모든 동에서 그의 사임을 촉구하는 상태가 된다.</p>
            <p>그러나 그때는 아직 <a href="https://namu.wiki/w/항소심" target="_blank">2심</a>이 진행중이었고(물론 2심까지 실형을 받았다) 이에 위기감을 느낀 <a href="윤대환.html">윤대환</a>은 일가인 <a href="두청운수.html">두청운수</a>를 통해 <a href="https://namu.wiki/w/비자금" target="_blank">비자금</a>을 받고 비서관을 <a href="https://namu.wiki/w/암살" target="_blank">암살</a>하려고 시도하였으나, 전치 8주정도로 <a href="https://namu.wiki/w/살인미수" target="_blank">살인미수</a>로 끝났고, 그 비서관이 회복 후 내부 문건까지 공개하자 <a href="평당5동.html">평당5동</a>에서 마저도 그를 점차 문제 삼기 시작한다. <a href="윤대환.html">윤시장</a>이 그럼에도 미동도 하지 않자 시민들은 대통령에 서한을 보냈고, 동시에 <a href="https://namu.wiki/w/주민소환제" target="_blank">주민소환</a>을 요구하기 시작한다. 만약 이때 주민소환이 시도되었다면 전국 최초의 주민소환이었다.</p>
            <p>그러나 2007년 11월, 그는 <a href="https://namu.wiki/w/공직선거법" target="_blank">공직선거법</a> 위반으로 인한 <a href="https://namu.wiki/w/당선무효" target="_blank">당선무효</a>(당선무효 이후 <a href="https://namu.wiki/w/뇌물" target="_blank">뇌물수수</a> 및 <a href="https://namu.wiki/w/강요죄" target="_blank">강요</a> <a href="https://namu.wiki/w/협박죄" target="_blank">협박죄</a>, 선거범죄 및 살인미수, <a href="https://namu.wiki/w/폭행죄" target="_blank">폭행죄</a>, 금품살포죄 및 <a href="https://namu.wiki/w/모욕죄" target="_blank">모욕죄</a>, <a href="https://namu.wiki/w/여론조사" target="_blank">여론조사</a> 조작 혐의등을 재판받았다.)가 되었다.</p>
            <p>이후 정국이 <a href="https://namu.wiki/w/2008년%20재보궐선거" target="_blank">2008년 재보궐선거</a>를 통해 <a href="박현만.html">박현만</a> 전 시장이 다시 시장으로 복귀하며 제동이 걸렸던 정책은 복구되었고, 전차도 폐지를 면하였다. 그리고 이러한 과정으로 인해 점차 <a href="효빈광역시.html">효빈</a>은 호남에 가까운 민주당 강세 성향을 보이게 되었다.</p>
            <p>그럼에도 한동안 <a href="남구 갑.html">남구갑</a>지역은 보수후보가 득세하긴 하였는데 이는 대부분 <a href="윤대환.html">윤대환</a> 계열이 아니었던 데다가 <a href="남구.html">남구</a>의 당시 부족한 도시철도, 개발도에 비해 부족한 도시철도 수준에 대한 반발심에 가까웠고, 이를 완화하기 위해 <a href="박현만.html">박현만</a> 시정에서 처음 <a href="8호선.html">8호선</a> 계획이 나오게 된다.</p>
            <p>그리고 <a href="남구.html">남구</a>민들도 역시 효빈시민이라 철도에 대한 기대가 계속 있었고, 이는 남구민들이 자진해서 도시철도 노선을 지역에 유치하기 위한 모금 및 캠페인 까지 진행되었다.</p>
            <p>그러나 당시 국회의원이던 <a href="우신면.html">우신면</a>(19대, 20대, 21대, <a href="https://namu.wiki/w/미래통합당" target="_blank">미래통합당</a>)은 결론적으로 최악의 수를 두었는데, 그는 8호선 유치를 적극적으로 반대하였고, 그의 반대로 인해 8호선 계획이 2018년까지 와서도 진척이 없었다.</p>
            <p>그러다 옆동네 <a href="남구 을.html">남구을</a> <a href="고정민.html">고정민</a> 의원이 <a href="남구 갑.html">남구갑</a>까지 대변하여 예산을 끌어오고, 호응하면서 그에대한 민심이 매우 크게 좋아지기 시작하였고, 반면 <a href="우신면.html">우신면</a>은 평가가 급속도로 하락하기 시작하였다. 그러나 여전히 막강한 공세로 2020년 <a href="https://namu.wiki/w/제21대%20국회의원%20선거" target="_blank">총선</a>까지는 <a href="우신면.html">우신면</a>이 당선되었고 당시 <a href="중구-동구.html">중구-동구</a> 지역은 비 <a href="윤대환.html">윤대환</a> 계라고 알려젔었던 <a href="주민우.html">주민우</a>가 민주계 후보 분열과 이전 후보의 당선무효로 인해 <a href="https://namu.wiki/w/반사이익" target="_blank">반사이익</a>으로 30%미만임에도 당선되었다.</p>
            <p>그러나 <a href="주민우.html">주민우</a> 후보는 사실 <a href="윤대환.html">윤대환</a>과 접점이 있는 사람이었고, <a href="중구.html">중구</a>민들 몰래 전차폐지를 다시 시도하려하다가(이는 타 버스회사가 아닌 본인 의지였고, 그는 사실 <a href="윤대환.html">윤대환</a>의 추종자였다는 것이 이때 드러난다) 계획이 중구민들에게 드러나자 매우 크게 욕을 얻어먹었고, 그와 동시에 그는 여론조사를 조작하였고, <a href="전차폐지모임.html">전차폐지모임</a> 사람을 매수해 만들어 여론을 조작하고 <a href="https://namu.wiki/w/정치자금법" target="_blank">선거 자금</a>을 불법으로 수령한 점이 드러나 결국 2021년 6월에 당선무효되었고 이로 인해 <a href="중구.html">중구</a>에서는 보수정당 지지율이 급감해버리는 상황이 나온다.</p>
            <p>그리고 <a href="https://namu.wiki/w/2022년%206월%20보궐선거" target="_blank">2022 재보궐 선거</a>를 통해 이전 시장인 <a href="김성민.html">김성민</a>이 <a href="https://namu.wiki/w/3선" target="_blank">3선</a> 대신 선거 전략상 전차에 해박한 사람이었던 그를 <a href="중구-동구.html">중구-동구</a> 지역구로 <a href="https://namu.wiki/w/공천" target="_blank">공천</a>하여 결론적으로 이기게되었고, 효빈에서 보수지역구 후보는 <a href="우신면.html">우신면</a>이 유일해지게 되었다.</p>
            <p>그러나 <a href="우신면.html">우신면</a>의 지속적인 지역구민과의 엇박자와 <a href="고정민.html">고정민</a>과의 대비로 인해 최근 진행된 <a href="https://namu.wiki/w/제22대%20국회의원%20선거" target="_blank">22대 총선</a>에서는 <a href="남구 갑.html">남구 갑</a>지역마저 민주당이 가져가버려 보수정당이 국회의원 중에는 없으며, 지자체장 역시 <a href="남구청장.html">남구청장</a>이 <a href="https://namu.wiki/w/제8회%20전국동시지방선거" target="_blank">8회지선</a>때 보수정당 소속이었지만 선거법위반 및 시민폭행(…)으로 구청장직을 상실해버려 보수정당에 대한 정나미가 떨어져버렸고, <a href="2025년 대선.html">2025 대선</a>에서도 지지율이 감소된 것을 볼 수 있다.</p>
            <p>결론적으로 현 시점에서는 <a href="남구.html">남구</a>와 <a href="중구.html">중구</a>, <a href="동구.html">동구</a>의 보수세가 그나마 조금 있는 호남지방 정도의 정치 지형이 되었고, <a href="윤대환.html">윤대환</a> 일가였던 <a href="윤재훈.html">윤재훈</a>을 공천한 <a href="https://namu.wiki/w/제8회%20전국동시지방선거" target="_blank">2022 지선</a>은 당시 대통령이 <a href="https://namu.wiki/w/국민의힘" target="_blank">국민의힘</a>이고, 대통령 취임이 얼마 지나지 않은 <a href="https://namu.wiki/w/허니문%20기간" target="_blank">허니문</a> 선거였음에도 민주당 <a href="박효빈.html">박효빈</a> 시장이 78%, <a href="https://namu.wiki/w/무소속" target="_blank">무소속</a> 보수 후보 <a href="유성민.html">유성민</a>이 12% 2위, 국민의힘 <a href="윤재훈.html">윤재훈</a>은 4.8%로 <a href="https://namu.wiki/w/여당" target="_blank">여당</a>후보로는 전혀 믿기지 않을 정도의 졸전을 보였다.</p>
            <p>당시 <a href="박효빈.html">박효빈</a> 후보와 <a href="윤재훈.html">윤재훈</a> 후보는 면식이 있었고, 어느 후보가 되던 최연소 지자체장 타이틀이 생기는 선거였는데, 둘은 <a href="https://namu.wiki/w/학교폭력" target="_blank">학교폭력</a> 가해자- 피해자 관계였고 이후 <a href="윤재훈.html">윤재훈</a>이 <a href="박효빈.html">박효빈</a> 후보에대한 <a href="https://namu.wiki/w/사생활" target="_blank">사생활</a>을 <a href="https://namu.wiki/w/토론회" target="_blank">토론회</a>에서 발설한것도 모자라 <a href="https://namu.wiki/w/인신공격" target="_blank">인신공격</a>을 시전하자 분노가 폭발한 <a href="박효빈.html">박효빈</a> 후보가 책상을 내려치는 사건이 발생하였고, 이는 <a href="https://namu.wiki/w/방송사고" target="_blank">방송사고</a>로 이어졌으며 <a href="윤재훈.html">윤재훈</a> 후보에 대한 평가가 더 추락해버리게되어 결국 이런 득표율을 보이게 되었다.</p>
            <p>당시 <a href="효빈광역시.html">효빈</a>은 이미 <a href="박현만.html">박현만</a>- <a href="김성민.html">김성민</a>의 업적으로 인해 <a href="https://namu.wiki/w/국민의힘" target="_blank">국민의힘</a> 입장에서는 큰 벽이었고, <a href="윤대환.html">윤대환</a>의 삽질로 인해 희망이 보이지 않자 사실상 방치한 선거였고, 그 틈을 비집고 들어왔고, 당시 대통령이 <a href="https://namu.wiki/w/윤석열" target="_blank">윤씨</a>라 그냥 공천시키라고 한점과 어차피 나갈 사람이 없다는(…)점, 허니문 선거라 상관없다는 안일함으로 인해 <a href="https://namu.wiki/w/인사검증" target="_blank">인사검증</a>은 대충 끝내버리고 공천시켜버리는 공천 참사가 일어난다.</p>
            <p>그로 인해 역대급 최악의 패배를 본 지역당원들이 그의 <a href="https://namu.wiki/w/제명" target="_blank">제명</a>을 요구하였지만 <a href="https://namu.wiki/w/중앙당" target="_blank">중앙당</a>은 그리 관심이없었다고 한다.(…) 그는 결국 <a href="https://namu.wiki/w/제22대%20국회의원%20선거" target="_blank">2024 총선</a>에 <a href="창전 갑.html">창전 갑</a>(무려 국민의힘의 <a href="https://namu.wiki/w/험지" target="_blank">무덤</a>이라고 불리는 곳으로, 여기 나오면 당선은 그냥 못된다고 봐야할정도로 절망적인 곳)에 공천 신청을 하였고, 어차피 질 것(…)이라고 생각했던 중앙당은 그냥 한다는 사람 넣고 이름값좀 먹자는 생각으로 하였다가 2.2%를 받고 <a href="https://namu.wiki/w/낙선" target="_blank">낙선</a>하였다.</p>
            <p>이런 비현실적인 수치가 나온 이유는 원래도 국힘의 무덤인 곳인데 공천을 <a href="윤대환.html">윤대환</a> 일가로 해버리는 참사를 저질러 버렸던 것이고, 보수계열 <a href="주현진.html">주현진</a> 후보는 10%를 먹으며 <a href="https://namu.wiki/w/선거비용" target="_blank">선거비 보전</a>을 받았다고 한다(…)</p>
            <p>이를 통해 <a href="효빈광역시.html">효빈광역시</a>는 호남수준 다음 수준 민주당강세이고, <a href="윤대환.html">윤대환</a>과 관련된 인물이 나오면 매우 크게 혐오하는 특이한 정치지형을 가진 지역이다.</p>
        </div>
    `;

    // --- 4. HTML 최종 조립 ---
    let fullHtml = `
        <h3 id="s-11.3.1">11.3.1. 제20대 대통령 선거 개표 결과</h3>
        ${createTable('hb-elec-pres', '제20대 대통령 선거 효빈광역시 개표 결과', '0.9rem', presHeader, presBody)}

        <h3 id="s-11.3.2">11.3.2. 제22대 국회의원 선거 개표 상세</h3>
        <h4 id="s-11.3.2.1">11.3.2.1. 지역구 개표 결과</h4>
        ${createTable('hb-elec-parl', '제22대 국회의원 선거 효빈광역시 지역구별 결과', '0.62rem', parlHeader, parlBody)}

        <h3 id="s-11.3.3">11.3.3. 제8회 전국동시지방선거 개표 결과</h3>
        <h4 id="s-11.3.3.1">11.3.3.1. 효빈광역시장 개표 결과</h4>
        ${createTable('hb-elec-mayor', '제8회 전국동시지방선거 효빈광역시장 개표 결과', '0.9rem', mayorHeader, mayorBody)}

        <h4 id="s-11.3.3.2">11.3.3.2. 기초자치단체장 개표 결과</h4>
        ${createTable('hb-elec-district', '제8회 전국동시지방선거 효빈광역시 구청장·군수 결과', '0.62rem', districtHeader, districtBody)}

        <h3 id="s-11.3.4">11.3.4. 교육감 선거 및 의회 현황</h3>
        ${createTable('hb-elec-edu', '제8회 전국동시지방선거 교육감 개표 결과', '0.9rem', eduHeader, eduBody)}
        ${createTable('hb-elec-council', '현재 효빈광역시의회 의석 현황', '0.9rem', councilHeader, councilBody)}

        <h3 id="s-11.3.5">11.3.5. 제9회 전국동시지방선거 개표 결과</h3>
        <h4 id="s-11.3.5.1">11.3.5.1. 기초자치단체장 개표 결과</h4>
        ${createTable('hb-elec-district9', '제9회 전국동시지방선거 효빈광역시 구청장·군수 결과', '0.62rem', dist9Header, dist9Body)}
        ${createTable('hb-elec-mayor', '제9회 전국동시지방선거 효빈광역시장 개표 결과', '0.9rem', mayor9thHeader, mayor9thBody)}

        <h3 id="s-11.4">11.4. 설명</h3>
        ${descriptionText}
    `;

    container.innerHTML = fullHtml;

    // --- 5. 이벤트 (접기/펼치기) ---
    container.querySelectorAll('.hb-toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const tbody = document.getElementById(targetId);
            if (tbody) {
                if (tbody.classList.contains('hidden')) {
                    tbody.classList.remove('hidden');
                    this.textContent = '[접기]';
                } else {
                    tbody.classList.add('hidden');
                    this.textContent = '[펼치기]';
                }
            }
        });
    });
}