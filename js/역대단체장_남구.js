/**
 * 파일명: js/역대단체장_남구.js
 * 설명: 역대 남구청장 내비게이션 (박아밀라 재선 반영 및 대수 완벽 수정)
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-남구-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="history-nav-table">
<thead>
<tr>
<td class="history-nav-header" colspan="5">
<img alt="로고" onerror="this.src='이미지/남구.webp'; this.style.filter='brightness(0) invert(1) drop-shadow(0 0 2px rgba(0,0,0,0.5))';" src="이미지/남구_흰색로고.webp" style="height: 45px; margin-right: 12px; vertical-align: middle; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"/> 효빈광역시 남구청장
                    </td>
</tr>
<tr>
<td class="history-nav-toggle" colspan="5" onclick="toggleHistoryNav_남구()" style="cursor: pointer;">
<span id="history-nav-text-남구">[ 펼치기 · 접기 ]</span>
</td>
</tr>
</thead>
<tbody id="history-nav-body-남구">
<tr>
<td onclick="location.href='이종만.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">초대</span><span class="name-span"><a href="이종만.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">이종만</a></span></td>
<td onclick="location.href='박원석.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제2대</span><span class="name-span"><a href="박원석.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">박원석</a></span></td>
<td onclick="location.href='최건.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제3대</span><span class="name-span"><a href="최건.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">최건</a></span></td>
<td onclick="location.href='김성무.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제4대</span><span class="name-span"><a href="김성무.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">김성무</a></span></td>
<td onclick="location.href='장동식.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제5대</span><span class="name-span"><a href="장동식.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">장동식</a></span></td>
</tr>
<tr>
<td onclick="location.href='정환.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제6대</span><span class="name-span"><a href="정환.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">정환</a></span></td>
<td onclick="location.href='송태욱.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제7대</span><span class="name-span"><a href="송태욱.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">송태욱</a></span></td>
<td onclick="location.href='윤기철.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제8대</span><span class="name-span"><a href="윤기철.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">윤기철</a></span></td>
<td onclick="location.href='조민혁.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제9대</span><span class="name-span"><a href="조민혁.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">조민혁</a></span></td>
<td onclick="location.href='임현태.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제10대</span><span class="name-span"><a href="임현태.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">임현태</a></span></td>
</tr>
<tr>
<td onclick="location.href='강엽.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제11대</span><span class="name-span"><a href="강엽.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">강엽</a></span></td>
<td onclick="location.href='한정훈.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제12대</span><span class="name-span"><a href="한정훈.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">한정훈</a></span></td>
<td onclick="location.href='신진국.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제13대</span><span class="name-span"><a href="신진국.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">신진국</a></span></td>
<td onclick="location.href='권영재.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제14대</span><span class="name-span"><a href="권영재.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">권영재</a></span></td>
<td onclick="location.href='서단.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제15대</span><span class="name-span"><a href="서단.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">서단</a></span></td>
</tr>
<tr>
<td onclick="location.href='유성일.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제16대</span><span class="name-span"><a href="유성일.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">유성일</a></span></td>
<td onclick="location.href='백재형.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제17대</span><span class="name-span"><a href="백재형.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">백재형</a></span></td>
<td onclick="location.href='황덕준.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제18대</span><span class="name-span"><a href="황덕준.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">황덕준</a></span></td>
<td onclick="location.href='안혁.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제19대</span><span class="name-span"><a href="안혁.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">안혁</a></span></td>
<td onclick="location.href='남기호.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제20·21대</span><span class="name-span"><a href="남기호.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">남기호</a></span></td>
</tr>
<tr>
<td onclick="location.href='오승철.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제22대</span><span class="name-span"><a href="오승철.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">오승철</a></span></td>
<td onclick="location.href='배형순.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제23·24대</span><span class="name-span"><a href="배형순.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">배형순</a></span></td>
<td onclick="location.href='차민호.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제25·27대</span><span class="name-span"><a href="차민호.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">차민호</a></span></td>
<td onclick="location.href='전탁.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제26·28대</span><span class="name-span"><a href="전탁.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">전탁</a></span></td>
<td onclick="location.href='허태진.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제29대</span><span class="name-span"><a href="허태진.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">허태진</a></span></td>
</tr>
<tr>
<td onclick="location.href='노영찬.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제30대</span><span class="name-span"><a href="노영찬.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">노영찬</a></span></td>
<td onclick="location.href='양동환.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제31대</span><span class="name-span"><a href="양동환.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">양동환</a></span></td>
<td onclick="location.href='노선태.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제32대</span><span class="name-span"><a href="노선태.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">노선태</a></span></td>
<td onclick="location.href='신원심.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제33대</span><span class="name-span"><a href="신원심.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">신원심</a></span></td>
<td onclick="location.href='임유정.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제34대</span><span class="name-span"><a href="임유정.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">임유정</a></span></td>
</tr>
<tr>
<td onclick="location.href='우중곤.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제35대</span><span class="name-span"><a href="우중곤.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">우중곤</a></span></td>
<!-- 박아밀라 재선 반영 -> 제36·37대 -->
<td onclick="location.href='박아밀라.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제36·37대</span><span class="name-span"><a href="박아밀라.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">박아밀라</a></span></td>
<!-- 오전희 대수 밀림 -> 제38대 -->
<td onclick="location.href='오전희.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제38대</span><span class="name-span"><a href="오전희.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">오전희</a></span></td>
<!-- 강덕수 대수 밀림 -> 제39대 -->
<td onclick="location.href='강덕수.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제39대</span><span class="name-span text-red-600 font-bold"><a href="강덕수.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">강덕수</a></span></td>
<!-- 오전희 현직 대수 밀림 -> 제40·41대 -->
<td class="current-term" onclick="location.href='오전희.html'" onmouseout="this.style.backgroundColor='';" onmouseover="this.style.backgroundColor='rgba(0,0,0,0.05)';" style="cursor: pointer;"><span class="th-span">제40·41대</span><span class="name-span"><a href="오전희.html" style="color: inherit; text-decoration: none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">오전희</a></span></td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_남구 === 'undefined') {
    window.toggleHistoryNav_남구 = function() {
        var body = document.getElementById("history-nav-body-남구");
        var text = document.getElementById("history-nav-text-남구");
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