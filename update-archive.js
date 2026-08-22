const fs = require('fs/promises');
const path = require('path');

const imageFolder = './이미지'; 
const outputJsFile = './assets/image_data.js';
const allowedExtensions = ['.webp', '.png', '.jpeg', '.jpg', '.gif', '.svg'];

async function updateArchive() {
    try {
        console.log('🔍 이미지 폴더 스캔 및 서브컬처 DB 정밀 분류 중...');

        const files = await fs.readdir(imageFolder);
        
        const categorizedFiles = files.reduce((acc, file) => {
            const ext = path.extname(file).toLowerCase();
            
            if (allowedExtensions.includes(ext)) {
                const nameOnly = path.basename(file, ext).toLowerCase().trim();
                let category = 'etc'; 

                // 🚨 지능형 한국인 이름 판독기 (3글자이면서 흔한 성씨로 시작)
                const is3LetterName = /^[가-힣]{3}$/.test(nameOnly) && 
                                      !/[동리선역읍면구시군촌장탕관단파실부팀회점호교로길]$/.test(nameOnly) && 
                                      /^(김|이|박|최|정|강|조|윤|장|임|한|오|서|신|권|황|안|송|전|홍|유|고|문|양|손|배|백|허|남|심|노|하|곽|성|차|주|우|구|라|탁|명|은|여|지|엄|원|방)/.test(nameOnly);

                // 🚨 우선순위별 정밀 정규식 
                
                // 1. 버스 (숫자만 있거나, 흑택01 같은 마을버스, 관련 키워드)
                if (/^\d+$/.test(nameOnly) || /^[가-힣]{2}\d{2}$/.test(nameOnly) || /(버스|여객|운수|교통|고속|택시|정류장|터미널|차고지)/.test(nameOnly)) category = 'bus';
                // 2. 지도/노선도
                else if (/(노선도|지도|행정동|행정구역|조감도)/.test(nameOnly)) category = 'map';
                // 3. 역/승강장
                else if (/(역_|승강장|플랫폼|신호장|신호소|역사|출장소|환승장|역입구|역전경|역내부)/.test(nameOnly) || /역$/.test(nameOnly) || /역점$/.test(nameOnly)) category = 'station';
                // 4. 철도차량
                else if (/(전동차|호대|열차|기차|기관차|편성|차량사업소|차량기지|인입선|주박기지|트램)/.test(nameOnly)) category = 'train';
                // 5. 공공/행정기관
                else if (/(시청|구청|군청|도청|경찰|소방|우체국|우정청|주민센터|행정복지센터|법원|검찰|국세청|노동청|교도소|위원회|의회|공단|공사|재단|진흥원|본부|연구원|관제센터)/.test(nameOnly)) category = 'facility_gov';
                // 6. 학교/교육시설
                else if (/(초등학교|중학교|고등학교|대학교|대학|캠퍼스|도서관|교육원|과방|강의실|학생회관|학점)/.test(nameOnly)) category = 'school';
                // 7. 상업/문화시설
                else if (/(백화점|마트|홈플러스|트레이더스|아쿠아|호텔|회관|홀|병원|의료원|보건소|cgv|메가박스|롯데시네마|아파트|지구|단지|상가|시장|방송|기업|사옥|테크노파크|센터|스튜디오|클러스터|타운)/.test(nameOnly)) category = 'facility_com';
                // 8. 도로/교통망
                else if (/(도로|거리|교차로|사거리|삼거리|오거리|대교|다리|터널|ic|jc|tg|고속도로|대로|순환로)/.test(nameOnly) || nameOnly.endsWith('로') || nameOnly.endsWith('길')) category = 'road';
                // 9. 명소/관광지
                else if (/(해수욕장|공원|타워|명소|유적|관광|전망대|광장|유원지|해변|산_)/.test(nameOnly)) category = 'landmark';
                // 10. 풍경/전경
                else if (/(풍경|야경|전경|하늘|바다|거리_)/.test(nameOnly)) category = 'landscape';
                // 11. 행사/이슈
                else if (/(축제|haf|페스티벌|개통식|행사|시위|집회|기자회견|포럼|간담회|mou|협약|대회|페스|사변|난동|테러|출범식|취항식|취임식|논란|사건|사과|폭격|투표|선거|유세|탄핵)/.test(nameOnly)) category = 'event';
                // 12. 문서/자료
                else if (/(분석|계산|흐름도|비교표|납부|세액|결손금|소득|재무|명세서|자료|화면|안내문|자보|대자보|만평|기안서|체크리스트|시간표|요약|법칙|조항)/.test(nameOnly)) category = 'document';
                // 13. 로고/심볼
                else if (ext === '.svg' || /(로고|ui|휘장|마크|광고|슬로건|logo|포스터|아이콘|서명|사인|간판|엠블럼|배너|bnr)/.test(nameOnly)) category = 'logo';
                // 14. 굿즈/상품
                else if (/(굿즈|피규어|넨도|태피|네소|머그컵|티셔츠|에코백|뱃지|아크릴|앨범|콜라보|스탬프|티켓|패스|다이어리|카드|머리띠|인형|싸인)/.test(nameOnly)) category = 'merch';
                // 15. 음식/카페
                else if (/(디저트|케익|케이크|마카롱|빵|라멘|떡볶이|샌드위치|그라탕|피자|모나카|푸딩|음식|커피|카페|식당|마라탕|엽떡|김밥|파스타|제육|소맥|참이슬|아이스크림|크레페|버거|도시락|수혈|음료|식사|간식|맥날)/.test(nameOnly)) category = 'food';
                
                // 16. 실존인물 및 일본 성우 (아래 일본 성우 이름 완벽 반영)
                else if (/(시장|주무관|교수|선생|강사|대리|과장|팀장|국장|실장|공무원|경찰|소방관|의원|기자|대표|위원장|조상현|김성민|최형석|박효빈|윤대환|윤간석|서무련|곽두환|사람|인물|시민|가족|선수|성우|원장|감독|아이들|유튜버|프로게이머|알바|학생|동생|언니|오빠|아빠|엄마|아재|아저씨|할아버지|여친|아야카|사유리|슈카|아이나|안쥬|아카리|나오미|카나|아야네|마아야)/.test(nameOnly) || is3LetterName) category = 'person';
                
                // 17. 마스코트 및 서브컬처 캐릭터 (럽라, 뱅드림 등 애니 캐릭터 전원 추가)
                else if (/(sd|basic|고나미|하루빈|박라미|다로나|미소하|라세나|임세정|임세하|유리아|전노아|박빛나|김소빈|이덕희|심세이|한바다|마스코트|캐릭터|카스미|카난|다이아|마리|하나마루|루비|요시코|리코|요우|치카|니코|우미|노조미|에리|린|코토리|마키|호노카|타에|모카|사아야|란|유키나|아논|이브|마시로|타키|엠마|카나타|카린|아이|세츠나|시오리코|시즈쿠|쿠쿠|치사토|스미레|카논|렌|츠무기|미오|유이|아즈사|리츠|코코로|아야|리사|사요|히나|아유무|나츠미|토마리|메이|시키|키나코|메구미|츠쿠시|루이|나오|미사키|아코|토모에|리미|히마리|라나|모모카|리아|세이라|이즈미|코스즈|아리사|츠바사|토우코|이쿠요|하구미|마이카|토모리|유우|리나|사키코|에레나|츠구미|카호|나나미|마오|유우나|파레오|봇치|우이카|루리노|코즈에|마르가레테|히메|유쿠리|테일러|란쥬|러브라이브|뱅드림|케이온|뮤즈|아쿠아|니지가사키|리에라|하스노소라|성덕|럽순이|철덕|오타쿠|덕후)/.test(nameOnly)) category = 'character';
                
                // 18. 일러스트/일상
                else if (/(사복|단체|트리오|회동|파티|n빵|휴식|놀러|공부|더치페이|일러스트|일상|셀카|출근|퇴근|과잠|근무|메이드|수영복|제복|정장|데이트|코타츠|단기알바|방|침실|거실|화장실|나들이|여행|모임|표정|환호)/.test(nameOnly)) category = 'illustration';

                acc.push({ file: file, category: category });
            }
            return acc;
        }, []);

        if (categorizedFiles.length === 0) return console.log('⚠️ 이미지 폴더에 파일이 없습니다.');

        const jsContent = `// 이 파일은 Node.js 스크립트(update-archive.js)에 의해 자동 생성되었습니다.
// 직접 수정하지 마시고 스크립트를 다시 실행해 주세요.

const imageFiles = ${JSON.stringify(categorizedFiles, null, 4)};
`;

        await fs.mkdir('./assets', { recursive: true });
        await fs.writeFile(outputJsFile, jsContent, 'utf8');

        console.log(`🎉 성공! ${categorizedFiles.length}개의 이미지가 서브컬처 캐릭터/성우까지 포함해 완벽하게 분류되었습니다.`);
    } catch (error) {
        console.error('❌ 작업 중 오류가 발생했습니다:', error);
    }
}

updateArchive();