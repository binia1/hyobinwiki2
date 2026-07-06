/* 파일 경로: js/효빈여담.js */

/**
 * 효빈광역시 14. 여담 문단 렌더링 함수
 * @param {string} containerId - 내용을 넣을 HTML 요소의 ID
 */
function renderHyobinTriviaSection(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-trivia-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-trv-wrapper { width: 100%; overflow-x: auto; margin-bottom: 2rem; margin-top: 1rem; }
            .hb-trv-table { width: 100%; min-width: 600px; border-collapse: collapse; border: 1px solid #ccc; font-size: 11px; text-align: left; line-height: 1.4; }
            .hb-trv-table th, .hb-trv-table td { border: 1px solid #e5e7eb; padding: 6px 5px; vertical-align: middle; }
            
            /* 헤더 스타일 (로고 적용) */
            .hb-trv-thead th.main-header { background-color: #7777AA; color: white; padding: 10px; position: relative; text-align: center; }
            .hb-trv-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-trv-logo { max-height: 28px; width: auto; }
            .hb-trv-title { font-weight: bold; font-size: 1.1em; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; color: white; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }

            /* 테이블 서브 헤더 */
            .hb-trv-sub-header th { background-color: #f3f4f6; font-weight: bold; text-align: center; color: #333; }

            /* 본문 토글용 */
            .hb-trv-tbody { transition: all 0.2s; }
            .hb-trv-tbody.hidden { display: none; }

            /* 텍스트 스타일 */
            .hb-text-body { line-height: 1.7; font-size: 0.95rem; margin-bottom: 1.5rem; text-align: justify; }
            .hb-text-body p { margin-bottom: 10px; }
            .hb-text-body strong { font-weight: bold; }
            .hb-text-body s { text-decoration: line-through; color: #999; }
            .hb-text-body ul { list-style-type: disc; padding-left: 20px; margin-top: 10px; }
            .hb-text-body li { margin-bottom: 8px; }

            /* 링크 스타일 */
            .hb-link { cursor: pointer; color: #004EA2; text-decoration: none; }
            .hb-link:hover { text-decoration: underline; }
            .hb-ext-link { color: #004EA2; text-decoration: none; } /* 외부링크(나무위키 등) */
            .hb-ext-link:hover { text-decoration: underline; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 헬퍼 함수 (링크 생성) ---
    const mkLink = (text, query = null) => {
        const q = query || text;
        return `<span class="hb-link" onclick="handleSearchFromNav('${q}')">${text}</span>`;
    };
    const mkExt = (text, url) => {
        return `<a href="${url}" target="_blank" class="hb-ext-link">${text}</a>`;
    };

    // --- 3. 데이터 및 HTML 조립 ---

    // 14.0 서문
    const introHTML = `
        <div class="hb-text-body">
            <p>
                <strong>${mkExt('오타쿠', 'https://namu.wiki/w/오타쿠')}가 무시당하지 않는, 아니 오타쿠가 주류인 유일한 도시다.</strong> 인구 비중 전국 1위를 자랑하며, 지역 공기업인 ${mkLink('효빈교통공사')} 연간 ${mkExt('굿즈', 'https://namu.wiki/w/굿즈')} 매출이 120억 원을 넘는 기적의 도시. ${mkLink('시장', '효빈시장')}이 대놓고 굿즈를 책상 위에 두고 시정 발표를 해도 ${mkExt('지지율', 'https://namu.wiki/w/지지율')}이 78%가 나오는 <s>정신 나간</s> 위엄을 자랑한다.
            </p>
        </div>
        <h3 id="s-14.1">14.1. 지명의 기적: 캐릭터 매칭 및 지명 유래 전수조사</h3>
        <div class="hb-text-body">
            <p>
                ${mkLink('효빈광역시')}의 지명들은 ${mkExt('일본 애니메이션', 'https://namu.wiki/w/일본%20애니메이션')} 캐릭터와 소름 돋게 일치한다. 사람들은 이를 "지리적 운명"이라 부른다. <s>사실 ${mkLink('박현만')} 시장이 캐릭터 프로젝트할 때 끼워 맞춘 거 아니냐는 ${mkExt('음모론', 'https://namu.wiki/w/음모론')}이 있다.</s> 아래는 시 전체의 지명 매칭 전수 데이터다.
            </p>
        </div>
    `;

    // 14.1 테이블 (방대한 데이터)
    const tableHeader = `
        <tr class="hb-trv-sub-header">
            <th>구</th><th>행정동/읍면</th><th>법정리/동</th><th>인구</th><th>애니/캐릭터 매칭 (우연의 일치임)</th><th>원래 지명 유래</th>
        </tr>
    `;
    
    const tableBodyId = 'hb-trv-tbody';
    const tableBody = `
        <tr><td rowspan="8">${mkLink('북구')}</td><td>${mkLink('고송1~8동', '고송동')}</td><td>${mkLink('고송동')}</td><td>약 21만</td><td>${mkExt('뱅드림', 'https://namu.wiki/w/BanG%20Dream!')} <strong>${mkExt('타카마츠 토모리', 'https://namu.wiki/w/타카마츠%20토모리')}</strong> 성씨 한자</td><td>높은 소나무가 많아서</td></tr>
        <tr><td>${mkLink('남전동')}</td><td>${mkLink('남전동')}</td><td>13,244</td><td>${mkExt('노조미', 'https://namu.wiki/w/토죠%20노조미')} 성우(${mkExt('쿠스다 아이나', 'https://namu.wiki/w/쿠스다%20아이나')}) 성씨 한자</td><td>남쪽 밭에서 변형</td></tr>
        <tr><td>${mkLink('사능동/2동', '사능동')}</td><td>${mkLink('사능동 1~3가', '사능동')}</td><td>약 1.5만</td><td>${mkExt('뱅드림', 'https://namu.wiki/w/BanG%20Dream!')} <strong>${mkExt('야마부키 사아야', 'https://namu.wiki/w/야마부키%20사아야')}</strong> 이름 한자</td><td>모래빛 비단(沙綾) 생산지</td></tr>
        <tr><td>${mkLink('산고동')}</td><td>${mkLink('추산동')}</td><td>2,000</td><td>${mkExt('케이온', 'https://namu.wiki/w/케이온!')} <strong>${mkExt('아키야마 미오', 'https://namu.wiki/w/아키야마%20미오')}</strong> 성씨 한자</td><td>가을산(秋山) 마을</td></tr>
        <tr><td>${mkLink('소조동')}</td><td>${mkLink('소조동')}</td><td>18,493</td><td>${mkExt('럽라', 'https://namu.wiki/w/러브%20라이브!')} <strong>${mkExt('미나미 코토리', 'https://namu.wiki/w/미나미%20코토리')}</strong>(小鳥) 조합</td><td>작은 새들이 모이는 동네</td></tr>
        <tr><td>${mkLink('중수1동', '중수동')}</td><td>${mkLink('중수동')}</td><td>30,258</td><td>${mkExt('니지동', 'https://namu.wiki/w/니지동')} <strong>${mkExt('나카스 카스미', 'https://namu.wiki/w/나카스%20카스미')}</strong> 성씨 한자</td><td>과거 중간 대기 지역</td></tr>
        <tr><td>${mkLink('진희동')}/${mkLink('청능', '청능동')}</td><td>${mkLink('입희', '입희동')}/${mkLink('진희동')}</td><td>약 2.4만</td><td>${mkExt('뱅드림', 'https://namu.wiki/w/BanG%20Dream!')} <strong>${mkExt('시이나 타키', 'https://namu.wiki/w/시이나%20타키')}</strong> / ${mkExt('럽라', 'https://namu.wiki/w/러브%20라이브!')} <strong>${mkExt('마키', 'https://namu.wiki/w/니시키노%20마키')}</strong></td><td>희망(希)을 세운 곳 / 참한 희망</td></tr>
        <tr><td>${mkLink('채산', '채산동')}/${mkLink('천왕사', '천왕사동')}</td><td>${mkLink('아자동')}/${mkLink('천왕사동')}</td><td>약 1.1만</td><td>${mkExt('우다가와 아코', 'https://namu.wiki/w/우다가와%20아코')} / ${mkExt('텐노지 리나', 'https://namu.wiki/w/텐노지%20리나')} 성씨</td><td>아자마을 / 천왕사 절 유래</td></tr>
        
        <tr><td rowspan="7">${mkLink('안천구')}</td><td>${mkLink('뇌전동')}</td><td>${mkLink('뇌전동')}</td><td>1,221</td><td>${mkExt('뱅드림', 'https://namu.wiki/w/BanG%20Dream!')} <strong>${mkExt('세타 카오루', 'https://namu.wiki/w/세타%20카오루')}</strong> 성씨 한자</td><td>여울밭</td></tr>
        <tr><td>${mkLink('당가1~2동', '당가동')}</td><td>${mkLink('당가동')}</td><td>37,573</td><td>${mkExt('럽라 슈퍼스타', 'https://namu.wiki/w/러브%20라이브!%20슈퍼스타!!')} <strong>${mkExt('탕 쿠쿠', 'https://namu.wiki/w/탕%20쿠쿠')}</strong> 이름(唐可)</td><td>당나라 사신이 '가능'을 외친 곳</td></tr>
        <tr><td>${mkLink('백합', '백합동')}/${mkLink('북택동')}</td><td>${mkLink('백합', '백합동')}/${mkLink('북택', '북택동')}/${mkLink('하구동')}</td><td>약 3.6만</td><td>${mkExt('우시고메 유리', 'https://namu.wiki/w/우시고메%20유리')} / <strong>${mkExt('키타자와 하구미', 'https://namu.wiki/w/키타자와%20하구미')}</strong></td><td>백합 밀생지 / 강의 아랫입구</td></tr>
        <tr><td>${mkLink('악부동')}</td><td>${mkLink('광상', '광상동')}/${mkLink('초음', '초음동')}/${mkLink('타천동')}</td><td>약 500</td><td>${mkExt('헤이데이 광상곡', 'https://namu.wiki/w/철야의%20노래')} / ${mkExt('미스미 우이카', 'https://namu.wiki/w/미스미%20우이카')} / ${mkExt('타천', 'https://namu.wiki/w/타천')}</td><td>빛나는 상 / 타천 하천 유래</td></tr>
        <tr><td>${mkLink('이십기동')}</td><td>${mkLink('리의', '리의동')}/${mkLink('이십기', '이십기동')}/${mkLink('추자동')}</td><td>약 1.2만</td><td>${mkExt('우자와 리이', 'https://namu.wiki/w/우자와%20리이')} / <strong>${mkExt('니쥿키 히나코', 'https://namu.wiki/w/니쥿키%20히나코')}</strong></td><td>리의마을 / 이십기마을 유래</td></tr>
        <tr><td>${mkLink('이자1~4동', '이자동')}</td><td>${mkLink('이자동')}</td><td>11.8만</td><td>${mkExt('럽라 선샤인', 'https://namu.wiki/w/러브%20라이브!%20선샤인!!')} <strong>${mkExt('사쿠라우치 리코', 'https://namu.wiki/w/사쿠라우치%20리코')}</strong> 이름</td><td>배나무와 아이가 많던 동네</td></tr>
        <tr><td>${mkLink('칠채동')}</td><td>${mkLink('남', '남동')}/${mkLink('서수', '서수동')}/${mkLink('영색무', '영색무동')}</td><td>약 1.1만</td><td>${mkExt('코토리', 'https://namu.wiki/w/미나미%20코토리')} / ${mkExt('토가와 미즈호', 'https://namu.wiki/w/토가와%20미즈호')} / ${mkExt('실루엣댄스', 'https://namu.wiki/w/실루엣%20댄스')}</td><td>남리마을 / 영색무 전통지</td></tr>
        
        <tr><td rowspan="4">${mkLink('중구')}</td><td>${mkLink('고도동')}</td><td>${mkLink('우이동')}</td><td>1,665</td><td>${mkExt('케이온', 'https://namu.wiki/w/케이온!')} <strong>${mkExt('히라사와 우이', 'https://namu.wiki/w/히라사와%20우이')}</strong> 이름 일치</td><td>소의 귀를 닮은 지형</td></tr>
        <tr><td>${mkLink('약맥동')}</td><td>${mkLink('목', '목동')}/${mkLink('삼각', '삼각동')}/${mkLink('일향동')}</td><td>약 3,400</td><td>${mkExt('와카바 무츠미', 'https://namu.wiki/w/와카바%20무츠미')} / ${mkExt('미스미 우이카', 'https://namu.wiki/w/미스미%20우이카')} / ${mkExt('토야마 아스카', 'https://namu.wiki/w/토야마%20아스카')}</td><td>화목한 사람(和)이 많음</td></tr>
        <tr><td>${mkLink('유내동')}</td><td>${mkLink('리사동')}</td><td>1,766</td><td>${mkExt('뱅드림', 'https://namu.wiki/w/BanG%20Dream!')} <strong>${mkExt('이마이 리사', 'https://namu.wiki/w/이마이%20리사')}</strong> 이름 일치</td><td>법리를 다스리는 사람이 많음</td></tr>
        <tr><td>${mkLink('중앙동')}</td><td>${mkLink('지유동')}/${mkLink('훈동')}</td><td>약 50</td><td>${mkExt('츄츄(타마데 치유)', 'https://namu.wiki/w/츄츄(BanG%20Dream!)')} 번안 / ${mkExt('세타 카오루', 'https://namu.wiki/w/세타%20카오루')}</td><td>지유촌 / 훈동마을</td></tr>
        
        <tr><td rowspan="4">${mkLink('창전구')}</td><td>${mkLink('광정동')}</td><td>${mkLink('광정', '광정동')}/${mkLink('마시', '마시동')}/${mkLink('보통동')}</td><td>약 1만</td><td>${mkExt('히로마치 나나미', 'https://namu.wiki/w/히로마치%20나나미')} / <strong>${mkExt('쿠라타 마시로', 'https://namu.wiki/w/쿠라타%20마시로')}</strong></td><td>넓은 우물 / 마시(馬市) 시장</td></tr>
        <tr><td>${mkLink('동곡동')}</td><td>${mkLink('동곡', '동곡동')}/${mkLink('투자동')}</td><td>2.5만</td><td>${mkExt('키리가야 토우코', 'https://namu.wiki/w/키리가야%20토우코')} 성씨/이름 한자</td><td>동쪽 골짜기 / 투자마을</td></tr>
        <tr><td>${mkLink('쌍엽1~2동', '쌍엽동')}</td><td>${mkLink('쌍엽동')}</td><td>5.1만</td><td><strong>${mkExt('후타바 츠쿠시', 'https://namu.wiki/w/후타바%20츠쿠시')}</strong> 성씨 유사 뜻</td><td>떡잎(雙葉)이 많던 동네</td></tr>
        <tr><td>${mkLink('진백', '진백동')}/${mkLink('창전', '창전동')}/${mkLink('칠심', '칠심동')}</td><td>${mkLink('창전', '창전동')}/${mkLink('칠심', '칠심동')}/${mkLink('팔조동')}</td><td>약 22만</td><td><strong>${mkExt('마시로', 'https://namu.wiki/w/쿠라타%20마시로')}</strong> / <strong>${mkExt('나나미', 'https://namu.wiki/w/히로마치%20나나미')}</strong> / ${mkExt('야시오 루이', 'https://namu.wiki/w/야시오%20루이')}</td><td>곡식 창고(倉) / 일곱 마음</td></tr>
        
        <tr><td rowspan="6">${mkLink('탄성군')}</td><td>${mkLink('고해읍')}</td><td>${mkLink('고해', '고해읍')}/${mkLink('천가리')}</td><td>1.3만</td><td>${mkExt('럽라 선샤인', 'https://namu.wiki/w/러브%20라이브!%20선샤인!!')} <strong>${mkExt('타카미 치카', 'https://namu.wiki/w/타카미%20치카')}</strong>(성씨/이름)</td><td>높은 바다 / 천 개의 노래(千歌)</td></tr>
        <tr><td>${mkLink('도변읍')}</td><td>${mkLink('도변', '도변리')}/${mkLink('요우리')}/${mkLink('잠재', '잠재리')}/${mkLink('표명', '표명리')}</td><td>약 4.5만</td><td><strong>${mkExt('와타나베 요우', 'https://namu.wiki/w/와타나베%20요우')}</strong>(성씨/이름) / ${mkExt('잠재표명', 'https://namu.wiki/w/잠재표명')}</td><td>가장자리를 건너던 곳 / 표명산</td></tr>
        <tr><td>${mkLink('도변읍')}</td><td>${mkLink('조일리')}/${mkLink('앵내리')}</td><td>약 4만</td><td>${mkExt('아사히 롯카', 'https://namu.wiki/w/아사히%20롯카')} 성씨 / <strong>${mkExt('사쿠라우치 리코', 'https://namu.wiki/w/사쿠라우치%20리코')}</strong></td><td>조일촌 / 앵두 재배지</td></tr>
        <tr><td>${mkLink('도향면')}</td><td>${mkLink('미로', '미로리')}/${mkLink('반주', '반주리')}/${mkLink('벽천', '벽천리')}/${mkLink('분음', '분음리')}</td><td>약 4천</td><td>${mkExt('마이고', 'https://namu.wiki/w/MyGO!!!!!')} 노래 제목 / <strong>${mkExt('카와라기 모모카', 'https://namu.wiki/w/카와라기%20모모카')}</strong></td><td>미로마을 / 복숭아 향기</td></tr>
        <tr><td>${mkLink('도향면')}</td><td>${mkLink('시초', '시초리')}/${mkLink('일일', '일일리')}/${mkLink('초반', '초반리')}/${mkLink('춘일경', '춘일경리')}</td><td>약 2천</td><td>${mkExt('마이고', 'https://namu.wiki/w/MyGO!!!!!')} 노래 제목 전수</td><td>시초마을 / 경치 좋은 춘일경</td></tr>
        <tr><td>${mkLink('서목', '서목리')}/${mkLink('소원', '소원리')}/${mkLink('야진', '야진리')}/${mkLink('흑택', '흑택리')}</td><td>각종 동리</td><td>약 6만</td><td>${mkExt('롯카', 'https://namu.wiki/w/아사히%20롯카')} / ${mkExt('마리', 'https://namu.wiki/w/오하라%20마리')} / ${mkExt('마키', 'https://namu.wiki/w/니시키노%20마키')} / ${mkExt('루비', 'https://namu.wiki/w/쿠로사와%20루비')}</td><td>녹색 언덕 / 소원촌 / 검은 호수</td></tr>
    `;

    // 14.2, 14.3, 14.4 텍스트 (줄글 및 리스트)
    const extraContent = `
        <h3 id="s-14.2">14.2. 효빈 애니메이션 페스티벌 (HAF)과 시티투어</h3>
        <div class="hb-text-body">
            <p>
                매년 여름 개최되는 <strong>${mkLink('HAF', '효빈애니메이션페스티벌')}</strong>는 ${mkLink('효빈', '효빈광역시')}의 명실상부한 ${mkExt('국경일', 'https://namu.wiki/w/국경일')}급 행사다. 축제 기간에는 ${mkLink('칠양여객고속')}이 운영하는 ${mkLink('종합버스터미널', '효빈고속버스터미널')}(코드 790)이 아예 캐릭터 ${mkExt('래핑', 'https://namu.wiki/w/래핑')}으로 도배되며, ${mkExt('Aqours', 'https://namu.wiki/w/Aqours')}와 ${mkExt('니지동', 'https://namu.wiki/w/니지동')} ${mkExt('성우', 'https://namu.wiki/w/성우')}들이 직접 터미널 안내 방송을 맡는다. <s>터미널 가는데 ${mkExt('입장료', 'https://namu.wiki/w/입장료')} 받아야 하는 거 아니냐는 말이 나온다.</s> 또한 ${mkLink('시티투어 버스', '효빈시티투어')} ${mkLink('T01~T09', 'T01')} 노선은 팬들이 "이거 타면 ${mkExt('하교', 'https://namu.wiki/w/하교')}하는 기분이다"라며 극찬하는 핵심 ${mkExt('관광', 'https://namu.wiki/w/관광')} 상품이다.
            </p>
        </div>

        <h3 id="s-14.3">14.3. 혐오 세력과의 갈등 및 빌런 열전</h3>
        <div class="hb-text-body">
            <p>도시의 풍부한 문화를 파괴하려던 ${mkExt('빌런', 'https://namu.wiki/w/빌런')}(${mkLink('윤재훈')}, ${mkLink('윤대환')}, ${mkLink('효빈대학교')} 부동산학과 ${mkLink('A씨')})들은 ${mkExt('팬덤', 'https://namu.wiki/w/팬덤')}과 ${mkExt('행정', 'https://namu.wiki/w/행정')}의 철퇴를 맞고 완전히 <strong>인생 퇴장</strong>당했다.</p>
            <ul>
                <li>
                    <strong>${mkLink('엠마빵', '엠마베르데')} 파괴 시도 사건:</strong> ${mkLink('리사역', '리사동')} ${mkLink('협승', '협승운수')} 통로에서 '${mkExt('엠마 베르데', 'https://namu.wiki/w/엠마%20베르데')} ${mkExt('팥빵', 'https://namu.wiki/w/팥빵')}'을 파괴하려던 ${mkLink('A씨')}는 ${mkExt('성우', 'https://namu.wiki/w/성우')} ${mkExt('사시데 마리아', 'https://namu.wiki/w/사시데%20마리아')}로부터 "그분은 ${mkExt('경제학', 'https://namu.wiki/w/경제학')}보다 ${mkExt('인성 교육', 'https://namu.wiki/w/인성교육')}이 필요하다"는 경멸 섞인 ${mkExt('SNS', 'https://namu.wiki/w/SNS')} 성명을 받고 사회적으로 매장되었다. <s>이후 ${mkLink('효빈대', '효빈대학교')}에서 ${mkExt('출교', 'https://namu.wiki/w/제적')}당하며 ${mkExt('학사', 'https://namu.wiki/w/학사')} 학위와 함께 인성도 날아갔다.</s>
                </li>
                <li>
                    <strong>${mkLink('탕쿠쿠')} 대첩 (2025 HAF):</strong> ${mkExt('탕 쿠쿠', 'https://namu.wiki/w/탕%20쿠쿠')} 성우 ${mkExt('Liyuu', 'https://namu.wiki/w/Liyuu')}의 ${mkExt('팬미팅', 'https://namu.wiki/w/팬미팅')}에 난입해 ${mkExt('중국어', 'https://namu.wiki/w/중국어')} 비하 발언을 하던 ${mkLink('윤재훈')}과 ${mkLink('A씨')}가 현장 팬들에게 <strong>'묵사발'</strong> 응징을 당한 사건이다. 이후 시에서 도입한 ${mkExt('AI', 'https://namu.wiki/w/AI')} 치안 시스템(${mkLink('Kuku Guard', 'KukuGuard')})에 의해 시내 모든 행사장에서 영구 추방되었다.
                </li>
                <li>
                    <strong>${mkExt('Liella!', 'https://namu.wiki/w/Liella!')} 버스 분변 테러 미수:</strong> ${mkExt('쇠파이프', 'https://namu.wiki/w/쇠파이프')}를 들고 래핑 버스를 부수려던 ${mkLink('윤재훈')}이 190cm 근육질의 ${mkLink('정비 직원', '칠양여객고속')}(${mkExt('치사토', 'https://namu.wiki/w/아라시%20치사토')} ${mkExt('오시', 'https://namu.wiki/w/오시')})에게 제압당하자, 공포에 질려 <strong>바지에 ${mkExt('대변', 'https://namu.wiki/w/대변')}을 지리고 이를 투척하려 한</strong> 엽기적인 사건이다. 직원은 그를 "${mkExt('만마루', 'https://namu.wiki/w/만마루')}처럼 동그랗게 접어주겠다"며 제압해 팬덤의 영웅이 되었다. <s>${mkExt('생화학 테러', 'https://namu.wiki/w/생화학무기')} 미수범의 탄생.</s>
                </li>
                <li>
                    <strong>${mkExt('필리핀', 'https://namu.wiki/w/필리핀')} 갱단 조공 사건:</strong> ${mkExt('한국', 'https://namu.wiki/w/대한민국')}에서 쫓겨나 필리핀으로 도주한 ${mkLink('윤재훈')}이 현지에서도 사고를 치다 ${mkExt('갱단', 'https://namu.wiki/w/갱단')} 8명에게 포위당해 울며 살려달라고 빈 사건. ${mkExt('한국 영사관', 'https://namu.wiki/w/재외공관')}조차 "이 인간은 국제적 재난"이라며 고개를 저었을 정도다. <s>${mkExt('국격', 'https://namu.wiki/w/국격')} 살살 녹는다.</s>
                </li>
            </ul>
        </div>

        <h3 id="s-14.4">14.4. 시장 박효빈과 성우들의 일화</h3>
        <div class="hb-text-body">
            <p>
                현직 ${mkLink('박효빈')} 시장은 ${mkExt('초등학생', 'https://namu.wiki/w/초등학생')} 시절부터 ${mkLink('1호선')} 캐릭터 '${mkLink('고나미')}'의 팬이었던 <strong>${mkExt('성덕', 'https://namu.wiki/w/성공한%20덕후')}</strong> 정치인이다. ${mkLink('시장실')} 책상에 굿즈를 두고 시정 발표를 하는 사진이 '${mkExt('갤러리', 'https://namu.wiki/w/디시인사이드')} 폭발'을 일으키기도 했다.
            </p>
            <ul>
                <li><strong>${mkExt('사가라 마유', 'https://namu.wiki/w/사가라%20마유')}(${mkExt('나카스 카스미', 'https://namu.wiki/w/나카스%20카스미')} 역):</strong> ${mkExt('유튜브', 'https://namu.wiki/w/유튜브')} '${mkExt('마유치 튜브', 'https://namu.wiki/w/사가라%20마유')}'에서 "시장님이 내 ${mkExt('패널', 'https://namu.wiki/w/등신대')}에 묻은 먼지를 본인 ${mkExt('손수건', 'https://namu.wiki/w/손수건')}으로 직접 닦아주셨다. 눈빛이 진짜 '찐'이었다"며 친구 같다고 극찬했다.</li>
                <li><strong>${mkExt('마에다 카오리', 'https://namu.wiki/w/마에다%20카오리')}(${mkExt('오사카 시즈쿠', 'https://namu.wiki/w/오사카%20시즈쿠')} 역):</strong> "${mkLink('시장', '박효빈')} 옆 ${mkLink('비서관')}님이 넘어지려는 ${mkExt('치카', 'https://namu.wiki/w/타카미%20치카')}&amp;${mkExt('리코', 'https://namu.wiki/w/사쿠라우치%20리코')} 패널을 몸을 날려 받아내더라. 범인한테 지르는 ${mkExt('사자후', 'https://namu.wiki/w/사자후')}를 보고 내가 진짜 ${mkExt('광견', 'https://namu.wiki/w/광견')}이 아니었음을 깨달았다"며 비서관에게 반했다고 고백(?)했다. <s>진짜 광견의 탄생.</s></li>
                <li><strong>문화 성지 보호 협약:</strong> ${mkLink('박 시장', '박효빈')}은 ${mkExt('일본', 'https://namu.wiki/w/일본')} ${mkExt('누마즈', 'https://namu.wiki/w/누마즈')} 시장과 직접 만나 국제 ${mkExt('성지순례', 'https://namu.wiki/w/성지순례')} 관광객 보호를 위한 협약을 체결했으며, ${mkLink('윤재훈')}은 이 과정에서 일본 ${mkExt('아키하바라', 'https://namu.wiki/w/아키하바라')} 난동으로 <strong>일본 영구 ${mkExt('입국 금지', 'https://namu.wiki/w/입국금지')}</strong> 처분을 받았다.</li>
            </ul>
        </div>
    `;

    // --- 4. 최종 HTML 조립 ---
    const fullHtml = `
        ${introHTML}
        
        <div class="hb-trv-wrapper">
            <table class="hb-trv-table">
                <thead class="hb-trv-thead">
                    <tr>
                        <th colspan="6" class="main-header">
                            <div class="hb-trv-header-content">
                                <img src="이미지/hyobin1.png" class="hb-trv-logo" alt="로고" onerror="this.style.display='none'"/>
                                <span class="hb-trv-title">효빈광역시 지명 유래 및 캐릭터 매칭</span>
                                <span class="hb-toggle-btn" id="hb-trv-toggle">[접기]</span>
                            </div>
                        </th>
                    </tr>
                    ${tableHeader}
                </thead>
                <tbody id="${tableBodyId}" class="hb-trv-tbody">
                    ${tableBody}
                </tbody>
            </table>
        </div>

        ${extraContent}
    `;

    container.innerHTML = fullHtml;

    // --- 5. 이벤트 연결 (접기/펼치기) ---
    const toggleBtn = container.querySelector('#hb-trv-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const tbody = document.getElementById(tableBodyId);
            if (tbody.classList.contains('hidden')) {
                tbody.classList.remove('hidden');
                this.textContent = '[접기]';
            } else {
                tbody.classList.add('hidden');
                this.textContent = '[펼치기]';
            }
        });
    }
}