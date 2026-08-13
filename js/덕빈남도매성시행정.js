/**
 * 파일명: js/덕빈남도매성시행정.js
 * 설명: 덕빈남도 매성시 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#FF6E90";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-덕빈남도매성시-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "덕빈남도매성시Nav_" + index;
        var uniqueLabelId = "덕빈남도매성시Label_" + index;

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
                        <img onerror="this.src='이미지/hyobin1.webp'" src="이미지/매성시.webp" style="height: 40px; filter: brightness(0) invert(1);"/>
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈남도 매성시</div>
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
<colgroup><col style="width: 20%;"/><col style="width: 20%;"/><col style="width: 20%;"/><col style="width: 20%;"/><col style="width: 20%;"/></colgroup>
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">행정동</th><th colspan="4" style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">법정동</th></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #4FC3F7; font-weight: bold; color: black;"><a href="근암1동.html" style="text-decoration: none; color: black;">근암1동</a></td><td colspan="4" rowspan="2" style="border: 1px solid #ccc; padding: 10px;">근암동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #4FC3F7; font-weight: bold; color: black;"><a href="근암2동.html" style="text-decoration: none; color: black;">근암2동</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #4FC3F7; font-weight: bold; color: black;"><a href="매성1동.html" style="text-decoration: none; color: black;">매성1동</a></td><td colspan="4" rowspan="2" style="border: 1px solid #ccc; padding: 10px;">매성동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #4FC3F7; font-weight: bold; color: black;"><a href="매성2동.html" style="text-decoration: none; color: black;">매성2동</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #4FC3F7; font-weight: bold; color: black;"><a href="개서동.html" style="text-decoration: none; color: black;">개서동</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px;">개동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px;">서동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #4FC3F7; font-weight: bold; color: black;"><a href="식곡동.html" style="text-decoration: none; color: black;">식곡동</a></td><td colspan="4" style="border: 1px solid #ccc; padding: 10px;">식곡동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #4FC3F7; font-weight: bold; color: black;"><a href="조천동.html" style="text-decoration: none; color: black;">조천동</a></td><td colspan="4" style="border: 1px solid #ccc; padding: 10px;">조천동</td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #4FC3F7; font-weight: bold; color: black;"><a href="상강동.html" style="text-decoration: none; color: black;">상강동</a></td><td style="border: 1px solid #ccc; padding: 10px;">상운동</td><td style="border: 1px solid #ccc; padding: 10px;">강만동</td><td style="border: 1px solid #ccc; padding: 10px;">수은동</td><td style="border: 1px solid #ccc; padding: 10px;">규리동</td></tr>
<tr><td colspan="4" style="border: 1px solid #ccc; padding: 10px;">순동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #4FC3F7; font-weight: bold; color: black;"><a href="우음동.html" style="text-decoration: none; color: black;">우음동</a></td><td colspan="4" style="border: 1px solid #ccc; padding: 10px;"><span style="background-color: #D32F2F; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; font-weight: bold; vertical-align: middle; display: inline-block; line-height: 1;">시청</span>우음동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #4FC3F7; font-weight: bold; color: black;"><a href="규래동.html" style="text-decoration: none; color: black;">규래동</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px;">규래동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px;">징산동</td></tr>
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
