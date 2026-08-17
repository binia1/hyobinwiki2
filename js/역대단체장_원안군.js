/**
 * 파일명: js/역대단체장_원안군.js
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-원안군-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-wonan">
<thead>
<tr>
<td class="history-nav-header-wonan" colspan="5">
<img alt="로고" onerror="this.src='이미지/원안군.webp'; this.style.filter='brightness(0) invert(1) drop-shadow(0 0 2px rgba(0,0,0,0.5))';" src="이미지/원안군_흰색로고.webp" style="height: 45px; margin-right: 12px; vertical-align: middle; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"/> 덕빈남도 원안군수
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-wonan" colspan="5" onclick="toggleHistoryNav_원안군()" style=" cursor: pointer;">
<span id="history-nav-text-원안군">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-원안군">
<tr>
<td onclick="location.href='이재학.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">초대</span><span class="name-span">이재학</span></td>
<td onclick="location.href='박정수.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제2대</span><span class="name-span">박정수</span></td>
<td onclick="location.href='김종운.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제3대</span><span class="name-span">김종운</span></td>
<td onclick="location.href='최기동.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제4대</span><span class="name-span">최기동</span></td>
<td onclick="location.href='정석환.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제5대</span><span class="name-span">정석환</span></td>
</tr>
<tr>
<td onclick="location.href='강성태.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제6대</span><span class="name-span">강성태</span></td>
<td onclick="location.href='윤동원.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제7대</span><span class="name-span">윤동원</span></td>
<td onclick="location.href='한영기.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제8대</span><span class="name-span">한영기</span></td>
<td onclick="location.href='오창근.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제9대</span><span class="name-span">오창근</span></td>
<td onclick="location.href='송재호.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제10대</span><span class="name-span">송재호</span></td>
</tr>
<tr>
<td onclick="location.href='임학수.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제11대</span><span class="name-span">임학수</span></td>
<td onclick="location.href='장철민.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제12대</span><span class="name-span">장철민</span></td>
<td onclick="location.href='신태섭.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제13대</span><span class="name-span">신태섭</span></td>
<td onclick="location.href='유진국.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제14대</span><span class="name-span">유진국</span></td>
<td onclick="location.href='백상현.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제15대</span><span class="name-span">백상현</span></td>
</tr>
<tr>
<td onclick="location.href='안기동.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제16대</span><span class="name-span">안기동</span></td>
<td onclick="location.href='서영환.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제17대</span><span class="name-span">서영환</span></td>
<td onclick="location.href='권태술.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제18대</span><span class="name-span">권태술</span></td>
<td onclick="location.href='황인석.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제19대</span><span class="name-span">황인석</span></td>
<td onclick="location.href='전창호.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제20대</span><span class="name-span">전창호</span></td>
</tr>
<tr>
<td onclick="location.href='배기석.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제21대</span><span class="name-span">배기석</span></td>
<td onclick="location.href='남성일.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제22대</span><span class="name-span">남성일</span></td>
<td onclick="location.href='양재덕.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제23대</span><span class="name-span">양재덕</span></td>
<td onclick="location.href='차기환.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제24대</span><span class="name-span">차기환</span></td>
<td onclick="location.href='고영진.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제25대</span><span class="name-span">고영진</span></td>
</tr>
<tr>
<td onclick="location.href='노수환.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제26대</span><span class="name-span">노수환</span></td>
<td onclick="location.href='심정기.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제27대</span><span class="name-span">심정기</span></td>
<td onclick="location.href='민철수.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제28대</span><span class="name-span">민철수</span></td>
<td onclick="location.href='구재훈.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제29대</span><span class="name-span">구재훈</span></td>
<td onclick="location.href='방기철.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제30대</span><span class="name-span">방기철</span></td>
</tr>
<tr>
<td onclick="location.href='하동진.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제31대</span><span class="name-span">하동진</span></td>
<td onclick="location.href='남안규.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제32대</span><span class="name-span">남안규</span></td>
<td onclick="location.href='삼헌수.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제33대</span><span class="name-span">삼헌수</span></td>
<td onclick="location.href='계주현.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제34대</span><span class="name-span">계주현</span></td>
<td onclick="location.href='상기한.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제35대</span><span class="name-span">상기한</span></td>
</tr>
<tr>
<td onclick="location.href='고성군.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제36대</span><span class="name-span">고성군</span></td>
<td onclick="location.href='안기현.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제37대</span><span class="name-span">안기현</span></td>
<td class="current-term" colspan="3" onclick="location.href='윤재민.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제38·39·40대</span><span class="name-span">윤재민</span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_원안군 === 'undefined') {
    window.toggleHistoryNav_원안군 = function() {
        var body = document.getElementById("history-nav-body-원안군");
        var text = document.getElementById("history-nav-text-원안군");
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
