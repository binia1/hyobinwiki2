(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('hw-binju-rail-nav-container');
        if (!container) return;

        // 캡슐화된 스타일 및 원본 100% 유지 HTML 템플릿
        const template = `
            <style>
                /* 고유 ID 캡슐화 (기존 문서 CSS와 충돌 원천 차단) */
                #hw-binju-rail-nav {
                    width: 100%; max-width: 100%; font-family: 'Noto Sans KR', sans-serif; font-size: 0.9rem; line-height: 1.6; margin: 10px 0;
                }
                
                /* 위키 테이블 기본 속성 캡슐화 */
                #hw-binju-rail-nav table.wiki-nav-table {
                    width: 100%; border-collapse: collapse; background-color: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin: 0;
                }
                #hw-binju-rail-nav table.wiki-nav-table td {
                    padding: 8px 12px; border: 1px solid #ddd; vertical-align: middle;
                }
                
                /* 링크 기본 속성 캡슐화 */
                #hw-binju-rail-nav a.wiki-link,
                #hw-binju-rail-nav a:not(.binju-text) {
                    color: #373a3c; text-decoration: none; transition: color 0.2s;
                }
                #hw-binju-rail-nav a.wiki-link:hover,
                #hw-binju-rail-nav a:not(.binju-text):hover {
                    color: #0275d8; text-decoration: underline;
                }

                /* --- 빈주권 광역철도 전용 하드코딩 테마 (코레일 블루: #005BAC) --- */
                #hw-binju-rail-nav .binju-border { border: 2px solid #005BAC !important; }
                #hw-binju-rail-nav .binju-text { color: #005BAC; font-weight: bold; text-decoration: none; }
                #hw-binju-rail-nav a.binju-text:hover { text-decoration: underline; }
                #hw-binju-rail-nav .binju-header-bg { background-color: #fff; padding: 12px; }
                #hw-binju-rail-nav .binju-label { 
                    color: #005BAC; font-weight: bold; width: 30%; text-align: center; background-color: #f9f9f9; 
                }
                #hw-binju-rail-nav .binju-logo-color { border-color: #005BAC; color: #005BAC; }

                /* 로고 베이스 스타일 캡슐화 */
                #hw-binju-rail-nav .logo-base { 
                    display: inline-flex; align-items: center; justify-content: center; background-color: #fff; 
                    border-style: solid; font-weight: 900; line-height: 1; vertical-align: middle; margin-right: 6px; box-sizing: border-box; 
                }
                #hw-binju-rail-nav .logo-oval { 
                    height: 28px; padding: 0 8px; border-radius: 14px; border-width: 3px; font-size: 13px; min-width: 42px; 
                }
                
                /* 유틸리티 스타일 캡슐화 */
                #hw-binju-rail-nav .small-text { font-size: 11px; display: inline-block; color: #666; margin-left: 4px; }
            </style>

            <div id="hw-binju-rail-nav">
                <!-- 원본 HTML 구조 및 클래스명 100% 동일하게 유지 -->
                <table class="wiki-nav-table binju-border">
                    <tbody>
                        <tr>
                            <td colspan="2" class="text-center binju-header-bg">
                                <a href="빈주광역철도.html" class="binju-text flex justify-center items-center text-lg">
                                    <span class="logo-base logo-oval binju-logo-color">빈주</span>
                                    빈주권 광역철도
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="binju-label">
                                <a href="빈효선.html" class="binju-text">빈효선</a>
                            </td>
                            <td>
                                <a href="부진역.html" class="wiki-link">부진역</a> ~ <a href="빈주역.html" class="wiki-link">빈주역</a>
                                <span class="small-text">(34.2km)</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="binju-label">
                                <a href="강빈선.html" class="binju-text">강빈선</a>
                            </td>
                            <td>
                                <a href="풍영역.html" class="wiki-link">풍영역</a> ~ <a href="빈주역.html" class="wiki-link">빈주역</a>
                                <span class="small-text">(32.9km)</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center bg-[#fcfcfc]">
                                <div class="flex justify-center gap-2 text-sm">
                                    <a href="빈주권 광역철도/역 목록.html" class="binju-text wiki-link">역 목록</a>
                                    <span class="text-gray-300">|</span>
                                    <a href="빈주권 광역철도/운행 계통.html" class="binju-text wiki-link">운행 계통</a>
                                    <span class="text-gray-300">|</span>
                                    <a href="빈주권 광역철도/미래.html" class="binju-text wiki-link">미래</a>
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