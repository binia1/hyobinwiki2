/* 파일 경로: js/효빈시내버스목록.js */

function renderHyobinBusList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // --- 1. 스타일 정의 ---
    const styleId = 'hyobin-bus-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            .hb-bus-wrapper { margin-bottom: 20px; overflow-x: auto; }
            .hb-bus-table { width: 100%; border-collapse: collapse; min-width: 300px; margin-bottom: 1rem; }
            .hb-bus-thead th { padding: 10px; color: white; position: relative; }
            .hb-bus-header-content { display: flex; align-items: center; justify-content: center; gap: 10px; }
            .hb-bus-logo { max-height: 28px; width: auto; }
            .hb-bus-title { font-weight: bold; font-size: 1.2em; color: white; text-decoration: none; }
            .hb-bus-tbody { text-align: center; font-size: 0.85rem; transition: all 0.2s; }
            .hb-bus-tbody.hidden { display: none; }
            .hb-bus-tbody td { padding: 8px 4px; border: 1px solid #eee; }
            .hb-bus-link { cursor: pointer; font-weight: bold; color: inherit; text-decoration: none; }
            .hb-bus-link:hover { text-decoration: underline; }
            .hb-sub-text { color: #9ca3af; font-weight: normal; font-size: 0.75rem; margin-left: 2px; }
            .hb-text-black .hb-bus-title { color: black !important; }
            
            /* 접기 버튼 스타일 */
            .hb-toggle-btn {
                font-size: 0.8rem; cursor: pointer; margin-left: 15px; opacity: 0.8; user-select: none;
            }
            .hb-toggle-btn:hover { text-decoration: underline; opacity: 1; }
            .hb-text-black .hb-toggle-btn { color: black; }
        `;
        document.head.appendChild(style);
    }

    // --- 2. 데이터 정의 (생략 없이 유지) ---
    const busData = {
        express: { title: '효빈광역시 급행버스 노선', link: '급행버스.html', color: '#D81C2F', cols: 3, routes: ['01', '02', '03', '04', '05', '06', '07', '08', '09'] },
        trunk: { title: '효빈광역시 간선버스 노선', link: '간선버스.html', color: '#01B7ED', cols: 5, routes: [
            {m:'11',s:'(11-1)',c:'11'}, {m:'12',s:'(21)',c:'12'}, {m:'13',s:'(31)',c:'13'}, {m:'14',s:'(41)',c:'14'}, {m:'15',s:'(51)',c:'15'},
            {m:'16',s:'(61)',c:'16'}, {m:'17',s:'(71)',c:'17'}, {m:'18',s:'(81)',c:'18'}, {m:'19',s:'(91)',c:'19'}, {m:'21',s:'(12)',c:'21'},
            {m:'22',s:'(22-1)',c:'22'}, {m:'23',s:'(32)',c:'23'}, {m:'24',s:'(42)',c:'24'}, {m:'25',s:'(52)',c:'25'}, {m:'26',s:'(62)',c:'26'},
            {m:'27',s:'(72)',c:'27'}, {m:'28',s:'(82)',c:'28'}, {m:'29',s:'(92)',c:'29'}, {m:'31',s:'(13)',c:'31'}, {m:'32',s:'(23)',c:'32'},{m:'33',s:'(33-1)',c:'33'},{m:'33-1',s:'(34)',c:'33-1'},
            {m:'34',s:'(43)',c:'34'}, {m:'35',s:'(53)',c:'35'}, {m:'36',s:'(63)',c:'36'}, {m:'37',s:'(73)',c:'37'}, {m:'38',s:'(83)',c:'38'},
            {m:'39',s:'(93)',c:'39'}, {m:'41',s:'(14)',c:'41'}, {m:'42',s:'(24)',c:'42'}, {m:'43',s:'(34)',c:'43'}, {m:'45',s:'(54)',c:'45'},
            {m:'46',s:'(64)',c:'46'}, {m:'47',s:'(74)',c:'47'}, {m:'48',s:'(84)',c:'48'}, {m:'49',s:'(94)',c:'49'}, {m:'51',s:'(15)',c:'51'},
            {m:'52',s:'(25)',c:'52'}, {m:'53',s:'(35)',c:'53'}, {m:'54',s:'(45)',c:'54'}, {m:'56',s:'(65)',c:'56'}, {m:'57',s:'(75)',c:'57'},
            {m:'58',s:'(85)',c:'58'}, {m:'59',s:'(95)',c:'59'}, {m:'61',s:'(16)',c:'61'}, {m:'62',s:'(26)',c:'62'}, {m:'63',s:'(36)',c:'63'},
            {m:'64',s:'(46)',c:'64'}, {m:'65',s:'(56)',c:'65'}, {m:'66',s:'(66-1)',c:'66'}, {m:'67',s:'(76)',c:'67'}, {m:'68',s:'(86)',c:'68'},
            {m:'69',s:'(96)',c:'69'}, {m:'71',s:'(17)',c:'71'}, {m:'72',s:'(27)',c:'72'}, {m:'73',s:'(37)',c:'73'}, {m:'74',s:'(47)',c:'74'},
            {m:'75',s:'(57)',c:'75'}, {m:'76',s:'(67)',c:'76'}, {m:'77',s:'(77-1)',c:'77'}, {m:'78',s:'(87)',c:'78'}, {m:'79',s:'(97)',c:'79'},
            {m:'81',s:'(18)',c:'81'}, {m:'82',s:'(28)',c:'82'}, {m:'83',s:'(38)',c:'83'}, {m:'84',s:'(48)',c:'84'}, {m:'85',s:'(58)',c:'85'},
            {m:'86',s:'(68)',c:'86'}, {m:'87',s:'(78)',c:'87'}, {m:'88',s:'(88-1)',c:'88'}, {m:'89',s:'(98)',c:'89'}, {m:'91',s:'(19)',c:'91'},
            {m:'92',s:'(29)',c:'92'}, {m:'93',s:'(39)',c:'93'}, {m:'94',s:'(49)',c:'94'}, {m:'95',s:'(59)',c:'95'}, {m:'96',s:'(69)',c:'96'},
            {m:'97',s:'(79)',c:'97'}, {m:'98',s:'(89)',c:'98'}
        ]},
        feeder: { title: '효빈광역시 지선버스 노선', link: '지선버스.html', color: '#37B484', cols: 5, routes: [
            {m:'111',s:'(111-1)',c:'111'}, {m:'111-1',s:'(111)',c:'111'}, {m:'112',s:'(112-1)',c:'112'}, {m:'112-1',s:'(112)',c:'112'}, {m:'121',s:'(211)',c:'121'},
            {m:'123',s:'(213)',c:'123'}, {m:'129',s:'(219)',c:'129'}, {m:'131',s:'(311)',c:'131'}, {m:'132',s:'(312)',c:'132'}, {m:'141',s:'(411)',c:'141'},
            {m:'143',s:'(413)',c:'143'}, {m:'151',s:'(511)',c:'151'}, {m:'154',s:'(514)',c:'154'}, {m:'161',s:'(611)',c:'161'}, {m:'162',s:'(612)',c:'162'},
            {m:'171',s:'(711)',c:'171'}, {m:'172',s:'(712)',c:'172'}, {m:'173',s:'(713)',c:'173'}, {m:'181',s:'(811)',c:'181'}, {m:'191',s:'(911)',c:'191'},
            {m:'192',s:'(912)',c:'192'}, {m:'193',s:'(913)',c:'193'}, {m:'194',s:'(914)',c:'194'}, {m:'211',s:'(121)',c:'121'}, {m:'213',s:'(123)',c:'123'},
            {m:'219',s:'(129)',c:'129'}, {m:'221',s:'(221-1)',c:'221'}, {m:'221-1',s:'(221)',c:'221'}, {m:'222',s:'(222-1)',c:'222'}, {m:'222-1',s:'(222)',c:'222'},
            {m:'231',s:'(321)',c:'231'}, {m:'232',s:'(322)',c:'232'}, {m:'241',s:'(421)',c:'241'}, {m:'242',s:'(422)',c:'242'}, {m:'251',s:'(521)',c:'251'},
            {m:'252',s:'(522)',c:'252'}, {m:'258',s:'(528)',c:'258'}, {m:'261',s:'(621)',c:'261'}, {m:'262',s:'(622)',c:'262'}, {m:'271',s:'(721)',c:'271'},
            {m:'281',s:'(821)',c:'281'}, {m:'291',s:'(921)',c:'291'}, {m:'292',s:'(922)',c:'292'}, {m:'311',s:'(131)',c:'131'}, {m:'312',s:'(132)',c:'132'},
            {m:'321',s:'(231)',c:'231'}, {m:'322',s:'(232)',c:'232'}, {m:'331',s:'(331-1)',c:'331'}, {m:'331-1',s:'(331)',c:'331'}, {m:'334',s:'(334-1)',c:'334'},
            {m:'334-1',s:'(334)',c:'334'}, {m:'341',s:'(431)',c:'341'}, {m:'351',s:'(531)',c:'351'}, {m:'361',s:'(631)',c:'361'}, {m:'362',s:'(632)',c:'362'},
            {m:'371',s:'(731)',c:'371'}, {m:'381',s:'(831)',c:'381'}, {m:'391',s:'(931)',c:'391'}, {m:'411',s:'(141)',c:'141'}, {m:'413',s:'(143)',c:'143'},
            {m:'421',s:'(241)',c:'241'}, {m:'422',s:'(242)',c:'242'}, {m:'431',s:'(341)',c:'341'}, {m:'441',s:'(441-1)',c:'441'}, {m:'441-1',s:'(441)',c:'441'},
            {m:'451',s:'(541)',c:'451'}, {m:'461',s:'(641)',c:'461'}, {m:'471',s:'(741)',c:'471'}, {m:'472',s:'(742)',c:'472'}, {m:'481',s:'(841)',c:'481'},
            {m:'482',s:'(842)',c:'482'}, {m:'491',s:'(941)',c:'491'}, {m:'492',s:'(942)',c:'492'}, {m:'511',s:'(151)',c:'151'}, {m:'514',s:'(154)',c:'154'},
            {m:'521',s:'(251)',c:'251'}, {m:'522',s:'(252)',c:'252'}, {m:'528',s:'(258)',c:'258'}, {m:'531',s:'(351)',c:'351'}, {m:'541',s:'(451)',c:'451'},
            {m:'551',s:'(551-1)',c:'551'}, {m:'551-1',s:'(551)',c:'551'}, {m:'552',s:'(552-1)',c:'552'}, {m:'552-1',s:'(552)',c:'552'}, {m:'561',s:'(651)',c:'561'},
            {m:'571',s:'(751)',c:'571'}, {m:'572',s:'(752)',c:'572'}, {m:'573',s:'(753)',c:'573'}, {m:'581',s:'(851)',c:'581'}, {m:'582',s:'(852)',c:'582'},
            {m:'591',s:'(951)',c:'591'}, {m:'592',s:'(952)',c:'592'}, {m:'611',s:'(161)',c:'161'}, {m:'612',s:'(162)',c:'162'}, {m:'621',s:'(261)',c:'261'},
            {m:'622',s:'(262)',c:'262'}, {m:'631',s:'(361)',c:'361'}, {m:'632',s:'(362)',c:'362'}, {m:'641',s:'(461)',c:'461'}, {m:'651',s:'(561)',c:'561'},
            {m:'661',s:'(661-1)',c:'661'}, {m:'661-1',s:'(661)',c:'661'}, {m:'671',s:'(761)',c:'671'}, {m:'672',s:'(762)',c:'672'}, {m:'681',s:'(861)',c:'681'},
            {m:'682',s:'(862)',c:'682'}, {m:'691',s:'(961)',c:'691'}, {m:'692',s:'(962)',c:'692'}, {m:'711',s:'(171)',c:'171'}, {m:'712',s:'(172)',c:'172'},
            {m:'713',s:'(173)',c:'173'}, {m:'721',s:'(271)',c:'271'}, {m:'731',s:'(371)',c:'371'}, {m:'741',s:'(471)',c:'471'}, {m:'742',s:'(472)',c:'472'},
            {m:'751',s:'(571)',c:'571'}, {m:'752',s:'(572)',c:'572'}, {m:'753',s:'(573)',c:'573'}, {m:'761',s:'(671)',c:'671'}, {m:'762',s:'(672)',c:'672'},
            {m:'771',s:'(771-1)',c:'771'}, {m:'771-1',s:'(771)',c:'771'}, {m:'781',s:'(871)',c:'781'}, {m:'791',s:'(971)',c:'791'}, {m:'792',s:'(972)',c:'792'},
            {m:'793',s:'(973)',c:'793'}, {m:'811',s:'(181)',c:'181'}, {m:'821',s:'(281)',c:'281'}, {m:'831',s:'(381)',c:'381'}, {m:'841',s:'(481)',c:'481'},
            {m:'842',s:'(482)',c:'482'}, {m:'851',s:'(581)',c:'581'}, {m:'852',s:'(582)',c:'582'}, {m:'861',s:'(681)',c:'681'}, {m:'862',s:'(682)',c:'682'},
            {m:'871',s:'(781)',c:'781'}, {m:'881',s:'(881-1)',c:'881'}, {m:'881-1',s:'(881)',c:'881'}, {m:'891',s:'(981)',c:'891'}, {m:'892',s:'(982)',c:'892'},
            {m:'911',s:'(191)',c:'191'}, {m:'912',s:'(192)',c:'192'}, {m:'913',s:'(193)',c:'193'}, {m:'914',s:'(194)',c:'194'}, {m:'921',s:'(291)',c:'291'},
            {m:'922',s:'(292)',c:'292'}, {m:'931',s:'(391)',c:'391'}, {m:'941',s:'(491)',c:'491'}, {m:'942',s:'(492)',c:'492'}, {m:'951',s:'(591)',c:'591'},
            {m:'952',s:'(592)',c:'592'}, {m:'961',s:'(691)',c:'691'}, {m:'962',s:'(692)',c:'692'}, {m:'971',s:'(791)',c:'791'}, {m:'972',s:'(792)',c:'792'},
            {m:'973',s:'(793)',c:'793'}, {m:'981',s:'(891)',c:'891'}, {m:'982',s:'(892)',c:'892'}, {m:'991',s:'(991-1)',c:'991'}, {m:'991-1',s:'(991)',c:'991'}
        ]},
        circular: { title: '효빈광역시 순환버스 노선', link: '순환버스.html', color: '#E7D600', textColor: 'black', cols: 5, routes: ['10', '20', '30', '40', '50', '60', '70', '80', '90'] },
        village: { title: '효빈광역시 마을버스 노선', link: '마을버스.html', color: '#A664A0', fontSize: '0.75rem', cols: 5, routes: ['도향01', '도향02', '도향03', '정근01', '정근02', '소원01', '소원02', '흑택01', '야진01', '야진02', '채산01', '채산02', '중구01', '악부01', '탄성01', '탄성02', '서목01', '서목02', '고해01', '고해02', '뇌전01', '도변01', '칠채01', '광정01', '곽산01'] },
        intercity: { title: '효빈광역시 광역버스 노선', link: '광역버스.html', color: '#485EC6', cols: 5, routes: ['1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000'] },
        seat: { title: '효빈광역시 좌석버스 노선', link: '좌석버스.html', color: '#FF5800', cols: 5, routes: ['1111', '2222', '3333', '4004', '5555', '6006', '7777', '8888', '9999'] },
        airport: { title: '효빈광역시 공항버스 노선', link: '공항버스.html', color: '#84C36E', cols: 3, routes: [{m:'A01',c:'공항버스'}, {m:'A02',c:'공항버스'}, {m:'A03',c:'공항버스'}] },
        tour: { title: '효빈광역시 시티투어 버스 노선', link: '시티투어버스.html', color: '#7777AA', cols: 5, routes: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9'] }
    };

    // --- 3. 테이블 생성 헬퍼 함수 ---
    function createTable(key, data) {
        const textColor = data.textColor || 'white';
        const textSizeClass = data.fontSize ? `style="font-size: ${data.fontSize}"` : '';
        const headerClass = data.textColor === 'black' ? 'hb-text-black' : '';
        const bodyId = `hb-bus-tbody-${key}`;
        
        let html = `
            <div class="hb-bus-wrapper">
                <table class="hb-bus-table">
                    <thead class="hb-bus-thead ${headerClass}">
                        <tr>
                            <th colspan="${data.cols}" style="background-color: ${data.color}; color: ${textColor};">
                                <div class="hb-bus-header-content">
                                    <img src="이미지/hyobin1.webp" class="hb-bus-logo" alt="로고" onerror="this.style.display='none'"/>
                                    <span class="hb-bus-title">
                                        <a href="${data.link}" style="color: ${textColor}; text-decoration: none;">
                                            ${data.title}
                                        </a>
                                    </span>
                                    <span class="hb-toggle-btn" data-target="${bodyId}">[접기]</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody id="${bodyId}" class="hb-bus-tbody" ${textSizeClass}>
        `;

        const rows = [];
        for (let i = 0; i < data.routes.length; i += data.cols) {
            rows.push(data.routes.slice(i, i + data.cols));
        }

        rows.forEach(row => {
            html += '<tr>';
            row.forEach(item => {
                let display, onclickCode, subText = '';
                if (typeof item === 'string') {
                    display = item; onclickCode = item;
                } else {
                    display = item.m; onclickCode = item.c;
                    if (item.s) subText = `<span class="hb-sub-text">${item.s}</span>`;
                }
                html += `<td><span class="hb-bus-link" onclick="handleSearchFromNav('${onclickCode}')">${display}${subText}</span></td>`;
            });
            const remaining = data.cols - row.length;
            if (remaining > 0) html += '<td colspan="' + remaining + '"></td>';
            html += '</tr>';
        });

        html += '</tbody></table></div>';
        return html;
    }

    // --- 4. HTML 조립 및 이벤트 연결 ---
    let fullHtml = '';
    const order = ['express', 'trunk', 'feeder', 'circular', 'village', 'intercity', 'seat', 'airport', 'tour'];
    order.forEach(key => { fullHtml += createTable(key, busData[key]); });
    container.innerHTML = fullHtml;

    // 접기/펼치기 이벤트 리스너 추가
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