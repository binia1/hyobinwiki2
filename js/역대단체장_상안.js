/**
 * 파일명: js/역대단체장_상안.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-상안-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/덕북로고.webp"/> 덕빈북도 상안군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_상안_0()">
<span id="history-nav-text-상안-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-상안-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">김택진</span></td>
<td><span class="th-span">제2대</span><span class="name-span">이성구</span></td>
<td><span class="th-span">제3대</span><span class="name-span">박대용</span></td>
<td><span class="th-span">제4대</span><span class="name-span">최석환</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정기수</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강일출</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조동석</span></td>
<td><span class="th-span">제8대</span><span class="name-span">윤학수</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장인택</span></td>
<td><span class="th-span">제10대</span><span class="name-span">임석호</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">한기동</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권영기</span></td>
<td><span class="th-span">제13대</span><span class="name-span">서문환</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유태준</span></td>
<td><span class="th-span">제15대</span><span class="name-span">송경석</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">백낙기</span></td>
<td><span class="th-span">제17대</span><span class="name-span">안상철</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황병기</span></td>
<td><span class="th-span">제19대</span><span class="name-span">전성환</span></td>
<td><span class="th-span">제20대</span><span class="name-span">남기훈</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">배상식</span></td>
<td><span class="th-span">제22대</span><span class="name-span">양석호</span></td>
<td><span class="th-span">제23대</span><span class="name-span">고진철</span></td>
<td><span class="th-span">제24대</span><span class="name-span">신태수</span></td>
<td><span class="th-span">제25대</span><span class="name-span">민영석</span></td>
</tr>
<tr>
<td><span class="th-span">제26대</span><span class="name-span">차기훈</span></td>
<td><span class="th-span">제27대</span><span class="name-span">구본수</span></td>
<td><span class="th-span">제28대</span><span class="name-span">이재형</span></td>
<td><span class="th-span">제29대</span><span class="name-span">고산천</span></td>
<td><span class="th-span">제30·31대</span><span class="name-span">임지현</span></td>
</tr>
<tr>
<td><span class="th-span">제32·33대</span><span class="name-span">구성만</span></td>
<td><span class="th-span">제34·35대</span><span class="name-span">연낙민</span></td>
<td class="current-term"><span class="th-span">제36·37대</span><span class="name-span">강미소</span></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_상안_0 === 'undefined') {
    window.toggleHistoryNav_상안_0 = function() {
        var body = document.getElementById("history-nav-body-상안-0");
        var text = document.getElementById("history-nav-text-상안-0");
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
