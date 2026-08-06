// ====== [ assets/hb_index_scripts.js ] ======
// 효빈위키 대문 인라인 스크립트 분리용 (기존 파일과 독립됨, 충돌 방지 패치 완료)

// 초기 로드 시 저장된 설정 적용 (다른 스크립트의 onload를 덮어쓰지 않도록 addEventListener로 변경)
window.addEventListener('DOMContentLoaded', function() {
    // 로그인 상태 확인
    const user = localStorage.getItem('hb_user');
    if (user) {
        setLoginState(user);
    }

    // 다크모드 확인
    const isDark = localStorage.getItem('hb_dark_mode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        const darkModeCheck = document.getElementById('darkModeCheck');
        if(darkModeCheck) darkModeCheck.checked = true;
    }

    // 폰트 크기 확인
    const fontSize = localStorage.getItem('hb_font_size');
    if (fontSize) {
        document.body.style.fontSize = fontSize + '%';
        const fontSizeRange = document.getElementById('fontSizeRange');
        const fontSizeVal = document.getElementById('fontSizeVal');
        if(fontSizeRange) fontSizeRange.value = fontSize;
        if(fontSizeVal) fontSizeVal.innerText = fontSize + '%';
    }
});

// ====== [ 공지사항 데이터 (고정 5개 + 랜덤 풀 120개 통합팩) ] ======

// 1. 항상 상단에 노출되는 고정 공지사항 (5개) - 효빈광역시 및 레일루미네 세계관 완벽 반영
const fixedNotices = [
    { 
        id: "f1", 
        title: "[필독] 효빈위키 기본 편집 지침 개정 및 이미지 업로드 규칙 (2026.07)", 
        content: "효빈위키의 기본 편집 규정이 대대적으로 개정되었습니다.\n\n주요 변경 사항:\n1. 출처가 불분명한 뇌피셜 서술 금지 (효빈일보, 효빈복지방송 등 공신력 있는 지역 언론 교차 검증 필수).\n2. 모든 이미지 파일 업로드 시 파일명은 반드시 '이미지/한국어 단어 이름.webp' 포맷을 유지해야 합니다. (영문, 숫자 조합, 플레이스 홀더 삽입 절대 금지)\n3. 토론 합의 없는 대규모 삭제(문서 날리기) 및 반달리즘 행위 엄단.\n\n위키러 여러분의 자발적이고 성숙한 기여를 부탁드립니다." 
    },
    { 
        id: "f2", 
        title: "[안내] 효빈도시철도 연장 및 신설역(창전선 등) 문서 작성 시 주의사항", 
        content: "최근 개통을 앞둔 창전선(#33AAFF)이나 8호선(연보라색, #9856FF) 유리아 연장안 등 확정되지 않은 철도 떡밥을 기정사실인 양 기재하는 사례가 급증하고 있습니다.\n\n창전구, 안천구 등 관내 대중교통 연장선 및 신설역(가칭) 문서를 작성할 때는 최상단에 반드시 [계획 중] 또는 [루머] 틀을 명시해 주십시오. 뇌피셜로 노선도를 창조하여 시민들에게 혼란을 주는 행위는 즉각 롤백 대상입니다." 
    },
    { 
        id: "f3", 
        title: "[경고] 정치/선거 관련 문서 및 박효빈 시장 관련 훼손 엄단", 
        content: "최근 '윤대환' 전 시장 시절의 흑역사 문서나 박효빈 시장(민선 8·9기) 문서에서 극심한 수정 전쟁이 벌어지고 있습니다.\n\n현직 효빈시장 박효빈은 1996년생 남성이며, 실제 위키 사용자(2003년생)와는 별개의 인물입니다. 시장 문서에 '창조주' 운운하며 세계관 몰입을 깨는 드립이나, 선거철 흑색선전용 다문화 루머를 악의적으로 기재할 경우 예고 없이 영구 차단됩니다. 비판은 오직 시정 평가로만 하십시오." 
    },
    { 
        id: "f4", 
        title: "[행사] 제17회 효빈 애니메이션 페스티벌(HAF) 기념 문서 기여 프로모션", 
        content: "효빈시 최대 서브컬처 행사인 HAF 개최를 맞이하여, 행사장인 북구 고송동 일대 및 '토모리해수욕장' 관련 문서를 알차게 보강해 주신 분들께 한정판 위키 배지를 드립니다.\n\n6호선(보라색, #881188) 고송교차로역 연계 및 3세대 순환버스(Pastel Yellow, #E7D600) 노선 정보, 코스프레 촬영 구역 등 덕후들을 위한 로컬 정보를 풍부하게 채워주세요!" 
    },
    { 
        id: "f5", 
        title: "[공지] 제3기 효빈위키 관리자(사서) 상시 모집 안내", 
        content: "효빈위키를 쾌적하게 가꾸어 나갈 성실한 관리자를 모십니다.\n\n[필수 우대 사항]\n- 효빈도시철도 노선별 색상 코드(1호선 #0077DD, 2호선 #00CCAA, 빈효선 #6677CC 등)를 완벽히 숙지한 철도 덕후.\n- 효빈시 8개 자치구(중, 남, 서, 동, 청엽, 북, 안천, 창전) 및 탄성군의 행정구역 경계를 정확히 파악하고 있는 향토 지리 덕후.\n관심 있으신 분들은 '위키 게시판 - 운영/지원' 탭으로 지원해 주십시오." 
    }
];

