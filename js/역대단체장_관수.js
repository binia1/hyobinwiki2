/**
 * 파일명: js/역대단체장_관수.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-관수-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-gwansu">
<thead>
<tr>
<td class="history-nav-header-gwansu" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 관수군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-gwansu" colspan="5" onclick="toggleHistoryNav_관수_0()">
<span id="history-nav-text-관수-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-관수-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김정수</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이석만</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박종철</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최규동</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정수일</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강재섭</span></td>
<td><span class="th-span">제7대</span><span class="name-span">윤석진</span></td>
<td><span class="th-span">제8대</span><span class="name-span">장기호</span></td>
<td><span class="th-span">제9대</span><span class="name-span">송인환</span></td>
<td><span class="th-span">제10대</span><span class="name-span">한명기</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">임태섭</span></td>
<td><span class="th-span">제12대</span><span class="name-span">백남수</span></td>
<td><span class="th-span">제13대</span><span class="name-span">오동진</span></td>
<td><span class="th-span">제14대</span><span class="name-span">조영환</span></td>
<td><span class="th-span">제15대</span><span class="name-span">서태석</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">유진학</span></td>
<td><span class="th-span">제17대</span><span class="name-span">권동수</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황기철</span></td>
<td><span class="th-span">제19대</span><span class="name-span">남성구</span></td>
<td><span class="th-span">제20대</span><span class="name-span">전병호</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">안창기</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양태민</span></td>
<td><span class="th-span">제23대</span><span class="name-span">신성철</span></td>
<td><span class="th-span">제24대</span><span class="name-span">배진국</span></td>
<td><span class="th-span">제25대</span><span class="name-span">고영수</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">구자학</span></td>
<td><span class="th-span">제27대</span><span class="name-span">차동철</span></td>
<td><span class="th-span">제28대</span><span class="name-span">민병만</span></td>
<td><span class="th-span">제29대</span><span class="name-span">하석진</span></td>
<td><span class="th-span">제30대</span><span class="name-span">지상호</span></td>
</tr>
<tr>
<td><span class="th-span">제31대</span><span class="name-span">방기수</span></td>
<td><span class="th-span">제32대</span><span class="name-span">아속현</span></td>
<td><span class="th-span">제33·34대</span><span class="name-span">강진안</span></td>
<td><span class="th-span">제35대</span><span class="name-span">조지한</span></td>
<td><span class="th-span">제36·37·38대</span><span class="name-span">남기하</span></td>
</tr>
<tr>
<td class="current-term" colspan="5"><span class="th-span">제39·40대</span><span class="name-span">서윤수</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_관수_0 === 'undefined') {
    window.toggleHistoryNav_관수_0 = function() {
        var body = document.getElementById("history-nav-body-관수-0");
        var text = document.getElementById("history-nav-text-관수-0");
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
