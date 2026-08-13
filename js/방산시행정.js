/**
 * 파일명: js/방산시행정.js
 * 설명: 덕빈남도 방산시 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#FFF442";
    var textColor = "black";
    var containers = document.querySelectorAll(".hb-방산시-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "방산시Nav_" + index;
        var uniqueLabelId = "방산시Label_" + index;

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
                        <img src="이미지/방산시.webp" alt="로고" style="height: 40px;" onerror="this.src='이미지/hyobin1.webp'">
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈남도 방산시</div>
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
<!-- 읍/면 구역 -->
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FFF442; font-weight: bold; color: black;">읍</td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;"><a href="서중읍.html" style="text-decoration: none; color: #0056b3;">서중읍</a></td></tr>
<tr><td rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #FFF442; font-weight: bold; color: black;">면</td><td style="border: 1px solid #ccc; padding: 10px;"><a href="동공면.html" style="text-decoration: none; color: #0056b3;">동공면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="석원면.html" style="text-decoration: none; color: #0056b3;">석원면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="양복면.html" style="text-decoration: none; color: #0056b3;">양복면</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;"><a href="냉천면.html" style="text-decoration: none; color: #0056b3;">냉천면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="약원면.html" style="text-decoration: none; color: #0056b3;">약원면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="무산면.html" style="text-decoration: none; color: #0056b3;">무산면</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;"><a href="계촌면.html" style="text-decoration: none; color: #0056b3;">계촌면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="정수면.html" style="text-decoration: none; color: #0056b3;">정수면</a></td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<!-- 행정동/법정동 헤더 -->
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">행정동</th><th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">법정동</th></tr>
<!-- 청전동 (청전1동, 청전2동 세로 병합) -->
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #5C6BC0; font-weight: bold;"><a href="청전1동.html" style="text-decoration: none; color: white;">청전1동</a></td>
<td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px;"><span style="background-color: #D32F2F; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; font-weight: bold; vertical-align: middle; display: inline-block; line-height: 1;">시청</span>청전동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #5C6BC0; font-weight: bold;"><a href="청전2동.html" style="text-decoration: none; color: white;">청전2동</a></td>
</tr>
<!-- 주강동 (주강1동, 주강2동 세로 병합) -->
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #5C6BC0; font-weight: bold;"><a href="주강1동.html" style="text-decoration: none; color: white;">주강1동</a></td>
<td colspan="2" rowspan="2" style="border: 1px solid #ccc; padding: 10px;">주강동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #5C6BC0; font-weight: bold;"><a href="주강2동.html" style="text-decoration: none; color: white;">주강2동</a></td>
<td style="border: 1px solid #ccc; padding: 10px;">송지동</td>
</tr>
<!-- 단일 행정동 -->
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #5C6BC0; font-weight: bold;"><a href="탕천동.html" style="text-decoration: none; color: white;">탕천동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">탕천동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #5C6BC0; font-weight: bold;"><a href="미강동.html" style="text-decoration: none; color: white;">미강동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">미강동</td></tr>
<!-- 장수동 (법정동 4개) -> 2줄로 분리 -->
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #5C6BC0; font-weight: bold;"><a href="장수동.html" style="text-decoration: none; color: white;">장수동</a></td>
<td style="border: 1px solid #ccc; padding: 10px;">수궁동</td>
<td style="border: 1px solid #ccc; padding: 10px;">장교동</td>
<td style="border: 1px solid #ccc; padding: 10px;">축진동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">도내동</td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #5C6BC0; font-weight: bold;"><a href="도수동.html" style="text-decoration: none; color: white;">도수동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">도수동</td></tr>
<!-- 약신동 (법정동 5개) -> 2줄로 분리 -->
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #5C6BC0; font-weight: bold;"><a href="약신동.html" style="text-decoration: none; color: white;">약신동</a></td>
<td style="border: 1px solid #ccc; padding: 10px;">약송동</td>
<td style="border: 1px solid #ccc; padding: 10px;">천신동</td>
<td style="border: 1px solid #ccc; padding: 10px;">조리동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">신광동</td>
<td style="border: 1px solid #ccc; padding: 10px;">색내동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<!-- 매복동 (법정동 4개) -> 2줄로 분리 -->
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #5C6BC0; font-weight: bold;"><a href="매복동.html" style="text-decoration: none; color: white;">매복동</a></td>
<td style="border: 1px solid #ccc; padding: 10px;">매전동</td>
<td style="border: 1px solid #ccc; padding: 10px;">원자동</td>
<td style="border: 1px solid #ccc; padding: 10px;">복산동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px;">야리동</td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
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
