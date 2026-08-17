/**
 * 파일명: js/역대단체장_방산.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-방산-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-bangsan">
<thead>
<tr>
<td class="history-nav-header-bangsan" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 방산시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-bangsan" colspan="5" onclick="toggleHistoryNav_방산_0()">
<span id="history-nav-text-방산-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-방산-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이종민</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박성호</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김기덕</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최영수</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정진우</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강동석</span></td>
<td><span class="th-span">제7대</span><span class="name-span">윤학수</span></td>
<td><span class="th-span">제8대</span><span class="name-span">조현기</span></td>
<td><span class="th-span">제9대</span><span class="name-span">한창석</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임도환</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">오재일</span></td>
<td><span class="th-span">제12대</span><span class="name-span">송원섭</span></td>
<td><span class="th-span">제13대</span><span class="name-span">장석진</span></td>
<td><span class="th-span">제14대</span><span class="name-span">백태환</span></td>
<td><span class="th-span">제15대</span><span class="name-span">안민수</span></td>
</tr>
<tr>
<td><span class="th-span">제16대 (민선 1기)</span><span class="name-span">강생현</span></td>
<td><span class="th-span">제17·18대 (민선 2·3기)</span><span class="name-span">원유선</span></td>
<td><span class="th-span">제19·20대 (민선 4·5기)</span><span class="name-span">강수한</span></td>
<td><span class="th-span">제21대 (민선 6기)</span><span class="name-span">이재원</span></td>
<td><span class="th-span">제22대 (민선 7기)</span><span class="name-span">강수한</span></td>
</tr>
<tr>
<td class="current-term"><span class="th-span">제23·24대 (민선 8·9기)</span><span class="name-span">이재원</span></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_방산_0 === 'undefined') {
    window.toggleHistoryNav_방산_0 = function() {
        var body = document.getElementById("history-nav-body-방산-0");
        var text = document.getElementById("history-nav-text-방산-0");
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
