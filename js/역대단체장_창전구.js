/**
 * 파일명: js/역대단체장_창전구.js
 * 설명: 효빈광역시 창전구청장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-창전구-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/logo.webp"/> 효빈광역시 창전구청장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_창전구()">
<span id="history-nav-text-창전구">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-창전구">
<tr>
<td><span class="th-span">초대</span><span class="name-span">박동진</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이철</span></td>
<td><span class="th-span">제3대</span><span class="name-span">최민석</span></td>
<td><span class="th-span">제4대</span><span class="name-span">김태환</span></td>
<td><span class="th-span">제5~7대</span><span class="name-span text-blue-600 font-bold">고안성</span></td>
</tr>
<tr>
<td><span class="th-span">제8~10대</span><span class="name-span text-blue-600 font-bold">정창훈</span></td>
<td class="current-term"><span class="th-span">제11·12·13대</span><span class="name-span">전역헌</span></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

// 개별 토글 함수 자동 생성
if (typeof window.toggleHistoryNav_창전구 === 'undefined') {
    window.toggleHistoryNav_창전구 = function() {
        var body = document.getElementById("history-nav-body-창전구");
        var text = document.getElementById("history-nav-text-창전구");
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
