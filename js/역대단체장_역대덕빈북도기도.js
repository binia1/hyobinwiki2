/**
 * 파일명: js/역대단체장_역대덕빈북도기도.js
 * 설명: 역대 덕빈북도 기도군수 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-역대덕빈북도기도-nav");

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
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_역대덕빈북도기도()">
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

// 개별 토글 함수 자동 생성
if (typeof window.toggleHistoryNav_역대덕빈북도기도 === 'undefined') {
    window.toggleHistoryNav_역대덕빈북도기도 = function() {
        var body = document.getElementById("history-nav-body-역대덕빈북도기도");
        var text = document.getElementById("history-nav-text-역대덕빈북도기도");
        if (!body || !text) return;
        
        if (body.style.display === 'none' || body.style.display === '') {
            body.style.display = 'table-row-group';
            text.innerText = '[ 펼치기 · 접기 ]';
        } else {
            body.style.display = 'none';
            text.innerText = '[ 펼치기 ]';
        }
    };
}
