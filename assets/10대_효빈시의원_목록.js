// 효빈광역시의회 의원 데이터베이스 (제10대 시의원 40명 완전판 - 내용 절대 삭제 금지, 과거 이력/당적/세계관 100% 복구)
const db = {
    // [남구]
    "강상현": {
        name: "강상현", hanja: "姜尙賢", birth: "1992년 3월 8일 (만 <span class="calc-age" data-birthdate="1992-3-8">34</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "남구 제1선거구",
        terms: "제9·10대 (재선)", current: "제10대 효빈광역시의회 후반기 예산결산특별위원장", 
        history: "연세대학교 경영학과 졸업<br>제50회 공인회계사 시험 합격<br>세무법인 효빈 수석회계사<br>더불어민주당 남구지역위 청년위원장<br>제9, 10대 효빈광역시의회 의원 (재선)",
        overview: "연세대 출신의 젊은 공인회계사로, 10대 의회 후반기 예산결산특별위원장을 맡고 있는 더불어민주당의 <strong>핵심 브레인 겸 예산 저승사자</strong>다.",
        life: "1992년 효빈직할시 남구 항동1가(현 항1동)에서 태어났다. 어린 시절 항동 부두가 근처에서 수산물 상회를 운영하시던 부모님 밑에서 자라며 자연스럽게 현금 흐름과 장부 정리에 눈을 떴다. 연세대학교 경영학을 전공하고 20대 중반의 이른 나이에 공인회계사(CPA) 시험에 합격하여 메이저 회계법인에서 에이스로 활약했다. 이후 지역 시민단체에서 소상공인 재무 컨설팅 봉사를 하던 중, 10원 단위까지 오차를 잡아내는 특유의 피도 눈물도 없는 깐깐함을 눈여겨본 당에 의해 청년위원장으로 영입되었다. 8회 지선에서 초선으로 입성한 뒤, 지역구 민심을 꽉 잡아 9회 지선(10대 의회)에서도 무난하게 재선 고지에 올랐다.",
        activities: `<p>예산안 심사 시즌만 되면 본회의장에 개인용 기계식 계산기(청축)를 들고 와 맹렬하게 두드리며 공무원들을 영혼까지 털어버리는 깐깐함의 대명사다. 타자 치는 소리가 어찌나 큰지 <del>ASMR</del> 마이크를 뚫고 들어갈 정도. 시청 공무원들 사이에서는 <strong>'인간 엑셀'</strong>, <strong>'항동의 매의 눈'</strong>이라는 별명으로 불리며 기피 대상 1호로 꼽힌다.</p>
        <p>이름을 이용한 삼행시 드립이 인터넷에서 소소하게 화제가 되었는데, 바로 <strong>"강(강제로) 상(상여금을) 현(현금 회수한다)"</strong>이다. 본인도 이 드립이 퍽 마음에 들었는지, 상임위 회의 때 부실한 예산안을 들고 온 국장에게 "자꾸 이런 식으로 일하시면 제 이름처럼 강제로 상여금 회수 들어갑니다?"라며 대놓고 써먹은 적이 있다.</p>
        <p>초선 시절 시청 모 부서의 업무추진비 영수증을 검토하다가 <strong>'영수증 폰트 자간이 미세하게 0.5mm 다르다'</strong>는 이유로 포토샵 조작을 통한 법인카드 깡 횡령 사실을 귀신같이 적발해내 관련자들을 줄줄이 징계위원회로 보낸 전설적인 일화가 있다. 재선이 되어 예결위원장 완장까지 차게 되자 이 사건 이후 효빈시 공무원들은 예산결산 시즌만 되면 강상현 의원실 쪽으로는 소변도 보지 않는다는 흉흉한 소문이 돈다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (남구 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "21,450", percent: "58.2%", result: "당선 (1위)", note: "초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (남구 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "23,100", percent: "61.2%", result: "당선 (1위)", note: "재선"}
        ],
        partyHistory: [
            {period: "2019 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    "원상민": {
        name: "원상민", hanja: "元相民", birth: "1985년 11월 12일 (만 <span class="calc-age" data-birthdate="1985-11-12">40</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "남구 제2선거구",
        terms: "제8·9·10대 (3선)", current: "제10대 효빈광역시의회 의원", 
        history: "삼선대학교 행정학과 졸업<br>효빈시 곽산1동 자율방범대장<br>남구 청년연합회장<br>제8, 9, 10대 효빈광역시의회 의원 (3선)",
        overview: "낙선의 아픔을 겪었으나 <strong>상대 후보의 '똥색 버스 낭만' 자폭 망언</strong> 덕분에 기적처럼 생환한 뒤 무난하게 3선 고지에 오른 남구의 맹장.",
        life: "1985년 효빈직할시 남구 곽산동 출생. 곽산동 토박이로 밑바닥부터 다진 조직파 정치인이다. 2018년 제7회 지선에서 초선으로 당선되며 승승장구하는 듯 했으나, 2022년 제8회 지선에서 보수풍을 타 잠시 낙선했다. 그러나 2023년 재보궐 선거에서 기적처럼 부활의 찬스를 잡았고, 10대 지선(제9회 전국동시지방선거)에서도 확고한 지역구 장악력으로 여유롭게 3선에 안착했다.",
        activities: `<p>2023년 재보궐 당시 상대 곽두환 후보가 <strong>"옛날 2세대 똥색 버스의 덜컹거리는 플라스틱 시트에 끼어 타야 진정한 낭만"</strong>이라는, 효빈 시민들이라면 뒷목을 잡고 게거품을 물 역린(75인승 짐짝 과적, 여름철 찜통, 요금 폭리)을 정면으로 건드리는 희대의 망언을 시전했다. <del>이 발언 하나로 남구 민심은 폭동 직전까지 갔다.</del></p>
        <p>이 타이밍을 놓치지 않고 원상민은 자신의 이름을 활용한 기가 막힌 이름 드립 슬로건을 내걸었다. <strong>"남구의 짓밟힌 민심! 무너진 교통망! 제 이름처럼 <span style="font-size:1.2em; font-weight:bold; color:#004ea2;">'원상'</span> 복구하겠습니다! 민심은 <span style="font-size:1.2em; font-weight:bold; color:#004ea2;">'원상민'</span>입니다!"</strong> 이 찰진 언어유희는 똥색 버스 발언에 극대노한 어간동·곽산동 일대 주민들의 카타르시스를 자극했고, 결과는 무려 <strong>78.4%라는 공산당식 역대급 몰표</strong> 당선이었다.</p>
        <p>10대 의회에 들어선 지금도 초심을 잃지 않기 위해 여전히 2세대 똥색 버스 프라모델을 압수품처럼 의원실 장식장에 전시해두고 있으며, 다른 의원들이 헛소리를 할 때마다 "또 남구 민심을 원상복구 시켜야겠습니까?"라며 으름장을 놓는다. 본회의장에서 똥색 버스 프라모델을 망치로 내려찍는 퍼포먼스를 하려다 경위들에게 제지당했던 사건은 여전히 남구 의원들 사이에서 회자되는 레전드다.</p>`,
        elections: [
            {year: "2018", name: "제7회 전국동시지방선거", district: "효빈시의회 (남구 2)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "18,204", percent: "61.5%", result: "당선 (1위)", note: "초선"},
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (남구 2)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "text-gray-500", votes: "15,820", percent: "47.2%", result: "낙선 (2위)", note: "국힘 열풍으로 낙선"},
            {year: "2023", name: "하반기 재보궐선거", district: "효빈시의회 (남구 2)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "25,190", percent: "78.4%", result: "당선 (1위)", note: "재선 (똥색버스 망언 역풍)"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (남구 2)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "26,050", percent: "65.4%", result: "당선 (1위)", note: "3선"}
        ],
        partyHistory: [
            {period: "2015 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
"지소현": {
        name: "지소현", hanja: "池昭賢", birth: "1996년 8월 22일 (만 <span class="calc-age" data-birthdate="1996-8-22">29</span>세)", party: "진보당", partyClass: "bg-jinbo", txtClass: "txt-jinbo", district: "남구 제3선거구",
        terms: "제9·10대 (재선)", current: "제10대 효빈광역시의회 전반기 운영위원장", 
        history: "효빈대학교 사회학과 졸업<br>효빈청년유니온 대표<br>진보당 효빈시당 청년위원장<br>제9, 10대 효빈광역시의회 의원 (재선)",
        overview: "민주당 텃밭 남구에서 돌풍을 이어가고 있는 진보당 소속 청년 정치인이자, 의회 내 <strong>강성 씹덕(방도리) 마니아</strong>.",
        life: "1996년 효빈광역시 남구 평당동(현 평당3동) 출생. 효빈대학교 사회학과 재학 시절부터 학생운동에 투신했으며, 대학가 알바생들을 조직화해 '효빈청년유니온'을 이끈 최저임금의 잔다르크. 2022년 지선에서 거대 양당의 틈바구니를 뚫고 초선 당선에 이어, 10대 지선에서도 압도적인 지지를 받으며 재선에 성공해 진보당 소속임에도 전반기 운영위원장 완장을 거머쥐었다.",
        activities: `<p>이름 때문에 <strong>"지(지독하게) 소(소리치는) 현(현장직)"</strong>으로 불린다. 초등학생 시절 평당동에서 75명 정원 초과 똥색 버스에 끼어 질식사할 뻔한 트라우마 때문에, 시장실 문짝을 발로 차고 들어가 대중교통국장에게 사자후를 토해내는 불도저다.</p>
        <p>놀랍게도 유신민, 지민성과 함께 의회 내 손꼽히는 <strong>'방도리(뱅드림) 파벌'</strong>의 핵심이다. 특히 노란색인 효빈도시철도 3호선 마스코트 <strong>'박라미(<span style="color:#FFCC11">뱅드림 야마부키 사아야</span>)'</strong>의 열광적인 찐팬. 심지어 교통위원회 회의에서 "3호선 손잡이를 사아야가 일하는 빵집의 크루아상 모양으로 교체하자"는 <del>국비 낭비</del> 제안을 했다가 위원장에게 제지당하기도 했다. 본회의 중 의원석 노트북 뒷면에 사아야 데포르메 스티커가 덕지덕지 붙어있는 것이 지역 방송국 카메라에 클로즈업되어 큰 화제가 되었는데, <del>진보당 원로 당원들은 저 노란머리 빵집 알바생 캐릭터가 비정규직 노동자 연대의 새로운 상징인 줄 안다는 웃지 못할 촌극이 벌어졌다.</del></p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (남구 3)", party: "진보당", partyClass: "bg-jinbo", txtClass: "txt-jinbo", votes: "13,440", percent: "38.5%", result: "당선 (1위)", note: "초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (남구 3)", party: "진보당", partyClass: "bg-jinbo", txtClass: "txt-jinbo", votes: "15,800", percent: "45.1%", result: "당선 (1위)", note: "재선"}
        ],
        partyHistory: [
            {period: "2019 ~ 2020", party: "민중당", partyClass: "bg-jinbo", note: "정계 입문"},
            {period: "2020 ~ 현재", party: "진보당", partyClass: "bg-jinbo", note: "당명 변경"}
        ]
    },
    "주방선": {
        name: "주방선", hanja: "朱方善", birth: "1978년 5월 4일 (만 <span class="calc-age" data-birthdate="1978-5-4">48</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "남구 제4선거구",
        terms: "제9·10대 (재선)", current: "제10대 효빈광역시의회 후반기 교육문화위원장", 
        history: "엽월대학교 유아교육과 졸업<br>남구 지역 맘카페 '남구맘스' 초대 매니저<br>효빈월천초등학교 학부모회장<br>남구 학부모연합회장<br>제9, 10대 효빈광역시의회 의원 (재선)",
        overview: "대한민국의 정치인. 지역 최대 규모 맘카페의 묻지마 화력을 업고 시의회에 입성한 실전형 교육 전문가이자 <strong>효빈시 교육청 소속 공무원들의 절대적인 공포 대상(최종 보스)</strong>.",
        life: "1978년 덕빈북도 효빈시 서구 청덕동 출생. 엽월대 유아교육과 졸업 후 결혼과 함께 남구 신흥동(현 월천동) 신도시 아파트 단지로 이주했다. 평범한 전업주부로 지내다가, 회원수 15만 명을 자랑하는 매머드급 맘카페 '남구맘스'의 초대 매니저와 남구 학부모 연합회장을 맡으며 가공할 만한 동원력과 여론 주도력을 보여주었다. 2022년 당의 영입 인재로 발탁되어 남구 4선거구에 출마, 맘카페 엄마들의 조직표를 바탕으로 초선 당선에 이어 10대 지선에서도 압도적인 지지로 재선에 성공하며 후반기 교육문화위원장직을 맡았다.",
        activities: `<p>효빈시 교육청 및 일선 학교 교장들이 가장 두려워하는 <strong>'살아있는 교육계의 저승사자'</strong>다. 그녀의 정보망은 가히 국정원을 뺨치는 수준인데, 매일 밤 맘카페에 실시간으로 올라오는 초/중/고 급식 불만 사진, 체육관 시설 노후화, 통학로 불법주차 민원 등을 모조리 캡처해 둔다.</p>
        <p>이름이 절묘하게도 <strong>'주방선(주방+선)'</strong>이다 보니, 맘카페 회원들과 네티즌들 사이에서는 <strong>'아이들 급식 주방(Kitchen)을 철통같이 사수하는 마지노선(Line)'</strong>, 줄여서 <strong>'주방의 선녀'</strong>로 불린다. 한 번은 관내 중학교에서 불량 식자재 납품 비리가 터졌을 때, 상임위에서 교육감을 단상으로 불러내 굳은 식판을 들이밀며 <strong>"내 이름이 주방선인데 어디서 감히 애들 먹는 주방에서 장난질을 치냐! 교육감님 손주분들 오시면 이 고기반찬 먹이실 겁니까?!"</strong>라고 일갈해 현장을 얼어붙게 만든 일화가 레전드로 남았다. <del>진정한 이름값의 표본</del></p>
        <p>선거 당시 맘카페 회원들이 형광색 단체복을 맞춰 입고 <del>흡사 사이비 종교집회처럼</del> 유세차를 에워싸며 환호하는 광경은 상대 후보들의 멘탈을 가루로 만들었다고 한다. 지역 상인들이나 관공서 직원들 사이에서는 "주방선 의원 심기를 거스르면 맘카페 좌표가 찍히고 불매운동으로 3일 만에 영혼까지 털린다"는 괴담이 정설로 통한다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (남구 4)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "19,880", percent: "63.1%", result: "당선 (1위)", note: "초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (남구 4)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "21,500", percent: "68.2%", result: "당선 (1위)", note: "재선"}
        ],
        partyHistory: [
            {period: "2021 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    // [북구]
    "황보람": {
        name: "황보람", hanja: "黃보람", birth: "2004년 6월 2일 (만 <span class="calc-age" data-birthdate="2004-6-2">22</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "북구 제1선거구",
        terms: "제10대 (초선) / 기초의원 1선", current: "제10대 효빈광역시의회 의원", 
        history: "효빈대학교 정치외교학과 재학<br>제9대 북구의회 의원<br>제10대 효빈광역시의회 의원",
        overview: "북구의 대모 오서영(5선)이 국회의원 출마를 위해 불출마한 자리를 꿰찬 <strong>Z세대 돌풍의 핵</strong>이자 법적 하한선 최연소 당선자.",
        life: "2004년 효빈광역시 북구 구포동 출생. 2022년 만 18세로 북구의원에 당선되며 정계에 충격을 주더니, 오서영 의원의 전폭적인 지지를 받아 2026년 체급을 올려 시의회까지 단숨에 입성했다.",
        activities: `<p>5선의 거물급 인사가 지키던 지역구를 물려받은 초신성. 의회 휴게실에서 유신민, 지민성 등 Z세대 의원들과 모여서 마라탕후루를 먹으며 본회의장을 틱톡 스튜디오로 변질시키고 있다.</p>
        <p>가끔 오서영 전 의원이 시의회에 놀러 오면 "아이고 우리 보람이 잘하고 있나~"라며 쓰다듬어 주는데, 그럴 때마다 황보람은 "네 어무이!"라며 살갑게 안긴다. 공무원들은 대모와 초신성의 조합에 기절할 노릇이라고.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "북구의회 (북구 가)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "6,500", percent: "31.2%", result: "당선 (2위)", note: "구의원 초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (북구 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "24,500", percent: "59.8%", result: "당선 (1위)", note: "시의원 초선"}
        ],
        partyHistory: [
            {period: "2022 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    "유시온": {
        name: "유시온", hanja: "柳時溫", birth: "1996년 12월 24일 (만 <span class="calc-age" data-birthdate="1996-12-24">29</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "북구 제2선거구",
        terms: "제10대 (초선) / 기초의원 1선", current: "제10대 효빈광역시의회 의원", 
        history: "효빈대학교 행정학과 졸업<br>제9대 북구의회 의원<br>제10대 효빈광역시의회 의원",
        overview: "본업이 조기축구회장이던 우지남(4선) 의원이 컷오프 당한 지역구를 물려받아 당선된 젊은 피.",
        life: "1996년 효빈광역시 북구 고송동 출생. 구의원 시절 특유의 성실함으로 지역구 어르신들의 지지를 한 몸에 받았다. 꼰대 정치 청산을 외친 당 지도부의 결단으로 컷오프된 우지남을 대신해 시의회에 입성했다.",
        activities: `<p>당선 직후 의원실에 입주하자마자, 전임자인 우지남이 남기고 간 <strong>형형색색의 땀 냄새 나는 조기축구회 유니폼 수십 벌</strong>을 창고에 처박느라 진을 뺐다고 한다.</p>
        <p>행사장에 가서 마이크를 잡으면 우지남처럼 뽕짝을 부르지 않고 깔끔한 PPT 발표를 진행해 어르신들이 다소 아쉬워하지만, 행정 처리는 전임자보다 훨씬 빠릿빠릿해 공무원들이 좋아한다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "북구의회 (북구 나)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "5,800", percent: "28.5%", result: "당선 (2위)", note: "구의원 초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (북구 2)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "19,800", percent: "55.2%", result: "당선 (1위)", note: "시의원 초선"}
        ],
        partyHistory: [
            {period: "2022 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    "구정원": {
        name: "구정원", hanja: "具政源", birth: "2002년 5월 15일 (만 <span class="calc-age" data-birthdate="2002-5-15">24</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "북구 제3선거구",
        terms: "제9·10대 (재선)", current: "제10대 효빈광역시의회 후반기 윤리위원장", 
        history: "효빈대학교 사회복지학과 재학<br>제9, 10대 효빈광역시의회 의원",
        overview: "대학교 2학년 때 당선된 신화적 인물이자, Z세대임에도 의회의 기강을 잡는 <strong>후반기 윤리위원장</strong>.",
        life: "2002년 효빈광역시 북구 추산동 출생. 9대 때 혜성처럼 등장해 10대 지선에서도 압도적 표차로 재선에 성공, 선배 의원인 유증민의 자리를 강탈(?)하고 최연소 윤리위원장 타이틀을 달았다.",
        activities: `<p>방도리 파벌(유신민, 지민성 등)이 본회의장에서 씹덕질이나 틱톡 챌린지를 할 때마다 "신성한 의회에서 당장 중단하지 않으면 윤리위에 회부하겠다!"며 엄포를 놓는 기강 반장이다.</p>
        <p>하지만 정작 본인의 아이패드 대기화면이 <strong>블루 아카이브</strong> 일러스트인 것을 들켜, 유신민에게 <strong>"내로남불 오타쿠 위원장!"</strong>이라며 극딜을 당했다. 9대 때 윤리위원장 자리를 뺏어 유증민 의원을 울게 만들었으나, 10대 전반기에는 유증민에게 자리를 돌려주며 훈훈한 화해를 했다가 후반기에 다시 뺏어왔다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (북구 3)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "18,500", percent: "56.3%", result: "당선 (1위)", note: "초선 (대학 2학년)"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (북구 3)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "21,100", percent: "60.1%", result: "당선 (1위)", note: "재선"}
        ],
        partyHistory: [
            {period: "2021 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
"원수현": {
        name: "원수현", hanja: "元秀賢", birth: "1982년 10월 9일 (만 <span class="calc-age" data-birthdate="1982-10-9">43</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "북구 제4선거구",
        terms: "제8·9·10대 (3선)", current: "제10대 효빈광역시의회 전반기 행정자치위원장", 
        history: "서울대학교 법학과 졸업<br>제45회 공인노무사 합격<br>제51회 사법시험 합격<br>노무법인 효빈 대표노무사<br>민주사회를 위한 변호사모임(민변) 효빈지부 회원<br>제8, 9, 10대 효빈광역시의회 의원 (3선)",
        overview: "대한민국의 정치인. 서울대 출신의 엘리트 노동 인권 변호사이자 노무사 출신으로, 효빈시의회 내 손꼽히는 정책 브레인이자 <strong>부패 기업인들의 담당 일진</strong>이다.",
        life: "1982년 덕빈북도 상안군 태서면 동양리 출생. 서울대학교 법대를 졸업하고 노무사와 변호사 자격을 모두 취득한 초엘리트. 고향 인근인 효빈시로 내려와 노동 현장에서 임금 체불과 부당 해고 소송을 주로 맡아 악덕 업주들을 탈탈 털어오다가 2018년 지선에서 전격 영입되어 북구 4선거구에서 뱃지를 달았다. 8회, 9회 지선에서 재선을 거쳐 10대 지선에서도 압도적인 지지로 3선 고지에 올랐다.",
        activities: `<p>본인의 이름이 <strong>'원수(Enemy)'</strong>와 같아서 학창 시절 내내 놀림을 받았다고 한다. 이를 역발상으로 활용해 선거 슬로건을 아예 <strong>"서민을 울리는 악덕 기업의 원수(怨讐)를 갚아드립니다! 복수귀 기호 1번 원수현!"</strong>으로 정해 대히트를 쳤다. <del>합법적 복수 대행업체</del></p>
        <p>상임위에서 부당노동행위나 산업재해 관련 이슈가 터지면, 변호사 시절의 짬바를 발휘해 사측 대리인이나 시청 국장들을 논리와 법리 해석으로 완전히 압살해버린다. 본회의장에 법전과 판례집을 산더미처럼 쌓아놓고 질문을 쏟아내기 때문에, 답변석에 서는 공무원들 사이에서는 '원수현의 데스노트에 적히면 공직 생활 끝난다'는 괴담이 돈다.</p>
        <p>10대 의회에 들어서 행정자치위원장 완장까지 차게 되자, 이제는 법적 공방을 넘어 시 행정의 촘촘한 빈틈까지 파고드는 정책 저승사자로 활약 중이다. 부패 기업인들은 그가 위원장실로 부르는 것만으로도 경기를 일으킨다는 후문.</p>`,
        elections: [
            {year: "2018", name: "제7회 전국동시지방선거", district: "효빈시의회 (북구 4)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "18,900", percent: "61.2%", result: "당선 (1위)", note: "초선"},
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (북구 4)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "17,450", percent: "55.8%", result: "당선 (1위)", note: "재선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (북구 4)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "22,400", percent: "63.8%", result: "당선 (1위)", note: "3선"}
        ],
        partyHistory: [
            {period: "2017 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
"박성임": {
        name: "박성임", hanja: "朴星任", birth: "1994년 10월 14일 (만 <span class="calc-age" data-birthdate="1994-10-14">31</span>세)", party: "진보당", partyClass: "bg-jinbo", txtClass: "txt-jinbo", district: "북구 제6선거구",
        terms: "제9·10대 (재선)", current: "제10대 효빈광역시의회 후반기 행정자치위원장", 
        history: "전남대학교 사회학과 졸업<br>전국금속노동조합 효빈지부 교섭국장<br>효빈시 비정규직노동센터 상담실장<br>민주노총 효빈지부 정책국장<br>진보당 효빈시당 부위원장<br>제9, 10대 효빈광역시의회 의원 (재선)",
        overview: "대한민국의 정치인. 9대 의회 내 진보당 2인방(지소현, 박성임) 중 한 명으로, 전투력 측정 불가 수준의 투쟁 아이콘이다. 10대 의회에서 진보당 소속 의원 최초로 후반기 행정자치위원장 자리를 거머쥐었다.",
        life: "1994년 덕빈남도 매산군 신운읍 서창리 출생. 전남대 재학 시절부터 맹렬하게 노동운동에 뛰어들어 민주노총 정책국장까지 지낸 뼈대 있는 현장파다. 2022년 지선에서 북구 6선거구에 출마해 거대 양당의 틈바구니를 뚫고 20대 여성 노동운동가로서 기적의 당선을 이뤄냈고, 10대 지선에서도 강성 노조원들의 압도적인 결집력을 업고 재선 고지에 올라 진보당 의원 최초로 후반기 행정자치위원장 완장까지 거머쥐었다.",
        activities: `<p>이름이 <strong>'박성(박차고 일어나는 성격) 임(입니다)'</strong>의 약자라는 농담이 있을 정도로 머리에 빨간 띠를 두르고 시청 앞 광장에서 확성기를 잡던 폼이 의회에서도 그대로 나온다. 수틀리면 상임위 회의실 문을 캐비닛으로 막고 농성을 벌이는 불도저 같은 추진력을 자랑한다. 여당인 민주당 의원들도 그녀가 굳은 표정으로 발언대 쪽으로 성큼성큼 걸어 나오면 지레 겁을 먹고 안건을 양보한다고 한다.</p>
        <p>같은 당 동갑내기 의원인 지소현을 비롯해 '방도리 씹덕 파벌(지민성, 유신민 등)'이 의회 휴게실에서 "효빈 3호선 마스코트 박라미쨩이 최고다", "아니다 7호선 아논이 근본이다"라며 설정 놀음을 하고 있으면, 옆에서 커피를 타며 <strong>"동지들, 그 일본 애니메이션 하청 애니메이터들의 살인적인 크런치 모드와 포괄임금제 착취 구조에 대해서는 어떻게 생각하십니까?"</strong>라며 갑분싸 노동권 훈계를 시전해 씹덕들을 단체로 버로우 타게 만드는 유일한 카운터 천적이다.</p>
        <p>10대 의회에 들어선 지금은 행정자치위원장이 되어 시청 공무원들을 상대로 노동권 훈계를 시전 중이다. 그녀가 위원장실에 호출하면 시청 공무원들은 노동법전과 임금대장을 챙겨서 벌벌 떨며 들어간다는 후문이다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (북구 6)", party: "진보당", partyClass: "bg-jinbo", txtClass: "txt-jinbo", votes: "14,500", percent: "42.1%", result: "당선 (1위)", note: "초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (북구 6)", party: "진보당", partyClass: "bg-jinbo", txtClass: "txt-jinbo", votes: "15,200", percent: "46.1%", result: "당선 (1위)", note: "재선"}
        ],
        partyHistory: [
            {period: "2020 ~ 현재", party: "진보당", partyClass: "bg-jinbo", note: "정계 입문"}
        ]
    },
    "진유성": {
        name: "진유성", hanja: "陳裕星", birth: "2005년 7월 9일 (만 <span class="calc-age" data-birthdate="2005-7-9">20</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "북구 제7선거구",
        terms: "제10대 (초선)", current: "제10대 효빈광역시의회 의원", 
        history: "효빈대학교 행정학과 재학<br>제10대 효빈광역시의회 의원",
        overview: "10대 지선에서 북구에 신설된 선거구를 차지한 05년생 진짜 최연소 초신성 Z세대 의원.",
        life: "2005년 효빈광역시 북구 중수동 출생. 신설된 선거구에서 민주당의 파격적인 미래 세대 공천을 받아 만 20세, 대학생 신분으로 단숨에 시의회에 입성했다.",
        activities: `<p>의회의 살아있는 암모나이트인 10선 성선민(1953년생) 의원과는 무려 <strong>52살 차이</strong>다. 손자 뻘도 안 되는 나이라서, 복도에서 성선민을 마주칠 때마다 명절날 큰할아버지 대하듯 90도로 깍듯하게 폴더 인사를 한다.</p>
        <p>성선민 의원이 "라떼는 갱지에 등사기로 밀어서 법안 맹글었어!"라고 일장 연설을 시작하면, 진유성은 옆에서 묵묵히 <strong>아이패드 에어드롭</strong>으로 자료를 전송해 주며 세대 차이를 실감케 한다.</p>`,
        elections: [
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (북구 7)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "18,400", percent: "52.3%", result: "당선 (1위)", note: "초선"}
        ],
        partyHistory: [
            {period: "2025 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },

    // [서구]
    "남궁휘": {
        name: "남궁휘", hanja: "南宮徽", birth: "1965년 3월 3일 (만 <span class="calc-age" data-birthdate="1965-3-3">61</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "서구 제1선거구",
        terms: "제10대 (초선) / 기초의원 5선", current: "제10대 효빈광역시의회 의원", 
        history: "평안명대학교 경영학과 졸업<br>서구의회 5선 의원<br>제10대 효빈광역시의회 의원",
        overview: "국민의힘으로 당선되었다가 개혁신당으로 탈주한 유원민을 심판하고 서구를 완전히 탈환한 새로운 터줏대감.",
        life: "1965년 덕빈북도 효빈시 서구 사능동3가(현 북구 사능동3가)출생. 서구 구의원만 내리 5번(2006~2022)을 지낸 산전수전 다 겪은 바닥 정치의 달인이다. 전임자인 유원민이 징계를 받고 탈주하자, 당의 부름을 받고 시의원으로 체급을 올려 서구 1선거구를 압도적으로 탈환했다.",
        activities: `<p>똥색 버스 시절부터 구청을 들락거렸던 인물로, 명색이 시의원 '초선'임에도 불구하고 웬만한 3~4선 다선 시의원들보다 행정망과 지역 조직을 훨씬 꽉 잡고 있다. 공무원들도 그를 신인 취급하지 않고 영감님 대우를 한다.</p>`,
        elections: [
            {year: "2006", name: "제4회 전국동시지방선거", district: "서구의회 (서구 가)", party: "열린우리당", partyClass: "bg-yellow-400 text-black", txtClass: "text-yellow-600", votes: "5,100", percent: "32.1%", result: "당선 (1위)", note: "구의원 초선"},
            {year: "2010", name: "제5회 전국동시지방선거", district: "서구의회 (서구 가)", party: "민주당", partyClass: "bg-[#008B62]", txtClass: "text-[#008B62]", votes: "6,200", percent: "38.5%", result: "당선 (1위)", note: "구의원 재선"},
            {year: "2014", name: "제6회 전국동시지방선거", district: "서구의회 (서구 가)", party: "새정치민주연합", partyClass: "bg-[#0073CF]", txtClass: "text-[#0073CF]", votes: "7,400", percent: "42.1%", result: "당선 (1위)", note: "구의원 3선"},
            {year: "2018", name: "제7회 전국동시지방선거", district: "서구의회 (서구 가)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "9,100", percent: "51.2%", result: "당선 (1위)", note: "구의원 4선"},
            {year: "2022", name: "제8회 전국동시지방선거", district: "서구의회 (서구 가)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "8,800", percent: "48.5%", result: "당선 (1위)", note: "구의원 5선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (서구 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "24,100", percent: "62.4%", result: "당선 (1위)", note: "시의원 초선"}
        ],
        partyHistory: [
            {period: "2006 ~ 2007", party: "열린우리당", partyClass: "bg-yellow-400 text-black", note: "정계 입문"},
            {period: "2008 ~ 2011", party: "민주당", partyClass: "bg-[#008B62]", note: "당명 변경"},
            {period: "2014 ~ 2015", party: "새정치민주연합", partyClass: "bg-[#0073CF]", note: "창당"},
            {period: "2015 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "당명 변경"}
        ]
    },
    "주하석": {
        name: "주하석", hanja: "朱夏錫", birth: "1982년 4월 11일 (만 <span class="calc-age" data-birthdate="1982-4-11">44</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "서구 제2선거구",
        terms: "제10대 (초선)", current: "제10대 효빈광역시의회 의원", 
        history: "전북대학교 무역학과 졸업<br>서구 전통시장 청년상인회장<br>제10대 효빈광역시의회 의원",
        overview: "3선 중진 오지대 의원의 '오지대 국밥' 수제자이자 서구 상권의 후계자.",
        life: "1982년 효빈직할시 서구 당선동 출생. 오지대 의원이 당내 경선에서 노령과 건강 문제로 컷오프(사실상 용퇴)를 당하자, 그의 전폭적인 밀어주기와 상인연합회의 지지로 대타 출마해 가볍게 당선되었다.",
        activities: `<p>단상에 올라가서 발언할 때 스승인 오지대 전 의원이 국정감사급 시정질문 때 쓰던 <strong>시커먼 뚝배기</strong>를 그대로 물려받아 들고 올라간다는 훈훈한(?) 미담이 있다. "이 뚝배기의 뜨거운 열기로 서구 상인들의 눈물을 닦겠습니다!"라고 외치는 폼이 스승과 판박이다.</p>`,
        elections: [
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (서구 2)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "21,800", percent: "59.1%", result: "당선 (1위)", note: "초선"}
        ],
        partyHistory: [
            {period: "2023 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    "상유하": {
        name: "상유하", hanja: "尙唯河", birth: "1968년 10월 10일 (만 <span class="calc-age" data-birthdate="1968-10-10">57</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "서구 제3선거구",
        terms: "제10대 (초선) / 기초의원 4선", current: "제10대 효빈광역시의회 의원", 
        history: "덕북대학교 행정학과 졸업<br>서구의회 4선 의원<br>제10대 효빈광역시의회 의원",
        overview: "정계 은퇴를 선언한 여성계 대모 윤월선(7선)의 뒤를 이어 서구 보수화 방어선을 든든하게 지키는 중진급 초선.",
        life: "1968년 효빈직할시 서구 출생. 구의원 4선(2010~2022)을 거친 마당발로, 윤월선의 7선 영토를 고스란히 물려받아 민주당의 철옹성을 사수했다.",
        activities: `<p>본인이 구의원 4선의 엄청난 짬바를 가졌음에도 불구하고, "서구는 영원한 7선 윤월선 선배님의 영토입니다"라며 항상 겸손한 자세를 유지한다. 가끔 윤월선이 의원실에 놀러 오면 직접 커피를 타다 바친다고.</p>`,
        elections: [
            {year: "2010", name: "제5회 전국동시지방선거", district: "서구의회 (서구 다)", party: "민주당", partyClass: "bg-[#008B62]", txtClass: "text-[#008B62]", votes: "6,500", percent: "39.1%", result: "당선 (1위)", note: "구의원 초선"},
            {year: "2014", name: "제6회 전국동시지방선거", district: "서구의회 (서구 다)", party: "새정치민주연합", partyClass: "bg-[#0073CF]", txtClass: "text-[#0073CF]", votes: "7,800", percent: "45.2%", result: "당선 (1위)", note: "구의원 재선"},
            {year: "2018", name: "제7회 전국동시지방선거", district: "서구의회 (서구 다)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "9,200", percent: "52.8%", result: "당선 (1위)", note: "구의원 3선"},
            {year: "2022", name: "제8회 전국동시지방선거", district: "서구의회 (서구 다)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "8,900", percent: "49.5%", result: "당선 (1위)", note: "구의원 4선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (서구 3)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "25,300", percent: "63.2%", result: "당선 (1위)", note: "시의원 초선"}
        ],
        partyHistory: [
            {period: "2010 ~ 2011", party: "민주당", partyClass: "bg-[#008B62]", note: "정계 입문"},
            {period: "2014 ~ 2015", party: "새정치민주연합", partyClass: "bg-[#0073CF]", note: "창당"},
            {period: "2015 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "당명 변경"}
        ]
    },


"이수라남": {
        name: "이수라남", hanja: "李秀羅南", birth: "1993년 1월 15일 (만 <span class="calc-age" data-birthdate="1993-1-15">33</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "안천구 제2선거구",
        terms: "제9·10대 (재선)", current: "제10대 효빈광역시의회 의원", 
        history: "효빈대학교 아랍어과 졸업<br>효빈시 외국인노동자지원센터 상담팀장<br>다문화가족지원센터 이사<br>더불어민주당 효빈시당 다문화위원장<br>제9대 효빈광역시의회 의원 (비례대표)<br>제10대 효빈광역시의회 의원 (재선)",
        overview: "대한민국의 정치인. 한국인 아버지와 아랍에미리트(UAE) 출신 어머니 사이에서 태어난 한국-아랍 혼혈 정치인으로, 청년·다문화 몫으로 비례대표에 발탁된 후 10대 지선에서 지역구(안천 2)로 생환한 다문화 정치의 상징이자 <strong>넷플릭스 드라마 최대 피해자(?)</strong>.",
        life: "1993년 효빈직할시 중구 소장동1가 출생. 아버지가 중동 건설 파견 시절 어머니를 만나 결혼하여 효빈시에 정착했다. 효빈대학교 아랍어과를 졸업한 후, 효빈시 다문화가족지원센터에서 이주민들의 척박한 정착을 돕는 활동을 헌신적으로 수행하다 그 전문성을 인정받아 2022년 제8회 지선에서 비례대표 몫으로 영입되었다. 이후 9대 의회에서 활발한 활동을 펼쳤고, 2026년 제9회 지선에서는 당적을 수시로 갈아타던 전임자 '철새 안일암'이 컷오프되자, 민주당의 강력한 쇄신 카드로 안천 2선거구에 깃발을 꽂아 압승을 거두며 재선에 성공했다.",
        activities: `<p>이름이 하필 <strong>'이슬람'</strong>이나 <strong>'수리남'</strong>을 연상시켜서, 이국적인 외모와 맞물려 선거 유세 내내 <strong>"저 외국인 아닙니다! 효빈시 중구 소장동에서 나고 자란 토종 민증 보유자 맞고요! 부모님이 지어주신 소중한 한국 이름 '빼어날 수(秀), 비단 라(羅), 남녘 남(南)' 입니다!"</strong>라고 눈물겹게 해명하고 다녀야 했다. 특히 넷플릭스 드라마 <strong>수리남</strong> 개봉 당시 네티즌들에게 엄청난 밈으로 소비되며 강제 인지도 수직 상승을 겪었다.</p>
        <p>외모는 완벽한 중동 재벌상인데, 입만 열면 구수한 효빈시 아재 사투리가 튀어나오고 소주에 돼지국밥 다대기를 팍팍 풀어 먹는 걸 제일 좋아하는 뼛속까지 K-국밥충 입맛의 소유자다. 외국인 노동자들이 그에게 영어로 길을 물어봤다가 <strong>"아따 성님, 그짝으로 쭈욱 가믄 된당께요"</strong>라는 완벽한 네이티브 발음을 듣고 문화 충격을 받는 일이 시청 앞거리에서 종종 발생한다.</p>
        <p>10대 의회에 들어서도 여전히 '수리남' 관련 밈으로 고통받고 있다. 선거 유세 때 "저 수리남 마약왕 아닙니다! 토종 효빈 시민 이수라남입니다!"라고 외치면 동네 어르신들이 배꼽을 잡고 웃는 것이 연례 행사다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (비례대표)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "-", percent: "-", result: "당선 (비례)", note: "초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (안천 2)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "20,400", percent: "55.8%", result: "당선 (1위)", note: "지역구 첫 당선(재선)"}
        ],
        partyHistory: [
            {period: "2020 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },    "강민서": {
        name: "강민서", hanja: "姜旼瑞", birth: "1992년 11월 30일 (만 <span class="calc-age" data-birthdate="1992-11-30">33</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "안천구 제3선거구",
        terms: "제10대 (초선) / 기초의원 1선", current: "제10대 효빈광역시의회 의원", 
        history: "삼선대학교 정치외교학과 졸업<br>제9대 안천구의회 의원<br>제10대 효빈광역시의회 의원",
        overview: "민주당 점퍼를 찢고 탈당했던 복수귀 용서민(무소속)이 불출마를 선언하며 떠난 자리를 탈환한 민주당의 구원투수.",
        life: "1992년 효빈직할시 안천구 능릉동 출생. 안천구의원에서 차근차근 실력을 입증하며, 분열되었던 안천 3선거구의 민주당 표심을 완벽하게 수습해 시의회에 입성했다.",
        activities: `<p>무소속으로 깽판을 치던 전임자 용서민이 의회 안팎에 싸질러놓은 온갖 막가파식 민원 처리 뒷수습을 하느라 안천구청 공무원들에게 커피를 돌리며 사과하러 다니는 게 일상이다. 천사 같은 성품으로 '안천의 힐러'로 불린다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "안천구의회 (안천 다)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "6,500", percent: "31.2%", result: "당선 (1위)", note: "구의원 초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (안천 3)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "19,200", percent: "54.1%", result: "당선 (1위)", note: "시의원 초선"}
        ],
        partyHistory: [
            {period: "2021 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
"성지언": {
        name: "성지언", hanja: "成智言", birth: "1980년 6월 15일 (만 <span class="calc-age" data-birthdate="1980-6-15">45</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "안천구 제4선거구",
        terms: "제8·9·10대 (3선)", current: "제10대 효빈광역시의회 전반기 산업건설위원장", 
        history: "덕북대학교 도시계획과 졸업<br>교통전문매체 객원기자<br>시민교통안전협회 효빈지부장<br>안천구 교통발전위원회 위원장<br>효빈광역시 버스노선개편 시민위원<br>제8, 9, 10대 효빈광역시의회 의원 (3선)",
        overview: "대한민국의 정치인. 효빈시 대중교통 정책을 수호하는 산업건설위원회의 핵심 인물이자, 의회 내 숨은 <strong>'러브라이브 씹덕(시즈쿠 파벌)'</strong>의 거두. 10대 의회에서 산업건설위원장이라는 막강한 자리를 거머쥐었다.",
        life: "1980년 덕빈북도 안천시 백합동(현 효빈광역시 안천구 백합동) 출생. 안천시가 효빈직할시 안천구로 편입되기 전의 옛 역사를 기억하는 토박이다. 뼛속까지 철도 및 버스 동호인(항덕, 철덕, 버덕의 삼위일체) 출신으로, 2008년 3세대 시내버스 노선 개편(스타더스트 작전) 당시 버스 동호회 대표로 도색 선정 여론전에 앞장섰던 골수팬이다. 시의회 입성 후 3선을 거치며 10대 의회 산업건설위원장까지 올라, 본인이 수호해온 3세대 도색 체계를 강화하는 데 사활을 걸고 있다.",
        activities: `<p>제9대 의회에서 국민의힘 곽두환 의원이 <strong>"현재의 3세대 버스 도색은 너무 가볍고 씹덕 같다. 근본 넘치던 2세대 똥색 버스 시절로 도색을 환원해야 한다"</strong>는 망언을 쏟아내며 도색 변경 조례안을 억지로 밀어붙이려 하자, 뼛속까지 버덕인 성지언의 역린이 제대로 눌려버렸다.</p>
        <p>상임위 회의에서 곽 의원을 향해 책상을 쾅 내리치며 <strong>"우리 간선버스의 스카이블루(#01B7ED)는 단순한 파란색이 아닙니다! 니지가사키의 <span style="color:#01B7ED">오사카 시즈쿠쨩</span>의 맑은 눈망울처럼 효빈의 혈관을 깨끗하게 책임지는 성스러운 색깔이란 말입니다! 감히 어디다 똥색을 들이밉니까!"</strong>라고 사자후를 토해내 곽두환을 벙찌게 만들었다. <del>이날 효빈시의회 속기록에 '오사카 시즈쿠'가 정식으로 등재되는 대참사가 벌어졌다.</del></p>
        <p>의원실에 들어가면 책상 뒤편에 2008년식 효빈 간선버스 구형 행선판과 시즈쿠 아크릴 스탠드가 나란히 전시되어 있어, 찾아오는 지역구 민원인들이 버스 회사 사무실로 착각할 정도다. 10대 의회에서는 위원장이 된 후 간선버스 증차 예산만 귀신같이 프리패스로 통과시킨다는 합리적 의혹을 받고 있다.</p>`,
        elections: [
            {year: "2018", name: "제7회 전국동시지방선거", district: "효빈시의회 (안천 4)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "17,500", percent: "58.2%", result: "당선 (1위)", note: "초선"},
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (안천 4)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "20,110", percent: "60.4%", result: "당선 (1위)", note: "재선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (안천 4)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "24,800", percent: "62.4%", result: "당선 (1위)", note: "3선"}
        ],
        partyHistory: [
            {period: "2016 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    "구상민": {
        name: "구상민", hanja: "具相民", birth: "1988년 9월 1일 (만 <span class="calc-age" data-birthdate="1988-9-1">37</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "안천구 제5선거구",
        terms: "제9·10대 (재선)", current: "제10대 효빈광역시의회 후반기 환경복지위원장", 
        history: "평안명대학교 사회복지학과 졸업<br>안천구 종합사회복지관 선임사회복지사<br>효빈시 청년사회복지사연대 대표<br>더불어민주당 안천구 복지특별위원장<br>제9, 10대 효빈광역시의회 의원 (재선)",
        overview: "대한민국의 정치인. 현장 복지 전문가 출신의 젊은 시의원이자, 성지언 의원에 맞서는 <strong>지선버스(시오리코) 파벌의 수장.</strong> 10대 지선 재선 성공 후 환경복지위원장을 맡았다.",
        life: "1988년 효빈직할시 남구 칠심동(현 창전구 칠심동) 출생. 평안명대를 졸업하고 안천구 노인복지센터에서 휠체어를 끌고 다니며 오랜 기간 헌신적으로 근무했다. 현장에서 발로 뛴 이력을 인정받아 더불어민주당의 청년 복지 인재로 발탁되어 2022년 지선에서 당선되었고, 10대 지선에서도 압도적 지지로 재선에 성공하며 환경복지위원장 자리에 올랐다.",
        activities: `<p>본업인 사회복지 정책 질의 때는 천사표 의원이지만, 대중교통 이야기만 나오면 눈빛이 돌변한다. 위의 성지언 의원이 스카이블루(시즈쿠)를 찬양한다면, 구상민 의원은 <strong>지선버스 제이드그린(#37B484)</strong> 도색에 영혼을 바친 씹덕이다.</p>
        <p>재미있는 점은, 곽두환이 똥색 버스 부활 음모를 꾸밀 때는 성지언 의원과 <strong>'니지가사키 임시 동맹'</strong>을 맺고 "곽두환 타도!"를 외치며 결사 항전하더니, 곽두환이 당선무효로 날아가자마자 다시 의회 휴게실에서 "간선버스가 근본이다 vs 지선버스가 실핏줄이다"를 두고 피 터지게 싸우고 있다는 것이다. 성지언 위원장과 마주칠 때마다 간선버스 vs 지선버스 노선 확충을 두고 매일 말싸움을 벌이는 소문난 럽라 씹덕 앙숙이다.</p>
        <p>본회의 자유발언대에서 <strong>"골목골목을 누비는 지선버스의 촘촘함은 <span style="color:#37B484">미후네 시오리코</span> 학생회장님의 치밀한 리더십과 완벽히 일치합니다! 이것이 진정한 풀뿌리 대중교통입니다!"</strong>라는 기적의 논리를 펼쳐 효빈시내 럽라 씹덕 네티즌들의 절대적인 지지를 한 몸에 받고 있다. 의회에 출근할 때 양복 상의 주머니에 시오리코 캔배지를 훈장처럼 달고 다닌다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (안천 5)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "19,550", percent: "59.2%", result: "당선 (1위)", note: "초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (안천 5)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "23,500", percent: "59.2%", result: "당선 (1위)", note: "재선"}
        ],
        partyHistory: [
            {period: "2021 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    // [중구]
    "도현정": {
        name: "도현정", hanja: "都賢政", birth: "1984년 6월 15일 (만 <span class="calc-age" data-birthdate="1984-6-15">41</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "중구 선거구",
        terms: "제10대 (초선) / 기초의원 2선", current: "제10대 효빈광역시의회 의원", 
        history: "효빈대학교 경제학과 졸업<br>제8, 9대 중구의회 의원<br>제10대 효빈광역시의회 의원",
        overview: "조청남 전 의장의 꼰대 철권통치를 심판하고 중구를 탈환한 엘리트 여성 정치인.",
        life: "1984년 효빈직할시 중구 출생. 9대 의장 조청남이 본회의장에서 마이크가 켜진 줄 모르고 Z세대 의원들에게 쒸벌, 어린 놈들이 틱톡이나 쳐배우고...라며 초대형 방송사고 망언을 터뜨려 컷오프를 당하자, 분노한 중구 당원들이 구의원 재선의 실력자인 그녀를 구원투수로 등판시켰다.",
        activities: `<p>당선 일성이 <strong>"쒸벌거리는 꼰대 정치는 끝났습니다!"</strong>였다. 본회의장 첫 시정 발언에서 조청남의 막가파식 건설 이권 개입 논란을 완벽히 디스하며 중구민들의 체증을 가라앉혔다.</p>`,
        elections: [
            {year: "2014", name: "제6회 전국동시지방선거", district: "중구의회 (중구 가)", party: "새정치민주연합", partyClass: "bg-[#0073CF]", txtClass: "text-[#0073CF]", votes: "5,100", percent: "31.2%", result: "당선 (2위)", note: "구의원 초선"},
            {year: "2018", name: "제7회 전국동시지방선거", district: "중구의회 (중구 가)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "6,500", percent: "38.5%", result: "당선 (1위)", note: "구의원 재선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (중구)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "21,100", percent: "58.4%", result: "당선 (1위)", note: "시의원 초선"}
        ],
        partyHistory: [
            {period: "2013 ~ 2014", party: "민주통합당", partyClass: "bg-[#FFC800] text-black", note: "정계 입문"},
            {period: "2014 ~ 2015", party: "새정치민주연합", partyClass: "bg-[#0073CF]", note: "창당"},
            {period: "2015 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "당명 변경"}
        ]
    },

    // [동구]
"지은민": {
        name: "지은민", hanja: "池恩旻", birth: "1983년 7월 7일 (만 <span class="calc-age" data-birthdate="1983-7-7">42</span>세)", party: "조국혁신당", partyClass: "bg-joguk", txtClass: "txt-joguk", district: "동구 제1선거구",
        terms: "제8·9·10대 (3선)", current: "제10대 효빈광역시의회 의원", 
        history: "삼선대학교 경제학과 졸업<br>더불어민주당 효빈시당 부대변인<br>제8대 효빈광역시의회 의원 (비례대표)<br>무소속 동구지역 발전위원장<br>조국혁신당 효빈시당 창당준비위원장<br>제8, 9, 10대 효빈광역시의회 의원 (3선)",
        overview: "민주당 비례대표로 시작해 공천 학살에 반발해 탈당, 무소속 생환을 거쳐 조국혁신당에 1호로 합류한, 정치권에서 살아남기 위해선 무엇이든 하는 <strong>생존력 만렙 VIP 1등석 철새</strong>.",
        life: "1983년 효빈직할시 동구 사가당동 출생. 삼선대학교 경제학과를 졸업하고 더불어민주당 청년 당원으로 활동하며 당의 스피커(부대변인) 역할을 톡톡히 했다. 그 공로를 인정받아 2018년 제7회 지선에서 민주당 비례대표로 시의회에 입성했다. 2022년 제8회 지선을 앞두고 지역구(동구 1) 출마를 선언했으나 당내 계파 갈등으로 공천 배제를 당하자, 탈당 후 무소속으로 출마해 당선되는 기적을 썼고, 2026년 제9회 지선에서는 조국혁신당 바람을 타며 기호 3번으로 3선 고지에 올랐다.",
        activities: `<p>효빈시의회 유일의 조국혁신당 배지를 달고 민주당과 묘한 기싸움을 벌인다. "나는 진정한 혁신의 불꽃이다"라고 외치지만, 의회 내에서는 "비례 먹고 탈당해서 당적 3번 바꾼 게 무슨 혁신이냐, 철새 1등석 VIP 탑승자 아니냐"며 내로남불의 극치로 조롱받는다.</p>
        <p>산업건설위원회에서 활동하며 환경 및 노동 이슈를 다루지만, 정작 국민의힘에서 개혁신당으로 당적을 세탁하고 튄 유원민 의원을 본회의장에서 "상도덕도 없는 박쥐!"라고 비판할 때면 의회 내부에서 비웃음 섞인 야유가 터져 나온다. 네티즌들은 이를 두고 <strong>"비례대표 의원직을 꿀단지처럼 빨아먹고 당적을 세 번이나 갈아탄 본인이야말로 진정한 1등석 철새 아니냐"</strong>며 조롱의 대상으로 삼고 있다.</p>`,
        elections: [
            {year: "2018", name: "제7회 전국동시지방선거", district: "효빈시의회 (비례대표)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "-", percent: "-", result: "당선 (비례)", note: "초선"},
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (동구 1)", party: "무소속", partyClass: "bg-indep", txtClass: "txt-indep", votes: "15,220", percent: "41.3%", result: "당선 (1위)", note: "재선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (동구 1)", party: "조국혁신당", partyClass: "bg-joguk", txtClass: "txt-joguk", votes: "19,200", percent: "51.2%", result: "당선 (1위)", note: "3선"}
        ],
        partyHistory: [
            {period: "2015 ~ 2022.04", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문 및 비례 당선"},
            {period: "2022.04 ~ 2024", party: "무소속", partyClass: "bg-indep", note: "공천 반발 탈당"},
            {period: "2024 ~ 현재", party: "조국혁신당", partyClass: "bg-joguk", note: "창당 합류"}
        ]
    },

    // [창전구]
"유증민": {
        name: "유증민", hanja: "柳增旻", birth: "1986년 2월 18일 (만 <span class="calc-age" data-birthdate="1986-2-18">40</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "창전구 제1선거구",
        terms: "제9·10대 (재선)", current: "제10대 효빈광역시의회 후반기 윤리특별위원장", 
        history: "엽월대학교 행정학과 졸업<br>창전구 자율방범대 연합회장<br>창전구 청년회장<br>더불어민주당 효빈시당 청년위원회 부위원장<br>제9대 효빈광역시의회 전반기 윤리특별위원회 간사<br>제9, 10대 효빈광역시의회 의원 (재선)",
        overview: "대한민국의 정치인. 효빈시 창전구를 기반으로 활동하는 30대~40대 청년 정치인이자, 윗세대와 Z세대 사이에 끼어 고통받던 <strong>비운의 낀세대에서, 마침내 10대 의회에서 염원하던 윤리위원장 완장을 탈환한 생존왕.</strong>",
        life: "1986년 효빈직할시 남구 창전동(현 효빈광역시 창전구 창전동) 출생. 창전동 토박이로 동네 청년회장과 자율방범대장을 지내며 궂은일을 도맡아 하다가 인지도를 쌓아 2022년 시의회에 당당하게 입성했다. <del>이때까지만 해도 본인이 의회 내 귀염둥이 막내 라인일 줄 알았다.</del> 9대 전반기 의회 때 본래 내정되어 있던 윤리위원장 자리를 02년생 초신성 구정원에게 인기투표로 뺏기고 피눈물을 흘리는 수모를 겪었으나, 10대 후반기에는 기어코 윤리위원장 타이틀을 탈환했다.",
        activities: `<p>36세라는 젊은 나이임에도 불구하고, 00년대생 Z세대 의원들(구정원, 유신민, 지민성 등)이 대거 의회에 입성하는 바람에 순식간에 <strong>쉰내 나는 아재 취급</strong>을 받고 있다. 조청남, 윤월선 같은 5060 꼰대 의원들과 통통 튀는 Z세대 사이에서 이리 치이고 저리 치이는 동네북 포지션이다.</p>
        <p>가장 안습한 사건은 9대 전반기에 내정되어 있던 '윤리특별위원장' 자리를 02년생 구정원 의원에게 인기투표(?)로 강탈당하고 부위원장(간사)으로 밀려난 일이다. 그날 밤 술에 거나하게 취해 <strong>"유증기처럼 증발해버린 내 위원장 자리... 이래서 머리에 피도 안 마른 어린 놈들이란..."</strong>하며 한탄했던 흑역사가 아직도 지역 정가에서 조리돌림 당하고 있다. <del>그래놓고 다음 날 03년생 유신민 의원이 타주는 커피를 마시며 멋쩍게 웃었다.</del></p>
        <p>이후 절치부심 끝에 10대 후반기에 드디어 윤리특별위원장 석에 앉게 되자, 감격에 겨워 의사봉을 쓰다듬었다는 후문이 있다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (창전 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "17,500", percent: "58.1%", result: "당선 (1위)", note: "초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (창전 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "21,300", percent: "61.5%", result: "당선 (1위)", note: "재선"}
        ],
        partyHistory: [
            {period: "2018 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },    "정진서": {
        name: "정진서", hanja: "鄭鎭書", birth: "1988년 11월 2일 (만 <span class="calc-age" data-birthdate="1988-11-2">37</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "창전구 제3선거구",
        terms: "제10대 (초선) / 기초의원 1선", current: "제10대 효빈광역시의회 의원", 
        history: "삼선대학교 경영학과 졸업<br>제9대 창전구의회 의원<br>제10대 효빈광역시의회 의원",
        overview: "불출마를 선언한 옥산민(때밀이 의원)의 이태리 때수건 정치를 그대로 물려받은 젊은 청년 일꾼.",
        life: "1988년 효빈직할시 남구 쌍엽동 출생(현 창전구 쌍엽동). 쌍엽동 터줏대감 옥산민이 운영하던 슈퍼마켓의 최고 단골손님 출신으로, 옥산민의 절대적인 신임을 받아 구의원을 거쳐 시의원 지역구를 쾌조로 승계했다.",
        activities: `<p>은퇴한 옥산민의 <strong>때수건 1만 장 배포 신화</strong>를 이어받아, 젊은 감각을 더해 <strong>핫핑크색 때수건</strong>을 유세용품으로 뿌리며 "창전구의 묵은 때, 제가 밀어버리겠습니다!"라고 외쳐 압도적 지지를 받았다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "창전구의회 (창전 다)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "5,800", percent: "28.5%", result: "당선 (2위)", note: "구의원 초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (창전 3)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "19,800", percent: "56.4%", result: "당선 (1위)", note: "시의원 초선"}
        ],
        partyHistory: [
            {period: "2022 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },

    "유신민": {
        name: "유신민", hanja: "柳信民", birth: "2003년 4월 5일 (만 <span class="calc-age" data-birthdate="2003-4-5">23</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "창전구 제4선거구",
        terms: "제9·10대 (재선)", current: "제10대 효빈광역시의회 전반기 윤리특별위원장", 
        history: "창전고등학교 총학생회장<br>효빈광역시 청소년참여위원회 위원장<br>더불어민주당 전국고등학생위원회 대변인<br>평안명대학교 정치외교학과 재학<br>제9, 10대 효빈광역시의회 의원 (재선)",
        overview: "대한민국의 정치인. 2003년생으로 고등학교 졸업 직후 제9대 효빈시의회에 입성한 Z세대 돌풍의 주역이자, <strong>효빈시의회를 서브컬처판으로 만든 광기의 씹덕(방도리) 파벌 핵심.</strong> 10대 의회에서 드디어 염원하던 윤리위원장 완장을 찼다.",
        life: "2003년 효빈광역시 창전구 칠심동 출생. 창전고 총학생회장 출신으로, 피선거권 연령 하향(18세)의 파격적 수혜를 입어 만 19세에 제9대 지선 당선이라는 파란을 일으켰다. <del>이때만 해도 지역구 주민들은 똑부러진 청년 정치인이 탄생한 줄 알았다.</del> 9대 전반기 의회 때는 파벌 싸움의 희생양이 되기도 했으나, 10대 지선에서 재선에 성공하며 20대 초반에 윤리위원장 자리를 탈환했다.",
        activities: `<p>의회 입성 후 안천구의 지민성, 남구의 지소현과 함께 전설적인 <strong>'방도리 파벌'</strong>을 결성해 시의회를 어지럽히고 있다. 본래 분홍색인 효빈도시철도 7호선 마스코트 <strong>'임세정·임세하 자매(<span style="color:#FF8899">뱅드림 치하야 아논</span>)'</strong>의 맹목적인 골수팬이었으나, 10대 의회 들어 2027년 개통 예정인 <strong>창전선 #33AAFF 마스코트 '심세이'</strong>의 퇴폐적인 눈빛에 홀려 최애를 갈아탔다는 배신자 논란에 휩싸였다.</p>
        <p>시정 질문 시간에 도로 포장 예산을 논할 때 <strong>"창전구에도 밴드 전용 공연장을 건립해야 합니다!"</strong>라고 주장하거나, 7호선 예산 삭감 시 <strong>"아논쨩 자매의 미래가 짓밟히고 있습니다!"</strong>라며 울먹이는 등 본회의장을 아수라장으로 만드는 데 일가견이 있다. 10대 의회 개원식 날엔 원개현 의원의 고프로를 들고 단상에서 <strong>'마라탕후루 챌린지'와 '삐끼삐끼 댄스'</strong> 틱톡을 찍어 효빈시청 유튜브 조회수 300만을 찍는 기염을 토했다.</p>
        <p>시의회 공식 유튜브 브이로그에서 캐비닛 안쪽이 치하야 아논 캔배지와 라이브 타월로 빈틈없이 도배된 사실이 공개되어 네티즌들에게 큰 충격을 주었다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (창전 4)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "21,150", percent: "63.8%", result: "당선 (1위)", note: "초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (창전 4)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "24,100", percent: "64.8%", result: "당선 (1위)", note: "재선"}
        ],
        partyHistory: [
            {period: "2021 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    "오상원": {
        name: "오상원", hanja: "吳相元", birth: "1981년 8월 24일 (만 <span class="calc-age" data-birthdate="1981-8-24">44</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "청엽구 제1선거구",
        terms: "제8·9·10대 (3선)", current: "제10대 효빈광역시의회 의원", 
        history: "덕남대학교 지역개발학과 졸업<br>청엽구 주민자치위원장<br>청엽구 마을만들기협의회 대표<br>효빈시 주민참여예산위원회 위원<br>제8, 9, 10대 효빈광역시의회 의원 (3선)",
        overview: "대한민국의 정치인. 조용한 3선 의원이자, 선거철만 되면 온 청엽구를 <strong>베토벤의 환희의 송가</strong>로 세뇌시키는 광기의 사나이.",
        life: "1981년 효빈직할시 청엽구 청엽동 출생. 청엽구에서 오랫동안 거주하며 동네 자치위원과 마을만들기 협의회 대표로 봉사하며 착실하게 바닥 민심을 다졌다. 2018년 제7회 지선에서 더불어민주당의 공천을 받아 정계에 입문, 무난한 득표율로 초선 배지를 달고 2022년에 재선, 2026년에는 3선 고지에 올랐다.",
        activities: `<p>평소 상임위에서는 큰 목소리 한 번 안 내고 조용히 서류만 보는 선비 스타일이지만, 선거철만 되면 유세차 볼륨을 최대로 키우고 베토벤 교향곡 9번 '환희의 송가' 멜로디에 맞춰 <strong>"오~ 상원! 오~ 상원! 청엽구의 오~상원!"</strong>이라는 웅장한 로고송을 무한 반복 재생한다. <del>이름이 오상원이라서 오! 상원! 이다.</del></p>
        <p>이 때문에 선거철 청엽구 주민들은 아침 출근길부터 밤까지 귓가에 성악가 톤의 '오! 상원!'이 맴도는 극심한 이명과 세뇌 증상을 겪는다고 한다. 오죽하면 상대 당 후보마저 유세하다가 무의식적으로 "오!상원!"을 흥얼거렸다는 괴담이 있을 정도다.</p>`,
        elections: [
            {year: "2018", name: "제7회 전국동시지방선거", district: "효빈시의회 (청엽 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "17,500", percent: "58.4%", result: "당선 (1위)", note: "초선"},
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (청엽 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "18,200", percent: "59.1%", result: "당선 (1위)", note: "재선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (청엽 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "20,500", percent: "60.1%", result: "당선 (1위)", note: "3선"}
        ],
        partyHistory: [
            {period: "2017 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },  "조성일": {
        name: "조성일", hanja: "趙成一", birth: "1989년 11월 11일 (만 <span class="calc-age" data-birthdate="1989-11-11">40</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "청엽구 제2선거구",
        terms: "제9·10대 (재선)", current: "제10대 효빈광역시의회 의원", 
        history: "효빈대학교 경제학과 졸업<br>효빈대학교 벤처창업동아리 회장<br>스타트업 '효빈에듀' 대표이사<br>효빈청년네트워크 이사<br>더불어민주당 효빈시당 혁신성장위원장<br>제9, 10대 효빈광역시의회 의원 (재선)",
        overview: "대한민국의 정치인. 30대 초반의 젊은 나이로 청엽구에 입성한 엘리트 벤처 사업가 출신 정치인. 10대 재선까지 탄탄대로를 걷고 있는 청년 벤처 인재.",
        life: "1989년 효빈직할시 청엽구 우전동 출생. 우전동에서 자라 효빈대학교 경제학과를 졸업했다. 대학 시절부터 벤처창업동아리 회장을 지내며 에듀테크 스타트업 '효빈에듀'를 창업해 성공 반열에 올랐다. 지역 청년 창업가 멘토로 활동하다가 당의 청년 벤처 인재로 전격 영입되어 시의회에 입성했다. 2022년 초선 당선 후 2026년 재선까지 성공하며 탄탄대로를 걷고 있다.",
        activities: `<p>생일이 하필 <strong>11월 11일(농업인의 날 겸 빼빼로 데이)</strong>이다. 그래서 매년 자기 생일이 되면, 본회의장에 지역구 농민들이 만든 가래떡 100인분과 대형 빼빼로 박스를 바리바리 싸 들고 와서 의장부터 수위 아저씨까지 싹 다 돌리는 넉넉한 기믹을 가지고 있다.</p>
        <p>과거 초선 시절, 국민의힘 조병진 의원이 "신성한 본회의장에서 어린놈이 과자나 돌리고 빠졌다"고 호통치자, 빙긋 웃으며 <strong>"선배님, 이거 우리 청엽구 농민들이 뽑은 가래떡입니다. 농민들의 피땀을 무시하시는 겁니까?"</strong>라고 받아쳐 조 의원을 강제 묵언수행하게 만든 일화가 유명하다. <del>이때부터 조병진 의원 담당 일진 반열에 올랐다.</del></p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (청엽 2)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "19,500", percent: "60.2%", result: "당선 (1위)", note: "초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (청엽 2)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "22,500", percent: "62.2%", result: "당선 (1위)", note: "재선"}
        ],
        partyHistory: [
            {period: "2020 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    "남예서": {
        name: "남예서", hanja: "南藝書", birth: "2003년 9월 9일 (만 <span class="calc-age" data-birthdate="2003-9-9">22</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "청엽구 제3선거구",
        terms: "제10대 (초선) / 기초의원 1선", current: "제10대 효빈광역시의회 의원", 
        history: "엽월대학교 디자인학과 재학<br>제9대 청엽구의회 의원<br>제10대 효빈광역시의회 의원",
        overview: "원지현 의원이 불출마를 선언하며 떠난 자리를 메운 새로운 Z세대 방도리 파벌의 다크호스.",
        life: "2003년 효빈광역시 청엽구 우택동 출생. 만 19세에 구의원을 지내고 바로 시의회로 넘어왔다. 전임자 원지현이 본업을 위해 떠나면서, 자신이 밀던 서브컬처 정신을 완벽하게 계승할 후계자로 남예서를 지목했다.",
        activities: `<p>전임자 원지현의 최애였던 <strong><span style="color:#9856FF">뱅드림 와카미야 이브</span></strong>의 사상을 그대로 계승했다. 당선 첫날 청엽구청 회의실에 들어가자마자 오른손을 번쩍 들고 <strong>"무사도!"</strong>를 외쳐 공무원들을 패닉에 빠뜨렸다. 속기사들은 이제 '무사도(부시도)'라는 단어 타이핑에 완벽히 적응했다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "청엽구의회 (청엽 다)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "5,100", percent: "28.1%", result: "당선 (2위)", note: "구의원 초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (청엽 3)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "21,000", percent: "58.1%", result: "당선 (1위)", note: "시의원 초선"}
        ],
        partyHistory: [
            {period: "2022 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    "강예선": {
        name: "강예선", hanja: "姜藝善", birth: "1991년 8월 25일 (만 <span class="calc-age" data-birthdate="1991-8-25">34</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "청엽구 제4선거구",
        terms: "제10대 (초선)", current: "제10대 효빈광역시의회 의원", 
        history: "전남대학교 법학과 졸업<br>효빈시 마을변호사<br>제10대 효빈광역시의회 의원",
        overview: "의사봉을 박살 내던 인간 병기 신단성이 컷오프로 물러난 자리를 꿰찬 민주당의 청년 변호사.",
        life: "1991년 효빈직할시 청엽구 우전동 출생. 무력(태권도)으로 의회를 제압하던 신단성 대신, 날카로운 법리와 논리로 무장하여 지역구를 탈환했다.",
        activities: `<p>신단성의 무자비한 <strong>의사봉 격파</strong>가 사라져 회의장이 너무 평화롭고 조용해진 것을 몹시 아쉬워하는 의원들(특히 꼰대 의원들)이 많다. 강예선 본인은 "저는 물리력 대신 논리로 뼈를 부러뜨려 드리겠습니다"라며 서늘한 미소를 짓는다고.</p>`,
        elections: [
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (청엽 4)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "22,100", percent: "59.5%", result: "당선 (1위)", note: "초선"}
        ],
        partyHistory: [
            {period: "2024 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
"원기덕": {
        name: "원기덕", hanja: "元基德", birth: "1987년 5월 20일 (만 <span class="calc-age" data-birthdate="1987-5-20">39</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "청엽구 제5선거구",
        terms: "제9·10대 (재선) / 기초의원 1선", current: "제10대 효빈광역시의회 전반기 새로운노동특별위원장", 
        history: "경기대학교 법학과 졸업<br>한국노총 효빈지역지부 조직국장<br>한국노총 효빈지부 사무처장<br>제8대 동구의회 의원<br>효빈시 노사민정협의회 실무위원<br>제9대 효빈광역시의회 전반기 노동특별위원장<br>제10대 효빈광역시의회 전반기 새로운노동특별위원장<br>제9, 10대 효빈광역시의회 의원 (재선)",
        overview: "대한민국의 정치인. 30대 무투파(武鬪派) 노동 강경파 의원이자, 비례대표 1번에서 지역구(청엽 5)로 성공적으로 생환한 정책 브레인. 진보당 박성임 의원과 함께 의회 내 노동계 투톱으로 꼽힌다.",
        life: "1987년 경기도 수원시 팔달구 매산로 출생. 경기대학교 법학과를 졸업한 뒤 효빈에 내려와 한국노총 효빈지부에서 산재 및 임금 체불 투쟁을 이끌었다. 2018년 제7회 지선에서 동구의원(기초의원)으로 당선되어 밑바닥 의정 경험을 쌓았고, 민주당과 한국노총의 정책 연대를 통해 2022년 시의회 비례대표 공천 1순위를 받아 입성했다. 9대 의회에서 맹활약한 후, 10대 지선에서 소상리 의원의 불출마로 공석이 된 청엽 5선거구를 배정받아 가볍게 지역구 뱃지를 달며 재선에 성공했다.",
        activities: `<p>기초의원 시절부터 구청 공무원들과 치고받으며 험한 꼴을 많이 봐서 공무원 특유의 행정책임 회피 스킬을 완벽하게 간파해 낸다. 국장급 인사가 "긍정적으로 검토하겠습니다"라고 얼버무리면, 안경을 치켜올리며 <strong>"그거 예산 없어서 안 하겠다는 소리인 거 구의원 때부터 천 번은 들었습니다. 장난치지 마시고 정확히 착공 날짜 박으십시오"</strong>라고 퇴로를 싹둑 차단해버리는 협상의 달인이다.</p>
        <p>진보당의 박성임 의원(북구 6)과 함께 의회 내 <strong>'망치와 모루 전술'</strong>로 예산안을 분쇄하고 다닌다. 박성임이 시청 밖에서 빨간 띠를 두르고 확성기로 데모를 이끌면, 원기덕 의원은 상임위 안에서 양복을 입고 법리적 허점을 파고들어 예산안을 도륙 내버리는 무시무시한 내외곽 양동작전을 펼친다.</p>
        <p>10대 의회에서는 노동특별위원장이 한층 격상된 '새로운노동특별위원장'이 되어, 플랫폼 노동자와 프리랜서 권익 보호를 위해 시청 공무원들을 상대로 한층 더 매서운 법적 공방을 이어가고 있다.</p>`,
        elections: [
            {year: "2018", name: "제7회 전국동시지방선거", district: "동구의회 (동구 가)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "6,500", percent: "31.2%", result: "당선 (1위)", note: "구의원 초선"},
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (비례대표)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "-", percent: "-", result: "당선 (비례)", note: "시의원 초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (청엽 5)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "19,500", percent: "54.2%", result: "당선 (1위)", note: "지역구 첫 당선(재선)"}
        ],
        partyHistory: [
            {period: "2016 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
"구상원": {
        name: "구상원", hanja: "具相願", birth: "1977년 4월 5일 (만 <span class="calc-age" data-birthdate="1977-4-5">49</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "청엽구 제6선거구",
        terms: "제8·9·10대 (3선) / 기초의원 1선", current: "제10대 효빈광역시의회 전반기 기후특별위원장", 
        history: "효빈대학교 환경공학과 졸업<br>녹색연합 효빈지부 간사<br>미세먼지해결시민본부 운영위원<br>효빈환경운동연합 사무국장<br>더불어민주당 환경특별위원장<br>제6대 중구의회 의원<br>제8, 9, 10대 효빈광역시의회 의원 (3선)",
        overview: "대한민국의 정치인. 효빈시의 환경 정책을 주도하는 행동파 <strong>에코(Eco) 파이터</strong> 의원. 8회 지선 당시 <strong>중구의 엑소더스</strong>를 주도하며 청엽구에 성공적으로 안착했고, 10대 지선에서도 압승하며 3선 고지에 올랐다.",
        life: "1977년 덕빈북도 효빈시 중구 중앙로1가 출생. 2018년 제7회 지선까지는 고향인 중구에서 시의원을 지냈으나, 2022년 제8회 지선을 앞두고 중구 선거구가 하나로 통합되는 참변(?)을 당했다. 다행히 당의 전략적 판단에 따라 중구에서 뺏어온 의석이 신설된 <strong>청엽구 제6선거구</strong>로 전격 이주, 신도시의 환경 문제를 책임지는 '청엽의 수호신'으로 전업했다. 9대 의회에 이어 10대 지선에서도 압도적인 지지를 받으며 3선에 성공했다.",
        activities: `<p>안천구의 '구상민' 의원과 이름이 비슷해서 종종 형제로 오해받지만 완전 남남이다. 이름이 <strong>'구상(계획) + 원(사람)'</strong>이다 보니, 반대파 공무원들이 "구 의원님은 제발 입으로 구상만 하지 말고 현실을 보십시오"라고 비꼴 때가 있는데, 그럴 때마다 <strong>"구상만 하는 게 아니라 행동으로 조져드립니다!"</strong>라며 환경법 위반 사례를 무더기로 고발해버리는 화끈함을 보여준다.</p>
        <p>청엽구 제6선거구(마잡2·비마)로 지역구를 옮긴 뒤에는 신도시의 대기질과 쓰레기 처리 문제에 집착하고 있다. 특히 비마동의 인구가 4.5만 명에 달하는데 녹지 비율이 낮다며 <strong>'비마 숲 조성 사업'</strong>을 밀어붙이는 중. 중구 시절보다 훨씬 널널해진 인구 구조와 행정 인프라에 만족하며 "청엽구 오길 잘했다"는 말을 술자리에서 종종 흘린다는 소문이 있다.</p>
        <p>어릴 적 두청운수의 2세대 똥색 버스가 뿜어대던 시커먼 매연을 마시고 응급실에 갔던 트라우마 때문에, 청엽구의 공항버스(Light Green)와 투어버스(Navy) 등이 친환경 차량이 아닌 것을 보고 시의회에서 사자후를 토해냈다. 버스 회사 업주들은 '구상원'이라는 이름만 들어도 배기가스 점검부터 한다. <del>덕분에 효빈시 버스 업계에서는 '구상원'이라는 이름만 들어도 배기가스 점검부터 한다.</del></p>
        <p>평소에는 진지하지만, 선거철만 되면 유세차 볼륨을 최대로 키우고 베토벤 교향곡 9번 '환희의 송가' 멜로디에 맞춰 <strong>"오~ 상원! 오~ 상원! 청엽구의 오~상원!"</strong>을 무한 반복하는 광기의 짓을 저지른다. 안천구의 오지대 의원과 의회 식당에서 마주칠 때마다 뚝배기 자존심 배틀을 벌이는 것도 유명하다.</p>`,
        elections: [
            {year: "2014", name: "제6회 전국동시지방선거", district: "중구의회 (중구 나)", party: "새정치민주연합", partyClass: "bg-[#0073CF]", txtClass: "text-[#0073CF]", votes: "8,100", percent: "35.2%", result: "당선 (1위)", note: "구의원 초선"},
            {year: "2018", name: "제7회 전국동시지방선거", district: "효빈시의회 (중구 2)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "17,200", percent: "59.1%", result: "당선 (1위)", note: "시의원 초선 / <b>중구 시절</b>"},
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (청엽 6)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "21,500", percent: "58.2%", result: "당선 (1위)", note: "시의원 재선 / <b>청엽구로 이주</b>"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (청엽 6)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "24,500", percent: "61.2%", result: "당선 (1위)", note: "시의원 3선"}
        ],
        partyHistory: [
            {period: "2012 ~ 2014", party: "민주통합당", partyClass: "bg-[#FFC800] text-black", note: "정계 입문"},
            {period: "2014 ~ 2015", party: "새정치민주연합", partyClass: "bg-[#0073CF]", note: "창당"},
            {period: "2015 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "당명 변경"}
        ]
    },

    // [탄성군]
"고상면": {
        name: "고상면", hanja: "高相勉", birth: "1972년 7월 17일 (만 <span class="calc-age" data-birthdate="1972-7-17">54</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "탄성군 제1선거구",
        terms: "제8·9·10대 (3선) / 기초의원 1선", current: "제10대 효빈광역시의회 의원", 
        history: "엽월대학교 경영학과 졸업<br>탄성군 요식업중앙회 지부장<br>제6대 탄성군의회 의원<br>탄성군 맛집골목상인회장<br>탄성군 자영업자협의회장<br>제8, 9, 10대 효빈광역시의회 의원 (3선)",
        overview: "대한민국의 정치인. <strong>'탄성군의 백종원'</strong>이라 불리는 지역 자영업자들의 영원한 대부이자, 구의원부터 차근차근 밟고 올라온 먹자골목의 맹주. 8회 지선 당시 <strong>중구의 엑소더스</strong>를 주도하며 청엽구에 성공적으로 안착했고, 10대 지선에서도 압승하며 3선에 성공했다.",
        life: "1972년 덕빈북도 기도군 염곡면 주양리 출생. 엽월대를 졸업한 뒤 탄성군 먹자골목에 터를 잡고 오랫동안 대형 고깃집과 국밥집을 연달아 성공시켰다. 특유의 사업 수완과 넉넉한 인심으로 상인들의 절대적인 지지를 받아 2014년 제6회 지선에서 탄성군의원(기초의원)으로 정계에 입문했다. 이후 코로나19 시절 배달 앱의 과도한 수수료 갑질에 분노하여 탄성군 자영업자협의회를 조직해 시청 앞 단체 트랙터 시위를 이끌었고, 이 맹렬한 전투력을 바탕으로 2018년 시의회로 체급을 올려 내리 3선에 성공했다.",
        activities: `<p>이름이 하필 <strong>'고상면'</strong>이라서, 컵라면이나 프리미엄 건면 브랜드로 오해받는 일이 비일비재하다. 본인도 이를 적극 역이용해 선거 때마다 <strong>"탄성군의 쫄깃한 정치! 국물 맛이 끝내주는 의정활동! 고상면과 함께 호루룩~!"</strong>이라는 다소 킹받는 카피라이트를 내건다. 유세차 로고송도 유명 라면 CF CM송을 편곡해서 쓴다.</p>
        <p>요식업계 대부답게 상임위에서 지역 물가나 식자재 유통망 관련 이슈가 나오면 국장급 공무원들을 원가 계산으로 탈탈 털어버린다. 시의회 구내식당 밥맛이 떨어졌다는 민원이 돌자, <strong>본인이 직접 앞치마를 두르고 주방에 쳐들어가 영양사에게 제육볶음과 겉절이 황금 레시피를 강제로 전수</strong>해주고 나왔다는 여담이 전설처럼 내려온다.</p>
        <p>서구의 '오지대 국밥' 사장님 출신인 오지대 의원과는 "우리 집 국밥 다대기가 더 깊은 맛이 난다"며 의회 휴게실에서 허구한 날 유치한 뚝배기 자존심 배틀을 벌인다. 은퇴한 오지대 의원의 뒤를 이어 의회 내 유일무이한 뚝배기 감별사로 등극했다.</p>`,
        elections: [
            {year: "2014", name: "제6회 전국동시지방선거", district: "탄성군의회 (탄성 가)", party: "새정치민주연합", partyClass: "bg-[#0073CF]", txtClass: "text-[#0073CF]", votes: "4,200", percent: "31.5%", result: "당선 (1위)", note: "군의원 초선"},
            {year: "2018", name: "제7회 전국동시지방선거", district: "효빈시의회 (탄성 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "18,400", percent: "53.2%", result: "당선 (1위)", note: "시의원 초선"},
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (탄성 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "20,000", percent: "58.7%", result: "당선 (1위)", note: "시의원 재선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (탄성 1)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "21,000", percent: "59.7%", result: "당선 (1위)", note: "시의원 3선"}
        ],
        partyHistory: [
            {period: "2014 ~ 2015", party: "새정치민주연합", partyClass: "bg-[#0073CF]", note: "정계 입문"},
            {period: "2015 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "당명 변경"}
        ]
    },
    "주옥현": {
        name: "주옥현", hanja: "朱玉賢", birth: "2001년 9월 9일 (만 <span class="calc-age" data-birthdate="2001-9-9">25</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "탄성군 제3선거구",
        terms: "제9·10대 (재선)", current: "제10대 효빈광역시의회 의원", 
        history: "삼선대학교 사회복지학과 재학<br>효빈시 청소년수련관 운영위원<br>효빈 청년기후행동 활동가<br>더불어민주당 탄성군 대학생위원장<br>제9, 10대 효빈광역시의회 의원 (재선)",
        overview: "대한민국의 정치인. Z세대 돌풍의 일원으로 당선된 01년생 민주당 젊은 피이자, 방도리 씹덕들을 사람 취급 안 하지만 <strong>정작 본인도 '버추얼 아이돌'에 단단히 미쳐있는 내로남불 오타쿠 의원.</strong>",
        life: "2001년 효빈광역시 탄성군 도변읍 요우리 출생. 도변읍 토박이로 청소년수련관 운영위원과 기후행동 활동가로 착실하게 활동하며 엘리트 청년 정치인 코스를 밟았다. 2022년 지선에서 당의 청년 할당 파격 공천을 받아 거뜬하게 당선, 만 20세의 나이에 의회에 입성했으며 10대 지선에서도 압승하며 재선에 성공했다.",
        activities: `<p>초기에는 방도리 씹덕 3대장(유신민, 지민성, 원지현)이 의회를 서브컬처판으로 만들 때, 유일하게 정상인(?) 포지션을 지키며 <strong>"어휴, 2D 여고생 판떼기나 빠는 씹덕들..."</strong>이라며 한심하게 쳐다보는 일침러 기믹이었다. 본회의장에서 유신민 의원의 아이패드 '치하야 아논' 배경화면을 보고 "공식 석상에선 일코(일반인 코스프레) 좀 하라"며 등짝을 때린 일화는 유명하다.</p>
        <p><strong>그러나 그녀 역시 다른 의미로 심연의 오타쿠였다.</strong><br>알고 보니 그녀는 <strong>버추얼 아이돌 그룹 '플레이브(PLAVE)'의 광적인 악성 팬덤(플리)</strong>이었던 것. 상임위 정회 시간에 노트북으로 은근슬쩍 플레이브 콘서트 티켓팅 용병을 뛰다가 서버가 터지자, 도변읍 요우리 특유의 차진 사투리로 <strong>"아 쒸벌 주옥(좆)같네 진짜!!"</strong>라고 육두문자를 날려 주변 공무원들을 얼어붙게 만든 전적이 있다. <del>이름이 주옥현인 이유가 있었다.</del></p>
        <p>이 사실을 알게 된 방도리 파벌 의원들이 "2D 여고생 애니나 3D 남행자 버튜버나 그게 그거 아니냐"고 항의하자, <strong>"니들이 빠는 건 음습한 오타쿠 짓이고, 내가 하는 건 고품격 K-POP 문화생활이다!"</strong>라는 적반하장 내로남불 기적의 논리를 시전해 시의회 내 <strong>'2D vs 3D 버추얼 대전'</strong>이라는 끔찍한 종교 전쟁을 촉발시켰다.</p>
        <p>재선이 된 지금도 방도리 파벌 의원들과 <strong>"어제 플레이브 라이브 봤냐 vs 뱅드림 라이브 티켓팅 성공했냐"</strong>를 두고 여전히 의회 로비에서 매일 피 터지게 싸우고 있다.</p>`,
        elections: [
            {year: "2022", name: "제8회 전국동시지방선거", district: "효빈시의회 (탄성 3)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "21,500", percent: "62.1%", result: "당선 (1위)", note: "초선"},
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (탄성 3)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "22,100", percent: "64.1%", result: "당선 (1위)", note: "재선"}
        ],
        partyHistory: [
            {period: "2021 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    // [비례대표]
"양지현": {
        name: "양지현", hanja: "梁智賢", birth: "1995년 3월 14일 (만 <span class="calc-age" data-birthdate="1995-3-14">31</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "비례대표 1번",
        terms: "제10대 (초선)", current: "제10대 효빈광역시의회 의원", 
        history: "효빈대학교 사회학과 졸업<br>더불어민주당 효빈시당 청년부대변인<br>더불어민주당 효빈광역시당 미디어홍보국장<br>제10대 효빈광역시의회 의원 (비례대표 1번)",
        overview: "대한민국의 정치인. 2026년 지방선거 당시, '유튜브 조회수 괴물'이었던 원개현 의원이 본업 복귀를 선언하며 비워둔 '비례 1번' 황금 티켓을 거머쥔 당내 청년 스피커. 원개현의 화려하지만 무책임했던 유산을 정리하는 '청소부' 역할도 겸임하고 있다.",
        life: "1995년 효빈광역시 북구 등기동 출생. 효빈대학교 재학 시절부터 학내 사회 문제에 목소리를 높여왔으며, 졸업 후에는 민주당 효빈시당의 '논리 담당'으로 활동했다. 2026년 제9회 지선 당시, 당 지도부는 원개현 의원의 이탈로 생긴 숏폼 홍보 공백을 메꾸기 위해 그녀를 비례 1번으로 전격 발탁했다. 원개현과는 달리 철저하게 정제된 언어와 데이터를 중시하는 '팩트 폭격기' 스타일로 당선되었다.",
        activities: `<p>의회 입성 후 그녀가 가장 먼저 한 일은, 전임자였던 원개현 의원이 의원실에 버리고 간 <strong>50만 유튜버 시절의 고가 카메라, 조명, 마이크 장비 등을 싹 다 중고 거래 플랫폼에 올리는 것</strong>이었다. "의정 활동은 방송 촬영이 아니라 정책으로 하는 것"이라며 장비를 처분한 돈으로 의원실에 '공공 정책 자료집'을 가득 채워 넣었다. <del>물론 일부 장비는 자신이 개인적으로 쓰려고 숨겨뒀다는 의혹이 있다.</del></p>
        <p>기존 의회 내 '방도리 파벌'이나 '러브라이브 파벌' 같은 씹덕 계파들이 난무하는 의회 문화에 질색하며, "제발 의정 활동 좀 정상적으로 합시다"라며 훈계하고 다니는 <strong>효빈시의회 내 '도덕 교사'</strong> 포지션이다. 다만, 가끔 퇴근길에 혼자 코인 노래방에 들어가 뱅드림 노래를 풀코스로 부르고 나온다는 소문이 돌아, 씹덕 의원들이 "너도 우리랑 다를 게 없잖아!"라며 동질감을 느끼고 접근하면 "절대 아닙니다"라며 칼같이 선을 긋는 철벽 방어의 달인이다.</p>`,
        elections: [
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (비례)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "-", percent: "-", result: "당선 (비례)", note: "초선"}
        ],
        partyHistory: [
            {period: "2022 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    "원지연": {
        name: "원지연", hanja: "元智連", birth: "1987년 11월 2일 (만 <span class="calc-age" data-birthdate="1987-11-2">38</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "비례대표 2번",
        terms: "제10대 (초선)", current: "제10대 효빈광역시의회 의원", 
        history: "평안명대학교 행정학과 졸업<br>효빈시 여성권익센터 소장<br>효빈시 다문화가족지원센터 상담실장<br>제10대 효빈광역시의회 의원 (비례대표 2번)",
        overview: "대한민국의 정치인. 이수라남 의원이 지역구(안천 3)로 이적하며 비어버린 비례 2번 자리에 발탁된 <strong>현장 중심의 여성 리더</strong>.",
        life: "1987년 효빈직할시 동구 전천동 출생. 평안명대 행정학과를 졸업한 뒤, 평생을 효빈시 내의 소외계층과 여성, 다문화 가정의 권익을 위해 바쳐온 '현장파' 활동가다. 이수라남 의원이 시의원 생활을 하면서 겪었던 다문화 정책의 한계를 현장에서 보완하며 신뢰를 쌓았고, 그 성실함을 높이 산 당 지도부의 전략 공천으로 입성했다.",
        activities: `<p>북구의 맹주였던 <strong>여성계 대모 오서영</strong> 의원이 국회의원 출마를 위해 의회를 떠나며 사실상 오서영의 <strong>'정치적 후계자'</strong>로 낙점된 인물이다. 겉으로는 조용하고 차분해 보이지만, 오서영 의원 특유의 '안경 치켜올리기'를 은근히 습득하여 공무원들을 압박하는 법을 배웠다.</p>
        <p>의회 내부에서는 벌써부터 <strong>'제2의 오서영'</strong>으로 불리며 다음 선거에서는 북구 1선거구 출마가 확실시되고 있다. 성선민 의원에게 가서 깍듯이 인사하는 모습이 오서영과 판박이라, 성선민 의원이 흐뭇하게 웃으며 "오서영이 뒤를 제대로 봤네"라고 칭찬했을 정도. 다만 오서영보다는 조금 더 유연한 대화법을 구사하여, 적을 만드는 대신 아군을 서서히 포섭하는 '소프트 파워'를 보여주고 있다.</p>`,
        elections: [
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (비례)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "-", percent: "-", result: "당선 (비례)", note: "초선"}
        ],
        partyHistory: [
            {period: "2023 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
    "송한유": {
        name: "송한유", hanja: "宋漢有", birth: "2001년 9월 30일 (만 <span class="calc-age" data-birthdate="2001-9-30">24</span>세)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", district: "비례대표 3번",
        terms: "제10대 (초선)", current: "제10대 효빈광역시의회 의원", 
        history: "덕남대학교 정보통신공학과 재학<br>효빈시 대학생 IT봉사단장<br>더불어민주당 효빈시당 디지털소통위원<br>제10대 효빈광역시의회 의원 (비례대표 3번)",
        overview: "대한민국의 정치인. 유튜버 원개현이 떠난 빈자리에 합류한 공대생 출신 의원이자, 효빈시의회 내에서 독보적인 위치를 차지하고 있는 <strong>'빈효선 광역전철(코레일 블루) 씹덕'</strong>.",
        life: "2001년 효빈광역시 서구 과진동 출생. 대학생 시절 효빈시의 노후화된 공공 서비스 앱을 개편하는 IT 봉사단을 이끌어 지역사회에서 '디지털 혁신 아이콘'으로 주목받았다. 이를 계기로 당의 Z세대 몫 비례 공천을 받아 24세의 나이로 당당히 시의회에 입성했다.",
        activities: `<p>의회 입성하자마자 지민성, 유신민, 지소현 등 의회 내 악명 높은 <strong>'방도리 씹덕 파벌'</strong>에 전격 합류했다. 그러나 그들과는 차별화된 노선을 걷는데, 그의 최애캐는 바로 효빈시 외곽을 달리는 <strong>빈효선 광역전철(코레일 블루 #005BAC) 마스코트 '전노아(오렌지색 Ahoge)'</strong>이다. 전노아의 그 톡톡 튀는 에너지를 사랑한다며 본회의장에 연청색/핫핑크(?) 포인트가 들어간 후드티를 입고 와 국민의힘 양소현 의원에게 <strong>"의회가 무슨 PC방이냐!"</strong>라며 10분간 훈계를 듣기도 했다.</p>
        <p>그는 입성 직후 <strong>"빈효선 광역전철의 배차 간격은 전노아의 텐션만큼이나 촘촘해야 합니다!"</strong>라는 괴랄한 논리를 펼치며 철도 예산을 확보해내는 기염을 토했다. 씹덕 파벌들이 "왜 빈효선(코레일)을 빠냐, 우리 1~3호선(뱅드림)이 근본이다"라며 내분을 일으킬 때마다, 혼자서 전노아 굿즈를 흔들며 <strong>"이것이 바로 광역철도의 힘이다!"</strong>라며 맞서고 있어, 의회 휴게실은 하루도 조용할 날이 없다.</p>`,
        elections: [
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (비례)", party: "더불어민주당", partyClass: "bg-minju", txtClass: "txt-minju", votes: "-", percent: "-", result: "당선 (비례)", note: "초선"}
        ],
        partyHistory: [
            {period: "2024 ~ 현재", party: "더불어민주당", partyClass: "bg-minju", note: "정계 입문"}
        ]
    },
"송연우": {
        name: "송연우", hanja: "宋姸雨", birth: "1993년 7월 19일 (만 <span class="calc-age" data-birthdate="1993-7-19">32</span>세)", party: "진보당", partyClass: "bg-jinbo", txtClass: "txt-jinbo", district: "비례대표 1번",
        terms: "제10대 (초선)", current: "제10대 효빈광역시의회 의원", 
        history: "전북대학교 간호학과 졸업<br>전국보건의료노조 효빈지부 정책부장<br>효빈시 보건의료인권센터 자문위원<br>제10대 효빈광역시의회 의원 (비례대표 1번)",
        overview: "보건의료계 노동자들을 대변하는 진보당의 간판이자, 2026년 지방선거에서 진보당이 국민의힘의 득표율을 넘어서며 획득한 비례대표 1번 의석을 거머쥔 <strong>진보당의 아이콘</strong>.",
        life: "1993년 덕빈북도 상안군 이부면 이부리 출생. 전북대학교 간호학과를 졸업하고 효빈시 내 대형병원에서 임상 간호사로 근무하며 노동 현장의 비참함을 몸소 체험했다. 이후 전국보건의료노조 효빈지부 정책부장으로 활동하며 비정규직 간호사들의 처우 개선과 인력 확충 투쟁을 진두지휘했다. 2026년 제9회 지방선거 당시, 효빈시 유권자들의 거센 진보 결집 열풍으로 진보당이 국민의힘을 정당 득표율에서 앞지르는 이변을 일으켰고, 그 결과 확보된 비례대표 의석의 1번 후보로서 당당하게 의회에 입성했다.",
        activities: `<p>지소현, 박성임과 함께 의회 내 <strong>'진보당 강성 3인방'</strong>을 결성했다. 의료인 처우 개선이나 "의료 민영화" 단어만 나와도 즉시 <strong>간호사 시절 쓰던 링거 폴대</strong>를 들고 시장실로 돌진할 기세로 투쟁한다. 상임위에서 의료원 예산 삭감 안이 올라오면, 눈을 부릅뜨고 <strong>"이 예산 깎는 의원님들은 아프면 자가 치료 하실 거죠? 제 링거 폴대 맛 좀 보실렵니까?"</strong>라며 서늘한 미소를 지어 의원들을 침묵하게 만드는 '흰 가운의 저승사자'다.</p>
        <p>전임자였던 조병진 의원이 워낙 꼰대짓으로 유명했기에, 송연우 의원이 의원실에 처음 입주했을 때 벽지에서 퀴퀴한 '담배 냄새'와 '구식 보수 훈수'의 잔재가 느껴진다며 며칠 동안 대대적인 소독과 대청소를 벌였다는 일화가 있다. 특히 조 의원이 쓰던 의자에서 낡은 등산복 냄새가 진동해 즉시 폐기 처분했다는 후문.</p>`,
        elections: [
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (비례)", party: "진보당", partyClass: "bg-jinbo", txtClass: "txt-jinbo", votes: "45,200", percent: "18.5%", result: "당선 (비례 1번)", note: "국민의힘 득표율 상회, 초선"}
        ],
        partyHistory: [
            {period: "2021 ~ 현재", party: "진보당", partyClass: "bg-jinbo", note: "정계 입문"}
        ]
    },
"양소현": {
        name: "양소현", hanja: "梁昭賢", birth: "1989년 12월 12일 (만 <span class="calc-age" data-birthdate="1989-12-12">36</span>세)", party: "국민의힘", partyClass: "bg-ppp", txtClass: "txt-ppp", district: "비례대표 1번",
        terms: "제10대 (초선)", current: "제10대 효빈광역시의회 의원", 
        history: "서울대학교 정치외교학과 졸업<br>국민의힘 효빈시당 수석대변인<br>제10대 효빈광역시의회 의원 (비례대표 1번)",
        overview: "효빈시의 민주당 싹쓸이 대재앙 속에서, <strong>비례의석 증석이라는 극적인 변수로 기사회생한 국민의힘 최후의 보루(유일한 1석 생존자).</strong> 분명 30대인데 하는 짓은 영락없는 <strong>보수 진영의 '젊은 꼰대 할매'</strong>다.",
        life: "1989년 효빈직할시 중구 중동3가 출생. 서울대학교 정외과를 졸업한 보수 진영의 엘리트. 국민의힘 효빈시당 수석대변인으로 활동하며 독설과 논평으로 이름을 알렸다. 제10대 지선 당시 효빈시의 보수 참패가 예견되었으나, 선거 막판 비례의석 증석이라는 천운이 따라 비례대표 1번으로 의회에 턱걸이 입성했다.",
        activities: `<p>효빈시의회 전체 40석 중 <strong>나 홀로 국민의힘</strong> 소속이다. 본회의장 우측 끝 구석 자리에 홀로 앉아 39명(민주 35, 진보 3, 조국 1)의 압도적인 좌파 파도를 몸으로 받아내고 있다. 나이는 30대 중반에 불과하지만, 의회 내에서는 "요즘 애들은 왜 복장이 저래?", "전통을 무시하는 처사다!"라며 입만 열면 5060세대 꼰대들보다 더한 기강 잡기 멘트를 쏟아내어 동료 의원들로부터 <strong>'젊은 꼰대 할매'</strong>라는 경악스러운 별명을 얻었다.</p>
        <p>얼마 전, 의회에서 HAF(효빈 애니메이션 페스티벌) 및 각종 캐릭터 산업 예산안이 상정되자, 그 특유의 엄격한 표정으로 <strong>"세금으로 만화 쪼가리나 지원하는 효빈시는 정신이 나갔다! 이런 돈 낭비 사업은 당장 폐지하고 보수적 가치를 위한 건전 재정을 구축하라!"</strong>고 사자후를 토해냈다. 이 발언 직후 효빈 시민들과 지역구 의원들의 연합군에게 <strong>"우리 시즈쿠/아논/라미쨩의 가치를 모르는 당신이 더 돈 낭비다!"</strong>라며 뭇매를 맞고 며칠간 SNS 계정을 닫아야 했던 흑역사가 있다. <del>이후 조용히 의회 식당에서 아논 캔배지를 보고 흠칫 놀라 뒷걸음질 치는 모습이 목격되었다.</del></p>`,
        elections: [
            {year: "2026", name: "제9회 전국동시지방선거", district: "효빈시의회 (비례)", party: "국민의힘", partyClass: "bg-ppp", txtClass: "txt-ppp", votes: "-", percent: "-", result: "당선 (비례)", note: "비례 1번 / 의석 증석으로 기사회생"}
        ],
        partyHistory: [
            {period: "2020 ~ 현재", party: "국민의힘", partyClass: "bg-ppp", note: "정계 입문"}
        ]
    }
};

// 동적 로드 함수 (프레임워크 완벽 복원)
function loadMember(key) {
    const data = db[key];
    if (!data) {
        alert("해당 의원의 상세 데이터가 존재하지 않습니다.");
        return;
    }

    // 1. 문서 제목 및 카테고리 업데이트
    document.getElementById('doc-title').innerText = key;
    document.getElementById('doc-category').innerHTML = `
        <span class="font-bold text-[#7777AA]">분류:</span> 
        <a href="#" class="wiki-link">효빈광역시의원</a> | 
        <a href="#" class="wiki-link">${data.district.split(' ')[0]}의 정치</a> | 
        <a href="#" class="wiki-link">${data.party} 소속</a> | 
        <a href="#" class="wiki-link">${data.birth.substring(0,4)}년 출생</a>
    `;

// 2. 우측 인포박스 조립 (수정된 갓-코드)
    
    // 💡 [추가] 출생지 스마트 추출기
    // "1992년 효빈직할시 남구에서 태어났다" -> "효빈직할시 남구"만 쏙 빼옴
    let birthplace = "알 수 없음";
    const birthMatch = data.life.match(/\d{4}년\s+(.+?)(?:\s*출생|\s*에서 태어났다|\s*에서)/);
    if (birthMatch && birthMatch[1]) {
        birthplace = birthMatch[1].trim();
    }

    // 💡 [추가] 학력 스마트 추출기
    // 약력 첫 줄에 '학교'가 들어가면 학력으로 빼고, 뒤에 너저분한 직책은 날림
    let education = "알 수 없음";
    const historyFirstLine = data.history.split('<br>')[0];
    if (historyFirstLine.includes('학교')) {
        education = historyFirstLine.replace(/(?: 총학생회장| 학생회장| 특임강사| 졸업| 재학)/g, '').trim();
    }

    let infoHtml = `
        <div class="${data.partyClass} text-white text-center p-3 font-bold text-lg leading-tight">
            ${data.current}<br>
            <span class="text-2xl mt-1 block">${key}</span>
            <span class="text-xs font-normal">${data.hanja}</span>
        </div>
        <div class="bg-gray-100 border-b border-gray-300 h-48 flex items-center justify-center text-gray-400 text-sm">
            </div>
        <table>
            <tr><th>출생</th><td class="text-sm">${data.birth}<br>${birthplace}</td></tr>
            <tr><th>국적</th><td class="text-sm">대한민국</td></tr>
            <tr><th>학력</th><td class="text-sm">${education}</td></tr>
            <tr><th>소속 정당</th><td class="text-sm"><span class="party-box ${data.partyClass} w-full block text-center">${data.party}</span></td></tr>
            <tr><th>지역구</th><td class="text-sm">${data.district}</td></tr>
            <tr><th>의원 대수</th><td class="text-sm">${data.terms}</td></tr>
            <tr><th>약력</th><td class="text-sm text-xs leading-relaxed text-left pl-3">${data.history}</td></tr>
        </table>
    `;

    // 3. 선거이력 행 조립
    let electionsHtml = data.elections.map(e => `
        <tr>
            <td>${e.year}</td>
            <td>${e.name}</td>
            <td>${e.district}</td>
            <td><span class="party-box ${e.partyClass}">${e.party}</span></td>
            <td>${e.votes}</td>
            <td><span class="font-bold ${e.txtClass}">${e.percent}</span></td>
            <td class="font-bold text-red-600">${e.result}</td>
            <td>${e.note}</td>
        </tr>
    `).join('');

    // 4. 소속정당 행 조립
    let partyHistoryHtml = data.partyHistory.map(p => `
        <tr>
            <td>${p.period}</td>
            <td><span class="party-box ${p.partyClass}">${p.party}</span></td>
            <td class="text-left pl-3">${p.note}</td>
        </tr>
    `).join('');

    // 5. 전체 본문 렌더링
    let contentHtml = `
        <aside class="infobox fade-in">${infoHtml}</aside>
        <div class="wiki-content fade-in">
            <div id="toc-box" class="toc">
                <div class="toc-title">목차</div>
                <ul>
                    <li>1. <a href="#s-1" class="wiki-link">개요</a></li>
                    <li>2. <a href="#s-2" class="wiki-link">생애 및 정치 활동</a></li>
                    <li>3. <a href="#s-3" class="wiki-link">의정 활동 및 여담</a></li>
                    <li>4. <a href="#s-4" class="wiki-link">선거 이력</a></li>
                    <li>5. <a href="#s-5" class="wiki-link">소속 정당</a></li>
                    <li>6. <a href="#s-6" class="wiki-link">둘러보기</a></li>
                </ul>
            </div>
            
            <h2 id="s-1" class="anchor-offset">1. 개요</h2>
            <p>${data.overview}</p>

            <h2 id="s-2" class="anchor-offset">2. 생애 및 정치 활동</h2>
            <p>${data.life}</p>
            
            <h2 id="s-3" class="anchor-offset">3. 의정 활동 및 여담</h2>
            <div class="bg-[#f8f9fa] border-l-4 border-[${data.partyClass.includes('minju') ? '#004ea2' : data.partyClass.includes('ppp') ? '#E61E2B' : data.partyClass.includes('jinbo') ? '#d6001c' : data.partyClass.includes('indep') ? '#808080' : '#7777AA'}] p-4 my-4 text-sm text-gray-700 shadow-sm leading-relaxed">
                ${data.activities}
            </div>

            <h2 id="s-4" class="anchor-offset">4. 선거 이력</h2>
            <table class="data-table text-sm text-center">
                <tr class="bg-gray-100">
                    <th>연도</th><th>선거</th><th>지역구</th><th>소속 정당</th><th>득표수</th><th>득표율</th><th>당락</th><th>비고</th>
                </tr>
                ${electionsHtml}
            </table>

            <h2 id="s-5" class="anchor-offset">5. 소속 정당</h2>
            <table class="data-table text-sm text-center">
                <tr class="bg-gray-100">
                    <th class="w-1/4">소속 기간</th><th>소속 정당</th><th class="w-1/3">비고</th>
                </tr>
                ${partyHistoryHtml}
            </table>

            <h2 id="s-6" class="anchor-offset mt-8">6. 둘러보기</h2>
            <div class="border-2 border-[#7777AA] mt-4 rounded overflow-hidden text-sm">
                <div class="bg-[#7777AA] text-white p-2 font-bold text-center">효빈광역시의 정치 둘러보기</div>
                <div class="bg-white p-3 text-center leading-loose">
                    <a href="효빈광역시의회.html" class="wiki-link font-bold text-[#7777AA]">효빈광역시의회</a> · 
                    <a href="효빈시청.html" class="wiki-link">효빈시청</a> · 
                    <a href="박효빈.html" class="wiki-link">박효빈 (현 시장)</a> · 
                    <a href="성선민.html" class="wiki-link">성선민 (9선 시의원)</a> ·
                    <a href="윤대환.html" class="wiki-link">윤대환 (흑역사)</a>
                </div>
            </div>
        </div>
        
    `;

    document.getElementById('dynamic-view-area').innerHTML = contentHtml;

    // 추가된 부분: 소속 정당에 맞는 네비게이션 표만 노출 및 하이라이트 처리
    const partyIds = {
        "더불어민주당": "nav-party-minju",
        "국민의힘": "nav-party-ppp",
        "진보당": "nav-party-jinbo",
        "조국혁신당": "nav-party-joguk",
        "개혁신당": "nav-party-reform",
        "무소속": "nav-party-indep"
    };

    for (let p in partyIds) {
        let el = document.getElementById(partyIds[p]);
        if (el) {
            el.style.display = (data.party === p) ? "table" : "none";
        }
    }

    document.querySelectorAll('#all-members-body td, #party-tables-container td').forEach(td => {
        td.classList.remove('bg-gray-200', 'font-bold');
    });

    document.querySelectorAll(`a[onclick*="loadMember('${key}')"]`).forEach(a => {
        if(a.innerText.trim() === key) {
            let td = a.closest('td');
            if (td) {
                td.classList.add('bg-gray-200', 'font-bold');
            }
        }
    });

    window.scrollTo({ top: 150, behavior: 'smooth' });
}

// URL의 쿼리 파라미터(?name=이름)나 해시(#이름)를 읽어 자동으로 페이지를 로드하는 로직
function checkAutoLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    let memberName = urlParams.get('name');

    // 해시태그 검사
    if (!memberName && window.location.hash) {
        memberName = decodeURIComponent(window.location.hash.substring(1));
    }

    if (memberName && db[memberName]) {
        loadMember(memberName);
    }
}

// 문서 로드 완료 시 자동 실행
document.addEventListener('DOMContentLoaded', checkAutoLoad);

