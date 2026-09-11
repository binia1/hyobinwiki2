document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("효빈대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    효빈대학교<br/>
<span class="text-sm font-normal">Hyobin National University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 로고 -->
<div class="w-full flex justify-center py-4">
<img alt="효빈대학교 엠블럼" class="w-48" src="이미지/효빈대_로고.webp"/>
</div>
</div>
<table>
<tr><th>교시</th><td>불굴(不屈) · 혁신(革新) · 개천(改天)</td></tr>
<tr><th>상징</th><td>
<strong>슬로건:</strong> 어려움에 굴하지 않는 불굴의 효빈대<br/>
<strong>교수:</strong> <a class="wiki-link" onclick="goToLink('고양이.html')">고양이</a><br/>
<strong>교색:</strong> <span style="color:#3344aa">■</span> 효빈대 파랑<br/> <span style="color:#99dd88; background:#333; padding:0 2px;">■</span> 효빈대 샛닢초록
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('국립대학.html')">국립대학</a></td></tr>
<tr><th>지역</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a>, <a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a></td></tr>
<tr><th>개교</th><td>1925년 9월 14일</td></tr>
<tr><th>총장</th><td>제26대 <a class="wiki-link" onclick="goToLink('민부선.html')">민부선</a></td></tr>
<tr><th>대학병원</th><td>
<a class="wiki-link" onclick="goToLink('효빈대학교병원.html')">효빈대학교병원</a><br/>
                        천주병원 · 중구분원 · 강주병원 · 약산병원(예정)
                    </td></tr>
<tr><th>주소</th><td>
<strong>당선(본):</strong> 효빈광역시 서구 대학로 1<br/>
<strong>이자:</strong> 효빈광역시 안천구 원세로 22<br/>
<strong>천주:</strong> 덕빈북도 천주시 궁하구 세동로 13<br/>
<strong>낭원:</strong> 덕빈북도 낭원군 전포읍 도경로 213<br/>
<strong>강주:</strong> 덕빈북도 강주시 서류로 11
                    </td></tr>
<tr><th>재학생</th><td>
<strong>학부:</strong> 26,321명<br/>
<strong>대학원:</strong> 3,081명 (석박사 통합)
                    </td></tr>
<tr><th>교직원</th><td>
<strong>교원:</strong> 2,939명<br/>
<strong>직원:</strong> 1,045명
                    </td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="공식 홈페이지.html" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=효빈대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        효빈대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});