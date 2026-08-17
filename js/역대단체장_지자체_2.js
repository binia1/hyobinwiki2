/**
 * 파일명: js/역대단체장_지자체_2.js
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-지자체_2-2-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="wiki-table">
<thead><tr><th>틀 이름</th><th>설명</th></tr></thead>
<tbody id="history-nav-body-지자체_2-2">
<tr>
<td><a class="wiki-link" href="틀:2014 서아프리카 에볼라 유행 월별 진행상황.html">틀:2014 서아프리카 에볼라 유행 월별 진행상황</a><br/><span class="syntax-code">[include(틀:2014 서아프리카 에볼라 유행 월별 진행상황)]</span></td>
<td>2014 서아프리카 에볼라 유행의 월별 진행상황에 대한 틀입니다.</td>
</tr>
<tr>
<td><a class="wiki-link" href="틀:청해진해운 세월호 침몰 사고.html">틀:청해진해운 세월호 침몰 사고</a><br/><a class="wiki-link" href="틀:청해진해운 세월호 침몰 사고/2014년 4월.html">틀:청해진해운 세월호 침몰 사고/2014년 4월</a><br/><span class="syntax-code">[include(틀:청해진해운 세월호 침몰 사고)]<br/>[include(틀:청해진해운 세월호 침몰 사고/2014년 4월)]</span></td>
<td>청해진해운 세월호 침몰 사고의 세분화를 위한 틀들입니다.</td>
</tr>
<tr>
<td><a class="wiki-link" href="틀:후쿠시마 원자력 발전소 사고.html">틀:후쿠시마 원자력 발전소 사고</a><br/><span class="syntax-code">[include(틀:후쿠시마 원자력 발전소 사고)]</span></td>
<td>후쿠시마 원자력 발전소 사고의 사건 경과에 관한 내용입니다.</td>
</tr>
<tr>
<td><a class="wiki-link" href="틀:메르스.html">틀:메르스</a><br/><span class="syntax-code">[include(틀:메르스)]</span></td>
<td>메르스에 대한 틀입니다.</td>
</tr>
<tr>
<td><a class="wiki-link" href="틀:지진/19세기 이전.html">틀:지진/19세기 이전</a><br/><a class="wiki-link" href="틀:지진/20세기.html">틀:지진/20세기</a><br/><a class="wiki-link" href="틀:지진/한국 역대 지진.html">틀:지진/한국 역대 지진</a><br/><span class="syntax-code">[include(틀:지진/19세기 이전)]<br/>[include(틀:지진/20세기)]<br/>[include(틀:지진/한국 역대 지진)]</span></td>
<td>지진에 관한 틀들입니다.</td>
</tr>
<tr>
<td><a class="wiki-link" href="틀:화재/한국.html">틀:화재/한국</a><br/><span class="syntax-code">[include(틀:화재/한국)]</span></td>
<td>대한민국에서 발생한 화재 관련 문서들을 모은 틀입니다.</td>
</tr>
<tr>
<td><a class="wiki-link" href="틀:한국의 살인 사건.html">틀:한국의 살인 사건</a><br/><span class="syntax-code">[include(틀:살인사건/한국)]</span></td>
<td>한국에서 발생한 살인 사건 관련 문서들을 모은 틀입니다.</td>
</tr>
<tr>
<td><a class="wiki-link" href="틀:역대 사망자별 항공사고.html">틀:역대 사망자별 항공사고</a><br/><span class="syntax-code">[include(틀:역대 사망자별 항공사고)]</span></td>
<td>항공사고 관련 문서들을 사망자순으로 모은 틀입니다.</td>
</tr>
<tr>
<td><a class="wiki-link" href="틀:대한민국의 대형 참사.html">틀:대한민국의 대형 참사</a><br/><span class="syntax-code">[include(틀:대한민국의 대형 참사)]</span></td>
<td>대한민국의 대형 참사 문서들을 모은 틀입니다.</td>
</tr>
</tbody>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_지자체_2_2 === 'undefined') {
    window.toggleHistoryNav_지자체_2_2 = function() {
        var body = document.getElementById("history-nav-body-지자체_2-2");
        var text = document.getElementById("history-nav-text-지자체_2-2");
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
