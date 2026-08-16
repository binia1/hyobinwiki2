document.addEventListener("DOMContentLoaded", function() {
    function renderAllDeokbinNamGovernorsNav(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const styleId = 'deokbin-nam-governors-nav-style';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                .dn-nav-wrapper { width: 100%; margin: 10px 0 25px 0; }
                .dn-nav-table { border-collapse: collapse; width: 100%; border: 2px solid #335566; background-color: var(--wiki-bg); font-size: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
                .dn-nav-table td { border: 1px solid var(--wiki-border); padding: 5px 8px; text-align: center; vertical-align: middle; color: var(--wiki-text); }
                
                /* 헤더 스타일 */
                .dn-nav-header { background-color: #335566 !important; color: #fff !important; font-weight: bold; border: 1px solid #335566; padding: 8px 10px; }
                .dn-nav-header-flex { display: flex; justify-content: center; align-items: center; position: relative; width: 100%; }
                .dn-nav-header a { color: #fff; text-decoration: none; font-size: 1.1em; display: inline-flex; align-items: center; }
                
                /* 휘장 이미지 스타일 */
                .dn-nav-symbol { height: 26px; margin-right: 6px; vertical-align: middle; }
                
                /* 접기 버튼 */
                .dn-toggle-btn { font-size: 0.8rem; cursor: pointer; opacity: 0.8; user-select: none; color: white; position: absolute; right: 0; }
                .dn-toggle-btn:hover { text-decoration: underline; opacity: 1; }

                /* 내부 테이블 스타일 */
                .dn-inner-table { width: 100%; border-collapse: collapse; border-style: hidden; table-layout: fixed; }
                .dn-inner-table td { border: 1px solid var(--wiki-border); padding: 5px; width: 20%; background-color: var(--wiki-bg); } 
                
                /* 인물 정보 스타일 */
                .dn-sub-header { font-size: 0.85em; color: #335566; font-weight: bold; display: block; margin-bottom: 2px; }
                [data-theme='dark'] .dn-sub-header { color: #6699aa; }
                .dn-link { color: #0275d8; text-decoration: none; font-weight: bold; }
                .dn-link:hover { text-decoration: underline; color: #01447e; }
                [data-theme='dark'] .dn-link { color: #aaaadd; }
                [data-theme='dark'] .dn-link:hover { color: #ccccff; }
                
                /* 하단 슬로건/정보 */
                .dn-nav-footer { background-color: var(--wiki-gray-bg); font-size: 11px; padding: 4px; border-top: 1px solid var(--wiki-border); }
                .dn-slogan-cell { background-color: var(--wiki-bg); padding: 10px; border-top: 2px solid #335566; }
                
                .dn-slogan-wrap { display: flex; justify-content: center; align-items: center; width: 100%; }
                .dn-slogan-img { width: 70px; display: block; }

                .dn-nav-tbody { transition: all 0.2s; }
                .dn-nav-tbody.hidden { display: none; }
            `;
            document.head.appendChild(style);
        }

        const tableBodyId = 'dn-nav-body';
        
        const html = `
            <div class="dn-nav-wrapper">
                <table class="dn-nav-table">
                    <thead>
                        <tr>
                            <td class="dn-nav-header" colspan="2">
                                <div class="dn-nav-header-flex">
                                    <a href="덕빈남도.html">
                                        <img src="이미지/덕남로고흰색.webp" alt="덕빈남도 휘장" class="dn-nav-symbol" onerror="this.style.display='none'; this.parentElement.innerHTML=''">
                                    </a>
                                    <a href="덕빈남도지사.html">역대 덕빈남도지사</a>
                                    <span class="dn-toggle-btn" id="dn-nav-toggle">[접기]</span>
                                </div>
                            </td>
                        </tr>
                    </thead>

                    <tbody id="${tableBodyId}" class="dn-nav-tbody">
                        <tr>
                            <td colspan="2" style="padding: 0;">
                                <table class="dn-inner-table">
                                    <tr>
                                        <td><span class="dn-sub-header">초대</span><a href="이경수.html" class="dn-link">이경수</a></td>
                                        <td><span class="dn-sub-header">제2대</span><a href="박성호.html" class="dn-link">박성호</a></td>
                                        <td><span class="dn-sub-header">제3대</span><a href="윤철민.html" class="dn-link">윤철민</a></td>
                                        <td><span class="dn-sub-header">제4대</span><a href="김태윤.html" class="dn-link">김태윤</a></td>
                                        <td><span class="dn-sub-header">제5대</span><a href="정진우.html" class="dn-link">정진우</a></td>
                                    </tr>
                                    <tr>
                                        <td><span class="dn-sub-header">제6대</span><a href="최형석.html" class="dn-link">최형석</a></td>
                                        <td><span class="dn-sub-header">제7대</span><a href="한명재.html" class="dn-link">한명재</a></td>
                                        <td><span class="dn-sub-header">제8대</span><a href="오기환.html" class="dn-link">오기환</a></td>
                                        <td><span class="dn-sub-header">제9대</span><a href="송대원.html" class="dn-link">송대원</a></td>
                                        <td><span class="dn-sub-header">제10대</span><a href="류상철.html" class="dn-link">류상철</a></td>
                                    </tr>
                                    <tr>
                                        <td><span class="dn-sub-header">제13대</span><a href="강석훈.html" class="dn-link">강석훈</a></td>
                                        <td><span class="dn-sub-header">제14대</span><a href="조민성.html" class="dn-link">조민성</a></td>
                                        <td><span class="dn-sub-header">제15대</span><a href="임동길.html" class="dn-link">임동길</a></td>
                                        <td><span class="dn-sub-header">제16대</span><a href="백기철.html" class="dn-link">백기철</a></td>
                                        <td><span class="dn-sub-header">제17대</span><a href="서종현.html" class="dn-link">서종현</a></td>
                                    </tr>
                                    <tr>
                                        <td><span class="dn-sub-header">제18대</span><a href="구본탁.html" class="dn-link">구본탁</a></td>
                                        <td><span class="dn-sub-header">제19대</span><a href="안성재.html" class="dn-link">안성재</a></td>
                                        <td><span class="dn-sub-header">제20대</span><a href="홍영태.html" class="dn-link">홍영태</a></td>
                                        <td><span class="dn-sub-header">제21대</span><a href="문종수.html" class="dn-link">문종수</a></td>
                                        <td><span class="dn-sub-header">제22대</span><a href="유재광.html" class="dn-link">유재광</a></td>
                                    </tr>
                                    <tr>
                                        <td><span class="dn-sub-header">제23대</span><a href="차상민.html" class="dn-link">차상민</a></td>
                                        <td><span class="dn-sub-header">제24대</span><a href="손기영.html" class="dn-link">손기영</a></td>
                                        <td><span class="dn-sub-header">제25대</span><a href="노명식.html" class="dn-link">노명식</a></td>
                                        <td><span class="dn-sub-header">제26대</span><a href="하성준.html" class="dn-link">하성준</a></td>
                                        <td><span class="dn-sub-header">제27대</span><a href="송진환.html" class="dn-link">송진환</a></td>
                                    </tr>
                                    <tr>
                                        <td><span class="dn-sub-header">제28대</span><a href="황대근.html" class="dn-link">황대근</a></td>
                                        <td><span class="dn-sub-header">제29대</span><a href="박중호.html" class="dn-link">박중호</a></td>
                                        <td><span class="dn-sub-header">제30대</span><a href="이창섭.html" class="dn-link">이창섭</a></td>
                                        <td><span class="dn-sub-header">제31·32·33대</span><a href="양원승.html" class="dn-link">양원승</a></td>
                                        <td><span class="dn-sub-header">제34대</span><a href="강응현.html" class="dn-link">강응현</a></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2"><span class="dn-sub-header">제35·36·37대</span><a href="조삼현.html" class="dn-link">조삼현</a></td>
                                        <td colspan="3"><span class="dn-sub-header">제38·39대</span><a href="김영산.html" class="dn-link font-black text-lg text-blue-600 dark:text-blue-400">김영산</a></td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="dn-nav-footer">
                                            ◀ <a href="조선시대 덕빈관찰사.html" class="dn-link">조선시대 덕빈관찰사</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="dn-slogan-cell">
                                <div class="dn-slogan-wrap">
                                    <a href="덕빈남도.html">
                                        <img src="이미지/덕빈남도_도정슬로건.webp" alt="덕빈남도 도정슬로건" class="dn-slogan-img" onerror="this.style.display='none'; this.parentElement.innerHTML=''">
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        container.innerHTML = html;

        const toggleBtn = container.querySelector('#dn-nav-toggle');
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
    
    renderAllDeokbinNamGovernorsNav('deokbin-nam-governors-nav');
});