// 2. 접속 시마다 무작위로 뽑히는 랜덤 공지사항 (90개) - 효빈시 실정 맞춤형
const randomNotices = [
    { id: "r1", title: "[점검] 효빈위키 DB 서버 정기 점검 안내 (금일 02:00 ~ 04:00)", content: "서버 안정화 및 스토리지 교체를 위한 정기 점검이 진행됩니다. 점검 시간 동안 '편집', '역사 보기', '토론' 기능이 제한됩니다. 편집 중이던 6호선 라세나 문서 데이터가 날아갈 수 있으니 백업해 주시기 바랍니다." },
    { id: "r2", title: "[경고] 박효빈 시장 문서 내 과몰입 서술 주의", content: "박효빈 시장 문서에 '나카스 카스미를 위해 시장이 되었다'는 등 지나치게 사적인 덕질 TMI 서술은 자제해 주시기 바랍니다. 위키는 백과사전입니다. 제9회 지선 76.79% 득표율 등 객관적인 정치 행보 위주로 작성하십시오." },
    { id: "r3", title: "[토론] 북구 사능동 '최애 빵집' 리스트 문서화 관련 합의", content: "특정 상권 사유화 우려로 인해 '사능동 최애 빵집' 문서는 '사능동 제과점 목록'으로 변경되었습니다. 주관적인 별점 평가나 <del>여기 빵 먹고 승천함</del> 같은 감정적인 리뷰는 배제해 주십시오." },
    { id: "r4", title: "[프로젝트] 효빈시 3세대 시내버스 도색 색상코드 표준화", content: "2008년 스타더스트 작전으로 도입된 버스 템플릿 색상 표준화 프로젝트입니다. 간선(Sky Blue, #01B7ED), 지선(Jade Green, #37B484), 급행(Scarlet Red, #D81C2F) 등 지정된 코드를 엄수하십시오." },
    { id: "r5", title: "[안내] 윤대환 전 시장 재판 결과 요약본 작성 가이드라인", content: "윤대환 전 시장 비위 문서는 명예훼손 소지가 큽니다. 나무위키식 맹비난 드립을 배제하고 법원 판결문 원문에 기반하여 건조한 어조(NPOV)로 작성하십시오. <del>물론 시민들 속 터진 건 사실이지만</del>" },
    { id: "r6", title: "[토론] 동구 사가당동 행정구역 개편안 문서명 합의 도출", content: "조국혁신당 조우영 구청장이 당선된 동구의 사가당동 행정구역 경계 분쟁 떡밥 문서 표제어 기준이 확립되었습니다. 중복 문서가 파생되지 않도록 병합 규정을 지켜주시기 바랍니다." },
    { id: "r7", title: "[수정요청] 서신고등학교 및 고송고등학교 교가 가사 추가 요망", content: "북구 고송신도시 인근 명문인 서신고와 고송고 문서에 교가 가사가 누락되어 있습니다. 재학생 위키러들의 기여를 기다립니다. (교가 음원 무단 업로드는 즉시 삭제 및 차단됩니다.)" },
    { id: "r8", title: "[안내] 실제 애니 캐릭터와 동명이인 서술 지침", content: "효빈시 내 상호명이나 지명이 일본 애니메이션 캐릭터와 우연히 겹친다고 해서 과몰입하여 동일 인물로 서술하는 행위를 금지합니다. 문서 상단에 반드시 [동명이인] 틀을 부착하십시오." },
    { id: "r9", title: "[모집] 효빈은행 및 효빈패스(H-Pass) 상세 정보 작성자", content: "효빈시 대중교통 혁신 정책인 효빈패스(H-Pass)의 최신 환급 혜택 및 효빈은행 지역화폐 연동 약관 문단을 정확하게 채워주실 핀테크 덕후 위키러를 애타게 찾습니다." },
    { id: "r10", title: "[안내] 북구청역(1, 6호선) 및 남구청역(4호선) 동음이의어 처리", content: "효빈광역시 북구청/남구청 관공서 문서와 도시철도 역 문서 간의 검색 혼동을 막기 위해, 각 문서 최상단에 상호 동음이의어(Disambiguation) 및 리다이렉트 안내 틀이 완비되었습니다." },
    { id: "r11", title: "[안내] 이미지 업로드 시 '한국어 이름.webp' 강제 적용 공지", content: "서버 트래픽 과부하 방지 및 시스템 파싱을 위해, 효빈위키에 업로드되는 모든 이미지는 반드시 '이미지/한국어단어이름.webp' 포맷이어야 합니다. 영문 파일명 업로드 시 즉시 삭제됩니다." },
    { id: "r12", title: "[모집] 효빈외곽순환도로 및 주요 나들목(IC) 정보 요망", content: "외곽순환도로 톨게이트 디자인 틀은 완성되었으나, 개별 나들목(IC) 문서가 심각한 토막글입니다. 특히 창전구 방면 진출입로의 화물차 체증 정보를 중점적으로 채워주세요." },
    { id: "r13", title: "[안내] 창전선 마스코트 '심세이' 설정 보강 안내", content: "2027년 개통 예정인 창전선(#33AAFF)의 마스코트 심세이(블랙 헤어+블루 브릿지, 스케이트보드화)의 현대적이고 시크한 성격 설정이 레일루미네 공식 발표를 바탕으로 문서에 추가되었습니다." },
    { id: "r14", title: "[경고] 5호선 마스코트 미소하 억지 록 밴드 밈 서술 금지", content: "5호선(빨간색, #EE0022) 미소하를 타 작품 보컬과 억지로 엮어 '평소대로의 5호선입니다' 같은 뇌절 드립을 넣는 반달리즘을 금지합니다. '따뜻한 쿨 뷰티 철도원'이라는 공식 설정만 기재하십시오." },
    { id: "r15", title: "[토론] 효빈항 국제여객터미널 출퇴근 헬게이트 묘사 수위", content: "효빈항 인근 물류 노동자들의 출퇴근 시간대 교통 체증 및 4호선 혼잡도 묘사가 <del>숨쉬기도 힘들다</del> 다소 자극적이라는 의견이 있어, 서술 수위 조절 토론이 진행 중입니다." },
    { id: "r16", title: "[점검] 다크모드 적용 시 8호선(연보라색) 텍스트 깨짐 패치", content: "모바일 다크모드에서 8호선 상징색(#9856FF) 템플릿 내부 글씨가 하얀색 배경과 겹쳐 가독성이 심각하게 떨어지던 버그가 수정되었습니다. 브라우저 캐시를 비워주시기 바랍니다." },
    { id: "r17", title: "[모집] 탄성군 토모리해수욕장 흑택루비지구 상권 정보", content: "효빈시의 주요 여름 피서지인 토모리해수욕장 해안가의 흑택루비지구 및 청덕지구에 신규 입점한 프랜차이즈 상가 및 오션뷰 맛집 리스트를 문서화해주실 탄성군 로컬 위키러를 모집합니다." },
    { id: "r18", title: "[안내] 오사카 시즈쿠 머리색 '파란색' 오기재 일괄 롤백", content: "3세대 간선버스와 매칭되는 오사카 시즈쿠의 상징색이 1호선의 파란색(#0077DD)으로 잘못 기재된 문서 14건이, 공식 버스 색상인 Sky Blue(#01B7ED)로 일괄 수정되었습니다." },
    { id: "r19", title: "[경고] 코노에 카나타 마을버스 문서를 임의 이동 훼손 금지", content: "마을버스(Violet, #A664A0) 매칭 캐릭터 코노에 카나타의 문서 표제어를 지속적으로 '오우미 카나타'로 임의 리다이렉트시키는 악의적 훼손이 발생하여, 해당 문서는 관리자 보호 조치되었습니다." },
    { id: "r20", title: "[프로젝트] 효빈일보, 효빈복지방송 인터넷 기사 아카이브 보존", content: "효빈 지역 언론의 과거 기사 데드링크를 막기 위해, 위키 각주에 기사 출처를 달 때 Web Archive 주소를 의무적으로 병기하는 대규모 보존 프로젝트를 실시합니다." },
    { id: "r21", title: "[토론] 김지언 북구청장 주요 공약 이행률 서술 방향 합의", content: "더불어민주당 김지언 북구청장(재선) 문서의 '공약 이행' 문단을 작성할 때, 편파적 비판을 막기 위해 북구청 보도자료와 지역 언론 기사를 교차 검증하여 객관적으로 기재하기로 합의되었습니다." },
    { id: "r22", title: "[모집] 북구 중수동 법조타운 및 학교 출신 인물 틀 작성", content: "행정의 중심 북구 중수동 인근 학교들의 '출신 인물' 템플릿 양식이 통일되었습니다. 누락된 지역 출신 유명 인물이나 정치인이 있다면 틀 양식에 맞춰 추가해 주시기 바랍니다." },
    { id: "r23", title: "[공지] 1세대 파스텔톤 버스(1995~2002) 고화질 실물 사진 수집", content: "낭만이 넘쳤던 크림색 바탕의 연하늘/연두색 1세대 효빈 시내버스 고화질 사진을 수집 중입니다. 개인 소장 중인 필름 사진(CC0 라이선스)의 '한국어 이름.webp' 업로드를 환영합니다." },
    { id: "r24", title: "[토론] 관광 해양열차 운행 시간표 변경에 따른 각 역 문서 갱신", content: "어간항, 서해항 등 해안가를 도는 관광 열차의 시간표 개편 공문이 내려옴에 따라, 해당 열차가 정차하는 2호선(초록색) 및 일반철도 역들의 시간표 템플릿을 봇으로 일괄 수정합니다." },
    { id: "r25", title: "[안내] 빈주권 광역철도(코레일 블루) 그래픽 리뉴얼 적용", content: "효빈위키 디자인 팀이 제작한 SVG 기반의 통합 빈주노선도(빈주권 광역철도 #005BAC 포함) 그래픽이 교통 관련 철도 문서 최상단에 일괄 적용되었습니다. 확대해도 깨지지 않습니다." },
    { id: "r26", title: "[모집] 효빈대학교 천주캠퍼스 IT 전공자들의 문서 기여 요망", content: "효빈대 컴퓨터공학과 학회 여러분! DB, 인프라 관련 문서들의 퀄리티가 심각한 토막글 수준입니다. 전공 지식을 바탕으로 IT 카테고리를 살찌워주세요." },
    { id: "r27", title: "[공지] 효빈광역시 내 소규모 영화관 지점 문서 통합", content: "단순히 주소만 적혀 있어 내용이 부실한 일부 소규모 메가박스, CGV 지점 문서는 '메가박스/효빈광역시' 등 브랜드별 지역 하위 문단으로 리다이렉트 통합 조치 중입니다." },
    { id: "r28", title: "[안내] 7호선 마스코트 임세정·임세하(분홍색) 쌍둥이 설정 억까 주의", content: "7호선(#FF8899)의 임세정(언니)과 임세하(동생)는 10살 터울의 자매입니다. 나이 차이에서 오는 성격이 뚜렷하므로, 쌍둥이로 묶거나 특정 캐릭터로 장난스럽게 부르는 행위를 금지합니다." },
    { id: "r29", title: "[경고] 박효빈 시장 유년기 악의적 루머(다문화/빈곤) 조롱 엄단", content: "과거 선거철 불거졌던 박효빈 시장의 가정사(필리핀 어머니)나 극빈층 시절을 악의적으로 기재하고 조롱하는 반달 행위는 아이피 단위로 영구 차단됩니다. 비판은 공약 이행률로만 하십시오." },
    { id: "r30", title: "[공지] 2026년 상반기 기준 효빈광역시 8개 자치구 인구 통계 갱신", content: "효빈시청 공식 발표 자료를 바탕으로, 효빈시 산하 8구(북, 남, 동, 서, 중, 청엽, 안천, 창전) 및 탄성군, 리 단위 하위 문서의 최상단 인포박스 인구수 현황이 일괄 갱신되었습니다." },
    { id: "r31", title: "[경고] 철도 마스코트와 뱅드림 캐릭터 간 과몰입 밈 주의", content: "1호선 고나미, 3호선 박라미 등 레일루미네 마스코트를 단순히 특정 뱅드림 캐릭터와 색상이 비슷하다는 이유로 동일 인물로 서술하는 억지 밈을 금지합니다. 이는 엄연한 독자연구입니다." },
    { id: "r32", title: "[프로젝트] 1세대 파스텔톤 시내버스 종이 승차권 아카이빙", content: "효빈패스가 없던 90년대 시절, 1세대 버스에서 사용되었던 학생용 종이 회수권과 일반용 토큰의 실물 스캔본을 수집하여 교통 역사 카테고리에 영구 보존하는 프로젝트가 진행 중입니다." },
    { id: "r33", title: "[안내] 2세대 두청운수 갈색(똥색) 버스 흑역사 묘사 허용", content: "2003~2007년 운행된 두청운수 버스 문서에 한해, 당시 75인승 과적과 <del>척추를 부수는 플라스틱 시트</del>의 고통을 생생하게 묘사하는 나무위키식 취소선 드립 서술을 예외적으로 대폭 허용합니다." },
    { id: "r34", title: "[경고] 8호선 유리아(연보라색) 문서 억지 무사도 드립 자제", content: "8호선(#9856FF) 공식 마스코트인 금발 교환학생 유리아 문서에 와카미야 이브를 연상케 하는 '무사도' 드립 뇌절을 멈춰주십시오. 연선 관광지 안내자라는 본래 설정에 집중해 주십시오." },
    { id: "r35", title: "[공지] 탄성군 관할 '리(里)' 단위 생략 구역 표기 기준 통일", content: "탄성군 소원면, 고해면 등 인구 과소로 인해 개별 문서가 생략되고 상위 읍/면 문서에 통합 서술되는 '리 생략 구역'들의 목차 디자인 및 리다이렉트 가이드라인이 공지되었습니다." },
    { id: "r36", title: "[안내] 도시철도 노선 색상표 (HEX) 강제 적용 봇 가동", content: "1호선(#0077DD), 4호선(#FF5522) 등 노선도 템플릿에 서울시 색상이나 유사 색상을 섞어 쓰는 것을 막기 위해, 지정된 코드가 아니면 강제로 교정하는 봇(Bot)이 금일부터 가동됩니다." },
    { id: "r37", title: "[경고] 1호선 마스코트 고나미에게 파란색 기타 합성 짤 업로드 롤백", content: "1호선 공식 마스코트 고나미(#0077DD) 일러스트에 파란색 일렉 기타를 억지로 합성한 불법 이미지가 파일 서버에 업로드되고 있습니다. 적발 시 즉시 업로드 권한이 회수됩니다." },
    { id: "r38", title: "[수정요청] 6호선 건강보험공단역 리다이렉트 및 민원 일화 보강", content: "6호선(보라색, #881188) 건강보험공단역의 '건보공단역' 검색 누락 이슈가 있습니다. 또한 개통 당시 약칭 사용을 두고 벌어진 인근 상인들의 항의 일화를 효빈일보 기사로 보충해 주십시오." },
    { id: "r39", title: "[모집] 3호선 마스코트 '박라미' 고유 공식 설정 작성자", content: "3호선(노란색, #FFCC11) 마스코트 박라미가 제과점 빵순이 밈으로만 도배되고 있습니다. 등산 배낭 기믹과 활기찬 안내방송 톤 등 레일루미네의 독자적인 설정을 풍성하게 채워주세요." },
    { id: "r40", title: "[모집] 1호선 비마리유적지구역 심야 말발굽 괴담 문서화", content: "1호선 탄성지선(파란색) 비마리유적지구역 주변에서 심야에 들린다는 소음 괴담을 민속학적 시각에서 다루어주실 향토 덕후를 모십니다. (단순한 선로 마찰음이라는 팩트체크도 포함 요망)" },
    { id: "r41", title: "[토론] 3세대 급행버스(Scarlet Red, #D81C2F) 난폭운전 묘사 수위", content: "유키 세츠나 컬러가 매칭된 급행버스 문서에서 기사들의 과속 질주 묘사가 <del>타면 목숨을 걸어야 한다</del> 과장되어 있어, 객관적인 통계 위주로 서술 수위를 조절하기 위한 토론이 진행 중입니다." },
    { id: "r42", title: "[수정요청] 2호선 어간지선 '어간수산시장역' 마스코트 안내방송", content: "2호선(초록색, #00CCAA) 어간수산시장역 문서에 주말 새벽 수산물 경매 시간대의 <del>바다 비린내</del> 묘사와, 마스코트 하루빈의 시장 특화 사투리 안내방송 스크립트 추가가 시급합니다." },
    { id: "r43", title: "[안내] 덕빈북도 관할 3호선 연장 부동산 투기 떡밥 팩트체크", content: "3호선(노란색)이 덕빈북도 일대로 연장된다는 부동산 커뮤니티발 뇌피셜 루머가 기승입니다. 해당 내용 작성 시 반드시 [사실무근] 틀을 씌우고 효빈시청의 부인 보도자료를 링크하십시오." },
    { id: "r44", title: "[공지] 2021년 효빈대 부동산학과 강의실 사건 서술 지침", content: "북구에 위치한 효빈대학교 천주캠퍼스 강의실 사건 문서는 민감한 이슈입니다. 네티즌들의 억측이나 드립을 일절 삼가시고 학교 측 공식 징계 발표문과 지역 뉴스 위주로만 건조하게 기재하세요." },
    { id: "r45", title: "[안내] 1호선 탄성지선 종점 '승남해수욕장역' 배차 간격 서술", content: "1호선(파란색) 탄성지선의 극악무도한 배차 간격이 2026년 하반기 기준으로 업데이트되었습니다. 연선 주민들의 불만과 관련해 <del>열차 놓치면 걸어가는 게 빠름</del> 취소선 드립을 적극 허용합니다." },
    { id: "r46", title: "[수정요청] 3세대 광역버스(Royal Blue, #485EC6) 정차역 리스트", content: "아사카 카린 컬러가 매칭된 3세대 광역버스(Royal Blue)의 도심~외곽 급행 정차역 리스트가 2024년 과거 버전으로 방치되어 있습니다. 2026년 최신 노선도 및 거리비례제 요금표로 갱신 바랍니다." },
    { id: "r47", title: "[안내] 3세대 마을버스(Violet, #A664A0) 산동네 드리프트 주행 탑승기", content: "코노에 카나타 컬러 마을버스들의 안천구 일대 가파른 경사로 <del>도랑타기 이니셜D</del> 드리프트 주행 묘사 문단이 신설되었습니다. 체감 승차감 탑승기를 팩트 기반으로 추가해 주세요." },
    { id: "r48", title: "[모집] 시티투어버스(Navy, #7777AA) 요금표 가독성 문제 및 코스 맵", content: "시이나 타키 색상 시티투어버스의 어두운 남색(#7777AA) 템플릿 배경에 묻힌 검은색 폰트를 하얀색으로 수정 바랍니다. 아울러 핵심 랜드마크 순환 코스의 SVG 일러스트 맵을 제작해 주실 금손을 찾습니다." },
    { id: "r49", title: "[경고] 빈효선 마스코트 '전노아' 과몰입 방지 전용 틀 훼손 금지", content: "빈효선 광역전철(연청색, #6677CC)의 발랄한 마스코트 전노아 문서 최상단에, 특정 뱅드림 캐릭터와의 억지 동일시를 경고하는 전용 틀이 부착되었습니다. 해당 틀을 임의로 지우지 마십시오." },
    { id: "r50", title: "[안내] 4호선 마스코트 다로나 별모양 뿔 헤어핀 설정 오류 롤백", content: "4호선(주황색, #FF5522) 다로나의 공식 디자인에 억지로 고양이 귀나 별 모양을 합성한 불법 일러스트가 일괄 삭제되고, 효빈도시철도의 공식 원본(.webp)으로 전면 교체되었습니다." },
    { id: "r51", title: "[토론] 1호선 탄성지선 종점 승남해수욕장역 피서객 수요 묘사", content: "1호선 승남해수욕장역(#0077DD) 문서가 부실합니다. 여름철 피서객 수요 폭발 시기의 열차 증편 현황과, 본선 곽암해수욕장역과의 묘한 관광객 유치 라이벌 기믹 서술을 대폭 보강해 주십시오." },
    { id: "r52", title: "[안내] 덕빈북도 관할 하위 행정구역 승격 시 템플릿 변경 규정", content: "효빈광역시 인접 덕빈북도 지역에 신도시 개발로 인한 인구 급증 시, 기존 읍/면 통합 문서에서 개별 리 단위 문서로 분리될 때의 상위 템플릿 변경 규정이 추가되었습니다." },
    { id: "r53", title: "[경고] 윤대환 전 시장 재임 시절 비리 문서 추측성 실명 거론 금지", content: "윤대환 전 시장의 건설 비리 및 이권 개입 사건 문서에, 법원 판결이 확정되지 않은 지역 유력 인사들의 실명을 뇌피셜로 거론하는 행위는 심각한 명예훼손이므로 즉각 롤백 및 차단됩니다." },
    { id: "r54", title: "[수정요청] 안천구 관할 핵심 상권 형성 과정 심층 분석", content: "안천구 상업 중심지 문서가 빈약합니다. 인접 자치구와 상권 파이를 뺏고 빼앗기며 성장한 요인과 대형 마트 입점을 둘러싼 지역 상인회와의 갈등을 경제학적 관점에서 깊이 있게 서술해 주실 분을 찾습니다." },
    { id: "r55", title: "[모집] 외곽 탄성군 마을 특산물 및 마을버스(Violet) 연계망", content: "탄성군 외곽 농촌 마을 문서에 지역 특산물 정보와 중심지 장터를 이어주는 마을버스(#A664A0) 연계망 정보가 누락되어 있습니다. 지역 향토 지리와 교통편에 빠삭한 위키러의 신속한 보충이 필요합니다." },
    { id: "r56", title: "[프로젝트] 북구 고송신도시 산업 구조 변화사 작성 및 연대기 기재", content: "북구 고송신도시가 과거 전통 농업 중심지에서 시청 이전 및 대형 상업 단지(애니메이트 등)로 어떻게 천지개벽했는지 시대별 사진 자료와 함께 연대기를 작성하는 아카이빙 프로젝트가 개설되었습니다." },
    { id: "r57", title: "[안내] 창전구 겨울철 대규모 지역 축제 문서 독립 분리", content: "창전구 문서 내에서 매년 수십만 명의 인파가 몰려드는 대형 지역 축제 파트의 분량이 너무 길어져, 가독성과 문서 균형을 위해 해당 축제 문서를 독립된 문서로 완전히 분리 파생시켰습니다." },
    { id: "r58", title: "[토론] 청엽구 대규모 산업단지 투기 떡밥 서술 방향", content: "청엽구 일대의 신규 첨단 산업단지 지정 및 부동산 투기 세력 유입 논란과 관련하여, 불확실한 찌라시를 복붙하지 말고 오직 효빈시청 고시 공문과 정식 언론 기사에 한해서만 서술하기로 합의했습니다." },
    { id: "r59", title: "[수정요청] 중구 구도심 토지 구획 정리 사업 현황 및 갈등 일화", content: "중구 구도심 재정비를 위한 토지 구획 정리 사업이 지지부진한 상황입니다. 보상금 산정 문제 및 대대로 살아온 지역 주민들의 거센 반발 일화를 중립적 시각에서 깔끔하게 정리해 주실 분을 모집합니다." },
    { id: "r60", title: "[안내] 효빈시 창전구 vs 덕빈북도 북고송 행정 경계 분쟁 일화 추가", content: "창전구 문서 최하단에 과거 덕빈북도 북고송 지역과 쓰레기 매립지 및 하천 관리 구역 책임을 놓고 벌였던 치열한 행정 경계 분쟁 일화가 1990년대 효빈일보 기사 아카이브와 함께 상세히 추가되었습니다." },
    { id: "r61", title: "[프로젝트] 효빈 6호선 '오내사거리역' ~ '오내역' 지하상가 지도", content: "6호선(보라색, #881188) 연선 최대 상권인 오내사거리역~오내역 구간 초대형 지하상가(일명 효빈시의 코엑스, 오내던전)의 복잡한 미로 구조와 출구 정보를 SVG로 그려주실 능력자 위키러를 찾습니다." },
    { id: "r62", title: "[경고] 전천중앙역(5, 6호선 환승) 막장환승 서술 시 과장 묘사 금지", content: "전천중앙역 5호선(#EE0022)과 6호선(#881188) 환승 동선이 깊은 것은 사실이나, '환승에 30분 걸린다', '지하 벙커다' 등의 비현실적 과장 서술은 삭제됩니다. 성인 도보 기준 5~7분 환승 시간에 입각해 서술하십시오." },
    { id: "r63", title: "[토론] 박효빈 시장 취임식 당시 '1996년생 최연소' 밈 문서화 분리", content: "박효빈 시장의 2022년 당선 당시 '1996년생 20대 전국 최연소 광역단체장' 타이틀 화제 및 나이 관련 흑색선전을 박효빈 문서의 별도 하위 문단으로 완전히 분리하여 작성할 것인지에 대한 토론이 열렸습니다." },
    { id: "r64", title: "[안내] 동구 관할 하위 행정구역 대형 아파트 단지 입주 승격", content: "조우영 구청장 관할 동구의 일부 행정구역이 대형 아파트 단지 입주로 인구수가 급증하여, 기존 통합 문서에서 개별 문서로 분리 승격되었습니다. 지리, 상권 정보 추가에 힘써주십시오." },
    { id: "r65", title: "[모집] 3세대 공항버스(Light Green, #84C36E) 28인승 우등 시트 리뷰", content: "엠마 베르데 컬러가 매칭된 3세대 공항버스의 최고급 28인승 우등 리무진 시트 승차감과, 타사 고속버스 우등 시트와의 쿠션감 비교 분석 리뷰를 객관적인 어조로 적어주실 버스 덕후 리뷰어를 환영합니다." },
    { id: "r66", title: "[안내] 2호선(초록색) 본선 '효빈공단역' 오후 6시 헬게이트 문단 신설", content: "2호선(#00CCAA) 한가운데 위치한 효빈공단역 문서 하단에, 매일 오후 6시 정각 수천 명의 근로자가 쏟아져 나와 개찰구가 마비되는 <del>워킹데드 좀비 사태</del> 퇴근길 헬게이트 묘사 문단이 생생하게 신설되었습니다." },
    { id: "r67", title: "[수정요청] 2호선 어간지선 '항동1가역' 수산물 악취 묘사", content: "2호선(초록색) 항동1가역 문서에 새벽 시간대 해산물 탑승으로 진동하는 <del>비린내</del> 냄새 묘사와 함께, 환기 시설 가동을 알리는 하루빈의 탈취제 드립 안내방송 스크립트를 재치있게 추가 요망합니다." },
    { id: "r68", title: "[경고] 두청운수 2세대 갈색 버스 허위 대형 사고 기재 엄격 금지", content: "2세대(2003~2007) 똥색 버스 시절 75인승 과적의 악명은 팩트이나, 이를 과장하여 '버스가 전복되어 수십 명 사상' 같은 허위 대형 인명 사고를 지어내 기재하는 행위는 위키 신뢰도 하락의 주범으로 엄벌에 처합니다." },
    { id: "r69", title: "[토론] 7호선 임세정·임세하(분홍색) 자매 교대 근무표 기재 방식", content: "분홍색(#FF8899) 7호선의 안내를 번갈아 맡는 임세정, 임세하 자매의 평일/주말 시간대별 촘촘한 교대 근무표를 개별 역 문서마다 기재할지, 7호선 본 문서 하단에만 기재할지 효용성을 놓고 논의 중입니다." },
    { id: "r70", title: "[공지] 이미지 업로드 시 '한국어 단어.webp' 통일 재강조", content: "효빈시 관내 지하철역, 버스 사진 등을 업로드할 때는 무조건 '이미지/한국어 단어 이름.webp' 규칙을 철저히 준수해야 합니다. 영문명이나 jpg 포맷 업로드 시 엑스박스를 유발하므로 즉시 삭제 처리됩니다." },
    { id: "r71", title: "[안내] 빈효선 마스코트 전노아(연청색) 공식 일러스트 화질 개선", content: "빈효선 광역전철(연청색, #6677CC)의 발랄한 마스코트 전노아 최상단 프로필 사진이 고화질 원본 파일로 교체되었습니다. 특정 캐릭터를 덧그린 저화질 훼손판 재업로드 시 계정 차단됩니다." },
    { id: "r72", title: "[모집] 8호선 유리아 안내방송 한국어/영어/일본어 대본 완벽 작성자", content: "8호선(연보라색, #9856FF) 공식 마스코트 유리아의 특유의 억양이 가미된 3개 국어(한/영/일) 환승역 안내방송 스크립트를 정확하게 받아 적어주실 능력자 위키러를 찾습니다. (무사도 드립 삽입 금지)" },
    { id: "r73", title: "[프로젝트] 효빈대 천주캠퍼스 인근 대학가 vs 5호선 청엽국제학교역 상권", content: "같은 5호선(#EE0022) 라인이지만 분위기가 완전히 다른 가성비 대학 상권과 고급 주거지 학군 상권의 물가, 식당 라인업 차이를 사회경제적으로 비교 분석하는 프로젝트입니다." },
    { id: "r74", title: "[경고] 효빈 8구 및 탄성군 역대 구청장/군수 계보 문서 훼손 금지", content: "효빈광역시 관할 8개 자치구 및 탄성군의 역대 구청장과 군수 계보 표를 각 자치구 문서 하단에 일괄 적용하는 프로젝트 중, 특정 정치인 당적을 임의로 변경하는 훼손 행위 적발 시 차단됩니다." },
    { id: "r75", title: "[안내] 3세대 좌석버스(Vivid Orange, #FF5800) 외곽순환 신규 노선도 갱신", content: "미야시타 아이 컬러가 매칭된 3세대 좌석버스 노선 중, 최근 도심 정체를 피해 효빈 외곽순환도로를 경유하도록 개편된 노선들의 정류장 목록이 2026년 버전으로 최신화 완료되었습니다." },
    { id: "r76", title: "[토론] 1호선 탄성지선 종점 승남해수욕장역 피서객 수요 묘사", content: "1호선 탄성지선(#0077DD) 승남해수욕장역 인근의 여름철 피서객 수요 폭발 현황을 다루는 문서가 빈약합니다. 관광객 유치 라이벌 기믹 서술 보강에 대한 토론에 참여해 주십시오." },
    { id: "r77", title: "[수정요청] 효빈국제공항역(3호선) 출국장 면세점 입점 브랜드 최신화", content: "3호선(노란색, #FFCC11) 종착역인 효빈국제공항역 내부 출국장 면세구역에 입점한 주요 명품 브랜드 및 식음료(F&B) 매장 전체 목록을 2026년 공항공사 최신 버전으로 업데이트 바랍니다." },
    { id: "r78", title: "[경고] 창전선 마스코트 심세이 억지 서사 삽입 금지", content: "새롭게 추가된 창전선 마스코트 심세이(#33AAFF) 문서에 공식 레일루미네 설정과 무관한 과도한 창작 서사를 덧붙이는 행위를 금지합니다. 위키는 팬픽 소설 창작 공간이 아닙니다." },
    { id: "r79", title: "[안내] 3세대 버스(Pastel Yellow, #E7D600) 순환버스 노선망 문서 분리", content: "나카스 카스미 컬러가 매칭된 순환버스의 노선도 문서가 방대해짐에 따라, 자치구별 내부 순환 노선과 도심 외부 순환 노선을 별도의 하위 문서로 깔끔하게 분리 정리하였습니다." },
    { id: "r80", title: "[모집] 빈주 1호선(황금색, #CFBA0F) 및 2호선(보라색, #C455F6) 환승 가이드", content: "빈주권_전철과 직결되는 빈주 1호선 마스코트 박빛나, 빈주 2호선 김소빈이 안내하는 환승역 동선 및 승강장 구조도를 상세하게 작성해 주실 광역 철도망 덕후를 모집합니다." },
    { id: "r81", title: "[프로젝트] 효빈항 여객터미널 인근 4호선(주황색) 화물차 체증 묘사", content: "4호선(#FF5522) 다로나가 관할하는 효빈항 해운산업지구 주변의 만성적인 대형 화물차 꼬리물기 및 출퇴근 버스 체증 현상을 효빈시청 교통과 통계 자료를 바탕으로 아카이빙합니다." },
    { id: "r82", title: "[토론] 3호선 박라미 등산 배낭 설정과 인근 등산로 연계 서술", content: "3호선(#FFCC11) 마스코트 박라미의 등산 배낭 기믹에 맞춰, 3호선 연선(북고송 일대 등)의 주요 등산로 및 하산 코스 맛집 리스트를 위키에 수록할지 여부에 대한 난상 토론이 진행 중입니다." },
    { id: "r83", title: "[안내] 빈효선 광역전철(#6677CC) 전노아 안내방송 멘트 수정", content: "빈효선(연청색) 열차 내에서 송출되는 마스코트 전노아의 스마트폰 통화 컨셉 안내방송 멘트 스크립트가 2026년 최신 코레일 협정 버전에 맞게 문구 전체가 교정되었습니다." },
    { id: "r84", title: "[경고] 덕주 1호선 마스코트 이덕희(핫핑크) 파견 설정 왜곡 금지", content: "덕주 1호선(핫핑크, #FF4F91) 마스코트 이덕희가 1호선으로 파견되었다는 공식 레일루미네 설정을 무시하고, 자의적으로 노선 배속을 변경하여 기재하는 행위는 롤백 대상입니다." },
    { id: "r85", title: "[수정요청] 창전구 인근 신규 택지지구 입주에 따른 마을버스 노선 갱신", content: "창전구 외곽에 새롭게 조성된 대규모 택지지구 아파트 단지를 경유하는 마을버스(Violet, #A664A0) 신설 노선 및 배차 간격 정보를 각 정류소 게시판을 참고하여 최신화해 주십시오." },
    { id: "r86", title: "[안내] 7호선(분홍색, #FF8899) 출퇴근 급행 열차 도입 떡밥 팩트체크", content: "7호선 전 구간에 급행 열차가 도입된다는 커뮤니티발 소문과 관련하여, 대피선 구조상 불가능하다는 효빈교통공사의 공식 해명 자료를 문서 최상단에 팩트체크 박스로 추가했습니다." },
    { id: "r87", title: "[모집] 효빈시청 신청사(북구 고송동) 투어 관람 가이드 작성", content: "북구 고송동에 위치한 효빈시청 신청사 내부의 시민 개방 구역, 시의회 본회의장 방청 방법 및 구내식당 <del>가성비 맛집</del> 이용 꿀팁을 위키에 상세히 기록해 주실 시민 리뷰어를 찾습니다." },
    { id: "r88", title: "[프로젝트] 탄성군 내부 농어촌버스 구형 도색 사진 아카이빙", content: "효빈 시내버스와 달리 탄성군 외곽 마을을 도는 오래된 농어촌버스의 과거 구형 도색 차량 실물 사진(한국어 단어.webp)을 발굴하여 교통 역사 카테고리에 보존하는 프로젝트입니다." },
    { id: "r89", title: "[토론] 북구청역(1, 6호선) 주변 랜드마크 서술 비중 조절", content: "북구청역 문서에서 행정 관청인 북구청에 대한 설명보다 주변의 애니메이트 등 서브컬처 상권 묘사가 압도적으로 많은 불균형 문제를 해결하기 위해 서술 비중 조정 토론이 열렸습니다." },
    { id: "r90", title: "[공지] 이미지 업로드 시 '한국어 단어 이름.webp' 절대 준수", content: "다시 한번 강력히 공지합니다. 레일루미네 캐릭터, 3세대 버스 도색, 효빈시 랜드마크 등 모든 사진을 효빈위키 파일 서버에 업로드할 때는 무조건 '이미지/한국어 단어.webp' 명명 규칙을 철저히 준수하십시오." }
];

