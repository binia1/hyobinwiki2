(function() {
    if (!document.getElementById('style-template-canceled')) {
        const style = document.createElement('style');
        style.id = 'style-template-canceled';
        style.textContent = `
            .wiki-frame-canceled {
                border: 1px solid #ccc;
                border-top: 5px solid gray;
                padding: 15px;
                margin: 10px 0;
                text-align: left;
                background-color: #fff;
                font-family: 'Noto Sans KR', sans-serif;
                color: #373a3c;
                line-height: 1.5;
            }
            .wiki-frame-canceled-title {
                font-size: 1.15rem;
                margin-bottom: 12px;
            }
        `;
        document.head.appendChild(style);
    }

    const templateHTML = `
        <div class="wiki-frame-canceled">
            <div class="wiki-frame-canceled-title">
                본 계획은 취소 또는 무산되었습니다.
            </div>
            <div style="font-size: 0.95rem;">
                본 문서 또는 문단에서 다루는 계획은 본래 시행될 예정이었지만, 취소 또는 무산/이동되었습니다.
            </div>
        </div>
    `;

    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();