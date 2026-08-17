/**
 * 파일명: js/역대단체장_비천.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-비천-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-bicheon">
<thead>
<tr>
<td class="history-nav-header-bicheon" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 비천시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-bicheon" colspan="5" onclick="toggleHistoryNav_비천_0()">
<span id="history-nav-text-비천-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-비천-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이정수</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박성진</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김상철</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최규환</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정기영</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강민수</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조태일</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤상철</span></td>
<td><span class="th-span">제9대</span><span class="name-span">한명구</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임동현</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">송기영</span></td>
<td><span class="th-span">제12대</span><span class="name-span">장태환</span></td>
<td><span class="th-span">제13대</span><span class="name-span">오병철</span></td>
<td><span class="th-span">제14대</span><span class="name-span">권재현</span></td>
<td><span class="th-span">제15대</span><span class="name-span">서정환</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">황태석</span></td>
<td><span class="th-span">제17대</span><span class="name-span">백동민</span></td>
<td><span class="th-span">제18대</span><span class="name-span">안석호</span></td>
<td><span class="th-span">제19대</span><span class="name-span">남기태</span></td>
<td><span class="th-span">제20대</span><span class="name-span">배영호</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">전진석</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양명환</span></td>
<td><span class="th-span">제23대</span><span class="name-span">구자영</span></td>
<td><span class="th-span">제24대</span><span class="name-span">김안선</span></td>
<td><span class="th-span">제25·26·27대</span><span class="name-span">만현성</span></td>
</tr>
<tr>
<td><span class="th-span">제28·29대</span><span class="name-span">고정화</span></td>
<td><span class="th-span">제30대</span><span class="name-span">송원욱</span></td>
<td class="current-term" colspan="3"><span class="th-span">제31·32대</span><span class="name-span">고정화</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_비천_0 === 'undefined') {
    window.toggleHistoryNav_비천_0 = function() {
        var body = document.getElementById("history-nav-body-비천-0");
        var text = document.getElementById("history-nav-text-비천-0");
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
