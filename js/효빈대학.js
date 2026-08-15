/* 파일 경로: js/효빈대학.js */

document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.hb-univ-nav');
    if (containers.length === 0) return;

    const styleId = 'hb-univ-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-univ-wrapper { width: 100%; border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; margin-bottom: 20px; font-size: 0.85rem; }
            .hb-univ-table { width: 100%; border-collapse: collapse; text-align: center; }
            
            /* 헤더 스타일 (#7777AA) */
            .hb-univ-thead .hb-header-title { background-color: #7777aa; color: white; padding: 8px; font-weight: bold; font-size: 1.1rem; border: 1px solid #7777aa; }
            .hb-header-content { display: flex; align-items: center; justify-content: center; gap: 8px; }
            .hb-header-logo { height: 20px; width: auto; filter: brightness(0) invert(1); object-fit: contain; pointer-events: none; } 
            
            /* 접기/펼치기 버튼 행 */
            .hb-univ-thead .hb-toggle-row { background-color: #fff; padding: 6px; border: 1px solid #ccc; border-bottom: none; font-weight: bold; font-size: 0.95rem; }
            .hb-toggle-btn { cursor: pointer; user-select: none; color: #333; }
            .hb-toggle-btn:hover { text-decoration: underline; }
            
            /* 안내문 행 */
            .hb-univ-thead .hb-note-row { background-color: #fff; color: #555; font-size: 0.75rem; padding: 4px 10px 10px 10px; border: 1px solid #ccc; border-top: none; word-break: keep-all; line-height: 1.4; }
            
            /* 본문 영역 */
            .hb-univ-tbody { transition: display 0.2s; }
            .hb-univ-tbody.hidden { display: none; }
            .hb-univ-tbody th, .hb-univ-tbody td { border: 1px solid #ccc; padding: 8px; vertical-align: middle; }
            
            /* 카테고리 헤더 */
            .hb-th-category { background-color: #0c1b54; color: white; width: 60px; font-weight: 900; font-size: 0.95rem; }
            .hb-th-category.private { background-color: #005BAC; } 
            .hb-th-category.remote { background-color: #4a5568; }
            
            /* 초성칸 */
            .hb-td-initial { background-color: #f9f9f9; width: 30px; font-weight: 900; color: #000; }
            
            /* 대학 목록칸 */
            .hb-td-content { text-align: left; background-color: #fff; line-height: 2.4; }
            
            /* 대학 링크 및 개별 로고 스타일 */
            .hb-link { color: #005BAC; text-decoration: none; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }
            .hb-link:hover { text-decoration: underline; color: #d81c2f; }
            .hb-item-logo { height: 16px; width: auto; object-fit: contain; pointer-events: none; } 
            
            .hb-sep { margin: 0 8px; color: #ccc; font-size: 0.8rem; }
            .hb-univ-wrapper table tr:last-child th, .hb-univ-wrapper table tr:last-child td { border-bottom: none; }
        `;
        document.head.appendChild(style);
    }

    // 링크 및 로고 생성 헬퍼 함수 (에러 방지용 안전 장치 포함)
    const mkLink = (name, logoFile, linkName = null) => {
        const target = linkName || name.split('(')[0] + '.html'; 
        const logoHtml = logoFile ? `<img src="이미지/${logoFile}" class="hb-item-logo" alt="${name} 로고" onerror="this.style.display='none'">` : '';
        return `<a href="javascript:void(0);" onclick="if(typeof window.goToLink === 'function'){ window.goToLink('${target}'); } else { location.href='${target}'; } return false;" class="hb-link">${logoHtml}${name}</a>`;
    };

    // 효빈광역시 대학 데이터 (알려주신 로고 파일명 정밀 반영)
    const univData = [
        {
            category: '국립',
            catClass: '',
            groups: [
                { 
                    char: 'ㅎ', 
                    schools: [
                        mkLink('효빈대학교', '효빈대_로고.webp'), 
                        mkLink('효빈과학기술원(HIST)', '효빈과학대학교_UI.webp', '효빈과학기술원.html'), 
                        mkLink('효빈교육대학교', '효빈교육대학교_UI.webp'), 
                        mkLink('효빈해양대학교', '국립서해해양대학교_UI.svg')
                    ] 
                }
            ]
        },
        {
            category: '사립',
            catClass: 'private',
            groups: [
                { char: 'ㄱ', schools: [mkLink('광연대학교', '광연대학교.svg')] },
                { char: 'ㄷ', schools: [mkLink('동구대학교', '동구대학교_UI.webp'), mkLink('덕북대학교 효빈캠퍼스', '덕북대_로고.webp', '덕북대학교.html')] },
                { char: 'ㅂ', schools: [mkLink('중촌대학교', '중촌대학교.webp')] },
                { char: 'ㅅ', schools: [mkLink('삼선대학교', '삼선대학교_UI.webp'), mkLink('성택대학교', '성택대학교_UI.svg')] },
                { char: 'ㅇ', schools: [mkLink('엽월대학교', '엽월대학교_UI.webp'), mkLink('옥선대학교', '옥선대학교_UI.webp'), mkLink('안월대학교', '안월대학교_UI.svg')] },
                { char: 'ㅊ', schools: [mkLink('청엽국제학교 대학부', '청엽국제학교.webp', '청엽국제학교_대학부.html')] }, 
                { char: 'ㅍ', schools: [mkLink('평안명대학교', '평안명대학교_UI.webp'), mkLink('평천대학교', '평천대학교_UI.webp')] },
                { char: 'ㅎ', schools: [mkLink('해천대학교', '해천대.svg'), mkLink('효빈복지대학교', '효빈복지대학교_UI.webp'), mkLink('효빈외국어대학교', '효빈외대.svg')] }
            ]
        },
        {
            category: '원격대학',
            catClass: 'remote',
            groups: [
                { char: 'ㅇ', schools: [mkLink('한국방송통신대학교 효빈·덕북지역대학', '한국방송통신대학교.webp', '한국방송통신대학교.html')] }
            ]
        }
    ];

    containers.forEach(container => {
        let html = `
        <div class="hb-univ-wrapper">
            <table class="hb-univ-table">
                <thead class="hb-univ-thead">
                    <tr>
                        <td colspan="3" class="hb-header-title">
                            <div class="hb-header-content">
                                <img src="이미지/효빈광역시.webp" class="hb-header-logo" alt="효빈광역시 로고" onerror="this.src='이미지/효빈광역시_흰색로고.webp'; this.onerror=function(){this.style.display='none';};">
                                효빈광역시의 대학
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" class="hb-toggle-row">
                            [ <span class="hb-toggle-btn" onclick="toggleHbUnivTable(this)">접기</span> ]
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" class="hb-note-row">
                            각 대학의 제1캠퍼스(본교)는 캠퍼스를 표기하지 않고 2캠퍼스(이원화)부터 "OO대학교(AA캠퍼스)"과 같이 표기함. 분교는 캠퍼스명 표시에서 OO대학교 AA캠퍼스로 괄호 없이 표시함.
                        </td>
                    </tr>
                </thead>
                <tbody class="hb-univ-tbody">
        `;

        univData.forEach(section => {
            const rowCount = section.groups.length;
            section.groups.forEach((group, index) => {
                html += `<tr>`;
                if (index === 0) {
                    html += `<th class="hb-th-category ${section.catClass}" rowspan="${rowCount}">${section.category}</th>`;
                }
                html += `<td class="hb-td-initial">${group.char}</td>`;
                html += `<td class="hb-td-content">${group.schools.join('<span class="hb-sep">·</span>')}</td>`;
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

function toggleHbUnivTable(btn) {
    const wrapper = btn.closest('.hb-univ-wrapper');
    const tbody = wrapper.querySelector('.hb-univ-tbody');
    
    if (tbody.classList.contains('hidden')) {
        tbody.classList.remove('hidden');
        btn.textContent = '접기';
    } else {
        tbody.classList.add('hidden');
        btn.textContent = '펼치기';
    }
}