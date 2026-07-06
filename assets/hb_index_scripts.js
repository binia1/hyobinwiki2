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
        document.getElementById('darkModeCheck').checked = true;
    }

    // 폰트 크기 확인
    const fontSize = localStorage.getItem('hb_font_size');
    if (fontSize) {
        document.body.style.fontSize = fontSize + '%';
        document.getElementById('fontSizeRange').value = fontSize;
        document.getElementById('fontSizeVal').innerText = fontSize + '%';
    }
});

// ====== [ 공지사항 데이터 (고정 5개 + 랜덤 풀 120개 통합팩) ] ======

// 1. 항상 상단에 노출되는 고정 공지사항 (5개) - 설명 대폭 보강
const fixedNotices = [
    { 
        id: "f1", 
        title: "[필독] 효빈위키 기본 편집 지침 개정 및 안내 (2026.04)", 
        content: "효빈위키의 기본 편집 규정이 대대적으로 개정되었습니다.\n\n주요 변경 사항:\n1. 출처가 불분명한 뇌피셜 및 카더라 통신 서술 금지 (효빈일보, 효빈복지방송 등 공신력 있는 지역 언론 보도의 교차 검증이 필수적입니다. 블로그나 커뮤니티 썰은 출처로 인정되지 않습니다.)\n2. 특정 문서 사유화 및 자신만의 독자연구 작성 시 즉각 영구 차단 조치됩니다.\n3. 토론 합의 없는 대규모 삭제(문서 날리기) 및 반달리즘 행위 엄단.\n4. 파일 업로드 시 반드시 '한국어 단어 이름.png' 포맷을 유지할 것. (영문, 숫자 조합 절대 금지)\n\n위키러 여러분의 자발적이고 성숙한 기여를 부탁드립니다." 
    },
    { 
        id: "f2", 
        title: "[안내] 효빈광역시 행정구역 및 대중교통 문서 작성 시 주의사항", 
        content: "최근 효빈도시철도 노선도(특히 연장 떡밥이 도는 8호선 유리아 연장안이나 1호선 탄성지선 추가 연장안 등)나 시내버스 노선 개편안에 대해 확정되지 않은 루머를 기정사실인 양 기재하는 사례가 급증하고 있습니다.\n\n대중교통 연장선 및 신설역(가칭), 행정구역 개편 떡밥 관련 문서를 작성할 때는 최상단에 반드시 [계획 중] 또는 [루머] 틀을 명시해 주십시오. 뇌피셜로 노선도를 창조하여 시민들에게 혼란을 주는 행위는 롤백 대상입니다." 
    },
    { 
        id: "f3", 
        title: "[경고] 정치/선거 관련 문서 및 박효빈 시장 관련 훼손 엄단", 
        content: "최근 '윤대환' 전 시장 문서와 과거 선거(북구 병 이찬대 vs 유줄리 등) 문서에서 극심한 수정 전쟁이 벌어지고 있습니다. 특정 정치인에 대한 지나친 미화나 맹목적인 비난은 NPOV(중립적 관점) 위배로 즉각 차단됩니다.\n\n또한, 현직 효빈시장인 '박효빈'은 1996년생 남성이며, 실제 위키 사용자(2003년생)와 이름만 같을 뿐 완전히 다른 인물입니다. 시장 문서에 '창조주' 운운하며 세계관 몰입을 깨는 드립이나, 있지도 않은 필리핀계 혼혈/가난/학폭 루머를 악의적으로 기재할 경우 예고 없이 영구 차단됩니다." 
    },
    { 
        id: "f4", 
        title: "[행사] 제4회 효빈 애니메이션 페스티벌 기념 문서 기여 프로모션", 
        content: "효빈시 최대 서브컬처 행사인 애니메이션 페스티벌 개최를 맞이하여, 행사장 인근의 '메가박스 효빈터미널', '토모리해수욕장(흑택루비지구)', '효빈예술고등학교' 등 관련 문서의 내용을 알차게 보강해 주신 분들께 추첨을 통해 한정판 위키 배지를 부여할 예정입니다.\n\n교통편(3호선, 간선버스 연계) 및 주변 맛집, 코스프레 촬영 가능 구역 등 상권 정보를 풍부하게 채워주세요. 서브컬처 덕후 위키러들의 강력한 화력을 기대합니다!" 
    },
    { 
        id: "f5", 
        title: "[공지] 제3기 효빈위키 관리자(사서) 상시 모집", 
        content: "효빈위키를 쾌적한 지식의 바다로 가꾸어 나갈 성실한 관리자를 모십니다.\n\n[우대 사항]\n- 효빈도시철도(1~8호선, 빈효선 광역전철) 노선별 색상 코드(#0077DD 등)를 완벽히 숙지하고 복잡한 환승역 템플릿을 깔끔하게 유지/보수할 수 있는 철도 덕후\n- 덕빈북도(선곡, 하미, 기도 등)와 효빈광역시 관할 행정구역을 혼동하지 않고 읍/면/동/리 생략 구역까지 체계적으로 분류할 수 있는 향토 지리 덕후\n\n관심 있으신 분들은 '위키 게시판 - 운영/지원' 탭으로 지원해 주시면 심사를 거쳐 권한을 부여합니다." 
    }
];

