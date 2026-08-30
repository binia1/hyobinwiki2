(function() {
    // 1. 스타일 주입
    if (!document.getElementById('style-silla-history')) {
        const style = document.createElement('style');
        style.id = 'style-silla-history';
        style.textContent = `
            .silla-wrapper {
                border: 1px solid #ccc;
                margin-bottom: 20px;
                background-color: #fff;
                border-radius: 2px;
                overflow: hidden;
                width: 100%;
                font-family: 'Noto Sans KR', sans-serif;
            }
            .silla-summary {
                background-color: #3b204d;
                text-align: center;
                cursor: pointer;
                list-style: none;
                display: block;
            }
            .silla-summary::-webkit-details-marker { display: none; }
            .silla-header-content {
                padding: 12px;
                border-bottom: 1px solid #5a3d72;
            }
            .silla-title {
                color: #ffde00;
                font-size: 1.3rem;
                font-weight: 900;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                line-height: 1.1;
            }
            .silla-subtitle {
                color: #ccc;
                font-size: 0.8rem;
                font-weight: normal;
                margin-top: 3px;
                letter-spacing: 2px;
            }
            .silla-toggle {
                color: #fff;
                font-size: 0.85rem;
                font-weight: bold;
                padding: 6px;
                background-color: #3b204d;
            }
            .silla-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 0.85rem;
                text-align: center;
                background: #fff;
            }
            .silla-table th, .silla-table td {
                border: 1px solid #dee2e6;
                padding: 8px 12px;
                vertical-align: middle;
            }
            .silla-col-header {
                background-color: #6a4f89;
                color: white;
                font-weight: bold;
                padding: 6px !important;
            }
            .silla-bg-yellow-1 { background-color: #fff6d9; font-weight: bold; color: #444; }
            .silla-bg-yellow-2 { background-color: #fffdf2; color: #444; }
            .silla-bg-dark { background-color: #311545; color: white; font-weight: bold; width: 30%; }
            .silla-bg-purple { background-color: #6a4f89; color: white; }
            
            .silla-link { color: #0275d8; text-decoration: none; font-weight: 500; }
            .silla-link:hover { text-decoration: underline; }
            .silla-link-white { color: white; text-decoration: none; font-weight: bold; }
            .silla-link-white:hover { text-decoration: underline; }
            .silla-text-small { font-size: 0.75rem; color: #666; display: inline-block; margin-top: 2px; }
            .silla-divider { color: #999; margin: 0 4px; font-size: 0.8rem; }
            .silla-divider-white { color: #ccc; margin: 0 6px; font-weight: normal; }
        `;
        document.head.appendChild(style);
    }

    // 2. HTML 템플릿
    const templateHTML = `
        <details class="silla-wrapper" open>
            <summary class="silla-summary">
                <div class="silla-header-content">
                    <div class="silla-title">
                        <img src="이미지/천마도.webp" style="height: 35px; vertical-align: middle;">
                        <div>
                            신라의 역사
                            <div class="silla-subtitle">新羅歷史</div>
                        </div>
                    </div>
                </div>
                <div class="silla-toggle">[ 펼치기 · 접기 ]</div>
            </summary>
            
            <table class="silla-table">
                <thead>
                    <tr>
                        <th colspan="2" class="silla-col-header" style="width: 30%;">시대</th>
                        <th class="silla-col-header" style="width: 70%;">국가</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="3" class="silla-bg-yellow-1">고신라<br>(古新羅)</td>
                        <td class="silla-bg-yellow-2">왕정 이전</td>
                        <td>
                            <a href="진한.html" class="silla-link">진한</a> <a href="사로국.html" class="silla-link">사로국</a><br>
                            <span class="silla-text-small">(<a href="계림.html" class="silla-link" style="font-size:0.75rem;">계림</a>)</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="silla-bg-yellow-2">삼국시대</td>
                        <td><a href="신라.html" class="silla-link">신라</a></td>
                    </tr>
                    <tr>
                        <td class="silla-bg-yellow-2">삼국통일전쟁</td>
                        <td>
                            <a href="신라.html" class="silla-link">신라</a><br>
                            <span class="silla-text-small">
                                <a href="보덕국.html" class="silla-link" style="font-size:0.75rem;">보덕국</a> <span class="silla-divider">|</span> 
                                <a href="계림대도독부.html" class="silla-link" style="font-size:0.75rem;">계림대도독부</a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="2" class="silla-bg-yellow-1">삼국 통일</td>
                        <td class="silla-bg-yellow-2">남북국시대</td>
                        <td>
                            <a href="통일신라.html" class="silla-link">통일신라</a><br>
                            <span class="silla-text-small"><a href="장안국.html" class="silla-link" style="font-size:0.75rem;">장안국</a></span>
                        </td>
                    </tr>
                    <tr>
                        <td class="silla-bg-yellow-2">후삼국시대</td>
                        <td>
                            <a href="신라.html" class="silla-link">신라</a> / <a href="후삼국시대.html" class="silla-link">후삼국시대</a><br>
                            <span class="silla-text-small">
                                <a href="후고구려.html" class="silla-link" style="font-size:0.75rem;">후고구려</a> <span class="silla-divider">|</span> 
                                <a href="후백제.html" class="silla-link" style="font-size:0.75rem;">후백제</a> <span class="silla-divider">|</span> 
                                <a href="후사벌국.html" class="silla-link" style="font-size:0.75rem;">후사벌국</a>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td class="silla-bg-yellow-1">중세</td>
                        <td class="silla-bg-yellow-2">고려의 통일</td>
                        <td><a href="신라부흥운동.html" class="silla-link">신라부흥운동</a></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="silla-bg-dark">역대 왕조</td>
                        <td class="silla-bg-purple">
                            <a href="박씨_왕조.html" class="silla-link-white">박씨 왕조</a> <span class="silla-divider-white">|</span> 
                            <a href="석씨_왕조.html" class="silla-link-white">석씨 왕조</a> <span class="silla-divider-white">|</span> 
                            <a href="김씨_왕조.html" class="silla-link-white">김씨 왕조</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="silla-bg-dark">주요 귀족</td>
                        <td class="silla-bg-purple">
                            <a href="성골.html" class="silla-link-white">성골</a> <span class="silla-divider-white">|</span> 
                            <a href="진골.html" class="silla-link-white">진골</a> <span class="silla-divider-white">|</span> 
                            <a href="육두품.html" class="silla-link-white">육두품</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </details>
    `;

    // 3. DOM 삽입
    const targetDiv = document.getElementById('template-silla-history');
    if (targetDiv) {
        targetDiv.innerHTML = templateHTML;
    } else if (document.currentScript) {
        document.currentScript.insertAdjacentHTML('afterend', templateHTML);
    }
})();