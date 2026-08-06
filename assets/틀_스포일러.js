(function() {
    if (!document.getElementById('style-template-spoiler')) {
        const style = document.createElement('style');
        style.id = 'style-template-spoiler';
        style.textContent = `
            .wiki-frame-spoiler {
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
            .wiki-frame-spoiler-title {
                font-size: 1.15rem;
                margin-bottom: 12px;
            }
            .wiki-frame-spoiler a {
                color: #0275d8;
                text-decoration: none;
            }
            .wiki-frame-spoiler a:hover {
                text-decoration: underline;
            }
        `;
        document.head.appendChild(style);
    }

    const templateHTML = `
        <div class="wiki-frame-spoiler">
            <div class="wiki-frame-spoiler-title">
                이 문서에 <a href="#">스포일러</a>가 포함되어 있습니다.
            </div>
            <div style="font-size: 0.95rem;">
                이 문서가 설명하는 작품이나 인물 등에 대한 줄거리, 결말, 반전 요소 등을 직·간접적으로 포함하고 있습니다.
            </div>
        </div>
    `;

    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();