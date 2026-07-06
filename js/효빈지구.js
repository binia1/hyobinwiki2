/* 파일 경로: js/효빈지구.js */

// ============================================================
// [1] 데이터 정의
// ============================================================
const HYOBIN_DISTRICT_DATA = [
    { 
        cat: '도심', bg: '#004080', color: 'white', 
        content: '중앙로, 중보로(원도심), 고송신도시, 평당신도시, 청엽지구, 안천지구(부도심)' 
    },
    { 
        cat: '부도심', bg: '#4da6ff', color: 'white', 
        content: '덕현지구, 사가당동(역전지구), 과진지구, 중수지구, 항동물류지구, 우전지구, 창전지구, 도변지구, 이자지구' 
    },
    { 
        cat: '지역중심', bg: '#ffd700', color: 'black', 
        content: '당선동, 내조동, 사복동, 오내동, 어간동, 비마동, 칠심동, 당가동, 요우리' 
    },
    { 
        cat: '번화가', bg: '#ff8c00', color: 'white', 
        content: '중앙로, 중보로, 효빈대학교, 효빈역, 고송교차로역, 중수역, 평당동, 청엽구청, 안천역, 이자역, 이자공원역' 
    },
    { 
        cat: '신규 택지', bg: '#32cd32', color: 'white', 
        content: '쌍엽지구, 소장지구(예정), 청덕지구, 월천동, 효빈동신도시, 흑택루비지구, 앵내지구' 
    },
    { 
        cat: '산업단지', bg: '#2e8b57', color: 'white', 
        content: '효빈공단(신흥/포장/헌이송/마잡/동곡/팔조), 서목해양공단, 평전공단(평전/신영/채산), 뇌전공업단지, 진백-광정산업단지, 항동물류지구' 
    },
    { 
        cat: '읍면 상권', bg: '#db7093', color: 'white', 
        content: '탄성읍, 서목읍, 고해읍, 소원면, 도변읍, 흑택면' 
    }
];

// ============================================================
// [2] 렌더링 엔진
// ============================================================
function renderHyobinNav(container, title, data) {
    // container가 문자열 ID면 요소를 찾고, 요소 자체면 그대로 사용
    const targetElement = (typeof container === 'string') ? document.getElementById(container) : container;
    
    if (!targetElement) return;
    
    // 이미 렌더링 된 경우(중복 방지) 체크
    if (targetElement.getAttribute('data-rendered') === 'true') return;

    // 스타일 주입 (한 번만 실행)
    const styleId = 'hyobin-districts-nav-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-nav-wrapper { width: 100%; overflow-x: auto; margin-top: 1rem; margin-bottom: 2rem; border: 1px solid #ccc; box-shadow: 0 2px 5px rgba(0,0,0,0.05); background-color: white; }
            .hb-nav-table { width: 100%; min-width: 600px; border-collapse: collapse !important; font-size: 0.9rem; text-align: left; border: 1px solid #ccc !important; table-layout: fixed !important; }
            .hb-nav-thead th.main-header { background-color: #7777AA !important; color: white !important; padding: 10px; text-align: center; border-bottom: 2px solid #555588 !important; border: 1px solid #ccc !important; }
            .hb-nav-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; position: relative; }
            .hb-nav-logo { height: 24px; width: auto; vertical-align: middle; display: inline-block !important; }
            .hb-nav-title { font-weight: bold; font-size: 1.1em; }
            .hb-nav-toggle-btn { font-size: 0.8rem; cursor: pointer; color: white; opacity: 0.9; position: absolute; right: 5px; }
            .hb-nav-th { width: 100px !important; text-align: center !important; font-weight: bold; border: 1px solid #ccc !important; word-break: keep-all; padding: 5px !important; vertical-align: middle !important; font-size: 0.85rem !important; }
            .hb-nav-td { padding: 0 !important; border: 1px solid #ccc !important; background-color: #fff !important; vertical-align: middle !important; }
            .hb-nav-grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); width: 100%; margin: 0; border: none; }
            .hb-nav-grid-item { padding: 6px 4px; text-align: center; border-right: 1px solid #eee; border-bottom: 1px solid #eee; font-size: 0.85rem; cursor: pointer; transition: background 0.2s; display: flex; align-items: center; justify-content: center; min-height: 36px; color: #373a3c; text-decoration: none; }
            .hb-nav-grid-item:hover { background-color: #eef !important; font-weight: bold; color: #0052A4 !important; }
            .hidden { display: none; }
        `;
        document.head.appendChild(style);
    }

    const generateGridItems = (text) => {
        if (!text) return '';
        const items = text.split(',').map(t => t.trim()).filter(t => t.length > 0);
        return `<div class="hb-nav-grid-container">` + 
            items.map(itemStr => {
                let cleanSearchTerm = itemStr.split('(')[0].trim();
                if(cleanSearchTerm.includes('&')) cleanSearchTerm = cleanSearchTerm.split('&')[0].trim();
                return `<div class="hb-nav-grid-item" onclick="location.href='${cleanSearchTerm}.html'" title="${itemStr}">${itemStr}</div>`;
            }).join('') + 
        `</div>`;
    };

    const tableBodyId = 'hb-nav-tbody-' + Math.floor(Math.random() * 100000);
    let rows = '';
    
    data.forEach(row => {
        rows += `
            <tr>
                <th class="hb-nav-th" style="background-color: ${row.bg} !important; color: ${row.color} !important;">
                    ${row.cat}
                </th>
                <td class="hb-nav-td">
                    ${generateGridItems(row.content)}
                </td>
            </tr>
        `;
    });

    targetElement.innerHTML = `
        <div class="hb-nav-wrapper">
            <table class="hb-nav-table">
                <colgroup>
                    <col style="width: 100px !important;">
                    <col style="width: auto;">
                </colgroup>
                <thead class="hb-nav-thead">
                    <tr>
                        <th colspan="2" class="main-header">
                            <div class="hb-nav-header-content">
                                <img src="이미지/효빈시_로고.webp" class="hb-nav-logo" alt="로고" onerror="this.style.display='none'"/>
                                <span class="hb-nav-title">${title}</span>
                                <span class="hb-nav-toggle-btn" id="btn-${tableBodyId}">[접기]</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody id="${tableBodyId}" class="hb-nav-tbody">
                    ${rows}
                </tbody>
            </table>
        </div>
    `;

    // 렌더링 완료 표시 (중복 방지용)
    targetElement.setAttribute('data-rendered', 'true');

    // 이벤트 연결
    document.getElementById(`btn-${tableBodyId}`)?.addEventListener('click', function() {
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

// ============================================================
// [3] 실행 함수 (자동 실행 포함)
// ============================================================

// 수동 호출용 함수 (필요하면 사용)
function renderHyobinDistrictsNav(containerId) {
    renderHyobinNav(containerId, "효빈시의 지역구분", HYOBIN_DISTRICT_DATA);
}

// ★★★ [핵심] 페이지 로드 시 자동 실행 ★★★
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. 기본 ID 'hyobin-districts-nav'가 있으면 무조건 그립니다.
    const defaultContainer = document.getElementById('hyobin-districts-nav');
    if (defaultContainer) {
        renderHyobinDistrictsNav(defaultContainer);
    }

    // 2. 여러 개 띄우고 싶을 때: class="hb-nav-auto" 가 붙은 애들도 다 찾아서 그립니다.
    // 사용법: <div class="hb-nav-auto"></div>
    const autoContainers = document.querySelectorAll('.hb-nav-auto');
    autoContainers.forEach(container => {
        renderHyobinDistrictsNav(container);
    });

});