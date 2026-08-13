/**
 * 파일명: js/치원군행정.js
 * 설명: 덕빈북도 치원군 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#bf360c";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-치원군-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "치원군Nav_" + index;
        var uniqueLabelId = "치원군Label_" + index;

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
                        <img onerror="this.src='이미지/hyobin1.webp'" src="이미지/치원군.webp" style="height: 40px; filter: brightness(0) invert(1);"/>
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 치원군</div>
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
<th style="border: 1px solid #ccc; padding: 10px; background-color: #ff5722; color: white; font-size: 14px;">읍</th>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px;">
<span style="background-color: #f57c00; color: white; padding: 2px 4px; border-radius: 3px; font-size: 10px; margin-right: 4px; font-weight: bold;">군청</span><a href="#s-14.1" style="text-decoration: none; color: #0056b3;">치원읍</a>
</td>
</tr>
<tr>
<th rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #ff5722; color: white; font-size: 14px;">면</th>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-14.2" style="text-decoration: none; color: #0056b3;">후등면</a></td>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-14.3" style="text-decoration: none; color: #0056b3;">백생면</a></td>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-14.4" style="text-decoration: none; color: #0056b3;">근해면</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-14.5" style="text-decoration: none; color: #0056b3;">봉월면</a></td>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-14.6" style="text-decoration: none; color: #0056b3;">산전면</a></td>
<td style="border: 1px solid #ccc; padding: 10px;"><a href="#s-14.7" style="text-decoration: none; color: #0056b3;">채화면</a></td>
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
