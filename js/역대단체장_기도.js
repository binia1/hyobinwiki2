/**
 * 파일명: js/역대단체장_기도.js
 * 설명: 덕빈북도 기도군수 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-기도-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 기도군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_기도()">
<span id="history-nav-text-기도">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-기도">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김병수</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이영철</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박창호</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최기수</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정만식</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강태석</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조진호</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤석진</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장학수</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임영택</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한동수</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권상기</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서재환</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유기철</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송병국</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백인수</span></td>
<td><span class="th-span">제17대</span><span class="name-span">안기태</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황종철</span></td>
<td><span class="th-span">제19대</span><span class="name-span">전상길</span></td>
<td><span class="th-span">제20대</span><span class="name-span">남기창</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배석환</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양종민</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고병진</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신태호</span></td>
<td><span class="th-span">제25대</span><span class="name-span">민경식</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">차동진</span></td>
<td><span class="th-span">제27대</span><span class="name-span">구자석</span></td>
<td><span class="th-span">제28대</span><span class="name-span">이승철</span></td>
<td><span class="th-span">제29대</span><span class="name-span">고성산</span></td>
<td><span class="th-span">제30대</span><span class="name-span">연진성</span></td>
</tr>
<tr>
<td><span class="th-span">제31~32대</span><span class="name-span">민승현</span></td>
<td><span class="th-span">제33대</span><span class="name-span">연진현</span></td>
<td><span class="th-span">제34~35대</span><span class="name-span">오시연</span></td>
<td><span class="th-span">제36대</span><span class="name-span">장출규</span></td>
<td class="current-term"><span class="th-span">제37~39대</span><span class="name-span">조민규</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

// 개별 토글 함수 자동 생성
if (typeof window.toggleHistoryNav_기도 === 'undefined') {
    window.toggleHistoryNav_기도 = function() {
        var body = document.getElementById("history-nav-body-기도");
        var text = document.getElementById("history-nav-text-기도");
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
