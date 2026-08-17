/**
 * 파일명: js/역대단체장_반양.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-반양-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 반양군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_반양_0()">
<span id="history-nav-text-반양-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-반양-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김정수</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이태환</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박순동</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최기백</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정석기</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">조영철</span></td>
<td><span class="th-span">제7대</span><span class="name-span">강만호</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤병석</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장태진</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임동철</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한상진</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권영식</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서인수</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유재학</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송기동</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백남철</span></td>
<td><span class="th-span">제17대</span><span class="name-span">안성기</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황진호</span></td>
<td><span class="th-span">제19대</span><span class="name-span">전만석</span></td>
<td><span class="th-span">제20대</span><span class="name-span">남기환</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배영철</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양종수</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고동환</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신기철</span></td>
<td><span class="th-span">제25대</span><span class="name-span">민경태</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">차석환</span></td>
<td><span class="th-span">제27대</span><span class="name-span">구자승</span></td>
<td><span class="th-span">제28대</span><span class="name-span">이문기</span></td>
<td><span class="th-span">제29~30대</span><span class="name-span">공서훈</span></td>
<td><span class="th-span">제31~32대</span><span class="name-span">조안석</span></td>
</tr>
<tr>
<td><span class="th-span">제33~35대</span><span class="name-span">윤안현</span></td>
<td class="current-term"><span class="th-span">제36~37대</span><span class="name-span">노준석</span></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_반양_0 === 'undefined') {
    window.toggleHistoryNav_반양_0 = function() {
        var body = document.getElementById("history-nav-body-반양-0");
        var text = document.getElementById("history-nav-text-반양-0");
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
