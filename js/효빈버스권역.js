/* 파일 경로: js/효빈버스권역.js */

/**
 * 효빈광역시 버스 권역 구분 테이블 렌더링 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderHyobinBusRegionTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-bus-region-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-breg-wrapper { width: 100%; overflow-x: auto; margin-bottom: 1.5rem; margin-top: 1rem; }
            .hb-breg-table { width: 100%; min-width: 500px; border-collapse: collapse; border: 1px solid #ccc; font-size: 0.78rem; text-align: left; }
            .hb-breg-table th, .hb-breg-table td { border: 1px solid #e5e7eb; padding: 8px 10px; vertical-align: middle; }
            
            /* 헤더 스타일 (로고 적용) */
            .hb-breg-thead th.main-header { background-color: #7777AA; color: white; padding: 10px; position: relative; text-align: center; }
            .hb-breg-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-breg-logo { max-height: 28px; width: auto; }
            .hb-breg-title { font-weight: bold; font-size: 1.1em; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; color: white; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }

            /* 본문 토글용 */
            .hb-breg-tbody { transition: all 0.2s; }
            .hb-breg-tbody.hidden { display: none; }

            /* 셀 스타일 */
            .hb-th-rowspan { background-color: #f9fafb; font-weight: bold; text-align: center; width: 4rem; color: #333; border-right: 1px solid #ccc; }
            .hb-td-code { text-align: center; font-weight: bold; width: 3rem; background-color: #fff; border-right: 1px solid #eee; }
            .hb-td-content { text-align: left; }

            /* 링크 스타일 (밑줄 제거) */
            .hb-link { cursor: pointer; color: inherit; text-decoration: none; border: none; }
            .hb-link:hover { text-decoration: underline; color: #004EA2; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 헬퍼 함수 ---
    const mkLink = (name, query = null) => {
        const q = query || name;
        return `<span class="hb-link" onclick="handleSearchFromNav('${q}')">${name}</span>`;
    };

    // --- 3. 데이터 정의 (누락 없이 작성) ---
    const regions = [
        { code: '1', content: `${mkLink('중구')}, ${mkLink('서구 당선동')}, ${mkLink('내성동')}` },
        { code: '2', content: `${mkLink('서구')}(당선동, 내성동 제외), ${mkLink('북구 고송신도시')}` },
        { code: '3', content: `${mkLink('북구 중수지구')}` },
        { code: '4', content: `${mkLink('안천구')} 본청 관할 지역, ${mkLink('도변읍')}, ${mkLink('흑택면')}` },
        { code: '5', content: `${mkLink('이자출장소')} 및 ${mkLink('소원면')}, ${mkLink('고해읍')}, ${mkLink('도향면')}, ${mkLink('정근면')}` },
        { code: '6', content: `${mkLink('탄성군')} 잔여 지역` },
        { code: '7', content: `${mkLink('창전구')} 지역` },
        { code: '8', content: `${mkLink('청엽구')} 지역` },
        { code: '9', content: `${mkLink('남구')} 지역` }
    ];

    // --- 4. HTML 조립 ---
    const tableBodyId = 'hb-breg-tbody';
    let rows = '';

    // 첫 번째 행 (Rowspan 포함)
    rows += `
        <tr>
            <th class="hb-th-rowspan" rowspan="${regions.length}">권역</th>
            <td class="hb-td-code">${regions[0].code}</td>
            <td class="hb-td-content">${regions[0].content}</td>
        </tr>
    `;

    // 나머지 행
    for (let i = 1; i < regions.length; i++) {
        rows += `
            <tr>
                <td class="hb-td-code">${regions[i].code}</td>
                <td class="hb-td-content">${regions[i].content}</td>
            </tr>
        `;
    }

    const fullHtml = `
        <div class="hb-breg-wrapper">
            <table class="hb-breg-table">
                <thead class="hb-breg-thead">
                    <tr>
                        <th colspan="3" class="main-header">
                            <div class="hb-breg-header-content">
                                <img src="이미지/hyobin1.webp" class="hb-breg-logo" alt="로고" onerror="this.style.display='none'"/>
                                <span class="hb-breg-title">권역 구분</span>
                                <span class="hb-toggle-btn" id="hb-breg-toggle">[접기]</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody id="${tableBodyId}" class="hb-breg-tbody">
                    ${rows}
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = fullHtml;

    // --- 5. 이벤트 연결 ---
    const toggleBtn = container.querySelector('#hb-breg-toggle');
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