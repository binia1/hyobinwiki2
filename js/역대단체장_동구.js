/**
 * 파일명: js/역대단체장_동구.js
 * 설명: 효빈광역시 동구청장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-동구-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/logo.webp"/> 효빈광역시 동구청장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_동구()">
<span id="history-nav-text-동구">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-동구">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이재영</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박진우</span></td>
<td><span class="th-span">제3대</span><span class="name-span">최상</span></td>
<td><span class="th-span">제4대</span><span class="name-span">김동철</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정석</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강민수</span></td>
<td><span class="th-span">제7대</span><span class="name-span">송기호</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤재호</span></td>
<td><span class="th-span">제9대</span><span class="name-span">권현</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임도균</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한성기</span></td>
<td><span class="th-span">제12대</span><span class="name-span">서영진</span></td>
<td><span class="th-span">제13대</span><span class="name-span">신태섭</span></td>
<td><span class="th-span">제14·15대</span><span class="name-span">류건</span></td>
<td><span class="th-span">제16대</span><span class="name-span">장문기</span></td>
</tr>
<tr>
<td><span class="th-span">제17대</span><span class="name-span">백승우</span></td>
<td><span class="th-span">제18대</span><span class="name-span">허원태</span></td>
<td><span class="th-span">제19대</span><span class="name-span">안창식</span></td>
<td><span class="th-span">제20대</span><span class="name-span text-blue-600 font-bold">조원형</span></td>
<td><span class="th-span">제21~23대</span><span class="name-span text-blue-600 font-bold">정미현</span></td>
</tr>
<tr>
<td><span class="th-span">제24대</span><span class="name-span text-blue-600 font-bold">조현민</span></td>
<td><span class="th-span">제25대</span><span class="name-span text-blue-600 font-bold">고영현</span></td>
<td><span class="th-span">제26·27대</span><span class="name-span text-blue-800 font-bold">조양현</span></td>
<td><span class="th-span">제28대</span><span class="name-span text-blue-800 font-bold">우영철</span></td>
<td class="current-term"><span class="th-span">제29·30대</span><span class="name-span">조우영</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

// 개별 토글 함수 자동 생성
if (typeof window.toggleHistoryNav_동구 === 'undefined') {
    window.toggleHistoryNav_동구 = function() {
        var body = document.getElementById("history-nav-body-동구");
        var text = document.getElementById("history-nav-text-동구");
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
