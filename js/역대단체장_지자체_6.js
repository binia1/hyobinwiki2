/**
 * 파일명: js/역대단체장_지자체_6.js
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-지자체_6-6-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="wiki-table">
<thead><tr><th>틀 이름</th><th>설명</th></tr></thead>
<tbody id="history-nav-body-지자체_6-6">
<tr><td><a class="wiki-link" href="틀:역대 세계대전.html">틀:역대 세계대전</a><br/><span class="syntax-code">[include(틀:역대 세계대전)]</span></td><td>세계 대전 관련 문서를 편집할 시에 기본적으로 적용되는 틀입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:러시아-우크라이나 전쟁.html">틀:러시아-우크라이나 전쟁</a><br/><span class="syntax-code">[include(틀:러시아-우크라이나 전쟁)]</span></td><td>러시아와 우크라 간의 전쟁입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:2023년 이스라엘-하마스 전쟁.html">틀:2023년 이스라엘-하마스 전쟁</a><br/><span class="syntax-code">[include(틀:2023년 이스라엘-하마스 전쟁)]</span></td><td>2023년 이스라엘-하마스 전쟁의 경과, 사건을 다루는 문서들을 묶는 틀입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:2020년대 이스라엘-시아파 갈등.html">틀:2020년대 이스라엘-시아파 갈등</a><br/><span class="syntax-code">[include(틀:2020년대 이스라엘-시아파 갈등)]</span></td><td>2020년대에 발생한 이스라엘과 시아파 국가들의 무력 충돌 등을 다루는 문서들을 묶는 틀입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:6.25 전쟁.html">틀:6.25 전쟁</a><br/><span class="syntax-code">[include(틀:6.25 전쟁)]</span></td><td>6.25 전쟁 관련 문서나 하위 문서들을 묶는 틀입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:1차 세계대전의 전투 목록.html">틀:1차 세계대전의 전투 목록</a><br/><span class="syntax-code">[include(틀:1차 세계대전의 전투 목록)]]</span></td><td>문서가 존재하는 제1차 세계 대전의 전투 목록입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:1차 세계대전 주요 참전국 국가원수.html">틀:1차 세계대전 주요 참전국 국가원수</a><br/><span class="syntax-code">[include(틀:1차 세계대전 주요 참전국 국가원수)]</span></td><td>제1차 세계 대전의 주요 참전국의 국가원수의 목록입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:제2차 세계 대전.html">틀:제2차 세계 대전</a><br/><span class="syntax-code">[include(틀:제2차 세계 대전)]</span></td><td>제2차 세계 대전의 하위 문서들이나 2차대전과 관련성이 매우 높은 문서들을 묶는 틀입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:제2차 세계 대전 참전국.html">틀:제2차 세계 대전 참전국</a><br/><span class="syntax-code">[include(틀:제2차 세계 대전 참전국)]</span></td><td>제2차 세계 대전의 참전국들의 목록입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:2차 세계대전의 전투 목록(아시아 및 태평양).html">틀:2차 세계대전의 전투 목록(아시아 및 태평양)</a><br/><span class="syntax-code">[include(틀:2차 세계대전의 전투 목록(아시아 및 태평양))]</span></td><td>제2차 세계 대전에서 치뤄진 아시아·태평양 지역에서의 전투들의 목록입니다.</td></tr>
<tr><td><a class="wiki-link" href="틀:2차 세계대전의 전투 목록(유럽 및 아프리카).html">틀:2차 세계대전의 전투 목록(유럽 및 아프리카)</a><br/><span class="syntax-code">[include(틀:2차 세계대전의 전투 목록(유럽 및 아프리카))]</span></td><td>제2차 세계 대전에서 치뤄진 유럽·아프리카 지역에서의 전투들의 목록입니다.</td></tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_지자체_6_6 === 'undefined') {
    window.toggleHistoryNav_지자체_6_6 = function() {
        var body = document.getElementById("history-nav-body-지자체_6-6");
        var text = document.getElementById("history-nav-text-지자체_6-6");
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
