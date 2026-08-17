/**
 * 파일명: js/역대단체장_지자체_5.js
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-지자체_5-5-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="wiki-table">
<thead><tr><th>틀 이름</th><th>설명</th></tr></thead>
<tbody id="history-nav-body-지자체_5-5">
<tr><td><a class="wiki-link" href="틀:중국/인물.html">틀:중국/인물</a><br/><span class="syntax-code">[include(틀:중국/인물)]</span></td><td>중국의 인물들에 관한 내용입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:일본군 삼간사우.html">틀:일본군 삼간사우</a><br/><span class="syntax-code">[include(틀:일본군 삼간사우)]</span></td><td>일본군의 삼간사우에 관한 내용입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:일본군 삼대오물.html">틀:일본군 삼대오물</a><br/><span class="syntax-code">[include(틀:일본군 삼대오물)]</span></td><td>일본군의 삼대오물에 관한 내용입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:역대 북한 국가원수.html">틀:역대 북한 국가원수</a><br/><span class="syntax-code">[include(틀:역대 북한 국가원수)]</span></td><td>북한의 역대 국가원수에 관한 내용입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:우병우 사단.html">틀:우병우 사단</a><br/><span class="syntax-code">[include(틀:우병우 사단)]</span></td><td>우병우 사단에 속하는 인물에 관한 내용입니다.</td></tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_지자체_5_5 === 'undefined') {
    window.toggleHistoryNav_지자체_5_5 = function() {
        var body = document.getElementById("history-nav-body-지자체_5-5");
        var text = document.getElementById("history-nav-text-지자체_5-5");
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
