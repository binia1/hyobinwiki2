document.write(`
<style>
    .transport-template-deoknam {
        width: 100%;
        border: 2px solid #335566; /* 덕빈남도 네비게이션 컬러 (딥 슬레이트 블루) */
        border-collapse: collapse;
        margin-bottom: 20px;
        font-size: 0.9rem;
        table-layout: fixed; /* [중요] 열 너비 강제 고정 */
    }
    .transport-template-deoknam td, .transport-template-deoknam th {
        border: 1px solid #ccc;
        padding: 5px;
        word-break: break-all; /* 내용이 길어지면 줄바꿈 강제 */
    }
    .transport-header-deoknam {
        background-color: #335566;
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

    /* 도시/광역/간선 철도용 원형 아이콘 스타일 */
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

    /* 광역철도용 약간 넓은 알약 형태 아이콘 (덕남 등) */
    .pill-line-icon {
        display: inline-flex !important;
        justify-content: center;
        align-items: center;
        padding: 0 6px !important;
        height: 22px !important;
        border-radius: 11px;
        background-color: #fff;
        border-width: 2px;
        border-style: solid;
        font-weight: bold;
        font-size: 12px;
        text-decoration: none !important;
        vertical-align: middle;
        margin: 0 2px;
    }

    .bottom-nav-deoknam {
        background-color: #335566;
        padding: 8px;
        text-align: center;
        font-size: 0.85em;
    }
    .bottom-nav-deoknam a {
        color: #fff;
        text-decoration: none;
        margin: 0 3px;
    }

    /* 다크모드 대응 */
    [data-theme='dark'] .transport-template-deoknam { border-color: #26404d; }
    [data-theme='dark'] .transport-header-deoknam { background-color: #26404d; color: #fff; }
    [data-theme='dark'] .transport-sub-header, [data-theme='dark'] .transport-label { background-color: #333; color: #eee; border-color: #555; }
    [data-theme='dark'] .transport-content { background-color: #222; border-color: #555; }
    [data-theme='dark'] .transport-content a { color: #88ccbb; }
    [data-theme='dark'] .bottom-nav-deoknam { background-color: #26404d; }
    [data-theme='dark'] .bottom-nav-deoknam a { color: #fff; }
    [data-theme='dark'] .round-line-icon, [data-theme='dark'] .pill-line-icon { background-color: #333; } 
</style>

<div class="transport-template-container">
    <table class="transport-template-deoknam">
        <!-- colgroup으로 열 너비 물리적 고정 -->
        <colgroup>
            <col style="width: 12%;">
            <col style="width: 15%;">
            <col style="width: 73%;">
        </colgroup>

        <!-- 메인 헤더 -->
        <tr>
            <td colspan="3" class="transport-header-deoknam">
                <div style="display:flex; align-items:center; justify-content:center; gap:8px;">
                    <a href="덕빈남도.html" style="display: inline-flex;"><img src="이미지/덕빈남도_로고.webp" style="width: 24px !important; height: auto !important; display: inline-block !important; vertical-align:middle; filter: brightness(0) invert(1);" onerror="this.src='https://placehold.co/24x24/335566/white?text=D'"></a>
                    <div style="line-height:1.1; text-align:left;">
                        <span style="font-size:0.75em; opacity:0.9;"><a href="덕빈남도.html" style="color:inherit; text-decoration:none;">덕빈남도</a></span><br>
                        <span style="font-size:1.15em; font-weight:bold;"><a href="덕빈남도_교통.html" style="color:inherit; text-decoration:none;">교통망</a></span>
                    </div>
                </div>
            </td>
        </tr>
        
        <!-- 접기/펼치기 제어 -->
        <tr style="background-color:#fff; cursor:pointer;" onclick="toggleDeoknamTransport()">
            <td colspan="3" style="text-align:center; font-size:0.8em; color:#777; padding:4px; font-weight:bold; border-bottom: 1px solid #ccc;">[ 펼치기 · 접기 ]</td>
        </tr>

        <tbody id="deoknam-transport-body">
            <!-- 철도 섹션 -->
            <tr>
                <td rowspan="4" class="transport-sub-header" style="color:#000;">
                    <a href="덕빈남도_철도.html">철도</a>
                </td>
                <td class="transport-label">KTX / SRT</td>
                <td class="transport-content">
                    <a href="덕주역.html">덕주역</a> · 
                    <a href="낙주역.html">낙주역</a> · 
                    <a href="방산역.html">방산역</a> · 
                    <a href="매성역.html">매성역</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label">일반열차</td>
                <td class="transport-content">
                    덕주 · 낙주 · 방산 · 마진 · 비천 · 매성 · 전포 · 낭원 등 (ITX-새마을, 무궁화호)
                </td>
            </tr>
            <tr>
                <td class="transport-label">도시/광역철도</td>
                <td class="transport-content" style="line-height: 1.8;">
                    <span style="display:inline-block; margin-right:8px;">
                        <a href="덕주1호선.html" class="round-line-icon" style="border-color:#FF4F91; background-color:#FF4F91; color:#fff;">1</a> 
                        <a href="덕주1호선.html" style="color:#FF4F91; font-weight:bold;">덕주 1호선</a> 
                        <span style="font-size:0.8em; color:#999;">(조천산 ~ 신도)</span>
                    </span>
                    <del style="color:#999; display:inline-block; margin-right:8px;">
                        <a href="덕주2호선.html" class="round-line-icon" style="border-color:#41B6E6; background-color:#41B6E6; color:#fff;">2</a> 
                        <a href="덕주2호선.html" style="color:#999;">덕주 2호선(계획)</a>
                    </del>
                    <del style="color:#999; display:inline-block;">
                        <a href="덕남권_광역전철.html" class="pill-line-icon" style="border-color:#005BAC; background-color:#005BAC; color:#fff;">덕남</a> 
                        <a href="덕남권_광역전철.html" style="color:#999;">덕남권 광역철도(예정)</a>
                    </del>
                </td>
            </tr>
            <tr>
                <td class="transport-label">주요 간선/지선</td>
                <td class="transport-content" style="line-height: 1.8;">
                    <a href="덕빈선.html" class="round-line-icon" style="border-color:#333; color:#333;">덕</a> <a href="덕빈선.html" style="color:inherit">덕빈선</a> · 
                    <a href="경빈선.html" class="round-line-icon" style="border-color:#333; color:#333;">경</a> <a href="경빈선.html" style="color:inherit">경빈선</a> · 
                    <a href="매덕선.html" class="round-line-icon" style="border-color:#333; color:#333;">매</a> <a href="매덕선.html" style="color:inherit">매덕선</a> · 
                    <a href="마낙선.html" class="round-line-icon" style="border-color:#333; color:#333;">마</a> <a href="마낙선.html" style="color:inherit">마낙선</a>
                </td>
            </tr>

            <!-- 도로 섹션 -->
            <tr>
                <td rowspan="2" class="transport-sub-header">
                    <a href="덕빈남도_도로.html">도로</a>
                </td>
                <td class="transport-label"><a href="고속도로.html">고속도로</a></td>
                <td class="transport-content" style="line-height: 1.8;">
                    <a href="덕빈고속도로.html" style="font-weight:bold;">덕빈고속도로</a> · 
                    <a href="빈주부산고속도로.html" style="font-weight:bold;">빈주-부산</a> · 
                    <a href="천주전주고속도로.html" style="font-weight:bold;">천주-전주</a> · 
                    <a href="서해춘천고속도로.html" style="font-weight:bold;">서해-춘천</a> · 
                    <a href="약산포항고속도로.html" style="font-weight:bold;">약산-포항</a> · 
                    <a href="운진의정부고속도로.html" style="font-weight:bold;">운진-의정부</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label">주요/국도</td>
                <td class="transport-content">
                    덕남대로, 동서해안순환로 등
                </td>
            </tr>

            <!-- 버스 섹션 -->
            <tr>
                <td rowspan="2" class="transport-sub-header">
                    <a href="덕빈남도_버스.html">버스</a>
                </td>
                <td class="transport-label">종류</td>
                <td class="transport-content">
                    간선 · 지선 · 급행 · 좌석(보라색 포르쉐) · 마을
                </td>
            </tr>
            <tr>
                <td class="transport-label">주요 터미널</td>
                <td class="transport-content">
                    덕주복합 · 낙주고속시외 · 방산고속시외 · 마진공용 · 비천공용 · 운진시외 등
                </td>
            </tr>

            <!-- 항공 -->
            <tr>
                <td class="transport-sub-header">항공</td>
                <td class="transport-label">공항</td>
                <td class="transport-content">
                    인근 덕빈북도 <a href="효빈국제공항.html">효빈국제공항</a> 이용
                </td>
            </tr>

            <!-- 해운 -->
            <tr>
                <td class="transport-sub-header">해운</td>
                <td class="transport-label">항만</td>
                <td class="transport-content">
                    비천항 · 운진항 · 방산항 · 마진항 · 낙주항
                </td>
            </tr>
            
            <!-- 행정구역 -->
            <tr>
                <td class="transport-sub-header">행정구역</td>
                <td class="transport-label">교통</td>
                <td class="transport-content" style="line-height: 1.6;">
                    <a href="덕주시.html">덕주시</a> · <a href="방산시.html">방산시</a> · <a href="낙주시.html">낙주시</a> · <a href="비천시.html">비천시</a> · <a href="매성시.html">매성시</a> · <a href="하정시.html">하정시</a> · <a href="마진시.html">마진시</a> · <a href="운진군.html">운진군</a> · <a href="매산군.html">매산군</a> · <a href="석창군.html">석창군</a> · <a href="분주군.html">분주군</a> · <a href="인곡군.html">인곡군</a> · <a href="곡천군.html">곡천군</a> · <a href="관수군.html">관수군</a> · <a href="원안군.html">원안군</a> · <a href="두원군.html">두원군</a> · <a href="고포군.html">고포군</a>
                </td>
            </tr>
        </tbody>

        <!-- 하단 네비게이션 -->
        <tr>
            <td colspan="3" class="bottom-nav-deoknam">
                <a href="틀_효빈광역시의_교통.html">효빈</a> · 
                <a href="틀_덕빈북도의_교통.html">덕북</a> · 
                <a href="틀_덕빈남도의_교통.html" style="font-weight:bold; color:#fff;">덕남</a> · 
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
    function toggleDeoknamTransport() {
        var body = document.getElementById('deoknam-transport-body');
        if (body.style.display === 'none') {
            body.style.display = 'table-row-group';
        } else {
            body.style.display = 'none';
        }
    }
    // 기본적으로 펼쳐진 상태 유지
    document.getElementById('deoknam-transport-body').style.display = 'table-row-group';
</script>
`);