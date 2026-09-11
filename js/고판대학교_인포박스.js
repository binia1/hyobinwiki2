document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("고판대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    고판대학교<br/>
<span class="text-sm font-normal">Gopan University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 로고 -->
<div class="w-full flex justify-center py-4">
<img alt="고판대학교 로고" src="이미지/고판대학교_로고_폐교.svg" style="width: 150px; display: inline-block; filter: grayscale(100%); opacity: 0.7;"/>
</div>
</div>
<table>
<tr><th>폐교일</th><td>2017년 2월 28일</td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (전문대학)<br/><del>범죄자 양성소</del></td></tr>
<tr><th>재단</th><td>학교법인 고판학원 (해산)</td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('서구_효빈광역시.html')">서구</a> 청덕로 283 (<a class="wiki-link" onclick="goToLink('청덕동.html')">청덕동</a>)<br/><span class="text-xs text-red-600 font-bold">* 철거됨 (아파트 재개발 예정)</span></td></tr>
<tr><th>주요 동문</th><td><strong><a class="wiki-link" onclick="goToLink('윤대환.html')">윤대환</a></strong> <del>(흑역사)</del></td></tr>
<tr><th>비고</th><td><strong>교육부 선정 재정지원제한대학</strong><br/>(2010~2016)<br/><span class="text-xs text-gray-500">사실상 영구제명</span></td></tr>
</table>

        `;
    }
});