document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("중촌대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-title">중촌대학교<br/><span style="font-size:0.8em; font-weight:normal;">Jungchon University (JCU)</span></div>
<div class="infobox-logo">
<div style="width:120px; height:120px; background:#103867; color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto; font-weight:bold; font-size:2rem; border:4px solid #F47920;">JCU</div>
</div>
<table>
<tr><th>교훈</th><td>진리 탐구, 실용, 봉사</td></tr>
<tr><th>슬로건</th><td>내일의 실력을 키우는 곳, 중촌</td></tr>
<tr><th>교색</th><td><span style="color:#103867">■ 중촌 네이비</span>, <span style="color:#F47920">■ 중촌 오렌지</span></td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (4년제)</td></tr>
<tr><th>법인</th><td>학교법인 중촌학원</td></tr>
<tr><th>설립자</th><td>중촌(中村) 이만식</td></tr>
<tr><th>개교</th><td>1992년 3월 5일</td></tr>
<tr><th>총장</th><td>제8대 <strong><a class="wiki-link" onclick="goToLink('소영한.html')">소영한</a></strong></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> 서구 청덕동 323</td></tr>
<tr><th>재학생</th><td>3,412명 <span class="wiki-gray">(2025년 기준)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="공식 홈페이지.html">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#eee] text-center p-2 font-bold cursor-pointer hover:bg-[#ddd]" onclick="showMsg('지도 기능 준비중입니다.')">
                    [ 지도 펼치기 ]
                </div>

        `;
    }
});