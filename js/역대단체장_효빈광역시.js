/**
 * 파일명: js/역대단체장_효빈광역시.js
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-효빈광역시-1-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="data-table" style="text-align:center; font-size: 0.9rem; border-collapse: collapse; margin-top: 15px; margin-bottom: 0; width: 100%; border: 2px solid #7777AA;">
<tbody id="history-nav-body-효빈광역시-1">
<tr style="background-color: #7777AA; color: white; font-weight: bold;">
<td colspan="5" style="padding: 8px; border: 1px solid #7777AA;">
<i class="fa-solid fa-vote-yea" style="margin-right: 5px;"></i>역대 민선 효빈광역시장
            </td>
</tr>
<tr style="background-color: #7777AA; color: white; font-weight: bold;">
<td style="width:20%; padding: 8px; border: 1px solid #7777AA;">1995</td>
<td style="width:20%; padding: 8px; border: 1px solid #7777AA;">1998</td>
<td style="width:20%; padding: 8px; border: 1px solid #7777AA;">2002</td>
<td style="width:20%; padding: 8px; border: 1px solid #7777AA;">2006</td>
<td style="width:20%; padding: 8px; border: 1px solid #7777AA;">2008 (보궐)</td>
</tr>
<tr style="font-weight: bold; color: white;">
<td style="background-color: #D82634; padding: 8px; border: 1px solid #ccc;">민주당</td>
<td style="background-color: #009A44; padding: 8px; border: 1px solid #ccc;">새정치국민회의</td>
<td style="background-color: #00AA7B; padding: 8px; border: 1px solid #ccc;">새천년민주당</td>
<td style="background-color: #0095DA; padding: 8px; border: 1px solid #ccc;">한나라당</td>
<td style="background-color: #419639; padding: 8px; border: 1px solid #ccc;">통합민주당</td>
</tr>
<tr style="background-color: #fff; color: #333;">
<td style="padding: 8px; border: 1px solid #ccc;"><a href="환산채.html" style="color: #333; text-decoration: none;">환산채</a></td>
<td style="padding: 8px; border: 1px solid #ccc;"><a href="박현만.html" style="color: #333; text-decoration: none;">박현만</a></td>
<td style="padding: 8px; border: 1px solid #ccc;"><a href="박현만.html" style="color: #333; text-decoration: none;">박현만</a></td>
<td style="padding: 8px; border: 1px solid #ccc;"><a href="윤대환.html" style="color: #333; text-decoration: none;">윤대환</a></td>
<td style="padding: 8px; border: 1px solid #ccc;"><a href="박현만.html" style="color: #333; text-decoration: none;">박현만</a></td>
</tr>
<tr style="background-color: #7777AA; color: white; font-weight: bold;">
<td style="padding: 8px; border: 1px solid #7777AA;">2010</td>
<td style="padding: 8px; border: 1px solid #7777AA;">2014</td>
<td style="padding: 8px; border: 1px solid #7777AA;">2018</td>
<td style="padding: 8px; border: 1px solid #7777AA;">2022</td>
<td style="padding: 8px; border: 1px solid #7777AA;">2026</td>
</tr>
<tr style="font-weight: bold; color: white;">
<td style="background-color: #019E33; padding: 8px; border: 1px solid #ccc;">민주당</td>
<td style="background-color: #008CCD; padding: 8px; border: 1px solid #ccc;">새정치민주연합</td>
<td colspan="3" style="background-color: #004EA2; padding: 8px; border: 1px solid #ccc;">더불어민주당</td>
</tr>
<tr style="background-color: #fff; color: #333;">
<td style="padding: 8px; border: 1px solid #ccc;"><a href="박현만.html" style="color: #333; text-decoration: none;">박현만</a></td>
<td style="padding: 8px; border: 1px solid #ccc;"><a href="김성민.html" style="color: #333; text-decoration: none;">김성민</a></td>
<td style="padding: 8px; border: 1px solid #ccc;"><a href="김성민.html" style="color: #333; text-decoration: none;">김성민</a></td>
<td style="padding: 8px; border: 1px solid #ccc;"><a href="박효빈.html" style="color: #333; text-decoration: none;">박효빈</a></td>
<td style="padding: 8px; border: 1px solid #ccc;"><a href="박효빈.html" style="color: #333; text-decoration: none;">박효빈</a></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_효빈광역시_1 === 'undefined') {
    window.toggleHistoryNav_효빈광역시_1 = function() {
        var body = document.getElementById("history-nav-body-효빈광역시-1");
        var text = document.getElementById("history-nav-text-효빈광역시-1");
        if (!body) return;
        
        if (body.style.display === 'none' || window.getComputedStyle(body).display === 'none') {
            body.style.display = 'table-row-group';
            if (text) text.innerText = '[ 펼치기 · 접기 ]';
        } else {
            body.style.display = 'none';
            if (text) text.innerText = '[ 펼치기 ]';
        }
    };
}
