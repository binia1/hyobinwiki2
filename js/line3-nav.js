(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('hw-line3-nav-container');
        if (!container) return;

        // 캡슐화된 스타일 및 원본 100% 유지 HTML 템플릿
        const template = `
            <style>
                /* 고유 ID 캡슐화 (기존 문서 CSS와 충돌 원천 차단) */
                #hw-line3-nav {
                    width: 100%; max-width: 100%; font-family: 'Noto Sans KR', sans-serif; font-size: 0.9rem; line-height: 1.6; margin: 10px 0;
                }
                
                /* 위키 테이블 기본 속성 캡슐화 */
                #hw-line3-nav table.wiki-nav-table {
                    width: 100%; border-collapse: collapse; background-color: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin: 0;
                }
                #hw-line3-nav table.wiki-nav-table td {
                    padding: 8px 12px; border: 1px solid #ddd; vertical-align: middle;
                }
                
                /* 링크 기본 속성 캡슐화 */
                #hw-line3-nav a.wiki-link,
                #hw-line3-nav a:not(.line3-text) {
                    color: #373a3c; text-decoration: none; transition: color 0.2s;
                }
                #hw-line3-nav a.wiki-link:hover,
                #hw-line3-nav a:not(.line3-text):hover {
                    color: #0275d8; text-decoration: underline;
                }

                /* --- 효빈 도시철도 3호선 전용 하드코딩 테마 --- */
                /* 테두리와 로고 링은 3호선 고유 노란색(#FFCC11), 텍스트는 가독성을 위해 어두운 노란색(#D4A000) 사용 */
                #hw-line3-nav .line3-border { border: 2px solid #FFCC11 !important; }
                #hw-line3-nav .line3-text { color: #D4A000; font-weight: bold; text-decoration: none; }
                #hw-line3-nav a.line3-text:hover { text-decoration: underline; }
                #hw-line3-nav .line3-header-bg { background-color: #fff; padding: 12px; }
                #hw-line3-nav .line3-label { 
                    color: #D4A000; font-weight: bold; width: 30%; text-align: center; background-color: #f9f9f9; 
                }
                #hw-line3-nav .line3-logo-color { border-color: #FFCC11; color: #FFCC11; }

                /* 로고 베이스 스타일 캡슐화 */
                #hw-line3-nav .logo-base { 
                    display: inline-flex; align-items: center; justify-content: center; background-color: #fff; 
                    border-style: solid; font-weight: 900; line-height: 1; vertical-align: middle; margin-right: 6px; box-sizing: border-box; 
                }
                #hw-line3-nav .logo-ring { 
                    width: 28px; height: 28px; border-radius: 50%; border-width: 3px; font-size: 14px; 
                }
                
                /* 유틸리티 스타일 캡슐화 */
                #hw-line3-nav .small-text { font-size: 11px; display: inline-block; color: #666; margin-left: 4px; }
            </style>

            <div id="hw-line3-nav">
                <!-- 원본 HTML 구조 및 클래스명 100% 동일하게 유지 -->
                <table class="wiki-nav-table line3-border">
                    <tbody>
                        <tr>
                            <td colspan="2" class="text-center line3-header-bg">
                                <a href="효빈 도시철도 3호선.html" class="line3-text flex justify-center items-center text-lg">
                                    <span class="logo-base logo-ring line3-logo-color">3</span>
                                    효빈 도시철도 3호선
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="line3-label">
                                3호선
                            </td>
                            <td>
                                <a href="팔조역.html" class="wiki-link">팔조역</a> ~ <a href="북효빈역.html" class="wiki-link">북효빈역</a>
                                <span class="small-text">(12.11km)</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="line3-label">
                                강빈선 공용
                            </td>
                            <td>
                                <a href="북효빈역.html" class="wiki-link">북효빈역</a> ~ <a href="염곡역.html" class="wiki-link">염곡역</a>
                                <span class="small-text">(19.95km)</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="line3-label">
                                효빈국제공항선
                            </td>
                            <td>
                                <a href="염곡역.html" class="wiki-link">염곡역</a> ~ <a href="효빈국제공항역.html" class="wiki-link">효빈국제공항역</a>
                                <span class="small-text">(4.14km)</span><br>
                                <span class="text-xs text-gray-500">* 3호선 전용</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center bg-[#fcfcfc]">
                                <div class="flex justify-center gap-2 text-sm">
                                    <a href="효빈 도시철도 3호선/역 목록.html" class="line3-text wiki-link">역 목록</a>
                                    <span class="text-gray-300">|</span>
                                    <a href="효빈 도시철도 3호선/운행 계통.html" class="line3-text wiki-link">운행 계통</a>
                                    <span class="text-gray-300">|</span>
                                    <a href="효빈 도시철도 3호선/역사.html" class="line3-text wiki-link">역사</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        container.innerHTML = template;
    });
})();