// 3. 맵핑
const noticeData = {};
fixedNotices.forEach(n => noticeData[n.id] = n);
randomNotices.forEach(n => noticeData[n.id] = n);

// 4. HTML에 공지사항을 그려주는 함수 (고정 5개 + 랜덤 5개 = 10개)
window.renderNotices = function() {
    const ul = document.querySelector('.notice-list');
    if(!ul) return;
    
    ul.innerHTML = ''; 

    // 고정 공지 5개 렌더링
    fixedNotices.forEach((n) => {
        let badge = '<span class="font-bold text-[#7777AA]">[필독]</span>';
        if(n.title.includes('[행사]')) badge = '<span class="font-bold text-pink-500">[행사]</span>';
        if(n.title.includes('[경고]')) badge = '<span class="font-bold text-red-500">[경고]</span>';
        if(n.title.includes('[공지]')) badge = '<span class="font-bold text-[#7777AA]">[공지]</span>';
        if(n.title.includes('[안내]')) badge = '<span class="font-bold text-gray-500">[안내]</span>';
        
        let displayTitle = n.title.replace(/\[.*?\]\s*/, '');
        ul.innerHTML += `<li onclick="openNotice('${n.id}')">${badge} ${displayTitle}</li>`;
    });

    ul.innerHTML += `<div class="border-b border-gray-200 my-2 border-dashed"></div>`;

    // 랜덤 공지 30개 중 5개 렌더링 (원래 코드 기준)
    let shuffled = [...randomNotices].sort(() => 0.5 - Math.random());
    let selectedRandoms = shuffled.slice(0, 5);

    selectedRandoms.forEach(n => {
        let badge = '<span class="font-bold text-gray-500">[안내]</span>';
        if(n.title.includes('[토론]')) badge = '<span class="font-bold text-blue-500">[토론]</span>';
        if(n.title.includes('[모집]')) badge = '<span class="font-bold text-green-600">[모집]</span>';
        if(n.title.includes('[점검]')) badge = '<span class="font-bold text-orange-500">[점검]</span>';
        if(n.title.includes('[경고]')) badge = '<span class="font-bold text-red-500">[경고]</span>';
        if(n.title.includes('[프로젝트]')) badge = '<span class="font-bold text-purple-500">[프젝]</span>';
        if(n.title.includes('[공지]')) badge = '<span class="font-bold text-[#7777AA]">[공지]</span>';
        if(n.title.includes('[수정요청]')) badge = '<span class="font-bold text-indigo-500">[수정]</span>';

        let displayTitle = n.title.replace(/\[.*?\]\s*/, ''); 
        ul.innerHTML += `<li onclick="openNotice('${n.id}')">${badge} ${displayTitle}</li>`;
    });
};

