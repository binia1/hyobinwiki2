document.addEventListener("DOMContentLoaded", function () {
    // 1. 읍성 전체 데이터
    const eupseongData = [
        {
            name: '함경도',
            items: [
                {loc: '량강도 갑산군', name: '‡ 갑산읍성', hanja: '甲山邑城'},
                {loc: '함경북도 경성군', name: "'''경성읍성'''[병]", hanja: '鏡城邑城'},
                {loc: '라선시 원정리', name: '‡ 경흥읍성', hanja: '慶興邑城'},
                {loc: '함경북도 경원군', name: "'''경원읍성'''", hanja: '慶源邑城'},
                {loc: '함경북도 길주군', name: '‡ 길주읍성', hanja: '吉州邑城'},
                {loc: '함경남도 단천시', name: '‡ 단천읍성', hanja: '端川邑城'},
                {loc: '함경북도 명천군', name: "'''명천읍성'''", hanja: '明川邑城'},
                {loc: '함경북도 무산군', name: '† 무산읍성', hanja: '茂山邑城'},
                {loc: '함경북도 부령군', name: '부령읍성', hanja: '富寧邑城'},
                {loc: '함경남도 북청군', name: '‡ 북청읍성[북]', hanja: '北靑邑城'},
                {loc: '량강도 삼수군', name: '삼수읍성', hanja: '三水邑城'},
                {loc: '강원도 안변군', name: '안변고읍성 | 학성산성[산]', hanja: '安邊古邑城 | 鶴城山城'},
                {loc: '강원도 안변군', name: '† 안변읍성', hanja: '安邊邑城'},
                {loc: '함경북도 온성군', name: '† 온성읍성 #', hanja: '穩城邑城'},
                {loc: '함경남도 리원군', name: '† 이원읍성', hanja: '利原邑城'},
                {loc: '함경남도 장진군', name: '† 장진읍성', hanja: '長津邑城'},
                {loc: '함경남도 정평군', name: '‡ 정평읍성', hanja: '定平邑城'},
                {loc: '함경북도 온성군', name: '† 종성읍성', hanja: '鍾城邑城'},
                {loc: '함경남도 함흥시', name: '† 함흥읍성[감] #', hanja: '咸興邑城'},
                {loc: '함경남도 홍원군', name: '‡ 홍원읍성', hanja: '洪原邑城'},
                {loc: '함경북도 회령시', name: '‡ 회령읍성', hanja: '會寧邑城'}
            ]
        },
        {
            name: '평안도',
            items: [
                {loc: '자강도 강계시', name: '강계읍성 #', hanja: '江界邑城'},
                {loc: '평양시 강동군', name: '강동읍성', hanja: '江東邑城'},
                {loc: '평안북도 곽산군', name: "'''곽주읍성 | 능한산성'''[산]", hanja: '郭州邑城 | 凌漢山城'},
                {loc: '평안북도 구성시', name: "'''구성읍성 | 귀주성'''", hanja: '龜城邑城 | 龜州城'},
                {loc: '평안남도 맹산군', name: "'''맹주읍성 | 맹주산성'''", hanja: '孟州邑城 | 孟州山城'},
                {loc: '평안북도 녕변군', name: "'''무주읍성'''", hanja: '撫州邑城'},
                {loc: '량강도 김형직군', name: '† 무창읍성', hanja: '茂昌邑城'},
                {loc: '평안북도 박천군', name: "'''박주읍성 | 박릉성'''", hanja: '博州邑城 | 博陵城'},
                {loc: '평안북도 벽동군', name: '‡ 벽동읍성', hanja: '碧潼邑城'},
                {loc: '평안북도 대관군', name: "'''삭주고읍성 | 대삭주성'''[산]", hanja: '朔州古邑城 | 大朔州城'},
                {loc: '평안북도 삭주군', name: '† 삭주읍성', hanja: '朔州邑城'},
                {loc: '평안남도 선천군', name: '† 선천읍성 | 선천고부', hanja: '宣川邑城 | 宣川古府'},
                {loc: '평안남도 숙천군', name: '숙주읍성', hanja: '肅州邑城'},
                {loc: '평안남도 안주시', name: '안주읍성[병]', hanja: '安州邑城'},
                {loc: '자강도 중강군', name: "'''여연읍성'''", hanja: '閭延邑城'},
                {loc: '평안남도 개천시', name: '연주읍성', hanja: '蓮州邑城'},
                {loc: '평안북도 운산군', name: "'''연주읍성'''", hanja: '延州邑城'},
                {loc: '평안북도 녕변군', name: "'''영변읍성 | 철옹성'''[산]", hanja: '寧邊邑城 | 鐵甕城'},
                {loc: '남포시 룡강군', name: "'''용강읍성 | 황룡산성'''[산]", hanja: '龍岡邑城 | 黃龍山城'},
                {loc: '평안북도 룡천군', name: '용천고읍성 | 용골산성', hanja: '龍川古邑城 | 龍骨山城'},
                {loc: '평안북도 룡천군', name: "'''용천읍성'''", hanja: '龍川邑城 | 鐵甕城'},
                {loc: '자강도 중강군', name: '† 우예읍성', hanja: '虞芮邑城'},
                {loc: '자강도 위원군', name: '† 위원고읍성', hanja: '渭原古邑城'},
                {loc: '자강도 위원군', name: "'''위원읍성''' #", hanja: '渭原邑城'},
                {loc: '평안북도 구장군', name: '위주읍성', hanja: '渭州邑城'},
                {loc: '평안남도 은산군', name: '은산읍성', hanja: '殷山邑城'},
                {loc: '평안북도 의주군', name: '‡ 의주고읍성 | 내원성[산]', hanja: '義州古邑城 | 來遠城'},
                {loc: '평안북도 의주군', name: '‡ 의주읍성', hanja: '義州邑城'},
                {loc: '자강도 고풍군', name: "'''이산읍성 | 초산고읍성'''", hanja: '理山邑城 | 楚山古邑城'},
                {loc: '자강도 자성군', name: '자성읍성', hanja: '慈城邑城'},
                {loc: '평안남도 평성시', name: "'''자주읍성 | 자모산성'''[산]", hanja: '慈州邑城 | 慈母山城'},
                {loc: '평안북도 정주시', name: "'''정주읍성'''", hanja: '定州邑城'},
                {loc: '평안북도 창성군', name: '† 창성읍성', hanja: '昌城邑城'},
                {loc: '평안북도 철산군', name: "'''철주읍성'''", hanja: '鐵州邑城'},
                {loc: '자강도 초산군', name: '‡ 초산읍성 #', hanja: '楚山邑城'},
                {loc: '평안북도 동림군', name: "'''통주읍성 | 동림산성'''[산]", hanja: '通州邑城 | 東林山城'},
                {loc: '평양시', name: '평양읍성[도][감]', hanja: '平壤邑城'},
                {loc: '자강도 김형직군', name: '후주읍성', hanja: '厚州邑城'},
                {loc: '자강도 희천시', name: '† 희천읍성', hanja: '熙川邑城'}
            ]
        },
        {
            name: '황해도',
            items: [
                {loc: '황해남도 강령군', name: '‡ 강령고읍성', hanja: '康翎古邑城'},
                {loc: '황해남도 강령군', name: '† 강령읍성', hanja: '康翎邑城'},
                {loc: '황해남도 연안군', name: '연안고읍성 | 봉세산성[산]', hanja: '延安古邑城 | 鳳勢山城'},
                {loc: '황해남도 연안군', name: '‡ 연안읍성', hanja: '延安邑城'},
                {loc: '황해남도 옹진군', name: '옹진고읍성 | 옹천성', hanja: '甕津古邑城 | 甕遷城'},
                {loc: '황해남도 옹진군', name: "'''옹진읍성 | 본영읍성'''", hanja: '甕津邑城 | 本營邑城'},
                {loc: '황해남도 장연군', name: "'''장연고읍성 | 룡연읍성'''", hanja: '長淵古邑城 | 龍淵邑城'},
                {loc: '황해남도 장연군', name: '‡ 장연읍성', hanja: '長淵邑城'},
                {loc: '황해남도 과일군', name: "'''풍천읍성'''", hanja: '豊川邑城'},
                {loc: '황해남도 해주시', name: '† 해주읍성[감] #', hanja: '海州邑城'},
                {loc: '황해북도 황주군', name: '황주읍성[병]', hanja: '黃州邑城'}
            ]
        },
        {
            name: '강원도',
            items: [
                {loc: '강원도 철원군', name: '† 철원도성[도]', hanja: '鐵原都城'},
                {loc: '강원도 고성군', name: '‡ 간성읍성', hanja: '杆城邑城'},
                {loc: '강원도 강릉시', name: '‡ 강릉읍성', hanja: '江陵邑城'},
                {loc: '강원도 고성군', name: '† 고성읍성', hanja: '高城邑城'},
                {loc: '강원도 김화군', name: '? 김화읍성', hanja: '金化邑城'},
                {loc: '강원도 삼척시', name: '‡ 삼척읍성', hanja: '三陟邑城'},
                {loc: '강원도 양양군', name: '‡ 양양읍성', hanja: '襄陽邑城'},
                {loc: '경상북도 울진군', name: '† 울진고현성', hanja: '蔚珍古縣城'},
                {loc: '경상북도 울진군', name: '† 울진읍성', hanja: '蔚珍邑城'},
                {loc: '강원도 통천군', name: '통천읍성', hanja: '通川邑城'},
                {loc: '강원도 회양군', name: '† 회양읍성', hanja: '淮陽邑城'},
                {loc: '강원도 통천군', name: "'''흡곡읍성 | 송전구읍성'''", hanja: '歙谷邑城 | 松田舊邑城'}
            ]
        },
        {
            name: '경기도',
            items: [
                {loc: '서울특별시 종로구', name: '한양도성[도]', hanja: '漢陽都城'},
                {loc: '인천광역시 강화군', name: "'''강화읍성 | 강화산성'''[도]", hanja: '江華邑城 | 江華山城'},
                {loc: '개성시', name: '개성읍성[도]', hanja: '開城邑城'},
                {loc: '경기도 광주시', name: "'''광주읍성 | 남한산성'''[산]", hanja: '廣州邑城 | 南漢山城'},
                {loc: '인천광역시 강화군', name: '교동읍성', hanja: '喬桐邑城'},
                {loc: '경기도 화성시', name: '‡ 수원읍성', hanja: '水原邑城'},
                {loc: '경기도 수원시', name: "'''수원화성'''", hanja: '水原華城'},
                {loc: '경기도 안산시', name: '안산읍성', hanja: '安山邑城'}
            ]
        },
        {
            name: '충청도',
            items: [
                {loc: '충청남도 공주시', name: "'''공산성'''[도][산][감]", hanja: '公山城'},
                {loc: '충청남도 부여군', name: '부소산성[도][산]', hanja: '扶蘇山城'},
                {loc: '충청남도 홍성군', name: '† 결성고읍성', hanja: '結城古邑城'},
                {loc: '충청남도 홍성군', name: '결성읍성', hanja: '結城邑城'},
                {loc: '충청남도 보령시', name: "'''남포읍성'''", hanja: '藍浦邑城'},
                {loc: '충청남도 당진시', name: '‡ 당진읍성', hanja: '唐津邑城'},
                {loc: '충청남도 예산군', name: '† 대흥읍성', hanja: '大興邑城'},
                {loc: '충청남도 예산군', name: '† 덕산읍성', hanja: '德山邑城'},
                {loc: '충청남도 당진시', name: '면천읍성', hanja: '沔川邑城'},
                {loc: '충청남도 보령시', name: '보령읍성', hanja: '保寧邑城'},
                {loc: '충청남도 서천군', name: '비인읍성', hanja: '庇仁邑城'},
                {loc: '충청남도 서산시', name: '‡ 서산읍성', hanja: '瑞山邑城'},
                {loc: '충청남도 서천군', name: '서천고읍성 | 남산성[산]', hanja: '舒川古邑城 | 南山城'},
                {loc: '충청남도 서천군', name: '서천읍성', hanja: '舒川邑城'},
                {loc: '충청북도 영동군', name: '‡ 영동읍성', hanja: '永同邑城'},
                {loc: '충청북도 청주시', name: '† 청주읍성[병]', hanja: '淸州邑城'},
                {loc: '충청북도 충주시', name: '† 충주읍성[감]', hanja: '忠州邑城'},
                {loc: '충청남도 태안군', name: '‡ 태안읍성', hanja: '泰安邑城'},
                {loc: '충청남도 서천군', name: '한산읍성', hanja: '韓山邑城'},
                {loc: '충청남도 서산시', name: "'''해미읍성'''[병]", hanja: '海美邑城'},
                {loc: '충청남도 홍성군', name: "'''홍주읍성'''", hanja: '洪州邑城'},
                {loc: '충청남도 부여군', name: '‡ 홍산읍성 | 남촌리산성', hanja: '鴻山邑城'},
                {loc: '충청북도 영동군', name: '‡ 황간읍성', hanja: '黃澗邑城'}
            ]
        },
        {
            name: '전라도',
            items: [
                {loc: '전남광주통합특별시 강진군', name: '강진읍성', hanja: '康津邑城'},
                {loc: '전북특별자치도 정읍시', name: "'''고부읍성 | 고사부리성'''[산]", hanja: '古阜邑城 | 古沙夫里城'},
                {loc: '전북특별자치도 고창군', name: "'''고창읍성'''", hanja: '高敞邑城'},
                {loc: '전남광주통합특별시 광양시', name: '† 광양읍성', hanja: '光陽邑城'},
                {loc: '전남광주통합특별시 동구', name: '‡ 광주읍성', hanja: '光州邑城'},
                {loc: '전남광주통합특별시 구례군', name: '† 구례읍성', hanja: '求禮邑城'},
                {loc: '전남광주통합특별시 나주시', name: '나주읍성', hanja: '羅州邑城'},
                {loc: '전남광주통합특별시 순천시', name: "'''낙안읍성'''", hanja: '樂安邑城'},
                {loc: '전북특별자치도 남원시', name: '남원읍성', hanja: '南原邑城'},
                {loc: '제주특별자치도 서귀포시', name: "'''대정읍성'''", hanja: '大靜邑城'},
                {loc: '전북특별자치도 김제시', name: '† 만경읍성', hanja: '萬頃邑城'},
                {loc: '전남광주통합특별시 무안군', name: '‡ 무안읍성', hanja: '務安邑城'},
                {loc: '전북특별자치도 고창군', name: "'''무장읍성'''", hanja: '茂長邑城'},
                {loc: '전북특별자치도 무주군', name: '† 무풍현성', hanja: '茂豊縣城'},
                {loc: '전남광주통합특별시 보성군', name: '‡ 보성읍성', hanja: '寶城邑城'},
                {loc: '전북특별자치도 부안군', name: '‡ 부안읍성', hanja: '扶安邑城'},
                {loc: '전남광주통합특별시 순천시', name: '† 순천읍성', hanja: '順天邑城'},
                {loc: '전남광주통합특별시 영광군', name: '‡ 영광읍성', hanja: '靈光邑城'},
                {loc: '전남광주통합특별시 영암군', name: '‡ 영암읍성', hanja: '靈巖邑城'},
                {loc: '전북특별자치도 군산시', name: '† 옥구고읍성 | 대산산성[산]', hanja: '沃溝古邑城 | 垈山山城'},
                {loc: '전북특별자치도 군산시', name: '‡ 옥구읍성', hanja: '沃溝邑城'},
                {loc: '전북특별자치도 군산시', name: '‡ 임피읍성', hanja: '臨陂邑城'},
                {loc: '전남광주통합특별시 장성군', name: '† 장성읍성', hanja: '長城邑城'},
                {loc: '전남광주통합특별시 장흥군', name: '‡ 장흥읍성', hanja: '長興邑城'},
                {loc: '전북특별자치도 전주시', name: '‡ 전주읍성[감]', hanja: '全州邑城'},
                {loc: '제주특별자치도 서귀포시', name: "'''정의읍성'''", hanja: '旌義邑城'},
                {loc: '제주특별자치도 제주시', name: '제주읍성', hanja: '濟州邑城'},
                {loc: '전남광주통합특별시 진도군', name: '‡ 진도고읍성', hanja: '珍島古邑城'},
                {loc: '전남광주통합특별시 진도군', name: '진도읍성', hanja: '珍島邑城'},
                {loc: '전남광주통합특별시 장성군', name: '‡ 진원현성', hanja: '珍原縣城'},
                {loc: '전남광주통합특별시 해남군', name: '‡ 해남읍성', hanja: '海南邑城'},
                {loc: '전남광주통합특별시 나주시', name: '회진현성', hanja: '會津縣城'},
                {loc: '전북특별자치도 고창군', name: '‡ 흥덕읍성', hanja: '興德邑城'},
                {loc: '전남광주통합특별시 고흥군', name: '흥양읍성', hanja: '興陽邑城'}
            ]
        },
        {
            name: '경상도',
            items: [
                {loc: '경상남도 거제시', name: '거제읍성', hanja: '巨濟邑城'},
                {loc: '경상북도 경산시', name: '† 경산읍성', hanja: '慶山邑城'},
                {loc: '경상북도 경주시', name: '경주고읍성 | 남고루', hanja: '慶州古邑城 | 南古壘'},
                {loc: '경상북도 경주시', name: '경주읍성[감]', hanja: '慶州邑城'},
                {loc: '경상북도 경주시', name: '‡ 안강구성 | 거북성[신초]', hanja: '安康龜城'},
                {loc: '경상북도 포항시', name: '‡ 남미질부성[신초][산]', hanja: '南彌秩夫城'},
                {loc: '경상남도 사천시', name: '‡ 곤양읍성', hanja: '昆陽邑城'},
                {loc: '경상북도 영주시', name: '‡ 구성읍성 | 구성산성[산]', hanja: '龜城邑城 | 龜城山城'},
                {loc: '부산광역시 기장군', name: '‡ 기장고읍성', hanja: '機張古邑城'},
                {loc: '부산광역시 기장군', name: '‡ 기장읍성', hanja: '機張邑城'},
                {loc: '경상남도 김해시', name: '김해고읍성', hanja: '金海古邑城'},
                {loc: '경상남도 김해시', name: '‡ 김해읍성', hanja: '金海邑城'},
                {loc: '경상남도 남해군', name: '남해고읍성 | 대국산성[산]', hanja: '南海古邑城 | 大局山城'},
                {loc: '경상남도 남해군', name: '‡ 남해읍성', hanja: '南海邑城'},
                {loc: '대구광역시 중구', name: '† 대구읍성[감]', hanja: '大邱邑城'},
                {loc: '부산광역시 수영구', name: '‡ 동래고읍성[고도]', hanja: '東萊古邑城'},
                {loc: '부산광역시 동래구', name: '동래읍성', hanja: '東萊邑城'},
                {loc: '부산광역시 부산진구', name: '‡ 동평현성', hanja: '東平縣城'},
                {loc: '경상남도 밀양시', name: '밀양읍성', hanja: '密陽邑城'},
                {loc: '경상남도 사천시', name: '사천읍성', hanja: '泗川邑城'},
                {loc: '경상남도 합천군', name: '‡ 삼가읍성', hanja: '三嘉邑城'},
                {loc: '경상북도 상주시', name: '† 상주읍성[감]', hanja: '尙州邑城'},
                {loc: '경상북도 구미시', name: '† 선산읍성', hanja: '善山邑城'},
                {loc: '경상북도 성주군', name: '성주읍성[감]', hanja: '星州邑城'},
                {loc: '경상북도 영주시', name: '‡ 순흥읍성', hanja: '順興邑城'},
                {loc: '경상남도 거제시', name: '† 아주현성', hanja: '鵝州縣城'},
                {loc: '경상북도 안동시', name: '† 안동읍성[감]', hanja: '安東邑城'},
                {loc: '경상남도 양산시', name: '‡ 양산읍성', hanja: '梁山邑城'},
                {loc: '울산광역시 울주군', name: "'''언양읍성'''", hanja: '彦陽邑城'},
                {loc: '경상북도 포항시', name: '† 연일읍성 | 영일고읍성 | 영일읍성', hanja: '延日邑城 | 迎日古邑城 | 迎日邑城'},
                {loc: '경상북도 영덕군', name: '† 영덕읍성', hanja: '盈德邑城'},
                {loc: '경상남도 창녕군', name: '‡ 영산읍성', hanja: '靈山邑城'},
                {loc: '경상북도 포항시', name: '† 흥해읍성', hanja: '興海邑城'},
                {loc: '경상북도 영주시', name: '† 영천읍성', hanja: '榮川邑城'},
                {loc: '경상북도 영천시', name: '† 영천읍성', hanja: '永川邑城'},
                {loc: '경상북도 영덕군', name: '‡ 영해읍성', hanja: '寧海邑城'},
                {loc: '경상남도 창원시', name: "'''웅천읍성'''", hanja: '熊川邑城'},
                {loc: '울산광역시 중구', name: '† 울산고읍성 | 계변성', hanja: '蔚山古邑城 | 戒邊城'},
                {loc: '울산광역시 중구', name: '† 울산읍성', hanja: '蔚山邑城'},
                {loc: '경상남도 의령군', name: '‡ 의령읍성', hanja: '宜寧邑城'},
                {loc: '경상북도 의성군', name: '† 의성읍성', hanja: '義城邑城'},
                {loc: '경상북도 포항시', name: "'''장기읍성'''[산]", hanja: '長鬐邑城'},
                {loc: '경상남도 진주시', name: "'''진주읍성'''[병]", hanja: '晉州邑城'},
                {loc: '경상남도 창원시', name: '† 진해읍성', hanja: '鎭海邑城'},
                {loc: '경상남도 창원시', name: '‡ 창원읍성', hanja: '昌原邑城'},
                {loc: '경상북도 청도군', name: "'''청도읍성'''", hanja: '淸道邑城'},
                {loc: '경상북도 포항시', name: '‡ 청하읍성', hanja: '淸河邑城'},
                {loc: '경상북도 칠곡군', name: "'''칠곡읍성 | 가산산성'''[산]", hanja: '漆谷邑城 | 架山山城'},
                {loc: '경상남도 함안군', name: '‡ 칠원읍성', hanja: '漆原邑城'},
                {loc: '경상북도 영주시', name: '† 풍기읍성', hanja: '豊基邑城'},
                {loc: '경상남도 하동군', name: '하동읍성', hanja: '河東邑城'},
                {loc: '경상남도 함안군', name: '‡ 함안읍성', hanja: '咸安邑城'},
                {loc: '경상남도 함양군', name: '‡ 함양고읍성', hanja: '咸陽古邑城'},
                {loc: '경상남도 함양군', name: '† 함양읍성', hanja: '咸陽邑城'},
                {loc: '경상남도 고성군', name: '‡ 고성고읍성', hanja: '固城古邑城'},
                {loc: '경상남도 고성군', name: '‡ 고성읍성', hanja: '固城邑城'}
            ]
        },
        {
            name: '덕빈권',
            items: [
                {loc: '효빈광역시 중구', name: "'''효빈읍성'''", hanja: '孝彬邑城'},
                {loc: '효빈광역시 탄성군', name: '‡ 탄성읍성', hanja: '彈城邑城'},
                {loc: '덕빈북도 빈주시', name: "'''빈주읍성'''", hanja: '彬州邑城'},
                {loc: '덕빈북도 천주시', name: '‡ 천주읍성', hanja: '泉州邑城'},
                {loc: '덕빈북도 강주시', name: "'''풍영읍성'''[병]", hanja: '豊榮邑城'},
                {loc: '덕빈북도 강주시', name: '‡ 강주읍성', hanja: '江州邑城'},
                {loc: '덕빈북도 치원군', name: "'''치원읍성'''", hanja: '稚原邑城'},
                {loc: '덕빈북도 낭원군', name: "'''토진읍성'''", hanja: '土津邑城'},
                {loc: '덕빈북도 서해시', name: "'''압일읍성'''", hanja: '鴨一邑城'},
                {loc: '덕빈북도 덕현군', name: '‡ 덕현읍성', hanja: '德懸邑城'},
                {loc: '덕빈북도 전산시', name: '† 산진읍성', hanja: '山辰邑城'},
                {loc: '덕빈북도 저천군', name: "'''저천읍성'''", hanja: '低川邑成'},
                {loc: '덕빈북도 반양군', name: '† 반양읍성', hanja: '半陽邑城'},
                {loc: '덕빈북도 상안군', name: '‡ 상안읍성', hanja: '上安邑城'},
                {loc: '덕빈북도 빈주시', name: '† 빈주고읍성', hanja: '彬州古邑城'},
                {loc: '덕빈남도 덕주시', name: '† 덕주읍성', hanja: '德州邑城'},
                {loc: '덕빈남도 낙주시', name: '‡ 낙산읍성 | 낙주읍성', hanja: '樂山邑城 | 樂州邑城'},
                {loc: '덕빈남도 매산군', name: "'''율주읍성'''", hanja: '栗州邑城'},
                {loc: '덕빈남도 관수군', name: '‡ 관곡읍성', hanja: '冠谷邑城'},
                {loc: '덕빈남도 분주군', name: "'''분주읍성'''", hanja: '分州邑城'},
                {loc: '덕빈남도 마진시', name: '‡ 진원현성 | 진원읍성', hanja: '津原懸城 | 津原邑城'},
                {loc: '덕빈남도 관수군', name: "'''수석현성 | 수석읍성'''", hanja: '水石縣城 | 水石邑城'},
                {loc: '덕빈남도 방산시', name: '† 경진읍성', hanja: '經津邑城'}
            ]
        }
    ];

    // 텍스트 변환 헬퍼 (볼드체 및 윗첨자 처리)
    function formatText(str) {
        let result = str.replace(/'''(.*?)'''/g, '<strong class="font-extrabold text-[0.95rem]">$1</strong>');
        const tags = ['병', '감', '도', '산', '북', '신초', '고도'];
        tags.forEach(tag => {
            const regex = new RegExp(`\\[${tag}\\]`, 'g');
            result = result.replace(regex, `<sup class="text-[0.65em] text-gray-500 font-normal ml-0.5 align-super">[${tag}]</sup>`);
        });
        return result;
    }

    // ★ 문서 링크 생성 헬퍼 (특수문자 제거 후 순수 이름으로 .html 연결)
    function getLinkTarget(rawName) {
        // 1. 특수기호 제거 (' † ‡ ? # [ ] 안의 글자들)
        let cleanName = rawName.replace(/['†‡?#]/g, '').replace(/\[.*?\]/g, '').trim();
        // 2. 'A | B' 형태인 경우 첫 번째 이름만 추출 (예: '고부읍성 | 고사부리성' -> '고부읍성')
        cleanName = cleanName.split('|')[0].trim();
        // 3. .html 확장자 붙이기
        return cleanName + '.html';
    }

    // 각 지역별 테이블 생성 함수
    function buildRegionTable(region) {
        // 덕빈권만 기본으로 열어두고 나머지는 숨김 처리
        const isDeokbin = region.name === '덕빈권';
        const displayClass = isDeokbin ? '' : 'hidden';

        let html = `
            <div onclick="window.toggleNavTable('eupseong-region-${region.name}')" class="bg-[#c00d45] text-white font-bold text-center py-1.5 border-t border-b border-[#a00b38] text-[0.9rem] cursor-pointer hover:bg-[#a00b38] transition-colors">
                [ ${region.name} ]
            </div>
            <table id="eupseong-region-${region.name}" class="w-full border-collapse text-center table-fixed bg-white ${displayClass}">
                <colgroup>
                    <col style="width: 33.33%;">
                    <col style="width: 33.33%;">
                    <col style="width: 33.33%;">
                </colgroup>
                <tbody>
        `;

        const items = region.items;
        for (let i = 0; i < items.length; i += 3) {
            // 위치(loc) 행
            html += `<tr class="bg-[#f0f0f0] text-[#666] text-xs border-b border-[#ddd]">`;
            for (let j = 0; j < 3; j++) {
                if (items[i + j]) {
                    html += `<td class="py-1.5 border-r border-[#ddd] break-words px-1">${items[i + j].loc}</td>`;
                } else {
                    html += `<td class="py-1.5 border-r border-[#ddd] bg-white"></td>`;
                }
            }
            html += `</tr>`;

            // 읍성 이름(name) 및 한자(hanja) 행
            html += `<tr class="bg-white border-b border-[#ddd]">`;
            for (let j = 0; j < 3; j++) {
                if (items[i + j]) {
                    const nameHtml = formatText(items[i + j].name);
                    const linkTarget = getLinkTarget(items[i + j].name); // ★ 자동 생성된 하이퍼링크 주소
                    
                    html += `
                        <td class="py-2.5 border-r border-[#ddd] break-words px-1 leading-tight hover:bg-[#fafafa]">
                            <a href="${linkTarget}" class="text-[#f39100] text-[0.85rem] hover:underline">${nameHtml}</a>
                            <div class="text-[#888] text-[0.7rem] mt-0.5 tracking-tight">${items[i + j].hanja}</div>
                        </td>`;
                } else {
                    html += `<td class="py-2.5 border-r border-[#ddd] bg-white"></td>`;
                }
            }
            html += `</tr>`;
        }
        html += `</tbody></table>`;
        return html;
    }

    // 3. 메인 HTML 뼈대 조립
    let containerHtml = `
        <div class="border-[2px] border-[#c00d45] w-full max-w-[1000px] mx-auto bg-white mb-6 text-sm font-sans shadow-md relative">
            
            <!-- 상단 헤더 영역 -->
            <div class="relative bg-[#c00d45] text-white py-2 flex justify-center items-center">
                <div class="flex items-center gap-2">
                    <img src="이미지/그림4324356787.png" onerror="this.style.display='none'" class="h-[58px] object-contain">
                    <div class="flex flex-col text-left">
                        <span class="text-xl font-bold leading-tight tracking-wide">읍성</span>
                        <span class="text-[0.7rem] font-normal leading-tight tracking-widest mt-0.5">邑城</span>
                    </div>
                </div>
                
                <button onclick="window.toggleNavTable('hyobin-eupseong-body')" class="absolute right-3 top-1/2 -translate-y-1/2 border border-white/70 text-white text-[11px] px-2 py-1 rounded hover:bg-white hover:text-[#c00d45] transition-colors">
                    접기/펼치기
                </button>
            </div>
            
            <!-- 본문 영역 -->
            <div id="hyobin-eupseong-body" class="block">
    `;

    // 각 지역 테이블 병합
    eupseongData.forEach(region => {
        containerHtml += buildRegionTable(region);
    });

    // 하단 범례 및 관련 틀 링크 영역
    containerHtml += `
                <!-- 범례 -->
                <div class="bg-[#c00d45] text-white text-[0.75rem] py-3 px-2 flex flex-wrap gap-x-4 gap-y-1.5 justify-center leading-tight">
                    <span>† : 멸실</span>
                    <span>‡ : 멸실 위기</span>
                    <span>? : 실체 불명</span>
                    <strong class="font-extrabold text-[#f39100]">볼드체 : 윤곽 온전/복원</strong>
                    <span>[도] : 도읍지</span>
                    <span>[산] : 산성 읍치</span>
                    <span>[신초] : 신라 초기 현성(=읍성)</span>
                    <span>[고도] : 고대 도시국가 초축</span>
                    <span>[감] : 감영 소재</span>
                    <span>[병] : 병영 소재</span>
                </div>
                <!-- 하단 연관 틀 -->
                <div class="bg-[#a00b38] text-white text-sm py-3 flex flex-wrap justify-center gap-6 font-bold tracking-wide">
                    <a href="조창성.html" class="hover:text-yellow-200 hover:underline transition-colors">조창성</a>
                    <a href="대한민국의산성.html" class="hover:text-yellow-200 hover:underline transition-colors">산성</a>
                    <a href="한국사의관문.html" class="hover:text-yellow-200 hover:underline transition-colors">차단성·관문</a>
                    <a href="왜성.html" class="hover:text-yellow-200 hover:underline transition-colors">왜성</a>
                </div>
            </div>
        </div>
    `;

    // 4. 컨테이너에 HTML 주입
    const targetElement = document.getElementById("hyobin-eupseong-container");
    if (targetElement) {
        targetElement.innerHTML = containerHtml;
    }

    // 5. 전역 토글 함수
    window.toggleNavTable = function (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
            el.classList.toggle("hidden");
        }
    };
});