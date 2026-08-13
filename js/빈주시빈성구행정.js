/**
 * 파일명: js/빈주시빈성구행정.js
 * 설명: 덕빈북도 빈주시 빈성구 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#1A237E";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-빈주시빈성구-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "빈주시빈성구Nav_" + index;
        var uniqueLabelId = "빈주시빈성구Label_" + index;

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
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 빈주시 빈성구</div>
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
<th style="border: 1px solid #ccc; padding: 10px; background-color: #1A237E; color: white;">면</th>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="고전면.html" style="text-decoration: none; color: #0056b3;">고전면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="남면.html" style="text-decoration: none; color: #0056b3;">남면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="동면.html" style="text-decoration: none; color: #0056b3;">동면</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #1A237E; color: white;">행정동</th>
<th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #1A237E; color: white;">법정동</th>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="시능동.html" style="text-decoration: none; color: #333;">시능동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">시능동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">승루동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">서나동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="동신동.html" style="text-decoration: none; color: #333;">동신동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #9e9e9e; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">시청</span>동신동
            </td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">늑골동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td rowspan="5" style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="중앙동.html" style="text-decoration: none; color: #333;">중앙동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">중앙동1가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">중앙동2가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">중앙동3가</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">중앙동4가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">중앙동5가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">관동1가</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">관동2가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">관동3가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">관동4가</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">본동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">내성동1가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">내성동2가</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">내성동3가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">압전동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">보전동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="여사동.html" style="text-decoration: none; color: #333;">여사동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">여연동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">사민동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="이은동.html" style="text-decoration: none; color: #333;">이은동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #1976D2; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">구청</span>이은동
            </td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">제가동1가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">제가동2가</td>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="지산동.html" style="text-decoration: none; color: #333;">지산동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">지산동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">웅읍동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">사증동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">서구동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="차당동.html" style="text-decoration: none; color: #333;">차당동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">차랑동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">문내동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">문외동</td>
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
