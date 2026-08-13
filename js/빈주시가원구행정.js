/**
 * 파일명: js/빈주시가원구행정.js
 * 설명: 덕빈북도 빈주시 가원구 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#1A237E";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-빈주시가원구-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "빈주시가원구Nav_" + index;
        var uniqueLabelId = "빈주시가원구Label_" + index;

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
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 빈주시 가원구</div>
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
<th style="border: 1px solid #ccc; padding: 10px; background-color: #1A237E; color: white;">읍</th>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #d32f2f; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">도청</span><a href="천조읍.html" style="text-decoration: none; color: #0056b3;">천조읍</a>
</td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #1A237E; color: white;">면</th>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="동태면.html" style="text-decoration: none; color: #0056b3;">동태면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="육미면.html" style="text-decoration: none; color: #0056b3;">육미면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="현권면.html" style="text-decoration: none; color: #0056b3;">현권면</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #1A237E; color: white;">행정동</th>
<th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #1A237E; color: white;">법정동</th>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="상만1동.html" style="text-decoration: none; color: #333;">상만1동</a></td>
<td rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #1976D2; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">구청</span>상만동
            </td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">천음동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="상만2동.html" style="text-decoration: none; color: #333;">상만2동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">수곡동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">역천동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="상만3동.html" style="text-decoration: none; color: #333;">상만3동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">여초동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="서원동.html" style="text-decoration: none; color: #333;">서원동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">쌍엽동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">서원동1가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">서원동2가</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">서원동3가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">외성동1가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">외성동2가</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">향교동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">중은동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="수옥동.html" style="text-decoration: none; color: #333;">수옥동</a></td>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">수옥동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="아천동.html" style="text-decoration: none; color: #333;">아천동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">아천동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">천내동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">아논동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="주전1동.html" style="text-decoration: none; color: #333;">주전1동</a></td>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">주전동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">판진동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="주전2동.html" style="text-decoration: none; color: #333;">주전2동</a></td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="천남1동.html" style="text-decoration: none; color: #333;">천남1동</a></td>
<td rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">천남동</td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="천남2동.html" style="text-decoration: none; color: #333;">천남2동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">시래동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="천남3동.html" style="text-decoration: none; color: #333;">천남3동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">지미동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">태창동</td>
</tr>
<tr>
<td rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="풍은동.html" style="text-decoration: none; color: #333;">풍은동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">풍은동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">민산동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">나다동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">사산동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">만니동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">자창동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">서노동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">사료동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">사늑동</td>
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
