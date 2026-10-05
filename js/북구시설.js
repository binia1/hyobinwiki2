(function() {
  const facilityTableHTML = `
  <style>
    .hyobin-table {
      width: 100%;
      max-width: 1000px;
      border-collapse: collapse;
      border: 2px solid #7799CC;
      font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif;
      font-size: 13px;
      margin: 0 auto;
    }
    .hyobin-table th, .hyobin-table td {
      border: 1px solid #e0e0e0;
      padding: 8px;
    }
    .hyobin-header {
      background-color: #7799CC;
      text-align: center;
      padding: 15px !important;
      border-bottom: none;
    }
    /* 고양시 스타일 헤더 박스 */
    .hyobin-header-box {
      display: inline-flex;
      align-items: center;
      border: 1px solid white;
      padding: 8px 15px;
      color: white;
    }
    .hyobin-header-logo {
      padding-right: 15px;
      border-right: 1px solid white;
      margin-right: 15px;
    }
    .hyobin-header-logo img {
      height: 35px;
      display: block;
    }
    .hyobin-header-text {
      text-align: left;
    }
    .hyobin-header-text .subtitle {
      font-size: 12px;
      display: block;
      line-height: 1.2;
      font-weight: normal;
    }
    .hyobin-header-text .title {
      font-size: 18px;
      font-weight: bold;
      display: block;
      line-height: 1.2;
      margin-top: 2px;
    }
    .hyobin-toggle {
      background-color: #ffffff;
      text-align: center;
      font-weight: bold;
      color: #333;
      border-bottom: 2px solid #7799CC !important;
    }
    .hyobin-cat {
      background-color: #7799CC;
      color: white;
      font-weight: bold;
      text-align: center;
      white-space: nowrap;
      width: 15%;
    }
    .hyobin-subcat {
      background-color: #f8f9fa;
      text-align: center;
      font-weight: bold;
      width: 12%;
      color: #333;
    }
    /* 도시철도 로고 전용 칸 (중앙 정렬) */
    .hyobin-metro-cell {
      background-color: #f8f9fa;
      text-align: center !important;
      vertical-align: middle !important;
      width: 12%;
    }
    .hyobin-metro-logo {
      width: 25px;
      height: 25px;
      display: inline-block;
      vertical-align: middle;
    }
    .hyobin-content {
      background-color: #ffffff;
      text-align: left;
      line-height: 1.8;
      word-break: keep-all;
    }
    .hyobin-content a {
      color: #0055aa;
      text-decoration: none;
    }
    .hyobin-content a:hover {
      text-decoration: underline;
    }
  </style>

  <table class="hyobin-table">
    <!-- 헤더 -->
    <tr>
      <td colspan="3" class="hyobin-header">
        <div class="hyobin-header-box">
          <div class="hyobin-header-logo">
            <img src="이미지/북구_흰색로고.webp" alt="북구 로고">
          </div>
          <div class="hyobin-header-text">
            <span class="subtitle">효빈광역시</span>
            <span class="title">북구의 시설</span>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td colspan="3" class="hyobin-toggle">[ 펼치기 · 접기 ]</td>
    </tr>

    <!-- 도시철도 -->
    <tr>
      <td rowspan="6" class="hyobin-cat">도시철도</td>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈1호선.svg" alt="1호선" class="hyobin-metro-logo"></td>
      <td class="hyobin-content">
        <a href="천왕사역.html">천왕사</a> · <a href="백천역.html">백천</a> · <a href="입희역.html">입희</a> · <a href="추산역.html">추산</a> · <a href="서도역.html">서도</a> · <a href="북구청역.html">북구청</a> · <a href="등기역.html">등기</a> · <a href="평전역.html">평전</a> · <a href="아진역.html">아진</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈2호선.svg" alt="2호선" class="hyobin-metro-logo"></td>
      <td class="hyobin-content">
        <a href="신영역.html">신영</a> · <a href="채산역.html">채산</a> · <a href="남전역.html">남전</a> · <a href="중수역.html">중수</a> · <a href="사연역.html">사연</a> · <a href="입희역.html">입희</a> · <a href="입선역.html">입선</a> · <a href="북효빈역.html">북효빈</a> · <a href="시청역.html">시청</a> · <a href="고송교차로역.html">고송교차로</a> · <a href="과송역.html">과송</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈3호선.svg" alt="3호선" class="hyobin-metro-logo"></td>
      <td class="hyobin-content">
        <a href="사능역.html">사능</a> · <a href="고속버스터미널역.html">고속버스터미널</a> · <a href="북효빈역.html">북효빈</a> · <a href="청능역.html">청능</a> · <a href="고송나루역.html">고송나루</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈5호선.svg" alt="5호선" class="hyobin-metro-logo"></td>
      <td class="hyobin-content">
        <a href="소조역.html">소조</a> · <a href="고속버스터미널역.html">고속버스터미널</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈6호선.svg" alt="6호선" class="hyobin-metro-logo"></td>
      <td class="hyobin-content">
        <a href="오내사거리역.html">오내사거리</a> · <a href="오내역.html">오내</a> · <a href="중수역.html">중수</a> · <a href="북구청역.html">북구청</a> · <a href="포산역.html">포산</a> · <a href="장포역.html">장포</a> · <a href="효빈종합고역.html">효빈종합고</a> · <a href="진희역.html">진희</a> · <a href="동고송역.html">동고송</a> · <a href="시청역.html">시청</a> · <a href="고송교차로역.html">고송교차로</a> · <a href="고송역.html">고송</a> · <a href="건강보험공단역.html">건강보험공단</a> · <a href="고송나루역.html">고송나루</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈7호선.svg" alt="7호선" class="hyobin-metro-logo"></td>
      <td class="hyobin-content">
        <a href="치남역.html">치남</a> · <a href="사능동3가역.html">사능동3가</a> · <a href="유성당역.html">유성당</a> · <a href="사능복지관역.html">사능복지관</a> · <a href="사능동1가역.html">사능동1가</a> · <a href="북구서부어린이회관역.html">북구 서부어린이회관</a> · <a href="사능삼거리역.html">사능삼거리</a> · <a href="사중역.html">사중</a>
      </td>
    </tr>

    <!-- 일반철도 -->
    <tr>
      <td class="hyobin-cat">일반철도</td>
      <td class="hyobin-subcat">강빈선</td>
      <td class="hyobin-content"><a href="북효빈역.html">북효빈역</a></td>
    </tr>

    <!-- 고속도로 -->
    <tr>
      <td class="hyobin-cat">고속도로</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈외곽순환고속도로.html">효빈외곽순환고속도로</a>(<a href="평전공단IC.html">평전공단IC</a>, <a href="곡진IC.html">곡진IC</a>)
      </td>
    </tr>

    <!-- 공원 -->
    <tr>
      <td class="hyobin-cat">공원</td>
      <td colspan="2" class="hyobin-content">
        <a href="시청공원.html">시청공원</a> · <a href="사가당공원.html">사가당공원</a> · <a href="진희공원.html">진희공원</a> · <a href="고송공원.html">고송공원</a> · <a href="중수강변공원.html">중수강변공원</a> · <a href="중수해안공원.html">중수해안공원</a> · <a href="월음공원.html">월음공원</a> · <a href="고송강변공원.html">고송강변공원</a> · <a href="목금공원.html">목금공원</a> · <a href="평전공원.html">평전공원</a> · <a href="귤발공원.html">귤발공원</a> · <a href="굴회공원.html">굴회공원</a> · <a href="삼성공원.html">삼성공원</a>
      </td>
    </tr>

    <!-- 공연장 -->
    <tr>
      <td class="hyobin-cat">공연장</td>
      <td colspan="2" class="hyobin-content">
        <a href="HSCO.html">HSCO 오디토리움</a> · <a href="만화애니메이션의전당.html">만화애니메이션의전당</a> · <a href="평안명대학교_갤럭시홀.html">평안명대학교 갤럭시홀</a> · <a href="애니플러스_스테이지_고송.html">애니플러스 스테이지 고송</a>
      </td>
    </tr>

    <!-- 전시장 -->
    <tr>
      <td class="hyobin-cat">전시장</td>
      <td colspan="2" class="hyobin-content">
        <a href="HSCO.html">HSCO (효빈전시컨벤션센터)</a>
      </td>
    </tr>

    <!-- 광장 -->
    <tr>
      <td class="hyobin-cat">광장</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈시청광장.html">효빈시청광장</a>
      </td>
    </tr>

    <!-- 체육시설 -->
    <tr>
      <td class="hyobin-cat">체육시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈종합운동장.html">효빈종합운동장</a>(<a href="월드컵경기장.html">월드컵경기장</a> · <a href="주경기장.html">주경기장</a> · <a href="보조경기장.html">보조경기장</a> · <a href="야구장.html">야구장</a>) · <a href="효빈_e스포츠_아레나.html">효빈 e스포츠 아레나</a> · <a href="우미정.html">우미정</a>
      </td>
    </tr>

    <!-- 워터파크 -->
    <tr>
      <td class="hyobin-cat">워터파크</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈_아쿠아파크.html">효빈 아쿠아파크</a>
      </td>
    </tr>

    <!-- 종합병원 -->
    <tr>
      <td class="hyobin-cat">종합병원</td>
      <td colspan="2" class="hyobin-content">
        <a href="삼선대학교병원.html">삼선대학교병원</a> · <a href="고송병원.html">고송병원</a> · <a href="호빈병원.html">호빈병원</a> · <a href="입희병원.html">입희병원</a> · <a href="상원병원.html">상원병원</a> · <a href="청능병원.html">청능병원</a>
      </td>
    </tr>

    <!-- 상업시설 -->
    <tr>
      <td rowspan="4" class="hyobin-cat">상업시설</td>
      <td class="hyobin-subcat">전통시장</td>
      <td class="hyobin-content">
        <a href="중수시장.html">중수시장</a> · <a href="청능도매종합시장.html">청능도매종합시장</a> · <a href="사능시장.html">사능시장</a> · <a href="사능중앙시장.html">사능중앙시장</a> · <a href="남전도매시장.html">남전도매시장</a> · <a href="천왕사시장.html">천왕사시장</a> · <a href="고송시장.html">고송시장</a> · <a href="해서시장(신).html">해서시장(신)</a> · <a href="오내시장.html">오내시장</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-subcat">백화점</td>
      <td class="hyobin-content">
        <a href="롯데백화점_진희점.html">롯데백화점 진희점</a> · <a href="신세계백화점_효빈점.html">신세계백화점 효빈점</a> · <a href="현대백화점_효빈점.html">현대백화점 효빈점</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-subcat">대형마트</td>
      <td class="hyobin-content">
        <a href="이마트_중수점.html">이마트 중수점</a> · <a href="이마트_효빈시외버스터미널점.html">이마트 효빈시외버스터미널점</a> · <a href="홈플러스_고솔점.html">홈플러스 고솔점</a> · <a href="홈플러스_청능점.html">홈플러스 청능점(폐)</a> · <a href="롯데마트_진희점.html">롯데마트 진희점</a> · <a href="빈스마트_고송점.html">빈스마트 고송점</a> · <a href="트레이더스_홀세일클럽_효빈점.html">트레이더스 홀세일클럽 효빈점</a> · <a href="롯데아울렛_효빈점.html">롯데아울렛 효빈점</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-subcat">기타상업시설</td>
      <td class="hyobin-content">
        <a href="고송스퀘어몰.html">고송스퀘어몰</a> · <a href="애니메이트_고송본점.html">애니메이트 고송본점</a> · <a href="애니플러스샵_고송점.html">애니플러스샵 고송점</a> · <a href="멜론북스_고송점.html">멜론북스 고송점</a> · <a href="효빈교통공사_굿즈샵_고송교차로역점.html">효빈교통공사 굿즈샵 고송교차로역점</a> · <a href="효빈교통공사_굿즈샵_중수역점.html">효빈교통공사 굿즈샵 중수역점</a> · <a href="효빈교통공사_굿즈샵_효빈교통공사_직영점.html">효빈교통공사 굿즈샵 효빈교통공사 직영점</a> · <a href="효빈교통공사_굿즈샵_소조역점.html">효빈교통공사 굿즈샵 소조역점</a> · <a href="고송역.html">고송지하상가</a> · <a href="중수역.html">중수지하상가</a> · <a href="HSCO쇼핑문화거리.html">HSCO쇼핑문화거리</a> · <a href="맥도날드 고송점.html">맥도날드 고송점</a> · <a href="맥도날드_매장_템플릿.html?store=북고송DT">맥도날드 북고송DT점</a> · <a href="맥도날드 중수DT점.html">맥도날드 중수DT점</a> · <a href="맥도날드 효빈터미널점.html">맥도날드 효빈터미널점</a> · <a href="맥도날드 진희DT점.html">맥도날드 진희DT점</a> · <a href="맥도날드 오내DT점.html">맥도날드 오내DT점</a> · <a href="맥도날드_매장_템플릿.html?store=포산DT">맥도날드 포산DT점</a> · <a href="버거킹_토모리점.html">버거킹 토모리점</a> · <a href="버거킹_고송점.html">버거킹 고송점</a> · <a href="버거킹_중수점.html">버거킹 중수점</a> · <a href="버거킹_입희점.html">버거킹 입희점</a> · <a href="버거킹_남전DT점.html">버거킹 남전DT점</a> · <a href="버거킹_천왕사점.html">버거킹 천왕사점</a> · <a href="KFC_고송점.html">KFC 고송점</a> · <a href="KFC_중수점.html">KFC 중수점</a> · <a href="KFC_고송교차로역점.html">KFC 고송교차로역점</a> · <a href="고든램지버거_효빈점.html">고든램지버거 효빈점</a> · <a href="쉐이크_쉑_효빈고속버스터미널점.html">쉐이크 쉑 효빈고속버스터미널점</a> · <a href="졸리비_효빈점.html">졸리비 효빈점</a> · <a href="다이소_효빈고송본점.html">다이소 효빈고송본점</a> · <a href="다이소_고송시청점.html">다이소 고송시청점</a> · <a href="다이소_고송점.html">다이소 고송점</a> · <a href="다이소_중수역점.html">다이소 중수역점</a> · <a href="다이소_북구청점.html">다이소 북구청점</a> · <a href="다이소_남전전자상가점.html">다이소 남전전자상가점</a> · <a href="다이소_평안명대점.html">다이소 평안명대점</a> · <a href="다이소_입희운동장점.html">다이소 입희운동장점</a> · <a href="다이소_천왕사역점.html">다이소 천왕사역점</a> · <a href="다이소_소조동점.html">다이소 소조동점</a> · <a href="다이소_롯데마트_진희점.html">다이소 롯데마트 진희점</a> · <a href="다이소_오내동점.html">다이소 오내동점 </a> · <a href="다이소_채산동점.html">다이소 채산동점 </a> · <a href="다이소_홈플러스_고송점.html">다이소 홈플러스 고송점 </a>
      </td>
    </tr>

    <!-- 영화관 -->
    <tr>
      <td class="hyobin-cat">영화관</td>
      <td colspan="2" class="hyobin-content">
        <a href="메가박스_고송.html">메가박스 고송</a> · <a href="메가박스_HJ중수몰.html">메가박스 HJ중수몰</a> · <a href="CGV고송.html">CGV고송</a> · <a href="롯데시네마_진희.html">롯데시네마 진희</a>
      </td>
    </tr>

    <!-- 교통시설 -->
    <tr>
      <td class="hyobin-cat">교통시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈종합버스터미널.html">효빈종합버스터미널</a> · <a href="효빈공영차고지.html">효빈공영차고지</a> · <a href="추산차량사업소.html">추산차량사업소</a> · <a href="신영차량사업소.html">신영차량사업소</a>
      </td>
    </tr>

    <!-- 숙박 -->
    <tr>
      <td class="hyobin-cat">숙박</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈_하라오호텔.html">효빈 하라오호텔</a> · <a href="니지벨리_호텔.html">니지벨리 호텔</a> · <a href="에버그린_효빈.html">에버그린 효빈</a> · <a href="켄싱턴호텔_효빈.html">켄싱턴호텔 효빈</a> · <a href="브레온_호텔.html">브레온 호텔</a>
      </td>
    </tr>

    <!-- 종교시설 -->
    <tr>
      <td class="hyobin-cat">종교시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="천왕사.html">천왕사</a> · <a href="원각사.html">원각사</a> · <a href="효빈교회.html">효빈교회</a> · <a href="효빈주교좌성당.html">효빈주교좌성당</a> · <a href="천응교회.html">천응교회</a> · <a href="포산교회.html">포산교회</a>
      </td>
    </tr>

    <!-- 해수욕장 -->
    <tr>
      <td class="hyobin-cat">해수욕장</td>
      <td colspan="2" class="hyobin-content">
        <a href="토모리해수욕장.html">토모리해수욕장</a> · <a href="고송해수욕장.html">고송해수욕장</a>
      </td>
    </tr>

    <!-- 도서관 -->
    <tr>
      <td class="hyobin-cat">도서관</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈시청한바다도서관.html">효빈시청한바다도서관</a> · <a href="효빈광역시립시민도서관.html">효빈광역시립시민도서관</a> · <a href="효빈광역시립오내도서관.html">효빈광역시립오내도서관</a> · <a href="중수도서관.html">중수도서관</a> · <a href="고송도서관.html">고송도서관</a> · <a href="만화애니메이션도서관.html">만화애니메이션도서관</a> · <a href="북구청도서관.html">북구청도서관(예정)</a>
      </td>
    </tr>

    <!-- 선착장 -->
    <tr>
      <td class="hyobin-cat">선착장</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈유람선_중수포산선착장.html">효빈유람선 중수포산선착장</a> · <a href="고송선착장.html">고송선착장</a>
      </td>
    </tr>

    <!-- 교량 -->
    <tr>
      <td rowspan="2" class="hyobin-cat">교량</td>
      <td class="hyobin-subcat">팔천강</td>
      <td class="hyobin-content">
        <a href="등중교.html">등중교</a> · <a href="중수대교.html">중수대교</a> · <a href="당대교.html">당대교</a> · <a href="남전대교.html">남전대교</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-subcat">기타하천</td>
      <td class="hyobin-content">
        <a href="고송교.html">고송교</a> · <a href="효빈교.html">효빈교</a> · <a href="소홍교.html">소홍교</a>
      </td>
    </tr>

    <!-- 방송시설 -->
    <tr>
      <td class="hyobin-cat">방송시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈방송.html">효빈방송</a>
      </td>
    </tr>

    <!-- 마천루 -->
    <tr>
      <td class="hyobin-cat">마천루</td>
      <td colspan="2" class="hyobin-content">
        <a href="고송토모리빌딩.html">고송토모리빌딩</a> · <a href="중수마가렛빌딩.html">중수마가렛빌딩</a>
      </td>
    </tr>
  </table>
  `;

  const container = document.getElementById('district-nav-container');
  if (container) {
    container.innerHTML = facilityTableHTML;
  } else {
    console.error("오류: 'district-nav-container' 요소를 찾을 수 없어 표를 렌더링하지 못했습니다.");
  }
})();