(function() {
    // 1. 특례시 (80만 이상) 템플릿 전용 CSS 정의
    const css = `
        .hw-special-800k-wrapper {
            border: 1px solid var(--wiki-border, #ccc);
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #fff;
            width: 100%;
            box-sizing: border-box;
            clear: both;
            margin-bottom: 20px;
        }
        .hw-special-800k-header {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 44px;
            border-bottom: 1px solid #ccc;
            overflow: hidden;
            background-color: #fff;
        }
        .hw-special-800k-left-svg {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 120px;
        }
        .hw-special-800k-right-svg {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 120px;
        }
        .hw-special-800k-title {
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 2;
            font-size: 1.05rem;
            font-weight: 900;
            color: #000;
        }
        .hw-special-800k-title img { height: 22px; }
        
        /* 네이티브 details/summary 사용 */
        .hw-special-800k-folding { margin: 0; padding: 0; background: #fff; }
        .hw-special-800k-folding summary {
            display: block; text-align: center; padding: 8px; cursor: pointer;
            background-color: #f9f9f9; font-weight: bold; font-size: 0.85rem;
            color: #333; list-style: none; border-bottom: 1px solid #ccc;
        }
        .hw-special-800k-folding summary::-webkit-details-marker { display: none; }
        .hw-special-800k-folding summary:hover { background-color: #eee; }
        
        .hw-special-800k-table { width: 100%; border-collapse: collapse; table-layout: fixed; text-align: center; }
        .hw-special-800k-table th {
            color: white; border: 1px solid #ccc; border-top: none;
            padding: 8px 4px; font-weight: bold; font-size: 0.9rem; white-space: nowrap;
        }
        .hw-special-800k-table td {
            border: 1px solid #ccc; padding: 12px 4px; background-color: #fff;
            vertical-align: middle; height: 75px;
        }
        
        .hw-special-800k-cell { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; }
        .hw-special-800k-cell img { max-width: 60px; height: 26px; object-fit: contain; }
        .hw-special-800k-cell span { font-size: 0.85rem; font-weight: bold; color: var(--wiki-link, #0022AA); }
        
        .hw-special-800k-table a { color: var(--wiki-link, #0022AA); text-decoration: none; }
        .hw-special-800k-table a:hover { text-decoration: underline; }
        .hw-special-800k-fn-link { font-size: 0.75rem; color: #555; vertical-align: super; margin-left: 2px; text-decoration: none !important; font-weight: normal; }
        
        .hw-special-800k-footer {
            background-color: #f8f9fa; color: #444; font-size: 0.85rem;
            padding: 10px; line-height: 1.6; text-align: center; border-top: 1px solid #ccc;
        }
    `;

    // 2. HTML 템플릿 정의 (수원, 용인, 고양, 청주, 창원, 빈주)
    const html = `
        <div class="hw-special-800k-wrapper">
            <div class="hw-special-800k-header">
                <div class="hw-special-800k-left-svg">
                    <svg height="100%" width="100%" viewBox="0 0 150 48" preserveAspectRatio="none">
                        <polygon points="-10,48 30,0 60,0 20,48" fill="black"/>
                        <polygon points="35,48 75,0 105,0 65,48" fill="black"/>
                        <polygon points="80,48 120,0 150,0 110,48" fill="black"/>
                    </svg>
                </div>
                <div class="hw-special-800k-title">
                    <img src="이미지/대한민국_정부.svg" alt="대한민국 정부">
                    대한민국의 특례시
                </div>
                <div class="hw-special-800k-right-svg">
                    <svg height="100%" width="100%" viewBox="0 0 150 48" preserveAspectRatio="none">
                        <polygon points="40,48 95,0 150,0 150,48" fill="#CD2E3A"/>
                        <polygon points="105,48 150,0 150,48" fill="#0047A0"/>
                    </svg>
                </div>
            </div>
            
            <details class="hw-special-800k-folding" open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="hw-special-800k-table">
                    <tr>
                        <th colspan="3" style="background-color: #1a5c9e;">경기도</th>
                        <th style="background-color: #6E397B;">충청북도</th>
                        <th style="background-color: #E75133;">경상남도</th>
                        <th style="background-color: #4AD898;">덕빈북도</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="hw-special-800k-cell">
                                <img src="이미지/수원시.svg" alt="수원시">
                                <span><a href="수원시.html">수원시</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-special-800k-cell">
                                <img src="이미지/용인시.svg" alt="용인시">
                                <span><a href="용인시.html">용인시</a><a href="#fn-1" class="hw-special-800k-fn-link">[1]</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-special-800k-cell">
                                <img src="이미지/고양시.svg" alt="고양시">
                                <span><a href="고양시.html">고양시</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-special-800k-cell">
                                <img src="이미지/청주시.svg" alt="청주시">
                                <span><a href="청주시.html">청주시</a><a href="#fn-1" class="hw-special-800k-fn-link">[1]</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-special-800k-cell">
                                <img src="이미지/창원시.svg" alt="창원시">
                                <span><a href="창원시.html">창원시</a><a href="#fn-1" class="hw-special-800k-fn-link">[1]</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-special-800k-cell">
                                <img src="이미지/빈주시.webp" alt="빈주시">
                                <span><a href="빈주시.html">빈주시</a><a href="#fn-1" class="hw-special-800k-fn-link">[1]</a></span>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- 푸터 -->
                    <tr>
                        <td colspan="6" class="hw-special-800k-footer">
                            [1]: 도농복합시<br>
                            인구 50만 명 이상 대도시 특례는 틀:<a href="대도시_특례.html">대한민국의 대도시 특례(특정시)</a> 참조
                        </td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    // 3. 스타일 삽입
    if (!document.getElementById('hw-special-800k-styles')) {
        const styleTag = document.createElement('style');
        styleTag.id = 'hw-special-800k-styles';
        styleTag.innerHTML = css;
        document.head.appendChild(styleTag);
    }

    // 4. 컨테이너에 삽입
    // 해당 JS를 호출하는 위치의 컨테이너 ID(예: nav-container-special-city-800k)를 찾아 삽입합니다.
    const container = document.getElementById('nav-container-special-city-800k');
    if (container) {
        container.innerHTML = html;
    } else {
        // ID를 못 찾을 경우, 스크립트 태그 바로 앞에 삽입 (폴백)
        const currentScript = document.currentScript;
        if (currentScript) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            currentScript.parentNode.insertBefore(tempDiv.firstElementChild, currentScript);
        }
    }
})();