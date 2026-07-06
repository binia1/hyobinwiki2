/* 파일 경로: js/효빈인구.js */

/**
 * 효빈광역시 인구 추이 테이블 생성 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderHyobinPopulationTable(containerId) {
    const container = document.getElementById(containerId);
    
    // 타겟 요소가 없으면 실행하지 않음 (오류 방지)
    if (!container) return;

    // 1. 데이터 정의 (최대 300만명 기준으로 width 계산, 1949년~2025년 완벽 반영)
    const tableData = [
        {
            type: 'history',
            content: '<strong>1949년 8월 15일</strong> 덕빈북도 효빈부 → <strong>효빈시</strong> 개칭'
        },
        { type: 'stat', year: '1949년', pop: '395,311명', width: '13.2%' },
        { type: 'stat', year: '1955년', pop: '460,096명', width: '15.3%' },
        { type: 'stat', year: '1960년', pop: '528,115명', width: '17.6%' },
        { type: 'stat', year: '1966년', pop: '593,816명', width: '19.8%' },
        { type: 'stat', year: '1970년', pop: '877,225명', width: '29.2%' },
        { type: 'stat', year: '1975년', pop: '1,235,343명', width: '41.2%' },
        { type: 'stat', year: '1980년', pop: '1,514,404명', width: '50.5%' },
        {
            type: 'history',
            content: '<strong>1981년 7월 1일</strong> 덕빈북도 효빈시 → <strong>효빈직할시</strong> 분리 승격<br><strong>1983년 2월 15일</strong> 덕빈북도 안천시 → <strong>효빈직할시</strong>로 편입'
        },
        { type: 'stat', year: '1985년', pop: '1,830,061명', width: '61.0%' },
        { type: 'stat', year: '1990년', pop: '2,046,376명', width: '68.2%' },
        {
            type: 'history',
            content: '<strong>1995년 1월 1일</strong> 효빈직할시 → <strong>효빈광역시</strong> 개칭<br><strong>1995년 3월 1일</strong> 덕빈북도 탄성군 → <strong>효빈광역시</strong>로 편입 (도농복합형태)'
        },
        { type: 'stat', year: '1995년', pop: '2,271,111명', width: '75.7%' },
        { type: 'stat', year: '2000년', pop: '2,401,697명', width: '80.1%' },
        { type: 'stat', year: '2005년', pop: '2,466,659명', width: '82.2%' },
        { type: 'stat', year: '2010년', pop: '2,584,443명', width: '86.1%' },
        { type: 'stat', year: '2015년', pop: '2,720,665명', width: '90.7%' },
        { type: 'stat', year: '2020년', pop: '2,832,860명', width: '94.4%' },
        { type: 'stat', year: '2025년 7월', pop: '2,967,406명', width: '98.9%', highlight: true }
    ];

    // 2. CSS 스타일 정의 (한 번만 주입)
    const styleId = 'hyobin-table-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-wiki-table { width: 100%; font-size: 0.9rem; text-align: center; border-collapse: collapse; border: 1px solid #ccc; font-family: sans-serif; }
            .hb-caption { font-weight: bold; margin-bottom: 10px; caption-side: top; font-size: 1.1em; padding: 10px; }
            .hb-thead tr { background-color: #7777AA; color: white; }
            .hb-th { padding: 8px; border: 1px solid #ccc; }
            .hb-td { padding: 5px; border-bottom: 1px solid #eee; border-left: 1px solid #eee; border-right: 1px solid #eee; }
            .hb-history-td { text-align: left; background-color: #f0f0f0; padding: 6px 10px; font-size: 0.85em; border-bottom: 1px solid #ddd; border-top: 1px solid #ddd; }
            .hb-graph-td { text-align: left; padding: 4px 8px; vertical-align: middle; }
            .hb-bar { background: linear-gradient(90deg, #7777AA, #9999CC); height: 16px; border-radius: 2px; display: block; }
            .hb-highlight { background-color: #eef2ff; font-weight: bold; }
            .hb-footer { text-align: left; font-size: 0.8em; padding: 8px 10px; color: #666; border-top: 1px solid #ccc; }
        `;
        document.head.appendChild(style);
    }

    // 3. HTML 조립
    let html = `
        <div class="wiki-table-container">
            <table class="hb-wiki-table">
                <caption class="hb-caption">효빈광역시 인구 추이 (1949년~현재)</caption>
                <thead class="hb-thead">
                    <tr>
                        <th class="hb-th" style="width: 15%;">연도</th>
                        <th class="hb-th" style="width: 25%;">인구</th>
                        <th class="hb-th">그래프 (300만 기준)</th>
                    </tr>
                </thead>
                <tbody>
    `;

    tableData.forEach(row => {
        if (row.type === 'history') {
            html += `<tr><td colspan="3" class="hb-history-td">${row.content}</td></tr>`;
        } else {
            const trClass = row.highlight ? 'class="hb-highlight"' : '';
            html += `
                <tr ${trClass}>
                    <td class="hb-td">${row.year}</td>
                    <td class="hb-td">${row.pop}</td>
                    <td class="hb-td hb-graph-td"><div class="hb-bar" style="width: ${row.width};"></div></td>
                </tr>
            `;
        }
    });

    html += `
                <tr>
                    <td colspan="3" class="hb-footer">
                        * 인구는 해당 연도 행정구역 기준, 그래프 최대 값은 300만 명.<br/>
                        * 1949-1990: 통계청 인구총조사, 1995-현재: 행정안전부 주민등록인구통계 (외국인 포함 여부에 따라 상이할 수 있음)
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;
}