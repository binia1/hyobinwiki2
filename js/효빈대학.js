/* 파일 경로: js/효빈대학.js */

/**
 * 효빈광역시 대학 목록 테이블 렌더링 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderHyobinUnivTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-univ-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-univ-wrapper { width: 100%; overflow-x: auto; margin-bottom: 1rem; }
            .hb-univ-table { width: 100%; min-width: 600px; border-collapse: collapse; border: 1px solid #ccc; font-size: 0.8rem; }
            
            /* 헤더 스타일 (로고 적용) */
            .hb-univ-thead th { background-color: #7777AA; color: white; padding: 10px; position: relative; }
            .hb-univ-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-univ-logo { max-height: 28px; width: auto; }
            .hb-univ-title { font-weight: bold; font-size: 1.2em; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }

            /* 본문 스타일 */
            .hb-univ-tbody { transition: all 0.2s; }
            .hb-univ-tbody.hidden { display: none; }
            .hb-univ-tbody th, .hb-univ-tbody td { border: 1px solid #e5e7eb; padding: 6px 8px; vertical-align: middle; }
            
            /* 셀 스타일 유틸리티 */
            .hb-th-type { background-color: #7777aa; text-align: center; font-weight: bold; width: 5rem; }
            .hb-td-initial { text-align: center; font-weight: bold; width: 2rem; background-color: #fff; }
            .hb-td-content { text-align: left; }
            .hb-note-row { background-color: #f9fafb; padding: 8px; font-size: 11px; border: 1px solid #ccc; line-height: 1.4; color: #555; }
            .hb-empty-row { background-color: #f9fafb; height: 10px; }

            /* 링크 스타일 */
            .hb-link { cursor: pointer; color: inherit; text-decoration: none; }
            .hb-link:hover { text-decoration: underline; color: #2563eb; }
            .hb-sep { margin: 0 4px; color: #9ca3af; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 데이터 정의 (누락 없이 입력) ---
    // 헬퍼: 링크 생성
    const mkLink = (name, query = null) => {
        const q = query || name;
        return `<span class="hb-link" onclick="handleSearchFromNav('${q}')">${name}</span>`;
    };

    // 국립대 데이터
    const national = [
        mkLink('효빈대학교'),
        mkLink('효빈과학기술원(HIST)', '효빈과학기술원'),
        mkLink('효빈교육대학교'),
        mkLink('효빈해양대학교')
    ].join('<span class="hb-sep">·</span>');

    // 사립대 데이터 (초성별 분류)
    const privateUnivs = [
        { char: 'ㅇ', schools: [mkLink('엽월대학교'), mkLink('옥선대학교')] },
        { char: 'ㅍ', schools: [mkLink('평안명대학교'), mkLink('평천대학교')] },
        { char: 'ㄷ', schools: [mkLink('동구대학교'), mkLink('덕북대학교 효빈캠퍼스')] },
        { char: 'ㅅ', schools: [mkLink('삼선대학교'), mkLink('성택대학교')] },
        { char: 'ㄱ', schools: [mkLink('광연대학교')] },
        { char: 'ㅊ', schools: [mkLink('청엽국제학교 대학부')] },
        { char: 'ㅈ', schools: [mkLink('중촌대학교')] }, // 원본 데이터 'ㅂ' 유지
        { char: 'ㅎ', schools: [mkLink('효빈외국어대학교'), mkLink('효빈복지대학교'), mkLink('해천대학교')] }
    ];

    // 원격대 데이터
    const remote = mkLink('한국방송통신대학교 효빈·덕북지역대학');

    // --- 3. HTML 조립 ---
    const bodyId = 'hb-univ-tbody';
    let html = `
        <div class="hb-univ-wrapper">
            <table class="hb-univ-table">
                <thead class="hb-univ-thead">
                    <tr>
                        <th colspan="3">
                            <div class="hb-univ-header-content">
                                <img src="이미지/hyobin1.webp" class="hb-univ-logo" alt="로고" onerror="this.style.display='none'"/>
                                <span class="hb-univ-title">효빈광역시의 대학</span>
                                <span class="hb-toggle-btn" id="hb-univ-toggle">[접기]</span>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td colspan="3" class="hb-note-row">
                            각 대학의 제1캠퍼스(본교)는 캠퍼스를 표기하지 않고, 2캠퍼스(이원화)부터 "OO대학교(AA캠퍼스)"과 같이 표기함. 분교는 캠퍼스명 표시에서 OO대학교 AA캠퍼스로 괄호 없이 표시함.
                        </td>
                    </tr>
                </thead>
                <tbody id="${bodyId}" class="hb-univ-tbody">
                    <tr>
                        <th class="hb-th-type">국립</th>
                        <td class="hb-td-initial">ㅎ</td>
                        <td class="hb-td-content">${national}</td>
                    </tr>
                    
                    <tr>
                        <th class="hb-th-type" rowspan="9">사립</th>
                        <td class="hb-td-initial">${privateUnivs[0].char}</td>
                        <td class="hb-td-content">${privateUnivs[0].schools.join('<span class="hb-sep">·</span>')}</td>
                    </tr>
    `;

    // 사립대 나머지 행 반복
    for (let i = 1; i < privateUnivs.length; i++) {
        html += `
            <tr>
                <td class="hb-td-initial">${privateUnivs[i].char}</td>
                <td class="hb-td-content">${privateUnivs[i].schools.join('<span class="hb-sep">·</span>')}</td>
            </tr>
        `;
    }

    // 사립대 빈 칸 (Rowspan 채우기용 마지막 행)
    html += `
            <tr>
                <td class="hb-empty-row" colspan="2"></td>
            </tr>
    `;

    // 원격대학
    html += `
                    <tr>
                        <th class="hb-th-type">원격대학</th>
                        <td class="hb-td-initial">ㅇ</td>
                        <td class="hb-td-content">${remote}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;

    // --- 4. 이벤트 (접기/펼치기) ---
    const toggleBtn = container.querySelector('#hb-univ-toggle');
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