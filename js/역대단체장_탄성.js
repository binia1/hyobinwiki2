/**
 * 파일명: js/역대단체장_탄성.js
 * 설명: 효빈광역시 탄성군수 내비게이션 자동 생성
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-탄성-nav");

    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.style.display='none'" src="이미지/logo.webp"/> 효빈광역시 탄성군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_탄성()">
<span id="history-nav-text-탄성">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-탄성">
<tr>
<td><span class="th-span">초대</span><span class="name-span">이창섭</span></td>
<td><span class="th-span">제2대</span><span class="name-span">김재훈</span></td>
<td><span class="th-span">제3대</span><span class="name-span">최준</span></td>
<td><span class="th-span">제4대</span><span class="name-span">박동환</span></td>
<td><span class="th-span">제5대</span><span class="name-span">정명수</span></td>
</tr>
<tr>
<td><span class="th-span">제6대</span><span class="name-span">강태석</span></td>
<td><span class="th-span">제7대</span><span class="name-span">조영기</span></td>
<td><span class="th-span">제8대</span><span class="name-span">한혁송</span></td>
<td><span class="th-span">제9대</span><span class="name-span">임성철</span></td>
<td><span class="th-span">제10대</span><span class="name-span">오기택</span></td>
</tr>
<tr>
<td><span class="th-span">제11대</span><span class="name-span">장석현</span></td>
<td><span class="th-span">제12대</span><span class="name-span">송건석</span></td>
<td><span class="th-span">제13대</span><span class="name-span">신동진</span></td>
<td><span class="th-span">제14대</span><span class="name-span">유승환</span></td>
<td><span class="th-span">제15대</span><span class="name-span">권태우</span></td>
</tr>
<tr>
<td><span class="th-span">제16대</span><span class="name-span">서정수</span></td>
<td><span class="th-span">제17대</span><span class="name-span">윤진태</span></td>
<td><span class="th-span">제18대</span><span class="name-span">황인철</span></td>
<td><span class="th-span">제19대</span><span class="name-span">백성호</span></td>
<td><span class="th-span">제20대</span><span class="name-span">남기원</span></td>
</tr>
<tr>
<td><span class="th-span">제21대</span><span class="name-span">안준식</span></td>
<td><span class="th-span">제22대</span><span class="name-span">배훈</span></td>
<td><span class="th-span">제23대</span><span class="name-span">전민철</span></td>
<td><span class="th-span">제24·25대</span><span class="name-span">구자혁</span></td>
<td><span class="th-span">제26대</span><span class="name-span">양석민</span></td>
</tr>
<tr>
<td><span class="th-span">제27·28대</span><span class="name-span text-blue-600 font-bold">정만춘</span></td>
<td><span class="th-span">제29·30대</span><span class="name-span text-blue-600 font-bold">신영한</span></td>
<td><span class="th-span">제31·32대</span><span class="name-span text-blue-800 font-bold">고안준</span></td>
<td><span class="th-span">제33대</span><span class="name-span text-blue-800 font-bold">심원식</span></td>
<td><span class="th-span">제34대</span><span class="name-span text-blue-800 font-bold">조왕현</span></td>
</tr>
<tr>
<td class="current-term"><span class="th-span">제35·36대</span><span class="name-span">성선설</span></td>
<td></td>
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
if (typeof window.toggleHistoryNav_탄성 === 'undefined') {
    window.toggleHistoryNav_탄성 = function() {
        var body = document.getElementById("history-nav-body-탄성");
        var text = document.getElementById("history-nav-text-탄성");
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
