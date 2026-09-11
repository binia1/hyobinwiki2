document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("삽곡대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    삽곡대학교<br/>
<span class="text-sm font-normal">Sapgok University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="삽곡대학교 UI" class="w-48" src="이미지/삽곡대학교.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>배움, 즐거움, 어울림</td></tr>
<tr><th>슬로건</th><td>인생 2막, 삽곡에서 다시 시작하다</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#FF7F32; border:1px solid #ccc; vertical-align:middle;"></span> 카논 메리골드 (#FF7F32)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('전문대학.html')">전문대학</a> (평생직업교육대학)</td></tr>
<tr><th>법인</th><td>학교법인 삽곡학원</td></tr>
<tr><th>설립</th><td>1988년 3월 10일</td></tr>
<tr><th>총장</th><td>제5대 <a class="wiki-link" onclick="goToLink('안고성.html')">안고성</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('탄성군.html')">탄성군</a> <a class="wiki-link" onclick="goToLink('서목읍.html')">서목읍</a> 입리로 23 (<a class="wiki-link" onclick="goToLink('입리.html')">입리</a>)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>재적생</th><td>2,100명 <span class="text-xs text-gray-500">(2025년)</span></td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.sapgok.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=삽곡대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        삽곡대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});