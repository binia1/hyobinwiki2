/**
 * 파일명: js/역대단체장_덕현.js
 * 설명: 덕빈북도 덕현군수 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-덕현-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 덕현군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_덕현()">
<span id="history-nav-text-덕현">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-덕현">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김형기</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이석환</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박정호</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최승동</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정석진</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강재훈</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조동환</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤석규</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장진수</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임태석</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한상호</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권오준</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서병태</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유창석</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송기환</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백진철</span></td>
<td><span class="th-span">제17대</span><span class="name-span">안동수</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황성기</span></td>
<td><span class="th-span">제19대</span><span class="name-span">전태환</span></td>
<td><span class="th-span">제20대</span><span class="name-span">남재석</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배동진</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양진학</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고영철</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신동민</span></td>
<td><span class="th-span">제25대</span><span class="name-span">민경호</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">차석민</span></td>
<td><span class="th-span">제27대</span><span class="name-span">구자환</span></td>
<td><span class="th-span">제28대</span><span class="name-span">이태석</span></td>
<td><span class="th-span">제29~30대</span><span class="name-span">기세진</span></td>
<td><span class="th-span">제31~33대</span><span class="name-span">오산기</span></td>
</tr>
<tr>
<td><span class="th-span">제34~36대</span><span class="name-span">임은현</span></td>
<td class="current-term"><span class="th-span">제37~38대</span><span class="name-span">고태훈</span></td>
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
if (typeof window.toggleHistoryNav_덕현 === 'undefined') {
    window.toggleHistoryNav_덕현 = function() {
        var body = document.getElementById("history-nav-body-덕현");
        var text = document.getElementById("history-nav-text-덕현");
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
