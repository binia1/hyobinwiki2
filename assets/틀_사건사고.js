(function() {
    if (!document.getElementById('style-template-incident')) {
        const style = document.createElement('style');
        style.id = 'style-template-incident';
        style.textContent = `
            .wiki-frame-incident {
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
            .wiki-frame-incident-title {
                font-size: 1.15rem;
                margin-bottom: 12px;
            }
            .wiki-frame-incident a {
                color: #0275d8;
                text-decoration: none;
            }
            .wiki-frame-incident a:hover {
                text-decoration: underline;
            }
        `;
        document.head.appendChild(style);
    }

    const templateHTML = `
        <div class="wiki-frame-incident">
            <div class="wiki-frame-incident-title">
                주의. 사건·사고 관련 내용을 설명합니다.
            </div>
            <div style="font-size: 0.95rem;">
                <a href="#">사건 사고 관련 서술 규정</a>을 유의하시기 바랍니다.
            </div>
        </div>
    `;

    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();