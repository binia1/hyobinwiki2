(function() {
    if (!document.getElementById('style-template-discussion')) {
        const style = document.createElement('style');
        style.id = 'style-template-discussion';
        style.textContent = `
            .wiki-frame-discussion {
                border: 1px solid #ccc;
                border-top: 5px solid orange;
                padding: 15px;
                margin: 10px 0;
                text-align: left;
                background-color: #fff;
                font-family: 'Noto Sans KR', sans-serif;
                color: #373a3c;
                line-height: 1.5;
            }
            .wiki-frame-discussion-content {
                font-size: 0.95rem;
            }
            .wiki-frame-discussion-badge {
                background-color: #7777aa; /* 요청사항 반영: 초록색 토론 아이콘 -> 효빈위키 색상 */
                color: white;
                padding: 2px 5px;
                border-radius: 3px;
                font-size: 0.85em;
                display: inline-flex;
                align-items: center;
                gap: 4px;
                margin: 0 2px;
            }
            .wiki-frame-discussion a {
                color: #0275d8;
                text-decoration: none;
            }
            .wiki-frame-discussion a:hover {
                text-decoration: underline;
            }
        `;
        document.head.appendChild(style);
    }

    const templateHTML = `
        <div class="wiki-frame-discussion">
            <div class="wiki-frame-discussion-content">
                <strong>이 문서에서 
                <span class="wiki-frame-discussion-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>토론
                </span>이 진행되고 있습니다.</strong> 토론 중인 내용을 일방적으로 편집할 경우 <a href="관련 규정.html">관련 규정</a>에 따라 제재될 수 있습니다.
            </div>
        </div>
    `;

    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();