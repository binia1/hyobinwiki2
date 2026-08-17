/**
 * 파일명: js/역대단체장_강주.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-강주-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-gangju">
<thead>
<tr>
<td class="history-nav-header-gangju" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 강주시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-gangju" colspan="5" onclick="toggleHistoryNav_강주_0()">
<span id="history-nav-text-강주-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-강주-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이병철</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박재홍</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김상기</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최동일</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정학기</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">조진우</span></td>
<td><span class="th-span">제7대</span><span class="name-span">강영태</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤석호</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장기영</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임철순</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한병국</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권오성</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서기석</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유동훈</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송태경</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백기철</span></td>
<td><span class="th-span">제17대</span><span class="name-span">오만식</span></td>
<td><span class="th-span">제18대</span><span class="name-span">안상기</span></td>
<td><span class="th-span">제19대</span><span class="name-span">황종태</span></td>
<td><span class="th-span">제20대</span><span class="name-span">남궁혁</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배종우</span></td>
<td><span class="th-span">제22대</span><span class="name-span">전문식</span></td>
<td><span class="th-span">제23대</span><span class="name-span">양수철</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신재명</span></td>
<td><span class="th-span">제25대</span><span class="name-span">민기석</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">차진태</span></td>
<td><span class="th-span">제27대</span><span class="name-span">유진태</span></td>
<td><span class="th-span">제28대</span><span class="name-span">고성덕</span></td>
<td><span class="th-span">제29대</span><span class="name-span">송지훈</span></td>
<td><span class="th-span">제30대</span><span class="name-span text-blue-600 font-bold">신유현</span></td>
</tr>
<tr>
<td><span class="th-span">제31대</span><span class="name-span text-blue-600 font-bold">송지훈</span></td>
<td><span class="th-span">제32·33대</span><span class="name-span text-blue-600 font-bold">우영훈</span></td>
<td class="current-term"><span class="th-span">제34·35대</span><span class="name-span">한성민</span></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_강주_0 === 'undefined') {
    window.toggleHistoryNav_강주_0 = function() {
        var body = document.getElementById("history-nav-body-강주-0");
        var text = document.getElementById("history-nav-text-강주-0");
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
