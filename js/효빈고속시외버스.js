document.addEventListener("DOMContentLoaded", function() {
    function renderIntercityBusNavbox(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // 자체 스타일 주입
        const styleId = 'hyobin-intercity-bus-nav-style';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                .ic-bus-nav-wrapper { width: 100%; margin: 15px 0; border: 1px solid var(--wiki-nav, #7777AA); border-radius: 4px; overflow: hidden; font-size: 14px; background-color: var(--wiki-bg, #ffffff); box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
                
                /* 헤더 영역 - 중앙 정렬 및 상대 위치 지정 */
                .ic-bus-nav-header { position: relative; background-color: var(--wiki-nav, #7777AA); color: #fff; padding: 10px 15px; display: flex; justify-content: center; align-items: center; cursor: pointer; user-select: none; transition: background-color 0.2s; }
                .ic-bus-nav-header:hover { filter: brightness(1.1); }
                
                .ic-bus-nav-title { display: flex; align-items: center; gap: 8px; font-weight: bold; font-size: 1.1em; }
                
                /* 로고 강제 흰색 처리 필터 적용 */
                .ic-bus-nav-logo { width: 24px; height: 24px; object-fit: contain; filter: brightness(0) invert(1); }
                
                /* 펼치기/접기 버튼 - 우측 절대 위치로 고정 */
                .ic-bus-nav-toggle { position: absolute; right: 15px; font-size: 0.8rem; background: rgba(255, 255, 255, 0.2); padding: 3px 8px; border-radius: 4px; transition: background 0.2s; }
                .ic-bus-nav-header:hover .ic-bus-nav-toggle { background: rgba(255, 255, 255, 0.35); }
                
                /* 내용 영역 (그리드 레이아웃 적용) */
                .ic-bus-nav-content { display: grid; grid-template-columns: repeat(3, 1fr); background-color: var(--wiki-bg, #ffffff); border-top: 1px solid var(--wiki-nav, #7777AA); }
                .ic-bus-nav-content.hidden { display: none; }
                
                /* 각 항목 스타일 */
                .ic-bus-nav-item { padding: 8px; text-align: center; border-bottom: 1px solid var(--wiki-border, #ddd); border-right: 1px solid var(--wiki-border, #ddd); display: flex; justify-content: center; align-items: center; gap: 4px; }
                .ic-bus-nav-item:nth-child(3n) { border-right: none; } /* 3열째는 우측 테두리 제거 */
                
                .ic-bus-nav-item a { color: var(--wiki-text, #333); text-decoration: none; }
                .ic-bus-nav-item a:hover { color: var(--wiki-link, #0022AA); text-decoration: underline; font-weight: bold; }
                
                [data-theme='dark'] .ic-bus-nav-item a { color: #eeeeee; }
                [data-theme='dark'] .ic-bus-nav-item a:hover { color: #aaaadd; }
            `;
            document.head.appendChild(style);
        }

        const html = `
            <div class="ic-bus-nav-wrapper">
                <div class="ic-bus-nav-header" id="ic-bus-nav-header-btn">
                    <div class="ic-bus-nav-title">
                        <img alt="효빈광역시 로고" src="이미지/효빈로고흰색.webp" class="ic-bus-nav-logo" onerror="this.src='이미지/logo.webp';">
                        <span>효빈광역시 버스 운송사업조합 (고속/시외)</span>
                    </div>
                    <span class="ic-bus-nav-toggle" id="ic-bus-nav-toggle-text">[ 접기 ]</span>
                </div>
                <div class="ic-bus-nav-content" id="ic-bus-nav-content-box">
                    <div class="ic-bus-nav-item"><a href="덕빈고속.html">덕빈고속</a></div>
                    <div class="ic-bus-nav-item"><a href="안천고속.html">안천고속</a></div>
                    <div class="ic-bus-nav-item"><a href="효빈고속.html">효빈고속</a></div>
                    <div class="ic-bus-nav-item"><a href="소진여객.html">소진여객</a></div>
                    <div class="ic-bus-nav-item"><a href="칠양여객.html">칠양여객</a></div>
                    <div class="ic-bus-nav-item"><a href="청엽여객.html">청엽여객</a></div>
                    <div class="ic-bus-nav-item" style="grid-column: span 3; border-bottom: none; border-right: none; background-color: var(--wiki-gray-bg, #f9f9fa);">
                        <a href="대산고속.html" style="font-weight: bold;">대산고속</a>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;

        // 자체 토글(펼치기/접기) 기능 구현
        const headerBtn = container.querySelector('#ic-bus-nav-header-btn');
        const toggleText = container.querySelector('#ic-bus-nav-toggle-text');
        const contentBox = container.querySelector('#ic-bus-nav-content-box');

        if (headerBtn && contentBox && toggleText) {
            headerBtn.addEventListener('click', function() {
                if (contentBox.classList.contains('hidden')) {
                    contentBox.classList.remove('hidden');
                    toggleText.textContent = '[ 접기 ]';
                } else {
                    contentBox.classList.add('hidden');
                    toggleText.textContent = '[ 펼치기 ]';
                }
            });
        }
    }
    
    // 컴포넌트 렌더링 실행
    renderIntercityBusNavbox('hyobin-intercity-bus-nav-container');
});