// 공지사항 열기 함수
window.openNotice = function(id) {
    const data = noticeData[id];
    if (data) {
        document.getElementById('noticeTitle').innerText = data.title;
        document.getElementById('noticeContent').innerText = data.content;
        toggleModal('noticeModal');
    }
}

// 기본 검색 기능 (숫자 입력 시 버스 문서로 이동)
function handleSearch(inputId) {
    const id = inputId || 'headerSearchInput';
    const inputElement = document.getElementById(id);
    if (!inputElement) return;
    const query = inputElement.value.trim();
    
    if (query) {
        const isNumber = /^\d+$/.test(query);
        if (isNumber) {
            window.location.href = "bus_" + query + ".html";
        } else {
            window.location.href = query + ".html";
        }
    } else {
        showMsg('문서 제목을 입력해주세요.');
    }
}

// 메시지 박스
function showMsg(text) {
    const box = document.getElementById('wiki-msg-box');
    box.innerText = text; 
    box.style.display = 'block';
    setTimeout(() => { box.style.display = 'none'; }, 2000);
}

// 모달 토글
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
        // 포커스 설정
        if(modalId === 'loginModal') {
            setTimeout(() => document.getElementById('loginId').focus(), 100);
        } else if(modalId === 'signupModal') {
            setTimeout(() => document.getElementById('signupId').focus(), 100);
        }
    }
}

