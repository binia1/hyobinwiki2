/**
 * 파일명: js/덕빈남도덕주시덕산구행정.js
 * 설명: 덕빈남도 덕주시 덕산구 행정구역 전체 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var mainColor = "#FF6E90";
    var textColor = "white";
    var containers = document.querySelectorAll(".hb-덕빈남도덕주시덕산구-nav");

    containers.forEach(function(container, index) {
        var uniqueNavId = "덕빈남도덕주시덕산구Nav_" + index;
        var uniqueLabelId = "덕빈남도덕주시덕산구Label_" + index;

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
                            <div style="font-size: 13px; font-weight: bold;">덕빈남도 덕주시 덕산구</div>
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
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="원명읍.html" style="text-decoration: none; color: #0056b3;">원명읍</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #FF6E90; color: white;">면</th>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="학전면.html" style="text-decoration: none; color: #0056b3;">학전면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="덕구면.html" style="text-decoration: none; color: #0056b3;">덕구면</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;"><a href="전진면.html" style="text-decoration: none; color: #0056b3;">전진면</a></td>
</tr>
<tr>
<th style="border: 1px solid #ccc; padding: 10px; background-color: #FF6E90; color: white;">행정동</th>
<th colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: #FF6E90; color: white;">법정동</th>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="화주1동.html" style="text-decoration: none; color: white;">화주1동</a></td>
<td colspan="3" rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #1976D2; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">구청</span>화주동
            </td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="화주2동.html" style="text-decoration: none; color: white;">화주2동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="화주3동.html" style="text-decoration: none; color: white;">화주3동</a></td>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="화진1동.html" style="text-decoration: none; color: white;">화진1동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">화진동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">모격동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">소간동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">오소동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">자택동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">암기동</td>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="화진2동.html" style="text-decoration: none; color: white;">화진2동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">장부동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">사문간동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">아문동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">조천산동</td>
<td colspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="영목1동.html" style="text-decoration: none; color: white;">영목1동</a></td>
<td colspan="3" rowspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">영목동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="영목2동.html" style="text-decoration: none; color: white;">영목2동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="영목3동.html" style="text-decoration: none; color: white;">영목3동</a></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="영석동.html" style="text-decoration: none; color: white;">영석동</a></td>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">영목동 (일부)</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="갑고동.html" style="text-decoration: none; color: white;">갑고동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">갑동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">고동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;"></td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="상미동.html" style="text-decoration: none; color: white;">상미동</a></td>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">상미동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="무원동.html" style="text-decoration: none; color: white;">무원동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">서도동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">무원동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">율안동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="주기동.html" style="text-decoration: none; color: white;">주기동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">주기동1~3가</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">재권동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">산대동</td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="무영동.html" style="text-decoration: none; color: white;">무영동</a></td>
<td colspan="3" style="border: 1px solid #ccc; padding: 10px; background-color: white;">무영동</td>
</tr>
<tr>
<td rowspan="2" style="border: 1px solid #ccc; padding: 10px; background-color: #4a90e2; font-weight: bold; color: white;"><a href="중앙동.html" style="text-decoration: none; color: white;">중앙동</a></td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #9e9e9e; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">시청</span>중앙동1~4가
            </td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">곡동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">
<span style="background-color: #d32f2f; color: white; padding: 2px 5px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; line-height: 1;">도청</span>월로1~2가
            </td>
</tr>
<tr>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">수연동</td>
<td style="border: 1px solid #ccc; padding: 10px; background-color: white;">동도동</td>
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
