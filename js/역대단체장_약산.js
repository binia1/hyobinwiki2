/**
 * 파일명: js/역대단체장_약산.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-약산-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 약산시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_약산_0()">
<span id="history-nav-text-약산-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-약산-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이정길</span></td>
<td><span class="th-span">제2대</span><span class="name-span">최병호</span></td>
<td><span class="th-span">제3대</span><span class="name-span">강석진</span></td>
<td><span class="th-span">제4대</span><span class="name-span">김동윤</span></td>
<td><span class="th-span">제5대</span><span class="name-span">박수철</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">신은수</span></td>
<td><span class="th-span">제7대</span><span class="name-span">성우현</span></td>
<td><span class="th-span">제8대</span><span class="name-span">신은수</span></td>
<td><span class="th-span">제9·10·11대</span><span class="name-span">옥지현</span></td>
<td class="current-term"><span class="th-span">제12·13·14대</span><span class="name-span">박아상</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_약산_0 === 'undefined') {
    window.toggleHistoryNav_약산_0 = function() {
        var body = document.getElementById("history-nav-body-약산-0");
        var text = document.getElementById("history-nav-text-약산-0");
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
