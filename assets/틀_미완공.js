(function() {
    if (!document.getElementById('style-template-unbuilt')) {
        const style = document.createElement('style');
        style.id = 'style-template-unbuilt';
        style.textContent = `
            .wiki-frame-unbuilt {
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
            .wiki-frame-unbuilt-title {
                font-size: 1.15rem;
                margin-bottom: 12px;
            }
        `;
        document.head.appendChild(style);
    }

    const templateHTML = `
        <div class="wiki-frame-unbuilt">
            <div class="wiki-frame-unbuilt-title">
                이 건축물은 아직 완공되지 않았습니다.
            </div>
            <div style="font-size: 0.95rem;">
                이 문서에는 현재 설계, 계획이나 건축 등의 이유로 건설되지 않은 건축물에 대한 정보가 서술되어 있습니다. 추후 실제 모습과 달라질 수 있습니다.
            </div>
        </div>
    `;

    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();