document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("국립효빈해양대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-title">국립효빈해양대학교<br/><span style="font-size:0.7em; font-weight:normal;">Hyobin National Maritime University</span></div>
<div class="infobox-logo">
<div style="width:120px; height:120px; background:#fff; color:#0066CC; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto; font-weight:900; font-size:1.8rem; border:6px solid #003366; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
<div style="display:flex; flex-direction:column; align-items:center; line-height:1;">
<span>HN</span>
<span>MU</span>
</div>
</div>
<div class="mt-3 text-sm font-bold text-[#0066CC]">S등급 국립대학 (특수목적)</div>
</div>
<table>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td>국립대학 (특수목적)</td></tr>
<tr><th>개교</th><td>1945년 11월 5일</td></tr>
<tr><th>총장</th><td>제9대 해상민</td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> 남구 어간동 일원</td></tr>
<tr><th>재학생</th><td>학부 6,820명 <span class="wiki-gray">(2025)</span></td></tr>
<tr><th>교색</th><td><span style="color:#0066CC">■ 오션 블루</span></td></tr>
<tr><th>별명</th><td>효해대, 마린보이, <del>어간수산시장 부속대학</del></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="공식 홈페이지.html" target="_blank">공식 홈페이지</a></td></tr>
</table>

        `;
    }
});