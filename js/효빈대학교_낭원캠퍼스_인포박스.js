document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("효빈대학교_낭원캠퍼스-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    효빈대학교 낭원캠퍼스<br/>
<span class="text-sm font-normal">Hyobin National University<br/>Nangwon Campus</span>
</div>
<div class="p-4 bg-white text-center border-b">
<img alt="효빈대학교 낭원캠퍼스" class="w-full rounded" src="이미지/효빈대_낭원캠퍼스_전경.webp"/>
<p class="text-sm text-gray-500 mt-2">낭원캠퍼스 전경 <del>물류센터 아님</del></p>
</div>
<table>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('낭원군.html')">낭원군</a> <a class="wiki-link" onclick="goToLink('전포읍.html')">전포읍</a> 도경로 213 (<a class="wiki-link" onclick="goToLink('전포리.html')">전포리</a>)</td></tr>
<tr><th>행정구역</th><td><a class="wiki-link" onclick="goToLink('낭원군.html')">낭원군</a> <a class="wiki-link" onclick="goToLink('전포읍.html')">전포읍</a></td></tr>
<tr><th>소속 학부</th><td>
<a class="wiki-link" onclick="goToLink('효빈대학교_융합학부.html')">융합학부</a><br/>
<a class="wiki-link" onclick="goToLink('효빈대학교_지역개발학부.html')">지역개발학부</a> (본부 직속)
                    </td></tr>
<tr><th>주요 시설</th><td>
                        융합테크센터, 반도체공정실습동,<br/>메타버스 스튜디오, 낭원산학협력관
                    </td></tr>
<tr><th>교통</th><td>
<a class="wiki-link" onclick="goToLink('덕빈선.html')">덕빈선</a> <strong><a class="wiki-link" onclick="goToLink('전포역.html')">전포역</a></strong><br/>
<a class="wiki-link" onclick="goToLink('전포시외버스터미널.html')">전포시외버스터미널</a>
</td></tr>
</table>

        `;
    }
});