// 2. 접속 시마다 무작위로 뽑히는 랜덤 공지사항 (기존 90개 보강 + 신규 30개 = 총 120개)
const randomNotices = [
    // --- [기존 데이터 1~30 (설명 확장)] ---
    { 
        id: "r1", title: "[점검] 효빈위키 DB 서버 정기 점검 안내 (금일 02:00 ~ 04:00)", 
        content: "서버 안정화 및 노후화된 스토리지 교체를 위한 정기 점검이 진행됩니다. 점검 시간 동안 문서 열람은 가능하나, '편집', '역사 보기', '토론' 기능은 전면 제한됩니다. 편집 중이던 문서 데이터가 날아갈 수 있으니 점검 전 반드시 오프라인으로 백업해 주시기 바랍니다." 
    },
    { 
        id: "r2", title: "[경고] 박효빈 시장 문서 내 과도한 TMI 서술 주의", 
        content: "박효빈 시장 문서에 '토마토를 아예 못 먹는다', '파란색을 좋아한다' 등의 지나치게 사적이고 확인되지 않은 개인 취향 서술은 최소화해 주시기 바랍니다. 위키는 백과사전이지 팬카페나 개인 블로그가 아닙니다. 객관적인 시정 평가와 2022년 선거 공약 이행률 위주로 작성해 주십시오." 
    },
    { 
        id: "r3", title: "[토론] 북구 사능동 '최애 빵집' 리스트 문서화 관련 합의", 
        content: "특정 상권에 대한 지나친 홍보 및 사유화 우려가 제기되어, 기존 '사능동 최애 빵집' 문서는 '사능동 제과점 목록'으로 문서명을 변경하고, 주관적인 별점 평가나 감정적인 리뷰를 완전히 배제한 채 객관적인 위치 및 개업 연도만 서술하기로 합의되었습니다." 
    },
    { 
        id: "r4", title: "[프로젝트] 효빈광역시 3세대 시내버스 도색 색상코드 표준화", 
        content: "2008년 도입된 3세대(스타더스트 작전) 버스 템플릿에 공식 색상을 일괄 적용하는 프로젝트입니다. 간선(Sky Blue, #01B7ED), 지선(Jade Green, #37B484), 급행(Scarlet Red, #D81C2F) 등 지정된 HEX 코드를 반드시 사용해 주시고 유사 색상으로 타협하지 마십시오." 
    },
    { 
        id: "r5", title: "[안내] 윤대환 전 시장 재판 결과 요약본 작성 가이드라인", 
        content: "윤대환 전 시장의 비위 및 사건사고 문서는 명예훼손 등 법적 분쟁의 소지가 매우 큽니다. 따라서 나무위키식 취소선이나 감정적인 맹비난 드립을 모두 배제하고, 2024년 확정된 법원의 1심/2심 판결문 원문에 기반하여 건조하고 중립적인 어조(NPOV)로만 작성해 주십시오." 
    },
    { 
        id: "r6", title: "[토론] 동구 사가당동 행정구역 개편안 문서명 합의 도출", 
        content: "동구와 인접 자치구 간의 잦은 경계 분쟁을 다루는 사가당동 행정구역 개편 떡밥 문서의 표제어 기준이 확립되었습니다. 관련 문서(가동사거리 등)를 편집하실 때 참고하시어 중복 문서가 파생 생성되지 않도록 문서 병합 및 분리 규정을 지켜주시기 바랍니다." 
    },
    { 
        id: "r7", title: "[수정요청] 서신고등학교 및 고송고등학교 교가 가사 추가 요망", 
        content: "효빈 지역 전통의 명문인 서신고등학교와 고송고등학교 문서에 교가 가사가 통째로 누락되어 있습니다. 재학생 또는 졸업생 위키러들의 적극적인 기여를 기다립니다. (주의: 교가 음원 파일 무단 업로드는 저작권 위반으로 즉시 삭제됩니다. 가사 텍스트만 기재할 것.)" 
    },
    { 
        id: "r8", title: "[안내] '나가사키 소요', '카츠라기 이즈미' 동명이인 서술 지침", 
        content: "실제 일본 애니메이션(뱅드림 등) 캐릭터와 지역 내 상호명, 혹은 가상 인물의 이름이 겹치는 우연에 대해, 과몰입하여 동일 인물로 서술하거나 기믹을 도용하는 행위를 금지합니다. 문서 상단에 반드시 [동명이인] 틀을 부착하여 독자들의 혼동을 방지해 주십시오." 
    },
    { 
        id: "r9", title: "[모집] 효빈은행 및 효빈은행 카드 상품 상세 정보 작성자", 
        content: "지역 거점 금융기관인 효빈은행 문서의 금융 상품 업데이트가 1년 넘게 지연되고 있습니다. 효빈은행 문서의 예적금 상품, 지역화폐 카드(효빈페이 등) 혜택 문단을 정확한 최신 약관에 근거하여 채워주실 핀테크 덕후 위키러를 애타게 찾습니다. (추천인 링크 삽입 적발 시 차단)" 
    },
    { 
        id: "r10", title: "[안내] 효빈동신도시역(일반열차-광역철도) 정식 환승역 승격 개편", 
        content: "최근 효빈동신도시역이 일반열차 전용역에서 일반열차와 **빈효선 광역전철(연청색, #6677CC)** 간의 정식 환승역으로 승격 개통됨에 따라, 문서 상단의 환승띠 및 노선도 템플릿이 전면 개편되었습니다. 아직 구형 단일 노선 틀이나 과거 낚시 버전을 사용하는 문단이 있다면 최신 환승역 템플릿으로 신속히 교체해 주시기 바랍니다. <del>이제 환승 낚시 아니니까 안심하고 타도 됩니다</del>" 
    },
    { 
        id: "r11", title: "[안내] 효빈위키 대문 이미지 로딩 속도 개선 (WebP 적용)", 
        content: "서버 트래픽 과부하를 막고 모바일 환경 최적화를 위해, 앞으로 효빈위키에 업로드되는 고용량 PNG/JPG 파일은 시스템에서 자동 압축 및 WebP 포맷으로 변환되어 서빙됩니다. 단, 위키 업로드 시 파일명 자체는 여전히 '한국어_단어.png' 규칙을 지켜주셔야 시스템에서 정상적으로 파싱됩니다." 
    },
    { 
        id: "r12", title: "[모집] 효빈외곽순환 및 서해고속도로 나들목(IC) 정보 요망", 
        content: "효빈시를 둘러싼 고속도로 전체 템플릿과 톨게이트 디자인 틀은 완성되었으나, 개별 나들목(IC)과 분기점(JC) 문서가 심각한 토막글 상태로 방치되어 있습니다. 도로교통 덕후들의 화력을 부탁드립니다. 특히 효빈항 물류지구 방면 진출입로 화물차 체증 정보를 중점적으로 채워주세요." 
    },
    { 
        id: "r13", title: "[안내] '키리가야 토우코' 관련 역명 유래 문서 보강 안내", 
        content: "해당 인물 이름을 딴 역명(어디까지나 우연의 일치)과 3호선 '투자역'의 기상천외한 명칭 유래에 대한 상세한 백그라운드 스토리 및 지역 향토사 각주가 문서에 대거 추가되었습니다. 관련 문서를 열람하실 때 참고하시기 바랍니다." 
    },
    { 
        id: "r14", title: "[경고] 특정 캐릭터 머리색(민트/라일락) 편집 분쟁 주의", 
        content: "오니츠카 토마리(민트), 빈 마르가레테(라일락) 등 헤어컬러 색상표 HEX 코드를 두고 벌어지는 소모적인 수정 전쟁을 당장 멈춰주십시오. 공식 일러스트에서 추출한 평균 스포이드 값을 기준으로 토론에서 합의된 코드를 함부로 변경 시 문서 훼손으로 간주되어 제재를 받습니다." 
    },
    { 
        id: "r15", title: "[토론] 궁하역 역명 한자 표기 (미야시타 아이 한자 포함 여부)", 
        content: "지역 전철역인 궁하역의 한자 표기와 관련해, 우연의 일치로 특정 뱅드림/러브라이브 캐릭터의 한자가 겹치는 현상에 대해 이를 본문에 직접 서술하여 밈화 할지, 아니면 문서의 진지함을 위해 여담(트리비아) 문단이나 각주로 빼둘지에 대한 치열한 토론이 3일째 진행 중입니다." 
    },
    { 
        id: "r16", title: "[점검] 위키 문법 [목차], [각주] 렌더링 오류 임시 수정 안내", 
        content: "일부 모바일 브라우저 환경에서 [목차]가 접히지 않고 전체 화면을 덮어버리거나, [각주] 팝업이 화면 밖으로 튕겨 나가는 CSS 렌더링 버그가 긴급 수정되었습니다. 여전히 텍스트가 겹치거나 문제가 발생할 경우 브라우저 캐시를 비워주시기 바랍니다." 
    },
    { 
        id: "r17", title: "[모집] 토모리해수욕장 흑택루비지구, 청덕지구 상권 정보", 
        content: "효빈시의 주요 여름철 피서지이자 관광지인 토모리해수욕장 해안가를 따라 길게 형성된 흑택루비지구와 청덕지구의 신규 입점 대형 프랜차이즈 상가 및 오션뷰 맛집 리스트 문서화를 상세하게 도와주실 로컬 위키러를 모집합니다." 
    },
    { 
        id: "r18", title: "[안내] 오사카 시즈쿠 머리색 파란색 오기재 일괄 수정 공지", 
        content: "3세대 간선버스와 매칭되는 오사카 시즈쿠의 상징색이 1호선의 파란색(#0077DD)으로 잘못 기재된 버스 노선 문서 14건이 발견되어, 자동 봇(Bot)을 통해 정상적인 간선버스 공식 색상인 Sky Blue(#01B7ED)로 일괄 롤백 및 수정이 완료되었습니다." 
    },
    { 
        id: "r19", title: "[경고] 코노에 카나타 문서명을 '오우미 카나타'로 훼손 금지", 
        content: "마을버스(Violet, #A664A0) 매칭 캐릭터인 코노에 카나타의 문서 표제어를 지속적으로 '오우미 카나타'로 임의 이동(Redirect) 시키는 악의적 훼손이 발생하고 있습니다. 해당 문서는 당분간 관리자 권한으로만 이동할 수 있도록 보호 조치되었습니다." 
    },
    { 
        id: "r20", title: "[프로젝트] 효빈일보, 효빈복지방송 인터넷 기사 아카이브 보존", 
        content: "시간이 지나 언론사 서버 개편으로 접속이 끊기는 지역 언론(효빈일보, 효빈복지방송 등)의 과거 기사 데드링크를 막기 위해, 위키 각주에 기사 출처를 달 때 Web Archive(아카이브) 주소를 의무적으로 병기하는 대규모 보존 프로젝트를 실시합니다." 
    },
    { 
        id: "r21", title: "[토론] 김지언 북구청장 주요 공약 이행률 서술 방향 합의", 
        content: "김지언 북구청장 문서의 '공약 이행' 문단을 작성할 때, 편파적이고 주관적인 비판을 막기 위해 북구청 공식 보도자료와 지역 언론의 비판 기사를 반드시 교차 검증하여 객관적으로 기재하기로 합의되었습니다. 출처 없는 비난 서술은 즉시 삭제됩니다." 
    },
    { 
        id: "r22", title: "[모집] 생선초등학교 및 중수여자중/고등학교 출신 인물 틀", 
        content: "효빈 지역 각 학교별 '출신 인물' 템플릿 양식이 위키 디자인 팀에 의해 통일되었습니다. 현재 생선초, 중수여중/고 문서의 출신 인물 틀이 텅 비어있으니, 누락된 지역 출신 유명 인물이나 정치인이 있다면 틀 양식에 맞춰 추가해 주시기 바랍니다." 
    },
    { 
        id: "r23", title: "[공지] 효빈교통문화공원 내 전시 차량(구형 버스/열차) 사진", 
        content: "효빈교통문화공원에 야외 전시된 1세대 파스텔톤 버스와 2세대 두청운수 갈색 버스의 실물 고화질 사진이 위키 문서에 절대적으로 부족합니다. 저작권 문제가 전혀 없는 본인 직접 촬영 사진(CC0 라이선스)의 업로드를 애타게 기다리고 있습니다." 
    },
    { 
        id: "r24", title: "[토론] 해양열차 운행 시간표 변경에 따른 각 역 문서 갱신 건", 
        content: "동계 시즌 및 해안가 결빙 우려로 인한 관광 해양열차 시간표 개편 공문이 철도청에서 내려옴에 따라, 해당 열차가 정차하는 모든 관광 특화 역들의 상단 시간표 템플릿을 일괄 수정하기 위한 자동 봇 가동 토론이 열렸습니다. 많은 참관 바랍니다." 
    },
    { 
        id: "r25", title: "[안내] 빈주노선도 그래픽 리뉴얼 적용 완료 안내", 
        content: "효빈위키 디자인 팀에서 1년여간 심혈을 기울여 자체 제작한 고해상도 SVG 기반의 통합 빈주노선도(전체 도시철도 종합 노선도) 그래픽이 교통 관련 철도 문서 최상단 인포박스에 일괄 적용되었습니다. 아무리 확대해도 글씨가 깨지지 않습니다." 
    },
    { 
        id: "r26", title: "[모집] 데이터 모델링의 이해, 관계형 데이터베이스 IT 문서", 
        content: "효빈대학교 천주캠퍼스 컴퓨터공학과 및 컴공 학회 전공자분들의 집단지성이 절실합니다! 효빈위키 내 IT 카테고리의 DB, 인프라 관련 문서들의 퀄리티가 심각한 토막글 수준입니다. 전공 지식을 바탕으로 문서를 살찌워주세요." 
    },
    { 
        id: "r27", title: "[공지] 영화관 지점(메가박스, CGV, 롯데시네마) 문서 통합", 
        content: "개별 좌석수 정보나 특별관, 상권 설명 없이 단순히 주소와 위치만 적혀 있어 내용이 몹시 부실한 일부 소규모 영화관 지점 문서는 '메가박스/효빈광역시' 등 브랜드별 지역 하위 문단으로 강제 리다이렉트(넘겨주기) 통합 조치 중입니다." 
    },
    { 
        id: "r28", title: "[안내] 다크모드 적용 시 테이블(표) 테두리 안 보이는 현상", 
        content: "모바일 및 PC 환경에서 다크모드 적용 시 검은 배경에 묻혀 표(Table)의 구분선이 보이지 않던 CSS 변수(var) 연동 버그가 긴급 패치되었습니다. 여전히 표 테두리가 안 보이시는 분들은 브라우저 새로고침(Ctrl+F5)을 진행해 주세요." 
    },
    { 
        id: "r29", title: "[경고] 박효빈 시장 유년기 악의적 루머 서술 엄단", 
        content: "과거 선거철 상대 후보 측의 흑색선전으로 불거졌던 박효빈 시장의 필리핀계 혼혈 루머, 극빈층 설정, 학폭 피해 사실 등을 악의적으로 기재하고 조롱하는 반달 행위가 지속될 경우 아이피(IP) 단위로 영구 차단됩니다. 비판은 오직 객관적인 시정 능력으로만 하십시오." 
    },
    { 
        id: "r30", title: "[공지] 효빈광역시 행정구역(북구, 남구, 동구) 인구수 통계 갱신", 
        content: "2026년 2월 말 기준으로 발표된 효빈시청 통계청의 주민등록인구 공식 자료를 바탕으로, 효빈시 산하 8개 자치구와 탄성군, 그리고 덕빈북도 인접 구역을 포함한 모든 읍/면/동/리 단위 하위 문서의 최상단 인포박스 인구수 현황이 일괄 갱신되었습니다." 
    },

    // --- [기존 데이터 31~60 (세계관 1차 확장)] ---
    {
        id: "r31", title: "[경고] 철도 마스코트와 뱅드림 캐릭터 간 과몰입/동일시 밈 주의",
        content: "1호선 고나미, 3호선 박라미, 8호선 유리아 등 효빈도시철도 소속 마스코트가 단순히 특정 뱅드림 캐릭터와 메인 색상 및 일부 설정이 비슷하다는 이유로 문서 내에서 완전히 동일 인물인 것처럼 서술하는 억지 밈을 금지합니다. 이는 엄연한 독자연구 및 세계관 설정 파괴 행위입니다."
    },
    {
        id: "r32", title: "[프로젝트] 1995~2002년 1세대 파스텔톤 시내버스 아카이빙",
        content: "크림색 바탕에 연하늘, 연두색이 섞여 특유의 낭만이 넘쳤던 효빈 1세대 시내버스의 노선도와 당시 운행했던 구형 차량 모델(에어로시티, BS106 등)의 사진을 수집하는 프로젝트가 시작되었습니다. 개인 소장 중인 오래된 필름 사진 기여를 환영합니다."
    },
    {
        id: "r33", title: "[안내] 2세대 두청운수 갈색 버스 흑역사 서술 관련",
        content: "2003년부터 2007년까지 운행된 두청운수의 일명 '똥색' 버스 문서에 한해 당시 시민들의 극심한 고통(75인승 과적, 허리 파괴 플라스틱 시트)을 생생하게 묘사하기 위한 나무위키식 취소선 및 드립 서술을 예외적으로 대폭 허용합니다. <del>다만 지나친 욕설은 필터링 바람</del>"
    },
    {
        id: "r34", title: "[경고] 덕빈북도 관할 행정구역 분류 훼손 주의",
        content: "효빈광역시와 인접해 생활권을 공유하지만 엄연히 행정 구역이 다른 '덕빈북도' 소속 지역(선곡, 하미, 기도, 낭원, 덕현, 모제) 문서를 임의로 효빈광역시 하위 분류로 끼워 넣는 행위를 멈춰주십시오. 행정구역 문서 작성 시 관할 지자체 소속을 정확히 기재해야 혼선을 막을 수 있습니다."
    },
    {
        id: "r35", title: "[공지] 하위 '리(里)' 단위 생략 구역 표기 기준 통일",
        content: "선곡(귀총, 남소 등), 낭원(내덕, 명향 등), 덕현(망정, 북견 등)과 같이 인구 과소로 인해 문서 내에서 개별 문서 생성이 생략되고 상위 읍/면 문서에 통합 서술되는 '리 생략 구역'들의 목차 디자인 및 리다이렉트 가이드라인이 공지되었습니다. 양식에 맞춰 작성 바랍니다."
    },
    {
        id: "r36", title: "[안내] 도시철도 노선 색상표 (HEX) 문서 내 강제 적용 봇 가동",
        content: "1호선(#0077DD)부터 8호선(#9856FF) 및 빈효선(#6677CC)까지 노선도 템플릿에 엉뚱한 유사 색상이나 타 지역 지하철(서울시 등) 색상을 마음대로 섞어 사용하는 것을 막기 위해, 공식 HEX 코드가 아닌 색상이 쓰인 철도 템플릿을 적발하여 강제로 교정하는 봇(Bot)이 금일부터 가동됩니다."
    },
    {
        id: "r37", title: "[경고] 파일 업로드 시 영문/숫자 혼용 금지 규칙 위반 제재",
        content: "도움말 규정에 분명히 명시했음에도 불구하고 여전히 파일명을 'bus_image01.jpg' 같이 성의 없이 올리는 유저들이 빈몰하고 있습니다. 효빈위키 시스템 파싱 특성상 이미지는 반드시 '한국어 단어 이름.png' 형식이어야만 정상 출력됩니다. 계속 위반 시 업로드 권한을 박탈합니다."
    },
    {
        id: "r38", title: "[수정요청] 6호선 건강보험공단역 리다이렉트 및 민원 일화 보강",
        content: "6호선(보라색, #881188) 건강보험공단역 문서의 '건보공단역' 약칭 리다이렉트가 꼬여있어 검색창에서 검색이 안 되는 이슈가 있습니다. 또한 개통 당시 약칭 사용을 두고 벌어진 인근 상인들의 거센 항의 민원 일화를 효빈일보 기사를 인용하여 풍부하게 보충해 주실 분을 찾습니다."
    },
    {
        id: "r39", title: "[모집] 3호선 마스코트 '박라미' 고유 설정 작성자",
        content: "3호선(노란색, #FFCC11) 마스코트 박라미 문서가 뱅드림 야마부키 사아야와 엮이는 제과점 빵순이 밈으로만 도배되어 본래 설정이 묻히고 있습니다. 공식에서 발표한 박라미의 고유 취미, 좋아하는 음식, 활기찬 안내방송 톤 등 독자적인 설정을 풍성하게 채워주세요."
    },
    {
        id: "r40", title: "[모집] 1호선 탄성지선 '비마리유적지구역' 괴담 문서화",
        content: "1호선 탄성지선(파란색) 역사 관광 특화 역인 비마리유적지구역 주변에서 심야 시간대(막차 시간)에 발생한다는 정체불명의 소음 지역 괴담에 대해 객관적이고 민속학적인 시각에서 다루어주실 향토 덕후를 모십니다. (단순 공포 조장 및 허위 사실 기재 금지, 유래 위주 서술 요망)"
    },
    {
        id: "r41", title: "[토론] 4호선 '해운산업지구역' 출퇴근 헬게이트 묘사 수위",
        content: "4호선(주황색, #FF5522) 해운산업지구역 문서에 기재된 인근 항만/물류센터 노동자들의 출퇴근 시간대 압사 직전의 혼잡도 묘사가 <del>너무 리얼해서 보다가 눈물 난다</del> 다소 자극적이고 과장되었다는 의견이 제기되어, 서술 수위를 적절히 조절하기 위한 토론을 개설했습니다."
    },
    {
        id: "r42", title: "[수정요청] 2호선 어간지선 '어간수산시장역' 주말 경매 정보",
        content: "2호선 어간지선의 핵심 역인 어간수산시장역 문서에 주말 새벽 수산물 경매 시간대의 폭발적인 상인/관광객 유동 인구 정보가 누락되어 있습니다. 이와 함께 마스코트 하루빈(초록색)의 시장 상인 특화 사투리 안내방송 스크립트 추가가 시급히 필요합니다."
    },
    {
        id: "r43", title: "[안내] 덕빈북도 기도 '염곡면' 3호선 연장 떡밥 팩트체크",
        content: "덕빈북도 기도 염곡면 일대에 3호선(노란색)이 효빈국제공항을 거쳐 연장된다는 부동산 커뮤니티발 뇌피셜 투기 루머가 기승을 부리고 있습니다. 해당 내용 작성 시 최상단에 반드시 [사실무근] 또는 [루머] 틀을 씌우고, 효빈시청 도시계획과의 공식 부인 보도자료를 팩트체크용으로 링크하시기 바랍니다."
    },
    {
        id: "r44", title: "[공지] 2021년 효빈대 부동산학과 강의실 사건 서술 지침",
        content: "효빈대학교 천주캠퍼스에서 벌어진 2021년 부동산학과 강의실 사건은 학교의 명예와 관련된 다소 민감한 이슈입니다. 해당 문서를 작성하거나 열람하실 때, 네티즌들의 억측이나 조롱 섞인 드립을 일절 삼가시고 오로지 학교 측의 공식 징계 발표문 및 지역 뉴스 위주로만 건조하게 기재하세요."
    },
    {
        id: "r45", title: "[안내] 1호선 탄성지선(오석~승남해수욕장) 배차 간격 서술",
        content: "1호선 본선과 비교해 극악무도한 배차 간격을 자랑하는 탄성지선의 평일/주말 배차 시간표가 2026년 하반기 기준으로 전면 업데이트되었습니다. 길고 긴 배차 간격에 대한 연선 주민들의 불만과 관련하여 나무위키식 취소선 드립(<del>열차 한 대 놓치면 걸어가는 게 빠름</del>)을 적극 허용합니다."
    },
    {
        id: "r46", title: "[수정요청] 3세대 광역버스(Royal Blue, #485EC6) 정차역 리스트",
        content: "아사카 카린 컬러가 매칭된 3세대 광역버스(Royal Blue)의 도심~외곽 위성도시 간 출퇴근 급행 정차역 리스트가 2024년 과거 노선 개편 이전 버전으로 방치되어 혼란을 주고 있습니다. 최신 2026년 노선도로 전면 교체 및 거리비례제 요금표 갱신을 부탁드립니다."
    },
    {
        id: "r47", title: "[안내] 3세대 마을버스(Violet, #A664A0) 주행 난이도 문단 신설",
        content: "코노에 카나타 컬러가 매칭된 3세대 마을버스들의 주특기인 좁은 산동네 골목길 코너링과 가파른 경사로에서의 <del>도랑타기 이니셜D</del> 드리프트 주행 난이도, 그리고 롤러코스터 뺨치는 승객 체감 승차감을 다루는 전용 문단이 새롭게 신설되었습니다. 각 지역(안천구 등)의 마을버스 탑승기를 추가해 주세요."
    },
    {
        id: "r48", title: "[모집] 시티투어버스(Navy, #7777AA) 관광 코스 지도 제작자",
        content: "시이나 타키(뱅드림) 색상이 매칭된 효빈 시티투어버스의 핵심 랜드마크 순환 코스(비마리유적지~효빈항~토모리해수욕장 등)를 관광객들이 한눈에 볼 수 있는 깔끔한 일러스트 맵을 SVG나 고화질 PNG 파일로 제작해 위키에 업로드해 주실 금손 위키러를 애타게 찾고 있습니다."
    },
    {
        id: "r49", title: "[경고] 8호선 마스코트 '유리아' 문서 내 억지 무사도 드립 자제",
        content: "8호선(연보라색, #9856FF) 공식 마스코트인 금발의 외국인 유학생 유리아 문서에, 뱅드림 와카미야 이브를 연상케 하는 뜬금없는 '무사도' 드립이 뇌절 수준으로 도배되고 있습니다. 유리아 본연의 언어유희 기믹과 8호선 연선 관광지 안내자 설정에 집중하여 서술의 질을 높여주십시오."
    },
    {
        id: "r50", title: "[안내] 빈효선 마스코트 '전노아' 과몰입 방지 전용 틀 부착",
        content: "빈효선 광역전철(연청색, #6677CC)의 소심하고 조용한 마스코트 전노아 문서 최상단에, 뱅드림 쿠라타 마시로 밈 관련 과몰입과 억지 동일시를 경고하는 효빈위키 전용 틀 디자인이 신설되어 부착되었습니다. 편집 시 해당 틀을 임의로 지우거나 수정하지 마십시오."
    },
    {
        id: "r51", title: "[토론] 5호선 마스코트 '미소하'의 쿨 뷰티 속성 보강 안건",
        content: "5호선(빨간색, #EE0022) 미소하를 타 작품(뱅드림 앱글) 록 밴드 보컬과 억지로 엮는 비공식 서술을 대거 쳐내고, 효빈도시철도에서 기획한 본래 설정인 '철저한 원칙주의자지만 길 잃은 승객에겐 한없이 따뜻한 쿨 뷰티 철도원' 속성을 대폭 강화하는 방향으로 문서를 리뉴얼하기 위한 토론이 진행 중입니다."
    },
    {
        id: "r52", title: "[안내] 7호선 마스코트 '임세정·임세하' 10살 터울 자매 설정 준수",
        content: "7호선(분홍색, #FF8899)의 안내를 번갈아 맡는 10살 터울의 자매 안내원 임세정(언니)과 임세하(동생)는 쌍둥이가 아닙니다. 나이 차이에서 오는 성격과 억양 차이가 뚜렷하므로, 문서 기재 시 둘을 헷갈려 쌍둥이로 묶거나 둘 중 한 명을 특정 애니메이션 캐릭터인 '소요'라고 장난스럽게 부르는 행위를 전면 금지합니다."
    },
    {
        id: "r53", title: "[경고] 1호선 마스코트 '고나미' 문서 억지 기타 밈 훼손 롤백",
        content: "1호선(파란색, #0077DD) 마스코트 고나미의 토끼를 좋아한다는 기믹은 공식 설정이 맞으나, 역사에서 억지로 파란색 기타를 들고 거리 버스킹 공연을 한다는 식의 특정 캐릭터(하나조노 타에) 복붙 수준의 뇌피셜 기재가 잦아 즉시 롤백 처리되었습니다. 공식 설정만 기재하십시오."
    },
    {
        id: "r54", title: "[수정요청] 덕현 관할 '부척리' 상권 형성 과정 심층 분석",
        content: "덕빈북도 덕현 관할의 상업 중심지인 부척리 문서가 심하게 빈약합니다. 인접한 상중도, 조전 지역과 상권 파이를 뺏고 빼앗기며 성장한 지리적 요인과, 2010년대 대형 마트 입점을 둘러싸고 벌어진 지역 상인회와의 팽팽한 갈등사를 경제학적/사회학적 관점에서 깊이 있게 서술해 주실 분을 찾습니다."
    },
    {
        id: "r55", title: "[모집] 선곡 관할 '하간리' 특산물 및 연계 교통망 (마을버스)",
        content: "최근 생성되어 틀이 잡힌 덕빈북도 선곡 하간리 문서에, 지역 특산물 정보(하간 쌀, 특제 된장 등)와 중심지인 '읍내리' 장터를 이어주는 농어촌/마을 버스 연계망 정보가 완전히 누락되어 있습니다. 지역 향토 지리와 교통편에 빠삭한 위키러의 신속한 보충이 필요합니다."
    },
    {
        id: "r56", title: "[프로젝트] 모제 '양광리' 산업 구조 변화사 작성 및 연대기 기재",
        content: "덕빈북도 모제 관할 리 단위 생략 구역에 속하는 양광리가, 과거 전통 농업(과수원) 중심지에서 대규모 외곽 도로 개통 이후 물류 창고와 근교 대형 카페 위주의 상업 단지로 어떻게 천지개벽했는지 시대별 사진 자료와 함께 연대기를 작성하는 단기 아카이빙 프로젝트가 개설되었습니다."
    },
    {
        id: "r57", title: "[안내] 낭원 '빙천리' 겨울철 빙어 축제 문서 독립 분리",
        content: "덕빈북도 낭원 관할 리 단위 생략 구역인 빙천리 문서 내에서, 매년 겨울철 수십만 명의 인파가 몰려드는 '빙천 빙어 축제' 파트의 분량이 전체 문서의 80%를 차지할 정도로 너무 길어져, 가독성과 문서 균형을 위해 해당 축제 문서를 독립된 문서로 완전히 분리 파생시켰습니다."
    },
    {
        id: "r58", title: "[토론] 하미 '귀총리' 대규모 산업단지 투기 떡밥 서술 방향",
        content: "덕빈북도 하미 관할 귀총리 일대의 신규 첨단 산업단지 지정 떡밥 및 부동산 투기 세력 유입 논란과 관련하여, 불확실한 부동산 카페의 찌라시를 그대로 복붙해오지 말고 오직 관할 지자체(효빈시청, 덕빈북도청)의 고시 공문과 정식 언론 기사에 한해서만 팩트체크용으로 서술하기로 토론 합의했습니다."
    },
    {
        id: "r59", title: "[수정요청] 기도 '삼리' 토지 구획 정리 사업 현황 및 갈등 일화",
        content: "덕빈북도 기도 관할 리 단위 생략 구역인 '삼리(삼)'의 구도심 재정비를 위한 토지 구획 정리 사업이 몇 년째 지지부진한 상황입니다. 보상금 산정 문제 및 대대로 살아온 지역 주민들의 거센 반발 일화를 어느 한쪽으로 치우치지 않은 중립적 시각에서 깔끔하게 정리해 주실 분을 모집합니다."
    },
    {
        id: "r60", title: "[안내] 효빈시 창전구 vs 덕빈북도 북고송 행정 경계 분쟁 일화 추가",
        content: "효빈광역시 소속 창전구 문서 최하단 사건사고 문단에, 과거 창전구와 덕빈북도 북고송 지역이 경계선에 걸쳐 있는 쓰레기 매립지 및 하천 관리 구역의 책임을 놓고 벌였던 살벌하고 치열한 행정 경계 분쟁 일화가 효빈일보 1990년대 과거 기사 아카이브와 함께 상세히 추가되었습니다."
    },

    // --- [신규 추가 데이터 31~60 (세계관 2차 확장, 철저한 디테일)] ---
    {
        id: "r61", title: "[프로젝트] 1호선 탄성지선 종점 '승남해수욕장역' 문서 집중 보강",
        content: "1호선 탄성지선의 끄머리 종점인 승남해수욕장역(파란색, #0077DD) 문서가 다른 역에 비해 아직 부실합니다. 여름철 피서객 수요 폭발 시기의 탄성지선 열차 한시적 증편 현황과, 본선 구간의 곽암해수욕장역과 매년 벌어지는 묘한 관광객 유치 라이벌 기믹 서술을 대폭 보강해 주십시오."
    },
    {
        id: "r62", title: "[경고] 5호선 마스코트 미소하 문서 내 '평소대로(이츠모도리)' 드립 금지",
        content: "5호선(빨간색, #EE0022) 미소하를 뱅드림 미타케 란과 동일시하여 공식 안내방송 대사에 '평소대로의 5호선입니다' 같은 드립을 강제로 집어넣는 반달리즘이 지속적으로 발생하고 있습니다. 이는 공식 설정을 왜곡하는 명백한 설정 파괴이므로 발견 즉각 롤백(되돌리기) 및 차단 대상입니다."
    },
    {
        id: "r63", title: "[토론] 3세대 급행버스(Scarlet Red, #D81C2F) 난폭운전 서술 수위 조절",
        content: "유키 세츠나 컬러가 매칭된 3세대 급행버스 문서에서 일부 버스 기사들의 난폭운전 및 과속 질주 묘사가 <del>타면 목숨을 걸고 손잡이를 꽉 잡아야 한다</del> 지나치게 공포감을 조성할 정도로 과장되어 있다는 지적이 제기되어, 객관적인 교통 법규 위반 통계 위주로 서술 수위를 조절하기 위한 토론이 진행 중입니다."
    },
    {
        id: "r64", title: "[안내] 덕빈북도 모제 하위 행정구역 '가운리', '금전리' 문서 분리 승격",
        content: "덕빈북도 모제 관할 행정구역인 가운리와 금전리가 최근 신도시 개발 및 대형 아파트 단지 입주로 인구수가 급증함에 따라, 기존 모제 읍/면 통합 문서에서 개별 문서로 완전히 독립 및 승격 분리되었습니다. 두 지역이 토막글을 탈출할 수 있도록 지리, 상권 정보 추가에 힘써주십시오."
    },
    {
        id: "r65", title: "[모집] 효빈 6호선 '오내사거리역' ~ '오내역' 구간 지하상가 (오내던전) 지도",
        content: "6호선(보라색, #881188) 연선 최대 상권 중 하나인 오내사거리역부터 오내역까지 수 킬로미터 길게 이어진 초대형 지하상가(일명 효빈시의 코엑스, 오내던전)의 복잡한 미로 구조와 출구별 랜드마크 매장 정보를 상세히 SVG나 표로 그려주실 능력자 위키러를 찾습니다."
    },
    {
        id: "r66", title: "[안내] 4호선 마스코트 다로나 별모양 뿔 헤어핀 설정 오류 수정",
        content: "4호선(주황색, #FF5522) 다로나의 공식 디자인에 뱅드림 토야마 카스미 특유의 뿔 머리나 과장된 고양이 귀 별 모양을 억지로 합성하여 업로드한 불법 일러스트 이미지가 갤러리에서 모두 일괄 삭제되고, 효빈도시철도에서 배포한 공식 일러스트 원본(.png)으로 전면 교체되었습니다."
    },
    {
        id: "r67", title: "[수정요청] 2호선 어간지선 '항동1가역' 수산물 악취 묘사 및 안내방송",
        content: "2호선 어간지선(초록색) 항동1가역 문서에 새벽 시간대 수산시장 상인들과 해산물 탑승으로 진동하는 <del>지독한 바다의 비린내</del> 냄새 묘사와 함께, 환기 시설 가동을 알리는 2호선 마스코트 하루빈의 탈취제 드립 안내방송 스크립트를 재치있게 추가 요망합니다."
    },
    {
        id: "r68", title: "[경고] 전천중앙역(5, 6호선 환승) 막장환승 서술 시 과장 금지 및 제재",
        content: "전천중앙역의 5호선(빨간색)과 6호선(보라색) 간 환승 동선이 지하 깊숙이 뚫려 있어 꽤 긴 것은 사실이나, '환승에 30분이 걸린다', '지하 벙커 등산 수준이다' 등의 악의적이고 비현실적인 과장 서술은 문서 신뢰도를 떨어뜨리므로 삭제 처리됩니다. 실제 성인 도보 기준 환승 시간(5~7분)에 입각해 서술하십시오."
    },
    {
        id: "r69", title: "[토론] 박효빈 시장 취임식 당시 '1996년생 20대 최연소 시장' 밈 문서화 여부",
        content: "현직 박효빈 시장의 2022년 당선 및 취임식 당시 '1996년생 20대 전국 최연소 광역단체장' 타이틀로 전국구 화제가 되었던 효빈일보/효빈복지방송 기사 내용과, 반대파의 나이 관련 흑색선전을 박효빈 문서의 별도 하위 문단으로 완전히 분리하여 작성할 것인지에 대한 토론이 열렸습니다."
    },
    {
        id: "r70", title: "[공지] 효빈 8호선 연보라색(#9856FF) 색상 코드 모바일 UI 텍스트 깨짐 현상 패치",
        content: "모바일 다크모드 환경에서 8호선 상징색인 연보라색(#9856FF) 틀(템플릿) 내부 글씨가 하얀색 배경과 겹쳐 가독성이 심각하게 떨어지던 UI 깨짐 문제가 CSS 패치를 통해 완벽히 해결되었습니다. 아직 8호선 역 문서의 틀이 깨져 보이는 분들은 브라우저 캐시를 지우고 새로고침 하십시오."
    },
    {
        id: "r71", title: "[안내] 빈효선 마스코트 전노아(연청색) 공식 일러스트 화질 개선 및 롤백 안내",
        content: "효빈시를 벗어나 인근 위성도시를 잇는 빈효선 광역전철(연청색, #6677CC)의 소심한 마스코트 전노아의 최상단 프로필 사진이 고화질 원본 파일(한국어_단어.png)로 교체되었습니다. 뱅드림 쿠라타 마시로 이미지를 교묘하게 덧그린 저화질 훼손판 이미지를 재업로드 시 즉시 계정 차단됩니다."
    },
    {
        id: "r72", title: "[모집] 3세대 마을버스(Violet, #A664A0) 브레이크 파열급 산동네 드리프트 탑승기",
        content: "코노에 카나타 컬러가 매칭된 3세대 마을버스 특유의 브레이크를 밟지 않는 듯한 좁은 골목길 코너링과 산동네 급경사로 <del>현실판 이니셜D</del> 드리프트 주행 탑승기를 각 자치구(특히 고지대가 많은 안천구, 북구 일대) 마을버스 노선 문서에 실감 나게, 그러나 팩트 기반으로 적어주실 분을 모집합니다."
    },
    {
        id: "r73", title: "[프로젝트] 1세대 파스텔 톤 시내버스(1995~2002) 종이 승차권 스캔본 아카이브",
        content: "현대적인 교통카드(효빈패스) 시스템이 도입되기 훨씬 이전, 낭만적인 파스텔 톤 1세대 버스 시절 사용되었던 학생용 종이 회수권과 일반용 토큰의 실물 스캔본을 수집하여, 위키 데이터베이스 내 교통 역사 카테고리에 사료로 영구 보존하는 프로젝트가 성황리에 진행 중입니다."
    },
    {
        id: "r74", title: "[경고] 두청운수 2세대 갈색 버스 문서 내 허위 대형 사고 기재 엄격 금지",
        content: "2세대(2003~2007) 일명 갈색(똥색) 버스 시절 매일같이 벌어지던 75인승 가축수송 과적과 플라스틱 시트가 시민들에게 악명이 높았던 것은 명백한 팩트이나, 이를 과장하여 '버스가 전복되어 수십 명 사상' 같은 존재하지도 않는 허위 대형 인명 사고를 지어내 기재하는 행위는 위키 신뢰도 하락의 주범으로 엄벌에 처합니다."
    },
    {
        id: "r75", title: "[안내] 남구청역(4호선), 북구청역(1, 6호선 환승) 문서 동음이의어 처리 완료",
        content: "효빈광역시의 행정구역인 남구/북구 관공서 문서와, 4호선의 남구청역, 1/6호선 환승역인 북구청역 간의 위키 내 문서 검색 혼동을 막기 위해 각 문서 최상단에 상호 동음이의어(Disambiguation) 및 리다이렉트 안내 틀이 꼼꼼하게 완비되었습니다."
    },
    {
        id: "r76", title: "[토론] 7호선 10살 터울 자매 안내원 임세정·임세하 교대 근무표 기재 방식",
        content: "분홍색(#FF8899) 7호선의 안내를 번갈아 맡는 10살 터울의 자매 마스코트 임세정(언니)과 임세하(동생)의 평일/주말 시간대별 촘촘한 교대 근무표를 개별 역(신영, 채산 등) 문서마다 표로 전부 기재할지, 아니면 7호선 본 문서 하단에만 통합 기재할지 효용성을 놓고 논의 중입니다."
    },
    {
        id: "r77", title: "[수정요청] 효빈국제공항역(3호선) 출국장 면세점 입점 브랜드 목록 최신화",
        content: "3호선(노란색, #FFCC11) 종착역인 효빈국제공항역 인근 여객 터미널 및 공항 내부 출국장 면세구역에 새로 입점하거나 코로나 사태 이후 폐점한 주요 명품 브랜드 및 식음료(F&B) 매장 전체 목록을 2026년 공항공사 최신 발표 버전으로 업데이트 바랍니다."
    },
    {
        id: "r78", title: "[경고] 1호선 마스코트 고나미(파란색) 파란색 ESP 기타 합성 짤 업로드 적발 시 차단",
        content: "1호선 공식 마스코트 고나미의 일러스트에 뱅드림 하나조노 타에가 사용하는 파란색 ESP 어쿠스틱/일렉 기타를 억지로 손에 쥐여놓은 교묘한 합성 이미지가 지속적으로 파일 서버에 업로드되고 있습니다. 적발 시 즉시 해당 계정의 업로드 권한이 영구 회수됩니다."
    },
    {
        id: "r79", title: "[안내] 덕빈북도 낭원 '판주' 지역(대류, 신, 고판 등) 전원마을 인구수 업데이트",
        content: "덕빈북도 낭원 관할 하위 행정구역 중 하나인 판주(대류, 신, 고판, 시월, 약송원, 원태, 이구, 추분, 항) 일대에 대규모 은퇴자 전원마을이 조성됨에 따른 인구 유입 통계 수치가 2026년 낭원군 지자체 발표 자료를 기반으로 상세히 업데이트 되었습니다."
    },
    {
        id: "r80", title: "[모집] 3세대 공항버스(Light Green, #84C36E) 28인승 우등 리무진 시트 평가 리뷰어",
        content: "엠마 베르데 컬러가 매칭된 3세대 공항버스(Light Green) 전용으로 도입된 최고급 28인승 우등 리무진 시트의 안락한 승차감과, 타사 시외/고속버스 우등 시트와의 쿠션감 상세 비교 분석 리뷰를 문서에 객관적이고 전문적인 어조로 적어주실 버스 덕후 리뷰어를 환영합니다."
    },
    {
        id: "r81", title: "[프로젝트] 효빈대 천주캠퍼스 인근 대학가 vs '청엽국제학교역(5호선)' 상권 비교",
        content: "같은 5호선(빨간색, #EE0022) 라인을 공유하지만 분위기가 완전히 다른 효빈대학교 천주캠퍼스 인근 가성비 대학 상권과, 바로 한 정거장 거리인 청엽국제학교역 주변의 프리미엄 학군 및 고급 주거지 상권의 물가, 식당 라인업 차이를 사회경제적으로 비교 분석하는 프로젝트입니다."
    },
    {
        id: "r82", title: "[토론] 시티투어버스(Navy, #7777AA) 요금표 템플릿 색상 대비 가독성 문제",
        content: "시이나 타키 컬러가 매칭된 3세대 시티투어버스의 어두운 남색(#7777AA) 인포박스 템플릿 배경에 검은색 글씨로 관광지별 요금을 적어 놓아 폰트 가독성이 몹시 떨어진다는 위키러들의 민원과 불만이 폭주하여, 전체 폰트 컬러를 하얀색(#FFF)으로 일괄 변경하는 안건이 상정되었습니다."
    },
    {
        id: "r83", title: "[안내] 2호선(초록색) 본선 '효빈공단역' 오후 6시 퇴근 시간대 헬게이트 문단 신설",
        content: "2호선(초록색, #00CCAA) 본선 한가운데 위치한 효빈공단역 문서 하단에, 매일 평일 오후 6시 정각만 되면 인근 수백 개 공단에서 수천 명의 근로자가 한꺼번에 쏟아져 나와 좁은 개찰구 전체가 완전히 마비되는 <del>워킹데드 좀비 사태</del> 퇴근길 헬게이트 풍경 묘사 문단이 생생하게 신설되었습니다."
    },
    {
        id: "r84", title: "[경고] 윤대환 전 시장 재임 시절 측근 비리 문서에 추측성 실명 거론 절대 금지",
        content: "윤대환 전 시장의 재임 시절 불거진 각종 측근들의 건설 비리 및 이권 개입 사건 문서에, 아직 검찰의 정식 수사 결과 발표나 법원 판결이 확정되지 않은 지역 유력 인사들의 실명을 뇌피셜로 거론하는 행위는 고소 고발 등 심각한 명예훼손의 소지가 다분하므로 즉각 롤백 및 아이피 차단됩니다."
    },
    {
        id: "r85", title: "[수정요청] 덕빈북도 하미 '상산리', '탕전리' 농어촌 대중교통 연계망 보충 요망",
        content: "하미 관할 하위 행정구역인 외곽 지역 상산, 탕전 마을 문서의 대중교통 문단이 완전히 백지상태로 방치되어 있습니다. 해당 지역을 하루 몇 번 경유하는 농어촌 버스의 배차 시간표와, 인접한 하미 중심 읍내, 포원, 동리 지역 간의 이동 소요 시간 정보를 꼭 찾아서 추가해 주시기 바랍니다."
    },
    {
        id: "r86", title: "[안내] 3세대 좌석버스(Vivid Orange, #FF5800) 외곽순환도로 신규 편입 노선도 갱신",
        content: "미야시타 아이 컬러가 완벽히 매칭된 3세대 좌석버스(Vivid Orange) 노선 중, 최근 도심 정체를 피해 효빈 외곽순환도로를 경유하도록 대대적으로 개편된 신규 노선들의 정류장 목록 및 우회 경로 맵 템플릿이 각 노선 개별 문서 상단에 2026년 버전으로 최신화 적용 완료되었습니다."
    },
    {
        id: "r87", title: "[모집] 8호선 유리아 안내방송 한국어/영어/일본어 3개 국어 대본 완벽 작성자",
        content: "8호선(연보라색, #9856FF) 공식 마스코트이자 교환학생 설정인 유리아의, 특유의 서툰 억양과 발음이 가미된 환승역 안내방송 스크립트 3개 국어(한/영/일) 버전을 이어폰을 꽂고 정확하게 받아 적어주실 엄청난 청력의 언어 능력자 위키러를 애타게 찾고 있습니다. (와카미야 이브 밈체 억지 삽입 금지)"
    },
    {
        id: "r88", title: "[프로젝트] 효빈시 8개 자치구 및 탄성군 역대 구청장/군수 계보 목록표 정리",
        content: "효빈광역시 관할 8개 자치구(동구, 서구, 남구, 북구, 중구, 청엽구, 안천구, 창전구) 및 탄성군의 역대 구청장과 군수 목록을 민선 시대별, 연도별, 소속 정당(당적)별로 일목요연하게 정리하는 가독성 높은 계보 표를 각 자치구 문서 하단에 일괄 코딩하여 적용하는 대규모 행정 프로젝트가 실시됩니다."
    },
    {
        id: "r89", title: "[토론] 1호선 탄성지선 '비마리유적지구역' 심야 말발굽 소음 괴담 진위 여부 논쟁",
        content: "1호선 탄성지선 역사인 비마리유적지구역 문서에 오랫동안 적혀 있던 심야 시간대 말발굽 소음 괴담이, 사실은 단순한 급커브 구간의 선로 마찰음과 스퀼 소음이 와전된 것이라는 철도 동호인들의 날카로운 팩트체크 반박 문단이 추가되면서, 기존 괴담 문단을 재미 요소로 유지할 것인지에 대한 갑론을박이 한창입니다."
    },
    {
        id: "r90", title: "[공지] 문서 내 삽입되는 모든 지역 사진은 시스템 오류 방지를 위해 '한국어 단어.png' 로 통일",
        content: "마지막으로 다시 한번 강력히 공지합니다. 효빈시 관내 지하철역, 버스 정류장, 풍경 사진, 주요 랜드마크 등을 효빈위키 파일 서버에 업로드할 때는 무조건 '한국어 단어.png' 명명 규칙을 철저히 준수해야 합니다. 영문명이나 jpg 포맷 업로드 시 엑스박스 등 시스템 파싱 오류를 유발하므로 관리자 권한으로 즉시 삭제 처리됩니다."
    }
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

    // 랜덤 공지 30개 중 5개 렌더링
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
        const wrap = document.getElementById("hb-main-search-wrap") || input.parentElement;
        if(wrap && getComputedStyle(wrap).position === "static") wrap.style.position = "relative";

        let dd = wrap.querySelector(".hb-autocomplete");
        if(!dd){
            dd = document.createElement("div");
            dd.className = "hb-autocomplete";
            dd.style.position = "absolute";
            dd.style.left = "0";
            dd.style.right = "0";
            dd.style.top = "100%";
            dd.style.marginTop = "8px";
            dd.style.background = "white";
            dd.style.border = "1px solid rgba(0,0,0,0.12)";
            dd.style.borderRadius = "12px";
            dd.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
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

        const input = document.getElementById("mainSearchInput");
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
            const wrap = document.getElementById("hb-main-search-wrap") || input.parentElement;
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
        
        imgEl.src = '이미지/' + imgFileName + '.png';
        
        // 3. 에러 시 대체 로고 (한국어 규칙 무시하고 hyobin1.png 적용)
        imgEl.onerror = function() { 
            this.onerror = null; // 무한루프 방지
            this.src = '이미지/hyobin1.png'; 
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