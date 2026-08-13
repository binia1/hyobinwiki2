/**
 * 파일명: js/천성구행정.js
 * 설명: 덕빈북도 천주시 천성구 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#8B4993";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-천성구-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "천성구Nav_" + index;
        var uniqueLabelId = "천성구Label_" + index;

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
                            <div style="font-size: 13px; font-weight: bold;">덕빈북도 천주시 천성구</div>
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
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="인자읍.html" style="text-decoration: none; color: #0056b3;">인자읍</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #8B4993; color: white;">면</th>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="호산면.html" style="text-decoration: none; color: #0056b3;">호산면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="엽월면.html" style="text-decoration: none; color: #0056b3;">엽월면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="백로면.html" style="text-decoration: none; color: #0056b3;">백로면</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #8B4993; color: white;">행정동</th>
<th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #8B4993; color: white;">법정동</th>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="관아동.html" style="text-decoration: none; color: black;">관아동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #1976D2; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">구청</span>관아동1~3가
            </td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">중앙로1~3가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">산민동</td>
</tr>
<tr>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">장방동</td>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="유원동.html" style="text-decoration: none; color: black;">유원동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">유동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">원동1가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">원동2가</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">본동</td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">천동동</td>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="세지동.html" style="text-decoration: none; color: black;">세지동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">세지동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">한지동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">정법동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">윤사동</td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">사문동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="대뢰1동.html" style="text-decoration: none; color: black;">대뢰1동</a></td>
<td colspan="3" rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">대뢰동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="대뢰2동.html" style="text-decoration: none; color: black;">대뢰2동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="대뢰3동.html" style="text-decoration: none; color: black;">대뢰3동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="빈전1동.html" style="text-decoration: none; color: black;">빈전1동</a></td>
<td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">빈전동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="빈전2동.html" style="text-decoration: none; color: black;">빈전2동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="팔호동.html" style="text-decoration: none; color: black;">팔호동</a></td>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">팔호동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="비후동.html" style="text-decoration: none; color: black;">비후동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">비원동</td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">후촌동</td>
</tr>
<tr>
<td rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="천성동.html" style="text-decoration: none; color: black;">천성동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #9e9e9e; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">시청</span>천성동
            </td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">평온동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">녹하동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">지굴동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">방상동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">상좌동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">하좌동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">관일동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">호수동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="마야동.html" style="text-decoration: none; color: black;">마야동</a></td>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">마야동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="복주동.html" style="text-decoration: none; color: black;">복주동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">복천동</td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">주언동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="육갑1동.html" style="text-decoration: none; color: black;">육갑1동</a></td>
<td colspan="3" rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: white;">육갑동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #ff55ff; font-weight: bold; color: black;"><a href="육갑2동.html" style="text-decoration: none; color: black;">육갑2동</a></td>
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
