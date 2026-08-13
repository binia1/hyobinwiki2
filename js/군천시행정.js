/**
 * 파일명: js/군천시행정.js
 * 설명: 덕빈북도 군천시 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#E7D600";
    var textColor = "black";
    var containers = document.querySelectorAll(".hb-군천시-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "군천시Nav_" + index;
        var uniqueLabelId = "군천시Label_" + index;

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
                        <img onerror="this.src='이미지/hyobin1.webp'" src="이미지/군천시.webp" style="height: 40px; filter: brightness(0) invert(1);"/>
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 군천시</div>
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
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #E7D600; font-weight: bold; color: black;">읍</td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;"><a href="신득읍.html" style="text-decoration: none; color: #0056b3;">신득읍</a></td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #E7D600; font-weight: bold; color: black;">면</td><td style="border: 1px solid #ccc; padding: 10px;"><a href="남오면.html" style="text-decoration: none; color: #0056b3;">남오면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="한동면.html" style="text-decoration: none; color: #0056b3;">한동면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="남강면.html" style="text-decoration: none; color: #0056b3;">남강면</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;"><a href="오조면.html" style="text-decoration: none; color: #0056b3;">오조면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="조빈면.html" style="text-decoration: none; color: #0056b3;">조빈면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="을차면.html" style="text-decoration: none; color: #0056b3;">을차면</a></td></tr>
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">행정동</th><th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">법정동</th></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="군천동.html" style="text-decoration: none; color: white;">군천동</a></td><td style="border: 1px solid #ccc; padding: 10px;"><span style="background-color: #D32F2F; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; font-weight: bold; vertical-align: middle; display: inline-block; line-height: 1;">시청</span>군천동</td><td style="border: 1px solid #ccc; padding: 10px;">진곡동</td><td style="border: 1px solid #ccc; padding: 10px;">견전동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">관야동</td><td style="border: 1px solid #ccc; padding: 10px;">대청동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td rowspan="4" style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="중동.html" style="text-decoration: none; color: white;">중동</a></td><td style="border: 1px solid #ccc; padding: 10px;">대개동</td><td style="border: 1px solid #ccc; padding: 10px;">중동</td><td style="border: 1px solid #ccc; padding: 10px;">길경동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">신전동</td><td style="border: 1px solid #ccc; padding: 10px;">명고동</td><td style="border: 1px solid #ccc; padding: 10px;">고구동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">자각동</td><td style="border: 1px solid #ccc; padding: 10px;">천택동</td><td style="border: 1px solid #ccc; padding: 10px;">제포동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">석목동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="애음1동.html" style="text-decoration: none; color: white;">애음1동</a></td><td colspan="3" rowspan="3" style="border: 1px solid #ccc; padding: 10px;">애음동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="애음2동.html" style="text-decoration: none; color: white;">애음2동</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="애음3동.html" style="text-decoration: none; color: white;">애음3동</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="남민1동.html" style="text-decoration: none; color: white;">남민1동</a></td><td rowspan="3" style="border: 1px solid #ccc; padding: 10px;">남민동</td><td style="border: 1px solid #ccc; padding: 10px;">가립동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="남민2동.html" style="text-decoration: none; color: white;">남민2동</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="남민3동.html" style="text-decoration: none; color: white;">남민3동</a></td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="현해1동.html" style="text-decoration: none; color: white;">현해1동</a></td><td style="border: 1px solid #ccc; padding: 10px;">현남동</td><td style="border: 1px solid #ccc; padding: 10px;">해천동</td><td style="border: 1px solid #ccc; padding: 10px;">수옥동</td></tr>
<tr><td rowspan="4" style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="현해2동.html" style="text-decoration: none; color: white;">현해2동</a></td><td style="border: 1px solid #ccc; padding: 10px;">호산동</td><td style="border: 1px solid #ccc; padding: 10px;">우내동</td><td style="border: 1px solid #ccc; padding: 10px;">장월동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">합지동</td><td style="border: 1px solid #ccc; padding: 10px;">풍구동</td><td style="border: 1px solid #ccc; padding: 10px;">환삼동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">하경동</td><td style="border: 1px solid #ccc; padding: 10px;">총경동</td><td style="border: 1px solid #ccc; padding: 10px;">근판동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">횡도동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="호택동.html" style="text-decoration: none; color: white;">호택동</a></td><td style="border: 1px solid #ccc; padding: 10px;">호천동</td><td style="border: 1px solid #ccc; padding: 10px;">석택동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="하강동.html" style="text-decoration: none; color: white;">하강동</a></td><td style="border: 1px solid #ccc; padding: 10px;">강전동</td><td style="border: 1px solid #ccc; padding: 10px;">하향동</td><td style="border: 1px solid #ccc; padding: 10px;">성창동</td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #9575CD; font-weight: bold;"><a href="고옥동.html" style="text-decoration: none; color: white;">고옥동</a></td><td style="border: 1px solid #ccc; padding: 10px;">고착동</td><td style="border: 1px solid #ccc; padding: 10px;">학구동</td><td style="border: 1px solid #ccc; padding: 10px;">하합동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">팔호동</td><td style="border: 1px solid #ccc; padding: 10px;">옥택동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
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
