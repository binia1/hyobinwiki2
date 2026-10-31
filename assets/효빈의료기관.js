/* 파일 경로: js/효빈의료기관.js */

(function() {
    document.addEventListener("DOMContentLoaded", function() {
        const container = document.getElementById('hyobin-med-container');
        if (!container) return;

        // --- 1. 현재 문서 제목 감지 및 판별 ---
        let rawTitle = document.title || "";
        const h1El = document.querySelector('h1');
        if (h1El) rawTitle = h1El.textContent; 

        const cleanTitle = rawTitle.replace(/\s+/g, '');
        
        // 덕빈권 전체 상급종합병원 감지
        const isUpperHospital = cleanTitle.includes('효빈대학교병원') || 
                                cleanTitle.includes('엽월대학교병원') || 
                                cleanTitle.includes('삼선대학교병원') ||
                                cleanTitle.includes('덕북대학교병원') ||
                                cleanTitle.includes('천주효빈대병원') ||
                                cleanTitle.includes('덕남대학교병원') ||
                                cleanTitle.includes('낙주대학교병원');

        // --- 2. 테마 색상 및 스타일 정의 (하드코딩) ---
        const THEME_COLOR = "#7777AA";
        const LINK_COLOR = "#0275d8";
        
        const styleId = 'hyobin-med-style';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                .hb-med-wrapper { 
                    width: 100%; 
                    margin-bottom: 20px; 
                    border: 2px solid ${THEME_COLOR}; 
                    font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;
                    font-size: 0.85rem;
                }
                
                /* 상단 타이틀 헤더 (절대 깨지지 않는 inline-block 방식) */
                .hb-med-header { 
                    background-color: ${THEME_COLOR}; 
                    color: white; 
                    text-align: center; 
                    padding: 12px 0; 
                }
                
                /* 관내 종합병원용 헤더 테두리 박스 */
                .hb-med-header-inner {
                    display: inline-block;
                    border: 1px solid white;
                    padding: 8px 20px;
                    vertical-align: middle;
                }
                
                /* 공통 로고 스타일 (겹침 방지를 위해 inline-block 적용) */
                .hb-med-logo { 
                    display: inline-block;
                    vertical-align: middle;
                    height: 35px; /* 높이 강제 고정 */
                    width: auto; 
                    margin: 0 6px;
                    object-fit: contain;
                }
                
                /* SVG 흰색 변환 및 크기 보정 */
                .svg-white { 
                    filter: brightness(0) invert(1); 
                    height: 26px; /* SVG는 살짝 작게 */
                }

                /* 헤더 텍스트 래퍼 */
                .hb-med-title-text { 
                    display: inline-block;
                    vertical-align: middle;
                    text-align: left; 
                    margin-left: 10px;
                }
                
                .hb-med-title-sub { font-size: 0.9em; font-weight: normal; line-height: 1.2; }
                .hb-med-title-main { font-size: 1.25em; font-weight: bold; letter-spacing: 1px; line-height: 1.2; }

                /* 덕빈권 상급종합병원용 1줄 텍스트 */
                .hb-med-title-single { 
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 1.25em; 
                    font-weight: bold; 
                    margin-left: 15px;
                    color: white;
                }

                /* 펼치기/접기 토글 바 */
                .hb-toggle-bar {
                    background-color: #f8f9fa;
                    border-bottom: 1px solid #dcdcdc;
                    text-align: center;
                    padding: 6px 0;
                    font-size: 0.8rem;
                    font-weight: bold;
                    color: #333;
                    cursor: pointer;
                    user-select: none;
                }
                .hb-toggle-bar:hover { background-color: #e9ecef; }

                /* 공통 테이블 스타일 */
                .hb-med-table { 
                    width: 100%; 
                    border-collapse: collapse; 
                    background-color: white;
                    table-layout: fixed;
                }
                .hb-med-tbody.hidden { display: none; }
                .hb-med-table th, .hb-med-table td { 
                    border: 1px solid #dcdcdc; 
                    padding: 8px 12px; 
                    vertical-align: middle; 
                }
                
                /* 종합병원 리스트 (가로형) 컬럼 */
                .hb-med-table th.hb-th-row { 
                    background-color: ${THEME_COLOR}; 
                    color: white; 
                    text-align: center; 
                    font-weight: bold; 
                }
                .hb-td-content { text-align: left; color: #333; line-height: 1.5; }

                /* 상급종합병원 그리드 (4열 격자형) 셀 */
                .hb-grid-cell { text-align: center; padding: 14px 8px; vertical-align: middle; }
                .hb-grid-loc { font-size: 0.8em; color: #666; margin-top: 5px; }
                
                /* 링크 및 구분자 스타일 */
                .hb-link { 
                    cursor: pointer; 
                    color: ${LINK_COLOR}; 
                    text-decoration: none; 
                    font-weight: 500;
                }
                .hb-link:hover { text-decoration: underline; }
                .hb-sep { 
                    color: white;
                    margin: 0 6px; 
                    font-size: 0.9em;
                }
                .hb-sep-gray {
                    color: #999;
                    margin: 0 6px;
                    font-size: 0.9em;
                }
                
                /* 하단 푸터 */
                .hb-med-footer {
                    background-color: ${THEME_COLOR};
                    color: white;
                    text-align: center;
                    padding: 8px;
                    font-size: 0.8rem;
                    font-weight: bold;
                }
                .hb-med-footer span { cursor: pointer; }
                .hb-med-footer span:hover { text-decoration: underline; }
            `;
            document.head.appendChild(style);
        }

        // --- 3. 데이터 정의 (★ 핵심 수정 부분: goToLink 적용) ---
        const mkLink = (displayName, targetName) => {
            const searchTarget = targetName || displayName;
            // 에러를 유발하던 부분을 걷어내고, HTML에 있는 goToLink 함수를 안정적으로 호출합니다.
            // 함수가 인식되지 않는 만약의 사태를 대비해 일반 링크 이동(location.href) 폴백도 넣었습니다.
            return `<a class="hb-link" onclick="if(typeof goToLink === 'function') { goToLink('${searchTarget}.html'); } else { window.location.href = '${searchTarget}.html'; }">${displayName}</a>`;
        };
        const sepG = `<span class="hb-sep-gray">·</span>`;
        const sepW = `<span class="hb-sep">·</span>`;

        const upperGridData = [
            { name: '효빈대학교병원', target: '효빈대학교병원', loc: '효빈 서구' },
            { name: '엽월대학교병원', target: '엽월대학교병원', loc: '효빈 남구' },
            { name: '삼선대학교병원', target: '삼선대학교병원', loc: '효빈 북구' },
            { name: '덕북대학교병원', target: '덕북대학교병원', loc: '빈주' },
            { name: '천주효빈대병원', target: '천주효빈대병원', loc: '천주' },
            { name: '덕남대학교병원', target: '덕남대학교병원', loc: '덕주' },
            { name: '낙주대학교병원', target: '낙주대학교병원', loc: '낙주' }
        ];

        const generalData = [
            { dist: '중구', hospitals: [mkLink('효빈대학교 병원 분관', '효빈대학교병원'), mkLink('복산병원')] },
            { dist: '남구', hospitals: [mkLink('엽월대학교병원'), mkLink('효빈의료원'), mkLink('토장병원')] },
            { dist: '서구', hospitals: [mkLink('효빈대학교병원'), mkLink('오상병원'), mkLink('사야병원'), mkLink('재천병원'), mkLink('사복병원'), mkLink('서효빈병원'), mkLink('효빈복지재단 사랑병원'), mkLink('오간병원'), mkLink('토선병원')] },
            { dist: '북구', hospitals: [mkLink('삼선대학교병원'), mkLink('고송병원'), mkLink('호빈병원'), mkLink('입희병원'), mkLink('상원병원'), mkLink('청능병원')] },
            { dist: '안천구', hospitals: [mkLink('이자병원'), mkLink('안천병원'), mkLink('대령병원'), mkLink('성천병원')] },
            { dist: '동구', hospitals: [mkLink('서홍병원'), mkLink('사가당병원'), mkLink('덕현병원')] },
            { dist: '청엽구', hospitals: [mkLink('청엽병원'), mkLink('우전병원'), mkLink('배선병원')] },
            { dist: '창전구', hospitals: [mkLink('창전병원'), mkLink('쌍엽병원')] },
            { dist: '탄성군', hospitals: [mkLink('한국보훈복지의료공단 효빈보훈병원'), mkLink('배식병원')] }
        ];

        // --- 4. 테이블 생성 헬퍼 함수 ---

        // A. 4열 그리드형 생성기
        function createGridHTML(title, data, tableId) {
            let html = `
                <div class="hb-med-wrapper">
                    <!-- 헤더 구역 -->
                    <div class="hb-med-header">
                        <!-- 이미지들을 감싸는 래퍼 (inline-block) -->
                        <span style="display: inline-block; vertical-align: middle;">
                            <img src="이미지/효빈광역시_흰색로고.webp" class="hb-med-logo" alt="효빈광역시" onerror="this.style.display='none'"/>
                            <img src="이미지/svg/덕빈북도.svg" class="hb-med-logo svg-white" alt="덕빈북도" onerror="this.style.display='none'"/>
                            <img src="이미지/svg/덕빈남도.svg" class="hb-med-logo svg-white" alt="덕빈남도" onerror="this.style.display='none'"/>
                        </span>
                        <!-- 타이틀 텍스트 (inline-block) -->
                        <span class="hb-med-title-single">${title}</span>
                    </div>
                    
                    <div class="hb-toggle-bar" data-target="${tableId}">[ 펼치기 · 접기 ]</div>
                    
                    <table class="hb-med-table">
                        <colgroup>
                            <col style="width: 25%;"><col style="width: 25%;"><col style="width: 25%;"><col style="width: 25%;">
                        </colgroup>
                        <tbody id="${tableId}" class="hb-med-tbody">
            `;

            for (let i = 0; i < data.length; i += 4) {
                html += `<tr>`;
                for (let j = 0; j < 4; j++) {
                    const item = data[i + j];
                    if (item) {
                        html += `
                            <td class="hb-grid-cell">
                                ${mkLink(item.name, item.target)}<br>
                                <div class="hb-grid-loc">(${item.loc})</div>
                            </td>`;
                    } else {
                        html += `<td class="hb-grid-cell"></td>`;
                    }
                }
                html += `</tr>`;
            }

            html += `
                        </tbody>
                    </table>
                    <div class="hb-med-footer">
                        <span>효빈광역시 종합병원</span> ${sepW} 
                        <span>덕빈북도 종합병원</span> ${sepW} 
                        <span>덕빈남도 종합병원</span>
                    </div>
                </div>
            `;
            return html;
        }

        // B. 구역별 가로형 생성기
        function createListHTML(subTitle, mainTitle, data, tableId) {
            let html = `
                <div class="hb-med-wrapper">
                    <div class="hb-med-header">
                        <div class="hb-med-header-inner">
                            <img src="이미지/효빈광역시_흰색로고.webp" class="hb-med-logo" alt="효빈광역시" onerror="this.style.display='none'"/>
                            <div class="hb-med-title-text">
                                <div class="hb-med-title-sub">${subTitle}</div>
                                <div class="hb-med-title-main">${mainTitle}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="hb-toggle-bar" data-target="${tableId}">[ 펼치기 · 접기 ]</div>
                    
                    <table class="hb-med-table">
                        <colgroup>
                            <col style="width: 15%;">
                            <col style="width: 85%;">
                        </colgroup>
                        <tbody id="${tableId}" class="hb-med-tbody">
            `;

            data.forEach(row => {
                html += `
                    <tr>
                        <th class="hb-th-row">${row.dist}</th>
                        <td class="hb-td-content">${row.hospitals.join(sepG)}</td>
                    </tr>
                `;
            });

            html += `
                        </tbody>
                    </table>
                    
                    <div class="hb-med-footer">
                        <span>관련 문서</span> ${sepW} <span>산하 기관</span> ${sepW} <span>종합병원</span>
                    </div>
                </div>
            `;
            return html;
        }

        // --- 5. 문서 제목에 따른 조건부 렌더링 ---
        let finalHtml = '';
        
        if (isUpperHospital) {
            finalHtml += createGridHTML('덕빈권 상급종합병원', upperGridData, 'hb-med-upper-body');
            finalHtml += createListHTML('효빈광역시', '관내 종합병원', generalData, 'hb-med-general-body');
        } else {
            finalHtml += createListHTML('효빈광역시', '관내 종합병원', generalData, 'hb-med-general-body');
        }

        container.innerHTML = finalHtml;

        // --- 6. 이벤트 연결 (접기/펼치기) ---
        container.querySelectorAll('.hb-toggle-bar').forEach(bar => {
            bar.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const tbody = document.getElementById(targetId);
                if (tbody) {
                    tbody.classList.toggle('hidden');
                }
            });
        });
    });
})();