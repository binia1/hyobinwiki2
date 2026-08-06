(function() {
    if (!document.getElementById('style-template-closed-facility')) {
        const style = document.createElement('style');
        style.id = 'style-template-closed-facility';
        style.textContent = `
            .wiki-frame-closed-facility {
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
            .wiki-frame-closed-facility-title {
                font-size: 1.15rem;
                margin-bottom: 12px;
            }
        `;
        document.head.appendChild(style);
    }

    const templateHTML = `
        <div class="wiki-frame-closed-facility">
            <div class="wiki-frame-closed-facility-title">
                이곳은 폐쇄된 교통 시설입니다.
            </div>
            <div style="font-size: 0.95rem;">
                이 문서에서 서술하는 교통 시설은 폐쇄되어 더 이상 운영하지 않습니다.
            </div>
        </div>
    `;

    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();