/**
 * 파일명: js/역대단체장_곡천.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-곡천-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-gokcheon">
<thead>
<tr>
<td class="history-nav-header-gokcheon" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 곡천군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-gokcheon" colspan="5" onclick="toggleHistoryNav_곡천_0()">
<span id="history-nav-text-곡천-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-곡천-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이병철</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박재훈</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김동수</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최성환</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정태식</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강석만</span></td>
<td><span class="th-span">제7대</span><span class="name-span">윤동길</span></td>
<td><span class="th-span">제8대</span><span class="name-span">한명수</span></td>
<td><span class="th-span">제9대</span><span class="name-span">오기환</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임수현</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">장대성</span></td>
<td><span class="th-span">제12대</span><span class="name-span">송진수</span></td>
<td><span class="th-span">제13대</span><span class="name-span">권영기</span></td>
<td><span class="th-span">제14대</span><span class="name-span">서태일</span></td>
<td><span class="th-span">제15대</span><span class="name-span">유현수</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백승호</span></td>
<td><span class="th-span">제17대</span><span class="name-span">안창민</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황재영</span></td>
<td><span class="th-span">제19대</span><span class="name-span">남기훈</span></td>
<td><span class="th-span">제20대</span><span class="name-span">전동환</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배태석</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양진호</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고병수</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신석호</span></td>
<td><span class="th-span">제25대</span><span class="name-span">차재민</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">노영철</span></td>
<td><span class="th-span">제27대</span><span class="name-span">심동석</span></td>
<td><span class="th-span">제28대</span><span class="name-span">구태환</span></td>
<td><span class="th-span">제29대</span><span class="name-span">지상철</span></td>
<td><span class="th-span">제30대</span><span class="name-span">민병진</span></td>
</tr>
<tr>
<td><span class="th-span">제31대</span><span class="name-span">하태권</span></td>
<td><span class="th-span">제32·33대</span><span class="name-span">서기현</span></td>
<td><span class="th-span">제34·35대</span><span class="name-span">강흥아</span></td>
<td><span class="th-span">제36·38대</span><span class="name-span">남연석</span></td>
<td><span class="th-span">제39대</span><span class="name-span">정용석</span></td>
</tr>
<tr>
<td class="current-term"><span class="th-span">권한대행·제40대</span><span class="name-span">주언일</span></td>
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

if (typeof window.toggleHistoryNav_곡천_0 === 'undefined') {
    window.toggleHistoryNav_곡천_0 = function() {
        var body = document.getElementById("history-nav-body-곡천-0");
        var text = document.getElementById("history-nav-text-곡천-0");
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
