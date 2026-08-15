/* 파일 경로: js/덕북대학.js */

document.addEventListener("DOMContentLoaded", function() {
    // 렌더링할 컨테이너 찾기
    const containers = document.querySelectorAll('.db-univ-nav');
    if (containers.length === 0) return;

    // --- 1. 스타일 정의 (#2ECC71 테마 적용) ---
    const styleId = 'db-univ-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .db-univ-wrapper { width: 100%; border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; margin-bottom: 20px; font-size: 0.85rem; }
            .db-univ-table { width: 100%; border-collapse: collapse; text-align: center; }
            
            /* 헤더 스타일 (#2ECC71 적용) */
            .db-univ-thead .db-header-title { background-color: #2ECC71; color: white; padding: 8px; font-weight: bold; font-size: 1.1rem; border: 1px solid #2ECC71; }
            .db-header-content { display: flex; align-items: center; justify-content: center; gap: 8px; }
            
            /* 접기/펼치기 버튼 행 */
            .db-univ-thead .db-toggle-row { background-color: #fff; padding: 6px; border: 1px solid #ccc; border-bottom: none; font-weight: bold; font-size: 0.95rem; }
            .db-toggle-btn { cursor: pointer; user-select: none; color: #333; }
            .db-toggle-btn:hover { text-decoration: underline; }
            
            /* 본문 영역 */
            .db-univ-tbody { transition: display 0.2s; }
            .db-univ-tbody.hidden { display: none; }
            .db-univ-tbody th, .db-univ-tbody td { border: 1px solid #ccc; padding: 8px; vertical-align: middle; }
            
            /* 카테고리 헤더 (헤더 색상에 맞춰 톤다운된 그린 계열 적용) */
            .db-th-category { background-color: #1E8449; color: white; width: 60px; font-weight: 900; font-size: 0.95rem; }
            .db-th-category.public { background-color: #239B56; }
            .db-th-category.private { background-color: #28B463; }
            
            /* 초성칸 */
            .db-td-initial { background-color: #f9f9f9; width: 30px; font-weight: 900; color: #000; }
            
            /* 대학 목록칸 */
            .db-td-content { text-align: left; background-color: #fff; line-height: 2.4; }
            
            /* 대학 링크 및 개별 로고 스타일 */
            .db-link { color: #005BAC; text-decoration: none; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }
            .db-link:hover { text-decoration: underline; color: #d81c2f; }
            
            /* 로고 클릭 먹통 방지 */
            .db-item-logo { height: 16px; width: auto; object-fit: contain; pointer-events: none; } 
            
            .db-sep { margin: 0 8px; color: #ccc; font-size: 0.8rem; }
            .db-univ-wrapper table tr:last-child th, .db-univ-wrapper table tr:last-child td { border-bottom: none; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 헬퍼: 링크 및 로고 생성 (이전 프롬프트에서 주신 로고 적극 반영!) ---
    const mkLink = (name, logoFile, linkName = null) => {
        // 별도 링크명이 없으면 기본적으로 괄호 이전 텍스트로 링크 생성 (예: 효빈대학교 (도내 캠퍼스) -> 효빈대학교.html)
        const target = linkName || name.replace(/ \(.*?\)/, '') + '.html'; 
        const logoHtml = logoFile ? `<img src="이미지/${logoFile}" class="db-item-logo" alt="${name} 로고" onerror="this.style.display='none'">` : '';
        
        // 클릭 에러 원천 차단 로직
        return `<a href="javascript:void(0);" onclick="if(typeof window.goToLink === 'function'){ window.goToLink('${target}'); } else { location.href='${target}'; } return false;" class="db-link">${logoHtml}${name}</a>`;
    };

    // --- 3. 덕빈북도 대학 데이터 세팅 ---
    const univData = [
        {
            category: '국립',
            catClass: '',
            groups: [
                { char: 'ㄱ', schools: [
                    mkLink('국립서해대학교', '국립서해대학교.svg'), 
                    mkLink('국립서해해양대학교', '국립서해해양대학교_UI.svg', '서해해양대학교.html')
                ] },
                { char: 'ㄷ', schools: [mkLink('국립덕북대학교', '덕북대_로고.webp', '덕북대학교.html')] },
                { char: 'ㅂ', schools: [mkLink('빈주교육대학교', '빈주교육대학교.svg')] },
                { char: 'ㅊ', schools: [mkLink('천주대학교', '국립천주대학교.svg')] },
                { char: 'ㅎ', schools: [mkLink('효빈대학교 (도내 캠퍼스)', '효빈대_로고.webp', '효빈대학교.html')] }
            ]
        },
        {
            category: '공립',
            catClass: 'public',
            groups: [
                { char: 'ㄷ', schools: [mkLink('덕북도립대학', '덕북도립대학.svg')] }
            ]
        },
        {
            category: '사립',
            catClass: 'private',
            groups: [
                { char: 'ㄱ', schools: [
                    mkLink('강주가톨릭대학교', '강주가톨릭대학교.svg'), 
                    mkLink('계성문화대학', '계성문화대학.svg'), 
                    mkLink('군천대학교', '군천대학교.svg')
                ] },
                { char: 'ㄷ', schools: [
                    mkLink('덕북과학기술대학교', '덕북과학기술대학교.webp'), 
                    mkLink('덕북외국어대학교', null), 
                    mkLink('덕북예술대학', '덕북예술대학_UI.webp')
                ] },
                { char: 'ㅂ', schools: [
                    mkLink('빈주대학교', '빈주대학교_UI.webp'), 
                    mkLink('빈주보건대학', '빈주보건대학_UI.svg')
                ] },
                { char: 'ㅅ', schools: [
                    mkLink('서진대학', '서진대학_UI.svg'), 
                    mkLink('선빈대학교', '선빈대학교_UI.svg')
                ] },
                { char: 'ㅇ', schools: [mkLink('약산대학교', '약산대학교_UI.svg')] },
                { char: 'ㅈ', schools: [mkLink('저소대학교', '저소대학교_UI.webp')] },
                { char: 'ㅊ', schools: [mkLink('천주폴리텍대학', '폴리텍.svg')] }
            ]
        }
    ];

    // --- 4. HTML 테이블 렌더링 ---
    containers.forEach(container => {
        let html = `
        <div class="db-univ-wrapper">
            <table class="db-univ-table">
                <thead class="db-univ-thead">
                    <tr>
                        <td colspan="3" class="db-header-title">
                            <div class="db-header-content">
                                <!-- 덕빈북도 로고가 있다면 추가 가능, 없으면 텍스트만 유지 -->
                                <img src="이미지/덕북로고.webp" class="db-header-logo" alt="덕빈북도 로고" style="height: 20px; width: auto; filter: brightness(0) invert(1);" onerror="this.style.display='none'">
                                덕빈북도의 대학교
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" class="db-toggle-row">
                            [ <span class="db-toggle-btn" onclick="toggleDbUnivTable(this)">접기</span> ]
                        </td>
                    </tr>
                </thead>
                <tbody class="db-univ-tbody">
        `;

        univData.forEach(section => {
            const rowCount = section.groups.length;
            section.groups.forEach((group, index) => {
                html += `<tr>`;
                if (index === 0) {
                    html += `<th class="db-th-category ${section.catClass}" rowspan="${rowCount}">${section.category}</th>`;
                }
                html += `<td class="db-td-initial">${group.char}</td>`;
                html += `<td class="db-td-content">${group.schools.join('<span class="db-sep">·</span>')}</td>`;
                html += `</tr>`;
            });
        });

        html += `
                </tbody>
            </table>
        </div>
        `;
        container.innerHTML = html;
    });
});

// --- 5. 전역 토글 함수 ---
window.toggleDbUnivTable = function(btn) {
    const wrapper = btn.closest('.db-univ-wrapper');
    const tbody = wrapper.querySelector('.db-univ-tbody');
    
    if (tbody.classList.contains('hidden')) {
        tbody.classList.remove('hidden');
        btn.textContent = '접기';
    } else {
        tbody.classList.add('hidden');
        btn.textContent = '펼치기';
    }
};