/**
 * 파일명: js/역대단체장_안천.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-안천-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/logo.webp"/> 효빈광역시 안천구청장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_안천_0()">
<span id="history-nav-text-안천-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-안천-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이석준</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박기호</span></td>
<td><span class="th-span">제3대</span><span class="name-span">최범철</span></td>
<td><span class="th-span">제4대</span><span class="name-span">김재환</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정우현</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">송기철</span></td>
<td><span class="th-span">제7대</span><span class="name-span">한동수</span></td>
<td><span class="th-span">제8대</span><span class="name-span">서재훈</span></td>
<td><span class="th-span">제9대</span><span class="name-span">윤강식</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임창석</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">오명진</span></td>
<td><span class="th-span">제12~14대</span><span class="name-span">도영만</span></td>
<td><span class="th-span">제15~17대</span><span class="name-span">천미남</span></td>
<td class="current-term"><span class="th-span">제18~20대</span><span class="name-span">이규희</span></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_안천_0 === 'undefined') {
    window.toggleHistoryNav_안천_0 = function() {
        var body = document.getElementById("history-nav-body-안천-0");
        var text = document.getElementById("history-nav-text-안천-0");
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
