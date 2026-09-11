document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("전북대학교-infobox-container");
    if (container) {
        container.innerHTML = `

<div class="infobox-header">
                    전북대학교<br/>
<span class="text-sm font-normal">Jeonbuk National University</span>
</div>
<div class="p-4 bg-white text-center border-b">
<img alt="전북대학교 엠블럼" class="w-48 mx-auto" onerror="this.src='이미지/대체로고.webp';" src="이미지/전북대_로고.svg"/>
</div>
<table>
<tr><th>교시</th><td>자유(自由) · 정의(正義) · 창조(創造)</td></tr>
<tr><th>상징</th><td>
<strong>슬로건:</strong> 미래를 이끄는 전북대, Global Top 100<br/>
<strong>교수:</strong> 표범<br/>
<strong>교색:</strong> <span style="color:#540027">■</span> 전북대학교 파랑, <span style="color:#800080">■</span> 전북대학교 꽃자주
                    </td></tr>
<tr><th>국가</th><td>대한민국</td></tr>
<tr><th>분류</th><td>국립대학</td></tr>
<tr><th>지역</th><td>전북특별자치도</td></tr>
<tr><th>개교</th><td>1947년 10월 15일 (78주년)<br/><span class="text-xs text-gray-500">이리농과대학</span></td></tr>
<tr><th>총장</th><td>제19대 양오봉</td></tr>
<tr><th>대학병원</th><td>전북대학교병원<br/>군산전북대학교병원 (예정)<br/>전북대학교어린이병원</td></tr>
<tr><th>주소</th><td>
<strong>전주:</strong> 전북특별자치도 전주시 덕진구 백제대로 567 (금암동)<br/>
<strong>익산:</strong> 전북특별자치도 익산시 고봉로 79 (마동)<br/>
<strong>고창:</strong> 전북특별자치도 고창군 고창읍 태봉로 361 (도산리)<br/>
<strong>새만금:</strong> 전북특별자치도 군산시 산단남북로 177 (오식도동)<br/>
<strong>정읍:</strong> 전북특별자치도 정읍시 첨단로 9 (신정동)
                    </td></tr>
<tr><th>재학생</th><td>학부생 23,561명(2026년 02월 23일)[1]<br/>대학원생 석사 1,554명, 박사 957명, 통합 140명 (2023년 04월 01일)</td></tr>
<tr><th>교직원</th><td>교원 2,739명 / 직원 745명 (2023년 04월 01일)</td></tr>
<tr><th>기관평가</th><td>인증대학 (2026. 7. - 2032. 2.)</td></tr>
</table>

        `;
    }
});