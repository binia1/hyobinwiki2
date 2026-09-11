document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("국립덕남대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    국립덕남대학교<br/>
<span class="text-sm font-normal">Deoknam National University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="덕남대 UI" class="w-48" src="이미지/국립덕남대학교_UI.webp"/>
</div>
</div>
<table>
<tr><th>교훈</th><td>개척(開拓), 지성(知性), 평화(平和)</td></tr>
<tr><th>개교</th><td>1947년 3월 1일</td></tr>
<tr><th>상징</th><td>청룡(동물), 동백나무(교목), 매화(교화)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#0055A4; border:1px solid #ccc; vertical-align:middle;"></span> 덕남 오션 블루 (#0055A4)<br/>
<span style="display:inline-block; width:15px; height:15px; background:#66C1E0; border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 덕남 스카이 (#66C1E0)
                    </td></tr>
<tr><th>총장</th><td>제19대 송기철</td></tr>
<tr><th>주소</th><td>
<strong>덕주(본교):</strong> 덕빈남도 덕주시 덕산구 대학로 123<br/>
<strong>방산(국방·산업):</strong> 덕빈남도 방산시 산업로 88<br/>
<strong>운진(해양·물류):</strong> 덕빈남도 운진군 운진읍 해양로 12<br/>
<strong>마진(역사·문화):</strong> 덕빈남도 마진시 읍성로 45
                    </td></tr>
<tr><th>재적생</th><td>학부생 약 22,000명 / 대학원생 약 4,800명</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.dnu.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=덕남대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        덕남대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});