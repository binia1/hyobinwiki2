document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("효빈보건대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    효빈보건대학교<br/>
<span class="text-sm font-normal text-teal-100 tracking-wider">Hyobin Health University</span>
</div>
<div class="p-6 bg-white text-center border-b flex justify-center items-center">
<!-- 엠블럼을 예쁜 아이콘으로 대체 (실제 이미지 없을 경우 대비) -->
<div class="w-32 h-32 rounded-full border-4 border-[#00C7A9] flex items-center justify-center bg-[#f0fdfa] text-[#00C7A9] shadow-inner">
<svg class="h-16 w-16" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
</svg>
</div>
</div>
<table>
<tr><th>교훈</th><td>성실, 박애, 봉사</td></tr>
<tr><th>슬로건</th><td>생명을 돌보는 손길, 효빈보건대학교</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#00C7A9; border:1px solid #ccc; vertical-align:middle; border-radius:2px;"></span> 효빈 헬스 민트 (#00C7A9)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('전문대학.html')">전문대학</a> (3/4년제)</td></tr>
<tr><th>법인</th><td>학교법인 효빈보건학원</td></tr>
<tr><th>설립</th><td>1975년 3월 15일</td></tr>
<tr><th>총장</th><td>제8대 <a class="wiki-link" onclick="goToLink('오고선.html')">오고선</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('남구.html')">남구</a> 어간로 22 (<a class="wiki-link" onclick="goToLink('어간동.html')">어간동</a>)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>재적생</th><td>4,800명 <span class="text-xs text-gray-500">(2025년 기준)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link text-blue-600" href="공식 홈페이지.html">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#eee] border-t p-2 text-center text-xs text-gray-600 font-bold">
                    캠퍼스 맵 (인터랙티브 지원 예정)
                </div>

        `;
    }
});