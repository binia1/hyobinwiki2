(function() {
    // 1. 템플릿 전용 CSS 정의
    const css = `
        .hw-template-wrapper {
            border: 1px solid var(--wiki-border, #ccc);
            margin: 15px 0;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 0.85rem;
            background-color: #fff;
            color: #373a3c;
            width: 100%;
            box-sizing: border-box;
        }
        .hw-template-header {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 48px;
            border-bottom: 1px solid #ccc;
            overflow: hidden;
            background-color: #fff;
        }
        .hw-header-left-svg {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 150px;
        }
        .hw-header-right-svg {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 150px;
        }
        .hw-template-title {
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 2;
        }
        .hw-template-title img {
            height: 26px;
            border: 1px solid #ddd;
        }
        .hw-template-title-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
        }
        .hw-template-title-top {
            font-size: 0.75rem;
            font-weight: 700;
            line-height: 1.2;
            color: #000;
        }
        .hw-template-title-bottom {
            font-size: 1.15rem;
            font-weight: 900;
            line-height: 1.1;
            color: #000;
        }
        .hw-template-toggle {
            text-align: center;
            padding: 6px;
            cursor: pointer;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            font-weight: bold;
            font-size: 0.85rem;
            user-select: none;
            color: #333;
        }
        .hw-template-toggle:hover {
            background-color: #f0f0f0;
        }
        .hw-template-content {
            display: block;
        }
        .hw-template-table {
            width: 100%;
            border-collapse: collapse;
            table-layout: auto;
        }
        .hw-template-table th {
            width: 18%;
            color: white;
            border: 1px solid #ccc;
            padding: 8px 10px;
            text-align: center;
            font-weight: bold;
        }
        .hw-template-table td {
            border: 1px solid #ccc;
            padding: 8px 12px;
            background-color: #fff;
            line-height: 1.6;
        }
        .hw-template-table a {
            color: var(--wiki-link, #0022AA);
            text-decoration: none;
        }
        .hw-template-table a:hover {
            text-decoration: underline;
        }
        
        /* 나무위키 그라데이션 */
        .hw-row-1 th { background-color: #384ab0; }
        .hw-row-2 th { background-color: #485EC6; }
        .hw-row-3 th { background-color: #6073ce; }
        .hw-row-4 th { background-color: #788cd6; }
        .hw-row-5 th { background-color: #90a5de; }
        .hw-row-6 th { background-color: #a8bee6; }
        .hw-row-7 th { background-color: #ffffff; color: #333; }
    `;

    // 2. HTML 템플릿 정의 (링크 완벽 반영)
    const html = `
        <div class="hw-template-wrapper">
            <div class="hw-template-header">
                <div class="hw-header-left-svg">
                    <svg height="100%" width="100%" viewBox="0 0 150 48" preserveAspectRatio="none">
                        <polygon points="-10,48 20,0 55,0 25,48" fill="black"/>
                        <polygon points="35,48 70,0 105,0 75,48" fill="black"/>
                        <polygon points="85,48 120,0 155,0 125,48" fill="black"/>
                    </svg>
                </div>
                
                <div class="hw-template-title">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" alt="태극기">
                    <div class="hw-template-title-text">
                        <span class="hw-template-title-top">대한민국</span>
                        <span class="hw-template-title-bottom">행정구역</span>
                    </div>
                </div>
                
                <div class="hw-header-right-svg">
                    <svg height="100%" width="100%" viewBox="0 0 150 48" preserveAspectRatio="none">
                        <polygon points="30,48 85,0 150,0 95,48" fill="#CD2E3A"/>
                        <polygon points="95,48 150,0 150,48" fill="#0047A0"/>
                    </svg>
                </div>
            </div>
            
            <div class="hw-template-toggle" title="클릭하여 접거나 펴기">[ 펼치기 · 접기 ]</div>
            
            <div class="hw-template-content">
                <table class="hw-template-table">
                    <tr class="hw-row-1">
                        <th>광역자치단체</th>
                        <td>
                            <a href="특별시(행정구역).html">특별시</a> · <a href="통합특별시(행정구역).html">통합특별시</a> · <strong><a href="광역시.html">광역시</a></strong><br>
                            <a href="특별자치시(행정구역).html">특별자치시</a> · <a href="도(행정구역).html">도</a> · <a href="특별자치도(행정구역).html">특별자치도</a>
                        </td>
                    </tr>
                    <tr class="hw-row-2">
                        <th>기초자치단체</th>
                        <td>
                            <a href="시(행정구역)_대한민국.html">자치시</a>(<a href="도농복합시(행정구역).html">도농복합시</a> · <a href="대도시 특례(특례시)(행정구역).html">대도시 특례(특례시)</a>)<br>
                            <a href="군_행정구역_대한민국.html">자치군</a> · <a href="구_행정구역_대한민국.html">자치구</a>
                        </td>
                    </tr>
                    <tr class="hw-row-3">
                        <th>3단계</th>
                        <td>
                            <a href="구_행정구역_대한민국.html">일반구(행정구)</a> · <a href="시(행정구역)_대한민국.html">행정시</a>
                        </td>
                    </tr>
                    <tr class="hw-row-4">
                        <th>4단계</th>
                        <td>
                            <a href="읍(행정구역).html">읍</a> · <a href="면(행정구역).html">면</a> (<a href="행정면(행정구역).html">행정면</a> · <a href="법정면(행정구역).html">법정면</a>) · <a href="동(행정구역).html">동</a> (<a href="행정동.html">행정동</a> · <a href="법정동.html">법정동</a>)
                        </td>
                    </tr>
                    <tr class="hw-row-5">
                        <th>5단계</th>
                        <td>
                            <a href="리(행정구역).html">리</a> (<a href="행정리(행정구역).html">행정리</a> · <a href="법정리(행정구역).html">법정리</a>) · <a href="통(행정구역).html">통</a>
                        </td>
                    </tr>
                    <tr class="hw-row-6">
                        <th>6단계</th>
                        <td>
                            <a href="반(행정구역).html">반</a>
                        </td>
                    </tr>
                    <tr class="hw-row-7">
                        <th>기타</th>
                        <td>
                            <a href="특별지방자치단체(행정구역).html">특별지방자치단체</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `;

    // 3. 스크립트 실행 위치 추적 및 DOM 삽입
    const currentScript = document.currentScript;
    
    // 스타일 중복 방지
    if (!document.getElementById('hw-template-styles')) {
        const styleTag = document.createElement('style');
        styleTag.id = 'hw-template-styles';
        styleTag.innerHTML = css;
        document.head.appendChild(styleTag);
    }

    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    const templateNode = wrapper.firstElementChild;
    currentScript.parentNode.insertBefore(templateNode, currentScript);

    // 4. [ 펼치기 · 접기 ] 토글 기능
    const toggleBtn = templateNode.querySelector('.hw-template-toggle');
    const contentDiv = templateNode.querySelector('.hw-template-content');
    
    toggleBtn.addEventListener('click', () => {
        if (contentDiv.style.display === 'none') {
            contentDiv.style.display = 'block';
        } else {
            contentDiv.style.display = 'none';
        }
    });
})();