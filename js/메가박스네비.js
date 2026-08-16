document.addEventListener("DOMContentLoaded", function() {
    const megaboxNavHTML = `
    <div class="mega-nav-frame">
        <div class="mega-nav-header">
            <div class="flex items-center justify-center gap-2">
                <img onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Megabox_logo.svg/300px-Megabox_logo.svg.webp'" src="이미지/메가박스_로고.webp" style="height: 30px;"/>
                <span class="font-bold text-lg">전국 지점 현황</span>
            </div>
            <div class="text-xs text-gray-500 mt-1">
                <span class="bg-gray-200 px-1">음영</span>: 개관 예정 | <span class="text-sm">○</span>: 위탁관
            </div>
        </div>
        <div class="mega-nav-content">
            <!-- 효빈/덕북 -->
            <details class="mega-details" open="">
                <summary>효빈 / 덕북 / 덕남 </summary>
                <div class="mega-list-box">
                    <a class="mega-branch-link" href="메가박스_효빈.html">효빈</a> · 
                    <a class="mega-branch-link" href="메가박스_고송.html">고송</a> · 
                    <a class="mega-branch-link" href="메가박스_안천.html">안천</a> · 
                    <a class="mega-branch-link" href="메가박스_HJ중수.html">HJ중수</a> · 
                    <a class="mega-branch-link" href="메가박스_청엽.html">청엽</a> · 
                    <a class="mega-branch-link" href="메가박스_창전.html">창전</a> · 
                    <a class="mega-branch-link" href="메가박스_효빈대.html">효빈대</a> · 
                    <a class="mega-branch-link" href="메가박스_항동.html">항동</a> · 
                    <a class="mega-branch-link" href="메가박스_탄성.html">탄성</a> · 
                    <a class="mega-branch-link" href="메가박스_효빈터미널.html">효빈터미널</a> · 
                    <a class="mega-branch-link" href="메가박스_빈주가원.html">빈주가원</a> · 
                    <a class="mega-branch-link" href="메가박스_빈주장기.html">빈주장기</a> · 
                    <a class="mega-branch-link" href="메가박스_빈주역.html">빈주역</a> · 
                    <a class="mega-branch-link" href="메가박스_천주궁하.html">천주궁하</a> · 
                    <a class="mega-branch-link" href="메가박스_천주천성.html">천주천성</a> · 
                    <a class="mega-branch-link" href="메가박스_약산.html">약산</a> · 
                    <a class="mega-branch-link" href="메가박스_군천.html">군천</a> · 
                    <a class="mega-branch-link" href="메가박스_서해.html">서해</a> · 
                    <a class="mega-branch-link" href="메가박스_덕주.html">덕주</a> · 
                    <a class="mega-branch-link" href="메가박스_낙주.html">낙주</a> · 
                    <a class="mega-branch-link" href="메가박스_운진.html">운진</a> · 
                    <a class="mega-branch-link" href="메가박스_방산.html">방산</a>
                </div>
            </details>
            <!-- 서울 -->
            <details class="mega-details">
                <summary>서울</summary>
                <div class="mega-list-box">
                    <a class="mega-branch-link" href="메가박스_강남.html">강남</a> · 
                    <a class="mega-branch-link" href="메가박스_강동.html">강동<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="메가박스_구의이스트폴.html">구의이스트폴</a> · 
                    <a class="mega-branch-link" href="메가박스_군자.html">군자<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="메가박스_더부티크목동현대백화점.html">더 부티크 목동현대백화점</a> · 
                    <a class="mega-branch-link" href="메가박스_동index.html">동대문<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="메가박스_마곡.html">마곡</a> · 
                    <a class="mega-branch-link" href="메가박스_목동.html">목동</a> · 
                    <a class="mega-branch-link" href="메가박스_상봉.html">상봉</a> · 
                    <a class="mega-branch-link" href="메가박스_상암월드컵경기장.html">상암월드컵경기장</a> · 
                    <a class="mega-branch-link" href="메가박스_센트럴.html">센트럴</a> · 
                    <a class="mega-branch-link" href="메가박스_송파파크하비오.html">송파파크하비오<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="메가박스_신촌.html">신촌</a> · 
                    <a class="mega-branch-link" href="메가박스_이수.html">이수</a> · 
                    <a class="mega-branch-link" href="메가박스_창동.html">창동</a> · 
                    <a class="mega-branch-link" href="메가박스_코엑스.html">코엑스</a> · 
                    <a class="mega-branch-link" href="픽쳐하우스.html">픽쳐하우스<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="메가박스_홍대.html">홍대</a> · 
                    <a class="mega-branch-link" href="메가박스_화곡.html">화곡</a>
                </div>
            </details>
            <!-- 경기 -->
            <details class="mega-details">
                <summary>경기</summary>
                <div class="mega-list-box">
                    <a class="mega-branch-link" href="김포한강신도시.html">김포한강신도시</a> · 
                    <a class="mega-branch-link" href="고양스타필드.html">고양스타필드</a> · 
                    <a class="mega-branch-link" href="#">광명소하<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="광명AK플라자.html">광명AK플라자</a> · 
                    <a class="mega-branch-link" href="금정AK플라자.html">금정AK플라자</a> · 
                    <a class="mega-branch-link" href="#">남양주<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="남양주현대아울렛 스페이스원.html">남양주현대아울렛 스페이스원</a> · 
                    <a class="mega-branch-link" href="#">동탄<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">동탄역<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">미사강변<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">별내<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="부천스타필드시티.html">부천스타필드시티</a> · 
                    <a class="mega-branch-link" href="분당.html">분당</a> · 
                    <a class="mega-branch-link" href="#">성남모란<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">수원<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">수원남문<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="수원스타필드.html">수원스타필드</a> · 
                    <a class="mega-branch-link" href="수원인계.html">수원인계</a> · 
                    <a class="mega-branch-link" href="수원AK플라자.html">수원AK플라자</a> · 
                    <a class="mega-branch-link" href="#">수원호매실<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">시흥배곧<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">시흥정왕<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">안산중앙<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="안성스타필드.html">안성스타필드</a> · 
                    <del><a class="mega-branch-link" href="#">양주<sup class="mega-branch-sub">○</sup></a></del> · 
                    <a class="mega-branch-link" href="#">용인테크노밸리<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="의정부민락.html">의정부민락</a> · 
                    <a class="mega-branch-link" href="백석벨라시타.html">백석벨라시타</a> · 
                    <a class="mega-branch-link" href="킨텍스.html">킨텍스</a> · 
                    <a class="mega-branch-link" href="#">파주금촌<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">파주운정<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">평택비전<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="하남스타필드.html">하남스타필드</a>
                </div>
            </details>
            <!-- 인천 -->
            <details class="mega-details">
                <summary>인천</summary>
                <div class="mega-list-box">
                    <a class="mega-branch-link" href="#">검단<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="송도(트리플스트리트).html">송도(트리플스트리트)</a> · 
                    <a class="mega-branch-link" href="#">영종<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">영종하늘도시<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">인천논현<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="인천학익(시티오씨엘).html" style="background:#99999933">인천학익(시티오씨엘)</a> · 
                    <del><a class="mega-branch-link" href="#">청라지젤<sup class="mega-branch-sub">○</sup></a></del> · 
                    <a class="mega-branch-link" href="청라스타필드.html" style="background:#99999933">청라스타필드</a>
                </div>
            </details>
            <!-- 대전/세종/충청 -->
            <details class="mega-details">
                <summary>대전 / 세종 / 충청</summary>
                <div class="mega-list-box">
                    <a class="mega-branch-link" href="#">공주<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">논산<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="대전.html">대전</a> · 
                    <a class="mega-branch-link" href="대전신세계 아트앤사이언스.html">대전신세계 아트앤사이언스</a> · 
                    <a class="mega-branch-link" href="대전유성.html">대전유성</a> · 
                    <a class="mega-branch-link" href="대전중앙로.html">대전중앙로</a> · 
                    <a class="mega-branch-link" href="대전현대아울렛.html">대전현대아울렛</a> · 
                    <a class="mega-branch-link" href="#">세종(조치원)<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="세종나성.html">세종나성</a> · 
                    <del><a class="mega-branch-link" href="세종청사.html">세종청사</a></del> · 
                    <a class="mega-branch-link" href="#">오창<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="진천.html">진천</a> · 
                    <a class="mega-branch-link" href="#">천안<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">청주사창<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">청주성안길<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="청주터미널.html">청주터미널</a> · 
                    <a class="mega-branch-link" href="#">충주연수<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">홍성내포<sup class="mega-branch-sub">○</sup></a>
                </div>
            </details>
            <!-- 부산/대구/경상 -->
            <details class="mega-details">
                <summary>부산 / 대구 / 경상</summary>
                <div class="mega-list-box">
                    <a class="mega-branch-link" href="#">경북도청<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">경산하양<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="구미강동.html">구미강동</a> · 
                    <a class="mega-branch-link" href="#">김천<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">남포항<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">대구세븐밸리(칠곡)<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="대구신세계(동대구).html">대구신세계(동대구)</a> · 
                    <a class="mega-branch-link" href="대구이시아.html">대구이시아</a> · 
                    <a class="mega-branch-link" href="#">대구프리미엄만경관<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">덕천<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">마산(경남대)<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">부산극장<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">부산대<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">북대구(칠곡)<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="사상.html">사상</a> · 
                    <a class="mega-branch-link" href="#">삼천포<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">서면대한<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">양산<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="양산증산.html">양산증산</a> · 
                    <a class="mega-branch-link" href="#">울산<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">정관<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">진주(중안)<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">창원<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="창원내서.html">창원내서</a> · 
                    <a class="mega-branch-link" href="창원스타필드.html" style="background:#99999933">창원스타필드</a> · 
                    <a class="mega-branch-link" href="포항.html" style="background:#99999933">포항</a> · 
                    <a class="mega-branch-link" href="#">화명<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">해운대(장산)<sup class="mega-branch-sub">○</sup></a>
                </div>
            </details>
            <!-- 광주/전라 -->
            <details class="mega-details">
                <summary>광주 / 전라</summary>
                <div class="mega-list-box">
                    <a class="mega-branch-link" href="#">광주상무<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">광주하남<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">목포하당(포르모)<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">순천<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">여수웅천<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">전대(광주)<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">전주객사<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">전주혁신<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">첨단<sup class="mega-branch-sub">○</sup></a>
                </div>
            </details>
            <!-- 강원/제주 -->
            <details class="mega-details">
                <summary>강원 / 제주</summary>
                <div class="mega-list-box">
                    <a class="mega-branch-link" href="#">남춘천<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">속초<sup class="mega-branch-sub">○</sup></a> · 
                    <del><a class="mega-branch-link" href="#">원주<sup class="mega-branch-sub">○</sup></a></del> · 
                    <a class="mega-branch-link" href="#">원주혁신<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="춘천석사.html">춘천석사</a> · 
                    <a class="mega-branch-link" href="#">제주삼화<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">제주서귀포<sup class="mega-branch-sub">○</sup></a> · 
                    <a class="mega-branch-link" href="#">제주아라<sup class="mega-branch-sub">○</sup></a>
                </div>
            </details>
        </div>
    </div>
    `;

    const container = document.querySelector(".megabox-nav-container");
    if (container) {
        container.innerHTML = megaboxNavHTML;
    }
});