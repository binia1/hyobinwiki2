/**
 * 파일명: js/역대단체장_모제.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-모제-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 모제군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_모제_0()">
<span id="history-nav-text-모제-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-모제-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이기석</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박동수</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김성환</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최병기</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정창훈</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강석태</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조영길</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤진호</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장기동</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임태수</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한경석</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권영만</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서진철</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유재권</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송기학</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백동환</span></td>
<td><span class="th-span">제17대</span><span class="name-span">안성민</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황보석</span></td>
<td><span class="th-span">제19대</span><span class="name-span">전만식</span></td>
<td><span class="th-span">제20대</span><span class="name-span">남기석</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배종길</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양태환</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고재철</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신동욱</span></td>
<td><span class="th-span">제25대</span><span class="name-span">민경수</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">차진호</span></td>
<td><span class="th-span">제27대</span><span class="name-span">구자명</span></td>
<td><span class="th-span">제28대</span><span class="name-span">이수철</span></td>
<td><span class="th-span">제29대</span><span class="name-span">소상신</span></td>
<td><span class="th-span">제30대</span><span class="name-span">영중현</span></td>
</tr>
<tr>
<td><span class="th-span">제31대</span><span class="name-span">소상신</span></td>
<td><span class="th-span">제32대</span><span class="name-span">영중현</span></td>
<td><span class="th-span">제33대</span><span class="name-span">김산기</span></td>
<td><span class="th-span">제34~35대</span><span class="name-span">강준혁</span></td>
<td><span class="th-span">제36대</span><span class="name-span text-red-600 font-bold">오성국</span></td>
</tr>
<tr>
<td class="current-term"><span class="th-span">제37대</span><span class="name-span">진기현</span></td>
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

if (typeof window.toggleHistoryNav_모제_0 === 'undefined') {
    window.toggleHistoryNav_모제_0 = function() {
        var body = document.getElementById("history-nav-body-모제-0");
        var text = document.getElementById("history-nav-text-모제-0");
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
