document.addEventListener("DOMContentLoaded", function() {
    // 효빈대학(univ)과 충돌을 피하기 위해 college-nav 클래스 사용
    const containers = document.querySelectorAll('.hb-college-nav');
    if (containers.length === 0) return;

    const styleId = 'hb-college-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-college-wrapper { width: 100%; border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; margin-bottom: 20px; font-size: 0.85rem; }
            .hb-college-table { width: 100%; border-collapse: collapse; text-align: center; }
            
            /* 헤더 스타일 (#3344aa - 사용자가 지정한 전문대 테마 색상) */
            .hb-college-thead .hb-header-title { background-color: #3344aa; color: white; padding: 8px; font-weight: bold; font-size: 1.1rem; border: 1px solid #3344aa; }
            .hb-header-content { display: flex; align-items: center; justify-content: center; gap: 8px; }
            .hb-header-logo { height: 20px; width: auto; filter: brightness(0) invert(1); object-fit: contain; pointer-events: none; } 
            
            /* 접기/펼치기 버튼 행 */
            .hb-college-thead .hb-toggle-row { background-color: #fff; padding: 6px; border: 1px solid #ccc; border-bottom: none; font-weight: bold; font-size: 0.95rem; }
            .hb-toggle-btn { cursor: pointer; user-select: none; color: #333; }
            .hb-toggle-btn:hover { text-decoration: underline; }
            
            /* 안내문 행 */
            .hb-college-thead .hb-note-row { background-color: #fff; color: #555; font-size: 0.75rem; padding: 4px 10px 10px 10px; border: 1px solid #ccc; border-top: none; word-break: keep-all; line-height: 1.4; }
            
            /* 본문 영역 */
            .hb-college-tbody { transition: display 0.2s; }
            .hb-college-tbody.hidden { display: none; }
            .hb-college-tbody th, .hb-college-tbody td { border: 1px solid #ccc; padding: 8px; vertical-align: middle; }
            
            /* 카테고리 헤더 */
            .hb-th-category { color: white; width: 60px; font-weight: 900; font-size: 0.95rem; }
            .hb-th-category.junior { background-color: #4a5568; } /* 전문 */
            .hb-th-category.polytech { background-color: #005BAC; } /* 기능 */
            
            /* 초성칸 */
            .hb-td-initial { background-color: #f9f9f9; width: 30px; font-weight: 900; color: #000; }
            
            /* 대학 목록칸 */
            .hb-td-content { text-align: left; background-color: #fff; line-height: 2.4; }
            
            /* 대학 링크 및 개별 로고 스타일 */
            .hb-link { color: #005BAC; text-decoration: none; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }
            .hb-link:hover { text-decoration: underline; color: #d81c2f; }
            .hb-item-logo { height: 16px; width: auto; object-fit: contain; pointer-events: none; } 
            
            .hb-sep { margin: 0 8px; color: #ccc; font-size: 0.8rem; }
            .hb-college-wrapper table tr:last-child th, .hb-college-wrapper table tr:last-child td { border-bottom: none; }
        `;
        document.head.appendChild(style);
    }

    // 링크 및 로고 생성 헬퍼 함수
    const mkLink = (name, logoFile, linkName = null) => {
        const target = linkName || name.split('(')[0] + '.html'; 
        const logoHtml = logoFile ? `<img src="이미지/${logoFile}" class="hb-item-logo" alt="${name} 로고" onerror="this.style.display='none'">` : '';
        return `<a href="javascript:void(0);" onclick="if(typeof window.goToLink === 'function'){ window.goToLink('${target}'); } else { location.href='${target}'; } return false;" class="hb-link">${logoHtml}${name}</a>`;
    };

    // 효빈광역시 전문대학 데이터
    const collegeData = [
        {
            category: '전문',
            catClass: 'junior',
            groups: [
                { char: 'ㄷ', schools: [mkLink('대찬대학교', '대찬대학교.svg')] },
                { char: 'ㅅ', schools: [mkLink('선자대학교', '선자대학교_UI.webp'), mkLink('삽곡대학교', '삽곡대학교.svg')] },
                { char: 'ㅇ', schools: [mkLink('안신대학교', '안신대학교_UI.svg')] },
                { char: 'ㅊ', schools: [mkLink('치고대학교', '치고대학교_UI.webp')] },
                { 
                    char: 'ㅎ', 
                    schools: [
                        mkLink('해총대학교', '해총대학교_UI.webp'), 
                        mkLink('효빈과학대학교', '효빈과학대학교_UI.webp'),
                        mkLink('효빈보건대학교', '효빈보건대학교_UI.webp'),
                        mkLink('효빈예술대학교', '효빈예술대학교_UI.webp')
                    ] 
                }
            ]
        },
        {
            category: '기능',
            catClass: 'polytech',
            groups: [
                { char: 'ㅎ', schools: [mkLink('한국폴리텍VIII대학(효빈캠퍼스)', '한국폴리텍_로고.webp', '한국폴리텍VIII대학_효빈캠퍼스.html')] }
            ]
        }
    ];

    containers.forEach(container => {
        let html = `
        <div class="hb-college-wrapper">
            <table class="hb-college-table">
                <thead class="hb-college-thead">
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
                            [ <span class="hb-toggle-btn" onclick="toggleHbCollegeTable(this)">접기</span> ]
                        </td>
                    </tr>
                </thead>
                <tbody class="hb-college-tbody">
        `;

        collegeData.forEach(section => {
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

// 기존 대학 js와 충돌 방지를 위해 함수명 변경
function toggleHbCollegeTable(btn) {
    const wrapper = btn.closest('.hb-college-wrapper');
    const tbody = wrapper.querySelector('.hb-college-tbody');
    
    if (tbody.classList.contains('hidden')) {
        tbody.classList.remove('hidden');
        btn.textContent = '접기';
    } else {
        tbody.classList.add('hidden');
        btn.textContent = '펼치기';
    }
}