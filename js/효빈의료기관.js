/* 파일 경로: assets/효빈의료기관.js */

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('hyobin-med-container');
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-med-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-med-wrapper { width: 100%; overflow-x: auto; margin-bottom: 1.5rem; }
            .hb-med-table { width: 100%; min-width: 500px; border-collapse: collapse; border: 1px solid #ccc; font-size: 0.9rem; }
            .hb-med-thead th { background-color: #7777AA; color: white; padding: 10px; position: relative; }
            .hb-med-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-med-logo { max-height: 28px; width: auto; }
            .hb-med-title { font-weight: bold; font-size: 1.1em; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }
            .hb-med-tbody { transition: all 0.2s; }
            .hb-med-tbody.hidden { display: none; }
            .hb-med-tbody th, .hb-med-tbody td { border: 1px solid #e5e7eb; padding: 10px; vertical-align: middle; }
            .hb-th-dist { background-color: #f8f9fa; color: #333; text-align: center; font-weight: bold; width: 6rem; white-space: nowrap; }
            .hb-td-content { text-align: left; }
            .hb-link { cursor: pointer; color: #0022AA; text-decoration: none; font-weight: 600; }
            .hb-link:hover { text-decoration: underline; color: #003366; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 데이터 정의 (핵심 해결책: onclick을 없애고 data-target 사용) ---
    const mkLink = (name) => `<a class="hb-link" data-target="${name}.html">${name}</a>`;

    const upperGeneral = [
        { dist: '남구', hospitals: [mkLink('엽월대학교병원')] },
        { dist: '서구 · 북구', hospitals: [mkLink('효빈대학교병원')] },
        { dist: '북구', hospitals: [mkLink('삼선대학교병원')] }
    ];

    const general = [
        { dist: '중구', hospitals: [mkLink('효빈대학교 병원 분관'), mkLink('복산병원')] },
        { dist: '남구', hospitals: [mkLink('효빈의료원'), mkLink('토장병원')] },
        { dist: '북구', hospitals: [mkLink('고송병원'), mkLink('호빈병원'), mkLink('입희병원'), mkLink('상원병원'), mkLink('청능병원')] },
        { dist: '안천구', hospitals: [mkLink('이자병원'), mkLink('안천병원'), mkLink('대령병원')] },
        { dist: '서구', hospitals: [mkLink('오상병원'), mkLink('사야병원'), mkLink('재천병원'), mkLink('사복병원'), mkLink('서효빈병원'), mkLink('효빈복지재단 사랑병원'), mkLink('오간병원'), mkLink('토선병원')] },
        { dist: '동구', hospitals: [mkLink('서홍병원'), mkLink('사가당병원'), mkLink('덕현병원')] },
        { dist: '탄성군', hospitals: [mkLink('한국보훈복지의료공단 효빈보훈병원'), mkLink('배식병원')] },
        { dist: '청엽구', hospitals: [mkLink('청엽병원'), mkLink('우전병원'), mkLink('배선병원')] },
        { dist: '창전구', hospitals: [mkLink('창전병원'), mkLink('쌍엽병원')] }
    ];

    function createTableHTML(title, data, tableId) {
        let html = `
            <div class="hb-med-wrapper">
                <table class="hb-med-table">
                    <thead class="hb-med-thead">
                        <tr>
                            <th colspan="2">
                                <div class="hb-med-header-content">
                                    <img src="이미지/hyobin1.webp" class="hb-med-logo" alt="로고" onerror="this.style.display='none'"/>
                                    <span class="hb-med-title">${title}</span>
                                    <span class="hb-toggle-btn" data-target="${tableId}">[접기]</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody id="${tableId}" class="hb-med-tbody">
        `;
        data.forEach(row => {
            html += `<tr><th class="hb-th-dist">${row.dist}</th><td class="hb-td-content">${row.hospitals.join(' · ')}</td></tr>`;
        });
        html += `</tbody></table></div>`;
        return html;
    }

    container.innerHTML = createTableHTML('효빈광역시 상급종합병원', upperGeneral, 'hb-med-upper-body') + 
                          createTableHTML('효빈광역시 관내 종합병원', general, 'hb-med-general-body');

    // --- 3. 이벤트 위임 (브라우저 차단을 뚫는 절대 실패 안 하는 클릭 로직) ---
    container.addEventListener('click', function(e) {
        // 병원 이름(링크)을 클릭했을 때
        if (e.target.classList.contains('hb-link')) {
            const targetFile = e.target.getAttribute('data-target');
            
            // HTML 하단에 있는 goToLink 함수를 강제로 실행
            if (typeof window.goToLink === 'function') {
                window.goToLink(targetFile);
            } else {
                // 만약 함수를 못 찾아도 무조건 페이지를 이동시킴
                window.location.href = targetFile;
            }
        }
        
        // 접기 버튼을 클릭했을 때
        if (e.target.classList.contains('hb-toggle-btn')) {
            const targetId = e.target.getAttribute('data-target');
            const tbody = document.getElementById(targetId);
            if (tbody) {
                if (tbody.classList.contains('hidden')) {
                    tbody.classList.remove('hidden');
                    e.target.textContent = '[접기]';
                } else {
                    tbody.classList.add('hidden');
                    e.target.textContent = '[펼치기]';
                }
            }
        }
    });
});