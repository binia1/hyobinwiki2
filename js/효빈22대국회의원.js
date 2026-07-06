/* 파일 경로: js/효빈22대국회의원.js */

function renderHyobinCongress22(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 ---
    const styleId = 'hyobin-politics-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-pol-wrapper { width: 100%; overflow-x: auto; margin-bottom: 2rem; }
            .hb-pol-table { width: 100%; min-width: 600px; border-collapse: collapse; border: 1px solid #ccc; font-size: 0.85rem; text-align: center; }
            .hb-pol-header-cell { background-color: #7777AA; color: white; padding: 10px; border-bottom: 1px solid white; }
            .hb-pol-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-pol-logo { max-height: 28px; width: auto; }
            .hb-pol-title { font-weight: bold; font-size: 1.1em; }
            .hb-pol-tbody { transition: all 0.2s; }
            .hb-pol-tbody.hidden { display: none; }
            .hb-pol-constituency { color: white; font-weight: bold; padding: 5px; }
            .hb-pol-mp { padding: 12px 0; font-weight: bold; }
            .hb-bg-blue { background-color: #004EA2; }
            .hb-bg-red { background-color: #D6001C; }
            .hb-text-blue { color: #004EA2; }
            .hb-text-red { color: #D6001C; }
            .hb-bg-red-light { background-color: rgba(214, 0, 28, 0.05); }
            .hb-link-white { color: inherit; text-decoration: none; }
            .hb-link-mp { text-decoration: none; }
            .hb-link-mp:hover, .hb-footer-link:hover { text-decoration: underline; }
            .hb-pol-footer-header { background-color: #f3f4f6; font-weight: bold; padding: 8px; border-top: 1px solid #ccc; }
            .hb-pol-footer-body { background-color: #7777AA; color: white; padding: 12px; font-size: 11px; line-height: 1.6; }
            .hb-footer-link { cursor: pointer; color: white; }
            .hb-footer-sep { margin: 0 3px; opacity: 0.7; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 데이터 ---
    const rows = [
        [ { type: 'blue', con: '남구_갑(효빈)', conName: '남 갑', mp: '고정민', mpLink: '고정민.html' }, { type: 'red', con: '남구_을(효빈)', conName: '남 을', mp: '신원임', mpLink: '신원임.html' }, { type: 'blue', con: '북구_갑(효빈)', conName: '북 갑', mp: '조상현', mpLink: '조상현.html' }, { type: 'blue', con: '북구_을(효빈)', conName: '북 을', mp: '원성준', mpLink: '원성준.html' } ],
        [ { type: 'blue', con: '북구_병(효빈)', conName: '북 병', mp: '이찬대', mpLink: '이찬대.html' }, { type: 'blue', con: '서구(효빈)', conName: '서', mp: '지선진', mpLink: '지선진.html' }, { type: 'blue', con: '안천구_갑', conName: '안천 갑', mp: '고선규', mpLink: '고선규.html' }, { type: 'blue', con: '안천구_을', conName: '안천 을', mp: '신진영', mpLink: '신진영.html' } ],
        [ { type: 'blue', con: '중구-동구', conName: '중 · 동', mp: '김성민', mpLink: '김성민.html' }, { type: 'blue', con: '창전구_갑', conName: '창전 갑', mp: '추산령', mpLink: '추산령.html' }, { type: 'blue', con: '창전구_을', conName: '창전 을', mp: '노상현', mpLink: '노상현.html' }, { type: 'blue', con: '청엽구_갑(효빈)', conName: '청엽 갑', mp: '신수인', mpLink: '신수인.html' } ],
        [ { type: 'blue', con: '청엽구_을(효빈)', conName: '청엽 을', mp: '소판권', mpLink: '소판권.html', colspan: 2 }, { type: 'blue', con: '탄성군(선거구)', conName: '탄성', mp: '박청권', mpLink: '박청권.html', colspan: 2 } ]
    ];
    const regions1 = ['비례', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종'];
    const regions2 = ['경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '덕북', '덕남'];

    const makeFooterLink = (name) => {
        let query = name === '비례' ? '비례대표' : name.endsWith('시') || name.endsWith('도') ? name : name === '서울' ? '서울특별시' : name === '부산' ? '부산광역시' : name === '대구' ? '대구광역시' : name === '인천' ? '인천광역시' : name === '광주' ? '광주광역시' : name === '대전' ? '대전광역시' : name === '울산' ? '울산광역시' : name === '세종' ? '세종특별자치시' : name === '경기' ? '경기도' : name === '강원' ? '강원특별자치도' : name === '충북' ? '충청북도' : name === '충남' ? '충청남도' : name === '전북' ? '전북특별자치도' : name === '전남' ? '전라남도' : name === '경북' ? '경상북도' : name === '경남' ? '경상남도' : name === '제주' ? '제주특별자치도' : name === '덕북' ? '덕빈북도' : name === '덕남' ? '덕빈남도' : name;
        return `<span class="hb-footer-link" onclick="handleSearchFromNav('제22대 국회의원 선거/${query}')">${name}</span>`;
    };

    // --- 3. HTML 생성 ---
    const bodyId = 'hb-pol-tbody';
    let html = `
        <div class="hb-pol-wrapper">
            <table class="hb-pol-table">
                <thead>
                    <tr>
                        <th colspan="4" class="hb-pol-header-cell">
                            <div class="hb-pol-header-content">
                                <img src="이미지/hyobin1.png" class="hb-pol-logo" alt="로고" onerror="this.style.display='none'"/>
                                <span class="hb-pol-title">효빈광역시 제22대 국회의원</span>
                                <span class="hb-toggle-btn" id="hb-pol-toggle">[접기]</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody id="${bodyId}" class="hb-pol-tbody">
    `;

    rows.forEach(row => {
        html += '<tr class="hb-pol-constituency">';
        row.forEach(item => {
            const bgClass = item.type === 'red' ? 'hb-bg-red' : 'hb-bg-blue';
            const colspan = item.colspan ? `colspan="${item.colspan}"` : '';
            html += `<td class="${bgClass}" ${colspan}><a href="${item.con}.html" class="hb-link-white">${item.conName}</a></td>`;
        });
        html += '</tr><tr>';
        row.forEach(item => {
            const textClass = item.type === 'red' ? 'hb-text-red' : 'hb-text-blue';
            const bgClass = item.type === 'red' ? 'class="hb-bg-red-light"' : ''; 
            const colspan = item.colspan ? `colspan="${item.colspan}"` : '';
            html += `<td ${bgClass} style="padding: 12px 0;" ${colspan}><a href="${item.mpLink}" class="hb-link-mp ${textClass}">${item.mp}</a></td>`;
        });
        html += '</tr>';
    });

    html += `
                    <tr><td colspan="4" class="hb-pol-footer-header">선거 결과</td></tr>
                    <tr><td colspan="4" class="hb-pol-footer-body">
                        <span class="hb-footer-link font-bold" onclick="handleSearchFromNav('제21대 국회의원 선거/효빈광역시')">◀ 제21대</span><br/>
                        <div style="margin-top: 4px;">${regions1.map(makeFooterLink).join('<span class="hb-footer-sep">·</span>')}</div>
                        <div style="margin-top: 2px;">${regions2.map(makeFooterLink).join('<span class="hb-footer-sep">·</span>')}</div>
                    </td></tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;

    // --- 4. 이벤트 ---
    const toggleBtn = container.querySelector('#hb-pol-toggle');
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