(function() {
    if (!document.getElementById('style-template-education')) {
        const style = document.createElement('style');
        style.id = 'style-template-education';
        style.textContent = `
            .wiki-frame-education {
                border: 1px solid #ccc;
                border-top: 5px solid #7777aa; /* 효빈위키 색상 */
                padding: 15px;
                margin: 10px 0;
                text-align: left;
                background-color: #fff;
                font-family: 'Noto Sans KR', sans-serif;
                color: #373a3c;
                line-height: 1.5;
            }
            .wiki-frame-education-title {
                font-size: 1.1rem;
                font-weight: bold;
                margin-bottom: 12px;
            }
            .wiki-frame-education a {
                color: #0275d8;
                text-decoration: none;
            }
            .wiki-frame-education a:hover {
                text-decoration: underline;
            }
            .wiki-frame-education-toggle {
                text-align: center;
                font-size: 0.85rem;
                border-bottom: 1px solid #ddd;
                padding-bottom: 8px;
                margin-bottom: 12px;
                color: #555;
                cursor: pointer;
                user-select: none;
            }
            .wiki-frame-education-toggle:hover {
                background-color: #f8f9fa;
            }
            /* 토글되는 콘텐츠 영역 스타일 */
            .wiki-frame-education-content {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease-in-out;
            }
            .wiki-frame-education-content.expanded {
                max-height: 500px; /* 콘텐츠가 충분히 들어갈 수 있는 크기 지정 */
            }
            .wiki-frame-education-list {
                margin-top: 0;
                padding-left: 20px;
                font-size: 0.9rem;
            }
            .wiki-frame-education-list li {
                margin-bottom: 4px;
            }
        `;
        document.head.appendChild(style);
    }

    const templateHTML = `
        <div class="wiki-frame-education">
            <div class="wiki-frame-education-title">
                이 문서는 <a href="#">교육기관</a> 관련 문서입니다.<br>
                다음과 같은 서술은 작성 시 <a href="#">편집권 남용</a>으로 간주되어 제재될 수 있습니다.
            </div>
            <div class="wiki-frame-education-toggle" id="education-toggle-btn">
                [ 펼치기 · 접기 ]
            </div>
            <div class="wiki-frame-education-content" id="education-content-area">
                <ul class="wiki-frame-education-list">
                    <li><a href="#">편집합의</a>상 허용되는 경우를 제외한, 템플릿:학교에 존재하지 않는 문단의 추가
                        <ul style="padding-left: 20px; list-style-type: circle; margin-top: 4px;">
                            <li>편집합의상 허용되는 경우
                                <ul style="padding-left: 20px; list-style-type: square; margin-top: 4px;">
                                    <li>학교 홈페이지에 작성된 공식적인 내용을 하위 문단을 만들어 서술하는 것</li>
                                    <li><a href="#">제도권 언론</a>에 보도된 내용에 대해 하위 문단을 만들어 서술하는 것</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>관련 <a href="#">편집지침</a>과 편집합의에 어긋나는 서술
                        <ul style="padding-left: 20px; list-style-type: circle; margin-top: 4px;">
                            <li>자주 발생하는 사례
                                <ul style="padding-left: 20px; list-style-type: square; margin-top: 4px;">
                                    <li>학교 밖에서 알려지지 않은 교사나 학생, 혹은 <a href="#">인물 등재 기준</a>을 만족하지 않는 인물에 관한 서술</li>
                                    <li>학교 수준을 비하하거나, 학교 간의 우열이나 서열을 확정하거나 조장하는 서술</li>
                                    <li>언론에 보도되지 않은 학교 관련 사건 사고에 관한 서술</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    `;

    document.currentScript.insertAdjacentHTML('afterend', templateHTML);

    // 토글 기능 구현
    const currentScriptParent = document.currentScript.parentElement;
    // 삽입된 HTML 요소들을 찾기 위해 setTimeout 사용 (렌더링 보장)
    setTimeout(() => {
        const toggleBtn = currentScriptParent.querySelector('#education-toggle-btn');
        const contentArea = currentScriptParent.querySelector('#education-content-area');
        
        if (toggleBtn && contentArea) {
            toggleBtn.addEventListener('click', function() {
                contentArea.classList.toggle('expanded');
            });
        }
    }, 0);
})();