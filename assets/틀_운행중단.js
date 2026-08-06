(function() {
    if (!document.getElementById('style-template-suspended')) {
        const style = document.createElement('style');
        style.id = 'style-template-suspended';
        style.textContent = `
            .wiki-frame-suspended {
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
            .wiki-frame-suspended-title {
                font-size: 1.15rem;
                margin-bottom: 12px;
            }
        `;
        document.head.appendChild(style);
    }

    const templateHTML = `
        <div class="wiki-frame-suspended">
            <div class="wiki-frame-suspended-title">
                이 문서는 현재 운행이 중단된 노선을 다룹니다.
            </div>
            <div style="font-size: 0.95rem;">
                이 문서에서 서술하는 도로, 철도, 버스, 항공, 선박 등의 노선은 현재 무기한 또는 특정 기간에 한하여 운행이 중단되었습니다.
            </div>
        </div>
    `;

    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();