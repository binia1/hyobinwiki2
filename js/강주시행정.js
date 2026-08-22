/**
 * 파일명: js/강주시행정.js
 * 설명: 덕빈북도 강주시 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#ffc94a";
    var textColor = "black";
    var containers = document.querySelectorAll(".hb-강주시-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "강주시Nav_" + index;
        var uniqueLabelId = "강주시Label_" + index;

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
                        <img onerror="this.src='이미지/hyobin1.webp'" src="이미지/강주시.webp" style="height: 40px; filter: brightness(0) invert(1);"/>
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 강주시</div>
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
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #ffc94a; font-weight: bold; color: black;">읍</td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;"><a href="청성읍.html" style="text-decoration: none; color: #0056b3;">청성읍</a></td></tr>
<tr><td rowspan="4" style="border: 1px solid #ccc; padding: 10px; background-color: #ffc94a; font-weight: bold; color: black;">면</td><td style="border: 1px solid #ccc; padding: 10px;"><a href="갈원면.html" style="text-decoration: none; color: #0056b3;">갈원면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="곡전면.html" style="text-decoration: none; color: #0056b3;">곡전면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="공문면.html" style="text-decoration: none; color: #0056b3;">공문면</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;"><a href="금상면.html" style="text-decoration: none; color: #0056b3;">금상면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="북예면.html" style="text-decoration: none; color: #0056b3;">북예면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="석동면.html" style="text-decoration: none; color: #0056b3;">석동면</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;"><a href="석북면.html" style="text-decoration: none; color: #0056b3;">석북면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="석서면.html" style="text-decoration: none; color: #0056b3;">석서면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="풍영면.html" style="text-decoration: none; color: #0056b3;">풍영면</a></td></tr>
<tr><td colspan="3" style="border: 1px solid #ccc; padding: 10px;"><a href="풍원면.html" style="text-decoration: none; color: #0056b3;">풍원면</a></td></tr>
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">행정동</th><th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">법정동</th></tr>
<tr><td rowspan="4" style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="강주시.html#중앙동" style="text-decoration: none; color: black;">중앙동</a></td><td style="border: 1px solid #ccc; padding: 10px;">중앙로1가</td><td style="border: 1px solid #ccc; padding: 10px;">중앙로2가</td><td style="border: 1px solid #ccc; padding: 10px;">중앙로3가</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">중앙로4가</td><td style="border: 1px solid #ccc; padding: 10px;">영동1가</td><td style="border: 1px solid #ccc; padding: 10px;">남동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">서동</td><td style="border: 1px solid #ccc; padding: 10px;">북동</td><td style="border: 1px solid #ccc; padding: 10px;">장원동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">잠진동</td><td style="border: 1px solid #ccc; padding: 10px;">굴단동</td><td style="border: 1px solid #ccc; padding: 10px;">궁지동</td></tr>
<tr><td rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="신흥동.html" style="text-decoration: none; color: black;">신흥동</a></td><td style="border: 1px solid #ccc; padding: 10px;">신정동</td><td style="border: 1px solid #ccc; padding: 10px;">흥촌동</td><td style="border: 1px solid #ccc; padding: 10px;">영동2가</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">본동</td><td style="border: 1px solid #ccc; padding: 10px;">앵동</td><td style="border: 1px solid #ccc; padding: 10px;">하판동</td></tr>
<tr><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">중흥동</td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="과탐동.html" style="text-decoration: none; color: black;">과탐동</a></td><td style="border: 1px solid #ccc; padding: 10px;">물리동</td><td style="border: 1px solid #ccc; padding: 10px;">화학동</td><td style="border: 1px solid #ccc; padding: 10px;">생물동</td></tr>
<tr><td colspan="3" style="border: 1px solid #ccc; padding: 10px;"><span style="background-color: #D32F2F; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; font-weight: bold; vertical-align: middle; display: inline-block; line-height: 1;">시청</span>지학동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="종상동.html" style="text-decoration: none; color: black;">종상동</a></td><td style="border: 1px solid #ccc; padding: 10px;">종상동</td><td style="border: 1px solid #ccc; padding: 10px;">토형동</td><td style="border: 1px solid #ccc; padding: 10px;">군원동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="광릉동.html" style="text-decoration: none; color: black;">광릉동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">광릉동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="석성동.html" style="text-decoration: none; color: black;">석성동</a></td><td style="border: 1px solid #ccc; padding: 10px;">석성동</td><td style="border: 1px solid #ccc; padding: 10px;">산덕동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="심전1동.html" style="text-decoration: none; color: black;">심전1동</a></td><td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px;">심전동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="심전2동.html" style="text-decoration: none; color: black;">심전2동</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="삼랑동.html" style="text-decoration: none; color: black;">삼랑동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">삼랑동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="야판동.html" style="text-decoration: none; color: black;">야판동</a></td><td style="border: 1px solid #ccc; padding: 10px;">야시동</td><td style="border: 1px solid #ccc; padding: 10px;">판동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="자유동.html" style="text-decoration: none; color: black;">자유동</a></td><td style="border: 1px solid #ccc; padding: 10px;">평화동</td><td style="border: 1px solid #ccc; padding: 10px;">자유동</td><td style="border: 1px solid #ccc; padding: 10px;">제곱동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">수렴동</td><td style="border: 1px solid #ccc; padding: 10px;">극한동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="문성1동.html" style="text-decoration: none; color: black;">문성1동</a></td><td colspan="2" rowspan="2" style="border: 1px solid #ccc; padding: 10px;">문성동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="문성2동.html" style="text-decoration: none; color: black;">문성2동</a></td><td style="border: 1px solid #ccc; padding: 10px;">어목동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="춘일동.html" style="text-decoration: none; color: black;">춘일동</a></td><td style="border: 1px solid #ccc; padding: 10px;">춘일동</td><td style="border: 1px solid #ccc; padding: 10px;">다이동</td><td style="border: 1px solid #ccc; padding: 10px;">풍영동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="탕산동.html" style="text-decoration: none; color: black;">탕산동</a></td><td style="border: 1px solid #ccc; padding: 10px;">탕산동</td><td style="border: 1px solid #ccc; padding: 10px;">향반동</td><td style="border: 1px solid #ccc; padding: 10px;">죽지동</td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="입포동.html" style="text-decoration: none; color: black;">입포동</a></td><td style="border: 1px solid #ccc; padding: 10px;">포시동</td><td style="border: 1px solid #ccc; padding: 10px;">입선동</td><td style="border: 1px solid #ccc; padding: 10px;">환산동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">만속동</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="백택동.html" style="text-decoration: none; color: black;">백택동</a></td><td style="border: 1px solid #ccc; padding: 10px;">일원동</td><td style="border: 1px solid #ccc; padding: 10px;">백택동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #64B5F6; font-weight: bold;"><a href="좌구동.html" style="text-decoration: none; color: black;">좌구동</a></td><td style="border: 1px solid #ccc; padding: 10px;">좌원동</td><td style="border: 1px solid #ccc; padding: 10px;">운안동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
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
