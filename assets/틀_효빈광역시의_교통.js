document.write(`
<style>
    .transport-template {
        width: 100%;
        border: 2px solid #7777aa; /* 효빈위키 네비게이션 컬러 */
        border-collapse: collapse;
        margin-bottom: 20px;
        font-size: 0.9rem;
        table-layout: fixed; /* [중요] 열 너비 강제 고정 */
    }
    .transport-template td, .transport-template th {
        border: 1px solid #ccc;
        padding: 5px;
        word-break: break-all; /* 내용이 길어지면 줄바꿈 강제 */
    }
    .transport-header {
        background-color: #7777aa;
        color: #fff;
        text-align: center;
        padding: 5px;
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
    
    /* 기존 사각형 아이콘 스타일 (버스 등에 사용) */
    .line-icon {
        display: inline-block;
        padding: 1px 4px;
        border-radius: 3px;
        color: white;
        font-weight: bold;
        font-size: 0.8em;
        margin-right: 2px;
        text-decoration: none !important;
    }

    /* [신규] 도시철도용 원형 아이콘 스타일 (요청 반영) */
    .round-line-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #fff;
        border-width: 2px;
        border-style: solid;
        font-weight: bold;
        font-size: 14px;
        text-decoration: none !important;
        vertical-align: middle;
        margin: 0 2px;
    }

    .bus-badge {
        display: inline-block;
        padding: 2px 6px;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        font-size: 0.85em;
        margin: 2px;
        text-decoration: none !important;
    }
    .bottom-nav {
        background-color: #7777aa;
        padding: 8px;
        text-align: center;
        font-size: 0.85em;
    }
    .bottom-nav a {
        color: #fff;
        text-decoration: none;
        margin: 0 3px;
    }
    [data-theme='dark'] .transport-template { border-color: #444477; }
    [data-theme='dark'] .transport-header { background-color: #444477; color: #fff; }
    [data-theme='dark'] .transport-sub-header, [data-theme='dark'] .transport-label { background-color: #333; color: #eee; border-color: #555; }
    [data-theme='dark'] .transport-content { background-color: #222; border-color: #555; }
    [data-theme='dark'] .transport-content a { color: #aaaadd; }
    [data-theme='dark'] .bottom-nav { background-color: #444477; }
    [data-theme='dark'] .bottom-nav a { color: #fff; }
    [data-theme='dark'] .round-line-icon { background-color: #333; } /* 다크모드 대응 */
</style>

<div class="transport-template-container">
    <table class="transport-template">
        <!-- [중요] colgroup으로 열 너비 물리적 고정 -->
        <colgroup>
            <col style="width: 12%;">
            <col style="width: 15%;">
            <col style="width: 73%;">
        </colgroup>

        <!-- 메인 헤더 -->
        <tr>
            <td colspan="3" class="transport-header">
                <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
                    <a href="효빈광역시.html"><img src="이미지/효빈시_로고.png" height="45" style="vertical-align:middle;" onerror="this.src='https://placehold.co/45x45/7777aa/white?text=HYOBIN'"></a>
                    <div style="line-height:1.2;">
                        <span style="font-size:1.1em;"><a href="효빈광역시.html" style="color:inherit; text-decoration:none;">효빈광역시</a></span><br>
                        <span style="font-size:1.4em; font-weight:bold;"><a href="효빈광역시_교통.html" style="color:inherit; text-decoration:none;">교통</a></span>
                    </div>
                </div>
            </td>
        </tr>
        
        <!-- 접기/펼치기 제어 -->
        <tr style="background-color:#fff; cursor:pointer;" onclick="toggleTransportContent()">
            <td colspan="3" style="text-align:center; font-size:0.8em; color:#777; padding:2px;">[ 펼치기 · 접기 ]</td>
        </tr>

        <tbody id="transport-body">
            <!-- 철도 섹션 -->
            <tr>
                <td rowspan="7" class="transport-sub-header" style="color:#000;">
                    <a href="효빈광역시_철도.html">철도</a>
                </td>
                <td class="transport-label"><a href="KTX.html">KTX</a></td>
                <td class="transport-content">
                    <a href="효빈역(일반열차).html">효빈역</a> · <a href="안천역(일반열차).html">안천역</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="SRT.html">SRT</a></td>
                <td class="transport-content">
                    <a href="효빈역(일반열차).html">효빈역</a> · <a href="안천역(일반열차).html">안천역</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="ITX-새마을.html">ITX-새마을</a></td>
                <td class="transport-content">
                    <a href="효빈역(일반열차).html">효빈</a> · <a href="안천역(일반열차).html">안천</a> · <a href="북효빈역(일반열차).html">북효빈</a> · <a href="효빈항역.html">효빈항</a> · <a href="고해역(일반열차).html">고해</a> · <a href="이자역(일반열차).html">이자</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="ITX-마음.html">ITX-마음</a></td>
                <td class="transport-content">
                    <a href="효빈역(일반열차).html">효빈</a> · <a href="안천역(일반열차).html">안천</a> · <a href="북효빈역(일반열차).html">북효빈</a> · <a href="효빈항역.html">효빈항</a> · <a href="고해역(일반열차).html">고해</a> · <a href="이자역(일반열차).html">이자</a> · <a href="효빈동신도시역(일반열차).html">효빈동신도시</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="무궁화호.html">무궁화호</a></td>
                <td class="transport-content">
                    <a href="효빈역(일반열차).html">효빈</a> · <a href="안천역(일반열차).html">안천</a> · <a href="북효빈역(일반열차).html">북효빈</a> · <a href="효빈항역.html">효빈항</a> · <a href="고해역(일반열차).html">고해</a> · <a href="이자역(일반열차).html">이자</a> · <a href="효빈동신도시역(일반열차).html">효빈동신도시</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="효빈도시철도.html">도시철도</a></td>
                <td class="transport-content">
                    <!-- 원형 아이콘 스타일 적용 -->
                    <a href="1호선.html" class="round-line-icon" style="border-color:#0077DD; color:#0077DD;">1</a>
                    <a href="2호선.html" class="round-line-icon" style="border-color:#00CCAA; color:#00CCAA;">2</a>
                    <a href="3호선.html" class="round-line-icon" style="border-color:#FFCC11; color:#FFCC11;">3</a>
                    <a href="4호선.html" class="round-line-icon" style="border-color:#FF5522; color:#FF5522;">4</a>
                    <a href="5호선.html" class="round-line-icon" style="border-color:#EE0022; color:#EE0022;">5</a>
                    <a href="6호선.html" class="round-line-icon" style="border-color:#881188; color:#881188;">6</a>
                    <a href="7호선.html" class="round-line-icon" style="border-color:#FF8899; color:#FF8899;">7</a>
                    <a href="8호선.html" class="round-line-icon" style="border-color:#9856FF; color:#9856FF;">8</a>
                    <span style="font-size:0.8em; color:#999;">(미개통: <a href="창전선.html" style="color:#aaa;">창전</a>)</span>
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="광역전철.html">광역전철</a></td>
                <td class="transport-content">
                    <a href="빈효광역선.html" class="round-line-icon" style="border-color:#6677CC; color:#6677CC;">빈</a>
                    <span style="font-size:0.9em;">(<a href="빈효광역선.html">빈효선 광역전철</a>)</span>
                </td>
            </tr>

            <!-- 도로 섹션 -->
            <tr>
                <td rowspan="3" class="transport-sub-header">
                    <a href="효빈광역시_도로.html">도로</a>
                </td>
                <td class="transport-label"><a href="고속도로.html">고속도로</a></td>
                <td class="transport-content">
                    <img src="이미지/대한민국_고속국도.png" height="15" style="vertical-align:middle;"> <a href="효빈빈주고속도로.html">효빈빈주선</a> · 
                    <img src="이미지/대한민국_고속국도.png" height="15" style="vertical-align:middle;"> <a href="효빈서해고속도로.html">효빈서해선</a> · 
                    <img src="이미지/대한민국_고속국도.png" height="15" style="vertical-align:middle;"> <a href="덕북고속도로.html">덕북선</a> · 
                    <img src="이미지/대한민국_고속국도.png" height="15" style="vertical-align:middle;"> <a href="효빈외곽순환고속도로.html">효빈외곽순환선</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label">주요도로</td>
                <td class="transport-content">
                    <a href="효빈로.html">효빈로</a> · <a href="중앙로.html">중앙로</a> · <a href="효빈공단로.html">효빈공단로</a> · <a href="고송대로.html">고송대로</a> · <a href="세하로.html">세하로</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label"><a href="국도.html">국도</a></td>
                <td class="transport-content">
                    <img src="이미지/국도.png" height="15" style="vertical-align:middle;"> <a href="7번_국도.html">7번</a> · 
                    <img src="이미지/국도.png" height="15" style="vertical-align:middle;"> <a href="14번_국도.html">14번</a> · 
                    <img src="이미지/국도.png" height="15" style="vertical-align:middle;"> <a href="31번_국도.html">31번</a>
                </td>
            </tr>

            <!-- 버스 섹션 -->
            <tr>
                <td rowspan="3" class="transport-sub-header">
                    <a href="효빈광역시_시내버스.html">버스</a>
                </td>
                <td class="transport-label">종류</td>
                <td class="transport-content">
                    <a href="간선버스.html" class="bus-badge" style="background-color:#01B7ED;">간선</a>
                    <a href="지선버스.html" class="bus-badge" style="background-color:#37B484;">지선</a>
                    <a href="순환버스.html" class="bus-badge" style="background-color:#E7D600; color:#000;">순환</a>
                    <a href="급행버스.html" class="bus-badge" style="background-color:#D81C2F;">급행</a>
                    <a href="좌석버스.html" class="bus-badge" style="background-color:#FF5800;">좌석</a>
                    <a href="광역버스.html" class="bus-badge" style="background-color:#485EC6;">광역</a>
                    <a href="마을버스.html" class="bus-badge" style="background-color:#A664A0;">마을</a>
                    <a href="공항버스.html" class="bus-badge" style="background-color:#84C36E;">공항</a>
                    <a href="시티투어버스.html" class="bus-badge" style="background-color:#7777AA;">투어</a>
                </td>
            </tr>
            <tr>
                <td class="transport-label">터미널</td>
                <td class="transport-content">
                    <a href="효빈종합버스터미널.html">효빈종합</a>(고속/시외) · <a href="효빈남부터미널.html">효빈남부</a> · <del><a href="효빈동부정류소.html" style="color:#999;">효빈동부</a></del>
                </td>
            </tr>
            <tr>
                <td class="transport-label">주요정류소</td>
                <td class="transport-content">
                    <a href="중수역.html">중수역</a> · <a href="이자공원역.html">이자공원역</a> · <a href="도변역.html">도변역</a> · <del><a href="평당신도시.html" style="color:#999;">평당</a></del> · <a href="북효빈역.html">북효빈역</a>
                </td>
            </tr>

            <!-- 공항/항만 -->
            <tr>
                <td class="transport-sub-header">항공</td>
                <td class="transport-label">공항</td>
                <td class="transport-content">
                    <a href="효빈국제공항.html">효빈국제공항</a> (기도군 소재)
                </td>
            </tr>
            <tr>
                <td class="transport-sub-header">해운</td>
                <td class="transport-label">항만</td>
                <td class="transport-content">
                    <a href="효빈항.html">효빈항</a> (국제여객터미널) · <a href="어간항.html">어간항</a> · <a href="효빈내항.html">효빈내항</a>
                </td>
            </tr>

            <!-- 자치구 교통 -->
            <tr>
                <td class="transport-sub-header">자치구</td>
                <td class="transport-label">교통</td>
                <td class="transport-content">
                    <a href="효빈_중구_교통.html">중구</a> · <a href="효빈_동구_교통.html">동구</a> · <a href="효빈_서구_교통.html">서구</a> · <a href="효빈_남구_교통.html">남구</a> · 
                    <a href="효빈_북구_교통.html">북구</a> · <a href="청엽구_교통.html">청엽구</a> · <a href="창전구_교통.html">창전구</a> · <a href="안천구_교통.html">안천구</a> · 
                    <a href="탄성군_교통.html">탄성군</a>
                </td>
            </tr>
        </tbody>

        <!-- 하단 네비게이션 -->
        <tr>
            <td colspan="3" class="bottom-nav">
                <a href="틀_효빈광역시의_교통.html" style="font-weight:bold; color:#fff;">효빈</a> · 
                <a href="틀_덕빈북도의_교통.html">덕북</a> · 
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
    function toggleTransportContent() {
        var body = document.getElementById('transport-body');
        if (body.style.display === 'none') {
            body.style.display = 'table-row-group';
        } else {
            body.style.display = 'none';
        }
    }
    // 기본적으로 펼쳐진 상태 유지 (필요시 'none'으로 변경)
    document.getElementById('transport-body').style.display = 'table-row-group';
</script>
`);