/**
 * 파일명: js/역대단체장_선곡.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-선곡-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-seongok">
<thead>
<tr>
<td class="history-nav-header-seongok" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 선곡군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-seongok" colspan="5" onclick="toggleHistoryNav_선곡_0()">
<span id="history-nav-text-선곡-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-선곡-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이병호</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박진수</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김상훈</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최기동</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정학수</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">조동철</span></td>
<td><span class="th-span">제7대</span><span class="name-span">강성기</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤태진</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장영식</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임동수</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한재석</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권기호</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서진학</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유병철</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송기석</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백태환</span></td>
<td><span class="th-span">제17대</span><span class="name-span">안종수</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황인기</span></td>
<td><span class="th-span">제19대</span><span class="name-span">전상훈</span></td>
<td><span class="th-span">제20대</span><span class="name-span">남재원</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배동환</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양기철</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고석진</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신명호</span></td>
<td><span class="th-span">제25대</span><span class="name-span">민재영</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">차동수</span></td>
<td><span class="th-span">제27대</span><span class="name-span">구본석</span></td>
<td><span class="th-span">제28대</span><span class="name-span">유성갑</span></td>
<td><span class="th-span">제29~31대</span><span class="name-span">조진태</span></td>
<td><span class="th-span">제32~34대</span><span class="name-span">임성현</span></td>
</tr>
<tr>
<td class="current-term"><span class="th-span">제35·36대</span><span class="name-span">이지현</span></td>
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

if (typeof window.toggleHistoryNav_선곡_0 === 'undefined') {
    window.toggleHistoryNav_선곡_0 = function() {
        var body = document.getElementById("history-nav-body-선곡-0");
        var text = document.getElementById("history-nav-text-선곡-0");
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
