/**
 * 파일명: js/역대단체장_남구.js
 * 설명: 효빈광역시 남구청장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-남구-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/logo.webp"/> 효빈광역시 남구청장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_남구()">
<span id="history-nav-text-남구">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-남구">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이종만</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박원석</span></td>
<td><span class="th-span">제3대</span><span class="name-span">최건</span></td>
<td><span class="th-span">제4대</span><span class="name-span">김성무</span></td>
<td><span class="th-span">제5대</span><span class="name-span">장동식</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">정환</span></td>
<td><span class="th-span">제7대</span><span class="name-span">송태욱</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤기철</span></td>
<td><span class="th-span">제9대</span><span class="name-span">조민혁</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임현태</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">강엽</span></td>
<td><span class="th-span">제12대</span><span class="name-span">한정훈</span></td>
<td><span class="th-span">제13대</span><span class="name-span">신진국</span></td>
<td><span class="th-span">제14대</span><span class="name-span">권영재</span></td>
<td><span class="th-span">제15대</span><span class="name-span">서단</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">유성일</span></td>
<td><span class="th-span">제17대</span><span class="name-span">백재형</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황덕준</span></td>
<td><span class="th-span">제19대</span><span class="name-span">안혁</span></td>
<td><span class="th-span">제20·21대</span><span class="name-span">남기호</span></td>
</tr>
<tr>
<td><span class="th-span">제22대</span><span class="name-span">오승철</span></td>
<td><span class="th-span">제23·24대</span><span class="name-span">배형순</span></td>
<td><span class="th-span">제25·27대</span><span class="name-span">차민호</span></td>
<td><span class="th-span">제26·28대</span><span class="name-span">전탁</span></td>
<td><span class="th-span">제29대</span><span class="name-span">허태진</span></td>
</tr>
<tr>
<td><span class="th-span">제30대</span><span class="name-span">노영찬</span></td>
<td><span class="th-span">제31대</span><span class="name-span">양동환</span></td>
<td><span class="th-span">제32대</span><span class="name-span">노선태</span></td>
<td><span class="th-span">제33대</span><span class="name-span">신원심</span></td>
<td><span class="th-span">제34대</span><span class="name-span">임유정</span></td>
</tr>
<tr>
<td><span class="th-span">제35대</span><span class="name-span">우중곤</span></td>
<td><span class="th-span">제36·37대</span><span class="name-span">박아밀라</span></td>
<td class="current-term"><span class="th-span">제37·39·40대</span><span class="name-span">오전희</span></td>
<td><span class="th-span">제38대</span><span class="name-span text-red-600 font-bold">강덕수</span></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

// 개별 토글 함수 자동 생성
if (typeof window.toggleHistoryNav_남구 === 'undefined') {
    window.toggleHistoryNav_남구 = function() {
        var body = document.getElementById("history-nav-body-남구");
        var text = document.getElementById("history-nav-text-남구");
        if (!body || !text) return;
        
        if (body.style.display === 'none' || body.style.display === '') {
            body.style.display = 'table-row-group';
            text.innerText = '[ 펼치기 · 접기 ]';
        } else {
            body.style.display = 'none';
            text.innerText = '[ 펼치기 ]';
        }
    };
}
