/**
 * 파일명: js/덕빈남도하정시행정.js
 * 설명: 덕빈남도 하정시 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#ff3b72";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-덕빈남도하정시-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "덕빈남도하정시Nav_" + index;
        var uniqueLabelId = "덕빈남도하정시Label_" + index;

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
                        <img onerror="this.src='이미지/hyobin1.webp'" src="이미지/하정시.webp" style="height: 40px; filter: brightness(0) invert(1);"/>
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈남도 하정시</div>
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
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #ff3b72; font-weight: bold; color: white;">읍</td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;"><a href="별당읍.html" style="text-decoration: none; color: #0056b3;">별당읍</a></td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #ff3b72; font-weight: bold; color: white;">면</td><td style="border: 1px solid #ccc; padding: 10px;"><a href="구주면.html" style="text-decoration: none; color: #0056b3;">구주면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="팔번면.html" style="text-decoration: none; color: #0056b3;">팔번면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="등전면.html" style="text-decoration: none; color: #0056b3;">등전면</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;"><a href="귀선면.html" style="text-decoration: none; color: #0056b3;">귀선면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="산동면.html" style="text-decoration: none; color: #0056b3;">산동면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="산서면.html" style="text-decoration: none; color: #0056b3;">산서면</a></td></tr>
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">행정동</th><th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">법정동</th></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #26C6DA; font-weight: bold;"><a href="하정동.html" style="text-decoration: none; color: black;">하정동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">하정동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #26C6DA; font-weight: bold;"><a href="규산동.html" style="text-decoration: none; color: black;">규산동</a></td><td style="border: 1px solid #ccc; padding: 10px;">규산동</td><td style="border: 1px solid #ccc; padding: 10px;">오서동</td><td style="border: 1px solid #ccc; padding: 10px;">고국동</td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #26C6DA; font-weight: bold;"><a href="해성동.html" style="text-decoration: none; color: black;">해성동</a></td><td style="border: 1px solid #ccc; padding: 10px;"><span style="background-color: #D32F2F; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; font-weight: bold; vertical-align: middle; display: inline-block; line-height: 1;">시청</span>해정동</td><td style="border: 1px solid #ccc; padding: 10px;">원성동</td><td style="border: 1px solid #ccc; padding: 10px;">구산동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">중앙동</td><td style="border: 1px solid #ccc; padding: 10px;">영산동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #26C6DA; font-weight: bold;"><a href="율진동.html" style="text-decoration: none; color: black;">율진동</a></td><td style="border: 1px solid #ccc; padding: 10px;">괴음동</td><td style="border: 1px solid #ccc; padding: 10px;">내덕동</td><td style="border: 1px solid #ccc; padding: 10px;">무은동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">신반동</td><td style="border: 1px solid #ccc; padding: 10px;">율진동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td rowspan="4" style="border: 1px solid #ccc; padding: 10px; background-color: #26C6DA; font-weight: bold;"><a href="동석동.html" style="text-decoration: none; color: black;">동석동</a></td><td style="border: 1px solid #ccc; padding: 10px;">동석동</td><td style="border: 1px solid #ccc; padding: 10px;">신응동</td><td style="border: 1px solid #ccc; padding: 10px;">산기동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">온진동</td><td style="border: 1px solid #ccc; padding: 10px;">음악동</td><td style="border: 1px solid #ccc; padding: 10px;">국어동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">수학동</td><td style="border: 1px solid #ccc; padding: 10px;">영어동</td><td style="border: 1px solid #ccc; padding: 10px;">미술동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">체육동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
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
