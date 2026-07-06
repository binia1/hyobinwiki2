/* 파일 경로: js/민선효빈광역시장.js */

/**
 * 역대 민선 효빈광역시장(11.2) 테이블 렌더링 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderHyobinMayorTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-mayor-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-mayor-wrapper { width: 100%; overflow-x: auto; margin-bottom: 2rem; margin-top: 1rem; }
            .hb-mayor-table { width: 100%; min-width: 600px; border-collapse: collapse; border: 1px solid #ccc; font-size: 14px; text-align: center; }
            .hb-mayor-table th, .hb-mayor-table td { border: 1px solid #e5e7eb; padding: 8px 10px; vertical-align: middle; }
            
            /* 헤더 스타일 (로고 적용) */
            .hb-mayor-thead th.main-header { background-color: #7777AA; color: white; padding: 10px; position: relative; }
            .hb-mayor-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-mayor-logo { max-height: 28px; width: auto; }
            .hb-mayor-title { font-weight: bold; font-size: 1.1em; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; color: white; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }

            /* 서브 헤더 */
            .hb-mayor-col-header th { background-color: #f3f4f6; font-weight: bold; color: #333; }

            /* 본문 토글용 */
            .hb-mayor-tbody { transition: all 0.2s; }
            .hb-mayor-tbody.hidden { display: none; }

            /* 링크 스타일 */
            .hb-link { cursor: pointer; color: #0066cc; text-decoration: none; font-weight: bold; }
            .hb-link:hover { text-decoration: underline; }
            .hb-ext-link { color: #0066cc; text-decoration: none; font-size: 0.9em; }
            .hb-ext-link:hover { text-decoration: underline; }

            /* 정당 배지 스타일 */
            .hb-badge { display: inline-block; padding: 4px 8px; color: white; border-radius: 4px; font-size: 12px; font-weight: bold; line-height: 1; text-shadow: 0 0 2px rgba(0,0,0,0.2); white-space: nowrap; }
            .b-old-red { background-color: #D82634; }
            .b-green { background-color: #009A44; }
            .b-green2 { background-color: #00AA7B; }
            .b-gnp { background-color: #0095DA; }
            .b-minju { background-color: #419639; }
            .b-minju2 { background-color: #019E33; }
            .b-minju3 { background-color: #0082CD; }
            .b-minju4 { background-color: #004EA2; }
            .b-gray { background-color: #999; }

            /* 행 배경색 유틸리티 */
            .bg-invalid { background-color: #fff0f0; } /* 당선무효 */
            .bg-acting { background-color: #f9f9f9; } /* 권한대행 */
            .bg-current { background-color: #f0f7ff; } /* 현직 */
            .text-small-gray { font-size: 0.9em; color: #555; display: block; margin-top: 3px; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 헬퍼 함수 ---
    const mkLink = (name) => `<span class="hb-link" onclick="handleSearchFromNav('${name}')">${name}</span>`;
    const mkExtLink = (text, url) => `<a href="${url}" class="hb-ext-link" target="_blank">${text}</a>`;

    // --- 3. 데이터 정의 ---
    const mayors = [
        {
            term: '민선 1기 (21대)', name: '환산채', 
            party: '민주당', badge: 'b-old-red', 
            period: '1995.07.01 ~ 1998.06.30', 
            note: mkExtLink('1995년 선거', 'https://namu.wiki/w/제1회 전국동시지방선거')
        },
        {
            term: '민선 2기 (22대)', name: '박현만', 
            party: '새정치국민회의', badge: 'b-green', 
            period: '1998.07.01 ~ 2002.06.30', 
            note: mkExtLink('1998년 선거', 'https://namu.wiki/w/제2회 전국동시지방선거')
        },
        {
            term: '민선 3기 (23대)', name: '박현만', 
            party: '새천년민주당', badge: 'b-green2', 
            period: '2002.07.01 ~ 2006.06.30', 
            note: '재선'
        },
        {
            term: '민선 4기 (24대)', name: '윤대환', 
            party: '한나라당', badge: 'b-gnp', 
            period: '2006.07.01 ~ 2007.11.30', 
            note: '<strong>당선무효</strong><span class="text-small-gray">공직선거법 위반 및 뇌물수수 등</span>',
            rowClass: 'bg-invalid'
        },
        {
            term: '권한대행', name: '강견태', 
            party: '무소속', badge: 'b-gray', 
            period: '2007.12.01 ~ 2008.06.03', 
            note: '부시장 대행 체제',
            rowClass: 'bg-acting'
        },
        {
            term: '보궐 (25대)', name: '박현만', 
            party: '통합민주당', badge: 'b-minju', 
            period: '2008.06.04 ~ 2010.06.30', 
            note: '3선 복귀'
        },
        {
            term: '민선 5기 (26대)', name: '박현만', 
            party: '민주당', badge: 'b-minju2', 
            period: '2010.07.01 ~ 2014.06.30', 
            note: '4선'
        },
        {
            term: '민선 6기 (27대)', name: '김성민', 
            party: '새정치민주연합', badge: 'b-minju3', 
            period: '2014.07.01 ~ 2018.06.30', 
            note: '초선'
        },
        {
            term: '민선 7기 (28대)', name: '김성민', 
            party: '더불어민주당', badge: 'b-minju4', 
            period: '2018.07.01 ~ 2022.02.01', 
            note: '재선<span class="text-small-gray">국회의원 보궐선거 출마 사퇴</span>'
        },
        {
            term: '권한대행', name: '유은태', 
            party: '무소속', badge: 'b-gray', 
            period: '2022.02.02 ~ 2022.06.30', 
            note: '부시장 대행 체제',
            rowClass: 'bg-acting'
        },
        {
            term: '민선 8기 (29대)', name: '박효빈', 
            party: '더불어민주당', badge: 'b-minju4', 
            period: '2022.07.01 ~ 2026.06.30 (예정)', 
            note: '<strong>역대 최연소, 최다 득표</strong>',
            rowClass: 'bg-current'
        }
    ];

    // --- 4. HTML 조립 ---
    const tableBodyId = 'hb-mayor-tbody';
    let rows = '';

    mayors.forEach(m => {
        const trClass = m.rowClass ? `class="${m.rowClass}"` : '';
        rows += `
            <tr ${trClass}>
                <td>${m.term}</td>
                <td>${mkLink(m.name)}</td>
                <td><span class="hb-badge ${m.badge}">${m.party}</span></td>
                <td>${m.period}</td>
                <td>${m.note}</td>
            </tr>
        `;
    });

    const html = `
        <div class="hb-mayor-wrapper">
            <table class="hb-mayor-table">
                <thead class="hb-mayor-thead">
                    <tr>
                        <th colspan="5" class="main-header">
                            <div class="hb-mayor-header-content">
                                <img src="이미지/hyobin1.png" class="hb-mayor-logo" alt="로고" onerror="this.style.display='none'"/>
                                <span class="hb-mayor-title">역대 민선 효빈광역시장</span>
                                <span class="hb-toggle-btn" id="hb-mayor-toggle">[접기]</span>
                            </div>
                        </th>
                    </tr>
                    <tr class="hb-mayor-col-header">
                        <th>대수</th>
                        <th>이름</th>
                        <th>정당</th>
                        <th>재임 기간</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody id="${tableBodyId}" class="hb-mayor-tbody">
                    ${rows}
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;

    // --- 5. 이벤트 연결 ---
    const toggleBtn = container.querySelector('#hb-mayor-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const tbody = document.getElementById(tableBodyId);
            if (tbody.classList.contains('hidden')) {
                tbody.classList.remove('hidden');
                this.textContent = '[접기]';
            } else {
                tbody.classList.add('hidden');
                this.textContent = '[펼치기]';
            }
        });
    }
}