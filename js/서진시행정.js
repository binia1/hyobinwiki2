/**
 * 파일명: js/서진시행정.js
 * 설명: 덕빈북도 서진시 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#9CA5B9";
    var textColor = "black";
    var containers = document.querySelectorAll(".hb-서진시-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "서진시Nav_" + index;
        var uniqueLabelId = "서진시Label_" + index;

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
                        <img onerror="this.src='이미지/hyobin1.webp'" src="이미지/서진시.webp" style="height: 40px; filter: brightness(0) invert(1);"/>
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 서진시</div>
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
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #D4E157; font-weight: bold; color: black;"><a href="서진1동.html" style="text-decoration: none; color: black;">서진1동</a></td><td rowspan="3" style="border: 1px solid #ccc; padding: 10px;"><span style="background-color: #D32F2F; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; font-weight: bold; vertical-align: middle; display: inline-block; line-height: 1;">시청</span>서진동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #D4E157; font-weight: bold; color: black;"><a href="서진2동.html" style="text-decoration: none; color: black;">서진2,3동</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #D4E157; font-weight: bold; color: black;"><a href="서진4동.html" style="text-decoration: none; color: black;">서진4동</a></td><td style="border: 1px solid #ccc; padding: 10px;">거노동</td><td style="border: 1px solid #ccc; padding: 10px;">나민동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #D4E157; font-weight: bold; color: #d32f2f;"><a href="남진재동.html" style="text-decoration: none; color: #d32f2f;">남진재동</a></td><td style="border: 1px solid #ccc; padding: 10px;">남진동</td><td style="border: 1px solid #ccc; padding: 10px;">재동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #D4E157; font-weight: bold; color: #1976D2;"><a href="아은1동.html" style="text-decoration: none; color: #1976D2;">아은1동</a></td><td colspan="2" rowspan="3" style="border: 1px solid #ccc; padding: 10px;">아은동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #D4E157; font-weight: bold; color: #1976D2;"><a href="아은2동.html" style="text-decoration: none; color: #1976D2;">아은2동</a></td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #D4E157; font-weight: bold; color: #1976D2;"><a href="아은3동.html" style="text-decoration: none; color: #1976D2;">아은3동</a></td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #D4E157; font-weight: bold; color: black;"><a href="서목동.html" style="text-decoration: none; color: black;">서목동</a></td><td rowspan="3" style="border: 1px solid #ccc; padding: 10px;">진목동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #D4E157; font-weight: bold; color: black;"><a href="진목1동.html" style="text-decoration: none; color: black;">진목1동</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #D4E157; font-weight: bold; color: black;"><a href="진목2동.html" style="text-decoration: none; color: black;">진목2동</a></td><td style="border: 1px solid #ccc; padding: 10px;">서릉동</td><td style="border: 1px solid #ccc; padding: 10px;">동릉동</td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #D4E157; font-weight: bold; color: black;"><a href="사추동.html" style="text-decoration: none; color: black;">사추동</a></td><td style="border: 1px solid #ccc; padding: 10px;">사종동</td><td style="border: 1px solid #ccc; padding: 10px;">추자동</td><td style="border: 1px solid #ccc; padding: 10px;">매현동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">이십기동</td><td style="border: 1px solid #ccc; padding: 10px;">서근동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
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
