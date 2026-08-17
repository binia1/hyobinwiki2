/**
 * 파일명: js/역대단체장_낭원.js
 * 설명: 덕빈북도 낭원군수 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-낭원-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 낭원군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_낭원()">
<span id="history-nav-text-낭원">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-낭원">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이종만</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박영태</span></td>
<td><span class="th-span">제3대</span><span class="name-span">김철수</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최형기</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정태권</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강수만</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조영식</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤기환</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장수철</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임백석</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한상일</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권기태</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서동엽</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유진석</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송재호</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백기석</span></td>
<td><span class="th-span">제17대</span><span class="name-span">안창기</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황기수</span></td>
<td><span class="th-span">제19대</span><span class="name-span">전만수</span></td>
<td><span class="th-span">제20대</span><span class="name-span">남성일</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배기철</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양동학</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고종수</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신태식</span></td>
<td><span class="th-span">제25대</span><span class="name-span">민영기</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">차성훈</span></td>
<td><span class="th-span">제27대</span><span class="name-span">구만식</span></td>
<td><span class="th-span">제28대</span><span class="name-span">이기철</span></td>
<td><span class="th-span">제29~30대</span><span class="name-span">조지헌</span></td>
<td><span class="th-span">제31~32대</span><span class="name-span">구성기</span></td>
</tr>
<tr>
<td><span class="th-span">제33대</span><span class="name-span">오산기</span></td>
<td class="current-term"><span class="th-span">제34대</span><span class="name-span">정우혁</span></td>
<td><span class="th-span">제35대</span><span class="name-span">유영현</span></td>
<td class="current-term"><span class="th-span">제36~37대</span><span class="name-span">정우혁</span></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

// 개별 토글 함수 자동 생성
if (typeof window.toggleHistoryNav_낭원 === 'undefined') {
    window.toggleHistoryNav_낭원 = function() {
        var body = document.getElementById("history-nav-body-낭원");
        var text = document.getElementById("history-nav-text-낭원");
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
