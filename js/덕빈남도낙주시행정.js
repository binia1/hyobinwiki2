/**
 * 파일명: js/덕빈남도낙주시행정.js
 * 설명: 덕빈남도 낙주시 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#bb0033";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-덕빈남도낙주시-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "덕빈남도낙주시Nav_" + index;
        var uniqueLabelId = "덕빈남도낙주시Label_" + index;

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
                        <img onerror="this.src='이미지/hyobin1.webp'" src="이미지/낙주시.webp" style="height: 40px; filter: brightness(0) invert(1);"/>
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈남도 낙주시</div>
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
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #bb0033; font-weight: bold; color: white;">읍</td><td style="border: 1px solid #ccc; padding: 10px;"><a href="진적읍.html" style="text-decoration: none; color: #0056b3;">진적읍</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px;"><a href="길산읍.html" style="text-decoration: none; color: #0056b3;">길산읍</a></td></tr>
<tr><td rowspan="4" style="border: 1px solid #ccc; padding: 10px; background-color: #bb0033; font-weight: bold; color: white;">면</td><td style="border: 1px solid #ccc; padding: 10px;"><a href="흥림면.html" style="text-decoration: none; color: #0056b3;">흥림면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="경영면.html" style="text-decoration: none; color: #0056b3;">경영면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="산언면.html" style="text-decoration: none; color: #0056b3;">산언면</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;"><a href="진류면.html" style="text-decoration: none; color: #0056b3;">진류면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="대상면.html" style="text-decoration: none; color: #0056b3;">대상면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="기좌면.html" style="text-decoration: none; color: #0056b3;">기좌면</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;"><a href="우색면.html" style="text-decoration: none; color: #0056b3;">우색면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="지기면.html" style="text-decoration: none; color: #0056b3;">지기면</a></td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">행정동</th><th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">법정동</th></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="회삼1동.html" style="text-decoration: none; color: white;">회삼1동</a></td><td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px;">회삼동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="회삼2동.html" style="text-decoration: none; color: white;">회삼2동</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="삼채1동.html" style="text-decoration: none; color: white;">삼채1동</a></td><td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px;">삼채동(일부)</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="삼채2동.html" style="text-decoration: none; color: white;">삼채2동</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="삼채3동.html" style="text-decoration: none; color: white;">삼채3동</a></td><td style="border: 1px solid #ccc; padding: 10px;">삼채동(일부)</td><td style="border: 1px solid #ccc; padding: 10px;">희실동</td><td style="border: 1px solid #ccc; padding: 10px;">전야동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="판창1동.html" style="text-decoration: none; color: white;">판창1동</a></td><td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px;">판창동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="판창2동.html" style="text-decoration: none; color: white;">판창2동</a></td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="천풍동.html" style="text-decoration: none; color: white;">천풍동</a></td><td style="border: 1px solid #ccc; padding: 10px;">천풍동</td><td style="border: 1px solid #ccc; padding: 10px;">대웅동</td><td style="border: 1px solid #ccc; padding: 10px;">화주동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">결나동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="이달1동.html" style="text-decoration: none; color: white;">이달1동</a></td><td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px;">이달동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="이달2동.html" style="text-decoration: none; color: white;">이달2동</a></td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="낙주동.html" style="text-decoration: none; color: white;">낙주동</a></td><td style="border: 1px solid #ccc; padding: 10px;">중동</td><td style="border: 1px solid #ccc; padding: 10px;">낙주동</td><td style="border: 1px solid #ccc; padding: 10px;">유암동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">서구동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="토마동.html" style="text-decoration: none; color: white;">토마동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">토마동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="이파동.html" style="text-decoration: none; color: white;">이파동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">이파동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="고규동.html" style="text-decoration: none; color: white;">고규동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">고규동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #0097A7; font-weight: bold;"><a href="엽산동.html" style="text-decoration: none; color: white;">엽산동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;"><span style="background-color: #D32F2F; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; font-weight: bold; vertical-align: middle; display: inline-block; line-height: 1;">시청</span>엽산동</td></tr>
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
