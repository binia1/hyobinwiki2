/**
 * 파일명: js/빈주시장기구행정.js
 * 설명: 덕빈북도 빈주시 장기구 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#1A237E";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-빈주시장기구-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "빈주시장기구Nav_" + index;
        var uniqueLabelId = "빈주시장기구Label_" + index;

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
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 빈주시 장기구</div>
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
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="송원읍.html" style="text-decoration: none; color: #0056b3;">송원읍</a></td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="오택읍.html" style="text-decoration: none; color: #0056b3;">오택읍</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #1A237E; color: white;">면</th>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="서면.html" style="text-decoration: none; color: #0056b3;">서면</a></td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="노동면.html" style="text-decoration: none; color: #0056b3;">노동면</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #1A237E; color: white;">행정동</th>
<th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #1A237E; color: white;">법정동</th>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="장기1동.html" style="text-decoration: none; color: #333;">장기1동</a></td>
<td rowspan="4" style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #1976D2; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">구청</span>장기동
            </td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="장기2동.html" style="text-decoration: none; color: #333;">장기2동</a></td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="장기3동.html" style="text-decoration: none; color: #333;">장기3동</a></td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="장기4동.html" style="text-decoration: none; color: #333;">장기4동</a></td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="장기5동.html" style="text-decoration: none; color: #333;">장기5동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">장기동(일부)</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">산중동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">화면동</td>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="미천동.html" style="text-decoration: none; color: #333;">미천동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">미천동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">방거동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">시집동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">거주동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="동습동.html" style="text-decoration: none; color: #333;">동습동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">동습동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">칠정동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="월삼1동.html" style="text-decoration: none; color: #333;">월삼1동</a></td>
<td colspan="3" rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">월삼동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="월삼2동.html" style="text-decoration: none; color: #333;">월삼2동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="월삼3동.html" style="text-decoration: none; color: #333;">월삼3동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="대정동.html" style="text-decoration: none; color: #333;">대정동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">대정동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">동원동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #ffeeaa; font-weight: bold; color: #333;"><a href="황명동.html" style="text-decoration: none; color: #333;">황명동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">비라동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">보일동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">황태동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">명태동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
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
