/**
 * 파일명: js/비천시행정.js
 * 설명: 덕빈남도 비천시 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#74F466";
    var textColor = "black";
    var containers = document.querySelectorAll(".hb-비천시-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "비천시Nav_" + index;
        var uniqueLabelId = "비천시Label_" + index;

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
                        <img src="이미지/비천시.webp" alt="로고" style="height: 40px;" onerror="this.src='이미지/hyobin1.webp'">
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈남도 비천시</div>
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
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #74F466; font-weight: bold; color: black;">읍</td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;"><a href="벽산읍.html" style="text-decoration: none; color: #0056b3;">벽산읍</a></td></tr>
<tr><td rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #74F466; font-weight: bold; color: black;">면</td><td style="border: 1px solid #ccc; padding: 10px;"><a href="서군면.html" style="text-decoration: none; color: #0056b3;">서군면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="소육면.html" style="text-decoration: none; color: #0056b3;">소육면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="수국면.html" style="text-decoration: none; color: #0056b3;">수국면</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;"><a href="괴성면.html" style="text-decoration: none; color: #0056b3;">괴성면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="고녕면.html" style="text-decoration: none; color: #0056b3;">고녕면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="진격산면.html" style="text-decoration: none; color: #0056b3;">진격산면</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;"><a href="구락면.html" style="text-decoration: none; color: #0056b3;">구락면</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">행정동</th><th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">법정동</th></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #AB47BC; font-weight: bold;"><a href="성두동.html" style="text-decoration: none; color: white;">성두동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;"><span style="background-color: #D32F2F; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; font-weight: bold; vertical-align: middle; display: inline-block; line-height: 1;">시청</span>성두동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #AB47BC; font-weight: bold;"><a href="비천동.html" style="text-decoration: none; color: white;">비천동</a></td><td style="border: 1px solid #ccc; padding: 10px;">비천동</td><td style="border: 1px solid #ccc; padding: 10px;">녹정동</td><td style="border: 1px solid #ccc; padding: 10px;">응산동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #AB47BC; font-weight: bold;"><a href="부음동.html" style="text-decoration: none; color: white;">부음동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">부음동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #AB47BC; font-weight: bold;"><a href="괴림동.html" style="text-decoration: none; color: white;">괴림동</a></td><td style="border: 1px solid #ccc; padding: 10px;">괴림동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px;">방산동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #AB47BC; font-weight: bold;"><a href="은암동.html" style="text-decoration: none; color: white;">은암동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">은암동</td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #AB47BC; font-weight: bold;"><a href="구승동.html" style="text-decoration: none; color: white;">구승동</a></td><td style="border: 1px solid #ccc; padding: 10px;">구승동</td><td style="border: 1px solid #ccc; padding: 10px;">개림동</td><td style="border: 1px solid #ccc; padding: 10px;">울경동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">포경동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
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
