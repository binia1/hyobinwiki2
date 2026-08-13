/**
 * 파일명: js/약산시행정.js
 * 설명: 덕빈북도 약산시 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#F8C8C4";
    var textColor = "black";
    var containers = document.querySelectorAll(".hb-약산시-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "약산시Nav_" + index;
        var uniqueLabelId = "약산시Label_" + index;

        var navHTML = `
        <style>
            .nav-box-auto { border: 2px solid ${mainColor}; background-color: white; font-family: 'Noto Sans KR', sans-serif; box-sizing: border-box; margin: 20px 0; }
            .nav-header-container-auto { cursor: pointer; }
            .nav-header-top-auto { background-color: ${mainColor}; color: ${textColor}; display: flex; justify-content: center; align-items: center; padding: 15px 0; }
            .nav-header-title-box { border: 1px solid ${textColor}; display: flex; align-items: center; padding: 5px 15px; gap: 15px; }
            .nav-header-bottom-auto { background-color: ${mainColor}; color: ${textColor}; text-align: center; padding: 6px 0; font-size: 13px; font-weight: bold; border-top: 1px solid rgba(0, 0, 0, 0.3); }
        </style>
        
        <div class="nav-box-auto">
            <div class="nav-header-container-auto" onclick="toggleNav('${uniqueNavId}', '${uniqueLabelId}')">
                <div class="nav-header-top-auto">
                    <div class="nav-header-title-box">
                        <img onerror="this.src='이미지/hyobin1.webp'" src="이미지/약산시.webp" style="height: 40px; filter: brightness(0) invert(1);"/>
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 약산시</div>
                            <div style="font-size: 20px; font-weight: 900;">행정구역</div>
                        </div>
                    </div>
                </div>
                <div class="nav-header-bottom-auto">
                    <span id="${uniqueLabelId}">[ 펼치기 · 접기 ]</span>
                </div>
            </div>
            
            <div id="${uniqueNavId}" style="transition: max-height 0.3s ease-out; overflow: hidden; max-height: 2000px; display: block;">
                <table style="width: 100%; table-layout: fixed; border-collapse: collapse; text-align: center; font-size: 13px; margin: 0; background-color: white;">
<colgroup><col style="width: 25%;"/><col style="width: 25%;"/><col style="width: 25%;"/><col style="width: 25%;"/></colgroup>
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #F8C8C4; color: black; font-size: 14px;">읍</th><td style="border: 1px solid #ccc; padding: 10px;"><a href="장곡읍.html" style="text-decoration: none; color: #0056b3;">장곡읍</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="원강읍.html" style="text-decoration: none; color: #0056b3;">원강읍</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="화소읍.html" style="text-decoration: none; color: #0056b3;">화소읍</a></td></tr>
<tr><th rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #F8C8C4; color: black; font-size: 14px;">면</th><td style="border: 1px solid #ccc; padding: 10px;"><a href="성가면.html" style="text-decoration: none; color: #0056b3;">성가면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="광정면.html" style="text-decoration: none; color: #0056b3;">광정면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="홍하면.html" style="text-decoration: none; color: #0056b3;">홍하면</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;"><a href="근강면.html" style="text-decoration: none; color: #0056b3;">근강면</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">행정동</th><th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">법정동</th></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81D4FA; font-weight: bold;"><a href="약산1동.html" style="text-decoration: none; color: black;">약산1동</a></td><td rowspan="2" style="border: 1px solid #ccc; padding: 10px;"><span style="background-color: #D32F2F; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; font-weight: bold; vertical-align: middle; display: inline-block; line-height: 1;">시청</span>약산동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px;">보녕동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81D4FA; font-weight: bold;"><a href="약산2동.html" style="text-decoration: none; color: black;">약산2동</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px;">고곡동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81D4FA; font-weight: bold;"><a href="역석동.html" style="text-decoration: none; color: black;">역석동</a></td><td style="border: 1px solid #ccc; padding: 10px;">역성동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px;">석동동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81D4FA; font-weight: bold;"><a href="우부동.html" style="text-decoration: none; color: black;">우부동</a></td><td style="border: 1px solid #ccc; padding: 10px;">우부동</td><td style="border: 1px solid #ccc; padding: 10px;">상수구동</td><td style="border: 1px solid #ccc; padding: 10px;">하수구동</td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #81D4FA; font-weight: bold;"><a href="삼미동.html" style="text-decoration: none; color: black;">삼미동</a></td><td style="border: 1px solid #ccc; padding: 10px;">염원동</td><td style="border: 1px solid #ccc; padding: 10px;">북천동</td><td style="border: 1px solid #ccc; padding: 10px;">삼미동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">자미동</td><td style="border: 1px solid #ccc; padding: 10px;">택산동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #81D4FA; font-weight: bold;"><a href="산형동.html" style="text-decoration: none; color: black;">산형동</a></td><td style="border: 1px solid #ccc; padding: 10px;">산형동</td><td style="border: 1px solid #ccc; padding: 10px;">대염동</td><td style="border: 1px solid #ccc; padding: 10px;">매목동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">체신동</td><td style="border: 1px solid #ccc; padding: 10px;">후작동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
</table>
            </div>
        </div>
        `;
        
        container.innerHTML = navHTML;
    });
});

if (typeof window.toggleNav === 'undefined') {
    window.toggleNav = function(id, labelId) {
        var content = document.getElementById(id);
        if (!content) return;
        if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
            content.style.maxHeight = '2000px';
        } else {
            content.style.maxHeight = '0px';
        }
    };
}
