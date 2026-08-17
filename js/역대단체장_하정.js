/**
 * 파일명: js/역대단체장_하정.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-하정-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-hajeong">
<thead>
<tr>
<td class="history-nav-header-hajeong" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕빈남도_로고.webp"/> 덕빈남도 하정시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-hajeong" colspan="5" onclick="toggleHistoryNav_하정_0()">
<span id="history-nav-text-하정-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-하정-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김종철</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이승환</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박기동</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최명식</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정수창</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강영진</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조병태</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤석환</span></td>
<td><span class="th-span">제9대</span><span class="name-span">한재석</span></td>
<td><span class="th-span">제10대</span><span class="name-span">송동수</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">임석훈</span></td>
<td><span class="th-span">제12대</span><span class="name-span">장기호</span></td>
<td><span class="th-span">제13대</span><span class="name-span">오창길</span></td>
<td><span class="th-span">제14대</span><span class="name-span">권태진</span></td>
<td><span class="th-span">제15대</span><span class="name-span">서영수</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">황재민</span></td>
<td><span class="th-span">제17대</span><span class="name-span">백승우</span></td>
<td><span class="th-span">제18대</span><span class="name-span">안창식</span></td>
<td><span class="th-span">제19대</span><span class="name-span">남상일</span></td>
<td><span class="th-span">제20대</span><span class="name-span">배동석</span></td>
</tr>
<tr>
<td><span class="th-span">제21·22대 (민선 1·2기)</span><span class="name-span">구양우</span></td>
<td><span class="th-span">제23·24대 (민선 3·4기)</span><span class="name-span">관성현</span></td>
<td><span class="th-span">제25대 (민선 5기)</span><span class="name-span">구진남</span></td>
<td><span class="th-span">제26대 (민선 6기)</span><span class="name-span">원재현</span></td>
<td class="current-term"><span class="th-span">제27·28·29대 (민선 7·8·9기)</span><span class="name-span">신태양</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_하정_0 === 'undefined') {
    window.toggleHistoryNav_하정_0 = function() {
        var body = document.getElementById("history-nav-body-하정-0");
        var text = document.getElementById("history-nav-text-하정-0");
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
