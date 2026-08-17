/**
 * 파일명: js/역대단체장_낙주시.js
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-낙주시-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table-nakju">
<thead>
<tr>
<td class="history-nav-header-nakju" colspan="5">
<img alt="로고" onerror="this.src='이미지/낙주시.webp'; this.style.filter='brightness(0) invert(1) drop-shadow(0 0 2px rgba(0,0,0,0.5))';" src="이미지/낙주시_흰색로고.webp" style="height: 45px; margin-right: 12px; vertical-align: middle; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"/> 덕빈남도 낙주시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-nakju" colspan="5" onclick="toggleHistoryNav_낙주시()" style=" cursor: pointer;">
<span id="history-nav-text-낙주시">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-낙주시">
<tr>
<td onclick="location.href='김석훈.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">초대</span><span class="name-span">김석훈</span></td>
<td onclick="location.href='박인규.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제2대</span><span class="name-span">박인규</span></td>
<td onclick="location.href='이정길.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제3대</span><span class="name-span">이정길</span></td>
<td onclick="location.href='최동환.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제4대</span><span class="name-span">최동환</span></td>
<td onclick="location.href='정창영.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제5대</span><span class="name-span">정창영</span></td>
</tr>
<tr>
<td onclick="location.href='강명수.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제6대</span><span class="name-span">강명수</span></td>
<td onclick="location.href='윤철진.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제7대</span><span class="name-span">윤철진</span></td>
<td onclick="location.href='한태호.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제8대</span><span class="name-span">한태호</span></td>
<td onclick="location.href='오상민.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제9대</span><span class="name-span">오상민</span></td>
<td onclick="location.href='송기창.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제10대</span><span class="name-span">송기창</span></td>
</tr>
<tr>
<td onclick="location.href='국성연.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제11~12대</span><span class="name-span">국성연</span></td>
<td onclick="location.href='삼지현.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제13~15대</span><span class="name-span">삼지현</span></td>
<td onclick="location.href='우신광.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제16~17대</span><span class="name-span">우신광</span></td>
<td class="current-term" onclick="location.href='최현수.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제18~19대</span><span class="name-span">최현수</span></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_낙주시 === 'undefined') {
    window.toggleHistoryNav_낙주시 = function() {
        var body = document.getElementById("history-nav-body-낙주시");
        var text = document.getElementById("history-nav-text-낙주시");
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