// --- 회원가입 및 로그인 로직 ---
function doSignup() {
    const id = document.getElementById('signupId').value.trim();
    const pw = document.getElementById('signupPw').value;
    const pwConfirm = document.getElementById('signupPwConfirm').value;

    if (!id || !pw) {
        showMsg('아이디와 비밀번호를 모두 입력해주세요.');
        return;
    }
    if (pw !== pwConfirm) {
        showMsg('비밀번호가 일치하지 않습니다.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('hb_db_users') || '{}');

    if (users[id]) {
        showMsg('이미 존재하는 아이디입니다.');
        return;
    }

    users[id] = pw;
    localStorage.setItem('hb_db_users', JSON.stringify(users));

    showMsg('회원가입 완료! 로그인해주세요.');
    toggleModal('signupModal');
    toggleModal('loginModal');
    
    document.getElementById('loginId').value = id;
    document.getElementById('loginPw').focus();
}

function doLogin() {
    const id = document.getElementById('loginId').value.trim();
    const pw = document.getElementById('loginPw').value;

    if (!id || !pw) {
        showMsg('아이디와 비밀번호를 입력하세요.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('hb_db_users') || '{}');

    if (users.hasOwnProperty(id)) {
        if (users[id] === pw) {
            localStorage.setItem('hb_user', id);
            setLoginState(id);
            toggleModal('loginModal');
            showMsg(id + '님 환영합니다!');
        } else {
            showMsg('비밀번호가 틀렸습니다.');
        }
    } else {
        showMsg('존재하지 않는 아이디입니다. 회원가입을 해주세요.');
    }
}

function doLogout() {
    localStorage.removeItem('hb_user');
    location.reload();
}

function setLoginState(username) {
    const container = document.getElementById('auth-buttons');
    container.innerHTML = `
        <button class="bg-[#555] text-white text-xs px-2 py-0.5 rounded cursor-default">👤 ${username}</button>
        <button onclick="doLogout()" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors">로그아웃</button>
        <button onclick="toggleModal('settingsModal')" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors">설정</button>
    `;
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('hb_dark_mode', isDark);
}

function changeFontSize(val) {
    document.body.style.fontSize = val + '%';
    document.getElementById('fontSizeVal').innerText = val + '%';
    localStorage.setItem('hb_font_size', val);
}

// 기존 window.onclick을 덮어쓰지 않도록 addEventListener로 수정
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
    }
});

// ===== HyobinWiki Search Enhancer (index) =====
(function(){
    const MAX_RECENT = 8;
    const RECENT_KEY = "hb_recent_searches";

    function norm(s){ return (s||"").toString().trim(); }
    // 띄어쓰기까지 전부 무시하고 비교하도록 강화
    function normKey(s){ return norm(s).toLowerCase().replace(/\s+/g, ""); }

    function loadRecent(){
        try{ return JSON.parse(localStorage.getItem(RECENT_KEY)||"[]") || []; }catch(e){ return []; }
    }
    function saveRecent(list){
        try{ localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0,MAX_RECENT))); }catch(e){}
    }
    function pushRecent(q){
        q = norm(q);
        if(!q) return;
        const list = loadRecent().filter(x=>normKey(x)!==normKey(q));
        list.unshift(q);
        saveRecent(list);
    }

    function ensureDropdown(input){
        // HTML 업데이트로 mainSearchInput가 사라졌으므로, headerSearchInput에 맞춰서 설정
        const wrap = input.parentElement;
        if(wrap && getComputedStyle(wrap).position === "static") wrap.style.position = "relative";

        let dd = wrap.querySelector(".hb-autocomplete");
        if(!dd){
            dd = document.createElement("div");
            dd.className = "hb-autocomplete";
            dd.style.position = "absolute";
            // 네비게이션 바 우측에 맞춰서 드롭다운 생성 (디자인 개선)
            dd.style.right = "0";
            dd.style.left = "auto";
            dd.style.top = "100%";
            dd.style.marginTop = "8px";
            dd.style.width = "280px"; 
            dd.style.background = "white";
            dd.style.border = "1px solid rgba(0,0,0,0.12)";
            dd.style.borderRadius = "8px";
            dd.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
            dd.style.overflow = "hidden";
            dd.style.zIndex = "9999";
            dd.style.maxHeight = "280px";
            dd.style.overflowY = "auto";
            dd.style.display = "none";
            wrap.appendChild(dd);
        }
        return dd;
    }

    function hideDropdown(dd){ if(dd) dd.style.display = "none"; }
    function showDropdown(dd){ if(dd) dd.style.display = "block"; }

    // [핵심 패치] 대문 HTML 링크 대신 wiki_index.js의 1000개 데이터 전체를 긁어오도록 수정!
    function getCombinedWikiList() {
        const list = [];
        const seen = new Set();

        // 1. 원본 파일 목록 가져오기
        const pages = window.HB_WIKI_PAGES || [];
        pages.forEach(p => {
            const title = typeof p === "string" ? p : p.title;
            const href = typeof p === "string" ? p + ".html" : (p.href || p.title + ".html");
            const key = normKey(title);
            if(!seen.has(key)) {
                seen.add(key);
                list.push({title: title, href: href});
            }
        });

        // 2. 별칭(Aliases) 목록 싹 다 가져오기
        const aliases = window.HB_WIKI_ALIASES || {};
        for(let alias in aliases) {
            const href = aliases[alias];
            const key = normKey(alias);
            if(!seen.has(key)) {
                seen.add(key);
                list.push({title: alias, href: href});
            }
        }
        return list;
    }

    // 전역 변수로 검색 리스트 선언
    let WIKI_LIST = [];

    function score(item, q){
        const t = normKey(item.title);
        const k = normKey(q);
        if(!k) return 0;
        if(t === k) return 100;
        if(t.startsWith(k)) return 60;
        if(t.includes(k)) return 30;
        return 0;
    }

    function renderDropdown(dd, input, q){
        dd.innerHTML = "";
        const query = norm(q);
        const recent = loadRecent();

        const mkRow = (label, cb, muted=false) => {
            const row = document.createElement("button");
            row.type="button";
            row.style.display="flex";
            row.style.width="100%";
            row.style.alignItems="center";
            row.style.justifyContent="space-between";
            row.style.gap="12px";
            row.style.padding="10px 12px";
            row.style.fontSize="13px";
            row.style.background="white";
            row.style.border="0";
            row.style.textAlign="left";
            row.style.cursor= muted ? "default" : "pointer";
            row.onmouseenter=()=>{ if(!muted) row.style.background="rgba(0,0,0,0.04)"; };
            row.onmouseleave=()=>{ row.style.background="white"; };
            row.innerHTML = `<span style="color:${muted?'#888':'#111'}">${label}</span>`;
            if(!muted) row.addEventListener("click", cb);
            dd.appendChild(row);
            return row;
        };

        if(!query){
            mkRow("최근 검색어", ()=>{}, true).style.fontWeight="800";
            if(recent.length===0){
                mkRow("검색어를 입력하세요", ()=>{}, true);
            } else {
                recent.forEach(r=>{
                    mkRow(r, ()=>{ input.value=r; window.handleSearch(input.id); });
                });
                const clear = mkRow("최근 검색어 지우기", ()=>{
                    saveRecent([]);
                    renderDropdown(dd,input,"");
                });
                clear.style.color="#b91c1c";
            }
            showDropdown(dd);
            return;
        }

        const matches = WIKI_LIST
            .map(it=>({it, s: score(it, query)}))
            .filter(x=>x.s>0)
            .sort((a,b)=>b.s-a.s || a.it.title.localeCompare(b.it.title))
            .slice(0,8)
            .map(x=>x.it);

        if(matches.length===0){
            mkRow("일치하는 문서가 없습니다", ()=>{}, true);
        } else {
            matches.forEach(it=>{
                mkRow(it.title, ()=>{
                    pushRecent(query);
                    location.href = it.href;
                });
            });
        }
        showDropdown(dd);
    }

    function showModalResults(query, items){
        let modal = document.getElementById("hb-search-modal");
        if(!modal){
            modal = document.createElement("div");
            modal.id = "hb-search-modal";
            modal.style.position="fixed";
            modal.style.inset="0";
            modal.style.background="rgba(0,0,0,0.4)";
            modal.style.zIndex="10000";
            modal.style.display="none";
            modal.innerHTML = `
                <div data-close="1" style="position:absolute; inset:0;"></div>
                <div style="position:relative; margin:80px auto 0; width:min(820px,94vw); background:white; border-radius:18px; overflow:hidden; box-shadow:0 20px 50px rgba(0,0,0,0.35);">
                    <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 14px; border-bottom:1px solid rgba(0,0,0,0.08);">
                        <div style="font-weight:900; font-size:14px;">검색 결과</div>
                        <button type="button" data-close="1" style="padding:6px 10px; border-radius:10px; border:0; background:rgba(0,0,0,0.04); cursor:pointer;">닫기</button>
                    </div>
                    <div style="padding:12px 14px;">
                        <div id="hb-search-meta" style="font-size:12px; color:#666; margin-bottom:10px;"></div>
                        <div id="hb-search-list" style="border-top:1px solid rgba(0,0,0,0.06);"></div>
                    </div>
                </div>
            `;
            modal.addEventListener("click", (e)=>{
                const t = e.target;
                if(t && t.getAttribute && t.getAttribute("data-close")==="1") close();
            });
            document.body.appendChild(modal);
        }
        const meta = modal.querySelector("#hb-search-meta");
        const list = modal.querySelector("#hb-search-list");
        meta.textContent = `“${query}” 결과 ${items.length}건`;
        list.innerHTML = "";

        if(items.length===0){
            const empty = document.createElement("div");
            empty.style.padding="12px 0";
            empty.style.color="#666";
            empty.style.fontSize="13px";
            empty.textContent = "일치하는 문서가 없습니다.";
            list.appendChild(empty);
        } else {
            items.slice(0,30).forEach(it=>{
                const row = document.createElement("a");
                row.href = it.href;
                row.style.display="block";
                row.style.padding="12px 6px";
                row.style.textDecoration="none";
                row.style.color="#111";
                row.style.borderBottom="1px solid rgba(0,0,0,0.06)";
                row.innerHTML = `<div style="font-weight:800; margin-bottom:3px;">${it.title}</div>
                                 <div style="font-size:12px; color:#666;">${it.href}</div>`;
                list.appendChild(row);
            });
        }

        function open(){ modal.style.display="block"; document.body.style.overflow="hidden"; }
        function close(){ modal.style.display="none"; document.body.style.overflow=""; }
        modal._hbClose = close;
        open();
    }

    // Override/upgrade handleSearch
    window.handleSearch = function(inputId){
        const input = document.getElementById(inputId);
        if(!input) return;
        const q = norm(input.value);
        if(!q) return;

        if(/^\d+$/.test(q)){
            pushRecent(q);
            location.href = `bus_${q}.html`;
            return;
        }

        const k = normKey(q);
        const exact = WIKI_LIST.find(it=>normKey(it.title)===k);
        if(exact){
            pushRecent(q);
            location.href = exact.href;
            return;
        }

        const matches = WIKI_LIST
            .map(it=>({it, s: score(it, q)}))
            .filter(x=>x.s>0)
            .sort((a,b)=>b.s-a.s || a.it.title.localeCompare(b.it.title))
            .map(x=>x.it);

        pushRecent(q);

        if(matches.length===0){
            location.href = `${encodeURIComponent(q)}.html`;
            return;
        }
        // 팝업 띄우는 함수 대신 효빈위키 검색.html로 이동하도록 처리
        location.href = encodeURI("효빈위키 검색.html") + "?q=" + encodeURIComponent(q);
    };

    // DOMContentLoaded 이후 바인딩
    window.addEventListener('DOMContentLoaded', () => {
        // [핵심 패치] 페이지 로드가 끝나면 DB를 전부 읽어서 WIKI_LIST 세팅!
        setTimeout(() => {
            WIKI_LIST = getCombinedWikiList();
        }, 100);

        // 중앙 검색창 대신 상단 네비게이션 검색창을 타겟으로 지정
        const input = document.getElementById("headerSearchInput");
        if(!input) return;
        const dd = ensureDropdown(input);

        input.addEventListener("keydown", (e)=>{
            if(e.key==="Enter"){
                e.preventDefault();
                hideDropdown(dd);
                window.handleSearch(input.id);
            } else if(e.key==="Escape"){
                hideDropdown(dd);
                input.blur();
            }
        });

        input.addEventListener("input", ()=>{
            renderDropdown(dd, input, input.value);
        });
        input.addEventListener("focus", ()=>{
            renderDropdown(dd, input, input.value);
        });

        document.addEventListener("click", (e)=>{
            if(!e.target) return;
            const wrap = input.parentElement;
            if(wrap && wrap.contains(e.target)) return;
            hideDropdown(dd);
        });
    });
})();

