document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("국립덕북대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    국립덕북대학교<br/>
<span class="text-sm font-normal">Deokbuk National University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<!-- 엠블럼 이미지 -->
<div class="w-full flex justify-center py-4">
<img alt="국립덕북대학교 로고" src="이미지/덕북대_로고.webp"/> </div>
</div>
<table>
<tr><th>교훈</th><td>진리(眞理), 창조(創造), 봉사(奉仕)</td></tr>
<tr><th>개교</th><td>1946년 5월 15일</td></tr>
<tr><th>상징</th><td>백마(동물), 소나무(교목), 느티나무(교화)</td></tr>
<tr><th>교색</th><td>
<span style="display:inline-block; width:15px; height:15px; background:#002F6C; border:1px solid #ccc; vertical-align:middle;"></span> 덕북 네이비 (#002F6C)<br/>
<span style="display:inline-block; width:15px; height:15px; background:#8A1538; border:1px solid #ccc; vertical-align:middle; margin-top:2px;"></span> 덕북 버건디 (#8A1538)
                    </td></tr>
<tr><th>총장</th><td>제18대 지연경</td></tr>
<tr><th>주소</th><td>
<strong>빈주(본교):</strong> 덕빈북도 빈주시 가원구 수옥로 281 (수옥동)<br/>
<strong>효빈(이원화):</strong> 효빈광역시 청엽구 대학로 55 (등동)<br/>
<strong>서해(산학):</strong> 덕빈북도 서해시 신항만로 177<br/>
<strong>지미(연구):</strong> 덕빈북도 빈주시 가원구 지미동 첨단로 9<br/>
<strong>계성(글로컬):</strong> 덕빈북도 계성시 문화로 300<br/>
<strong>강주(산학융합):</strong> 덕빈북도 강주시 삼랑동 산학로 11
                    </td></tr>
<tr><th>재적생</th><td>학부생 약 24,000명 / 대학원생 약 5,000명</td></tr>
<tr><th>웹사이트</th><td><a class="wiki-link" href="https://www.DBNU.ac.kr" target="_blank">공식 홈페이지</a></td></tr>
</table>
<div class="w-full bg-[#f9f9f9] border-t border-b">
<div class="infobox-map" style="width: 100%; height: 250px; overflow: hidden; position: relative; display: block !important;">
<iframe src="https://binia1.github.io/mymap/?name=덕북대학교" style="width: 160%; height: 160%; border: none; 
                                       position: absolute; top: 0; left: 0;
                                       transform: scale(0.625); transform-origin: 0 0;">
</iframe>
</div>
<div style="padding: 5px; text-align: center; background: #eee; font-size: 0.8rem; color: #666;">
                        덕북대학교 캠퍼스 맵 (인터랙티브)
                    </div>
</div>

        `;
    }
});