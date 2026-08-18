document.write(`
<style>
    .transport-template-deokbin {
        width: 100%;
        border: 2px solid #2ECC71; /* 덕빈북도 네비게이션 컬러 (그린) */
        border-collapse: collapse;
        margin-bottom: 20px;
        font-size: 0.9rem;
        table-layout: fixed; /* [중요] 열 너비 강제 고정 */
    }
    .transport-template-deokbin td, .transport-template-deokbin th {
        border: 1px solid #ccc;
        padding: 5px;
        word-break: break-all; /* 내용이 길어지면 줄바꿈 강제 */
    }
    .transport-header-deokbin {
        background-color: #2ECC71;
        color: #fff;
        text-align: center;
        padding: 8px;
    }
    .transport-sub-header {
        background-color: #f9f9f9;
        font-weight: bold;
        text-align: center;
        width: 12%; /* 너비 강제 (12%) */
    }
    .transport-label {
        background-color: #eee;
        text-align: center;
        width: 15%; /* 너비 강제 (15%) */
        font-weight: bold;
        color: #333;
    }
    .transport-content {
        background-color: #fff;
        padding: 8px;
        text-align: left;
        width: auto; /* 나머지는 내용이 차지 */
    }
    .transport-content a {
        text-decoration: none;
        color: #0062cc;
    }
    .transport-content a:hover {
        text-decoration: underline;
    }

    /* 도시철도용 원형 아이콘 스타일 */
    .round-line-icon {
        display: inline-flex !important;
        justify-content: center;
        align-items: center;
        width: 22px !important;
        height: 22px !important;
        border-radius: 50%;
        background-color: #fff;
        border-width: 2px;
        border-style: solid;
        font-weight: bold;
        font-size: 13px;
        text-decoration: none !important;
        vertical-align: middle;
        margin: 0 2px;
    }

    /* 도로 아이콘 폭주 방지용 강제 고정 스타일 */
    .highway-icon {
        width: 18px !important;
        height: auto !important;
        max-height: 20px !important;
        vertical-align: middle !important;
        display: inline-block !important;
        margin-right: 2px;
        box-shadow: none !important;
    }
    .national-route-badge {
        background-color: #1e3a8a;
        color: white;
        padding: 1px 6px;
        border-radius: 10px;
        font-size: 10px;
        font-weight: bold;
        vertical-align: middle;
        margin-right: 4px;
    }

    .bottom-nav-deokbin {
        background-color: #2ECC71;
        padding: 8px;
        text-align: center;
        font-size: 0.85em;
    }
    .bottom-nav-deokbin a {
        color: #fff;
        text-decoration: none;
        margin: 0 3px;
    }

    /* 다크모드 대응 */
    [data-theme='dark'] .transport-template-deokbin { border-color: #27ae60; }
    [data-theme='dark'] .transport-header-deokbin { background-color: #27ae60; color: #fff; }
    [data-theme='dark'] .transport-sub-header, [data-theme='dark'] .transport-label { background-color: #333; color: #eee; border-color: #555; }
    [data-theme='dark'] .transport-content { background-color: #222; border-color: #555; }
    [data-theme='dark'] .transport-content a { color: #88ccbb; }
    [data-theme='dark'] .bottom-nav-deokbin { background-color: #27ae60; }
    [data-theme='dark'] .bottom-nav-deokbin a { color: #fff; }
    [data-theme='dark'] .round-line-icon { background-color: #333; } 
</style>

<div class="transport-template-container">
    <table class="transport-template-deokbin">
        <!-- colgroup으로 열 너비 물리적 고정 -->
        <colgroup>
            <col style="width: 12%;">
            <col style="width: 15%;">
            <col style="width: 73%;">
        </colgroup>

        <!-- 메인 헤더 -->
        <tr>
            <td colspan="3" class="transport-header-deokbin">
                <div style="display:flex; align-items:center; justify-content:center; gap:8px;">
                    <a href="덕빈북도.html" style="display: inline-flex;"><img src="이미지/덕북로고.webp" style="width: 24px !important; height: auto !important; display: inline-block !important; vertical-align:middle; filter: brightness(0) invert(1);" onerror="this.src='https://placehold.co/24x24/2ecc71/white?text=D'"></a>
                    <div style="line-height:1.1; text-align:left;">
                        <span style="font-size:0.75em; opacity:0.9;"><a href="덕빈북도.html" style="color:inherit; text-decoration:none;">덕빈북도</a></span><br>
                        <span style="font-size:1.15em; font-weight:bold;"><a href="덕빈북도_교통.html" style="color:inherit; text-decoration:none;">교통망</a></span>
                    </div>
                </div>
            </td>
        </tr>
        
        <!-- 접기/펼치기 제어 -->
        <tr style="background-color:#fff; cursor:pointer;" onclick="toggleDeokbinTransport()">
            <td colspan="3" style="text-align:center; font-size:0.8em; color:#777; padding:4px; font-weight:bold; border-bottom: 1px solid #ccc;">[ 펼치기 · 접기 ]</td>
        </tr>

        <tbody id="deokbin-transport-body">
            <!-- 철도 섹션 -->
            <tr>
                <td rowspan="7" class="transport-sub-header" style="color:#000;">
                    <a href="덕빈북도_철도.html">철도</a>
                </td>
                <td class="transport-label"><a href="KTX.html">KTX</a></td>
                <td class="transport-content">
                    <a href="빈주역.html">빈주역</a> · <a href="서해역.html">서해역</a> · <a href="낭원역.html">낭원역</a> · <a href="산취역.html">산취역</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="SRT.html">SRT</a></td>
                <td class="transport-content">
                    <a href="빈주역.html">빈주역</a> · <a href="서해역.html">서해역</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="ITX-새마을.html">ITX-새마을</a></td>
                <td class="transport-content">
                    빈주 · 서해 · 약산 · 천주 · <a href="강주역.html">강주</a> · 계성 · 군천 · 전산 · 상안 · 낭원 · 전포
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="ITX-마음.html">ITX-마음</a></td>
                <td class="transport-content">
                    빈주 · 약산 · 천주 · <a href="강주역.html">강주</a> · 염곡 · 반양
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="무궁화호.html">무궁화호</a></td>
                <td class="transport-content">
                    빈주 · 천조 · 서해 · 약산 · 천주 · 부진 · 모제 · 서진 · <a href="강주역.html">강주</a> · 염곡 · 군천 · 낭원 · 우구
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="도시철도.html">도시철도</a></td>
                <td class="transport-content" style="line-height: 1.8;">
                    <a href="빈주1호선.html" class="round-line-icon" style="border-color:#CFBA0F; color:#CFBA0F;">1</a> <a href="빈주1호선.html" style="color:inherit">빈주 1호선</a> · 
                    <a href="빈주2호선.html" class="round-line-icon" style="border-color:#C455F6; background-color:#C455F6; color:#fff;">2</a> <a href="빈주2호선.html" style="color:inherit">빈주 2호선</a> · 
                    <a href="1호선.html" class="round-line-icon" style="border-color:#0077DD; color:#0077DD;">1</a> <a href="1호선.html" style="color:inherit">효빈 1호선</a> <span style="font-size:0.8em; color:#999;">(약산)</span> · 
                    <a href="3호선.html" class="round-line-icon" style="border-color:#FFCC11; color:#FFCC11;">3</a> <a href="3호선.html" style="color:inherit">효빈 3호선</a> <span style="font-size:0.8em; color:#999;">(기도)</span> · 
                    <a href="4호선.html" class="round-line-icon" style="border-color:#FF5522; color:#FF5522;">4</a> <a href="4호선.html" style="color:inherit">효빈 4호선</a> <span style="font-size:0.8em; color:#999;">(계획)</span> · 
                    <a href="5호선.html" class="round-line-icon" style="border-color:#EE0022; color:#EE0022;">5</a> <a href="5호선.html" style="color:inherit">효빈 5호선</a> <span style="font-size:0.8em; color:#999;">(예정)</span> · 
                    <a href="서해경전철.html" class="round-line-icon" style="border-color:#0077B6; color:#0077B6;">경</a> <a href="서해경전철.html" style="color:inherit">서해</a> <span style="font-size:0.8em; color:#999;">(예정)</span> · 
                    <a href="천주_1호선.html" class="round-line-icon" style="border-color:#00AABB; color:#00AABB;">1</a> <a href="천주_1호선.html" style="color:inherit">천주 1호선</a> <span style="font-size:0.8em; color:#999;">(계획)</span>
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="광역전철.html">광역전철</a></td>
                <td class="transport-content" style="line-height: 1.8;">
                    <a href="빈효선_광역전철.html" class="round-line-icon" style="border-color:#6677CC; background-color:#6677CC; color:#fff; font-size:11px;">빈</a> <a href="빈효선_광역전철.html" style="color:inherit">빈효선 광역전철</a> · 
                    <a href="빈주광역철도.html" class="round-line-icon" style="border-color:#005BAC; background-color:#005BAC; color:#fff; font-size:11px;">광</a> <a href="빈주광역철도.html" style="color:inherit">빈주권 광역철도</a> · 
                    <a href="HDTX-A.html" class="round-line-icon" style="border-color:#E61E2B; background-color:#E61E2B; color:#fff; font-size:11px;">A</a> <a href="HDTX-A.html" style="color:inherit">HDTX-A</a> <span style="font-size:0.8em; color:#999;">(계획)</span>
                </td>
            </tr>

            <!-- 도로 섹션 -->
            <tr>
                <td rowspan="3" class="transport-sub-header">
                    <a href="덕빈북도_도로.html">도로</a>
                </td>
                <td class="transport-label"><a href="고속도로.html">고속도로</a></td>
                <td class="transport-content" style="line-height: 1.8;">
                    <a href="빈주부산고속도로.html" style="font-weight:bold;">빈주-부산</a> · 
                    <a href="천주전주고속도로.html" style="font-weight:bold;">천주-전주</a> · 
                    <a href="서해춘천고속도로.html" style="font-weight:bold;">서해-춘천</a> · 
                    <a href="약산포항고속도로.html" style="font-weight:bold;">약산-포항</a> · 
                    <img src="이미지/대한민국_고속국도.webp" class="highway-icon"> <a href="효빈빈주선.html">효빈빈주선</a> · 
                    <img src="이미지/대한민국_고속국도.webp" class="highway-icon"> <a href="효빈서해선.html">효빈서해선</a> · 
                    <img src="이미지/대한민국_고속국도.webp" class="highway-icon"> <a href="덕북선.html">덕북선</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label">주요도로</td>
                <td class="transport-content">
                    빈주외곽순환도로
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="국도.html">국도</a></td>
                <td class="transport-content">
                    <span class="national-route-badge">35</span> 35번 국도 (효빈 아우토반)
                </td>
            </tr>

            <!-- 버스 섹션 -->
            <tr>
                <td rowspan="3" class="transport-sub-header">
                    <a href="덕빈북도_버스.html">버스</a>
                </td>
                <td class="transport-label">종류</td>
                <td class="transport-content">
                    간선 · 지선 · 순환 · 광역 · 좌석 · 급행 · 급행좌석 · 마을
                </td>
            </tr>
            <tr>
                <td class="transport-label">터미널</td>
                <td class="transport-content">
                    빈주종합 · 천주시외고속 · 서해종합 · 강주시외고속 · 약산종합 · 군천종합 · 계성고속시외 · 전산공용
                </td>
            </tr>
            <tr>
                <td class="transport-label">주요정류소</td>
                <td class="transport-content">
                    장기역환승정류장 · <a href="덕빈북도청.html">덕빈북도청</a>정류장 · 궁하아이정류장 · 부진역환승센터
                </td>
            </tr>

            <!-- 항공/해운 -->
            <tr>
                <td class="transport-sub-header">항공</td>
                <td class="transport-label">공항</td>
                <td class="transport-content">
                    <a href="효빈국제공항.html">효빈국제공항</a> (<a href="기도군.html">기도군</a> 소재)
                </td>
            </tr>
            <tr>
                <td class="transport-sub-header">해운</td>
                <td class="transport-label">항만</td>
                <td class="transport-content">
                    서해항 · 군천항 · 전산항 · 강주항
                </td>
            </tr>

            <!-- 행정구역 -->
            <tr>
                <td class="transport-sub-header">행정구역</td>
                <td class="transport-label">교통</td>
                <td class="transport-content" style="line-height: 1.6;">
                    <a href="빈주시.html">빈주시</a> · <a href="천주시.html">천주시</a> · <a href="서해시.html">서해시</a> · <a href="약산시.html">약산시</a> · <a href="강주시.html">강주시</a> · <a href="계성시.html">계성시</a> · <a href="군천시.html">군천시</a> · <a href="서진시.html">서진시</a> · <a href="전산시.html">전산시</a> · <a href="낭원군.html">낭원군</a> · <a href="덕현군.html">덕현군</a> · <a href="반양군.html">반양군</a> · <a href="선곡군.html">선곡군</a> · <a href="저천군.html">저천군</a> · <a href="치원군.html">치원군</a> · <a href="기도군.html">기도군</a> · <a href="모제군.html">모제군</a> · <a href="상안군.html">상안군</a>
                </td>
            </tr>
        </tbody>

        <!-- 하단 네비게이션 -->
        <tr>
            <td colspan="3" class="bottom-nav-deokbin">
                <a href="틀_효빈광역시의_교통.html">효빈</a> · 
                <a href="틀_덕빈북도의_교통.html" style="font-weight:bold; color:#fff;">덕북</a> · 
                <a href="틀_덕빈남도의_교통.html">덕남</a> · 
                <a href="틀_서울특별시의_교통.html">서울</a> · 
                <a href="틀_부산광역시의_교통.html">부산</a> · 
                <a href="틀_대구광역시의_교통.html">대구</a> · 
                <a href="틀_인천광역시의_교통.html">인천</a> · 
                <a href="틀_광주광역시의_교통.html">광주</a> · 
                <a href="틀_대전광역시의_교통.html">대전</a> · 
                <a href="틀_울산광역시의_교통.html">울산</a> · 
                <a href="틀_세종특별자치시의_교통.html">세종</a> · 
                <a href="틀_경기도의_교통.html">경기</a> · 
                <a href="틀_강원특별자치도의_교통.html">강원</a> · 
                <a href="틀_충청북도의_교통.html">충북</a> · 
                <a href="틀_충청남도의_교통.html">충남</a> · 
                <a href="틀_전북특별자치도의_교통.html">전북</a> · 
                <a href="틀_전라남도의_교통.html">전남</a> · 
                <a href="틀_경상북도의_교통.html">경북</a> · 
                <a href="틀_경상남도의_교통.html">경남</a> · 
                <a href="틀_제주특별자치도의_교통.html">제주</a>
            </td>
        </tr>
    </table>
</div>

<script>
    function toggleDeokbinTransport() {
        var body = document.getElementById('deokbin-transport-body');
        if (body.style.display === 'none') {
            body.style.display = 'table-row-group';
        } else {
            body.style.display = 'none';
        }
    }
    // 기본적으로 펼쳐진 상태 유지
    document.getElementById('deokbin-transport-body').style.display = 'table-row-group';
</script>
`);