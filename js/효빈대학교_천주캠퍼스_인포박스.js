document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("효빈대학교_천주캠퍼스-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    효빈대학교 천주캠퍼스<br/>
<span class="text-sm font-normal">Hyobin National University<br/>Cheonju Campus</span>
</div>
<div class="p-4 bg-white text-center border-b">
<img alt="효빈대학교 천주캠퍼스" class="w-full rounded" src="이미지/효빈대_천주캠퍼스_전경.webp"/>
<p class="text-sm text-gray-500 mt-2">천주캠퍼스 전경 <del>아이돌 콘서트장 아님</del></p>
</div>
<table>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('천주시.html')">천주시</a> <a class="wiki-link" onclick="goToLink('궁하구.html')">궁하구</a> 세동로 13 (<a class="wiki-link" onclick="goToLink('궁하1동.html')">궁하1동</a>)</td></tr>
<tr><th>행정구역</th><td><a class="wiki-link" onclick="goToLink('천주시.html')">천주시</a> <a class="wiki-link" onclick="goToLink('궁하구.html')">궁하구</a></td></tr>
<tr><th>소속 단과대학</th><td>
<a class="wiki-link" onclick="goToLink('효빈대학교_응용예술대학.html')">응용예술대학</a><br/>
<a class="wiki-link" onclick="goToLink('효빈대학교_응용과학대학.html')">응용과학대학</a><br/>
<a class="wiki-link" onclick="goToLink('효빈대학교_융합학부.html')">융합학부</a> (예술융합창작전공)
                    </td></tr>
<tr><th>주요 시설</th><td>
                        천주병원, 아트테크센터, 궁하 아트홀,<br/>웹툰창작실습실, 특수장비정비동
                    </td></tr>
<tr><th>교통</th><td>
<span style="color: #6677CC; font-weight:bold;">●</span> <a class="wiki-link" onclick="goToLink('빈효선.html')">빈효선</a> <strong><a class="wiki-link" onclick="goToLink('궁하역.html')">궁하역</a></strong>
</td></tr>
</table>

        `;
    }
});