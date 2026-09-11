document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("효빈대학교_이자캠퍼스-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    효빈대학교 이자캠퍼스<br/>
<span class="text-sm font-normal">Hyobin National University<br/>Ija Campus</span>
</div>
<div class="p-4 bg-white text-center border-b">
<img alt="효빈대학교 이자캠퍼스" class="w-full rounded" src="이미지/효빈대_이자캠퍼스_전경.webp"/>
<p class="text-sm text-gray-500 mt-2">이자캠퍼스 전경</p>
</div>
<table>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('안천구.html')">안천구</a> 원세로 22 (<a class="wiki-link" onclick="goToLink('신동.html')">신동</a>)</td></tr>
<tr><th>행정구역</th><td><a class="wiki-link" onclick="goToLink('안천구.html')">안천구</a> <a class="wiki-link" onclick="goToLink('이자1동.html')">이자1동</a></td></tr>
<tr><th>소속 단과대학</th><td>
<a class="wiki-link" onclick="goToLink('효빈대학교_농업대학.html')">농업대학</a><br/>
<a class="wiki-link" onclick="goToLink('효빈대학교_생명대학.html')">생명대학</a><br/>
<a class="wiki-link" onclick="goToLink('효빈대학교_디자인대학.html')">디자인대학</a><br/>
<a class="wiki-link" onclick="goToLink('효빈대학교_수의과대학.html')">수의과대학</a> (예과)
                    </td></tr>
<tr><th>주요 시설</th><td>
                        디자인센터, 스마트팜 연구동,<br/>실습 목장, 수의예과 강의동
                    </td></tr>
<tr><th>교통</th><td>
<span style="color: #6677CC; font-weight:bold;">●</span> <a class="wiki-link" onclick="goToLink('빈효선.html')">빈효선</a> <a class="wiki-link" onclick="goToLink('리의역.html')">리의역</a>
</td></tr>
</table>

        `;
    }
});