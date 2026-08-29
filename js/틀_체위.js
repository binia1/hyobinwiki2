// SPA 및 뷰어 환경에 맞게 즉시 실행 함수(IIFE)로 렌더링
(function() {
    const templateHtml = `


<div class="category-box">
    <span class="font-bold" style="color: var(--wiki-main);">분류:</span>
    <a class="wiki-link" href="성관계.html">성관계</a> | <a class="wiki-link" href="둘러보기_틀/성.html">둘러보기 틀/성</a>
</div>

<table style="width: 100%; border-collapse: collapse; text-align: center; margin: 15px 0; width: 100%; border: 2px solid #f77;">
    <tbody>
        <tr><td style="background-color: #f77;"><strong><a class="wiki-link" href="체위.html"><span>#white,#white 체위와 [[성관계</a></span>]]</strong></td></tr>
        <tr><td><div style="margin: 0 -10px -5px; min-height: calc(1.5em + 5px)"></td></tr>
    </tbody>
</table>
<details><summary> 펼치기 · 접기 </summary><div>
<div style="margin: -5px -1px -11px">
<table style="width: 100%; border-collapse: collapse; text-align: center; margin: 15px 0; width: 100%; border: 1px solid #ccc;">
    <tbody>
        <tr><td><colcolor=#fff,#fff> <strong>기본 체위</strong></td><td><a class="wiki-link" href="정상위.html">정상위</a> · <a class="wiki-link" href="기승위.html">기승위</a> · <a class="wiki-link" href="후배위.html">후배위</a> · <a class="wiki-link" href="좌위.html">좌위</a> · <a class="wiki-link" href="측위.html">측위</a> · <a class="wiki-link" href="입위.html">입위</a></td></tr>
        <tr><td><strong>변형 체위</strong></td><td><a class="wiki-link" href="굴곡위.html">굴곡위</a> · <a class="wiki-link" href="신장위.html">신장위</a> · <a class="wiki-link" href="들박#체위.html">들박#체위</a> · <a class="wiki-link" href="후배위#Prone_bone.html">프론본</a> · <a class="wiki-link" href="아마존(동음이의어)#체위.html">아마존</a> · <a class="wiki-link" href="풀_넬슨#체위.html">풀 넬슨</a> · <a class="wiki-link" href="다이슈키_홀드.html">다이슈키 홀드</a> · <a class="wiki-link" href="nigga_flip.html">니가 플립</a></td></tr>
        <tr><td><a class="wiki-link" href="집단_성교.html"><span>#fff,#fff <strong>집단 성교</strong></span></a></td><td><a class="wiki-link" href="난교.html">난교</a> · <a class="wiki-link" href="섹스_파티.html">섹스 파티</a> · <a class="wiki-link" href="쓰리썸.html">쓰리썸</a> · <a class="wiki-link" href="Double_Penetration.html">더블 페네트레이션</a> · <a class="wiki-link" href="역갱뱅.html">역갱뱅</a> · <a class="wiki-link" href="갱뱅.html">갱뱅</a> · <a class="wiki-link" href="붓카케#s-2.html">붓카케#s-2</a> · <a class="wiki-link" href="스와핑.html">스와핑</a></td></tr>
        <tr><td>#fff,#fff <strong>비삽입 체위</strong></span></td><td><a class="wiki-link" href="항문_성교.html">항문 성교</a> · <a class="wiki-link" href="트윈_푸시잡.html">트윈 푸시잡</a> · <a class="wiki-link" href="페깅.html">페깅</a> · <a class="wiki-link" href="스마타.html">스마타</a> · <a class="wiki-link" href="프롯.html">프롯</a> · <a class="wiki-link" href="밴대질.html">밴대질</a></td></tr>
        <tr><td><a class="wiki-link" href="구강성교.html"><span>#fff,#fff <strong>구강성교</strong></span></a></td><td><a class="wiki-link" href="펠라치오.html">펠라치오</a> · <a class="wiki-link" href="커닐링구스.html">커닐링구스</a> · <a class="wiki-link" href="69자세.html">69</a> · <a class="wiki-link" href="청소페라.html">청소페라</a> · <a class="wiki-link" href="딥_스로트#s-2.html">딥 스로트#s-2</a> · <a class="wiki-link" href="곳쿤.html">곳쿤</a></td></tr>
        <tr><td><a class="wiki-link" href="사정(생물).html"><span>#fff,#fff <strong>사정</strong></span></a></td><td><a class="wiki-link" href="질내사정.html">질내사정</a> · <a class="wiki-link" href="체외사정.html">체외사정</a> · <a class="wiki-link" href="시오후키#s-3.html">시오후키#s-3</a> · <a class="wiki-link" href="크림파이(속어).html">크림파이</a> · <a class="wiki-link" href="입싸.html">입싸</a></td></tr>
        <tr><td><a class="wiki-link" href="애무.html"><span>#fff,#fff <strong>애무</strong></span></a></td><td><a class="wiki-link" href="전희.html">전희</a> · <a class="wiki-link" href="애무#s-1.html">애무#s-1</a> · <a class="wiki-link" href="후희.html">후희</a> · <a class="wiki-link" href="핸드잡.html">핸드잡</a> · <a class="wiki-link" href="풋잡.html">풋잡</a> · <a class="wiki-link" href="파이즈리.html">파이즈리</a> · <a class="wiki-link" href="리밍(애무).html">리밍</a> · <a class="wiki-link" href="드라이_오르가슴.html">드라이 오르가슴</a></td></tr>
        <tr><td><a class="wiki-link" href="BDSM.html"><span>#fff,#fff <strong>BDSM 관련</strong></span></a></td><td><a class="wiki-link" href="스팽킹#s-2.3.html">스팽킹#s-2.3</a> · <a class="wiki-link" href="이물질_삽입.html">이물질 삽입</a> · <a class="wiki-link" href="피스팅.html">피스팅</a> · <a class="wiki-link" href="볼버스팅.html">볼버스팅</a> · <a class="wiki-link" href="페이스시팅.html">페이스시팅</a> · <a class="wiki-link" href="수치플레이#s-1.html">수치플레이#s-1</a> · <a class="wiki-link" href="피깅.html">피깅</a> · <a class="wiki-link" href="골든_샤워.html">골든 샤워</a> · <a class="wiki-link" href="세이프_워드.html">세이프 워드</a></td></tr>
        <tr><td><a class="wiki-link" href="도착증.html"><span>#fff,#fff <strong>기타 도착증 관련</strong></span></a></td><td><a class="wiki-link" href="착의_섹스.html">착의 섹스</a> · <a class="wiki-link" href="모닝_섹스.html">모닝 섹스</a> · <a class="wiki-link" href="야외_섹스.html">야외 섹스</a> · <a class="wiki-link" href="카섹스.html">카섹스</a> · <a class="wiki-link" href="마일하이_클럽.html">마일하이 클럽</a> · <a class="wiki-link" href="폰섹스.html">폰섹스</a> · <a class="wiki-link" href="니플퍽.html">니플퍽</a> · <a class="wiki-link" href="카베시리.html">카베시리</a> · <a class="wiki-link" href="스카톨로지.html">스카톨로지</a> · <a class="wiki-link" href="관장#s-3.2.2.html">관장#s-3.2.2</a> · <a class="wiki-link" href="섹스파트너.html">섹스파트너</a></td></tr>
        <tr><td><a class="wiki-link" href="자위행위.html"><span>#fff,#fff <strong>자위행위</strong></span></a></td><td><a class="wiki-link" href="금딸.html">금딸</a> · <a class="wiki-link" href="대딸.html">대딸</a> · <a class="wiki-link" href="모서리_자위.html">모서리 자위</a> · <a class="wiki-link" href="바닥_자위.html">바닥 자위</a> · <a class="wiki-link" href="상상딸.html">상상딸</a> · <a class="wiki-link" href="요도_삽입_기구.html">요도 자위</a> · <a class="wiki-link" href="자위행위.html">자위행위</a> <span>-2 (<a class="wiki-link" href="자위행위/역사.html">역사</a></span> · <span>-2 <a class="wiki-link" href="자위행위/방법/남성.html">방법/남성</a></span> · <span>-2 <a class="wiki-link" href="자위행위/방법/여성.html">방법/여성</a></span>) · <a class="wiki-link" href="직캠딸.html">직캠딸</a>  · <a class="wiki-link" href="폭딸.html">폭딸</a> · <a class="wiki-link" href="항문_자위.html">항문 자위</a></td></tr>
        <tr><td><strong>관련 사고</strong></td><td><a class="wiki-link" href="복상사.html">복상사</a> · <a class="wiki-link" href="자기색정사.html">자기색정사</a> · <a class="wiki-link" href="질경련.html">질경련</a> · <a class="wiki-link" href="발기부전.html">발기부전</a></td><td></div></details></div></td></tr>
    </tbody>
</table>
    `;

    // 효빈위키 렌더러가 템플릿을 호출한 스크립트 위치를 정확히 타겟팅합니다.
    const currentScript = document.currentScript;
    if (currentScript) {
        currentScript.insertAdjacentHTML('beforebegin', templateHtml);
    } else {
        // Fallback: currentScript를 지원하지 않을 경우
        document.write(templateHtml);
    }
})();