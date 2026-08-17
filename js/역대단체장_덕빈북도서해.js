/**
 * 파일명: js/역대단체장_덕빈북도서해.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-덕빈북도서해-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 역대 덕빈북도 서해시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_덕빈북도서해_0()">
<span id="history-nav-text-덕빈북도서해-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-덕빈북도서해-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김용환</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박창수</span></td>
<td><span class="th-span">제3대</span><span class="name-span">이석진</span></td>
<td><span class="th-span">제4대</span><span class="name-span">정재구</span></td>
<td><span class="th-span">제5대</span><span class="name-span">최기영</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">조동호</span></td>
<td><span class="th-span">제7대</span><span class="name-span">강수철</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤석민</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장인환</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임상수</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한정수</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권태민</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서병국</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유기태</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송영식</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백성진</span></td>
<td><span class="th-span">제17~18대</span><span class="name-span text-blue-600 font-bold">경지현</span></td>
<td><span class="th-span">제19대</span><span class="name-span text-blue-800 font-bold">김언현</span></td>
<td><span class="th-span">제20대</span><span class="name-span text-blue-800 font-bold">우신현</span></td>
<td><span class="th-span">제21대</span><span class="name-span text-blue-800 font-bold">남영선</span></td>
</tr>
<tr>
<td><span class="th-span">제22~23대</span><span class="name-span text-blue-800 font-bold">오현진</span></td>
<td class="current-term"><span class="th-span">제24~25대</span><span class="name-span">최정아</span></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_덕빈북도서해_0 === 'undefined') {
    window.toggleHistoryNav_덕빈북도서해_0 = function() {
        var body = document.getElementById("history-nav-body-덕빈북도서해-0");
        var text = document.getElementById("history-nav-text-덕빈북도서해-0");
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
