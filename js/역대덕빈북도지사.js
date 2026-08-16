document.addEventListener("DOMContentLoaded", function() {
    function renderAllDeokbinGovernorsNav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const styleId = 'deokbin-all-governors-nav-style';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                .db-nav-wrapper { width: 100%; margin: 10px 0 25px 0; }
                .db-nav-table { border-collapse: collapse; width: 100%; border: 2px solid #4AD898; background-color: var(--wiki-bg); font-size: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
                .db-nav-table td { border: 1px solid var(--wiki-border); padding: 5px 8px; text-align: center; vertical-align: middle; color: var(--wiki-text); }
                
                /* 헤더 스타일 */
                .db-nav-header { background-color: #4AD898 !important; color: #fff !important; font-weight: bold; border: 1px solid #4AD898; padding: 8px 10px; }
                [data-theme='dark'] .db-nav-header { background-color: #2E8B57 !important; border-color: #2E8B57; }
                .db-nav-header-flex { display: flex; justify-content: center; align-items: center; position: relative; width: 100%; }
                .db-nav-header a { color: #fff; text-decoration: none; font-size: 1.1em; display: inline-flex; align-items: center; }
                
                /* 휘장 이미지 스타일 */
                .db-nav-symbol { height: 26px; margin-right: 6px; vertical-align: middle; }
                
                /* 접기 버튼 */
                .db-toggle-btn { font-size: 0.8rem; cursor: pointer; opacity: 0.8; user-select: none; color: white; position: absolute; right: 0; }
                .db-toggle-btn:hover { text-decoration: underline; opacity: 1; }

                /* 내부 테이블 스타일 */
                .db-inner-table { width: 100%; border-collapse: collapse; border-style: hidden; table-layout: fixed; }
                .db-inner-table td { border: 1px solid var(--wiki-border); padding: 5px; width: 20%; background-color: var(--wiki-bg); } 
                
                /* 인물 정보 스타일 */
                .db-sub-header { font-size: 0.85em; color: #4AD898; font-weight: bold; display: block; margin-bottom: 2px; }
                [data-theme='dark'] .db-sub-header { color: #5cb85c; }
                .db-link { color: #0275d8; text-decoration: none; font-weight: bold; }
                .db-link:hover { text-decoration: underline; color: #01447e; }
                [data-theme='dark'] .db-link { color: #aaaadd; }
                [data-theme='dark'] .db-link:hover { color: #ccccff; }
                
                /* 하단 슬로건/정보 */
                .db-nav-footer { background-color: var(--wiki-gray-bg); font-size: 11px; padding: 4px; border-top: 1px solid var(--wiki-border); }
                .db-slogan-cell { background-color: var(--wiki-bg); padding: 10px; border-top: 2px solid #4AD898; }
                [data-theme='dark'] .db-slogan-cell { border-top-color: #2E8B57; }
                
                .db-slogan-wrap { display: flex; justify-content: center; align-items: center; width: 100%; }
                .db-slogan-img { width: 70px; display: block; }

                .db-nav-tbody { transition: all 0.2s; }
                .db-nav-tbody.hidden { display: none; }
            `;
            document.head.appendChild(style);
        }

        const tableBodyId = 'db-nav-body';
        
        const html = `
            <div class="db-nav-wrapper">
                <table class="db-nav-table">
                    <thead>
                        <tr>
                            <td class="db-nav-header" colspan="2">
                                <div class="db-nav-header-flex">
                                    <a href="덕빈북도.html">
                                        <img src="이미지/덕북로고.webp" alt="덕빈북도 휘장" class="db-nav-symbol" onerror="this.style.display='none'; this.parentElement.innerHTML=''">
                                    </a>
                                    <a href="덕빈북도지사.html">역대 덕빈북도지사</a>
                                    <span class="db-toggle-btn" id="db-nav-toggle">[접기]</span>
                                </div>
                            </td>
                        </tr>
                    </thead>

                    <tbody id="${tableBodyId}" class="db-nav-tbody">
                        <tr>
                            <td colspan="2" style="padding: 0;">
                                <table class="db-inner-table">
                                    <tr>
                                        <td><span class="db-sub-header">초대</span><a href="김영기.html" class="db-link">김영기</a></td>
                                        <td><span class="db-sub-header">제2대</span><a href="박동식.html" class="db-link">박동식</a></td>
                                        <td><span class="db-sub-header">제3대</span><a href="최진호.html" class="db-link">최진호</a></td>
                                        <td><span class="db-sub-header">제4대</span><a href="이병규.html" class="db-link">이병규</a></td>
                                        <td><span class="db-sub-header">제5대</span><a href="정기선.html" class="db-link">정기선</a></td>
                                    </tr>
                                    <tr>
                                        <td><span class="db-sub-header">제6대</span><a href="황도영.html" class="db-link">황도영</a></td>
                                        <td><span class="db-sub-header">제7대</span><a href="윤성민.html" class="db-link">윤성민</a></td>
                                        <td><span class="db-sub-header">제8대</span><a href="장수환.html" class="db-link">장수환</a></td>
                                        <td><span class="db-sub-header">제9대</span><a href="신재문.html" class="db-link">신재문</a></td>
                                        <td><span class="db-sub-header">제10대</span><a href="강대현.html" class="db-link">강대현</a></td>
                                    </tr>
                                    <tr>
                                        <td><span class="db-sub-header">제13대</span><a href="조용철.html" class="db-link">조용철</a></td>
                                        <td><span class="db-sub-header">제14대</span><a href="권태영.html" class="db-link">권태영</a></td>
                                        <td><span class="db-sub-header">제15대</span><a href="송민우.html" class="db-link">송민우</a></td>
                                        <td><span class="db-sub-header">제16대</span><a href="임재석.html" class="db-link">임재석</a></td>
                                        <td><span class="db-sub-header">제17대</span><a href="오준호.html" class="db-link">오준호</a></td>
                                    </tr>
                                    <tr>
                                        <td><span class="db-sub-header">제18대</span><a href="백창수.html" class="db-link">백창수</a></td>
                                        <td><span class="db-sub-header">제19대</span><a href="서영환.html" class="db-link">서영환</a></td>
                                        <td><span class="db-sub-header">제20대</span><a href="구본진.html" class="db-link">구본진</a></td>
                                        <td><span class="db-sub-header">제21대</span><a href="안재훈.html" class="db-link">안재훈</a></td>
                                        <td><span class="db-sub-header">제22대</span><a href="홍경수.html" class="db-link">홍경수</a></td>
                                    </tr>
                                    <tr>
                                        <td><span class="db-sub-header">제23대</span><a href="문상원.html" class="db-link">문상원</a></td>
                                        <td><span class="db-sub-header">제24대</span><a href="유동민.html" class="db-link">유동민</a></td>
                                        <td><span class="db-sub-header">제25대</span><a href="차현기.html" class="db-link">차현기</a></td>
                                        <td><span class="db-sub-header">제26대</span><a href="손정호.html" class="db-link">손정호</a></td>
                                        <td><span class="db-sub-header">제27대</span><a href="오창석.html" class="db-link">오창석</a></td>
                                    </tr>
                                    <tr>
                                        <td><span class="db-sub-header">제28대</span><a href="하태진.html" class="db-link">하태진</a></td>
                                        <td><span class="db-sub-header">제29대</span><a href="오창석.html" class="db-link">오창석</a></td>
                                        <td><span class="db-sub-header">제30·31대</span><a href="이태식.html" class="db-link">이태식</a></td>
                                        <td><span class="db-sub-header">제32·33대</span><a href="한광호.html" class="db-link">한광호</a></td>
                                        <td><span class="db-sub-header">제34대</span><a href="송지훈.html" class="db-link">송지훈</a></td>
                                    </tr>
                                    <tr>
                                        <td colspan="5"><span class="db-sub-header">제35·36·37대</span><a href="강수성.html" class="db-link font-black text-lg text-blue-600 dark:text-blue-400">강수성</a></td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="db-nav-footer">
                                            ◀ <a href="조선시대 덕빈관찰사.html" class="db-link">조선시대 덕빈관찰사</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="db-slogan-cell">
                                <div class="db-slogan-wrap">
                                    <a href="덕빈북도.html">
                                        <img src="이미지/덕빈북도_도정슬로건.webp" alt="덕빈북도 도정슬로건" class="db-slogan-img" onerror="this.style.display='none'; this.parentElement.innerHTML=''">
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        container.innerHTML = html;

        const toggleBtn = container.querySelector('#db-nav-toggle');
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
    
    renderAllDeokbinGovernorsNav('deokbin-all-governors-nav');
});