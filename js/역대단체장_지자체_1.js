/**
 * 파일명: js/역대단체장_지자체_1.js
 */
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll(".hb-history-지자체_1-1-nav");
    containers.forEach(function(container) {
        container.innerHTML = `
        <table class="nw-table" style="border-top: none;">
<tr>
<th colspan="2" style="background-color: #666; color: #fff; text-align: center; font-weight: bold; padding: 6px;">아시아</th>
</tr>
<tr>
<th style="width: 15%; text-align: center;">🇰🇷 대한민국</th>
<td><a class="nw-link">경남대학교</a><span class="nw-dot">·</span><a class="nw-link">경희대학교</a><span class="nw-dot">·</span><a class="nw-link">고려대학교</a><span class="nw-dot">·</span><a class="nw-link">광주교육대학교</a><span class="nw-dot">·</span><a class="nw-link">광주대학교</a><span class="nw-dot">·</span><a class="nw-link">국민대학교</a><span class="nw-dot">·</span><a class="nw-link">군산대학교</a><span class="nw-dot">·</span><a class="nw-link">대구교육대학교</a><span class="nw-dot">·</span><a class="nw-link">동서대학교</a><span class="nw-dot">·</span><a class="nw-link">동아대학교</a><span class="nw-dot">·</span><a class="nw-link">동의대학교</a><span class="nw-dot">·</span><a class="nw-link">목포대학교</a><span class="nw-dot">·</span><a class="nw-link">목포해양대학교</a><span class="nw-dot">·</span><a class="nw-link">부경대학교</a><span class="nw-dot">·</span><a class="nw-link">부산대학교</a><span class="nw-dot">·</span><a class="nw-link">부산외국어대학교</a><span class="nw-dot">·</span><a class="nw-link">상명대학교</a><span class="nw-dot">·</span><a class="nw-link">서울교육대학교</a><span class="nw-dot">·</span><a class="nw-link">서울여자대학교</a><span class="nw-dot">·</span><a class="nw-link">성결대학교</a><span class="nw-dot">·</span><a class="nw-link">성균관대학교</a><span class="nw-dot">·</span><a class="nw-link">성신여자대학교</a><span class="nw-dot">·</span><a class="nw-link">숙명여자대학교</a><span class="nw-dot">·</span><a class="nw-link">아주대학교</a><span class="nw-dot">·</span><a class="nw-link">연세대학교</a><span class="nw-dot">·</span><a class="nw-link">이화여자대학교</a><span class="nw-dot">·</span><a class="nw-link">인천대학교</a><span class="nw-dot">·</span><a class="nw-link">제주대학교</a><span class="nw-dot">·</span><a class="nw-link nw-hyobin" onclick="goToLink('천주대학교.html')">천주대학교</a><span class="nw-dot">·</span><a class="nw-link">포항공과대학교</a><span class="nw-dot">·</span><a class="nw-link">한국항공대학교</a><span class="nw-dot">·</span><a class="nw-link">한국해양대학교</a><span class="nw-dot">·</span><a class="nw-link">한남대학교</a><span class="nw-dot">·</span><a class="nw-link">한양대학교</a><span class="nw-dot">·</span><a class="nw-link">호서대학교</a><span class="nw-dot">·</span><a class="nw-link nw-highlight" onclick="goToLink('효빈대학교.html')" style="color:#3344aa;">효빈대학교</a></td>
</tr>
<tr>
<th style="text-align: center;">🇹🇼 대만</th>
<td><a class="nw-link">국립가오슝제일과기대학</a><span class="nw-dot">·</span><a class="nw-link">국립대만대학</a><span class="nw-dot">·</span><a class="nw-link">국립대만예술대학</a><span class="nw-dot">·</span><a class="nw-link">국립대만해양대학</a><span class="nw-dot">·</span><a class="nw-link">국립연합대학</a><span class="nw-dot">·</span><a class="nw-link">국립윈린과기대학</a><span class="nw-dot">·</span><a class="nw-link">국립자이대학</a><span class="nw-dot">·</span><a class="nw-link">국립중앙대학</a><span class="nw-dot">·</span><a class="nw-link">국립타이중교육대학</a><span class="nw-dot">·</span><a class="nw-link">난타이과기대학</a><span class="nw-dot">·</span><a class="nw-link">둥하이대학</a><span class="nw-dot">·</span><a class="nw-link">슈더과기대학</a><span class="nw-dot">·</span><a class="nw-link">징이대학</a><span class="nw-dot">·</span><a class="nw-link">창룽대학</a><span class="nw-dot">·</span><a class="nw-link">카이난대학</a></td>
</tr>
<tr>
<th style="text-align: center;">🇲🇳 몽골</th>
<td><a class="nw-link">몽골과학기술대학교</a></td>
</tr>
<tr>
<th style="text-align: center;">🇧🇩 방글라데시</th>
<td><a class="nw-link">국제경영농업기술대학교</a><span class="nw-dot">·</span><a class="nw-link">다카 대학교</a><span class="nw-dot">·</span><a class="nw-link">다포딜 국제대학교</a></td>
</tr>
<tr>
<th style="text-align: center;">🇻🇳 베트남</th>
<td><a class="nw-link">베트남상매대학</a><span class="nw-dot">·</span><a class="nw-link">호찌민 교육대학</a><span class="nw-dot">·</span><a class="nw-link">호찌민 사범대학</a><span class="nw-dot">·</span><a class="nw-link">호찌민 인문사회과학대학</a></td>
</tr>
<tr>
<th style="text-align: center;">🇮🇳 인도</th>
<td><a class="nw-link">공업경영대학교</a></td>
</tr>
<tr>
<th style="text-align: center;">🇮🇩 인도네시아</th>
<td><a class="nw-link">11월 10일 공과대학교</a><span class="nw-dot">·</span><a class="nw-link">가자마다 대학교</a><span class="nw-dot">·</span><a class="nw-link">다르마프르사다 대학교</a><span class="nw-dot">·</span><a class="nw-link">반둥 공과대학교</a><span class="nw-dot">·</span><a class="nw-link">붕 하타 대학교</a><span class="nw-dot">·</span><a class="nw-link">사탸와차나 기독대학교</a><span class="nw-dot">·</span><a class="nw-link">시아쿠알라 대학교</a><span class="nw-dot">·</span><a class="nw-link">아이를랑가 대학교</a><span class="nw-dot">·</span><a class="nw-link">우다야나 대학교</a><span class="nw-dot">·</span><a class="nw-link">인도네시아 대학교</a><span class="nw-dot">·</span><a class="nw-link">하사누딘 대학교</a></td>
</tr>
<tr>
<th style="text-align: center;">🇯🇵 일본</th>
<td><a class="nw-link">간사이국제대학</a><span class="nw-dot">·</span><a class="nw-link">고베가쿠인대학</a><span class="nw-dot">·</span><a class="nw-link">고베국제대학</a><span class="nw-dot">·</span><a class="nw-link">고베대학</a><span class="nw-dot">·</span><a class="nw-link">고베쇼인여자학원대학</a><span class="nw-dot">·</span><a class="nw-link">고베시간호대학</a><span class="nw-dot">·</span><a class="nw-link">고베시외국어대학</a><span class="nw-dot">·</span><a class="nw-link">고베신와대학</a><span class="nw-dot">·</span><a class="nw-link">고베약과대학</a><span class="nw-dot">·</span><a class="nw-link">고베여자대학</a><span class="nw-dot">·</span><a class="nw-link">고베여학원대학</a><span class="nw-dot">·</span><a class="nw-link">고베예술공과대학</a><span class="nw-dot">·</span><a class="nw-link">무코가와여자대학</a><span class="nw-dot">·</span><a class="nw-link">소노다학원여자대학</a><span class="nw-dot">·</span><a class="nw-link">아시야대학</a><span class="nw-dot">·</span><a class="nw-link">오테마에대학</a><span class="nw-dot">·</span><a class="nw-link">유통과학대학</a><span class="nw-dot">·</span><a class="nw-link">간세이가쿠인대학</a><span class="nw-dot">·</span><a class="nw-link">코난대학</a><span class="nw-dot">·</span><a class="nw-link">코난여자대학</a><span class="nw-dot">·</span><a class="nw-link">코시엔대학</a><span class="nw-dot">·</span><a class="nw-link">효고교육대학</a><span class="nw-dot">·</span><a class="nw-link">효고대학</a><span class="nw-dot">·</span><a class="nw-link">효고현립대학</a><span class="nw-dot">·</span><a class="nw-link">히메지대학</a><span class="nw-dot">·</span><a class="nw-link">히메지독쿄대학</a></td>
</tr>
<tr>
<th style="text-align: center;">🇨🇳 중국</th>
<td><a class="nw-link">광둥공업대학</a><span class="nw-dot">·</span><a class="nw-link">광둥외어외역대학</a><span class="nw-dot">·</span><a class="nw-link">난징대학</a><span class="nw-dot">·</span><a class="nw-link">난카이대학</a><span class="nw-dot">·</span><a class="nw-link">내몽골대학</a><span class="nw-dot">·</span><a class="nw-link">닝보대학</a><span class="nw-dot">·</span><a class="nw-link">다롄이공대학</a><span class="nw-dot">·</span><a class="nw-link">다롄해사대학</a><span class="nw-dot">·</span><a class="nw-link">둥베이사범대학</a><span class="nw-dot">·</span><a class="nw-link">베이징공업대학</a><span class="nw-dot">·</span><a class="nw-link">베이징대학</a><span class="nw-dot">·</span><a class="nw-link">베이징사범대학</a><span class="nw-dot">·</span><a class="nw-link">베이징외국어대학</a><span class="nw-dot">·</span><a class="nw-link">베이징체신대학</a><span class="nw-dot">·</span><a class="nw-link">상하이해양대학</a><span class="nw-dot">·</span><a class="nw-link">쑤저우과기대학</a><span class="nw-dot">·</span><a class="nw-link">쑤저우대학</a><span class="nw-dot">·</span><a class="nw-link">쑤저우시립대학</a><span class="nw-dot">·</span><a class="nw-link">연변대학</a><span class="nw-dot">·</span><a class="nw-link">자오칭대학</a><span class="nw-dot">·</span><a class="nw-link">저장대학</a><span class="nw-dot">·</span><a class="nw-link">중국의과대학</a><span class="nw-dot">·</span><a class="nw-link">중국인민대학</a><span class="nw-dot">·</span><a class="nw-link">중산대학</a><span class="nw-dot">·</span><a class="nw-link">지린대학</a><span class="nw-dot">·</span><a class="nw-link">톈진공업대학</a><span class="nw-dot">·</span><a class="nw-link">톈진외국어대학</a><span class="nw-dot">·</span><a class="nw-link">푸단대학</a><span class="nw-dot">·</span><a class="nw-link">하이난대학</a><span class="nw-dot">·</span><a class="nw-link">하이난사범대학</a><span class="nw-dot">·</span><a class="nw-link">홍콩중문대학</a><span class="nw-dot">·</span><a class="nw-link">화난사범대학</a><span class="nw-dot">·</span><a class="nw-link">화둥사범대학</a><span class="nw-dot">·</span><a class="nw-link">후난과기학원</a></td>
</tr>
<tr>
<th style="text-align: center;">🇹🇭 태국</th>
<td><a class="nw-link">라차팟 수안두싯 대학교</a><span class="nw-dot">·</span><a class="nw-link">수라나리 공과대학교</a><span class="nw-dot">·</span><a class="nw-link">쭐랄롱꼰 대학교</a><span class="nw-dot">·</span><a class="nw-link">치앙마이 대학교</a><span class="nw-dot">·</span><a class="nw-link">타이니치 공과대학교</a><span class="nw-dot">·</span><a class="nw-link">탐마삿 대학교</a></td>
</tr>
<tr>
<th style="text-align: center;">🇵🇭 필리핀</th>
<td><a class="nw-link">AMA 대학교</a><span class="nw-dot">·</span><a class="nw-link">마닐라 아테네오 대학교</a><span class="nw-dot">·</span><a class="nw-link">미리엄 칼리지</a><span class="nw-dot">·</span><a class="nw-link">아시아 트리니티 대학교</a><span class="nw-dot">·</span><a class="nw-link">어셤션 대학교</a><span class="nw-dot">·</span><a class="nw-link">엔데룬 칼리지</a><span class="nw-dot">·</span><a class="nw-link">필리핀 대학교</a></td>
</tr>
<tr>
<th colspan="2" style="background-color: #666; color: #fff; text-align: center; font-weight: bold; padding: 6px;">아메리카</th>
</tr>
<tr>
<th style="text-align: center;">🇺🇸 미국</th>
<td><a class="nw-link">곤자가 대학교</a><span class="nw-dot">·</span><a class="nw-link">세인트 마틴 칼리지</a><span class="nw-dot">·</span><a class="nw-link">애리조나 대학교</a><span class="nw-dot">·</span><a class="nw-link">에버그린 주립 칼리지</a><span class="nw-dot">·</span><a class="nw-link">오거스타나 대학교</a><span class="nw-dot">·</span><a class="nw-link">와이오밍 대학교</a><span class="nw-dot">·</span><a class="nw-link">워싱턴 대학교</a><span class="nw-dot">·</span><a class="nw-link">이스턴 워싱턴 대학교</a><span class="nw-dot">·</span><a class="nw-link">일리노이 대학교/어배너-섐페인 캠퍼스</a><span class="nw-dot">·</span><a class="nw-link">피츠버그 대학교</a><span class="nw-dot">·</span><a class="nw-link">하와이 대학교</a></td>
</tr>
<tr>
<th style="text-align: center;">🇧🇷 브라질</th>
<td><a class="nw-link">론드리나 주립대학교</a><span class="nw-dot">·</span><a class="nw-link">파라나 연방기술교육센터</a><span class="nw-dot">·</span><a class="nw-link">파라나 연방대학교</a></td>
</tr>
<tr>
<th style="text-align: center;">🇨🇦 캐나다</th>
<td><a class="nw-link">퀸스 대학교</a></td>
</tr>
<tr>
<th style="text-align: center;">🇺🇳 유엔<br/><span style="font-size: 11px; font-weight: normal;">(코스타리카)</span></th>
<td><a class="nw-link">유엔 평화대학교</a></td>
</tr>
<tr>
<th colspan="2" style="background-color: #666; color: #fff; text-align: center; font-weight: bold; padding: 6px;">오세아니아</th>
</tr>
<tr>
<th style="text-align: center;">🇳🇿 뉴질랜드</th>
<td><a class="nw-link">와이카토 대학교</a><span class="nw-dot">·</span><a class="nw-link">캔터베리 대학교</a></td>
</tr>
<tr>
<th style="text-align: center;">🇦🇺 호주</th>
<td><a class="nw-link">그리피스 대학교</a><span class="nw-dot">·</span><a class="nw-link">뉴사우스웨일스 대학교</a><span class="nw-dot">·</span><a class="nw-link">머독 대학교</a><span class="nw-dot">·</span><a class="nw-link">서호주 대학교</a><span class="nw-dot">·</span><a class="nw-link">선샤인 코스트 대학교</a><span class="nw-dot">·</span><a class="nw-link">에디스 코완 대학교</a><span class="nw-dot">·</span><a class="nw-link">커틴 대학교</a><span class="nw-dot">·</span><a class="nw-link">퀸즐랜드 공과대학교</a><span class="nw-dot">·</span><a class="nw-link">퀸즐랜드 대학교</a><span class="nw-dot">·</span><a class="nw-link">호주 노틀데임 대학교</a><span class="nw-dot">·</span><a class="nw-link">호주해양대학</a></td>
</tr>
</table>
        `;
    });
});

if (typeof window.toggleHistoryNav_지자체_1_1 === 'undefined') {
    window.toggleHistoryNav_지자체_1_1 = function() {
        var body = document.getElementById("history-nav-body-지자체_1-1");
        var text = document.getElementById("history-nav-text-지자체_1-1");
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
