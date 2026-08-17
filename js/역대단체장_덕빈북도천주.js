/**
 * 파일명: js/역대단체장_덕빈북도천주.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-덕빈북도천주-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 역대 덕빈북도 천주시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_덕빈북도천주_0()">
<span id="history-nav-text-덕빈북도천주-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-덕빈북도천주-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이병기</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박용식</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김성호</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최석진</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정인수</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">조광현</span></td>
<td><span class="th-span">제7대</span><span class="name-span">강문석</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤태일</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장명수</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임재동</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한기철</span></td>
<td><span class="th-span">제12대</span><span class="name-span">신동학</span></td>
<td><span class="th-span">제13대</span><span class="name-span">유광진</span></td>
<td><span class="th-span">제14대</span><span class="name-span">백창호</span></td>
<td><span class="th-span">제15대</span><span class="name-span">안수남</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">오병진</span></td>
<td><span class="th-span">제17대</span><span class="name-span">서동민</span></td>
<td><span class="th-span">제18대</span><span class="name-span">송학수</span></td>
<td><span class="th-span">제19대</span><span class="name-span">황영기</span></td>
<td><span class="th-span">제20대</span><span class="name-span">전명준</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">권성환</span></td>
<td><span class="th-span">제22대</span><span class="name-span">배진우</span></td>
<td><span class="th-span">제23대</span><span class="name-span">양창석</span></td>
<td><span class="th-span">제24대</span><span class="name-span">고병권</span></td>
<td><span class="th-span">제25대</span><span class="name-span">남상욱</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">차동영</span></td>
<td><span class="th-span">제27대</span><span class="name-span">구자학</span></td>
<td><span class="th-span">제28~30대</span><span class="name-span text-blue-600 font-bold">연승현</span></td>
<td><span class="th-span">제31~33대</span><span class="name-span text-blue-600 font-bold">강수성</span></td>
<td class="current-term"><span class="th-span">제34~36대</span><span class="name-span">김민철</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_덕빈북도천주_0 === 'undefined') {
    window.toggleHistoryNav_덕빈북도천주_0 = function() {
        var body = document.getElementById("history-nav-body-덕빈북도천주-0");
        var text = document.getElementById("history-nav-text-덕빈북도천주-0");
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
