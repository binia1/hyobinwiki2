/**
 * 파일명: js/덕빈남도덕주시조전구행정.js
 * 설명: 덕빈남도 덕주시 조전구 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#FF6E90";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-덕빈남도덕주시조전구-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "덕빈남도덕주시조전구Nav_" + index;
        var uniqueLabelId = "덕빈남도덕주시조전구Label_" + index;

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
                        <img src="이미지/기본.webp" alt="로고" style="height: 40px;">
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈남도 덕주시 조전구</div>
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
<th style="border: 1px solid #ccc; padding: 10px; background-color: #FF6E90; color: white;">읍</th>
<td colspan="1" style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="팔원읍.html" style="text-decoration: none; color: #0056b3;">팔원읍</a></td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="하기읍.html" style="text-decoration: none; color: #0056b3;">하기읍</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #FF6E90; color: white;">면</th>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="명리면.html" style="text-decoration: none; color: #0056b3;">명리면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="시산면.html" style="text-decoration: none; color: #0056b3;">시산면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="지출면.html" style="text-decoration: none; color: #0056b3;">지출면</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #FF6E90; color: white;">행정동</th>
<th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #FF6E90; color: white;">법정동</th>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="조전1동.html" style="text-decoration: none; color: white;">조전1동</a></td>
<td colspan="3" rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #1976D2; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">구청</span>조전동
            </td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="조전2동.html" style="text-decoration: none; color: white;">조전2동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="조전3동.html" style="text-decoration: none; color: white;">조전3동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="조전4동.html" style="text-decoration: none; color: white;">조전4동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">조전동</td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">우격동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="박현동.html" style="text-decoration: none; color: white;">박현동</a></td>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">박현동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="애남동.html" style="text-decoration: none; color: white;">애남동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">애내동</td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">남조동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="금당동.html" style="text-decoration: none; color: white;">금당동</a></td>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">금당동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="매촌동.html" style="text-decoration: none; color: white;">매촌동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">매촌동</td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">주산동</td>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="삼삼동.html" style="text-decoration: none; color: white;">삼삼동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">삼삼동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">우산동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">삼은동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">신격동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">주성동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="주규동.html" style="text-decoration: none; color: white;">주규동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">규암로1가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">규암로2가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">대국동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">신만동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">신서동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="모은동.html" style="text-decoration: none; color: white;">모은동</a></td>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">모은동</td>
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
