/**
 * 파일명: js/서해시행정.js
 * 설명: 덕빈북도 서해시 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#37B484";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-서해시-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "서해시Nav_" + index;
        var uniqueLabelId = "서해시Label_" + index;

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
                        <img onerror="this.src='이미지/hyobin1.webp'" src="이미지/서해시.webp" style="height: 40px; filter: brightness(0) invert(1);"/>
                        <div style="text-align: left; line-height: 1.3;">
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 서해시</div>
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
<tr><th rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #37B484; color: white; font-size: 14px;">읍</th><td style="border: 1px solid #ccc; padding: 10px;"><a href="압일읍.html" style="text-decoration: none; color: #0056b3;">압일읍</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="번전읍.html" style="text-decoration: none; color: #0056b3;">번전읍</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="원변읍.html" style="text-decoration: none; color: #0056b3;">원변읍</a></td></tr>
<tr><td colspan="3" style="border: 1px solid #ccc; padding: 10px;"><a href="문진읍.html" style="text-decoration: none; color: #0056b3;">문진읍</a></td></tr>
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #37B484; color: white; font-size: 14px;">면</th><td style="border: 1px solid #ccc; padding: 10px;"><a href="북야면.html" style="text-decoration: none; color: #0056b3;">북야면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="지중면.html" style="text-decoration: none; color: #0056b3;">지중면</a></td><td style="border: 1px solid #ccc; padding: 10px;"><a href="우곡면.html" style="text-decoration: none; color: #0056b3;">우곡면</a></td></tr>
<tr><th style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">행정동</th><th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #005B9E; color: white; font-size: 14px;">법정동</th></tr>
<tr><td rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="서앙동.html" style="text-decoration: none; color: black;">서앙동</a></td><td style="border: 1px solid #ccc; padding: 10px;">중앙동</td><td style="border: 1px solid #ccc; padding: 10px;">국아동</td><td style="border: 1px solid #ccc; padding: 10px;">서해동1가</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">반풍동</td><td style="border: 1px solid #ccc; padding: 10px;">추생동</td><td style="border: 1px solid #ccc; padding: 10px;">첨천동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">향원동</td><td style="border: 1px solid #ccc; padding: 10px;">구원동</td><td style="border: 1px solid #ccc; padding: 10px;">내야동</td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="해안동.html" style="text-decoration: none; color: black;">해안동</a></td><td style="border: 1px solid #ccc; padding: 10px;">해안동1가</td><td style="border: 1px solid #ccc; padding: 10px;">해안동2가</td><td style="border: 1px solid #ccc; padding: 10px;">대동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">분동</td><td style="border: 1px solid #ccc; padding: 10px;">전동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="포구동.html" style="text-decoration: none; color: black;">포구동</a></td><td style="border: 1px solid #ccc; padding: 10px;">포구동</td><td style="border: 1px solid #ccc; padding: 10px;">장미동</td><td style="border: 1px solid #ccc; padding: 10px;">좌여동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">축수동</td><td style="border: 1px solid #ccc; padding: 10px;">원길동</td><td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="서해동.html" style="text-decoration: none; color: black;">서해동</a></td><td style="border: 1px solid #ccc; padding: 10px;">서해동2가</td><td colspan="2" style="border: 1px solid #ccc; padding: 10px;">장서동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="무원동.html" style="text-decoration: none; color: black;">무원동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">무원동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="천로1동.html" style="text-decoration: none; color: black;">천로1동</a></td><td colspan="3" rowspan="4" style="border: 1px solid #ccc; padding: 10px;">천로동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="천로2동.html" style="text-decoration: none; color: black;">천로2동</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="천로3동.html" style="text-decoration: none; color: black;">천로3동</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="천로4동.html" style="text-decoration: none; color: black;">천로4동</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="방부1동.html" style="text-decoration: none; color: black;">방부1동</a></td><td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px;">방부동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="방부2동.html" style="text-decoration: none; color: black;">방부2동</a></td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="좌산1동.html" style="text-decoration: none; color: black;">좌산1동</a></td><td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px;">좌산동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="좌산2동.html" style="text-decoration: none; color: black;">좌산2동</a></td></tr>
<tr><td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="통마동.html" style="text-decoration: none; color: black;">통마동</a></td><td style="border: 1px solid #ccc; padding: 10px;">통산동</td><td style="border: 1px solid #ccc; padding: 10px;">마원동</td><td style="border: 1px solid #ccc; padding: 10px;">언내동</td></tr>
<tr><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">가미동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="신항동.html" style="text-decoration: none; color: black;">신항동</a></td><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">신항동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="우궁1동.html" style="text-decoration: none; color: black;">우궁1동</a></td><td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px;"><span style="background-color: #D32F2F; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; font-weight: bold; vertical-align: middle; display: inline-block; line-height: 1;">시청</span>우궁동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="우궁2동.html" style="text-decoration: none; color: black;">우궁2동</a></td></tr>
<tr><td rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #FF8A65; font-weight: bold;"><a href="상포동.html" style="text-decoration: none; color: black;">상포동</a></td><td style="border: 1px solid #ccc; padding: 10px;">자정동</td><td style="border: 1px solid #ccc; padding: 10px;">전중동</td><td style="border: 1px solid #ccc; padding: 10px;">남정동</td></tr>
<tr><td style="border: 1px solid #ccc; padding: 10px;">상정동</td><td style="border: 1px solid #ccc; padding: 10px;">상포동</td><td style="border: 1px solid #ccc; padding: 10px;">긍사동</td></tr>
<tr><td colspan="3" style="border: 1px solid #ccc; padding: 10px;">지서동</td></tr>
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
