document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("광연대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    광연대학교<br/>
<span class="text-sm font-normal">Gwangyeon University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="광연대학교 UI" class="w-48" src="이미지/광연대학교.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>기술보국(技術報國), 창조, 실용</td></tr>
<tr><th>슬로건</th><td>빛나는 기술, 세계를 잇다<br/><span class="text-xs font-normal">(Light the Future)</span></td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#0066CC; border:1px solid #ccc; vertical-align:middle;"></span> 광연 테크 블루 (#0066CC)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (종합대학)</td></tr>
<tr><th>법인</th><td>학교법인 광연공학원</td></tr>
<tr><th>설립자</th><td>양광연</td></tr>
<tr><th>개교</th><td>1971년 3월 10일</td></tr>
<tr><th>총장</th><td>제9대 <a class="wiki-link" onclick="goToLink('양연태.html')">양연태</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('탄성군.html')">탄성군</a> <a class="wiki-link" onclick="goToLink('흑택면.html')">흑택면</a> 흑택로 421 (흑택리)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>재적생</th><td>
<strong>학부:</strong> 11,200명<br/>
<strong>대학원:</strong> 1,500명 <span class="text-xs text-gray-500">(2025년)</span>
</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.gyu.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=광연대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        광연대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});