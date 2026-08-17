/**
 * 파일명: js/역대단체장_낙주.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-낙주-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-nakju">
<thead>
<tr>
<td class="history-nav-header-nakju" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 낙주시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-nakju" colspan="5" onclick="toggleHistoryNav_낙주_0()">
<span id="history-nav-text-낙주-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-낙주-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김석훈</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박인규</span></td>
<td><span class="th-span">제3대</span><span class="name-span">이정길</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최동환</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정창영</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강명수</span></td>
<td><span class="th-span">제7대</span><span class="name-span">윤철진</span></td>
<td><span class="th-span">제8대</span><span class="name-span">한태호</span></td>
<td><span class="th-span">제9대</span><span class="name-span">오상민</span></td>
<td><span class="th-span">제10대</span><span class="name-span">송기창</span></td>
</tr>
<tr>
<td><span class="th-span">제11~12대</span><span class="name-span">국성연</span></td>
<td><span class="th-span">제13~15대</span><span class="name-span">삼지현</span></td>
<td><span class="th-span">제16~17대</span><span class="name-span">우신광</span></td>
<td class="current-term"><span class="th-span">제18~19대</span><span class="name-span">최현수</span></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_낙주_0 === 'undefined') {
    window.toggleHistoryNav_낙주_0 = function() {
        var body = document.getElementById("history-nav-body-낙주-0");
        var text = document.getElementById("history-nav-text-낙주-0");
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
