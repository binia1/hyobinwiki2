document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("효빈외국어대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    효빈외국어대학교<br/>
<span class="text-sm font-normal">Hyobin University of Foreign Studies</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="효빈외국어대학교 UI" class="w-48" src="이미지/효빈외대.svg"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>세계로, 미래로, 하나로</td></tr>
<tr><th>슬로건</th><td>언어 그 이상의 가치, 글로벌 취업의 지름길</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#0047A0; border:1px solid #ccc; vertical-align:middle;"></span> 글로벌 아주르 (#0047A0)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('사립대학.html')">사립대학</a> (외국어 특성화)</td></tr>
<tr><th>법인</th><td>학교법인 효빈글로벌학원</td></tr>
<tr><th>설립자</th><td>여해동</td></tr>
<tr><th>개교</th><td>1997년 3월 10일</td></tr>
<tr><th>총장</th><td>제5대 <a class="wiki-link" onclick="goToLink('여서경.html')">여서경</a></td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('안천구.html')">안천구</a> 제택로 218 (<a class="wiki-link" onclick="goToLink('제택동.html')">제택동</a>)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a></td></tr>
<tr><th>재적생</th><td>
<strong>학부:</strong> 6,200명<br/>
<strong>대학원:</strong> 100명 <span class="text-xs text-gray-500">(2025년)</span>
</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.hufs.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=효빈외국어대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        효빈외국어대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});