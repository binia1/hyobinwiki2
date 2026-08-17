/**
 * 파일명: js/역대단체장_군천.js
 * 설명: 덕빈북도 군천시장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-군천-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 군천시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_군천()">
<span id="history-nav-text-군천">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-군천">
<tr>
<td><span class="th-span">초대</span><span class="name-span">남기철</span></td>
<td><span class="th-span">제2대</span><span class="name-span">배정수</span></td>
<td><span class="th-span">제3대</span><span class="name-span">양동석</span></td>
<td><span class="th-span">제4대</span><span class="name-span">고경수</span></td>
<td><span class="th-span">제5대</span><span class="name-span">신철민</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">민영환</span></td>
<td><span class="th-span">제7대</span><span class="name-span">차동길</span></td>
<td><span class="th-span">제8대</span><span class="name-span">구본창</span></td>
<td><span class="th-span">제9대</span><span class="name-span">서기철</span></td>
<td><span class="th-span">제10대</span><span class="name-span">강유현</span></td>
</tr>
<tr>
<td><span class="th-span">제11·12대</span><span class="name-span">계진동</span></td>
<td><span class="th-span">제13대</span><span class="name-span">강유현</span></td>
<td><span class="th-span">제14·15·16대</span><span class="name-span">윤서진</span></td>
<td class="current-term"><span class="th-span">제17대</span><span class="name-span text-blue-600 font-bold">이성민</span></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

// 개별 토글 함수 자동 생성
if (typeof window.toggleHistoryNav_군천 === 'undefined') {
    window.toggleHistoryNav_군천 = function() {
        var body = document.getElementById("history-nav-body-군천");
        var text = document.getElementById("history-nav-text-군천");
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
