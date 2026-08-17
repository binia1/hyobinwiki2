/**
 * 파일명: js/역대단체장_청엽구.js
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-청엽구-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.src='이미지/청엽구.webp'; this.style.filter='brightness(0) invert(1) drop-shadow(0 0 2px rgba(0,0,0,0.5))';" src="이미지/청엽구_흰색로고.webp" style="height: 45px; margin-right: 12px; vertical-align: middle; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"/> 효빈광역시 청엽구청장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_청엽구()" style=" cursor: pointer;">
<span id="history-nav-text-청엽구">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-청엽구">
<tr>
<td onclick="location.href='김재훈.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">초대</span><span class="name-span">김재훈</span></td>
<td onclick="location.href='송영환.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제2대</span><span class="name-span">송영환</span></td>
<td onclick="location.href='이겸.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제3대</span><span class="name-span">이겸</span></td>
<td onclick="location.href='박성민.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제4대</span><span class="name-span">박성민</span></td>
<td onclick="location.href='정태우.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제5대</span><span class="name-span">정태우</span></td>
</tr>
<tr>
<td onclick="location.href='한진석.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제6대</span><span class="name-span">한진석</span></td>
<td onclick="location.href='최기호.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제7대</span><span class="name-span">최기호</span></td>
<td onclick="location.href='윤혁.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제8대</span><span class="name-span">윤혁</span></td>
<td onclick="location.href='안동수.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제9대</span><span class="name-span">안동수</span></td>
<td onclick="location.href='장민호.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제10대</span><span class="name-span">장민호</span></td>
</tr>
<tr>
<td onclick="location.href='문연민.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제11~13대</span><span class="name-span text-blue-600 font-bold">문연민</span></td>
<td onclick="location.href='신운연.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제14~16대</span><span class="name-span text-blue-600 font-bold">신운연</span></td>
<td class="current-term" onclick="location.href='권상남.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style=" cursor: pointer;"><span class="th-span">제17·18·19대</span><span class="name-span">권상남</span></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_청엽구 === 'undefined') {
    window.toggleHistoryNav_청엽구 = function() {
        var body = document.getElementById("history-nav-body-청엽구");
        var text = document.getElementById("history-nav-text-청엽구");
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
