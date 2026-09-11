document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("저소대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    저소대학교<br/>
<span class="text-sm font-normal">Jeoso University (JSU)</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="저소대학교 UI" class="w-48" src="이미지/저소대학교_UI.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>작지만 소중한(小中), 지성(知性)과 인성(人性)</td></tr>
<tr><th>개교</th><td>1978년 11월 5일</td></tr>
<tr><th>상징</th><td>홀스타인 젖소 <span class="text-xs text-gray-500">(비공식/실질적)</span>, 백합(교화), 목련(교목)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#F5F5F5; border:1px solid #ccc; vertical-align:middle;"></span> 밀키 화이트 (#F5F5F5)<br/>
<span style="display:inline-block; width:15px; height:15px; background:#222222; border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 스포티 블랙 (#222222)
                    </td></tr>
<tr><th>총장</th><td>제8대 우유한</td></tr>
<tr><th>주소</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('서해시.html')">서해시</a> 포구길 15 (포구동)</td></tr>
<tr><th>재적생</th><td>학부생 약 4,500명 / 대학원생 약 300명</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.jeoso.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=저소대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        저소대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});