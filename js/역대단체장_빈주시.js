/**
 * 파일명: js/역대단체장_빈주시.js
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-빈주시-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.src='이미지/빈주시.webp'; this.style.filter='brightness(0) invert(1) drop-shadow(0 0 2px rgba(0,0,0,0.5))';" src="이미지/빈주시_흰색로고.webp" style="height: 45px; margin-right: 12px; vertical-align: middle; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"/> 역대 덕빈북도 빈주시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_빈주시()" style=" cursor: pointer;">
<span id="history-nav-text-빈주시">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-빈주시">
<tr>
<td onclick="location.href='김태진.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">초대</span><span class="name-span">김태진</span></td>
<td onclick="location.href='박승호.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제2대</span><span class="name-span">박승호</span></td>
<td onclick="location.href='이만수.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제3대</span><span class="name-span">이만수</span></td>
<td onclick="location.href='정기환.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제4대</span><span class="name-span">정기환</span></td>
<td onclick="location.href='최석영.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제5대</span><span class="name-span">최석영</span></td>
</tr>
<tr>
<td onclick="location.href='조병국.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제6대</span><span class="name-span">조병국</span></td>
<td onclick="location.href='강신태.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제7대</span><span class="name-span">강신태</span></td>
<td onclick="location.href='윤성진.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제8대</span><span class="name-span">윤성진</span></td>
<td onclick="location.href='장동철.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제9대</span><span class="name-span">장동철</span></td>
<td onclick="location.href='임기훈.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제10대</span><span class="name-span">임기훈</span></td>
</tr>
<tr>
<td onclick="location.href='한상구.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제11대</span><span class="name-span">한상구</span></td>
<td onclick="location.href='권영석.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제12대</span><span class="name-span">권영석</span></td>
<td onclick="location.href='서종길.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제13대</span><span class="name-span">서종길</span></td>
<td onclick="location.href='유재만.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제14대</span><span class="name-span">유재만</span></td>
<td onclick="location.href='송희섭.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제15대</span><span class="name-span">송희섭</span></td>
</tr>
<tr>
<td onclick="location.href='오건영.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제16대</span><span class="name-span">오건영</span></td>
<td onclick="location.href='백남기.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제17대</span><span class="name-span">백남기</span></td>
<td onclick="location.href='황인규.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제18대</span><span class="name-span">황인규</span></td>
<td onclick="location.href='안진식.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제19대</span><span class="name-span">안진식</span></td>
<td onclick="location.href='남상철.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제20대</span><span class="name-span">남상철</span></td>
</tr>
<tr>
<td onclick="location.href='배기동.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제21대</span><span class="name-span">배기동</span></td>
<td onclick="location.href='전영수.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제22대</span><span class="name-span">전영수</span></td>
<td onclick="location.href='양태식.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제23대</span><span class="name-span">양태식</span></td>
<td onclick="location.href='신국환.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제24대</span><span class="name-span">신국환</span></td>
<td onclick="location.href='민병호.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제25대</span><span class="name-span">민병호</span></td>
</tr>
<tr>
<td onclick="location.href='차성원.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제26대</span><span class="name-span">차성원</span></td>
<td onclick="location.href='한광호.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제27~28대</span><span class="name-span text-blue-600 font-bold">한광호</span></td>
<td onclick="location.href='고한선.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제29~30대</span><span class="name-span text-blue-800 font-bold">고한선</span></td>
<td onclick="location.href='양재현.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제31대</span><span class="name-span text-blue-800 font-bold">양재현</span></td>
<td onclick="location.href='주현욱.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제32~33대</span><span class="name-span text-blue-600 font-bold">주현욱</span></td>
</tr>
<tr>
<td class="current-term" onclick="location.href='이재성.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제34~35대</span><span class="name-span">이재성</span></td>
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

if (typeof window.toggleHistoryNav_빈주시 === 'undefined') {
    window.toggleHistoryNav_빈주시 = function() {
        var body = document.getElementById("history-nav-body-빈주시");
        var text = document.getElementById("history-nav-text-빈주시");
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
