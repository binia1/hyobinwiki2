/* 파일 경로: js/효빈자매도시.js */

/**
 * 효빈광역시 15. 협력 도시(자매결연 및 우호협력) 렌더링 함수
 * @param {string} containerId - 내용을 넣을 HTML 요소의 ID
 */
function renderHyobinSisterCities(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-sister-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-sis-wrapper { width: 100%; overflow-x: auto; margin-bottom: 2.5rem; margin-top: 1rem; }
            .hb-sis-table { width: 100%; min-width: 800px; border-collapse: collapse; border: 1px solid #ccc; font-size: 0.9rem; line-height: 1.6; background-color: #fff; }
            .hb-sis-table th, .hb-sis-table td { border: 1px solid #e5e7eb; padding: 10px 12px; vertical-align: middle; }
            
            /* 헤더 스타일 (로고 적용) */
            .hb-sis-thead th.main-header { background-color: #7777AA; color: white; padding: 12px; position: relative; text-align: center; border-bottom: 2px solid #555588; }
            .hb-sis-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-sis-logo { max-height: 28px; width: auto; }
            .hb-sis-title { font-weight: bold; font-size: 1.2em; }
            .hb-toggle-btn { font-size: 0.85rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; color: white; background: rgba(0,0,0,0.2); padding: 2px 8px; border-radius: 4px; }
            .hb-toggle-btn:hover { opacity: 1; background: rgba(0,0,0,0.4); }

            /* 서브 헤더 (컬럼명) */
            .hb-sis-sub-header th { background-color: #f3f4f6; color: #333; font-weight: bold; text-align: center; }
            
            /* 본문 스타일 */
            .hb-sis-tbody { transition: all 0.2s; }
            .hb-sis-tbody.hidden { display: none; }
            
            /* 셀 스타일 */
            .hb-th-region { background-color: #f9fafb; font-weight: bold; text-align: center; width: 12%; color: #333; }
            .hb-td-center { text-align: center; white-space: nowrap; }
            .hb-td-desc { text-align: left; color: #374151; word-break: keep-all; }
            .hb-td-date { text-align: center; white-space: nowrap; font-family: monospace; font-size: 0.95em; color: #555; }
            
            /* 텍스트 및 링크 스타일 */
            .hb-text-body { line-height: 1.7; font-size: 0.95rem; margin-bottom: 1.5rem; text-align: justify; color: #374151; }
            .hb-ext-link { color: #0055AA; text-decoration: none; font-weight: 500; } /* 나무위키식 파란 링크 */
            .hb-ext-link:hover { text-decoration: underline; color: #003388; }
            
            /* 나무위키 취소선 스타일 */
            del { color: #999; text-decoration-color: #999; font-size: 0.95em; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 헬퍼 함수 (한국어 단어명.html 방식 적용) ---
    const mkLink = (text) => `<a href="${text}.html" target="_blank" class="hb-ext-link">${text}</a>`;

    // --- 3. 데이터 정의 (총 39개 도시 누락 없이 완벽 매핑) ---

    // 3-1. 해외 자매결연 도시 (19개)
    const intlSisterData = [
        {
            region: "일본",
            items: [
                { date: "1974. 10. 24.", city: `도쿄도 ${mkLink('도시마구')}`, desc: "<b>최초의 자매결연 도시.</b> 애니메이션 관련 콘텐츠 협력(뱅드림 성지). <del>이때부터 서브컬처 수도의 싹수가 보였다(...)</del>" },
                { date: "2018. 07. 26.", city: `시즈오카현 ${mkLink('누마즈시')}`, desc: "해안관광·항만·성지화 전략 공유 <b>(러브라이브 선샤인 성지)</b> <del>요우소로!</del>" },
                { date: "2023. 01. 01.", city: `도쿄도 ${mkLink('고토구')}`, desc: "수변도시 개발 및 문화 콘텐츠 협력 <b>(러브라이브 니지가사키 성지)</b> <del>스쿨 아이돌 동호회 활동 전폭 지원</del>" },
                { date: "2025. 12. 10.", city: `이시카와현 ${mkLink('가나자와시')}`, desc: "전통예술 교류 및 <b>(러브라이브 하스노소라 성지)</b> 관련 협력" }
            ]
        },
        {
            region: "대만",
            items: [ { date: "1985. 06. 12.", city: `${mkLink('타오위안시')}`, desc: "아시아권 첫 교류 및 도시 인프라 협력" } ]
        },
        {
            region: "중국",
            items: [
                { date: "1992. 08. 24.", city: `산둥성 ${mkLink('칭다오시')}`, desc: "한중수교 직후 체결. 항만·맥주 축제 교류 <del>양꼬치엔 칭따오</del>" },
                { date: "2002. 12. 20.", city: `${mkLink('상하이시')}`, desc: "대도시 인프라 교류 (러브라이브 슈퍼스타 탕 쿠쿠 관련) <del>쿠쿠루쿠쿠!!</del>" },
                { date: "2006. 04. 14.", city: `산둥성 ${mkLink('빈저우시')}`, desc: "산업·경제 집중 교류" }
            ]
        },
        {
            region: "베트남",
            items: [ { date: "2007. 11. 11.", city: `${mkLink('후에시')}`, desc: "동남아시아 문화 교류 및 투자" } ]
        },
        {
            region: "필리핀",
            items: [ { date: "1998. 05. 05.", city: `${mkLink('케손시티')}`, desc: "현재 효빈시장 외가 소재지. <del>혈연·지연의 긍정적 활용 사례 ㄷㄷ</del>" } ]
        },
        {
            region: "미국",
            items: [
                { date: "1995. 03. 15.", city: `텍사스주 ${mkLink('휴스턴시')}`, desc: "우주항공·에너지 산업 인프라 제휴 <del>휴스턴, 위 해브 어 프로블럼</del>" },
                { date: "2022. 10. 10.", city: `캘리포니아주 ${mkLink('리버사이드시')}`, desc: "미서부 교육 및 문화 인적 교류" }
            ]
        },
        {
            region: "멕시코",
            items: [ { date: "1988. 11. 01.", city: `${mkLink('아카풀코시')}`, desc: "중남미 해양 관광 교류 시작" } ]
        },
        {
            region: "인도",
            items: [ { date: "2004. 08. 15.", city: `${mkLink('푸두체리시')}`, desc: "서남아시아 IT 및 문화 교류의 교두보 마련" } ]
        },
        {
            region: "호주",
            items: [ { date: "2001. 09. 09.", city: `${mkLink('태즈메이니아주')}`, desc: "청정 자연 및 관광 협력 <del>태즈메이니아 데블 서식지</del>" } ]
        },
        {
            region: "캐나다",
            items: [ { date: "2000. 01. 10.", city: `${mkLink('캘거리시')}`, desc: "북미 동계스포츠 및 자원 외교" } ]
        },
        {
            region: "영국",
            items: [ { date: "2020. 08. 08.", city: `${mkLink('맨체스터시')}`, desc: "산업 혁명 유산 및 축구 교류 <del>효빈에서 맨유 vs 맨시티 더비 개최 기원(...)</del>" } ]
        },
        {
            region: "튀르키예",
            items: [ { date: "2022. 03. 14.", city: `${mkLink('시이르트도')}`, desc: "형제의 나라 지방정부 외교" } ]
        },
        {
            region: "폴란드",
            items: [ { date: "2022. 07. 07.", city: `${mkLink('그단스크시')}`, desc: "유럽 항구 도시 인프라 협력" } ]
        }
    ];

    // 3-2. 국내 자매결연 도시 (10개)
    const domSisterData = [
        {
            region: "호남권",
            items: [
                { date: "1996. 05. 01.", city: `전북특별자치도 ${mkLink('전주시')}`, desc: "<b>국내 최고(最古) 수준의 결연 역사.</b> 전통문화 협력. <del>비빔밥 동맹의 뿌리는 몹시 깊다</del>" },
                { date: "2009. 02. 28.", city: `광주광역시 ${mkLink('광산구')}`, desc: "도시개발·산업단지·신도시 교류" },
                { date: "2013. 03. 01.", city: `전라남도 ${mkLink('여수시')}`, desc: "해양관광·항만·해양레저 교류 <del>여수 밤바다~</del>" }
            ]
        },
        {
            region: "충청권",
            items: [
                { date: "1997. 10. 01.", city: `충청남도 ${mkLink('서천군')}`, desc: "서해안 해양·생태관광의 원조 파트너십" }
            ]
        },
        {
            region: "제주권",
            items: [
                { date: "2005. 07. 07.", city: `제주특별자치도 ${mkLink('제주시')}`, desc: "국제관광·항공·문화행사 교류" }
            ]
        },
        {
            region: "수도권",
            items: [
                { date: "2010. 10. 10.", city: `서울특별시 ${mkLink('마포구')}`, desc: "청년문화·예술·도시축제 교류 <del>홍대병 감성 직수입 경로</del>" },
                { date: "2019. 10. 09.", city: `경기도 ${mkLink('고양시')}`, desc: "대규모 MICE 행사 관련 협력 <del>고양고양</del>" }
            ]
        },
        {
            region: "영남권",
            items: [
                { date: "2011. 05. 18.", city: `부산광역시 ${mkLink('강서구')}`, desc: "항공·항만 라이벌 겸 협력 관계" },
                { date: "2016. 11. 30.", city: `경상남도 ${mkLink('거제시')}`, desc: "조선 및 해양 플랜트 산업 교류" }
            ]
        },
        {
            region: "강원권",
            items: [
                { date: "2015. 09. 20.", city: `강원특별자치도 ${mkLink('원주시')}`, desc: "의료·혁신산업 클러스터 협력" }
            ]
        }
    ];

    // 3-3. 해외 우호협력 도시 (9개)
    const intlFriendlyData = [
        {
            region: "일본",
            items: [
                { date: "2023. 05. 05.", city: `오사카부 ${mkLink('오사카시')}`, desc: "대도시 교통망 벤치마킹 <del>먹다 망하는 도시와 짓다 망하는 도시의 교류</del>" },
                { date: "2023. 09. 09.", city: `가나가와현 ${mkLink('요코하마시')}`, desc: "<b>(봇치더락, 걸즈밴드 크라이 성지)</b> <del>결속밴드 성지순례 코스 개척</del>" },
                { date: "2024. 02. 14.", city: `도쿄도 ${mkLink('치요다구')}`, desc: "<b>(러브라이브 뮤즈 성지)</b> 아키하바라 소재지 <del>사실상 서브컬처 수도와의 성전 맺음</del>" },
                { date: "2024. 04. 01.", city: `시가현 ${mkLink('토요사토정')}`, desc: "청년·학원문화 교류 <b>(케이온 성지)</b> <del>시장님 전용 방과후 티타임 룸 완비</del>" },
                { date: "2024. 07. 07.", city: `도쿄도 ${mkLink('시부야구')}`, desc: "도심개발 벤치마킹 <b>(러브라이브 슈퍼스타 성지)</b>" }
            ]
        },
        {
            region: "미국",
            items: [
                { date: "2023. 12. 25.", city: `뉴욕주 ${mkLink('뉴욕시')}`, desc: "글로벌 경제 인프라 협력 <del>효빈의 뉴요커화 프로젝트</del>" }
            ]
        },
        {
            region: "브라질",
            items: [ { date: "2019. 05. 01.", city: `${mkLink('쿠이아바시')}`, desc: "남미 자원 및 문화 협력" } ]
        },
        {
            region: "이집트",
            items: [ { date: "2020. 02. 22.", city: `${mkLink('기자시')}`, desc: "고대 문명 연계 관광 협력" } ]
        },
        {
            region: "그리스",
            items: [ { date: "2021. 11. 01.", city: `${mkLink('이피로스주')}`, desc: "지중해 문화 교류" } ]
        }
    ];

    // 3-4. 국내 우호협력 도시 (1개)
    const domFriendlyData = [
        {
            region: "충청권",
            items: [
                { date: "2021. 04. 05.", city: `충청북도 ${mkLink('진천군')}`, desc: "스포츠·교육 클러스터 협력 <del>생거진천 사거효빈(...)</del>" }
            ]
        }
    ];

    // --- 4. HTML 조립 함수 (4단 테이블 적용) ---
    const createTable = (id, title, data) => {
        let rows = '';
        data.forEach(group => {
            group.items.forEach((item, index) => {
                rows += `<tr>`;
                // 첫 번째 행일 때만 rowspan 적용하여 지역명 셀 생성
                if (index === 0) {
                    rows += `<th rowspan="${group.items.length}" class="hb-th-region">${group.region}</th>`;
                }
                rows += `
                    <td class="hb-td-date">${item.date}</td>
                    <td class="hb-td-center">${item.city}</td>
                    <td class="hb-td-desc">${item.desc}</td>
                </tr>`;
            });
        });

        // 지정된 규칙에 따라 이미지 경로를 '이미지/한국어이름.png'로 강제 지정
        return `
            <div class="hb-sis-wrapper">
                <table class="hb-sis-table">
                    <thead class="hb-sis-thead">
                        <tr>
                            <th colspan="4" class="main-header">
                                <div class="hb-sis-header-content">
                                    <img src="이미지/효빈광역시로고.png" class="hb-sis-logo" alt="로고" onerror="this.style.display='none'"/>
                                    <span class="hb-sis-title">${title}</span>
                                    <span class="hb-toggle-btn" data-target="${id}">접기 ▲</span>
                                </div>
                            </th>
                        </tr>
                        <tr class="hb-sis-sub-header">
                            <th style="width: 12%;">국가/지역</th>
                            <th style="width: 15%;">체결일자</th>
                            <th style="width: 23%;">도시명</th>
                            <th style="width: 50%;">교류 분야 및 비고</th>
                        </tr>
                    </thead>
                    <tbody id="${id}" class="hb-sis-tbody">
                        ${rows}
                    </tbody>
                </table>
            </div>
        `;
    };

    // --- 5. 최종 렌더링 ---
    const introSisHTML = `
        <h3 class="text-xl font-bold mt-6 mb-3" id="s-15.1">15.1. 자매결연 도시</h3>
        <p class="hb-text-body">
            효빈광역시는 해양·문화·교육·산업 도시로서의 정체성을 기반으로 국내외 다양한 도시들과 활발한 국제 교류를 추진하고 있다. 항만·철도·문화·관광 산업이 조화된 도시 특성상, 유사한 구조를 가진 해외 도시들과의 자매결연 확대가 두드러지며, 특히 문화·애니메이션·해양관광 분야에서의 교류가 몹시 활발하다. <del>물론 시장님의 사심이 듬뿍 담긴 곳이 많다(...)</del>
        </p>
    `;

    const introFriHTML = `
        <h3 class="text-xl font-bold mt-6 mb-3" id="s-15.2">15.2. 우호협력 도시</h3>
        <p class="hb-text-body">
            정식 자매결연의 전 단계이거나, 특정 분야(특히 <b>서브컬처 성지순례</b> 등)의 집중적인 교류를 위해 맺어진 우호협력 도시들이다. <del>본격 덕후 투어 루트 개척의 산실</del>
        </p>
    `;

    const fullHtml = `
        <h2 class="text-2xl font-bold mt-8 mb-4 border-b border-gray-400 pb-2" id="s-15">15. 협력 도시</h2>
        ${introSisHTML}
        ${createTable('hb-sis-intl', '해외 자매결연 도시', intlSisterData)}
        ${createTable('hb-sis-dom', '국내 자매결연 도시', domSisterData)}
        
        ${introFriHTML}
        ${createTable('hb-fri-intl', '해외 우호협력 도시', intlFriendlyData)}
        ${createTable('hb-fri-dom', '국내 우호협력 도시', domFriendlyData)}
    `;

    container.innerHTML = fullHtml;

    // --- 6. 이벤트 연결 (접기/펼치기) ---
    container.querySelectorAll('.hb-toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const tbody = document.getElementById(targetId);
            if (tbody) {
                if (tbody.classList.contains('hidden')) {
                    tbody.classList.remove('hidden');
                    this.textContent = '접기 ▲';
                } else {
                    tbody.classList.add('hidden');
                    this.textContent = '펼치기 ▼';
                }
            }
        });
    });
}