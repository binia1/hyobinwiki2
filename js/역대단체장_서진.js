/**
 * 파일명: js/역대단체장_서진.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-서진-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-seojin">
<thead>
<tr>
<td class="history-nav-header-seojin" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 서진시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-seojin" colspan="5" onclick="toggleHistoryNav_서진_0()">
<span id="history-nav-text-서진-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-서진-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김영진</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이재철</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박동훈</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최기석</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정태수</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">조병진</span></td>
<td><span class="th-span">제7대</span><span class="name-span">강성호</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤재근</span></td>
<td><span class="th-span">제9대</span><span class="name-span">임동진</span></td>
<td><span class="th-span">제10대</span><span class="name-span">장학수</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한기동</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권석영</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서병철</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유만식</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송재학</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백남수</span></td>
<td><span class="th-span">제17대</span><span class="name-span">안동원</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황기철</span></td>
<td><span class="th-span">제19~21대</span><span class="name-span text-red-600 font-bold">이만기</span></td>
<td><span class="th-span">제22대</span><span class="name-span text-red-600 font-bold">박동석</span></td>
</tr>
<tr>
<td><span class="th-span">제23~25대</span><span class="name-span text-red-800 font-bold">공하진</span></td>
<td class="current-term"><span class="th-span">제26~28대</span><span class="name-span">김철호</span></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_서진_0 === 'undefined') {
    window.toggleHistoryNav_서진_0 = function() {
        var body = document.getElementById("history-nav-body-서진-0");
        var text = document.getElementById("history-nav-text-서진-0");
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
