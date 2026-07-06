/**
 * 파일명: js/효빈행정.js
 * 설명: 효빈광역시 행정구역 내비게이션 (즉시 실행 버전)
 */

(function() {
    // 1. 내비게이션 자리 찾기
    var navContainer = document.getElementById("hb-admin-nav");

    // 2. 만약 스크립트가 div보다 먼저 실행됐다면, 현재 스크립트 위치 바로 앞의 div를 찾음
    if (!navContainer) {
        var scripts = document.getElementsByTagName('script');
        var currentScript = scripts[scripts.length - 1];
        var prevElement = currentScript.previousElementSibling;
        if (prevElement && prevElement.id === "hb-admin-nav") {
            navContainer = prevElement;
        }
    }

    if (navContainer) {
        // 내비게이션 HTML 구조
        var navHTML = `
        <div class="nav-box rounded overflow-hidden shadow-sm" style="border-color: var(--wiki-fixed);">
            <div class="nav-box-header" style="background-color: var(--wiki-fixed);" onclick="toggleNav('guNav', 'guLabel')">
                <span class="flex items-center">
                    <img src="이미지/효빈광역시_흰색로고.webp" alt="🏙️" style="height: 3.2em; width: auto; margin-right: 5px;" onerror="this.outerHTML='🏙️'">
                    <span>효빈광역시의 행정구역</span>
                </span>
                <span id="guLabel" class="text-[10px] bg-white/20 px-2 py-0.5 rounded nav-toggle-btn">[접기]</span>
            </div>
            <div id="guNav" class="nav-box-body" style="transition: max-height 0.3s ease-out; overflow: hidden; max-height: 2000px;">
                <table class="nav-table text-xs">
                    <tr>
                        <th style="background-color: var(--wiki-fixed) !important; color:white!important;">자치구</th>
                        <td>
                            <div class="flex flex-wrap justify-center gap-2">
                                <a href="중구.html" class="admin-item">
                                    <img src="이미지/중구.webp" class="admin-logo-space" alt="중구">
                                    중구
                                </a>
                                <a href="동구.html" class="admin-item">
                                    <img src="이미지/동구.webp" class="admin-logo-space" alt="동구">
                                    동구
                                </a>
                                <a href="서구.html" class="admin-item">
                                    <img src="이미지/서구.webp" class="admin-logo-space" alt="서구">
                                    서구
                                </a>
                                <a href="남구.html" class="admin-item">
                                    <img src="이미지/남구.webp" class="admin-logo-space" alt="남구">
                                    남구
                                </a>
                                <a href="북구.html" class="admin-item">
                                    <img src="이미지/북구.webp" class="admin-logo-space" alt="북구">
                                    북구
                                </a>
                                <a href="청엽구.html" class="admin-item">
                                    <img src="이미지/청엽구.webp" class="admin-logo-space" alt="청엽">
                                    청엽구
                                </a>
                                <a href="안천구.html" class="admin-item">
                                    <img src="이미지/안천구.webp" class="admin-logo-space" alt="안천">
                                    안천구
                                </a>
                                <a href="창전구.html" class="admin-item">
                                    <img src="이미지/창전구.webp" class="admin-logo-space" alt="창전">
                                    창전구
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th style="background-color: var(--wiki-fixed) !important; color:white!important;">자치군</th>
                        <td>
                            <div class="flex justify-center">
                                <a href="탄성군.html" class="admin-item">
                                    <img src="이미지/탄성군.webp" class="admin-logo-space" alt="탄성">
                                    탄성군
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        `;
        
        navContainer.innerHTML = navHTML;
    }

    // 토글 기능 (전역)
    if (typeof window.toggleNav === 'undefined') {
        window.toggleNav = function(id, labelId) {
            var content = document.getElementById(id);
            var label = document.getElementById(labelId);
            
            if (!content.style.maxHeight) content.style.maxHeight = '2000px';

            if (content.style.maxHeight === '0px') {
                content.style.maxHeight = '2000px';
                if(label) label.innerText = '[접기]';
            } else {
                content.style.maxHeight = '0px';
                if(label) label.innerText = '[펼치기]';
            }
        };
    }
})();