/**
 * 파일명: js/역대단체장_매성.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-매성-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-maeseong">
<thead>
<tr>
<td class="history-nav-header-maeseong" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 매성시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-maeseong" colspan="5" onclick="toggleHistoryNav_매성_0()">
<span id="history-nav-text-매성-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-매성-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김석태</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이창호</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박규동</span></td>
<td><span class="th-span">제4대</span><span class="name-span">정인환</span></td>
<td><span class="th-span">제5대</span><span class="name-span">최수창</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">조만기</span></td>
<td><span class="th-span">제7대</span><span class="name-span">강재필</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤상도</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장수현</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임택수</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한정석</span></td>
<td><span class="th-span">제12대</span><span class="name-span">송건호</span></td>
<td><span class="th-span">제13대</span><span class="name-span">유진환</span></td>
<td><span class="th-span">제14대</span><span class="name-span">백태민</span></td>
<td><span class="th-span">제15대</span><span class="name-span">안종석</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">서창훈</span></td>
<td><span class="th-span">제17대</span><span class="name-span">권영진</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황명철</span></td>
<td><span class="th-span">제19대</span><span class="name-span">전동수</span></td>
<td><span class="th-span">제20·21·22대</span><span class="name-span">문현기</span></td>
</tr>
<tr>
<td><span class="th-span">제23대</span><span class="name-span">신유현</span></td>
<td><span class="th-span">제24대</span><span class="name-span text-blue-600 font-bold">오세윤</span></td>
<td><span class="th-span">제25대</span><span class="name-span">지영훈</span></td>
<td class="current-term" colspan="2"><span class="th-span">제26·27·28대</span><span class="name-span">오세윤</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_매성_0 === 'undefined') {
    window.toggleHistoryNav_매성_0 = function() {
        var body = document.getElementById("history-nav-body-매성-0");
        var text = document.getElementById("history-nav-text-매성-0");
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
