/* 파일 경로: js/효빈도시구조.js */

/**
 * 효빈광역시 5. 도시구조 문단 렌더링 함수
 * @param {string} containerId - 내용을 넣을 HTML 요소의 ID
 */
function renderHyobinStructureSection(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-structure-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            /* 전체 래퍼 */
            .hb-struc-wrapper { 
                width: 100%; 
                overflow-x: auto; 
                margin-bottom: 2rem; 
                margin-top: 1rem; 
                border: 1px solid #ccc; /* 전체 테두리 */
            }

            /* 기본 테이블 스타일 */
            .hb-struc-table { 
                width: 100%; 
                min-width: 700px; 
                border-collapse: collapse; 
                font-size: 0.9rem; 
                text-align: left; 
            }
            
            /* 헤더 (로고 포함) */
            .hb-struc-thead th.main-header { 
                background-color: #7777AA; 
                color: white; 
                padding: 10px; 
                text-align: center; 
                border-bottom: 2px solid #555588;
            }
            .hb-struc-header-content { 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                gap: 10px; 
            }
            .hb-struc-logo { 
                height: 30px; 
                width: auto; 
                vertical-align: middle; 
            }
            .hb-struc-title { 
                font-weight: bold; 
                font-size: 1.2em; 
            }
            .hb-toggle-btn { 
                font-size: 0.8rem; 
                cursor: pointer; 
                margin-left: auto; /* 우측 정렬 */
                color: white; 
                opacity: 0.9;
            }

            /* 왼쪽 카테고리 헤더 */
            .hb-row-th { 
                width: 120px; 
                text-align: center; 
                font-weight: bold; 
                border-bottom: 1px solid #ccc;
                border-right: 1px solid #ccc;
                word-break: keep-all;
                padding: 10px;
            }

            /* 오른쪽 콘텐츠 셀 (Grid 컨테이너) */
            .hb-row-td {
                padding: 0; /* 패딩을 0으로 해서 내부 그리드가 꽉 차게 함 */
                border-bottom: 1px solid #ccc;
                background-color: #fff;
            }

            /* [핵심] 셀 분할 그리드 레이아웃 */
            .hb-grid-container {
                display: grid;
                /* 칸의 최소 너비를 140px로 설정, 공간 남으면 늘어남 */
                grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
                width: 100%;
            }

            /* 분할된 개별 셀 스타일 */
            .hb-grid-item {
                padding: 8px 5px;
                text-align: center;
                border-right: 1px solid #eee; /* 세로 구분선 */
                border-bottom: 1px solid #eee; /* 가로 구분선 */
                font-size: 0.85rem;
                cursor: pointer;
                transition: background 0.2s;
                display: flex;       /* 텍스트 수직 중앙 정렬 */
                align-items: center;
                justify-content: center;
                min-height: 40px;    /* 최소 높이 확보 */
            }

            /* 마우스 올렸을 때 효과 */
            .hb-grid-item:hover {
                background-color: #eef;
                font-weight: bold;
                color: #0052A4;
            }

            /* 마지막 열의 오른쪽 테두리 제거 (선택사항) */
            /* .hb-grid-item:last-child { border-right: none; } */

            /* 설명 텍스트 */
            .hb-desc-text { 
                line-height: 1.7; 
                font-size: 0.95rem; 
                text-align: justify; 
                margin-top: 15px; 
                color: #374151; 
            }
            
            .hidden { display: none; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 헬퍼 함수 (그리드 아이템 생성) ---
    const generateGridItems = (text) => {
        if (!text) return '';
        const items = text.split(',').map(t => t.trim()).filter(t => t.length > 0);

        // 각 아이템을 그리드 셀(div)로 변환
        const gridItems = items.map(itemStr => {
            // 검색어 정제 (괄호 앞부분만 사용)
            let cleanSearchTerm = itemStr.split('(')[0].trim();
            
            // 특수문자(&, -)가 포함된 경우 처리 (단순 클릭 시 전체 검색)
            if(cleanSearchTerm.includes('&')) cleanSearchTerm = cleanSearchTerm.split('&')[0].trim();

            return `<div class="hb-grid-item" onclick="handleSearchFromNav('${cleanSearchTerm}')" title="${itemStr}">${itemStr}</div>`;
        }).join('');

        return `<div class="hb-grid-container">${gridItems}</div>`;
    };

    // --- 3. 데이터 정의 ---
    const structureData = [
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
            content: '당선동, 내조동, 사복동, 오내동, 입희동, 어간지구, 비마-사노지구, 칠심동, 당가동, 요우리' 
        },
        { 
            cat: '번화가', bg: '#ff8c00', color: 'white', 
            content: '중앙로, 중보로, 효빈대학교 대학로, 효빈역, 고송교차로역, 중수역, 평당신시가지, 청엽구청, 안천역, 이자역, 이자공원역' 
        },
        { 
            cat: '신규 택지', bg: '#32cd32', color: 'white', 
            content: '쌍엽지구, 소장지구(예정), 청덕지구, 월천박산지구, 효빈동신도시, 흑택지구, 앵내지구' 
        },
        { 
            cat: '산업단지', bg: '#2e8b57', color: 'white', 
            content: '효빈산단(신흥/포장), 서증공단, 평전공단, 뇌전공업지구, 광정공업지구' 
        },
        { 
            cat: '읍면 상권', bg: '#db7093', color: 'white', 
            content: '탄성읍, 서목읍, 고해읍, 소원면, 도변읍, 흑택면' 
        }
    ];

    // --- 4. HTML 조립 ---
    const tableBodyId = 'hb-struc-tbody';
    let rows = '';
    
    structureData.forEach(row => {
        rows += `
            <tr>
                <th class="hb-row-th" style="background-color: ${row.bg}; color: ${row.color};">
                    ${row.cat}
                </th>
                <td class="hb-row-td">
                    ${generateGridItems(row.content)}
                </td>
            </tr>
        `;
    });

    const fullHtml = `
        <h2 id="s-5"><a class="section-header-link" href="#toc-box">5. 도시구조</a></h2>
        
        <div class="hb-struc-wrapper">
            <table class="hb-struc-table">
                <thead class="hb-struc-thead">
                    <tr>
                        <th colspan="2" class="main-header">
                            <div class="hb-struc-header-content">
                                <img src="이미지/hyobin1.png" class="hb-struc-logo" alt="효빈시 로고" onerror="this.style.display='none'"/>
                                <span class="hb-struc-title">효빈시의 지역구분</span>
                                <span class="hb-toggle-btn" id="hb-struc-toggle">[접기]</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody id="${tableBodyId}" class="hb-struc-tbody">
                    ${rows}
                </tbody>
            </table>
        </div>

        <div class="hb-desc-text">
            <p>도시지형이 평지이다보니 다핵구조를 띄고 있고 각 구별로 중점도심이 한개이상씩 존재한다. 중심도시권역으로 꼽히는 도심은 원도심, 고송신도시, 청엽지구, 평당신도시 4도심체제이며, 여기에 추가로 안천지구를 넣어 5도심이라고 생각하기도 한다.</p>
        </div>
    `;

    container.innerHTML = fullHtml;

    // --- 5. 접기/펼치기 기능 ---
    const toggleBtn = container.querySelector('#hb-struc-toggle');
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