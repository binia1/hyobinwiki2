(function() {
  const facilityTableHTML = `
  <style>
    .hyobin-table { width: 100%; max-width: 1000px; border-collapse: collapse; border: 2px solid #BBFF64; font-family: 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif; font-size: 13px; margin: 0 auto; }
    .hyobin-table th, .hyobin-table td { border: 1px solid #e0e0e0; padding: 8px; }
    .hyobin-header { background-color: #BBFF64; text-align: center; padding: 15px !important; border-bottom: none; }
    .hyobin-header-box { display: inline-flex; align-items: center; border: 1px solid white; padding: 8px 15px; color: white; }
    .hyobin-header-logo { padding-right: 15px; border-right: 1px solid white; margin-right: 15px; }
    .hyobin-header-logo img { height: 35px; display: block; }
    .hyobin-header-text { text-align: left; }
    .hyobin-header-text .subtitle { font-size: 12px; display: block; line-height: 1.2; font-weight: normal; }
    .hyobin-header-text .title { font-size: 18px; font-weight: bold; display: block; line-height: 1.2; margin-top: 2px; }
    .hyobin-toggle { background-color: #ffffff; text-align: center; font-weight: bold; color: #333; border-bottom: 2px solid #BBFF64 !important; }
    .hyobin-cat { background-color: #BBFF64; color: white; font-weight: bold; text-align: center; white-space: nowrap; width: 15%; }
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
            <img src="이미지/탄성군_흰색로고.webp" alt="탄성군 로고">
          </div>
          <div class="hyobin-header-text">
            <span class="subtitle">효빈광역시</span>
            <span class="title">탄성군의 시설</span>
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
        <a href="고해역.html">고해역</a> · <a href="도향역.html">도향역</a> · <a href="탄성역.html">탄성역</a> · <a href="고무역.html">고무역</a> · <a href="탄성군청역.html">탄성군청역</a> · <a href="서목역.html">서목역</a> · <a href="승남해수욕장역.html">승남해수욕장역</a> · <a href="야진입구역.html">야진입구역</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈2호선.svg" alt="2호선" class="hyobin-metro-logo" onerror="var p=this.parentNode; p.className='hyobin-subcat'; p.innerText='2호선';"></td>
      <td class="hyobin-content">
        <a href="흑택역.html">흑택역</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈4호선.svg" alt="4호선" class="hyobin-metro-logo" onerror="var p=this.parentNode; p.className='hyobin-subcat'; p.innerText='4호선';"></td>
      <td class="hyobin-content">
        <a href="앵내역.html">앵내역</a> · <a href="도변역.html">도변역</a> · <a href="요우역.html">요우역</a> · <a href="소원역.html">소원역</a> · <a href="잠재역.html">잠재역</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/효빈5호선.svg" alt="5호선" class="hyobin-metro-logo" onerror="var p=this.parentNode; p.className='hyobin-subcat'; p.innerText='5호선';"></td>
      <td class="hyobin-content">
        <a href="도변역.html">도변역</a> · <a href="루비역.html">루비역</a> · <a href="포성산역.html">포성산역</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-metro-cell"><img src="이미지/svg/빈효광역선.svg" alt="빈효광역" class="hyobin-metro-logo" onerror="var p=this.parentNode; p.className='hyobin-subcat'; p.innerText='빈효광역';"></td>
      <td class="hyobin-content">
        <a href="고해역.html">고해역</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">일반철도</td>
      <td class="hyobin-subcat">빈효선</td>
      <td class="hyobin-content">
        <a href="고해역.html">고해역</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">고속도로</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈외곽순환고속도로(고해IC.html">효빈외곽순환고속도로(고해IC</a> · <a href="소원IC.html">소원IC</a> · <a href="정근JC).html">정근JC)</a> · <a href="덕북고속도로(도향IC.html">덕북고속도로(도향IC</a> · <a href="정근JC).html">정근JC)</a> · <a href="효빈빈주고속도로(효빈JC.html">효빈빈주고속도로(효빈JC</a> · <a href="이자IC).html">이자IC)</a> · <a href="효빈서해고속도로(서목IC.html">효빈서해고속도로(서목IC</a> · <a href="야진IC.html">야진IC</a> · <a href="효빈JC).html">효빈JC)</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">공원</td>
      <td colspan="2" class="hyobin-content">
        <a href="탄성공원.html">탄성공원</a> · <a href="다이아공원.html">다이아공원</a> · <a href="루비공원.html">루비공원</a> · <a href="아이스크림공원.html">아이스크림공원</a> · <a href="고무공원.html">고무공원</a> · <a href="명채공원.html">명채공원</a> · <a href="말우공원.html">말우공원</a> · <a href="공리공원.html">공리공원</a> · <a href="상량공원.html">상량공원</a> · <a href="고해역철도공원.html">고해역철도공원</a> · <a href="승남공원.html">승남공원</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">체육시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈컨트리클럽.html">효빈컨트리클럽</a> · <a href="효빈네메시스골프클럽.html">효빈네메시스골프클럽</a> · <a href="포성정 탄성군민종합운동장.html">포성정 탄성군민종합운동장</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">워터파크</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈 샤이니 리조트.html">효빈 샤이니 리조트</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">종합병원</td>
      <td colspan="2" class="hyobin-content">
        <a href="한국보훈복지의료공단 효빈보훈병원.html">한국보훈복지의료공단 효빈보훈병원</a> · <a href="배식병원.html">배식병원</a>
      </td>
    </tr>
    <tr>
      <td rowspan="3" class="hyobin-cat">상업시설</td>
      <td class="hyobin-subcat">전통시장</td>
      <td class="hyobin-content">
        <a href="탄성시장.html">탄성시장</a> · <a href="도변시장.html">도변시장</a> · <a href="고해시장.html">고해시장</a> · <a href="도향시장.html">도향시장</a> · <a href="탄성야진시장.html">탄성야진시장</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-subcat">대형마트</td>
      <td class="hyobin-content">
        <a href="롯데마트 도변점.html">롯데마트 도변점</a> · <a href="홈플러스 탄성점.html">홈플러스 탄성점</a>(<a href="폐점.html">폐점</a>)
      </td>
    </tr>
    <tr>
      <td class="hyobin-subcat">기타시설</td>
      <td class="hyobin-content">
        <a href="다이소 요우사거리점.html">다이소 요우사거리점</a> · <a href="다이소 앵내출장소점.html">다이소 앵내출장소점</a> · <a href="다이소 탄성군청점.html">다이소 탄성군청점</a> · <a href="다이소 서목읍점.html">다이소 서목읍점</a> · <a href="다이소 탄성점.html">다이소 탄성점</a> · <a href="다이소 흑택점.html">다이소 흑택점</a> · <a href="다이소 고해역점.html">다이소 고해역점</a> · <a href="다이소 소원점.html">다이소 소원점</a> · <a href="맥도날드 탄성DT점.html">맥도날드 탄성DT점</a> · <a href="맥도날드 도변DT점.html">맥도날드 도변DT점</a> · <a href="kfc 도변점.html">kfc 도변점</a>(<a href="예정.html">예정</a>) · <a href="버거킹 도변점.html">버거킹 도변점</a> · <a href="버거킹 탄성점.html">버거킹 탄성점</a> · <a href="롯데리아 서목점.html">롯데리아 서목점</a> · <a href="맘스터치 고해점.html">맘스터치 고해점</a> · <a href="서브웨이 도변요우점.html">서브웨이 도변요우점</a> · <a href="서브웨이 탄성점.html">서브웨이 탄성점</a> · <a href="서브웨이 앵내점.html">서브웨이 앵내점</a> · <a href="애니메이트 탄성점.html">애니메이트 탄성점</a> · <a href="효빈교통공사 굿즈샵 도변역점.html">효빈교통공사 굿즈샵 도변역점</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">영화관</td>
      <td colspan="2" class="hyobin-content">
        <a href="메가박스 탄성.html">메가박스 탄성</a> · <a href="CGV 도변.html">CGV 도변</a> · <a href="롯데시네마 도변.html">롯데시네마 도변</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">교통시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="탄성공영차고지.html">탄성공영차고지</a> · <a href="고해차량사업소.html">고해차량사업소</a> · <a href="승남차량사업소.html">승남차량사업소</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">숙박</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈 샤이니 리조트.html">효빈 샤이니 리조트</a> · <a href="워터드롭호텔.html">워터드롭호텔</a> · <a href="마리호텔.html">마리호텔</a> · <a href="도향 피치파크 호텔.html">도향 피치파크 호텔</a> · <a href="서목 캡슐호텔.html">서목 캡슐호텔</a> · <a href="흑택 전통가옥 한옥스테이.html">흑택 전통가옥 한옥스테이</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">종교시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="남송교회.html">남송교회</a> · <a href="탄성교회.html">탄성교회</a> · <a href="장신사.html">장신사</a> · <a href="탄구사.html">탄구사</a> · <a href="탄성성당.html">탄성성당</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">해수욕장</td>
      <td colspan="2" class="hyobin-content">
        <a href="승남해수욕장.html">승남해수욕장</a> · <a href="고해해수욕장.html">고해해수욕장</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">도서관</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈광역시립탄성도서관.html">효빈광역시립탄성도서관</a>(<a href="예정.html">예정</a>) · <a href="탄성군립도서관.html">탄성군립도서관</a> · <a href="탄성군청작은도서관.html">탄성군청작은도서관</a> · <a href="앵내도서관.html">앵내도서관</a> · <a href="탄성군청소년센터 작은도서관.html">탄성군청소년센터 작은도서관</a> · <a href="서목읍작은도서관.html">서목읍작은도서관</a> · <a href="고해읍작은도서관.html">고해읍작은도서관</a> · <a href="소원장난감도서관.html">소원장난감도서관</a> · <a href="도향면작은도서관.html">도향면작은도서관</a> · <a href="정근면 작은도서관.html">정근면 작은도서관</a> · <a href="흑택아이스크림도서관.html">흑택아이스크림도서관</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">선착장</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈유람선 탄성선착장.html">효빈유람선 탄성선착장</a> · <a href="고해선착장.html">고해선착장</a> · <a href="서목선착장.html">서목선착장</a>
      </td>
    </tr>
    <tr>
      <td rowspan="2" class="hyobin-cat">교량</td>
      <td class="hyobin-subcat">팔천강</td>
      <td class="hyobin-content">
        <a href="성저대교.html">성저대교</a> · <a href="분음대교.html">분음대교</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-subcat">기타하천</td>
      <td class="hyobin-content">
        <a href="좌목교.html">좌목교</a> · <a href="안척교.html">안척교</a> · <a href="흑택교.html">흑택교</a> · <a href="부사리교.html">부사리교</a>
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">박물관</td>
      <td colspan="2" class="hyobin-content">
        <a href="공리 생활사·석탄 아카이브관.html">공리 생활사·석탄 아카이브관</a> · <a href="국립효빈과학관.html">국립효빈과학관</a> · <a href="효빈수목원.html">효빈수목원</a> · <a href="효빈테마식물원.html">효빈테마식물원</a>(<a href="예정.html">예정</a>)
      </td>
    </tr>
    <tr>
      <td class="hyobin-cat">추모시설</td>
      <td colspan="2" class="hyobin-content">
        <a href="효빈승화원.html">효빈승화원</a>
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