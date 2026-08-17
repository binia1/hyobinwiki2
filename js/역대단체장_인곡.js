/**
 * 파일명: js/역대단체장_인곡.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-인곡-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-ingok">
<thead>
<tr>
<td class="history-nav-header-ingok" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 인곡군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-ingok" colspan="5" onclick="toggleHistoryNav_인곡_0()">
<span id="history-nav-text-인곡-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-인곡-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김태수</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박인호</span></td>
<td><span class="th-span">제3대</span><span class="name-span">이석진</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최기만</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정진석</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강대호</span></td>
<td><span class="th-span">제7대</span><span class="name-span">윤석권</span></td>
<td><span class="th-span">제8대</span><span class="name-span">조동진</span></td>
<td><span class="th-span">제9대</span><span class="name-span">한명철</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임수길</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">송태환</span></td>
<td><span class="th-span">제12대</span><span class="name-span">유재민</span></td>
<td><span class="th-span">제13대</span><span class="name-span">장창수</span></td>
<td><span class="th-span">제14대</span><span class="name-span">권석영</span></td>
<td><span class="th-span">제15대</span><span class="name-span">안진태</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">서정민</span></td>
<td><span class="th-span">제17대</span><span class="name-span">백상호</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황기영</span></td>
<td><span class="th-span">제19대</span><span class="name-span">남수철</span></td>
<td><span class="th-span">제20대</span><span class="name-span">전영환</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배진섭</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양동기</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고창환</span></td>
<td><span class="th-span">제24대</span><span class="name-span">차진호</span></td>
<td><span class="th-span">제25대</span><span class="name-span">신영재</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">노재만</span></td>
<td><span class="th-span">제27대</span><span class="name-span">민경태</span></td>
<td><span class="th-span">제28대</span><span class="name-span">구자훈</span></td>
<td><span class="th-span">제29대</span><span class="name-span">지석환</span></td>
<td><span class="th-span">제30대</span><span class="name-span">하영철</span></td>
</tr>
<tr>
<td><span class="th-span">제31대</span><span class="name-span">방인수</span></td>
<td><span class="th-span">제32대</span><span class="name-span">유상산</span></td>
<td><span class="th-span">제33·34대</span><span class="name-span">인시현</span></td>
<td><span class="th-span">제35대</span><span class="name-span">남석흥</span></td>
<td><span class="th-span">제36·37대</span><span class="name-span">은성현</span></td>
</tr>
<tr>
<td><span class="th-span">제38대</span><span class="name-span">안강훈</span></td>
<td class="current-term" colspan="4"><span class="th-span">제39·40대</span><span class="name-span">강준영</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_인곡_0 === 'undefined') {
    window.toggleHistoryNav_인곡_0 = function() {
        var body = document.getElementById("history-nav-body-인곡-0");
        var text = document.getElementById("history-nav-text-인곡-0");
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
