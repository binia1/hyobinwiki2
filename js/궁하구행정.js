/**
 * 파일명: js/궁하구행정.js
 * 설명: 덕빈북도 천주시 궁하구 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#8B4993";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-궁하구-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "궁하구Nav_" + index;
        var uniqueLabelId = "궁하구Label_" + index;

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
                        <img src="이미지/천주시.webp" alt="로고" style="height: 40px;" onerror="this.src='이미지/hyobin1.webp'">
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 천주시 궁하구</div>
                            <div style="font-size: 20px; font-weight: 900;">행정구역</div>
                        </div>
                    </div>
                </div>
                <div class="nav-header-bottom-auto">
                    <span id="${uniqueLabelId}">[ 펼치기 · 접기 ]</span>
                </div>
            </div>
            
            <div id="${uniqueNavId}" style="transition: max-height 0.3s ease-out; overflow: hidden; max-height: 2000px; display: block;">
                <table style="width: 100%; table-layout: fixed; border-collapse: collapse; text-align: center; font-size: 13px;">
<colgroup><col style="width: 25%;"/><col style="width: 25%;"/><col style="width: 25%;"/><col style="width: 25%;"/></colgroup>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #8B4993; color: white;">읍</th>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="청선읍.html" style="text-decoration: none; color: #0056b3;">청선읍</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="산취읍.html" style="text-decoration: none; color: #0056b3;">산취읍</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="과림읍.html" style="text-decoration: none; color: #0056b3;">과림읍</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #8B4993; color: white;">면</th>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="조향면.html" style="text-decoration: none; color: #0056b3;">조향면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="시곡면.html" style="text-decoration: none; color: #0056b3;">시곡면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="부중면.html" style="text-decoration: none; color: #0056b3;">부중면</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #8B4993; color: white;">행정동</th>
<th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #8B4993; color: white;">법정동</th>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="궁하1동.html" style="text-decoration: none; color: black;">궁하1동</a></td>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #1976D2; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">구청</span>궁하동
            </td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="궁하2동.html" style="text-decoration: none; color: black;">궁하2동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">선남동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="견절동.html" style="text-decoration: none; color: black;">견절동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">경전동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">견산동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">절천동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">계고동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">옥동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="서팔1동.html" style="text-decoration: none; color: black;">서팔1동</a></td>
<td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">서팔동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="서팔2동.html" style="text-decoration: none; color: black;">서팔2동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="아이1동.html" style="text-decoration: none; color: black;">아이1동</a></td>
<td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">아이동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="아이2동.html" style="text-decoration: none; color: black;">아이2동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="협화동.html" style="text-decoration: none; color: black;">협화동</a></td>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">협화동</td>
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
