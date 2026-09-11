document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("국립천주대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    국립천주대학교<br/>
<span class="text-sm font-normal">Cheonju National University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="천주대 UI" class="w-48" src="이미지/국립천주대학교.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>진리와 정의, 지역과 세계</td></tr>
<tr><th>개교</th><td>1952년 10월 24일</td></tr>
<tr><th>상징</th><td>독수리(동물), 은행나무(교목), 목련(교화)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-main); border:1px solid #ccc; vertical-align:middle;"></span> 천주 네이비 (#003366)<br/>
<span style="display:inline-block; width:15px; height:15px; background:var(--wiki-sub); border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 천주 골드 (#D4AF37)
                    </td></tr>
<tr><th>소재지</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('천주시.html')">천주시</a> 천성구 천성동 천주대로 500</td></tr>
<tr><th>재적생</th><td>학부생 약 18,000명 / 대학원생 약 3,500명</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.cjnu.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#eee] text-center p-2 font-bold cursor-pointer hover:bg-[#ddd]" onclick="showMsg('지도 기능 준비중')">
                    [ 지도 펼치기 ]
                </div>

        `;
    }
});