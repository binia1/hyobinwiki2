/**
 * 파일명: js/역대단체장_저천.js
 * 설명: 덕빈북도 저천군수 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-저천-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 저천군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_저천()">
<span id="history-nav-text-저천">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-저천">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김용대</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이진수</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박상호</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최병철</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정영훈</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강민철</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조석기</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤태수</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장성환</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임종수</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한기호</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권태일</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서상원</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유동길</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송진학</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백창수</span></td>
<td><span class="th-span">제17대</span><span class="name-span">안재민</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황기석</span></td>
<td><span class="th-span">제19대</span><span class="name-span">전병수</span></td>
<td><span class="th-span">제20대</span><span class="name-span">남성학</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배기태</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양진철</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고창수</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신동만</span></td>
<td><span class="th-span">제25대</span><span class="name-span">민태식</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">차영석</span></td>
<td><span class="th-span">제27대</span><span class="name-span">구만호</span></td>
<td><span class="th-span">제28대</span><span class="name-span">이병학</span></td>
<td><span class="th-span">제29~31대</span><span class="name-span">조만세</span></td>
<td><span class="th-span">제32~33대</span><span class="name-span">양기현</span></td>
</tr>
<tr>
<td><span class="th-span">제34대</span><span class="name-span">박성진</span></td>
<td><span class="th-span">제35대</span><span class="name-span">양기현</span></td>
<td class="current-term"><span class="th-span">제36~37대</span><span class="name-span">박성진</span></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

// 개별 토글 함수 자동 생성
if (typeof window.toggleHistoryNav_저천 === 'undefined') {
    window.toggleHistoryNav_저천 = function() {
        var body = document.getElementById("history-nav-body-저천");
        var text = document.getElementById("history-nav-text-저천");
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
