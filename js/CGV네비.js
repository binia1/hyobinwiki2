document.addEventListener("DOMContentLoaded", function() {
    const cgvNavHTML = `
    <div class="cgv-nav-frame">
        <div class="cgv-nav-header">
            <div class="flex items-center justify-center gap-2">
                <img onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/CGV_logo.svg/300px-CGV_logo.svg.webp'" src="이미지/CGV_로고_화이트.svg" style="height: 20px;"/>
                <span class="font-bold text-lg">전국 지점 현황</span>
            </div>
        </div>
        <div class="cgv-nav-content">
            <!-- 효빈/덕북/덕남 -->
            <details class="cgv-details" open="">
                <summary>효빈 / 덕북 / 덕남</summary>
                <div class="cgv-list-box">
                    <span style="font-weight:bold; color:#DA291C;">[효빈]</span>
                    <a class="cgv-branch-link" href="CGV_고송.html">고송</a> · 
                    <a class="cgv-branch-link" href="CGV_이자.html">이자</a> · 
                    <a class="cgv-branch-link" href="CGV_평당.html">평당</a> · 
                    <a class="cgv-branch-link" href="CGV_도변.html">도변</a> · 
                    <a class="cgv-branch-link" href="CGV_효빈대.html">효빈대</a> · 
                    <a class="cgv-branch-link" href="CGV_효빈역.html">효빈역</a> · 
                    <a class="cgv-branch-link" href="CGV_덕현.html">덕현</a> · 
                    <a class="cgv-branch-link" href="CGV_효빈.html">효빈</a> · 
                    <a class="cgv-branch-link" href="CGV_청엽.html">청엽</a>
                    <br/><span style="font-weight:bold; color:#DA291C;">[덕북]</span>
                    <a class="cgv-branch-link" href="빈주.html">빈주</a> · 
                    <a class="cgv-branch-link" href="빈주동신.html">빈주동신</a> · 
                    <a class="cgv-branch-link" href="빈주천조.html">빈주천조</a> · 
                    <a class="cgv-branch-link" href="빈주장기.html">빈주장기</a> · 
                    <a class="cgv-branch-link" href="계성.html">계성</a> · 
                    <a class="cgv-branch-link" href="서해.html">서해</a> · 
                    <a class="cgv-branch-link" href="서해천로.html">서해천로</a> · 
                    <a class="cgv-branch-link" href="천주.html">천주</a> · 
                    <a class="cgv-branch-link" href="천주대뢰.html">천주대뢰</a> · 
                    <a class="cgv-branch-link" href="천주아이.html">천주아이</a> · 
                    <a class="cgv-branch-link" href="강주.html">강주</a> · 
                    <a class="cgv-branch-link" href="부진.html">부진</a> · 
                    <a class="cgv-branch-link" href="낭원.html">낭원</a> · 
                    <a class="cgv-branch-link" href="기도염곡.html">기도염곡</a>
                    <br/><span style="font-weight:bold; color:#DA291C;">[덕남]</span>
                    <a class="cgv-branch-link" href="덕주조전.html">덕주조전</a> · 
                    <a class="cgv-branch-link" href="덕주.html">덕주</a> · 
                    <a class="cgv-branch-link" href="방산.html">방산</a> · 
                    <a class="cgv-branch-link" href="낙주.html">낙주</a> · 
                    <a class="cgv-branch-link" href="마진.html">마진</a> · 
                    <a class="cgv-branch-link" href="매성.html">매성</a> · 
                    <a class="cgv-branch-link" href="운진.html">운진</a>
                </div>
            </details>
            <!-- 서울 -->
            <details class="cgv-details">
                <summary>서울</summary>
                <div class="cgv-list-box">
                    <a class="cgv-branch-link" href="강남.html">강남</a> · <a class="cgv-branch-link" href="강변.html">강변</a> · <a class="cgv-branch-link" href="건대입구.html">건대입구</a> · <a class="cgv-branch-link" href="구로.html">구로</a> · <a class="cgv-branch-link" href="대학로.html">대학로</a> · <a class="cgv-branch-link" href="동대문.html">동대문</a> · <a class="cgv-branch-link" href="등촌.html">등촌</a> · <a class="cgv-branch-link" href="명동.html">명동</a> · <a class="cgv-branch-link" href="명동역 씨네라이브러리.html">명동역 씨네라이브러리</a> · <a class="cgv-branch-link" href="목동.html">목동</a> · <a class="cgv-branch-link" href="미아.html">미아</a> · <a class="cgv-branch-link" href="불광.html">불광</a> · <a class="cgv-branch-link" href="상봉.html">상봉</a> · <a class="cgv-branch-link" href="성신여대입구.html">성신여대입구</a> · <a class="cgv-branch-link" href="송파.html">송파</a> · <a class="cgv-branch-link" href="수유.html">수유</a> · <a class="cgv-branch-link" href="신촌아트레온.html">신촌아트레온</a> · <a class="cgv-branch-link" href="압구정.html">압구정</a> · <a class="cgv-branch-link" href="여의도.html">여의도</a> · <a class="cgv-branch-link" href="연남.html">연남</a> · <a class="cgv-branch-link" href="영등포.html">영등포</a> · <a class="cgv-branch-link" href="왕십리.html">왕십리</a> · <a class="cgv-branch-link" href="용산아이파크몰.html">용산아이파크몰</a> · <a class="cgv-branch-link" href="중계.html">중계</a> · <a class="cgv-branch-link" href="천호.html">천호</a> · <a class="cgv-branch-link" href="청담씨네시티.html">청담씨네시티</a> · <a class="cgv-branch-link" href="피카디리1958.html">피카디리1958</a> · <a class="cgv-branch-link" href="홍대.html">홍대</a>
                </div>
            </details>
            <!-- 경기 -->
            <details class="cgv-details">
                <summary>경기</summary>
                <div class="cgv-list-box">
                    <a class="cgv-branch-link" href="경기광주.html">경기광주</a> · <a class="cgv-branch-link" href="고양행신.html">고양행신</a> · <a class="cgv-branch-link" href="광교.html">광교</a> · <a class="cgv-branch-link" href="광교상현.html">광교상현</a> · <a class="cgv-branch-link" href="구리.html">구리</a> · <a class="cgv-branch-link" href="김포운양.html">김포운양</a> · <a class="cgv-branch-link" href="김포한강.html">김포한강</a> · <a class="cgv-branch-link" href="동수원.html">동수원</a> · <a class="cgv-branch-link" href="동탄.html">동탄</a> · <a class="cgv-branch-link" href="동탄역.html">동탄역</a> · <a class="cgv-branch-link" href="동탄호수공원.html">동탄호수공원</a> · <a class="cgv-branch-link" href="배곧.html">배곧</a> · <a class="cgv-branch-link" href="범계.html">범계</a> · <a class="cgv-branch-link" href="부천.html">부천</a> · <a class="cgv-branch-link" href="부천역.html">부천역</a> · <a class="cgv-branch-link" href="분당.html">분당</a> · <a class="cgv-branch-link" href="산본.html">산본</a> · <a class="cgv-branch-link" href="서현.html">서현</a> · <a class="cgv-branch-link" href="성남모란.html">성남모란</a> · <a class="cgv-branch-link" href="소풍.html">소풍</a> · <a class="cgv-branch-link" href="수원.html">수원</a><del>(폐점)</del> · <a class="cgv-branch-link" href="스타필드시티위례.html">스타필드시티위례</a> · <a class="cgv-branch-link" href="신세계경기.html">신세계경기</a> · <a class="cgv-branch-link" href="안산.html">안산</a> · <a class="cgv-branch-link" href="안성.html">안성</a> · <a class="cgv-branch-link" href="야탑.html">야탑</a> · <a class="cgv-branch-link" href="양주옥정.html">양주옥정</a> · <a class="cgv-branch-link" href="오리.html">오리</a> · <a class="cgv-branch-link" href="오산.html">오산</a> · <a class="cgv-branch-link" href="용인.html">용인</a> · <a class="cgv-branch-link" href="의정부.html">의정부</a> · <a class="cgv-branch-link" href="의정부태흥.html">의정부태흥</a> · <a class="cgv-branch-link" href="이천.html">이천</a> · <a class="cgv-branch-link" href="일산.html">일산</a> · <a class="cgv-branch-link" href="죽전.html">죽전</a> · <a class="cgv-branch-link" href="파주문산.html">파주문산</a> · <a class="cgv-branch-link" href="파주야당.html">파주야당</a> · <a class="cgv-branch-link" href="판교.html">판교</a> · <a class="cgv-branch-link" href="평촌.html">평촌</a> · <a class="cgv-branch-link" href="평택.html">평택</a> · <a class="cgv-branch-link" href="평택소사.html">평택소사</a> · <a class="cgv-branch-link" href="하남미사.html">하남미사</a> · <a class="cgv-branch-link" href="화정.html">화정</a>
                </div>
            </details>
            <!-- 인천 -->
            <details class="cgv-details">
                <summary>인천</summary>
                <div class="cgv-list-box">
                    <a class="cgv-branch-link" href="계양.html">계양</a> · <a class="cgv-branch-link" href="남주안.html">남주안</a> · <a class="cgv-branch-link" href="부평.html">부평</a> · <a class="cgv-branch-link" href="송도타임스페이스.html">송도타임스페이스</a> · <a class="cgv-branch-link" href="연수역.html">연수역</a> · <a class="cgv-branch-link" href="인천.html">인천</a> · <a class="cgv-branch-link" href="인천논현.html">인천논현</a> · <a class="cgv-branch-link" href="인천도화.html">인천도화</a> · <a class="cgv-branch-link" href="인천연수.html">인천연수</a> · <a class="cgv-branch-link" href="인천학익.html">인천학익</a> · <a class="cgv-branch-link" href="주안역.html">주안역</a> · <a class="cgv-branch-link" href="청라.html">청라</a>
                </div>
            </details>
            <!-- 강원/제주 -->
            <details class="cgv-details">
                <summary>강원 / 제주</summary>
                <div class="cgv-list-box">
                    <a class="cgv-branch-link" href="강릉.html">강릉</a> · <a class="cgv-branch-link" href="원주.html">원주</a> · <a class="cgv-branch-link" href="춘천.html">춘천</a> · <a class="cgv-branch-link" href="제주.html">제주</a> · <a class="cgv-branch-link" href="제주노형.html">제주노형</a>
                </div>
            </details>
            <!-- 대전/충청 -->
            <details class="cgv-details">
                <summary>대전 / 충청</summary>
                <div class="cgv-list-box">
                    <a class="cgv-branch-link" href="대전.html">대전</a> · <a class="cgv-branch-link" href="대전가오.html">대전가오</a> · <a class="cgv-branch-link" href="대전탄방.html">대전탄방</a> · <a class="cgv-branch-link" href="대전터미널.html">대전터미널</a> · <a class="cgv-branch-link" href="유성노은.html">유성노은</a> · <a class="cgv-branch-link" href="서산.html">서산</a> · <a class="cgv-branch-link" href="세종.html">세종</a> · <a class="cgv-branch-link" href="천안.html">천안</a> · <a class="cgv-branch-link" href="천안터미널.html">천안터미널</a> · <a class="cgv-branch-link" href="천안펜타포트.html">천안펜타포트</a> · <a class="cgv-branch-link" href="청주(서문).html">청주(서문)</a> · <a class="cgv-branch-link" href="청주율량.html">청주율량</a> · <a class="cgv-branch-link" href="청주지웰시티.html">청주지웰시티</a> · <a class="cgv-branch-link" href="청주터미널.html">청주터미널</a> · <a class="cgv-branch-link" href="홍성.html">홍성</a>
                </div>
            </details>
            <!-- 대구/경북 -->
            <details class="cgv-details">
                <summary>대구 / 경북</summary>
                <div class="cgv-list-box">
                    <a class="cgv-branch-link" href="대구.html">대구</a> · <a class="cgv-branch-link" href="대구수성.html">대구수성</a> · <a class="cgv-branch-link" href="대구스타디움.html">대구스타디움</a> · <a class="cgv-branch-link" href="대구아카데미.html">대구아카데미</a> · <a class="cgv-branch-link" href="대구월성.html">대구월성</a> · <a class="cgv-branch-link" href="대구이시아.html">대구이시아</a> · <a class="cgv-branch-link" href="대구칠곡.html">대구칠곡</a> · <a class="cgv-branch-link" href="대구한일.html">대구한일</a> · <a class="cgv-branch-link" href="대구현대.html">대구현대</a> · <a class="cgv-branch-link" href="구미.html">구미</a> · <a class="cgv-branch-link" href="김천율곡.html">김천율곡</a> · <a class="cgv-branch-link" href="안동.html">안동</a> · <a class="cgv-branch-link" href="포항.html">포항</a>
                </div>
            </details>
            <!-- 부산/울산/경남 -->
            <details class="cgv-details">
                <summary>부산 / 울산 / 경남</summary>
                <div class="cgv-list-box">
                    <a class="cgv-branch-link" href="대연.html">대연</a> · <a class="cgv-branch-link" href="동래.html">동래</a> · <a class="cgv-branch-link" href="서면.html">서면</a> · <a class="cgv-branch-link" href="서면삼정타워.html">서면삼정타워</a> · <a class="cgv-branch-link" href="센텀시티.html">센텀시티</a> · <a class="cgv-branch-link" href="아시아드.html">아시아드</a> · <a class="cgv-branch-link" href="울산삼산.html">울산삼산</a> · <a class="cgv-branch-link" href="울산신천.html">울산신천</a> · <a class="cgv-branch-link" href="거제.html">거제</a> · <a class="cgv-branch-link" href="김해.html">김해</a> · <a class="cgv-branch-link" href="김해장유.html">김해장유</a> · <a class="cgv-branch-link" href="마산.html">마산</a> · <a class="cgv-branch-link" href="창원.html">창원</a> · <a class="cgv-branch-link" href="창원더시티.html">창원더시티</a> · <a class="cgv-branch-link" href="창원상남.html">창원상남</a> · <a class="cgv-branch-link" href="통영.html">통영</a>
                </div>
            </details>
            <!-- 광주/전라 -->
            <details class="cgv-details">
                <summary>광주 / 전라</summary>
                <div class="cgv-list-box">
                    <a class="cgv-branch-link" href="광주금남로.html">광주금남로</a> · <a class="cgv-branch-link" href="광주상무.html">광주상무</a> · <a class="cgv-branch-link" href="광주용봉.html">광주용봉</a> · <a class="cgv-branch-link" href="광주첨단.html">광주첨단</a> · <a class="cgv-branch-link" href="광주터미널.html">광주터미널</a> · <a class="cgv-branch-link" href="목포.html">목포</a> · <a class="cgv-branch-link" href="목포평화광장.html">목포평화광장</a> · <a class="cgv-branch-link" href="순천.html">순천</a> · <a class="cgv-branch-link" href="순천신대.html">순천신대</a> · <a class="cgv-branch-link" href="여수웅천.html">여수웅천</a> · <a class="cgv-branch-link" href="익산.html">익산</a> · <a class="cgv-branch-link" href="전주고사.html">전주고사</a> · <a class="cgv-branch-link" href="전주효자.html">전주효자</a>
                </div>
            </details>
        </div>
    </div>
    `;

    const container = document.querySelector(".cgv-nav-container");
    if (container) {
        container.innerHTML = cgvNavHTML;
    }
});