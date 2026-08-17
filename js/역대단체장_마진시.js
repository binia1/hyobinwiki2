/**
 * 파일명: js/역대단체장_마진시.js
 * 설명: 역대 마진시장 내비게이션 (당선 글자 삭제, 현직 문양인 하이라이트 완벽 반영)
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-마진시-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
<table class="history-nav-table-majin">
<thead>
<tr>
<td class="history-nav-header-majin" colspan="5">
<img alt="로고" onerror="this.src='이미지/마진시.webp'; this.style.filter='brightness(0) invert(1) drop-shadow(0 0 2px rgba(0,0,0,0.5))';" src="이미지/마진시_흰색로고.webp" style="height: 45px; margin-right: 12px; vertical-align: middle; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"/> 덕빈남도 마진시장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle-majin" colspan="5" onclick="toggleHistoryNav_마진시()" style="cursor: pointer;">
<span id="history-nav-text-마진시">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-마진시">
<tr>
<td onclick="location.href='신광진.html'" style="cursor: pointer;" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" onmouseout="this.style.backgroundColor='';"><span class="th-span">제1~2대 (민선 1·2기)</span><span class="name-span"><a href="신광진.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">신광진</a></span></td>
<td onclick="location.href='연상훈.html'" style="cursor: pointer;" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" onmouseout="this.style.backgroundColor='';"><span class="th-span">제3~4대 (민선 3·4기)</span><span class="name-span"><a href="연상훈.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">연상훈</a></span></td>
<td onclick="location.href='강은현.html'" style="cursor: pointer;" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" onmouseout="this.style.backgroundColor='';"><span class="th-span">제5~7대 (민선 5·6·7기)</span><span class="name-span"><a href="강은현.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">강은현</a></span></td>

<!-- 백수안: 하이라이트(current-term) 제거 -->
<td onclick="location.href='백수안.html'" style="cursor: pointer;" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" onmouseout="this.style.backgroundColor='';"><span class="th-span">제8대 (민선 8기)</span><span class="name-span"><a href="백수안.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">백수안</a></span></td>

<!-- 문양인: 현직 하이라이트(current-term) 추가, "당선" 글자 삭제 -->
<td class="current-term" onclick="location.href='문양인.html'" style="cursor: pointer;" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" onmouseout="this.style.backgroundColor='';"><span class="th-span">제9대 (민선 9기)</span><span class="name-span text-red-600 font-bold"><a href="문양인.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">문양인</a></span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_마진시 === 'undefined') {
    window.toggleHistoryNav_마진시 = function() {
        var body = document.getElementById("history-nav-body-마진시");
        var text = document.getElementById("history-nav-text-마진시");
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