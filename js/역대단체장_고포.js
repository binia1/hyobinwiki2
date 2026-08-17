/**
 * 파일명: js/역대단체장_고포.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-고포-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-gopo">
<thead>
<tr>
<td class="history-nav-header-gopo" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 고포군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-gopo" colspan="5" onclick="toggleHistoryNav_고포_0()">
<span id="history-nav-text-고포-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-고포-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이창원</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박영수</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김동환</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최병철</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정수학</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강재훈</span></td>
<td><span class="th-span">제7대</span><span class="name-span">윤도진</span></td>
<td><span class="th-span">제8대</span><span class="name-span">조동호</span></td>
<td><span class="th-span">제9대</span><span class="name-span">한석기</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임동주</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">송병호</span></td>
<td><span class="th-span">제12대</span><span class="name-span">유태진</span></td>
<td><span class="th-span">제13대</span><span class="name-span">장기태</span></td>
<td><span class="th-span">제14대</span><span class="name-span">백인철</span></td>
<td><span class="th-span">제15대</span><span class="name-span">안수환</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">서병길</span></td>
<td><span class="th-span">제17대</span><span class="name-span">권영만</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황석민</span></td>
<td><span class="th-span">제19대</span><span class="name-span">남인수</span></td>
<td><span class="th-span">제20대</span><span class="name-span">전수동</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배학수</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양종철</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고기동</span></td>
<td><span class="th-span">제24대</span><span class="name-span">차승호</span></td>
<td><span class="th-span">제25대</span><span class="name-span">신석규</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">노정환</span></td>
<td><span class="th-span">제27대</span><span class="name-span">민수기</span></td>
<td><span class="th-span">제28대</span><span class="name-span">구동진</span></td>
<td><span class="th-span">제29대</span><span class="name-span">지태원</span></td>
<td><span class="th-span">제30대</span><span class="name-span">하재석</span></td>
</tr>
<tr>
<td><span class="th-span">제31대</span><span class="name-span">엄기환</span></td>
<td><span class="th-span">제32~34대</span><span class="name-span">양아성</span></td>
<td><span class="th-span">제35대</span><span class="name-span">강은한</span></td>
<td><span class="th-span">제36대</span><span class="name-span">문석준</span></td>
<td><span class="th-span">제37대</span><span class="name-span">강은한</span></td>
</tr>
<tr>
<td class="current-term" colspan="5"><span class="th-span">제38·39·40대</span><span class="name-span">문석준</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_고포_0 === 'undefined') {
    window.toggleHistoryNav_고포_0 = function() {
        var body = document.getElementById("history-nav-body-고포-0");
        var text = document.getElementById("history-nav-text-고포-0");
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
