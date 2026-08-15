/* 파일명: wiki_main.js */

/* 1. 검색 기능 */
function handleSearch() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
        alert('검색어를 입력해주세요.');
    }
}

/* 2. 알림 메시지 표시 */
function showMsg(text) {
    const box = document.getElementById('wiki-msg-box');
    if (box) {
        box.innerText = text; 
        box.style.display = 'block';
        setTimeout(() => { box.style.display = 'none'; }, 2000);
    }
}

/* 3. 각주 툴팁 기능 (문서 로딩 후 실행) */
document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('footnote-tooltip-container');
    const fnLinks = document.querySelectorAll('.wiki-fn-link'); 

    if (!tooltip) return; 

    fnLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            const href = link.getAttribute('href');
            if (!href) return;
            
            const targetId = href.substring(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                let content = targetElement.innerHTML;
                
                if (content.includes('back-link')) {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = content;
                    const backLink = tempDiv.querySelector('.back-link');
                    if(backLink) backLink.remove();
                    content = tempDiv.innerHTML;
                }

                tooltip.innerHTML = content;
                tooltip.style.display = 'block';
            }
        });

        link.addEventListener('mousemove', (e) => {
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
        });

        link.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
});

/* --- [추가] 푸터 자동 생성 기능 (효빈광역시 40선 광고 및 통합 라이선스 적용) --- */
window.addEventListener("load", function() {
    const ads = [
        { title: "효빈교통공사 공식 굿즈샵", url: "shop.hyobintransit.co.kr", desc: "임세하부터 각 호선 역장 굿즈까지! 120억 매출 신화, 지금 바로 확인하세요.", img: "이미지/효빈교통공사_본사_굿즈샵_0.webp", wiki_url: "효빈교통공사.html" },
        { title: "제17회 HAF (효빈 애니메이션 페스티벌) 얼리버드", url: "haf.hyobin.go.kr", desc: "올여름을 달굴 아시아 최대 서브컬처 축제! 터미널 특별 안내방송 및 굿즈 패키지 한정 판매.", img: "이미지/HAF.webp", wiki_url: "효빈 애니메이션 페스티벌.html" },
        { title: "사능동 야마부키 베이커리 본점", url: "yamabukibakery.co.kr", desc: "효빈 3호선 사능역 앞 명물 소금빵! 한정판 박라미 띠부씰 증정 이벤트 진행 중.", img: "이미지/야마부키베이커리.webp", wiki_url: "야마부키 베이커리.html" },
        { title: "고송신도시 우미린 팰리스 특별분양", url: "gosong-summit.com", desc: "북구 고송동의 새로운 랜드마크. 효빈시청 도보 5분, 완벽한 학군과 상권.", img: "이미지/우미린팰리스.webp", wiki_url: "고송신도시.html" },
        { title: "회주공업 2026년 하반기 공개채용", url: "recruit.hoeju.co.kr", desc: "효빈의 자존심, 궤도교통의 명가 회주공업에서 세상을 바꿀 인재를 모십니다.", img: "이미지/회주제1공장.webp", wiki_url: "회주공업.html" },
        { title: "효빈 시티투어 버스 예약센터", url: "citytour.hyobin.go.kr", desc: "T01~T09 노선 절찬 운행 중! 마치 하교하는 기분을 느낄 수 있는 성지순례 핵심 코스.", img: "이미지/시티투어버스.webp", wiki_url: "효빈 시티투어 버스.html" },
        { title: "평당 롯데 백화점 썸머 페스티벌", url: "pyeongdang-grand.com", desc: "남구 최대 쇼핑 메카! 명품부터 트렌드 팝업스토어까지. 1호선 평당역 연결.", img: "이미지/롯데백화점_평당점.webp", wiki_url: "평당동.html" },
        { title: "효빈대학교 2027학년도 수시모집", url: "admission.hyobin.ac.kr", desc: "세계를 이끌어갈 글로벌 리더의 요람. 효빈대 A선 트램 개통으로 더욱 편리한 캠퍼스 라이프.", img: "이미지/효빈대_로고.webp", wiki_url: "효빈대학교.html" },
        { title: "어간수산시장 당일 조업 활어 배송", url: "eogan-market.kr", desc: "남구 어간항에서 갓 잡은 싱싱한 수산물! 효빈 전 지역 로켓 배송 서비스.", img: "이미지/어간수산시장.webp", wiki_url: "어간수산시장.html" },
        { title: "법무법인(유한) 청엽 - 교통/행정 전문", url: "law-cheongyeop.co.kr", desc: "부당해고 및 교통사고 소송 승소율 1위! 청엽구청 앞 위치. 무료 방문 상담.", img: "이미지/법무법인청엽.webp", wiki_url: "청엽구청.html" },
        { title: "효빈 AFG 홈경기 예매 (효빈아레나)", url: "hyobin-afg.com", desc: "K리그1의 자존심 효빈 AFG! 이번 주말 홈경기 예매 오픈. 뜨거운 응원석의 열기!", img: "이미지/효빈아레나.webp", wiki_url: "효빈 AFG 애프터 글로우.html" },
        { title: "효빈은행 효빈사랑 체크카드 발급", url: "hyobinbank.co.kr", desc: "효빈 시내버스/전철 10% 청구할인! 한바다 시장님 한정판 디자인 선착순 발급.", img: "이미지/효빈은행_로고.webp", wiki_url: "효빈은행.html" },
        { title: "탄성군 토모리해수욕장 썸머 페스티벌", url: "tomori-beach.go.kr", desc: "고송신도시에서 차로 20분! 맑은 바다와 함께하는 한여름 밤의 밴드 음악 축제.", img: "이미지/토모리해수욕장.webp", wiki_url: "토모리해수욕장.html" },
        { title: "칠양여객 이타샤 버스 대관 안내", url: "chilyang-tour.com", desc: "당신의 최애가 달린다! 터미널 래핑부터 버스 전면 이타샤 래핑까지. 팬클럽 조공 환영.", img: "이미지/칠양여객.webp", wiki_url: "칠양여객.html" },
        { title: "효빈과학기술원(HIST) 산학협력단", url: "iacf.hist.ac.kr", desc: "효빈공단 기업 기술이전 및 스타트업 인큐베이팅. 내일을 혁신하는 HIST.", img: "이미지/효빈과학기술원.webp", wiki_url: "효빈과학기술원.html" },
        { title: "서목읍 친환경 녹색농장 주말농장", url: "seomok-farm.kr", desc: "탄성군 서목읍 텃밭 분양 중! 맑고 깨끗한 자연에서 아이들과 함께하는 친환경 농업 체험.", img: "이미지/서목읍주말농장.webp", wiki_url: "서목읍.html" },
        { title: "회주 돌핀즈 하반기 시즌권 오픈", url: "hoejudolphins.co.kr", desc: "V4를 향한 돌고래의 힘찬 비상! KBO 최강 회주 돌핀즈 지정석 시즌권 잔여분 판매.", img: "이미지/회주돌핀즈.webp", wiki_url: "회주 돌핀즈.html" },
        { title: "효빈국제공항 ~ 도쿄 나리타 신규 취항", url: "hyobinairport.co.kr", desc: "매일 2회 왕복! 아키하바라 성지순례의 가장 빠른 길. 취항 기념 특가 99,000원~", img: "이미지/효빈국제공항.webp", wiki_url: "효빈국제공항.html" },
        { title: "안천구 창건동 프리미엄 스터디카페", url: "study-changgeon.com", desc: "전 좌석 1인실, 백색소음기 완비. 구 71사단 부지 인근 최고급 집중력 특화 공간.", img: "이미지/창건동스터디카페.webp", wiki_url: "창건동.html" },
        { title: "효빈보훈병원 장례식장", url: "hyobin-bohun.co.kr", desc: "국가유공자 특별 우대. 쾌적하고 넓은 주차 시설 완비, 탄성군 배식동 위치.", img: "이미지/효빈보훈병원.webp", wiki_url: "효빈보훈병원.html" },
        { title: "고나미 1호선 승무원 브이로그 채널 오픈!", url: "youtube.com/gonami_1st", desc: "파란색 1호선의 활기찬 일상! 고나미 역장과 함께하는 효빈 투어.", img: "이미지/고나미.webp", wiki_url: "고나미.html" },
        { title: "하루빈의 2호선 맛집 탐방 가이드 북", url: "harubin-tour.co.kr", desc: "하루빈이 직접 발로 뛴 초록색 2호선 연선 숨은 맛집 100선 단행본 출간.", img: "이미지/하루빈.webp", wiki_url: "하루빈.html" },
        { title: "박라미와 함께하는 3호선 연선 캠핑장 예약", url: "rami-camping.com", desc: "효빈의 자연을 만끽하세요! 등산 마니아 박라미가 추천하는 힐링 스팟.", img: "이미지/박라미.webp", wiki_url: "박라미.html" },
        { title: "다로나 4호선 주황빛 버스킹 예매 (해운지구)", url: "darona-live.kr", desc: "별이 쏟아지는 밤, 다로나의 감성 밴드 라이브 공연에 여러분을 초대합니다.", img: "이미지/다로나.webp", wiki_url: "다로나.html" },
        { title: "미소하 5호선 클래식 피아노 독주회", url: "misoha-classic.co.kr", desc: "효빈과학기술원 대강당에서 펼쳐지는 레드 카펫 위의 우아한 선율.", img: "이미지/미소하.webp", wiki_url: "미소하.html" },
        { title: "라세나 6호선 다크 고딕 온라인 쇼핑몰", url: "rasena-gothic.com", desc: "보랏빛 6호선의 카리스마! 라세나가 직접 피팅한 다크 로맨틱 패션 룩북.", img: "이미지/라세나.webp", wiki_url: "라세나.html" },
        { title: "임세하 & 임세정 Live2D 모델링 커미션 오픈", url: "seha-live2d.co.kr", desc: "7호선 쌍둥이 마스코트의 완벽한 파츠 분할 기술력! 당신의 캐릭터에 생명을 불어넣으세요.", img: "이미지/임세하.webp", wiki_url: "임세하.html" },
        { title: "유리아 8호선 무사도 검도 교실 수강생 모집", url: "yuria-kendo.co.kr", desc: "연보랏빛 정신 수양! 심신을 단련하는 정통 무사도 일일 체험 클래스.", img: "이미지/유리아.webp", wiki_url: "유리아.html" },
        { title: "전노아 빈효선 광역전철 1일 역장 체험 신청", url: "noah-event.co.kr", desc: "스마트폰을 든 쾌활한 전노아와 함께하는 연청색 빈효선 철도 체험기!", img: "이미지/전노아.webp", wiki_url: "전노아.html" },
        { title: "박빛나 빈주1호선 단말기 퀵드로우 마스터 강좌", url: "bitna-class.co.kr", desc: "짬처리 역무원 탈출기! 황금색 1호선 박빛나의 99레벨 발권 노하우 전수.", img: "이미지/박빛나.webp", wiki_url: "박빛나.html" },
        { title: "김소빈 빈주2호선 타로카드 운세 상담소", url: "sobin-tarot.com", desc: "신비로운 보랏빛 아우라, 당신의 미래를 내다보는 김소빈 역장의 타로점.", img: "이미지/김소빈.webp", wiki_url: "김소빈.html" },
        { title: "이덕희 덕주1호선 시그니처 94번 후드 굿즈", url: "deokhee-94.co.kr", desc: "덕주 1호선의 캐주얼 아이콘! 이덕희가 입는 바로 그 94번 후드티 절찬 판매 중.", img: "이미지/이덕희.webp", wiki_url: "이덕희.html" },
        { title: "심세이 창전선 개통 기념 한정판 교통카드", url: "semsei-card.co.kr", desc: "푸른빛 창전선의 시작! 심세이 일러스트가 새겨진 프리미엄 선불 교통카드.", img: "이미지/심세이.webp", wiki_url: "심세이.html" },
        { title: "한바다 시장님 특별 인터뷰집 예약 판매", url: "hanbada-book.go.kr", desc: "효빈광역시의 든든한 상징 한바다! 공무원 제복 핏이 돋보이는 한정판 화보 수록.", img: "이미지/한바다_전신.webp", wiki_url: "한바다.html" },
        { title: "고송교차로역 대형 복합환승센터 상가 임대", url: "gosong-transit.co.kr", desc: "2호선과 6호선의 더블 역세권! 하루 유동인구 30만의 핵심 상업지구.", img: "이미지/고송교차로역점.webp", wiki_url: "고송교차로역.html" },
        { title: "효빈 레인보우 아쿠아드 유소년 수영교실", url: "rainbow-aquard.kr", desc: "효빈의 물결을 가르는 미래의 국가대표 육성 프로젝트. 지금 바로 등록하세요.", img: "이미지/효빈레인보우아쿠아드.webp", wiki_url: "효빈 레인보우 아쿠아드.html" },
        { title: "두청운수 피해자 구제 위원회 집단 소송단 모집", url: "ducheong-relief.kr", desc: "똥색 버스의 악몽, 요금 폭리와 75인승 과적 트라우마! 정당한 배상을 향한 연대.", img: "이미지/두청운수.webp", wiki_url: "두청운수.html" },
        { title: "평당신도시 대규모 IT 밸리 입주 기업 모집", url: "pyeongdang-it.com", desc: "남구 첨단 산업의 중심! 입주 시 취득세 및 재산세 감면 혜택 제공.", img: "이미지/평당동.webp", wiki_url: "평당동.html" },
        { title: "효빈위키 편집자 정기 모임 '위키 데이' 참가 신청", url: "wiki-day.hyobin.kr", desc: "우리가 만드는 효빈의 역사! 효빈위키 기여자들을 위한 오프라인 네트워킹 파티.", img: "이미지/효빈위키.webp", wiki_url: "효빈위키.html" },
        { title: "효빈광역시청 공식 유튜브 '효빈의 소리' 구독", url: "youtube.com/hyobin_city", desc: "시정 소식부터 박효빈 시장님의 브이로그까지! 효빈의 모든 것을 영상으로.", img: "이미지/효빈광역시청.webp", wiki_url: "효빈광역시청.html" }
    ];

    function getRandomAds(adArray, num) {
        const shuffled = [...adArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const selectedAds = getRandomAds(ads, 2);

    let adsHTML = '';
    selectedAds.forEach(ad => {
        adsHTML += `
            <div style="border: 1px solid var(--wiki-border, #e5e7eb); padding: 15px; display: flex; gap: 15px; background: var(--wiki-bg, #fdfdfd); border-radius: 4px; margin-bottom: 15px; align-items: center; text-align: left;" class="dark:bg-gray-800 dark:border-gray-700">
                <div style="width: 100px; height: 100px; flex-shrink: 0;">
                    <img src="${ad.img}" alt="광고 이미지" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;">
                </div>
                <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
                    <a href="${ad.wiki_url}" style="font-weight: bold; color: var(--wiki-link, #0275d8); text-decoration: none; font-size: 1.05rem;" class="dark:text-blue-400 hover:underline">${ad.title}</a>
                    <div style="font-size: 0.8rem; color: #28a745; margin-bottom: 4px;">${ad.url}</div>
                    <div style="font-size: 0.85rem; color: #555; line-height: 1.4;" class="dark:text-gray-300">${ad.desc}</div>
                </div>
            </div>
        `;
    });

    const footerHTML = `
        <footer class="mt-20 border-t border-gray-300 dark:border-gray-700 pt-10 pb-10 leading-relaxed wiki-footer" style="background: white !important; display: block !important;">
            <div class="max-w-screen-xl mx-auto px-4 mb-10 text-left">
                <div class="text-xs text-gray-400 mb-2 font-bold">파워링크 광고</div>
                ${adsHTML}
            </div>

            <div class="max-w-screen-xl mx-auto px-4 flex flex-col items-end text-right text-[0.85rem] text-gray-600 dark:text-gray-400">
                <div class="font-bold text-lg mb-4" style="color: #7777AA;">HyobinWiki</div>
                
                <div class="font-bold mb-1 text-gray-700 dark:text-gray-300">크리에이티브 커먼즈 라이선스</div>
                <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/kr/" target="_blank" rel="noopener" class="inline-block mb-3">
                    <img src="https://licensebuttons.net/l/by-nc-sa/3.0/88x31.webp" alt="CC BY-NC-SA" class="w-[88px] h-[31px]">
                </a>
                
                <div class="leading-relaxed">
                    이 저작물은 <strong class="text-gray-800 dark:text-gray-200">CC BY-NC-SA 2.0 KR</strong>에 따라 이용할 수 있습니다. (단, 라이선스가 명시된 일부 문서 및 삽화 제외)<br>
                    기여하신 문서의 저작권은 각 기여자에게 있으며, 각 기여자는 기여하신 부분의 저작권을 갖습니다.<br>
                    <br>
                    효빈위키는 백과사전이 아니며 검증되지 않았거나, 편향적이거나, 잘못된 서술이 있을 수 있습니다.<br>
                    효빈위키는 위키위키입니다. 여러분이 직접 문서를 고칠 수 있으며, 다른 사람의 의견을 원할 경우 직접 토론을 발제할 수 있습니다.
                </div>
            </div>
        </footer>
    `;
    
    const container = document.getElementById("wiki-footer-area") || document.getElementById("footer-container");
    if(container) {
        container.innerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});

/* --- [추가] 빈주 1호선 네비게이션 접기/펼치기 기능 --- */
function toggleNavTable(btn) {
    const content = document.getElementById('navTableContent');
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        btn.innerText = '[접기]';
    } else {
        content.classList.add('collapsed');
        btn.innerText = '[펼치기]';
    }
}