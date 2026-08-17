/**
 * 파일명: js/역대단체장_서.js
 * 설명: 역대 단체장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-서-0-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/logo.webp"/> 효빈광역시 서구청장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_서_0()">
<span id="history-nav-text-서-0">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-서-0">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이진우</span></td>
<td><span class="th-span">제2대</span><span class="name-span">김승민</span></td>
<td><span class="th-span">제3대</span><span class="name-span">신준</span></td>
<td><span class="th-span">제4대</span><span class="name-span">오창훈</span></td>
<td><span class="th-span">제5대</span><span class="name-span">한동욱</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">박찬</span></td>
<td><span class="th-span">제7대</span><span class="name-span">서민기</span></td>
<td><span class="th-span">제8대</span><span class="name-span">임석환</span></td>
<td><span class="th-span">제9대</span><span class="name-span">최혁</span></td>
<td><span class="th-span">제10대</span><span class="name-span">유도현</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">장기영</span></td>
<td><span class="th-span">제12대</span><span class="name-span">정호</span></td>
<td><span class="th-span">제13대</span><span class="name-span">송민철</span></td>
<td><span class="th-span">제14대</span><span class="name-span">백종훈</span></td>
<td><span class="th-span">제15대</span><span class="name-span">강건</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">권태민</span></td>
<td><span class="th-span">제17대</span><span class="name-span">황지석</span></td>
<td><span class="th-span">제18대</span><span class="name-span">윤철</span></td>
<td><span class="th-span">제19대</span><span class="name-span">안도영</span></td>
<td><span class="th-span">제20·21대</span><span class="name-span">조명환</span></td>
</tr>
<tr>
<td><span class="th-span">제22대</span><span class="name-span">남기태</span></td>
<td><span class="th-span">제23·24대</span><span class="name-span">전우석</span></td>
<td><span class="th-span">제25·27대</span><span class="name-span">노승재</span></td>
<td><span class="th-span">제26대</span><span class="name-span">허재민</span></td>
<td><span class="th-span">제28대</span><span class="name-span">배성훈</span></td>
</tr>
<tr>
<td><span class="th-span">제29대</span><span class="name-span">홍동현</span></td>
<td><span class="th-span">제30대</span><span class="name-span">양석진</span></td>
<td><span class="th-span">제31대</span><span class="name-span">구본석</span></td>
<td><span class="th-span">제32대</span><span class="name-span text-blue-600 font-bold">권수현</span></td>
<td><span class="th-span">제33·34대</span><span class="name-span text-blue-600 font-bold">조서원</span></td>
</tr>
<tr>
<td><span class="th-span">제35대</span><span class="name-span text-blue-600 font-bold">민영만</span></td>
<td><span class="th-span">제37대</span><span class="name-span text-blue-800 font-bold">조영만</span></td>
<td><span class="th-span">제38~40대</span><span class="name-span text-blue-800 font-bold">노서현</span></td>
<td class="current-term"><span class="th-span">제41대</span><span class="name-span">부서원</span></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_서_0 === 'undefined') {
    window.toggleHistoryNav_서_0 = function() {
        var body = document.getElementById("history-nav-body-서-0");
        var text = document.getElementById("history-nav-text-서-0");
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
