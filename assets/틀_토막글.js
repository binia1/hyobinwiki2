(function() {
    if (!document.getElementById('style-template-stub')) {
        const style = document.createElement('style');
        style.id = 'style-template-stub';
        style.textContent = `
            .wiki-frame-stub {
                border: 1px solid #ccc;
                border-top: 5px solid #7777aa; /* 요청사항 반영: 청록색 -> 효빈위키 색상 */
                padding: 15px;
                margin: 10px 0;
                text-align: left;
                background-color: #fff;
                font-family: 'Noto Sans KR', sans-serif;
                color: #373a3c;
                line-height: 1.5;
            }
            .wiki-frame-stub-title {
                font-size: 1.15rem;
                margin-bottom: 12px;
            }
            .wiki-frame-stub-title span {
                color: #7777aa; /* 텍스트 내 강조색상 변경 */
            }
            .wiki-frame-stub a {
                color: #0275d8;
                text-decoration: none;
            }
            .wiki-frame-stub a:hover {
                text-decoration: underline;
            }
        `;
        document.head.appendChild(style);
    }

    const templateHTML = `
        <div class="wiki-frame-stub">
            <div class="wiki-frame-stub-title">
                이 문서는 <span>토막글</span>입니다.
            </div>
            <div style="font-size: 0.95rem;">
                <a href="#">토막글 규정</a>을 유의하시기 바랍니다.
            </div>
        </div>
    `;

    document.currentScript.insertAdjacentHTML('afterend', templateHTML);
})();