/* 파일 경로: js/효빈일반철도선.js */

/**
 * 효빈광역시 관내 국가 철도(6.1.1) 렌더링 함수
 * @param {string} containerId - 표를 넣을 HTML 요소의 ID
 */
function renderHyobinNationalRail(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-rail-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-rail-wrapper { width: 100%; overflow-x: auto; margin-bottom: 2rem; margin-top: 1rem; }
            .hb-rail-table { width: 100%; min-width: 600px; border-collapse: collapse; border: 1px solid #ccc; font-size: 0.78rem; text-align: center; }
            .hb-rail-table th, .hb-rail-table td { border: 1px solid #e5e7eb; padding: 8px 6px; vertical-align: middle; }
            
            /* 헤더 스타일 (로고 적용) */
            .hb-rail-thead th.main-header { background-color: #7777AA; color: white; padding: 10px; position: relative; }
            .hb-rail-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-rail-logo { max-height: 28px; width: auto; }
            .hb-rail-title { font-weight: bold; font-size: 1.1em; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; color: white; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }

            /* 서브 헤더 */
            .hb-rail-sub-header { background-color: #f3f4f6; color: #333; font-weight: bold; text-align: left; padding: 8px 12px; }
            .hb-rail-col-header th { background-color: #f9fafb; font-weight: bold; }

            /* 본문 토글용 */
            .hb-rail-tbody { transition: all 0.2s; }
            .hb-rail-tbody.hidden { display: none; }

            /* 배지 스타일 (색상 수정됨) */
            .hb-rail-badge { display: inline-block; padding: 3px 8px; border-radius: 4px; color: white; font-weight: bold; font-size: 0.75rem; min-width: 70px; margin: 1px 0; }
            .badge-ktx { background-color: #3e5ac7; } /* KTX: 청보라색 (나무위키 스타일) */
            .badge-srt { background-color: #5E273F; } /* SRT: 자주색 */
            .badge-itx { background-color: #E61E2B; } /* ITX-새마을: 빨간색 */
            .badge-mgh { background-color: #ea545d; } /* 무궁화호: 주홍/적색 계열 */

            /* 링크 스타일 (밑줄 제거) */
            .hb-link { cursor: pointer; color: inherit; text-decoration: none; border: none; }
            .hb-link:hover { text-decoration: underline; color: #004EA2; }
            .hb-link-bold { font-weight: bold; cursor: pointer; text-decoration: none; border: none; }
            .hb-link-bold:hover { text-decoration: underline; color: #004EA2; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 헬퍼 함수 ---
    const mkLink = (name, query = null) => {
        const q = query || name;
        return `<span class="hb-link" onclick="handleSearchFromNav('${q}')">${name}</span>`;
    };

    // --- 3. 데이터 및 HTML 조립 ---
    
    const tableBodyId = 'hb-rail-tbody';
    const html = `
        <div class="hb-rail-wrapper">
            <table class="hb-rail-table">
                <thead class="hb-rail-thead">
                    <tr>
                        <th colspan="3" class="main-header">
                            <div class="hb-rail-header-content">
                                <img src="이미지/hyobin1.webp" class="hb-rail-logo" alt="로고" onerror="this.style.display='none'"/>
                                <span class="hb-rail-title">효빈광역시 관내 국가 철도</span>
                                <span class="hb-toggle-btn" id="hb-rail-toggle">[접기]</span>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td colspan="3" class="hb-rail-sub-header">
                            <strong>고속철도:</strong> ${mkLink('빈효고속선')}<br/>
                            <strong>일반철도:</strong> ${mkLink('빈효선')} · ${mkLink('강빈선')} · ${mkLink('내천선')}(예정) · ${mkLink('안빈선')}(예정)
                        </td>
                    </tr>
                    <tr class="hb-rail-col-header">
                        <th style="width: 35%;">행선지</th>
                        <th style="width: 25%;">등급</th>
                        <th style="width: 40%;">탑승역</th>
                    </tr>
                </thead>
                <tbody id="${tableBodyId}" class="hb-rail-tbody">
                    <tr>
                        <td>서울 · ${mkLink('천주', '천주역')} · 광주송정<br/>빈주 · 서해</td>
                        <td>
                            <span class="hb-rail-badge badge-ktx">KTX</span><br/>
                            <span class="hb-rail-badge badge-ktx">KTX-산천</span>
                        </td>
                        <td>
                            ${mkLink('효빈역', '효빈역(일반열차)')}, ${mkLink('안천역', '안천역(일반열차)')}(일부정차)
                        </td>
                    </tr>
                    <tr>
                        <td>수서 · 광주송정</td>
                        <td><span class="hb-rail-badge badge-srt">SRT</span></td>
                        <td>
                            ${mkLink('효빈역', '효빈역(일반열차)')}, ${mkLink('안천역', '안천역(일반열차)')}
                        </td>
                    </tr>
                    <tr>
                        <td>서울 · 광주송정<br/>빈주 · 서해</td>
                        <td><span class="hb-rail-badge badge-itx">ITX-새마을</span></td>
                        <td>
                            ${mkLink('효빈역', '효빈역(일반열차)')} · ${mkLink('안천역', '안천역(일반열차)')}, ${mkLink('효빈항역', '효빈항역(일반열차)')}, ${mkLink('이자역', '이자역(일반열차)')}
                        </td>
                    </tr>
                    <tr>
                        <td>강주 · 빈주 (부산)</td>
                        <td><span class="hb-rail-badge badge-itx">ITX-새마을</span></td>
                        <td>
                            ${mkLink('북효빈역', '북효빈역(일반열차)')}, ${mkLink('효빈역', '효빈역(일반열차)')}
                        </td>
                    </tr>
                    <tr>
                        <td>서울 · 광주송정<br/>빈주 · 서해</td>
                        <td><span class="hb-rail-badge badge-mgh">무궁화호</span></td>
                        <td>
                            ${mkLink('효빈역', '효빈역(일반열차)')} · ${mkLink('안천역', '안천역(일반열차)')}, ${mkLink('효빈항역', '효빈항역(일반열차)')}, ${mkLink('고해역', '고해역(일반열차)')}, ${mkLink('이자역', '이자역(일반열차)')}
                        </td>
                    </tr>
                    <tr>
                        <td>강주 · 빈주 (부산)</td>
                        <td><span class="hb-rail-badge badge-mgh">무궁화호</span></td>
                        <td>
                            ${mkLink('북효빈역', '북효빈역(일반열차)')}, ${mkLink('효빈역', '효빈역(일반열차)')}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = html;

    // --- 4. 이벤트 연결 (접기/펼치기) ---
    const toggleBtn = container.querySelector('#hb-rail-toggle');
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