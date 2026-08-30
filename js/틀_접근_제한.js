(function() {
    // 1. 스타일 주입
    if (!document.getElementById('style-acl-restriction')) {
        const style = document.createElement('style');
        style.id = 'style-acl-restriction';
        style.textContent = `
            .acl-restriction-container {
                display: flex;
                align-items: center;
                font-size: 0.95rem;
                color: #373a3c;
                margin-bottom: 15px;
                line-height: 1.5;
            }
            .acl-green-badge {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background-color: #008000;
                width: 16px;
                height: 16px;
                border-radius: 2px;
                margin: 0 3px;
                vertical-align: middle;
            }
            .acl-link {
                color: #0275d8;
                text-decoration: none;
            }
            .acl-link:hover {
                text-decoration: underline;
            }
        `;
        document.head.appendChild(style);
    }

    // 2. 템플릿 HTML (SVG 아이콘 포함)
    const templateHTML = `
        <div class="acl-restriction-container">
            <!-- 회색 자물쇠 아이콘 -->
            <svg width="15" height="18" viewBox="0 0 24 24" fill="#777" style="margin-right: 6px; margin-bottom: 2px;">
                <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 5a3 3 0 1 1 6 0v3H9V7z"/>
            </svg>
            
            <span>편집 보호된 문서입니다. 문서의</span>
            
            <!-- 녹색 링크 배지 아이콘 -->
            <span class="acl-green-badge">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
            </span>
            
            <!-- 링크 텍스트 -->
            <span><a href="ACL.html" class="acl-link">ACL 탭</a>을 확인하세요.</span>
        </div>
    `;

    // 3. 지정된 div(id="template-acl-restriction")에 렌더링
    const targetDiv = document.getElementById('template-acl-restriction');
    if (targetDiv) {
        targetDiv.innerHTML = templateHTML;
    } else if (document.currentScript) {
        document.currentScript.insertAdjacentHTML('afterend', templateHTML);
    }
})();