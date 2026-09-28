(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('hw-binhyo-rail-nav-container');
        if (!container) return;

        // 캡슐화된 스타일 및 원본 100% 유지 HTML 템플릿
        const template = `
            <style>
                /* 고유 ID 캡슐화 (기존 문서 CSS와 충돌 원천 차단) */
                #hw-binhyo-rail-nav {
                    width: 100%; max-width: 100%; font-family: 'Noto Sans KR', sans-serif; font-size: 0.9rem; line-height: 1.6; margin: 10px 0;
                }
                
                /* 위키 테이블 기본 속성 캡슐화 */
                #hw-binhyo-rail-nav table.wiki-nav-table {
                    width: 100%; border-collapse: collapse; background-color: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin: 0;
                }
                #hw-binhyo-rail-nav table.wiki-nav-table td {
                    padding: 8px 12px; border: 1px solid #ddd; vertical-align: middle;
                }
                
                /* 링크 기본 속성 캡슐화 */
                #hw-binhyo-rail-nav a.wiki-link,
                #hw-binhyo-rail-nav a:not(.binhyo-text) {
                    color: #373a3c; text-decoration: none; transition: color 0.2s;
                }
                #hw-binhyo-rail-nav a.wiki-link:hover,
                #hw-binhyo-rail-nav a:not(.binhyo-text):hover {
                    color: #0275d8; text-decoration: underline;
                }

                /* --- 빈효선 광역전철 전용 하드코딩 테마 (연청색: #6677CC) --- */
                #hw-binhyo-rail-nav .binhyo-border { border: 2px solid #6677CC !important; }
                #hw-binhyo-rail-nav .binhyo-text { color: #6677CC; font-weight: bold; text-decoration: none; }
                #hw-binhyo-rail-nav a.binhyo-text:hover { text-decoration: underline; }
                #hw-binhyo-rail-nav .binhyo-header-bg { background-color: #fff; padding: 12px; }
                #hw-binhyo-rail-nav .binhyo-label { 
                    color: #6677CC; font-weight: bold; width: 30%; text-align: center; background-color: #f9f9f9; 
                }
                #hw-binhyo-rail-nav .binhyo-logo-color { border-color: #6677CC; color: #6677CC; }

                /* 로고 베이스 스타일 캡슐화 */
                #hw-binhyo-rail-nav .logo-base { 
                    display: inline-flex; align-items: center; justify-content: center; background-color: #fff; 
                    border-style: solid; font-weight: 900; line-height: 1; vertical-align: middle; margin-right: 6px; box-sizing: border-box; 
                }
                #hw-binhyo-rail-nav .logo-ring { 
                    width: 28px; height: 28px; border-radius: 50%; border-width: 3px; font-size: 14px; 
                }
                
                /* 유틸리티 스타일 캡슐화 */
                #hw-binhyo-rail-nav .small-text { font-size: 11px; display: inline-block; color: #666; margin-left: 4px; }
            </style>

            <div id="hw-binhyo-rail-nav">
                <!-- 원본 HTML 구조 및 클래스명 100% 동일하게 유지 -->
                <table class="wiki-nav-table binhyo-border">
                    <tbody>
                        <tr>
                            <td colspan="2" class="text-center binhyo-header-bg">
                                <a href="빈효광역선.html" class="binhyo-text flex justify-center items-center text-lg">
                                    <span class="logo-base logo-ring binhyo-logo-color">빈</span>
                                    빈효선 광역전철
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="binhyo-label">
                                <a href="빈효선.html" class="binhyo-text">빈효선</a>
                            </td>
                            <td>
                                <a href="효빈항역.html" class="wiki-link">효빈항역</a> ~ <a href="고남역.html" class="wiki-link">고남역</a>
                                <span class="small-text">(87.89km)</span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="text-center bg-[#fcfcfc]">
                                <div class="flex justify-center gap-2 text-sm">
                                    <a href="빈효선 (광역전철)/역 목록.html" class="binhyo-text wiki-link">역 목록</a>
                                    <span class="text-gray-300">|</span>
                                    <a href="빈효선 (광역전철)/운행 계통.html" class="binhyo-text wiki-link">운행 계통</a>
                                    <span class="text-gray-300">|</span>
                                    <a href="빈효선 (광역전철)/역사.html" class="binhyo-text wiki-link">역사</a>
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