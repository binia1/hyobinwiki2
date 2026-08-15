/* 파일 경로: js/효빈전문대.js */

/**
 * 효빈광역시 전문대학 목록 테이블 렌더링 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderHyobinCollegeTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 (대학 목록과 완벽히 통일) ---
    const styleId = 'hyobin-col-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-col-wrapper { width: 100%; border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; margin-bottom: 20px; font-size: 0.85rem; }
            .hb-col-table { width: 100%; border-collapse: collapse; text-align: center; }
            
            /* 헤더 스타일 (#7777AA) */
            .hb-col-thead .hb-header-title { background-color: #7777aa; color: white; padding: 8px; font-weight: bold; font-size: 1.1rem; border: 1px solid #7777aa; }
            .hb-header-content { display: flex; align-items: center; justify-content: center; gap: 8px; }
            .hb-header-logo { height: 20px; width: auto; filter: brightness(0) invert(1); object-fit: contain; pointer-events: none; } 
            
            /* 접기/펼치기 버튼 행 */
            .hb-col-thead .hb-toggle-row { background-color: #fff; padding: 6px; border: 1px solid #ccc; border-bottom: none; font-weight: bold; font-size: 0.95rem; }
            .hb-toggle-btn { cursor: pointer; user-select: none; color: #333; }
            .hb-toggle-btn:hover { text-decoration: underline; }
            
            /* 본문 영역 */
            .hb-col-tbody { transition: display 0.2s; }
            .hb-col-tbody.hidden { display: none; }
            .hb-col-tbody th, .hb-col-tbody td { border: 1px solid #ccc; padding: 8px; vertical-align: middle; }
            
            /* 카테고리 헤더 */
            .hb-th-category { background-color: #0c1b54; color: white; width: 60px; font-weight: 900; font-size: 0.95rem; }
            .hb-th-category.poly { background-color: #4a5568; }
            
            /* 초성칸 */
            .hb-td-initial { background-color: #f9f9f9; width: 30px; font-weight: 900; color: #000; }
            
            /* 대학 목록칸 */
            .hb-td-content { text-align: left; background-color: #fff; line-height: 2.4; }
            
            /* 대학 링크 및 개별 로고 스타일 */
            .hb-link { color: #005BAC; text-decoration: none; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }
            .hb-link:hover { text-decoration: underline; color: #d81c2f; }
            .hb-item-logo { height: 16px; width: auto; object-fit: contain; pointer-events: none; } 
            
            .hb-sep { margin: 0 8px; color: #ccc; font-size: 0.8rem; }
            .hb-col-wrapper table tr:last-child th, .hb-col-wrapper table tr:last-child td { border-bottom: none; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 헬퍼: 링크 및 로고 생성 (클릭 에러 방지 처리 완료) ---
    const mkLink = (name, logoFile, linkName = null) => {
        const target = linkName || name.split('(')[0] + '.html'; 
        const logoHtml = logoFile ? `<img src="이미지/${logoFile}" class="hb-item-logo" alt="${name} 로고" onerror="this.style.display='none'">` : '';
        return `<a href="javascript:void(0);" onclick="if(typeof window.goToLink === 'function'){ window.goToLink('${target}'); } else { location.href='${target}'; } return false;" class="hb-link">${logoHtml}${name}</a>`;
    };

    // --- 3. 전문대학 데이터 세팅 (제공해주신 로고 파일명 매핑 및 초성 정렬) ---
    const specialized = [
        { char: 'ㄷ', schools: [mkLink('대찬대학교', '대찬대학교.svg')] },
        { char: 'ㅅ', schools: [mkLink('삽곡대학교', '삽곡대학교.svg'), mkLink('선자대학교', '선자대학교_UI.webp')] },
        { char: 'ㅇ', schools: [mkLink('안신대학교', '안신대학교_UI.svg'), mkLink('안월대학교', '안월대학교_UI.svg')] },
        { char: 'ㅊ', schools: [mkLink('치고대학교', '치고대학교_UI.webp')] },
        { char: 'ㅎ', schools: [
            mkLink('해총대학교', '해총대학교_UI.webp'),
            mkLink('효빈과학대학교', '효빈과학대학교_UI.webp'), 
            mkLink('효빈보건대학교', '효빈보건대학교.svg'), 
            mkLink('효빈예술대학교', '효빈예술대.svg')
        ]}
    ];

    // 기능대학 데이터
    const polytechnic = {
        char: 'ㅎ',
        school: mkLink('한국폴리텍VIII대학(효빈캠퍼스)', '한국폴리텍.webp', '한국폴리텍VIII대학.html')
    };

    // --- 4. HTML 조립 ---
    let html = `
        <div class="hb-col-wrapper">
            <table class="hb-col-table">
                <thead class="hb-col-thead">
                    <tr>
                        <td colspan="3" class="hb-header-title">
                            <div class="hb-header-content">
                                <img src="이미지/효빈광역시.webp" class="hb-header-logo" alt="효빈광역시 로고" onerror="this.src='이미지/효빈광역시_흰색로고.webp'; this.onerror=function(){this.style.display='none';};">
                                효빈광역시의 전문대학
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" class="hb-toggle-row">
                            [ <span class="hb-toggle-btn" onclick="toggleHbColTable(this)">접기</span> ]
                        </td>
                    </tr>
                </thead>
                <tbody class="hb-col-tbody">
    `;

    // 전문대학 렌더링
    const specializedRowCount = specialized.length;
    specialized.forEach((group, index) => {
        html += `<tr>`;
        if (index === 0) {
            html += `<th class="hb-th-category" rowspan="${specializedRowCount}">전문</th>`;
        }
        html += `<td class="hb-td-initial">${group.char}</td>`;
        html += `<td class="hb-td-content">${group.schools.join('<span class="hb-sep">·</span>')}</td>`;
        html += `</tr>`;
    });

    // 기능대학 렌더링
    html += `
                    <tr>
                        <th class="hb-th-category poly">기능</th>
                        <td class="hb-td-initial">${polytechnic.char}</td>
                        <td class="hb-td-content">${polytechnic.school}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;
}

// --- 5. 전역 토글 함수 (문서 어디서든 작동하도록 window 객체에 할당) ---
window.toggleHbColTable = function(btn) {
    const wrapper = btn.closest('.hb-col-wrapper');
    const tbody = wrapper.querySelector('.hb-col-tbody');
    
    if (tbody.classList.contains('hidden')) {
        tbody.classList.remove('hidden');
        btn.textContent = '접기';
    } else {
        tbody.classList.add('hidden');
        btn.textContent = '펼치기';
    }
};