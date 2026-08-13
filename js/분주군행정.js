/**
 * 파일명: js/분주군행정.js
 * 설명: 덕빈남도 분주군 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#880e4f";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-분주군-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "분주군Nav_" + index;
        var uniqueLabelId = "분주군Label_" + index;

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
                        <img src="이미지/분주군.webp" alt="로고" style="height: 40px;" onerror="this.src='이미지/hyobin1.webp'">
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈남도 분주군</div>
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
<colgroup><col style="width: 20%;"/><col style="width: 26.6%;"/><col style="width: 26.6%;"/><col style="width: 26.6%;"/></colgroup>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #ec407a; color: white; font-size: 14px;">읍</th>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px;">
<span style="background-color: #f57c00; color: white; padding: 2px 4px; border-radius: 3px; font-size: 10px; margin-right: 4px; font-weight: bold;">군청</span><a href="#s-12.1" style="text-decoration: none; color: #0056b3;">분주읍</a>
</td>
</tr>
<tr>
<th rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #ec407a; color: white; font-size: 14px;">면</th>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-12.2" style="text-decoration: none; color: #0056b3;">신안면</a></td>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-12.3" style="text-decoration: none; color: #0056b3;">원구면</a></td>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-12.4" style="text-decoration: none; color: #0056b3;">대자면</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-12.5" style="text-decoration: none; color: #0056b3;">나천면</a></td>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-12.6" style="text-decoration: none; color: #0056b3;">정남면</a></td>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-12.7" style="text-decoration: none; color: #0056b3;">하권면</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-12.8" style="text-decoration: none; color: #0056b3;">이복면</a></td>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-12.9" style="text-decoration: none; color: #0056b3;">평미면</a></td>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-12.10" style="text-decoration: none; color: #0056b3;">정동면</a></td>
</tr>
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
