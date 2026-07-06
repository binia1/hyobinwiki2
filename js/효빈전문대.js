/* 파일 경로: js/효빈전문대.js */

/**
 * 효빈광역시 전문대학 목록 테이블 렌더링 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderHyobinCollegeTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 (대학 목록과 디자인 통일) ---
    const styleId = 'hyobin-college-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-col-wrapper { width: 100%; overflow-x: auto; margin-bottom: 1rem; }
            .hb-col-table { width: 100%; min-width: 500px; border-collapse: collapse; border: 1px solid #ccc; font-size: 0.8rem; }
            
            /* 헤더 스타일 */
            .hb-col-thead th { background-color: #7777AA; color: white; padding: 10px; position: relative; }
            .hb-col-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-col-logo { max-height: 28px; width: auto; }
            .hb-col-title { font-weight: bold; font-size: 1.2em; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }

            /* 본문 스타일 */
            .hb-col-tbody { transition: all 0.2s; }
            .hb-col-tbody.hidden { display: none; }
            .hb-col-tbody th, .hb-col-tbody td { border: 1px solid #e5e7eb; padding: 6px 8px; vertical-align: middle; }
            
            /* 셀 스타일 유틸리티 */
            .hb-th-type { text-align: center; font-weight: bold; width: 5rem; background-color: #7777aa; }
            .hb-td-initial { text-align: center; font-weight: bold; width: 2rem; background-color: #fff; }
            .hb-td-content { text-align: left; }

            /* 링크 스타일 */
            .hb-link { cursor: pointer; color: inherit; text-decoration: none; }
            .hb-link:hover { text-decoration: underline; color: #2563eb; }
            .hb-sep { margin: 0 4px; color: #9ca3af; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 데이터 정의 ---
    const mkLink = (name) => `<span class="hb-link" onclick="handleSearchFromNav('${name}')">${name}</span>`;

    // 전문대학 데이터 (초성별)
    const specialized = [
        { char: 'ㅎ', schools: [mkLink('효빈보건대학교'), mkLink('해총대학교')] },
        { char: 'ㅊ', schools: [mkLink('치고대학교')] },
        { char: 'ㄷ', schools: [mkLink('대찬대학교')] },
        { char: 'ㅅ', schools: [mkLink('선자대학교'), mkLink('삽곡대학교')] },
        { char: 'ㅇ', schools: [mkLink('안신대학교'), mkLink('안월대학교')] },
        { char: 'ㅎ', schools: [mkLink('효빈과학대학교'), mkLink('효빈예술대학교')] }
    ];

    // 기능대학 데이터
    const polytechnic = {
        char: 'ㅎ',
        school: mkLink('한국폴리텍VIII대학(효빈캠퍼스)')
    };

    // --- 3. HTML 조립 ---
    const bodyId = 'hb-col-tbody';
    let html = `
        <div class="hb-col-wrapper">
            <table class="hb-col-table">
                <thead class="hb-col-thead">
                    <tr>
                        <th colspan="3">
                            <div class="hb-col-header-content">
                                <img src="이미지/hyobin1.webp" class="hb-col-logo" alt="로고" onerror="this.style.display='none'"/>
                                <span class="hb-col-title">효빈광역시의 전문대학</span>
                                <span class="hb-toggle-btn" id="hb-col-toggle">[접기]</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody id="${bodyId}" class="hb-col-tbody">
                    <tr>
                        <th class="hb-th-type" rowspan="6">전문</th>
                        <td class="hb-td-initial">${specialized[0].char}</td>
                        <td class="hb-td-content">${specialized[0].schools.join('<span class="hb-sep">·</span>')}</td>
                    </tr>
    `;

    // 전문대학 나머지 행 반복
    for (let i = 1; i < specialized.length; i++) {
        html += `
            <tr>
                <td class="hb-td-initial">${specialized[i].char}</td>
                <td class="hb-td-content">${specialized[i].schools.join('<span class="hb-sep">·</span>')}</td>
            </tr>
        `;
    }

    // 기능대학
    html += `
                    <tr>
                        <th class="hb-th-type">기능</th>
                        <td class="hb-td-initial">${polytechnic.char}</td>
                        <td class="hb-td-content">${polytechnic.school}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;

    // --- 4. 이벤트 연결 ---
    const toggleBtn = container.querySelector('#hb-col-toggle');
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