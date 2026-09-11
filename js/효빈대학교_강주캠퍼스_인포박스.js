document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("효빈대학교_강주캠퍼스-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    효빈대학교 강주캠퍼스<br/>
<span class="text-sm font-normal">Hyobin National University<br/>Gangju Campus</span>
</div>
<div class="p-4 bg-white text-center border-b">
<img alt="효빈대학교 강주캠퍼스" class="w-full rounded" src="이미지/효빈대_강주캠퍼스_전경.webp"/>
<p class="text-sm text-gray-500 mt-2">강주캠퍼스 전경 <del>안개가 낀 날 찍었다면 사일런트 힐이었을 것이다</del></p>
</div>
<table>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('강주시.html')">강주시</a> 서류로 11 (<a class="wiki-link" onclick="goToLink('좌구동.html')">좌구동</a>)</td></tr>
<tr><th>행정구역</th><td><a class="wiki-link" onclick="goToLink('강주시.html')">강주시</a> <a class="wiki-link" onclick="goToLink('좌구동.html')">좌구동</a></td></tr>
<tr><th>소속 단과대학</th><td>
<a class="wiki-link" onclick="goToLink('효빈대학교_해양대학.html')">해양대학</a><br/>
<a class="wiki-link" onclick="goToLink('효빈대학교_환경산업대학.html')">환경산업대학</a>
</td></tr>
<tr><th>주요 시설</th><td>
                        강주병원, 해양시뮬레이션센터,<br/>실습선 부두, 강주마린센터, <del>횟집</del>
</td></tr>
<tr><th>교통</th><td>
<!-- 코레일 블루(#0054A6) 적용 -->
<span style="color: #0054A6; font-weight:bold;">●</span> <a class="wiki-link" onclick="goToLink('빈주광역철도.html')">빈주권 광역철도</a> <strong><a class="wiki-link" onclick="goToLink('강주항역.html')">강주항역</a></strong>
</td></tr>
</table>

        `;
    }
});