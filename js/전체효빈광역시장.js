/* 파일 경로: js/전체효빈광역시장.js */

/**
 * 역대 효빈광역시장 전체 내비게이션 박스 렌더링 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderAllHyobinMayorsNav(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-all-mayors-nav-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-nav-wrapper { width: 100%; margin: 20px 0; }
            .hb-nav-table { border-collapse: collapse; width: 100%; border: 2px solid #7777aa; background-color: #fff; font-size: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
            .hb-nav-table td { border: 1px solid #ddd; padding: 5px 8px; text-align: center; vertical-align: middle; }
            
            /* 헤더 스타일 */
            .hb-nav-header { background-color: #7777aa; color: #fff; font-weight: bold; border: 1px solid #7777aa; padding: 8px 10px; }
            .hb-nav-header-flex { display: flex; justify-content: center; align-items: center; position: relative; width: 100%; }
            .hb-nav-header a { color: #fff; text-decoration: none; font-size: 1.1em; display: inline-flex; align-items: center; }
            
            /* 휘장 이미지 스타일 (텍스트와 자연스럽게 어울리도록 크기 및 여백 조정) */
            .hb-nav-symbol { height: 26px; margin-right: 6px; vertical-align: middle; }
            
            /* 접기 버튼 (우측 끝으로 절대 위치 고정) */
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; opacity: 0.8; user-select: none; color: white; position: absolute; right: 0; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }

            /* 내부 테이블 스타일 */
            .hb-inner-table { width: 100%; border-collapse: collapse; border-style: hidden; }
            .hb-inner-table td { border: 1px solid #ddd; padding: 5px; }
            
            /* 인물 정보 스타일 */
            .hb-sub-header { font-size: 0.85em; color: #7777aa; font-weight: bold; display: block; margin-bottom: 2px; }
            .hb-col-20 { width: 20%; }
            .hb-link { color: #0275d8; text-decoration: none; }
            .hb-link:hover { text-decoration: underline; }
            
            /* 하단 슬로건/정보 */
            .hb-nav-footer { background-color: #eee; font-size: 11px; padding: 4px; }
            .hb-slogan-cell { background-color: #fff; padding: 10px; }
            
            /* 슬로건 중앙 정렬용 플렉스박스 */
            .hb-slogan-wrap { display: flex; justify-content: center; align-items: center; width: 100%; }
            .hb-slogan-img { width: 70px; display: block; }

            /* 본문 토글용 */
            .hb-nav-tbody { transition: all 0.2s; }
            .hb-nav-tbody.hidden { display: none; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. HTML 조립 ---
    const tableBodyId = 'hb-nav-body';
    
    const html = `
        <div class="hb-nav-wrapper">
            <table class="hb-nav-table">
                <thead>
                    <tr>
                        <td class="hb-nav-header" colspan="2">
                            <div class="hb-nav-header-flex">
                                <a href="효빈광역시.html">
                                    <img src="이미지/효빈광역시_흰색로고.webp" alt="효빈광역시 휘장" class="hb-nav-symbol" onerror="this.style.display='none'; this.parentElement.innerHTML=''">
                                </a>
                                <a href="효빈광역시장.html">효빈광역시장</a>
                                <span class="hb-toggle-btn" id="hb-nav-toggle">[접기]</span>
                            </div>
                        </td>
                    </tr>
                </thead>

                <tbody id="${tableBodyId}" class="hb-nav-tbody">
                    <tr>
                        <td colspan="2" style="padding: 0;">
                            <table class="hb-inner-table">
                                <tr>
                                    <td><span class="hb-sub-header">초대</span><a href="권태영.html" class="hb-link">권태영</a></td>
                                    <td><span class="hb-sub-header">제2대</span><a href="신동협.html" class="hb-link">신동협</a></td>
                                    <td><span class="hb-sub-header">제3대</span><a href="백승호.html" class="hb-link">백승호</a></td>
                                    <td colspan="2"><span class="hb-sub-header">제4·5대</span><a href="서준영.html" class="hb-link">서준영</a></td>
                                </tr>
                                <tr>
                                    <td><span class="hb-sub-header">제6대</span><a href="남궁혁.html" class="hb-link">남궁혁</a></td>
                                    <td><span class="hb-sub-header">제7대</span><a href="황기철.html" class="hb-link">황기철</a></td>
                                    <td><span class="hb-sub-header">제8대</span><a href="유정식.html" class="hb-link">유정식</a></td>
                                    <td><span class="hb-sub-header">제9대</span><a href="환산채.html" class="hb-link">환산채</a></td>
                                    <td><span class="hb-sub-header">제10대</span><a href="한광수.html" class="hb-link">한광수</a></td>
                                </tr>
                                <tr>
                                    <td><span class="hb-sub-header">제11대</span><a href="환산채.html" class="hb-link">환산채</a></td>
                                    <td colspan="2"><span class="hb-sub-header">제12·13대</span><a href="박현만.html" class="hb-link">박현만</a></td>
                                    <td><span class="hb-sub-header">제14대</span><a href="윤대환.html" class="hb-link">윤대환</a></td>
                                    <td><span class="hb-sub-header">제15·16대</span><a href="박현만.html" class="hb-link">박현만</a></td>
                                </tr>
                                <tr>
                                    <td colspan="2"><span class="hb-sub-header">제17·18대</span><a href="김성민.html" class="hb-link">김성민</a></td>
                                    <td colspan="3"><span class="hb-sub-header">제19·20대</span><a href="박효빈.html" class="hb-link">박효빈</a></td>
                                </tr>
                                <tr>
                                    <td colspan="5" class="hb-nav-footer">
                                        ◀ <a href="관선시대_효빈부윤.html" class="hb-link">관선시대 덕빈북도 효빈부윤</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="hb-slogan-cell">
                            <div class="hb-slogan-wrap">
                                <a href="효빈광역시.html">
                                    <img src="이미지/효빈광역시_시정슬로건.webp" alt="효빈광역시 시정슬로건" class="hb-slogan-img" onerror="this.style.display='none'; this.parentElement.innerHTML=''">
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;

    // --- 3. 이벤트 연결 (접기/펼치기) ---
    const toggleBtn = container.querySelector('#hb-nav-toggle');
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