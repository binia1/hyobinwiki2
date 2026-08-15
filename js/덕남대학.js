/* 파일 경로: js/덕남대학.js */

document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.dn-univ-nav');
    if (containers.length === 0) return;

    // 1. 덕남 스타일 주입 (중복 방지)
    const styleId = 'dn-univ-style-ext';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .dn-univ-wrapper { width: 100%; border: 1px solid #ccc; font-family: 'Noto Sans KR', sans-serif; margin-bottom: 20px; font-size: 0.85rem; }
            .dn-univ-table { width: 100%; border-collapse: collapse; text-align: center; background: white; }
            .dn-univ-thead .dn-header-title { background-color: #0055A4; color: white; padding: 8px; font-weight: bold; font-size: 1.1rem; border: 1px solid #0055A4; }
            .dn-header-content { display: flex; align-items: center; justify-content: center; gap: 8px; }
            .dn-univ-thead .dn-toggle-row { background-color: #f9f9f9; padding: 6px; border: 1px solid #ccc; border-bottom: none; font-weight: bold; font-size: 0.95rem; }
            .dn-toggle-btn { cursor: pointer; user-select: none; color: #333; }
            .dn-toggle-btn:hover { text-decoration: underline; }
            .dn-univ-tbody { transition: display 0.2s; }
            .dn-univ-tbody.hidden { display: none; }
            .dn-univ-tbody th, .dn-univ-tbody td { border: 1px solid #ccc; padding: 8px; vertical-align: middle; }
            .dn-th-category { background-color: #003a70; color: white; width: 60px; font-weight: 900; font-size: 0.95rem; }
            .dn-th-category.public { background-color: #004b8d; }
            .dn-th-category.private { background-color: #1966b3; }
            .dn-td-initial { background-color: #f9f9f9; width: 30px; font-weight: 900; color: #000; }
            .dn-td-content { text-align: left; background-color: #fff; line-height: 2.4; }
            .dn-link { color: #0055A4; text-decoration: none; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }
            .dn-link:hover { text-decoration: underline; color: #d81c2f; }
            .dn-item-logo { height: 16px; width: auto; object-fit: contain; pointer-events: none; } 
            .dn-sep { margin: 0 8px; color: #ccc; font-size: 0.8rem; }
            .dn-univ-wrapper table tr:last-child th, .dn-univ-wrapper table tr:last-child td { border-bottom: none; }
            
            /* 현재 위치한 대학 강조 스타일 */
            .dn-current { background-color: #0055A4; color: white !important; padding: 2px 8px; border-radius: 4px; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
            .dn-current:hover { color: white !important; text-decoration: none; }
        `;
        document.head.appendChild(style);
    }

    // 2. 현재 페이지 자동 인식
    const pageTitle = document.title || ""; 

    // 3. 링크 생성 함수 (현재 페이지 하이라이트 포함)
    const mkLink = (name, logoFile, linkName = null) => {
        const target = linkName || name.replace(/ \(.*?\)/, '') + '.html'; 
        const targetName = target.replace('.html', '');
        const logoHtml = logoFile ? `<img src="이미지/${logoFile}" class="dn-item-logo" alt="${name} 로고" onerror="this.style.display='none'">` : '';
        
        const isCurrent = pageTitle.includes(targetName) || pageTitle.includes(name);
        const linkClass = isCurrent ? 'dn-link dn-current' : 'dn-link';
        
        return `<a href="javascript:void(0);" onclick="if(typeof window.goToLink === 'function'){ window.goToLink('${target}'); } else { location.href='${target}'; } return false;" class="${linkClass}">${logoHtml}${name}</a>`;
    };

    // 4. 덕빈남도 대학교 데이터
    const univData = [
        {
            category: '국립', catClass: '',
            groups: [
                { char: 'ㄷ', schools: [mkLink('국립덕남대학교', '국립덕남대학교_UI.webp', '덕남대학교.html'), mkLink('덕주교육대학교', '국립덕주교육대학교_ui.svg')] },
                { char: 'ㅎ', schools: [mkLink('한국국방기술대학교', '대한민국_정부_로고.svg')] }
            ]
        },
        {
            category: '공립', catClass: 'public',
            groups: [
                { char: 'ㄷ', schools: [mkLink('덕남도립대학', '덕빈남도_로고.webp')] }
            ]
        },
        {
            category: '사립', catClass: 'private',
            groups: [
                { char: 'ㄴ', schools: [mkLink('낙주대학교', '낙주대학교.svg')] },
                { char: 'ㄷ', schools: [mkLink('덕빈보건대학', '덕빈보건대학교.svg'), mkLink('덕빈폴리텍대학', '폴리텍.svg'), mkLink('덕주대학교', '덕주대학교_UI.svg')] },
                { char: 'ㅁ', schools: [mkLink('마진해양대학', '마진해양대학교_UI.svg', '마진해양대학교.html')] },
                { char: 'ㅂ', schools: [mkLink('방산대학교', '방산대학교_UI.svg')] },
                { char: 'ㅇ', schools: [mkLink('엽월대학교 덕남캠퍼스', '엽월대학교_UI.webp', '엽월대학교.html'), mkLink('인곡과학대학', '인곡과학대학교_UI.webp', '인곡과학대학교.html')] }
            ]
        }
    ];

    // 5. HTML 조립 및 삽입
    containers.forEach(container => {
        let html = `
            <div class="dn-univ-wrapper">
                <table class="dn-univ-table">
                    <thead class="dn-univ-thead">
                        <tr>
                            <td colspan="3" class="dn-header-title">
                                <div class="dn-header-content">
                                    덕빈남도 대학교 현황
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" class="dn-toggle-row">
                                [ <span class="dn-toggle-btn" onclick="const tb = this.closest('table').querySelector('tbody'); if(tb.classList.contains('hidden')){tb.classList.remove('hidden'); this.innerText='접기';}else{tb.classList.add('hidden'); this.innerText='펼치기';}">접기</span> ]
                            </td>
                        </tr>
                    </thead>
                    <tbody class="dn-univ-tbody">
        `;

        univData.forEach(section => {
            const rowCount = section.groups.length;
            section.groups.forEach((group, index) => {
                html += `<tr>`;
                if (index === 0) html += `<th class="dn-th-category ${section.catClass}" rowspan="${rowCount}">${section.category}</th>`;
                html += `<td class="dn-td-initial">${group.char}</td>`;
                html += `<td class="dn-td-content">${group.schools.join('<span class="dn-sep">·</span>')}</td>`;
                html += `</tr>`;
            });
        });

        html += `</tbody></table></div>`;
        container.innerHTML = html;
    });
});