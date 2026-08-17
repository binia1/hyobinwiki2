/**
 * 파일명: js/역대단체장_계성.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-계성-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 계성시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_계성_0()">
<span id="history-nav-text-계성-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-계성-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김창현</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이승호</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박영식</span></td>
<td><span class="th-span">제4대</span><span class="name-span">정재훈</span></td>
<td><span class="th-span">제5대</span><span class="name-span">최동민</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">조태환</span></td>
<td><span class="th-span">제7대</span><span class="name-span">강민석</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤진수</span></td>
<td><span class="th-span">제9·10대</span><span class="name-span">유현덕</span></td>
<td><span class="th-span">제11·12대</span><span class="name-span">차현기</span></td>
</tr>
<tr>
<td><span class="th-span">제13·14·15대</span><span class="name-span">서금진</span></td>
<td class="current-term"><span class="th-span">제16·17대</span><span class="name-span">오현주</span></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_계성_0 === 'undefined') {
    window.toggleHistoryNav_계성_0 = function() {
        var body = document.getElementById("history-nav-body-계성-0");
        var text = document.getElementById("history-nav-text-계성-0");
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
