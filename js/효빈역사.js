/* 파일 경로: js/효빈역사.js */

/**
 * 효빈광역시 3. 역사 문단 렌더링 함수
 * @param {string} containerId - 내용을 넣을 HTML 요소의 ID
 */
function renderHyobinHistorySection(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-history-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-hist-wrapper { width: 100%; overflow-x: auto; margin-bottom: 2rem; margin-top: 1rem; }
            .hb-hist-table { width: 100%; min-width: 700px; border-collapse: collapse; border: 1px solid #ccc; font-size: 0.75rem; text-align: center; }
            .hb-hist-table th, .hb-hist-table td { border: 1px solid #ccc; padding: 6px; vertical-align: middle; }
            
            /* 헤더 스타일 (로고 적용) */
            .hb-hist-thead th.main-header { background-color: #7777AA; color: white; padding: 10px; position: relative; text-align: center; }
            .hb-hist-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-hist-logo { max-height: 28px; width: auto; }
            .hb-hist-title { font-weight: bold; font-size: 1.1em; color: white; text-decoration: none; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; color: white; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }

            /* 테이블 서브 헤더 및 본문 스타일 */
            .hb-hist-sub-header th { background-color: #6b7280; color: white; font-weight: bold; }
            .hb-hist-row-header { background-color: #7777AA; color: white; font-weight: bold; white-space: nowrap; }
            
            /* 본문 토글용 */
            .hb-hist-tbody { transition: all 0.2s; }
            .hb-hist-tbody.hidden { display: none; }

            /* 텍스트 스타일 */
            .hb-text-body { line-height: 1.7; font-size: 0.95rem; margin-bottom: 1.5rem; text-align: justify; color: #374151; }
            .hb-text-body h3 { font-size: 1.25em; font-weight: bold; margin-top: 25px; margin-bottom: 12px; border-bottom: 2px solid #7777AA; padding-bottom: 5px; color: #333; }
            .hb-text-body h4 { font-size: 1.1em; font-weight: bold; margin-top: 18px; margin-bottom: 8px; color: #4b5563; border-left: 4px solid #7777AA; padding-left: 8px; }
            .hb-text-body ul { margin-top: 5px; margin-bottom: 15px; padding-left: 20px; }
            .hb-text-body li { margin-bottom: 5px; }
            
            /* 링크 스타일 */
            .hb-link { color: #004EA2; text-decoration: none; cursor: pointer; }
            .hb-link:hover { text-decoration: underline; }
            
            /* 작은 텍스트 (한자 등) */
            .hb-small-text { font-size: 0.65rem; color: #6b7280; display: block; margin-top: 2px; }
            
            /* 배경색 유틸리티 */
            .hb-bg-blue-50 { background-color: #eff6ff; }
            .hb-bg-blue-100 { background-color: #dbeafe; }
            
            /* 1981년 그리드 레이아웃 */
            .hb-grid-1981 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; text-align: center; }
            .hb-grid-1981 .hb-grid-item { border-left: 1px solid #eee; padding-left: 4px; }
            .hb-grid-1981 .hb-grid-item:first-child { border-left: none; }
            .hb-badge { background-color: #e5e7eb; padding: 1px 4px; border-radius: 4px; font-size: 0.65rem; margin-bottom: 2px; display: inline-block; }
            
            /* 연혁 테이블 스타일 */
            .hb-chrono-year { font-weight: bold; width: 60px; background-color: #f9fafb; }
            .hb-chrono-desc { text-align: left; padding-left: 10px; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 헬퍼 함수 ---
    const mkLink = (text, href) => `<a href="${href}" class="hb-link">${text}</a>`;

    // --- 3. 데이터 및 HTML 조립 ---

    // 3.1 & 3.2 텍스트 (구한말 원류 전신 면 데이터 완전 반영)
    const textContent = `
        <div class="hb-text-body">
            <h3 id="s-3.1">3.1. 조선 시대 (1914년 부군면 통폐합 이전)</h3>
            <p>옆동네인 덕주나 빈주에 비해서는 그리 크지 않은 고을<del>시골 깡촌</del>이었다. 나름 지역의 중심지 역할을 하긴 했지만 현재와 같은 거대 메가시티의 위상은 전혀 아니었다. 그러나 1914년 일제의 대칼질(부군면 통폐합) 직전까지 존재했던 구한말 행정구역의 파편들을 뜯어보면, 현재 효빈광역시를 구성하는 각 읍·면·동의 조상님들이 어디 출신인지 아주 골 때리는 계보가 적나라하게 드러난다.</p>
            
            <h4>① 1914년 통합 당시 성립된 면(面)별 전신(前身) 계보 분석</h4>
            <p>1914년 일제의 행정구역 개편으로 탄생했던 각 면들이 사실은 구한말 어떤 면들을 쪼개고 합쳐서 만든 끔찍한 혼종(...)이었는지 상세히 기록한다. (현재 존속 여부 및 소속 불문 누락 없이 서술)</p>
            
            <ul>
                <li><strong>효빈면 (폐지):</strong> 오리지널 효빈군 소속의 <strong>읍내면</strong>과 <strong>중면(남부)</strong>이 퓨전하여 탄생했다. <del>군의 중심지 대우</del></li>
                <li><strong>사능면 (폐지):</strong> 효빈군 소속의 오리지널 <strong>사능면</strong>에 <strong>중면(북부)</strong>과 <strong>남일면</strong>을 냅다 통폐합하여 덩치를 키웠다.</li>
                <li><strong>청엽면 (폐지):</strong> 효빈군 소속의 오리지널 <strong>청엽면</strong>과 <strong>남이면</strong>이 합쳐져 성립되었다.</li>
                <li><strong>당가면 (폐지):</strong> 효빈군 소속의 오리지널 <strong>당가면</strong>과 <strong>뇌전면</strong>이 합쳐져 만들어졌다.</li>
                <li><strong>중수면 (폐지):</strong> 효빈군 소속의 오리지널 <strong>중수면</strong>과 <strong>각수면</strong>이 묶여서 한 몸이 되었다.</li>
                <li><strong>안천면 (폐지):</strong> <strong>군 경계를 허문 대공사의 결과물.</strong> 효빈군 <strong>악부면</strong>과 탄성군 <strong>안천면, 용성면</strong>을 3방향에서 한 그릇에 비벼 넣었다. (...)</li>
                <li><strong>어간면 (폐지):</strong> 효빈군 서쪽 끝자락의 오리지널 <strong>어간면</strong>과 <strong>남면</strong>이 합쳐져 성립되었다.</li>
                <li><strong>고송면 (폐지):</strong> 효빈군 소속의 오리지널 <strong>고송면</strong>과 <strong>북면</strong>이 합쳐져 만들어졌다.</li>
                <li><strong>이자면 (폐지):</strong> 탄성군 소속의 오리지널 <strong>이자면</strong>과 <strong>정면(서부)</strong> 지역이 짜깁기되어 성립했다.</li>
                <li><strong>창전면 (폐지):</strong> 이쪽도 상당한 혼종인데, 효빈군의 <strong>동곡면</strong>과 탄성군의 오리지널 <strong>창전면</strong>을 반반씩 섞어서 탄성군 관할로 재편했었다. <del>이것이 훗날 창전구의 시초</del></li>
                <li><strong>탄성면 (현재도 존속):</strong> 탄성군의 본진답게 탄성군 <strong>군내면, 서일면, 남일면</strong> 3개 면을 묶어 독자 세력을 유지했다.</li>
                <li><strong>도변면 (현재도 존속):</strong> 탄성군 소속의 오리지널 <strong>도변면</strong>과 <strong>변주면</strong>이 융합되었다.</li>
                <li><strong>고해면 (현재도 존속):</strong> 탄성군 소속의 오리지널 <strong>고해면</strong>, <strong>북면</strong>, 그리고 <strong>정면(동부)</strong> 지역을 합쳐서 몸집을 불렸다.</li>
                <li><strong>흑택면 (현재도 존속):</strong> 탄성군 소속의 오리지널 <strong>흑택면</strong>과 <strong>유선면</strong>이 깔끔하게 합쳐졌다.</li>
                <li><strong>소원면 (현재도 존속):</strong> 탄성군 소속의 오리지널 <strong>소전면</strong>과 <strong>원남면</strong>이 퓨전하여 탄생했다.</li>
                <li><strong>서목면 (현재도 존속):</strong> 본래 탄성군 <strong>서목면</strong> 땅에다가, 원래 선곡군 관할이었던 <strong>남내면</strong> 영토를 떼어다가 강제로 접착시켰다. <del>선곡군 의문의 1패</del></li>
                <li><strong>야진면 (현재도 존속):</strong> 본래 탄성군 <strong>야진면</strong> 땅에다가, 선곡군 관할이었던 <strong>동면</strong>을 흡수 통합하여 성립되었다.</li>
                <li><strong>도향면 (현재도 존속):</strong> 본래 탄성군 <strong>도진면</strong> 땅에다가, 머나먼 약산군 관할이었던 <strong>향리면</strong>을 뜯어와 섞어버린 기괴한 구조다.</li>
                <li><strong>정근면 (현재도 존속):</strong> 온전히 약산군 소속이었던 <strong>정선면</strong>과 <strong>근원면</strong> 두 혈통이 합쳐져 탄성군 소속의 면으로 정착했다.</li>
            </ul>

            <h3 id="s-3.2">3.2. 일제강점기 ~ 현대</h3>
            <p>일본어로는 한국어 발음 그대로 독음되었다. 1880년대 들어 개항의 영향으로 포구 중심의 무역이 발달하기 시작하더니, <strong>1883년 계미군란(빈주 전역의 군인들이 일으킨 난)과 계미홍수</strong>가 겹치며 기존 중심지였던 도 관아가 처참하게 파괴되는 대참사가 발생한다. 이때 일제와 일본인들이 도 관아의 대체 거주지로서 지형이 평탄하고 확장성이 좋은 효빈 지역을 찍어서 밀어주기 시작했고, 자연스럽게 철도 교통망이 효빈을 중심으로 빗장 지르듯 발달하게 된다. 이후 폭풍 성장을 거듭하여 1929년에는 이미 전통의 큰 고을이었던 빈주의 규모를 추월해 버렸으며, 앞서 1914년에는 탄성군과의 전격 합군을 단행했다. <sup><a class="wiki-fn-trigger" href="#fn-5">[5]</a></sup></p>
        </div>
    `;

    // [표 1] 행정구역 변천사 (복잡한 구조 구현)
    const table1Header = `
        <tr class="hb-hist-sub-header">
            <th class="hb-hist-row-header">时代 / 区分</th>
            <th>시내 지역</th>
            <th>탄성 지역</th>
            <th>서목 지역</th>
            <th>도향 지역</th>
        </tr>
    `;
    
    const table1Body = `
        <tr>
            <th class="hb-hist-row-header">구한말<br/>(1896)</th>
            <td>${mkLink('덕빈북도', '덕빈북도.html')}<br/><strong>${mkLink('효빈군', '효빈군.html')}</strong><br/><span class="hb-small-text">孝彬郡</span></td>
            <td>${mkLink('덕빈북도', '덕빈북도.html')}<br/><strong>${mkLink('탄성군', '탄성군.html')}</strong><br/><span class="hb-small-text">彈城郡</span></td>
            <td>${mkLink('덕빈북도', '덕빈북도.html')} ${mkLink('선곡군', '선곡군.html')} ${mkLink('남내면', '남내면.html')}<br/>${mkLink('덕빈북도', '덕빈북도.html')} ${mkLink('탄성군', '탄성군.html')}<br/>${mkLink('야진면', '야진면.html')}, ${mkLink('동면', '동면.html')}, ${mkLink('서목면', '서목면.html')}<br/><span class="hb-small-text">選曲郡 南內面<br/>彈城郡 西木/野津/西面</span></td>
            <td>${mkLink('덕빈북도', '덕빈북도.html')} ${mkLink('약산군', '약산군.html')}<br/>${mkLink('향리면', '향리면.html')}, ${mkLink('정선면', '정선면.html')}, ${mkLink('근원면', '근원면.html')}<br/>${mkLink('덕빈북도', '덕빈북도.html')} ${mkLink('탄성군', '탄성군.html')} ${mkLink('도진면', '도진면.html')}<br/><span class="hb-small-text">藥山郡 香里/井扇/芹原面<br/>彈城郡 挑眞面</span></td>
        </tr>
        <tr>
            <th class="hb-hist-row-header">일제강점기<br/>(1914)</th>
            <td>${mkLink('덕빈북도', '덕빈북도.html')}<br/><strong>${mkLink('효빈군', '효빈군.html')}</strong><br/><span class="hb-small-text">孝彬郡</span></td>
            <td style="color: #9ca3af;">-</td>
            <td>${mkLink('덕빈북도', '덕빈북도.html')}<br/>${mkLink('선곡군', '선곡군.html')} ${mkLink('서목면', '서목면.html')}, ${mkLink('야진면', '야진면.html')}<br/><span class="hb-small-text">選曲郡 西木/野津面</span></td>
            <td>${mkLink('덕빈북도', '덕빈북도.html')}<br/>${mkLink('약산군', '약산군.html')} ${mkLink('도향면', '도향면.html')}, ${mkLink('정근면', '정근면.html')}<br/><span class="hb-small-text">藥山郡 挑香/井芹面</span></td>
        </tr>
        <tr>
            <th class="hb-hist-row-header">일제강점기<br/>(1935)</th>
            <td class="hb-bg-blue-50">${mkLink('덕빈북도', '덕빈북도.html')}<br/><strong>${mkLink('효빈부', '효빈부.html')}</strong> (승격)<br/><span class="hb-small-text">孝彬府</span></td>
            <td>${mkLink('덕빈북도', '덕빈북도.html')}<br/><strong>${mkLink('탄성군', '탄성군.html')}</strong><br/><span class="hb-small-text">彈城郡</span></td>
            <td>${mkLink('덕빈북도', '덕빈북도.html')}<br/>${mkLink('선곡군', '선곡군.html')} ${mkLink('서목면', '서목면.html')}, ${mkLink('야진면', '야진면.html')}<br/><span class="hb-small-text">選曲郡 西木/野津面</span></td>
            <td>${mkLink('덕빈북도', '덕빈북도.html')}<br/>${mkLink('약산군', '약산군.html')} ${mkLink('도향면', '도향면.html')}, ${mkLink('정근면', '정근면.html')}<br/><span class="hb-small-text">藥山郡 挑香/井芹面</span></td>
        </tr>
        <tr>
            <th class="hb-hist-row-header">대한민국<br/>(1949)</th>
            <td class="hb-bg-blue-100" rowspan="2">${mkLink('덕빈북도', '덕빈북도.html')}<br/><strong>${mkLink('효빈시', '효빈시.html')}</strong> (승격)<br/><span class="hb-small-text">孝彬市</span></td>
            <td rowspan="2">${mkLink('덕빈북도', '덕빈북도.html')}<br/><strong>${mkLink('탄성군', '탄성군.html')}</strong><br/><span class="hb-small-text">彈城郡</span></td>
            <td>${mkLink('덕빈북도', '덕빈북도.html')}<br/>${mkLink('선곡군', '선곡군.html')} ${mkLink('서목면', '서목면.html')}, ${mkLink('야진면', '야진면.html')}<br/><span class="hb-small-text">選曲郡 西木/野津面</span></td>
            <td>${mkLink('덕빈북도', '덕빈북도.html')}<br/>${mkLink('약산군', '약산군.html')} ${mkLink('도향면', '도향면.html')}, ${mkLink('정근면', '정근면.html')}<br/><span class="hb-small-text">藥山郡 挑香/井芹面</span></td>
        </tr>
        <tr>
            <th class="hb-hist-row-header">대한민국<br/>(1963~1980)</th>
            <td><span class="hb-badge">1963</span><br/>${mkLink('덕빈북도', '덕빈북도.html')}<br/>${mkLink('탄성군', '탄성군.html')} ${mkLink('서목면', '서목면.html')}, ${mkLink('야진읍', '야진읍.html')}<br/><span class="hb-small-text">彈城郡 西木面/野津邑</span></td>
            <td><span class="hb-badge">1980</span><br/>${mkLink('덕빈북도', '덕빈북도.html')}<br/>${mkLink('약산군', '약산군.html')} ${mkLink('도향면', '도향면.html')}, ${mkLink('정근면', '정근면.html')}<br/><span class="hb-small-text">藥山郡 挑香/井芹面</span></td>
        </tr>
        <tr style="border-top: 2px solid #6b7280;">
            <th class="hb-hist-row-header">효빈직할시<br/>(1981)</th>
            <td colspan="4" style="background-color: white;">
                <div class="hb-grid-1981">
                    <div class="hb-grid-item" style="border:none;">
                        <div style="font-weight:bold; color:#1e40af;">${mkLink('효빈직할시', '효빈직할시.html')} 승격<br/><span style="font-weight:normal; font-size:0.65rem;">孝彬直轄市</span></div>
                    </div>
                    <div class="hb-grid-item">
                        <span class="hb-badge">탄성</span><br/>${mkLink('덕빈북도', '덕빈북도.html')} ${mkLink('탄성군', '탄성군.html')}<br/><span class="hb-small-text">彈城郡</span>
                    </div>
                    <div class="hb-grid-item">
                        <span class="hb-badge">서목</span><br/>(${mkLink('탄성군', '탄성군.html')} 관할)
                    </div>
                    <div class="hb-grid-item">
                        <span class="hb-badge">도향</span><br/>${mkLink('덕빈북도', '덕빈북도.html')} ${mkLink('약산군', '약산군.html')}<br/>${mkLink('도향면', '도향면.html')}, ${mkLink('정근면', '정근면.html')}
                    </div>
                </div>
            </td>
        </tr>
        <tr style="border-top: 2px solid #374151;">
            <th class="hb-hist-row-header">효빈광역시<br/>(1995~)</th>
            <td colspan="4" class="hb-bg-blue-50" style="font-size: 1rem !important; font-weight: bold;">
                ${mkLink('효빈광역시', '효빈광역시.html')} 출범 (도 농 통합)<br/>
                <span class="hb-small-text" style="font-weight: normal; font-size: 0.8rem;">孝彬廣域市 (1995)</span>
            </td>
        </tr>
    `;

    // [표 2] 연혁 (데이터 배열)
    const chronoData = [
        { year: '1914', desc: '부군면 통폐합으로 효빈군+탄성군 합군' },
        { year: '1931', desc: '효빈면이 효빈읍으로 승격' },
        { year: '1935', desc: '효빈읍이 효빈부로 승격후 분리, 잔여지역은 탄성군으로 변경' },
        { year: '1941', desc: '사능면 천석리,내조리,사능리,입리,원리,동리리 편입' },
        { year: '1942', desc: '사능면 월천,박산,신흥리 및 어간면 항리 일부 편입' },
        { year: '1945', desc: '청엽면 신덕리,사가당리,등리 편입' },
        { year: '1946', desc: '사능면 운양리 편입' },
        { year: '1949', desc: '효빈부->효빈시 변경 및 사능면 잔여지역 편입' },
        { year: '1955', desc: '청엽면,어간면 전체 편입' },
        { year: '1957', desc: '시청이전(중구 중앙로->중보로)' },
        { year: '1963', desc: '구제 시행(중구,남구,서구) 및 고송면 과진리,사복리,청덕리편입,창전면 전역 편입,탄성군 이자면 이자읍 승격 및 선곡군 야진읍 편입,탄성면 탄성읍 승격' },
        { year: '1971', desc: '고송면,당가면 전역편입 및 북구 신설,탄성군 안천면 안천읍 승격 및 선곡군 서목면,야진면 편입' },
        { year: '1973', desc: '중수면 전역 편입 및 동구 신설,흑택면 만서리,시로리,광정리 편입' },
        { year: '1979', desc: '청엽구신설, 탄성군 안천읍이 안천시로 승격,이자읍에 고해면 남동,월삼,능릉리 편입,이와리를 고해면으로 이동' },
        { year: '1980', desc: '안천시에 소원면 천본,광상,신,천문리 및 도변면 창건리,이십기리 편입' },
        { year: '1981', desc: '이자읍 앵내리를 도변면으로 편입 / <strong>효빈직할시로 승격</strong>' },
        { year: '1983', desc: '안천시가 효빈직할시로 편입,이자읍 편입 및 안천구 신설' },
        { year: '1986', desc: '약산군 도향/정근면 탄성군 편입,안천구 이자출장소 설치' },
        { year: '1989', desc: '탄성군 고해면이 고해읍으로 승격' },
        { year: '1995', desc: '<strong>효빈광역시로 변경</strong> 및 탄성군 통합 및 청엽구 일부를 창전구로 분리신설' },
        { year: '1996', desc: '도변면->도변읍 승격' },
        { year: '2003', desc: '서목면->서목읍 승격' },
        { year: '2004', desc: '광역시청을 북구 고송동으로 이전' }
    ];

    let chronoRows = '';
    chronoData.forEach(item => {
        chronoRows += `<tr><td class="hb-chrono-year">${item.year}</td><td class="hb-chrono-desc">${item.desc}</td></tr>`;
    });

    // --- 4. 최종 HTML 조립 ---
    
    // 테이블 1 생성
    const table1HTML = `
        <div class="hb-hist-wrapper">
            <table class="hb-hist-table">
                <thead class="hb-hist-thead">
                    <tr>
                        <th colspan="5" class="main-header">
                            <div class="hb-hist-header-content">
                                <img src="이미지/hyobin1.png" class="hb-hist-logo" alt="로고" onerror="this.style.display='none'"/>
                                <span class="hb-hist-title">${mkLink('효빈광역시', '효빈광역시.html')} 행정구역 변천사</span>
                                <span class="hb-toggle-btn" data-target="hb-hist-body-1">[접기]</span>
                            </div>
                        </th>
                    </tr>
                    ${table1Header}
                </thead>
                <tbody id="hb-hist-body-1" class="hb-hist-tbody">
                    ${table1Body}
                </tbody>
            </table>
        </div>
    `;

    // 테이블 2 생성
    const table2HTML = `
        <div class="hb-hist-wrapper">
            <table class="hb-hist-table">
                <thead class="hb-hist-thead">
                    <tr>
                        <th colspan="2" class="main-header">
                            <div class="hb-hist-header-content">
                                <img src="이미지/hyobin1.png" class="hb-hist-logo" alt="로고" onerror="this.style.display='none'"/>
                                <span class="hb-hist-title">효빈광역시 연혁</span>
                                <span class="hb-toggle-btn" data-target="hb-hist-body-2">[접기]</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody id="hb-hist-body-2" class="hb-hist-tbody">
                    ${chronoRows}
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = textContent + table1HTML + table2HTML;

    // --- 5. 이벤트 연결 (접기/펼치기) ---
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