(function() {
    if (!document.getElementById('style-template-closed-route')) {
        const style = document.createElement('style');
        style.id = 'style-template-closed-route';
        style.textContent = `
            .wiki-frame-closed-route {
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
            .wiki-frame-closed-route-title {
                font-size: 1.15rem;
                margin-bottom: 12px;
            }
        `;
        document.head.appendChild(style);
    }

    const templateHTML = `
        <div class="wiki-frame-closed-route">
            <div class="wiki-frame-closed-route-title">
                이 노선은 현재 폐선되었습니다.
            </div>
            <div style="font-size: 0.95rem;">
                이 문서에서 서술하는 노선은 현재 폐선되어 더 이상 운행을 하지 않습니다.
            </div>
        </div>
    `;

    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();