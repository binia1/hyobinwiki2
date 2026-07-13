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
            <div style="border: 1px solid #7777AA; width: 100%; box-sizing: border-box; font-family: sans-serif; background: white; margin-bottom: 20px;">
                <div style="background: #7777AA; color: white; display: flex; align-items: center; justify-content: center; padding: 12px 20px; border-bottom: 1px solid #7777AA; position: relative;">
                    <div style="display: flex; align-items: center; gap: 15px; border: 1px solid white; padding: 5px 15px;">
                        <div style="display: flex; align-items: center; justify-content: center;">
                            <img src="이미지/효빈광역시_흰색로고.webp" style="height: 35px; filter: brightness(0) invert(1);" alt="효빈 로고" onerror="this.src='이미지/hyobin1.webp'">
                        </div>
                        <div style="display: flex; flex-direction: column; line-height: 1.1; text-align: left;">
                            <span style="font-size: 12px; font-weight: normal; letter-spacing: 1px;">효빈광역시</span>
                            <span style="font-size: 20px; font-weight: bold;">기초자치단체</span>
                        </div>
                    </div>
                </div>
                <div style="text-align: center; font-size: 11px; padding: 5px; border-bottom: 1px solid #e5e7eb; background: #666699; color: white; cursor: pointer;">[ 펼치기 · 접기 ]</div>
                
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 12px;">
                    <tbody>
                        <tr>
                            <th colspan="4" style="background-color: #7777AA; color: white; padding: 6px; border-bottom: 1px solid white;">자치구</th>
                        </tr>
                        <tr>
                            <td style="padding: 12px 10px; border: 1px solid #e5e7eb; width: 25%; background: white;">
                                <a href="중구.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                                    <img src="이미지/중구.webp" style="height: 25px; object-fit: contain;" alt="중구" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">중구</span>
                                </a>
                            </td>
                            <td style="padding: 12px 10px; border: 1px solid #e5e7eb; width: 25%; background: white;">
                                <a href="동구.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                                    <img src="이미지/동구.webp" style="height: 25px; object-fit: contain;" alt="동구" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">동구</span>
                                </a>
                            </td>
                            <td style="padding: 12px 10px; border: 1px solid #e5e7eb; width: 25%; background: white;">
                                <a href="서구.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                                    <img src="이미지/서구.webp" style="height: 25px; object-fit: contain;" alt="서구" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">서구</span>
                                </a>
                            </td>
                            <td style="padding: 12px 10px; border: 1px solid #e5e7eb; width: 25%; background: white;">
                                <a href="남구.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                                    <img src="이미지/남구.webp" style="height: 25px; object-fit: contain;" alt="남구" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">남구</span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 10px; border: 1px solid #e5e7eb; width: 25%; background: white;">
                                <a href="북구.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                                    <img src="이미지/북구.webp" style="height: 25px; object-fit: contain;" alt="북구" onerror="this.style.display='none'">
                                    <div><span style="background: #7777AA; color: white; padding: 1px 4px; border-radius: 2px; font-size: 10px; margin-right: 3px;">시청</span><span style="font-weight: bold;">북구</span></div>
                                </a>
                            </td>
                            <td style="padding: 12px 10px; border: 1px solid #e5e7eb; width: 25%; background: white;">
                                <a href="청엽구.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                                    <img src="이미지/청엽구.webp" style="height: 25px; object-fit: contain;" alt="청엽구" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">청엽구</span>
                                </a>
                            </td>
                            <td style="padding: 12px 10px; border: 1px solid #e5e7eb; width: 25%; background: white;">
                                <a href="안천구.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                                    <img src="이미지/안천구.webp" style="height: 25px; object-fit: contain;" alt="안천구" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">안천구</span>
                                </a>
                            </td>
                            <td style="padding: 12px 10px; border: 1px solid #e5e7eb; width: 25%; background: white;">
                                <a href="창전구.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                                    <img src="이미지/창전구.webp" style="height: 25px; object-fit: contain;" alt="창전구" onerror="this.style.display='none'">
                                    <span style="font-weight: bold;">창전구</span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="4" style="background-color: #7777AA; color: white; padding: 6px; border-bottom: 1px solid white;">자치군</th>
                        </tr>
                        <tr>
                            <td colspan="4" style="padding: 12px 10px; border: 1px solid #e5e7eb; background: white;">
                                <div style="display: flex; justify-content: center;">
                                    <a href="탄성군.html" style="text-decoration: none; color: black; display: flex; flex-direction: column; align-items: center; gap: 5px;">
                                        <img src="이미지/탄성군.webp" style="height: 25px; object-fit: contain;" alt="탄성군" onerror="this.style.display='none'">
                                        <span style="font-weight: bold;">탄성군</span>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style="background-color: #7777AA; color: white; padding: 8px; font-size: 11px; text-align: center; line-height: 1.5;">
                    서울 · 광주 · 부산 · 대구 · 효빈 · 인천 · 대전 · 울산 · 세종<br>
                    경기 · 충북 · 충남 · 경북 · 경남 · 덕남 · 덕북 · 강원 · 전북 · 제주<br>
                </div>
            </div>`;


        
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