/**
 * 파일명: js/역대단체장_덕빈북도기도.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-덕빈북도기도-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 역대 덕빈북도 기도군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleGidoNav()">
<span id="gido-nav-text">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="gido-nav-body">
<tr>
<td><span class="th-span">제31~32대</span><span class="name-span">민승현</span></td>
<td><span class="th-span">제33대</span><span class="name-span">연진현</span></td>
<td class="current-term"><span class="th-span">제34~35대</span><span class="name-span">오시연</span></td>
<td><span class="th-span">제36대</span><span class="name-span">장출규</span></td>
<td><span class="th-span">제37~39대</span><span class="name-span">조민규</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_덕빈북도기도_0 === 'undefined') {
    window.toggleHistoryNav_덕빈북도기도_0 = function() {
        var body = document.getElementById("history-nav-body-덕빈북도기도-0");
        var text = document.getElementById("history-nav-text-덕빈북도기도-0");
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
