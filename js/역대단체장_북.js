/**
 * 파일명: js/역대단체장_북.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-북-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/logo.webp"/> 효빈광역시 북구청장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_북_0()">
<span id="history-nav-text-북-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-북-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">신상돈</span></td>
<td><span class="th-span">제2대</span><span class="name-span">강판영</span></td>
<td><span class="th-span">제3대</span><span class="name-span">황길태</span></td>
<td><span class="th-span">제4대</span><span class="name-span">정태영</span></td>
<td><span class="th-span">제5대</span><span class="name-span">김만연</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">신상돈</span></td>
<td><span class="th-span">제7대</span><span class="name-span">이영택</span></td>
<td><span class="th-span">제8대</span><span class="name-span">서종수</span></td>
<td><span class="th-span">제9대</span><span class="name-span">정병호</span></td>
<td><span class="th-span">제10대</span><span class="name-span text-blue-600 font-bold">변익규</span></td>
</tr>
<tr>
<td><span class="th-span">제11·12대</span><span class="name-span text-blue-600 font-bold">권익</span></td>
<td><span class="th-span">제13대</span><span class="name-span text-blue-600 font-bold">배상도</span></td>
<td><span class="th-span">제14대</span><span class="name-span text-blue-600 font-bold">이성식</span></td>
<td><span class="th-span">제15·16대</span><span class="name-span text-blue-600 font-bold">황재관</span></td>
<td><span class="th-span">제17대</span><span class="name-span text-blue-800 font-bold">정주연</span></td> <!-- 이미지상의 정명희 대응 포지션, 이전 서술에 맞춰 정주연으로 작성 -->
</tr>
<tr>
<td class="current-term"><span class="th-span">제18·19대</span><span class="name-span">김지언</span></td> <!-- 현직 수정 -->
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td class="history-nav-footer" colspan="5">
<span class="history-nav-footer-text">내일이 더 기대되는 변화의 <span style="color:#00a388">북구</span></span>
</td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_북_0 === 'undefined') {
    window.toggleHistoryNav_북_0 = function() {
        var body = document.getElementById("history-nav-body-북-0");
        var text = document.getElementById("history-nav-text-북-0");
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
