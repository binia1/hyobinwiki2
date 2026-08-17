/**
 * 파일명: js/역대단체장_마진.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-마진-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-majin">
<thead>
<tr>
<td class="history-nav-header-majin" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 마진시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-majin" colspan="5" onclick="toggleHistoryNav_마진_0()">
<span id="history-nav-text-마진-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-마진-0">
<tr>
<td><span class="th-span">제1~2대 (민선 1·2기)</span><span class="name-span">신광진</span></td>
<td><span class="th-span">제3~4대 (민선 3·4기)</span><span class="name-span">연상훈</span></td>
<td><span class="th-span">제5~7대 (민선 5·6·7기)</span><span class="name-span">강은현</span></td>
<td class="current-term"><span class="th-span">제8대 (민선 8기)</span><span class="name-span">백수안</span></td>
<td><span class="th-span">제9대 (민선 9기 당선)</span><span class="name-span text-red-600 font-bold">문양인</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_마진_0 === 'undefined') {
    window.toggleHistoryNav_마진_0 = function() {
        var body = document.getElementById("history-nav-body-마진-0");
        var text = document.getElementById("history-nav-text-마진-0");
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
