/**
 * 파일명: js/역대단체장_분주.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-분주-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-bunju">
<thead>
<tr>
<td class="history-nav-header-bunju" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 분주군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-bunju" colspan="5" onclick="toggleHistoryNav_분주_0()">
<span id="history-nav-text-분주-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-분주-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이종태</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박동수</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김성기</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최병환</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정인학</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강명석</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조재환</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤수창</span></td>
<td><span class="th-span">제9대</span><span class="name-span">한기석</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임성구</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">송태영</span></td>
<td><span class="th-span">제12대</span><span class="name-span">유기환</span></td>
<td><span class="th-span">제13대</span><span class="name-span">장수길</span></td>
<td><span class="th-span">제14대</span><span class="name-span">백창수</span></td>
<td><span class="th-span">제15대</span><span class="name-span">안종필</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">서명진</span></td>
<td><span class="th-span">제17대</span><span class="name-span">권동철</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황진수</span></td>
<td><span class="th-span">제19대</span><span class="name-span">남재호</span></td>
<td><span class="th-span">제20대</span><span class="name-span">배형기</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">전상민</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양영수</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고석환</span></td>
<td><span class="th-span">제24대</span><span class="name-span">차진영</span></td>
<td><span class="th-span">제25대</span><span class="name-span">신동만</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">노재철</span></td>
<td><span class="th-span">제27대</span><span class="name-span">민기훈</span></td>
<td><span class="th-span">제28대</span><span class="name-span">구본수</span></td>
<td><span class="th-span">제29대</span><span class="name-span">지석진</span></td>
<td><span class="th-span">제30대</span><span class="name-span">엄태동</span></td>
</tr>
<tr>
<td><span class="th-span">제31대</span><span class="name-span">방승호</span></td>
<td><span class="th-span">제32대</span><span class="name-span">강선운</span></td>
<td><span class="th-span">제33·34·35대</span><span class="name-span">안귀성</span></td>
<td><span class="th-span">제36·37·38대</span><span class="name-span">노진태</span></td>
<td><span class="th-span">제39·40대</span><span class="name-span">우구한</span></td>
</tr>
<tr>
<td class="current-term" colspan="5"><span class="th-span">제41·42대</span><span class="name-span">김태수</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_분주_0 === 'undefined') {
    window.toggleHistoryNav_분주_0 = function() {
        var body = document.getElementById("history-nav-body-분주-0");
        var text = document.getElementById("history-nav-text-분주-0");
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
