/* 파일 경로: js/효빈터미널목록.js */

function renderHyobinTerminalTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 ---
    const styleId = 'hyobin-terminal-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-term-wrapper { width: 100%; overflow-x: auto; margin-bottom: 1rem; }
            .hb-term-table { width: 100%; min-width: 500px; border-collapse: collapse; border: 1px solid #ccc; font-size: 0.8rem; }
            .hb-term-thead th { background-color: #7777AA; color: white; padding: 10px; }
            .hb-term-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-term-logo { max-height: 28px; width: auto; }
            .hb-term-title { font-weight: bold; font-size: 1.1em; }
            .hb-term-tbody { transition: all 0.2s; }
            .hb-term-tbody.hidden { display: none; }
            .hb-term-tbody th, .hb-term-tbody td { border: 1px solid #e5e7eb; padding: 6px 8px; vertical-align: middle; }
            .hb-term-th-label { background-color: #7777AA; width: 20%; text-align: center; font-weight: bold; white-space: nowrap; }
            .hb-term-td-content { text-align: left; }
            .hb-term-divider { background-color: #9ca3af; color: white; text-align: center; font-weight: bold; padding: 6px; }
            .hb-term-note { font-size: 11px; padding: 8px; font-style: italic; background-color: #f9fafb; color: #4b5563; border-top: 1px solid #e5e7eb; }
            .hb-term-regions { text-align: center; padding: 8px; line-height: 1.6; }
            .hb-link { cursor: pointer; color: inherit; text-decoration: none; }
            .hb-link:hover { text-decoration: underline; color: #2563eb; }
            .hb-separator { margin: 0 2px; color: #9ca3af; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 데이터 ---
    const activeTerminals = [ { name: '효빈고속', query: '효빈고속버스터미널' }, { name: '효빈시외(효빈종합)', query: '효빈고속버스터미널' }, { name: '효빈남부', query: '효빈남부버스터미널' }, { name: '<del>효빈동부</del>', query: '효빈동부버스터미널' } ];
    const activeStops = [ { name: '중수역', query: '중수역' }, { name: '이자공원역', query: '이자공원역' }, { name: '창전구청', query: '창전구청역' }, { name: '도변', query: '도변역' }, { name: '북효빈', query: '북효빈' }, { name: '<del>평당</del>', query: '평당역' } ];
    const regions = ['서울', '부산', '인천', '광주', '대전', '울산', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '세종', '대구', '덕북', '덕남'];

    const createLinks = (items) => items.map(item => {
        const label = typeof item === 'string' ? item : item.name;
        const query = typeof item === 'string' ? item : item.query;
        return `<span class="hb-link" onclick="handleSearchFromNav('${query}')">${label}</span>`;
    }).join('<span class="hb-separator"> · </span>');

    // --- 3. HTML 생성 ---
    const bodyId = 'hb-term-tbody';
    const html = `
        <div class="hb-term-wrapper">
            <table class="hb-term-table">
                <thead class="hb-term-thead">
                    <tr>
                        <th colspan="2">
                            <div class="hb-term-header-content">
                                <img src="이미지/hyobin1.png" class="hb-term-logo" alt="로고" onerror="this.style.display='none'"/>
                                <span class="hb-term-title">효빈광역시 관내 버스 터미널 및 정류소</span>
                                <span class="hb-toggle-btn" id="hb-term-toggle">[접기]</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody id="${bodyId}" class="hb-term-tbody">
                    <tr><th class="hb-term-th-label">터미널</th><td class="hb-term-td-content">${createLinks(activeTerminals)}</td></tr>
                    <tr><th class="hb-term-th-label">정류소</th><td class="hb-term-td-content">${createLinks(activeStops)}</td></tr>
                    <tr><th class="hb-term-th-label">기타</th><td class="hb-term-td-content">북효빈역 임시정류소(북효빈정류소 신설 이전까지)</td></tr>
                    <tr><th colspan="2" class="hb-term-divider">폐지된 터미널 및 정류소</th></tr>
                    <tr><th class="hb-term-th-label">터미널</th><td class="hb-term-td-content">(구)효빈고속 · 북효빈 · (구) 효빈시외</td></tr>
                    <tr><th class="hb-term-th-label">정류소</th><td class="hb-term-td-content">창선역 · 안천 · 우전</td></tr>
                    <tr><td colspan="2" class="hb-term-note">※ 효빈동부 터미널 신설예정(2030), 북효빈정류소 신설예정(2027), 평당정류소 계획중(미정), 북효빈역 정류소는 북효빈정류소 신설이후 폐지예정이다.</td></tr>
                    <tr><td colspan="2" class="hb-term-regions">${createLinks(regions)}</td></tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;

    // --- 4. 이벤트 ---
    const toggleBtn = container.querySelector('#hb-term-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const tbody = document.getElementById(bodyId);
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