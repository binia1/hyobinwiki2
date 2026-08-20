// assets/auto_navbox.js

document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. CSS 스타일 자동 삽입 (HTML에 style 안 넣어도 됨)
    // ==========================================
    const navboxCSS = `
        .wiki-navbox { border: 2px solid #ccc; width: 100%; margin: 0 auto; font-size: 0.85rem; background: white; border-radius: 4px; overflow: hidden; }
        [data-theme='dark'] .wiki-navbox { background: #2d2f34; border-color: #555 !important; }
        .wiki-navbox-header { color: white; padding: 10px; }
        .wiki-navbox .header-content { display: flex; align-items: center; justify-content: center; gap: 15px; }
        .wiki-navbox .header-content img { height: 45px; }
        .wiki-navbox .title-sub { font-size: 0.9rem; font-weight: bold; }
        .wiki-navbox .title-main { font-size: 1.25rem; font-weight: 900; }
        
        .wiki-navbox summary { text-align: center; padding: 5px; cursor: pointer; background: #eee; font-weight: bold; border-bottom: 1px solid #ccc; list-style: none; color: #000; }
        [data-theme='dark'] .wiki-navbox summary { background: #383b40; color: #eee; border-color: #555; }
        .wiki-navbox summary::-webkit-details-marker { display: none; }
        
        .wiki-navbox-table { width: 100%; border-collapse: collapse; background: white; margin: 0 !important; border: none !important; }
        [data-theme='dark'] .wiki-navbox-table { background: #121212; }
        .wiki-navbox-table th { color: white; width: 50px; border: 1px solid #ccc !important; padding: 8px; font-weight: bold; text-align: center; }
        .wiki-navbox-table td { border: 1px solid #ccc !important; padding: 8px 15px; line-height: 1.8; text-align: left; }
        [data-theme='dark'] .wiki-navbox-table th, [data-theme='dark'] .wiki-navbox-table td { border-color: #444 !important; }
        
        .wiki-navbox-footer { color: white; text-align: center; padding: 5px; font-weight: bold; font-size: 0.8rem; }
        
        .wiki-navbox .red-link { color: #d32f2f; text-decoration: none; font-weight: bold; }
        .wiki-navbox .blue-link { color: #1976d2; text-decoration: none; font-weight: bold; }
        [data-theme='dark'] .wiki-navbox .red-link { color: #ff6b6b; }
        [data-theme='dark'] .wiki-navbox .blue-link { color: #4dabf7; }
        .wiki-navbox a:hover { text-decoration: underline; }
    `;
    
    // 스타일 태그를 생성해서 HTML의 <head>에 추가합니다.
    const styleElement = document.createElement('style');
    styleElement.innerHTML = navboxCSS;
    document.head.appendChild(styleElement);


    // ==========================================
    // 2. 틀을 삽입할 타겟 위치(Placeholder) 찾기
    // ==========================================
    const placeholder = document.getElementById('wiki-navbox-area');
    // 문서에 <div id="wiki-navbox-area"></div> 가 없으면 작동을 중지합니다.
    if (!placeholder) return; 

    // ==========================================
    // 3. 현재 문서의 h1 태그에서 도로명 추출 ("케손로" 등)
    // ==========================================
    const titleElement = document.querySelector('h1');
    if (!titleElement) return;
    const docTitle = titleElement.innerText.trim();
    const targetLink = `href="${docTitle}.html"`; 


    // ==========================================
    // 4. 모든 둘러보기 틀 데이터 (HTML)
    // ==========================================
    const navboxData = {
"효빈광역시 대로": `
        <div class="wiki-navbox" style="border-color: #7777AA;">
            <div class="wiki-navbox-header" style="background-color: #7777AA;">
                <div class="header-content">
                    <img src="이미지/효빈광역시_흰색로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">효빈광역시</div>
                        <div class="title-main">효빈광역시 관내 대로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#7777AA;">ㄱ</th><td><a href="고송대로.html" class="red-link">고송대로</a> · <a href="관서대로.html" class="red-link">관서대로</a></td></tr>
                    <tr><th style="background-color:#7777AA;">ㄷ</th><td><a href="덕북고속도로.html" class="red-link">덕북고속도로</a> · <a href="덕청대로.html" class="blue-link">덕청대로</a> · <a href="도변대로.html" class="blue-link">도변대로</a></td></tr>
                    <tr><th style="background-color:#7777AA;">ㅅ</th><td><a href="산업대로.html" class="blue-link">산업대로</a></td></tr>
                    <tr><th style="background-color:#7777AA;">ㅇ</th><td><a href="엽월대로.html" class="red-link">엽월대로</a></td></tr>
                    <tr><th style="background-color:#7777AA;">ㅍ</th><td><a href="평당대로.html" class="red-link">평당대로</a></td></tr>
                    <tr><th style="background-color:#7777AA;">ㅎ</th><td><a href="효빈빈주고속도로.html" class="blue-link">효빈빈주고속도로</a> · <a href="효빈서해고속도로.html" class="red-link">효빈서해고속도로</a> · <a href="효빈외곽순환고속도로.html" class="blue-link">효빈외곽순환고속도로</a> · <a href="효빈외곽순환선.html" class="red-link">효빈외곽순환선</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #7777AA;">
                    효빈광역시의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "중구": `
        <div class="wiki-navbox" style="border-color: #BB9955;">
            <div class="wiki-navbox-header" style="background-color: #BB9955;">
                <div class="header-content">
                    <img src="이미지/중구_흰색로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">효빈광역시</div>
                        <div class="title-main">중구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#BB9955;">ㄱ</th><td><a href="고도로.html" class="red-link">고도로</a> · <a href="고성로.html" class="red-link">고성로</a> · <a href="고중로.html" class="blue-link">고중로</a></td></tr>
                    <tr><th style="background-color:#BB9955;">ㄴ</th><td><a href="내서로.html" class="blue-link">내서로</a> · <a href="내항남북로.html" class="blue-link">내항남북로</a> · <a href="내항동서로.html" class="red-link">내항동서로</a> · <a href="내항로.html" class="blue-link">내항로</a></td></tr>
                    <tr><th style="background-color:#BB9955;">ㄷ</th><td><a href="덕성로.html" class="red-link">덕성로</a> · <a href="도람로.html" class="red-link">도람로</a></td></tr>
                    <tr><th style="background-color:#BB9955;">ㅂ</th><td><a href="붕우로.html" class="red-link">붕우로</a></td></tr>
                    <tr><th style="background-color:#BB9955;">ㅅ</th><td><a href="상서로.html" class="red-link">상서로</a> · <a href="상자로.html" class="blue-link">상자로</a> · <a href="성설로.html" class="blue-link">성설로</a> · <a href="소장로.html" class="blue-link">소장로</a> · <a href="심동로.html" class="blue-link">심동로</a> · <a href="십덕로.html" class="red-link">십덕로</a></td></tr>
                    <tr><th style="background-color:#BB9955;">ㅇ</th><td><a href="악내로.html" class="blue-link">악내로</a> · <a href="약맥로.html" class="red-link">약맥로</a> · <a href="요소로.html" class="red-link">요소로</a> · <a href="우이로.html" class="blue-link">우이로</a> · <a href="운중로.html" class="red-link">운중로</a></td></tr>
                    <tr><th style="background-color:#BB9955;">ㅈ</th><td><a href="장원로.html" class="red-link">장원로</a> · <a href="조유로.html" class="red-link">조유로</a> · <a href="중동로.html" class="red-link">중동로</a> · <a href="중보로.html" class="red-link">중보로</a> · <a href="중앙로.html" class="red-link">중앙로</a></td></tr>
                    <tr><th style="background-color:#BB9955;">ㅊ</th><td><a href="창선2로.html" class="blue-link">창선2로</a> · <a href="천석로.html" class="blue-link">천석로</a></td></tr>
                    <tr><th style="background-color:#BB9955;">ㅍ</th><td><a href="팔번로.html" class="red-link">팔번로</a></td></tr>
                    <tr><th style="background-color:#BB9955;">ㅎ</th><td><a href="효빈성로.html" class="blue-link">효빈성로</a> · <a href="효빈역전로.html" class="red-link">효빈역전로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #BB9955;">
                    효빈광역시의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "동구": `
        <div class="wiki-navbox" style="border-color: #FF9922;">
            <div class="wiki-navbox-header" style="background-color: #FF9922;">
                <div class="header-content">
                    <img src="이미지/동구_흰색로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">효빈광역시</div>
                        <div class="title-main">동구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#FF9922;">ㄴ</th><td><a href="뇌전로.html" class="red-link">뇌전로</a></td></tr>
                    <tr><th style="background-color:#FF9922;">ㄷ</th><td><a href="당가로.html" class="blue-link">당가로</a> · <a href="덕성로.html" class="red-link">덕성로</a> · <a href="도변이자로.html" class="red-link">도변이자로</a></td></tr>
                    <tr><th style="background-color:#FF9922;">ㅂ</th><td><a href="보몽로.html" class="red-link">보몽로</a> · <a href="뿌리빛로.html" class="blue-link">뿌리빛로</a></td></tr>
                    <tr><th style="background-color:#FF9922;">ㅅ</th><td><a href="송남로.html" class="red-link">송남로</a></td></tr>
                    <tr><th style="background-color:#FF9922;">ㅇ</th><td><a href="악내로.html" class="blue-link">악내로</a> · <a href="앵소로.html" class="blue-link">앵소로</a> · <a href="에이치스코로.html" class="blue-link">에이치스코로</a> · <a href="역사로.html" class="red-link">역사로</a> · <a href="오내로.html" class="red-link">오내로</a> · <a href="우개로.html" class="blue-link">우개로</a> · <a href="우택로.html" class="red-link">우택로</a> · <a href="운동장로.html" class="red-link">운동장로</a></td></tr>
                    <tr><th style="background-color:#FF9922;">ㅈ</th><td><a href="전천로.html" class="red-link">전천로</a> · <a href="중수로.html" class="red-link">중수로</a> · <a href="중탄로.html" class="blue-link">중탄로</a></td></tr>
                    <tr><th style="background-color:#FF9922;">ㅊ</th><td><a href="청엽중앙로.html" class="blue-link">청엽중앙로</a></td></tr>
                    <tr><th style="background-color:#FF9922;">ㅎ</th><td><a href="효빈대학로.html" class="red-link">효빈대학로</a> · <a href="효빈로.html" class="red-link">효빈로</a> · <a href="효빈역전로.html" class="red-link">효빈역전로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #FF9922;">
                    효빈광역시의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "서구": `
        <div class="wiki-navbox" style="border-color: #00AABB;">
            <div class="wiki-navbox-header" style="background-color: #00AABB;">
                <div class="header-content">
                    <img src="이미지/서구_흰색로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">효빈광역시</div>
                        <div class="title-main">서구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#00AABB;">ㄱ</th><td><a href="강천로.html" class="red-link">강천로</a> · <a href="고송남북로.html" class="red-link">고송남북로</a> · <a href="고송동서로.html" class="red-link">고송동서로</a> · <a href="고송중앙로.html" class="blue-link">고송중앙로</a> · <a href="고송해안로.html" class="blue-link">고송해안로</a> · <a href="고중로.html" class="blue-link">고중로</a> · <a href="과진로.html" class="red-link">과진로</a> · <a href="구창로.html" class="red-link">구창로</a></td></tr>
                    <tr><th style="background-color:#00AABB;">ㄴ</th><td><a href="내성로.html" class="blue-link">내성로</a> · <a href="노현로.html" class="red-link">노현로</a></td></tr>
                    <tr><th style="background-color:#00AABB;">ㄷ</th><td><a href="당선로.html" class="red-link">당선로</a> · <a href="당선해안로.html" class="blue-link">당선해안로</a> · <a href="도탄로.html" class="blue-link">도탄로</a></td></tr>
                    <tr><th style="background-color:#00AABB;">ㅁ</th><td><a href="무창로.html" class="red-link">무창로</a></td></tr>
                    <tr><th style="background-color:#00AABB;">ㅂ</th><td><a href="복지대학로.html" class="red-link">복지대학로</a></td></tr>
                    <tr><th style="background-color:#00AABB;">ㅅ</th><td><a href="소흥로.html" class="red-link">소흥로</a> · <a href="송진로.html" class="blue-link">송진로</a> · <a href="실능로.html" class="blue-link">실능로</a></td></tr>
                    <tr><th style="background-color:#00AABB;">ㅇ</th><td><a href="오선로.html" class="blue-link">오선로</a> · <a href="요소로.html" class="red-link">요소로</a> · <a href="이달로.html" class="red-link">이달로</a></td></tr>
                    <tr><th style="background-color:#00AABB;">ㅈ</th><td><a href="주촌로.html" class="blue-link">주촌로</a></td></tr>
                    <tr><th style="background-color:#00AABB;">ㅊ</th><td><a href="청고로.html" class="red-link">청고로</a> · <a href="청덕로.html" class="red-link">청덕로</a> · <a href="청덕중앙로.html" class="blue-link">청덕중앙로</a> · <a href="충선로.html" class="red-link">충선로</a> · <a href="칠라로.html" class="blue-link">칠라로</a></td></tr>
                    <tr><th style="background-color:#00AABB;">ㅌ</th><td><a href="통성로.html" class="red-link">통성로</a></td></tr>
                    <tr><th style="background-color:#00AABB;">ㅎ</th><td><a href="호한로.html" class="red-link">호한로</a> · <a href="화한로.html" class="blue-link">화한로</a> · <a href="효빈대학로.html" class="red-link">효빈대학로</a> · <a href="효빈로.html" class="red-link">효빈로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #00AABB;">
                    효빈광역시의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "남구": `
        <div class="wiki-navbox" style="border-color: #DDBBFF;">
            <div class="wiki-navbox-header" style="background-color: #DDBBFF;">
                <div class="header-content">
                    <img src="이미지/남구_흰색로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">효빈광역시</div>
                        <div class="title-main">남구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#DDBBFF;">ㄱ</th><td><a href="강무로.html" class="red-link">강무로</a> · <a href="고간로.html" class="blue-link">고간로</a> · <a href="고당로.html" class="red-link">고당로</a> · <a href="고도로.html" class="red-link">고도로</a> · <a href="고성로.html" class="red-link">고성로</a> · <a href="곽산공단로.html" class="red-link">곽산공단로</a> · <a href="곽산남북1로.html" class="blue-link">곽산남북1로</a> · <a href="곽산동서1로.html" class="red-link">곽산동서1로</a> · <a href="곽산동서2로.html" class="red-link">곽산동서2로</a> · <a href="곽산로.html" class="red-link">곽산로</a> · <a href="곽암로.html" class="red-link">곽암로</a> · <a href="괴성로.html" class="red-link">괴성로</a> · <a href="구갈로.html" class="blue-link">구갈로</a> · <a href="기계산업로.html" class="red-link">기계산업로</a> · <a href="기아로.html" class="blue-link">기아로</a> · <a href="기지로.html" class="blue-link">기지로</a></td></tr>
                    <tr><th style="background-color:#DDBBFF;">ㄴ</th><td><a href="남구청로.html" class="red-link">남구청로</a> · <a href="남당로.html" class="blue-link">남당로</a> · <a href="내항남북로.html" class="blue-link">내항남북로</a></td></tr>
                    <tr><th style="background-color:#DDBBFF;">ㄷ</th><td><a href="동신로.html" class="red-link">동신로</a></td></tr>
                    <tr><th style="background-color:#DDBBFF;">ㅁ</th><td><a href="무개로.html" class="red-link">무개로</a> · <a href="문간로.html" class="red-link">문간로</a> · <a href="문화로.html" class="red-link">문화로</a></td></tr>
                    <tr><th style="background-color:#DDBBFF;">ㅅ</th><td><a href="십덕로.html" class="red-link">십덕로</a></td></tr>
                    <tr><th style="background-color:#DDBBFF;">ㅇ</th><td><a href="약맥로.html" class="red-link">약맥로</a> · <a href="어간로.html" class="red-link">어간로</a> · <a href="어간항로.html" class="red-link">어간항로</a> · <a href="어성로.html" class="blue-link">어성로</a> · <a href="엽월대병원로.html" class="blue-link">엽월대병원로</a> · <a href="오주로.html" class="blue-link">오주로</a> · <a href="우포로.html" class="red-link">우포로</a> · <a href="운양로.html" class="red-link">운양로</a> · <a href="유리아로.html" class="blue-link">유리아로</a> · <a href="이부로.html" class="red-link">이부로</a> · <a href="임세정로.html" class="red-link">임세정로</a> · <a href="입빈로.html" class="red-link">입빈로</a></td></tr>
                    <tr><th style="background-color:#DDBBFF;">ㅈ</th><td><a href="전노아로.html" class="blue-link">전노아로</a> · <a href="중앙로.html" class="red-link">중앙로</a></td></tr>
                    <tr><th style="background-color:#DDBBFF;">ㅊ</th><td><a href="청련로.html" class="red-link">청련로</a> · <a href="충산로.html" class="blue-link">충산로</a></td></tr>
                    <tr><th style="background-color:#DDBBFF;">ㅍ</th><td><a href="팔번로.html" class="red-link">팔번로</a> · <a href="평곡로.html" class="red-link">평곡로</a> · <a href="평당관통로.html" class="red-link">평당관통로</a> · <a href="평당남북1로.html" class="blue-link">평당남북1로</a> · <a href="평당동서1로.html" class="blue-link">평당동서1로</a> · <a href="평당동서2로.html" class="red-link">평당동서2로</a> · <a href="평당동서3로.html" class="red-link">평당동서3로</a> · <a href="평당북로.html" class="red-link">평당북로</a> · <a href="평당역로.html" class="red-link">평당역로</a> · <a href="평당중앙2로.html" class="blue-link">평당중앙2로</a> · <a href="평당중앙로.html" class="red-link">평당중앙로</a></td></tr>
                    <tr><th style="background-color:#DDBBFF;">ㅎ</th><td><a href="하루빈로.html" class="red-link">하루빈로</a> · <a href="항선로.html" class="red-link">항선로</a> · <a href="해안남북로.html" class="blue-link">해안남북로</a> · <a href="해양로.html" class="blue-link">해양로</a> · <a href="현성로.html" class="red-link">현성로</a> · <a href="회산로.html" class="red-link">회산로</a> · <a href="효빈공단로.html" class="red-link">효빈공단로</a> · <a href="효빈항로.html" class="red-link">효빈항로</a> · <a href="희산로.html" class="blue-link">희산로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #DDBBFF;">
                    효빈광역시의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "북구": `
        <div class="wiki-navbox" style="border-color: #7799CC;">
            <div class="wiki-navbox-header" style="background-color: #7799CC;">
                <div class="header-content">
                    <img src="이미지/북구_흰색로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">효빈광역시</div>
                        <div class="title-main">북구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#7799CC;">ㄱ</th><td><a href="고송남북로.html" class="red-link">고송남북로</a> · <a href="고송동서로.html" class="red-link">고송동서로</a> · <a href="고송중앙로.html" class="blue-link">고송중앙로</a> · <a href="고송해안로.html" class="blue-link">고송해안로</a> · <a href="고중로.html" class="blue-link">고중로</a> · <a href="고화로.html" class="blue-link">고화로</a> · <a href="공항로.html" class="blue-link">공항로</a> · <a href="과진로.html" class="red-link">과진로</a> · <a href="구창로.html" class="red-link">구창로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㄴ</th><td><a href="노현로.html" class="red-link">노현로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㄷ</th><td><a href="당선로.html" class="red-link">당선로</a> · <a href="도탄로.html" class="blue-link">도탄로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㅁ</th><td><a href="모포로.html" class="red-link">모포로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㅂ</th><td><a href="법원로.html" class="red-link">법원로</a> · <a href="보몽로.html" class="red-link">보몽로</a> · <a href="복지대학로.html" class="red-link">복지대학로</a> · <a href="북효빈로.html" class="red-link">북효빈로</a> · <a href="붕우로.html" class="red-link">붕우로</a> · <a href="뿌리빛로.html" class="blue-link">뿌리빛로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㅅ</th><td><a href="상서로.html" class="red-link">상서로</a> · <a href="성설로.html" class="blue-link">성설로</a> · <a href="세하로.html" class="red-link">세하로</a> · <a href="소조로.html" class="red-link">소조로</a> · <a href="소진로.html" class="red-link">소진로</a> · <a href="소흥로.html" class="red-link">소흥로</a> · <a href="송진로.html" class="blue-link">송진로</a> · <a href="시서로.html" class="red-link">시서로</a> · <a href="시청로.html" class="blue-link">시청로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㅇ</th><td><a href="아소로.html" class="red-link">아소로</a> · <a href="아진로.html" class="red-link">아진로</a> · <a href="에이치스코로.html" class="blue-link">에이치스코로</a> · <a href="역사로.html" class="red-link">역사로</a> · <a href="오내로.html" class="red-link">오내로</a> · <a href="오선로.html" class="blue-link">오선로</a> · <a href="요소로.html" class="red-link">요소로</a> · <a href="운동장로.html" class="red-link">운동장로</a> · <a href="이남로.html" class="red-link">이남로</a> · <a href="이달로.html" class="red-link">이달로</a> · <a href="이자로.html" class="blue-link">이자로</a> · <a href="입선로.html" class="red-link">입선로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㅈ</th><td><a href="전천로.html" class="red-link">전천로</a> · <a href="중수로.html" class="red-link">중수로</a> · <a href="중수중앙로.html" class="blue-link">중수중앙로</a> · <a href="중수해안로.html" class="red-link">중수해안로</a> · <a href="중탄로.html" class="blue-link">중탄로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㅊ</th><td><a href="천석로.html" class="blue-link">천석로</a> · <a href="천왕사로.html" class="red-link">천왕사로</a> · <a href="청고로.html" class="red-link">청고로</a> · <a href="청능도매시장로.html" class="blue-link">청능도매시장로</a> · <a href="청능로.html" class="red-link">청능로</a> · <a href="칠라로.html" class="blue-link">칠라로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㅋ</th><td><a href="카스미로.html" class="red-link">카스미로</a> · <a href="케손로.html" class="red-link">케손로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㅌ</th><td><a href="토모리로.html" class="red-link">토모리로</a> · <a href="토천로.html" class="red-link">토천로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㅍ</th><td><a href="평안명로.html" class="blue-link">평안명로</a> · <a href="평전서로.html" class="red-link">평전서로</a> · <a href="포산로.html" class="red-link">포산로</a></td></tr>
                    <tr><th style="background-color:#7799CC;">ㅎ</th><td><a href="현삼로.html" class="red-link">현삼로</a> · <a href="효빈대학로.html" class="red-link">효빈대학로</a> · <a href="효빈로.html" class="red-link">효빈로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #7799CC;">
                    효빈광역시의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "청엽구": `
        <div class="wiki-navbox" style="border-color: #006699;">
            <div class="wiki-navbox-header" style="background-color: #006699;">
                <div class="header-content">
                    <img src="이미지/청엽구_흰색로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">효빈광역시</div>
                        <div class="title-main">청엽구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#006699;">ㄱ</th><td><a href="고중로.html" class="blue-link">고중로</a> · <a href="괴신로.html" class="blue-link">괴신로</a> · <a href="구남로.html" class="blue-link">구남로</a> · <a href="구락로.html" class="red-link">구락로</a></td></tr>
                    <tr><th style="background-color:#006699;">ㄴ</th><td><a href="노산로.html" class="blue-link">노산로</a> · <a href="뇌전로.html" class="red-link">뇌전로</a></td></tr>
                    <tr><th style="background-color:#006699;">ㄷ</th><td><a href="당찬로.html" class="blue-link">당찬로</a> · <a href="도변이자로.html" class="red-link">도변이자로</a></td></tr>
                    <tr><th style="background-color:#006699;">ㄹ</th><td><a href="라상로.html" class="blue-link">라상로</a></td></tr>
                    <tr><th style="background-color:#006699;">ㅁ</th><td><a href="모포로.html" class="red-link">모포로</a></td></tr>
                    <tr><th style="background-color:#006699;">ㅂ</th><td><a href="붕우로.html" class="red-link">붕우로</a></td></tr>
                    <tr><th style="background-color:#006699;">ㅅ</th><td><a href="상자로.html" class="blue-link">상자로</a> · <a href="성설로.html" class="blue-link">성설로</a> · <a href="송남로.html" class="red-link">송남로</a></td></tr>
                    <tr><th style="background-color:#006699;">ㅇ</th><td><a href="악내로.html" class="blue-link">악내로</a> · <a href="앵소로.html" class="blue-link">앵소로</a> · <a href="오주로.html" class="blue-link">오주로</a> · <a href="외초로.html" class="red-link">외초로</a> · <a href="우이로.html" class="blue-link">우이로</a> · <a href="우전석로.html" class="red-link">우전석로</a> · <a href="우택로.html" class="red-link">우택로</a> · <a href="우포로.html" class="red-link">우포로</a> · <a href="운중로.html" class="red-link">운중로</a> · <a href="입빈로.html" class="red-link">입빈로</a></td></tr>
                    <tr><th style="background-color:#006699;">ㅈ</th><td><a href="장원로.html" class="red-link">장원로</a> · <a href="중수로.html" class="red-link">중수로</a></td></tr>
                    <tr><th style="background-color:#006699;">ㅊ</th><td><a href="창선2로.html" class="blue-link">창선2로</a> · <a href="창전로.html" class="red-link">창전로</a> · <a href="청엽로.html" class="red-link">청엽로</a> · <a href="청엽북로.html" class="red-link">청엽북로</a> · <a href="청엽중앙로.html" class="blue-link">청엽중앙로</a> · <a href="칠심로.html" class="red-link">칠심로</a> · <a href="칠심중앙로.html" class="red-link">칠심중앙로</a></td></tr>
                    <tr><th style="background-color:#006699;">ㅍ</th><td><a href="팔번로.html" class="red-link">팔번로</a></td></tr>
                    <tr><th style="background-color:#006699;">ㅎ</th><td><a href="효빈공단로.html" class="red-link">효빈공단로</a> · <a href="효빈성로.html" class="blue-link">효빈성로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #006699;">
                    효빈광역시의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "창전구": `
        <div class="wiki-navbox" style="border-color: #33AAFF;">
            <div class="wiki-navbox-header" style="background-color: #33AAFF;">
                <div class="header-content">
                    <img src="이미지/창전구_흰색로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">효빈광역시</div>
                        <div class="title-main">창전구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#33AAFF;">ㄱ</th><td><a href="고무로.html" class="red-link">고무로</a> · <a href="구락로.html" class="red-link">구락로</a> · <a href="구한로.html" class="red-link">구한로</a></td></tr>
                    <tr><th style="background-color:#33AAFF;">ㄴ</th><td><a href="낭월로.html" class="red-link">낭월로</a> · <a href="노산로.html" class="blue-link">노산로</a></td></tr>
                    <tr><th style="background-color:#33AAFF;">ㄷ</th><td><a href="당찬로.html" class="blue-link">당찬로</a> · <a href="대도로.html" class="red-link">대도로</a> · <a href="도변이자로.html" class="red-link">도변이자로</a> · <a href="동곡로.html" class="red-link">동곡로</a></td></tr>
                    <tr><th style="background-color:#33AAFF;">ㅁ</th><td><a href="모포로.html" class="red-link">모포로</a> · <a href="문천로.html" class="red-link">문천로</a></td></tr>
                    <tr><th style="background-color:#33AAFF;">ㅅ</th><td><a href="성설로.html" class="blue-link">성설로</a> · <a href="쌍엽로.html" class="blue-link">쌍엽로</a></td></tr>
                    <tr><th style="background-color:#33AAFF;">ㅇ</th><td><a href="우난로.html" class="red-link">우난로</a> · <a href="우전석로.html" class="red-link">우전석로</a></td></tr>
                    <tr><th style="background-color:#33AAFF;">ㅈ</th><td><a href="중수로.html" class="red-link">중수로</a></td></tr>
                    <tr><th style="background-color:#33AAFF;">ㅊ</th><td><a href="창전구청로.html" class="blue-link">창전구청로</a> · <a href="창전로.html" class="red-link">창전로</a> · <a href="창전해안로.html" class="red-link">창전해안로</a> · <a href="청엽로.html" class="red-link">청엽로</a> · <a href="청엽북로.html" class="red-link">청엽북로</a> · <a href="청엽중앙로.html" class="blue-link">청엽중앙로</a> · <a href="칠심로.html" class="red-link">칠심로</a> · <a href="칠심중앙로.html" class="red-link">칠심중앙로</a></td></tr>
                    <tr><th style="background-color:#33AAFF;">ㅍ</th><td><a href="팔삼로.html" class="red-link">팔삼로</a> · <a href="팔조로.html" class="red-link">팔조로</a></td></tr>
                    <tr><th style="background-color:#33AAFF;">ㅎ</th><td><a href="하마로.html" class="red-link">하마로</a> · <a href="효빈공단로.html" class="red-link">효빈공단로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #33AAFF;">
                    효빈광역시의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "안천구": `
        <div class="wiki-navbox" style="border-color: #AA66DD;">
            <div class="wiki-navbox-header" style="background-color: #AA66DD;">
                <div class="header-content">
                    <img src="이미지/안천구_흰색로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">효빈광역시</div>
                        <div class="title-main">안천구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#AA66DD;">ㄱ</th><td><a href="개산로.html" class="red-link">개산로</a> · <a href="개추로.html" class="blue-link">개추로</a> · <a href="고나미로.html" class="red-link">고나미로</a> · <a href="국세로.html" class="red-link">국세로</a></td></tr>
                    <tr><th style="background-color:#AA66DD;">ㄴ</th><td><a href="남약산로.html" class="red-link">남약산로</a> · <a href="뇌전로.html" class="red-link">뇌전로</a></td></tr>
                    <tr><th style="background-color:#AA66DD;">ㄷ</th><td><a href="당가로.html" class="blue-link">당가로</a> · <a href="당선로.html" class="red-link">당선로</a> · <a href="도변이자로.html" class="red-link">도변이자로</a></td></tr>
                    <tr><th style="background-color:#AA66DD;">ㅁ</th><td><a href="모포로.html" class="red-link">모포로</a> · <a href="문천로.html" class="red-link">문천로</a></td></tr>
                    <tr><th style="background-color:#AA66DD;">ㅂ</th><td><a href="봉선로.html" class="red-link">봉선로</a> · <a href="부우로.html" class="blue-link">부우로</a> · <a href="뿌리빛로.html" class="blue-link">뿌리빛로</a></td></tr>
                    <tr><th style="background-color:#AA66DD;">ㅅ</th><td><a href="사로.html" class="red-link">사로</a> · <a href="서수로.html" class="red-link">서수로</a> · <a href="세하로.html" class="red-link">세하로</a> · <a href="소원로.html" class="red-link">소원로</a></td></tr>
                    <tr><th style="background-color:#AA66DD;">ㅇ</th><td><a href="악부로.html" class="blue-link">악부로</a> · <a href="안당로.html" class="red-link">안당로</a> · <a href="안주로.html" class="red-link">안주로</a> · <a href="안천로.html" class="blue-link">안천로</a> · <a href="안천북로.html" class="red-link">안천북로</a> · <a href="안천이자로.html" class="red-link">안천이자로</a> · <a href="안천중앙로.html" class="blue-link">안천중앙로</a> · <a href="앵내로.html" class="red-link">앵내로</a> · <a href="앵내이자로.html" class="blue-link">앵내이자로</a> · <a href="앵소로.html" class="blue-link">앵소로</a> · <a href="언산로.html" class="blue-link">언산로</a> · <a href="우난로.html" class="red-link">우난로</a> · <a href="우택로.html" class="red-link">우택로</a> · <a href="육각로.html" class="red-link">육각로</a> · <a href="이자로.html" class="blue-link">이자로</a> · <a href="이자서로.html" class="red-link">이자서로</a> · <a href="이자중앙로.html" class="red-link">이자중앙로</a> · <a href="이자천가로.html" class="blue-link">이자천가로</a></td></tr>
                    <tr><th style="background-color:#AA66DD;">ㅈ</th><td><a href="중탄로.html" class="blue-link">중탄로</a></td></tr>
                    <tr><th style="background-color:#AA66DD;">ㅊ</th><td><a href="창건로.html" class="red-link">창건로</a> · <a href="창건순환로.html" class="blue-link">창건순환로</a> · <a href="청엽북로.html" class="red-link">청엽북로</a></td></tr>
                    <tr><th style="background-color:#AA66DD;">ㅍ</th><td><a href="포성로.html" class="red-link">포성로</a> · <a href="포성산로.html" class="red-link">포성산로</a></td></tr>
                    <tr><th style="background-color:#AA66DD;">ㅎ</th><td><a href="하가로.html" class="red-link">하가로</a> · <a href="하마로.html" class="red-link">하마로</a> · <a href="현삼로.html" class="red-link">현삼로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #AA66DD;">
                    효빈광역시의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "탄성군": `
        <div class="wiki-navbox" style="border-color: #BBFF64;">
            <div class="wiki-navbox-header" style="background-color: #BBFF64;">
                <div class="header-content">
                    <img src="이미지/탄성군_흰색로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">효빈광역시</div>
                        <div class="title-main">탄성군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#BBFF64;">ㄱ</th><td><a href="개추로.html" class="blue-link">개추로</a> · <a href="고나미로.html" class="red-link">고나미로</a> · <a href="고무로.html" class="red-link">고무로</a> · <a href="고암로.html" class="blue-link">고암로</a> · <a href="고해중앙로.html" class="red-link">고해중앙로</a> · <a href="고해해안로.html" class="red-link">고해해안로</a> · <a href="공리로.html" class="blue-link">공리로</a> · <a href="과학로.html" class="red-link">과학로</a> · <a href="구락로.html" class="red-link">구락로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㄴ</th><td><a href="남약산로.html" class="red-link">남약산로</a> · <a href="낭월로.html" class="red-link">낭월로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㄷ</th><td><a href="대광원로.html" class="red-link">대광원로</a> · <a href="대백로.html" class="red-link">대백로</a> · <a href="도변이자로.html" class="red-link">도변이자로</a> · <a href="도산로.html" class="red-link">도산로</a> · <a href="도성로.html" class="red-link">도성로</a> · <a href="두미로.html" class="red-link">두미로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㄹ</th><td><a href="루비로.html" class="blue-link">루비로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㅁ</th><td><a href="망한로.html" class="blue-link">망한로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㅂ</th><td><a href="봉선로.html" class="red-link">봉선로</a> · <a href="부우로.html" class="blue-link">부우로</a> · <a href="북항로.html" class="red-link">북항로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㅅ</th><td><a href="사목로.html" class="red-link">사목로</a> · <a href="상루로.html" class="red-link">상루로</a> · <a href="서목로.html" class="red-link">서목로</a> · <a href="선령로.html" class="red-link">선령로</a> · <a href="성규로.html" class="blue-link">성규로</a> · <a href="세하로.html" class="red-link">세하로</a> · <a href="소원로.html" class="red-link">소원로</a> · <a href="소하로.html" class="red-link">소하로</a> · <a href="수박로.html" class="red-link">수박로</a> · <a href="승남로.html" class="red-link">승남로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㅇ</th><td><a href="아율로.html" class="blue-link">아율로</a> · <a href="안원로.html" class="red-link">안원로</a> · <a href="안천중앙로.html" class="blue-link">안천중앙로</a> · <a href="앵내로.html" class="red-link">앵내로</a> · <a href="앵내역로.html" class="red-link">앵내역로</a> · <a href="앵내이자로.html" class="blue-link">앵내이자로</a> · <a href="야진로.html" class="blue-link">야진로</a> · <a href="어천로.html" class="red-link">어천로</a> · <a href="언산로.html" class="blue-link">언산로</a> · <a href="언성로.html" class="red-link">언성로</a> · <a href="영내로.html" class="blue-link">영내로</a> · <a href="와산로.html" class="blue-link">와산로</a> · <a href="요우로.html" class="red-link">요우로</a> · <a href="요우중앙로.html" class="red-link">요우중앙로</a> · <a href="우난로.html" class="red-link">우난로</a> · <a href="우모로.html" class="red-link">우모로</a> · <a href="유두로.html" class="red-link">유두로</a> · <a href="유방로.html" class="red-link">유방로</a> · <a href="이산로.html" class="red-link">이산로</a> · <a href="이와로.html" class="blue-link">이와로</a> · <a href="이자로.html" class="blue-link">이자로</a> · <a href="이자서로.html" class="red-link">이자서로</a> · <a href="이자중앙로.html" class="red-link">이자중앙로</a> · <a href="이자천가로.html" class="blue-link">이자천가로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㅈ</th><td><a href="정선로.html" class="blue-link">정선로</a> · <a href="중탄로.html" class="blue-link">중탄로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㅊ</th><td><a href="창건로.html" class="red-link">창건로</a> · <a href="창율로.html" class="red-link">창율로</a> · <a href="창전로.html" class="red-link">창전로</a> · <a href="창전해안로.html" class="red-link">창전해안로</a> · <a href="처구로.html" class="red-link">처구로</a> · <a href="천가로.html" class="red-link">천가로</a> · <a href="천가중앙로.html" class="blue-link">천가중앙로</a> · <a href="청엽로.html" class="red-link">청엽로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㅌ</th><td><a href="탄성군청로.html" class="red-link">탄성군청로</a> · <a href="탄성남북로.html" class="red-link">탄성남북로</a> · <a href="탄성역로.html" class="blue-link">탄성역로</a> · <a href="탄성중앙로.html" class="red-link">탄성중앙로</a> · <a href="탄성해안로.html" class="blue-link">탄성해안로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㅍ</th><td><a href="포성로.html" class="red-link">포성로</a> · <a href="포성산로.html" class="red-link">포성산로</a></td></tr>
                    <tr><th style="background-color:#BBFF64;">ㅎ</th><td><a href="하마로.html" class="red-link">하마로</a> · <a href="효빈공단로.html" class="red-link">효빈공단로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #BBFF64;">
                    효빈광역시의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "덕빈북도 대로": `
        <div class="wiki-navbox" style="border-color: #4AD898;">
            <div class="wiki-navbox-header" style="background-color: #4AD898;">
                <div class="header-content">
                    <img src="이미지/덕북로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">덕빈북도 관내 대로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#4AD898;">ㄱ</th><td><a href="가원대로.html" class="red-link">가원대로</a> · <a href="강주대로.html" class="red-link">강주대로</a> · <a href="강주산단대로.html" class="red-link">강주산단대로</a> · <a href="계성대로.html" class="red-link">계성대로</a> · <a href="금강천대로.html" class="red-link">금강천대로</a> · <a href="기도대로.html" class="red-link">기도대로</a></td></tr>
                    <tr><th style="background-color:#4AD898;">ㄴ</th><td><a href="낭원대로.html" class="red-link">낭원대로</a></td></tr>
                    <tr><th style="background-color:#4AD898;">ㄷ</th><td><a href="덕현대로.html" class="red-link">덕현대로</a> · <a href="등대로.html" class="red-link">등대로</a></td></tr>
                    <tr><th style="background-color:#4AD898;">ㅁ</th><td><a href="모제대로.html" class="red-link">모제대로</a></td></tr>
                    <tr><th style="background-color:#4AD898;">ㅂ</th><td><a href="반양대로.html" class="blue-link">반양대로</a> · <a href="방부대로.html" class="red-link">방부대로</a> · <a href="빈성대로.html" class="blue-link">빈성대로</a> · <a href="빈주대로.html" class="blue-link">빈주대로</a></td></tr>
                    <tr><th style="background-color:#4AD898;">ㅅ</th><td><a href="상안대로.html" class="red-link">상안대로</a> · <a href="서진대로.html" class="blue-link">서진대로</a> · <a href="서해대로.html" class="blue-link">서해대로</a> · <a href="선곡대로.html" class="red-link">선곡대로</a> · <a href="신항대로.html" class="red-link">신항대로</a></td></tr>
                    <tr><th style="background-color:#4AD898;">ㅇ</th><td><a href="아이대로.html" class="red-link">아이대로</a> · <a href="약산대로.html" class="blue-link">약산대로</a> · <a href="온뫼대로.html" class="red-link">온뫼대로</a> · <a href="우궁대로.html" class="red-link">우궁대로</a> · <a href="원변산업대로.html" class="red-link">원변산업대로</a> · <a href="월삼대로.html" class="red-link">월삼대로</a> · <a href="임항대로.html" class="blue-link">임항대로</a></td></tr>
                    <tr><th style="background-color:#4AD898;">ㅈ</th><td><a href="장기가원대로.html" class="red-link">장기가원대로</a> · <a href="장기대로.html" class="blue-link">장기대로</a> · <a href="장기빈성대로.html" class="blue-link">장기빈성대로</a> · <a href="장기천대로.html" class="red-link">장기천대로</a></td></tr>
                    <tr><th style="background-color:#4AD898;">ㅊ</th><td><a href="천동대로.html" class="red-link">천동대로</a> · <a href="천로대로.html" class="red-link">천로대로</a> · <a href="천주대로.html" class="blue-link">천주대로</a> · <a href="치원대로.html" class="red-link">치원대로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #4AD898;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "강주시": `
        <div class="wiki-navbox" style="border-color: #ffc94a;">
            <div class="wiki-navbox-header" style="background-color: #ffc94a;">
                <div class="header-content">
                    <img src="이미지/강주시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">강주시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#ffc94a;">ㄱ</th><td><a href="가람골로.html" class="red-link">가람골로</a> · <a href="갈원로.html" class="red-link">갈원로</a> · <a href="강주로.html" class="red-link">강주로</a> · <a href="강주역로.html" class="red-link">강주역로</a> · <a href="개항로.html" class="blue-link">개항로</a> · <a href="곡전로.html" class="red-link">곡전로</a> · <a href="공단로.html" class="red-link">공단로</a> · <a href="공문로.html" class="red-link">공문로</a> · <a href="과학로.html" class="red-link">과학로</a> · <a href="광릉로.html" class="red-link">광릉로</a> · <a href="근대역사로.html" class="red-link">근대역사로</a> · <a href="금상로.html" class="blue-link">금상로</a></td></tr>
                    <tr><th style="background-color:#ffc94a;">ㄴ</th><td><a href="내항로.html" class="blue-link">내항로</a></td></tr>
                    <tr><th style="background-color:#ffc94a;">ㄷ</th><td><a href="대학로.html" class="red-link">대학로</a></td></tr>
                    <tr><th style="background-color:#ffc94a;">ㅁ</th><td><a href="문성로.html" class="red-link">문성로</a> · <a href="물리로.html" class="blue-link">물리로</a></td></tr>
                    <tr><th style="background-color:#ffc94a;">ㅂ</th><td><a href="백년로.html" class="red-link">백년로</a> · <a href="번영로.html" class="red-link">번영로</a> · <a href="부두로.html" class="red-link">부두로</a> · <a href="북예로.html" class="blue-link">북예로</a></td></tr>
                    <tr><th style="background-color:#ffc94a;">ㅅ</th><td><a href="생물로.html" class="blue-link">생물로</a> · <a href="석동로.html" class="red-link">석동로</a> · <a href="석북로.html" class="red-link">석북로</a> · <a href="석성로.html" class="red-link">석성로</a> · <a href="석성중앙로.html" class="red-link">석성중앙로</a> · <a href="수산로.html" class="red-link">수산로</a> · <a href="신정로.html" class="red-link">신정로</a></td></tr>
                    <tr><th style="background-color:#ffc94a;">ㅇ</th><td><a href="영동로.html" class="red-link">영동로</a> · <a href="외항로.html" class="blue-link">외항로</a> · <a href="운안로.html" class="red-link">운안로</a> · <a href="은빛물결로.html" class="blue-link">은빛물결로</a> · <a href="임해로.html" class="red-link">임해로</a></td></tr>
                    <tr><th style="background-color:#ffc94a;">ㅈ</th><td><a href="자유로.html" class="red-link">자유로</a> · <a href="잠진로.html" class="red-link">잠진로</a> · <a href="장원로.html" class="red-link">장원로</a> · <a href="조계지로.html" class="red-link">조계지로</a> · <a href="중앙로.html" class="red-link">중앙로</a> · <a href="중흥로.html" class="blue-link">중흥로</a> · <a href="지학로.html" class="blue-link">지학로</a></td></tr>
                    <tr><th style="background-color:#ffc94a;">ㅊ</th><td><a href="철새로.html" class="blue-link">철새로</a> · <a href="첨단로.html" class="red-link">첨단로</a> · <a href="청성로.html" class="red-link">청성로</a> · <a href="청성중앙로.html" class="blue-link">청성중앙로</a></td></tr>
                    <tr><th style="background-color:#ffc94a;">ㅌ</th><td><a href="탐구로.html" class="red-link">탐구로</a></td></tr>
                    <tr><th style="background-color:#ffc94a;">ㅍ</th><td><a href="평야로.html" class="red-link">평야로</a> · <a href="평화로.html" class="red-link">평화로</a> · <a href="풍영로.html" class="red-link">풍영로</a> · <a href="풍요로.html" class="red-link">풍요로</a> · <a href="풍원로.html" class="red-link">풍원로</a></td></tr>
                    <tr><th style="background-color:#ffc94a;">ㅎ</th><td><a href="항만로.html" class="red-link">항만로</a> · <a href="해안관광로.html" class="blue-link">해안관광로</a> · <a href="화학로.html" class="red-link">화학로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #ffc94a;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "계성시": `
        <div class="wiki-navbox" style="border-color: #ED7D95;">
            <div class="wiki-navbox-header" style="background-color: #ED7D95;">
                <div class="header-content">
                    <img src="이미지/계성시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">계성시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#ED7D95;">ㄱ</th><td><a href="계선로.html" class="blue-link">계선로</a> · <a href="계성-빈주고속화도로.html" class="blue-link">계성-빈주고속화도로</a> · <a href="계성남북로.html" class="red-link">계성남북로</a> · <a href="계성동서로.html" class="blue-link">계성동서로</a> · <a href="계성로.html" class="red-link">계성로</a> · <a href="계성시장로.html" class="red-link">계성시장로</a> · <a href="계수나무재로.html" class="red-link">계수나무재로</a> · <a href="계천변로.html" class="red-link">계천변로</a> · <a href="국도 제3호선.html" class="red-link">국도 제3호선</a></td></tr>
                    <tr><th style="background-color:#ED7D95;">ㄴ</th><td><a href="낭원로.html" class="red-link">낭원로</a></td></tr>
                    <tr><th style="background-color:#ED7D95;">ㄷ</th><td><a href="덕현로.html" class="red-link">덕현로</a> · <a href="도아로.html" class="red-link">도아로</a></td></tr>
                    <tr><th style="background-color:#ED7D95;">ㅁ</th><td><a href="마내로.html" class="blue-link">마내로</a> · <a href="마시로.html" class="blue-link">마시로</a> · <a href="마시생활로.html" class="red-link">마시생활로</a></td></tr>
                    <tr><th style="background-color:#ED7D95;">ㅂ</th><td><a href="부남로.html" class="red-link">부남로</a></td></tr>
                    <tr><th style="background-color:#ED7D95;">ㅅ</th><td><a href="순환고속도로.html" class="blue-link">순환고속도로</a> · <a href="시로로.html" class="red-link">시로로</a> · <a href="시정로.html" class="red-link">시정로</a> · <a href="시청로.html" class="blue-link">시청로</a> · <a href="신도로.html" class="blue-link">신도로</a></td></tr>
                    <tr><th style="background-color:#ED7D95;">ㅇ</th><td><a href="아마로.html" class="red-link">아마로</a></td></tr>
                    <tr><th style="background-color:#ED7D95;">ㅈ</th><td><a href="저천로.html" class="red-link">저천로</a> · <a href="진등로.html" class="blue-link">진등로</a> · <a href="진백로.html" class="red-link">진백로</a> · <a href="진백산로.html" class="red-link">진백산로</a></td></tr>
                    <tr><th style="background-color:#ED7D95;">ㅊ</th><td><a href="천동생활로.html" class="red-link">천동생활로</a> · <a href="천동학원가로.html" class="blue-link">천동학원가로</a> · <a href="천산로.html" class="red-link">천산로</a> · <a href="천중앙로.html" class="blue-link">천중앙로</a> · <a href="체육공원로.html" class="red-link">체육공원로</a></td></tr>
                    <tr><th style="background-color:#ED7D95;">ㅎ</th><td><a href="하가골목로.html" class="red-link">하가골목로</a> · <a href="하가로.html" class="red-link">하가로</a> · <a href="하가지원로.html" class="blue-link">하가지원로</a> · <a href="호두동산로.html" class="red-link">호두동산로</a> · <a href="호두로.html" class="red-link">호두로</a> · <a href="호두마을로.html" class="red-link">호두마을로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #ED7D95;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "군천시": `
        <div class="wiki-navbox" style="border-color: #E7D600;">
            <div class="wiki-navbox-header" style="background-color: #E7D600;">
                <div class="header-content">
                    <img src="이미지/군천시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">군천시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#E7D600;">ㄱ</th><td><a href="고갯길로.html" class="red-link">고갯길로</a> · <a href="고옥1로.html" class="red-link">고옥1로</a> · <a href="고옥2로.html" class="blue-link">고옥2로</a> · <a href="고옥3로.html" class="blue-link">고옥3로</a> · <a href="고옥로.html" class="red-link">고옥로</a> · <a href="공단로.html" class="red-link">공단로</a> · <a href="공단순환로.html" class="red-link">공단순환로</a> · <a href="구읍로.html" class="red-link">구읍로</a> · <a href="군천로.html" class="red-link">군천로</a> · <a href="군천산단로.html" class="red-link">군천산단로</a> · <a href="군천중앙로.html" class="red-link">군천중앙로</a> · <a href="기계로.html" class="red-link">기계로</a></td></tr>
                    <tr><th style="background-color:#E7D600;">ㄴ</th><td><a href="낙조로.html" class="red-link">낙조로</a> · <a href="남민1로.html" class="red-link">남민1로</a> · <a href="남민2로.html" class="red-link">남민2로</a> · <a href="남민3로.html" class="red-link">남민3로</a> · <a href="남민4로.html" class="blue-link">남민4로</a> · <a href="남민로.html" class="red-link">남민로</a> · <a href="농수로.html" class="red-link">농수로</a></td></tr>
                    <tr><th style="background-color:#E7D600;">ㄷ</th><td><a href="달빛로.html" class="blue-link">달빛로</a> · <a href="대서로.html" class="red-link">대서로</a> · <a href="대풍로.html" class="red-link">대풍로</a> · <a href="덕현로.html" class="red-link">덕현로</a> · <a href="도정로.html" class="red-link">도정로</a></td></tr>
                    <tr><th style="background-color:#E7D600;">ㅁ</th><td><a href="매산로.html" class="red-link">매산로</a> · <a href="명문로.html" class="red-link">명문로</a> · <a href="무리내로.html" class="blue-link">무리내로</a> · <a href="무역로.html" class="red-link">무역로</a> · <a href="무철로.html" class="red-link">무철로</a> · <a href="문화로.html" class="red-link">문화로</a> · <a href="물류로.html" class="red-link">물류로</a> · <a href="미래로.html" class="blue-link">미래로</a></td></tr>
                    <tr><th style="background-color:#E7D600;">ㅂ</th><td><a href="번영로.html" class="red-link">번영로</a> · <a href="법조로.html" class="red-link">법조로</a> · <a href="벚꽃로.html" class="red-link">벚꽃로</a> · <a href="벤처로.html" class="blue-link">벤처로</a> · <a href="부두로.html" class="red-link">부두로</a> · <a href="빈주로.html" class="blue-link">빈주로</a></td></tr>
                    <tr><th style="background-color:#E7D600;">ㅅ</th><td><a href="산단1로.html" class="blue-link">산단1로</a> · <a href="산단2로.html" class="red-link">산단2로</a> · <a href="산단3로.html" class="blue-link">산단3로</a> · <a href="산단4로.html" class="red-link">산단4로</a> · <a href="산단5로.html" class="red-link">산단5로</a> · <a href="산마루로.html" class="red-link">산마루로</a> · <a href="새천년로.html" class="red-link">새천년로</a> · <a href="서해춘천로.html" class="blue-link">서해춘천로</a> · <a href="센트럴로.html" class="blue-link">센트럴로</a> · <a href="소령로.html" class="red-link">소령로</a> · <a href="솔밭로.html" class="red-link">솔밭로</a> · <a href="수출로.html" class="red-link">수출로</a> · <a href="스마트로.html" class="red-link">스마트로</a> · <a href="신득1로.html" class="red-link">신득1로</a> · <a href="신득2로.html" class="blue-link">신득2로</a> · <a href="신득3로.html" class="red-link">신득3로</a> · <a href="신득로.html" class="blue-link">신득로</a> · <a href="신득중앙로.html" class="red-link">신득중앙로</a> · <a href="신애음로.html" class="red-link">신애음로</a></td></tr>
                    <tr><th style="background-color:#E7D600;">ㅇ</th><td><a href="아구로.html" class="red-link">아구로</a> · <a href="안양사로.html" class="blue-link">안양사로</a> · <a href="애음1로.html" class="red-link">애음1로</a> · <a href="애음2로.html" class="red-link">애음2로</a> · <a href="애음3로.html" class="red-link">애음3로</a> · <a href="애음4로.html" class="blue-link">애음4로</a> · <a href="애음5로.html" class="red-link">애음5로</a> · <a href="애음순환로.html" class="red-link">애음순환로</a> · <a href="애음중앙로.html" class="red-link">애음중앙로</a> · <a href="야채로.html" class="blue-link">야채로</a> · <a href="에듀파크로.html" class="red-link">에듀파크로</a> · <a href="역전로.html" class="red-link">역전로</a> · <a href="예술로.html" class="red-link">예술로</a> · <a href="옛길로.html" class="red-link">옛길로</a></td></tr>
                    <tr><th style="background-color:#E7D600;">ㅈ</th><td><a href="조빈로.html" class="red-link">조빈로</a> · <a href="중동로.html" class="red-link">중동로</a> · <a href="중동시장로.html" class="red-link">중동시장로</a> · <a href="중앙로.html" class="red-link">중앙로</a> · <a href="진남로.html" class="red-link">진남로</a></td></tr>
                    <tr><th style="background-color:#E7D600;">ㅊ</th><td><a href="창조로.html" class="red-link">창조로</a> · <a href="철강로.html" class="blue-link">철강로</a> · <a href="철도로.html" class="blue-link">철도로</a> · <a href="철새로.html" class="blue-link">철새로</a> · <a href="충무로.html" class="red-link">충무로</a></td></tr>
                    <tr><th style="background-color:#E7D600;">ㅌ</th><td><a href="테크노로.html" class="red-link">테크노로</a></td></tr>
                    <tr><th style="background-color:#E7D600;">ㅍ</th><td><a href="평화로.html" class="red-link">평화로</a> · <a href="풍요로.html" class="red-link">풍요로</a></td></tr>
                    <tr><th style="background-color:#E7D600;">ㅎ</th><td><a href="하강로.html" class="red-link">하강로</a> · <a href="하강중앙로.html" class="red-link">하강중앙로</a> · <a href="항만로.html" class="red-link">항만로</a> · <a href="해안관광로.html" class="blue-link">해안관광로</a> · <a href="행정로.html" class="red-link">행정로</a> · <a href="혁신로.html" class="blue-link">혁신로</a> · <a href="호택광장로.html" class="blue-link">호택광장로</a> · <a href="호택로.html" class="blue-link">호택로</a> · <a href="황금들로.html" class="blue-link">황금들로</a> · <a href="희아로.html" class="blue-link">희아로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #E7D600;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "기도군": `
        <div class="wiki-navbox" style="border-color: #01B7ED;">
            <div class="wiki-navbox-header" style="background-color: #01B7ED;">
                <div class="header-content">
                    <img src="이미지/기도군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">기도군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#01B7ED;">ㄱ</th><td><a href="고관로.html" class="red-link">고관로</a> · <a href="고미로.html" class="red-link">고미로</a> · <a href="고삼로.html" class="red-link">고삼로</a> · <a href="공금로.html" class="red-link">공금로</a> · <a href="공항로.html" class="blue-link">공항로</a> · <a href="기도남로.html" class="red-link">기도남로</a> · <a href="기도동로.html" class="blue-link">기도동로</a> · <a href="기도북로.html" class="blue-link">기도북로</a> · <a href="기도서로.html" class="red-link">기도서로</a> · <a href="길진로.html" class="blue-link">길진로</a></td></tr>
                    <tr><th style="background-color:#01B7ED;">ㄴ</th><td><a href="남곡로.html" class="red-link">남곡로</a></td></tr>
                    <tr><th style="background-color:#01B7ED;">ㅁ</th><td><a href="만당로.html" class="red-link">만당로</a> · <a href="문항로.html" class="red-link">문항로</a> · <a href="미기로.html" class="red-link">미기로</a> · <a href="미영로.html" class="blue-link">미영로</a></td></tr>
                    <tr><th style="background-color:#01B7ED;">ㅂ</th><td><a href="본석로.html" class="red-link">본석로</a></td></tr>
                    <tr><th style="background-color:#01B7ED;">ㅅ</th><td><a href="소금로.html" class="blue-link">소금로</a> · <a href="시작로.html" class="red-link">시작로</a></td></tr>
                    <tr><th style="background-color:#01B7ED;">ㅇ</th><td><a href="야부로.html" class="blue-link">야부로</a> · <a href="어군로.html" class="blue-link">어군로</a> · <a href="염곡동로.html" class="blue-link">염곡동로</a> · <a href="염곡서로.html" class="blue-link">염곡서로</a> · <a href="염곡중앙로.html" class="red-link">염곡중앙로</a> · <a href="오삼로.html" class="blue-link">오삼로</a> · <a href="용야로.html" class="red-link">용야로</a> · <a href="운작로.html" class="red-link">운작로</a></td></tr>
                    <tr><th style="background-color:#01B7ED;">ㅈ</th><td><a href="자계로.html" class="blue-link">자계로</a> · <a href="주길로.html" class="red-link">주길로</a> · <a href="주안로.html" class="blue-link">주안로</a> · <a href="주양로.html" class="red-link">주양로</a> · <a href="죽구로.html" class="red-link">죽구로</a> · <a href="진경로.html" class="red-link">진경로</a> · <a href="진사로.html" class="red-link">진사로</a></td></tr>
                    <tr><th style="background-color:#01B7ED;">ㅊ</th><td><a href="청상로.html" class="red-link">청상로</a> · <a href="충교로.html" class="red-link">충교로</a></td></tr>
                    <tr><th style="background-color:#01B7ED;">ㅎ</th><td><a href="하포로.html" class="red-link">하포로</a> · <a href="화원로.html" class="blue-link">화원로</a> · <a href="횡전로.html" class="red-link">횡전로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #01B7ED;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "낭원군": `
        <div class="wiki-navbox" style="border-color: #485EC6;">
            <div class="wiki-navbox-header" style="background-color: #485EC6;">
                <div class="header-content">
                    <img src="이미지/낭원군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">낭원군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#485EC6;">ㄱ</th><td><a href="고남로.html" class="red-link">고남로</a> · <a href="공단동로.html" class="blue-link">공단동로</a> · <a href="공단서로.html" class="red-link">공단서로</a></td></tr>
                    <tr><th style="background-color:#485EC6;">ㄴ</th><td><a href="남부간선로.html" class="red-link">남부간선로</a> · <a href="남북로.html" class="red-link">남북로</a> · <a href="낭강로.html" class="red-link">낭강로</a> · <a href="낭방로.html" class="red-link">낭방로</a> · <a href="낭원1로.html" class="red-link">낭원1로</a> · <a href="낭원2로.html" class="red-link">낭원2로</a> · <a href="낭원3로.html" class="blue-link">낭원3로</a> · <a href="낭원로.html" class="red-link">낭원로</a> · <a href="낭원로데오로.html" class="blue-link">낭원로데오로</a> · <a href="낭원순환로.html" class="red-link">낭원순환로</a> · <a href="낭원역로.html" class="blue-link">낭원역로</a> · <a href="낭원외곽로.html" class="red-link">낭원외곽로</a> · <a href="낭원중앙로.html" class="blue-link">낭원중앙로</a> · <a href="낭주로.html" class="red-link">낭주로</a> · <a href="내강로.html" class="red-link">내강로</a> · <a href="내덕로.html" class="blue-link">내덕로</a> · <a href="내덕순환로.html" class="red-link">내덕순환로</a> · <a href="내동역로.html" class="red-link">내동역로</a> · <a href="내방로.html" class="red-link">내방로</a> · <a href="내산로.html" class="blue-link">내산로</a> · <a href="내주로.html" class="red-link">내주로</a></td></tr>
                    <tr><th style="background-color:#485EC6;">ㄷ</th><td><a href="대학로.html" class="red-link">대학로</a> · <a href="덕강로.html" class="blue-link">덕강로</a> · <a href="덕방로.html" class="blue-link">덕방로</a> · <a href="덕산로.html" class="blue-link">덕산로</a> · <a href="동서로.html" class="red-link">동서로</a> · <a href="들녘로.html" class="blue-link">들녘로</a></td></tr>
                    <tr><th style="background-color:#485EC6;">ㅁ</th><td><a href="마야로.html" class="red-link">마야로</a> · <a href="명향로.html" class="blue-link">명향로</a> · <a href="문화로.html" class="red-link">문화로</a> · <a href="미전로.html" class="red-link">미전로</a></td></tr>
                    <tr><th style="background-color:#485EC6;">ㅂ</th><td><a href="발강로.html" class="blue-link">발강로</a> · <a href="발방로.html" class="red-link">발방로</a> · <a href="발산로.html" class="red-link">발산로</a> · <a href="발주로.html" class="red-link">발주로</a> · <a href="밝은벌로.html" class="red-link">밝은벌로</a> · <a href="백성로.html" class="red-link">백성로</a> · <a href="번영로.html" class="red-link">번영로</a> · <a href="부진순환로.html" class="red-link">부진순환로</a> · <a href="북부간선로.html" class="blue-link">북부간선로</a> · <a href="빙천로.html" class="red-link">빙천로</a></td></tr>
                    <tr><th style="background-color:#485EC6;">ㅅ</th><td><a href="산단로.html" class="blue-link">산단로</a> · <a href="상곡로.html" class="blue-link">상곡로</a> · <a href="석창낭원로.html" class="red-link">석창낭원로</a> · <a href="시강로.html" class="red-link">시강로</a> · <a href="시방로.html" class="blue-link">시방로</a> · <a href="시산로.html" class="red-link">시산로</a> · <a href="시주로.html" class="blue-link">시주로</a></td></tr>
                    <tr><th style="background-color:#485EC6;">ㅇ</th><td><a href="우입로.html" class="red-link">우입로</a> · <a href="원강로.html" class="red-link">원강로</a> · <a href="원방로.html" class="red-link">원방로</a> · <a href="원산로.html" class="red-link">원산로</a> · <a href="원주로.html" class="blue-link">원주로</a></td></tr>
                    <tr><th style="background-color:#485EC6;">ㅈ</th><td><a href="전포1로.html" class="red-link">전포1로</a> · <a href="전포2로.html" class="red-link">전포2로</a> · <a href="전포공단로.html" class="red-link">전포공단로</a> · <a href="전포로.html" class="red-link">전포로</a> · <a href="전포순환로.html" class="blue-link">전포순환로</a> · <a href="전포중앙로.html" class="red-link">전포중앙로</a></td></tr>
                    <tr><th style="background-color:#485EC6;">ㅊ</th><td><a href="체육공로.html" class="blue-link">체육공로</a> · <a href="초건로.html" class="red-link">초건로</a></td></tr>
                    <tr><th style="background-color:#485EC6;">ㅌ</th><td><a href="토진1로.html" class="red-link">토진1로</a> · <a href="토진2로.html" class="red-link">토진2로</a> · <a href="토진로.html" class="blue-link">토진로</a> · <a href="토진순환로.html" class="blue-link">토진순환로</a> · <a href="토진중앙로.html" class="red-link">토진중앙로</a></td></tr>
                    <tr><th style="background-color:#485EC6;">ㅍ</th><td><a href="판주1로.html" class="red-link">판주1로</a> · <a href="판주2로.html" class="blue-link">판주2로</a> · <a href="판주로.html" class="red-link">판주로</a> · <a href="판주순환로.html" class="blue-link">판주순환로</a> · <a href="판주중앙로.html" class="blue-link">판주중앙로</a> · <a href="풍성로.html" class="red-link">풍성로</a></td></tr>
                    <tr><th style="background-color:#485EC6;">ㅎ</th><td><a href="하천로.html" class="blue-link">하천로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #485EC6;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "덕현군": `
        <div class="wiki-navbox" style="border-color: #FF5800;">
            <div class="wiki-navbox-header" style="background-color: #FF5800;">
                <div class="header-content">
                    <img src="이미지/덕현군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">덕현군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#FF5800;">ㄱ</th><td><a href="고선로.html" class="red-link">고선로</a> · <a href="곡패로.html" class="blue-link">곡패로</a> · <a href="궁로.html" class="blue-link">궁로</a> · <a href="금령로.html" class="red-link">금령로</a></td></tr>
                    <tr><th style="background-color:#FF5800;">ㄴ</th><td><a href="남순로.html" class="blue-link">남순로</a> · <a href="남중로.html" class="red-link">남중로</a></td></tr>
                    <tr><th style="background-color:#FF5800;">ㄷ</th><td><a href="대뢰로.html" class="red-link">대뢰로</a> · <a href="대문로.html" class="blue-link">대문로</a> · <a href="덕현로.html" class="red-link">덕현로</a> · <a href="덕현중앙로.html" class="red-link">덕현중앙로</a> · <a href="동순로.html" class="blue-link">동순로</a> · <a href="동중로.html" class="red-link">동중로</a> · <a href="등간로.html" class="blue-link">등간로</a></td></tr>
                    <tr><th style="background-color:#FF5800;">ㅁ</th><td><a href="망정로.html" class="red-link">망정로</a> · <a href="목도로.html" class="red-link">목도로</a> · <a href="목야로.html" class="red-link">목야로</a> · <a href="미택로.html" class="red-link">미택로</a></td></tr>
                    <tr><th style="background-color:#FF5800;">ㅂ</th><td><a href="박성로.html" class="blue-link">박성로</a> · <a href="백국로.html" class="blue-link">백국로</a> · <a href="백조로.html" class="blue-link">백조로</a> · <a href="복전로.html" class="blue-link">복전로</a> · <a href="부진로.html" class="blue-link">부진로</a> · <a href="부진순환로.html" class="red-link">부진순환로</a> · <a href="부진역로.html" class="red-link">부진역로</a> · <a href="부진중앙로.html" class="blue-link">부진중앙로</a> · <a href="부창로.html" class="blue-link">부창로</a> · <a href="부척로.html" class="red-link">부척로</a> · <a href="북견로.html" class="red-link">북견로</a> · <a href="북산로.html" class="blue-link">북산로</a></td></tr>
                    <tr><th style="background-color:#FF5800;">ㅅ</th><td><a href="사미로.html" class="red-link">사미로</a> · <a href="사조로.html" class="red-link">사조로</a> · <a href="산내로.html" class="red-link">산내로</a> · <a href="상반로.html" class="red-link">상반로</a> · <a href="상중도로.html" class="blue-link">상중도로</a> · <a href="상향로.html" class="red-link">상향로</a> · <a href="서로.html" class="red-link">서로</a> · <a href="서법로.html" class="red-link">서법로</a> · <a href="석권로.html" class="red-link">석권로</a> · <a href="석창덕현로.html" class="red-link">석창덕현로</a> · <a href="소심로.html" class="red-link">소심로</a> · <a href="소전원로.html" class="red-link">소전원로</a> · <a href="소학로.html" class="red-link">소학로</a></td></tr>
                    <tr><th style="background-color:#FF5800;">ㅇ</th><td><a href="암창로.html" class="red-link">암창로</a> · <a href="영신로.html" class="red-link">영신로</a> · <a href="영악로.html" class="red-link">영악로</a> · <a href="오륜로.html" class="red-link">오륜로</a> · <a href="옥천로.html" class="red-link">옥천로</a> · <a href="우도로.html" class="red-link">우도로</a> · <a href="일광로.html" class="red-link">일광로</a> · <a href="일호로.html" class="red-link">일호로</a></td></tr>
                    <tr><th style="background-color:#FF5800;">ㅈ</th><td><a href="조구로.html" class="red-link">조구로</a> · <a href="조로.html" class="blue-link">조로</a> · <a href="조전로.html" class="red-link">조전로</a> · <a href="족택로.html" class="blue-link">족택로</a> · <a href="중로.html" class="red-link">중로</a></td></tr>
                    <tr><th style="background-color:#FF5800;">ㅊ</th><td><a href="천야로.html" class="red-link">천야로</a></td></tr>
                    <tr><th style="background-color:#FF5800;">ㅍ</th><td><a href="포생로.html" class="red-link">포생로</a> · <a href="풍전로.html" class="blue-link">풍전로</a> · <a href="풍평로.html" class="red-link">풍평로</a></td></tr>
                    <tr><th style="background-color:#FF5800;">ㅎ</th><td><a href="하두미로.html" class="red-link">하두미로</a> · <a href="하우로.html" class="blue-link">하우로</a> · <a href="호동로.html" class="red-link">호동로</a> · <a href="화원로.html" class="blue-link">화원로</a> · <a href="흑성로.html" class="red-link">흑성로</a> · <a href="흑전로.html" class="blue-link">흑전로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #FF5800;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "모제군": `
        <div class="wiki-navbox" style="border-color: #A664A0;">
            <div class="wiki-navbox-header" style="background-color: #A664A0;">
                <div class="header-content">
                    <img src="이미지/모제군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">모제군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#A664A0;">ㄱ</th><td><a href="가운로.html" class="red-link">가운로</a> · <a href="강주로.html" class="red-link">강주로</a> · <a href="괴천로.html" class="blue-link">괴천로</a> · <a href="군청로.html" class="red-link">군청로</a> · <a href="금복로.html" class="red-link">금복로</a></td></tr>
                    <tr><th style="background-color:#A664A0;">ㄴ</th><td><a href="남광로.html" class="blue-link">남광로</a> · <a href="농공단지로.html" class="blue-link">농공단지로</a></td></tr>
                    <tr><th style="background-color:#A664A0;">ㅁ</th><td><a href="매화로.html" class="red-link">매화로</a> · <a href="모제로.html" class="red-link">모제로</a> · <a href="모제서진로.html" class="blue-link">모제서진로</a> · <a href="모제서해로.html" class="red-link">모제서해로</a> · <a href="모제역로.html" class="red-link">모제역로</a> · <a href="모제외곽로.html" class="red-link">모제외곽로</a> · <a href="모제중앙로.html" class="blue-link">모제중앙로</a> · <a href="미기로.html" class="red-link">미기로</a></td></tr>
                    <tr><th style="background-color:#A664A0;">ㅂ</th><td><a href="백로로.html" class="red-link">백로로</a> · <a href="북촌로.html" class="red-link">북촌로</a> · <a href="빈주로.html" class="blue-link">빈주로</a></td></tr>
                    <tr><th style="background-color:#A664A0;">ㅅ</th><td><a href="서진로.html" class="red-link">서진로</a> · <a href="석창로.html" class="blue-link">석창로</a> · <a href="시장로.html" class="blue-link">시장로</a></td></tr>
                    <tr><th style="background-color:#A664A0;">ㅇ</th><td><a href="야상로.html" class="red-link">야상로</a> · <a href="약궁로.html" class="blue-link">약궁로</a> · <a href="약궁산단로.html" class="red-link">약궁산단로</a> · <a href="약궁천로.html" class="red-link">약궁천로</a> · <a href="약궁첨단로.html" class="red-link">약궁첨단로</a> · <a href="양광로.html" class="blue-link">양광로</a> · <a href="어미둑로.html" class="red-link">어미둑로</a></td></tr>
                    <tr><th style="background-color:#A664A0;">ㅈ</th><td><a href="장어로.html" class="red-link">장어로</a> · <a href="전산로.html" class="blue-link">전산로</a> · <a href="중산지로.html" class="red-link">중산지로</a> · <a href="중앙로.html" class="red-link">중앙로</a> · <a href="중야로.html" class="red-link">중야로</a></td></tr>
                    <tr><th style="background-color:#A664A0;">ㅊ</th><td><a href="첨단산업로.html" class="blue-link">첨단산업로</a> · <a href="청해로.html" class="red-link">청해로</a> · <a href="청해해안로.html" class="red-link">청해해안로</a></td></tr>
                    <tr><th style="background-color:#A664A0;">ㅎ</th><td><a href="학권로.html" class="blue-link">학권로</a> · <a href="해송로.html" class="red-link">해송로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #A664A0;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "반양군": `
        <div class="wiki-navbox" style="border-color: #D81C2F;">
            <div class="wiki-navbox-header" style="background-color: #D81C2F;">
                <div class="header-content">
                    <img src="이미지/반양군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">반양군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#D81C2F;">ㄱ</th><td><a href="강빈로.html" class="red-link">강빈로</a> · <a href="계성로.html" class="red-link">계성로</a> · <a href="군청로.html" class="red-link">군청로</a></td></tr>
                    <tr><th style="background-color:#D81C2F;">ㄴ</th><td><a href="농공단지로.html" class="blue-link">농공단지로</a> · <a href="느티로.html" class="red-link">느티로</a></td></tr>
                    <tr><th style="background-color:#D81C2F;">ㅂ</th><td><a href="반계로로.html" class="blue-link">반계로로</a> · <a href="반빛골로.html" class="blue-link">반빛골로</a> · <a href="반양댐로.html" class="blue-link">반양댐로</a> · <a href="반양로.html" class="red-link">반양로</a> · <a href="반양삽곡로.html" class="red-link">반양삽곡로</a> · <a href="반양서로.html" class="red-link">반양서로</a> · <a href="반양역로.html" class="red-link">반양역로</a> · <a href="반양중앙로.html" class="red-link">반양중앙로</a> · <a href="백로로.html" class="red-link">백로로</a> · <a href="복구로.html" class="red-link">복구로</a> · <a href="북부로.html" class="red-link">북부로</a> · <a href="비량로.html" class="red-link">비량로</a> · <a href="빈주로.html" class="blue-link">빈주로</a></td></tr>
                    <tr><th style="background-color:#D81C2F;">ㅅ</th><td><a href="삽곡로.html" class="red-link">삽곡로</a> · <a href="삽곡역로.html" class="red-link">삽곡역로</a> · <a href="삽곡중앙로.html" class="red-link">삽곡중앙로</a> · <a href="상빈로.html" class="blue-link">상빈로</a> · <a href="수상로.html" class="red-link">수상로</a></td></tr>
                    <tr><th style="background-color:#D81C2F;">ㅇ</th><td><a href="양산로.html" class="blue-link">양산로</a> · <a href="역전로.html" class="red-link">역전로</a> · <a href="인와로.html" class="blue-link">인와로</a></td></tr>
                    <tr><th style="background-color:#D81C2F;">ㅈ</th><td><a href="저천로.html" class="red-link">저천로</a> · <a href="적판로.html" class="red-link">적판로</a> · <a href="중앙로.html" class="red-link">중앙로</a> · <a href="진백산로.html" class="red-link">진백산로</a></td></tr>
                    <tr><th style="background-color:#D81C2F;">ㅌ</th><td><a href="토정로.html" class="blue-link">토정로</a> · <a href="토정역로.html" class="red-link">토정역로</a></td></tr>
                    <tr><th style="background-color:#D81C2F;">ㅎ</th><td><a href="하원로.html" class="red-link">하원로</a> · <a href="하원물류로.html" class="red-link">하원물류로</a> · <a href="하원역로.html" class="red-link">하원역로</a> · <a href="해바라기로.html" class="red-link">해바라기로</a> · <a href="해솔로.html" class="red-link">해솔로</a> · <a href="흑전로.html" class="blue-link">흑전로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #D81C2F;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "상안군": `
        <div class="wiki-navbox" style="border-color: #84C36E;">
            <div class="wiki-navbox-header" style="background-color: #84C36E;">
                <div class="header-content">
                    <img src="이미지/상안군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">상안군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#84C36E;">ㄱ</th><td><a href="공단로.html" class="red-link">공단로</a></td></tr>
                    <tr><th style="background-color:#84C36E;">ㄴ</th><td><a href="낙산로.html" class="red-link">낙산로</a> · <a href="남부로.html" class="red-link">남부로</a> · <a href="농공단지로.html" class="blue-link">농공단지로</a> · <a href="높은안골로.html" class="red-link">높은안골로</a></td></tr>
                    <tr><th style="background-color:#84C36E;">ㄷ</th><td><a href="동부로.html" class="red-link">동부로</a></td></tr>
                    <tr><th style="background-color:#84C36E;">ㅂ</th><td><a href="북부로.html" class="red-link">북부로</a></td></tr>
                    <tr><th style="background-color:#84C36E;">ㅅ</th><td><a href="사류로.html" class="blue-link">사류로</a> · <a href="상안로.html" class="red-link">상안로</a> · <a href="상안역로.html" class="red-link">상안역로</a> · <a href="상안외곽로.html" class="red-link">상안외곽로</a> · <a href="상안중앙로.html" class="red-link">상안중앙로</a> · <a href="상안천로.html" class="red-link">상안천로</a> · <a href="서부로.html" class="blue-link">서부로</a> · <a href="서진로.html" class="red-link">서진로</a> · <a href="서해로.html" class="red-link">서해로</a> · <a href="순화로.html" class="blue-link">순화로</a> · <a href="순화중앙로.html" class="blue-link">순화중앙로</a> · <a href="승정로.html" class="red-link">승정로</a> · <a href="시장로.html" class="blue-link">시장로</a></td></tr>
                    <tr><th style="background-color:#84C36E;">ㅇ</th><td><a href="역전로.html" class="red-link">역전로</a> · <a href="이부로.html" class="red-link">이부로</a> · <a href="이부산단로.html" class="red-link">이부산단로</a> · <a href="일채로.html" class="blue-link">일채로</a></td></tr>
                    <tr><th style="background-color:#84C36E;">ㅈ</th><td><a href="전나무로.html" class="blue-link">전나무로</a> · <a href="전산로.html" class="blue-link">전산로</a> · <a href="중앙로.html" class="red-link">중앙로</a> · <a href="진달래로.html" class="red-link">진달래로</a></td></tr>
                    <tr><th style="background-color:#84C36E;">ㅊ</th><td><a href="첨단산업로.html" class="blue-link">첨단산업로</a></td></tr>
                    <tr><th style="background-color:#84C36E;">ㅌ</th><td><a href="태서로.html" class="red-link">태서로</a> · <a href="태서산로.html" class="red-link">태서산로</a></td></tr>
                    <tr><th style="background-color:#84C36E;">ㅍ</th><td><a href="패총로.html" class="red-link">패총로</a> · <a href="평야로.html" class="red-link">평야로</a></td></tr>
                    <tr><th style="background-color:#84C36E;">ㅎ</th><td><a href="해안로.html" class="red-link">해안로</a> · <a href="향교로.html" class="blue-link">향교로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #84C36E;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "서진시": `
        <div class="wiki-navbox" style="border-color: #9CA5B9;">
            <div class="wiki-navbox-header" style="background-color: #9CA5B9;">
                <div class="header-content">
                    <img src="이미지/서진시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">서진시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#9CA5B9;">ㄱ</th><td><a href="거노로.html" class="red-link">거노로</a> · <a href="계곡로.html" class="red-link">계곡로</a> · <a href="공단1로.html" class="red-link">공단1로</a> · <a href="공단2로.html" class="red-link">공단2로</a> · <a href="공단3로.html" class="red-link">공단3로</a> · <a href="광업로.html" class="red-link">광업로</a></td></tr>
                    <tr><th style="background-color:#9CA5B9;">ㄴ</th><td><a href="나민로.html" class="blue-link">나민로</a> · <a href="남진로.html" class="red-link">남진로</a> · <a href="노을해안로.html" class="red-link">노을해안로</a> · <a href="논골로.html" class="red-link">논골로</a></td></tr>
                    <tr><th style="background-color:#9CA5B9;">ㄷ</th><td><a href="동릉로.html" class="red-link">동릉로</a> · <a href="동백로.html" class="red-link">동백로</a></td></tr>
                    <tr><th style="background-color:#9CA5B9;">ㅁ</th><td><a href="매현로.html" class="blue-link">매현로</a> · <a href="모제서진로.html" class="blue-link">모제서진로</a></td></tr>
                    <tr><th style="background-color:#9CA5B9;">ㅂ</th><td><a href="발전로.html" class="blue-link">발전로</a> · <a href="번영로.html" class="red-link">번영로</a> · <a href="북항로.html" class="red-link">북항로</a></td></tr>
                    <tr><th style="background-color:#9CA5B9;">ㅅ</th><td><a href="사종로.html" class="blue-link">사종로</a> · <a href="산복로.html" class="blue-link">산복로</a> · <a href="산성로.html" class="red-link">산성로</a> · <a href="새벽나루로.html" class="red-link">새벽나루로</a> · <a href="서근로.html" class="red-link">서근로</a> · <a href="서릉로.html" class="red-link">서릉로</a> · <a href="서목로.html" class="red-link">서목로</a> · <a href="서진1로.html" class="red-link">서진1로</a> · <a href="서진2로.html" class="red-link">서진2로</a> · <a href="서진로.html" class="red-link">서진로</a> · <a href="서진중앙로.html" class="blue-link">서진중앙로</a> · <a href="수산로.html" class="red-link">수산로</a> · <a href="신항로.html" class="blue-link">신항로</a></td></tr>
                    <tr><th style="background-color:#9CA5B9;">ㅇ</th><td><a href="아은1로.html" class="red-link">아은1로</a> · <a href="아은2로.html" class="red-link">아은2로</a> · <a href="아은로.html" class="red-link">아은로</a> · <a href="아은중앙로.html" class="blue-link">아은중앙로</a> · <a href="양회로.html" class="red-link">양회로</a> · <a href="역전로.html" class="red-link">역전로</a> · <a href="이십기로.html" class="red-link">이십기로</a></td></tr>
                    <tr><th style="background-color:#9CA5B9;">ㅈ</th><td><a href="재동로.html" class="red-link">재동로</a> · <a href="중앙시장로.html" class="red-link">중앙시장로</a> · <a href="진목로.html" class="red-link">진목로</a></td></tr>
                    <tr><th style="background-color:#9CA5B9;">ㅊ</th><td><a href="철산로.html" class="blue-link">철산로</a> · <a href="철송로.html" class="blue-link">철송로</a> · <a href="청송로.html" class="red-link">청송로</a> · <a href="추자로.html" class="red-link">추자로</a></td></tr>
                    <tr><th style="background-color:#9CA5B9;">ㅌ</th><td><a href="탄좌로.html" class="red-link">탄좌로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #9CA5B9;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "서해시": `
        <div class="wiki-navbox" style="border-color: #37B484;">
            <div class="wiki-navbox-header" style="background-color: #37B484;">
                <div class="header-content">
                    <img src="이미지/서해시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">서해시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#37B484;">ㄱ</th><td><a href="가미로.html" class="blue-link">가미로</a> · <a href="구원로.html" class="red-link">구원로</a> · <a href="국도 제38호선.html" class="red-link">국도 제38호선</a> · <a href="국도 제39호선.html" class="red-link">국도 제39호선</a> · <a href="국도 제3호선.html" class="red-link">국도 제3호선</a> · <a href="국도 제77호선.html" class="blue-link">국도 제77호선</a> · <a href="긍사로.html" class="red-link">긍사로</a></td></tr>
                    <tr><th style="background-color:#37B484;">ㄴ</th><td><a href="남정로.html" class="red-link">남정로</a> · <a href="내야로.html" class="red-link">내야로</a></td></tr>
                    <tr><th style="background-color:#37B484;">ㄷ</th><td><a href="대동로.html" class="red-link">대동로</a></td></tr>
                    <tr><th style="background-color:#37B484;">ㅁ</th><td><a href="마원로.html" class="blue-link">마원로</a> · <a href="모제로.html" class="red-link">모제로</a> · <a href="모제서해로.html" class="red-link">모제서해로</a> · <a href="문진공단로.html" class="blue-link">문진공단로</a> · <a href="문진로.html" class="blue-link">문진로</a></td></tr>
                    <tr><th style="background-color:#37B484;">ㅂ</th><td><a href="반풍로.html" class="red-link">반풍로</a> · <a href="방부샘물로.html" class="red-link">방부샘물로</a> · <a href="번전1로.html" class="blue-link">번전1로</a> · <a href="번전2로.html" class="red-link">번전2로</a> · <a href="번전중앙로.html" class="blue-link">번전중앙로</a> · <a href="북야로.html" class="red-link">북야로</a> · <a href="북야해안로.html" class="red-link">북야해안로</a> · <a href="분동로.html" class="red-link">분동로</a></td></tr>
                    <tr><th style="background-color:#37B484;">ㅅ</th><td><a href="상정로.html" class="red-link">상정로</a> · <a href="상포물류로.html" class="red-link">상포물류로</a> · <a href="서해동1가로.html" class="red-link">서해동1가로</a> · <a href="서해동2가로.html" class="red-link">서해동2가로</a> · <a href="서해로.html" class="red-link">서해로</a> · <a href="서해신항 고속화도로.html" class="blue-link">서해신항 고속화도로</a> · <a href="서해안고속도로.html" class="red-link">서해안고속도로</a> · <a href="서해역로.html" class="blue-link">서해역로</a> · <a href="서해중앙로.html" class="red-link">서해중앙로</a> · <a href="서해천변로.html" class="blue-link">서해천변로</a> · <a href="서해춘천고속도로.html" class="red-link">서해춘천고속도로</a> · <a href="신항포구로.html" class="red-link">신항포구로</a></td></tr>
                    <tr><th style="background-color:#37B484;">ㅇ</th><td><a href="압일1로.html" class="blue-link">압일1로</a> · <a href="압일2로.html" class="red-link">압일2로</a> · <a href="압일중앙로.html" class="red-link">압일중앙로</a> · <a href="언내로.html" class="red-link">언내로</a> · <a href="우곡1로.html" class="blue-link">우곡1로</a> · <a href="우곡2로.html" class="red-link">우곡2로</a> · <a href="우곡로.html" class="red-link">우곡로</a> · <a href="우궁공원로.html" class="red-link">우궁공원로</a> · <a href="원로로.html" class="blue-link">원로로</a> · <a href="원변로.html" class="red-link">원변로</a> · <a href="원변해안구비로.html" class="blue-link">원변해안구비로</a></td></tr>
                    <tr><th style="background-color:#37B484;">ㅈ</th><td><a href="자정로.html" class="blue-link">자정로</a> · <a href="장미로.html" class="red-link">장미로</a> · <a href="장서로.html" class="blue-link">장서로</a> · <a href="전동로.html" class="red-link">전동로</a> · <a href="전중로.html" class="red-link">전중로</a> · <a href="좌산로.html" class="blue-link">좌산로</a> · <a href="좌산안로.html" class="red-link">좌산안로</a> · <a href="지서로.html" class="red-link">지서로</a> · <a href="지중1로.html" class="red-link">지중1로</a> · <a href="지중로.html" class="red-link">지중로</a></td></tr>
                    <tr><th style="background-color:#37B484;">ㅊ</th><td><a href="천로생태로.html" class="red-link">천로생태로</a> · <a href="첨천로.html" class="red-link">첨천로</a> · <a href="추생로.html" class="red-link">추생로</a> · <a href="축마로.html" class="blue-link">축마로</a> · <a href="축수로.html" class="blue-link">축수로</a></td></tr>
                    <tr><th style="background-color:#37B484;">ㅌ</th><td><a href="통마고개로.html" class="blue-link">통마고개로</a> · <a href="통마로.html" class="red-link">통마로</a></td></tr>
                    <tr><th style="background-color:#37B484;">ㅍ</th><td><a href="판전로.html" class="red-link">판전로</a> · <a href="평림로.html" class="red-link">평림로</a> · <a href="포구로.html" class="red-link">포구로</a></td></tr>
                    <tr><th style="background-color:#37B484;">ㅎ</th><td><a href="하곡로.html" class="red-link">하곡로</a> · <a href="하수로.html" class="red-link">하수로</a> · <a href="해안1로.html" class="red-link">해안1로</a> · <a href="해안2로.html" class="red-link">해안2로</a> · <a href="해안산업로.html" class="blue-link">해안산업로</a> · <a href="향원로.html" class="blue-link">향원로</a> · <a href="향전로.html" class="red-link">향전로</a> · <a href="호남로.html" class="red-link">호남로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #37B484;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "선곡군": `
        <div class="wiki-navbox" style="border-color: #D6D5CA;">
            <div class="wiki-navbox-header" style="background-color: #D6D5CA;">
                <div class="header-content">
                    <img src="이미지/선곡군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">선곡군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#D6D5CA;">ㄱ</th><td><a href="갈매기로.html" class="red-link">갈매기로</a> · <a href="갯벌로.html" class="red-link">갯벌로</a> · <a href="관아로.html" class="red-link">관아로</a> · <a href="귀총로.html" class="red-link">귀총로</a></td></tr>
                    <tr><th style="background-color:#D6D5CA;">ㄴ</th><td><a href="남북로.html" class="red-link">남북로</a> · <a href="남소로.html" class="blue-link">남소로</a> · <a href="남약산로.html" class="red-link">남약산로</a> · <a href="농공단지로.html" class="blue-link">농공단지로</a> · <a href="능곡로.html" class="red-link">능곡로</a></td></tr>
                    <tr><th style="background-color:#D6D5CA;">ㄷ</th><td><a href="도산로.html" class="red-link">도산로</a> · <a href="도성로.html" class="red-link">도성로</a> · <a href="동구로.html" class="blue-link">동구로</a> · <a href="동서로.html" class="red-link">동서로</a></td></tr>
                    <tr><th style="background-color:#D6D5CA;">ㅁ</th><td><a href="매화로.html" class="red-link">매화로</a></td></tr>
                    <tr><th style="background-color:#D6D5CA;">ㅂ</th><td><a href="배후단지로.html" class="blue-link">배후단지로</a></td></tr>
                    <tr><th style="background-color:#D6D5CA;">ㅅ</th><td><a href="선곡로.html" class="blue-link">선곡로</a> · <a href="선곡산단로.html" class="blue-link">선곡산단로</a> · <a href="선곡외곽로.html" class="blue-link">선곡외곽로</a> · <a href="선곡중앙로.html" class="red-link">선곡중앙로</a> · <a href="선비로.html" class="red-link">선비로</a> · <a href="성륜로.html" class="blue-link">성륜로</a> · <a href="세하로.html" class="red-link">세하로</a> · <a href="솔향로.html" class="red-link">솔향로</a> · <a href="시장로.html" class="blue-link">시장로</a></td></tr>
                    <tr><th style="background-color:#D6D5CA;">ㅇ</th><td><a href="앵내로.html" class="red-link">앵내로</a> · <a href="앵내이자로.html" class="blue-link">앵내이자로</a> · <a href="약산대로 남해안로.html" class="red-link">약산대로 남해안로</a> · <a href="약산정로.html" class="red-link">약산정로</a> · <a href="역전로.html" class="red-link">역전로</a> · <a href="와산로.html" class="blue-link">와산로</a> · <a href="요우로.html" class="red-link">요우로</a> · <a href="우모로.html" class="red-link">우모로</a> · <a href="우목로.html" class="red-link">우목로</a> · <a href="우석로.html" class="red-link">우석로</a> · <a href="원전로.html" class="red-link">원전로</a> · <a href="유통단지로.html" class="red-link">유통단지로</a> · <a href="읍내로.html" class="red-link">읍내로</a> · <a href="인채로.html" class="red-link">인채로</a></td></tr>
                    <tr><th style="background-color:#D6D5CA;">ㅊ</th><td><a href="채촌로.html" class="red-link">채촌로</a></td></tr>
                    <tr><th style="background-color:#D6D5CA;">ㅍ</th><td><a href="평야로.html" class="red-link">평야로</a></td></tr>
                    <tr><th style="background-color:#D6D5CA;">ㅎ</th><td><a href="하미기지로.html" class="blue-link">하미기지로</a> · <a href="하미로.html" class="blue-link">하미로</a> · <a href="하미중앙로.html" class="blue-link">하미중앙로</a> · <a href="해로로.html" class="red-link">해로로</a> · <a href="해로해안로.html" class="red-link">해로해안로</a> · <a href="해안관광로.html" class="blue-link">해안관광로</a> · <a href="향교로.html" class="blue-link">향교로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #D6D5CA;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "약산시": `
        <div class="wiki-navbox" style="border-color: #F8C8C4;">
            <div class="wiki-navbox-header" style="background-color: #F8C8C4;">
                <div class="header-content">
                    <img src="이미지/약산시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">약산시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#F8C8C4;">ㄱ</th><td><a href="고곡로.html" class="red-link">고곡로</a> · <a href="광정로.html" class="red-link">광정로</a> · <a href="구도심로.html" class="red-link">구도심로</a> · <a href="근강로.html" class="red-link">근강로</a> · <a href="근상로.html" class="red-link">근상로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㄴ</th><td><a href="남약산로.html" class="red-link">남약산로</a> · <a href="낭곡로.html" class="blue-link">낭곡로</a> · <a href="늑마로.html" class="red-link">늑마로</a> · <a href="능곡로.html" class="red-link">능곡로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㄷ</th><td><a href="덕빈로.html" class="red-link">덕빈로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㄹ</th><td><a href="랜드마크로.html" class="blue-link">랜드마크로</a> · <a href="로데오로.html" class="red-link">로데오로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㅁ</th><td><a href="메디컬로.html" class="blue-link">메디컬로</a> · <a href="무기로.html" class="red-link">무기로</a> · <a href="문화의거리로.html" class="red-link">문화의거리로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㅂ</th><td><a href="바명로.html" class="blue-link">바명로</a> · <a href="바이오밸리로.html" class="red-link">바이오밸리로</a> · <a href="배홍로.html" class="red-link">배홍로</a> · <a href="번영중앙로.html" class="red-link">번영중앙로</a> · <a href="벚꽃안길.html" class="blue-link">벚꽃안길</a> · <a href="보녕로.html" class="blue-link">보녕로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㅅ</th><td><a href="산석로.html" class="red-link">산석로</a> · <a href="산탄로.html" class="blue-link">산탄로</a> · <a href="산형1로.html" class="red-link">산형1로</a> · <a href="산형2로.html" class="red-link">산형2로</a> · <a href="산형로.html" class="red-link">산형로</a> · <a href="삼미1로.html" class="red-link">삼미1로</a> · <a href="삼미2로.html" class="blue-link">삼미2로</a> · <a href="삼미로.html" class="red-link">삼미로</a> · <a href="상업로.html" class="red-link">상업로</a> · <a href="성가로.html" class="red-link">성가로</a> · <a href="센트럴파크로.html" class="blue-link">센트럴파크로</a> · <a href="스마트타운로.html" class="blue-link">스마트타운로</a> · <a href="시청로.html" class="blue-link">시청로</a> · <a href="신시가지로.html" class="red-link">신시가지로</a> · <a href="신청사로.html" class="red-link">신청사로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㅇ</th><td><a href="아카데미로.html" class="blue-link">아카데미로</a> · <a href="약산1로.html" class="red-link">약산1로</a> · <a href="약산2로.html" class="red-link">약산2로</a> · <a href="약산3로.html" class="blue-link">약산3로</a> · <a href="약산4로.html" class="red-link">약산4로</a> · <a href="약산5로.html" class="red-link">약산5로</a> · <a href="약산로.html" class="blue-link">약산로</a> · <a href="약산서성로.html" class="red-link">약산서성로</a> · <a href="약산정로.html" class="red-link">약산정로</a> · <a href="약산중앙로.html" class="red-link">약산중앙로</a> · <a href="역석로.html" class="blue-link">역석로</a> · <a href="역성1로.html" class="red-link">역성1로</a> · <a href="역성2로.html" class="red-link">역성2로</a> · <a href="역성3로.html" class="blue-link">역성3로</a> · <a href="역성로.html" class="blue-link">역성로</a> · <a href="역성중앙로.html" class="red-link">역성중앙로</a> · <a href="역전로(약산).html" class="red-link">역전로(약산)</a> · <a href="영내로.html" class="blue-link">영내로</a> · <a href="예술회관로.html" class="red-link">예술회관로</a> · <a href="와산로.html" class="blue-link">와산로</a> · <a href="우부1로.html" class="red-link">우부1로</a> · <a href="우부2로.html" class="red-link">우부2로</a> · <a href="우부로.html" class="red-link">우부로</a> · <a href="우석로.html" class="red-link">우석로</a> · <a href="욱상로.html" class="red-link">욱상로</a> · <a href="원강로.html" class="red-link">원강로</a> · <a href="원강중앙로.html" class="red-link">원강중앙로</a> · <a href="은하수로.html" class="red-link">은하수로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㅈ</th><td><a href="자언로.html" class="red-link">자언로</a> · <a href="장곡궁하로.html" class="blue-link">장곡궁하로</a> · <a href="장곡중앙로.html" class="blue-link">장곡중앙로</a> · <a href="장곡해안로.html" class="red-link">장곡해안로</a> · <a href="장근로.html" class="blue-link">장근로</a> · <a href="제약로.html" class="red-link">제약로</a> · <a href="조태로.html" class="blue-link">조태로</a> · <a href="중철로.html" class="blue-link">중철로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㅊ</th><td><a href="채촌로.html" class="red-link">채촌로</a> · <a href="청년창업로.html" class="blue-link">청년창업로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㅌ</th><td><a href="테크노단지로.html" class="red-link">테크노단지로</a> · <a href="통주로.html" class="blue-link">통주로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㅍ</th><td><a href="평화공원로.html" class="red-link">평화공원로</a></td></tr>
                    <tr><th style="background-color:#F8C8C4;">ㅎ</th><td><a href="학구로.html" class="red-link">학구로</a> · <a href="현천로.html" class="red-link">현천로</a> · <a href="호수공원로.html" class="red-link">호수공원로</a> · <a href="호수로.html" class="red-link">호수로</a> · <a href="홍하로.html" class="blue-link">홍하로</a> · <a href="화소1로.html" class="red-link">화소1로</a> · <a href="화소2로.html" class="red-link">화소2로</a> · <a href="화소로.html" class="blue-link">화소로</a> · <a href="환승광장로.html" class="red-link">환승광장로</a> · <a href="효빈연결로.html" class="red-link">효빈연결로</a> · <a href="흥통로.html" class="blue-link">흥통로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #F8C8C4;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "저천군": `
        <div class="wiki-navbox" style="border-color: #1D1D1D;">
            <div class="wiki-navbox-header" style="background-color: #1D1D1D;">
                <div class="header-content">
                    <img src="이미지/저천군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">저천군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#1D1D1D;">ㄱ</th><td><a href="강월로.html" class="red-link">강월로</a> · <a href="강주로.html" class="red-link">강주로</a> · <a href="계성로.html" class="red-link">계성로</a> · <a href="곡합로.html" class="blue-link">곡합로</a> · <a href="관원로.html" class="red-link">관원로</a> · <a href="교조로.html" class="red-link">교조로</a> · <a href="궐생로.html" class="red-link">궐생로</a></td></tr>
                    <tr><th style="background-color:#1D1D1D;">ㄷ</th><td><a href="대장로.html" class="red-link">대장로</a> · <a href="대평로.html" class="red-link">대평로</a> · <a href="동면로.html" class="red-link">동면로</a></td></tr>
                    <tr><th style="background-color:#1D1D1D;">ㅁ</th><td><a href="명지로.html" class="blue-link">명지로</a> · <a href="명환로.html" class="red-link">명환로</a></td></tr>
                    <tr><th style="background-color:#1D1D1D;">ㅂ</th><td><a href="반양로.html" class="red-link">반양로</a> · <a href="반전로.html" class="blue-link">반전로</a> · <a href="백미로.html" class="red-link">백미로</a> · <a href="빈저로.html" class="red-link">빈저로</a> · <a href="빈주로.html" class="blue-link">빈주로</a></td></tr>
                    <tr><th style="background-color:#1D1D1D;">ㅅ</th><td><a href="산백로.html" class="red-link">산백로</a> · <a href="산협로.html" class="red-link">산협로</a> · <a href="삼고로.html" class="red-link">삼고로</a> · <a href="삼산로.html" class="red-link">삼산로</a> · <a href="상빈로.html" class="blue-link">상빈로</a> · <a href="색성로.html" class="blue-link">색성로</a> · <a href="서수로.html" class="red-link">서수로</a> · <a href="선부로.html" class="red-link">선부로</a> · <a href="소창로.html" class="blue-link">소창로</a> · <a href="송남로.html" class="red-link">송남로</a> · <a href="송북로.html" class="red-link">송북로</a> · <a href="신기로.html" class="blue-link">신기로</a> · <a href="신지로.html" class="red-link">신지로</a> · <a href="신통로.html" class="blue-link">신통로</a></td></tr>
                    <tr><th style="background-color:#1D1D1D;">ㅇ</th><td><a href="아랫내로.html" class="blue-link">아랫내로</a> · <a href="약산로.html" class="blue-link">약산로</a> · <a href="오강로.html" class="red-link">오강로</a> · <a href="외산로.html" class="blue-link">외산로</a> · <a href="우구로.html" class="red-link">우구로</a> · <a href="우구역로.html" class="red-link">우구역로</a> · <a href="우구중앙로.html" class="blue-link">우구중앙로</a> · <a href="율립로.html" class="red-link">율립로</a> · <a href="이좌로.html" class="red-link">이좌로</a> · <a href="일영로.html" class="red-link">일영로</a></td></tr>
                    <tr><th style="background-color:#1D1D1D;">ㅈ</th><td><a href="장뢰로.html" class="blue-link">장뢰로</a> · <a href="저천강로.html" class="blue-link">저천강로</a> · <a href="저천로.html" class="red-link">저천로</a> · <a href="저천중앙로.html" class="blue-link">저천중앙로</a> · <a href="직강로.html" class="red-link">직강로</a></td></tr>
                    <tr><th style="background-color:#1D1D1D;">ㅊ</th><td><a href="천목로.html" class="red-link">천목로</a> · <a href="치원로.html" class="red-link">치원로</a></td></tr>
                    <tr><th style="background-color:#1D1D1D;">ㅌ</th><td><a href="토경로.html" class="red-link">토경로</a></td></tr>
                    <tr><th style="background-color:#1D1D1D;">ㅎ</th><td><a href="횡월로.html" class="red-link">횡월로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #1D1D1D;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "전산시": `
        <div class="wiki-navbox" style="border-color: #FF7F27;">
            <div class="wiki-navbox-header" style="background-color: #FF7F27;">
                <div class="header-content">
                    <img src="이미지/전산시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">전산시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#FF7F27;">ㄱ</th><td><a href="계곡로.html" class="red-link">계곡로</a> · <a href="곡지로.html" class="red-link">곡지로</a> · <a href="군천로.html" class="red-link">군천로</a> · <a href="근자로.html" class="red-link">근자로</a></td></tr>
                    <tr><th style="background-color:#FF7F27;">ㄴ</th><td><a href="남고개로.html" class="red-link">남고개로</a> · <a href="남문로.html" class="red-link">남문로</a> · <a href="농공단지로.html" class="blue-link">농공단지로</a></td></tr>
                    <tr><th style="background-color:#FF7F27;">ㄷ</th><td><a href="단풍로.html" class="red-link">단풍로</a> · <a href="동헌로.html" class="red-link">동헌로</a></td></tr>
                    <tr><th style="background-color:#FF7F27;">ㅁ</th><td><a href="만산로.html" class="blue-link">만산로</a> · <a href="모제로.html" class="red-link">모제로</a> · <a href="목하로.html" class="red-link">목하로</a> · <a href="뫼산로.html" class="red-link">뫼산로</a></td></tr>
                    <tr><th style="background-color:#FF7F27;">ㅂ</th><td><a href="북고개로.html" class="red-link">북고개로</a> · <a href="빈주로.html" class="blue-link">빈주로</a></td></tr>
                    <tr><th style="background-color:#FF7F27;">ㅅ</th><td><a href="삼일로.html" class="blue-link">삼일로</a> · <a href="상안로.html" class="red-link">상안로</a> · <a href="서원로.html" class="blue-link">서원로</a> · <a href="서진로.html" class="red-link">서진로</a> · <a href="소천로.html" class="red-link">소천로</a> · <a href="송강로.html" class="red-link">송강로</a> · <a href="송강터널로.html" class="red-link">송강터널로</a> · <a href="수판로.html" class="blue-link">수판로</a> · <a href="순월로.html" class="red-link">순월로</a> · <a href="시청로.html" class="blue-link">시청로</a> · <a href="신산로.html" class="red-link">신산로</a></td></tr>
                    <tr><th style="background-color:#FF7F27;">ㅇ</th><td><a href="역전로.html" class="red-link">역전로</a> · <a href="오반로.html" class="red-link">오반로</a> · <a href="온전로.html" class="red-link">온전로</a> · <a href="육천로.html" class="blue-link">육천로</a> · <a href="읍성로.html" class="red-link">읍성로</a></td></tr>
                    <tr><th style="background-color:#FF7F27;">ㅈ</th><td><a href="전산1로.html" class="red-link">전산1로</a> · <a href="전산2로.html" class="red-link">전산2로</a> · <a href="전산3로.html" class="blue-link">전산3로</a> · <a href="전산로.html" class="blue-link">전산로</a> · <a href="전산산단로.html" class="blue-link">전산산단로</a> · <a href="전산중앙로.html" class="red-link">전산중앙로</a> · <a href="전산터널로.html" class="red-link">전산터널로</a> · <a href="중앙시장로.html" class="red-link">중앙시장로</a></td></tr>
                    <tr><th style="background-color:#FF7F27;">ㅊ</th><td><a href="천봉로.html" class="red-link">천봉로</a> · <a href="천제봉로.html" class="blue-link">천제봉로</a></td></tr>
                    <tr><th style="background-color:#FF7F27;">ㅌ</th><td><a href="태하로.html" class="red-link">태하로</a></td></tr>
                    <tr><th style="background-color:#FF7F27;">ㅎ</th><td><a href="하면로.html" class="red-link">하면로</a> · <a href="향교로.html" class="blue-link">향교로</a> · <a href="후전로.html" class="red-link">후전로</a> · <a href="휴양림로.html" class="red-link">휴양림로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #FF7F27;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "치원군": `
        <div class="wiki-navbox" style="border-color: #aa7799;">
            <div class="wiki-navbox-header" style="background-color: #aa7799;">
                <div class="header-content">
                    <img src="이미지/치원군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도</div>
                        <div class="title-main">치원군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#aa7799;">ㄱ</th><td><a href="갈매기로.html" class="red-link">갈매기로</a> · <a href="계성로.html" class="red-link">계성로</a> · <a href="곰솔로.html" class="blue-link">곰솔로</a> · <a href="구봉월로.html" class="red-link">구봉월로</a> · <a href="군청로.html" class="red-link">군청로</a> · <a href="근해로.html" class="blue-link">근해로</a></td></tr>
                    <tr><th style="background-color:#aa7799;">ㄴ</th><td><a href="남부로.html" class="red-link">남부로</a></td></tr>
                    <tr><th style="background-color:#aa7799;">ㄷ</th><td><a href="대금로.html" class="red-link">대금로</a> · <a href="도엽로.html" class="red-link">도엽로</a></td></tr>
                    <tr><th style="background-color:#aa7799;">ㅁ</th><td><a href="만택로.html" class="red-link">만택로</a> · <a href="매평로.html" class="blue-link">매평로</a></td></tr>
                    <tr><th style="background-color:#aa7799;">ㅂ</th><td><a href="백생로.html" class="blue-link">백생로</a> · <a href="복사로.html" class="blue-link">복사로</a> · <a href="봉월로.html" class="red-link">봉월로</a></td></tr>
                    <tr><th style="background-color:#aa7799;">ㅅ</th><td><a href="산전로.html" class="red-link">산전로</a> · <a href="송미로.html" class="red-link">송미로</a> · <a href="시장로.html" class="blue-link">시장로</a></td></tr>
                    <tr><th style="background-color:#aa7799;">ㅇ</th><td><a href="안담로.html" class="red-link">안담로</a> · <a href="앳벌로.html" class="red-link">앳벌로</a> · <a href="약산로.html" class="blue-link">약산로</a> · <a href="읍내로.html" class="red-link">읍내로</a></td></tr>
                    <tr><th style="background-color:#aa7799;">ㅈ</th><td><a href="장야로.html" class="blue-link">장야로</a> · <a href="저천로.html" class="red-link">저천로</a> · <a href="중어소로.html" class="blue-link">중어소로</a></td></tr>
                    <tr><th style="background-color:#aa7799;">ㅊ</th><td><a href="채화로.html" class="red-link">채화로</a> · <a href="천주로.html" class="blue-link">천주로</a> · <a href="첨단산업로.html" class="blue-link">첨단산업로</a> · <a href="청수로.html" class="red-link">청수로</a> · <a href="치원로.html" class="red-link">치원로</a> · <a href="치원중앙로.html" class="red-link">치원중앙로</a> · <a href="치원후등로.html" class="red-link">치원후등로</a></td></tr>
                    <tr><th style="background-color:#aa7799;">ㅍ</th><td><a href="평림로.html" class="red-link">평림로</a> · <a href="포구로.html" class="red-link">포구로</a></td></tr>
                    <tr><th style="background-color:#aa7799;">ㅎ</th><td><a href="하산로.html" class="blue-link">하산로</a> · <a href="해국로.html" class="blue-link">해국로</a> · <a href="해안로.html" class="red-link">해안로</a> · <a href="향교로.html" class="blue-link">향교로</a> · <a href="후등로.html" class="blue-link">후등로</a> · <a href="후등산단로.html" class="red-link">후등산단로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #aa7799;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "천주시 궁하구": `
        <div class="wiki-navbox" style="border-color: #8B4993;">
            <div class="wiki-navbox-header" style="background-color: #8B4993;">
                <div class="header-content">
                    <img src="이미지/천주시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도 천주시</div>
                        <div class="title-main">궁하구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#8B4993;">ㄱ</th><td><a href="견산로.html" class="red-link">견산로</a> · <a href="경전로.html" class="red-link">경전로</a> · <a href="과림역로.html" class="blue-link">과림역로</a> · <a href="궁밑골로.html" class="blue-link">궁밑골로</a> · <a href="궁상로.html" class="blue-link">궁상로</a> · <a href="궁하로.html" class="blue-link">궁하로</a> · <a href="궁항로.html" class="blue-link">궁항로</a> · <a href="근강로.html" class="red-link">근강로</a> · <a href="금수로.html" class="blue-link">금수로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㄷ</th><td><a href="대수로.html" class="red-link">대수로</a> · <a href="대암로.html" class="red-link">대암로</a> · <a href="동결로.html" class="red-link">동결로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅁ</th><td><a href="말수로.html" class="red-link">말수로</a> · <a href="무기로.html" class="red-link">무기로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅂ</th><td><a href="백산로.html" class="red-link">백산로</a> · <a href="번영로.html" class="red-link">번영로</a> · <a href="부중로.html" class="blue-link">부중로</a> · <a href="북방로.html" class="red-link">북방로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅅ</th><td><a href="사야로.html" class="blue-link">사야로</a> · <a href="사향로.html" class="blue-link">사향로</a> · <a href="산중로.html" class="red-link">산중로</a> · <a href="산취역로.html" class="red-link">산취역로</a> · <a href="산취조향로.html" class="blue-link">산취조향로</a> · <a href="삼부로.html" class="red-link">삼부로</a> · <a href="상반로.html" class="red-link">상반로</a> · <a href="서결로.html" class="red-link">서결로</a> · <a href="서란로.html" class="red-link">서란로</a> · <a href="서보로.html" class="red-link">서보로</a> · <a href="서팔로.html" class="red-link">서팔로</a> · <a href="선남로.html" class="red-link">선남로</a> · <a href="세동로.html" class="red-link">세동로</a> · <a href="시곡역로.html" class="red-link">시곡역로</a> · <a href="시청로.html" class="blue-link">시청로</a> · <a href="신토로.html" class="red-link">신토로</a> · <a href="신통로.html" class="blue-link">신통로</a> · <a href="신호로.html" class="red-link">신호로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅇ</th><td><a href="아이산로.html" class="red-link">아이산로</a> · <a href="안팔로.html" class="red-link">안팔로</a> · <a href="야상로.html" class="red-link">야상로</a> · <a href="역전로.html" class="red-link">역전로</a> · <a href="오가로.html" class="red-link">오가로</a> · <a href="오복로.html" class="red-link">오복로</a> · <a href="월원로.html" class="blue-link">월원로</a> · <a href="유소로.html" class="red-link">유소로</a> · <a href="유오로.html" class="blue-link">유오로</a> · <a href="응장로.html" class="red-link">응장로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅈ</th><td><a href="장곡궁하로.html" class="blue-link">장곡궁하로</a> · <a href="장곡해안로.html" class="red-link">장곡해안로</a> · <a href="장근로.html" class="blue-link">장근로</a> · <a href="절천계고로.html" class="blue-link">절천계고로</a> · <a href="주본로.html" class="blue-link">주본로</a> · <a href="중앙로.html" class="red-link">중앙로</a> · <a href="중천로.html" class="blue-link">중천로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅊ</th><td><a href="천간로.html" class="red-link">천간로</a> · <a href="천주로.html" class="blue-link">천주로</a> · <a href="청선중앙로.html" class="blue-link">청선중앙로</a> · <a href="춘일로.html" class="red-link">춘일로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅍ</th><td><a href="판동로.html" class="red-link">판동로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅎ</th><td><a href="하기로.html" class="red-link">하기로</a> · <a href="하동로.html" class="blue-link">하동로</a> · <a href="화천로.html" class="red-link">화천로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #8B4993;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "천주시 천성구": `
        <div class="wiki-navbox" style="border-color: #8B4993;">
            <div class="wiki-navbox-header" style="background-color: #8B4993;">
                <div class="header-content">
                    <img src="이미지/천주시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도 천주시</div>
                        <div class="title-main">천성구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#8B4993;">ㄱ</th><td><a href="건수로.html" class="red-link">건수로</a> · <a href="관아로.html" class="red-link">관아로</a> · <a href="관일로.html" class="blue-link">관일로</a> · <a href="구빈전로.html" class="red-link">구빈전로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㄷ</th><td><a href="답곡로.html" class="red-link">답곡로</a> · <a href="대뢰로.html" class="red-link">대뢰로</a> · <a href="대뢰역로.html" class="red-link">대뢰역로</a> · <a href="대뢰천변로.html" class="blue-link">대뢰천변로</a> · <a href="대화도천로.html" class="red-link">대화도천로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅁ</th><td><a href="마야로.html" class="red-link">마야로</a> · <a href="마연고장로.html" class="red-link">마연고장로</a> · <a href="무기로.html" class="red-link">무기로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅂ</th><td><a href="방상로.html" class="red-link">방상로</a> · <a href="백로리로.html" class="blue-link">백로리로</a> · <a href="번영로.html" class="red-link">번영로</a> · <a href="복천로.html" class="red-link">복천로</a> · <a href="본동로.html" class="blue-link">본동로</a> · <a href="부지로.html" class="red-link">부지로</a> · <a href="비원로.html" class="red-link">비원로</a> · <a href="빈전로.html" class="red-link">빈전로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅅ</th><td><a href="사문로.html" class="blue-link">사문로</a> · <a href="산민로.html" class="red-link">산민로</a> · <a href="상좌로.html" class="red-link">상좌로</a> · <a href="상토여일로.html" class="red-link">상토여일로</a> · <a href="샘성로.html" class="red-link">샘성로</a> · <a href="서란로.html" class="red-link">서란로</a> · <a href="서팔로.html" class="red-link">서팔로</a> · <a href="석전우조로.html" class="red-link">석전우조로</a> · <a href="세지로.html" class="red-link">세지로</a> · <a href="송부산기로.html" class="red-link">송부산기로</a> · <a href="시청로.html" class="blue-link">시청로</a> · <a href="신빈전로.html" class="red-link">신빈전로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅇ</th><td><a href="악미로.html" class="red-link">악미로</a> · <a href="역전로.html" class="red-link">역전로</a> · <a href="엽월리로.html" class="red-link">엽월리로</a> · <a href="원동로.html" class="blue-link">원동로</a> · <a href="유동로.html" class="blue-link">유동로</a> · <a href="육갑로.html" class="red-link">육갑로</a> · <a href="육갑중앙로.html" class="red-link">육갑중앙로</a> · <a href="윤사로.html" class="red-link">윤사로</a> · <a href="인자리로.html" class="red-link">인자리로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅈ</th><td><a href="장곡궁하로.html" class="blue-link">장곡궁하로</a> · <a href="장곡해안로.html" class="red-link">장곡해안로</a> · <a href="장근로.html" class="blue-link">장근로</a> · <a href="장방로.html" class="red-link">장방로</a> · <a href="장소당뢰로.html" class="red-link">장소당뢰로</a> · <a href="정법로.html" class="red-link">정법로</a> · <a href="주언로.html" class="red-link">주언로</a> · <a href="중앙로.html" class="red-link">중앙로</a> · <a href="중전로.html" class="blue-link">중전로</a> · <a href="지굴녹하로.html" class="red-link">지굴녹하로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅊ</th><td><a href="천대등려로.html" class="red-link">천대등려로</a> · <a href="천동로.html" class="red-link">천동로</a> · <a href="천성역로.html" class="blue-link">천성역로</a> · <a href="천주로.html" class="blue-link">천주로</a> · <a href="천합우처로.html" class="red-link">천합우처로</a> · <a href="체육관로.html" class="red-link">체육관로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅋ</th><td><a href="컨벤션센터로.html" class="red-link">컨벤션센터로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅍ</th><td><a href="팔번로.html" class="red-link">팔번로</a> · <a href="팔호로.html" class="red-link">팔호로</a> · <a href="팔호호수로.html" class="red-link">팔호호수로</a> · <a href="평온로.html" class="blue-link">평온로</a></td></tr>
                    <tr><th style="background-color:#8B4993;">ㅎ</th><td><a href="하좌로.html" class="blue-link">하좌로</a> · <a href="한지로.html" class="red-link">한지로</a> · <a href="호산리로.html" class="red-link">호산리로</a> · <a href="후촌로.html" class="red-link">후촌로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #8B4993;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "빈주시 빈성구": `
        <div class="wiki-navbox" style="border-color: #ffeeaa;">
            <div class="wiki-navbox-header" style="background-color: #ffeeaa;">
                <div class="header-content">
                    <img src="이미지/빈주시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도 빈주시</div>
                        <div class="title-main">빈성구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#ffeeaa;">ㄱ</th><td><a href="건덕로.html" class="red-link">건덕로</a> · <a href="경전로.html" class="red-link">경전로</a> · <a href="계성-빈주고속화도로.html" class="blue-link">계성-빈주고속화도로</a> · <a href="고전면로.html" class="red-link">고전면로</a> · <a href="과학고로.html" class="red-link">과학고로</a> · <a href="관동로.html" class="blue-link">관동로</a> · <a href="교원로.html" class="red-link">교원로</a> · <a href="구가로.html" class="red-link">구가로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㄴ</th><td><a href="남면로.html" class="red-link">남면로</a> · <a href="내성로.html" class="blue-link">내성로</a> · <a href="늑골로.html" class="red-link">늑골로</a> · <a href="능성로.html" class="red-link">능성로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㄷ</th><td><a href="동면로.html" class="red-link">동면로</a> · <a href="동산호양로.html" class="red-link">동산호양로</a> · <a href="동신로.html" class="red-link">동신로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅁ</th><td><a href="명화관음로.html" class="blue-link">명화관음로</a> · <a href="모시로.html" class="red-link">모시로</a> · <a href="무장로.html" class="blue-link">무장로</a> · <a href="문내로.html" class="red-link">문내로</a> · <a href="문사로.html" class="red-link">문사로</a> · <a href="문외로.html" class="red-link">문외로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅂ</th><td><a href="법원로.html" class="red-link">법원로</a> · <a href="보전로.html" class="red-link">보전로</a> · <a href="본동로.html" class="blue-link">본동로</a> · <a href="빈성공원로.html" class="red-link">빈성공원로</a> · <a href="빈성로.html" class="blue-link">빈성로</a> · <a href="빈주로.html" class="blue-link">빈주로</a> · <a href="빛난골로.html" class="red-link">빛난골로</a> · <a href="빛날재로.html" class="red-link">빛날재로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅅ</th><td><a href="사능로.html" class="red-link">사능로</a> · <a href="사민로.html" class="blue-link">사민로</a> · <a href="사증로.html" class="blue-link">사증로</a> · <a href="산구로.html" class="red-link">산구로</a> · <a href="산왕로.html" class="red-link">산왕로</a> · <a href="삼산로.html" class="red-link">삼산로</a> · <a href="서구로.html" class="red-link">서구로</a> · <a href="서나로.html" class="red-link">서나로</a> · <a href="서증로.html" class="blue-link">서증로</a> · <a href="승루로.html" class="blue-link">승루로</a> · <a href="시능로.html" class="red-link">시능로</a> · <a href="시청로.html" class="blue-link">시청로</a> · <a href="신성로.html" class="blue-link">신성로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅇ</th><td><a href="압전로.html" class="red-link">압전로</a> · <a href="약궁로.html" class="blue-link">약궁로</a> · <a href="여사로.html" class="red-link">여사로</a> · <a href="여연로.html" class="red-link">여연로</a> · <a href="여연호수로.html" class="red-link">여연호수로</a> · <a href="역전광장로.html" class="red-link">역전광장로</a> · <a href="웅읍로.html" class="red-link">웅읍로</a> · <a href="율곡로.html" class="red-link">율곡로</a> · <a href="율삼사락로.html" class="blue-link">율삼사락로</a> · <a href="이은로.html" class="red-link">이은로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅈ</th><td><a href="전상로.html" class="blue-link">전상로</a> · <a href="제가로.html" class="blue-link">제가로</a> · <a href="중성로.html" class="red-link">중성로</a> · <a href="중앙동로.html" class="blue-link">중앙동로</a> · <a href="지산로.html" class="blue-link">지산로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅊ</th><td><a href="차당로.html" class="blue-link">차당로</a> · <a href="차랑로.html" class="blue-link">차랑로</a> · <a href="창광로.html" class="red-link">창광로</a> · <a href="촌동로.html" class="red-link">촌동로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅋ</th><td><a href="컨벤션센터로.html" class="red-link">컨벤션센터로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅍ</th><td><a href="포시로.html" class="red-link">포시로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅎ</th><td><a href="향교로.html" class="blue-link">향교로</a> · <a href="호판어소로.html" class="red-link">호판어소로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #ffeeaa;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "빈주시 가원구": `
        <div class="wiki-navbox" style="border-color: #ffeeaa;">
            <div class="wiki-navbox-header" style="background-color: #ffeeaa;">
                <div class="header-content">
                    <img src="이미지/빈주시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도 빈주시</div>
                        <div class="title-main">가원구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#ffeeaa;">ㄱ</th><td><a href="가원도서관로.html" class="blue-link">가원도서관로</a> · <a href="계성-빈주고속화도로.html" class="blue-link">계성-빈주고속화도로</a> · <a href="고사로.html" class="blue-link">고사로</a> · <a href="구생로.html" class="red-link">구생로</a> · <a href="구청로.html" class="red-link">구청로</a> · <a href="궁성로.html" class="red-link">궁성로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㄴ</th><td><a href="나다로.html" class="red-link">나다로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㄷ</th><td><a href="더벌로.html" class="blue-link">더벌로</a> · <a href="덕빈로.html" class="red-link">덕빈로</a> · <a href="도립병원로.html" class="blue-link">도립병원로</a> · <a href="도청로.html" class="red-link">도청로</a> · <a href="동태로.html" class="red-link">동태로</a> · <a href="등천로.html" class="red-link">등천로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅁ</th><td><a href="문화광장로.html" class="red-link">문화광장로</a> · <a href="민산로.html" class="blue-link">민산로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅂ</th><td><a href="백조로.html" class="blue-link">백조로</a> · <a href="빈주로.html" class="blue-link">빈주로</a> · <a href="빛난골로.html" class="red-link">빛난골로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅅ</th><td><a href="사료로.html" class="red-link">사료로</a> · <a href="상만로.html" class="red-link">상만로</a> · <a href="상만중앙로.html" class="blue-link">상만중앙로</a> · <a href="서원동1가로.html" class="red-link">서원동1가로</a> · <a href="서원동2가로.html" class="blue-link">서원동2가로</a> · <a href="서원로.html" class="blue-link">서원로</a> · <a href="서원학교로.html" class="red-link">서원학교로</a> · <a href="석타로.html" class="red-link">석타로</a> · <a href="수곡로.html" class="blue-link">수곡로</a> · <a href="수곡천로.html" class="red-link">수곡천로</a> · <a href="수옥로.html" class="blue-link">수옥로</a> · <a href="수옥역로.html" class="red-link">수옥역로</a> · <a href="시래로.html" class="blue-link">시래로</a> · <a href="신굴로.html" class="red-link">신굴로</a> · <a href="신전로.html" class="blue-link">신전로</a> · <a href="쌍엽로.html" class="blue-link">쌍엽로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅇ</th><td><a href="아논로.html" class="red-link">아논로</a> · <a href="아논역로.html" class="red-link">아논역로</a> · <a href="아천로.html" class="red-link">아천로</a> · <a href="애산로.html" class="red-link">애산로</a> · <a href="여초로.html" class="red-link">여초로</a> · <a href="여초역로.html" class="red-link">여초역로</a> · <a href="역천로.html" class="red-link">역천로</a> · <a href="영화로.html" class="red-link">영화로</a> · <a href="예비군로.html" class="blue-link">예비군로</a> · <a href="예술당로.html" class="blue-link">예술당로</a> · <a href="외성로.html" class="red-link">외성로</a> · <a href="육미로.html" class="red-link">육미로</a> · <a href="율원로.html" class="red-link">율원로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅈ</th><td><a href="자창로.html" class="red-link">자창로</a> · <a href="제강로.html" class="blue-link">제강로</a> · <a href="주전로.html" class="blue-link">주전로</a> · <a href="주전중앙로.html" class="red-link">주전중앙로</a> · <a href="중은로.html" class="blue-link">중은로</a> · <a href="증림로.html" class="red-link">증림로</a> · <a href="지미로.html" class="red-link">지미로</a> · <a href="지미역로.html" class="red-link">지미역로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅊ</th><td><a href="천남공원로.html" class="red-link">천남공원로</a> · <a href="천남로.html" class="red-link">천남로</a> · <a href="천남역로.html" class="red-link">천남역로</a> · <a href="천음로.html" class="red-link">천음로</a> · <a href="천조로.html" class="red-link">천조로</a> · <a href="천조역로.html" class="blue-link">천조역로</a> · <a href="첨단로.html" class="red-link">첨단로</a> · <a href="칠좌로.html" class="red-link">칠좌로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅋ</th><td><a href="컨벤션로.html" class="red-link">컨벤션로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅌ</th><td><a href="태창로.html" class="blue-link">태창로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅍ</th><td><a href="판진로.html" class="blue-link">판진로</a> · <a href="풍은로.html" class="red-link">풍은로</a> · <a href="풍은물류로.html" class="red-link">풍은물류로</a> · <a href="풍은역로.html" class="red-link">풍은역로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅎ</th><td><a href="학문로.html" class="blue-link">학문로</a> · <a href="학원가로.html" class="blue-link">학원가로</a> · <a href="향교로.html" class="blue-link">향교로</a> · <a href="현권로.html" class="red-link">현권로</a> · <a href="협산로.html" class="red-link">협산로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #ffeeaa;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "빈주시 장기구": `
        <div class="wiki-navbox" style="border-color: #ffeeaa;">
            <div class="wiki-navbox-header" style="background-color: #ffeeaa;">
                <div class="header-content">
                    <img src="이미지/빈주시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈북도 빈주시</div>
                        <div class="title-main">장기구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#ffeeaa;">ㄱ</th><td><a href="거주로.html" class="red-link">거주로</a> · <a href="계성-빈주고속화도로.html" class="blue-link">계성-빈주고속화도로</a> · <a href="공학로.html" class="red-link">공학로</a> · <a href="기원로.html" class="red-link">기원로</a> · <a href="긴고지로.html" class="red-link">긴고지로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㄴ</th><td><a href="남장기로.html" class="red-link">남장기로</a> · <a href="노동면로.html" class="red-link">노동면로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㄷ</th><td><a href="대정로.html" class="blue-link">대정로</a> · <a href="동습로.html" class="red-link">동습로</a> · <a href="동원로.html" class="blue-link">동원로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅁ</th><td><a href="명태로.html" class="red-link">명태로</a> · <a href="문화회관로.html" class="red-link">문화회관로</a> · <a href="미천로.html" class="red-link">미천로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅂ</th><td><a href="방거로.html" class="red-link">방거로</a> · <a href="보일로.html" class="blue-link">보일로</a> · <a href="북장기로.html" class="blue-link">북장기로</a> · <a href="비라로.html" class="red-link">비라로</a> · <a href="빈주로.html" class="blue-link">빈주로</a> · <a href="빛난골로.html" class="red-link">빛난골로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅅ</th><td><a href="산수로.html" class="blue-link">산수로</a> · <a href="산중로.html" class="red-link">산중로</a> · <a href="상두역로.html" class="red-link">상두역로</a> · <a href="서면로.html" class="blue-link">서면로</a> · <a href="서장기로.html" class="red-link">서장기로</a> · <a href="성내로.html" class="blue-link">성내로</a> · <a href="소요로.html" class="red-link">소요로</a> · <a href="소화구산로.html" class="blue-link">소화구산로</a> · <a href="송도로.html" class="red-link">송도로</a> · <a href="송원읍로.html" class="red-link">송원읍로</a> · <a href="수류로.html" class="red-link">수류로</a> · <a href="시야로.html" class="red-link">시야로</a> · <a href="시집로.html" class="red-link">시집로</a> · <a href="신악로.html" class="red-link">신악로</a> · <a href="신월삼로.html" class="red-link">신월삼로</a> · <a href="신화로.html" class="red-link">신화로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅇ</th><td><a href="예술로.html" class="red-link">예술로</a> · <a href="오죽로.html" class="blue-link">오죽로</a> · <a href="오택읍로.html" class="red-link">오택읍로</a> · <a href="월명로.html" class="blue-link">월명로</a> · <a href="월삼로.html" class="blue-link">월삼로</a> · <a href="월삼역로.html" class="blue-link">월삼역로</a> · <a href="인일로.html" class="red-link">인일로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅈ</th><td><a href="장기구청로.html" class="blue-link">장기구청로</a> · <a href="장기로.html" class="red-link">장기로</a> · <a href="장기역로.html" class="red-link">장기역로</a> · <a href="장기중앙로.html" class="blue-link">장기중앙로</a> · <a href="장기천변로.html" class="red-link">장기천변로</a> · <a href="장산로.html" class="red-link">장산로</a> · <a href="종합병원로.html" class="red-link">종합병원로</a> · <a href="진내로.html" class="blue-link">진내로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅊ</th><td><a href="천기로.html" class="red-link">천기로</a> · <a href="천종로.html" class="blue-link">천종로</a> · <a href="철륜로.html" class="red-link">철륜로</a> · <a href="체육공원로.html" class="red-link">체육공원로</a> · <a href="칠정로.html" class="red-link">칠정로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅍ</th><td><a href="푸른솔로.html" class="blue-link">푸른솔로</a></td></tr>
                    <tr><th style="background-color:#ffeeaa;">ㅎ</th><td><a href="해오름로.html" class="red-link">해오름로</a> · <a href="행복로.html" class="blue-link">행복로</a> · <a href="화면로.html" class="red-link">화면로</a> · <a href="황명로.html" class="red-link">황명로</a> · <a href="황태로.html" class="red-link">황태로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #ffeeaa;">
                    덕빈북도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "덕빈남도 대로": `
        <div class="wiki-navbox" style="border-color: #335566;">
            <div class="wiki-navbox-header" style="background-color: #335566;">
                <div class="header-content">
                    <img src="이미지/덕빈남도_로고.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">덕빈남도 관내 대로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#335566;">ㄱ</th><td><a href="고포대로.html" class="red-link">고포대로</a> · <a href="과기대로.html" class="blue-link">과기대로</a> · <a href="관수대로.html" class="red-link">관수대로</a> · <a href="교대로.html" class="blue-link">교대로</a></td></tr>
                    <tr><th style="background-color:#335566;">ㄴ</th><td><a href="낙덕대로.html" class="blue-link">낙덕대로</a> · <a href="낙마대로.html" class="blue-link">낙마대로</a> · <a href="낙주대로.html" class="blue-link">낙주대로</a></td></tr>
                    <tr><th style="background-color:#335566;">ㄷ</th><td><a href="덕방대로.html" class="red-link">덕방대로</a> · <a href="덕빈대로.html" class="blue-link">덕빈대로</a> · <a href="덕석대로.html" class="red-link">덕석대로</a> · <a href="덕주대로.html" class="blue-link">덕주대로</a> · <a href="덕하대로.html" class="red-link">덕하대로</a></td></tr>
                    <tr><th style="background-color:#335566;">ㅁ</th><td><a href="마낙대로.html" class="red-link">마낙대로</a> · <a href="마진대로.html" class="red-link">마진대로</a> · <a href="매비대로.html" class="red-link">매비대로</a> · <a href="매산대로.html" class="red-link">매산대로</a> · <a href="매성대로.html" class="red-link">매성대로</a></td></tr>
                    <tr><th style="background-color:#335566;">ㅂ</th><td><a href="방덕대로.html" class="blue-link">방덕대로</a> · <a href="방산대로.html" class="red-link">방산대로</a> · <a href="방하대로.html" class="red-link">방하대로</a> · <a href="북원대로.html" class="red-link">북원대로</a> · <a href="분주대로.html" class="red-link">분주대로</a> · <a href="비매대로.html" class="red-link">비매대로</a> · <a href="비석대로.html" class="blue-link">비석대로</a> · <a href="비천대로.html" class="blue-link">비천대로</a></td></tr>
                    <tr><th style="background-color:#335566;">ㅅ</th><td><a href="상능대로.html" class="blue-link">상능대로</a> · <a href="석창대로.html" class="red-link">석창대로</a></td></tr>
                    <tr><th style="background-color:#335566;">ㅇ</th><td><a href="어촌등대로.html" class="blue-link">어촌등대로</a> · <a href="운남대로.html" class="blue-link">운남대로</a> · <a href="운진대로.html" class="red-link">운진대로</a> · <a href="원무대로.html" class="red-link">원무대로</a> · <a href="원비대로.html" class="blue-link">원비대로</a> · <a href="율대로.html" class="red-link">율대로</a> · <a href="인곡대로.html" class="red-link">인곡대로</a></td></tr>
                    <tr><th style="background-color:#335566;">ㅈ</th><td><a href="조전대로.html" class="red-link">조전대로</a></td></tr>
                    <tr><th style="background-color:#335566;">ㅊ</th><td><a href="청정율대로.html" class="red-link">청정율대로</a></td></tr>
                    <tr><th style="background-color:#335566;">ㅎ</th><td><a href="하낙대로.html" class="red-link">하낙대로</a> · <a href="하늘천문대로.html" class="red-link">하늘천문대로</a> · <a href="하정대로.html" class="red-link">하정대로</a> · <a href="해양대로.html" class="red-link">해양대로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #335566;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "매산군": `
        <div class="wiki-navbox" style="border-color: #A0FFF9;">
            <div class="wiki-navbox-header" style="background-color: #A0FFF9;">
                <div class="header-content">
                    <img src="이미지/매산군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">매산군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#A0FFF9;">ㄱ</th><td><a href="강운역로.html" class="blue-link">강운역로</a> · <a href="광곡봉성로.html" class="blue-link">광곡봉성로</a> · <a href="교촌평촌로.html" class="red-link">교촌평촌로</a> · <a href="군선청곡로.html" class="red-link">군선청곡로</a></td></tr>
                    <tr><th style="background-color:#A0FFF9;">ㄴ</th><td><a href="남산동산로.html" class="red-link">남산동산로</a></td></tr>
                    <tr><th style="background-color:#A0FFF9;">ㄷ</th><td><a href="대현농공로.html" class="red-link">대현농공로</a> · <a href="대현역로.html" class="red-link">대현역로</a> · <a href="대현중앙로.html" class="red-link">대현중앙로</a> · <a href="덕신로.html" class="blue-link">덕신로</a></td></tr>
                    <tr><th style="background-color:#A0FFF9;">ㅁ</th><td><a href="매덕로.html" class="blue-link">매덕로</a> · <a href="매비로.html" class="red-link">매비로</a> · <a href="매산로.html" class="red-link">매산로</a> · <a href="매석로.html" class="red-link">매석로</a> · <a href="매화뫼로.html" class="red-link">매화뫼로</a> · <a href="매화산로.html" class="blue-link">매화산로</a> · <a href="무천수청로.html" class="red-link">무천수청로</a></td></tr>
                    <tr><th style="background-color:#A0FFF9;">ㅂ</th><td><a href="백제장암로.html" class="red-link">백제장암로</a></td></tr>
                    <tr><th style="background-color:#A0FFF9;">ㅅ</th><td><a href="산포매화로.html" class="blue-link">산포매화로</a> · <a href="송림금곡로.html" class="red-link">송림금곡로</a> · <a href="시내상촌로.html" class="blue-link">시내상촌로</a> · <a href="신운군천로.html" class="blue-link">신운군천로</a> · <a href="신운로.html" class="red-link">신운로</a> · <a href="신운역로.html" class="blue-link">신운역로</a></td></tr>
                    <tr><th style="background-color:#A0FFF9;">ㅇ</th><td><a href="우곡로.html" class="red-link">우곡로</a> · <a href="월로화전로.html" class="blue-link">월로화전로</a> · <a href="육산로.html" class="red-link">육산로</a> · <a href="율주로.html" class="blue-link">율주로</a> · <a href="율주역로.html" class="red-link">율주역로</a> · <a href="이율로.html" class="red-link">이율로</a> · <a href="이율해안로.html" class="red-link">이율해안로</a></td></tr>
                    <tr><th style="background-color:#A0FFF9;">ㅈ</th><td><a href="조건로.html" class="red-link">조건로</a> · <a href="조건해안로.html" class="red-link">조건해안로</a> · <a href="죽림화산로.html" class="red-link">죽림화산로</a> · <a href="진목대곡로.html" class="red-link">진목대곡로</a></td></tr>
                    <tr><th style="background-color:#A0FFF9;">ㅊ</th><td><a href="채산도암로.html" class="red-link">채산도암로</a></td></tr>
                    <tr><th style="background-color:#A0FFF9;">ㅎ</th><td><a href="해양과학고로.html" class="red-link">해양과학고로</a> · <a href="향교천북로.html" class="red-link">향교천북로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #A0FFF9;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "매성시": `
        <div class="wiki-navbox" style="border-color: #FF6E90;">
            <div class="wiki-navbox-header" style="background-color: #FF6E90;">
                <div class="header-content">
                    <img src="이미지/매성시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">매성시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#FF6E90;">ㄱ</th><td><a href="강만로.html" class="red-link">강만로</a> · <a href="개동로.html" class="blue-link">개동로</a> · <a href="개서로.html" class="red-link">개서로</a> · <a href="고매해안로.html" class="red-link">고매해안로</a> · <a href="규래로.html" class="red-link">규래로</a> · <a href="근암남로.html" class="red-link">근암남로</a> · <a href="근암로.html" class="red-link">근암로</a> · <a href="근암산로.html" class="red-link">근암산로</a></td></tr>
                    <tr><th style="background-color:#FF6E90;">ㄴ</th><td><a href="남산로.html" class="blue-link">남산로</a></td></tr>
                    <tr><th style="background-color:#FF6E90;">ㄷ</th><td><a href="대현로.html" class="blue-link">대현로</a></td></tr>
                    <tr><th style="background-color:#FF6E90;">ㅁ</th><td><a href="매성공단로.html" class="blue-link">매성공단로</a> · <a href="매성로.html" class="red-link">매성로</a> · <a href="매성역로.html" class="red-link">매성역로</a> · <a href="매성천로.html" class="red-link">매성천로</a> · <a href="매영로.html" class="blue-link">매영로</a> · <a href="매율로.html" class="red-link">매율로</a> · <a href="매화산로.html" class="blue-link">매화산로</a> · <a href="매화재로.html" class="blue-link">매화재로</a></td></tr>
                    <tr><th style="background-color:#FF6E90;">ㅂ</th><td><a href="북부로.html" class="red-link">북부로</a></td></tr>
                    <tr><th style="background-color:#FF6E90;">ㅅ</th><td><a href="상운로.html" class="red-link">상운로</a> · <a href="서동로.html" class="red-link">서동로</a> · <a href="수은규리로.html" class="blue-link">수은규리로</a> · <a href="순동로.html" class="red-link">순동로</a> · <a href="시청로.html" class="blue-link">시청로</a> · <a href="식곡로.html" class="blue-link">식곡로</a> · <a href="신운로.html" class="red-link">신운로</a></td></tr>
                    <tr><th style="background-color:#FF6E90;">ㅇ</th><td><a href="예술로.html" class="red-link">예술로</a> · <a href="우음로.html" class="blue-link">우음로</a> · <a href="은행로.html" class="red-link">은행로</a></td></tr>
                    <tr><th style="background-color:#FF6E90;">ㅈ</th><td><a href="장미철쭉로.html" class="red-link">장미철쭉로</a> · <a href="조천로.html" class="blue-link">조천로</a> · <a href="중앙로.html" class="red-link">중앙로</a> · <a href="징산로.html" class="red-link">징산로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #FF6E90;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "비천시": `
        <div class="wiki-navbox" style="border-color: #74F466;">
            <div class="wiki-navbox-header" style="background-color: #74F466;">
                <div class="header-content">
                    <img src="이미지/비천시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">비천시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#74F466;">ㄱ</th><td><a href="고녕로.html" class="red-link">고녕로</a> · <a href="고자덕계로.html" class="red-link">고자덕계로</a> · <a href="괴림방산로.html" class="blue-link">괴림방산로</a> · <a href="괴성로.html" class="red-link">괴성로</a> · <a href="괴평오송로.html" class="blue-link">괴평오송로</a> · <a href="구락로.html" class="red-link">구락로</a> · <a href="구승개림로.html" class="red-link">구승개림로</a></td></tr>
                    <tr><th style="background-color:#74F466;">ㄴ</th><td><a href="날아내로.html" class="red-link">날아내로</a> · <a href="녹정응산로.html" class="red-link">녹정응산로</a></td></tr>
                    <tr><th style="background-color:#74F466;">ㅂ</th><td><a href="벽산로.html" class="red-link">벽산로</a> · <a href="부음로.html" class="blue-link">부음로</a> · <a href="비매산로.html" class="red-link">비매산로</a> · <a href="비원로.html" class="red-link">비원로</a> · <a href="비천로.html" class="red-link">비천로</a> · <a href="비천무안로.html" class="red-link">비천무안로</a> · <a href="비천역로.html" class="red-link">비천역로</a> · <a href="비천영광로.html" class="blue-link">비천영광로</a> · <a href="비천함평로.html" class="red-link">비천함평로</a> · <a href="비천항로.html" class="blue-link">비천항로</a> · <a href="비하로.html" class="red-link">비하로</a></td></tr>
                    <tr><th style="background-color:#74F466;">ㅅ</th><td><a href="서군로.html" class="red-link">서군로</a> · <a href="서호월천로.html" class="red-link">서호월천로</a> · <a href="성두로.html" class="red-link">성두로</a> · <a href="소룡육성로.html" class="red-link">소룡육성로</a> · <a href="소육로.html" class="red-link">소육로</a> · <a href="수국로.html" class="blue-link">수국로</a> · <a href="수성온천로.html" class="blue-link">수성온천로</a></td></tr>
                    <tr><th style="background-color:#74F466;">ㅇ</th><td><a href="안산명월로.html" class="red-link">안산명월로</a> · <a href="운수만호로.html" class="red-link">운수만호로</a> · <a href="울경포경로.html" class="red-link">울경포경로</a> · <a href="율도어은로.html" class="blue-link">율도어은로</a> · <a href="은암로.html" class="red-link">은암로</a></td></tr>
                    <tr><th style="background-color:#74F466;">ㅈ</th><td><a href="장포고산로.html" class="red-link">장포고산로</a> · <a href="진격산로.html" class="blue-link">진격산로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #74F466;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "석창군": `
        <div class="wiki-navbox" style="border-color: #0000A0;">
            <div class="wiki-navbox-header" style="background-color: #0000A0;">
                <div class="header-content">
                    <img src="이미지/석창군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">석창군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#0000A0;">ㄱ</th><td><a href="고산로.html" class="red-link">고산로</a> · <a href="교리이천로.html" class="red-link">교리이천로</a> · <a href="구월목전로.html" class="red-link">구월목전로</a></td></tr>
                    <tr><th style="background-color:#0000A0;">ㄷ</th><td><a href="대성월곡로.html" class="red-link">대성월곡로</a> · <a href="대흥로.html" class="blue-link">대흥로</a> · <a href="대흥역로.html" class="red-link">대흥역로</a> · <a href="돌곳간로.html" class="red-link">돌곳간로</a></td></tr>
                    <tr><th style="background-color:#0000A0;">ㅁ</th><td><a href="매석로.html" class="red-link">매석로</a> · <a href="명성로.html" class="red-link">명성로</a></td></tr>
                    <tr><th style="background-color:#0000A0;">ㅂ</th><td><a href="방석로.html" class="red-link">방석로</a></td></tr>
                    <tr><th style="background-color:#0000A0;">ㅅ</th><td><a href="상자해령로.html" class="red-link">상자해령로</a> · <a href="상촌봉계로.html" class="red-link">상촌봉계로</a> · <a href="석창낭원로.html" class="red-link">석창낭원로</a> · <a href="석창덕현로.html" class="red-link">석창덕현로</a> · <a href="석창로.html" class="blue-link">석창로</a> · <a href="석창역로.html" class="blue-link">석창역로</a> · <a href="송림신원로.html" class="red-link">송림신원로</a> · <a href="시계극산로.html" class="blue-link">시계극산로</a> · <a href="신도대곡로.html" class="red-link">신도대곡로</a></td></tr>
                    <tr><th style="background-color:#0000A0;">ㅇ</th><td><a href="언정로.html" class="red-link">언정로</a> · <a href="오안로.html" class="red-link">오안로</a> · <a href="옥산팔번로.html" class="red-link">옥산팔번로</a> · <a href="외진시내로.html" class="red-link">외진시내로</a> · <a href="용계덕암로.html" class="red-link">용계덕암로</a> · <a href="월송봉서로.html" class="red-link">월송봉서로</a> · <a href="유천풍천로.html" class="blue-link">유천풍천로</a> · <a href="읍악로.html" class="red-link">읍악로</a> · <a href="임곡봉경로.html" class="blue-link">임곡봉경로</a></td></tr>
                    <tr><th style="background-color:#0000A0;">ㅈ</th><td><a href="조취로.html" class="red-link">조취로</a> · <a href="진목월로로.html" class="red-link">진목월로로</a></td></tr>
                    <tr><th style="background-color:#0000A0;">ㅊ</th><td><a href="천북매원로.html" class="red-link">천북매원로</a> · <a href="칠곡상평로.html" class="red-link">칠곡상평로</a></td></tr>
                    <tr><th style="background-color:#0000A0;">ㅎ</th><td><a href="하석로.html" class="red-link">하석로</a> · <a href="해룡산지로.html" class="blue-link">해룡산지로</a> · <a href="화산평리로.html" class="blue-link">화산평리로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #0000A0;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

        "방산시": `
        <div class="wiki-navbox" style="border-color: #FFF442;">
            <div class="wiki-navbox-header" style="background-color: #FFF442;">
                <div class="header-content">
                    <img src="이미지/방산시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">방산시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#FFF442;">ㄱ</th><td><a href="계촌로.html" class="red-link">계촌로</a> · <a href="구암백산로.html" class="red-link">구암백산로</a> · <a href="국방기술로.html" class="blue-link">국방기술로</a></td></tr>
                    <tr><th style="background-color:#FFF442;">ㄴ</th><td><a href="낭방로.html" class="red-link">낭방로</a> · <a href="내주로.html" class="red-link">내주로</a> · <a href="냉천로.html" class="red-link">냉천로</a></td></tr>
                    <tr><th style="background-color:#FFF442;">ㄷ</th><td><a href="대양상리로.html" class="red-link">대양상리로</a> · <a href="덕도곡로.html" class="red-link">덕도곡로</a> · <a href="덕빈폴리텍로.html" class="red-link">덕빈폴리텍로</a> · <a href="덕주방산로.html" class="red-link">덕주방산로</a> · <a href="도수로.html" class="red-link">도수로</a> · <a href="동공로.html" class="red-link">동공로</a></td></tr>
                    <tr><th style="background-color:#FFF442;">ㅁ</th><td><a href="매전로.html" class="blue-link">매전로</a> · <a href="모뫼로.html" class="red-link">모뫼로</a> · <a href="무산로.html" class="blue-link">무산로</a> · <a href="미강로.html" class="blue-link">미강로</a></td></tr>
                    <tr><th style="background-color:#FFF442;">ㅂ</th><td><a href="방매로.html" class="blue-link">방매로</a> · <a href="방산역로.html" class="red-link">방산역로</a> · <a href="방석로.html" class="red-link">방석로</a> · <a href="복산야리로.html" class="red-link">복산야리로</a></td></tr>
                    <tr><th style="background-color:#FFF442;">ㅅ</th><td><a href="상운하운로.html" class="blue-link">상운하운로</a> · <a href="색내신광로.html" class="red-link">색내신광로</a> · <a href="서중대학로.html" class="blue-link">서중대학로</a> · <a href="서중로.html" class="red-link">서중로</a> · <a href="서중역로.html" class="red-link">서중역로</a> · <a href="석원로.html" class="red-link">석원로</a> · <a href="성동화봉로.html" class="red-link">성동화봉로</a> · <a href="송지로.html" class="red-link">송지로</a> · <a href="수궁로.html" class="red-link">수궁로</a> · <a href="시방로.html" class="blue-link">시방로</a> · <a href="시청로.html" class="blue-link">시청로</a></td></tr>
                    <tr><th style="background-color:#FFF442;">ㅇ</th><td><a href="약송로.html" class="blue-link">약송로</a> · <a href="약원로.html" class="red-link">약원로</a> · <a href="양복로.html" class="red-link">양복로</a> · <a href="원강로.html" class="red-link">원강로</a> · <a href="원주로.html" class="blue-link">원주로</a></td></tr>
                    <tr><th style="background-color:#FFF442;">ㅈ</th><td><a href="장교축진로.html" class="blue-link">장교축진로</a> · <a href="장수산로.html" class="red-link">장수산로</a> · <a href="정수로.html" class="red-link">정수로</a> · <a href="주강로.html" class="red-link">주강로</a></td></tr>
                    <tr><th style="background-color:#FFF442;">ㅊ</th><td><a href="청전로.html" class="red-link">청전로</a></td></tr>
                    <tr><th style="background-color:#FFF442;">ㅌ</th><td><a href="탕천로.html" class="red-link">탕천로</a></td></tr>
                    <tr><th style="background-color:#FFF442;">ㅎ</th><td><a href="하소로.html" class="blue-link">하소로</a> · <a href="화정송천로.html" class="red-link">화정송천로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #FFF442;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,"분주군": `
        <div class="wiki-navbox" style="border-color: #FF3535;">
            <div class="wiki-navbox-header" style="background-color: #FF3535;">
                <div class="header-content">
                    <img src="이미지/분주군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">분주군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#FF3535;">ㄱ</th><td><a href="갈래골로.html" class="red-link">갈래골로</a> · <a href="강변신흥로.html" class="blue-link">강변신흥로</a> · <a href="고인돌학당로.html" class="red-link">고인돌학당로</a> · <a href="관수분주로.html" class="red-link">관수분주로</a> · <a href="광덕노곡로.html" class="red-link">광덕노곡로</a> · <a href="광천북산로.html" class="blue-link">광천북산로</a> · <a href="구포장재로.html" class="red-link">구포장재로</a></td></tr>
                    <tr><th style="background-color:#FF3535;">ㄴ</th><td><a href="나천로.html" class="red-link">나천로</a> · <a href="남강동구로.html" class="red-link">남강동구로</a></td></tr>
                    <tr><th style="background-color:#FF3535;">ㄷ</th><td><a href="대자로.html" class="red-link">대자로</a> · <a href="대평월봉로.html" class="blue-link">대평월봉로</a> · <a href="덕산진산로.html" class="blue-link">덕산진산로</a> · <a href="동산명월로.html" class="blue-link">동산명월로</a></td></tr>
                    <tr><th style="background-color:#FF3535;">ㅁ</th><td><a href="매화송죽로.html" class="red-link">매화송죽로</a></td></tr>
                    <tr><th style="background-color:#FF3535;">ㅂ</th><td><a href="복천용호로.html" class="red-link">복천용호로</a> · <a href="분주관수로.html" class="blue-link">분주관수로</a> · <a href="분주덕주로.html" class="red-link">분주덕주로</a> · <a href="분주마진로.html" class="blue-link">분주마진로</a> · <a href="분주인곡로.html" class="red-link">분주인곡로</a> · <a href="분주터미널로.html" class="blue-link">분주터미널로</a> · <a href="분주해안로.html" class="red-link">분주해안로</a></td></tr>
                    <tr><th style="background-color:#FF3535;">ㅅ</th><td><a href="사동오지로.html" class="red-link">사동오지로</a> · <a href="생명과학고로.html" class="red-link">생명과학고로</a> · <a href="서강화평로.html" class="blue-link">서강화평로</a> · <a href="석교송림로.html" class="red-link">석교송림로</a> · <a href="수안영신로.html" class="red-link">수안영신로</a> · <a href="시장구교로.html" class="red-link">시장구교로</a> · <a href="신안로.html" class="red-link">신안로</a></td></tr>
                    <tr><th style="background-color:#FF3535;">ㅇ</th><td><a href="원구로.html" class="blue-link">원구로</a> · <a href="이복로.html" class="red-link">이복로</a> · <a href="인곡분주로.html" class="blue-link">인곡분주로</a></td></tr>
                    <tr><th style="background-color:#FF3535;">ㅈ</th><td><a href="장안옥수로.html" class="red-link">장안옥수로</a> · <a href="정남로.html" class="red-link">정남로</a> · <a href="정동로.html" class="red-link">정동로</a> · <a href="중동신평로.html" class="blue-link">중동신평로</a> · <a href="중앙로.html" class="red-link">중앙로</a></td></tr>
                    <tr><th style="background-color:#FF3535;">ㅊ</th><td><a href="창동율곡로.html" class="blue-link">창동율곡로</a> · <a href="체육로.html" class="red-link">체육로</a></td></tr>
                    <tr><th style="background-color:#FF3535;">ㅍ</th><td><a href="평미로.html" class="red-link">평미로</a> · <a href="평화행복로.html" class="blue-link">평화행복로</a></td></tr>
                    <tr><th style="background-color:#FF3535;">ㅎ</th><td><a href="하권로.html" class="red-link">하권로</a> · <a href="해양과학고로.html" class="red-link">해양과학고로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #FF3535;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "고포군": `
        <div class="wiki-navbox" style="border-color: #B2FFDD;">
            <div class="wiki-navbox-header" style="background-color: #B2FFDD;">
                <div class="header-content">
                    <img src="이미지/고포군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">고포군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#B2FFDD;">ㄱ</th><td><a href="광곡교리로.html" class="red-link">광곡교리로</a> · <a href="광암신암로.html" class="blue-link">광암신암로</a> · <a href="광암천암로.html" class="red-link">광암천암로</a> · <a href="광화용수로.html" class="red-link">광화용수로</a> · <a href="구월매원로.html" class="red-link">구월매원로</a></td></tr>
                    <tr><th style="background-color:#B2FFDD;">ㄴ</th><td><a href="남산대곡로.html" class="red-link">남산대곡로</a> · <a href="높은개로.html" class="blue-link">높은개로</a></td></tr>
                    <tr><th style="background-color:#B2FFDD;">ㄷ</th><td><a href="대곡촌신평로.html" class="blue-link">대곡촌신평로</a> · <a href="대산로.html" class="blue-link">대산로</a> · <a href="동리로.html" class="red-link">동리로</a> · <a href="동원남북로.html" class="red-link">동원남북로</a> · <a href="동원대교로.html" class="red-link">동원대교로</a> · <a href="동원로.html" class="blue-link">동원로</a></td></tr>
                    <tr><th style="background-color:#B2FFDD;">ㅁ</th><td><a href="무량신월로.html" class="red-link">무량신월로</a></td></tr>
                    <tr><th style="background-color:#B2FFDD;">ㅂ</th><td><a href="백제칠곡로.html" class="red-link">백제칠곡로</a> · <a href="봉서봉성로.html" class="red-link">봉서봉성로</a> · <a href="북부로.html" class="red-link">북부로</a></td></tr>
                    <tr><th style="background-color:#B2FFDD;">ㅅ</th><td><a href="상하평로.html" class="blue-link">상하평로</a> · <a href="서리신덕로.html" class="red-link">서리신덕로</a> · <a href="수도신암로.html" class="blue-link">수도신암로</a> · <a href="신성로.html" class="blue-link">신성로</a></td></tr>
                    <tr><th style="background-color:#B2FFDD;">ㅇ</th><td><a href="오수덕암로.html" class="red-link">오수덕암로</a> · <a href="월매율정로.html" class="red-link">월매율정로</a> · <a href="월송평촌로.html" class="blue-link">월송평촌로</a></td></tr>
                    <tr><th style="background-color:#B2FFDD;">ㅈ</th><td><a href="죽산임곡로.html" class="blue-link">죽산임곡로</a> · <a href="중산로.html" class="red-link">중산로</a> · <a href="지산천북로.html" class="red-link">지산천북로</a></td></tr>
                    <tr><th style="background-color:#B2FFDD;">ㅊ</th><td><a href="칠암로.html" class="blue-link">칠암로</a></td></tr>
                    <tr><th style="background-color:#B2FFDD;">ㅍ</th><td><a href="포선대교로.html" class="red-link">포선대교로</a> · <a href="포선로.html" class="blue-link">포선로</a></td></tr>
                    <tr><th style="background-color:#B2FFDD;">ㅎ</th><td><a href="항만로.html" class="red-link">항만로</a> · <a href="해양과학고로.html" class="red-link">해양과학고로</a> · <a href="향교로.html" class="blue-link">향교로</a> · <a href="화암이천로.html" class="blue-link">화암이천로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #B2FFDD;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "곡천군": `
        <div class="wiki-navbox" style="border-color: #FF51C4;">
            <div class="wiki-navbox-header" style="background-color: #FF51C4;">
                <div class="header-content">
                    <img src="이미지/곡천군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">곡천군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#FF51C4;">ㄱ</th><td><a href="곡천공단로.html" class="red-link">곡천공단로</a> · <a href="곡천관수로.html" class="blue-link">곡천관수로</a> · <a href="곡천중앙로.html" class="red-link">곡천중앙로</a> · <a href="관수곡천로.html" class="red-link">관수곡천로</a> · <a href="굽이개로.html" class="red-link">굽이개로</a></td></tr>
                    <tr><th style="background-color:#FF51C4;">ㄴ</th><td><a href="남천고포로.html" class="blue-link">남천고포로</a> · <a href="남천로.html" class="red-link">남천로</a></td></tr>
                    <tr><th style="background-color:#FF51C4;">ㄷ</th><td><a href="덕암화암로.html" class="blue-link">덕암화암로</a> · <a href="도암복성로.html" class="red-link">도암복성로</a></td></tr>
                    <tr><th style="background-color:#FF51C4;">ㅂ</th><td><a href="백제구월로.html" class="red-link">백제구월로</a> · <a href="봉암화전로.html" class="red-link">봉암화전로</a> · <a href="북동로.html" class="blue-link">북동로</a> · <a href="북동인곡로.html" class="red-link">북동인곡로</a></td></tr>
                    <tr><th style="background-color:#FF51C4;">ㅅ</th><td><a href="사곡로.html" class="blue-link">사곡로</a> · <a href="상촌삼계로.html" class="blue-link">상촌삼계로</a> · <a href="상하금로.html" class="red-link">상하금로</a> · <a href="송림교촌로.html" class="blue-link">송림교촌로</a> · <a href="시내봉계로.html" class="red-link">시내봉계로</a> · <a href="신도대곡로.html" class="red-link">신도대곡로</a> · <a href="신암로.html" class="red-link">신암로</a> · <a href="신평월송로.html" class="blue-link">신평월송로</a></td></tr>
                    <tr><th style="background-color:#FF51C4;">ㅇ</th><td><a href="오수봉서로.html" class="blue-link">오수봉서로</a> · <a href="옥산신원로.html" class="red-link">옥산신원로</a> · <a href="용계광암로.html" class="red-link">용계광암로</a> · <a href="용수로.html" class="red-link">용수로</a> · <a href="월매로.html" class="red-link">월매로</a> · <a href="이천교리로.html" class="blue-link">이천교리로</a> · <a href="인곡곡천로.html" class="red-link">인곡곡천로</a></td></tr>
                    <tr><th style="background-color:#FF51C4;">ㅈ</th><td><a href="중곡로.html" class="red-link">중곡로</a></td></tr>
                    <tr><th style="background-color:#FF51C4;">ㅊ</th><td><a href="창평석교로.html" class="blue-link">창평석교로</a> · <a href="칠곡산지로.html" class="red-link">칠곡산지로</a> · <a href="칠암수덕로.html" class="blue-link">칠암수덕로</a></td></tr>
                    <tr><th style="background-color:#FF51C4;">ㅍ</th><td><a href="평촌로.html" class="blue-link">평촌로</a></td></tr>
                    <tr><th style="background-color:#FF51C4;">ㅎ</th><td><a href="하북로.html" class="red-link">하북로</a> · <a href="하북해안로.html" class="red-link">하북해안로</a> · <a href="하서로.html" class="red-link">하서로</a> · <a href="화산죽림로.html" class="red-link">화산죽림로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #FF51C4;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "인곡군": `
        <div class="wiki-navbox" style="border-color: #4cd2e2;">
            <div class="wiki-navbox-header" style="background-color: #4cd2e2;">
                <div class="header-content">
                    <img src="이미지/인곡군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">인곡군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#4cd2e2;">ㄱ</th><td><a href="가천청평로.html" class="red-link">가천청평로</a> · <a href="거남로.html" class="blue-link">거남로</a> · <a href="고소종람로.html" class="red-link">고소종람로</a> · <a href="고신고천로.html" class="blue-link">고신고천로</a> · <a href="공단첨단로.html" class="red-link">공단첨단로</a> · <a href="관수인곡로.html" class="red-link">관수인곡로</a> · <a href="귀두피방로.html" class="blue-link">귀두피방로</a></td></tr>
                    <tr><th style="background-color:#4cd2e2;">ㄴ</th><td><a href="남산대동로.html" class="red-link">남산대동로</a> · <a href="낭염낭산로.html" class="red-link">낭염낭산로</a></td></tr>
                    <tr><th style="background-color:#4cd2e2;">ㄷ</th><td><a href="대건건평로.html" class="red-link">대건건평로</a> · <a href="대건공업고로.html" class="red-link">대건공업고로</a> · <a href="대흥장재로.html" class="blue-link">대흥장재로</a></td></tr>
                    <tr><th style="background-color:#4cd2e2;">ㅁ</th><td><a href="미아말우로.html" class="blue-link">미아말우로</a></td></tr>
                    <tr><th style="background-color:#4cd2e2;">ㅂ</th><td><a href="백마석산로.html" class="red-link">백마석산로</a> · <a href="분주인곡로.html" class="red-link">분주인곡로</a></td></tr>
                    <tr><th style="background-color:#4cd2e2;">ㅅ</th><td><a href="산곡이곡로.html" class="red-link">산곡이곡로</a> · <a href="서부북평로.html" class="red-link">서부북평로</a> · <a href="소유하애로.html" class="red-link">소유하애로</a> · <a href="소정북촌로.html" class="blue-link">소정북촌로</a> · <a href="속류로.html" class="red-link">속류로</a> · <a href="시오시내로.html" class="red-link">시오시내로</a> · <a href="신천구암로.html" class="red-link">신천구암로</a> · <a href="신흥구룡로.html" class="red-link">신흥구룡로</a></td></tr>
                    <tr><th style="background-color:#4cd2e2;">ㅇ</th><td><a href="어진골로.html" class="red-link">어진골로</a> · <a href="염전간자로.html" class="red-link">염전간자로</a> · <a href="오성산수로.html" class="blue-link">오성산수로</a> · <a href="웅포용호로.html" class="red-link">웅포용호로</a> · <a href="인곡곡천로.html" class="red-link">인곡곡천로</a> · <a href="인곡관수로.html" class="red-link">인곡관수로</a> · <a href="인곡분주로.html" class="blue-link">인곡분주로</a> · <a href="인곡터미널로.html" class="red-link">인곡터미널로</a> · <a href="인곡해안로.html" class="red-link">인곡해안로</a></td></tr>
                    <tr><th style="background-color:#4cd2e2;">ㅈ</th><td><a href="장곡신창로.html" class="red-link">장곡신창로</a> · <a href="중앙역전로.html" class="red-link">중앙역전로</a></td></tr>
                    <tr><th style="background-color:#4cd2e2;">ㅎ</th><td><a href="해변해양고로.html" class="blue-link">해변해양고로</a> · <a href="호수봉화로.html" class="red-link">호수봉화로</a> · <a href="화계평천로.html" class="blue-link">화계평천로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #4cd2e2;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "관수군": `
        <div class="wiki-navbox" style="border-color: #e49dfd;">
            <div class="wiki-navbox-header" style="background-color: #e49dfd;">
                <div class="header-content">
                    <img src="이미지/관수군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">관수군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#e49dfd;">ㄱ</th><td><a href="갓물로.html" class="red-link">갓물로</a> · <a href="경암도암로.html" class="red-link">경암도암로</a> · <a href="고수대룡로.html" class="blue-link">고수대룡로</a> · <a href="곡천관수로.html" class="blue-link">곡천관수로</a> · <a href="관수곡천로.html" class="red-link">관수곡천로</a> · <a href="관수공업고로.html" class="blue-link">관수공업고로</a> · <a href="관수두원로.html" class="red-link">관수두원로</a> · <a href="관수마진로.html" class="red-link">관수마진로</a> · <a href="관수분주로.html" class="red-link">관수분주로</a> · <a href="관수역로.html" class="blue-link">관수역로</a> · <a href="관수운진로.html" class="red-link">관수운진로</a> · <a href="관수인곡로.html" class="red-link">관수인곡로</a> · <a href="관수항로.html" class="red-link">관수항로</a> · <a href="광암신평로.html" class="blue-link">광암신평로</a> · <a href="극산로.html" class="blue-link">극산로</a> · <a href="금담로.html" class="blue-link">금담로</a> · <a href="금진로.html" class="red-link">금진로</a></td></tr>
                    <tr><th style="background-color:#e49dfd;">ㄴ</th><td><a href="남리북리로.html" class="red-link">남리북리로</a> · <a href="남산송정로.html" class="blue-link">남산송정로</a></td></tr>
                    <tr><th style="background-color:#e49dfd;">ㄷ</th><td><a href="대성삼계로.html" class="red-link">대성삼계로</a> · <a href="동리서리로.html" class="red-link">동리서리로</a> · <a href="두원관수로.html" class="blue-link">두원관수로</a></td></tr>
                    <tr><th style="background-color:#e49dfd;">ㅁ</th><td><a href="매화산포로.html" class="blue-link">매화산포로</a></td></tr>
                    <tr><th style="background-color:#e49dfd;">ㅂ</th><td><a href="백제월곡로.html" class="blue-link">백제월곡로</a> · <a href="봉암상촌로.html" class="red-link">봉암상촌로</a> · <a href="북원공단로.html" class="red-link">북원공단로</a> · <a href="분주관수로.html" class="blue-link">분주관수로</a></td></tr>
                    <tr><th style="background-color:#e49dfd;">ㅅ</th><td><a href="수도대평로.html" class="red-link">수도대평로</a> · <a href="실주로.html" class="red-link">실주로</a></td></tr>
                    <tr><th style="background-color:#e49dfd;">ㅇ</th><td><a href="여원로.html" class="red-link">여원로</a> · <a href="용계죽산로.html" class="red-link">용계죽산로</a> · <a href="운진관수로.html" class="blue-link">운진관수로</a> · <a href="원단로.html" class="red-link">원단로</a> · <a href="월로자연로.html" class="blue-link">월로자연로</a> · <a href="월매신덕정로.html" class="red-link">월매신덕정로</a> · <a href="월송봉서로.html" class="red-link">월송봉서로</a> · <a href="율대청정로.html" class="red-link">율대청정로</a> · <a href="인곡관수로.html" class="red-link">인곡관수로</a></td></tr>
                    <tr><th style="background-color:#e49dfd;">ㅈ</th><td><a href="조원로.html" class="blue-link">조원로</a> · <a href="지산향교로.html" class="red-link">지산향교로</a> · <a href="진목서리로.html" class="blue-link">진목서리로</a></td></tr>
                    <tr><th style="background-color:#e49dfd;">ㅊ</th><td><a href="천암골구월로.html" class="red-link">천암골구월로</a> · <a href="칠곡백정로.html" class="red-link">칠곡백정로</a></td></tr>
                    <tr><th style="background-color:#e49dfd;">ㅎ</th><td><a href="황강로.html" class="red-link">황강로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #e49dfd;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "운진군": `
        <div class="wiki-navbox" style="border-color: #bbff64;">
            <div class="wiki-navbox-header" style="background-color: #bbff64;">
                <div class="header-content">
                    <img src="이미지/운진군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">운진군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#bbff64;">ㄱ</th><td><a href="강변신천로.html" class="red-link">강변신천로</a> · <a href="강월대포로.html" class="blue-link">강월대포로</a> · <a href="관수운진로.html" class="red-link">관수운진로</a> · <a href="광덕노곡로.html" class="red-link">광덕노곡로</a> · <a href="구름나루로.html" class="red-link">구름나루로</a> · <a href="구암세마로.html" class="red-link">구암세마로</a> · <a href="군산안평로.html" class="blue-link">군산안평로</a> · <a href="금산로.html" class="red-link">금산로</a> · <a href="금산사로.html" class="blue-link">금산사로</a></td></tr>
                    <tr><th style="background-color:#bbff64;">ㄴ</th><td><a href="남천대동로.html" class="red-link">남천대동로</a></td></tr>
                    <tr><th style="background-color:#bbff64;">ㄷ</th><td><a href="도군로.html" class="red-link">도군로</a> · <a href="동호서호로.html" class="blue-link">동호서호로</a> · <a href="두원운진로.html" class="red-link">두원운진로</a></td></tr>
                    <tr><th style="background-color:#bbff64;">ㅁ</th><td><a href="만년임수로.html" class="blue-link">만년임수로</a> · <a href="만석대곡로.html" class="red-link">만석대곡로</a></td></tr>
                    <tr><th style="background-color:#bbff64;">ㅂ</th><td><a href="복천장재로.html" class="blue-link">복천장재로</a></td></tr>
                    <tr><th style="background-color:#bbff64;">ㅅ</th><td><a href="사내로.html" class="red-link">사내로</a> · <a href="산인로.html" class="red-link">산인로</a> · <a href="삼거화평로.html" class="blue-link">삼거화평로</a> · <a href="서구옥계로.html" class="red-link">서구옥계로</a> · <a href="시리누만로.html" class="red-link">시리누만로</a> · <a href="신운로.html" class="red-link">신운로</a></td></tr>
                    <tr><th style="background-color:#bbff64;">ㅇ</th><td><a href="운남역로.html" class="red-link">운남역로</a> · <a href="운진관수로.html" class="blue-link">운진관수로</a> · <a href="운진두원로.html" class="red-link">운진두원로</a> · <a href="운진마진로.html" class="blue-link">운진마진로</a> · <a href="운진역로.html" class="red-link">운진역로</a> · <a href="운진터미널로.html" class="red-link">운진터미널로</a> · <a href="운진항로.html" class="red-link">운진항로</a> · <a href="율곡동화로.html" class="blue-link">율곡동화로</a> · <a href="은산동구로.html" class="red-link">은산동구로</a></td></tr>
                    <tr><th style="background-color:#bbff64;">ㅈ</th><td><a href="중앙오거로.html" class="red-link">중앙오거로</a></td></tr>
                    <tr><th style="background-color:#bbff64;">ㅊ</th><td><a href="청천학동로.html" class="red-link">청천학동로</a></td></tr>
                    <tr><th style="background-color:#bbff64;">ㅍ</th><td><a href="평산월성로.html" class="blue-link">평산월성로</a></td></tr>
                    <tr><th style="background-color:#bbff64;">ㅎ</th><td><a href="호남내륙로.html" class="red-link">호남내륙로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #bbff64;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "두원군": `
        <div class="wiki-navbox" style="border-color: #e3ba3a;">
            <div class="wiki-navbox-header" style="background-color: #e3ba3a;">
                <div class="header-content">
                    <img src="이미지/두원군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">두원군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#e3ba3a;">ㄱ</th><td><a href="강변신포로.html" class="blue-link">강변신포로</a> · <a href="공단물류로.html" class="red-link">공단물류로</a> · <a href="관수두원로.html" class="red-link">관수두원로</a> · <a href="구읍설채로.html" class="red-link">구읍설채로</a></td></tr>
                    <tr><th style="background-color:#e3ba3a;">ㄴ</th><td><a href="남면로.html" class="red-link">남면로</a> · <a href="남창북창로.html" class="red-link">남창북창로</a> · <a href="농공평야로.html" class="red-link">농공평야로</a></td></tr>
                    <tr><th style="background-color:#e3ba3a;">ㄷ</th><td><a href="대동수창로.html" class="red-link">대동수창로</a> · <a href="대선도예로.html" class="red-link">대선도예로</a> · <a href="덕진로.html" class="red-link">덕진로</a> · <a href="동화중평로.html" class="red-link">동화중평로</a> · <a href="두원관수로.html" class="blue-link">두원관수로</a> · <a href="두원로.html" class="blue-link">두원로</a> · <a href="두원마진로.html" class="red-link">두원마진로</a> · <a href="두원운진로.html" class="red-link">두원운진로</a> · <a href="두원터미널로.html" class="blue-link">두원터미널로</a> · <a href="두원해안로.html" class="blue-link">두원해안로</a></td></tr>
                    <tr><th style="background-color:#e3ba3a;">ㅁ</th><td><a href="막은벌로.html" class="blue-link">막은벌로</a> · <a href="매화학당로.html" class="blue-link">매화학당로</a> · <a href="명암운서로.html" class="blue-link">명암운서로</a> · <a href="문화로.html" class="red-link">문화로</a></td></tr>
                    <tr><th style="background-color:#e3ba3a;">ㅅ</th><td><a href="산막계곡로.html" class="red-link">산막계곡로</a> · <a href="서운로.html" class="red-link">서운로</a> · <a href="선문로.html" class="red-link">선문로</a> · <a href="송정구포로.html" class="blue-link">송정구포로</a> · <a href="승린로.html" class="blue-link">승린로</a> · <a href="시장역전로.html" class="red-link">시장역전로</a> · <a href="신남신북로.html" class="red-link">신남신북로</a> · <a href="신동신서로.html" class="red-link">신동신서로</a></td></tr>
                    <tr><th style="background-color:#e3ba3a;">ㅇ</th><td><a href="어촌송죽로.html" class="red-link">어촌송죽로</a> · <a href="운진두원로.html" class="red-link">운진두원로</a> · <a href="월성천곡로.html" class="red-link">월성천곡로</a> · <a href="읍내중심로.html" class="red-link">읍내중심로</a></td></tr>
                    <tr><th style="background-color:#e3ba3a;">ㅊ</th><td><a href="총선로.html" class="red-link">총선로</a></td></tr>
                    <tr><th style="background-color:#e3ba3a;">ㅍ</th><td><a href="포구항동로.html" class="red-link">포구항동로</a></td></tr>
                    <tr><th style="background-color:#e3ba3a;">ㅎ</th><td><a href="해안신흥로.html" class="red-link">해안신흥로</a> · <a href="휴양청암로.html" class="blue-link">휴양청암로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #e3ba3a;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "마진시": `
        <div class="wiki-navbox" style="border-color: #ff99be;">
            <div class="wiki-navbox-header" style="background-color: #ff99be;">
                <div class="header-content">
                    <img src="이미지/마진시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">마진시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#ff99be;">ㄱ</th><td><a href="고곡로.html" class="red-link">고곡로</a> · <a href="고사와룡로.html" class="red-link">고사와룡로</a> · <a href="관수마진로.html" class="red-link">관수마진로</a></td></tr>
                    <tr><th style="background-color:#ff99be;">ㄷ</th><td><a href="동화서화로.html" class="red-link">동화서화로</a> · <a href="두원마진로.html" class="red-link">두원마진로</a></td></tr>
                    <tr><th style="background-color:#ff99be;">ㅁ</th><td><a href="마강변로.html" class="red-link">마강변로</a> · <a href="마두로.html" class="blue-link">마두로</a> · <a href="마분로.html" class="blue-link">마분로</a> · <a href="마운로.html" class="red-link">마운로</a> · <a href="마진산단로.html" class="blue-link">마진산단로</a> · <a href="마진역로.html" class="blue-link">마진역로</a> · <a href="명야호수로.html" class="red-link">명야호수로</a></td></tr>
                    <tr><th style="background-color:#ff99be;">ㅂ</th><td><a href="분주마진로.html" class="blue-link">분주마진로</a></td></tr>
                    <tr><th style="background-color:#ff99be;">ㅅ</th><td><a href="상본로.html" class="red-link">상본로</a> · <a href="상정로.html" class="red-link">상정로</a> · <a href="수판로.html" class="blue-link">수판로</a> · <a href="숲안신성로.html" class="red-link">숲안신성로</a> · <a href="신곡로.html" class="red-link">신곡로</a> · <a href="십색로.html" class="red-link">십색로</a></td></tr>
                    <tr><th style="background-color:#ff99be;">ㅇ</th><td><a href="예고로.html" class="red-link">예고로</a> · <a href="운진마진로.html" class="blue-link">운진마진로</a> · <a href="월석동.html" class="red-link">월석동</a> · <a href="유록로.html" class="red-link">유록로</a> · <a href="율곡중평로.html" class="blue-link">율곡중평로</a> · <a href="율영석화로.html" class="red-link">율영석화로</a></td></tr>
                    <tr><th style="background-color:#ff99be;">ㅈ</th><td><a href="장병로.html" class="blue-link">장병로</a> · <a href="진목북산로.html" class="red-link">진목북산로</a></td></tr>
                    <tr><th style="background-color:#ff99be;">ㅊ</th><td><a href="천대중앙로.html" class="red-link">천대중앙로</a> · <a href="청호송죽로.html" class="red-link">청호송죽로</a></td></tr>
                    <tr><th style="background-color:#ff99be;">ㅍ</th><td><a href="팔현용천로.html" class="red-link">팔현용천로</a> · <a href="포구문화로.html" class="blue-link">포구문화로</a></td></tr>
                    <tr><th style="background-color:#ff99be;">ㅎ</th><td><a href="화정평화로.html" class="blue-link">화정평화로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #ff99be;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "덕주시 조전구": `
        <div class="wiki-navbox" style="border-color: #ff9ea9;">
            <div class="wiki-navbox-header" style="background-color: #ff9ea9;">
                <div class="header-content">
                    <img src="이미지/덕주시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도 덕주시</div>
                        <div class="title-main">조전구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#ff9ea9;">ㄱ</th><td><a href="갈매재로.html" class="red-link">갈매재로</a> · <a href="국리로.html" class="red-link">국리로</a> · <a href="금당로.html" class="red-link">금당로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㄴ</th><td><a href="남조로.html" class="red-link">남조로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㄷ</th><td><a href="대국로.html" class="red-link">대국로</a> · <a href="덕고을로.html" class="blue-link">덕고을로</a> · <a href="덕낙로.html" class="red-link">덕낙로</a> · <a href="덕분로.html" class="blue-link">덕분로</a> · <a href="덕주방산로.html" class="red-link">덕주방산로</a> · <a href="덕주하정로.html" class="blue-link">덕주하정로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅁ</th><td><a href="매덕로.html" class="blue-link">매덕로</a> · <a href="매촌로.html" class="blue-link">매촌로</a> · <a href="명리과학로.html" class="red-link">명리과학로</a> · <a href="명리로.html" class="red-link">명리로</a> · <a href="모은로.html" class="red-link">모은로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅂ</th><td><a href="박현남로.html" class="blue-link">박현남로</a> · <a href="박현로.html" class="red-link">박현로</a> · <a href="백운재로.html" class="red-link">백운재로</a> · <a href="분주덕주로.html" class="red-link">분주덕주로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅅ</th><td><a href="삼삼로.html" class="red-link">삼삼로</a> · <a href="석덕로.html" class="red-link">석덕로</a> · <a href="시산로.html" class="red-link">시산로</a> · <a href="신격로.html" class="red-link">신격로</a> · <a href="신만로.html" class="blue-link">신만로</a> · <a href="신서로.html" class="blue-link">신서로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅇ</th><td><a href="애남로.html" class="blue-link">애남로</a> · <a href="우격로.html" class="red-link">우격로</a> · <a href="우산로.html" class="red-link">우산로</a> · <a href="월로로.html" class="blue-link">월로로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅈ</th><td><a href="전진화물로.html" class="blue-link">전진화물로</a> · <a href="조전로.html" class="red-link">조전로</a> · <a href="조전북로.html" class="blue-link">조전북로</a> · <a href="주규로.html" class="blue-link">주규로</a> · <a href="주산로.html" class="blue-link">주산로</a> · <a href="주성로.html" class="red-link">주성로</a> · <a href="지출로.html" class="blue-link">지출로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅊ</th><td><a href="천마터널로.html" class="blue-link">천마터널로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅍ</th><td><a href="팔원로.html" class="blue-link">팔원로</a> · <a href="팔원역로.html" class="blue-link">팔원역로</a> · <a href="팔원하정로.html" class="blue-link">팔원하정로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅎ</th><td><a href="하기로.html" class="red-link">하기로</a> · <a href="하기산단로.html" class="red-link">하기산단로</a> · <a href="호반로.html" class="red-link">호반로</a> · <a href="화범로.html" class="red-link">화범로</a> · <a href="화전로.html" class="blue-link">화전로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #ff9ea9;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "덕주시 덕산구": `
        <div class="wiki-navbox" style="border-color: #ff9ea9;">
            <div class="wiki-navbox-header" style="background-color: #ff9ea9;">
                <div class="header-content">
                    <img src="이미지/덕주시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도 덕주시</div>
                        <div class="title-main">덕산구 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#ff9ea9;">ㄱ</th><td><a href="갈매재로.html" class="red-link">갈매재로</a> · <a href="갑고로.html" class="red-link">갑고로</a> · <a href="구부계곡로.html" class="red-link">구부계곡로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㄷ</th><td><a href="대곡화전로.html" class="red-link">대곡화전로</a> · <a href="대학병원로.html" class="red-link">대학병원로</a> · <a href="덕고을로.html" class="blue-link">덕고을로</a> · <a href="덕구로.html" class="red-link">덕구로</a> · <a href="덕낙로.html" class="red-link">덕낙로</a> · <a href="덕분로.html" class="blue-link">덕분로</a> · <a href="덕산외곽순환로.html" class="red-link">덕산외곽순환로</a> · <a href="덕주방산로.html" class="red-link">덕주방산로</a> · <a href="덕주역로.html" class="red-link">덕주역로</a> · <a href="덕주하정로.html" class="blue-link">덕주하정로</a> · <a href="덕하로.html" class="red-link">덕하로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅁ</th><td><a href="무영강변로.html" class="red-link">무영강변로</a> · <a href="무원로.html" class="red-link">무원로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅂ</th><td><a href="백운재로.html" class="red-link">백운재로</a> · <a href="봉암평천로.html" class="blue-link">봉암평천로</a> · <a href="분주덕주로.html" class="red-link">분주덕주로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅅ</th><td><a href="산대재권로.html" class="red-link">산대재권로</a> · <a href="상미로.html" class="blue-link">상미로</a> · <a href="석덕로.html" class="red-link">석덕로</a> · <a href="신도중앙로.html" class="red-link">신도중앙로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅇ</th><td><a href="영목로.html" class="blue-link">영목로</a> · <a href="영석로.html" class="red-link">영석로</a> · <a href="원명로.html" class="red-link">원명로</a> · <a href="월곡백제로.html" class="blue-link">월곡백제로</a> · <a href="월로로.html" class="blue-link">월로로</a> · <a href="임송칠암로.html" class="red-link">임송칠암로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅈ</th><td><a href="장부소간로.html" class="blue-link">장부소간로</a> · <a href="전진산업로.html" class="red-link">전진산업로</a> · <a href="정중오지로.html" class="red-link">정중오지로</a> · <a href="조천산로.html" class="blue-link">조천산로</a> · <a href="주기로.html" class="red-link">주기로</a> · <a href="중앙로.html" class="red-link">중앙로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅊ</th><td><a href="천마터널로.html" class="blue-link">천마터널로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅍ</th><td><a href="팔원하정로.html" class="blue-link">팔원하정로</a></td></tr>
                    <tr><th style="background-color:#ff9ea9;">ㅎ</th><td><a href="학전로.html" class="blue-link">학전로</a> · <a href="화주로.html" class="red-link">화주로</a> · <a href="화진로.html" class="red-link">화진로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #ff9ea9;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "하정시": `
        <div class="wiki-navbox" style="border-color: #ff3b72;">
            <div class="wiki-navbox-header" style="background-color: #ff3b72;">
                <div class="header-content">
                    <img src="이미지/하정시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">하정시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#ff3b72;">ㄱ</th><td><a href="가람가라로.html" class="blue-link">가람가라로</a> · <a href="고국로.html" class="blue-link">고국로</a> · <a href="괴음로.html" class="red-link">괴음로</a> · <a href="구산로.html" class="blue-link">구산로</a> · <a href="구주로.html" class="blue-link">구주로</a> · <a href="귀선로.html" class="red-link">귀선로</a> · <a href="규산로.html" class="blue-link">규산로</a></td></tr>
                    <tr><th style="background-color:#ff3b72;">ㄷ</th><td><a href="덕주하정로.html" class="blue-link">덕주하정로</a> · <a href="동석로.html" class="red-link">동석로</a> · <a href="등전로.html" class="blue-link">등전로</a></td></tr>
                    <tr><th style="background-color:#ff3b72;">ㅂ</th><td><a href="별당로.html" class="blue-link">별당로</a> · <a href="비하로.html" class="red-link">비하로</a></td></tr>
                    <tr><th style="background-color:#ff3b72;">ㅅ</th><td><a href="산동로.html" class="red-link">산동로</a> · <a href="산서로.html" class="red-link">산서로</a> · <a href="서곡대산로.html" class="red-link">서곡대산로</a></td></tr>
                    <tr><th style="background-color:#ff3b72;">ㅇ</th><td><a href="오서로.html" class="red-link">오서로</a> · <a href="와룡로.html" class="blue-link">와룡로</a> · <a href="원안하정로.html" class="red-link">원안하정로</a> · <a href="율진로.html" class="blue-link">율진로</a> · <a href="음악로.html" class="red-link">음악로</a></td></tr>
                    <tr><th style="background-color:#ff3b72;">ㅈ</th><td><a href="정동로.html" class="red-link">정동로</a></td></tr>
                    <tr><th style="background-color:#ff3b72;">ㅊ</th><td><a href="청계매화로.html" class="blue-link">청계매화로</a> · <a href="체육로.html" class="red-link">체육로</a></td></tr>
                    <tr><th style="background-color:#ff3b72;">ㅍ</th><td><a href="팔번로.html" class="red-link">팔번로</a> · <a href="평화갈현로.html" class="red-link">평화갈현로</a></td></tr>
                    <tr><th style="background-color:#ff3b72;">ㅎ</th><td><a href="하석로.html" class="red-link">하석로</a> · <a href="해령로.html" class="red-link">해령로</a> · <a href="해성로.html" class="red-link">해성로</a> · <a href="화산고정로.html" class="blue-link">화산고정로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #ff3b72;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "원안군": `
        <div class="wiki-navbox" style="border-color: #00aabb;">
            <div class="wiki-navbox-header" style="background-color: #00aabb;">
                <div class="header-content">
                    <img src="이미지/원안군.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">원안군 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#00aabb;">ㄱ</th><td><a href="개색로.html" class="red-link">개색로</a> · <a href="교리평리로.html" class="red-link">교리평리로</a> · <a href="금곡덕암로.html" class="red-link">금곡덕암로</a></td></tr>
                    <tr><th style="background-color:#00aabb;">ㄴ</th><td><a href="내외로.html" class="red-link">내외로</a> · <a href="노국로.html" class="blue-link">노국로</a></td></tr>
                    <tr><th style="background-color:#00aabb;">ㄷ</th><td><a href="대곡장곡로.html" class="red-link">대곡장곡로</a> · <a href="대평신평로.html" class="red-link">대평신평로</a> · <a href="덕천송정로.html" class="blue-link">덕천송정로</a> · <a href="동서남북로.html" class="blue-link">동서남북로</a></td></tr>
                    <tr><th style="background-color:#00aabb;">ㅁ</th><td><a href="막자로.html" class="red-link">막자로</a></td></tr>
                    <tr><th style="background-color:#00aabb;">ㅅ</th><td><a href="산내화양로.html" class="red-link">산내화양로</a> · <a href="산음로.html" class="red-link">산음로</a> · <a href="서산남산로.html" class="blue-link">서산남산로</a> · <a href="소궁로.html" class="red-link">소궁로</a> · <a href="소귀로.html" class="blue-link">소귀로</a> · <a href="소운로.html" class="red-link">소운로</a> · <a href="송정죽림로.html" class="red-link">송정죽림로</a> · <a href="신덕화전로.html" class="blue-link">신덕화전로</a> · <a href="신촌월로로.html" class="blue-link">신촌월로로</a> · <a href="신흥동산로.html" class="red-link">신흥동산로</a></td></tr>
                    <tr><th style="background-color:#00aabb;">ㅇ</th><td><a href="안온벌로.html" class="red-link">안온벌로</a> · <a href="오수봉암로.html" class="blue-link">오수봉암로</a> · <a href="원낙로.html" class="red-link">원낙로</a> · <a href="원목로.html" class="blue-link">원목로</a> · <a href="원안로.html" class="red-link">원안로</a> · <a href="원안터미널로.html" class="red-link">원안터미널로</a> · <a href="원안하정로.html" class="red-link">원안하정로</a> · <a href="월곡삼거로.html" class="blue-link">월곡삼거로</a> · <a href="임송칠암로.html" class="red-link">임송칠암로</a></td></tr>
                    <tr><th style="background-color:#00aabb;">ㅈ</th><td><a href="지출계곡로.html" class="blue-link">지출계곡로</a></td></tr>
                    <tr><th style="background-color:#00aabb;">ㅊ</th><td><a href="천암봉성로.html" class="blue-link">천암봉성로</a></td></tr>
                    <tr><th style="background-color:#00aabb;">ㅍ</th><td><a href="평천로.html" class="blue-link">평천로</a></td></tr>
                    <tr><th style="background-color:#00aabb;">ㅎ</th><td><a href="화성율로.html" class="blue-link">화성율로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #00aabb;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`,

    "낙주시": `
        <div class="wiki-navbox" style="border-color: #bb0033;">
            <div class="wiki-navbox-header" style="background-color: #bb0033;">
                <div class="header-content">
                    <img src="이미지/낙주시.webp" alt="로고" onerror="this.style.display='none'">
                    <div>
                        <div class="title-sub">덕빈남도</div>
                        <div class="title-main">낙주시 관내 로</div>
                    </div>
                </div>
            </div>
            <details open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="wiki-navbox-table">
                    <tr><th style="background-color:#bb0033;">ㄱ</th><td><a href="결나로.html" class="red-link">결나로</a> · <a href="경영로.html" class="red-link">경영로</a> · <a href="고규로.html" class="blue-link">고규로</a> · <a href="기좌로.html" class="red-link">기좌로</a> · <a href="길산로.html" class="red-link">길산로</a> · <a href="길산하정로.html" class="red-link">길산하정로</a></td></tr>
                    <tr><th style="background-color:#bb0033;">ㄴ</th><td><a href="낙주역로.html" class="blue-link">낙주역로</a> · <a href="낙주영암로.html" class="red-link">낙주영암로</a> · <a href="낙주천로.html" class="blue-link">낙주천로</a> · <a href="남해진도로.html" class="red-link">남해진도로</a></td></tr>
                    <tr><th style="background-color:#bb0033;">ㄷ</th><td><a href="대상로.html" class="red-link">대상로</a> · <a href="대상목포로.html" class="blue-link">대상목포로</a> · <a href="대웅로.html" class="red-link">대웅로</a> · <a href="대웅컨벤션로.html" class="blue-link">대웅컨벤션로</a> · <a href="동서촌로.html" class="red-link">동서촌로</a> · <a href="땅끝해남로.html" class="red-link">땅끝해남로</a></td></tr>
                    <tr><th style="background-color:#bb0033;">ㅁ</th><td><a href="매전복산로.html" class="red-link">매전복산로</a></td></tr>
                    <tr><th style="background-color:#bb0033;">ㅅ</th><td><a href="산언로.html" class="red-link">산언로</a> · <a href="삼채로.html" class="red-link">삼채로</a> · <a href="상성하성로.html" class="red-link">상성하성로</a> · <a href="상운하운로.html" class="blue-link">상운하운로</a> · <a href="서구로.html" class="red-link">서구로</a> · <a href="송정월평로.html" class="red-link">송정월평로</a> · <a href="신구로.html" class="red-link">신구로</a></td></tr>
                    <tr><th style="background-color:#bb0033;">ㅇ</th><td><a href="야리신안로.html" class="red-link">야리신안로</a> · <a href="엽산로.html" class="red-link">엽산로</a> · <a href="우색로.html" class="blue-link">우색로</a> · <a href="원낙로.html" class="red-link">원낙로</a> · <a href="유암로.html" class="red-link">유암로</a> · <a href="이달로.html" class="red-link">이달로</a> · <a href="이파로.html" class="red-link">이파로</a></td></tr>
                    <tr><th style="background-color:#bb0033;">ㅈ</th><td><a href="장암도곡로.html" class="red-link">장암도곡로</a> · <a href="전야로.html" class="red-link">전야로</a> · <a href="중동로.html" class="red-link">중동로</a> · <a href="지기로.html" class="red-link">지기로</a> · <a href="지기무안로.html" class="red-link">지기무안로</a> · <a href="진류로.html" class="red-link">진류로</a> · <a href="진적로.html" class="red-link">진적로</a> · <a href="진적원안로.html" class="red-link">진적원안로</a></td></tr>
                    <tr><th style="background-color:#bb0033;">ㅊ</th><td><a href="천풍로.html" class="red-link">천풍로</a></td></tr>
                    <tr><th style="background-color:#bb0033;">ㅌ</th><td><a href="토마로.html" class="red-link">토마로</a> · <a href="토마마진로.html" class="red-link">토마마진로</a> · <a href="토마역로.html" class="red-link">토마역로</a></td></tr>
                    <tr><th style="background-color:#bb0033;">ㅍ</th><td><a href="판창로.html" class="red-link">판창로</a></td></tr>
                    <tr><th style="background-color:#bb0033;">ㅎ</th><td><a href="화산평촌로.html" class="red-link">화산평촌로</a> · <a href="화전대곡로.html" class="red-link">화전대곡로</a> · <a href="화주로.html" class="red-link">화주로</a> · <a href="회삼로.html" class="red-link">회삼로</a> · <a href="흥림로.html" class="blue-link">흥림로</a> · <a href="희실로.html" class="red-link">희실로</a></td></tr>
                </table>
                <div class="wiki-navbox-footer" style="background-color: #bb0033;">
                    덕빈남도의 도로 틀 둘러보기
                </div>
            </details>
        </div>`
        };

    // ==========================================
    // 5. 조건에 맞는 틀만 Placeholder 안에 삽입
    // ==========================================
    placeholder.style.display = 'flex';
    placeholder.style.flexDirection = 'column';
    placeholder.style.gap = '20px'; // 틀이 2개 이상일 경우 간격 띄우기

    for (const [region, htmlContent] of Object.entries(navboxData)) {
        if (htmlContent.includes(targetLink)) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;
            placeholder.appendChild(tempDiv.firstElementChild);
        }
    }
});