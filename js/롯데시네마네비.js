document.addEventListener("DOMContentLoaded", function() {
    const lotteNavHTML = `
    <div class="lotte-nav-frame">
        <div class="lotte-nav-header">
            <div class="flex items-center justify-center gap-2">
                <img onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lotte_Cinema_logo.svg/300px-Lotte_Cinema_logo.svg.webp'" src="이미지/롯데시네마_로고_영문_백색.svg" style="height: 20px;"/>
                <span class="font-bold text-lg">전국 지점 현황</span>
            </div>
        </div>
        <div class="lotte-nav-content">
            <!-- 효빈/덕북/덕남 -->
            <details class="lotte-details" open="">
                <summary>효빈 / 덕북 / 덕남</summary>
                <div class="lotte-list-box">
                    <span style="font-weight:bold; color:#DA291C;">[효빈]</span>
                    <a class="lotte-branch-link" href="롯데시네마_효빈.html">효빈</a> · 
                    <a class="lotte-branch-link" href="롯데시네마_과진.html">과진(롯데마트)</a> · 
                    <a class="lotte-branch-link" href="롯데시네마_평당.html">평당</a> · 
                    <a class="lotte-branch-link" href="롯데시네마_진희.html">진희(롯데백화점)</a> · 
                    <a class="lotte-branch-link" href="롯데시네마_사노.html">사노</a> · 
                    <a class="lotte-branch-link" href="롯데시네마_도변.html">도변</a> · 
                    <a class="lotte-branch-link" href="롯데시네마_이자.html">이자</a> · 
                    <a class="lotte-branch-link" href="롯데시네마_우전.html">우전</a> · 
                    <a class="lotte-branch-link" href="롯데시네마_창전.html">창전</a>
                    <br/><span style="font-weight:bold; color:#DA291C;">[덕북]</span>
                    <a class="lotte-branch-link" href="빈주.html">빈주</a> · 
                    <a class="lotte-branch-link" href="빈주상만.html">빈주상만</a> · 
                    <a class="lotte-branch-link" href="약산.html">약산</a> · 
                    <a class="lotte-branch-link" href="빈주장기.html">빈주장기</a> · 
                    <a class="lotte-branch-link" href="서해.html">서해</a> · 
                    <a class="lotte-branch-link" href="서해방부.html">서해방부</a> · 
                    <a class="lotte-branch-link" href="천주궁하.html">천주궁하</a> · 
                    <a class="lotte-branch-link" href="천주서팔.html">천주서팔</a> · 
                    <a class="lotte-branch-link" href="군천.html">군천</a> · 
                    <a class="lotte-branch-link" href="서진.html">서진</a> · 
                    <a class="lotte-branch-link" href="강주.html">강주</a> · 
                    <a class="lotte-branch-link" href="낭원.html">낭원</a>
                    <br/><span style="font-weight:bold; color:#DA291C;">[덕남]</span>
                    <a class="lotte-branch-link" href="덕주조전.html">덕주조전</a> · 
                    <a class="lotte-branch-link" href="덕주덕산.html">덕주덕산</a> · 
                    <a class="lotte-branch-link" href="방산.html">방산</a> · 
                    <a class="lotte-branch-link" href="매성.html">매성</a> · 
                    <a class="lotte-branch-link" href="분주.html">분주</a> · 
                    <a class="lotte-branch-link" href="석창.html">석창</a>
                </div>
            </details>
            <!-- 서울 -->
            <details class="lotte-details">
                <summary>서울</summary>
                <div class="lotte-list-box">
                    <a class="lotte-branch-link" href="가산디지털.html">가산디지털</a> · <a class="lotte-branch-link" href="가양.html">가양</a> · <a class="lotte-branch-link" href="강동.html">강동</a> · <a class="lotte-branch-link" href="건대입구.html">건대입구</a> · <a class="lotte-branch-link" href="김포공항.html">김포공항</a> · <a class="lotte-branch-link" href="노원.html">노원</a> · <a class="lotte-branch-link" href="도곡.html">도곡</a> · <a class="lotte-branch-link" href="독산.html">독산</a> · <a class="lotte-branch-link" href="서울대입구.html">서울대입구</a> · <a class="lotte-branch-link" href="수락산.html">수락산</a> · <a class="lotte-branch-link" href="수유.html">수유</a> · <a class="lotte-branch-link" href="신대방.html">신대방</a> · <a class="lotte-branch-link" href="신도림.html">신도림</a> · <a class="lotte-branch-link" href="신림.html">신림</a> · <a class="lotte-branch-link" href="에비뉴엘(명동).html">에비뉴엘(명동)</a> · <a class="lotte-branch-link" href="영등포.html">영등포</a> · <a class="lotte-branch-link" href="용산.html">용산</a> · <a class="lotte-branch-link" href="월드타워.html">월드타워</a> · <a class="lotte-branch-link" href="은평.html">은평</a> · <a class="lotte-branch-link" href="중랑.html">중랑</a> · <a class="lotte-branch-link" href="청량리.html">청량리</a> · <a class="lotte-branch-link" href="합정.html">합정</a> · <a class="lotte-branch-link" href="홍대입구.html">홍대입구</a>
                </div>
            </details>
            <!-- 경기/인천 -->
            <details class="lotte-details">
                <summary>경기 / 인천</summary>
                <div class="lotte-list-box">
                    <a class="lotte-branch-link" href="광교.html">광교</a> · <a class="lotte-branch-link" href="광명.html">광명</a> · <a class="lotte-branch-link" href="광명아울렛.html">광명아울렛</a> · <a class="lotte-branch-link" href="광주터미널.html">광주터미널</a> · <a class="lotte-branch-link" href="구리아울렛.html">구리아울렛</a> · <a class="lotte-branch-link" href="동탄.html">동탄</a> · <a class="lotte-branch-link" href="라페스타.html">라페스타</a> · <a class="lotte-branch-link" href="마석.html">마석</a> · <a class="lotte-branch-link" href="병점.html">병점</a> · <a class="lotte-branch-link" href="별내.html">별내</a> · <a class="lotte-branch-link" href="부천.html">부천</a> · <a class="lotte-branch-link" href="부평.html">부평</a> · <a class="lotte-branch-link" href="부평갈산.html">부평갈산</a> · <a class="lotte-branch-link" href="부평역사.html">부평역사</a> · <a class="lotte-branch-link" href="북수원.html">북수원</a> · <a class="lotte-branch-link" href="산본피트인.html">산본피트인</a> · <a class="lotte-branch-link" href="서수원.html">서수원</a> · <a class="lotte-branch-link" href="성남중앙.html">성남중앙</a> · <a class="lotte-branch-link" href="센트럴락.html">센트럴락</a> · <a class="lotte-branch-link" href="송도.html">송도</a> · <a class="lotte-branch-link" href="송탄.html">송탄</a> · <a class="lotte-branch-link" href="수원.html">수원</a> · <a class="lotte-branch-link" href="수지.html">수지</a> · <a class="lotte-branch-link" href="시화.html">시화</a> · <a class="lotte-branch-link" href="시흥장현.html">시흥장현</a> · <a class="lotte-branch-link" href="안산.html">안산</a> · <a class="lotte-branch-link" href="안산고잔.html">안산고잔</a> · <a class="lotte-branch-link" href="안성.html">안성</a> · <a class="lotte-branch-link" href="안양.html">안양</a> · <a class="lotte-branch-link" href="안양일번가.html">안양일번가</a> · <a class="lotte-branch-link" href="용인기흥.html">용인기흥</a> · <a class="lotte-branch-link" href="용인역북.html">용인역북</a> · <a class="lotte-branch-link" href="위례.html">위례</a> · <a class="lotte-branch-link" href="의정부민락.html">의정부민락</a> · <a class="lotte-branch-link" href="인덕원.html">인덕원</a> · <a class="lotte-branch-link" href="인천아시아드.html">인천아시아드</a> · <a class="lotte-branch-link" href="인천터미널.html">인천터미널</a> · <a class="lotte-branch-link" href="진접.html">진접</a> · <a class="lotte-branch-link" href="파주롯데아울렛.html">파주롯데아울렛</a> · <a class="lotte-branch-link" href="파주운정.html">파주운정</a> · <a class="lotte-branch-link" href="파주야당.html">파주야당</a> · <a class="lotte-branch-link" href="판교.html">판교</a> · <a class="lotte-branch-link" href="평촌.html">평촌</a> · <a class="lotte-branch-link" href="하남미사.html">하남미사</a> · <a class="lotte-branch-link" href="향남.html">향남</a>
                </div>
            </details>
            <!-- 충청/대전 -->
            <details class="lotte-details">
                <summary>충청 / 대전</summary>
                <div class="lotte-list-box">
                    <a class="lotte-branch-link" href="당진.html">당진</a> · <a class="lotte-branch-link" href="대전.html">대전</a> · <a class="lotte-branch-link" href="대전관저.html">대전관저</a> · <a class="lotte-branch-link" href="대전센트럴.html">대전센트럴</a> · <a class="lotte-branch-link" href="서산.html">서산</a> · <a class="lotte-branch-link" href="서청주.html">서청주</a> · <a class="lotte-branch-link" href="아산터미널.html">아산터미널</a> · <a class="lotte-branch-link" href="오송.html">오송</a> · <a class="lotte-branch-link" href="천안불당.html">천안불당</a> · <a class="lotte-branch-link" href="천안청당.html">천안청당</a> · <a class="lotte-branch-link" href="청주용암.html">청주용암</a> · <a class="lotte-branch-link" href="충주.html">충주</a>
                </div>
            </details>
            <!-- 전라/광주 -->
            <details class="lotte-details">
                <summary>전라 / 광주</summary>
                <div class="lotte-list-box">
                    <a class="lotte-branch-link" href="광주.html">광주</a> · <a class="lotte-branch-link" href="광주광산.html">광주광산</a> · <a class="lotte-branch-link" href="광주첨단.html">광주첨단</a> · <a class="lotte-branch-link" href="군산나운.html">군산나운</a> · <a class="lotte-branch-link" href="군산몰.html">군산몰</a> · <a class="lotte-branch-link" href="수완.html">수완</a> · <a class="lotte-branch-link" href="익산모현.html">익산모현</a> · <a class="lotte-branch-link" href="전주.html">전주</a> · <a class="lotte-branch-link" href="전주송천.html">전주송천</a> · <a class="lotte-branch-link" href="전주평화.html">전주평화</a> · <a class="lotte-branch-link" href="충장로.html">충장로</a>
                </div>
            </details>
            <!-- 경북/대구 -->
            <details class="lotte-details">
                <summary>경북 / 대구</summary>
                <div class="lotte-list-box">
                    <a class="lotte-branch-link" href="경주황성.html">경주황성</a> · <a class="lotte-branch-link" href="구미공단.html">구미공단</a> · <a class="lotte-branch-link" href="대구광장.html">대구광장</a> · <a class="lotte-branch-link" href="대구율하.html">대구율하</a> · <a class="lotte-branch-link" href="대구현풍.html">대구현풍</a> · <a class="lotte-branch-link" href="동성로.html">동성로</a> · <a class="lotte-branch-link" href="상인.html">상인</a> · <a class="lotte-branch-link" href="상주.html">상주</a> · <a class="lotte-branch-link" href="성서.html">성서</a> · <a class="lotte-branch-link" href="영주.html">영주</a> · <a class="lotte-branch-link" href="영천.html">영천</a> · <a class="lotte-branch-link" href="포항.html">포항</a> · <a class="lotte-branch-link" href="구미센트럴.html">구미센트럴</a> · <a class="lotte-branch-link" href="안동.html">안동</a> · <a class="lotte-branch-link" href="칠곡.html">칠곡</a>
                </div>
            </details>
            <!-- 경남/부산/울산 -->
            <details class="lotte-details">
                <summary>경남 / 부산 / 울산</summary>
                <div class="lotte-list-box">
                    <a class="lotte-branch-link" href="거창.html">거창</a> · <a class="lotte-branch-link" href="광복.html">광복</a> · <a class="lotte-branch-link" href="김해부원.html">김해부원</a> · <a class="lotte-branch-link" href="김해아울렛.html">김해아울렛</a> · <a class="lotte-branch-link" href="동래.html">동래</a> · <a class="lotte-branch-link" href="동부산아울렛.html">동부산아울렛</a> · <a class="lotte-branch-link" href="마산.html">마산</a> · <a class="lotte-branch-link" href="부산명지.html">부산명지</a> · <a class="lotte-branch-link" href="부산본점.html">부산본점</a> · <a class="lotte-branch-link" href="부산장림.html">부산장림</a> · <a class="lotte-branch-link" href="사천.html">사천</a> · <a class="lotte-branch-link" href="센텀시티.html">센텀시티</a> · <a class="lotte-branch-link" href="양산물금.html">양산물금</a> · <a class="lotte-branch-link" href="엠비씨네.html">엠비씨네</a> · <a class="lotte-branch-link" href="오투.html">오투</a> · <a class="lotte-branch-link" href="울산.html">울산</a> · <a class="lotte-branch-link" href="울산성남.html">울산성남</a> · <a class="lotte-branch-link" href="진주혁신.html">진주혁신</a> · <a class="lotte-branch-link" href="진해.html">진해</a> · <a class="lotte-branch-link" href="창원.html">창원</a> · <a class="lotte-branch-link" href="통영.html">통영</a> · <a class="lotte-branch-link" href="경남대.html">경남대</a> · <a class="lotte-branch-link" href="해운대.html">해운대</a>
                </div>
            </details>
            <!-- 강원/제주 -->
            <details class="lotte-details">
                <summary>강원 / 제주</summary>
                <div class="lotte-list-box">
                    <a class="lotte-branch-link" href="강릉.html">강릉</a> · <a class="lotte-branch-link" href="남원주.html">남원주</a> · <a class="lotte-branch-link" href="동해.html">동해</a> · <a class="lotte-branch-link" href="속초.html">속초</a> · <a class="lotte-branch-link" href="원주무실.html">원주무실</a> · <a class="lotte-branch-link" href="춘천.html">춘천</a> · <a class="lotte-branch-link" href="서귀포.html">서귀포</a> · <a class="lotte-branch-link" href="제주연동.html">제주연동</a>
                </div>
            </details>
        </div>
    </div>
    `;

    const container = document.querySelector(".lotte-nav-container");
    if (container) {
        container.innerHTML = lotteNavHTML;
    }
});