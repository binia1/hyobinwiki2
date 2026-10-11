(function() {
  const facilityTableHTML = `
  <style>
    .hyobin-table { width: 100%; max-width: 1000px; border-collapse: collapse; border: 2px solid #BB9955; font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif; font-size: 13px; margin: 0 auto; }
    .hyobin-table th, .hyobin-table td { border: 1px solid #e0e0e0; padding: 8px; }
    .hyobin-header { background-color: #BB9955; text-align: center; padding: 15px !important; border-bottom: none; }
    .hyobin-header-box { display: inline-flex; align-items: center; border: 1px solid white; padding: 8px 15px; color: white; }
    .hyobin-header-logo { padding-right: 15px; border-right: 1px solid white; margin-right: 15px; }
    .hyobin-header-logo img { height: 35px; display: block; }
    .hyobin-header-text { text-align: left; }
    .hyobin-header-text .subtitle { font-size: 12px; display: block; line-height: 1.2; font-weight: normal; }
    .hyobin-header-text .title { font-size: 18px; font-weight: bold; display: block; line-height: 1.2; margin-top: 2px; }
    .hyobin-toggle { background-color: #ffffff; text-align: center; font-weight: bold; color: #333; border-bottom: 2px solid #BB9955 !important; }
    .hyobin-cat { background-color: #BB9955; color: white; font-weight: bold; text-align: center; white-space: nowrap; width: 15%; }
    .hyobin-subcat { background-color: #f8f9fa; text-align: center; font-weight: bold; width: 12%; color: #333; }
    .hyobin-metro-cell { background-color: #f8f9fa; text-align: center !important; vertical-align: middle !important; width: 12%; }
    .hyobin-metro-logo { width: 25px; height: 25px; display: inline-block; vertical-align: middle; }
    .hyobin-content { background-color: #ffffff; text-align: left; line-height: 1.8; word-break: keep-all; }
    .hyobin-content a { color: #0055aa; text-decoration: none; }
    .hyobin-content a:hover { text-decoration: underline; }
  </style>

  <table class="hyobin-table">
    <tr>
      <td colspan="3" class="hyobin-header">
        <div class="hyobin-header-box">
          <div class="hyobin-header-logo">
            <img src="이미지/중구_흰색로고.webp" alt="중구 로고">
          </div>
          <div class="hyobin-header-text">
            <span class="subtitle">효빈광역시</span>
            <span class="title">중구의 시설</span>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td colspan="3" class="hyobin-toggle">[ 펼치기 · 접기 ]</td>
    </tr>
    <tr>
      <td rowspan="5" class="hyobin-cat">도시철도</td>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈1호선.svg" alt="1호선" class="hyobin-metro-logo" onerror="var p=this.parentNode; p.className='hyobin-subcat'; p.innerText='1호선';"></td>
      <td class="hyobin-content">
        <a href="중앙로역.html">중앙로역</a> · <a href="중구청역.html">중구청역</a> · <a href="내조역.html">내조역</a> · <a href="약맥역.html">약맥역</a> · <a href="십덕역.html">십덕역</a> · <a href="창선역.html">창선역</a> · <a href="오석역.html">오석역</a> · <a href="장원역.html">장원역</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈2호선.svg" alt="2호선" class="hyobin-metro-logo" onerror="var p=this.parentNode; p.className='hyobin-subcat'; p.innerText='2호선';"></td>
      <td class="hyobin-content">
        <a href="중앙로역.html">중앙로역</a> · <a href="내항역.html">내항역</a> · <a href="고도역.html">고도역</a> · <a href="심동역.html">심동역</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈4호선.svg" alt="4호선" class="hyobin-metro-logo" onerror="var p=this.parentNode; p.className='hyobin-subcat'; p.innerText='4호선';"></td>
      <td class="hyobin-content">
        <a href="장원역.html">장원역</a> · <a href="오석역.html">오석역</a> · <a href="신덕역.html">신덕역</a> · <a href="삼각역.html">삼각역</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈7호선.svg" alt="7호선" class="hyobin-metro-logo" onerror="var p=this.parentNode; p.className='hyobin-subcat'; p.innerText='7호선';"></td>
      <td class="hyobin-content">
        <a href="중앙로역.html">중앙로역</a> · <a href="효빈성앞역.html">효빈성앞역</a> · <a href="리사역.html">리사역</a> · <a href="효빈은행역.html">효빈은행역</a> · <a href="개항지역.html">개항지역</a> · <a href="우이문화촌역.html">우이문화촌역</a> · <a href="중앙로3가역.html">중앙로3가역</a> · <a href="궁정역.html">궁정역</a> · <a href="구시청앞역.html">구시청앞역</a> · <a href="원동4가역.html">원동4가역</a> · <a href="중앙고등학교역.html">중앙고등학교역</a> · <a href="내항시장역.html">내항시장역</a> · <a href="내항역.html">내항역</a> · <a href="만마루역.html">만마루역</a> · <a href="심동1가역.html">심동1가역</a> · <a href="명일역.html">명일역</a> · <a href="중앙로1가역.html">중앙로1가역</a> · <a href="상원초등학교역.html">상원초등학교역</a> · <a href="갑문역.html">갑문역</a> · <a href="구 세관역.html">구 세관역</a> · <a href="유내역.html">유내역</a> · <a href="경동역.html">경동역</a> · <a href="내조역.html">내조역</a> · <a href="우이역.html">우이역</a> · <a href="도람역.html">도람역</a> · <a href="심동2가역.html">심동2가역</a> · <a href="내조공원역.html">내조공원역</a> · <a href="고도리역.html">고도리역</a> · <a href="시북역.html">시북역</a> · <a href="시남역.html">시남역</a> · <a href="중보로역.html">중보로역</a> · <a href="중구청역.html">중구청역</a> · <a href="조유동2가역.html">조유동2가역</a> · <a href="색수시장역.html">색수시장역</a> · <a href="중동3가역.html">중동3가역</a> · <a href="천석동2가역.html">천석동2가역</a> · <a href="조유동3가역.html">조유동3가역</a> · <a href="천석동3가역.html">천석동3가역</a> · <a href="효빈고등학교역.html">효빈고등학교역</a> · <a href="서남역.html">서남역</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/빈효광역선.svg" alt="빈효광역선" class="hyobin-metro-logo" onerror="var p=this.parentNode; p.className='hyobin-subcat'; p.innerText='빈효광역선';"></td>
      <td class="hyobin-content">
        <a href="신덕역.html">신덕역</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">공원</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈성공원.html">효빈성공원</a> · <a href="조유공원.html">조유공원</a> · <a href="구보공원.html">구보공원</a> · <a href="내조공원.html">내조공원</a> · <a href="소장해변공원.html">소장해변공원</a> · <a href="어신공원.html">어신공원</a> · <a href="골만공원.html">골만공원</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">공연장</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈문화회관 창선관.html">효빈문화회관 창선관</a> · <a href="중앙로 1930 트램 씨어터.html">중앙로 1930 트램 씨어터</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">종합병원</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈대학교 병원 분관.html">효빈대학교 병원 분관</a> · <a href="복산병원.html">복산병원</a>
      </td>
    </tr>
    <tr>
      <td rowspan="4" class="hyobin-cat">상업시설</td>
      <td class="hyobin-subcat">전통시장</td>
      <td class="hyobin-content">
        <a href="색수시장.html">색수시장</a> · <a href="서남시장.html">서남시장</a> · <a href="내항시장.html">내항시장</a> · <a href="중앙시장.html">중앙시장</a> · <a href="약맥시장.html">약맥시장</a> · <a href="조유시장.html">조유시장</a> · <a href="효빈서부시장.html">효빈서부시장</a> · <a href="중구시장.html">중구시장</a> · <a href="내조시장.html">내조시장</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-subcat">백화점</td>
      <td class="hyobin-content">
        <a href="롯데백화점 효빈점.html">롯데백화점 효빈점</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-subcat">대형마트</td>
      <td class="hyobin-content">
        <a href="이마트 효빈점.html">이마트 효빈점</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-subcat">기타시설</td>
      <td class="hyobin-content">
        <a href="다이소 중앙로본점.html">다이소 중앙로본점</a> · <a href="다이소 조유동 중구청점.html">다이소 조유동 중구청점</a> · <a href="다이소 효빈성점.html">다이소 효빈성점</a> · <a href="다이소 신덕동점.html">다이소 신덕동점</a> · <a href="다이소 내조동점.html">다이소 내조동점</a> · <a href="다이소 이마트 효빈점.html">다이소 이마트 효빈점</a> · <a href="맥도날드 효빈이마트점.html">맥도날드 효빈이마트점</a> · <a href="kfc 효빈점.html">kfc 효빈점</a> · <a href="버거킹 효빈중앙점.html">버거킹 효빈중앙점</a> · <a href="롯데리아 창선점.html">롯데리아 창선점</a> · <a href="롯데리아 중앙로점.html">롯데리아 중앙로점</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">영화관</td>
      <td colspan="2" class="hyobin-content">
        <a href="롯데시네마 효빈.html">롯데시네마 효빈</a> · <a href="메가박스 효빈.html">메가박스 효빈</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">교통시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="내항차량사업소.html">내항차량사업소</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">숙박</td>
      <td colspan="2" class="hyobin-content">
        <a href="리엘라스테이.html">리엘라스테이</a> · <a href="헬로 해피 월드호첼.html">헬로 해피 월드호첼</a> · <a href="파스텔 호텔.html">파스텔 호텔</a> · <a href="애프터글로우호텔.html">애프터글로우호텔</a> · <a href="씨더스 호텔.html">씨더스 호텔</a> · <a href="레이즈 어 스이렌 호텔.html">레이즈 어 스이렌 호텔</a> · <a href="토치만 호텔.html">토치만 호텔</a> · <a href="라마다 효빈 호텔.html">라마다 효빈 호텔</a> · <a href="토네호텔.html">토네호텔</a> · <a href="완동호텔.html">완동호텔</a> · <a href="타이니스타 호텔.html">타이니스타 호텔</a> · <a href="세나드 호텔.html">세나드 호텔</a> · <a href="토요코인 효빈.html">토요코인 효빈</a> · <a href="사니파신 호텔.html">사니파신 호텔</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">종교시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="단산사.html">단산사</a> · <a href="효빈성당.html">효빈성당</a> · <a href="효빈중앙교회.html">효빈중앙교회</a> · <a href="부활제일교회.html">부활제일교회</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">해수욕장</td>
      <td colspan="2" class="hyobin-content">
        <a href="심동해변.html">심동해변</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">도서관</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈광역시립중앙도서관.html">효빈광역시립중앙도서관</a> · <a href="중구립도서관.html">중구립도서관</a> · <a href="중구효빈전차도서관.html">중구효빈전차도서관</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">선착장</td>
      <td colspan="2" class="hyobin-content">
        <a href="내항선착장.html">내항선착장</a> · <a href="중구선착장.html">중구선착장</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">방송시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈문화방송.html">효빈문화방송</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">마천루</td>
      <td colspan="2" class="hyobin-content">
        <a href="HB빌딩.html">HB빌딩</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">문화시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈시립미술관.html">효빈시립미술관</a> · <a href="국립효빈박물관.html">국립효빈박물관</a> · <a href="효빈역사박물관.html">효빈역사박물관</a> · <a href="전차기념박물관.html">전차기념박물관</a> · <a href="신덕 전통 떡 박물관.html">신덕 전통 떡 박물관</a> · <a href="국립현대미술관 효빈관.html">국립현대미술관 효빈관</a> · <a href="효빈화폐금융박물관.html">효빈화폐금융박물관</a> · <a href="창선동 100년전 간판박물관.html">창선동 100년전 간판박물관</a> · <a href="도람동 전차차고지 복원 박물관.html">도람동 전차차고지 복원 박물관</a> · <a href="우이문화촌.html">우이문화촌</a> · <a href="내항관광단지.html">내항관광단지</a> · <a href="개항지공원.html">개항지공원</a>
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