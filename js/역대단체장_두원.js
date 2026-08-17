/**
 * 파일명: js/역대단체장_두원.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-두원-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-duwon">
<thead>
<tr>
<td class="history-nav-header-duwon" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 두원군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-duwon" colspan="5" onclick="toggleHistoryNav_두원_0()">
<span id="history-nav-text-두원-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-두원-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김상훈</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이형근</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박종덕</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최동석</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정석우</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강민철</span></td>
<td><span class="th-span">제7대</span><span class="name-span">윤종길</span></td>
<td><span class="th-span">제8대</span><span class="name-span">조영진</span></td>
<td><span class="th-span">제9대</span><span class="name-span">한진호</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임대식</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">송영수</span></td>
<td><span class="th-span">제12대</span><span class="name-span">장기택</span></td>
<td><span class="th-span">제13대</span><span class="name-span">오재권</span></td>
<td><span class="th-span">제14대</span><span class="name-span">백태석</span></td>
<td><span class="th-span">제15대</span><span class="name-span">서동환</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">유태영</span></td>
<td><span class="th-span">제17대</span><span class="name-span">권창식</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황진석</span></td>
<td><span class="th-span">제19대</span><span class="name-span">남기수</span></td>
<td><span class="th-span">제20대</span><span class="name-span">전창진</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">안병호</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양재수</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고태영</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신동환</span></td>
<td><span class="th-span">제25대</span><span class="name-span">배진수</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">구자성</span></td>
<td><span class="th-span">제27대</span><span class="name-span">차재필</span></td>
<td><span class="th-span">제28대</span><span class="name-span">민동석</span></td>
<td><span class="th-span">제29대</span><span class="name-span">지상권</span></td>
<td><span class="th-span">제30대</span><span class="name-span">하태환</span></td>
</tr>
<tr>
<td><span class="th-span">제31대</span><span class="name-span">방성호</span></td>
<td><span class="th-span">제32대</span><span class="name-span">대국현</span></td>
<td><span class="th-span">제33대</span><span class="name-span">사진함</span></td>
<td><span class="th-span">제34대</span><span class="name-span">우산성</span></td>
<td><span class="th-span">제35~37대</span><span class="name-span">안지현</span></td>
</tr>
<tr>
<td class="current-term" colspan="5"><span class="th-span">제38·39·40대</span><span class="name-span">이영진</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_두원_0 === 'undefined') {
    window.toggleHistoryNav_두원_0 = function() {
        var body = document.getElementById("history-nav-body-두원-0");
        var text = document.getElementById("history-nav-text-두원-0");
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
