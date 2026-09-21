(function() {
    // 1. 대도시 특례(특정시) 템플릿 전용 CSS 정의
    const css = `
        .hw-spec-city-wrapper {
            border: 1px solid var(--wiki-border, #ccc);
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #fff;
            width: 100%;
            box-sizing: border-box;
            clear: both;
        }
        .hw-spec-city-header {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 44px;
            border-bottom: 1px solid #ccc;
            overflow: hidden;
            background-color: #fff;
        }
        .hw-header-left-svg {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 120px;
        }
        .hw-header-right-svg {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 120px;
        }
        .hw-spec-city-title {
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 2;
            font-size: 1.05rem;
            font-weight: 900;
            color: #000;
        }
        .hw-spec-city-title img { height: 22px; }
        
        /* 네이티브 details/summary 사용 */
        .hw-spec-city-folding { margin: 0; padding: 0; background: #fff; }
        .hw-spec-city-folding summary {
            display: block; text-align: center; padding: 8px; cursor: pointer;
            background-color: #f9f9f9; font-weight: bold; font-size: 0.85rem;
            color: #333; list-style: none; border-bottom: 1px solid #ccc;
        }
        .hw-spec-city-folding summary::-webkit-details-marker { display: none; }
        .hw-spec-city-folding summary:hover { background-color: #eee; }
        
        .hw-spec-city-table { width: 100%; border-collapse: collapse; table-layout: fixed; text-align: center; }
        .hw-spec-city-table th {
            color: white; border: 1px solid #ccc; border-top: none;
            padding: 8px 4px; font-weight: bold; font-size: 0.9rem; white-space: nowrap;
        }
        .hw-spec-city-table td {
            border: 1px solid #ccc; padding: 12px 4px; background-color: #fff;
            vertical-align: middle; height: 75px;
        }
        
        .hw-city-cell { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; }
        .hw-city-cell img { max-width: 60px; height: 26px; object-fit: contain; }
        .hw-city-cell span { font-size: 0.85rem; font-weight: bold; color: var(--wiki-link, #0022AA); }
        
        .hw-spec-city-table a { color: var(--wiki-link, #0022AA); text-decoration: none; }
        .hw-spec-city-table a:hover { text-decoration: underline; }
        .hw-fn-link { font-size: 0.75rem; color: #555; vertical-align: super; margin-left: 2px; text-decoration: none !important; font-weight: normal; }
        
        .hw-spec-city-footer {
            background-color: #f8f9fa; color: #444; font-size: 0.85rem;
            padding: 10px; line-height: 1.6; text-align: center; border-top: 1px solid #ccc;
        }
    `;

    // 2. HTML 템플릿 정의 (50만 특례 기준 알맞게 반영, 80만 이상 특례시 제외)
    const html = `
        <div class="hw-spec-city-wrapper">
            <div class="hw-spec-city-header">
                <div class="hw-header-left-svg">
                    <svg height="100%" width="100%" viewBox="0 0 150 48" preserveAspectRatio="none">
                        <polygon points="-10,48 30,0 60,0 20,48" fill="black"/>
                        <polygon points="35,48 75,0 105,0 65,48" fill="black"/>
                        <polygon points="80,48 120,0 150,0 110,48" fill="black"/>
                    </svg>
                </div>
                <div class="hw-spec-city-title">
                    <img src="이미지/svg/대한민국_정부.svg" alt="대한민국 정부">
                    대한민국의 대도시 특례(특정시)
                </div>
                <div class="hw-header-right-svg">
                    <svg height="100%" width="100%" viewBox="0 0 150 48" preserveAspectRatio="none">
                        <polygon points="40,48 95,0 150,0 150,48" fill="#CD2E3A"/>
                        <polygon points="105,48 150,0 150,48" fill="#0047A0"/>
                    </svg>
                </div>
            </div>
            
            <details class="hw-spec-city-folding" open>
                <summary>[ 펼치기 · 접기 ]</summary>
                <table class="hw-spec-city-table">
                    <!-- 경기도 -->
                    <tr>
                        <th colspan="5" style="background-color: #1a5c9e;">경기도</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/svg/부천시.svg" alt="부천시">
                                <span><a href="부천시.html">부천시</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/svg/안산시.svg" alt="안산시">
                                <span><a href="안산시.html">안산시</a><a href="#fn-2" class="hw-fn-link">[2]</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/svg/안양시.svg" alt="안양시">
                                <span><a href="안양시.html">안양시</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/svg/평택시.svg" alt="평택시">
                                <span><a href="평택시.html">평택시</a><a href="#fn-1" class="hw-fn-link">[1]</a><a href="#fn-2" class="hw-fn-link">[2]</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/svg/성남시.svg" alt="성남시">
                                <span><a href="성남시.html">성남시</a></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/svg/남양주시.svg" alt="남양주시">
                                <span><a href="남양주시.html">남양주시</a><a href="#fn-1" class="hw-fn-link">[1]</a><a href="#fn-2" class="hw-fn-link">[2]</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/svg/화성시.svg" alt="화성시">
                                <span><a href="화성시.html">화성시</a><a href="#fn-2" class="hw-fn-link">[2]</a></span>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                    <!-- 타 도 -->
                    <tr>
                        <th style="background-color: #7A8D60;">충청남도</th>
                        <th style="background-color: #004EA2;">전북특별자치도</th>
                        <th style="background-color: #00479A;">경상북도</th>
                        <th style="background-color: #E75133;">경상남도</th>
                        <th style="background-color: #4AD898;">덕빈북도</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/svg/천안시.svg" alt="천안시">
                                <span><a href="천안시.html">천안시</a><a href="#fn-2" class="hw-fn-link">[2]</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/svg/전주시.svg" alt="전주시">
                                <span><a href="전주시.html">전주시</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/svg/포항시.svg" alt="포항시">
                                <span><a href="포항시.html">포항시</a><a href="#fn-2" class="hw-fn-link">[2]</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/svg/김해시.svg" alt="김해시">
                                <span><a href="김해시.html">김해시</a><a href="#fn-1" class="hw-fn-link">[1]</a><a href="#fn-2" class="hw-fn-link">[2]</a></span>
                            </div>
                        </td>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/천주시.webp" alt="천주시">
                                <span><a href="천주시.html">천주시</a><a href="#fn-2" class="hw-fn-link">[2]</a></span>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- 덕빈남도 -->
                    <tr>
                        <th colspan="5" style="background-color: #335566;">덕빈남도</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="hw-city-cell">
                                <img src="이미지/덕주시.webp" alt="덕주시">
                                <span><a href="덕주시.html">덕주시</a><a href="#fn-2" class="hw-fn-link">[2]</a></span>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                    <!-- 푸터 -->
                    <tr>
                        <td colspan="5" class="hw-spec-city-footer">
                            [1]: 현재 일반구 미설치 지역<br>
                            [2]: 도농복합시<br>
                            인구 80만 명 이상 대도시 특례는 틀:<a href="특례시.html">대한민국의 특례시</a> 참조
                        </td>
                    </tr>
                </table>
            </details>
        </div>
    `;

    // 3. 스타일 삽입
    if (!document.getElementById('hw-spec-city-styles')) {
        const styleTag = document.createElement('style');
        styleTag.id = 'hw-spec-city-styles';
        styleTag.innerHTML = css;
        document.head.appendChild(styleTag);
    }

    // 4. 컨테이너에 삽입
    const container = document.getElementById('nav-container-special-city');
    if (container) {
        container.innerHTML = html;
    } else {
        const currentScript = document.currentScript;
        if (currentScript) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            currentScript.parentNode.insertBefore(tempDiv.firstElementChild, currentScript);
        }
    }
})();