// ====== [ 자동 추천 문서 & 최근 변경 내역 & 인기 검색어 (랜덤 시뮬레이션) ] ======

// 배열에서 원하는 개수만큼 중복 없이 랜덤으로 뽑아주는 함수
function getRandomDocs(count) {
    if (!window.HB_WIKI_PAGES || window.HB_WIKI_PAGES.length === 0) return [];
    
    let result = [];
    let usedIndices = new Set();
    let max = window.HB_WIKI_PAGES.length;
    let actualCount = Math.min(count, max);
    
    while (result.length < actualCount) {
        let randIndex = Math.floor(Math.random() * max);
        if (!usedIndices.has(randIndex)) {
            usedIndices.add(randIndex);
            result.push(window.HB_WIKI_PAGES[randIndex]);
        }
    }
    return result;
}

// 오늘의 추천 문서 업데이트
window.updateRecommend = function() {
    const docs = getRandomDocs(1);
    if(docs.length === 0) return;
    const doc = docs[0];

    const titleEl = document.getElementById('recommend-title');
    const imgEl = document.getElementById('recommend-img');
    const descEl = document.getElementById('recommend-desc');

    if(titleEl && imgEl && descEl) {
        titleEl.innerText = doc.title;
        titleEl.href = doc.href;
        
        // 1. 이미지 파일명 기본 세팅
        let imgFileName = doc.title;
        
        // 2. 역 문서인지 확인 (예: '도변역' 또는 '효빈역(일반열차)')
        if (doc.title.endsWith('역') || doc.title.includes('역(')) {
            imgFileName = doc.title + '_승강장'; // 역_승강장.webp 매칭
        }
        
        imgEl.src = '이미지/' + imgFileName + '.webp';
        
        // 3. 에러 시 대체 로고 (한국어 규칙 무시하고 hyobin1.webp 적용)
        imgEl.onerror = function() { 
            this.onerror = null; // 무한루프 방지
            this.src = '이미지/hyobin1.webp'; 
        };
        
        descEl.innerText = "수많은 효빈위키 문서 중 무작위 알고리즘을 통해 선정된 오늘의 추천 문서입니다. 위키러 여러분의 많은 기여와 내용 보충을 부탁드립니다!";
    }
};

