/**
 * 파일명: js/역대단체장_덕빈남도.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-덕빈남도-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-maesan">
<thead>
<tr>
<td class="history-nav-header-maesan" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 매산군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-maesan" colspan="5" onclick="toggleHistoryNav_덕빈남도_0()">
<span id="history-nav-text-덕빈남도-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-덕빈남도-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이태환</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박성규</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김정기</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최동수</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정수일</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강민호</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조태석</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤석환</span></td>
<td><span class="th-span">제9대</span><span class="name-span">한창수</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임학길</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">송기창</span></td>
<td><span class="th-span">제12대</span><span class="name-span">오재덕</span></td>
<td><span class="th-span">제13대</span><span class="name-span">장영수</span></td>
<td><span class="th-span">제14대</span><span class="name-span">백태현</span></td>
<td><span class="th-span">제15대</span><span class="name-span">서정호</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">유진동</span></td>
<td><span class="th-span">제17대</span><span class="name-span">권창환</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황기석</span></td>
<td><span class="th-span">제19대</span><span class="name-span">남성진</span></td>
<td><span class="th-span">제20대</span><span class="name-span">전병수</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">안재호</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양동환</span></td>
<td><span class="th-span">제23대</span><span class="name-span">신기철</span></td>
<td><span class="th-span">제24대</span><span class="name-span">배상민</span></td>
<td><span class="th-span">제25대</span><span class="name-span">고석진</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">구자영</span></td>
<td><span class="th-span">제27대</span><span class="name-span">차진섭</span></td>
<td><span class="th-span">제28대</span><span class="name-span">민영기</span></td>
<td><span class="th-span">제29대</span><span class="name-span">지동철</span></td>
<td><span class="th-span">제30대</span><span class="name-span">하창호</span></td>
</tr>
<tr>
<td><span class="th-span">제31대</span><span class="name-span">방인식</span></td>
<td><span class="th-span">제32대</span><span class="name-span">남기한</span></td>
<td><span class="th-span">제33·34대</span><span class="name-span">조응현</span></td>
<td><span class="th-span">제35대</span><span class="name-span">한성진</span></td>
<td><span class="th-span">제36대</span><span class="name-span">조응현</span></td>
</tr>
<tr>
<td class="current-term" colspan="4"><span class="th-span">제37·38·39대</span><span class="name-span">한성진</span></td>
<td><span class="th-span">제40대</span><span class="name-span">전지호</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_덕빈남도_0 === 'undefined') {
    window.toggleHistoryNav_덕빈남도_0 = function() {
        var body = document.getElementById("history-nav-body-덕빈남도-0");
        var text = document.getElementById("history-nav-text-덕빈남도-0");
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
