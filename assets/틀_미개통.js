(function() {
    // 1. 틀 디자인 (CSS) 자동 주입
    if (!document.getElementById('style-template-unopened')) {
        const style = document.createElement('style');
        style.id = 'style-template-unopened';
        style.textContent = `
            .wiki-frame-unopened {
                border: 1px solid gray;
                border-top: 5px solid orange;
                padding: 12px;
                margin: 10px 0;
                text-align: left; /* 왼쪽 정렬로 변경 */
                background-color: #fff;
                font-family: 'Noto Sans KR', sans-serif;
                color: #373a3c;
            }
            .wiki-frame-title {
                font-size: 1.2rem;
                font-weight: bold;
                margin-bottom: 8px;
                display: flex;
                align-items: center;
                justify-content: flex-start; /* 아이콘과 제목도 왼쪽 정렬 */
                gap: 8px;
            }
        `;
        document.head.appendChild(style);
    }

    // 2. 틀 내용 (HTML)
    const templateHTML = `
        <div class="wiki-frame-unopened">
            <div class="wiki-frame-title">
                <!-- 아이콘 -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span style="vertical-align:middle;">이 교통 시설 또는 노선은 개통되지 않았습니다.</span>
            </div>
            <div style="font-size: 0.95rem;">
                이 문서에는 현재 설계, 계획이나 공사 등의 이유로 개통되지 않은 교통 시설 또는 노선에 대한 정보가 서술되어 있습니다.
            </div>
        </div>
    `;

    // 3. HTML 삽입
    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();