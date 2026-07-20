/* 파일 경로: js/효빈공공기관.js */

/**
 * 효빈광역시 지방공공기관 내비게이션 틀 렌더링 함수
 * @param {string} containerId - 틀을 넣을 HTML 요소의 ID
 */
function renderHyobinPublicOrg(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 (Tailwind 의존성 제거 및 독립 스타일 구축) ---
    const styleId = 'hyobin-public-org-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            /* 전체 틀 스타일 */
            .hb-org-frame {
                border: 2px solid #7777AA;
                margin-bottom: 2rem;
                font-family: 'Noto Sans KR', sans-serif;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            }

            /* 헤더 스타일 */
            .hb-org-header {
                background-color: #7777AA;
                color: white;
                padding: 5px;
                text-align: center;
                font-weight: bold;
                font-size: 1rem;
            }
            .hb-org-header a {
                color: white;
                text-decoration: none;
            }
            .hb-org-header a:hover {
                text-decoration: underline;
            }
            .hb-org-logo {
                display: inline-block;
                vertical-align: middle;
                margin-right: 4px;
                height: 20px;
                width: auto;
            }

            /* 본문 컨테이너 */
            .hb-org-body {
                padding: 10px;
                text-align: center;
                background-color: white;
                font-size: 0.9rem; /* text-sm 대응 */
                line-height: 1.6;
            }

            /* 섹션 구분 */
            .hb-org-section {
                margin-bottom: 8px;
            }
            .hb-org-section.has-border {
                border-top: 1px dashed #d1d5db; /* gray-300 */
                padding-top: 8px;
            }

            /* 타이틀 텍스트 (지방공기업 등) */
            .hb-org-title {
                font-weight: bold;
                color: #7777AA;
                display: inline-block;
                margin-bottom: 2px;
            }

            /* 링크 스타일 */
            .hb-org-link {
                color: #0022aa; /* var(--wiki-link) 대응 */
                text-decoration: none;
                cursor: pointer;
                margin: 0 2px;
            }
            .hb-org-link:hover {
                text-decoration: underline;
            }
            
            /* 구분선 (|) 스타일 */
            .hb-sep {
                color: #ccc;
                margin: 0 2px;
            }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 데이터 정의 (나중에 수정하기 편하도록 분리) ---
    const enterprises = [
        '효빈광역시상수도', '효빈광역시하수도', '효빈관광공사', 
        '효빈교통공사', '효빈도시공사', '효빈시설공단', 
        '효빈환경공단', '효빈문화공사'
    ];

    const fundedInstitutions = [
        '효빈경제진흥원', '효빈글로벌도시재단', '효빈디자인진흥원', '효빈문화재단',
        '효빈연구원', '효빈광역시사회서비스원', '효빈신용보증재단',
        '효빈성평등가족과 평생교육진흥원', '효빈의료원', '효빈정보산업진흥원',
        '효빈테크노파크', '만화애니메이션의전당', '효빈산업과학혁신원',
        '효빈문화회관', '효빈애니메이션본부'
    ];

    const investedInstitutions = [
        'HSCO', '효빈 컬쳐레스풀'
    ];

    // --- 3. 헬퍼 함수 (링크 생성) ---
    const makeLinks = (list) => {
        return list.map(name => {
            // 링크 주소가 별도로 지정되지 않았다면 이름.html로 가정
            const linkUrl = name.includes('평생교육진흥원') ? '효빈성평등가족과_평생교육진흥원.html' : `${name}.html`;
            return `<a class="hb-org-link" href="${linkUrl}">${name}</a>`;
        }).join('<span class="hb-sep">|</span>');
    };

    // --- 4. HTML 조립 ---
    const html = `
        <div class="hb-org-frame">
            <div class="hb-org-header">
                <img class="hb-org-logo" src="이미지/효빈시_로고.webp" onerror="this.src='https://placehold.co/20x20?text=LOGO'"/> 
                <a href="효빈광역시.html">효빈광역시의 지방공공기관</a>
            </div>
            <div class="hb-org-body">
                <div class="hb-org-section">
                    <span class="hb-org-title">지방공기업</span><br/>
                    ${makeLinks(enterprises)}
                </div>
                
                <div class="hb-org-section has-border">
                    <span class="hb-org-title">지방출연기관</span><br/>
                    ${makeLinks(fundedInstitutions)}
                </div>
                
                <div class="hb-org-section has-border">
                    <span class="hb-org-title">지방출자기관</span><br/>
                    ${makeLinks(investedInstitutions)}
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}