// 최근 변경 내역 업데이트 (위키 감성 눈속임)
window.updateRecentChanges = function() {
    const docs = getRandomDocs(5); 
    if(docs.length === 0) return;
    
    const table = document.getElementById('recent-changes-table');
    if(!table) return;
    
    table.innerHTML = ''; 

    docs.forEach(doc => {
        const timeStr = Math.floor(Math.random() * 59 + 1) + (Math.random() > 0.5 ? '분 전' : '초 전');
        const byteChange = Math.floor(Math.random() * 1000) - 300; 
        
        let byteStr = '';
        if (byteChange > 0) {
            byteStr = `<span class="text-green-600 text-xs">(+${byteChange})</span>`;
        } else if (byteChange < 0) {
            byteStr = `<span class="text-red-500 text-xs">(${byteChange})</span>`;
        } else {
            byteStr = `<span class="text-gray-500 text-xs">(0)</span>`;
        }

        const row = `
            <tr>
                <td><a href="${doc.href}" class="wiki-link">${doc.title}</a></td>
                <td class="text-right"><span class="time-badge">${timeStr}</span> ${byteStr}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
};

// 실시간 인기 검색어 업데이트
window.updatePopularSearches = function() {
    const docs = getRandomDocs(5);
    if(docs.length === 0) return;
    
    const list = document.getElementById('popular-searches-list');
    if(!list) return;
    
    list.innerHTML = ''; 

    docs.forEach(doc => {
        const li = `<li><a href="${doc.href}" class="wiki-link text-[var(--wiki-text)]">${doc.title}</a></li>`;
        list.innerHTML += li;
    });
};

// =========================================================================
// 통합 DOMContentLoaded 이벤트 (공지사항 렌더링 + 추천/최근변경 업데이트)
// =========================================================================
window.addEventListener('DOMContentLoaded', () => {
    // 1. 공지사항 렌더링 실행
    if(typeof renderNotices === 'function') {
        renderNotices();
    }

    // 2. 파일 목록 기반 추천 문서, 최근 변경 내역 등 실행
    setTimeout(() => {
        if(window.HB_WIKI_PAGES && window.HB_WIKI_PAGES.length > 0) {
            updateRecommend();
            updateRecentChanges();
            updatePopularSearches();
        }
    }, 100);
});

// ====== [ 추가 패치: '더보기' 드롭다운 메뉴 및 임의의 문서 이동 로직 ] ======

window.addEventListener('DOMContentLoaded', () => {
    // 1. 네비게이션 바에서 '더보기' 버튼 자동 탐색 (HTML 수정 불필요)
    const moreBtn = Array.from(document.querySelectorAll('a')).find(el => el.textContent.includes('더보기'));
    
    if (moreBtn) {
        // 기존 href 이동 막기
        moreBtn.href = "javascript:void(0);";
        
        // 클릭 이벤트 바인딩
        moreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMoreDropdown(moreBtn);
        });
    }

    // 외부 클릭 시 드롭다운 닫기
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('hb-more-dropdown');
        if (menu && menu.style.display === 'block') {
            if (e.target !== moreBtn && !moreBtn.contains(e.target) && !menu.contains(e.target)) {
                menu.style.display = 'none';
            }
        }
    });
});

// 더보기 메뉴 토글 함수
function toggleMoreDropdown(btn) {
    let menu = document.getElementById('hb-more-dropdown');
    
    // 메뉴가 없으면 최초 1회 생성
    if (!menu) {
        menu = document.createElement('div');
        menu.id = 'hb-more-dropdown';
        menu.style.position = 'absolute';
        menu.style.background = 'var(--wiki-box-bg, #ffffff)';
        menu.style.border = '1px solid var(--wiki-border, #ccc)';
        menu.style.borderRadius = '6px';
        menu.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        menu.style.padding = '5px 0';
        menu.style.zIndex = '10001';
        menu.style.minWidth = '130px';
        menu.style.display = 'none';
        
        // 다크모드 대응을 위한 전환 효과
        menu.style.transition = 'background-color 0.3s, border-color 0.3s';

        // 위키 표준 더보기 메뉴 리스트
        const menuItems = [
            { text: '🎲 임의의 문서', action: 'window.goToRandomPage()' },
            { text: '📂 파일 올리기', href: '파일_올리기.html' },
            { text: '📝 필요한 문서', href: '필요한_문서.html' },
            { text: '📊 위키 통계', href: '통계.html' },
            { text: '❓ 도움말', href: '도움말.html' }
        ];

        menuItems.forEach(item => {
            const a = document.createElement('a');
            a.innerText = item.text;
            a.style.display = 'block';
            a.style.padding = '10px 16px';
            a.style.color = 'var(--wiki-text, #333)';
            a.style.textDecoration = 'none';
            a.style.fontSize = '13px';
            a.style.fontWeight = 'bold';
            a.style.cursor = 'pointer';
            
            if (item.href) {
                a.href = item.href;
            } else if (item.action) {
                a.setAttribute('onclick', item.action);
            }

            // 마우스 호버 효과 (다크모드 변수 활용)
            a.onmouseenter = () => a.style.background = 'var(--wiki-gray-bg, #f0f0f0)';
            a.onmouseleave = () => a.style.background = 'transparent';

            menu.appendChild(a);
        });

        document.body.appendChild(menu);
    }

    // 메뉴 열기 / 닫기
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        const rect = btn.getBoundingClientRect();
        // 버튼 바로 아래에 위치 계산
        menu.style.top = (rect.bottom + window.scrollY + 8) + 'px';
        
        // 화면 오른쪽 밖으로 넘어가지 않도록 위치 보정
        if (rect.left + 130 > window.innerWidth) {
            menu.style.right = (window.innerWidth - rect.right - window.scrollX) + 'px';
            menu.style.left = 'auto';
        } else {
            menu.style.left = (rect.left + window.scrollX) + 'px';
            menu.style.right = 'auto';
        }
        
        menu.style.display = 'block';
    }
}

// 임의의 문서(Random Page) 이동 함수
window.goToRandomPage = function() {
    if (window.HB_WIKI_PAGES && window.HB_WIKI_PAGES.length > 0) {
        // 배열에서 랜덤하게 하나 뽑기
        const randIndex = Math.floor(Math.random() * window.HB_WIKI_PAGES.length);
        const doc = window.HB_WIKI_PAGES[randIndex];
        
        // 문자열인지 객체인지 판별하여 href 추출
        const href = typeof doc === "string" ? doc + ".html" : (doc.href || doc.title + ".html");
        
        // 이동
        location.href = href;
    } else {
        if(typeof showMsg === 'function') {
            showMsg("문서 데이터가 로드되지 않았습니다.");
        } else {
            alert("문서 데이터가 로드되지 않았습니다.");
        }
        // 메뉴 창 닫기
        const menu = document.getElementById('hb-more-dropdown');
        if(menu) menu.style.display = 'none';
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // 1. 카테고리 박스 찾기
    const categoryBox = document.querySelector('.category-box');
    
    // 문서 내에 카테고리 박스가 없으면 작동하지 않고 종료
    if (!categoryBox) return;

    // 카테고리 박스 안의 텍스트 전체를 가져옵니다. (예: "분류: 효빈광역시의 초등학교 | 북구...")
    const categoryText = categoryBox.innerText; 
    
    // 타겟 학교(초, 중, 고) 키워드가 있는지 확인
    const isTargetSchool = categoryText.includes('초등학교') || 
                           categoryText.includes('중학교') || 
                           categoryText.includes('고등학교');
    
    // 제외할 학교(대학교) 키워드가 있는지 확인
    const isUniversity = categoryText.includes('대학교');

    // 초/중/고등학교이면서 대학교가 아닌 문서일 경우에만 삽입 실행
    if (isTargetSchool && !isUniversity) {
        // 동적으로 script 태그 생성
        const script = document.createElement('script');
        
        // 저장해두신 파일 경로로 수정
        script.src = 'assets/틀_교육기관.js'; 
        
        // 카테고리 박스(categoryBox)의 바로 다음 형제 요소(nextSibling) 위치에 스크립트를 삽입
        // 즉, <div class="category-box">...</div> 바로 아래에 틀이 생성됩니다.
        categoryBox.parentNode.insertBefore(script, categoryBox.nextSibling);
    }
});