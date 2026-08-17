/**
 * 파일명: js/역대단체장_전산.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-전산-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 전산시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_전산_0()">
<span id="history-nav-text-전산-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-전산-0">
<tr>
<td><span class="th-span">제1·2대</span><span class="name-span">영승현</span></td>
<td><span class="th-span">제3·4대</span><span class="name-span">기서진</span></td>
<td class="current-term"><span class="th-span">제5·6대</span><span class="name-span">장은재</span></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_전산_0 === 'undefined') {
    window.toggleHistoryNav_전산_0 = function() {
        var body = document.getElementById("history-nav-body-전산-0");
        var text = document.getElementById("history-nav-text-전산-0");
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
