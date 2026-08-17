/**
 * 파일명: js/역대단체장_전산시.js
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-전산시-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.src='이미지/전산시.webp'; this.style.filter='brightness(0) invert(1) drop-shadow(0 0 2px rgba(0,0,0,0.5))';" src="이미지/전산시_흰색로고.webp" style="height: 45px; margin-right: 12px; vertical-align: middle; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"/> 덕빈북도 전산시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_전산시()" style=" cursor: pointer;">
<span id="history-nav-text-전산시">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-전산시">
<tr>
<td onclick="location.href='영승현.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제1·2대</span><span class="name-span">영승현</span></td>
<td onclick="location.href='기서진.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제3·4대</span><span class="name-span">기서진</span></td>
<td class="current-term" onclick="location.href='장은재.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제5·6대</span><span class="name-span">장은재</span></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_전산시 === 'undefined') {
    window.toggleHistoryNav_전산시 = function() {
        var body = document.getElementById("history-nav-body-전산시");
        var text = document.getElementById("history-nav-text-전산시");
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
