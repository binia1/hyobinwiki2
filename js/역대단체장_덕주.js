/**
 * 파일명: js/역대단체장_덕주.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-덕주-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-deokju">
<thead>
<tr>
<td class="history-nav-header-deokju" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 덕주시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-deokju" colspan="5" onclick="toggleHistoryNav_덕주_0()">
<span id="history-nav-text-덕주-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-덕주-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">정동수</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박철민</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김영진</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최석만</span></td>
<td><span class="th-span">제5대</span><span class="name-span">이종학</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">조동기</span></td>
<td><span class="th-span">제7대</span><span class="name-span">강태준</span></td>
<td><span class="th-span">제8대</span><span class="name-span">신현국</span></td>
<td><span class="th-span">제9대</span><span class="name-span">윤기석</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임대호</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">장재영</span></td>
<td><span class="th-span">제12대</span><span class="name-span">한상민</span></td>
<td><span class="th-span">제13대</span><span class="name-span">유성근</span></td>
<td><span class="th-span">제14대</span><span class="name-span">오명진</span></td>
<td><span class="th-span">제15대</span><span class="name-span">서진호</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">황도영</span></td>
<td><span class="th-span">제17대</span><span class="name-span">백기원</span></td>
<td><span class="th-span">제18대</span><span class="name-span">권태수</span></td>
<td><span class="th-span">제19대</span><span class="name-span">송영환</span></td>
<td><span class="th-span">제20대</span><span class="name-span">전병국</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">안희석</span></td>
<td><span class="th-span">제22대</span><span class="name-span">남진우</span></td>
<td><span class="th-span">제23대</span><span class="name-span">배영준</span></td>
<td><span class="th-span">제24대</span><span class="name-span">고창식</span></td>
<td><span class="th-span">제25대</span><span class="name-span">양동철</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">구본상</span></td>
<td><span class="th-span">제27대</span><span class="name-span">차명기</span></td>
<td><span class="th-span">제28대 (민선 1기)</span><span class="name-span">유건기</span></td>
<td><span class="th-span">제29·30·31대 (민선 2·3·4기)</span><span class="name-span">남기현</span></td>
<td><span class="th-span">제32·33대 (민선 5·6기)</span><span class="name-span">김영산</span></td>
</tr>
<tr>
<td class="current-term"><span class="th-span">제34·35·36대 (민선 7·8·9기)</span><span class="name-span">정동혁</span></td>
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

if (typeof window.toggleHistoryNav_덕주_0 === 'undefined') {
    window.toggleHistoryNav_덕주_0 = function() {
        var body = document.getElementById("history-nav-body-덕주-0");
        var text = document.getElementById("history-nav-text-덕주-0");
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
