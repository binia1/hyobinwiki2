/**
 * 파일명: js/역대단체장_지자체_0.js
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-지자체_0-0-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="nw-table" style="border-top: none;">
<tr>
<th style="width: 15%; text-align: center;">국립</th>
<th style="width: 8%; text-align: center; background-color: #f5f5f5; color: #333;">ㅎ</th>
<td><a class="nw-link nw-highlight" onclick="goToLink('효빈대학교.html')" style="color:#3344aa;">효빈대학교</a><span class="nw-dot">·</span><a class="nw-link nw-hyobin" onclick="goToLink('효빈과학기술원.html')">효빈과학기술원(HIST)</a><span class="nw-dot">·</span><a class="nw-link nw-hyobin" onclick="goToLink('효빈교육대학교.html')">효빈교육대학교</a><span class="nw-dot">·</span><a class="nw-link nw-hyobin" onclick="goToLink('효빈해양대학교.html')">효빈해양대학교</a></td>
</tr>
<tr>
<th rowspan="8" style="text-align: center;">사립</th>
<th style="text-align: center; background-color: #f5f5f5; color: #333;">ㄱ</th>
<td><a class="nw-link nav-bold">광연대학교</a></td>
</tr>
<tr>
<th style="text-align: center; background-color: #f5f5f5; color: #333;">ㄷ</th>
<td><a class="nw-link nav-bold">동구대학교</a></td>
</tr>
<tr>
<th style="text-align: center; background-color: #f5f5f5; color: #333;">ㅂ</th>
<td><a class="nw-link nav-bold">중촌대학교</a></td>
</tr>
<tr>
<th style="text-align: center; background-color: #f5f5f5; color: #333;">ㅅ</th>
<td><a class="nw-link nw-hyobin" onclick="goToLink('삼선대학교.html')">삼선대학교</a><span class="nw-dot">·</span><a class="nw-link nav-bold">성택대학교</a></td>
</tr>
<tr>
<th style="text-align: center; background-color: #f5f5f5; color: #333;">ㅇ</th>
<td><a class="nw-link nw-hyobin" onclick="goToLink('엽월대학교.html')">엽월대학교</a><span class="nw-dot">·</span><a class="nw-link nav-bold">옥선대학교</a><span class="nw-dot">·</span><a class="nw-link nav-bold">안월대학교</a></td>
</tr>
<tr>
<th style="text-align: center; background-color: #f5f5f5; color: #333;">ㅊ</th>
<td><a class="nw-link nav-bold">청엽국제학교 대학부</a></td>
</tr>
<tr>
<th style="text-align: center; background-color: #f5f5f5; color: #333;">ㅍ</th>
<td><a class="nw-link nw-hyobin" onclick="goToLink('평안명대학교.html')">평안명대학교</a><span class="nw-dot">·</span><a class="nw-link nav-bold">평천대학교</a></td>
</tr>
<tr>
<th style="text-align: center; background-color: #f5f5f5; color: #333;">ㅎ</th>
<td><a class="nw-link nav-bold">해천대학교</a><span class="nw-dot">·</span><a class="nw-link nav-bold">효빈복지대학교</a><span class="nw-dot">·</span><a class="nw-link nav-bold">효빈외국어대학교</a></td>
</tr>
<tr>
<th style="text-align: center;">원격대학</th>
<th style="text-align: center; background-color: #f5f5f5; color: #333;">ㅇ</th>
<td><a class="nw-link nav-bold">한국방송통신대학교 효빈·덕북지역대학</a></td>
</tr>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_지자체_0_0 === 'undefined') {
    window.toggleHistoryNav_지자체_0_0 = function() {
        var body = document.getElementById("history-nav-body-지자체_0-0");
        var text = document.getElementById("history-nav-text-지자체_0-0");
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
