document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("국립덕북대학교 효빈캠퍼스-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    국립덕북대학교 효빈캠퍼스<br/>
<span class="text-sm font-normal">Deokbuk National University Hyobin Campus</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="덕북대학교 UI" class="w-48" src="이미지/덕북대_로고.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>진리, 창조, 봉사</td></tr>
<tr><th>슬로건</th><td>지역을 넘어 세계로, 덕북의 큰 걸음</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#002F6C; border:1px solid #ccc; vertical-align:middle;"></span> 덕북 네이비 (#002F6C)
                    </td></tr>
<tr><th>국가</th><td><a class="wiki-link" onclick="goToLink('대한민국.html')">대한민국</a></td></tr>
<tr><th>분류</th><td><a class="wiki-link" onclick="goToLink('국립대학.html')">국립대학</a> (이원화 캠퍼스)</td></tr>
<tr><th>총장</th><td>제18대 <a class="wiki-link" onclick="goToLink('지연경.html')">지연경</a></td></tr>
<tr><th>주소</th><td>
<strong>효빈캠퍼스</strong><br/>
<a class="wiki-link" onclick="goToLink('효빈광역시.html')">효빈광역시</a> <a class="wiki-link" onclick="goToLink('청엽구.html')">청엽구</a> 대학로 55 (<a class="wiki-link" onclick="goToLink('등동.html')">등동</a>)<a class="wiki-fn" href="#fn-1" id="rfn-1">[1]</a>
</td></tr>
<tr><th>본교(빈주)</th><td><a class="wiki-link" onclick="goToLink('덕빈북도.html')">덕빈북도</a> <a class="wiki-link" onclick="goToLink('빈주시.html')">빈주시</a> 가원구 수옥로 281 (수옥동)</td></tr>
<tr><th>재적생</th><td>
<strong>효빈캠퍼스 학부:</strong> 3,200명 <span class="text-xs text-gray-500">(2025년)</span>
</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.DBNU.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=덕북대학교_효빈캠퍼스" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        덕북대학교_효빈캠퍼스 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});