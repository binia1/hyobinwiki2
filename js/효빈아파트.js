/**
 * 파일명: js/효빈아파트_네비.js
 * 설명: 효빈광역시 아파트 (자치구/군별) 나무위키 스타일 내비게이션
 */

(function() {
    var navContainer = document.getElementById("hb-apt-nav");

    if (!navContainer) {
        var scripts = document.getElementsByTagName('script');
        var currentScript = scripts[scripts.length - 1];
        var prevElement = currentScript.previousElementSibling;
        if (prevElement && prevElement.id === "hb-apt-nav") {
            navContainer = prevElement;
        }
    }

    if (navContainer) {
        var navHTML = `
            <div style="border: 1px solid #7777AA; width: 100%; box-sizing: border-box; font-family: 'Noto Sans KR', sans-serif; background: white; margin: 20px 0;">
                <!-- 상단 헤더 -->
                <div style="background: #7777AA; color: white; display: flex; align-items: center; justify-content: center; padding: 12px 20px; border-bottom: 1px solid #7777AA;">
                    <div style="display: flex; align-items: center; gap: 15px; border: 1px solid white; padding: 5px 15px;">
                        <div style="display: flex; align-items: center; justify-content: center;">
                            <img src="이미지/효빈광역시_흰색로고.webp" style="height: 35px; filter: brightness(0) invert(1);" alt="효빈 로고" onerror="this.src='이미지/hyobin1.webp'">
                        </div>
                        <div style="display: flex; flex-direction: column; line-height: 1.1; text-align: left;">
                            <span style="font-size: 12px; font-weight: normal; letter-spacing: 1px;">효빈광역시</span>
                            <span style="font-size: 20px; font-weight: bold;">아파트</span>
                        </div>
                    </div>
                </div>
                
                <!-- 토글 버튼 -->
                <div id="hb-apt-toggle" style="background-color: #666699; color: white; text-align: center; font-size: 12px; font-weight: bold; padding: 6px; cursor: pointer; border-bottom: 1px solid #e5e7eb;" onclick="toggleNav('hb-apt-content', 'hb-apt-toggle')">[ 펼치기 · 접기 ]</div>
                
                <!-- 콘텐츠 영역 -->
                <div id="hb-apt-content" style="overflow: hidden; max-height: 2000px; transition: max-height 0.3s ease;">
                    <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13px; table-layout: fixed; margin: 0; border: none;">
                        <tbody>
                            <!-- 자치구 -->
                            <tr>
                                <th colspan="4" style="background-color: #8888BB; color: white; padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">자치구</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #e5e7eb; border-left: none;"><a href="중구_아파트.html" style="color: #0022AA; text-decoration: none;">중구</a></td>
                                <td style="padding: 10px; border: 1px solid #e5e7eb;"><a href="동구_아파트.html" style="color: #0022AA; text-decoration: none;">동구</a></td>
                                <td style="padding: 10px; border: 1px solid #e5e7eb;"><a href="서구_아파트.html" style="color: #0022AA; text-decoration: none;">서구</a></td>
                                <td style="padding: 10px; border: 1px solid #e5e7eb; border-right: none;"><a href="남구_아파트.html" style="color: #0022AA; text-decoration: none;">남구</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #e5e7eb; border-left: none;"><a href="북구_아파트.html" style="color: #0022AA; text-decoration: none;">북구</a></td>
                                <td style="padding: 10px; border: 1px solid #e5e7eb;"><a href="청엽구_아파트.html" style="color: #0022AA; text-decoration: none;">청엽구</a></td>
                                <td style="padding: 10px; border: 1px solid #e5e7eb;"><a href="안천구_아파트.html" style="color: #0022AA; text-decoration: none;">안천구</a></td>
                                <td style="padding: 10px; border: 1px solid #e5e7eb; border-right: none;"><a href="창전구_아파트.html" style="color: #0022AA; text-decoration: none;">창전구</a></td>
                            </tr>
                            
                            <!-- 자치군 -->
                            <tr>
                                <th colspan="4" style="background-color: #8888BB; color: white; padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb; border-top: 1px solid #e5e7eb;">자치군</th>
                            </tr>
                            <tr>
                                <td colspan="4" style="padding: 10px; border: 1px solid #e5e7eb; border-left: none; border-right: none; border-bottom: none;">
                                    <a href="탄성군_아파트.html" style="color: #0022AA; text-decoration: none;">탄성군</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`;
        
        navContainer.innerHTML = navHTML;
    }

    if (typeof window.toggleNav === 'undefined') {
        window.toggleNav = function(id, labelId) {
            var content = document.getElementById(id);
            var label = document.getElementById(labelId);
            
            if (!content.style.maxHeight || content.style.maxHeight === '2000px') {
                content.style.maxHeight = '0px';
            } else {
                content.style.maxHeight = '2000px';
            }
        };
    }
})();