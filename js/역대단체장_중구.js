/**
 * 파일명: js/역대단체장_중구.js
 * 설명: 효빈광역시 중구청장 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-중구-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/logo.webp"/> 효빈광역시 중구청장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_중구()">
<span id="history-nav-text-중구">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-중구">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이학수</span></td>
<td><span class="th-span">제2대</span><span class="name-span">박영호</span></td>
<td><span class="th-span">제3대</span><span class="name-span">정만기</span></td>
<td><span class="th-span">제4대</span><span class="name-span">한성종</span></td>
<td><span class="th-span">제5대</span><span class="name-span">윤담</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">서상일</span></td>
<td><span class="th-span">제7대</span><span class="name-span">류명철</span></td>
<td><span class="th-span">제8대</span><span class="name-span">최결</span></td>
<td><span class="th-span">제9대</span><span class="name-span">장기원</span></td>
<td><span class="th-span">제10대</span><span class="name-span">신동수</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">임석민</span></td>
<td><span class="th-span">제12대</span><span class="name-span">권태진</span></td>
<td><span class="th-span">제13대</span><span class="name-span">백인호</span></td>
<td><span class="th-span">제14대</span><span class="name-span">강욱</span></td>
<td><span class="th-span">제15대</span><span class="name-span">황재웅</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">안병국</span></td>
<td><span class="th-span">제17대</span><span class="name-span">배영식</span></td>
<td><span class="th-span">제18대</span><span class="name-span">오단</span></td>
<td><span class="th-span">제19대</span><span class="name-span">송석환</span></td>
<td><span class="th-span">제20·21대</span><span class="name-span">유진우</span></td>
</tr>
<tr>
<td><span class="th-span">제22대</span><span class="name-span">남훈</span></td>
<td><span class="th-span">제23·24대</span><span class="name-span">허정민</span></td>
<td><span class="th-span">제25·27대</span><span class="name-span">송겸</span></td>
<td><span class="th-span">제26·28대</span><span class="name-span">양재훈</span></td>
<td><span class="th-span">제29대</span><span class="name-span">홍기섭</span></td>
</tr>
<tr>
<td><span class="th-span">제30대</span><span class="name-span">구상현</span></td>
<td><span class="th-span">제31대</span><span class="name-span">김도완</span></td>
<td><span class="th-span">제32대</span><span class="name-span text-blue-600 font-bold">박현만</span></td>
<td><span class="th-span">제33·34대</span><span class="name-span">신유림</span></td>
<td><span class="th-span">제35·36대</span><span class="name-span text-blue-600 font-bold">김성민</span></td>
</tr>
<tr>
<td><span class="th-span">제37·38대</span><span class="name-span">고영민</span></td>
<td class="current-term"><span class="th-span">제39·40대</span><span class="name-span">구성연</span></td>
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
if (typeof window.toggleHistoryNav_중구 === 'undefined') {
    window.toggleHistoryNav_중구 = function() {
        var body = document.getElementById("history-nav-body-중구");
        var text = document.getElementById("history-nav-text-중구");
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
