/**
 * 파일명: js/계성시행정.js
 * 설명: 덕빈북도 계성시 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#ED7D95";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-계성시-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "계성시Nav_" + index;
        var uniqueLabelId = "계성시Label_" + index;

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
                        <img onerror="this.src='이미지/hyobin1.webp'" src="이미지/계성시.webp" style="height: 40px; filter: brightness(0) invert(1);"/>
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 계성시</div>
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
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">행정동</th><th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">법정동</th></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81C784; font-weight: bold;"><a href="계성1동.html" style="text-decoration: none; color: black;">계성1동</a></td><td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px;"><span style="background-color: #D32F2F; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; font-weight: bold; vertical-align: middle; display: inline-block; line-height: 1;">시청</span>계성동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81C784; font-weight: bold;"><a href="계성2동.html" style="text-decoration: none; color: black;">계성2동</a></td></tr>
<tr><td rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #81C784; font-weight: bold;"><a href="마시1동.html" style="text-decoration: none; color: black;">마시1동</a></td><td rowspan="4" style="border: 1px solid #ccc; padding: 10px;">마시동</td><td style="border: 1px solid #ccc; padding: 10px;">시정동</td><td style="border: 1px solid #ccc; padding: 10px;">시로동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">마내동</td><td style="border: 1px solid #ccc; padding: 10px;">도아동</td></tr>
<tr><td colspan="2" style="border: 1px solid #ccc; padding: 10px;">신도동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81C784; font-weight: bold;"><a href="마시2동.html" style="text-decoration: none; color: black;">마시2동</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81C784; font-weight: bold;"><a href="진백1동.html" style="text-decoration: none; color: black;">진백1동</a></td><td rowspan="2" style="border: 1px solid #ccc; padding: 10px;">진백동</td><td style="border: 1px solid #ccc; padding: 10px;">부남동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81C784; font-weight: bold;"><a href="진백2동.html" style="text-decoration: none; color: black;">진백2동</a></td><td style="border: 1px solid #ccc; padding: 10px;">진등동</td><td style="border: 1px solid #ccc; padding: 10px;">아마동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81C784; font-weight: bold;"><a href="천1동.html" style="text-decoration: none; color: black;">천1동</a></td><td rowspan="3" style="border: 1px solid #ccc; padding: 10px;">천동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81C784; font-weight: bold;"><a href="천2동.html" style="text-decoration: none; color: black;">천2동</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #81C784; font-weight: bold;"><a href="천3동.html" style="text-decoration: none; color: black;">천3동</a></td><td style="border: 1px solid #ccc; padding: 10px;">하가동</td><td style="border: 1px solid #ccc; padding: 10px;">호두동</td></tr>
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
