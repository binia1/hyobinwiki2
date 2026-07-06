/* 파일 경로: js/효빈행정구역변천.js */

/**
 * 효빈광역시 행정구역 변천사(13.1) 테이블 렌더링 함수
 * @param {string} containerId - 내용을 넣을 HTML 요소의 ID
 */
function renderHyobinAdminHistory(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-adm-hist-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-adm-wrapper { width: 100%; overflow-x: auto; margin-bottom: 2rem; }
            .hb-adm-table { width: 100%; min-width: 600px; border-collapse: collapse; border: 1px solid #ccc; font-size: 14px; text-align: center; line-height: 1.5; }
            .hb-adm-table th, .hb-adm-table td { border: 1px solid #ccc; padding: 6px 8px; vertical-align: middle; }
            
            /* 헤더 스타일 (로고 적용) */
            .hb-adm-thead th.main-header { background-color: #7777AA; color: white; padding: 10px; position: relative; }
            .hb-adm-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-adm-logo { max-height: 28px; width: auto; }
            .hb-adm-title { font-weight: bold; font-size: 1.1em; }
            .hb-toggle-btn { font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none; color: white; }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }

            /* 서브 헤더 및 구분 행 */
            .hb-adm-sub-header th { background-color: #7777AA; font-weight: bold; }
            .hb-year-row { background-color: #eef; font-weight: bold; padding: 5px; }
            .hb-bg-gray { background-color: #f5f5f5; }
            .hb-font-bold { font-weight: bold; }

            /* 안내 문구 리스트 */
            .hb-wiki-list { margin-bottom: 15px; padding-left: 20px; line-height: 1.6; font-size: 0.95rem; }
            .hb-wiki-list li { margin-bottom: 4px; }

            /* 본문 토글용 */
            .hb-adm-tbody { transition: all 0.2s; }
            .hb-adm-tbody.hidden { display: none; }
            
            /* 제목 스타일 */
            .hb-h4 { font-size: 1.1em; font-weight: bold; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. HTML 조립 함수 ---
    const createTable = (id, title, headerHTML, bodyHTML) => {
        return `
            <div class="hb-adm-wrapper">
                <table class="hb-adm-table">
                    <thead class="hb-adm-thead">
                        <tr>
                            <th colspan="100%" class="main-header">
                                <div class="hb-adm-header-content">
                                    <img src="이미지/hyobin1.webp" class="hb-adm-logo" alt="로고" onerror="this.style.display='none'"/>
                                    <span class="hb-adm-title">${title}</span>
                                    <span class="hb-toggle-btn" data-target="${id}">[접기]</span>
                                </div>
                            </th>
                        </tr>
                        ${headerHTML}
                    </thead>
                    <tbody id="${id}" class="hb-adm-tbody">
                        ${bodyHTML}
                    </tbody>
                </table>
            </div>
        `;
    };

    // --- 3. 데이터 및 HTML 정의 ---

    // [13.1 안내 문구]
    const introList = `
        <ul class="hb-wiki-list">
            <li>1958년 행정동제 실시 이전의(행정동제 실시 이전) 행정구역 변천사의 경우 법정동의 변경, 혹은 시계(市界) 변경이니 제외됨을 유념해주시길 바랍니다.</li>
            <li>행정동의 증설 및 감소는 직할지(출장소 포함) 기준입니다.</li>
            <li>변경시 행정구역 란은 맨 왼쪽칸은 구 행정구역, 중간은 신 행정구역, 맨 오른쪽칸은 비고란입니다.</li>
        </ul>
    `;

    // [표 1] 1958.02.03 행정동 제도 실시
    // 헤더
    const table1Header = `
        <tr class="hb-adm-sub-header">
            <th style="width: 45%;">행정동제 실시 전후 행정구역 (1958.2.3)</th>
            <th style="width: 30%;">효빈시 행정동</th>
            <th style="width: 25%;">관할 출장소</th>
        </tr>
    `;
    // 본문 (Rowspan 구조 완벽 복구)
    const table1Body = `
        <tr><td>중앙로1~4가, 훈동, 심동1,2가, 원동4가</td><td>중앙동</td><td rowspan="12" class="hb-bg-gray">본청</td></tr>
        <tr><td>중앙로5~6가</td><td>중앙로5,6가동</td></tr>
        <tr><td>중동1~3가</td><td>중동</td></tr>
        <tr><td>완동2,3가</td><td>완동</td></tr>
        <tr><td>중보로, 완동1가</td><td>중보동</td></tr>
        <tr><td>소장동1가</td><td>소장1가동</td></tr>
        <tr><td>소장동2가</td><td>소장2가동</td></tr>
        <tr><td>창선동1~3가</td><td>창선동</td></tr>
        <tr><td>원동1~3가</td><td>원동</td></tr>
        <tr><td>조유동1,5가</td><td>조유1,5가동</td></tr>
        <tr><td>조유동2,3,4가</td><td>조유2,3,4가동</td></tr>
        <tr><td>영동1,2가</td><td>영동</td></tr>
        <tr><td>천석동1~3가, 서남동</td><td>천석동</td><td rowspan="3" class="hb-bg-gray">본청</td></tr>
        <tr><td>만실동, 궁정동, 도람동</td><td>궁람동</td></tr>
        <tr><td>오석동</td><td>오석동</td></tr>
        <tr><td>신덕동</td><td>신덕동</td><td rowspan="4" class="hb-bg-gray">동부출장소</td></tr>
        <tr><td>내조동</td><td>내조1,2동</td></tr>
        <tr><td>경동</td><td>경동</td></tr>
        <tr><td>유내동, 리사동, 정동</td><td>유내동</td></tr>
        <tr><td>일향동</td><td>일향동</td><td rowspan="6" class="hb-bg-gray">중부출장소</td></tr>
        <tr><td>오주동, 목동</td><td>오주동</td></tr>
        <tr><td>주동, 약맥동</td><td>약맥동</td></tr>
        <tr><td>고도동</td><td>고도동</td></tr>
        <tr><td>시남동, 시북동, 우이동</td><td>시우동</td></tr>
        <tr><td>십덕동</td><td>십덕동</td></tr>
        <tr><td>내항동</td><td>내항1,2동</td><td rowspan="2" class="hb-bg-gray">중부출장소</td></tr>
        <tr><td>명일동</td><td>명일동</td></tr>
        <tr><td>입동1-3가</td><td>입동</td><td rowspan="6" class="hb-bg-gray">청엽출장소</td></tr>
        <tr><td>동리동, 언동1,2가</td><td>동리동</td></tr>
        <tr><td>사노동</td><td>사노동</td></tr>
        <tr><td>비마동</td><td>비마동</td></tr>
        <tr><td>우전동</td><td>우전동</td></tr>
        <tr><td>청엽동</td><td>청엽동</td></tr>
        <tr><td>등동, 헌이송동, 마잡동, 서증동</td><td>마잡동</td><td class="hb-bg-gray">청엽출장소</td></tr>
        <tr><td>북문동1-2가</td><td>북문동</td><td rowspan="3" class="hb-bg-gray">북부출장소</td></tr>
        <tr><td>내성동1-3가, 칠천동</td><td>내성동</td></tr>
        <tr><td>칠천동</td><td>칠천동</td></tr>
        <tr><td>평당동, 곽산동, 고간동</td><td>평산동</td><td rowspan="5" class="hb-bg-gray">남부출장소</td></tr>
        <tr><td>월천동, 신흥동, 포장동, 운양동, 박산동</td><td>월천동</td></tr>
        <tr><td>항동1가</td><td>항1가1동, 항1가2동</td></tr>
        <tr><td>항동2가</td><td>항2가동</td></tr>
        <tr><td>항동3가</td><td>항3가동</td></tr>
        <tr><td>어간동</td><td>어간1,2동</td><td class="hb-bg-gray">남부출장소</td></tr>
        <tr><td>사가당동</td><td>사가당1-3동</td><td class="hb-bg-gray">동부출장소</td></tr>
        <tr><td>소조동</td><td>소조동</td><td rowspan="5" class="hb-bg-gray">북부출장소</td></tr>
        <tr><td>사능동1가</td><td>사능동</td></tr>
        <tr><td>사능동2가</td><td>사능2가1,2동</td></tr>
        <tr><td>사능동3가, 치남동, 생곡동</td><td>치곡동</td></tr>
        <tr><td>해서동</td><td>해서동</td></tr>
        <tr><td>당선동</td><td>당선1,2동</td><td class="hb-bg-gray">북부출장소</td></tr>
        <tr style="background-color: #f9f9f9;" class="hb-font-bold">
            <td>99법정동</td><td>58행정동</td><td>5출장소, 1본청</td>
        </tr>
    `;

    // [표 2] 주요 행정구역 개편 연혁
    // 헤더
    const table2Header = `
        <tr class="hb-adm-sub-header">
            <th style="width: 35%;">구 행정구역</th>
            <th style="width: 35%;">신 행정구역</th>
            <th style="width: 30%;">비고</th>
        </tr>
    `;
    // 본문 (연도별 데이터 완벽 복구)
    const table2Body = `
        <tr class="hb-year-row"><td colspan="3">1963. 4. 2. 구(區)제 시행 및 고송면 일부 편입</td></tr>
        <tr><td>북부출장소 및 편입지역</td><td><strong>서구</strong></td><td></td></tr>
        <tr><td>본청관할지역 및 동부·중부(일부) 출장소</td><td><strong>중구</strong></td><td></td></tr>
        <tr><td>중부(일부)·남부·청엽 출장소</td><td><strong>남구</strong> 및 남구 청엽출장소</td><td></td></tr>
        <tr><td>일부 출장소 폐지 및 구 전환</td><td>3구 1출장소</td><td></td></tr>
        <tr><td>탄성군 고송면 과진리</td><td>서구 과진1,2동</td><td></td></tr>
        <tr><td>사복리</td><td>사복동</td><td></td></tr>
        <tr><td>청덕리</td><td>청덕동</td><td></td></tr>
        <tr><td>탄성군 창전면 창전리</td><td>남구 창전동</td><td></td></tr>
        <tr><td>유류리, 쌍엽리, 팔조리</td><td>유엽동</td><td></td></tr>
        <tr><td>동곡리, 투자리</td><td>동곡동</td><td></td></tr>
        <tr><td>마시리, 생덕리, 보통리</td><td>마생동</td><td></td></tr>
        <tr><td>칠심리</td><td>칠심동</td><td></td></tr>
        <tr><td>창전면 편입지역</td><td>남구 창전출장소</td><td></td></tr>
        <tr><td>시우동</td><td>남구 시북동, 중구 시우동</td><td></td></tr>
        <tr><td>오주동</td><td>중구 오주동, 남구 목동</td><td></td></tr>
        <tr><td>출장소 신설 및 각 구 편입</td><td>총 3구 2출장소</td><td></td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">68 행정동</td><td></td></tr>
        <tr><td>중구</td><td>27행정동</td><td></td></tr>
        <tr><td>서구</td><td>15행정동</td><td></td></tr>
        <tr><td>남구</td><td>26행정동 2출장소</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1971. 3. 2. 고송면·당가면 전역 편입 및 북구 신설</td></tr>
        <tr><td>탄성군 고송면 고송리</td><td><strong>북구</strong> 고송동</td><td></td></tr>
        <tr><td>진희리</td><td>진희동</td><td></td></tr>
        <tr><td>입희리</td><td>입희동</td><td></td></tr>
        <tr><td>입선리</td><td>입선동</td><td></td></tr>
        <tr><td>청능리</td><td>청능동</td><td></td></tr>
        <tr><td>천왕사리</td><td>천왕사동</td><td></td></tr>
        <tr><td>사연리</td><td>사연동</td><td></td></tr>
        <tr><td>추산리, 서도리, 포산리</td><td>추서동</td><td></td></tr>
        <tr><td>탄성군 당가면 덕현리</td><td>덕현1,2동</td><td></td></tr>
        <tr><td>우택리</td><td>남구 우택동</td><td></td></tr>
        <tr><td>진백리</td><td>남구 진백동</td><td></td></tr>
        <tr><td>북택리</td><td>북택동</td><td></td></tr>
        <tr><td>당가리</td><td>당가1,2동</td><td></td></tr>
        <tr><td>뇌전리, 세익리, 치장리, 하구리</td><td>뇌전동</td><td></td></tr>
        <tr><td>(신설)</td><td>16행정동 신설</td><td></td></tr>
        <tr><td>서구 당선1동</td><td>서구 당선1,3동</td><td></td></tr>
        <tr><td>과진1,2동</td><td>과진1,2,3,4동</td><td></td></tr>
        <tr><td>중구 내조2동</td><td>중구 내조2,3동</td><td></td></tr>
        <tr><td>남구 청엽동</td><td>남구 청엽1,2동</td><td></td></tr>
        <tr><td>항3가동</td><td>항3가1동, 항3가2동</td><td></td></tr>
        <tr><td>마잡동</td><td>마잡동, 등동</td><td></td></tr>
        <tr><td>기존행정동 분동</td><td>7행정동 신설</td><td>총 91행정동 체제</td></tr>
        <tr><td>남구 내항1,2동, 목동, 명일동, 시북동, 십덕동</td><td>중구 편입</td><td>구(區)간 조정</td></tr>
        <tr><td>중구 사가당1,2,3동</td><td>북구 편입</td><td></td></tr>
        <tr><td>서구 사능동, 사능2가1,2동, 치곡동, 해서동, 소조동</td><td>북구 편입</td><td></td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">91행정동</td><td>4구 2출장소</td></tr>
        <tr><td>중구</td><td>31행정동</td><td></td></tr>
        <tr><td>서구</td><td>12행정동</td><td></td></tr>
        <tr><td>남구</td><td>28행정동 2출장소</td><td></td></tr>
        <tr><td>북구</td><td>20행정동</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1972. 5. 4. 기존 행정동 분동 및 합동</td></tr>
        <tr><td>서구 과진 1,2,4동</td><td>서구 과진 1~7동</td><td></td></tr>
        <tr><td>사복동</td><td>서구 사복1,2동</td><td></td></tr>
        <tr><td>청덕동</td><td>서구 청덕1,2동</td><td>서구 5동 증가</td></tr>
        <tr><td>북구 사가당1,2동</td><td>북구 사가당1,2,4,5동</td><td></td></tr>
        <tr><td>덕현1,2동</td><td>덕현1~5동</td><td>북구 5동 증가</td></tr>
        <tr><td>중구 목동, 오주동</td><td>중구 오주동</td><td></td></tr>
        <tr><td>중구 시북동, 십덕동</td><td>중구 십북동</td><td></td></tr>
        <tr><td>중구 중보동, 완동</td><td>중구 중완동</td><td></td></tr>
        <tr><td>중구 중앙로5,6가동, 중동</td><td>중구 중동</td><td>중구 4동 감소</td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">97행정동</td><td>4구 2출장소</td></tr>
        <tr><td>중구</td><td>27행정동</td><td></td></tr>
        <tr><td>서구</td><td>17행정동</td><td></td></tr>
        <tr><td>남구</td><td>28행정동 2출장소</td><td></td></tr>
        <tr><td>북구</td><td>25행정동</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1973. 1. 2. 동구 신설 및 중수면·흑택면 일부 편입</td></tr>
        <tr><td>중수면 전천리</td><td>동구 전천1,2동</td><td></td></tr>
        <tr><td>중수리</td><td>북구 중수1,2동</td><td></td></tr>
        <tr><td>남전리, 채산리, 수포리, 실본리, 신영리, 평전리, 오내리</td><td>북구 채산동</td><td></td></tr>
        <tr><td>아진리, 아자리, 곡진리, 습지리, 등기리</td><td>북구 아등동</td><td></td></tr>
        <tr><td>흑택면 만서리, 시로리, 광정리</td><td>남구 광정동(창전출장소)</td><td></td></tr>
        <tr><td>덕현 1,4,5동</td><td>덕현1,5,6,7,8동</td><td></td></tr>
        <tr><td>서구 당선1동</td><td>서구 당선1,4동</td><td></td></tr>
        <tr><td>서구 과진7동</td><td>서구 과진7,8동</td><td></td></tr>
        <tr><td>북구 사가당1~5동, 덕현1~8동</td><td><strong>동구</strong> 신설</td><td></td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">109행정동</td><td></td></tr>
        <tr><td>중구</td><td>27행정동</td><td></td></tr>
        <tr><td>서구</td><td>19행정동</td><td></td></tr>
        <tr><td>남구</td><td>29행정동 2출장소</td><td></td></tr>
        <tr><td>북구</td><td>19행정동</td><td></td></tr>
        <tr><td>동구</td><td>15행정동</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1979. 5. 1. 청엽구 신설</td></tr>
        <tr><td>청엽1,2동</td><td>청엽1,2,3,4동</td><td></td></tr>
        <tr><td>마잡동</td><td>마잡1,2동</td><td></td></tr>
        <tr><td>동리동</td><td>동리1,2동</td><td></td></tr>
        <tr><td>남구 청엽출장소, 창전출장소</td><td><strong>청엽구</strong>, 청엽구 창전출장소</td><td></td></tr>
        <tr><td>평산동</td><td>평당동, 곽산동</td><td></td></tr>
        <tr><td>어간1동</td><td>어간1,3,4,5동</td><td></td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">121행정동</td><td></td></tr>
        <tr><td>중구</td><td>27행정동</td><td></td></tr>
        <tr><td>서구</td><td>19행정동</td><td></td></tr>
        <tr><td>남구</td><td>18행정동</td><td></td></tr>
        <tr><td>북구</td><td>19행정동</td><td></td></tr>
        <tr><td>동구</td><td>15행정동</td><td></td></tr>
        <tr><td>청엽구</td><td>19행정동 1출장소</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1983. 5. 1. 안천시 편입 및 안천구 신설, 이자읍 편입</td></tr>
        <tr><td>청엽구 창전1동</td><td>창전1,3동</td><td>1동 증가</td></tr>
        <tr><td>우전동</td><td>우전1~3동</td><td>2동 증가</td></tr>
        <tr><td>칠심동</td><td>칠심1,2동</td><td>1동 증가</td></tr>
        <tr><td>남구 월천동</td><td>월천1,2동</td><td>1동 증가</td></tr>
        <tr><td>중구 창선동, 중앙동</td><td>중구 중앙동</td><td>1동 감소</td></tr>
        <tr><td>중구 경동, 유내동</td><td>중구 유내동</td><td>1동 감소</td></tr>
        <tr><td>중구 영동, 궁람동</td><td>중구 궁영동</td><td>1동 감소</td></tr>
        <tr><td>동구 덕현 1,2,3,7,8동</td><td>동구 덕현 1~3,7~12동</td><td>4동 증가</td></tr>
        <tr><td>북구 당가1동</td><td>북구 당가1,3동</td><td>1동 증가</td></tr>
        <tr><td>안천시</td><td><strong>안천구</strong></td><td>21동 증가</td></tr>
        <tr><td>이자읍</td><td>안천구 이자출장소</td><td></td></tr>
        <tr><td>안천시 안천1~8동</td><td>안천구 안천1~8동</td><td></td></tr>
        <tr><td>안천시 상하월동</td><td>안천구 상하동</td><td></td></tr>
        <tr><td>악부1,2동</td><td>안천구 악부1,2동</td><td></td></tr>
        <tr><td>창건동</td><td>안천구 창건동</td><td></td></tr>
        <tr><td>안천시 심회동</td><td>안천구 심회동</td><td></td></tr>
        <tr><td>백합동</td><td>백합동</td><td></td></tr>
        <tr><td>상점동</td><td>상점동</td><td></td></tr>
        <tr><td>성저동</td><td>성저동</td><td></td></tr>
        <tr><td>북구 뇌전동, 당가1~3동, 북택동</td><td>안천구 편입</td><td></td></tr>
        <tr><td>탄성군 이자읍 이자리</td><td>이자동</td><td></td></tr>
        <tr><td>탄자리</td><td>탄자동</td><td></td></tr>
        <tr><td>신리, 서수리, 영색무리</td><td>서수동</td><td></td></tr>
        <tr><td>리의리</td><td>리의동</td><td></td></tr>
        <tr><td> 이자읍 칠채리, 월삼리, 융문리, 능릉리, 안천구 정남동</td><td>칠채동</td><td></td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">146행정동</td><td></td></tr>
        <tr><td>중구</td><td>24행정동</td><td></td></tr>
        <tr><td>서구</td><td>19행정동</td><td></td></tr>
        <tr><td>남구</td><td>19행정동</td><td></td></tr>
        <tr><td>북구</td><td>16행정동</td><td></td></tr>
        <tr><td>동구</td><td>19행정동</td><td></td></tr>
        <tr><td>청엽구</td><td>23행정동 1출장소</td><td></td></tr>
        <tr><td>안천구</td><td>26행정동 1출장소</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1988년 행정구역 조정</td></tr>
        <tr><td>청엽구 청엽1,3동</td><td>청엽1,3,5,6동</td><td></td></tr>
        <tr><td>중구 고도동, 십북동</td><td>중구 고북동</td><td></td></tr>
        <tr><td>중구 명일동, 내항2동</td><td>중구 명일동</td><td></td></tr>
        <tr><td>북구 고송동</td><td>북구 고송1~2동</td><td></td></tr>
        <tr><td>청엽구 창전 1,3동</td><td>청엽구 창전1~5동</td><td></td></tr>
        <tr><td>남구 평당동</td><td>남구 평당1~3동</td><td></td></tr>
        <tr><td>남구 곽산동</td><td>남구 곽산1~3동</td><td></td></tr>
        <tr><td>북구 채산동</td><td>북구 채산동, 남전동</td><td></td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">155 행정동</td><td></td></tr>
        <tr><td>중구</td><td>22행정동</td><td></td></tr>
        <tr><td>서구</td><td>19행정동</td><td></td></tr>
        <tr><td>남구</td><td>23행정동</td><td></td></tr>
        <tr><td>북구</td><td>18행정동</td><td></td></tr>
        <tr><td>동구</td><td>19행정동</td><td></td></tr>
        <tr><td>청엽구</td><td>27행정동 1출장소</td><td></td></tr>
        <tr><td>안천구</td><td>26행정동 1출장소</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1989년 행정구역 조정</td></tr>
        <tr><td>북구 고송1~2동</td><td>북구 고송 1~3동</td><td></td></tr>
        <tr><td>남구 평당1~3동</td><td>남구 평당 1~6동</td><td></td></tr>
        <tr><td>청엽구 창전출장소</td><td><strong>창전구</strong> 전환</td><td></td></tr>
        <tr><td>창전구 칠심 1동</td><td>창전구 칠심1,3동</td><td></td></tr>
        <tr><td>유엽동</td><td>유류동, 쌍엽동, 팔조동</td><td></td></tr>
        <tr><td>광정동</td><td>시로동, 광정동</td><td></td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">164행정동</td><td></td></tr>
        <tr><td>중구</td><td>22행정동</td><td></td></tr>
        <tr><td>서구</td><td>19행정동</td><td></td></tr>
        <tr><td>남구</td><td>26행정동</td><td></td></tr>
        <tr><td>북구</td><td>19행정동</td><td></td></tr>
        <tr><td>동구</td><td>19행정동</td><td></td></tr>
        <tr><td>청엽구</td><td>15행정동</td><td></td></tr>
        <tr><td>안천구</td><td>26행정동 1출장소</td><td></td></tr>
        <tr><td>창전구</td><td>16행정동</td><td>12행정동 -&gt; 16행정동</td></tr>

        <tr class="hb-year-row"><td colspan="3">1990년 행정구역 조정</td></tr>
        <tr><td>남구 평당 6동</td><td>남구 평당6,7동</td><td></td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">167행정동</td><td></td></tr>
        <tr><td>중구</td><td>22행정동</td><td></td></tr>
        <tr><td>서구</td><td>19행정동</td><td></td></tr>
        <tr><td>남구</td><td>27행정동</td><td></td></tr>
        <tr><td>북구</td><td>19행정동</td><td></td></tr>
        <tr><td>동구</td><td>19행정동</td><td></td></tr>
        <tr><td>청엽구</td><td>15행정동</td><td></td></tr>
        <tr><td>안천구</td><td>26행정동 1출장소</td><td></td></tr>
        <tr><td>창전구</td><td>16행정동</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1995. 3. 1. 덕빈북도 탄성군 편입</td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">167행정동</td><td></td></tr>
        <tr><td>북구 고송 1동</td><td>북구 고송1,4동</td><td></td></tr>
        <tr><td>중구</td><td>22행정동</td><td></td></tr>
        <tr><td>서구</td><td>19행정동</td><td></td></tr>
        <tr><td>남구</td><td>27행정동</td><td></td></tr>
        <tr><td>북구</td><td>20행정동</td><td></td></tr>
        <tr><td>동구</td><td>19행정동</td><td></td></tr>
        <tr><td>청엽구</td><td>15행정동</td><td></td></tr>
        <tr><td>안천구</td><td>26행정동 1출장소</td><td></td></tr>
        <tr><td>창전구</td><td>16행정동</td><td></td></tr>
        <tr><td>탄성군</td><td>3읍 6면</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1996. 3. 1. 도변면 → 도변읍 승격</td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">167행정동</td><td></td></tr>
        <tr><td>중구</td><td>22행정동</td><td></td></tr>
        <tr><td>서구</td><td>19행정동</td><td></td></tr>
        <tr><td>남구</td><td>27행정동</td><td></td></tr>
        <tr><td>북구</td><td>20행정동</td><td></td></tr>
        <tr><td>동구</td><td>19행정동</td><td></td></tr>
        <tr><td>청엽구</td><td>15행정동</td><td></td></tr>
        <tr><td>안천구</td><td>26행정동 1출장소</td><td></td></tr>
        <tr><td>창전구</td><td>16행정동</td><td></td></tr>
        <tr><td>탄성군</td><td>4읍 5면</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1997. 3. 15. 행정동 개편</td></tr>
        <tr><td>북구 고송 4동</td><td>고송4,5동</td><td></td></tr>
        <tr><td>서구 청덕 1동</td><td>서구 청덕1,3동</td><td></td></tr>
        <tr><td>북구 입희동</td><td>북구 입희1,2동</td><td></td></tr>
        <tr><td>북구 중수1,2동</td><td>북구 중수1~3동</td><td></td></tr>
        <tr><td>중구 소장1가동, 소장2가동</td><td>중구 소장동</td><td></td></tr>
        <tr><td>북구 천왕사동, 해서동</td><td>북구 천왕사동</td><td></td></tr>
        <tr><td>서구 사복1~3동</td><td>서구 사복1~2동</td><td></td></tr>
        <tr><td>중구 고북동, 시우동</td><td>중구 고도동</td><td></td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">171행정동</td><td></td></tr>
        <tr><td>중구</td><td>21행정동</td><td></td></tr>
        <tr><td>서구</td><td>19행정동</td><td></td></tr>
        <tr><td>남구</td><td>27행정동</td><td></td></tr>
        <tr><td>북구</td><td>22행정동</td><td></td></tr>
        <tr><td>동구</td><td>19행정동</td><td></td></tr>
        <tr><td>청엽구</td><td>15행정동</td><td></td></tr>
        <tr><td>안천구</td><td>26행정동 1출장소</td><td></td></tr>
        <tr><td>창전구</td><td>16행정동</td><td></td></tr>
        <tr><td>탄성군</td><td>4읍 5면</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1998. 1. 15. 행정동 개편</td></tr>
        <tr><td>중구 중앙동, 중동, 중완동, 오석동, 원동</td><td>중구 중앙동, 중정동</td><td></td></tr>
        <tr><td>중구 약맥동, 오주동</td><td>중구 약맥동</td><td></td></tr>
        <tr><td>중구 내조1,2,3동</td><td>중구 내조 1~2동</td><td></td></tr>
        <tr><td>서구 내성동(칠천동 제외), 북문동</td><td>서구 북성동</td><td></td></tr>
        <tr><td>서구 당선4동, 법정동 칠천동</td><td>당선4동</td><td></td></tr>
        <tr><td>북구 사능동, 사능2가1동, 치곡동</td><td>북구 사능동</td><td></td></tr>
        <tr><td>북구 사능2가2동</td><td>사능2동</td><td></td></tr>
        <tr><td>채산동, 등기동</td><td>채산동</td><td></td></tr>
        <tr><td>추서동, 사연동</td><td>산고동</td><td></td></tr>
        <tr><td>입희1동, 입선동, 청능동</td><td>청능동</td><td></td></tr>
        <tr><td>진희동, 입희2동</td><td>진희동</td><td></td></tr>
        <tr><td>안천구 백합동, 상점동</td><td>백합동</td><td></td></tr>
        <tr><td>안천구 이자동, 탄자동, 서수동 중 법정동 신동</td><td>이자동</td><td></td></tr>
        <tr><td>안천구 악부1,2동</td><td>악부동</td><td></td></tr>
        <tr><td>서수동(법정동 신동제외), 칠채동</td><td>칠채동</td><td></td></tr>
        <tr><td>심회동, 리의동, 창건동 중 법정동 이십기동</td><td>이십기동</td><td></td></tr>
        <tr><td>창건동(이십기동 제외)</td><td>창건동</td><td></td></tr>
        <tr><td>안천구 당가1~3동</td><td>안천구 당가 1~2동</td><td></td></tr>
        <tr><td>청엽구 입동, 언동</td><td>청엽구 입언동</td><td></td></tr>
        <tr><td>비마동, 사노동</td><td>비마동</td><td></td></tr>
        <tr><td>남구 어간 1~5동, 법정동 운양동</td><td>남구 어간 1~3동</td><td></td></tr>
        <tr><td>남구 항 1가1,2동, 항2가동, 항 3가1,2동</td><td>항1~4동</td><td></td></tr>
        <tr><td>남구 곽산 1,3동</td><td>남구 곽산1동</td><td></td></tr>
        <tr><td>남구 월천1,2동(법정동 운양동 제외)</td><td>남구 월천동</td><td></td></tr>
        <tr><td class="hb-font-bold">총 행정동수</td><td class="hb-font-bold">135행정동</td><td></td></tr>
        <tr><td>중구</td><td>16행정동</td><td></td></tr>
        <tr><td>서구</td><td>18행정동</td><td></td></tr>
        <tr><td>남구</td><td>17행정동</td><td></td></tr>
        <tr><td>북구</td><td>18행정동</td><td></td></tr>
        <tr><td>동구</td><td>19행정동</td><td></td></tr>
        <tr><td>청엽구</td><td>16행정동</td><td></td></tr>
        <tr><td>안천구</td><td>19행정동 1출장소</td><td></td></tr>
        <tr><td>창전구</td><td>16행정동</td><td></td></tr>
        <tr><td>탄성군</td><td>4읍 5면</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">1999. 1. 15. 행정동 개편</td></tr>
        <tr><td>남구 평당7동</td><td>남구 고당동</td><td></td></tr>
        <tr><td>동구 사가당1~5동</td><td>동구 사가당1~4동</td><td></td></tr>
        <tr><td>동구 덕현7,8동</td><td>동구 덕현7동</td><td></td></tr>
        <tr><td>동구 덕현9,10동</td><td>동구 덕현 9동</td><td></td></tr>
        <tr><td>동구 덕현 11,12동</td><td>동구 덕현 11동</td><td></td></tr>
        <tr><td>창전구 마생동, 광정동</td><td>창전구 광정동</td><td></td></tr>
        <tr><td>진백동, 시로동</td><td>진백동</td><td></td></tr>
        <tr><td>중구 명일동, 내항동</td><td>내항동</td><td></td></tr>
        <tr><td>중구 소장동, 중앙동</td><td>중앙동</td><td></td></tr>
        <tr><td>북구 산고동</td><td>산고동, 포산동</td><td></td></tr>
        <tr><td>서구 과진 7,8동</td><td>서구 과진 7동</td><td></td></tr>
        <tr><td>안천구 이자동</td><td>안천구 이자 1,2동</td><td></td></tr>
        <tr><td>안천구 상하월동, 뇌전동, 북택동</td><td>북택동, 뇌전동</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">2004. 1. 15. 행정동 개편</td></tr>
        <tr><td>북구 고송 5동</td><td>고송5,6동</td><td></td></tr>
        <tr><td>북구 오내동</td><td>오내1,2동</td><td></td></tr>
        <tr><td>탄성군 서목면</td><td>서목읍</td><td></td></tr>
        <tr><td>북구 중수1동</td><td>북구 중수1,4동</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">2010. 1. 5. 행정동 개편</td></tr>
        <tr><td>전천1,2동</td><td>전천동</td><td></td></tr>
        <tr><td>중구 신곡동, 중앙동</td><td>중앙동</td><td></td></tr>
        <tr><td>조유1,5가동, 조유2,3,4가동</td><td>조유동</td><td></td></tr>
        <tr><td>북구 고송 6동</td><td>고송6,7동</td><td></td></tr>
        <tr><td>안천구 이자2동</td><td>안천구 이자 2,3동</td><td></td></tr>


        <tr class="hb-year-row"><td colspan="3">2015년 행정동 개편</td></tr>
        <tr><td>조유동, 천석동</td><td>조유동</td><td></td></tr>
        <tr><td>북구 고송 7동</td><td>고송7,8동</td><td></td></tr>

        <tr class="hb-year-row"><td colspan="3">2018년 행정동 개편</td></tr>
        <tr><td>쌍엽동</td><td>쌍엽 1,2동</td><td>행정동 15개</td></tr>
        <tr><td>청엽구 입언동</td><td>청엽구 입빈동</td><td>명칭변경 (언동1,2가 → 효빈동1,2가)</td></tr>
        <tr><td>청엽구 동리1,2동</td><td>청엽구 동리동</td><td>행정동 16개</td></tr>
        <tr><td>안천구 이자1동</td><td>이자1,4동</td><td></td></tr>
        <tr><td>안천구 안천2동,8동</td><td>안천구 안천2동</td><td>행정동 21개</td></tr>
    `;

    // --- 4. 최종 HTML 조립 ---
    let fullHtml = `
        <div class="wiki-content">
            <h3>13.1. 전체 행정구역 변천사</h3>
            ${introList}
            
            <h4 class="hb-h4">13.1.1. 덕빈북도 효빈시</h4>
            <div style="margin-bottom: 10px; font-weight: bold;">1958.02.03 행정동 제도 실시</div>
            ${createTable('hb-adm-1958', '1958.02.03 행정동 제도 실시 현황', table1Header, table1Body)}
            
            <br/>
            <h4 class="hb-h4">13.1.2. 주요 행정구역 개편 연혁</h4>
            ${createTable('hb-adm-history', '주요 행정구역 개편 연혁', table2Header, table2Body)}
        </div>
    `;

    container.innerHTML = fullHtml;

    // --- 5. 이벤트 연결 (접기/펼치기) ---
    container.querySelectorAll('.hb-toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const tbody = document.getElementById(targetId);
            if (tbody) {
                if (tbody.classList.contains('hidden')) {
                    tbody.classList.remove('hidden');
                    this.textContent = '[접기]';
                } else {
                    tbody.classList.add('hidden');
                    this.textContent = '[펼치기]';
                }
            }
        });
    });
}