/**
 * 파일명: js/역대단체장_치원.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-치원-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 치원군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_치원_0()">
<span id="history-nav-text-치원-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-치원-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김상진</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이병탁</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박기동</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최원석</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정진수</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강태홍</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조기환</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤상철</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장인수</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임명호</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한석준</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권태형</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서병기</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유동식</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송창학</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백동수</span></td>
<td><span class="th-span">제17대</span><span class="name-span">안재석</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황경태</span></td>
<td><span class="th-span">제19대</span><span class="name-span">전석진</span></td>
<td><span class="th-span">제20대</span><span class="name-span">남기태</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배영수</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양인석</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고창훈</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신동철</span></td>
<td><span class="th-span">제25대</span><span class="name-span">민상기</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">차기석</span></td>
<td><span class="th-span">제27대</span><span class="name-span">구본철</span></td>
<td><span class="th-span">제28대</span><span class="name-span">박종태</span></td>
<td><span class="th-span">제29~30대</span><span class="name-span">은진현</span></td>
<td><span class="th-span">제31대</span><span class="name-span">원기대</span></td>
</tr>
<tr>
<td><span class="th-span">제32~34대</span><span class="name-span">연감건</span></td>
<td><span class="th-span">제35~36대</span><span class="name-span text-red-600 font-bold">백민우</span></td>
<td class="current-term"><span class="th-span">제37대</span><span class="name-span">유진태</span></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_치원_0 === 'undefined') {
    window.toggleHistoryNav_치원_0 = function() {
        var body = document.getElementById("history-nav-body-치원-0");
        var text = document.getElementById("history-nav-text-치원-0");
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
